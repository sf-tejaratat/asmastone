!function (e) {
    function t(t) {


        for (var i, r, s = t[0], l = t[1], u = t[2], h = 0, d = []; h < s.length; h++)
            r = s[h],
                a[r] && d.push(a[r][0]),
                a[r] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (c && c(t); d.length;)
            d.shift()();
        return o.push.apply(o, u || []),
            n()
    }
    function n() {

        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== a[l] && (i = !1)
            }
            i && (o.splice(t--, 1),
                e = r(r.s = n[0]))
        }
        return e
    }
    var i = {}
        , a = {
            0: 0
        }
        , o = [];
    function r(t) {

        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
    }
    r.m = e,
        r.c = i,
        r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        r.t = function (e, t) {
            if (1 & t && (e = r(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (r.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var i in e)
                    r.d(n, i, function (t) {
                        return e[t]
                    }
                        .bind(null, i));
            return n
        }
        ,
        r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return r.d(t, "a", t),
                t
        }
        ,
        r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "/assets/js/";
    var s = window.webpackJsonp = window.webpackJsonp || []
        , l = s.push.bind(s);
    s.push = t,
        s = s.slice();
    for (var u = 0; u < s.length; u++)
        t(s[u]);
    var c = l;
    o.push([105, 1]),
        n()
}([function (e, t, n) {
    "use strict";

    (function (e) {
        var n = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , i = function () {
                function t() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        this._list = [],
                        this._promiseList = []
                }
                return n(t, [{
                    key: "add",
                    value: function () {
                        var t = this
                            , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function (e) { }
                            ;
                        this._list.push(function () {
                            var i = new e(function (e) {
                                n(e)
                            }
                            );
                            return t._promiseList.push(i),
                                i
                        })
                    }
                }, {
                    key: "done",
                    value: function () {
                        var t = this
                            , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () { }
                            ;
                        this._list.reduce(function (e, t) {
                            return e.then(t)
                        }, e.resolve()).then(function () {
                            e.all(t._promiseList).then(n)
                        })
                    }
                }], [{
                    key: "wait",
                    value: function (t) {
                        return new e(function (e) {
                            setTimeout(function () {
                                e()
                            }, t)
                        }
                        )
                    }
                }]),
                    t
            }();
        t.a = i
    }
    ).call(this, n(4))
}
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(38)
                , a = n.n(i)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return o(t, null, [{
                        key: "Deferred",
                        value: function () {
                            return new function () {
                                this.resolve = null,
                                    this.reject = null,
                                    this.promise = new e(function (e, t) {
                                        this.resolve = e,
                                            this.reject = t
                                    }
                                        .bind(this))
                            }
                        }
                    }, {
                        key: "getCubicCurve",
                        value: function (e, t, n, i) {
                            return a.a.create("custom", "M0,0 C" + Number(e) + "," + Number(t) + " " + Number(n) + "," + Number(i) + " 1,1")
                        }
                    }, {
                        key: "hexToRgb",
                        value: function (e) {
                            return Color.hexToRgb(e)
                        }
                    }, {
                        key: "rgbToHex",
                        value: function (e, t, n) {
                            return Color.rgbToHex(e, t, n)
                        }
                    }, {
                        key: "zeroPadding",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                                , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                                , i = "";
                            return e = ("00" + e).slice(-t),
                                n ? (e = e.split("")).forEach(function (e, t) {
                                    i += '<span class="js-split p-split">' + e + "</span>"
                                }) : i = e,
                                i
                        }
                    }, {
                        key: "getTargetOffsetTop",
                        value: function (e) {
                            var t = e.getBoundingClientRect()
                                , n = window.pageYOffset || document.documentElement.scrollTop;
                            return t.top + n
                        }
                    }, {
                        key: "getTargetOffsetLeft",
                        value: function (e) {
                            if (e) {
                                var t = e.getBoundingClientRect()
                                    , n = window.pageXOffset || document.documentElement.scrollLeft;
                                return t.left + n
                            }
                        }
                    }, {
                        key: "getTargetOffsetCenterTop",
                        value: function (e, t) {
                            var n = e.getBoundingClientRect()
                                , i = n.height
                                , a = window.innerHeight
                                , o = t || window.pageYOffset || document.documentElement.scrollTop;
                            return a > i ? n.top + o - .5 * (a - i) : n.top + o + .5 * (i - a)
                        }
                    }, {
                        key: "clearTween",
                        value: function (e) {
                            e && (e.pause(),
                                e.kill(),
                                e = null)
                        }
                    }, {
                        key: "noScroll",
                        value: function () {
                            var e = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
                            window.addEventListener(e, function (e) {
                                e.preventDefault()
                            }, !1)
                        }
                    }, {
                        key: "returnScroll",
                        value: function () {
                            var e = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
                            window.removeEventListener(e, function (e) {
                                e.preventDefault()
                            }, !1)
                        }
                    }, {
                        key: "imageLoad",
                        value: function (t) {
                            return new e(function (e) {
                                var n = new Image;
                                n.src = t,
                                    n.onload = function () {
                                        e(n)
                                    }
                                    ,
                                    n.onerror = function () {
                                        e("")
                                    }
                            }
                            )
                        }
                    }, {
                        key: "triggerEvent",
                        value: function (e, t) {
                            if ("resize" === t && (PROJECT.resizeManager.canOnResize = !0),
                                document.createEvent) {
                                var n = document.createEvent("HTMLEvents");
                                return n.initEvent(t, !0, !0),
                                    e.dispatchEvent(n)
                            }
                            var i = document.createEventObject();
                            return e.fireEvent("on" + t, i)
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, null, [{
                    key: "clamp",
                    value: function (e, t, n) {
                        return Math.min(Math.max(e, t), n)
                    }
                }, {
                    key: "radToDeg",
                    value: function (e) {
                        return e / Math.PI * 180
                    }
                }, {
                    key: "digToRad",
                    value: function (e) {
                        return e * Math.PI / 180
                    }
                }, {
                    key: "followUp",
                    value: function (e, t, n) {
                        return e + (t - e) * n
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , function (e, t, n) {
        "use strict";
        var i = n(1);
        t.a = function e() {
            !function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
                this.easeInSine = i.a.getCubicCurve(.47, 0, .745, .715),
                this.easeInCubic = i.a.getCubicCurve(.55, .055, .675, .19),
                this.easeInQuint = i.a.getCubicCurve(.755, .05, .855, .06),
                this.easeInQuad = i.a.getCubicCurve(.55, .085, .68, .53),
                this.easeInQuart = i.a.getCubicCurve(.895, .03, .685, .22),
                this.easeInExpo = i.a.getCubicCurve(.95, .05, .795, .035),
                this.out = i.a.getCubicCurve(0, .6, .2, 1),
                this.out2 = i.a.getCubicCurve(.225, 1, .325, 1),
                this.out3 = i.a.getCubicCurve(.225, 1, .325, 1),
                this.outQuad = i.a.getCubicCurve(.25, .46, .45, .94),
                this.outQuart = i.a.getCubicCurve(.165, .84, .44, 1),
                this.outExpo = i.a.getCubicCurve(.2, 1, .25, 1),
                this.outBounce1 = i.a.getCubicCurve(.25, .9, .3, 1.25),
                this.inOut = i.a.getCubicCurve(.725, 0, .175, 1),
                this.inOut2 = i.a.getCubicCurve(.4, 0, .25, 1),
                this.inOut3 = i.a.getCubicCurve(.15, 0, .25, 1),
                this.inOutBq = i.a.getCubicCurve(.6, 0, .3, 1),
                this.inOutQuad = i.a.getCubicCurve(.455, .03, .515, .955),
                this.inOutQuart = i.a.getCubicCurve(.75, 0, .175, 1),
                this.inOutExpo = i.a.getCubicCurve(1, 0, 0, 1),
                this.linear = i.a.getCubicCurve(0, 0, 1, 1)
        }
    }
    , , , , , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(1)
                , o = n(3)
                , r = n(52)
                , s = n(53)
                , l = n(28)
                , u = n(54)
                , c = n(55)
                , h = n(56)
                , d = n(57)
                , g = n(58)
                , f = n(59)
                , p = n(25)
                , v = n(60)
                , m = n(11)
                , y = n.n(m)
                , w = n(26)
                , T = n(80)
                , C = n(82)
                , R = n(81)
                , M = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , S = function () {
                    function t(n) {
                        var m = this;
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.ease = new o.a,
                            this.content = n,
                            window.pageInitialized || (PROJECT.resizeHandler = [],
                                PROJECT.scrollHandler = [],
                                PROJECT.renderHandler = [],
                                PROJECT.mousePositionHandler = [],
                                this.langChangeManager = new r.a,
                                this.langChangeManager.startUpFunction = function () {
                                    return new e(function (e) {
                                        document.querySelector("html").classList.add("is-langChange"),
                                            PROJECT.screenFix.addNoKeyDown(),
                                            PROJECT.screenFix.addNoKeyUp(),
                                            PROJECT.screenFix.addNoWheel(),
                                            i.to("body,html", .7, {
                                                scrollTop: 0,
                                                ease: m.ease.inOutBq
                                            }),
                                            i.to(document.querySelector(".js-target--langContent"), .7, {
                                                opacity: 0,
                                                onComplete: e
                                            })
                                    }
                                    )
                                }
                                ,
                                this.langChangeManager.onCompleteFunction = function () {
                                    return new e(function (e) {
                                        a.a.triggerEvent(window, "resize"),
                                            i.to(document.querySelector(".js-target--langContent"), .7, {
                                                ease: m.ease.inOut2,
                                                delay: .1,
                                                opacity: 1,
                                                onComplete: function () {
                                                    document.querySelector("html").classList.remove("is-langChange"),
                                                        PROJECT.screenFix.clearFix(),
                                                        a.a.triggerEvent(window, "resize"),
                                                        e()
                                                }
                                            })
                                    }
                                    )
                                }
                                ,
                                this.hoverManager = new p.a(document.querySelector(".js-header")),
                                this.hoverManager.run(),
                                this.hoverManager2 = new p.a(document.querySelector("#side-contact")),
                                this.hoverManager2.run(),
                                PROJECT.scrollManager = new s.a,
                                PROJECT.resizeManager = new l.a,
                                PROJECT.renderMangaer = new u.a,
                                PROJECT.mousePositionManager = new d.a,
                                PROJECT.smoothScrollManager = MOBILE || TABLET ? new h.a : new c.a,
                                PROJECT.headerManager = new g.a,
                                PROJECT.resizeManager.resizeHandler = PROJECT.resizeHandler,
                                PROJECT.scrollManager.scrollHandler = PROJECT.scrollHandler,
                                PROJECT.renderMangaer.renderHandler = PROJECT.renderHandler,
                                PROJECT.mousePositionManager.mousePositionHandler = PROJECT.mousePositionHandler,
                                PROJECT.springManagerInit = function () {
                                    MOBILE || TABLET || (PROJECT.springManagers = new v.a,
                                        PROJECT.springManagers.run(),
                                        PROJECT.resizeHandler.push(function (e, t, n, i) {
                                            PROJECT.springManagers.onResize()
                                        }),
                                        PROJECT.renderHandler.push(function (e) {
                                            PROJECT.springManagers.onUpdate()
                                        }),
                                        PROJECT.mousePositionHandler.push(function (e) {
                                            PROJECT.springManagers.onMouseMove(e)
                                        }))
                                }
                                ,
                                this.startUpFunction = function () { }
                            ),
                            this.stringTrimmer = new f.a,
                            this.contentHoverManager = ""
                    }
                    return M(t, [{
                        key: "viewWillAppear",
                        value: function () {
                            window.pageInitialized || (this.langChangeManager.run(),
                                PROJECT.resizeManager.run(),
                                PROJECT.scrollManager.run(),
                                PROJECT.renderMangaer.run(),
                                PROJECT.mousePositionManager.run(),
                                PROJECT.resizeHandler.push(function (e, n, i, a) {
                                    PROJECT.smoothScrollManager.onResize(e),
                                        PROJECT.mousePositionManager.onResize(n, i),
                                        t.onResizeWorksPage()
                                }),
                                PROJECT.scrollHandler.push(function (e) {
                                    PROJECT.smoothScrollManager.onScroll(e)
                                }),
                                PROJECT.renderHandler.push(function (e) {
                                    PROJECT.smoothScrollManager.onUpdate(e),
                                        PROJECT.mousePositionManager.onUpdate()
                                }),
                                PROJECT.smoothScrollManager.run(),
                                t.setWorksList(),
                                document.querySelector("#app-canvas") && (y.a.use(w.a),
                                    new y.a({
                                        el: "#app-canvas",
                                        components: {
                                            Stage: T.a
                                        },
                                        template: "<Stage></Stage>"
                                    })),
                                !document.querySelector("#app-indicator") || MOBILE || TABLET || (y.a.use(w.a),
                                    new y.a({
                                        el: "#app-indicator",
                                        components: {
                                            Indicator: C.a
                                        },
                                        template: "<Indicator></Indicator>"
                                    })),
                                !document.querySelector("#app-mousePointer") || MOBILE || TABLET || IE || (y.a.use(w.a),
                                    new y.a({
                                        el: "#app-mousePointer",
                                        components: {
                                            MousePointer: R.a
                                        },
                                        template: "<MousePointer></MousePointer>"
                                    })),
                                this.startUpFunction = PROJECT.othersPageStartUp,
                                (MOBILE || TABLET) && l.a.resize()),
                                PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren = [],
                                PROJECT.mousePositionManager.setNodeListContentChildren(this.content, PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren),
                                this.contentHoverManager = new p.a(this.content),
                                this.contentHoverManager.run(),
                                a.a.triggerEvent(window, "resize")
                        }
                    }, {
                        key: "viewDidAppear",
                        value: function () {
                            PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeContentChildren),
                                a.a.triggerEvent(window, "resize"),
                                a.a.triggerEvent(window, "scroll")
                        }
                    }, {
                        key: "viewWillDisappear",
                        value: function () { }
                    }, {
                        key: "viewDidDisappear",
                        value: function () { }
                    }], [{
                        key: "setWorksList",
                        value: function () {
                            var e = document.querySelectorAll(".js-canvas__target");
                            PROJECT.worksTitleList = [],
                                PROJECT.worksThumbList = [],
                                PROJECT.worksZoomList = [],
                                PROJECT.worksUrlList = [];
                            for (var t = 0; t < e.length; t++)
                                PROJECT.worksThumbList[t] = 0 === t ? e[t].getAttribute("data-canvas-zoom") : e[t].getAttribute("data-canvas-thumb"),
                                    PROJECT.worksTitleList[t] = e[t].innerHTML,
                                    PROJECT.worksZoomList[t] = e[t].getAttribute("data-canvas-zoom"),
                                    PROJECT.worksUrlList[t] = e[t].getAttribute("data-canvas-url")
                        }
                    }, {
                        key: "onResizeWorksPage",
                        value: function () {
                            for (var e = document.querySelectorAll(".p-works__text"), t = document.querySelectorAll(".p-works__thumb"), n = 0; n < e.length; n++) {
                                var i = Math.round(.5 * t[n].getBoundingClientRect().width);
                                e[n].querySelector(".js-target--parallax").setAttribute("data-parallax-move-range-y", i),
                                    e[n].style["margin-top"] = i + 10 + "px"
                            }
                        }
                    }]),
                        t
                }();
            t.a = S
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(13)
                , o = n.n(a)
                , r = n(18)
                , s = n.n(r)
                , l = n(0)
                , u = n(19)
                , c = n(36)
                , h = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , d = function () {
                    function t(e, n, i) {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.controllerManager = new u.a(n),
                            this.prefetch = new c.a,
                            this._processQueue = [],
                            this.isRunning = !1,
                            this.useAjax = i,
                            this.debug = !1,
                            this._requests = [],
                            this._prev = null,
                            this._fx = e,
                            this.pageInitialized = !1,
                            this.hashChange = !1

                    }
                    return h(t, [{
                        key: "boot",
                        value: function () {
                            var e = this;
                            this.prefetch.init(),
                                "not-found" === document.querySelector(".page-content").getAttribute("id") && (this.useAjax = !1),
                                this.useAjax ? (history.scrollRestoration = "manual",
                                    o.a.exit("*", function (t, n) {
                                        PROJECT.addTransition(!0),
                                            e._pageExit(t, n)
                                    }),
                                    o()("*", function (t) {
                                        e._pageEnter(t)
                                    }),
                                    o()()) : this._safeBoot()
                        }
                    }, {
                        key: "_safeBoot",
                        value: function () {
                            var e = this
                                , t = new l.a;
                            t.add(this._fx["none --\x3e none"](null, null, null, null, this.controllerManager, function () {
                                e.pageInitialized = !0,
                                    e.controllerManager.use("current").viewDidAppear()
                            })),
                                t.done(function () { })
                        }
                    }, {
                        key: "_apply",
                        value: function (t, n, i, a) {
                            var o = t + " --\x3e *"
                                , r = t + " --\x3e " + n
                                , s = "* --\x3e " + n
                                , u = "* --\x3e *"
                                , c = new l.a
                                , h = this;
                            return new e(function (e) {
                                [r, o, s, u].some(function (e, o) {
                                    if (e in h._fx)
                                        return h.debug && (console.log("%c" + e, "color: #03A9F4;"),
                                            console.group("%cViewController", "color: #00C853;")),
                                            c.add(function (o) {
                                                h._fx[e](t, n, i, a, h.controllerManager, o)()
                                            }),
                                            !0
                                }),
                                    c.done(function (t) {
                                        e(t),
                                            h.debug
                                    })
                            }
                            )
                        }
                    }, {
                        key: "_pageEnter",
                        value: function (e) {
                            var t = this;
                            !0 !== e.cancel && (this.debug && (console.group("%c         app         ", "color: #B3E5FC;background-color: #03A9F4;"),
                                console.log("%cpage enter", "color: #03A9F4;")),
                                e.init ? this._apply("none", "none", null, null).then(function () {
                                    t.pageInitialized = !0,
                                        t.controllerManager.use("current").viewDidAppear(),
                                        t._processQueue.length && t.run()
                                }) : (this._addRequestQueue({
                                    from: this._prev,
                                    to: e
                                }),
                                    this._processQueue.length < 2 ? this._processQueue.push(this._pageChange.bind(this, this, e)) : this._processQueue[this._processQueue.length - 1] = this._pageChange.bind(this, this, e),
                                    this.pageInitialized && this.run()))
                        }
                    }, {
                        key: "run",
                        value: function () {
                            var e = this;
                            this.isRunning || (this.isRunning = !0,
                                this._processQueue[0]().then(function () {
                                    e._processQueue.shift(),
                                        e.isRunning = !1,
                                        e._processQueue.length && e.run()
                                }))
                        }
                    }, {
                        key: "_pageExit",
                        value: function (e, t) {
                            if (!this.hashChange && ("" === e.hash || 0 !== e.hash.length)) {
                                if (this._prev = e,
                                    !this.pageInitialized)
                                    return t();
                                if (!0 === e.cancelExit)
                                    return t();
                                this.controllerManager.use("current").viewWillDisappear(),
                                    this.debug && (console.groupEnd("ViewController"),
                                        console.log("%cpage exit", "color: #03A9F4;"),
                                        console.groupEnd("app")),
                                    t()
                            }
                        }
                    }, {
                        key: "_pageChange",
                        value: function (t, n) {
                            var a = this
                                , o = t._getRequestQueue();
                            return new e(function (n) {
                                if (!1 === o)
                                    return n();
                                o.to.fromChildPage || o.to.toChildPage;
                                var r = o.to.path;

                                r.match(location.origin) || (r = location.origin + r);
                                var l = a.prefetch.getCache(r)
                                    , u = "";
                                l && l._result ? l.then(function (e) {
                                    u = e.data,
                                        Array.isArray(u) && (u = e[0]),
                                        t._showPage(u, o).then(n),
                                        t._current = o.to

                                }) : a.prefetch.setCache(r, new e(function (e) {
                                    s.a.get(o.to.path).then(function (i) {
                                        u = i.data,
                                            Array.isArray(u) && (u = i[0]),
                                            t._showPage(u, o).then(n),
                                            t._current = o.to,

                                            e(i)
                                    }).catch(function (e) {
                                        i.to(document.body, .7, {
                                            opacity: 0,
                                            onComplete: function () {
                                                location.reload()
                                            }
                                        })
                                    })
                                }
                                ))
                            }
                            )
                        }
                    }, {
                        key: "_showPage",
                        value: function (n, i) {
                            var a = this
                                , o = t._purseHTML(n)
                                , r = n.match(/<title>(.*)<\/title>/)
                                , s = document.querySelector(".page-content").getAttribute("id")
                                , l = o.querySelector(".page-content").getAttribute("id");
                            return new e(function (e) {
                                r = o.querySelector("title").textContent ? o.querySelector("title").textContent : document.querySelector("title").textContent,
                                    a._apply(s, l, o, i).then(function () {
                                        document.querySelector("title").textContent = r,
                                            PROJECT.addTransition(!1),
                                            a.controllerManager.use("current").viewDidAppear(),
                                            e()
                                    })
                            }
                            )
                        }
                    }, {
                        key: "_getRequestQueue",
                        value: function () {
                            var e = this._requests;
                            if (0 === e.length)
                                return !1;
                            var t = e[e.length - 1];
                            return this._requests = [],
                                t
                        }
                    }, {
                        key: "_addRequestQueue",
                        value: function (e) {
                            this._requests[this._requests.length] = e
                        }
                    }], [{
                        key: "triggerPageTransition",
                        value: function (e) {
                            o()(e)
                        }
                    }, {
                        key: "_purseHTML",
                        value: function (e) {
                            var t = document.createElement("div");
                            return t.innerHTML = e,
                                t
                        }
                    }, {
                        key: "_setNavActive",
                        value: function (e) { }
                    }]),
                        t
                }();
            t.a = d
        }
        ).call(this, n(4), n(5))
    }
    , , , , , , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(62)
                , o = n.n(a)
                , r = n(1)
                , s = n(2)
                , l = n(63)
                , u = n(0)
                , c = n(9)
                , h = n(64)
                , d = n(74)
                , g = n(75)
                , f = n(76);
            window.PROJECT = window.PROJECT || {},
                PROJECT.onStartUp = PROJECT.onStartUp || new u.a;
            var p = new l.a
                , v = 1 / Math.PI
                , m = 2 * Math.PI
                , y = 1 / m
                , w = -.5 * Math.PI
                , T = Math.PI / 180;
            t.a = {
                name: "Stage",
                data: function () {
                    return {
                        canUpdate: !1,
                        canDrag: !1,
                        canClick: !1,
                        canUpdateOnWheel: !1,
                        canAutoPlay: !1,
                        canDrawFront: !1,
                        canMouseLeaveEffect: !0,
                        canUpdateMouseMove: !1,
                        isCompletedOnOpeningAnimation: !1,
                        isShowTitleTransition: !1,
                        isTransition: !1,
                        transitionTitle: PROJECT.worksTitleList[0],
                        titleScaleSize: 1,
                        titleFontSize: 0,
                        dashArray: 0,
                        dashArrayBack: 0,
                        dashArrayWorks: 0,
                        dashArrayColor: "#fff",
                        indicatorOffset: [],
                        nowSt: 0,
                        isShowPieBack: !1,
                        isDevelop: !1,
                        isAutoPlay: !0,
                        isCompletedDashArrayBackAnimation: !1,
                        isShowRoll: !0,
                        isOnEnterWorksList: !1,
                        isOnLeaveWorksList: !1,
                        isAnimatingOnEnterWorksList: !1,
                        mouseEnterWorksListCurrent: 0,
                        slideLength: 0,
                        slideLengthRatio: 0,
                        slideState: {
                            prev: 0,
                            current: 0,
                            next: 1
                        },
                        slideNumState: {
                            prev: 0,
                            current: 0,
                            next: 1
                        },
                        slideTask: [],
                        slideImage: PROJECT.worksThumbList,
                        slideImageFull: PROJECT.worksZoomList,
                        slideTitle: PROJECT.worksTitleList,
                        slideUrl: PROJECT.worksUrlList,
                        slideYear: [],
                        isMouseDowning: !1,
                        isMouseDownEventing: !1,
                        isMouseWheeling: !1,
                        isClickEventing: !1,
                        isSliding: !1,
                        isTimerEventing: !1,
                        mouseNow: {
                            x: 0,
                            y: 0
                        },
                        mousePos: {
                            x: 0,
                            y: 0
                        },
                        radian: w,
                        isInitCompleted: !1,
                        difference: 0,
                        force: 0,
                        slideForce: 0,
                        slideForceRatio: 0,
                        taskMaxLength: 2,
                        rollElementHeight: 0,
                        rollNumberElementHeight: 0,
                        rollY: 0,
                        rollNumberY: 0,
                        rollOpacityRatio: 0,
                        rollOpacityNextRatio: 0,
                        wheelProgressPower: 0,
                        wheelPosY: 0,
                        progress: 0,
                        currentProgress: 0,
                        arcEndPointValue: 0,
                        windowInnerWidth: 0,
                        windowInnerHeight: 0,
                        windowInnerWidthRatio: 0,
                        windowInnerHeightRatio: 0,
                        contentHeightRatio: 0,
                        titleScaleRatio: 1,
                        current: 0,
                        lineWidth: 0,
                        controllerWidth: 80,
                        pieStateCounter: 0,
                        dashOffset: 0,
                        dashArrayAll: 0,
                        dashOffsetAll: 0,
                        timerValue: 0,
                        toggleWrapper: "",
                        toggle: "",
                        timer: "",
                        pieSize: 0,
                        toggleSize: 0,
                        toggleWrapperSize: 0,
                        toggleWrapperSizePI: 0,
                        toggleInnerSize: 0,
                        togglePointSize: 0,
                        toggleRadian: 0,
                        togglePos: {
                            x: 0,
                            y: 0
                        },
                        zoomInRotationValue: 0,
                        canvasInfoOpacity: 1,
                        tweenSlide: null,
                        tweenArc: null,
                        tweenToggle: null,
                        tweenToggleWrapper: null,
                        tweenMouseMove: null,
                        tweenTimer: null,
                        pieSizeRatio: PROJECT.isMobileSize ? 1.97 : 1,
                        strokeWidth: 1
                    }
                },
                methods: {
                    onInitIndex: function () {
                        var e = this;
                        this.isInitCompleted = !0,
                            this.stopUpdate2dCanvas(),
                            this.setOnEventFlag(!0),
                            this.canUpdate = !0,
                            this.$nextTick(function () {
                                e.setMouseSpringEvent(),
                                    e.setMouseWheelEvent(),
                                    PROJECT.renderHandler.push(function (t) {
                                        PROJECT.mouseSpringManager.onUpdate(t),
                                            e.onUpdateStage(t)
                                    }),
                                    PROJECT.readyPageTransitionFromTopOfCanvas = function (t, n, i) {
                                        return e.readyPageTransitionFromTop(t, n, i)
                                    }
                                    ,
                                    PROJECT.scrollRecognizeManager.canPrevent = !1,
                                    PROJECT.scrollRecognizeManager.canWheel = !1
                            })
                    },
                    initProgress: function () {
                        this.timer = document.querySelector(".js-timer"),
                            this.canAutoPlay = this.isAutoPlay,
                            this.runProgress()
                    },
                    setKeyTypeEvent: function () {
                        var e = this;
                        window.addEventListener("keydown", function (t) {
                            var n = null;
                            t.keyCode ? n = event.keyCode : t.which && (n = event.which),
                                37 === n && e.onClickController(-1),
                                39 === n && e.onClickController(1)
                        })
                    },
                    setMouseWheelEvent: function () {
                        var e = this;
                        PROJECT.scrollRecognizeManager = new d.a({
                            wheelRatio: 1,
                            dragRatio: 50
                        }),
                            PROJECT.scrollRecognizeManager.behavior = function (t, n, i) {
                                e.onMouseWheel(t, n, i)
                            }
                            ,
                            PROJECT.scrollRecognizeManager.run(),
                            this.canUpdateOnWheel = !0
                    },
                    setMouseSpringEvent: function () {
                        this.toggle = document.querySelector(".js-toggle"),
                            PROJECT.mouseSpringManager = new g.a,
                            PROJECT.mouseSpringManager.setup()
                    },
                    setOnEventFlag: function (e) {
                        this.canDrag = e,
                            this.canClick = e,
                            this.canUpdateOnWheel = e
                    },
                    stopUpdate2dCanvas: function () {
                        PROJECT.glManager.frontRawShaderMesh.canNeedsUpdateFrontPie = !1,
                            PROJECT.glManager.backRawShaderMesh.canNeedsUpdateBackPie = !1,
                            PROJECT.glManager.frontPie.canDraw = !1,
                            PROJECT.glManager.backPie.canDraw = !1
                    },
                    disableCanvasEvent: function () {
                        PROJECT.scrollRecognizeManager.canPrevent = !1,
                            PROJECT.scrollRecognizeManager.canWheel = !1,
                            this.setOnEventFlag(!1)
                    },
                    stop: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.setOnEventFlag(!1),
                            this.canUpdate = !1,
                            PROJECT.scrollRecognizeManager && (PROJECT.scrollRecognizeManager.canPrevent = !1,
                                PROJECT.scrollRecognizeManager.canWheel = !1,
                                PROJECT.scrollRecognizeManager.speed = 0),
                            e && (this.force = 0,
                                this.resetProgress(0, !1)),
                            setTimeout(this.canAutoPlay = !1, 10)
                    },
                    reStart: function () {
                        this.force = -this.slideNumState.current,
                            this.canUpdate = !0,
                            PROJECT.scrollRecognizeManager.canPrevent = !0,
                            PROJECT.scrollRecognizeManager.canWheel = !0,
                            this.setOnEventFlag(!0),
                            this.canAutoPlay = !0,
                            this.runProgress(),
                            PROJECT.glManager.setTexture(this.slideNumState)
                    },
                    reSet: function () {
                        PROJECT.glManager.canUpdate = !0,
                            this.force = -this.slideNumState.current,
                            this.current = (Math.floor(-this.force % this.slideLength) + this.slideLength) % this.slideLength,
                            this.setSlideState(this.slideNumState, this.current),
                            this.setSlideState(this.slideState, this.current),
                            PROJECT.glManager.setTexture(this.slideNumState),
                            this.progress = (-this.force % this.slideLength + this.slideLength) % this.slideLength,
                            this.currentProgress = this.progress - this.slideNumState.current,
                            this.onUpdateRoll(),
                            this.onUpdateGLValue()
                    },
                    refresh: function () {
                        var t = this;
                        return PROJECT.glManager.canUpdate = !0,
                            this.canUpdate = !0,
                            PROJECT.scrollRecognizeManager.speed = 0,
                            this.force = Math.round(this.force),
                            this.difference = 0,
                            new e(function (e) {
                                setTimeout(function () {
                                    PROJECT.glManager.canUpdate = !1,
                                        t.canUpdate = !1,
                                        e()
                                }, 100)
                            }
                            )
                    },
                    readyPageTransitionFromTop: function (t, n, a) {
                        var o = this;
                        return new e(function (e) {
                            var n, r, s = void 0, l = void 0;
                            if (o.isTransition = !0,
                                s = !1,
                                l = .4,
                                n = Math.round(o.progress),
                                r = Math.round(o.currentProgress),
                                o.progress === n === 0)
                                return o.nextPageImageLoaded(t, e);
                            i.to(o, .7, {
                                ease: p.inOut,
                                rollY: -r * o.rollElementHeight,
                                rollNumberY: -r * o.rollNumberElementHeight,
                                rollOpacityRatio: Math.max(0, 1 - 4 * r),
                                rollOpacityNextRatio: Math.max(0, r),
                                dashOffset: -o.toggleWrapperSizePI,
                                dashArray: 0,
                                onComplete: function () {
                                    o.dashOffset = o.toggleWrapperSizePI,
                                        o.dashArray = o.toggleWrapperSizePI,
                                        o.isTransition = !1,
                                        o.canUpdate = !1,
                                        1 === r ? (o.setSlideState(o.slideNumState, (n - 1) % o.slideLength),
                                            o.setSlideState(o.slideState, (n - 1) % o.slideLength),
                                            o.currentProgress = 0,
                                            PROJECT.glManager.setTexture({
                                                current: (n - 1) % o.slideLength,
                                                next: n % o.slideLength
                                            }),
                                            o.onUpdateGLValue(),
                                            o.transitionNumber = o.slideNumState.next + 1,
                                            o.transitionYear = o.slideYear[o.slideNumState.next],
                                            o.transitionTitle = o.slideTitle[o.slideNumState.next],
                                            o.slideNumState.current = o.slideNumState.next) : (o.transitionNumber = o.slideNumState.current + 1,
                                                o.transitionYear = o.slideYear[o.slideNumState.current],
                                                o.transitionTitle = o.slideTitle[o.slideNumState.current]),
                                        "works-detail" === a && (o.isShowTitleTransition = !0),
                                        "works" === a && (s = !0),
                                        "about" === a && (l = 0),
                                        o.nextPageImageLoaded(t, e, s, l)
                                }
                            }),
                                i.to(o, .7, {
                                    ease: p.inOutQuad,
                                    currentProgress: r,
                                    onUpdate: function () {
                                        o.onUpdateGLValue()
                                    }
                                })
                        }
                        )
                    },
                    nextPageImageLoaded: function (e, t) {
                        var n = this
                            , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .4;
                        this.canUpdate = !1;
                        var r = new f.a(e);
                        r.onUpdateFunction = function (e) {
                            n.dashOffset = n.toggleWrapperSizePI - n.toggleWrapperSizePI * e,
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio - .13 * e,
                                PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio - .13 * e
                        }
                            ,
                            r.onCompleteFunction = function () {
                                n.titleScaleRatio = 1,
                                    n.canMouseLeaveEffect = !0,
                                    n.dashOffset = Math.ceil(n.dashOffset),
                                    a || i.to(document.querySelectorAll(".p-pie__circle.back")[0], o, {
                                        ease: p.linear,
                                        opacity: 0,
                                        onComplete: function () {
                                            n.isShowPieBack = !1,
                                                document.querySelectorAll(".p-pie__circle.back")[0].style.opacity = ""
                                        }
                                    }),
                                    t()
                            }
                            ,
                            r.init()
                    },
                    setTransitionToWorksDetail: function (e, t) {
                        t.preventDefault(),
                            this.isTransition = !0,
                            this.tweenTimer.pause();
                        var n = Math.round(this.progress) % this.slideLength;
                        PROJECT.pageTransitionState.topToWorksDetail = 1,
                            c.a.triggerPageTransition(this.slideUrl[n])
                        // alert('s');
                    },
                    getMousePos: function (e) {
                        return {
                            x: (2 * e.clientX - this.windowInnerWidth) * this.windowInnerHeightRatio,
                            y: (2 * e.clientY - this.windowInnerHeight) * this.windowInnerHeightRatio
                        }
                    },
                    onMouseEnterSlideTitle: function () {
                        var e = this;
                        MOBILE || TABLET || (i.to(this, 1, {
                            ease: r.a.getCubicCurve(.45, 0, 0, 1),
                            titleScaleRatio: 1.06,
                            onUpdate: function () {
                                e.titleScaleSize = e.titleScaleRatio
                            }
                        }),
                            i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale, 1, {
                                ease: r.a.getCubicCurve(.45, 0, 0, 1),
                                value: .2
                            }),
                            i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale, 1, {
                                ease: r.a.getCubicCurve(.45, 0, 0, 1),
                                value: .1
                            }))
                    },
                    onMouseLeaveSlideTitle: function () {
                        var e = this;
                        !this.canMouseLeaveEffect || MOBILE || TABLET || (i.to(this, .7, {
                            ease: p.outQuad,
                            titleScaleRatio: 1,
                            onUpdate: function () {
                                e.titleScaleSize = e.titleScaleRatio
                            }
                        }),
                            i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale, .7, {
                                delay: .1,
                                ease: p.outQuad,
                                value: 0
                            }),
                            i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale, .7, {
                                delay: .2,
                                ease: p.outQuad,
                                value: 0
                            }))
                    },
                    getSlideDirection: function (e, t) {
                        return t.length || (t = this.slideState.current > e ? "prev" : "next",
                            0 === this.slideState.current && e === this.slideLength - 1 && (t = "prev"),
                            this.slideState.current === this.slideLength - 1 && 0 === e && (t = "next")),
                            t
                    },
                    onMouseWheel: function () {
                        this.isTimerEventing && this.resetProgress(1.4, !1)
                    },
                    onUpdateMouseWheel: function () {
                        if (this.canUpdateOnWheel) {
                            MOBILE && TABLET && (PROJECT.scrollRecognizeManager.speed = s.a.clamp(PROJECT.scrollRecognizeManager.speed, -.055, .055)),
                                this.force += PROJECT.scrollRecognizeManager.speed,
                                this.force %= this.slideLength,
                                PROJECT.scrollRecognizeManager.speed *= .9375;
                            var e = Math.round(this.force);
                            this.difference = e - this.force;
                            var t;
                            t = this.isTransition ? .05 : .025,
                                this.force += this.difference * t,
                                Math.abs(e - this.force) < 75e-5 && (this.force = e)
                        }
                    },
                    onUpdateDashArray: function () {
                        r.a.clearTween(this.tweenArc),
                            this.tweenArc = i.to(this, .1, {
                                dashOffset: this.toggleWrapperSizePI - this.toggleWrapperSizePI * this.progress * this.slideLengthRatio
                            })
                    },
                    onUpdateToggle: function () {
                        this.toggleRadian = this.progress * this.slideLengthRatio * 360 * T,
                            this.togglePos = {
                                x: Math.sin(this.toggleRadian) * this.pieSize,
                                y: -Math.cos(this.toggleRadian) * this.pieSize
                            },
                            r.a.clearTween(this.tweenToggle),
                            this.tweenToggle = i.to(this.toggle, .1, {
                                force3D: !0,
                                x: .5 * this.togglePos.x,
                                y: .5 * this.togglePos.y
                            })
                    },
                    onUpdateRoll: function () {
                        this.rollY = -this.currentProgress * this.rollElementHeight,
                            this.rollNumberY = -this.currentProgress * this.rollNumberElementHeight,
                            this.rollOpacityRatio = Math.max(0, 1 - 4 * this.currentProgress),
                            this.rollOpacityNextRatio = Math.max(0, this.currentProgress)
                    },
                    onUpdateStage: function (e) {
                        this.canUpdate && (this.current = (Math.floor(-this.force % this.slideLength) + this.slideLength) % this.slideLength,
                            this.canDrawFront = this.progress !== this.current,
                            this.isMouseWheeling = this.progress !== this.current,
                            this.setSlideState(this.slideNumState, this.current),
                            this.setSlideState(this.slideState, this.current),
                            PROJECT.glManager.setTexture(this.slideNumState),
                            this.progress = (-this.force % this.slideLength + this.slideLength) % this.slideLength,
                            this.currentProgress = this.progress - this.slideNumState.current,
                            this.onUpdateDashArray(),
                            this.onUpdateToggle(),
                            this.onUpdateRoll(),
                            this.onUpdateGLValue(),
                            this.onUpdateMouseWheel(e),
                            this.onUpdateMouseMove(e))
                    },
                    onUpdateGLValue: function () {
                        PROJECT.glManager.backRawShaderMesh.uniforms.uNextMaskXRatio.value = this.calcMaskRatio(-this.currentProgress),
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uNextScaleRatio.value = this.calcScaleRatio(this.currentProgress),
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value = this.calcScaleRatio(1 - this.currentProgress),
                            PROJECT.glManager.backRawShaderMesh.uniforms.uNextScaleRatio.value = this.calcScaleRatio(this.currentProgress),
                            PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value = this.calcScaleRatio(1 - this.currentProgress),
                            MOBILE || TABLET || (PROJECT.glManager.frontRawShaderMesh.uniforms.uNoiseNextRatio.value = .02 * (1 - Math.abs(2 * (this.currentProgress - .5)))),
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uUvCurrentTranslateRatio.value = .18 * this.currentProgress,
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uUvNextTranslateRatio.value = this.calcTranslateRatio(.18, this.currentProgress, -1),
                            PROJECT.glManager.backRawShaderMesh.uniforms.uUvCurrentTranslateRatio.value = .12 * this.currentProgress,
                            PROJECT.glManager.backRawShaderMesh.uniforms.uUvNextTranslateRatio.value = this.calcTranslateRatio(.12, this.currentProgress, -1),
                            PROJECT.glManager.frontNextPie.arcEndPointValue = m * Math.max(0, this.currentProgress) + w,
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uNextPieMapRatio.value = Math.max(0, this.currentProgress),
                            PROJECT.glManager.frontRawShaderMesh.uniforms.uNextPieEdgeRatio.value = this.currentProgress
                    },
                    onTransitionSlide: function (t) {
                        var n = this
                            , a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new e(function (e) {
                            n.slideForce = Math.round(n.force) - t,
                                (a && Math.abs(n.force) > n.slideLength || Math.abs(n.force) > n.slideLength - 1) && (n.slideForce %= n.slideLength),
                                r.a.clearTween(n.tweenSlide),
                                n.slideForceRatio = 1 - Math.abs(n.force - n.slideForce),
                                n.tweenSlide = i.to(n, 1.4 - 1.4 * n.slideForceRatio * .5, {
                                    ease: p.inOut,
                                    force: n.slideForce,
                                    onComplete: e
                                }),
                                u.a.wait(1500).then(e)
                        }
                        )
                    },
                    onClickController: function (e) {
                        var t = this;
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            this.canClick && this.postTask(this.onTransitionSlide.bind(this, e), function () {
                                t.isClickEventing = !0
                            }, function () {
                                t.isClickEventing = !1
                            })
                    },
                    postTask: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () { }
                            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }
                            ;
                        this.slideTask.length < this.taskMaxLength ? this.slideTask.push(e) : this.slideTask.push[this.slideTask.length - 1] = e,
                            this.isSliding || this.startTask(t, n)
                    },
                    startTask: function (e, t) {
                        var n = this;
                        this.isSliding = !0,
                            e(),
                            this.slideTask[0]().then(function () {
                                n.isSliding = !1,
                                    t(),
                                    n.slideTask.shift(),
                                    n.slideTask.length && n.startTask(e, t)
                            })
                    },
                    onMouseDown: function (e) {
                        e.preventDefault(),
                            this.canDrag && (PROJECT.mousePointer && PROJECT.mousePointer.hidePointer(),
                                this.isMouseDowning = !0,
                                this.isMouseDownEventing = !0,
                                this.zoomRotationBackGround(),
                                this.onMouseMove(e, .3))
                    },
                    onMouseUp: function (e) {
                        var t = this;
                        e.preventDefault(),
                            this.isMouseDowning && (PROJECT.mousePointer && PROJECT.mousePointer.showPointer(),
                                this.isMouseDowning = !1,
                                this.zoomRotationBackGround(!1, !1, 1.2),
                                setTimeout(function () {
                                    t.postTask(t.onTransitionSlide.bind(t, 0, !0), function () {
                                        t.isMouseDownEventing = !0
                                    }, function () {
                                        PROJECT.mouseSpringManager.canUpdate = !0,
                                            t.isMouseDownEventing = !1
                                    })
                                }, 0))
                    },
                    onMouseMove: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        e.preventDefault(),
                            this.canUpdateMouseMove = !0,
                            this.mouseNow = this.getMousePos(e),
                            this.mouseMoveDuration = t,
                            this.isMouseDowning && (PROJECT.mouseSpringManager.canUpdate = !1,
                                this.isMouseDownEventing = !0)
                    },
                    onUpdateMouseMove: function () {
                        this.canUpdateMouseMove && (Math.abs(this.mousePos.x - this.mouseNow.x) < .001 && Math.abs(this.mousePos.y - this.mouseNow.y) < .001 && (this.canUpdateMouseMove = !1),
                            this.mousePos.x = s.a.followUp(this.mousePos.x, this.mouseNow.x, .085),
                            this.mousePos.y = s.a.followUp(this.mousePos.y, this.mouseNow.y, .085),
                            this.radian = Math.atan2(this.mousePos.y, this.mousePos.x),
                            this.radian < w && (this.radian = Math.PI + (1 - Math.abs(this.radian) * v) * Math.PI),
                            this.isMouseDowning && (r.a.clearTween(this.tweenMouseMove),
                                0 === this.force ? this.mouseNow.x < 0 ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: this.slideLength - (this.radian * y + .25) * this.slideLength
                                }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: -(this.radian * y + .25) * this.slideLength
                                }) : this.force < 0 ? Math.sign(this.force) === Math.sign(this.mouseNow.x) && (Math.abs(this.progress) < 1 || Math.abs(this.progress) > this.slideLength - 2) ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: this.slideLength - (this.radian * y + .25) * this.slideLength
                                }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: -(this.radian * y + .25) * this.slideLength
                                }) : Math.sign(this.force) === Math.sign(this.mouseNow.x) && (Math.abs(this.progress) < 1 || Math.abs(this.progress) > this.slideLength - 2) ? this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: -(this.radian * y + .25) * this.slideLength
                                }) : this.tweenMouseMove = i.to(this, this.mouseMoveDuration || 0, {
                                    force: this.slideLength - (this.radian * y + .25) * this.slideLength
                                })))
                    },
                    runProgress: function () {
                        var e = this;
                        this.isAutoPlay && this.canAutoPlay && this.timer && (this.tweenTimer && (this.tweenTimer.pause(),
                            r.a.clearTween(this.tweenTimer)),
                            this.tweenTimer = i.to(this, 2.5, {
                                ease: p.linear,
                                timerValue: 1,
                                onUpdate: function () {
                                    e.timer.style.transform = "translate3d(0,0,0) scaleX(" + e.timerValue + ")"
                                },
                                onComplete: function () {
                                    e.postTask(e.onTransitionSlide.bind(e, 1), function () {
                                        e.isTimerEventing = !0,
                                            e.resetProgress()
                                    }, function () {
                                        e.isTimerEventing = !1
                                    })
                                }
                            }))
                    },
                    resetProgress: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.4
                            , t = this
                            , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }
                            ;
                        this.timer && (this.tweenTimer && (this.tweenTimer.pause(),
                            r.a.clearTween(this.tweenTimer)),
                            this.tweenTimer = i.to(this, e, {
                                ease: p.inOutQuart,
                                timerValue: 0,
                                onUpdate: function () {
                                    t.timer.style.transform = "translate3d(0,0,1px) scaleX(" + t.timerValue + ")"
                                },
                                onComplete: function () {
                                    a(),
                                        n && t.runProgress()
                                }
                            }))
                    },
                    stopProgress: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () { }
                            ;
                        this.resetProgress(1.4, !1, e)
                    },
                    zoomRotationBackGround: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                            , t = this
                            , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9
                            , o = 1
                            , r = 0;
                        n && (r = .05),
                            e || (o = 0),
                            i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uUseUvSin, {
                                value: o
                            }),
                            i.to(this, a, {
                                zoomInRotationValue: o,
                                ease: p.outExpo,
                                onUpdate: function () {
                                    setTimeout(function () {
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue
                                    }, r),
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue,
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uDragScaleRatio.value = 1 - (1 - 1.4) * t.zoomInRotationValue,
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue,
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue,
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uUseNoise.value = 1 - t.zoomInRotationValue
                                }
                            })
                    },
                    zoomRotationBackGround2: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                            , t = this
                            , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9
                            , o = 1
                            , r = 0;
                        n && (r = .05),
                            e || (o = 0),
                            i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uUseUvSin, {
                                value: o
                            }),
                            i.to(this, a, {
                                zoomInRotationValue: o,
                                ease: p.outExpo,
                                onUpdate: function () {
                                    setTimeout(function () {
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue
                                    }, r),
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uRotationRatio.value = -.45 * t.zoomInRotationValue,
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uDragScaleRatio.value = 1 - (1 - 1.4) * t.zoomInRotationValue,
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue,
                                        PROJECT.glManager.backRawShaderMesh.uniforms.uBlackOutRatio.value = .6 * t.zoomInRotationValue
                                }
                            })
                    },
                    zeroPadding: function (e) {
                        return r.a.zeroPadding(e, 2)
                    },
                    onResize: function () {
                        var e = this;
                        this.$nextTick(function () {
                            e.windowInnerWidth = window.innerWidth,
                                e.windowInnerHeight = window.innerHeight,
                                e.windowInnerWidthRatio = 1 / e.windowInnerWidth,
                                e.windowInnerHeightRatio = 1 / e.windowInnerHeight,
                                e.contentHeightRatio = 1 / (document.querySelector(".js-smooth-scroll-wrapper").scrollHeight - e.windowInnerHeight),
                                e.rollElementHeight = Math.round(.03 * e.windowInnerHeight),
                                e.rollNumberElementHeight = Math.round(.03 * e.windowInnerHeight * .2),
                                e.windowInnerHeight / e.windowInnerWidth < .6875 ? (e.titleFontSize = PROJECT.isMobileSize ? 1.4 : Math.max(1, Math.round(.027 * e.windowInnerHeight) / 10),
                                    e.pieSize = .7 * window.innerHeight,
                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uAspectRatio.value = 1,
                                    e.toggleWrapperSize = e.pieSize,
                                    e.toggleWrapperSizePI = e.toggleWrapperSize * Math.PI,
                                    e.dashArray = e.toggleWrapperSizePI,
                                    e.isInitCompleted || (e.dashOffset = e.toggleWrapperSizePI),
                                    e.toggleSize = Math.round(.3 * e.windowInnerHeight),
                                    e.toggleInnerSize = Math.round(.08 * e.windowInnerHeight),
                                    e.togglePointSize = Math.round(.01 * e.windowInnerHeight),
                                    e.lineWidth = e.calcLineWidth(1)) : (e.titleFontSize = PROJECT.isMobileSize ? 1.4 : Math.max(1, Math.round(.6875 * e.windowInnerWidth * .027) / 10),
                                        e.pieSize = .6875 * e.windowInnerWidth * .7 * e.pieSizeRatio,
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uAspectRatio.value = 0,
                                        e.toggleWrapperSize = e.pieSize,
                                        e.toggleWrapperSizePI = e.toggleWrapperSize * Math.PI,
                                        e.dashArray = e.toggleWrapperSizePI,
                                        e.isInitCompleted || (e.dashOffset = e.toggleWrapperSizePI),
                                        e.toggleSize = Math.round(.6875 * e.windowInnerWidth * .3),
                                        e.toggleInnerSize = Math.round(.6875 * e.windowInnerWidth * .08),
                                        e.togglePointSize = Math.round(.6875 * e.windowInnerWidth * .01),
                                        e.lineWidth = e.calcLineWidth(-1)),
                                e.isCompletedDashArrayBackAnimation && (e.dashArrayBack = e.toggleWrapperSizePI)
                        })
                    },
                    hideCanvasDom: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                            , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                            , a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                            , o = document.querySelectorAll(".js-line")
                            , r = document.querySelectorAll(".js-control__text")
                            , s = document.querySelector(".js-opening-roll");
                        this.isShowPieBack = n,
                            t && (i.set(this, {
                                dashOffset: this.toggleWrapperSizePI
                            }),
                                a && (this.dashArrayBack = 0)),
                            i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, {
                                value: .15
                            }),
                            i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, {
                                value: .15
                            }),
                            i.set(o, {
                                force3D: !0,
                                scaleX: 0
                            }),
                            i.set(r, {
                                force3D: !0,
                                y: 10,
                                opacity: 0
                            }),
                            e && i.set(s, {
                                force3D: !0,
                                y: 20,
                                opacity: 0
                            })
                    },
                    showCanvasDom: function () {
                        var t = this
                            , n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                            , a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            , o = document.querySelectorAll(".js-line")
                            , r = document.querySelectorAll(".js-control__text")
                            , s = document.querySelector(".js-opening-roll");
                        return new e(function (e) {
                            a && (t.dashArrayBack = 0,
                                i.to(t, 1.3, {
                                    ease: p.inOutQuart,
                                    delay: .2,
                                    dashArrayBack: t.toggleWrapperSizePI
                                })),
                                i.to(t, 1.3, {
                                    delay: .3,
                                    ease: p.inOutQuart,
                                    dashOffset: t.toggleWrapperSizePI - t.toggleWrapperSizePI * t.slideNumState.current * t.slideLengthRatio,
                                    onComplete: function () {
                                        setTimeout(function () {
                                            e()
                                        }, 150)
                                    }
                                }),
                                i.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, 1, {
                                    ease: p.inOutQuad,
                                    value: 0
                                }),
                                i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, 1, {
                                    ease: p.inOutQuad,
                                    value: 0
                                }),
                                i.to(o, .7, {
                                    delay: .9,
                                    ease: p.inOut2,
                                    force3D: !0,
                                    scaleX: 1
                                }),
                                i.to(r, .7, {
                                    force3D: !0,
                                    delay: 1,
                                    ease: p.inOut2,
                                    y: 0,
                                    opacity: 1
                                }),
                                n && i.to(s, .7, {
                                    delay: .3,
                                    ease: p.inOut2,
                                    force3D: !0,
                                    y: 0,
                                    opacity: 1
                                })
                        }
                        )
                    },
                    calcLineWidth: function (e) {
                        var t = this.windowInnerWidth
                            , n = this.windowInnerHeight;
                        return e > 0 ? .5 * (t - n) - .0625 * t - this.controllerWidth + .075 * n : .5 * (t - .6875 * t) - .0625 * t - this.controllerWidth + .6875 * t * .075
                    },
                    calcMaskRatio: function (e) {
                        return 1 + e
                    },
                    calcScaleRatio: function (e) {
                        return {
                            x: .75 + .25 * e,
                            y: .75 + .25 * e
                        }
                    },
                    calcTranslateRatio: function (e, t, n) {
                        return e * n + t * e
                    },
                    setSlideState: function (e, t) {
                        e.prev = this.validateSlideState(t - 1),
                            e.current = this.validateSlideState(t),
                            e.next = this.validateSlideState(t + 1)
                    },
                    validateSlideState: function (e) {
                        return 0 > e ? e + this.slideLength : e > this.slideLength - 1 ? e - this.slideLength : e
                    },
                    completeDashArray: function () {
                        this.dashArray = this.toggleWrapperSizePI * this.progress * this.slideLengthRatio
                    }
                },
                mounted: function () {
                    var t = this;
                    PROJECT.stage = this,
                        PROJECT.onMouseEnterWorksList = function (e) {
                            t.isOnEnterWorksList = !0,
                                t.mouseEnterWorksListCurrent = e,
                                t.isAnimatingOnEnterWorksList || (t.isAnimatingOnEnterWorksList = !0,
                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTextureHoverImage.value = PROJECT.glManager.imageTexture[e],
                                    i.to(PROJECT.glManager.backRawShaderMesh.uniforms.uHoverWorksListRatio, .6, {
                                        ease: p.linear,
                                        value: 0,
                                        onComplete: function () {
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTextureCurrentImage.value = PROJECT.glManager.imageTexture[e],
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uHoverWorksListRatio.value = 1,
                                                t.isAnimatingOnEnterWorksList = !1,
                                                t.isOnEnterWorksList && e !== t.isOnEnterWorksList && PROJECT.onMouseEnterWorksList(t.mouseEnterWorksListCurrent)
                                        }
                                    }))
                        }
                        ,
                        PROJECT.onMouseLeaveWorksList = function () {
                            t.isOnEnterWorksList = !1
                        }
                        ,
                        PROJECT.frontCircleBackAnimation = function () {
                            var n = parseFloat(t.dashArray);
                            return new e(function (e) {
                                i.to(t, 1.3, {
                                    delay: .2,
                                    ease: p.inOutQuart,
                                    dashArray: 0,
                                    onComplete: function () {
                                        t.dashArray = n,
                                            e()
                                    }
                                })
                            }
                            )
                        }
                        ,
                        PROJECT.othersPageStartUp = function (e) {
                            var n = new u.a;
                            n.add(function (e) {
                                document.body.classList.remove("is-ready"),
                                    document.querySelector(".p-header__languageList__item.line").style.display = "block",
                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                    PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                    PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                    PROJECT.glManager.frontRawShaderMesh.scaleIn(PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0),
                                    PROJECT.glManager.backRawShaderMesh.scaleIn(PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0),
                                    PROJECT.glManager.frontPie.drawArc(0, 0),
                                    PROJECT.glManager.backPie.drawArc(0, 0),
                                    t.dashArrayBack = t.toggleWrapperSizePI,
                                    setTimeout(function () {
                                        i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                                            value: PROJECT.glManager.vignetteGuiCtrl.white_ratio
                                        }),
                                            i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                                                value: PROJECT.glManager.vignetteGuiCtrl.white_ratio
                                            }),
                                            i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize, {
                                                value: PROJECT.glManager.vignetteGuiCtrl.circle_size
                                            }),
                                            i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize, {
                                                value: PROJECT.glManager.vignetteGuiCtrl.circle_size
                                            }),
                                            t.isCompletedOnOpeningAnimation = !0,
                                            t.canUpdate = !0,
                                            t.isCompletedDashArrayBackAnimation = !0,
                                            u.a.wait(200).then(e)
                                    }, 100)
                            }),
                                n.done(function () {
                                    t.stop(),
                                        PROJECT.mousePositionManager.setNodeListOthersChildren(),
                                        PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren),
                                        PROJECT.springManagerInit(),
                                        t.setKeyTypeEvent(),
                                        setTimeout(function () {
                                            e(),
                                                PROJECT.glManager.canUpdate = !1
                                        }, 100)
                                })
                        }
                        ,
                        PROJECT.topPageStartUp = function (n) {
                            t.isShowRoll = !1,
                                t.isShowPieBack = !0,
                                PROJECT.smoothScrollManager.destroy(),
                                PROJECT.addTransition(!0),
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                t._dashArray = 0;
                            var a = document.querySelectorAll(".js-line")
                                , o = document.querySelectorAll(".js-control__text")
                                , r = document.querySelectorAll(".js-logo")
                                , s = document.querySelectorAll(".js-nav")
                                , l = document.querySelectorAll(".js-timer-wrap");
                            t.dashArrayBack = 0,
                                i.set(o, {
                                    opacity: 0,
                                    force3D: !0,
                                    y: 10
                                }),
                                i.set(r, {
                                    opacity: 0,
                                    force3D: !0,
                                    y: 10
                                }),
                                i.set(s, {
                                    opacity: 0,
                                    force3D: !0,
                                    y: 10
                                }),
                                i.set(a, {
                                    scaleX: 0,
                                    force3D: !0
                                }),
                                i.set(l, {
                                    opacity: 0,
                                    force3D: !0,
                                    y: 10
                                }),
                                e.all([PROJECT.glManager.frontRawShaderMesh.scaleIn(), PROJECT.glManager.backRawShaderMesh.scaleIn(), PROJECT.glManager.frontPie.drawArc(), PROJECT.glManager.backPie.drawArc()]).then(function () {
                                    t.isShowRoll = !0,
                                        t.$nextTick(function () {
                                            document.body.classList.remove("is-ready"),
                                                document.querySelector(".p-header__languageList__item.line").style.display = "block",
                                                t.isCompletedOnOpeningAnimation = !0;
                                            var e = document.querySelector(".js-opening-roll");
                                            i.set(e, {
                                                opacity: 0,
                                                force3D: !0,
                                                y: 15
                                            }),
                                                t.vignetteTweenValue = 0,
                                                i.to(t, 1, {
                                                    ease: p.linear,
                                                    vignetteTweenValue: 1,
                                                    onUpdate: function () {
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1 - t.vignetteTweenValue * (1 - PROJECT.glManager.vignetteGuiCtrl.white_ratio),
                                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1 - t.vignetteTweenValue * (1 - PROJECT.glManager.vignetteGuiCtrl.white_ratio),
                                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = t.vignetteTweenValue * PROJECT.glManager.vignetteGuiCtrl.circle_size,
                                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = t.vignetteTweenValue * PROJECT.glManager.vignetteGuiCtrl.circle_size
                                                    }
                                                }),
                                                i.to(e, .7, {
                                                    delay: .3,
                                                    ease: p.inOut2,
                                                    opacity: 1,
                                                    y: 0,
                                                    onComplete: function () {
                                                        e.style.transform = "",
                                                            e.style.opacity = ""
                                                    }
                                                }),
                                                i.to(t, 1.25, {
                                                    delay: .3,
                                                    ease: p.inOutQuart,
                                                    _dashArray: 1,
                                                    onUpdate: function () {
                                                        t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI
                                                    },
                                                    onComplete: function () {
                                                        t.isCompletedDashArrayBackAnimation = !0,
                                                            t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI
                                                    }
                                                }),
                                                i.to(a, .7, {
                                                    delay: 1.25,
                                                    ease: p.inOut2,
                                                    force3D: !0,
                                                    scaleX: 1,
                                                    onComplete: function () {
                                                        for (var e = 0; e < this.target.length; e++)
                                                            this.target[e].style.transform = ""
                                                    }
                                                }),
                                                i.to(o, .7, {
                                                    force3D: !0,
                                                    delay: 1.3,
                                                    ease: p.inOut2,
                                                    opacity: 1,
                                                    y: 0,
                                                    onComplete: function () {
                                                        for (var e = 0; e < this.target.length; e++)
                                                            this.target[e].style.transform = "",
                                                                this.target[e].style.opacity = ""
                                                    }
                                                }),
                                                i.to(r, .7, {
                                                    force3D: !0,
                                                    delay: 1.4,
                                                    ease: p.inOut2,
                                                    opacity: 1,
                                                    y: 0,
                                                    onComplete: function () {
                                                        for (var e = 0; e < this.target.length; e++)
                                                            this.target[e].style.opacity = "",
                                                                this.target[e].style.transform = ""
                                                    }
                                                }),
                                                i.to(l, .7, {
                                                    force3D: !0,
                                                    delay: 1.4,
                                                    ease: p.inOut2,
                                                    opacity: 1,
                                                    y: 0,
                                                    onComplete: function () {
                                                        for (var e = 0; e < this.target.length; e++)
                                                            this.target[e].style.opacity = "",
                                                                this.target[e].style.transform = ""
                                                    }
                                                }),
                                                i.to(s, .7, {
                                                    force3D: !0,
                                                    delay: 1.4,
                                                    ease: p.inOut2,
                                                    opacity: 1,
                                                    y: 0,
                                                    onComplete: function () {
                                                        t.vignetteTweenValue = 0;
                                                        for (var e = 0; e < s.length; e++)
                                                            s[e].style.transform = "",
                                                                s[e].style.opacity = "";
                                                        setTimeout(function () {
                                                            PROJECT.scrollRecognizeManager && (PROJECT.scrollRecognizeManager.canPrevent = !0,
                                                                PROJECT.scrollRecognizeManager.canWheel = !0),
                                                                PROJECT.glManager.enableMouseMove(),
                                                                PROJECT.addTransition(!1),
                                                                PROJECT.mousePositionManager.setNodeListOthersChildren(),
                                                                PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren),
                                                                PROJECT.springManagerInit(),
                                                                t.setKeyTypeEvent(),
                                                                n()
                                                        }, 200)
                                                    }
                                                })
                                        })
                                })
                        }
                        ,
                        PROJECT.notFoundPageStartUp = function (e) {
                            t.isShowPieBack = !0,
                                PROJECT.smoothScrollManager.destroy(),
                                PROJECT.addTransition(!0),
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleSize.value = 0,
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value = 1,
                                PROJECT.glManager.frontRawShaderMesh.scaleIn(PROJECT.glManager.frontRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0),
                                PROJECT.glManager.backRawShaderMesh.scaleIn(PROJECT.glManager.backRawShaderMesh.uniforms.uCurrentScaleRatio.value, 0, 0),
                                i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio, {
                                    value: 1
                                }),
                                i.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleSize, {
                                    value: 0
                                }),
                                MOBILE = !1,
                                TABLET = !1,
                                i.set(PROJECT.glManager.backRawShaderMesh.uniforms.uOpacity, {
                                    value: 0
                                }),
                                PROJECT.glManager.frontPie.drawArc(0, 0),
                                PROJECT.glManager.backPie.drawArc(0, 0),
                                document.body.classList.remove("is-ready"),
                                t.dashArrayBack = t._dashArray * t.toggleWrapperSizePI,
                                t.canUpdate = !0,
                                t.isCompletedDashArrayBackAnimation = !0,
                                t.vignetteTweenValue = 0,
                                PROJECT.glManager._mousePos.x = .1,
                                PROJECT.glManager._mousePos.y = .1,
                                PROJECT.glManager._mouse.x = .1,
                                PROJECT.glManager._mouse.y = .1,
                                PROJECT.glManager.frontRawShaderMesh.uniforms.uMouse.value = {
                                    x: .01,
                                    y: .01
                                },
                                PROJECT.addTransition(!1),
                                PROJECT.mousePositionManager.setNodeListOthersChildren(),
                                PROJECT.mousePositionManager.setEventTargetStateChange(PROJECT.mousePositionManager.$targetToPointerStateChangeOthersChildren),
                                e()
                        }
                        ,
                        this.slideLength = this.slideImage.length,
                        this.slideLengthRatio = 1 / this.slideLength,
                        this.slideState.prev = this.slideNumState.prev = this.slideLength - 1;
                    var n = document.querySelector(".p-loading__back")
                        , a = document.querySelector(".p-loading__back__inner")
                        , s = document.querySelector(".p-loading__front")
                        , l = document.querySelector(".p-loading__front__inner");
                    (MOBILE || TABLET) && (this.strokeWidth = 1),
                        document.body.classList.contains("page-not-found") && (this.slideImage = ["/assets/img/canvas/texture_not_found.jpg"],
                            this.slideImageFull = ["/assets/img/canvas/texture_not_found.jpg"]),
                        PROJECT.glManager = new h.a({
                            images: this.slideImage,
                            imagesFull: this.slideImageFull,
                            FRONT_TRANSLATE_RATIO: .18,
                            BACK_TRANSLATE_RATIO: .12,
                            imageTextureLoaderOnUpdateFunction: function (e, t) {
                                i.to(n, 1.2, {
                                    delay: .25,
                                    ease: p.inOut2,
                                    force3D: !0,
                                    x: -100 * (1 - e) + "%"
                                }),
                                    i.to(a, 1.2, {
                                        delay: .25,
                                        ease: p.inOut2,
                                        force3D: !0,
                                        x: 100 * (1 - e) + "%",
                                        onComplete: function () {
                                            1 === e && (n.style.transform = "",
                                                a.style.transform = "",
                                                s.style.transform = "",
                                                l.style.transform = "",
                                                setTimeout(function () {
                                                    document.body.classList.contains("index") ? (t(),
                                                        PROJECT.glManager.imageTextureLoaderOnCompleteFunction("index")) : PROJECT.glManager.imageTextureLoaderOnCompleteFunction("sub").then(function () {
                                                            t()
                                                        }),
                                                        setTimeout(function () {
                                                            PROJECT.screenFix.fix(),
                                                                PROJECT.screenFix.removeNoWheel()
                                                        }, 200)
                                                }, 100))
                                        }
                                    }),
                                    i.to(s, 1.2, {
                                        ease: p.inOut2,
                                        force3D: !0,
                                        x: "0%"
                                    }),
                                    i.to(l, 1.2, {
                                        ease: p.inOut2,
                                        force3D: !0,
                                        x: "0%"
                                    })
                            },
                            imageTextureLoaderOnCompleteFunction: function (n) {
                                return new e(function (e) {
                                    if (document.querySelector(".p-stage__menu").parentNode.removeChild(document.querySelector(".p-stage__menu")),
                                        "index" === n)
                                        document.querySelector(".p-loading").style.transformOrigin = "center",
                                            document.querySelector(".p-loading__outer").style.transformOrigin = "center",
                                            e(),
                                            document.querySelector(".p-loading__bg").parentNode.removeChild(document.querySelector(".p-loading__bg")),
                                            document.querySelector(".p-loading__front").parentNode.removeChild(document.querySelector(".p-loading__front")),
                                            i.set(".p-loading__outer", {
                                                scale: 1
                                            }),
                                            i.to(".p-loading__outer", 1, {
                                                delay: .1,
                                                ease: r.a.getCubicCurve(.4, 0, .8, .25),
                                                scale: .75
                                            }),
                                            setTimeout(function () {
                                                document.querySelector(".p-loading").parentNode.removeChild(document.querySelector(".p-loading"))
                                            }, 2e3);
                                    else {
                                        var a = document.querySelector(".page-content").getAttribute("id") || "";
                                        "about" === a ? document.querySelector(".p-header__languageList__item.line").style.display = "block" : e(),
                                            document.body.classList.remove("is-ready"),
                                            t.dashArrayBack = t.toggleWrapperSizePI,
                                            u.a.wait(700).then(function () {
                                                PROJECT.smoothScrollManager.run(),
                                                    u.a.wait(150).then(function () {
                                                        i.set(".page-content", {
                                                            force3D: !0,
                                                            y: Math.min(.5 * window.innerHeight, 800)
                                                        }),
                                                            i.to(".page-content", 1, {
                                                                delay: .2,
                                                                ease: p.outQuart,
                                                                force3D: !0,
                                                                y: 0,
                                                                onUpdate: function () { }
                                                            }),
                                                            i.to(document.querySelector(".p-loading"), 1, {
                                                                force3D: !0,
                                                                delay: .2,
                                                                ease: p.inOutQuart,
                                                                y: "-100%",
                                                                onComplete: function () {
                                                                    document.querySelector(".p-loading").parentNode.removeChild(document.querySelector(".p-loading")),
                                                                        u.a.wait(100).then(function () {
                                                                            r.a.triggerEvent(window, "resize"),
                                                                                "about" === a && e()
                                                                        })
                                                                }
                                                            }),
                                                            i.to(document.querySelector(".p-loading__outer"), 1, {
                                                                force3D: !0,
                                                                delay: .2,
                                                                ease: p.inOutQuart,
                                                                y: "100%"
                                                            }),
                                                            IE && i.to(".p-loading__inner", 1, {
                                                                delay: .2,
                                                                opacity: 0
                                                            })
                                                    })
                                            })
                                    }
                                }
                                )
                            },
                            addLoaderFunction: function () {
                                return new e(function (e) {
                                    o.a.load({
                                        google: {
                                            families: ["Assistant:l3"]
                                        },
                                        active: function () {
                                            e()
                                        },
                                        inactive: function () {
                                            e()
                                        },
                                        timeout: 5e3
                                    })
                                }
                                )
                            }
                        }),
                        PROJECT.resizeHandler.push(function (e, t, n, i) {
                            PROJECT.glManager.onResize(e, t, n, i)
                        }),
                        PROJECT.glManager.setup().then(function () {
                            PROJECT.glManager.addGui(),
                                PROJECT.renderHandler.push(function (e) {
                                    PROJECT.glManager.onRender(e)
                                }),
                                PROJECT.mousePositionHandler.push(function (e) {
                                    PROJECT.glManager.onMouseMove(e)
                                }),
                                t.onResize(),
                                PROJECT.onStartUp.done(),
                                t.onResize(),
                                PROJECT.resizeHandler.push(function () {
                                    t.onResize()
                                }),
                                setTimeout(function () {
                                    PROJECT.glManager.setDrawFlag("both", !1)
                                }, 200)
                        })
                },
                watch: {
                    isCompletedOnOpeningAnimation: function (e) {
                        e && this.onInitIndex()
                    },
                    canDrawFront: function (e) {
                        e ? PROJECT.glManager.setDrawFlag("next", !0) : PROJECT.glManager.setDrawFlag("next", !1)
                    },
                    isMouseWheeling: function (e) {
                        var t = this;
                        e ? this.$nextTick(function () {
                            document.body.classList.add("is-slide__on-wheel"),
                                t.resetProgress(1.4, !1)
                        }) : this.$nextTick(function () {
                            document.body.classList.remove("is-slide__on-wheel"),
                                t.resetProgress(1.4 * t.timerValue, !0)
                        })
                    },
                    isMouseDowning: function (e) {
                        e ? this.$nextTick(function () {
                            PROJECT.mouseSpringManager.isDraged = !0,
                                document.body.classList.add("is-slide__on-drag")
                        }) : this.$nextTick(function () {
                            PROJECT.mouseSpringManager.isDraged = !1,
                                document.body.classList.remove("is-slide__on-drag")
                        })
                    },
                    isMouseDownEventing: function (e) {
                        var t = this;
                        e ? this.$nextTick(function () {
                            PROJECT.scrollRecognizeManager.canWheel = !1,
                                t.resetProgress(1.4, !1),
                                t.canUpdateOnWheel = !1
                        }) : this.$nextTick(function () {
                            PROJECT.scrollRecognizeManager.canWheel = !0,
                                t.resetProgress(1.4 * t.timerValue, !0),
                                t.canUpdateOnWheel = !0
                        })
                    },
                    isClickEventing: function (e) {
                        var t = this;
                        e ? this.$nextTick(function () {
                            document.body.classList.add("is-slide__on-click"),
                                t.resetProgress(1.4, !1),
                                PROJECT.scrollRecognizeManager.canWheel = !1
                        }) : this.$nextTick(function () {
                            document.body.classList.remove("is-slide__on-click"),
                                t.resetProgress(0, !0),
                                PROJECT.scrollRecognizeManager.canWheel = !0
                        })
                    },
                    isTimerEventing: function (e) {
                        e ? document.body.classList.add("is-slide__on-timer") : document.body.classList.remove("is-slide__on-timer")
                    }
                }
            }
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(1)
                , o = n(3);
            window.PROJECT = window.PROJECT || {},
                t.a = {
                    data: function () {
                        return {
                            ease: new o.a,
                            isTaskPlaying: !1,
                            task: [],
                            prevNum: 0,
                            currentNumDummy: 1,
                            currentNum: 1,
                            nextNum: 2,
                            now: 1,
                            tweenCountBefore: null,
                            tweenCountCurrent: null,
                            tweenCountNext: null,
                            tweenLine: null,
                            parent1: "",
                            parent2: "",
                            parent3: "",
                            target1: "",
                            target2: "",
                            target3: "",
                            line: "",
                            listLength: 0,
                            indicatorOffset: [],
                            isShow: !1,
                            canUpdate: !1
                        }
                    },
                    methods: {
                        zeroPadding: function (e, t) {
                            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            return a.a.zeroPadding(e, t, n)
                        },
                        onUpdate: function () {
                            if (this.isShow && this.canUpdate)
                                for (var e = this.listLength; e--;)
                                    if (this.indicatorOffset[e] <= PROJECT.scrollManager.st) {
                                        this.currentNumDummy = e + 1,
                                            this.now !== this.currentNumDummy && (this.now - this.currentNumDummy > 0 ? this.setTask(this.countDown.bind(this, parseInt(this.currentNumDummy))) : this.setTask(this.countUp.bind(this, parseInt(this.currentNumDummy)))),
                                            this.now = this.currentNumDummy;
                                        break
                                    }
                        },
                        setTask: function (e) {
                            this.task.length < 2 ? this.task.push(e) : this.task[this.task.length - 1] = e,
                                this.isTaskPlaying || this.startTask()
                        },
                        startTask: function () {
                            var e = this;
                            this.isTaskPlaying = !0,
                                this.task[0]().then(function () {
                                    setTimeout(function () {
                                        e.isTaskPlaying = !1,
                                            e.task.shift(),
                                            e.task.length && e.startTask()
                                    }, 0)
                                })
                        },
                        countDown: function (t) {
                            var n = this;
                            return new e(function (e) {
                                n.prevNum = t,
                                    n.nextNum = t,
                                    n.$nextTick(function () {
                                        n.setSelector(),
                                            n.resetTween(n.tweenLine),
                                            n.tweenCountBefore = i.staggerTo(n.target1, .5, {
                                                force3D: !0,
                                                ease: n.ease.inOutQuart,
                                                y: "100%",
                                                onComplete: function () { }
                                            }, .12),
                                            n.tweenCountCurrent = i.staggerTo(n.target2, .5, {
                                                force3D: !0,
                                                ease: n.ease.inOutQuart,
                                                y: "100%",
                                                onComplete: function () { }
                                            }, .12, function () {
                                                n.currentNum = t,
                                                    setTimeout(function () {
                                                        i.set(n.target1, {
                                                            force3D: !0,
                                                            y: "0%"
                                                        }),
                                                            i.set(n.target2, {
                                                                force3D: !0,
                                                                y: "0%"
                                                            }),
                                                            e()
                                                    }, 0)
                                            }),
                                            n.tweenLine = i.to(n.line, .5, {
                                                force3D: !0,
                                                ease: n.ease.linear,
                                                scaleX: t / n.listLength
                                            })
                                    })
                            }
                            )
                        },
                        countUp: function (t) {
                            var n = this;
                            return new e(function (e) {
                                n.prevNum = t,
                                    n.nextNum = t,
                                    n.$nextTick(function () {
                                        n.setSelector(),
                                            n.resetTween(n.tweenLine),
                                            n.tweenCountCurrent = i.staggerTo(n.target2, .5, {
                                                force3D: !0,
                                                ease: n.ease.inOutQuart,
                                                y: "-100%",
                                                onComplete: function () { }
                                            }, .12, function () {
                                                n.currentNum = t,
                                                    setTimeout(function () {
                                                        i.set(n.target3, {
                                                            force3D: !0,
                                                            y: "0%"
                                                        }),
                                                            i.set(n.target2, {
                                                                force3D: !0,
                                                                y: "0%"
                                                            }),
                                                            e()
                                                    }, 0)
                                            }),
                                            n.tweenCountNext = i.staggerTo(n.target3, .5, {
                                                force3D: !0,
                                                ease: n.ease.inOutQuart,
                                                y: "-100%"
                                            }, .12),
                                            n.tweenLine = i.to(n.line, .5, {
                                                force3D: !0,
                                                ease: n.ease.linear,
                                                scaleX: t / n.listLength
                                            })
                                    })
                            }
                            )
                        },
                        setSelector: function () {
                            this.parent1 = document.getElementById("indicatorTarget").children[0],
                                this.parent2 = document.getElementById("indicatorTarget").children[1],
                                this.parent3 = document.getElementById("indicatorTarget").children[2],
                                this.target1 = this.parent1.children,
                                this.target2 = this.parent2.children,
                                this.target3 = this.parent3.children,
                                this.line = document.querySelector(".js-indicator__line").children[0]
                        },
                        resetTween: function (e) {
                            e && (e.kill(),
                                e = null)
                        },
                        init: function () {
                            this.currentNum = 1,
                                this.currentNumDummy = 1,
                                this.now = 1,
                                this.task = [],
                                this.isTaskPlaying = !1,
                                this.setSelector(),
                                this.resetTween(this.tweenLine),
                                i.set(this.target1, {
                                    force3D: !0,
                                    y: "0%"
                                }),
                                i.set(this.target2, {
                                    force3D: !0,
                                    y: "0%"
                                }),
                                i.set(this.target3, {
                                    force3D: !0,
                                    y: "0%"
                                }),
                                i.set(this.line, {
                                    force3D: !0,
                                    scaleX: 1 / this.listLength
                                })
                        }
                    },
                    created: function () { },
                    mounted: function () {
                        var e = this;
                        window.PROJECT.indicator = this,
                            PROJECT.renderHandler.push(function (t) {
                                e.onUpdate(t)
                            })
                    }
                }
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(1)
                , o = n(3)
                , r = n(2);
            window.PROJECT = window.PROJECT || {};
            var s = new o.a;
            t.a = {
                name: "MousePointer",
                data: function () {
                    return {
                        canShow: !0,
                        canUpdate: !0,
                        canMouseMove: !0,
                        canResize: !0,
                        canClick: !1,
                        canShowBar: !1,
                        isPointerOnWindow: !1,
                        isOnStateChangeTarget: !1,
                        isClicked: !1,
                        mouseEnterType: null,
                        stageSize: {
                            width: 0,
                            height: 0
                        },
                        pointerSize: {
                            width: 100,
                            height: 100
                        },
                        calcBasePosition: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        mousePosition: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        calcPointerPosition: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        pointerPosition: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        pointerPositionBar: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        mouseDist: {
                            x: 0,
                            y: 0
                        },
                        amount: {
                            x: 0,
                            y: 0
                        },
                        deg: 0,
                        scaleRatioX: 0,
                        scaleRatioY: 0,
                        scaleRatio: 0,
                        scale: 0,
                        pointerStyle: {
                            opacity: 0,
                            pointerInnerScale: 0
                        },
                        bg2Length: 0,
                        chasePointerInnerNode: null,
                        tween: {
                            opacity: null,
                            pointerInnerScale: null
                        }
                    }
                },
                methods: {
                    init: function () { },
                    addStyleOpacity: function () {
                        var t = this
                            , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                            , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .45;
                        return new e(function (e) {
                            a.a.clearTween(t.tween.opacity),
                                t.tween.opacity = i.to(t.pointerStyle, o, {
                                    ease: s.linear,
                                    opacity: n,
                                    onComplete: e
                                })
                        }
                        )
                    },
                    addStyleScale: function () {
                        var t = this
                            , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .15
                            , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .45;
                        return new e(function (e) {
                            a.a.clearTween(t.tween.pointerInnerScale),
                                t.tween.pointerInnerScale = i.to(t.pointerStyle, o, {
                                    ease: s.outBounce1,
                                    pointerInnerScale: n,
                                    onComplete: e
                                })
                        }
                        )
                    },
                    onUpdate: function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.canUpdate) && (PROJECT.mousePositionManager.isOnStateChangeTargetInner ? (this.mouseDist.x = PROJECT.mousePositionManager.hoverTargetInnerPos.x - .5 * this.pointerSize.width,
                                this.mouseDist.y = PROJECT.mousePositionManager.hoverTargetInnerPos.y - .5 * this.pointerSize.height,
                                this.amount.x = r.a.followUp(this.pointerPosition.x, this.mouseDist.x, .13125),
                                this.amount.y = r.a.followUp(this.pointerPosition.y, this.mouseDist.y, .13125),
                                this.pointerPosition.x = this.amount.x,
                                this.pointerPosition.y = this.amount.y,
                                this.pointerPositionBar.x = r.a.followUp(this.pointerPositionBar.x, this.mousePosition.x, .115625),
                                this.pointerPositionBar.y = r.a.followUp(this.pointerPositionBar.y, this.mousePosition.y, .115625),
                                Math.abs(this.pointerPosition.x - this.mousePosition.x) < .01 && Math.abs(this.pointerPosition.y - this.mousePosition.y) && (this.canUpdate = !1,
                                    this.pointerPosition.x = Math.round(this.pointerPosition.x),
                                    this.pointerPosition.y = Math.round(this.pointerPosition.y),
                                    this.pointerPositionBar.x = Math.round(this.pointerPositionBar.x),
                                    this.pointerPositionBar.y = Math.round(this.pointerPositionBar.y)),
                                this.deg = .125 * r.a.digToRad(this.amount.x * this.amount.y) * 1.05,
                                this.deg = 0,
                                this.scale = 0) : (this.pointerPosition.x = r.a.followUp(this.pointerPosition.x, this.mousePosition.x, .125),
                                    this.pointerPosition.y = r.a.followUp(this.pointerPosition.y, this.mousePosition.y, .125),
                                    this.pointerPositionBar.x = r.a.followUp(this.pointerPositionBar.x, this.mousePosition.x, .1125),
                                    this.pointerPositionBar.y = r.a.followUp(this.pointerPositionBar.y, this.mousePosition.y, .1125),
                                    this.calcPointerPosition.x = r.a.followUp(this.calcPointerPosition.x, this.calcBasePosition.x, .125),
                                    this.calcPointerPosition.y = r.a.followUp(this.calcPointerPosition.y, this.calcBasePosition.y, .125),
                                    Math.abs(this.pointerPosition.x - this.mousePosition.x) < .01 && Math.abs(this.pointerPosition.y - this.mousePosition.y) && (this.canUpdate = !1,
                                        this.pointerPosition.x = Math.round(this.pointerPosition.x),
                                        this.pointerPosition.y = Math.round(this.pointerPosition.y),
                                        this.pointerPositionBar.x = Math.round(this.pointerPositionBar.x),
                                        this.pointerPositionBar.y = Math.round(this.pointerPositionBar.y),
                                        this.calcPointerPosition.x = Math.round(this.calcPointerPosition.x),
                                        this.calcPointerPosition.y = Math.round(this.calcPointerPosition.y)),
                                    this.deg = 180 * Math.atan2(this.calcBasePosition.y - this.calcPointerPosition.y, this.calcBasePosition.x - this.calcPointerPosition.x) / Math.PI,
                                    this.scaleRatioX = Math.max(Math.min(Math.floor(Math.abs(this.calcBasePosition.x - this.calcPointerPosition.x) / this.calcPointerPosition.x * 1e3) / 1e3, 1), 0),
                                    this.scaleRatioY = Math.max(Math.min(Math.floor(Math.abs(this.calcBasePosition.y - this.calcPointerPosition.y) / this.calcPointerPosition.y * 1e3) / 1e3, 1), 0),
                                    this.scaleRatio = this.scaleRatioX + .7 * this.scaleRatioY,
                                    this.scale = .7 * this.scaleRatio))
                    },
                    onMouseMove: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            x: 0,
                            y: 0
                        };
                        this.canMouseMove && (this.canUpdate = !0,
                            this.calcBasePosition.x = e.x + .5 * this.pointerSize.width,
                            this.calcBasePosition.y = e.y + .5 * this.pointerSize.width,
                            this.mousePosition.x = e.x - .5 * this.pointerSize.width,
                            this.mousePosition.y = e.y - .5 * this.pointerSize.height)
                    },
                    onResize: function (e, t) {
                        this.canResize && (this.stageSize.width = e || document.body.clientWidth,
                            this.stageSize.height = t || window.innerHeight)
                    },
                    onClick: function () {
                        var t = this;
                        return new e(function (e) {
                            if (!t.canClick)
                                return e();
                            t.chasePointerInnerNode || (t.chasePointerInnerNode = document.querySelector(".js-chasePointer"));
                            for (var n = 0; n < 2; n++)
                                t.chasePointerInnerNode.insertAdjacentHTML("afterbegin", '<div class="p-chasePointer__bg--02"></div>');
                            var a = document.querySelectorAll(".p-chasePointer__bg--02");
                            t.bg2Length = a.length;
                            for (var o = 0; o < 2; o++)
                                i.to(a[o], 1.5, {
                                    force3D: !0,
                                    ease: s.out2,
                                    scale: 1.3,
                                    opacity: 0,
                                    delay: .15 * o,
                                    onComplete: function () {
                                        var e = document.querySelectorAll(".p-chasePointer__bg--02");
                                        t.bg2Length = e.length,
                                            t.bg2Length && t.chasePointerInnerNode.removeChild(e[t.bg2Length - 1])
                                    }
                                })
                        }
                        )
                    },
                    hidePointer: function () {
                        var e = this;
                        this.addStyleScale(0),
                            this.addStyleOpacity(0).then(function () {
                                e.canClick = !1,
                                    e.canUpdate = !1,
                                    e.canShow = !1,
                                    e.canMouseMove = !1
                            })
                    },
                    showPointer: function () {
                        this.canShow = !0,
                            this.canClick = !0,
                            this.canMouseMove = !0,
                            this.canUpdate = !0,
                            this.addStyleOpacity(1),
                            this.addStyleScale().then(function () { })
                    }
                },
                mounted: function () {
                    var e = this;
                    PROJECT.mousePointer = this,
                        window.addEventListener("click", this.onClick.bind(this), !1),
                        this.canClick = !0,
                        PROJECT.mousePositionHandler.push(function (t, n, i, a, o) {
                            e.isPointerOnWindow = n,
                                e.isOnStateChangeTarget = i,
                                e.isClicked = o,
                                e.mouseEnterType = a,
                                e.onMouseMove(t)
                        }),
                        PROJECT.renderHandler.push(function (t) {
                            e.onUpdate(t)
                        }),
                        PROJECT.resizeHandler.push(function (t, n, i) {
                            e.onResize(n, i)
                        }),
                        a.a.triggerEvent(window, "resize")
                },
                watch: {
                    isPointerOnWindow: function (e) {
                        if (e)
                            switch (this.addStyleOpacity(1),
                            this.mouseEnterType) {
                                case "zoom":
                                    this.canShowBar = !0,
                                        document.body.classList.add("is-pointer-zoom-ready"),
                                        this.isOnStateChangeTarget ? this.addStyleScale(.45) : this.addStyleScale();
                                    break;
                                default:
                                    this.canShowBar = !1,
                                        document.body.classList.remove("is-pointer-zoom-ready"),
                                        this.isOnStateChangeTarget ? this.addStyleScale(.4) : this.addStyleScale()
                            }
                        else
                            this.addStyleOpacity(0),
                                this.addStyleScale(0)
                    },
                    mouseEnterType: function (e) {
                        switch (e) {
                            case "zoom":
                                this.canShowBar = !0,
                                    document.body.classList.add("is-pointer-zoom-ready"),
                                    this.isOnStateChangeTarget ? this.addStyleScale(.45) : this.addStyleScale();
                                break;
                            default:
                                this.canShowBar = !1,
                                    document.body.classList.remove("is-pointer-zoom-ready"),
                                    this.isOnStateChangeTarget ? this.addStyleScale(.4) : this.addStyleScale()
                        }
                    },
                    isOnStateChangeTarget: function (e) {
                        if (this.isPointerOnWindow)
                            if (e)
                                switch (this.mouseEnterType) {
                                    case "zoom":
                                        this.addStyleScale(.45);
                                        break;
                                    default:
                                        this.addStyleScale(.4)
                                }
                            else
                                this.addStyleScale()
                    }
                }
            }
        }
        ).call(this, n(4), n(5))
    }
    , , function (e, t, n) {
        "use strict";
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._VC = t,
                        this._controllers = []
                }
                return i(e, [{
                    key: "add",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                            , t = arguments[1];
                        "string" == typeof e && "null" === e && (e = null),
                            this._controllers.unshift(this.getController(e, t))
                    }
                }, {
                    key: "pop",
                    value: function () {
                        this._controllers.pop()
                    }
                }, {
                    key: "shift",
                    value: function () {
                        this._controllers.shift()
                    }
                }, {
                    key: "use",
                    value: function (e) {
                        return "prev" === e ? this._controllers[1] : "current" === e && this._controllers[0]
                    }
                }, {
                    key: "getController",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return null !== e && null !== this._VC[e] && void 0 !== this._VC[e] ? new this._VC[e](t) : null !== t && isSet(this._VC[t.getAttribute("data-use-controller")]) ? new (this._VC[t.getAttribute("data-use-controller")])(t) : null !== t && isSet(this._VC[t.getAttribute("id")]) ? new (this._VC[t.getAttribute("id")])(t) : new this._VC.default(t)
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , function (e, t, n) {
        "use strict";
        var i = n(1)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.context = "",
                        this.arcInitValue = .5 * -Math.PI,
                        this.arcLimitValue = this.arcInitValue + 2 * Math.PI,
                        this.arcStartPointValue = this.arcInitValue,
                        this.arcEndPointValue = this.arcInitValue,
                        this.arcDelay = 0,
                        this.stageWidth = 500,
                        this.stageHeight = 500,
                        this.arcSizeRatio = .45,
                        this.easeInOut = i.a.getCubicCurve(.7, .05, .3, .95),
                        this.canTurnLeft = !1,
                        this.canDraw = !0,
                        this.$stage = document.createElement("canvas"),
                        this.tweenDrawArc = null,
                        this.halfWidth = 0,
                        this.halfHeight = 0,
                        this.lastX = 0,
                        this.lastY = 0,
                        this.lastWidth = 0,
                        this.lastHeight = 0
                }
                return a(e, [{
                    key: "set",
                    value: function () {
                        this.$stage.width = this.stageWidth,
                            this.$stage.height = this.stageHeight,
                            this.lastWidth = this.$stage.width,
                            this.lastHeight = this.$stage.height,
                            this.$stage.getContext && (this.context = this.$stage.getContext("2d"),
                                this.run())
                    }
                }, {
                    key: "run",
                    value: function () { }
                }, {
                    key: "update",
                    value: function (e) {
                        this.draw(e)
                    }
                }, {
                    key: "draw",
                    value: function () { }
                }]),
                    e
            }();
        t.a = o
    }
    , function (e, t, n) {
        "use strict";
        var i = n(6)
            , a = n(1)
            , o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , r = function () {
                function e(t, n) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.scaleInitValue = .25,
                        this.easeInOut = a.a.getCubicCurve(.25, .75, .2, 1),
                        this.uniforms = {
                            uTime: {
                                type: "f",
                                value: 0
                            },
                            uMouse: {
                                type: "v2",
                                value: new i.j(0, 0)
                            },
                            uResolutionWindow: {
                                type: "v2",
                                value: new i.j(window.innerWidth, window.innerHeight)
                            },
                            uPrevScaleRatio: {
                                type: "v2",
                                value: new i.j(this.scaleInitValue, this.scaleInitValue)
                            },
                            uCurrentScaleRatio: {
                                type: "v2",
                                value: new i.j(this.scaleInitValue, this.scaleInitValue)
                            },
                            uNextScaleRatio: {
                                type: "v2",
                                value: new i.j(this.scaleInitValue, this.scaleInitValue)
                            },
                            uBlackOutRatio: {
                                type: "f",
                                value: 0
                            },
                            uDevicePixelRatio: {
                                type: "f",
                                value: 1
                            },
                            uUvCurrentTranslateRatio: {
                                type: "f",
                                value: 0
                            },
                            uUvNextTranslateRatio: {
                                type: "f",
                                value: -.18
                            },
                            uUvPrevTranslateRatio: {
                                type: "f",
                                value: .18
                            },
                            uTransitionMaskRatio: {
                                type: "f",
                                value: 0
                            },
                            uVignetteCircleSize: {
                                type: "f",
                                value: PROJECT.isMobileSize ? .4 : .7
                            },
                            uVignetteCircleGradationRatio: {
                                type: "f",
                                value: .9
                            },
                            uVignetteCircleGradationBlackWidth: {
                                type: "f",
                                value: .9
                            },
                            uVignetteMaxWhiteRatio: {
                                type: "f",
                                value: .75
                            },
                            uVignetteMinBlackRatio: {
                                type: "f",
                                value: .1
                            },
                            uHoverScale: {
                                type: "f",
                                value: 0
                            },
                            uTransitionScale: {
                                type: "f",
                                value: 0
                            },
                            uOpacity: {
                                type: "f",
                                value: 1
                            },
                            uIsAllColor: {
                                type: "f",
                                value: 0
                            },
                            uAllColor: {
                                type: "color",
                                value: {
                                    r: 1,
                                    g: 1,
                                    b: 1
                                }
                            }
                        },
                        this.geometry = new i.d(t, n, 1, 1),
                        this.material = null,
                        this.mesh = null
                }
                return o(e, [{
                    key: "setup",
                    value: function (e, t) {
                        this.material = new i.f({
                            depthTest: !1,
                            vertexShader: e,
                            fragmentShader: t,
                            uniforms: this.uniforms
                        }),
                            this.mesh = new i.b(this.geometry, this.material)
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        this.uniforms.uResolutionWindow.value = new i.j(window.innerWidth, window.innerHeight)
                    }
                }, {
                    key: "onUpdate",
                    value: function (e) {
                        MOBILE || TABLET || (this.uniforms.uTime.value = e)
                    }
                }]),
                    e
            }();
        t.a = r
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var n = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
                , i = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.sources = []
                    }
                    return n(t, [{
                        key: "run",
                        value: function (t) {
                            e.all(this.sources).then(t)
                        }
                    }]),
                        t
                }();
            t.a = i
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        var a = n(1)
            , o = n(2)
            , r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , s = function () {
                function e(t, n, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.scrollManager = t,
                        this.$target = n,
                        this.$firstParent = n.parentNode,
                        this.data = i || this.$target.dataset,
                        this.targetClientRect = 0,
                        this.targetOffsetTop = 0,
                        this.unitKind = 0,
                        this.transformKind = 0,
                        this.moveRange = 0,
                        this.moveRatio = 0,
                        this.start = 0,
                        this.end = 0,
                        this.velocity = [0, 0, 0],
                        this.smoothSatgeHeight = 0,
                        this.smoothSatgeHeightRatio = 0
                }
                return r(e, [{
                    key: "set",
                    value: function () {
                        this.$target.style.transform = "",
                            this.targetClientRect = this.$target.getBoundingClientRect(),
                            this.data = this.$target.dataset,
                            this.targetOffsetTop = a.a.getTargetOffsetTop(this.$target),
                            this.moveRange = this.data.smoothMoveRange || 6.5,
                            this.moveRatio = this.data.smoothMoveRatio || .013,
                            this.unitKind = this.data.smoothUnitKind || "deg",
                            this.transformKind = this.data.smoothTransformKind || "skew",
                            this.start = this.targetOffsetTop - (this.scrollManager.height || window.innerHeight),
                            this.end = this.targetOffsetTop + this.targetClientRect.height,
                            this.smoothSatgeHeight = this.targetClientRect.height + this.scrollManager.height,
                            this.smoothSatgeHeightRatio = 1 / this.smoothSatgeHeight,
                            this.onUpdate(!0)
                    }
                }, {
                    key: "onUpdate",
                    value: function (e, t) {
                        if (t && this.start <= this.scrollManager.now && this.scrollManager.now <= this.end) {
                            var n = (this.scrollManager.now - this.start) * this.smoothSatgeHeightRatio;
                            this.velocity[0] = 0,
                                this.velocity[1] = n * this.scrollManager.diff * .0175;
                            var i = o.a.clamp(this.velocity[1], -this.moveRange, this.moveRange);
                            this.$target.style.transform = this.transformKind + "(0" + this.unitKind + ", " + i + this.unitKind + ") translate3d(0,0,0)"
                        }
                    }
                }, {
                    key: "onComplete",
                    value: function () {
                        this.$target.style.transform = this.transformKind + "(0" + this.unitKind + ", 0" + this.unitKind + ") translate3d(0,0,0)"
                    }
                }]),
                    e
            }()
            , l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , u = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.scrollManager = t,
                        this.$targets = document.querySelectorAll(".js-target--smooth"),
                        this.targetLength = 0,
                        this.smoothItem = [],
                        this.canUpdate = !0
                }
                return l(e, [{
                    key: "run",
                    value: function () {
                        this.$targets = document.querySelectorAll(".js-target--smooth"),
                            this.targetLength = this.$targets.length;
                        for (var e = 0; e < this.targetLength;)
                            this.smoothItem[e] = new s(this.scrollManager, this.$targets[e], this.$targets[e].dataset),
                                e = e + 1 | 0;
                        this._set()
                    }
                }, {
                    key: "_set",
                    value: function () {
                        for (var e = 0; e < this.targetLength;)
                            this.smoothItem[e].set(),
                                e = e + 1 | 0
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        this._set()
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                            , t = arguments[1];
                        if (!MOBILE && !TABLET && this.canUpdate && 1 === window.devicePixelRatio)
                            for (var n = 0; n < this.targetLength;)
                                this.smoothItem[n].onUpdate(e, t),
                                    n = n + 1 | 0
                    }
                }, {
                    key: "onComplete",
                    value: function () {
                        if (!MOBILE && !TABLET && this.canUpdate && 1 === window.devicePixelRatio)
                            for (var e = 0; e < this.targetLength;)
                                this.smoothItem[e].onComplete(),
                                    e = e + 1 | 0
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        for (; i--;)
                            this.smoothItem[i] = null
                    }
                }]),
                    e
            }();
        t.a = u
    }
    , function (e, t, n) {
        "use strict";
        var a = n(2)
            , o = n(1)
            , r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , s = function () {
                function e(t, n, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.scrollManager = t,
                        this.$target = n,
                        this.$firstParent = n.closest(".js-parent--parallax") || n.parentNode,
                        this.data = i || this.$target.dataset,
                        this.targetClientRect = 0,
                        this.firstParentClientRect = 0,
                        this.parentOffsetTop = 0,
                        this.targetOffsetTop = 0,
                        this.unitKindX = 0,
                        this.unitKindY = 0,
                        this.moveRangeX = 0,
                        this.moveRangeY = 0,
                        this.start = 0,
                        this.end = 0,
                        this.velocity = [0, 0, 0],
                        this.parallaxSatgeHeight = 0,
                        this.parallaxSatgeHeightRatio = 0
                }
                return r(e, [{
                    key: "set",
                    value: function (e) {
                        this.$target.style.transform = "",
                            this.targetClientRect = this.$target.getBoundingClientRect(),
                            this.firstParentClientRect = this.$firstParent.getBoundingClientRect(),
                            this.data = this.$target.dataset,
                            this.parentOffsetTop = o.a.getTargetOffsetTop(this.$firstParent),
                            this.targetOffsetTop = o.a.getTargetOffsetTop(this.$target),
                            this.unitKindX = this.data.parallaxUnitKindX || "px",
                            this.unitKindY = this.data.parallaxUnitKindY || "px",
                            this.moveRangeX = parseInt(this.data.parallaxMoveRangeX) || 0,
                            this.moveRangeY = parseInt(this.data.parallaxMoveRangeY) || this.targetClientRect.height - this.firstParentClientRect.height || 0,
                            this.start = this.parentOffsetTop - (this.scrollManager.height || window.innerHeight) - this.targetClientRect.height,
                            this.end = this.parentOffsetTop + this.targetClientRect.height,
                            this.parallaxSatgeHeight = this.targetClientRect.height + this.scrollManager.height + this.targetClientRect.height,
                            this.parallaxSatgeHeightRatio = 1 / this.parallaxSatgeHeight,
                            this.onUpdate(e)
                    }
                }, {
                    key: "onUpdate",
                    value: function (e, t) {
                        if (t) {
                            var n = this.scrollManager.now;
                            if ((MOBILE || TABLET) && (n = this.scrollManager.st),
                                this.start <= n && n <= this.end) {
                                var i = (this.scrollManager.now - this.start) / this.parallaxSatgeHeight;
                                this.velocity[0] = i * this.moveRangeX,
                                    this.velocity[1] = i * this.moveRangeY;
                                var o = a.a.clamp(this.velocity[0], 0, this.moveRangeX)
                                    , r = a.a.clamp(this.velocity[1], 0, this.parallaxSatgeHeight);
                                MOBILE || "safari" !== uaName || (o = Math.round(o),
                                    r = Math.round(r)),
                                    this.$target.style.transform = "translate3D(" + -o + this.unitKindX + ", " + -r + this.unitKindY + ", 0)"
                            }
                        }
                    }
                }, {
                    key: "onComplete",
                    value: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                            , t = (this.scrollManager.now - this.start) * this.parallaxSatgeHeightRatio;
                        this.velocity[0] = t * this.moveRangeX,
                            this.velocity[1] = t * this.moveRangeY;
                        var n = Math.round(a.a.clamp(this.velocity[0], 0, this.moveRangeX))
                            , i = Math.round(a.a.clamp(this.velocity[1], 0, this.moveRangeY));
                        e && (this.$target.style.transform = "translate3D(" + -n + this.unitKindX + ", " + -i + this.unitKindY + ", 0)")
                    }
                }]),
                    e
            }()
            , l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , u = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.scrollManager = t,
                        this.$targets = document.querySelectorAll(".js-target--parallax"),
                        this.targetLength = 0,
                        this.parallaxItem = [],
                        this.canUpdate = !0,
                        this.canOnComplete = !0
                }
                return l(e, [{
                    key: "run",
                    value: function () {
                        this.$targets = document.querySelectorAll(".js-target--parallax"),
                            this.targetLength = this.$targets.length;
                        for (var e = 0; e < this.targetLength;)
                            this.parallaxItem[e] = new s(this.scrollManager, this.$targets[e], this.$targets[e].dataset),
                                e = e + 1 | 0;
                        this._set(!0)
                    }
                }, {
                    key: "_set",
                    value: function (e) {
                        for (var t = 0; t < this.targetLength;)
                            this.parallaxItem[t].set(e),
                                t = t + 1 | 0
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        this._set(this.canUpdate)
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = 0; t < this.targetLength;)
                            this.parallaxItem[t].onUpdate(e, this.canUpdate),
                                t = t + 1 | 0
                    }
                }, {
                    key: "onComplete",
                    value: function () {
                        for (var e = 0; e < this.targetLength;)
                            this.parallaxItem[e].onComplete(this.canOnComplete),
                                e = e + 1 | 0
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        for (; i--;)
                            this.parallaxItem[i] = null
                    }
                }]),
                    e
            }();
        t.a = u
    }
    , function (e, t, n) {
        "use strict";
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.$content = t || document,
                        this.target = "",
                        this.options = [],
                        this._eventEnter = "",
                        this._eventLeave = ""
                }
                return i(e, [{
                    key: "run",
                    value: function () {
                        var e = this;
                        this.target = this.$content.querySelectorAll(".js-hover"),
                            this._setFlag(this.target),
                            this._eventEnter = function (t) {
                                t.preventDefault(),
                                    e._hoverOverEvent(t.currentTarget)
                            }
                            ,
                            this._eventLeave = function (t) {
                                t.preventDefault(),
                                    e._hoverOutEvent(t.currentTarget)
                            }
                            ;
                        for (var t = this.target.length; t--;)
                            this.target[t].addEventListener("mouseenter", this._eventEnter, !1),
                                this.target[t].addEventListener("mouseleave", this._eventLeave, !1)
                    }
                }, {
                    key: "_setFlag",
                    value: function (e) {
                        for (var t = e.length; t--;) {
                            var n = e[t]
                                , i = n.dataset
                                , a = Number(i.hoverStep) || 1;
                            this.options[t] = {
                                step: a,
                                isHovering: !1,
                                isAnimating: !1
                            },
                                n.setAttribute("data-hover-num", t)
                        }
                    }
                }, {
                    key: "_hoverOverEvent",
                    value: function (e) {
                        var t = Number(e.dataset.hoverNum);
                        this.options[t].isHovering = !0,
                            this.options[t].isAnimating || this._startHoverOver(e, t)
                    }
                }, {
                    key: "_hoverOutEvent",
                    value: function (e) {
                        var t = Number(e.dataset.hoverNum);
                        this.options[t].isHovering = !1,
                            this.options[t].isAnimating || this._startHoverOut(e, t)
                    }
                }, {
                    key: "_startHoverOver",
                    value: function (e, t) {
                        var n = this
                            , i = Number(e.dataset.hoverInTime);
                        this.options[t].isAnimating = !0,
                            2 === this.options[t].step ? (e.classList.add("is-before-hover"),
                                setTimeout(function () {
                                    e.classList.add("is-hover"),
                                        e.classList.remove("is-before-hover")
                                }, 20),
                                setTimeout(function () {
                                    n._completeHoverOver(e, t)
                                }, 20 + i)) : (e.classList.add("is-hover"),
                                    setTimeout(function () {
                                        n._completeHoverOver(e, t)
                                    }, i))
                    }
                }, {
                    key: "_startHoverOut",
                    value: function (e, t) {
                        var n = this
                            , i = Number(e.dataset.hoverOutTime);
                        this.options[t].isAnimating = !0,
                            e.classList.add("is-hover-out"),
                            e.classList.remove("is-hover"),
                            setTimeout(function () {
                                n._completeHoverOut(e, t)
                            }, i)
                    }
                }, {
                    key: "_completeHoverOver",
                    value: function (e, t) {
                        this.options[t].isAnimating = !1,
                            this.options[t].isHovering || this._startHoverOut(e, t)
                    }
                }, {
                    key: "_completeHoverOut",
                    value: function (e, t) {
                        var n = this;
                        this.options[t].isAnimating = !1,
                            e.classList.remove("is-hover-out"),
                            setTimeout(function () {
                                n.options[t].isHovering && n._startHoverOver(e, t)
                            }, 50)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        for (var e = this.target.length; e--;)
                            this._startHoverOut(this.target[e], e),
                                this.target[e].removeEventListener("mouseenter", this._eventEnter),
                                this.target[e].removeEventListener("mouseleave", this._eventLeave)
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , , , function (e, t, n) {
        "use strict";
        var i = n(1)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.width = document.body.clientWidth,
                        this.prevWidth = this.width,
                        this.height = window.innerHeight,
                        this.canOnResize = !1,
                        this.aspect = {
                            xy: this.width / this.height,
                            yx: this.height / this.width
                        },
                        this.resizeHandler = [],
                        this.st = 0
                }
                return a(e, [{
                    key: "run",
                    value: function () {
                        window.addEventListener("resize", this._onResize.bind(this), !1),
                            i.a.triggerEvent(window, "resize")
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        window.removeEventListener("resize", this._onResize)
                    }
                }, {
                    key: "_onResize",
                    value: function () {
                        var t = this;
                        setTimeout(function () {
                            if (MOBILE || TABLET) {
                                if (t.prevWidth === (document.body.clientWidth || window.innerWidth) && !t.canOnResize)
                                    return;
                                t.prevWidth !== (document.body.clientWidth || window.innerWidth) && (PROJECT.initScreenHeight = window.innerHeight,
                                    e.resize())
                            }
                            t.width = document.body.clientWidth || window.innerWidth,
                                t.height = window.innerHeight,
                                t.prevWidth = t.width,
                                t.aspect = {
                                    xy: t.width / t.height,
                                    yx: t.height / t.width
                                },
                                t.st = document.documentElement.scrollTop || document.body.scrollTop,
                                t.resizeHandler.map(function (e) {
                                    e(t.st, t.width, t.height, t.aspect)
                                }),
                                t.canOnResize = !1
                        }, 0)
                    }
                }], [{
                    key: "resize",
                    value: function () {
                        var e = document.querySelectorAll(".js-target--height__screenFix--mobile");
                        if (e.length)
                            for (var t = 0; t < e.length; t++) {
                                var n = parseFloat(e[t].dataset.fixHeightRatio) || 1;
                                e[t].style.height = Math.round(PROJECT.initScreenHeight * n) + "px"
                            }
                    }
                }]),
                    e
            }();
        t.a = o
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(20)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function (t) {
                    function n() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        !function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var t = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                        return Object.assign(t, e),
                            t
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        o(n, [{
                            key: "run",
                            value: function () {
                                this.halfWidth = .5 * this.stageWidth,
                                    this.halfHeight = .5 * this.stageHeight
                            }
                        }, {
                            key: "drawArc",
                            value: function () {
                                var t = this
                                    , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .95
                                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.arcDelay;
                                if (this.canDraw)
                                    return this.tweenDrawArc && (this.tweenDrawArc.pause(),
                                        this.tweenDrawArc.kill(),
                                        this.tweenDrawArc = null),
                                        new e(function (e) {
                                            t.tweenDrawArc = i.to(t, n, {
                                                delay: a,
                                                ease: t.easeInOut,
                                                arcEndPointValue: t.arcLimitValue,
                                                onComplete: function () {
                                                    setTimeout(function () {
                                                        e()
                                                    }, 50)
                                                }
                                            })
                                        }
                                        )
                            }
                        }, {
                            key: "resetArc",
                            value: function () {
                                this.arcEndPointValue = this.arcInitValue
                            }
                        }, {
                            key: "draw",
                            value: function () {
                                this.canDraw && (this.$stage.width = this.stageWidth,
                                    this.context.beginPath(),
                                    this.context.fillStyle = "rgb(255, 255, 255)",
                                    this.context.fillRect(this.lastX, this.lastY, this.stageWidth, this.stageHeight),
                                    this.context.fill(),
                                    this.context.beginPath(),
                                    this.context.fillStyle = "rgb(0, 0, 0)",
                                    this.context.arc(this.halfWidth, this.halfHeight, this.$stage.height * this.arcSizeRatio * .85, this.arcStartPointValue, this.arcEndPointValue, this.canTurnLeft),
                                    this.context.lineWidth = this.$stage.height * this.arcSizeRatio * .3,
                                    this.context.stroke())
                            }
                        }]),
                        n
                }();
            t.a = r
        }
        ).call(this, n(4), n(5))
    }
    , , , , , , , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(18)
                , a = n.n(i)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.ignoreClassLink = "no-prefetch",
                            this.requestXhlOnComplete = function () { }
                            ,
                            this.requests = {},
                            this.casheData = {}
                    }
                    return o(t, [{
                        key: "init",
                        value: function () {
                            if (!window.history.pushState)
                                return !1;
                            document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)),
                                document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))
                        }
                    }, {
                        key: "onLinkEnter",
                        value: function (e) {
                            for (var n = e.target; n && !t.getHref(n);)
                                n = n.parentNode;
                            if (!(!n || n.classList.contains(this.ignoreClassLink) || n.getAttribute("target") && "_blank" === n.getAttribute("target"))) {
                                var i = t.getHref(n);
                                if (-1 === i.indexOf("mailto:") && -1 === i.indexOf("tel:") && !this.getCache(i)) {
                                    var a = this.requestXhl(i);
                                    this.setCache(i, a)
                                }
                            }
                        }
                    }, {
                        key: "requestXhl",
                        value: function (t) {
                            return new e(function (e) {
                                a.a.get(t).then(function (t) {
                                    e(t)
                                }).catch(function (e) { })
                            }
                            )
                        }
                    }, {
                        key: "preventCheck",
                        value: function (e, n) {
                            if (!window.history.pushState)
                                return !1;
                            var i = this.getHref(n);
                            return !(!n || !i || e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || n.target && "_blank" === n.target || window.location.protocol !== n.protocol || window.location.hostname !== n.hostname || t.getPort() !== t.getPort(n.port) || i.indexOf("#") > -1 || n.getAttribute && "string" == typeof n.getAttribute("download") || t.cleanLink(i) === t.cleanLink(location.href) || n.classList.contains(this.ignoreClassLink))
                        }
                    }, {
                        key: "getCache",
                        value: function (e) {
                            return this.casheData[e]
                        }
                    }, {
                        key: "setCache",
                        value: function (e, t) {
                            this.casheData[e] = t
                        }
                    }, {
                        key: "getRequestsFlag",
                        value: function (e) {
                            return this.requests[e]
                        }
                    }, {
                        key: "setRequests",
                        value: function (e, t) {
                            this.requests[e] = !0
                        }
                    }], [{
                        key: "getHref",
                        value: function (e) {
                            if (e)
                                return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0
                        }
                    }, {
                        key: "getPort",
                        value: function (e) {
                            var t = void 0 !== e ? e : window.location.port
                                , n = window.location.protocol;
                            return "" !== t ? parseInt(t) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
                        }
                    }, {
                        key: "cleanLink",
                        value: function (e) {
                            return e.replace(/#.*/, "")
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return o(t, [{
                        key: "run",
                        value: function (t, n, o, r, s, l) {
                            return function () {
                                var t = new i.a
                                    , n = (new a.a,
                                        document.body)
                                    , o = document.querySelector(".page-content")
                                    , r = o.getAttribute("id")
                                    , u = document.querySelector(".p-loading__inner")
                                    , c = document.querySelector(".p-loading__back")
                                    , h = document.querySelector(".p-loading__back__inner")
                                    , d = document.querySelector(".p-loading__front")
                                    , g = document.querySelector(".p-loading__front__inner");
                                t.add(function (t) {
                                    e.set("body,html,#wrapper", {
                                        scrollTop: 0
                                    }),
                                        n.classList.add("page-" + r),
                                        n.classList.add("top" === r ? "index" : "sub"),
                                        s.add(r, o),
                                        e.set(c, {
                                            force3D: !0,
                                            x: "-100%"
                                        }),
                                        e.set(h, {
                                            force3D: !0,
                                            x: "100%"
                                        }),
                                        e.set(d, {
                                            force3D: !0,
                                            x: "-100%"
                                        }),
                                        e.set(g, {
                                            force3D: !0,
                                            x: "100%"
                                        }),
                                        u.style.opacity = 1,
                                        i.a.wait(10).then(t)
                                }),
                                    t.add(function (e) {
                                        s.use("current").viewWillAppear(),
                                            PROJECT.onStartUp.add(function () {
                                                s.use("current").startUpFunction(e)
                                            })
                                    }),
                                    t.add(function (e) {
                                        i.a.wait(10).then(e)
                                    }),
                                    t.done(function () {
                                        document.querySelector("#wrapper").classList.add("was-startUp"),
                                            PROJECT.addTransition(!1),
                                            PROJECT.screenFix.clearFix(),
                                            window.pageInitialized = !0,
                                            i.a.wait(10).then(function () {
                                                l(null)
                                            })
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        (function (i) {
            var a, o, r, s = void 0 !== e && e.exports && void 0 !== i ? i : this || window;
            /*!
     * VERSION: 0.2.1
     * DATE: 2017-01-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
            /*!
     * VERSION: 0.2.1
     * DATE: 2017-01-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
            (s._gsQueue || (s._gsQueue = [])).push(function () {
                "use strict";
                s._gsDefine("easing.CustomEase", ["easing.Ease"], function (e) {
                    var t = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                        , n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                        , i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
                        , a = /[cLlsS]/g
                        , o = "CustomEase only accepts Cubic Bezier data."
                        , r = function e(t, n, i, a, o, r, s, l, u, c, h) {
                            var d, g = (t + i) / 2, f = (n + a) / 2, p = (i + o) / 2, v = (a + r) / 2, m = (o + s) / 2, y = (r + l) / 2, w = (g + p) / 2, T = (f + v) / 2, C = (p + m) / 2, R = (v + y) / 2, M = (w + C) / 2, S = (T + R) / 2, P = s - t, O = l - n, E = Math.abs((i - s) * O - (a - l) * P), k = Math.abs((o - s) * O - (r - l) * P);
                            return c || (c = [{
                                x: t,
                                y: n
                            }, {
                                x: s,
                                y: l
                            }],
                                h = 1),
                                c.splice(h || c.length - 1, 0, {
                                    x: M,
                                    y: S
                                }),
                                (E + k) * (E + k) > u * (P * P + O * O) && (d = c.length,
                                    e(t, n, g, f, w, T, M, S, u, c, h),
                                    e(M, S, C, R, m, y, s, l, u, c, h + 1 + (c.length - d))),
                                c
                        }
                        , s = function (e) {
                            var t, a, r, s, l, u, c, h, d, g, f, p = (e + "").replace(i, function (e) {
                                var t = +e;
                                return 1e-4 > t && t > -1e-4 ? 0 : t
                            }).match(n) || [], v = [], m = 0, y = 0, w = p.length, T = 2;
                            for (t = 0; w > t; t++)
                                if (d = s,
                                    isNaN(p[t]) ? l = (s = p[t].toUpperCase()) !== p[t] : t--,
                                    a = +p[t + 1],
                                    r = +p[t + 2],
                                    l && (a += m,
                                        r += y),
                                    t || (c = a,
                                        h = r),
                                    "M" === s)
                                    u && u.length < 8 && (v.length -= 1,
                                        T = 0),
                                        m = c = a,
                                        y = h = r,
                                        u = [a, r],
                                        T = 2,
                                        v.push(u),
                                        t += 2,
                                        s = "L";
                                else if ("C" === s)
                                    u || (u = [0, 0]),
                                        u[T++] = a,
                                        u[T++] = r,
                                        l || (m = y = 0),
                                        u[T++] = m + 1 * p[t + 3],
                                        u[T++] = y + 1 * p[t + 4],
                                        u[T++] = m += 1 * p[t + 5],
                                        u[T++] = y += 1 * p[t + 6],
                                        t += 6;
                                else if ("S" === s)
                                    "C" === d || "S" === d ? (g = m - u[T - 4],
                                        f = y - u[T - 3],
                                        u[T++] = m + g,
                                        u[T++] = y + f) : (u[T++] = m,
                                            u[T++] = y),
                                        u[T++] = a,
                                        u[T++] = r,
                                        l || (m = y = 0),
                                        u[T++] = m += 1 * p[t + 3],
                                        u[T++] = y += 1 * p[t + 4],
                                        t += 4;
                                else {
                                    if ("L" !== s && "Z" !== s)
                                        throw o;
                                    "Z" === s && (a = c,
                                        r = h,
                                        u.closed = !0),
                                        ("L" === s || Math.abs(m - a) > .5 || Math.abs(y - r) > .5) && (u[T++] = m + (a - m) / 3,
                                            u[T++] = y + (r - y) / 3,
                                            u[T++] = m + 2 * (a - m) / 3,
                                            u[T++] = y + 2 * (r - y) / 3,
                                            u[T++] = a,
                                            u[T++] = r,
                                            "L" === s && (t += 2)),
                                        m = a,
                                        y = r
                                }
                            return v[0]
                        }
                        , l = function (e) {
                            var t = this.lookup[e * this.l | 0] || this.lookup[this.l - 1];
                            return t.nx < e && (t = t.n),
                                t.y + (e - t.x) / t.cx * t.cy
                        }
                        , u = function (t, n, i) {
                            this._calcEnd = !0,
                                this.id = t,
                                t && (e.map[t] = this),
                                this.getRatio = l,
                                this.setData(n, i)
                        }
                        , c = u.prototype = new e;
                    return c.constructor = u,
                        c.setData = function (e, n) {
                            var i, l, u, c, h, d, g, f, p, v, m = (e = e || "0,0,1,1").match(t), y = 1, w = [];
                            if (v = (n = n || {}).precision || 1,
                                this.data = e,
                                this.lookup = [],
                                this.points = w,
                                this.fast = 1 >= v,
                                (a.test(e) || -1 !== e.indexOf("M") && -1 === e.indexOf("C")) && (m = s(e)),
                                4 === (i = m.length))
                                m.unshift(0, 0),
                                    m.push(1, 1),
                                    i = 8;
                            else if ((i - 2) % 6)
                                throw o;
                            for ((0 != +m[0] || 1 != +m[i - 2]) && function (e, t, n) {
                                n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                                var i, a = -1 * +e[0], o = -n, r = e.length, s = 1 / (+e[r - 2] + a), l = -t || (Math.abs(+e[r - 1] - +e[1]) < .01 * (+e[r - 2] - +e[0]) ? function (e) {
                                    var t, n = e.length, i = 999999999999;
                                    for (t = 1; n > t; t += 6)
                                        +e[t] < i && (i = +e[t]);
                                    return i
                                }(e) + o : +e[r - 1] + o);
                                for (l = l ? 1 / l : -s,
                                    i = 0; r > i; i += 2)
                                    e[i] = (+e[i] + a) * s,
                                        e[i + 1] = (+e[i + 1] + o) * l
                            }(m, n.height, n.originY),
                                this.rawBezier = m,
                                c = 2; i > c; c += 6)
                                l = {
                                    x: +m[c - 2],
                                    y: +m[c - 1]
                                },
                                    u = {
                                        x: +m[c + 4],
                                        y: +m[c + 5]
                                    },
                                    w.push(l, u),
                                    r(l.x, l.y, +m[c], +m[c + 1], +m[c + 2], +m[c + 3], u.x, u.y, 1 / (2e5 * v), w, w.length - 1);
                            for (i = w.length,
                                c = 0; i > c; c++)
                                g = w[c],
                                    f = w[c - 1] || g,
                                    g.x > f.x || f.y !== g.y && f.x === g.x || g === f ? (f.cx = g.x - f.x,
                                        f.cy = g.y - f.y,
                                        f.n = g,
                                        f.nx = g.x,
                                        this.fast && c > 1 && Math.abs(f.cy / f.cx - w[c - 2].cy / w[c - 2].cx) > 2 && (this.fast = !1),
                                        f.cx < y && (f.cx ? y = f.cx : (f.cx = .001,
                                            c === i - 1 && (f.x -= .001,
                                                y = Math.min(y, .001),
                                                this.fast = !1)))) : (w.splice(c--, 1),
                                                    i--);
                            if (i = 1 / y + 1 | 0,
                                this.l = i,
                                h = 1 / i,
                                d = 0,
                                g = w[0],
                                this.fast) {
                                for (c = 0; i > c; c++)
                                    p = c * h,
                                        g.nx < p && (g = w[++d]),
                                        l = g.y + (p - g.x) / g.cx * g.cy,
                                        this.lookup[c] = {
                                            x: p,
                                            cx: h,
                                            y: l,
                                            cy: 0,
                                            nx: 9
                                        },
                                        c && (this.lookup[c - 1].cy = l - this.lookup[c - 1].y);
                                this.lookup[i - 1].cy = w[w.length - 1].y - l
                            } else {
                                for (c = 0; i > c; c++)
                                    g.nx < c * h && (g = w[++d]),
                                        this.lookup[c] = g;
                                d < w.length - 1 && (this.lookup[c - 1] = w[w.length - 2])
                            }
                            return this._calcEnd = 1 !== w[w.length - 1].y || 0 !== w[0].y,
                                this
                        }
                        ,
                        c.getRatio = l,
                        c.getSVGData = function (e) {
                            return u.getSVGData(this, e)
                        }
                        ,
                        u.create = function (e, t, n) {
                            return new u(e, t, n)
                        }
                        ,
                        u.version = "0.2.1",
                        u.bezierToPoints = r,
                        u.get = function (t) {
                            return e.map[t]
                        }
                        ,
                        u.getSVGData = function (t, n) {
                            var i, a, o, r, s, l, u, c, h, d, g = 1e3, f = (n = n || {}).width || 100, p = n.height || 100, v = n.x || 0, m = (n.y || 0) + p, y = n.path;
                            if (n.invert && (p = -p,
                                m = 0),
                                (t = t.getRatio ? t : e.map[t] || console.log("No ease found: ", t)).rawBezier) {
                                for (i = [],
                                    u = t.rawBezier.length,
                                    o = 0; u > o; o += 2)
                                    i.push(((v + t.rawBezier[o] * f) * g | 0) / g + "," + ((m + t.rawBezier[o + 1] * -p) * g | 0) / g);
                                i[0] = "M" + i[0],
                                    i[1] = "C" + i[1]
                            } else
                                for (i = ["M" + v + "," + m],
                                    r = 1 / (u = Math.max(5, 200 * (n.precision || 1))),
                                    c = 5 / (u += 2),
                                    h = ((v + r * f) * g | 0) / g,
                                    a = ((d = ((m + t.getRatio(r) * -p) * g | 0) / g) - m) / (h - v),
                                    o = 2; u > o; o++)
                                    s = ((v + o * r * f) * g | 0) / g,
                                        l = ((m + t.getRatio(o * r) * -p) * g | 0) / g,
                                        (Math.abs((l - d) / (s - h) - a) > c || o === u - 1) && (i.push(h + "," + d),
                                            a = (l - d) / (s - h)),
                                        h = s,
                                        d = l;
                            return y && ("string" == typeof y ? document.querySelector(y) : y).setAttribute("d", i.join(" ")),
                                i.join(" ")
                        }
                        ,
                        u
                }, !0)
            }),
                s._gsDefine && s._gsQueue.pop()(),
                function (i) {
                    "use strict";
                    o = [n(101)],
                        void 0 === (r = "function" == typeof (a = function () {
                            return (s.GreenSockGlobals || s).CustomEase
                        }
                        ) ? a.apply(t, o) : a) || (e.exports = r)
                }()
        }
        ).call(this, n(10))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return o(t, [{
                        key: "run",
                        value: function (t, n, o, r, s, l) {
                            return function () {
                                var r = document.body
                                    , u = document.querySelector("#" + t)
                                    , c = o.querySelector("#" + n)
                                    , h = document.querySelector("#contents")
                                    , d = u.getAttribute("id")
                                    , g = c.getAttribute("id")
                                    , f = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , p = new a.a
                                    , v = new i.a
                                    , m = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , y = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , w = c.querySelector(".p-about__bg")
                                    , T = c.querySelector(".p-about__contact__bg")
                                    , C = document.querySelector(".js-transition__indicator")
                                    , R = document.querySelector(".p-sideContact__inner")
                                    , M = document.querySelector(".js-canvas__info")
                                    , S = c.querySelector(".p-about__section__title--first")
                                    , P = "";
                                v.add(function (t) {
                                    h.appendChild(c),
                                        e.set(c, {
                                            opacity: 0
                                        }),
                                        u && (s.add(n, c),
                                            s.use("prev").viewDidDisappear(),
                                            s.pop()),
                                        u.parentNode.removeChild(u),
                                        r.classList.remove("index"),
                                        r.classList.remove("sub"),
                                        r.classList.add(f),
                                        i.a.wait(10).then(t)
                                }),
                                    v.add(function (t) {
                                        PROJECT.stage.stop(!1),
                                            PROJECT.screenFix.fix(),
                                            e.set(c, {
                                                opacity: 1
                                            }),
                                            e.set(c, {
                                                force3D: !0,
                                                y: "-100%",
                                                opacity: 0
                                            }),
                                            e.set(w, {
                                                opacity: 0
                                            }),
                                            e.set(T, {
                                                opacity: 0
                                            }),
                                            C && e.set(C, {
                                                opacity: 0
                                            }),
                                            e.set(R, {
                                                opacity: 0
                                            }),
                                            P = S.querySelectorAll(".p-split");
                                        var n = .1 * document.body.clientWidth;
                                        e.set(P, {
                                            x: n,
                                            y: "-100%",
                                            rotationZ: 20,
                                            skewY: -30,
                                            force3D: !0
                                        }),
                                            R.style.visibility = "visible",
                                            r.classList.remove("page-" + d),
                                            r.classList.add("page-" + g),
                                            PROJECT.readyPageTransitionFromTopOfCanvas(c, d, g).then(function () {
                                                i.a.wait(0).then(t)
                                            })
                                    }),
                                    v.add(function (e) {
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = m,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = m,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            i.a.wait(0).then(e)
                                    }),
                                    v.add(function (t) {
                                        e.to(M, .7, {
                                            ease: p.linear,
                                            opacity: 0
                                        }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: p.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                delay: .1,
                                                ease: p.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                ease: p.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .1,
                                                ease: p.inOut,
                                                value: 0
                                            }),
                                            e.to(c, 2.2, {
                                                delay: .15,
                                                ease: p.inOut,
                                                force3D: !0,
                                                opacity: 1,
                                                y: "0%",
                                                onComplete: function () {
                                                    i.a.wait(0).then(t)
                                                }
                                            }),
                                            e.staggerTo(P, 1.5, {
                                                delay: 1.65,
                                                ease: p.outExpo,
                                                force3D: !0,
                                                x: 0,
                                                y: "0%",
                                                rotationZ: 0,
                                                skewY: 0,
                                                onComplete: function () { }
                                            }, .03)
                                    }),
                                    v.add(function (e) {
                                        c.style.transform = "",
                                            c.style.opacity = "",
                                            M.style.opacity = "",
                                            w.style.opacity = "",
                                            T.style.opacity = "",
                                            i.a.wait(100).then(e)
                                    }),
                                    v.add(function (e) {
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.stage.completeDashArray(),
                                            PROJECT.stage.stop(),
                                            PROJECT.glManager.disableMouseMove(),
                                            PROJECT.glManager.canUpdate = !1,
                                            s.use("current").viewWillAppear(),
                                            i.a.wait(10).then(e)
                                    }),
                                    v.add(function (t) {
                                        PROJECT.smoothScrollManager.run(),
                                            C && e.to(C, .7, {
                                                opacity: 1
                                            }),
                                            e.to(R, .7, {
                                                opacity: 1
                                            }),
                                            i.a.wait(10).then(t)
                                    }),
                                    v.done(function () {
                                        PROJECT.screenFix.clearFix(),
                                            l(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = h.querySelector(".p-works__bg")
                                    , C = document.querySelector(".js-canvas__info");
                                m.add(function (e) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        h.style.opacity = 0,
                                        f.appendChild(h),
                                        c.parentNode.removeChild(c),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                        l.use("current").viewWillAppear(),
                                        a.a.triggerEvent(window, "resize"),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (t) {
                                        PROJECT.stage.stop(!1),
                                            PROJECT.smoothScrollManager.run(),
                                            e.set(h, {
                                                force3D: !0,
                                                y: "-100%",
                                                opacity: 0
                                            }),
                                            e.set(T, {
                                                opacity: 0
                                            }),
                                            s.classList.remove("page-" + d),
                                            s.classList.add("page-" + g),
                                            PROJECT.stage.canUpdate = !1,
                                            PROJECT.readyPageTransitionFromTopOfCanvas(h, d, g).then(function () {
                                                i.a.wait(0).then(t)
                                            })
                                    }),
                                    m.add(function (e) {
                                        PROJECT.stage.disableCanvasEvent(),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            i.a.wait(0).then(e)
                                    }),
                                    m.add(function (t) {
                                        e.to(C, .7, {
                                            ease: v.linear,
                                            opacity: 0
                                        }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(h, 2.2, {
                                                delay: .15,
                                                ease: v.inOut,
                                                force3D: !0,
                                                opacity: 1,
                                                y: "0%",
                                                onComplete: function () {
                                                    h.style.transform = "",
                                                        i.a.wait(10).then(t)
                                                }
                                            })
                                    }),
                                    m.add(function (t) {
                                        T.style.opacity = "",
                                            setTimeout(function () {
                                                C.style.opacity = "",
                                                    e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                        value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                    }),
                                                    e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                        value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                    }),
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    i.a.wait(10).then(t)
                                            }, 100)
                                    }),
                                    m.add(function (e) {
                                        PROJECT.stage.completeDashArray(),
                                            PROJECT.stage.stop(),
                                            PROJECT.glManager.disableMouseMove(),
                                            PROJECT.glManager.canUpdate = !1,
                                            i.a.wait(10).then(e)
                                    }),
                                    m.done(function () {
                                        PROJECT.screenFix.clearFix(),
                                            PROJECT.smoothScrollManager.run(),
                                            u(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = n(1)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new a.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = c.querySelector(".p-about__bg")
                                    , C = document.querySelector(".js-transition__indicator")
                                    , R = document.querySelector(".p-sideContact__inner")
                                    , M = document.querySelector(".js-indicator--stage");
                                m.add(function (e) {
                                    document.body.classList.remove("is-stage-hide"),
                                        s.classList.add("is-transition-from-about"),
                                        PROJECT.stage.stop(),
                                        PROJECT.glManager.disableMouseMove(),
                                        PROJECT.glManager.canUpdate = !0,
                                        f.appendChild(h),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (t) {
                                        PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            MOBILE || TABLET ? (PROJECT.screenFix.addNoKeyDown(),
                                                PROJECT.screenFix.addNoKeyUp(),
                                                PROJECT.screenFix.addNoWheel()) : PROJECT.screenFix.fix(),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale.value = 0,
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                value: 1
                                            }),
                                            e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                value: 1
                                            }),
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                value: 0
                                            }),
                                            e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                value: 0
                                            }),
                                            e.set(c, {
                                                opacity: 1
                                            }),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            e.set(M, {
                                                opacity: 0
                                            }),
                                            document.querySelector(".p-pie--works").style.opacity = 0,
                                            PROJECT.stage.hideCanvasDom(!0),
                                            i.a.wait(100).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.set(T, {
                                            opacity: 0
                                        }),
                                            C && e.to(C, .7, {
                                                ease: v.linear,
                                                opacity: 0
                                            }),
                                            e.to(R, .7, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    R.style.opacity = "",
                                                        R.style.visibility = ""
                                                }
                                            }),
                                            e.to(c, .7, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    o.a.triggerEvent(window, "resize"),
                                                        s.classList.remove("page-" + d),
                                                        s.classList.add("page-" + g)
                                                }
                                            }),
                                            i.a.wait(500).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                            delay: .1,
                                            ease: v.inOut,
                                            value: 0
                                        }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: PROJECT.glManager.frontRawShaderMesh.sinStrengthRatio
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                ease: v.inOut,
                                                value: PROJECT.glManager.backRawShaderMesh.sinStrengthRatio
                                            }),
                                            i.a.wait(500).then(t)
                                    }),
                                    m.add(function (t) {
                                        PROJECT.indicator && (PROJECT.indicator.isShow = !1),
                                            e.to(M, .7, {
                                                opacity: 1
                                            }),
                                            C && (C.style.opacity = ""),
                                            document.querySelector(".p-pie--works").style.opacity = "",
                                            c.parentNode.removeChild(c),
                                            PROJECT.stage.showCanvasDom(!0).then(function () {
                                                PROJECT.stage.canParallaxUpdate = !1,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.smoothScrollManager.onResize(),
                                                    PROJECT.screenFix.clearFix(),
                                                    PROJECT.smoothScrollManager.clearFixed(),
                                                    PROJECT.smoothScrollManager.reStart(),
                                                    PROJECT.smoothScrollManager.stop(),
                                                    PROJECT.smoothScrollManager.destroy(),
                                                    i.a.wait(10).then(t)
                                            })
                                    }),
                                    m.add(function (e) {
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.add(function (e) {
                                        l.use("current").viewWillAppear(),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.done(function () {
                                        PROJECT.stage.reStart(),
                                            PROJECT.glManager.enableMouseMove(),
                                            PROJECT.stage.canDrag = !0,
                                            PROJECT.stage.canClick = !0,
                                            PROJECT.stage.canUpdateOnWheel = !0,
                                            s.classList.remove("is-transition-from-about"),
                                            u(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = document.querySelector(".js-canvas__info")
                                    , C = document.querySelector(".p-pie--works")
                                    , R = document.querySelector(".js-opening-roll")
                                    , M = h.querySelector(".js-work__title")
                                    , S = ""
                                    , P = 0
                                    , O = 0
                                    , E = 0
                                    , k = (c.querySelectorAll(".p-works__list__item"),
                                        document.querySelector(".js-transition__indicator"))
                                    , b = h.querySelector(".js-transition__bg")
                                    , _ = h.querySelector(".js-transition__number").children
                                    , x = h.querySelector(".js-transition__year").children
                                    , J = document.querySelector(".p-sideContact__inner")
                                    , L = h.querySelector(".js-transition__listContainer")
                                    , I = 0;
                                m.add(function (e) {
                                    PROJECT.glManager.canUpdate = !0,
                                        PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        s.classList.add("is-transition-about-to-works-detail"),
                                        f.appendChild(h),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        i.a.wait(10).then(e)
                                }),
                                    1 === PROJECT.pageTransitionState.aboutToWorksDetail ? (m.add(function (t) {
                                        PROJECT.stage.stop(),
                                            PROJECT.glManager.canUpdate = !0,
                                            I = parseInt(h.dataset.worksNum) - 1 || 0,
                                            PROJECT.stage.setSlideState(PROJECT.stage.slideNumState, I),
                                            PROJECT.stage.setSlideState(PROJECT.stage.slideState, I),
                                            PROJECT.stage.transitionTitle = PROJECT.stage.slideTitle[I],
                                            c.style = "position:absolute; width: 100%; min-width:100%; min-height: 100%;  top: 0;left: 0; z-index: 800;",
                                            e.set(C, {
                                                opacity: 0
                                            }),
                                            e.set(h, {
                                                opacity: 0
                                            }),
                                            i.a.wait(10).then(t)
                                    }),
                                        m.add(function (e) {
                                            PROJECT.glManager.disableMouseMove(),
                                                PROJECT.stage.force = -PROJECT.stage.slideNumState.current,
                                                i.a.wait(10).then(e)
                                        }),
                                        m.add(function (t) {
                                            PROJECT.stage.$nextTick(function () {
                                                PROJECT.stage.dashArrayBack = PROJECT.stage.toggleWrapperSizePI,
                                                    PROJECT.stage.dashOffset = PROJECT.stage.toggleWrapperSizePI,
                                                    PROJECT.smoothScrollManager.stop(),
                                                    PROJECT.smoothScrollManager.fixed(),
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = y,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = y,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                        value: 0
                                                    }),
                                                    e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                        value: 0
                                                    }),
                                                    e.set(document.querySelector(".p-timer"), {
                                                        opacity: 0
                                                    }),
                                                    e.to(c, .7, {
                                                        opacity: 0
                                                    }),
                                                    e.to(J, .7, {
                                                        ease: v.linear,
                                                        opacity: 0,
                                                        onComplete: function () {
                                                            J.style.opacity = "",
                                                                J.style.visibility = "",
                                                                c && (l.add(n, h),
                                                                    l.use("prev").viewDidDisappear(),
                                                                    l.pop())
                                                        }
                                                    }),
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.stage.hideCanvasDom(!0, !1),
                                                    MOBILE || TABLET ? i.a.wait(600).then(t) : i.a.wait(100).then(t)
                                            })
                                        }),
                                        m.add(function (e) {
                                            (MOBILE || TABLET) && a.a.triggerEvent(window, "resize"),
                                                i.a.wait(100).then(e)
                                        }),
                                        m.add(function (t) {
                                            e.to(C, .7, {
                                                opacity: 1
                                            }),
                                                e.to(document.querySelector(".js-opening-roll"), .7, {
                                                    delay: .4,
                                                    ease: v.inOut2,
                                                    force3D: !0,
                                                    y: 0,
                                                    opacity: 1
                                                }),
                                                PROJECT.stage.dashArrayBack = PROJECT.stage.toggleWrapperSizePI,
                                                PROJECT.stage.dashOffset = PROJECT.stage.toggleWrapperSizePI,
                                                i.a.wait(900).then(t)
                                        }),
                                        m.add(function (t) {
                                            c.parentNode.removeChild(c),
                                                s.classList.remove("page-" + d),
                                                PROJECT.smoothScrollManager.clearFixed(),
                                                PROJECT.smoothScrollManager.destroy(),
                                                e.set(h, {
                                                    opacity: 1
                                                }),
                                                e.set("body,html", {
                                                    scrollTop: 0
                                                }),
                                                h.style.transform = "",
                                                a.a.triggerEvent(window, "resize"),
                                                i.a.wait(100).then(t)
                                        }),
                                        m.add(function (e) {
                                            PROJECT.stage.nextPageImageLoaded(h, e)
                                        }),
                                        m.add(function (t) {
                                            e.to(c, 1, {
                                                opacity: 0
                                            }),
                                                PROJECT.stage.isShowTitleTransition = !0,
                                                O = M.getBoundingClientRect().top,
                                                i.a.wait(100).then(t)
                                        }),
                                        m.add(function (e) {
                                            S = document.querySelector(".js-transition__title"),
                                                P = S.getBoundingClientRect().top,
                                                E = P - O,
                                                l.use("current").viewWillAppear(),
                                                i.a.wait(150).then(e)
                                        }),
                                        m.add(function (e) {
                                            PROJECT.smoothScrollManager.run(),
                                                i.a.wait(100).then(e)
                                        }),
                                        m.add(function (t) {
                                            e.set(h, {
                                                force3D: !0,
                                                y: 1.2 * window.innerHeight
                                            }),
                                                e.set(M, {
                                                    opacity: 0
                                                }),
                                                i.a.wait(0).then(t)
                                        }),
                                        m.add(function (e) {
                                            s.classList.add("page-" + g),
                                                i.a.wait(0).then(e)
                                        }),
                                        m.add(function (t) {
                                            PROJECT.indicator && (PROJECT.indicator.isShow = !0,
                                                e.set(k, {
                                                    force3D: !0,
                                                    opacity: 0
                                                })),
                                                e.set(b, {
                                                    opacity: 0
                                                }),
                                                e.set(_, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(x, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(L, {
                                                    force3D: !0,
                                                    y: .4 * window.innerHeight
                                                }),
                                                i.a.wait(0).then(t)
                                        }),
                                        m.add(function (t) {
                                            i.a.wait(500).then(function () {
                                                PROJECT.headerManager.addStyle("black", !0)
                                            }),
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                    ease: v.inOut,
                                                    value: 1
                                                }),
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                    delay: .025,
                                                    ease: v.inOut,
                                                    value: 0
                                                }),
                                                e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                    delay: .125,
                                                    ease: v.inOut,
                                                    value: 1
                                                }),
                                                e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                    delay: .15,
                                                    ease: v.inOut,
                                                    value: 0
                                                }),
                                                e.to(h, 1.3, {
                                                    delay: .175,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: "0",
                                                    onComplete: function () {
                                                        h.style.transform = ""
                                                    }
                                                }),
                                                e.to(S, 1.1, {
                                                    delay: .425,
                                                    ease: v.linear,
                                                    color: "#1a1a1a"
                                                }),
                                                e.to(S, 1.4, {
                                                    delay: .425,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: -E,
                                                    onUpdate: function () {
                                                        PROJECT.stage.titleScaleSize = PROJECT.stage.titleScaleSize - (PROJECT.stage.titleScaleSize - 1) * this.ratio
                                                    }
                                                }),
                                                e.to(L, 1.6, {
                                                    delay: .4,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: 0,
                                                    onComplete: function () {
                                                        L.style.transform = ""
                                                    }
                                                }),
                                                PROJECT.indicator && e.to(k, 1, {
                                                    delay: 1.7,
                                                    ease: v.linear,
                                                    opacity: 1,
                                                    onComplete: function () {
                                                        k.style.opacity = ""
                                                    }
                                                }),
                                                e.to(b, 1, {
                                                    delay: 1.2,
                                                    ease: v.linear,
                                                    opacity: 1,
                                                    onComplete: function () {
                                                        b.style.opacity = ""
                                                    }
                                                }),
                                                e.staggerTo(_, 1.4, {
                                                    delay: 1.4,
                                                    ease: v.out2,
                                                    force3D: !0,
                                                    y: "0%",
                                                    onComplete: function () {
                                                        this.target.style.transform = ""
                                                    }
                                                }, .05),
                                                e.staggerTo(x, 1.4, {
                                                    delay: 1.5,
                                                    ease: v.out2,
                                                    force3D: !0,
                                                    y: "0%",
                                                    onComplete: function () {
                                                        this.target.style.transform = ""
                                                    }
                                                }, .05, function () {
                                                    i.a.wait(0).then(t)
                                                }),
                                                i.a.wait(1650).then(function () {
                                                    document.body.classList.add("is-show--close--works-detail")
                                                })
                                        }),
                                        m.add(function (t) {
                                            e.set(M, {
                                                opacity: 1
                                            }),
                                                document.querySelector(".p-timer").style = "",
                                                i.a.wait(10).then(t)
                                        }),
                                        m.add(function (t) {
                                            PROJECT.stage.isShowTitleTransition = !1,
                                                R.style.opacity = "",
                                                R.style.transform = "",
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                                e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                    value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                }),
                                                e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                    value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                }),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.front_mask_sin_strength,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.back_mask_sin_strength,
                                                PROJECT.stage.completeDashArray(),
                                                i.a.wait(10).then(t)
                                        }),
                                        m.add(function (e) {
                                            PROJECT.stage.stop(),
                                                PROJECT.glManager.disableMouseMove(),
                                                PROJECT.glManager.canUpdate = !1,
                                                i.a.wait(10).then(e)
                                        }),
                                        m.done(function () {
                                            s.classList.remove("is-transition-about-to-works-detail"),
                                                PROJECT.pageTransitionState.aboutToWorksDetail = 0,
                                                PROJECT.pageTransitionState.topToWorksDetail = 0,
                                                PROJECT.screenFix.clearFix(),
                                                u(null)
                                        })) : (m.add(function (t) {
                                            s.classList.remove("page-" + d),
                                                s.classList.add("page-" + g),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = y,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = y,
                                                e.set(T, {
                                                    opacity: 0
                                                }),
                                                e.set(h, {
                                                    force3D: !0,
                                                    y: 1.2 * window.innerHeight
                                                }),
                                                e.set(b, {
                                                    opacity: 0
                                                }),
                                                e.set(_, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(x, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(L, {
                                                    force3D: !0,
                                                    y: .4 * window.innerHeight
                                                }),
                                                e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                    value: 0
                                                }),
                                                e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                    value: 0
                                                }),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                PROJECT.indicator && e.to(k, .7, {
                                                    ease: v.linear,
                                                    opacity: 0
                                                }),
                                                e.to(J, .7, {
                                                    ease: v.linear,
                                                    opacity: 0,
                                                    onComplete: function () {
                                                        J.style.opacity = "",
                                                            J.style.visibility = ""
                                                    }
                                                }),
                                                e.to(c, .7, {
                                                    ease: v.linear,
                                                    opacity: 0,
                                                    onComplete: function () {
                                                        e.set(c, {
                                                            display: "none"
                                                        }),
                                                            c.parentNode.removeChild(c),
                                                            PROJECT.smoothScrollManager.clearFixed(),
                                                            PROJECT.smoothScrollManager.reStart(),
                                                            PROJECT.smoothScrollManager.stop(),
                                                            PROJECT.smoothScrollManager.destroy(),
                                                            e.set("body,html", {
                                                                scrollTop: 0
                                                            }),
                                                            a.a.triggerEvent(window, "resize"),
                                                            c && (l.add(n, h),
                                                                l.use("prev").viewDidDisappear(),
                                                                l.pop()),
                                                            i.a.wait(100).then(t)
                                                    }
                                                }),
                                                PROJECT.smoothScrollManager.stop(),
                                                PROJECT.smoothScrollManager.fixed(),
                                                PROJECT.stage.canvasInfoOpacity = 0,
                                                PROJECT.headerManager.addStyle("black", !0)
                                        }),
                                            m.add(function (t) {
                                                l.use("current").viewWillAppear(),
                                                    e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                        ease: v.inOut,
                                                        value: 1
                                                    }),
                                                    e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                        delay: .025,
                                                        ease: v.inOut,
                                                        value: 0
                                                    }),
                                                    e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                        delay: .125,
                                                        ease: v.inOut,
                                                        value: 1
                                                    }),
                                                    e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                        delay: .15,
                                                        ease: v.inOut,
                                                        value: 0
                                                    }),
                                                    e.to(h, 1.3, {
                                                        delay: .175,
                                                        ease: v.inOut,
                                                        force3D: !0,
                                                        y: "0",
                                                        onComplete: function () {
                                                            h.style.transform = ""
                                                        }
                                                    }),
                                                    e.to(L, 1.6, {
                                                        delay: .4,
                                                        ease: v.inOut,
                                                        force3D: !0,
                                                        y: 0,
                                                        onUpdate: function () {
                                                            PROJECT.smoothScrollManager.run()
                                                        },
                                                        onComplete: function () {
                                                            L.style.transform = ""
                                                        }
                                                    }),
                                                    PROJECT.indicator && e.to(k, 1, {
                                                        delay: 1.7,
                                                        ease: v.linear,
                                                        opacity: 1,
                                                        onComplete: function () {
                                                            k.style.opacity = ""
                                                        }
                                                    }),
                                                    e.to(b, 1, {
                                                        delay: 1.2,
                                                        ease: v.linear,
                                                        opacity: 1,
                                                        onComplete: function () {
                                                            b.style.opacity = ""
                                                        }
                                                    }),
                                                    e.staggerTo(_, 1.4, {
                                                        delay: 1.4,
                                                        ease: v.out2,
                                                        force3D: !0,
                                                        y: "0%",
                                                        onComplete: function () {
                                                            this.target.style.transform = ""
                                                        }
                                                    }, .05),
                                                    e.staggerTo(x, 1.4, {
                                                        delay: 1.5,
                                                        ease: v.out2,
                                                        force3D: !0,
                                                        y: "0%",
                                                        onComplete: function () {
                                                            this.target.style.transform = "",
                                                                i.a.wait(0).then(t)
                                                        }
                                                    }, .05),
                                                    i.a.wait(1650).then(function () {
                                                        document.body.classList.add("is-show--close--works-detail")
                                                    })
                                            }),
                                            m.add(function (t) {
                                                PROJECT.stage.canvasInfoOpacity = 1,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                                    e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                        value: 0
                                                    }),
                                                    e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                        value: 0
                                                    }),
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    e.set(T, {
                                                        opacity: 1
                                                    }),
                                                    PROJECT.smoothScrollManager.clearFixed(),
                                                    PROJECT.smoothScrollManager.reStart(),
                                                    a.a.triggerEvent(window, "resize"),
                                                    i.a.wait(10).then(t)
                                            }),
                                            m.done(function () {
                                                PROJECT.glManager.canUpdate = !1,
                                                    PROJECT.screenFix.clearFix(),
                                                    s.classList.remove("is-transition-about-to-works-detail"),
                                                    u(null)
                                            }))
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = document.querySelector("#contents")
                                    , g = c.getAttribute("id")
                                    , f = h.getAttribute("id")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = h.querySelector(".p-works__bg")
                                    , C = document.querySelector(".js-canvas__info")
                                    , R = document.querySelector("#pageCover")
                                    , M = document.querySelector("#canvasWrapper")
                                    , S = document.querySelector(".p-sideContact__inner")
                                    , P = document.querySelector(".js-transition__indicator")
                                    , O = document.querySelector(".p-timer");
                                m.add(function (e) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        s.classList.add("is-transition-from-about"),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        PROJECT.stage.hideCanvasDom(!1),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (t) {
                                        s.classList.remove("page-" + g),
                                            s.classList.add("page-" + f),
                                            PROJECT.indicator && (PROJECT.indicator.isShow = !1),
                                            PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            PROJECT.glManager.disableMouseMove(),
                                            PROJECT.glManager.canUpdate = !0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            e.set(M, {
                                                scale: 1.05
                                            }),
                                            e.set(h, {
                                                opacity: 0
                                            }),
                                            e.set(T, {
                                                opacity: 0
                                            }),
                                            e.set(O, {
                                                opacity: 0
                                            }),
                                            P && e.to(P, .8, {
                                                ease: v.linear,
                                                opacity: 0
                                            }),
                                            e.to(S, .8, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    S.style.opacity = "",
                                                        S.style.visibility = ""
                                                }
                                            }),
                                            e.to(R, .8, {
                                                ease: v.linear,
                                                opacity: 0
                                            }),
                                            e.to(M, .8, {
                                                ease: v.easeOut,
                                                scale: 1
                                            }),
                                            e.to(c, .8, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    c && (l.add(n, h),
                                                        l.use("prev").viewDidDisappear(),
                                                        l.pop()),
                                                        PROJECT.stage.hideCanvasDom(!0),
                                                        c.parentNode.removeChild(c),
                                                        PROJECT.smoothScrollManager.clearFixed(),
                                                        PROJECT.smoothScrollManager.destroy(),
                                                        i.a.wait(0).then(t)
                                                }
                                            })
                                    }),
                                    m.add(function (t) {
                                        e.set("body,html", {
                                            scrollTop: 0
                                        }),
                                            d.appendChild(h),
                                            l.use("current").viewWillAppear(),
                                            setTimeout(function () {
                                                a.a.triggerEvent(window, "resize"),
                                                    setTimeout(function () {
                                                        e.set(h, {
                                                            force3D: !0,
                                                            y: "-100%",
                                                            opacity: 0
                                                        }),
                                                            i.a.wait(100).then(t)
                                                    }, 0)
                                            }, 0)
                                    }),
                                    m.add(function (t) {
                                        e.to(C, .7, {
                                            ease: v.linear,
                                            opacity: 0
                                        }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            PROJECT.headerManager.addStyle("white", !0),
                                            e.to(h, 2.2, {
                                                delay: .15,
                                                ease: v.inOut,
                                                force3D: !0,
                                                opacity: 1,
                                                y: "0%",
                                                onComplete: function () {
                                                    h.style.transform = "",
                                                        i.a.wait(10).then(t)
                                                }
                                            })
                                    }),
                                    m.add(function (e) {
                                        C.style.opacity = "",
                                            T.style.opacity = "",
                                            PROJECT.indicator && (PROJECT.indicator.isShow = !1,
                                                P.style.opacity = ""),
                                            O.style.opacity = "",
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.stage.dashArray = 0,
                                            PROJECT.stage.dashArrayColor = "#fff",
                                            document.querySelector(".js-opening-roll").style.opacity = "",
                                            document.querySelector(".js-opening-roll").style.transform = "",
                                            PROJECT.stage.completeDashArray(),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.done(function () {
                                        PROJECT.screenFix.clearFix(),
                                            PROJECT.screenFix.removeNoKeyDown(),
                                            PROJECT.screenFix.removeNoKeyUp(),
                                            PROJECT.screenFix.removeNoWheel(),
                                            PROJECT.glManager.canUpdate = !1,
                                            s.classList.remove("is-transition-from-about"),
                                            PROJECT.smoothScrollManager.run(),
                                            u(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = n(1)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new a.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = c.querySelector(".p-works__bg")
                                    , C = document.querySelector(".js-indicator--stage");
                                PROJECT.stage.stop(),
                                    PROJECT.glManager.disableMouseMove(),
                                    PROJECT.glManager.canUpdate = !0,
                                    m.add(function (e) {
                                        document.body.classList.remove("is-stage-hide"),
                                            f.appendChild(h),
                                            s.classList.remove("index"),
                                            s.classList.remove("sub"),
                                            s.classList.add(p),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.add(function (t) {
                                        PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale.value = 0,
                                            s.classList.add("is-transition-works-to-top"),
                                            C && (C.style.opacity = 0),
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                value: 1
                                            }),
                                            e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                value: 1
                                            }),
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                value: 0
                                            }),
                                            e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                value: 0
                                            }),
                                            e.set(c, {
                                                opacity: 1
                                            }),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.stage.hideCanvasDom(!0, !0, !0, !1),
                                            i.a.wait(50).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.set(T, {
                                            opacity: 0
                                        }),
                                            e.to(c, .6, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    s.classList.remove("page-" + d),
                                                        s.classList.add("page-" + g),
                                                        (MOBILE || TABLET) && (PROJECT.screenFix.fix(),
                                                            o.a.triggerEvent(window, "resize"),
                                                            i.a.wait(100).then(t))
                                                }
                                            }),
                                            MOBILE || TABLET || i.a.wait(500).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                            delay: .1,
                                            ease: v.inOut,
                                            value: 0
                                        }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: PROJECT.glManager.frontRawShaderMesh.sinStrengthRatio
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                ease: v.inOut,
                                                value: PROJECT.glManager.backRawShaderMesh.sinStrengthRatio
                                            }),
                                            C && e.to(C, 1, {
                                                delay: .3,
                                                opacity: 1,
                                                onComplete: function () {
                                                    C.style.opacity = null
                                                }
                                            }),
                                            i.a.wait(550).then(t)
                                    }),
                                    m.add(function (e) {
                                        c.parentNode.removeChild(c),
                                            PROJECT.stage.showCanvasDom(!0, !1).then(function () {
                                                i.a.wait(0).then(e)
                                            })
                                    }),
                                    m.add(function (e) {
                                        PROJECT.stage.canParallaxUpdate = !1,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.smoothScrollManager.onResize(),
                                            PROJECT.smoothScrollManager.clearFixed(),
                                            PROJECT.smoothScrollManager.reStart(),
                                            PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.destroy(),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.add(function (e) {
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.add(function (e) {
                                        l.use("current").viewWillAppear(),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.done(function () {
                                        PROJECT.stage.reStart(),
                                            PROJECT.glManager.enableMouseMove(),
                                            PROJECT.stage.canDrag = !0,
                                            PROJECT.stage.canClick = !0,
                                            PROJECT.stage.canUpdateOnWheel = !0,
                                            s.classList.remove("is-transition-works-to-top"),
                                            u(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = n(1)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new a.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = document.querySelector(".js-canvas__info")
                                    , C = h.querySelector(".p-about__contact__bg")
                                    , R = document.querySelector(".p-sideContact__inner")
                                    , M = document.querySelector(".js-transition__indicator")
                                    , S = h.querySelector(".p-about__section__title--first")
                                    , P = "";
                                m.add(function (e) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        PROJECT.glManager.canUpdate = !0,
                                        f.appendChild(h),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (t) {
                                        s.classList.remove("page-" + d),
                                            s.classList.add("page-" + g),
                                            PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            PROJECT.glManager.canUpdate = !0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            e.set(T, {
                                                opacity: 0
                                            }),
                                            M && e.set(M, {
                                                opacity: 0
                                            }),
                                            e.set(R, {
                                                opacity: 0
                                            }),
                                            R.style.visibility = "visible",
                                            e.set(C, {
                                                opacity: 0
                                            }),
                                            e.set(h, {
                                                force3D: !0,
                                                y: "-100%",
                                                opacity: 0
                                            }),
                                            P = S.querySelectorAll(".p-split");
                                        var n = .1 * document.body.clientWidth;
                                        e.set(P, {
                                            x: n,
                                            y: "-100%",
                                            rotationZ: 20,
                                            skewY: -30,
                                            force3D: !0
                                        }),
                                            e.to(c, .8, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    PROJECT.stage.isShowPieBack = !1,
                                                        c.parentNode.removeChild(c),
                                                        PROJECT.smoothScrollManager.clearFixed(),
                                                        PROJECT.smoothScrollManager.reStart(),
                                                        e.set("body,html", {
                                                            scrollTop: 0
                                                        }),
                                                        o.a.triggerEvent(window, "resize")
                                                }
                                            }),
                                            i.a.wait(200).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.1, {
                                            ease: v.inOut,
                                            value: 1
                                        }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.1, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.1, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.1, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            PROJECT.headerManager.addStyle("white", !0),
                                            e.to(h, 2.2, {
                                                delay: .15,
                                                ease: v.inOut,
                                                force3D: !0,
                                                opacity: 1,
                                                y: "0%",
                                                onComplete: function () {
                                                    h.style.transform = "",
                                                        i.a.wait(300).then(t)
                                                }
                                            }),
                                            e.staggerTo(P, 1.5, {
                                                delay: 1.65,
                                                ease: v.outExpo,
                                                force3D: !0,
                                                x: 0,
                                                y: "0%",
                                                rotationZ: 0,
                                                skewY: 0
                                            }, .03)
                                    }),
                                    m.add(function (t) {
                                        e.set(T, {
                                            opacity: 1
                                        }),
                                            e.set(C, {
                                                opacity: 1
                                            }),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.stage.completeDashArray(),
                                            i.a.wait(100).then(t)
                                    }),
                                    m.add(function (e) {

                                        document.querySelector(".js-target__aboutClose").setAttribute("href", "/works/"),
                                            PROJECT.smoothScrollManager.run(),
                                            i.a.wait(100).then(e)
                                    }),
                                    m.done(function () {
                                        PROJECT.glManager.canUpdate = !1,
                                            l.use("current").viewWillAppear(),
                                            e.to(R, .7, {
                                                opacity: 1
                                            }),
                                            M ? e.to(M, .7, {
                                                opacity: 1,
                                                onComplete: function () {
                                                    i.a.wait(200).then(function () {
                                                        PROJECT.screenFix.clearFix(),
                                                            u(null)
                                                    })
                                                }
                                            }) : (PROJECT.screenFix.clearFix(),
                                                u(null))
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(3)
                , o = n(1)
                , r = n(47)
                , s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , l = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return s(t, [{
                        key: "run",
                        value: function (t, n, s, l, u, c) {
                            return function () {
                                var l = document.body
                                    , h = document.querySelector("#" + t)
                                    , d = s.querySelector("#" + n)
                                    , g = h.getAttribute("id")
                                    , f = d.getAttribute("id")
                                    , p = document.querySelector("#contents")
                                    , v = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , m = new a.a
                                    , y = new i.a
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , C = h.querySelector(".p-works__bg")
                                    , R = document.querySelector(".js-transition__indicator")
                                    , M = (document.querySelector("#canvasWrapper"),
                                        document.querySelector(".js-opening-roll"))
                                    , S = d.querySelector(".js-transition__bg")
                                    , P = d.querySelector(".js-work__title")
                                    , O = d.querySelector(".js-transition__number").children
                                    , E = d.querySelector(".js-transition__year").children
                                    , k = d.querySelector(".js-transition__listContainer")
                                    , b = document.querySelector(".p-timer")
                                    , _ = ""
                                    , x = 0
                                    , J = 0
                                    , L = 0
                                    , I = h.querySelectorAll(".p-works__list__item")
                                    , D = new r.a(I)
                                    , z = 0;
                                y.add(function (t) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        D.init(PROJECT.smoothScrollManager.now, PROJECT.resizeManager.height),
                                        p.appendChild(d),
                                        e.set(d, {
                                            force3D: !0,
                                            opacity: 0,
                                            y: 1.2 * window.innerHeight
                                        }),
                                        z = parseInt(d.dataset.worksNum) - 1 || 0,
                                        PROJECT.stage.setSlideState(PROJECT.stage.slideNumState, z),
                                        PROJECT.stage.setSlideState(PROJECT.stage.slideState, z),
                                        PROJECT.stage.transitionTitle = PROJECT.stage.slideTitle[z],
                                        PROJECT.stage.reSet(),
                                        l.classList.remove("index"),
                                        l.classList.remove("sub"),
                                        l.classList.add(v),
                                        h && (u.add(n, d),
                                            u.use("prev").viewDidDisappear(),
                                            u.pop()),
                                        PROJECT.stage.stop(),
                                        PROJECT.glManager.canUpdate = !0,
                                        e.set(h, {
                                            position: "absolute",
                                            "min-width": "100%",
                                            "min-height": "100%",
                                            top: 0,
                                            left: 0,
                                            "z-index": 800
                                        }),
                                        i.a.wait(10).then(t)
                                }),
                                    y.add(function (e) {
                                        PROJECT.glManager.disableMouseMove(),
                                            PROJECT.stage.force = -PROJECT.stage.slideNumState.current,
                                            i.a.wait(10).then(e)
                                    }),
                                    y.add(function (t) {
                                        PROJECT.stage.$nextTick(function () {
                                            PROJECT.smoothScrollManager.stop(),
                                                PROJECT.smoothScrollManager.fixed(),
                                                i.a.wait(50).then(function () {
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = T,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = T,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uHoverScale.value = 0,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uHoverScale.value = 0,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                        e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                            value: 0
                                                        }),
                                                        e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                            value: 0
                                                        }),
                                                        e.set(b, {
                                                            opacity: 0
                                                        }),
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                        PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                        PROJECT.stage.hideCanvasDom(!0, !1),
                                                        i.a.wait(100).then(t)
                                                })
                                        })
                                    }),
                                    y.add(function (e) {
                                        PROJECT.stage.dashOffset = PROJECT.stage.toggleWrapperSizePI,
                                            i.a.wait(10).then(e)
                                    }),
                                    y.add(function (t) {
                                        for (var n = function (t) {
                                            D.isShows[t] && t !== PROJECT.stage.slideNumState.current && (e.to(D.$targets[t].querySelector(".p-works__text__inner"), .7, {
                                                force3D: 1,
                                                ease: m.inOut2,
                                                y: -30,
                                                opacity: 0
                                            }),
                                                e.to(D.$targets[t].querySelector(".p-works__thumb__maskCover"), .7, {
                                                    force3D: 1,
                                                    ease: m.inOut2,
                                                    scaleY: 1,
                                                    onComplete: function () {
                                                        setTimeout(function () {
                                                            D.$targets[t].style.transition = "none",
                                                                D.$targets[t].style.opacity = 0
                                                        }, 150)
                                                    }
                                                }))
                                        }, a = 0; a < D.targetLength; a++)
                                            n(a);
                                        D.$targets[PROJECT.stage.slideNumState.current].classList.add("is-clicked"),
                                            e.to(D.$targets[PROJECT.stage.slideNumState.current].querySelector(".p-works__text__inner"), .7, {
                                                force3D: 1,
                                                delay: .225,
                                                ease: m.inOut2,
                                                opacity: 0,
                                                y: -30
                                            }),
                                            e.to(D.$targets[PROJECT.stage.slideNumState.current].querySelector(".p-works__thumb__maskCover"), .7, {
                                                force3D: 1,
                                                ease: m.inOut2,
                                                delay: .225,
                                                scaleY: 1,
                                                onComplete: function () {
                                                    setTimeout(function () {
                                                        D.$targets[PROJECT.stage.slideNumState.current].style.transition = "none",
                                                            D.$targets[PROJECT.stage.slideNumState.current].style.opacity = 0
                                                    }, 150)
                                                }
                                            }),
                                            e.to(document.querySelector(".js-opening-roll"), .7, {
                                                delay: .8,
                                                ease: m.inOut2,
                                                force3D: !0,
                                                y: 0,
                                                opacity: 1
                                            }),
                                            PROJECT.stage.dashArrayBack = PROJECT.stage.toggleWrapperSize * Math.PI,
                                            i.a.wait(800).then(t)
                                    }),
                                    y.add(function (t) {
                                        h.parentNode.removeChild(h),
                                            l.classList.remove("page-" + g),
                                            PROJECT.smoothScrollManager.clearFixed(),
                                            PROJECT.smoothScrollManager.destroy(),
                                            e.set(d, {
                                                opacity: 1
                                            }),
                                            e.set("body,html", {
                                                scrollTop: 0
                                            }),
                                            d.style.transform = "",
                                            o.a.triggerEvent(window, "resize"),
                                            i.a.wait(100).then(t)
                                    }),
                                    y.add(function (t) {
                                        e.to(C, .4, {
                                            opacity: 0
                                        }),
                                            PROJECT.stage.nextPageImageLoaded(d, t)
                                    }),
                                    y.add(function (t) {
                                        e.to(h, 1, {
                                            opacity: 0
                                        }),
                                            PROJECT.stage.isShowTitleTransition = !0,
                                            J = P.getBoundingClientRect().top,
                                            u.use("current").viewWillAppear(),
                                            i.a.wait(100).then(t)
                                    }),
                                    y.add(function (e) {
                                        _ = document.querySelector(".js-transition__title"),
                                            x = _.getBoundingClientRect().top,
                                            L = x - J,
                                            PROJECT.smoothScrollManager.run(),
                                            i.a.wait(150).then(e)
                                    }),
                                    y.add(function (t) {
                                        e.set(d, {
                                            force3D: !0,
                                            y: 1.2 * window.innerHeight
                                        }),
                                            e.set(P, {
                                                opacity: 0
                                            }),
                                            i.a.wait(0).then(t)
                                    }),
                                    y.add(function (e) {
                                        l.classList.add("page-" + f),
                                            i.a.wait(0).then(e)
                                    }),
                                    y.add(function (t) {
                                        PROJECT.indicator && (PROJECT.indicator.isShow = !0,
                                            e.set(R, {
                                                force3D: !0,
                                                opacity: 0
                                            })),
                                            e.set(S, {
                                                opacity: 0
                                            }),
                                            e.set(O, {
                                                force3D: !0,
                                                y: "100%"
                                            }),
                                            e.set(E, {
                                                force3D: !0,
                                                y: "100%"
                                            }),
                                            e.set(k, {
                                                force3D: !0,
                                                y: .4 * window.innerHeight
                                            }),
                                            i.a.wait(0).then(t)
                                    }),
                                    y.add(function (t) {
                                        i.a.wait(500).then(function () {
                                            PROJECT.headerManager.addStyle("black", !0)
                                        }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                ease: m.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .025,
                                                ease: m.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                delay: .125,
                                                ease: m.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                delay: .15,
                                                ease: m.inOut,
                                                value: 0
                                            }),
                                            e.to(d, 1.3, {
                                                delay: .175,
                                                ease: m.inOut,
                                                force3D: !0,
                                                y: "0",
                                                onComplete: function () {
                                                    d.style.transform = ""
                                                }
                                            }),
                                            e.to(k, 1.6, {
                                                delay: .4,
                                                ease: m.inOut,
                                                force3D: !0,
                                                y: 0,
                                                onComplete: function () {
                                                    k.style.transform = ""
                                                }
                                            }),
                                            e.to(_, 1.1, {
                                                delay: .425,
                                                ease: m.linear,
                                                color: "#1a1a1a"
                                            }),
                                            e.to(_, 1.4, {
                                                delay: .425,
                                                ease: m.inOut,
                                                force3D: !0,
                                                y: -L,
                                                onUpdate: function () {
                                                    PROJECT.stage.titleScaleSize = PROJECT.stage.titleScaleSize - (PROJECT.stage.titleScaleSize - 1) * this.ratio
                                                }
                                            }),
                                            PROJECT.indicator && e.to(R, 1, {
                                                delay: 1.7,
                                                ease: m.linear,
                                                opacity: 1,
                                                onComplete: function () {
                                                    R.style.opacity = ""
                                                }
                                            }),
                                            e.to(S, 1, {
                                                delay: 1.2,
                                                ease: m.linear,
                                                opacity: 1,
                                                onComplete: function () {
                                                    S.style.opacity = ""
                                                }
                                            }),
                                            e.staggerTo(O, 1.4, {
                                                delay: 1.4,
                                                ease: m.out2,
                                                force3D: !0,
                                                y: "0%",
                                                onComplete: function () {
                                                    this.target.style.transform = ""
                                                }
                                            }, .05),
                                            e.staggerTo(E, 1.4, {
                                                delay: 1.5,
                                                ease: m.out2,
                                                force3D: !0,
                                                y: "0%",
                                                onComplete: function () {
                                                    this.target.style.transform = ""
                                                }
                                            }, .05, function () {
                                                i.a.wait(0).then(t)
                                            }),
                                            IE && i.a.wait(3100).then(t),
                                            i.a.wait(1650).then(function () {
                                                document.body.classList.add("is-show--close--works-detail")
                                            })
                                    }),
                                    y.add(function (t) {
                                        e.set(P, {
                                            opacity: 1
                                        }),
                                            b.style.opacity = "",
                                            i.a.wait(10).then(t)
                                    }),
                                    y.add(function (t) {
                                        e.set(P, {
                                            opacity: 1
                                        }),
                                            PROJECT.stage.isShowTitleTransition = !1,
                                            M.style.opacity = "",
                                            M.style.transform = "",
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                            }),
                                            e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                            }),
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.front_mask_sin_strength,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.back_mask_sin_strength,
                                            PROJECT.stage.completeDashArray(),
                                            i.a.wait(10).then(t)
                                    }),
                                    y.add(function (e) {
                                        PROJECT.stage.stop(),
                                            PROJECT.glManager.disableMouseMove(),
                                            PROJECT.glManager.canUpdate = !1,
                                            i.a.wait(10).then(e)
                                    }),
                                    y.done(function () {
                                        PROJECT.pageTransitionState.topToWorksDetail = 0,
                                            PROJECT.screenFix.clearFix(),
                                            c(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = l
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        var i = n(1)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.$targets = t,
                        this.targetLength = 0,
                        this.targetOffsets = [],
                        this.targetClientRects = [],
                        this.start = [],
                        this.end = [],
                        this.isShows = [],
                        this.st = 0,
                        this.windowHeight = 0
                }
                return a(e, [{
                    key: "init",
                    value: function (e, t) {
                        this.targetLength = this.$targets.length,
                            this.st = e || document.documentElement.scrollTop || document.body.scrollTop,
                            this.windowHeight = t || window.innerHeight;
                        for (var n = 0; n < this.targetLength; n++)
                            this.targetOffsets[n] = i.a.getTargetOffsetTop(this.$targets[n]),
                                this.targetClientRects[n] = this.$targets[n].getBoundingClientRect(),
                                this.start[n] = this.targetOffsets[n] - this.windowHeight - 100,
                                this.end[n] = this.targetOffsets[n] + this.targetClientRects[n].height + 100,
                                this.isShows[n] = this.start[n] <= this.st && this.st <= this.end[n]
                    }
                }]),
                    e
            }();
        t.a = o
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , w = 0
                                    , T = 0
                                    , C = 0
                                    , R = {
                                        value: 1
                                    }
                                    , M = {
                                        value: 0
                                    }
                                    , S = ""
                                    , P = document.querySelector(".js-transition__indicator")
                                    , O = h.querySelector(".js-work__title")
                                    , E = h.querySelector(".js-transition__bg")
                                    , k = h.querySelector(".js-transition__number").children
                                    , b = h.querySelector(".js-transition__year").children
                                    , _ = h.querySelector(".js-transition__listContainer")
                                    , x = document.querySelectorAll(".js-line")
                                    , J = document.querySelectorAll(".js-control__text")
                                    , L = document.querySelector(".js-opening-roll")
                                    , I = document.querySelector(".js-transition__indicator")
                                    , D = document.querySelector("#pageCover");
                                m.add(function (t) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        s.classList.add("is-transition"),
                                        s.classList.add("is-fx-top-to-works-detail"),
                                        e.set(h, {
                                            opacity: 0
                                        }),
                                        f.appendChild(h),
                                        c.parentNode.removeChild(c),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                        i.a.wait(10).then(t)
                                }),
                                    1 === PROJECT.pageTransitionState.topToWorksDetail ? (m.add(function (t) {
                                        P && e.set(P, {
                                            force3D: !0,
                                            opacity: 0
                                        }),
                                            l.use("current").viewWillAppear(),
                                            a.a.triggerEvent(window, "resize"),
                                            i.a.wait(10).then(t)
                                    }),
                                        m.add(function (e) {
                                            PROJECT.stage.stop(!1),
                                                PROJECT.screenFix.fix(),
                                                w = O.getBoundingClientRect().top,
                                                i.a.wait(10).then(function () {
                                                    e()
                                                })
                                        }),
                                        m.add(function (t) {
                                            e.set(O, {
                                                opacity: 0
                                            }),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                                s.classList.remove("page-" + d),
                                                s.classList.add("page-" + g),
                                                PROJECT.readyPageTransitionFromTopOfCanvas(h, d, g).then(function () {
                                                    i.a.wait(10).then(t)
                                                })
                                        }),
                                        m.add(function (e) {
                                            PROJECT.smoothScrollManager.run(),
                                                i.a.wait(50).then(e)
                                        }),
                                        m.add(function (t) {
                                            e.set(h, {
                                                force3D: !0,
                                                y: 1.2 * window.innerHeight
                                            }),
                                                e.set(h, {
                                                    opacity: 1
                                                }),
                                                i.a.wait(10).then(t)
                                        }),
                                        m.add(function (t) {
                                            S = document.querySelector(".js-transition__title"),
                                                T = S.getBoundingClientRect().top,
                                                C = T - w,
                                                PROJECT.indicator && (PROJECT.indicator.isShow = !0),
                                                e.set(E, {
                                                    opacity: 0
                                                }),
                                                e.set(k, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(b, {
                                                    force3D: !0,
                                                    y: "100%"
                                                }),
                                                e.set(_, {
                                                    force3D: !0,
                                                    y: .4 * window.innerHeight
                                                }),
                                                i.a.wait(0).then(t)
                                        }),
                                        m.add(function (t) {
                                            i.a.wait(500).then(function () {
                                                PROJECT.headerManager.addStyle("black", !0)
                                            }),
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                    ease: v.inOut,
                                                    value: 1
                                                }),
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                    delay: .025,
                                                    ease: v.inOut,
                                                    value: 0
                                                }),
                                                e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                    delay: .125,
                                                    ease: v.inOut,
                                                    value: 1
                                                }),
                                                e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                    delay: .15,
                                                    ease: v.inOut,
                                                    value: 0
                                                }),
                                                e.to(h, 1.3, {
                                                    delay: .175,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: "0",
                                                    onComplete: function () { }
                                                }),
                                                e.to(S, 1.1, {
                                                    delay: .425,
                                                    ease: v.linear,
                                                    color: "#1a1a1a"
                                                }),
                                                e.to(S, 1.4, {
                                                    delay: .425,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: -C,
                                                    onUpdate: function () {
                                                        PROJECT.stage.titleScaleSize = PROJECT.stage.titleScaleSize - (PROJECT.stage.titleScaleSize - 1) * this.ratio
                                                    }
                                                }),
                                                e.to(_, 1.6, {
                                                    delay: .4,
                                                    ease: v.inOut,
                                                    force3D: !0,
                                                    y: 0,
                                                    onComplete: function () { }
                                                }),
                                                P && e.to(P, 1, {
                                                    delay: 1.7,
                                                    ease: v.linear,
                                                    opacity: 1,
                                                    onComplete: function () {
                                                        P.style.opacity = ""
                                                    }
                                                }),
                                                e.to(E, 1, {
                                                    delay: 1.2,
                                                    ease: v.linear,
                                                    opacity: 1,
                                                    onComplete: function () {
                                                        E.style.opacity = ""
                                                    }
                                                }),
                                                e.staggerTo(k, 1.4, {
                                                    delay: 1.4,
                                                    ease: v.out2,
                                                    force3D: !0,
                                                    y: "0%",
                                                    onComplete: function () { }
                                                }, .05),
                                                e.staggerTo(b, 1.4, {
                                                    delay: 1.5,
                                                    ease: v.out2,
                                                    force3D: !0,
                                                    y: "0%",
                                                    onComplete: function () { }
                                                }, .05, function () {
                                                    i.a.wait(100).then(t)
                                                }),
                                                IE && i.a.wait(3100).then(t),
                                                i.a.wait(1650).then(function () {
                                                    document.body.classList.add("is-show--close--works-detail")
                                                })
                                        }),
                                        m.add(function (t) {
                                            h.style.transform = null,
                                                _.style.transform = null;
                                            for (var n = 0; n < b.length; n++)
                                                b[n].style.transform = null;
                                            for (var a = 0; a < k.length; a++)
                                                k[a].style.transform = null;
                                            e.set(O, {
                                                opacity: 1
                                            }),
                                                i.a.wait(10).then(t)
                                        }),
                                        m.add(function (t) {
                                            PROJECT.stage.isShowTitleTransition = !1,
                                                e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                    value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                }),
                                                e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio, {
                                                    value: PROJECT.glManager.vignetteGuiCtrl.gradation_ratio
                                                }),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.front_mask_sin_strength,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength.value = PROJECT.glManager.transitionGuiCtrl.back_mask_sin_strength,
                                                PROJECT.stage.completeDashArray(),
                                                i.a.wait(10).then(t)
                                        }),
                                        m.add(function (e) {
                                            PROJECT.stage.stop(),
                                                PROJECT.glManager.disableMouseMove(),
                                                PROJECT.glManager.canUpdate = !1,
                                                a.a.triggerEvent(window, "resize"),
                                                setTimeout(function () {
                                                    PROJECT.screenFix.clearFix(),
                                                        i.a.wait(10).then(e)
                                                }, 0)
                                        }),
                                        m.done(function () {
                                            PROJECT.pageTransitionState.topToWorksDetail = 0,
                                                PROJECT.screenFix.clearFix(),
                                                s.classList.remove("is-transition"),
                                                s.classList.remove("is-fx-top-to-works-detail"),
                                                PROJECT.smoothScrollManager.run(),
                                                u(null)
                                        })) : (m.add(function (t) {
                                            e.set(h, {
                                                opacity: 1
                                            }),
                                                document.querySelector("#pageCoverText").style.display = "none",
                                                PROJECT.stage.stopProgress(),
                                                PROJECT.stage.stop(!1),
                                                h.querySelector(".js-transition__list__item").style.transform = "",
                                                e.set(L, {
                                                    y: 0
                                                }),
                                                PROJECT.indicator && (e.set(I, {
                                                    opacity: 0
                                                }),
                                                    PROJECT.indicator.isShow = !0),
                                                e.to(x, .5, {
                                                    ease: a.a.getCubicCurve(.4, 0, .25, 1),
                                                    force3D: !0,
                                                    scaleX: 0
                                                }),
                                                e.to(J, .5, {
                                                    ease: a.a.getCubicCurve(.2, .4, .4, 1),
                                                    force3D: !0,
                                                    y: 10
                                                }),
                                                e.to(J, .5, {
                                                    ease: v.linear,
                                                    force3D: !0,
                                                    opacity: 0
                                                }),
                                                PROJECT.frontCircleBackAnimation(),
                                                e.to(L, .7, {
                                                    delay: .9,
                                                    ease: v.outQuart,
                                                    opacity: 0,
                                                    y: 15
                                                }),
                                                e.to(R, 1.3, {
                                                    delay: .15,
                                                    ease: v.inOutQuart,
                                                    value: 0,
                                                    onUpdate: function () {
                                                        PROJECT.stage.dashArrayBack = R.value * PROJECT.stage.toggleWrapperSize * Math.PI
                                                    }
                                                }),
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, 1, {
                                                    delay: .7,
                                                    ease: v.outQuad,
                                                    value: .15
                                                }),
                                                e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, 1, {
                                                    delay: .7,
                                                    ease: v.outQuad,
                                                    value: .15
                                                }),
                                                e.to(D, 1, {
                                                    delay: .7,
                                                    ease: v.linear,
                                                    opacity: 1,
                                                    onUpdate: function () {
                                                        PROJECT.smoothScrollManager.run()
                                                    },
                                                    onComplete: function () {
                                                        L.style.opacity = "",
                                                            L.style.transform = "",
                                                            PROJECT.stage.stop(),
                                                            PROJECT.stage.isShowPieBack = !1,
                                                            i.a.wait(0).then(t)
                                                    }
                                                })
                                        }),
                                            m.add(function (e) {
                                                PROJECT.stage.refresh().then(function () {
                                                    i.a.wait(10).then(e)
                                                })
                                            }),
                                            m.add(function (t) {
                                                s.classList.remove("page-" + d),
                                                    s.classList.add("page-" + g);
                                                var n = document.querySelector(".js-smooth-scroll-content")
                                                    , a = n.scrollHeight - 2 * window.innerHeight
                                                    , o = window.scrollY > a
                                                    , r = 0;
                                                o && (r = .4),
                                                    e.set(x, {
                                                        force3D: !0,
                                                        scaleX: 1
                                                    }),
                                                    e.set(J, {
                                                        force3D: !0,
                                                        y: 0,
                                                        opacity: 1
                                                    }),
                                                    L.style.transform = "",
                                                    PROJECT.indicator && PROJECT.indicator.init(),
                                                    l.use("current").viewWillAppear(),
                                                    PROJECT.headerManager.addStyle("black", !0),
                                                    PROJECT.indicator && e.to(I, 1, {
                                                        delay: .2,
                                                        opacity: 1,
                                                        onComplete: function () {
                                                            I.style.opacity = ""
                                                        }
                                                    }),
                                                    e.to(D, .6, {
                                                        delay: r,
                                                        ease: v.linear,
                                                        opacity: 0
                                                    }),
                                                    e.to(M, .4, {
                                                        value: 1,
                                                        onUpdate: function () {
                                                            o && window.scrollTo(0, n.scrollHeight - 2 * window.innerHeight * M.value)
                                                        }
                                                    }),
                                                    i.a.wait(600).then(t)
                                            }),
                                            m.add(function (t) {
                                                PROJECT.stage.reStart(),
                                                    document.body.classList.add("is-show--close--works-detail"),
                                                    e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionScale, {
                                                        value: 0
                                                    }),
                                                    e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionScale, {
                                                        value: 0
                                                    }),
                                                    setTimeout(function () {
                                                        PROJECT.scrollRecognizeManager.removeNoWheel(),
                                                            a.a.triggerEvent(window, "resize"),
                                                            PROJECT.stage.stop(),
                                                            i.a.wait(10).then(t)
                                                    }, 0)
                                            }),
                                            m.done(function () {
                                                PROJECT.pageTransitionState.topToWorksDetail = 0,
                                                    document.querySelector("#pageCoverText").style.display = "block",
                                                    PROJECT.screenFix.clearFix(),
                                                    s.classList.remove("is-transition"),
                                                    s.classList.remove("is-fx-top-to-works-detail"),
                                                    PROJECT.smoothScrollManager.run(),
                                                    u(null)
                                            }))
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = c.getAttribute("id")
                                    , g = h.getAttribute("id")
                                    , f = document.querySelector("#contents")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        value: 0
                                    }
                                    , w = document.querySelector(".js-transition__number").children
                                    , T = document.querySelector(".js-transition__year").children
                                    , C = document.querySelector(".js-work__title")
                                    , R = document.querySelector(".js-transition__indicator")
                                    , M = 0
                                    , S = document.querySelector(".js-transition__list").firstElementChild
                                    , P = document.querySelector("#pageCover")
                                    , O = ""
                                    , E = 0
                                    , k = 0
                                    , b = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    };
                                m.add(function (e) {
                                    document.body.classList.remove("is-stage-hide"),
                                        PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        s.classList.add("is-back-works-detail-to-index"),
                                        1 === PROJECT.pageTransitionState.worksDetailToTop ? PROJECT.stage.slideNumState.current = (PROJECT.currentWorksNum - 1) % PROJECT.stage.slideLength : (PROJECT.stage.slideNumState.current = (PROJECT.currentWorksNum - 2) % PROJECT.stage.slideLength,
                                            PROJECT.stage.transitionTitle = PROJECT.worksTitleList[(PROJECT.currentWorksNum - 2) % PROJECT.stage.slideLength]),
                                        PROJECT.stage.setSlideState(PROJECT.stage.slideNumState, PROJECT.stage.slideNumState.current),
                                        PROJECT.stage.setSlideState(PROJECT.stage.slideState, PROJECT.stage.slideNumState.current),
                                        PROJECT.stage.reSet(),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (e) {
                                        f.appendChild(h),
                                            s.classList.remove("index"),
                                            s.classList.remove("sub"),
                                            s.classList.add(p),
                                            c && l.add(n, h),
                                            i.a.wait(150).then(e)
                                    }),
                                    m.add(function (e) {
                                        l.use("current").viewWillAppear(),
                                            i.a.wait(150).then(e)
                                    }),
                                    m.add(function (e) {
                                        a.a.triggerEvent(window, "resize"),
                                            i.a.wait(10).then(e)
                                    }),
                                    m.add(function (e) {
                                        s.classList.remove("page-" + d),
                                            s.classList.add("page-" + g),
                                            PROJECT.stage.stop(),
                                            PROJECT.glManager.disableMouseMove(),
                                            i.a.wait(10).then(e)
                                    }),
                                    1 === PROJECT.pageTransitionState.worksDetailToTop ? (m.add(function (e) {
                                        l.use("prev").viewDidDisappear(),
                                            l.pop(),
                                            PROJECT.indicator && (PROJECT.indicator.isShow = !1),
                                            PROJECT.smoothScrollManager.destroy(),
                                            PROJECT.stage.hideCanvasDom(!0),
                                            PROJECT.headerManager.addStyle("white", !0),
                                            c.parentNode.removeChild(c),
                                            i.a.wait(50).then(e)
                                    }),
                                        m.add(function (e) {
                                            a.a.triggerEvent(window, "resize"),
                                                i.a.wait(50).then(e)
                                        }),
                                        m.add(function (t) {
                                            e.to(P, 1, {
                                                ease: v.linear,
                                                opacity: 0
                                            }),
                                                PROJECT.stage.showCanvasDom(!0).then(function () {
                                                    i.a.wait(10).then(t)
                                                })
                                        }),
                                        m.add(function (e) {
                                            PROJECT.smoothScrollManager.onResize(),
                                                PROJECT.smoothScrollManager.clearFixed(),
                                                PROJECT.smoothScrollManager.reStart(),
                                                PROJECT.smoothScrollManager.stop(),
                                                PROJECT.smoothScrollManager.destroy(),
                                                PROJECT.stage.reStart(),
                                                PROJECT.glManager.enableMouseMove(),
                                                i.a.wait(10).then(e)
                                        }),
                                        m.done(function () {
                                            PROJECT.screenFix.clearFix(),
                                                PROJECT.pageTransitionState.worksDetailToTop = 0,
                                                s.classList.remove("is-back-works-detail-to-index"),
                                                PROJECT.smoothScrollManager.run(),
                                                u(null)
                                        })) : (m.add(function (t) {
                                            e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                value: 1
                                            }),
                                                e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, {
                                                    value: 1
                                                }),
                                                e.set(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                    value: 0
                                                }),
                                                e.set(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, {
                                                    value: 0
                                                }),
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = b,
                                                PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = b,
                                                PROJECT.stage.hideCanvasDom(!1),
                                                i.a.wait(100).then(t)
                                        }),
                                            m.add(function (t) {
                                                e.staggerTo(w, 1.2, {
                                                    delay: .05,
                                                    ease: v.outExpo,
                                                    force3D: !0,
                                                    y: "100%"
                                                }, .05),
                                                    e.staggerTo(T, 1.2, {
                                                        ease: v.outExpo,
                                                        force3D: !0,
                                                        y: "100%"
                                                    }, .05),
                                                    e.to(P, .6, {
                                                        opacity: 0
                                                    }),
                                                    MOBILE || TABLET ? e.to("html,body", .6, {
                                                        ease: v.inOut,
                                                        scrollTop: 0,
                                                        onComplete: function () {
                                                            i.a.wait(0).then(t)
                                                        }
                                                    }) : e.to(y, .6, {
                                                        ease: v.inOut,
                                                        value: 1,
                                                        onUpdate: function () {
                                                            window.scrollTo(0, y.value)
                                                        },
                                                        onComplete: function () {
                                                            i.a.wait(0).then(t)
                                                        }
                                                    })
                                            }),
                                            m.add(function (e) {
                                                PROJECT.smoothScrollManager.checkCompleteScrollTop(0, 10).then(function () {
                                                    i.a.wait(0).then(e)
                                                })
                                            }),
                                            m.add(function (t) {
                                                PROJECT.stage.isShowTitleTransition = !0,
                                                    PROJECT.stage.$nextTick(function () {
                                                        M = C.getBoundingClientRect().top,
                                                            s.classList.remove("is-show--close--works-detail"),
                                                            O = document.querySelector(".js-transition__title"),
                                                            E = O.getBoundingClientRect().top,
                                                            k = E - M,
                                                            e.set(O, {
                                                                force3D: !0,
                                                                color: "#1a1a1a",
                                                                y: -k
                                                            }),
                                                            e.set(C, {
                                                                opacity: 0
                                                            }),
                                                            PROJECT.headerManager.addStyle("white", !0),
                                                            e.to(S, 1.2, {
                                                                ease: v.inOut,
                                                                force3D: !0,
                                                                y: "40%"
                                                            }),
                                                            PROJECT.indicator && e.to(R, 1.2, {
                                                                delay: .05,
                                                                opacity: 0
                                                            }),
                                                            e.to(document.querySelector(".l-works-detail"), 1, {
                                                                delay: .1,
                                                                ease: v.inOut,
                                                                force3D: !0,
                                                                y: 1.2 * window.innerHeight
                                                            }),
                                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.2, {
                                                                delay: .2,
                                                                ease: v.inOut,
                                                                value: 0
                                                            }),
                                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.2, {
                                                                delay: .1,
                                                                ease: v.inOut,
                                                                value: 0
                                                            }),
                                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.2, {
                                                                delay: .2,
                                                                ease: v.inOut,
                                                                value: PROJECT.glManager.frontRawShaderMesh.sinStrengthRatio
                                                            }),
                                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.2, {
                                                                delay: .1,
                                                                ease: v.inOut,
                                                                value: PROJECT.glManager.backRawShaderMesh.sinStrengthRatio
                                                            }),
                                                            e.to(O, 1.2, {
                                                                delay: .1,
                                                                ease: v.linear,
                                                                color: "#fff"
                                                            }),
                                                            e.to(O, 1.2, {
                                                                delay: .2,
                                                                ease: v.inOut,
                                                                force3D: !0,
                                                                y: 0
                                                            }),
                                                            i.a.wait(900).then(t)
                                                    })
                                            }),
                                            m.add(function (e) {
                                                PROJECT.stage.showCanvasDom(!1).then(function () {
                                                    i.a.wait(0).then(e)
                                                })
                                            }),
                                            m.add(function (e) {
                                                PROJECT.smoothScrollManager.onResize(),
                                                    PROJECT.smoothScrollManager.clearFixed(),
                                                    PROJECT.smoothScrollManager.reStart(),
                                                    PROJECT.smoothScrollManager.stop(),
                                                    PROJECT.smoothScrollManager.destroy(),
                                                    c.parentNode.removeChild(c),
                                                    PROJECT.indicator && (PROJECT.indicator.isShow = !1,
                                                        R.style.opacity = ""),
                                                    PROJECT.stage.isShowTitleTransition = !1,
                                                    PROJECT.stage.reStart(),
                                                    PROJECT.glManager.enableMouseMove(),
                                                    i.a.wait(10).then(e)
                                            }),
                                            m.done(function () {
                                                l.use("prev").viewDidDisappear(),
                                                    l.pop(),
                                                    PROJECT.screenFix.clearFix(),
                                                    s.classList.remove("is-back-works-detail-to-index"),
                                                    PROJECT.smoothScrollManager.run(),
                                                    u(null)
                                            }))
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = document.querySelector("#contents")
                                    , g = c.getAttribute("id")
                                    , f = h.getAttribute("id")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = h.querySelector(".p-about__bg")
                                    , C = h.querySelector(".p-about__contact__bg")
                                    , R = document.querySelector(".js-canvas__info")
                                    , M = document.querySelector(".js-transition__indicator")
                                    , S = document.querySelector(".p-sideContact__inner")
                                    , P = document.querySelector("#pageCover")
                                    , O = h.querySelector(".p-about__section__title--first")
                                    , E = "";
                                m.add(function (e) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        d.appendChild(h),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        c && (l.add(n, h),
                                            l.use("prev").viewDidDisappear(),
                                            l.pop()),
                                        i.a.wait(10).then(e)
                                }),
                                    m.add(function (t) {
                                        s.classList.remove("page-" + g),
                                            s.classList.add("page-" + f),
                                            PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            PROJECT.glManager.canUpdate = !0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                            e.set(R, {
                                                opacity: 0
                                            }),
                                            e.set(S, {
                                                opacity: 0
                                            }),
                                            S.style.visibility = "visible",
                                            e.set(h, {
                                                force3D: !0,
                                                y: "-100%",
                                                opacity: 0
                                            }),
                                            e.set(T, {
                                                opacity: 0
                                            }),
                                            e.set(C, {
                                                opacity: 0
                                            }),
                                            E = O.querySelectorAll(".p-split");
                                        var n = .1 * document.body.clientWidth;
                                        e.set(E, {
                                            x: n,
                                            y: "-100%",
                                            rotationZ: 20,
                                            skewY: -30,
                                            force3D: !0
                                        }),
                                            PROJECT.indicator && e.to(M, .8, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    PROJECT.indicator.isShow = !1
                                                }
                                            }),
                                            e.to(P, .8, {
                                                ease: v.linear,
                                                opacity: 0
                                            }),
                                            e.to(c, .8, {
                                                ease: v.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    c.parentNode.removeChild(c),
                                                        PROJECT.smoothScrollManager.clearFixed(),
                                                        PROJECT.smoothScrollManager.reStart(),
                                                        e.set("body,html", {
                                                            scrollTop: 0
                                                        }),
                                                        a.a.triggerEvent(window, "resize")
                                                }
                                            }),
                                            i.a.wait(200).then(t)
                                    }),
                                    m.add(function (t) {
                                        e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.1, {
                                            ease: v.inOut,
                                            value: 1
                                        }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.1, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 1
                                            }),
                                            e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.1, {
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.1, {
                                                delay: .1,
                                                ease: v.inOut,
                                                value: 0
                                            }),
                                            PROJECT.headerManager.addStyle("white", !0),
                                            e.to(h, 2.2, {
                                                delay: .15,
                                                ease: v.inOut,
                                                force3D: !0,
                                                opacity: 1,
                                                y: "0%",
                                                onComplete: function () {
                                                    h.style.transform = "",
                                                        i.a.wait(300).then(t)
                                                }
                                            }),
                                            e.staggerTo(E, 1.5, {
                                                delay: 1.65,
                                                ease: v.outExpo,
                                                force3D: !0,
                                                x: 0,
                                                y: "0%",
                                                rotationZ: 0,
                                                skewY: 0,
                                                onComplete: function () { }
                                            }, .03),
                                            s.classList.remove("is-show--close--works-detail")
                                    }),
                                    m.add(function (t) {
                                        e.set(R, {
                                            opacity: 1
                                        }),
                                            e.set(T, {
                                                opacity: 1
                                            }),
                                            e.set(C, {
                                                opacity: 1
                                            }),
                                            i.a.wait(150).then(t)
                                    }),
                                    m.add(function (e) {
                                        PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                            PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                            PROJECT.stage.completeDashArray(),
                                            i.a.wait(100).then(e)
                                    }),
                                    m.done(function () {
                                        document.querySelector(".js-target__aboutClose").setAttribute("href", PROJECT.currentUrl),
                                            PROJECT.screenFix.clearFix(),
                                            PROJECT.glManager.canUpdate = !1,
                                            l.use("current").viewWillAppear(),
                                            PROJECT.indicator && e.to(M, .8, {
                                                opacity: 1,
                                                onComplete: function () {
                                                    M.style.opacity = ""
                                                }
                                            }),
                                            e.to(S, .8, {
                                                opacity: 1
                                            }),
                                            PROJECT.screenFix.clearFix(),
                                            u(null)
                                    })
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = n(1)
                , o = n(3)
                , r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , s = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return r(t, [{
                        key: "run",
                        value: function (t, n, r, s, l, u) {
                            return function () {
                                var s = document.body
                                    , c = document.querySelector("#" + t)
                                    , h = r.querySelector("#" + n)
                                    , d = document.querySelector("#contents")
                                    , g = c.getAttribute("id")
                                    , f = h.getAttribute("id")
                                    , p = "top" !== t && "top" === n || "top" === t && "top" === n ? "index" : "sub"
                                    , v = new o.a
                                    , m = new i.a
                                    , y = {
                                        r: 37 / 255,
                                        g: 37 / 255,
                                        b: 37 / 255
                                    }
                                    , w = {
                                        r: 1,
                                        g: 1,
                                        b: 1
                                    }
                                    , T = h.querySelector(".p-works__bg")
                                    , C = document.querySelector(".js-canvas__info")
                                    , R = document.querySelector("#pageCover")
                                    , M = (document.querySelector("#canvasWrapper"),
                                        0);
                                m.add(function (e) {
                                    PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        s.classList.remove("index"),
                                        s.classList.remove("sub"),
                                        s.classList.add(p),
                                        c && l.add(n, h),
                                        i.a.wait(0).then(e)
                                }),
                                    1 === PROJECT.pageTransitionState.worksDetailToWorks ? (m.add(function (e) {
                                        l.use("prev").viewDidDisappear(),
                                            l.pop(),
                                            s.classList.remove("page-" + g),
                                            s.classList.add("page-" + f),
                                            c.parentNode.removeChild(c),
                                            d.appendChild(h),
                                            l.use("current").viewWillAppear(),
                                            PROJECT.indicator && (PROJECT.indicator.isShow = !1),
                                            PROJECT.smoothScrollManager.clearFixed(),
                                            PROJECT.smoothScrollManager.destroy(),
                                            PROJECT.smoothScrollManager.fixed();
                                        var t = document.querySelectorAll(".p-works__list__item")[PROJECT.stage.slideNumState.next]
                                            , n = PROJECT.smoothScrollManager.$pageContent.clientHeight - window.innerHeight
                                            , o = t.getBoundingClientRect().height
                                            , r = o < window.innerHeight ? .5 * window.innerHeight - .5 * o : .5 * o;
                                        M = Math.min(Math.max(0, a.a.getTargetOffsetTop(t) - r), n),
                                            PROJECT.smoothScrollManager.clearFixed(),
                                            a.a.triggerEvent(window, "resize"),
                                            i.a.wait(150).then(e)
                                    }),
                                        m.add(function (e) {
                                            PROJECT.smoothScrollManager.run(),
                                                i.a.wait(100).then(e)
                                        }),
                                        m.add(function (t) {
                                            MOBILE || TABLET,
                                                e.set("body,html", {
                                                    scrollTop: M
                                                }),
                                                PROJECT.stage.hideCanvasDom(!0, !0, !0, !1),
                                                PROJECT.headerManager.addStyle("white", !0),
                                                e.to(R, 1, {
                                                    delay: .5,
                                                    ease: v.linear,
                                                    opacity: 0,
                                                    onUpdate: function () {
                                                        PROJECT.smoothScrollManager.run()
                                                    },
                                                    onComplete: function () {
                                                        i.a.wait(100).then(t)
                                                    }
                                                })
                                        }),
                                        m.done(function () {
                                            PROJECT.pageTransitionState.worksDetailToWorks = 0,
                                                PROJECT.screenFix.clearFix(),
                                                PROJECT.glManager.canUpdate = !1,
                                                u(null)
                                        })) : (m.add(function (e) {
                                            PROJECT.stage.hideCanvasDom(!0),
                                                i.a.wait(10).then(e)
                                        }),
                                            m.add(function (t) {
                                                s.classList.remove("page-" + g),
                                                    s.classList.add("page-" + f),
                                                    PROJECT.indicator && (PROJECT.indicator.isShow = !1),
                                                    PROJECT.smoothScrollManager.stop(),
                                                    PROJECT.smoothScrollManager.fixed(),
                                                    PROJECT.glManager.disableMouseMove(),
                                                    PROJECT.glManager.canUpdate = !0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 1,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = y,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 1,
                                                    e.set(C, {
                                                        opacity: 0
                                                    }),
                                                    e.set(h, {
                                                        opacity: 0
                                                    }),
                                                    e.set(T, {
                                                        opacity: 0
                                                    }),
                                                    e.set(document.querySelector(".p-timer"), {
                                                        opacity: 0
                                                    }),
                                                    e.to(R, .8, {
                                                        ease: v.linear,
                                                        opacity: 0
                                                    }),
                                                    e.to(c, .8, {
                                                        ease: v.linear,
                                                        opacity: 0,
                                                        onComplete: function () {
                                                            c.parentNode.removeChild(c),
                                                                PROJECT.smoothScrollManager.clearFixed(),
                                                                PROJECT.smoothScrollManager.destroy(),
                                                                e.set("body,html", {
                                                                    scrollTop: 0
                                                                }),
                                                                i.a.wait(0).then(t)
                                                        }
                                                    })
                                            }),
                                            m.add(function (e) {
                                                d.appendChild(h),
                                                    l.use("current").viewWillAppear(),
                                                    a.a.triggerEvent(window, "resize");
                                                var t = document.querySelectorAll(".p-works__list__item")[PROJECT.stage.slideNumState.current]
                                                    , n = PROJECT.smoothScrollManager.$pageContent.clientHeight - window.innerHeight
                                                    , o = t.getBoundingClientRect().height
                                                    , r = o < window.innerHeight ? .5 * window.innerHeight - .5 * o : .5 * o;
                                                M = Math.min(Math.max(0, a.a.getTargetOffsetTop(t) - r), n),
                                                    PROJECT.smoothScrollManager.clearFixed(),
                                                    a.a.triggerEvent(window, "resize"),
                                                    i.a.wait(100).then(e)
                                            }),
                                            m.add(function (e) {
                                                PROJECT.smoothScrollManager.run(),
                                                    i.a.wait(100).then(e)
                                            }),
                                            m.add(function (t) {
                                                e.set(h, {
                                                    force3D: !0,
                                                    y: "-100%",
                                                    opacity: 0
                                                }),
                                                    i.a.wait(50).then(t)
                                            }),
                                            m.add(function (t) {
                                                e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                    ease: v.inOut,
                                                    value: 1
                                                }),
                                                    e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio, 1.3, {
                                                        delay: .1,
                                                        ease: v.inOut,
                                                        value: 1
                                                    }),
                                                    e.to(PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                        ease: v.inOut,
                                                        value: 0
                                                    }),
                                                    e.to(PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskSinStrength, 1.3, {
                                                        delay: .1,
                                                        ease: v.inOut,
                                                        value: 0
                                                    }),
                                                    PROJECT.headerManager.addStyle("white", !0),
                                                    MOBILE || TABLET ? (e.to(h, 2.2, {
                                                        delay: .15,
                                                        ease: v.inOut,
                                                        force3D: !0,
                                                        opacity: 1,
                                                        y: "0%",
                                                        onUpdate: function () { },
                                                        onComplete: function () {
                                                            h.style.transform = "",
                                                                i.a.wait(10).then(t)
                                                        }
                                                    }),
                                                        e.to("body,html", 1.2, {
                                                            ease: v.inOutBq,
                                                            scrollTop: M
                                                        })) : (e.to(h, 2.2, {
                                                            delay: .15,
                                                            ease: v.inOut,
                                                            force3D: !0,
                                                            opacity: 1,
                                                            y: "0%",
                                                            onUpdate: function () { },
                                                            onComplete: function () {
                                                                h.style.transform = "",
                                                                    i.a.wait(10).then(t)
                                                            }
                                                        }),
                                                            e.set("body,html", {
                                                                scrollTop: M
                                                            }))
                                            }),
                                            m.add(function (e) {
                                                C.style.opacity = "",
                                                    T.style.opacity = "",
                                                    document.querySelector(".p-timer").style = "",
                                                    i.a.wait(150).then(e)
                                            }),
                                            m.add(function (e) {
                                                PROJECT.glManager.frontRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uIsAllColor.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uAllColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uAllColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value = PROJECT.glManager.vignetteGuiCtrl.gradation_ratio,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskDirection.value = 0,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskColor.value = w,
                                                    PROJECT.glManager.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    PROJECT.glManager.backRawShaderMesh.uniforms.uTransitionMaskRatio.value = 0,
                                                    C.style.opacity = "",
                                                    document.querySelector(".js-opening-roll").style = "",
                                                    i.a.wait(10).then(e)
                                            }),
                                            m.done(function () {
                                                l.use("prev").viewDidDisappear(),
                                                    l.pop(),
                                                    PROJECT.screenFix.clearFix(),
                                                    PROJECT.glManager.canUpdate = !1,
                                                    PROJECT.smoothScrollManager.run(),
                                                    u(null)
                                            }))
                            }
                        }
                    }]),
                        t
                }();
            t.a = s
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(0)
                , a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , o = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.$trigger = document.querySelectorAll(".js-trigger--langChange"),
                            this.$target = document.querySelector("html"),
                            this.startUpFunction = function () {
                                return new e(function (e) {
                                    e()
                                }
                                )
                            }
                            ,
                            this.onCompleteFunction = function () {
                                return new e(function (e) {
                                    e()
                                }
                                )
                            }
                            ,
                            this.clickLock = !1
                    }
                    return a(t, [{
                        key: "run",
                        value: function () {
                            for (var e = 0; e < this.$trigger.length; e++)
                                this.$trigger[e].addEventListener("click", this._onClick.bind(this), !1)
                        }
                    }, {
                        key: "_onClick",
                        value: function (e) {
                            var t = this;
                            if (e.preventDefault(),
                                !this.clickLock) {
                                this.clickLock = !0;
                                var n = e.currentTarget.dataset.lang || "en";
                                this.startUpFunction().then(function () {
                                    t.$target.setAttribute("lang", n),
                                        i.a.wait(20).then(function () {
                                            t.onCompleteFunction().then(function () {
                                                t.clickLock = !1
                                            })
                                        })
                                })
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            for (var e = 0; e < this.$trigger.length; e++)
                                this.$trigger[e].removeEventListener("click", this._onClick)
                        }
                    }]),
                        t
                }();
            t.a = o
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(1)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.st = 0,
                            this.scrollHandler = [],
                            this.anchorScrollStartFunction = function (e) { }
                            ,
                            this.anchorScrollCallBackFunction = function (e) { }
                    }
                    return o(t, [{
                        key: "_setAnchor",
                        value: function () {
                            var e = this;
                            this.$anchorTriggerNodeList = document.querySelectorAll(".anchor-trigger"),
                                this.$anchorTriggerNodeList.length && (this.$anchorTriggers = [].slice.call(this.$anchorTriggerNodeList),
                                    this.$anchorTriggers.forEach(function (t, n) {
                                        t.addEventListener("click", e._onClickAnchorTrigger.bind(e), !1)
                                    }))
                        }
                    }, {
                        key: "_onClickAnchorTrigger",
                        value: function (e) {
                            var n = this;
                            e.preventDefault();
                            var i = e.currentTarget
                                , a = i.getAttribute("href")
                                , o = i.getAttribute("anchor-adjust");
                            this.anchorScrollStartFunction(e),
                                t.anchorScroll(a, o).then(function () {
                                    n.anchorScrollCallBackFunction(e)
                                })
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this._setAnchor(),
                                window.addEventListener("scroll", this._onScroll.bind(this), !1)
                        }
                    }, {
                        key: "destroy",
                        value: function (e) {
                            var t = this;
                            e && (this.st = 0),
                                this.scrollHandler = [],
                                this.$anchorTriggers.forEach(function (e, n) {
                                    e.removeEventListener("click", t._onClickAnchorTrigger)
                                }),
                                window.removeEventListener("scroll", this._onScroll)
                        }
                    }, {
                        key: "_onScroll",
                        value: function (e) {
                            var t = this;
                            this.st = document.documentElement.scrollTop || document.body.scrollTop,
                                this.scrollHandler.map(function (e) {
                                    e(t.st)
                                })
                        }
                    }], [{
                        key: "anchorScroll",
                        value: function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                                , o = document.querySelector(t).getBoundingClientRect()
                                , r = window.pageYOffset || document.documentElement.scrollTop
                                , s = o.top + r + 1 - n;
                            return new e(function (e) {
                                i.to("body,html", .8, {
                                    scrollTop: s,
                                    ease: a.a.getCubicCurve(.6, 0, .3, 1),
                                    onComplete: function () {
                                        e()
                                    }
                                })
                            }
                            )
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t, n) {
        "use strict";
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.renderHandler = [],
                        this.time = 0,
                        this.fps = 0,
                        this.animating = null,
                        this.FPS_60_SEC = 1e3 / 60
                }
                return i(e, [{
                    key: "run",
                    value: function () {
                        this.render()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        this.animating && (cancelAnimationFrame(this.animating),
                            this.animating = null),
                            this.animating = requestAnimationFrame(this.render.bind(this)),
                            this.fps = this.updateTimeRatio(),
                            this.renderHandler.map(function (t) {
                                t(e.fps)
                            })
                    }
                }, {
                    key: "updateTimeRatio",
                    value: function () {
                        var e = this.time
                            , t = 1;
                        return e > 0 && (t = ((new Date).getTime() - e) / this.FPS_60_SEC),
                            this.time = (new Date).getTime(),
                            t
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        cancelAnimationFrame(this.animating),
                            this.animating = null,
                            this.renderHandler = [],
                            this.time = 0,
                            this.fps = 0
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(2)
                , o = n(24)
                , r = n(23)
                , s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , l = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.parallaxManager = new o.a(this),
                            this.smoothManager = new r.a(this),
                            this.$smoothScrollWrapper = document.querySelector(".js-smooth-scroll-wrapper"),
                            this.$smoothScrollContent = document.querySelector(".js-smooth-scroll-content"),
                            this.$pageContent = document.querySelector(".page-content"),
                            this.width = document.body.clientWidth,
                            this.height = window.innerHeight,
                            this.st = 1,
                            this.now = 1,
                            this.diff = 0,
                            this.nowAbs = 1,
                            this.ease = .075,
                            this.isMove = !1,
                            this.canUpdate = !1,
                            this.canScroll = !1,
                            this.canResize = !0
                    }
                    return s(t, [{
                        key: "run",
                        value: function () {
                            (MOBILE || TABLET) && (this.ease = .5),
                                this.canUpdate = !0,
                                this.canScroll = !0,
                                this.isMove = !0,
                                this._set(),
                                this.parallaxManager.run(),
                                this.smoothManager.run(),
                                this.onUpdate(!0)
                        }
                    }, {
                        key: "_set",
                        value: function () {
                            this.$pageContent = document.querySelectorAll(".page-content"),
                                this.$pageContent = this.$pageContent[this.$pageContent.length - 1],
                                this.width = document.body.clientWidth,
                                this.height = window.innerHeight,
                                this.$pageContent && (this.$smoothScrollWrapper = document.querySelector(".js-smooth-scroll-wrapper"),
                                    this.$smoothScrollContent = document.querySelector(".js-smooth-scroll-content"),
                                    this.$smoothScrollWrapper.style.height = this.$pageContent.clientHeight + "px",
                                    this.$smoothScrollContent.style.position = "fixed",
                                    this.$smoothScrollContent.style.width = "100%",
                                    this.$smoothScrollContent.style.top = 0,
                                    this.$smoothScrollContent.style.left = 0)
                        }
                    }, {
                        key: "onResize",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.st = e,
                                this.isMove = !0,
                                this._set(),
                                this.parallaxManager.onResize(),
                                this.smoothManager.onResize(),
                                this.onUpdate(!0)
                        }
                    }, {
                        key: "onScroll",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.canScroll && (this.st = e,
                                this.isMove = !0)
                        }
                    }, {
                        key: "onUpdate",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.canUpdate;
                            if (this.isMove && t) {
                                if (this.now = a.a.followUp(this.now, this.st, this.ease),
                                    "safari" === uaName && (this.now = Math.round(this.now)),
                                    this.nowAbs = Math.abs(this.now),
                                    this.diff = this.now - this.st,
                                    Math.abs(this.nowAbs - Math.abs(this.st)) < .002)
                                    return this.isMove = !1,
                                        void this._onComplete();
                                this.parallaxManager.onUpdate(e, !0),
                                    this.smoothManager.onUpdate(e, !0),
                                    this.$smoothScrollContent.style.transform = "translate3d(0px, " + -this.now + "px,0)"
                            }
                        }
                    }, {
                        key: "_onComplete",
                        value: function () {
                            this.isMove = !1,
                                this.now = this.nowAbs = Math.round(this.nowAbs),
                                this.diff = 0,
                                this.$smoothScrollContent.style.transform = "translate3d(0px, " + -this.now + "px,0)",
                                this.parallaxManager.onComplete(),
                                this.smoothManager.onComplete()
                        }
                    }, {
                        key: "to",
                        value: function () {
                            this.$smoothScrollContent.style.transform = "translate3d(0px, " + -this.now + "px,0)"
                        }
                    }, {
                        key: "fixed",
                        value: function () {
                            this.nowWindowTop = document.documentElement.scrollTop || document.body.scrollTop;
                            var t = document.getElementById("wrapper");
                            e.set(t, {
                                position: "fixed",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                overflow: "hidden"
                            })
                        }
                    }, {
                        key: "clearFixed",
                        value: function () {
                            var t = document.getElementById("wrapper");
                            e.set(t, {
                                position: "",
                                width: "",
                                height: "",
                                top: "",
                                left: "",
                                overflow: ""
                            }),
                                window.scrollTo(1, this.now)
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.canUpdate = !1,
                                this.canScroll = !1
                        }
                    }, {
                        key: "reStart",
                        value: function () {
                            this.canUpdate = !0,
                                this.canScroll = !0
                        }
                    }, {
                        key: "checkCompleteScrollTop",
                        value: function (e, t) {
                            var n = this;
                            return new i(function (i) {
                                n._check = function () {
                                    e <= n.now && n.now <= t ? (n._check = null,
                                        window.cancelAnimationFrame(n.checking),
                                        i()) : n.checking = window.requestAnimationFrame(n._check)
                                }
                                    ,
                                    n._check()
                            }
                            )
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.canUpdate = !1,
                                this.st = 1,
                                this.now = 1,
                                this.$smoothScrollWrapper.style.height = "",
                                this.$smoothScrollContent.style.transform = "",
                                this.$smoothScrollContent.style.position = "",
                                this.$smoothScrollContent.style.width = "",
                                this.$smoothScrollContent.style.top = "",
                                this.$smoothScrollContent.style.left = ""
                        }
                    }]),
                        t
                }();
            t.a = l
        }
        ).call(this, n(5), n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(24)
                , o = n(23)
                , r = n(2)
                , s = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , l = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.parallaxManager = new a.a(this),
                            this.smoothManager = new o.a(this),
                            this.$smoothScrollWrapper = document.querySelector(".js-smooth-scroll-wrapper"),
                            this.$smoothScrollContent = document.querySelector(".js-smooth-scroll-content"),
                            this.$pageContent = document.querySelector(".page-content"),
                            this.width = document.body.clientWidth,
                            this.height = window.innerHeight,
                            this.st = 1,
                            this.now = 1,
                            this.diff = 0,
                            this.nowAbs = 1,
                            this.ease = .1,
                            this.isMove = !1,
                            this.canUpdate = !1,
                            this.canScroll = !1,
                            this.canResize = !0
                    }
                    return s(t, [{
                        key: "run",
                        value: function () {
                            this.canUpdate = !0,
                                this.canScroll = !0,
                                this.isMove = !0,
                                this._set(),
                                this.parallaxManager.run(),
                                this.smoothManager.run(),
                                this.onUpdate(!0)
                        }
                    }, {
                        key: "_set",
                        value: function () {
                            this.$pageContent = document.querySelectorAll(".page-content"),
                                this.$pageContent = this.$pageContent[this.$pageContent.length - 1],
                                this.width = document.body.clientWidth,
                                this.height = window.innerHeight,
                                this.$pageContent && (this.$smoothScrollWrapper = document.querySelector(".js-smooth-scroll-wrapper"),
                                    this.$smoothScrollContent = document.querySelector(".js-smooth-scroll-content"))
                        }
                    }, {
                        key: "onResize",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.st = e,
                                this.isMove = !0,
                                this._set(),
                                this.parallaxManager.onResize(),
                                this.smoothManager.onResize(),
                                this.onUpdate(!0)
                        }
                    }, {
                        key: "onScroll",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.canScroll && (this.st = e,
                                this.isMove = !0)
                        }
                    }, {
                        key: "onUpdate",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.canUpdate;
                            this.now = r.a.followUp(this.now, this.st, this.ease),
                                this.isMove && t && (this.nowAbs = Math.abs(this.now),
                                    this.diff = this.now - this.st,
                                    Math.abs(this.nowAbs - Math.abs(this.st)) < .002 ? this._onComplete() : (this.parallaxManager.onUpdate(e, !0),
                                        this.smoothManager.onUpdate(e, !0)))
                        }
                    }, {
                        key: "_onComplete",
                        value: function () {
                            this.isMove = !1,
                                this.now = this.nowAbs = Math.round(this.nowAbs),
                                this.diff = Math.round(this.diff),
                                this.parallaxManager.onComplete(),
                                this.smoothManager.onComplete()
                        }
                    }, {
                        key: "to",
                        value: function () {
                            e.set("body,html", {
                                scrollTop: this.st
                            })
                        }
                    }, {
                        key: "fixed",
                        value: function () {
                            var e = document.getElementById("wrapper");
                            e.style.position = "fixed",
                                e.style.top = "1px",
                                e.style.right = 0,
                                e.style.width = "100%",
                                e.style.height = "200%",
                                e.style.marginTop = "-1px",
                                e.style.overflow = "hidden",
                                this.$smoothScrollContent.style.top = -this.st + "px"
                        }
                    }, {
                        key: "clearFixed",
                        value: function () {
                            var e = document.getElementById("wrapper");
                            e.style.position = null,
                                e.style.top = null,
                                e.style.right = null,
                                e.style.width = null,
                                e.style.height = null,
                                e.style.marginTop = null,
                                e.style.overflow = null,
                                this.$smoothScrollContent.style.top = null
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.canUpdate = !1,
                                this.canScroll = !1
                        }
                    }, {
                        key: "reStart",
                        value: function () {
                            this.canUpdate = !0,
                                this.canScroll = !0
                        }
                    }, {
                        key: "checkCompleteScrollTop",
                        value: function (e, t) {
                            var n = this;
                            return new i(function (i) {
                                n._check = function () {
                                    e <= n.now && n.now <= t ? (n._check = null,
                                        window.cancelAnimationFrame(n.checking),
                                        i()) : n.checking = window.requestAnimationFrame(n._check)
                                }
                                    ,
                                    n._check()
                            }
                            )
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.canUpdate = !1,
                                this.st = 1,
                                this.now = 1
                        }
                    }]),
                        t
                }();
            t.a = l
        }
        ).call(this, n(5), n(4))
    }
    , function (e, t, n) {
        "use strict";
        n(2);
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e() {
                    var t = this;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.width = null,
                        this.height = null,
                        this.mousePositionHandler = [],
                        this.isPointerOnWindow = !1,
                        this.isClicked = !1,
                        this.position = {
                            x: 0,
                            y: 0
                        },
                        this.hoverTargetInnerPos = {
                            x: 0,
                            y: 0
                        },
                        this.$targetToPointerStateChangeOthersChildren = [],
                        this.setNodeListOthersChildren = function () {
                            var e = [document.querySelector(".js-header"), document.querySelector("#stage"), document.querySelector("#side-contact")];
                            t._setTargetStateChange(e, t.$targetToPointerStateChangeOthersChildren)
                        }
                        ,
                        this.$targetToPointerStateChangeContentChildren = [],
                        this.setNodeListContentChildren = function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.$targetToPointerStateChangeContentChildren;
                            t._setTargetStateChange([e], n)
                        }
                        ,
                        this.mouseEnterType = null,
                        this.isOnStateChangeTarget = !1,
                        this.isOnStateChangeTargetInner = !1,
                        this.$hoverTarget = "",
                        this.$hoverTargetInner = "",
                        this.hoverTargetClientRect = "",
                        this.hoverTargetInnerClientRect = "",
                        this.onClickFunction = function () { }
                        ,
                        this.springCircleSrc = '<div class="js-target--spring p-spring__target"></div>',
                        this.$springTaget = [],
                        this.amount = {
                            x: 0,
                            y: 0
                        }
                }
                return i(e, [{
                    key: "run",
                    value: function () {
                        window.addEventListener("mouseover", this._onMouseEnter.bind(this), !1),
                            window.addEventListener("mouseout", this._onMouseLeave.bind(this), !1),
                            window.addEventListener("mousemove", this._onMouseMove.bind(this), !1)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (this.position.x = 0,
                            this.position.y = 0),
                            this.mousePositionHandler = [],
                            window.removeEventListener("mousemove", this._onMouseMove),
                            window.removeEventListener("mouseover", this._onMouseEnter),
                            window.removeEventListener("mouseout", this._onMouseLeave)
                    }
                }, {
                    key: "_setTargetStateChange",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                            , n = 0;
                        if (e.length)
                            for (var i = 0; i < e.length; i++) {
                                var a = e[i].querySelectorAll(".js-target--pointer__stateChange")
                                    , o = a.length;
                                if (o)
                                    for (var r = 0; r < o; r++)
                                        t[n] = a[r],
                                            n++
                            }
                    }
                }, {
                    key: "setEventTargetStateChange",
                    value: function (e) {
                        for (var t = 0; t < e.length; t++)
                            e[t].addEventListener("mouseenter", this._onMouseEnterStateChange.bind(this)),
                                e[t].addEventListener("mouseleave", this._onMouseLeaveStateChange.bind(this))
                    }
                }, {
                    key: "_removeEventTargetStateChange",
                    value: function (e) {
                        for (var t = 0; t < e.length; t++)
                            e[t].removeEventListener("mouseenter", this._onMouseEnterStateChange),
                                e[t].removeEventListener("mouseleave", this._onMouseLeaveStateChange)
                    }
                }, {
                    key: "_onMouseEnterStateChange",
                    value: function (e) {
                        this.mouseEnterType = e.currentTarget.getAttribute("data-mouse-pointer-type") || "none",
                            this.$hoverTargetInner = e.currentTarget.querySelector(".js-target__inner--pointer__stateChange"),
                            this.$hoverTargetInner && (this.isOnStateChangeTargetInner = !0,
                                this.$hoverTarget = e.currentTarget,
                                this.$hoverTargetCircle = this.$hoverTarget.querySelector(".js-target--springContainer")),
                            this.isOnStateChangeTarget = !0
                    }
                }, {
                    key: "_onMouseLeaveStateChange",
                    value: function (e) {
                        this.mouseEnterType = "",
                            this.isOnStateChangeTarget = !1,
                            this.isOnStateChangeTargetInner = !1
                    }
                }, {
                    key: "_onMouseEnter",
                    value: function (e) {
                        this.isPointerOnWindow || (this.isPointerOnWindow = !0,
                            this._onMouseMove(e))
                    }
                }, {
                    key: "_onMouseLeave",
                    value: function (e) {
                        this.isPointerOnWindow && (this.isPointerOnWindow = !1,
                            this._onMouseMove(e))
                    }
                }, {
                    key: "_onMouseMove",
                    value: function (e) {
                        var t = this;
                        this.position.x = e.clientX,
                            this.position.y = e.clientY,
                            this.mousePositionHandler.map(function (e) {
                                e(t.position, t.isPointerOnWindow, t.isOnStateChangeTarget, t.mouseEnterType, t.isClicked)
                            })
                    }
                }, {
                    key: "_onClick",
                    value: function (e) {
                        this.isClicked || (this.isClicked = !0,
                            this.onClickFunction())
                    }
                }, {
                    key: "onResize",
                    value: function (e, t) {
                        this.width = e || document.body.clientWidth,
                            this.height = t || window.innerHeight
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        this.isOnStateChangeTargetInner && this.$hoverTargetInner && (this.isOnStateChangeTargetInner = !0,
                            this.hoverTargetClientRect = this.$hoverTarget.getBoundingClientRect(),
                            this.hoverTargetInnerClientRect = this.$hoverTargetInner.getBoundingClientRect(),
                            this.hoverTargetInnerPos.x = this.hoverTargetInnerClientRect.left + .5 * this.hoverTargetInnerClientRect.width,
                            this.hoverTargetInnerPos.y = this.hoverTargetInnerClientRect.top + .5 * this.hoverTargetInnerClientRect.height)
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(3)
                , a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , o = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.ease = new i.a,
                            this.$header = document.querySelector(".js-header"),
                            this.$logo = this.$header.querySelectorAll(".js-st-logo"),
                            this.$navLink = this.$header.querySelectorAll(".js-nav__link"),
                            this.$closeBar = this.$header.querySelectorAll(".js-closeBar"),
                            this.color = null,
                            this.duration = 0
                    }
                    return a(t, [{
                        key: "addStyle",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "black"
                                , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            switch (t) {
                                case "white":
                                    this.color = "#fff";
                                    break;
                                default:
                                    this.color = "#1a1a1a"
                            }
                            n && (this.duration = .7),
                                e.to(this.$logo, this.duration, {
                                    ease: this.ease.linear,
                                    fill: this.color
                                }),
                                e.to(this.$navLink, this.duration, {
                                    ease: this.ease.linear,
                                    color: this.color
                                }),
                                e.to(this.$closeBar, this.duration, {
                                    ease: this.ease.linear,
                                    backgroundColor: this.color
                                })
                        }
                    }]),
                        t
                }();
            t.a = o
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n),
                    i && e(t, i),
                    t
            }
        }()
            , a = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.__default = {
                            target: ".js-target--split",
                            slit: "",
                            addClass: "",
                            parse: !0,
                            template: function (e, t, n) {
                                return '<span class="js-split p-split string-trimmer-parts-' + e + " " + (/[\t\s]/g.test(t) ? " blank " : "") + '">' + t + "</span>"
                            }
                        },
                        this.isDom = !1,
                        this.tag = "",
                        this._options = this.__default
                }
                return i(e, [{
                    key: "run",
                    value: function () {
                        var e = this;
                        this.targets = Array.prototype.slice.call(this.targets, 0) || Array.prototype.slice.call(document.querySelectorAll(this._options.target), 0);
                        var t = [];
                        if (this.targets.length)
                            return this.targets.forEach(function (n) {
                                var i = e._unEscapeHTML(n.innerHTML).split(e._options.slit)
                                    , a = [];
                                /[\t\s]/g.test(i[i.length - 1]) && i.pop(),
                                    n.innerHTML = "",
                                    i.forEach(function (t, o) {
                                        e._checkString(t),
                                            e.isDom || 0 !== e.tag.length ? e.isDom || n.appendChild(e._htmlToNode(e.tag)[0]) : e._options.parse ? n.appendChild(e._htmlToNode(e._options.template(o, t, i.length))[0]) : a.push(e._options.template(o, t, i.length))
                                    }),
                                    t.push(a)
                            }),
                                t
                    }
                }, {
                    key: "_checkString",
                    value: function (e) {
                        "<" === e ? (this.isDom = !0,
                            this.tag += e) : ">" === e ? (this.tag += e,
                                this.isDom = !1) : this.isDom ? this.tag += e : this.tag = ""
                    }
                }, {
                    key: "_htmlToNode",
                    value: function (e) {
                        if (e && "string" == typeof e) {
                            var t = document.createElement("div");
                            return t.innerHTML = e,
                                t.childNodes
                        }
                    }
                }, {
                    key: "_unEscapeHTML",
                    value: function (e) {
                        return e.replace(/(&lt;)/g, "<").replace(/(&gt;)/g, ">").replace(/(&quot;)/g, '"').replace(/(&#39;)/g, "'").replace(/(&amp;)/g, "&")
                    }
                }]),
                    e
            }();
        t.a = a
    }
    , function (e, t, n) {
        "use strict";
        var i = n(61)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.$content = t || document,
                        this.$targets = this.$content.querySelectorAll(".js-target__parent--spring"),
                        this.$hoverTarget = [],
                        this.targetLength = 0,
                        this.springItem = [],
                        this.position = {
                            x: 0,
                            y: 0
                        },
                        this.canUpdate = !1
                }
                return a(e, [{
                    key: "run",
                    value: function () {
                        this.$targets = this.$content.querySelectorAll(".js-target__parent--spring"),
                            this.targetLength = this.$targets.length;
                        for (var e = 0; e < this.targetLength;)
                            this.springItem[e] = new i.a(this, this.$targets[e]),
                                this.$hoverTarget[e] = this.$targets[e].closest(".js-target--pointer__stateChange") || this.$targets[e].parentNode,
                                this.$hoverTarget[e].addEventListener("mouseenter", this.onMouseEnter.bind(this, e), !1),
                                this.$hoverTarget[e].addEventListener("mouseleave", this.onMouseLeave.bind(this, e), !1),
                                this.springItem[e].init(),
                                this.springItem[e].onUpdate(),
                                e = e + 1 | 0;
                        this.canUpdate = !0
                    }
                }, {
                    key: "onMouseEnter",
                    value: function (e) {
                        this.springItem[e].isHover = !0,
                            this.springItem[e].canUpdate = !0,
                            this.springItem[e].$target.classList.add("is-show")
                    }
                }, {
                    key: "onMouseLeave",
                    value: function (e) {
                        this.springItem[e].isHover = !1,
                            this.springItem[e].$target.classList.remove("is-show")
                    }
                }, {
                    key: "onMouseMove",
                    value: function (e) {
                        this.position.x = e.x,
                            this.position.y = e.y
                    }
                }, {
                    key: "onResize",
                    value: function () {
                        for (var e = 0; e < this.targetLength;)
                            this.springItem[e].onResize(),
                                e = e + 1 | 0
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        if (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canUpdate)
                            for (var e = 0; e < this.targetLength;)
                                this.springItem[e].onUpdate(),
                                    e = e + 1 | 0
                    }
                }]),
                    e
            }();
        t.a = o
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(2)
                , a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , o = function () {
                    function t(e, n) {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.springManager = e,
                            this.$target = document.createElement("div"),
                            this.targetSrc = '<div class="js-target--spring p-spring__target"></div>',
                            this.$parent = n,
                            this.parenCilentRect = this.$parent.getBoundingClientRect(),
                            this.position = {
                                x: 0,
                                y: 0
                            },
                            this.amount = {
                                x: 0,
                                y: 0
                            },
                            this.dist = {
                                x: 0,
                                y: 0
                            },
                            this.isHover = !1,
                            this.canUpdate = !0,
                            this.friction = .45,
                            this.ease = .2
                    }
                    return a(t, [{
                        key: "init",
                        value: function () {
                            this.$target.classList.add("js-target--springContainer"),
                                this.$target.classList.add("p-spring__container"),
                                this.$target.innerHTML = this.targetSrc,
                                this.parenCilentRect = this.$parent.getBoundingClientRect(),
                                this.$parent.style.position = "relative",
                                this.$parent.appendChild(this.$target),
                                this.onResize()
                        }
                    }, {
                        key: "onResize",
                        value: function () {
                            this.parenCilentRect = this.$parent.getBoundingClientRect(),
                                this.onUpdate()
                        }
                    }, {
                        key: "onUpdate",
                        value: function () {
                            (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canUpdate) && (this.position.x = (2 * (this.springManager.position.x - this.parenCilentRect.left) - this.parenCilentRect.width) / this.parenCilentRect.width || 0,
                                this.position.y = (2 * (this.springManager.position.y - this.parenCilentRect.top) - this.parenCilentRect.height) / this.parenCilentRect.height || 0,
                                this.isHover ? (this.dist.x = this.position.x * this.friction,
                                    this.dist.y = this.position.y * this.friction) : (this.dist.x = 0,
                                        this.dist.y = 0),
                                this.amount.x = i.a.followUp(this.amount.x, this.dist.x, this.ease),
                                this.amount.y = i.a.followUp(this.amount.y, this.dist.y, this.ease),
                                Math.abs(this.amount.x) < 1e-4 && (this.canUpdate = !1,
                                    this.amount.x = 0,
                                    this.amount.y = 0),
                                e.set(this.$target, {
                                    rotationZ: i.a.digToRad(this.amount.x * this.amount.y) * this.ease,
                                    x: this.amount.x * this.parenCilentRect.width * .75,
                                    y: this.amount.y * this.parenCilentRect.height * .75
                                }))
                        }
                    }]),
                        t
                }();
            t.a = o
        }
        ).call(this, n(5))
    }
    , , function (e, t, n) {
        "use strict";
        var i = n(1);
        t.a = function e() {
            !function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
                this.easeInSine = i.a.getCubicCurve(.47, 0, .745, .715),
                this.easeInCubic = i.a.getCubicCurve(.55, .055, .675, .19),
                this.easeInQuint = i.a.getCubicCurve(.755, .05, .855, .06),
                this.easeInQuad = i.a.getCubicCurve(.55, .085, .68, .53),
                this.easeInQuart = i.a.getCubicCurve(.895, .03, .685, .22),
                this.easeInExpo = i.a.getCubicCurve(.95, .05, .795, .035),
                this.out = i.a.getCubicCurve(0, .6, .2, 1),
                this.out2 = i.a.getCubicCurve(.225, 1, .325, 1),
                this.out3 = i.a.getCubicCurve(.225, 1, .325, 1),
                this.outQuad = i.a.getCubicCurve(.25, .46, .45, .94),
                this.outQuart = i.a.getCubicCurve(.165, .84, .44, 1),
                this.outExpo = i.a.getCubicCurve(.2, 1, .25, 1),
                this.outBounce1 = i.a.getCubicCurve(.25, .9, .3, 1.25),
                this.inOut = i.a.getCubicCurve(.725, 0, .175, 1),
                this.inOut2 = i.a.getCubicCurve(.4, 0, .25, 1),
                this.inOut3 = i.a.getCubicCurve(.15, 0, .25, 1),
                this.inOutBq = i.a.getCubicCurve(.6, 0, .3, 1),
                this.inOutQuad = i.a.getCubicCurve(.455, .03, .515, .955),
                this.inOutQuart = i.a.getCubicCurve(.75, 0, .175, 1),
                this.inOutExpo = i.a.getCubicCurve(1, 0, 0, 1),
                this.linear = i.a.getCubicCurve(0, 0, 1, 1)
        }
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(6)
                , a = n(2)
                , o = n(29)
                , r = n(65)
                , s = n(66)
                , l = n(69)
                , u = n(72)
                , c = n(73)
                , h = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , d = function () {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.scaleValue = 1,
                            this.canUpdate = !0,
                            this.canMouseMove = !1,
                            this._scene = new i.g,
                            this._camera = new i.c(1, document.body.clientWidth / window.innerHeight, 1, 60),
                            this._renderer = new i.k({
                                antialias: !0,
                                alpha: !0
                            }),
                            this._cnt = 0,
                            this._mouse = {
                                x: 0,
                                y: 0
                            },
                            this._mousePos = {
                                x: 0,
                                y: 0
                            },
                            this._mouseEase = .005,
                            this.stageSize = {
                                width: document.body.clientWidth,
                                height: window.innerHeight,
                                aspect: {
                                    xy: null,
                                    yx: null
                                }
                            },
                            this.frontRawShaderMesh = new s.a(1, .5),
                            this.backRawShaderMesh = new l.a(1, .5),
                            this.frontPie = new o.a({
                                canDraw: !0
                            }),
                            this.frontNextPie = new o.a({
                                canDraw: !0
                            }),
                            this.backPie = new r.a({
                                arcSizeRatio: 1.5,
                                arcDelay: .3,
                                canDraw: !0
                            }),
                            this.canvas = [this.frontPie.$stage, this.frontNextPie.$stage, this.backPie.$stage],
                            this.canvas2dTexture = [],
                            this.canvas2dTextureLoader = new c.a,
                            this.images = n.images || [],
                            this.imagesFull = n.imagesFull || [],
                            this.imageTexture = [],
                            this.imageTextureLoader = new u.a,
                            this.textureLoaded = [],
                            this.loadElementLength = 0,
                            this.imageTextureLoaderOnUpdateFunction = function (e) { }
                            ,
                            this.imageTextureLoaderOnCompleteFunction = function (e) { }
                            ,
                            this.addLoaderFunction = function () {
                                return new e(function (e) {
                                    e()
                                }
                                )
                            }
                            ,
                            this.renderInfo = null,
                            this.gpuKind = null,
                            this.vignetteGuiCtrl = null,
                            this.transitionGuiCtrl = null,
                            Object.assign(this, n)
                    }
                    return h(t, [{
                        key: "addGui",
                        value: function () {
                            this.vignetteGuiCtrl = {
                                circle_size: this.frontRawShaderMesh.uniforms.uVignetteCircleSize.value,
                                gradation_ratio: this.frontRawShaderMesh.uniforms.uVignetteCircleGradationRatio.value,
                                gradation_black_width: this.frontRawShaderMesh.uniforms.uVignetteCircleGradationBlackWidth.value,
                                white_ratio: this.frontRawShaderMesh.uniforms.uVignetteMaxWhiteRatio.value,
                                black_ratio: this.frontRawShaderMesh.uniforms.uVignetteMinBlackRatio.value
                            },
                                this.transitionGuiCtrl = {
                                    front_mask_ratio: this.frontRawShaderMesh.uniforms.uTransitionMaskRatio.value,
                                    back_mask_ratio: this.backRawShaderMesh.uniforms.uTransitionMaskRatio.value,
                                    front_mask_sin_strength: this.frontRawShaderMesh.transitionMaskSinStrength,
                                    back_mask_sin_strength: this.backRawShaderMesh.transitionMaskSinStrength,
                                    front_mask_color: this.frontRawShaderMesh.uniforms.uTransitionMaskColor.value,
                                    back_mask_color: this.backRawShaderMesh.uniforms.uTransitionMaskColor.value,
                                    front_mask_direction: this.frontRawShaderMesh.uniforms.uTransitionMaskDirection.value,
                                    back_mask_direction: this.backRawShaderMesh.uniforms.uTransitionMaskDirection.value
                                }
                        }
                    }, {
                        key: "setup",
                        value: function () {
                            var t = this;
                            return this._camera.position.y = 0,
                                this._camera.position.z = 28,
                                this._camera.lookAt(0, 0, 0),
                                this._renderer.setClearColor(68642, 0),
                                this._renderer.setSize(this.stageSize.width, this.stageSize.height),
                                this.frontRawShaderMesh.setup(),
                                this.backRawShaderMesh.setup(),
                                this._scene.add(this.backRawShaderMesh.mesh),
                                this._scene.add(this.frontRawShaderMesh.mesh),
                                document.getElementById("canvasWrapper").appendChild(this._renderer.domElement),
                                this.checkGpuKind(),
                                this.frontPie.set(),
                                this.frontNextPie.set(),
                                this.backPie.set(),
                                this._setTextureScreenCoverSize(),
                                e.all([this._getResourceImage(), this._getResourceCanvas2d()]).then(function () {
                                    t.imagesFull.forEach(function (e, n) {
                                        t.imageTextureLoader.sources[n] = t.imageTextureLoader.getTexture(e).then(function (e) {
                                            t.imageTexture[n] = e
                                        })
                                    })
                                })
                        }
                    }, {
                        key: "checkGpuKind",
                        value: function () {
                            this.renderInfo = this._renderer.context.getExtension("WEBGL_debug_renderer_info"),
                                this.gpuKind = this._renderer.context.getParameter(this._renderer.context.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL),
                                -1 !== this.gpuKind.indexOf("Apple") && (-1 === this.gpuKind.indexOf("A9") && -1 === this.gpuKind.indexOf("A8") && -1 === this.gpuKind.indexOf("A7") && -1 === this.gpuKind.indexOf("A6") && -1 === this.gpuKind.indexOf("A5") && -1 === this.gpuKind.indexOf("A4") || (PROJECT.isLegacyBrowser = !0))
                        }
                    }, {
                        key: "_getResourceImage",
                        value: function () {
                            var t = this;
                            this.loadElementLength = this.images.length + 1;
                            var n = new e(function (e) {
                                t.images.forEach(function (n, i) {
                                    t.imageTextureLoader.sources.push(t.imageTextureLoader.getTexture(n).then(function (n) {
                                        t.textureLoaded.push(!0),
                                            t.imageTexture[i] = n,
                                            t.imageTextureLoaderOnUpdateFunction(t.textureLoaded.length / t.loadElementLength, e)
                                    }))
                                }),
                                    t.addLoaderFunction().then(function () {
                                        t.textureLoaded.push(!0),
                                            t.imageTextureLoaderOnUpdateFunction(t.textureLoaded.length / t.loadElementLength, e)
                                    })
                            }
                            );
                            return e.all([e.all(this.imageTextureLoader.sources).then(function () {
                                t.frontRawShaderMesh.uniforms.uTextureCurrentImage = {
                                    type: "t",
                                    value: t.imageTexture[0]
                                },
                                    t.frontRawShaderMesh.uniforms.uTextureNextImage = {
                                        type: "t",
                                        value: t.imageTexture[1]
                                    },
                                    t.backRawShaderMesh.uniforms.uTextureHoverImage = {
                                        type: "t",
                                        value: t.imageTexture[3]
                                    },
                                    t.backRawShaderMesh.uniforms.uTextureCurrentImage = {
                                        type: "t",
                                        value: t.imageTexture[0]
                                    },
                                    t.backRawShaderMesh.uniforms.uTextureNextImage = {
                                        type: "t",
                                        value: t.imageTexture[1]
                                    }
                            }), n])
                        }
                    }, {
                        key: "_getResourceCanvas2d",
                        value: function () {
                            var t = this;
                            return this.canvas.forEach(function (e, n) {
                                t.canvas2dTextureLoader.sources.push(t.canvas2dTextureLoader.getTexture(e).then(function (e) {
                                    t.canvas2dTexture[n] = e
                                }))
                            }),
                                e.all(this.canvas2dTextureLoader.sources).then(function () {
                                    t.frontRawShaderMesh.uniforms.uTextureFrontCurrentPie = {
                                        type: "t",
                                        value: t.canvas2dTexture[0]
                                    },
                                        t.frontRawShaderMesh.uniforms.uTextureFrontNextPie = {
                                            type: "t",
                                            value: t.canvas2dTexture[1]
                                        },
                                        t.backRawShaderMesh.uniforms.uTextureBackPie = {
                                            type: "t",
                                            value: t.canvas2dTexture[2]
                                        }
                                })
                        }
                    }, {
                        key: "onResize",
                        value: function (e, t, n, i) {
                            this.stageSize = {
                                width: t || document.body.clientWidth,
                                height: n || window.innerHeight,
                                aspect: {
                                    xy: i.xy,
                                    yx: i.yx
                                }
                            },
                                this._setTextureScreenCoverSize(),
                                this.frontRawShaderMesh.onResize(),
                                this.backRawShaderMesh.onResize(),
                                this._camera.aspect = this.stageSize.xy || document.body.clientWidth / window.innerHeight,
                                this._camera.updateProjectionMatrix(),
                                this._renderer.setSize(this.stageSize.width, this.stageSize.height)
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (e) {
                            !this.canMouseMove || MOBILE || TABLET || (this._mouse = {
                                x: (2 * e.x - this.stageSize.width) / this.stageSize.width,
                                y: -(2 * e.y - this.stageSize.height) / this.stageSize.height
                            })
                        }
                    }, {
                        key: "onScroll",
                        value: function (e) { }
                    }, {
                        key: "disableMouseMove",
                        value: function () {
                            this._mousePos.x = 0,
                                this._mousePos.y = 0,
                                this._mouse.x = 0,
                                this._mouse.y = 0,
                                this.canMouseMove = !1,
                                this.frontRawShaderMesh.uniforms.uMouse.value.x = 0,
                                this.frontRawShaderMesh.uniforms.uMouse.value.y = 0
                        }
                    }, {
                        key: "enableMouseMove",
                        value: function () {
                            this.canMouseMove = !0
                        }
                    }, {
                        key: "_onUpdate",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this._mousePos.x = a.a.followUp(this._mousePos.x, this._mouse.x, this._mouseEase),
                                this._mousePos.y = a.a.followUp(this._mousePos.y, this._mouse.y, this._mouseEase),
                                this._cnt += 1,
                                this.frontPie.update(e),
                                this.frontNextPie.update(e),
                                this.backPie.update(e),
                                MOBILE || TABLET || (this.frontRawShaderMesh.uniforms.uMouse.value = {
                                    x: .01 * this._mousePos.x,
                                    y: .01 * this._mousePos.y
                                }),
                                this.frontRawShaderMesh.onUpdate(e, this._cnt),
                                this.backRawShaderMesh.onUpdate(e, this._cnt)
                        }
                    }, {
                        key: "onRender",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.canUpdate && (this._onUpdate(e),
                                this._renderer.render(this._scene, this._camera))
                        }
                    }, {
                        key: "setTexture",
                        value: function (e) {
                            this.frontRawShaderMesh.uniforms.uTextureCurrentImage.value = this.imageTexture[e.current],
                                this.frontRawShaderMesh.uniforms.uTextureNextImage.value = this.imageTexture[e.next],
                                this.backRawShaderMesh.uniforms.uTextureCurrentImage.value = this.imageTexture[e.current],
                                this.backRawShaderMesh.uniforms.uTextureNextImage.value = this.imageTexture[e.next]
                        }
                    }, {
                        key: "_setTextureScreenCoverSize",
                        value: function () {
                            this.stageSize.aspect.xy > 2 ? this.scaleValue = this.backRawShaderMesh.mesh.scale.x = this.backRawShaderMesh.mesh.scale.y = this.frontRawShaderMesh.mesh.scale.x = this.frontRawShaderMesh.mesh.scale.y = .5 * this.stageSize.aspect.xy : this.scaleValue = this.backRawShaderMesh.mesh.scale.x = this.backRawShaderMesh.mesh.scale.y = this.frontRawShaderMesh.mesh.scale.x = this.frontRawShaderMesh.mesh.scale.y = 1
                        }
                    }, {
                        key: "setDrawFlag",
                        value: function (e, t) {
                            switch (e) {
                                case "next":
                                    t ? (this.frontNextPie.canDraw = !0,
                                        this.frontRawShaderMesh.canNeedsUpdateFrontNextPie = !0) : (this.frontNextPie.canDraw = !1,
                                            this.frontRawShaderMesh.canNeedsUpdateFrontNextPie = !1);
                                    break;
                                case "both":
                                    t ? (this.frontRawShaderMesh.canNeedsUpdateFrontTransitonMaskPie = !0,
                                        this.frontNextPie.canDraw = !0,
                                        this.frontRawShaderMesh.canNeedsUpdateFrontNextPie = !0) : (this.frontRawShaderMesh.canNeedsUpdateFrontTransitonMaskPie = !1,
                                            this.frontNextPie.canDraw = !1,
                                            this.frontRawShaderMesh.canNeedsUpdateFrontNextPie = !1);
                                    break;
                                case "transition":
                                    this.frontRawShaderMesh.canNeedsUpdateFrontTransitonMaskPie = t,
                                        this.frontRawShaderMesh.canNeedsUpdateFrontTransitonMaskPie = !!t
                            }
                        }
                    }]),
                        t
                }();
            t.a = d
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(20)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function (t) {
                    function n() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        !function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var t = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                        return Object.assign(t, e),
                            t
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        o(n, [{
                            key: "run",
                            value: function () {
                                this.halfWidth = .5 * this.stageWidth,
                                    this.halfHeight = .5 * this.stageHeight
                            }
                        }, {
                            key: "drawArc",
                            value: function () {
                                var t = this
                                    , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .95
                                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.arcDelay;
                                if (this.canDraw)
                                    return this.tweenDrawArc && (this.tweenDrawArc.pause(),
                                        this.tweenDrawArc.kill(),
                                        this.tweenDrawArc = null),
                                        new e(function (e) {
                                            t.tweenDrawArc = i.to(t, n, {
                                                delay: a,
                                                ease: t.easeInOut,
                                                arcEndPointValue: t.arcLimitValue,
                                                onComplete: function () {
                                                    setTimeout(function () {
                                                        e()
                                                    }, 50)
                                                }
                                            })
                                        }
                                        )
                            }
                        }, {
                            key: "resetArc",
                            value: function () {
                                this.arcEndPointValue = .5 * -Math.PI
                            }
                        }, {
                            key: "draw",
                            value: function (e) {
                                this.canDraw && (this.$stage.width = this.stageWidth,
                                    this.context.beginPath(),
                                    this.context.fillStyle = "rgb(255, 255, 255)",
                                    this.context.fillRect(this.lastX, this.lastY, this.stageWidth, this.stageHeight),
                                    this.context.fill(),
                                    this.context.beginPath(),
                                    this.context.fillStyle = "rgb(0, 0, 0)",
                                    this.context.arc(this.halfWidth, this.halfHeight, this.halfWidth * this.arcSizeRatio, this.arcStartPointValue, this.arcEndPointValue),
                                    this.context.lineTo(this.halfWidth, this.halfHeight),
                                    this.context.fill())
                            }
                        }]),
                        n
                }();
            t.a = r
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(21)
                , o = n(67)
                , r = n.n(o)
                , s = n(68)
                , l = n.n(s)
                , u = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , c = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === a) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, i)
                    }
                    if ("value" in a)
                        return a.value;
                    var r = a.get;
                    return void 0 !== r ? r.call(i) : void 0
                }
                , h = function (t) {
                    function n(e, t) {
                        !function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var i = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
                        i.tweenScaleIn = null,
                            i.canUpdate = !0,
                            i.canNeedsUpdateFrontPie = !0,
                            i.canNeedsUpdateFrontNextPie = !1,
                            i.transitionMaskSinStrength = .275,
                            i.scaleInitValue = .1,
                            i.sinStrengthRatio = 0;
                        var a = {
                            uNextPieEdgeRatio: {
                                type: "f",
                                value: 0
                            },
                            uAspectRatio: {
                                type: "f",
                                value: 1
                            },
                            uNoiseNextRatio: {
                                type: "f",
                                value: 0
                            },
                            uInNoiseStrength: {
                                type: "v2",
                                value: {
                                    x: 1.5,
                                    y: .3
                                }
                            },
                            uInNoiseTimeCycle: {
                                type: "v2",
                                value: {
                                    x: 5,
                                    y: 18
                                }
                            },
                            uInNoiseTimeSwing: {
                                type: "v2",
                                value: {
                                    x: 5,
                                    y: 5
                                }
                            },
                            uOutNoiseStrength: {
                                type: "v2",
                                value: {
                                    x: 15,
                                    y: 15
                                }
                            },
                            uOutNoiseTimeCycle: {
                                type: "v2",
                                value: {
                                    x: 50,
                                    y: 50
                                }
                            },
                            uOutNoiseTimeSwing: {
                                type: "v2",
                                value: {
                                    x: .2,
                                    y: .2
                                }
                            },
                            uNoiseEdgeStrength: {
                                type: "f",
                                value: .4
                            },
                            uTransitionMaskDirection: {
                                type: "f",
                                value: 0
                            },
                            uTransitionMaskColor: {
                                type: "color",
                                value: {
                                    r: 1,
                                    g: 1,
                                    b: 1
                                }
                            },
                            uCurrentPieMapRatio: {
                                type: "f",
                                value: 0
                            },
                            uNextPieMapRatio: {
                                type: "f",
                                value: 0
                            },
                            uTransitionMaskSinStrength: {
                                type: "f",
                                value: i.setTransitionMaskSinStrength()
                            },
                            uRotationRatio: {
                                type: "f",
                                value: 0
                            },
                            uUvPieScaleRatio: {
                                type: "f",
                                value: PROJECT.isMobileSize ? 1.65 : 1
                            }
                        };
                        return Object.assign(i.uniforms, a),
                            i
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        u(n, [{
                            key: "setup",
                            value: function () {
                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setup", this).call(this, r.a, l.a),
                                    this.mesh.material.transparent = !0
                            }
                        }, {
                            key: "scaleIn",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.uniforms.uCurrentScaleRatio.value
                                    , n = this
                                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                                    , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                return this.tweenScaleIn && (this.tweenScaleIn.pause(),
                                    this.tweenScaleIn.kill(),
                                    this.tweenScaleIn = null),
                                    new e(function (e) {
                                        n.tweenScaleIn = i.to(t, a, {
                                            delay: o,
                                            ease: n.easeInOut,
                                            x: 1,
                                            y: 1,
                                            onComplete: e
                                        })
                                    }
                                    )
                            }
                        }, {
                            key: "resetScale",
                            value: function () {
                                i.set(this.uniforms.uCurrentScaleRatio.value, {
                                    x: this.scaleInitValue,
                                    y: this.scaleInitValue
                                })
                            }
                        }, {
                            key: "setTransitionMaskSinStrength",
                            value: function () {
                                return PROJECT.isMobileSize ? this.transitionMaskSinStrength * document.body.clientWidth / 1500 : this.transitionMaskSinStrength * document.body.clientWidth / 1600
                            }
                        }, {
                            key: "onResize",
                            value: function () {
                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onResize", this).call(this),
                                    this.uniforms.uTransitionMaskSinStrength.value = this.setTransitionMaskSinStrength(),
                                    this.sinStrengthRatio = this.setTransitionMaskSinStrength()
                            }
                        }, {
                            key: "onUpdate",
                            value: function (e, t) {
                                this.canUpdate && (c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onUpdate", this).call(this, t),
                                    this.uniforms.uTextureFrontCurrentPie.value.needsUpdate = this.canNeedsUpdateFrontPie,
                                    this.uniforms.uTextureFrontNextPie.value.needsUpdate = this.canNeedsUpdateFrontNextPie)
                            }
                        }]),
                        n
                }();
            t.a = h
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t) {
        e.exports = "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float uRotationRatio;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec4 color;\nvarying vec2 vUv;\n\nvec3 rotate3d(vec3 p, float angle, vec3 axis){\n    vec3 a = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float r = 1.0 - c;\n    mat3 m = mat3(\n        a.x * a.x * r + c,\n        a.y * a.x * r + a.z * s,\n        a.z * a.x * r - a.y * s,\n        a.x * a.y * r - a.z * s,\n        a.y * a.y * r + c,\n        a.z * a.y * r + a.x * s,\n        a.x * a.z * r + a.y * s,\n        a.y * a.z * r - a.x * s,\n        a.z * a.z * r + c\n    );\n    return m * p;\n}\n\nvoid main()\t{\n    vUv = uv;\n    vec3 pos = rotate3d( position, uRotationRatio, vec3( 0.0, 0.0, 1.0 ) );\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );\n}"
    }
    , function (e, t) {
        e.exports = "precision highp float;\nprecision highp int;\n\nuniform float uTime;\nuniform float uAspectRatio;\n\nuniform float uNoiseNextRatio;\nuniform float uNoiseEdgeStrength;\n\nuniform float uTransitionMaskDirection;\nuniform float uTransitionMaskSinStrength;\nuniform float uTransitionMaskRatio;\nuniform float uNextPieEdgeRatio;\nuniform float uDevicePixelRatio;\n\nuniform vec3 uTransitionMaskColor;\n\nuniform float uIsAllColor;\nuniform vec3 uAllColor;\n\nuniform float uUvPieScaleRatio;\nuniform float uUvCurrentTranslateRatio;\nuniform float uUvNextTranslateRatio;\nuniform float uBlackOutRatio;\n\nuniform float uVignetteCircleSize;\nuniform float uVignetteCircleGradationRatio;\nuniform float uVignetteCircleGradationBlackWidth;\nuniform float uVignetteMaxWhiteRatio;\nuniform float uVignetteMinBlackRatio;\n\nuniform float uOpacity;\n\nuniform vec2 uMouse;\nuniform vec2 uResolutionWindow;\nuniform vec2 uInNoiseStrength;\nuniform vec2 uInNoiseTimeCycle;\nuniform vec2 uInNoiseTimeSwing;\nuniform vec2 uOutNoiseStrength;\nuniform vec2 uOutNoiseTimeSwing;\nuniform vec2 uOutNoiseTimeCycle;\n\nuniform float uHoverScale;\nuniform float uTransitionScale;\n\nuniform vec2 uCurrentScaleRatio;\nuniform vec2 uNextScaleRatio;\n\nuniform sampler2D uTextureFrontCurrentPie;\nuniform sampler2D uTextureFrontNextPie;\n\nuniform sampler2D uTextureCurrentImage;\nuniform sampler2D uTextureNextImage;\n\nvarying vec2 vUv;\n\nconst float PI = 3.14159265359;\n\nfloat random (in vec2 _st) {\n  return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n}\n\nvec3 mod289(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n{\nconst vec4 C = vec4(\n    0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n    0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n    -0.577350269189626,  // -1.0 + 2.0 * C.x\n    0.024390243902439\n);\n\nvec2 i  = floor(v + dot(v, C.yy) );\nvec2 x0 = v -   i + dot(i, C.xx);\n\nvec2 i1;\ni1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\nvec4 x12 = x0.xyxy + C.xxzz;\nx12.xy -= i1;\n\ni = mod289(i);\nvec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\nvec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\nm *= m;\nm *= m;\n\nvec3 x = 2.0 * fract(p * C.www) - 1.0;\nvec3 h = abs(x) - 0.5;\nvec3 ox = floor(x + 0.5);\nvec3 a0 = x - ox;\n\nm *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\nvec3 g;\ng.x  = a0.x  * x0.x  + h.x  * x0.y;\ng.yz = a0.yz * x12.xz + h.yz * x12.yw;\nreturn 130.0 * dot(m, g);\n}\n\nvec2 scale( vec2 _uv , vec2 _scale ){\n    vec2 uv = _uv - vec2( 0.5 );\n    uv = mat2( _scale.x, 0.0, 0.0, _scale.y ) * uv;\n    uv += vec2( 0.5 );\n    return uv;\n}\n\nvec4 mss( vec4 a,  vec4 b , float ratio ) {\n    return mix( a, b, smoothstep( 1.0 , 0.0 , ratio ) );\n}\n\nfloat circle(vec2 p){\n    return length(p);\n}\n\nvec4 vignette( vec2 uv ){\n    float circle = circle( vec2(uv * uVignetteCircleSize) );\n    float blackRatio = circle + uVignetteCircleGradationBlackWidth;\n    circle = smoothstep( blackRatio, circle, uVignetteCircleGradationRatio);\n    vec3 vugnetteColor = vec3( clamp(uVignetteMinBlackRatio,1.0 - circle, uVignetteMaxWhiteRatio) );\n    return vec4( vugnetteColor, 1.0 );\n}\n\nvec2 uvPie(){\n    vec2 reslution = uResolutionWindow;\n    vec2 reslutionHalf = uResolutionWindow * 0.5;\n\n    reslution += reslutionHalf;\n    reslution = scale( reslution , vec2(uUvPieScaleRatio) );\n    reslution -= reslutionHalf;\n\n    float pRatio = mix(\n        reslution.x,\n        reslution.y,\n        step(0.5,uAspectRatio)\n    );\n\n    vec2 p = ( gl_FragCoord.xy * uDevicePixelRatio * 2.0 - uResolutionWindow ) / pRatio;\n    return p;\n}\n\nfloat transtionMaskSin( vec2 uv ){\n    float a = sin(uv.x * PI) * uTransitionMaskSinStrength - uTransitionMaskSinStrength;\n    float b = (uTransitionMaskRatio + uTransitionMaskRatio * uTransitionMaskSinStrength);\n\n    return a + b;\n}\n\nconst float CIRCLE_RATIO = 0.7;\nconst float MOUSE_RATIO = 0.008;\n\nvoid main() {\n    vec2 uvWindow = ( gl_FragCoord.xy * uDevicePixelRatio ) / uResolutionWindow;\n    vec2 uvVignette =  ( gl_FragCoord.xy * uDevicePixelRatio * 2.0 - uResolutionWindow ) / uResolutionWindow.x;\n\n    vec2 uvPie = uvPie();\n\n    vec4 vignette = vignette( uvVignette );\n\n    float mouse = uMouse.x + uMouse.y * MOUSE_RATIO;\n    float noiseNext = uNoiseNextRatio * 0.3;\n    float mouseNoiseNext = mouse + noiseNext;\n\n    float inNoiseArg01 = ( (sin(uTime * uInNoiseTimeCycle.y * 0.0001)) * uInNoiseTimeSwing.y * uInNoiseStrength.y ) * uvPie.y;\n    float inNoiseArg02 = ( (cos(uTime * uInNoiseTimeCycle.x * 0.0001)) * uInNoiseTimeSwing.x * uInNoiseStrength.x ) * uvPie.x;\n    float inNoiseValue = snoise( vec2(inNoiseArg01, inNoiseArg02 ));\n    inNoiseValue *= mouseNoiseNext;\n    inNoiseValue *= 10.0;\n\n    float outNoiseArg01 = ( (sin(uTime * uOutNoiseTimeCycle.y * 0.0001)) * uOutNoiseTimeSwing.y * uOutNoiseStrength.y ) * uvPie.y;\n    float outNoiseArg02 = ( (cos(uTime * uOutNoiseTimeCycle.x * 0.0001)) * uOutNoiseTimeSwing.x * uOutNoiseStrength.x ) * uvPie.x;\n    float outNoiseValue = snoise( vec2(outNoiseArg01, outNoiseArg02 ));\n    outNoiseValue *= mouseNoiseNext;\n    outNoiseValue *= 15.0;\n    outNoiseValue *= uNoiseEdgeStrength;\n    outNoiseValue *= 0.1;\n\n    float transitionMaskSin = transtionMaskSin( uvWindow );\n    float asspectScale = mix(\n        0.656,\n        0.45,\n        step(0.5,uAspectRatio)\n    );;\n\n    uvPie = scale( uvPie + 0.5, vec2(asspectScale) );\n    uvPie += outNoiseValue;\n\n    float TransitionImageYRatio = mix( 1.0, -1.0, uTransitionMaskDirection );\n\n    vec2 uvCurrentImage = scale(  vUv, uCurrentScaleRatio );\n    uvCurrentImage = scale(  uvCurrentImage, vec2( 1.0 - uHoverScale ) );\n    uvCurrentImage = scale(  uvCurrentImage, vec2( 1.0 - uTransitionScale ) );\n    uvCurrentImage.x += uUvCurrentTranslateRatio;\n    uvCurrentImage.x -= inNoiseValue;\n    uvCurrentImage.y -= transitionMaskSin * 0.2 * uTransitionMaskRatio * TransitionImageYRatio;\n\n    vec2 uvTransitionNextImage = scale(  vUv, uNextScaleRatio );\n    uvTransitionNextImage = scale(  uvTransitionNextImage, vec2( 1.0 - uHoverScale ) );\n    uvTransitionNextImage = scale(  uvTransitionNextImage, vec2( 1.0 - uTransitionScale ) );\n    uvTransitionNextImage.x += uUvNextTranslateRatio;\n    uvTransitionNextImage.x -= inNoiseValue;\n    uvTransitionNextImage.y -= transitionMaskSin * 0.2 * uTransitionMaskRatio * TransitionImageYRatio;\n\n    vec4 tCurrentImage = texture2D( uTextureCurrentImage, uvCurrentImage );\n    vec4 tNextImage = texture2D( uTextureNextImage, uvTransitionNextImage );\n\n    vec4 tCurrentPieMap = texture2D( uTextureFrontCurrentPie, uvPie );\n    vec4 tNextPieMap = texture2D( uTextureFrontNextPie, uvPie );\n\n    vec4 edgeColor = mss( tNextImage, tCurrentImage, uNextPieEdgeRatio );\n    edgeColor = mix( edgeColor, vec4(uTransitionMaskColor, 0.0), transitionMaskSin );\n\n    vec4 currentPie = mss(\n        vec4( edgeColor.rgb , 0.0 ),\n        tCurrentImage,\n        tCurrentPieMap.r\n    );\n\n    vec4 nextPie = mss(\n        vec4( edgeColor.rgb , 0.0 ),\n        tNextImage,\n        tNextPieMap.r\n    );\n\n    vec4 transitioMaskPie = mix(\n        vec4( 0.0 ),\n        vec4( 1.0 ),\n        vec4( step( abs( uTransitionMaskDirection - uvPie.y ), transitionMaskSin ) )\n    );\n\n    vec4 color = mix(\n        vec4( nextPie ),\n        vec4( currentPie ),\n        vec4( smoothstep( tCurrentPieMap.r, 1.0 - tCurrentPieMap.r, tNextPieMap.r ) )\n    );\n\n    color = mix(\n        vec4( color ),\n        vec4( color * vec4( vec3( 0.35 ) ,1.0 ) ),\n        vec4( smoothstep( 0.0 , 1.0 , uBlackOutRatio ) )\n    );\n\n    color *= vignette;\n    color = mix( color, vec4(edgeColor.rgb,0.0), uIsAllColor );\n    color = mix(\n        vec4( color ),\n        vec4( uTransitionMaskColor, transitioMaskPie.a ),\n        vec4( smoothstep( tCurrentPieMap.r, 1.0 - tCurrentPieMap.r, transitioMaskPie.r ) )\n    );\n\n    float alpha = color.a * uOpacity;\n\n    gl_FragColor = vec4( color.rgb , alpha );\n\n}"
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(6)
                , o = n(21)
                , r = n(70)
                , s = n.n(r)
                , l = n(71)
                , u = n.n(l)
                , c = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , h = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === a) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, i)
                    }
                    if ("value" in a)
                        return a.value;
                    var r = a.get;
                    return void 0 !== r ? r.call(i) : void 0
                }
                , d = function (t) {
                    function n(e, t) {
                        !function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var i = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
                        i.geometry = new a.d(e, t, 1, 1),
                            i.canNeedsUpdateBackPie = !0,
                            i.canUpdate = !0,
                            i.transitionMaskSinStrength = .275,
                            i.slideMaskSinStrength = .1,
                            i.sinStrengthRatio = 0;
                        var o = {
                            uPrevMaskXRatio: {
                                type: "f",
                                value: 1
                            },
                            uNextMaskXRatio: {
                                type: "f",
                                value: 1
                            },
                            uBlackRatio: {
                                type: "f",
                                value: 0
                            },
                            uTransitionMaskColor: {
                                type: "color",
                                value: {
                                    r: 1,
                                    g: 1,
                                    b: 1
                                }
                            },
                            uTransitionMaskSinStrength: {
                                type: "f",
                                value: i.setTransitionMaskSinStrength()
                            },
                            uSlideMaskSinStrength: {
                                type: "f",
                                value: i.setSlideMaskSinStrength()
                            },
                            uUseUvSin: {
                                type: "f",
                                value: 0
                            },
                            uRotationRatio: {
                                type: "f",
                                value: 0
                            },
                            uDragScaleRatio: {
                                type: "f",
                                value: 1
                            },
                            uCurrentNoiseStrength: {
                                type: "v2",
                                value: {
                                    x: .045,
                                    y: .06
                                }
                            },
                            uTransitionMaskDirection: {
                                type: "f",
                                value: 0
                            },
                            uMaskNoiseStrength: {
                                type: "v2",
                                value: {
                                    x: .005,
                                    y: .065
                                }
                            },
                            uCurrentNoisePeriod: {
                                type: "v2",
                                value: {
                                    x: 1,
                                    y: 2.5
                                }
                            },
                            uMaskNoisePeriod: {
                                type: "v2",
                                value: {
                                    x: 1,
                                    y: 3
                                }
                            },
                            uCurrentNoiseSpeed: {
                                type: "v2",
                                value: {
                                    x: .002,
                                    y: .003
                                }
                            },
                            uMaskNoiseSpeed: {
                                type: "v2",
                                value: {
                                    x: .005,
                                    y: .002
                                }
                            },
                            uUseNoise: {
                                type: "f",
                                value: 1
                            },
                            uHoverWorksListRatio: {
                                type: "f",
                                value: 1
                            }
                        };
                        return Object.assign(i.uniforms, o),
                            i
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, o.a),
                        c(n, [{
                            key: "setup",
                            value: function () {
                                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setup", this).call(this, s.a, u.a)
                            }
                        }, {
                            key: "scaleIn",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.uniforms.uCurrentScaleRatio.value
                                    , n = this
                                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2.2
                                    , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .3;
                                return new e(function (e) {
                                    i.to(t, a, {
                                        ease: n.easeInOut,
                                        delay: o,
                                        x: 1,
                                        y: 1,
                                        onComplete: e
                                    })
                                }
                                )
                            }
                        }, {
                            key: "resetScale",
                            value: function () {
                                i.set(this.uniforms.uCurrentScaleRatio.value, {
                                    x: this.scaleInitValue,
                                    y: this.scaleInitValue
                                })
                            }
                        }, {
                            key: "setTransitionMaskSinStrength",
                            value: function () {
                                return PROJECT.isMobileSize ? this.transitionMaskSinStrength * document.body.clientWidth / 1500 : this.transitionMaskSinStrength * document.body.clientWidth / 1600
                            }
                        }, {
                            key: "setSlideMaskSinStrength",
                            value: function () {
                                return this.slideMaskSinStrength * window.innerHeight / 1e3
                            }
                        }, {
                            key: "onResize",
                            value: function () {
                                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onResize", this).call(this),
                                    this.uniforms.uTransitionMaskSinStrength.value = this.setTransitionMaskSinStrength(),
                                    this.sinStrengthRatio = this.setTransitionMaskSinStrength(),
                                    this.uniforms.uSlideMaskSinStrength.value = this.setSlideMaskSinStrength()
                            }
                        }, {
                            key: "onUpdate",
                            value: function (e, t) {
                                h(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onUpdate", this).call(this, t),
                                    this.canNeedsUpdateBackPie && (this.uniforms.uTextureBackPie.value.needsUpdate = this.canNeedsUpdateBackPie)
                            }
                        }]),
                        n
                }();
            t.a = d
        }
        ).call(this, n(4), n(5))
    }
    , function (e, t) {
        e.exports = "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float uRotationRatio;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec4 color;\nvarying vec2 vUv;\n\nvec3 rotate3d(vec3 p, float angle, vec3 axis){\n    vec3 a = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float r = 1.0 - c;\n    mat3 m = mat3(\n        a.x * a.x * r + c,\n        a.y * a.x * r + a.z * s,\n        a.z * a.x * r - a.y * s,\n        a.x * a.y * r - a.z * s,\n        a.y * a.y * r + c,\n        a.z * a.y * r + a.x * s,\n        a.x * a.z * r + a.y * s,\n        a.y * a.z * r - a.x * s,\n        a.z * a.z * r + c\n    );\n    return m * p;\n}\n\nvoid main()\t{\n    vUv = uv;\n\n    vec3 pos = rotate3d(position, uRotationRatio, vec3(0.0,0.0,1.0));\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );\n}"
    }
    , function (e, t) {
        e.exports = "precision highp float;\nprecision highp int;\n\n// 経過時間\nuniform float uTime;\n// 画面解像度\nuniform float uDevicePixelRatio;\n// スライド時マスクの調整値\nuniform float uNextMaskXRatio;\n\n// スライド時ビジュアルの移動エフェクト調整値\nuniform float uUvCurrentTranslateRatio;\nuniform float uUvNextTranslateRatio;\n\nuniform float uSlideMaskSinStrength;\n\nuniform float uIsAllColor;\nuniform vec3 uAllColor;\n\nuniform float uTransitionMaskDirection;\nuniform float uTransitionMaskRatio;\nuniform float uTransitionMaskSinStrength;\n\nuniform vec3 uTransitionMaskColor;\n\nuniform float uBlackOutRatio;\nuniform float uHoverWorksListRatio;\n\nuniform vec2 uCurrentNoiseStrength;\nuniform vec2 uMaskNoiseStrength;\nuniform vec2 uCurrentNoiseSpeed;\nuniform vec2 uMaskNoiseSpeed;\nuniform vec2 uCurrentNoisePeriod;\nuniform vec2 uMaskNoisePeriod;\n\n// ビネット\nuniform float uVignetteCircleSize;\nuniform float uVignetteCircleGradationRatio;\nuniform float uVignetteCircleGradationBlackWidth;\nuniform float uVignetteMaxWhiteRatio;\nuniform float uVignetteMinBlackRatio;\n\nuniform float uBlackRatio;\nuniform float uUseUvSin;\nuniform float uUseNoise;\n\nuniform float uOpacity;\nuniform float uDragScaleRatio;\n\n// オープニングアニメーションマスク調整値\nuniform sampler2D uTextureBackPie;\n\n// 画面縦横サイズ\nuniform vec2 uResolutionWindow;\n// テクスチャ 画像\nuniform sampler2D uTextureCurrentImage;\nuniform sampler2D uTextureNextImage;\nuniform sampler2D uTextureHoverImage;\n\nuniform float uHoverScale;\nuniform float uTransitionScale;\n// スライド時スケールエフェクト調整値\nuniform vec2 uCurrentScaleRatio;\nuniform vec2 uNextScaleRatio;\n\n// テクスチャ座標\nvarying vec2 vUv;\n\nconst float PI = 3.14159265359;\n\nvec2 scale( vec2 _uv, vec2 _scale ){\n    vec2 uv = _uv - vec2( 0.5 );\n    uv = mat2( _scale.x, 0.0, 0.0, _scale.y ) * uv;\n    uv += vec2(0.5);\n\n    return uv;\n}\n\nvec3 rotate3d(vec3 p, float angle, vec3 axis){\n    vec3 a = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float r = 1.0 - c;\n    mat3 m = mat3(\n        a.x * a.x * r + c,\n        a.y * a.x * r + a.z * s,\n        a.z * a.x * r - a.y * s,\n        a.x * a.y * r - a.z * s,\n        a.y * a.y * r + c,\n        a.z * a.y * r + a.x * s,\n        a.x * a.z * r + a.y * s,\n        a.y * a.z * r - a.x * s,\n        a.z * a.z * r + c\n    );\n    return m * p;\n}\n\nfloat circle( vec2 p ){\n    return length( p );\n}\n\nvec4 vignette( vec2 uv ){\n    float circle = circle( vec2(uv * uVignetteCircleSize) );\n    float blackRatio = circle + uVignetteCircleGradationBlackWidth;\n    circle = smoothstep( blackRatio, circle, uVignetteCircleGradationRatio);\n    vec3 vugnetteColor = vec3( clamp(uVignetteMinBlackRatio,1.0 - circle, uVignetteMaxWhiteRatio) );\n    return vec4( vugnetteColor, 1.0 );\n}\n\nfloat transtionMask( vec2 uv ){\n    float mask = uTransitionMaskRatio + uTransitionMaskRatio * uTransitionMaskSinStrength;\n    float maskSin = sin(uv.x * PI) * uTransitionMaskSinStrength - uTransitionMaskSinStrength;\n    return maskSin += mask;\n}\n\nvec4 zoomInMask(vec4 texture , vec2 uv ){\n\n    vec4 colorBlack = vec4( vec3(0.0) , 1.0 );\n\n    texture = mix(\n        texture,\n        colorBlack,\n        vec4( smoothstep( uv.x, 1.0,  0.0 ) )\n    );\n\n    texture = mix(\n        colorBlack,\n        texture,\n        vec4( smoothstep( 0.0, uv.x,  1.0 ) )\n    );\n\n    texture = mix(\n        colorBlack,\n        texture,\n        vec4( smoothstep( 0.0, uv.y,  1.0 ) )\n    );\n\n    texture = mix(\n        texture,\n        colorBlack,\n        vec4( smoothstep( uv.y, 1.0,  0.0 ) )\n    );\n\n    return texture;\n}\n\n\nvec3 mod289(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n{\nconst vec4 C = vec4(\n    0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n    0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n    -0.577350269189626,  // -1.0 + 2.0 * C.x\n    0.024390243902439\n);\n\nvec2 i  = floor(v + dot(v, C.yy) );\nvec2 x0 = v -   i + dot(i, C.xx);\n\nvec2 i1;\ni1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\nvec4 x12 = x0.xyxy + C.xxzz;\nx12.xy -= i1;\n\ni = mod289(i);\nvec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\nvec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\nm *= m;\nm *= m;\n\nvec3 x = 2.0 * fract(p * C.www) - 1.0;\nvec3 h = abs(x) - 0.5;\nvec3 ox = floor(x + 0.5);\nvec3 a0 = x - ox;\n\nm *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\nvec3 g;\ng.x  = a0.x  * x0.x  + h.x  * x0.y;\ng.yz = a0.yz * x12.xz + h.yz * x12.yw;\nreturn 130.0 * dot(m, g);\n}\n\nvoid main() {\n    vec2 uvWindow = ( gl_FragCoord.xy * uDevicePixelRatio ) / uResolutionWindow;\n    vec2 uvVignette =  ( gl_FragCoord.xy * uDevicePixelRatio * 2.0 - uResolutionWindow ) / uResolutionWindow.x;\n\n    vec2 uv = mix(\n        uvWindow,\n        vUv,\n        vec2(uUseUvSin)\n    );\n\n    // vignette\n    vec4 vignette = vignette( uvVignette );\n\n    // transtion mask sin\n    float transitionMaskSin = transtionMask( uvWindow );\n\n    vec2 uvCurrentImage = vUv;\n    uvCurrentImage = scale( uvCurrentImage, vec2(uDragScaleRatio) );\n\n    vec2 uvImageMask = uvCurrentImage;\n\n    vec2 currentNoise = mix(\n        vec2( snoise( uvCurrentImage * uCurrentNoisePeriod + uCurrentNoiseSpeed * uTime ) * uCurrentNoiseStrength ),\n        vec2( 0.0 ),\n        uUseNoise\n    );\n\n    uvCurrentImage += currentNoise;\n\n    vec2 maskNoise = mix(\n        vec2( snoise( uvImageMask * uMaskNoisePeriod + uMaskNoiseSpeed * uTime ) * uMaskNoiseStrength ),\n        vec2(0.0),\n        uUseNoise\n    );\n\n    uvImageMask += maskNoise;\n\n    float TransitionImageYRatio = mix( 1.0, -1.0, uTransitionMaskDirection );\n\n    uvCurrentImage = scale( uvCurrentImage, uCurrentScaleRatio );\n    uvCurrentImage = scale( uvCurrentImage, vec2( 1.0 - uHoverScale ) );\n    uvCurrentImage = scale( uvCurrentImage, vec2( 1.0 - uTransitionScale ) );\n    uvCurrentImage.x += uUvCurrentTranslateRatio;\n    uvCurrentImage.y -= transitionMaskSin * 0.2 * uTransitionMaskRatio * TransitionImageYRatio;\n\n    vec2 uvNextImage = vUv;\n    uvNextImage = scale( uvNextImage, vec2(uDragScaleRatio) );\n    uvNextImage += currentNoise;\n    uvNextImage = scale( uvNextImage, uNextScaleRatio );\n    uvNextImage = scale( uvNextImage, vec2( 1.0 - uHoverScale ) );\n    uvNextImage = scale( uvNextImage, vec2( 1.0 - uTransitionScale ) );\n    uvNextImage.x += uUvNextTranslateRatio - ( uSlideMaskSinStrength * uNextMaskXRatio) + (sin(uv.y * PI) * uSlideMaskSinStrength ) * ( uNextMaskXRatio );\n    uvNextImage.y -= transitionMaskSin * 0.2 * uTransitionMaskRatio * TransitionImageYRatio;\n\n    vec2 uvHoverImage = uvCurrentImage;\n\n    vec4 tCurrentImage = texture2D( uTextureCurrentImage, uvCurrentImage );\n    tCurrentImage = zoomInMask(tCurrentImage, uvImageMask  );\n\n    vec4 tNextImage = texture2D( uTextureNextImage, uvNextImage );\n    tNextImage = zoomInMask(tNextImage, uvImageMask );\n\n    vec4 tHoverImage = texture2D( uTextureHoverImage, uvHoverImage );\n    tHoverImage = zoomInMask(tHoverImage, uvImageMask );\n\n    float nextSinRatio = uNextMaskXRatio + uSlideMaskSinStrength * uNextMaskXRatio - (sin(uv.y * PI) * uSlideMaskSinStrength ) * ( uNextMaskXRatio );\n\n    vec4 currentColor = mix(\n        vec4( 0.0 ),\n        vec4( tCurrentImage.rgb, 1.0 ),\n        vec4( smoothstep( 1.0, 0.0, texture2D( uTextureBackPie,uv ).r ) )\n    );\n\n    vec4 color = mix(\n        vec4( tNextImage ),\n        vec4( currentColor ),\n        vec4( smoothstep( uvWindow.x, 1.0, nextSinRatio ) )\n    );\n\n    color = mix(\n        vec4( tHoverImage ),\n        vec4( color ),\n        vec4( smoothstep( uvWindow.x * uvWindow.y, 1.0, uHoverWorksListRatio ) )\n    );\n\n    color *= vignette;\n\n    color = mix(\n        color,\n        vec4(uAllColor,1.0),\n        uIsAllColor\n    );\n\n    color = mix(\n        vec4( color ),\n        vec4( uTransitionMaskColor, 1.0 ),\n        vec4( step( abs(uTransitionMaskDirection - uv.y) , transitionMaskSin ) )\n    );\n\n    color = mix(\n        vec4( color ),\n        vec4( color * vec4( vec3( 0.35 ) , 1.0) ),\n        vec4( smoothstep( 0.0 , 1.0 , uBlackOutRatio ) )\n    );\n\n    color = mix(\n        vec4( color ),\n        vec4(vec3(0.0),1.0),\n        vec4( smoothstep(0.0,1.0,uBlackRatio) )\n    );\n\n    color = mix( color , vec4(0.0), step(uOpacity, 0.1) );\n\n    gl_FragColor = color;\n}"
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(6)
                , a = n(22)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function (t) {
                    function n() {
                        return function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                            function (e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        o(n, [{
                            key: "getTexture",
                            value: function (t) {
                                return new e(function (e) {
                                    var n = t.split("/")[t.split("/").length - 1].split(".")[0];
                                    (new i.i).load(t, function (t) {
                                        t.name = String(n),
                                            t.chunkID = Number(n.split("_")[1]),
                                            Object.defineProperty(t, "externalResourcesType", {
                                                value: "texture"
                                            }),
                                            e(t)
                                    }, function (e) { }, function (t) {
                                        e()
                                    })
                                }
                                )
                            }
                        }]),
                        n
                }();
            t.a = r
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(6)
                , a = n(22)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function (t) {
                    function n() {
                        return function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this),
                            function (e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        o(n, [{
                            key: "getTexture",
                            value: function (t) {
                                return new e(function (e) {
                                    var n = new i.h(t);
                                    n.minFilter = i.a,
                                        n.magFilter = i.a,
                                        n.format = i.e,
                                        n.generateMipmaps = !0,
                                        n.needsUpdate = !0,
                                        n.fileType = "canvas2d",
                                        e(n)
                                }
                                )
                            }
                        }]),
                        n
                }();
            t.a = r
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        var i = n(2)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.$stage = t.stage || window,
                        this.behavior = function (e, t) { }
                        ,
                        this._userWheel = "",
                        this._userDown = "",
                        this._userTouchMove = "",
                        this._userUp = "",
                        this._userWheelEvent = "onwheel" in document ? "wheel" : "mousewheel",
                        this._lockWheelEvent = "onwheel" in document ? "wheel" : "mousewheel",
                        this._userDownEvent = "ontouchstart" in window ? "touchstart" : "",
                        this._userUpEvent = "ontouchstart" in window ? "touchend" : "",
                        this._userTouchMoveEvent = "ontouchstart" in window ? "touchmove" : "",
                        this._wheelRatio = t.wheelRatio || 30,
                        this._dragRatio = t.dragRatio || 200,
                        this.preventDefault = t.preventDefault || !1,
                        this._x = 0,
                        this._y = 0,
                        this._nowX = 0,
                        this._nowY = 0,
                        this.direction = 0,
                        this.speed = 0,
                        this.timeStamp = 0,
                        this.canWheel = !0,
                        this.canPrevent = !0
                }
                return a(e, [{
                    key: "run",
                    value: function () {
                        this._userWheel = this._userWheelBehavior.bind(this),
                            this._userTouchMove = this._userTouchMoveBehavior.bind(this),
                            this._userDown = this._userDownBehavior.bind(this),
                            this._userUp = this._userUpBehavior.bind(this);
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function () { }
                            });
                            window.addEventListener("testPassive", null, e),
                                window.removeEventListener("testPassive", null, e)
                        } catch (e) { }
                        window.addEventListener(this._userWheelEvent, this._userWheel, {
                            passive: !1
                        }),
                            window.addEventListener(this._userTouchMoveEvent, this._userTouchMove, {
                                passive: !1
                            }),
                            window.addEventListener(this._userDownEvent, this._userDown, {
                                passive: !1
                            }),
                            window.addEventListener(this._userUpEvent, this._userUp, {
                                passive: !1
                            })
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.$stage.removeEventListener(this._userWheelEvent, this._userWheel)
                    }
                }, {
                    key: "action",
                    value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        t && this.behavior(e, t, n)
                    }
                }, {
                    key: "addNoWheel",
                    value: function () {
                        window.addEventListener(this._lockWheelEvent, this._noWheel, {
                            passive: !1
                        })
                    }
                }, {
                    key: "removeNoWheel",
                    value: function () {
                        window.removeEventListener(this._lockWheelEvent, this._noWheel)
                    }
                }, {
                    key: "_noWheel",
                    value: function (e) {
                        e.preventDefault()
                    }
                }, {
                    key: "_userWheelBehavior",
                    value: function (e) {
                        if (this.canPrevent && e.preventDefault(),
                            this.canWheel) {
                            var t = -e.deltaY || 0;
                            1 === e.deltaMode && (t *= 25),
                                t = i.a.clamp(t, -20, 20),
                                this.speed += 2e-4 * t,
                                this.action("next", this.speed, "wheel")
                        }
                    }
                }, {
                    key: "_userTouchMoveBehavior",
                    value: function (e) {
                        if (this.canWheel) {
                            e.touches ? (this._nowX = e.changedTouches[0].pageX - this._x,
                                this._nowY = e.changedTouches[0].pageY - this._y) : (this._nowX = e.pageX - this._x,
                                    this._nowY = e.pageY - this._y);
                            var t = i.a.clamp(this._nowX + this._nowY, -250, 250);
                            console.log(1e-5 * t),
                                this.speed += 1e-5 * t,
                                this.action("next", this.speed, "wheel")
                        }
                    }
                }, {
                    key: "_userDownBehavior",
                    value: function (e) {
                        this.canWheel && (this.timeStamp = e.timeStamp,
                            e.touches ? (this._x = e.touches[0].pageX,
                                this._y = e.touches[0].pageY) : (this._x = e.pageX,
                                    this._y = e.pageY))
                    }
                }, {
                    key: "_userUpBehavior",
                    value: function (e) {
                        if (this.canWheel) {
                            e.touches ? (this._nowX = e.changedTouches[0].pageX - this._x,
                                this._nowY = e.changedTouches[0].pageY - this._y) : (this._nowX = e.pageX - this._x,
                                    this._nowY = e.pageY - this._y);
                            var t = this._nowX + this._nowY;
                            Math.abs(t) < 5 || (e.timeStamp - this.timeStamp > 200 ? this.speed += 225e-7 * t : (t < 0 && (this.speed -= .0625),
                                t > 0 && (this.speed += .0625)),
                                this.action("next", this.speed, "wheel"))
                        }
                    }
                }]),
                    e
            }();
        t.a = o
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(2)
                , a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , o = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.container = document.querySelector(".js-spring-container"),
                            this.target = document.querySelector(".js-spring"),
                            this.amount = {
                                x: 0,
                                y: 0
                            },
                            this.mouse = {
                                isHover: !1,
                                x: 0,
                                y: 0,
                                start: {
                                    x: .5 * this.container.getBoundingClientRect().left,
                                    y: .5 * this.container.getBoundingClientRect().top
                                },
                                dist: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            this.canUpdate = !0,
                            this.isDraged = !1,
                            this.friction = .4,
                            this.ease = .2
                    }
                    return a(t, [{
                        key: "setup",
                        value: function () {
                            var e = this;
                            this.container.addEventListener("mouseenter", function (t) {
                                e._onMouseEnter(t)
                            }),
                                this.container.addEventListener("mouseleave", function (t) {
                                    e._onMouseLeave(t)
                                }),
                                this.container.addEventListener("mousemove", function (t) {
                                    e._onMouseMove(t)
                                })
                        }
                    }, {
                        key: "_onMouseEnter",
                        value: function (e) {
                            this.mouse.isHover || (this.mouse.isHover = !0),
                                this.canUpdate = !0
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function (e) {
                            if (this.mouse.isHover) {
                                var t = e.target.getBoundingClientRect();
                                this.canUpdate = !0,
                                    this.mouse.x = (2 * (e.clientX - t.x) - t.width) / t.width,
                                    this.mouse.y = (2 * (e.clientY - t.y) - t.height) / t.height
                            }
                        }
                    }, {
                        key: "_onMouseLeave",
                        value: function (e) {
                            this.mouse.isHover = !1
                        }
                    }, {
                        key: "onUpdate",
                        value: function (t) {
                            (this.canUpdate || this.isDraged) && (this.mouse.isHover && !this.isDraged ? (this.mouse.dist.x = this.mouse.x * this.friction,
                                this.mouse.dist.y = this.mouse.y * this.friction) : (this.mouse.dist.x = 0,
                                    this.mouse.dist.y = 0),
                                this.amount.x = i.a.followUp(this.amount.x, this.mouse.dist.x, this.ease),
                                this.amount.y = i.a.followUp(this.amount.y, this.mouse.dist.y, this.ease),
                                Math.abs(this.amount.x - this.mouse.dist.x) < 1e-4 && (this.canUpdate = !1),
                                0 !== this.amount.x && e.set(this.target, {
                                    rotationZ: i.a.digToRad(this.amount.x * this.amount.y) * this.ease,
                                    x: 150 * this.amount.x,
                                    y: 150 * this.amount.y
                                }))
                        }
                    }]),
                        t
                }();
            t.a = o
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(1)
                , a = n(3)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t(e) {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.ease = new a.a,
                            this.$bg = e.querySelectorAll("[data-background-path]"),
                            this.bgLength = this.$bg.length || 0,
                            this.$img = e.querySelectorAll("img"),
                            this.imgLength = this.$img.length || 0,
                            this.imgSrcLength = this.bgLength + this.imgLength,
                            this.src = [],
                            this.images = [],
                            this.progress = 0,
                            this._progressVal = 0,
                            this.progressVal = 0,
                            this.tween = null,
                            this.loader = "",
                            this.isDebug = !1,
                            this.onUpdateFunction = function (e) { }
                            ,
                            this.onCompleteFunction = function () { }
                    }
                    return o(t, [{
                        key: "set",
                        value: function () {
                            var e = 0;
                            if (this.bgLength) {
                                for (var t = 0; t < this.bgLength; t++)
                                    this.src[t] = this.$bg[t].getAttribute("data-background-path"),
                                        this.$bg[t].style.backgroundImage = "url(" + this.src[t] + ")";
                                e = this.src.length
                            }
                            if (this.imgLength)
                                for (var n = 0; n < this.imgLength; n++)
                                    this.src[e + n] = this.$img[n].getAttribute("src")
                        }
                    }, {
                        key: "init",
                        value: function () {
                            this.set(),
                                this.run()
                        }
                    }, {
                        key: "run",
                        value: function () {
                            var e = this
                                , t = 0;
                            if (!this.imgSrcLength)
                                return this.imgSrcLength = 1,
                                    void this.animation(1);
                            for (var n = 0; n < this.imgSrcLength; n++)
                                this.images[n] = new Image,
                                    this.images[n].src = this.src[n],
                                    this.images[n].onload = function () {
                                        e.animation(t += 1)
                                    }
                                    ,
                                    this.images[n].onerror = function () {
                                        e.animation(t += 1)
                                    }
                        }
                    }, {
                        key: "animation",
                        value: function (t) {
                            var n = this;
                            this.isDebug || (i.a.clearTween(this.tween),
                                this.tween = e.to(this, 1.1, {
                                    _progressVal: t,
                                    ease: this.ease.inOut,
                                    onUpdate: function () {
                                        n.progressVal = n._progressVal / n.imgSrcLength,
                                            n.onUpdateFunction(n.progressVal)
                                    },
                                    onComplete: function () {
                                        1 === n.progressVal && setTimeout(function () {
                                            n.onCompleteFunction()
                                        }, 100)
                                    }
                                }))
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var i = n(9)
                , a = n(8)
                , o = n(78)
                , r = n(0)
                , s = n(1)
                , l = n(2)
                , u = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , c = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === a) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, i)
                    }
                    if ("value" in a)
                        return a.value;
                    var r = a.get;
                    return void 0 !== r ? r.call(i) : void 0
                }
                , h = function (t) {
                    function n(e) {
                        !function (e, t) {
                            if (!(e instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var t = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.content = e,
                            t.$worksDetailClose = document.querySelector(".js-target__worksDetailClose"),
                            t.$workTitle = document.querySelector(".js-work__title__inner"),
                            t.$indicatorTarget = e.querySelectorAll(".js-target--indicator"),
                            t.$pageCover = document.querySelector("#pageCover"),
                            t.$pageCoverText = document.querySelector("#pageCoverText"),
                            t.$scaleInTarget = "",
                            t.windowAspectBorder = .6875,
                            t.imageZoom = new o.a,
                            t.zoomImageClickEvent = "click",
                            t.isZoom = !1,
                            t.isThumbClicking = !1,
                            t.isThumbZoom = !1,
                            t.canThumbOnMouse = !1,
                            t.targetThumbPos = 0,
                            t.zoomTarget = null,
                            t.parallaxOption = [],
                            t.canParallaxUpdate = !1,
                            t.canResize = !1,
                            t.canRender = !1,
                            t.footerTop = 0,
                            t.coverOpacity = 0,
                            t.canUpdatePageCover = !1,
                            t.canBlackOutPageTransition = !1,
                            t.keydownEventZoomOut = function (e) {
                                if (!t.isThumbClicking) {
                                    t.isThumbClicking = !0,
                                        document.querySelector("html").classList.add("is-wait");
                                    var n = null;
                                    e.keyCode ? n = event.keyCode : e.which && (n = event.which),
                                        27 === n && t.isThumbZoom ? t._zoomOut(!0, t.zoomTarget) : (t.isThumbClicking = !1,
                                            document.querySelector("html").classList.remove("is-wait"))
                                }
                            }
                            ,
                            t
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.a),
                        u(n, [{
                            key: "viewWillAppear",
                            value: function () {
                                var e = this;

                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "viewWillAppear", this).call(this),
                                    PROJECT.currentWorksNum = parseInt(document.querySelector("#works-detail").dataset.worksNum) + 1 || 0,
                                    PROJECT.currentUrl = location.href,
                                    this.stringTrimmer.targets = this.content.querySelectorAll(".js-target--split"),
                                    this.stringTrimmer.run(),
                                    window.pageInitialized || (PROJECT.headerManager.addStyle("black"),
                                        document.body.classList.add("is-show--close--works-detail")),
                                    this.canResize = !0,
                                    this.canRender = !0,
                                    this.canUpdatePageCover = !0,
                                    MOBILE || TABLET ? (this._setEventZoomEvent = function () { }
                                        ,
                                        this._setIndicator = function () { }
                                        ,
                                        this._setIndicatorTargetOffset = function () { }
                                    ) : (this._setEventZoomEvent(),
                                        this._setIndicator()),
                                    this._setParallaxOption(),
                                    this._setTitleFontSize(),
                                    PROJECT.resizeHandler[10] = function (t) {
                                        e._onResize(t)
                                    }
                                    ,
                                    PROJECT.renderHandler[10] = function (t) {
                                        e._onUpdate(t)
                                    }

                                    ,
                                    this.canParallaxUpdate = !0,
                                    "list" === PROJECT.worksMode ? this.$worksDetailClose.setAttribute("href", "/works/") : this.$worksDetailClose.setAttribute("href", "/")
                            }
                        }, {
                            key: "viewDidAppear",
                            value: function () {
                                var e = this;
                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "viewDidAppear", this).call(this),
                                    document.body.classList.add("is-stage-hide"),
                                    PROJECT.resizeHandler[15] = function (t) {
                                        e._setFooterTop()
                                    }
                                    ,
                                    PROJECT.renderHandler[15] = function (t) {
                                        e._onUpdatePageCover()
                                    }
                                    ,
                                    this.canBlackOutPageTransition = !0
                            }
                        }, {
                            key: "viewWillDisappear",
                            value: function () {
                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "viewWillDisappear", this).call(this),
                                    document.body.classList.remove("is-stage-hide"),
                                    this.canUpdatePageCover = !1,
                                    this.canResize = !1,
                                    this.canRender = !1,
                                    document.body.classList.remove("is-show--close--works-detail"),
                                    this.$worksDetailClose.setAttribute("href", "/"),
                                    this.isThumbZoom && this._zoomOut(!1)
                            }
                        }, {
                            key: "viewDidDisappear",
                            value: function () {
                                c(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "viewDidDisappear", this).call(this),
                                    PROJECT.resizeHandler[10] = function (e) { }
                                    ,
                                    PROJECT.renderHandler[10] = function (e) { }
                                    ,
                                    PROJECT.resizeHandler[15] = function (e) { }
                                    ,
                                    PROJECT.renderHandler[15] = function (e) { }
                                    ,
                                    window.removeEventListener("keydown", this.keydownEventZoomOut, !1)
                            }
                        }, {
                            key: "_onUpdate",
                            value: function () {
                                this._onUpdateParallax(),
                                    this._setIndicatorTargetOffset()
                            }
                        }, {
                            key: "_onResize",
                            value: function () {
                                this._setParallaxOption(),
                                    this._setTitleFontSize()
                            }
                        }, {
                            key: "_setFooterTop",
                            value: function () {
                                this.footerTop = document.querySelector(".js-smooth-scroll-wrapper").scrollHeight - 1.5 * PROJECT.resizeManager.height,
                                    this.windowInnerHeightRatio = 1 / PROJECT.resizeManager.height
                            }
                        }, {
                            key: "_onUpdatePageCover",
                            value: function () {
                                this.canUpdatePageCover && (PROJECT.smoothScrollManager.now > this.footerTop - 50 && (this.coverOpacity = Math.max(0, Math.min(1, this.windowInnerHeightRatio * (PROJECT.smoothScrollManager.now - this.footerTop) * 2.05)),
                                    this.$pageCover.style.opacity = this.coverOpacity,
                                    this.$pageCoverText.style.transform = "translateY(" + -(150 - 100 * this.coverOpacity) + "%)"),
                                    this.coverOpacity >= 1 && this.canBlackOutPageTransition && (PROJECT.screenFix.addNoKeyDown(),
                                        PROJECT.screenFix.addNoKeyUp(),
                                        PROJECT.screenFix.addNoWheel(),
                                        "list" === PROJECT.worksMode ? (PROJECT.pageTransitionState.worksDetailToWorks = 1,
                                            i.a.triggerPageTransition("/works/")) : (PROJECT.pageTransitionState.worksDetailToTop = 1,
                                                i.a.triggerPageTransition("/"))))
                            }
                        }, {
                            key: "_setIndicator",
                            value: function () {
                                PROJECT.indicator.listLength = this.$indicatorTarget.length,
                                    this._setIndicatorTargetOffset(),
                                    PROJECT.indicator.canUpdate = !0,
                                    PROJECT.indicator.isShow = !0
                            }
                        }, {
                            key: "_setIndicatorTargetOffset",
                            value: function () {
                                for (var e = 0; e < PROJECT.indicator.listLength; e++)
                                    PROJECT.indicator.indicatorOffset[e] = s.a.getTargetOffsetTop(this.$indicatorTarget[e]) - PROJECT.resizeManager.height
                            }
                        }, {
                            key: "_setTitleFontSize",
                            value: function () {
                                PROJECT.isMobileSize ? this.$workTitle.style.fontSize = "1.4rem" : window.innerHeight / window.innerWidth < this.windowAspectBorder ? this.$workTitle.style.fontSize = Math.max(1, Math.round(.027 * window.innerHeight) / 10) + "rem" : this.$workTitle.style.fontSize = Math.max(1, Math.round(window.innerWidth * this.windowAspectBorder * .027) / 10) + "rem"
                            }
                        }, {
                            key: "_setParallaxOption",
                            value: function () {
                                var e = document.querySelectorAll(".js-parallax__content");
                                this.parallaxLength = e.length;
                                for (var t = 0; t < this.parallaxLength; t++)
                                    this.parallaxOption[t] = {},
                                        this.parallaxOption[t].target = e[t].querySelector(".js-parallax__target"),
                                        this.parallaxOption[t].targetHeight = window.innerHeight || e[t].getBoundingClientRect().height,
                                        this.parallaxOption[t].ratio = parseFloat(e[t].getAttribute("data-parallax-ratio")) || 1,
                                        this.parallaxOption[t].offsetTop = s.a.getTargetOffsetTop(e[t]),
                                        this.parallaxOption[t].startPoint = Math.max(0, this.parallaxOption[t].offsetTop - window.innerHeight),
                                        this.parallaxOption[t].endPoint = this.parallaxOption[t].startPoint + this.parallaxOption[t].targetHeight,
                                        this.parallaxOption[t].now = this.parallaxOption[t].now || 0,
                                        this.parallaxOption[t].prev = this.parallaxOption[t].prev || 0;
                                this._onUpdateParallax(!0, !0)
                            }
                        }, {
                            key: "_onUpdateParallax",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canParallaxUpdate
                                    , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (e) {
                                    var n = this.parallaxLength;
                                    if (n && PROJECT.smoothScrollManager.now - this.parallaxOption[1].now <= this.parallaxOption[1].endPoint * this.parallaxOption[1].ratio || t)
                                        for (; n--;)
                                            !MOBILE && "safari" === uaName || Math.abs(PROJECT.smoothScrollManager.nowAbs - Math.abs(PROJECT.smoothScrollManager.st)) < .002 ? this.parallaxOption[n].now = Math.round(PROJECT.smoothScrollManager.now * this.parallaxOption[n].ratio) : this.parallaxOption[n].now = PROJECT.smoothScrollManager.now * this.parallaxOption[n].ratio,
                                                this.parallaxOption[n].target.style.transform = "translate3d(0," + this.parallaxOption[n].now + "px,0)",
                                                this.parallaxOption[n].prev = this.parallaxOption[n].now
                                }
                            }
                        }, {
                            key: "_setEventZoomEvent",
                            value: function () {
                                var e = document.querySelectorAll(".js-target--imageZoom")
                                    , t = e.length;
                                if (t) {
                                    for (var n = 0; n < t; n++)
                                        e[n].addEventListener(this.zoomImageClickEvent, this._getCenterPos.bind(this), !1);
                                    window.addEventListener("keydown", this.keydownEventZoomOut, !1)
                                }
                            }
                        }, {
                            key: "_getCenterPos",
                            value: function (t) {
                                var n = this;
                                if (t.preventDefault(),
                                    !this.isThumbClicking)
                                    if (this.isThumbClicking = !0,
                                        document.querySelector("html").classList.add("is-wait"),
                                        this.isThumbZoom)
                                        this._zoomOut(!0, t.target);
                                    else {
                                        this.canThumbOnMouse = !1,
                                            this.canParallaxUpdate = !1,
                                            this.canUpdatePageCover = !1,
                                            PROJECT.indicator.canUpdate = !1,
                                            e.to(this.$pageCover, .6, {
                                                ease: this.ease.linear,
                                                opacity: 0,
                                                onComplete: function () {
                                                    n.$pageCover.style.opacity = ""
                                                }
                                            }),
                                            e.to(document.querySelectorAll(".js-parallax__content"), .6, {
                                                ease: this.ease.linear,
                                                opacity: 0
                                            }),
                                            e.to(document.querySelector(".js-transition__indicator"), .6, {
                                                ease: this.ease.inOutBq,
                                                opacity: 0
                                            }),
                                            e.to(document.querySelector(".js-header"), .6, {
                                                ease: this.ease.inOutBq,
                                                opacity: 0,
                                                y: -15,
                                                onComplete: function () {
                                                    document.querySelector(".js-header").style.visibility = "hidden"
                                                }
                                            });
                                        var i = Math.round(s.a.getTargetOffsetCenterTop(t.target, PROJECT.smoothScrollManager.now));
                                        this.targetThumbPos = i,
                                            PROJECT.smoothScrollManager.stop(),
                                            PROJECT.smoothScrollManager.fixed(),
                                            this.zoomTarget = t.target,
                                            this._zoomIn(t.target, i)
                                    }
                            }
                        }, {
                            key: "_zoomIn",
                            value: function (t, n) {
                                var i = this;
                                s.a.imageLoad(t.dataset.imageZoom).then(function (e) {
                                    e.classList.add("p-works-detail__list__item__image--zoom"),
                                        t.querySelector(".img").appendChild(e)
                                }),
                                    PROJECT.screenFix.addNoKeyDown(),
                                    PROJECT.screenFix.addNoKeyUp(),
                                    PROJECT.screenFix.addNoWheel(),
                                    PROJECT.smoothScrollManager.parallaxManager.canUpdate = !1,
                                    PROJECT.smoothScrollManager.parallaxManager.canOnComplete = !1;
                                var a = document.querySelector(".js-smooth-scroll-content").style.transform.split(",");
                                a = 1 === a.length ? 0 : parseInt(a[1].replace("px", "")),
                                    e.set(document.querySelector(".js-smooth-scroll-content"), {
                                        y: a
                                    }),
                                    t.classList.add("is-current"),
                                    this.imageZoom.run(t),
                                    e.set(t.querySelector(".p-works-detail__list__item__inner"), {
                                        force3D: !0,
                                        scaleX: 1.1,
                                        scaleY: 1.1,
                                        y: "5%"
                                    }),
                                    e.to(t.querySelector(".p-works-detail__list__item__inner"), .6, {
                                        force3D: !0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        y: "0%"
                                    });
                                var o = t.querySelector(".js-target--parallax").style.transform;
                                o = (o = o && o.split(",") ? o.split(",")[1] : 0) && o.split("px") ? o.split("px")[0] : 0,
                                    e.set(t.querySelector(".js-target--parallax"), {
                                        force3D: !0,
                                        y: parseFloat(o)
                                    }),
                                    e.to(t.querySelector(".js-target--parallax"), .6, {
                                        force3D: !0,
                                        y: 0
                                    }),
                                    e.to(document.querySelector(".js-smooth-scroll-content"), .65, {
                                        ease: this.ease.inOutBq,
                                        force3D: !0,
                                        y: -n,
                                        onComplete: function () {
                                            i.isThumbZoom = !0,
                                                i.isThumbClicking = !1,
                                                e.to(document.querySelectorAll(".p-works-detail__opacity"), .65, {
                                                    opacity: 0
                                                }),
                                                e.to(document.querySelector(".p-works-detail__title"), .65, {
                                                    opacity: 0
                                                }),
                                                PROJECT.smoothScrollManager.now = n,
                                                PROJECT.smoothScrollManager.st = n,
                                                PROJECT.renderHandler.push(function (e) {
                                                    i.imageZoom.onUpdate()
                                                }),
                                                PROJECT.resizeHandler.push(function () {
                                                    i.targetThumbPos += Math.round(s.a.getTargetOffsetCenterTop(i.zoomTarget.parentNode)),
                                                        e.set(document.querySelector(".js-smooth-scroll-content"), {
                                                            y: -i.targetThumbPos
                                                        }),
                                                        i.imageZoom.onResize(),
                                                        PROJECT.smoothScrollManager.now = i.targetThumbPos,
                                                        PROJECT.smoothScrollManager.st = i.targetThumbPos,
                                                        document.querySelector("html").classList.remove("is-wait")
                                                }),
                                                s.a.triggerEvent(window, "resize")
                                        }
                                    })
                            }
                        }, {
                            key: "_zoomOut",
                            value: function () {
                                var t = this
                                    , n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                                    , i = arguments[1]
                                    , a = i.querySelector(".p-works-detail__list__item__image--zoom");
                                a && i.querySelector(".img").removeChild(a),
                                    PROJECT.resizeHandler.pop(),
                                    this.canThumbOnMouse = !0,
                                    document.querySelector(".js-header").style.visibility = "",
                                    e.to(document.querySelector(".js-header"), .6, {
                                        delay: .2,
                                        ease: this.ease.inOutBq,
                                        opacity: 1,
                                        y: 0
                                    }),
                                    e.to(document.querySelector(".js-transition__indicator"), .6, {
                                        delay: .2,
                                        ease: this.ease.inOutBq,
                                        opacity: 1,
                                        y: 0
                                    }),
                                    n && e.to(this.$pageCover, .6, {
                                        delay: .2,
                                        ease: this.ease.linear,
                                        opacity: Math.max(0, Math.min(1, this.windowInnerHeightRatio * (PROJECT.smoothScrollManager.now - this.footerTop) * 1.015))
                                    }),
                                    e.set(i.querySelector(".p-works-detail__list__item__inner"), {
                                        force3D: !0,
                                        scaleX: 1,
                                        scaleY: 1
                                    }),
                                    e.to(i.querySelector(".p-works-detail__list__item__inner"), .8, {
                                        force3D: !0,
                                        scaleX: 1.1,
                                        scaleY: 1.1
                                    }),
                                    this.imageZoom.out().then(function () {
                                        r.a.wait(100).then(function () {
                                            t.isThumbZoom = !1,
                                                PROJECT.smoothScrollManager.smoothManager.canUpdate = !0,
                                                PROJECT.smoothScrollManager.clearFixed(),
                                                PROJECT.smoothScrollManager.reStart(),
                                                t.canParallaxUpdate = !0,
                                                t.isZoom = !1,
                                                PROJECT.renderHandler.pop(),
                                                n && (s.a.triggerEvent(window, "resize"),
                                                    t.canUpdatePageCover = !0),
                                                e.to(document.querySelectorAll(".js-parallax__content"), .6, {
                                                    ease: t.ease.linear,
                                                    opacity: 1
                                                }),
                                                setTimeout(function () {
                                                    for (var n = function (t) {
                                                        PROJECT.smoothScrollManager.parallaxManager._set();
                                                        var n = (PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].scrollManager.now - PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].start) / PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].parallaxSatgeHeight;
                                                        PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].velocity[0] = n * PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].moveRangeX,
                                                            PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].velocity[1] = n * PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].moveRangeY;
                                                        var i = l.a.clamp(PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].velocity[0], 0, PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].moveRangeX)
                                                            , a = l.a.clamp(PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].velocity[1], 0, PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].moveRangeY)
                                                            , o = PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target.style.transform
                                                            , r = PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target.style.transform;
                                                        o = (o = o && o.split(",") ? o.split(",")[0] : 0) && o.split("px") ? o.split("px")[0] : 0,
                                                            r = (r = r && r.split(",") ? r.split(",")[1] : 0) && r.split("px") ? r.split("px")[0] : 0,
                                                            e.set(PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target, {
                                                                force3D: !0,
                                                                x: parseFloat(o),
                                                                y: parseFloat(r)
                                                            });
                                                        var s = 0;
                                                        PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target.closest(".p-works-detail__opacity") && PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target.closest(".p-works-detail__opacity").classList.contains("is-current") && (s = .6),
                                                            setTimeout(function () {
                                                                e.to(PROJECT.smoothScrollManager.parallaxManager.parallaxItem[t].$target, s, {
                                                                    force3D: !0,
                                                                    x: -i,
                                                                    y: -a,
                                                                    onComplete: function () {
                                                                        t === PROJECT.smoothScrollManager.parallaxManager.parallaxItem.length - 1 && (e.to(document.querySelectorAll(".p-works-detail__opacity"), .6, {
                                                                            opacity: 1
                                                                        }),
                                                                            PROJECT.smoothScrollManager.parallaxManager.canUpdate = !0,
                                                                            PROJECT.smoothScrollManager.parallaxManager.canOnComplete = !0)
                                                                    }
                                                                })
                                                            }, 0)
                                                    }, a = 0; a < PROJECT.smoothScrollManager.parallaxManager.parallaxItem.length; a++)
                                                        n(a);
                                                    e.set(i, {
                                                        opacity: 1
                                                    }),
                                                        e.to(i.querySelector(".p-works-detail__list__item__inner"), .6, {
                                                            force3D: !0,
                                                            y: "5%",
                                                            onComplete: function () {
                                                                i.classList.remove("is-current"),
                                                                    t.isThumbClicking = !1,
                                                                    PROJECT.screenFix.removeNoKeyDown(),
                                                                    PROJECT.screenFix.removeNoKeyUp(),
                                                                    PROJECT.screenFix.removeNoWheel(),
                                                                    document.querySelector("html").classList.remove("is-wait")
                                                            }
                                                        }),
                                                        e.to(document.querySelector(".p-works-detail__title"), .6, {
                                                            delay: .1,
                                                            opacity: 1
                                                        })
                                                }, 50)
                                        }),
                                            r.a.wait(200).then(function () {
                                                PROJECT.indicator.canUpdate = !0
                                            })
                                    })
                            }
                        }]),
                        n
                }();
            t.a = h
        }
        ).call(this, n(5))
    }
    , function (e, t, n) {
        "use strict";
        (function (e, i) {
            var a = n(1)
                , o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n),
                            i && e(t, i),
                            t
                    }
                }()
                , r = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this.duration = {
                                in: .6,
                                out: .8
                            },
                            this.easing = {
                                in: a.a.getCubicCurve(.25, .1, .25, 1),
                                out: a.a.getCubicCurve(.45, 0, .45, 1)
                            },
                            this.mouseRatio = .07,
                            this.target = null,
                            this.targetSize = {
                                width: 0,
                                height: 0,
                                aspect: 0
                            },
                            this.targetZoomedSize = {
                                width: 0,
                                height: 0
                            },
                            this.windowSize = {
                                width: 0,
                                height: 0,
                                aspect: 0
                            },
                            this.diffSize = {
                                width: 0,
                                height: 0
                            },
                            this.mouse = {
                                x: 0,
                                y: 0
                            },
                            this.mousePos = {
                                x: 0,
                                y: 0
                            },
                            this.distance = {
                                x: 0,
                                y: 0
                            },
                            this.scale = {
                                x: 1.8,
                                y: 1.8
                            },
                            this.scale2 = {
                                x: 1.1,
                                y: 1.1
                            },
                            this.zoomRatio = 1,
                            this.state = {
                                isTransition: !1,
                                isZoom: !1,
                                canUpdate: !1
                            },
                            this._mouseMove = this.onMouseMove.bind(this)
                    }
                    return o(t, [{
                        key: "set",
                        value: function () {
                            this.target && !this.state.isTransition && (this.windowSize.width = window.innerWidth,
                                this.windowSize.height = window.innerHeight,
                                this.windowSize.aspect = window.innerWidth / window.innerHeight,
                                this.targetSize.width = this.target.getBoundingClientRect().width / this.zoomRatio,
                                this.targetSize.height = this.target.getBoundingClientRect().height / this.zoomRatio,
                                this.targetSize.aspect = this.targetSize.width / this.targetSize.height,
                                this.targetSize.aspect > this.windowSize.aspect ? (this.direction = "height",
                                    this.zoomRatio = Math.ceil(this.windowSize.height / this.targetSize.height * 100) / 100) : (this.direction = "width",
                                        this.zoomRatio = Math.ceil(this.windowSize.width / this.targetSize.width * 100) / 100),
                                this.targetZoomedSize.width = this.targetSize.width * this.zoomRatio,
                                this.targetZoomedSize.height = this.targetSize.height * this.zoomRatio,
                                this.diffSize.width = this.targetZoomedSize.width - this.windowSize.width,
                                this.diffSize.height = this.targetZoomedSize.height - this.windowSize.height,
                                this.state.isZoom && this.addStyle())
                        }
                    }, {
                        key: "addStyle",
                        value: function () {
                            e.set(this.target, {
                                force3D: !0,
                                x: -this.distance.x,
                                y: this.distance.y,
                                scale: this.zoomRatio
                            })
                        }
                    }, {
                        key: "addEvent",
                        value: function () {
                            window.addEventListener("mousemove", this._mouseMove)
                        }
                    }, {
                        key: "removeEvent",
                        value: function () {
                            window.removeEventListener("mousemove", this._mouseMove)
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (e) {
                            this.state.canUpdate = !0,
                                this.mouse = {
                                    x: (2 * e.clientX - window.innerWidth) / window.innerWidth,
                                    y: -1 * (2 * e.clientY - window.innerHeight) / window.innerHeight
                                }
                        }
                    }, {
                        key: "in",
                        value: function () {
                            var t = this;
                            return new i(function (n) {
                                t.state.isZoom = !0,
                                    t.state.isTransiton = !0,
                                    document.body.classList.add("is-image-zoom"),
                                    t.addEvent(),
                                    t.target.style.position = "relative",
                                    t.target.style.zIndex = "10",
                                    e.to(t.target, t.duration.in, {
                                        delay: .05,
                                        ease: t.easing.in,
                                        scale: t.zoomRatio,
                                        force3D: !0,
                                        onComplete: function () {
                                            t.state.canUpdate = !0,
                                                t.state.isTransiton = !1,
                                                n()
                                        }
                                    }),
                                    e.to(t.target.querySelector(".inner"), t.duration.in, {
                                        delay: .05,
                                        ease: t.easing.in,
                                        scale: 1 / t.scale.x,
                                        force3D: !0,
                                        onComplete: function () {
                                            e.set(t.target.querySelector(".inner"), {
                                                scaleX: 1,
                                                scaleY: 1
                                            }),
                                                e.set(t.target.querySelector(".img"), {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                })
                                        }
                                    }),
                                    e.to(t.target.querySelector(".img"), t.duration.in, {
                                        ease: t.easing.in,
                                        scale: t.scale.x,
                                        force3D: !0
                                    })
                            }
                            )
                        }
                    }, {
                        key: "out",
                        value: function () {
                            var t = this;
                            return new i(function (n) {
                                t.state.isTransiton = !0,
                                    t.state.canUpdate = !1,
                                    t.removeEvent(),
                                    document.body.classList.remove("is-image-zoom"),
                                    e.to(t.target, t.duration.out, {
                                        force3D: !0,
                                        ease: t.easing.out,
                                        scale: 1,
                                        x: 0,
                                        y: 0
                                    }),
                                    e.to(t.target.querySelector(".inner"), t.duration.out, {
                                        force3D: !0,
                                        ease: t.easing.out,
                                        scale: t.scale.x
                                    }),
                                    e.to(t.target.querySelector(".img"), t.duration.out, {
                                        delay: .075,
                                        force3D: !0,
                                        ease: t.easing.out,
                                        scale: 1 / t.scale.x,
                                        onComplete: function () {
                                            t.target.querySelector(".inner").style.transform = "",
                                                t.target.querySelector(".img").style.transform = "",
                                                e.set(t.target.querySelector(".inner"), {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                }),
                                                e.set(t.target.querySelector(".img"), {
                                                    scaleX: 1,
                                                    scaleY: 1
                                                }),
                                                t.reset(),
                                                t.state.isZoom = !1,
                                                t.state.isTransiton = !1,
                                                n()
                                        }
                                    })
                            }
                            )
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this.target.style.top = "",
                                this.target.style.left = "",
                                this.target.style.position = "",
                                this.target.style.zIndex = "",
                                this.target = "",
                                this.targetSize = {
                                    width: 0,
                                    height: 0
                                },
                                this.targetZoomedSize = {
                                    width: 0,
                                    height: 0
                                },
                                this.windowSize = {
                                    width: 0,
                                    height: 0
                                },
                                this.diffSize = {
                                    width: 0,
                                    height: 0
                                },
                                this.mouse = {
                                    x: 0,
                                    y: 0
                                },
                                this.mousePos = {
                                    x: 0,
                                    y: 0
                                },
                                this.distance = {
                                    x: 0,
                                    y: 0
                                },
                                this.zoomRatio = 1
                        }
                    }, {
                        key: "run",
                        value: function (e) {
                            this.target = e,
                                this.set(),
                                this.in()
                        }
                    }, {
                        key: "onResize",
                        value: function () {
                            this.set()
                        }
                    }, {
                        key: "onUpdate",
                        value: function () {
                            this.state.canUpdate && (this.mousePos.x += (this.mouse.x - this.mousePos.x) * this.mouseRatio,
                                this.mousePos.y += (this.mouse.y - this.mousePos.y) * this.mouseRatio,
                                Math.abs(this.mousePos.x - this.mouse.x) < .001 && Math.abs(this.mousePos.y - this.mouse.y) < .001 && (this.mousePos.x = this.mouse.x,
                                    this.mousePos.y = this.mouse.y,
                                    this.state.canUpdate = !1),
                                this.distance.x = this.diffSize.width * this.mousePos.x * .5,
                                this.distance.y = this.diffSize.height * this.mousePos.y * .5,
                                this.addStyle())
                        }
                    }]),
                        t
                }();
            t.a = r
        }
        ).call(this, n(5), n(4))
    }
    , function (e, t, n) {
        "use strict";
        (function (e) {
            var n = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
                , i = function () {
                    function t() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            this._promises = {},
                            this._keys = []
                    }
                    return n(t, [{
                        key: "add",
                        value: function (t, n) {
                            if (this.checkKey(t))
                                throw "already has key";
                            this._promises[t] = function () {
                                return new e(function (e) {
                                    e()
                                }
                                )
                            }
                                ,
                                this._keys.push(t)
                        }
                    }, {
                        key: "remove",
                        value: function (e) {
                            this.checkKey(e) && (delete this._promises[e],
                                this._keys.shift(e))
                        }
                    }, {
                        key: "resolve",
                        value: function (e, t) {
                            return this.checkKey(e) ? this._promises[e]() : null
                        }
                    }, {
                        key: "checkKey",
                        value: function (e) {
                            return e in this._promises
                        }
                    }]),
                        t
                }();
            t.a = i
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        var i = n(15).a
            , a = n(12)
            , o = Object(a.a)(i, function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "b-fonts__medium"
                }, [n("div", {
                    staticClass: "l-canvas js-target--height__screenFix--mobile",
                    attrs: {
                        id: "canvasContainer"
                    }
                }, [e.isInitCompleted ? n("div", {
                    staticClass: "p-canvas__bg",
                    staticStyle: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        "background-color": "#000",
                        "z-index": "-1"
                    }
                }) : e._e(), e._v(" "), n("div", {
                    staticClass: "js-canvas__info p-canvas__info",
                    style: "opacity: " + e.canvasInfoOpacity + ";"
                }, [n("div", {
                    staticClass: "p-control l-wide-container"
                }, [n("div", {
                    staticClass: "p-control__btn prev  js-target--pointer__stateChange",
                    style: "width:" + e.controllerWidth + "px",
                    on: {
                        click: function (t) {
                            e.onClickController(-1)
                        }
                    }
                }, [n("div", {
                    staticClass: "p-control__line js-line",
                    style: "width:" + e.lineWidth + "px"
                }), e._v(" "), n("div", {
                    staticClass: "js-control__text p-control__arrow prev"
                }, [n("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 17.6 17.7"
                    },
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 17.6 17.7",
                        "xml:space": "preserve"
                    }
                }, [n("polyline", {
                    staticClass: "p-control__arrow__st",
                    attrs: {
                        points: "9.2,17.4 0.7,8.9 9.2,0.4 "
                    }
                }), e._v(" "), n("line", {
                    staticClass: "p-control__arrow__st",
                    attrs: {
                        x1: "0.7",
                        y1: "8.9",
                        x2: "17.6",
                        y2: "8.9"
                    }
                })])]), e._v(" "), e._m(0)]), e._v(" "), n("div", {
                    staticClass: "p-control__btn next js-target--pointer__stateChange",
                    style: "width:" + e.controllerWidth + "px",
                    on: {
                        click: function (t) {
                            e.onClickController(1)
                        }
                    }
                }, [n("div", {
                    staticClass: "p-control__line js-line",
                    style: "width:" + e.lineWidth + "px"
                }), e._v(" "), n("div", {
                    staticClass: "js-control__text p-control__arrow next"
                }, [n("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 17.6 17.7"
                    },
                    attrs: {
                        version: "1.1",
                        id: "",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 17.6 17.7",
                        "xml:space": "preserve"
                    }
                }, [n("polyline", {
                    staticClass: "p-control__arrow__st",
                    attrs: {
                        points: "8.3,0.4 16.8,8.9 8.3,17.4 "
                    }
                }), e._v(" "), n("line", {
                    staticClass: "p-control__arrow__st",
                    attrs: {
                        x1: "16.8",
                        y1: "8.9",
                        x2: "0",
                        y2: "8.9"
                    }
                })])]), e._v(" "), e._m(1)])]), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isShowTitleTransition && e.isShowRoll,
                        expression: "(!isShowTitleTransition && isShowRoll)"
                    }],
                    staticClass: "p-roll js-roll"
                }, [n("div", {
                    staticClass: "js-opening-roll"
                }, [n("ul", {
                    staticClass: "p-roll__list js-target--pointer__stateChange",
                    style: "transform: translate3d(0," + e.rollY + "px,0); padding-top: " + Math.round(.5 * e.rollElementHeight) + "px;"
                }, [n("li", {
                    staticClass: "p-roll__list__item is-current",
                    style: "opacity:" + e.rollOpacityRatio + "; height: " + e.rollElementHeight + "px;"
                }, [n("a", {
                    style: "font-size: " + e.titleFontSize + "rem;",
                    attrs: {
                        href: e.slideUrl[e.slideNumState.current],
                        // href: e.slideTitle,
                        dataId: e.slideTitle
                    },
                    on: {
                        click: function (t) {
                            e.setTransitionToWorksDetail(e.slideUrl[e.slideNumState.current], t)
                        }
                    }
                }, [n("div", {
                    on: {
                        mouseenter: e.onMouseEnterSlideTitle,
                        mouseleave: e.onMouseLeaveSlideTitle
                    }
                }, [n("span", {
                    style: "transform:scale(" + e.titleScaleSize + "); translate3d(0,0,0);",
                    domProps: {
                        innerHTML: e._s(e.slideTitle[e.slideNumState.current])
                    }
                })])])]), e._v(" "), n("li", {
                    staticClass: "p-roll__list__item",
                    style: "opacity:" + e.rollOpacityNextRatio + "; height:" + e.rollElementHeight + "px;"
                }, [n("a", {
                    style: "font-size: " + e.titleFontSize + "rem;",
                    attrs: {
                        href: e.slideUrl[e.slideNumState.next]
                    },
                    on: {
                        click: function (t) {
                            e.setTransitionToWorksDetail(e.slideUrl[e.slideNumState.next], t)
                        }
                    }
                }, [n("div", {
                    on: {
                        mouseenter: e.onMouseEnterSlideTitle,
                        mouseleave: e.onMouseLeaveSlideTitle
                    }
                }, [n("span", {
                    style: "transform:scale(" + e.titleScaleSize + "); translate3d(0,0,0);",
                    domProps: {
                        innerHTML: e._s(e.slideTitle[e.slideNumState.next])
                    }
                })])])])])])]), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isInitCompleted,
                        expression: "isInitCompleted"
                    }],
                    staticClass: "p-pie"
                }, [n("svg", {
                    staticClass: "p-pie__circle front",
                    style: "width:" + e.windowInnerWidth + "px; height:" + e.windowInnerHeight + "px",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("circle", {
                    staticClass: "js-front-circle",
                    style: "stroke-dasharray: " + e.dashArray + " , " + e.toggleWrapperSizePI + "; stroke-dashoffset: " + e.dashOffset + "; fill: none:",
                    attrs: {
                        "shape-rendering": "geometricPrecision",
                        cx: "" + .5 * e.windowInnerWidth,
                        cy: "" + .5 * e.windowInnerHeight,
                        r: "" + .5 * e.toggleWrapperSize,
                        stroke: "" + e.dashArrayColor,
                        fill: "rgba(0,0,0,0)",
                        "stroke-width": e.strokeWidth + "px"
                    }
                })])]), e._v(" "), e.isInitCompleted ? n("div", {
                    staticClass: "p-drag",
                    style: "width: " + 1.4285 * e.toggleWrapperSize + "px; height:  " + 1.4285 * e.toggleWrapperSize + "px",
                    on: {
                        mousemove: e.onMouseMove,
                        mouseup: e.onMouseUp,
                        mouseleave: e.onMouseUp
                    }
                }, [n("div", {
                    staticClass: "p-toggle-wrapper",
                    style: "width: " + e.toggleWrapperSize + "px; height: " + e.toggleWrapperSize + "px; marginTop: " + Math.round(-.5 * e.toggleWrapperSize) + "px;"
                }, [n("div", {
                    staticClass: "js-toggle p-toggle js-spring-container js-target--pointer__stateChange",
                    style: "width:" + e.toggleSize + "px; height:" + e.toggleSize + "px; marginTop:" + Math.round(-.5 * e.toggleSize) + "px;  marginLeft:" + Math.round(-.5 * e.toggleSize) + "px;",
                    on: {
                        mousedown: e.onMouseDown
                    }
                }, [n("div", {
                    staticClass: "js-target__inner--pointer__stateChange",
                    staticStyle: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }
                }, [n("div", {
                    staticClass: "p-toggle__inner js-spring",
                    style: e.width = "width:" + e.toggleInnerSize + "px; height:" + e.toggleInnerSize + "px; marginTop: " + Math.round(-.5 * e.toggleInnerSize) + "px; marginLeft:" + Math.round(-.5 * e.toggleInnerSize) + "px;"
                }), e._v(" "), n("div", {
                    staticClass: "p-toggle__point",
                    style: "width:" + e.togglePointSize + "px; height:" + e.togglePointSize + "px; margin-top: " + Math.round(-.5 * e.togglePointSize) + "px;"
                })])])])]) : e._e(), e._v(" "), n("div", {
                    staticClass: "l-indicator js-indicator--stage l-wide-container js-timer-wrap"
                }, [n("div", {
                    staticClass: "p-timer b-fonts__medium"
                }, [n("div", {
                    staticClass: "p-timer__child",
                    style: "transform: translate3d(0," + e.rollNumberY + "px,0); padding-top: " + e.rollNumberElementHeight + "px;"
                }, [n("div", {
                    style: "opacity:" + e.rollOpacityRatio + "; height: " + e.rollNumberElementHeight + "px;",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.slideNumState.current + 1))
                    }
                }), e._v(" "), n("div", {
                    style: "opacity:" + e.rollOpacityNextRatio + "; height: " + e.rollNumberElementHeight + "px;",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.slideNumState.next + 1))
                    }
                })]), e._v(" "), e._m(2), e._v(" "), n("div", {
                    staticClass: "p-indicator__parent js-indicator__parent",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.slideLength, 2, !0))
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "p-canvas",
                    attrs: {
                        id: "canvasWrapper"
                    }
                })]), e._v(" "), e.isShowTitleTransition ? n("div", {
                    staticClass: "p-transition__title"
                }, [n("div", {
                    style: "padding-top: " + Math.round(.5 * e.rollElementHeight) + "px; height:" + Math.round(2.5 * e.rollElementHeight) + "px"
                }, [n("div", {
                    staticClass: "js-transition__container p-transition__title__inner",
                    style: "height:" + e.rollElementHeight + "px; font-size: " + e.titleFontSize + "rem; padding-top: 0.5em; padding-left: 0.4em;"
                }, [n("p", {
                    staticClass: "js-transition__title inner"
                }, [n("span", {
                    style: "transform:scale(" + e.titleScaleSize + ") translate3d(0,0,0)",
                    domProps: {
                        innerHTML: e._s(e.transitionTitle)
                    }
                })])])])]) : e._e(), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowPieBack,
                        expression: "isShowPieBack"
                    }],
                    staticClass: "p-pie--works js-target--height__screenFix--mobile"
                }, [n("svg", {
                    staticClass: "p-pie__circle back",
                    style: "width:" + e.windowInnerWidth + "px; height:" + e.windowInnerHeight + "px",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("circle", {
                    staticClass: "js-circle",
                    style: "stroke-dasharray: " + e.dashArrayBack + " , " + e.toggleWrapperSizePI + ";",
                    attrs: {
                        cx: "" + .5 * e.windowInnerWidth,
                        cy: "" + .5 * e.windowInnerHeight,
                        r: "" + .5 * e.toggleWrapperSize,
                        stroke: "" + e.dashArrayColor,
                        fill: "rgba(0,0,0,0)",
                        "stroke-width": e.strokeWidth + "px"
                    }
                })])])])
            }, [function () {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "js-control__text p-control__text "
                }, [t("div", {
                    staticClass: "js-target__inner--pointer__stateChange js-target__parent--spring"
                }, [this._v("قبلی")])])
            }
                , function () {
                    var e = this.$createElement
                        , t = this._self._c || e;
                    return t("div", {
                        staticClass: "js-control__text p-control__text"
                    }, [t("div", {
                        staticClass: "js-target__inner--pointer__stateChange js-target__parent--spring"
                    }, [this._v("بعدی")])])
                }
                , function () {
                    var e = this.$createElement
                        , t = this._self._c || e;
                    return t("div", {
                        staticClass: "p-timer__line"
                    }, [t("div", {
                        staticClass: "p-timer__inner js-timer"
                    })])
                }
            ], !1, null, null, null);
        t.a = o.exports
    }
    , function (e, t, n) {
        "use strict";
        var i = n(17).a
            , a = n(12)
            , o = Object(a.a)(i, function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "l-pointer"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.canShow,
                        expression: "canShow"
                    }],
                    staticClass: "js-chasePointer p-chasePointer",
                    style: "width: " + e.pointerSize.width + "px; height: " + e.pointerSize.height + "px; transform: translate3d(" + e.pointerPosition.x + "px," + e.pointerPosition.y + "px,1px)"
                }, [n("div", {
                    staticClass: "js-chasePointer__inner p-chasePointer__inner",
                    style: "transform: scale(" + e.pointerStyle.pointerInnerScale + ") translate3d(0,0,1px);  opacity: " + e.pointerStyle.opacity + ";"
                }, [n("div", {
                    staticClass: "p-chasePointer__bg",
                    style: "transform: rotate(" + e.deg + "deg) scale( " + (1 + e.scale) + ", " + (1 - e.scale) + " )"
                })])]), e._v(" "), e.canShowBar ? n("div", {
                    staticClass: "p-chasePointer",
                    style: "width: " + e.pointerSize.width + "px; height: " + e.pointerSize.height + "px; transform: translate3d(" + e.pointerPositionBar.x + "px," + e.pointerPositionBar.y + "px,1px) scale(0.5)"
                }, [n("div", {
                    staticStyle: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    },
                    style: "transform: scale( " + (1 + e.scale) + ", " + (1 - e.scale) + " )"
                }, [e._m(0)])]) : e._e()])
            }, [function () {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "js-chasePointer__bar p-chasePointer__bar"
                }, [t("div", {
                    staticClass: "p-chasePointer__bar__inner"
                }), this._v(" "), t("div", {
                    staticClass: "p-chasePointer__bar__inner"
                })])
            }
            ], !1, null, null, null);
        t.a = o.exports
    }
    , function (e, t, n) {
        "use strict";
        var i = n(16).a
            , a = n(12)
            , o = Object(a.a)(i, function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShow,
                        expression: "isShow"
                    }],
                    staticClass: "l-indicator l-wide-container"
                }, [n("div", {
                    staticClass: "p-indicator b-fonts__medium js-transition__indicator"
                }, [n("div", {
                    staticClass: "p-indicator__child js-indicator__child",
                    attrs: {
                        id: "indicatorTarget"
                    }
                }, [n("div", {
                    staticClass: "p-indicator__child__inner",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.prevNum, 2, !0))
                    }
                }), e._v(" "), n("div", {
                    staticClass: "p-indicator__child__inner",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.currentNum, 2, !0))
                    }
                }), e._v(" "), n("div", {
                    staticClass: "p-indicator__child__inner",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.nextNum, 2, !0))
                    }
                })]), e._v(" "), e._m(0), e._v(" "), n("div", {
                    staticClass: "p-indicator__parent js-indicator__parent",
                    domProps: {
                        innerHTML: e._s(e.zeroPadding(e.listLength, 2, !0))
                    }
                })])])
            }, [function () {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "p-indicator__line js-indicator__line"
                }, [t("div", {
                    staticClass: "p-indicator__line__inner"
                })])
            }
            ], !1, null, null, null);
        t.a = o.exports
    }
    , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        (function (e) {
            isSet = function (e) {
                return void 0 !== e && null !== e
            }
                ,
                existElement = function (e) {
                    return 0 !== e.length
                }
                ,
                wait = function (t) {
                    return new e(function (e) {
                        setTimeout(function () {
                            e()
                        }, t)
                    }
                    )
                }
        }
        ).call(this, n(4))
    }
    , function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(35)
            , a = n(9)
            , o = n(19)
            , r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , s = function (e) {
                function t(e, n, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.router = n,
                        a.useAjax = i,
                        a
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o.a),
                    r(t, [{
                        key: "getController",
                        value: function () {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = {
                                id: null,
                                path: location.pathname,
                                notice_flag: !1,
                                secret_mode: !1,
                                useAjax: this.useAjax,
                                sort: 0,
                                parentId: null
                            }, i = location.pathname.split("/"), a = i.length - 1; a >= 0; a--)
                                if (i[a] in this.router) {
                                    n.id = this.router[i[a]].id,
                                        n.textureId = this.router[i[a]].texture_id,
                                        n.parentId = this.router[i[a]].parent_id,
                                        n.sort = this.router[i[a]].sort,
                                        n.locationName = this.router[i[a]].name,
                                        n.notice_flag = 0 !== Number(this.router[i[a]].notice_flag),
                                        n.secret_mode = 0 !== Number(this.router[i[a]].secret_mode);
                                    break
                                }
                            var o;
                            return o = null !== e && null !== this._VC[e] && void 0 !== this._VC[e] ? new this._VC[e](t, n) : null !== t && isSet(this._VC[t.getAttribute("data-use-controller")]) ? new (this._VC[t.getAttribute("data-use-controller")])(t, n) : null !== t && isSet(this._VC[t.getAttribute("id")]) ? new (this._VC[t.getAttribute("id")])(t, n) : new this._VC.default(t, n),
                                Object.defineProperty(o, "info", {
                                    value: n
                                }),
                                o
                        }
                    }]),
                    t
            }()
            , l = function (e) {
                function t(e, n, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
                    return a.controllerManager = new s(n, e, i),
                        a
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, a.a),
                    t
            }()
            , u = n(37)
            , c = n(0)
            , h = n(1)
            , d = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , g = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return d(e, [{
                    key: "run",
                    value: function (e, t, n, i, a, o) {
                        return function () {
                            location.reload();
                            var i = document.body
                                , r = document.querySelector("#" + e)
                                , s = n.querySelector("#" + t)
                                , l = r.getAttribute("id")
                                , u = s.getAttribute("id")
                                , h = document.querySelector("#contents")
                                , d = "top" !== e && "top" === t || "top" === e && "top" === t ? "index" : "sub"
                                , g = new c.a;
                            g.add(function (e) {
                                c.a.wait(10).then(e)
                            }),
                                g.add(function (e) {
                                    i.classList.remove("page-" + l),
                                        i.classList.add("page-" + u),
                                        h.appendChild(s),
                                        r.parentNode.removeChild(r),
                                        i.classList.remove("index"),
                                        i.classList.remove("sub"),
                                        i.classList.add(d),
                                        c.a.wait(10).then(e)
                                }),
                                g.add(function (e) {
                                    r && (a.add(t, s),
                                        a.use("prev").viewDidDisappear(),
                                        a.pop()),
                                        c.a.wait(10).then(e)
                                }),
                                g.add(function (e) {
                                    a.use("current").viewWillAppear(),
                                        c.a.wait(10).then(e)
                                }),
                                g.done(function () {
                                    o(null)
                                })
                        }
                    }
                }]),
                    e
            }()
            , f = n(39)
            , p = n(40)
            , v = n(41)
            , m = n(42)
            , y = n(43)
            , w = n(44)
            , T = n(45)
            , C = n(46)
            , R = n(48)
            , M = n(49)
            , S = n(50)
            , P = n(51)
            , O = {
                "top --\x3e about": (new f.a).run,
                "top --\x3e works": (new p.a).run,
                "top --\x3e works-detail": (new R.a).run,
                "works-detail --\x3e top": (new M.a).run,
                "works-detail --\x3e about": (new S.a).run,
                "works-detail --\x3e works": (new P.a).run,
                "about --\x3e top": (new v.a).run,
                "about --\x3e works": (new y.a).run,
                "about --\x3e works-detail": (new m.a).run,
                "works --\x3e top": (new w.a).run,
                "works --\x3e about": (new T.a).run,
                "works --\x3e works-detail": (new C.a).run,
                "none --\x3e none": (new u.a).run,
                "* --\x3e *": (new g).run
            }
            , E = n(8)
            , k = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , b = function e(t, n, i) {
                null === t && (t = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === a) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, i)
                }
                if ("value" in a)
                    return a.value;
                var r = a.get;
                return void 0 !== r ? r.call(i) : void 0
            }
            , _ = function (e) {
                function t(e) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, E.a),
                    k(t, [{
                        key: "viewWillAppear",
                        value: function () {
                            b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this),
                                PROJECT.worksMode = "top",
                                this.startUpFunction = PROJECT.topPageStartUp
                        }
                    }, {
                        key: "viewDidAppear",
                        value: function () {
                            b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this),
                                PROJECT.stage.initProgress(),
                                PROJECT.screenFix.fix()
                        }
                    }, {
                        key: "viewWillDisappear",
                        value: function () {
                            b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this),
                                PROJECT.screenFix.clearFix()
                        }
                    }, {
                        key: "viewDidDisappear",
                        value: function () {
                            b(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
                        }
                    }]),
                    t
            }()
            , x = n(3)
            , J = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , L = function e(t, n, i) {
                null === t && (t = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === a) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, i)
                }
                if ("value" in a)
                    return a.value;
                var r = a.get;
                return void 0 !== r ? r.call(i) : void 0
            }
            , I = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.ease = new x.a,
                        n.$pageTransitionTrigger = e.querySelectorAll(".js-trigger--pageTransition"),
                        n.pageTransitionTriggerLength = n.$pageTransitionTrigger.length,
                        n._clickEvent = "click",
                        n.$worksList = document.querySelectorAll(".js-hover__works-list"),
                        n.isMouseEnter = !1,
                        n.isMouseLeave = !1,
                        n.mouseEnterCurrentNum = 0,
                        n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, E.a),
                    J(t, [{
                        key: "viewWillAppear",
                        value: function () {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this),
                                window.pageInitialized || (PROJECT.stage.isShowPieBack = !0),
                                PROJECT.worksMode = "list",
                                PROJECT.smoothScrollManager.run(),
                                this._setPageTransitionEvent()
                        }
                    }, {
                        key: "viewDidAppear",
                        value: function () {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this),
                                document.body.classList.add("is-stage-hide")
                        }
                    }, {
                        key: "viewWillDisappear",
                        value: function () {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this),
                                document.body.classList.remove("is-stage-hide")
                        }
                    }, {
                        key: "viewDidDisappear",
                        value: function () {
                            L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
                        }
                    }, {
                        key: "_setPageTransitionEvent",
                        value: function () {
                            var e = this;
                            if (this.pageTransitionTriggerLength)
                                for (var n = function (n) {
                                    e.$pageTransitionTrigger[n].addEventListener(e._clickEvent, function (e) {
                                        t.pageTransition(e, n)
                                    }, !1)
                                }, i = 0; i < this.pageTransitionTriggerLength; i++)
                                    n(i)
                        }
                    }, {
                        key: "_setTexture",
                        value: function () { }
                    }], [{
                        key: "pageTransition",
                        value: function (e, t) {
                            e.preventDefault(),
                                e.currentTarget.classList.add("is-clicked"),
                                document.body.classList.add("is-transition");
                            var n = e.currentTarget.getAttribute("href") || "/";
                            a.a.triggerPageTransition(n)
                        }
                    }]),
                    t
            }()
            , D = n(77)
            , z = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , A = function e(t, n, i) {
                null === t && (t = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === a) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, i)
                }
                if ("value" in a)
                    return a.value;
                var r = a.get;
                return void 0 !== r ? r.call(i) : void 0
            }
            , N = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.$sideContactInner = document.querySelector(".p-sideContact__inner"),
                        n.$aboutClose = document.querySelector(".js-target__aboutClose"),
                        n.$indicatorTarget = e.querySelectorAll(".js-target--indicator"),
                        n.$targetSideFixPosition = e.querySelector(".js-target--sideFixPosition"),
                        n.$targetSideFix = document.querySelector(".js-target--sideFix"),
                        n.$aboutHoverTrigger = e.querySelector(".js-trigger--aboutHover"),
                        n._eventEnter = "",
                        n._eventLeave = "",
                        n.isAnimatingContactHover = !1,
                        n.isHoveringContactHover = !1,
                        n.offsetSideFixPosition = 0,
                        n.$transitionToWorksDetail = e.querySelectorAll(".js-target--transition__toWorksDetail"),
                        n.stringTrimmer.targets = n.content.querySelectorAll(".js-target--split"),
                        n.stringTrimmer.run(),
                        n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, E.a),
                    z(t, [{
                        key: "viewWillAppear",
                        value: function () {
                            var e = this;
                            A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this),
                                window.pageInitialized || (this.$sideContactInner.style.visibility = "visible",
                                    this.$sideContactInner.style.opacity = 1),
                                MOBILE || TABLET ? (this._setIndicator = function () { }
                                    ,
                                    this._setIndicatorTargetOffset = function () { }
                                    ,
                                    this._onUpdateSideFixPos = function () { }
                                ) : this._setIndicator(),
                                PROJECT.resizeHandler[20] = function (t) {
                                    e._onResize(t)
                                }
                                ,
                                PROJECT.renderHandler[20] = function (t) {
                                    e._onUpdate(t)
                                }
                                ,
                                PROJECT.smoothScrollManager.run(),
                                MOBILE || TABLET || this._setSideFixPosition(),
                                this._setHoverEvent(),
                                this._setClickEventTransitionToWorksDetail()
                        }
                    }, {
                        key: "viewDidAppear",
                        value: function () {
                            A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this),
                                document.body.classList.add("is-stage-hide"),
                                this._setSideFixPosition()
                        }
                    }, {
                        key: "viewWillDisappear",
                        value: function () {
                            A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this),
                                document.body.classList.remove("is-stage-hide")
                        }
                    }, {
                        key: "viewDidDisappear",
                        value: function () {
                            A(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this),
                                PROJECT.renderHandler[20] = function () { }
                                ,
                                PROJECT.resizeHandler[20] = function () { }
                                ,
                                this.$aboutClose.setAttribute("href", "/"),
                                this.$targetSideFix && (this.$targetSideFix.style.transform = "")
                        }
                    }, {
                        key: "_onResize",
                        value: function () {
                            this._setIndicator(),
                                this._setSideFixPosition()
                        }
                    }, {
                        key: "_onUpdate",
                        value: function () {
                            this._setIndicatorTargetOffset(),
                                this._onUpdateSideFixPos()
                        }
                    }, {
                        key: "_setClickEventTransitionToWorksDetail",
                        value: function () {
                            for (var e = 0; e < this.$transitionToWorksDetail.length; e++)
                                this.$transitionToWorksDetail[e].addEventListener("click", function (e) {
                                    e.preventDefault();
                                    var t = e.currentTarget.getAttribute("href") || "";
                                    if (!t)
                                        return !1;
                                    PROJECT.pageTransitionState.aboutToWorksDetail = 1,
                                        a.a.triggerPageTransition(t)
                                })
                        }
                    }, {
                        key: "_setIndicator",
                        value: function () {
                            PROJECT.indicator.listLength = this.$indicatorTarget.length,
                                this._setIndicatorTargetOffset(),
                                PROJECT.indicator.canUpdate = !0,
                                PROJECT.indicator.isShow = !0
                        }
                    }, {
                        key: "_setIndicatorTargetOffset",
                        value: function () {
                            for (var e = 0; e < PROJECT.indicator.listLength; e++)
                                PROJECT.indicator.indicatorOffset[e] = h.a.getTargetOffsetTop(this.$indicatorTarget[e]) - PROJECT.resizeManager.height
                        }
                    }, {
                        key: "_setSideFixPosition",
                        value: function () {
                            this.offsetSideFixPosition = h.a.getTargetOffsetTop(this.$targetSideFixPosition) - PROJECT.resizeManager.height - (95 - Math.min(100, .0625 * document.body.clientWidth)),
                                this._onUpdateSideFixPos()
                        }
                    }, {
                        key: "_onUpdateSideFixPos",
                        value: function () {
                            PROJECT.smoothScrollManager.now >= this.offsetSideFixPosition ? this.$targetSideFix.style.transform = "translate3d(0," + -(PROJECT.smoothScrollManager.now - this.offsetSideFixPosition) + "px,0)" : this.$targetSideFix.style.transform = ""
                        }
                    }, {
                        key: "_setHoverEvent",
                        value: function () {
                            var e = this;
                            this._eventEnter = function (t) {
                                t.preventDefault(),
                                    e._hoverOverEvent(t.currentTarget)
                            }
                                ,
                                this._eventLeave = function (t) {
                                    t.preventDefault(),
                                        e._hoverOutEvent(t.currentTarget)
                                }
                                ,
                                this.$aboutHoverTrigger.addEventListener("mouseenter", this._eventEnter, !1),
                                this.$aboutHoverTrigger.addEventListener("mouseleave", this._eventLeave, !1)
                        }
                    }, {
                        key: "_hoverOverEvent",
                        value: function (e) {
                            this.isHoveringContactHover = !0,
                                this.isAnimatingContactHover || this._startHoverOver(e)
                        }
                    }, {
                        key: "_hoverOutEvent",
                        value: function (e) {
                            this.isHoveringContactHover = !1,
                                this.isAnimatingContactHover || this._startHoverOut(e)
                        }
                    }, {
                        key: "_startHoverOver",
                        value: function (e) {
                            var t = this
                                , n = Number(e.dataset.hoverInTime);
                            this.isAnimatingContactHover = !0,
                                e.classList.add("is-hover"),
                                document.body.classList.add("is-contact-hover"),
                                setTimeout(function () {
                                    t._completeHoverOver(e)
                                }, n)
                        }
                    }, {
                        key: "_startHoverOut",
                        value: function (e) {
                            var t = this
                                , n = Number(e.dataset.hoverOutTime);
                            this.isAnimatingContactHover = !0,
                                e.classList.add("is-hover-out"),
                                document.body.classList.add("is-contact-hover-out"),
                                e.classList.remove("is-hover"),
                                document.body.classList.remove("is-contact-hover"),
                                setTimeout(function () {
                                    t._completeHoverOut(e)
                                }, n)
                        }
                    }, {
                        key: "_completeHoverOver",
                        value: function (e) {
                            this.isAnimatingContactHover = !1,
                                this.isHoveringContactHover || this._startHoverOut(e)
                        }
                    }, {
                        key: "_completeHoverOut",
                        value: function (e) {
                            var t = this;
                            this.isAnimatingContactHover = !1,
                                e.classList.remove("is-hover-out"),
                                document.body.classList.remove("is-contact-hover-out"),
                                setTimeout(function () {
                                    t.isHoveringContactHover && t._startHoverOver(e)
                                }, 50)
                        }
                    }]),
                    t
            }()
            , j = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , U = function e(t, n, i) {
                null === t && (t = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === a) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, i)
                }
                if ("value" in a)
                    return a.value;
                var r = a.get;
                return void 0 !== r ? r.call(i) : void 0
            }
            , W = function (e) {
                function t(e) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, E.a),
                    j(t, [{
                        key: "viewWillAppear",
                        value: function () {
                            U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillAppear", this).call(this),
                                this.startUpFunction = PROJECT.notFoundPageStartUp
                        }
                    }, {
                        key: "viewDidAppear",
                        value: function () {
                            U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidAppear", this).call(this),
                                PROJECT.resizeHandler.push(function () {
                                    document.querySelector(".p-notFound__title").querySelector("em").style.fontSize = .15 * window.innerHeight + "px",
                                        document.querySelector(".p-notFound__title").querySelector("span").style.fontSize = .016 * window.innerHeight + "px"
                                })
                        }
                    }, {
                        key: "viewWillDisappear",
                        value: function () {
                            U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewWillDisappear", this).call(this)
                        }
                    }, {
                        key: "viewDidDisappear",
                        value: function () {
                            U(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "viewDidDisappear", this).call(this)
                        }
                    }]),
                    t
            }()
            , q = {
                default: E.a,
                top: _,
                works: I,
                "works-detail": D.a,
                about: N,
                "not-found": W
            }
            , H = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , F = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._wheelEvent = "onwheel" in document ? "wheel" : "mousewheel",
                        this._keyDownEvent = "keydown",
                        this._keyUpEvent = "keyup",
                        this._toocuMoveEvent = "ontouchmove" in document ? "touchmove" : "click",
                        this._preventKey = function (e) {
                            var t = null;
                            e.keyCode ? t = event.keyCode : e.which && (t = event.which),
                                38 !== t && 40 !== t || e.preventDefault()
                        }
                        ,
                        this._preventWheel = function (e) {
                            e.cancelable && e.preventDefault()
                        }
                }
                return H(e, [{
                    key: "fix",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                        e.wrapperFix(t),
                            this.addNoKeyDown(),
                            this.addNoKeyUp(),
                            this.addNoWheel()
                    }
                }, {
                    key: "clearFix",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                        e.wrapperClearFix(t),
                            this.removeNoKeyDown(),
                            this.removeNoKeyUp(),
                            this.removeNoWheel()
                    }
                }, {
                    key: "addNoKeyDown",
                    value: function () {
                        window.addEventListener(this._keyDownEvent, this._preventKey, !1)
                    }
                }, {
                    key: "removeNoKeyDown",
                    value: function () {
                        window.removeEventListener(this._keyDownEvent, this._preventKey)
                    }
                }, {
                    key: "addNoKeyUp",
                    value: function () {
                        window.addEventListener(this._keyUpEvent, this._preventKey, !1)
                    }
                }, {
                    key: "removeNoKeyUp",
                    value: function () {
                        window.removeEventListener(this._keyUpEvent, this._preventKey)
                    }
                }, {
                    key: "addNoWheel",
                    value: function () {
                        window.addEventListener(this._wheelEvent, this._preventWheel, {
                            passive: !1
                        }),
                            IE || window.addEventListener(this._toocuMoveEvent, this._preventWheel, {
                                passive: !1
                            })
                    }
                }, {
                    key: "removeNoWheel",
                    value: function () {
                        window.removeEventListener(this._wheelEvent, this._preventWheel),
                            IE || window.removeEventListener(this._toocuMoveEvent, this._preventWheel, {
                                passive: !1
                            })
                    }
                }], [{
                    key: "wrapperClearFix",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                        e && (e.style.position = null,
                            e.style.top = null,
                            e.style.right = null,
                            e.style.width = null,
                            e.style.height = null,
                            e.style.marginTop = null,
                            e.style.overflow = null)
                    }
                }, {
                    key: "wrapperFix",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.querySelector("#wrapper");
                        e && (e.style.position = "fixed",
                            e.style.top = "1px",
                            e.style.right = 0,
                            e.style.width = "100%",
                            e.style.height = "100vh",
                            e.style.marginTop = "-1px",
                            e.style.overflow = "hidden")
                    }
                }]),
                    e
            }();
        if (n(106),
            // "serviceWorker" in navigator && window.addEventListener("load", function () {
            //     navigator.serviceWorker.register("/js/service-worker.js").then(function (e) { }).catch(function (e) { })
            // }),
            Object(i.a)(window),
            window.PROJECT = window.PROJECT || {},
            PROJECT.breakPoint = 768,
            PROJECT.isLegacyBrowser = !1,
            PROJECT.isMobileSize = PROJECT.breakPoint > document.body.clientWidth,
            PROJECT.onStartUp = PROJECT.onStartUp || new c.a,
            PROJECT.worksMode = null,
            PROJECT.currentUrl = "",
            PROJECT.currentWorksNum = 0,
            PROJECT.addTransition = function () {
                arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? (document.querySelector("html").classList.remove("is-transition"),
                    setTimeout(function () {
                        document.querySelector("html").classList.contains("is-transition") || document.querySelector("html").classList.remove("is-waitLoad")
                    }, 620)) : (document.querySelector("html").classList.add("is-transition"),
                        document.querySelector("html").classList.add("is-waitLoad"))
            }
            ,
            PROJECT.pageTransitionState = {
                topToWorksDetail: 0,
                aboutToWorksDetail: 0,
                worksDetailToTop: 0,
                worksDetailToWorks: 0,
                worksToWorksDetail: 0
            },
            PROJECT.screenFix = new F,
            window.APP = new l(O, q, !0),
            // APP.sendAnalytics = function (e) {
            // 	gtag("config", "UA-135279002-1", {
            // 		page_path: e
            // 	})
            // }
            //,
            PROJECT.addTransition(!0),
            PROJECT.screenFix.fix(),
            PROJECT.initScreenHeight = window.innerHeight,
            window.addEventListener("resize", function () {
                PROJECT.isMobileSize ? document.body.clientWidth >= 768 && location.reload() : document.body.clientWidth < 768 && location.reload()
            }, !1),
            MOBILE || TABLET) {
            var B = !1;
            document.addEventListener("touchend", function (e) {
                B ? e.preventDefault() : (B = !0,
                    setTimeout(function () {
                        B = !1
                    }, 500))
            }, !0);
            var $ = window.orientation;
            window.addEventListener("orientationchange", function () {
                90 === Math.abs($ - Math.abs(window.orientation)) && location.reload()
            }),
                MOBILE && 0 === $ && APP.boot(),
                TABLET && 90 === Math.abs($) && APP.boot()
        } else
            APP.boot()
    }
    , function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(79)
            , a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n),
                        i && e(t, i),
                        t
                }
            }()
            , o = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.tablet = !1,
                        this.mobile = !1,
                        this.android = !1,
                        this.iphone = !1,
                        this._init(),
                        this._addDevice()
                }
                return a(e, [{
                    key: "_init",
                    value: function () {
                        var e = window.navigator.userAgent.toLowerCase();
                        this.tablet = -1 !== e.indexOf("windows") && -1 !== e.indexOf("touch") && -1 === e.indexOf("tablet pc") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("android") && -1 === e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("tablet") || -1 !== e.indexOf("kindle") || -1 !== e.indexOf("silk") || -1 !== e.indexOf("playbook"),
                            this.mobile = -1 !== e.indexOf("windows") && -1 !== e.indexOf("phone") || -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod") || -1 !== e.indexOf("android") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("firefox") && -1 !== e.indexOf("mobile") || -1 !== e.indexOf("blackberry"),
                            this.android = -1 !== e.indexOf("android") && -1 !== e.indexOf("mobile"),
                            this.iphone = -1 !== e.indexOf("iphone") || -1 !== e.indexOf("ipod")
                    }
                }, {
                    key: "_addDevice",
                    value: function () {
                        var e = document.querySelector("html");
                        this.tablet ? e.setAttribute("class", "is-tablet") : this.mobile ? e.setAttribute("class", "is-mobile") : this.android ? e.setAttribute("class", "is-android") : this.iphone ? e.setAttribute("class", "is-iphone") : e.setAttribute("class", "is-others")
                    }
                }, {
                    key: "getBrowser",
                    value: function () {
                        var e = window.navigator.userAgent.toLowerCase()
                            , t = (window.navigator.appVersion.toLowerCase(),
                                "unknown")
                            , n = null
                            , i = null
                            , a = window.navigator.userAgent.toLowerCase();
                        return a.match(/(msie|MSIE)/) || a.match(/(T|t)rident/) || -1 !== a.indexOf("edge") ? (n = !0,
                            a.match(/(msie|MSIE)/) || a.match(/(T|t)rident/) ? (i = a.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3],
                                i = parseInt(i)) : i = "edge") : n = !1,
                            n ? t = "ie" + i : -1 !== e.indexOf("chrome") ? t = "chrome" : -1 !== e.indexOf("safari") ? t = "safari" : -1 !== e.indexOf("opera") ? t = "opera" : -1 !== e.indexOf("firefox") && (t = "firefox"),
                            t
                    }
                }, {
                    key: "isSupported",
                    value: function (e) {
                        for (var t = this.getBrowser(), n = 0; n < e.length; n++)
                            if (e[n] === t)
                                return !0;
                        return !1
                    }
                }, {
                    key: "androidVersion",
                    value: function () {
                        var e = window.navigator.userAgent.toLowerCase();
                        return e.indexOf("android") > 0 ? parseFloat(e.slice(e.indexOf("android") + 8)) : null
                    }
                }, {
                    key: "isMajor",
                    value: function () {
                        return !(-1 === window.navigator.userAgent.indexOf("DoCoMo") && -1 === window.navigator.userAgent.indexOf("KDDI") && -1 === window.navigator.userAgent.indexOf("Vodafone") && -1 === window.navigator.userAgent.indexOf("SoftBank"))
                    }
                }, {
                    key: "iphoneVersion",
                    value: function () {
                        var e = window.navigator.userAgent.toLowerCase()
                            , t = e.match(/iphone os ([\d]+)_([\d]+)_([\d]+)/);
                        return t || (t = e.match(/iphone os ([\d]+)_([\d]+)/)),
                            t
                    }
                }, {
                    key: "isAndroidBrowser",
                    value: function () {
                        var e = window.navigator.userAgent.toLowerCase();
                        return /android/.test(e) && /linux; u;/.test(e) && !/chrome/.test(e)
                    }
                }, {
                    key: "viewPort",
                    value: function (e, t) {
                        this[e] && document.querySelector('meta[name="viewport"]').setAttribute("content", "width=" + t + ",user-scalable=no")
                    }
                }]),
                    e
            }();
        setTimeout(console.log.bind(console, "%cCreated By https://baqemono.jp", "color: #fff;background-color: rgb(76, 76, 76);border:6px solid rgb(76, 76, 76);")),
            n(104),
            window.ua = new o,
            window.MOBILE = ua.mobile,
            window.TABLET = ua.tablet,
            window.OTHER = !MOBILE && !TABLET,
            window.uaName = ua.getBrowser(),
            window.IE = uaName.match(/ie/),
            document.querySelector("html").classList.add("is-" + uaName),
            IE && document.querySelector("html").classList.add("is-ie"),
            window.pageInitialized = !1,
            window.notification = new i.a,
            window.WHEEL_RATIO = "firefox" === ua.getBrowser() ? 100 : 1
    }
]);
