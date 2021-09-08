(this.csbJsonP = this.csbJsonP || []).push([
    ["vendors~app~embed~sandbox~sandbox-startup"], {
        "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js": function(t, e) {
            function r(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (s) {
                    return void r(s)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            t.exports = function(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var a = t.apply(e, n);

                        function u(t) {
                            r(a, o, i, u, c, "next", t)
                        }

                        function c(t) {
                            r(a, o, i, u, c, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
        },
        "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(t, e) {
            t.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
        },
        "../../node_modules/@babel/runtime/regenerator/index.js": function(t, e, r) {
            t.exports = r("../../node_modules/regenerator-runtime/runtime.js")
        },
        "../../node_modules/process/browser.js": function(t, e) {
            var r, n, o = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(t) {
                if (r === setTimeout) return setTimeout(t, 0);
                if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
                try {
                    return r(t, 0)
                } catch (e) {
                    try {
                        return r.call(null, t, 0)
                    } catch (e) {
                        return r.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" === typeof setTimeout ? setTimeout : i
                } catch (t) {
                    r = i
                }
                try {
                    n = "function" === typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    n = a
                }
            }();
            var c, s = [],
                h = !1,
                l = -1;

            function f() {
                h && c && (h = !1, c.length ? s = c.concat(s) : l = -1, s.length && p())
            }

            function p() {
                if (!h) {
                    var t = u(f);
                    h = !0;
                    for (var e = s.length; e;) {
                        for (c = s, s = []; ++l < e;) c && c[l].run();
                        l = -1, e = s.length
                    }
                    c = null, h = !1,
                        function(t) {
                            if (n === clearTimeout) return clearTimeout(t);
                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                            try {
                                n(t)
                            } catch (e) {
                                try {
                                    return n.call(null, t)
                                } catch (e) {
                                    return n.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function d(t, e) {
                this.fun = t, this.array = e
            }

            function v() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                s.push(new d(t, e)), 1 !== s.length || h || u(p)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        "../../node_modules/regenerator-runtime/runtime.js": function(t, e, r) {
            var n = function(t) {
                "use strict";
                var e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" === typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof h ? e : h,
                        i = Object.create(o.prototype),
                        a = new L(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return T()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = w(a, r);
                                    if (u) {
                                        if (u === s) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var h = c(t, e, r);
                                if ("normal" === h.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", h.arg === s) continue;
                                    return {
                                        value: h.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === h.type && (n = "completed", r.method = "throw", r.arg = h.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function c(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (n) {
                        return {
                            type: "throw",
                            arg: n
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function h() {}

                function l() {}

                function f() {}
                var p = {};
                p[o] = function() {
                    return this
                };
                var d = Object.getPrototypeOf,
                    v = d && d(d(E([])));
                v && v !== e && r.call(v, o) && (p = v);
                var y = f.prototype = h.prototype = Object.create(p);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t)
                        }
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, u) {
                                    var s = c(t[o], t, i);
                                    if ("throw" !== s.type) {
                                        var h = s.arg,
                                            l = h.value;
                                        return l && "object" === typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : e.resolve(l).then((function(t) {
                                            h.value = t, a(h)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(s.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = c(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function b(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function E(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" === typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: T
                    }
                }

                function T() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return l.prototype = y.constructor = f, f.constructor = l, f[a] = l.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                    var e = "function" === typeof t && t.constructor;
                    return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(g.prototype), g.prototype[i] = function() {
                    return this
                }, t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(y), y[a] = "Generator", y[o] = function() {
                    return this
                }, y.toString = function() {
                    return "[object Generator]"
                }, t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = E, L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(b), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), b(r), s
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    b(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = n
            } catch (o) {
                Function("r", "regeneratorRuntime = r")(n)
            }
        }
    }
]);
//# sourceMappingURL=vendors~app~embed~sandbox~sandbox-startup.bcc15d438.chunk.js.map