(this.csbJsonP = this.csbJsonP || []).push([
    ["vendors~app~embed~sandbox-startup"], {
        "../../node_modules/console-feed/lib/Hook/index.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = r("../../node_modules/console-feed/lib/definitions/Methods.js"),
                o = r("../../node_modules/console-feed/lib/Hook/parse/index.js"),
                a = r("../../node_modules/console-feed/lib/Transform/index.js");
            t.default = function(e, t, r) {
                void 0 === r && (r = !0);
                for (var i = e, s = {
                        pointers: {},
                        src: {
                            npm: "https://npmjs.com/package/console-feed",
                            github: "https://github.com/samdenty99/console-feed"
                        }
                    }, u = function(e) {
                        var n = i[e];
                        i[e] = function() {
                            n.apply(this, arguments);
                            var i = [].slice.call(arguments);
                            setTimeout((function() {
                                var n = o.default(e, i);
                                if (n) {
                                    var s = n;
                                    r && (s = a.Encode(n)), t(s, n)
                                }
                            }))
                        }, s.pointers[e] = n
                    }, f = 0, l = n.default; f < l.length; f++) {
                    u(l[f])
                }
                return i.feed = s, i
            }
        },
        "../../node_modules/console-feed/lib/Hook/parse/GUID.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = function() {
                var e = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + "-" + Date.now()
            }
        },
        "../../node_modules/console-feed/lib/Hook/parse/index.js": function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                o = this && this.__spreadArrays || function() {
                    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                    var n = Array(e),
                        o = 0;
                    for (t = 0; t < r; t++)
                        for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
                    return n
                };
            t.__esModule = !0;
            var a = r("../../node_modules/console-feed/lib/Hook/parse/GUID.js"),
                i = r("../../node_modules/console-feed/lib/Hook/parse/methods/timing.js"),
                s = r("../../node_modules/console-feed/lib/Hook/parse/methods/count.js"),
                u = r("../../node_modules/console-feed/lib/Hook/parse/methods/assert.js");
            t.default = function(e, t, r) {
                var f = r || a.default();
                switch (e) {
                    case "clear":
                        return {
                            method: e,
                            id: f
                        };
                    case "count":
                        return !!(l = "string" === typeof t[0] ? t[0] : "default") && n(n({}, s.increment(l)), {
                            id: f
                        });
                    case "time":
                    case "timeEnd":
                        var l;
                        return !!(l = "string" === typeof t[0] ? t[0] : "default") && ("time" === e ? (i.start(l), !1) : n(n({}, i.stop(l)), {
                            id: f
                        }));
                    case "assert":
                        if (0 !== t.length) {
                            var c = u.test.apply(u, o([t[0]], t.slice(1)));
                            if (c) return n(n({}, c), {
                                id: f
                            })
                        }
                        return !1;
                    case "error":
                        return {
                            method: e,
                            id: f,
                            data: t.map((function(e) {
                                try {
                                    return e.stack || e
                                } catch (t) {
                                    return e
                                }
                            }))
                        };
                    default:
                        return {
                            method: e,
                            id: f,
                            data: t
                        }
                }
            }
        },
        "../../node_modules/console-feed/lib/Hook/parse/methods/assert.js": function(e, t, r) {
            "use strict";
            var n = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e),
                    o = 0;
                for (t = 0; t < r; t++)
                    for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
                return n
            };
            t.__esModule = !0, t.test = void 0, t.test = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                return !e && (0 === t.length && t.push("console.assert"), {
                    method: "error",
                    data: n(["Assertion failed:"], t)
                })
            }
        },
        "../../node_modules/console-feed/lib/Hook/parse/methods/count.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.increment = void 0;
            var n = r("../../node_modules/console-feed/lib/Hook/store/state.js"),
                o = r("../../node_modules/console-feed/lib/Hook/store/dispatch.js"),
                a = r("../../node_modules/console-feed/lib/Hook/store/actions.js");
            t.increment = function(e) {
                return o.default(a.count(e)), {
                    method: "log",
                    data: [e + ": " + n.state.count[e]]
                }
            }
        },
        "../../node_modules/console-feed/lib/Hook/parse/methods/timing.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.stop = t.start = void 0;
            var n = r("../../node_modules/console-feed/lib/Hook/store/state.js"),
                o = r("../../node_modules/console-feed/lib/Hook/store/dispatch.js"),
                a = r("../../node_modules/console-feed/lib/Hook/store/actions.js");
            t.start = function(e) {
                o.default(a.timeStart(e))
            }, t.stop = function(e) {
                var t = null === n.state || void 0 === n.state ? void 0 : n.state.timings[e];
                return t && !t.end ? (o.default(a.timeEnd(e)), {
                    method: "log",
                    data: [e + ": " + n.state.timings[e].time + "ms"]
                }) : {
                    method: "warn",
                    data: ["Timer '" + e + "' does not exist"]
                }
            }
        },
        "../../node_modules/console-feed/lib/Hook/store/actions.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.timeEnd = t.timeStart = t.count = void 0, t.count = function(e) {
                return {
                    type: "COUNT",
                    name: e
                }
            }, t.timeStart = function(e) {
                return {
                    type: "TIME_START",
                    name: e
                }
            }, t.timeEnd = function(e) {
                return {
                    type: "TIME_END",
                    name: e
                }
            }
        },
        "../../node_modules/console-feed/lib/Hook/store/dispatch.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = r("../../node_modules/console-feed/lib/Hook/store/reducer.js"),
                o = r("../../node_modules/console-feed/lib/Hook/store/state.js");
            t.default = function(e) {
                o.update(n.default(o.state, e))
            }
        },
        "../../node_modules/console-feed/lib/Hook/store/reducer.js": function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
            t.__esModule = !0, t.initialState = void 0, t.initialState = {
                timings: {},
                count: {}
            }, t.default = function(e, r) {
                var o, a, i;
                switch (void 0 === e && (e = t.initialState), r.type) {
                    case "COUNT":
                        var s = e.count[r.name] || 0;
                        return n(n({}, e), {
                            count: n(n({}, e.count), (o = {}, o[r.name] = s + 1, o))
                        });
                    case "TIME_START":
                        return n(n({}, e), {
                            timings: n(n({}, e.timings), (a = {}, a[r.name] = {
                                start: performance.now() || +new Date
                            }, a))
                        });
                    case "TIME_END":
                        var u = e.timings[r.name],
                            f = performance.now() || +new Date,
                            l = f - u.start;
                        return n(n({}, e), {
                            timings: n(n({}, e.timings), (i = {}, i[r.name] = n(n({}, u), {
                                end: f,
                                time: l
                            }), i))
                        });
                    default:
                        return e
                }
            }
        },
        "../../node_modules/console-feed/lib/Hook/store/state.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.update = t.state = void 0, t.update = function(e) {
                t.state = e
            }
        },
        "../../node_modules/console-feed/lib/Transform/Function.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = {
                type: "Function",
                shouldTransform: function(e, t) {
                    return "function" === typeof t
                },
                toSerializable: function(e) {
                    var t = "";
                    try {
                        t = e.toString().substring(t.indexOf("{") + 1, t.lastIndexOf("}"))
                    } catch (r) {}
                    return {
                        name: e.name,
                        body: t,
                        proto: Object.getPrototypeOf(e).constructor.name
                    }
                },
                fromSerializable: function(e) {
                    try {
                        var t = function() {};
                        return "string" === typeof e.name && Object.defineProperty(t, "name", {
                            value: e.name,
                            writable: !1
                        }), "string" === typeof e.body && Object.defineProperty(t, "body", {
                            value: e.body,
                            writable: !1
                        }), "string" === typeof e.proto && (t.constructor = {
                            name: e.proto
                        }), t
                    } catch (r) {
                        return e
                    }
                }
            }
        },
        "../../node_modules/console-feed/lib/Transform/HTML.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = document.implementation.createHTMLDocument("sandbox");

            function o(e) {
                for (var t = {}, r = 0, n = e.attributes; r < n.length; r++) {
                    var o = n[r];
                    t[o.name] = o.value
                }
                return t
            }
            t.default = {
                type: "HTMLElement",
                shouldTransform: function(e, t) {
                    return t && t.children && "string" === typeof t.innerHTML && "string" === typeof t.tagName
                },
                toSerializable: function(e) {
                    return {
                        tagName: e.tagName.toLowerCase(),
                        attributes: o(e),
                        innerHTML: e.innerHTML
                    }
                },
                fromSerializable: function(e) {
                    try {
                        var t = n.createElement(e.tagName);
                        t.innerHTML = e.innerHTML;
                        for (var r = 0, o = Object.keys(e.attributes); r < o.length; r++) {
                            var a = o[r];
                            try {
                                t.setAttribute(a, e.attributes[a])
                            } catch (i) {}
                        }
                        return t
                    } catch (i) {
                        return e
                    }
                }
            }
        },
        "../../node_modules/console-feed/lib/Transform/Map.js": function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
            t.__esModule = !0, t.default = {
                type: "Map",
                shouldTransform: function(e, t) {
                    return t && t.constructor && "Map" === t.constructor.name
                },
                toSerializable: function(e) {
                    var t = {};
                    return e.forEach((function(e, r) {
                        var n = "object" == typeof r ? JSON.stringify(r) : r;
                        t[n] = e
                    })), {
                        name: "Map",
                        body: t,
                        proto: Object.getPrototypeOf(e).constructor.name
                    }
                },
                fromSerializable: function(e) {
                    var t = e.body,
                        r = n({}, t);
                    return "string" === typeof e.proto && (r.constructor = {
                        name: e.proto
                    }), r
                }
            }
        },
        "../../node_modules/console-feed/lib/Transform/arithmetic.js": function(e, t, r) {
            "use strict";
            var n;
            t.__esModule = !0,
                function(e) {
                    e[e.infinity = 0] = "infinity", e[e.minusInfinity = 1] = "minusInfinity", e[e.minusZero = 2] = "minusZero"
                }(n || (n = {})), t.default = {
                    type: "Arithmetic",
                    shouldTransform: function(e, t) {
                        return "number" === e && (t === 1 / 0 || t === -1 / 0 || function(e) {
                            return 1 / e === -1 / 0
                        }(t))
                    },
                    toSerializable: function(e) {
                        return e === 1 / 0 ? n.infinity : e === -1 / 0 ? n.minusInfinity : n.minusZero
                    },
                    fromSerializable: function(e) {
                        return e === n.infinity ? 1 / 0 : e === n.minusInfinity ? -1 / 0 : e === n.minusZero ? -0 : e
                    }
                }
        },
        "../../node_modules/console-feed/lib/Transform/index.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.Decode = t.Encode = void 0;
            var n = r("../../node_modules/console-feed/lib/Transform/arithmetic.js"),
                o = r("../../node_modules/console-feed/lib/Transform/Function.js"),
                a = r("../../node_modules/console-feed/lib/Transform/HTML.js"),
                i = r("../../node_modules/console-feed/lib/Transform/Map.js"),
                s = r("../../node_modules/console-feed/lib/Transform/replicator/index.js"),
                u = [a.default, o.default, n.default, i.default],
                f = new s.default;
            f.addTransforms(u), t.Encode = function(e) {
                return JSON.parse(f.encode(e))
            }, t.Decode = function(e) {
                return f.decode(JSON.stringify(e))
            }
        },
        "../../node_modules/console-feed/lib/Transform/replicator/index.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = /^#*@(t|r)$/,
                o = (0, eval)("this"),
                a = "function" === typeof ArrayBuffer,
                i = "function" === typeof Map,
                s = "function" === typeof Set,
                u = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"],
                f = Array.prototype.slice,
                l = {
                    serialize: function(e) {
                        return JSON.stringify(e)
                    },
                    deserialize: function(e) {
                        return JSON.parse(e)
                    }
                },
                c = function() {
                    function e(e, t) {
                        this.references = e, this.transforms = t, this.circularCandidates = [], this.circularCandidatesDescrs = [], this.circularRefCount = 0
                    }
                    return e._createRefMark = function(e) {
                        var t = Object.create(null);
                        return t["@r"] = e, t
                    }, e.prototype._createCircularCandidate = function(e, t, r) {
                        this.circularCandidates.push(e), this.circularCandidatesDescrs.push({
                            parent: t,
                            key: r,
                            refIdx: -1
                        })
                    }, e.prototype._applyTransform = function(e, t, r, n) {
                        var o = Object.create(null),
                            a = n.toSerializable(e);
                        return "object" === typeof a && this._createCircularCandidate(e, t, r), o["@t"] = n.type, o.data = this._handleValue((function() {
                            return a
                        }), t, r), o
                    }, e.prototype._handleArray = function(e) {
                        for (var t = [], r = function(r) {
                                t[r] = n._handleValue((function() {
                                    return e[r]
                                }), t, r)
                            }, n = this, o = 0; o < e.length; o++) r(o);
                        return t
                    }, e.prototype._handlePlainObject = function(e) {
                        var t, r, o = Object.create(null),
                            a = function(t) {
                                if (Reflect.has(e, t)) {
                                    var r = n.test(t) ? "#" + t : t;
                                    o[r] = i._handleValue((function() {
                                        return e[t]
                                    }), o, r)
                                }
                            },
                            i = this;
                        for (var s in e) a(s);
                        var u = null === (r = null === (t = null === e || void 0 === e ? void 0 : e.__proto__) || void 0 === t ? void 0 : t.constructor) || void 0 === r ? void 0 : r.name;
                        return u && "Object" !== u && (o.constructor = {
                            name: u
                        }), o
                    }, e.prototype._handleObject = function(e, t, r) {
                        return this._createCircularCandidate(e, t, r), Array.isArray(e) ? this._handleArray(e) : this._handlePlainObject(e)
                    }, e.prototype._ensureCircularReference = function(t) {
                        var r = this.circularCandidates.indexOf(t);
                        if (r > -1) {
                            var n = this.circularCandidatesDescrs[r];
                            return -1 === n.refIdx && (n.refIdx = n.parent ? ++this.circularRefCount : 0), e._createRefMark(n.refIdx)
                        }
                        return null
                    }, e.prototype._handleValue = function(e, t, r) {
                        try {
                            var n = e(),
                                o = typeof n,
                                a = "object" === o && null !== n;
                            if (a) {
                                var i = this._ensureCircularReference(n);
                                if (i) return i
                            }
                            for (var s = 0, u = this.transforms; s < u.length; s++) {
                                var f = u[s];
                                if (f.shouldTransform(o, n)) return this._applyTransform(n, t, r, f)
                            }
                            return a ? this._handleObject(n, t, r) : n
                        } catch (l) {
                            try {
                                return this._handleValue((function() {
                                    return l instanceof Error ? l : new Error(l)
                                }), t, r)
                            } catch (c) {
                                return null
                            }
                        }
                    }, e.prototype.transform = function() {
                        for (var t = this, r = [this._handleValue((function() {
                                return t.references
                            }), null, null)], n = 0, o = this.circularCandidatesDescrs; n < o.length; n++) {
                            var a = o[n];
                            a.refIdx > 0 && (r[a.refIdx] = a.parent[a.key], a.parent[a.key] = e._createRefMark(a.refIdx))
                        }
                        return r
                    }, e
                }(),
                d = function() {
                    function e(e, t) {
                        this.activeTransformsStack = [], this.visitedRefs = Object.create(null), this.references = e, this.transformMap = t
                    }
                    return e.prototype._handlePlainObject = function(e) {
                        var t = Object.create(null);
                        for (var r in "constructor" in e && (e.constructor && "string" === typeof e.constructor.name || (e.constructor = {
                                name: "Object"
                            })), e) e.hasOwnProperty(r) && (this._handleValue(e[r], e, r), n.test(r) && (t[r.substring(1)] = e[r], delete e[r]));
                        for (var o in t) e[o] = t[o]
                    }, e.prototype._handleTransformedObject = function(e, t, r) {
                        var n = e["@t"],
                            o = this.transformMap[n];
                        if (!o) throw new Error("Can't find transform for \"" + n + '" type.');
                        this.activeTransformsStack.push(e), this._handleValue(e.data, e, "data"), this.activeTransformsStack.pop(), t[r] = o.fromSerializable(e.data)
                    }, e.prototype._handleCircularSelfRefDuringTransform = function(e, t, r) {
                        var n = this.references;
                        Object.defineProperty(t, r, {
                            val: void 0,
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return void 0 === this.val && (this.val = n[e]), this.val
                            },
                            set: function(e) {
                                this.val = e
                            }
                        })
                    }, e.prototype._handleCircularRef = function(e, t, r) {
                        this.activeTransformsStack.includes(this.references[e]) ? this._handleCircularSelfRefDuringTransform(e, t, r) : (this.visitedRefs[e] || (this.visitedRefs[e] = !0, this._handleValue(this.references[e], this.references, e)), t[r] = this.references[e])
                    }, e.prototype._handleValue = function(e, t, r) {
                        if ("object" === typeof e && null !== e) {
                            var n = e["@r"];
                            if (void 0 !== n) this._handleCircularRef(n, t, r);
                            else if (e["@t"]) this._handleTransformedObject(e, t, r);
                            else if (Array.isArray(e))
                                for (var o = 0; o < e.length; o++) this._handleValue(e[o], e, o);
                            else this._handlePlainObject(e)
                        }
                    }, e.prototype.transform = function() {
                        return this.visitedRefs[0] = !0, this._handleValue(this.references[0], this.references, 0), this.references[0]
                    }, e
                }(),
                m = [{
                    type: "[[NaN]]",
                    shouldTransform: function(e, t) {
                        return "number" === e && isNaN(t)
                    },
                    toSerializable: function() {
                        return ""
                    },
                    fromSerializable: function() {
                        return NaN
                    }
                }, {
                    type: "[[undefined]]",
                    shouldTransform: function(e) {
                        return "undefined" === e
                    },
                    toSerializable: function() {
                        return ""
                    },
                    fromSerializable: function() {}
                }, {
                    type: "[[Date]]",
                    shouldTransform: function(e, t) {
                        return t instanceof Date
                    },
                    toSerializable: function(e) {
                        return e.getTime()
                    },
                    fromSerializable: function(e) {
                        var t = new Date;
                        return t.setTime(e), t
                    }
                }, {
                    type: "[[RegExp]]",
                    shouldTransform: function(e, t) {
                        return t instanceof RegExp
                    },
                    toSerializable: function(e) {
                        var t = {
                            src: e.source,
                            flags: ""
                        };
                        return e.global && (t.flags += "g"), e.ignoreCase && (t.flags += "i"), e.multiline && (t.flags += "m"), t
                    },
                    fromSerializable: function(e) {
                        return new RegExp(e.src, e.flags)
                    }
                }, {
                    type: "[[Error]]",
                    shouldTransform: function(e, t) {
                        return t instanceof Error
                    },
                    toSerializable: function(e) {
                        return {
                            name: e.name,
                            message: e.message,
                            stack: e.stack
                        }
                    },
                    fromSerializable: function(e) {
                        var t = new(o[e.name] || Error)(e.message);
                        return t.stack = e.stack, t
                    }
                }, {
                    type: "[[ArrayBuffer]]",
                    shouldTransform: function(e, t) {
                        return a && t instanceof ArrayBuffer
                    },
                    toSerializable: function(e) {
                        var t = new Int8Array(e);
                        return f.call(t)
                    },
                    fromSerializable: function(e) {
                        if (a) {
                            var t = new ArrayBuffer(e.length);
                            return new Int8Array(t).set(e), t
                        }
                        return e
                    }
                }, {
                    type: "[[TypedArray]]",
                    shouldTransform: function(e, t) {
                        for (var r = 0, n = u; r < n.length; r++) {
                            var a = n[r];
                            if ("function" === typeof o[a] && t instanceof o[a]) return !0
                        }
                        return !1
                    },
                    toSerializable: function(e) {
                        return {
                            ctorName: e.constructor.name,
                            arr: f.call(e)
                        }
                    },
                    fromSerializable: function(e) {
                        return "function" === typeof o[e.ctorName] ? new o[e.ctorName](e.arr) : e.arr
                    }
                }, {
                    type: "[[Map]]",
                    shouldTransform: function(e, t) {
                        return i && t instanceof Map
                    },
                    toSerializable: function(e) {
                        var t = [];
                        return e.forEach((function(e, r) {
                            t.push(r), t.push(e)
                        })), t
                    },
                    fromSerializable: function(e) {
                        if (i) {
                            for (var t = new Map, r = 0; r < e.length; r += 2) t.set(e[r], e[r + 1]);
                            return t
                        }
                        for (var n = [], o = 0; o < e.length; o += 2) n.push([e[r], e[r + 1]]);
                        return n
                    }
                }, {
                    type: "[[Set]]",
                    shouldTransform: function(e, t) {
                        return s && t instanceof Set
                    },
                    toSerializable: function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            t.push(e)
                        })), t
                    },
                    fromSerializable: function(e) {
                        if (s) {
                            for (var t = new Set, r = 0; r < e.length; r++) t.add(e[r]);
                            return t
                        }
                        return e
                    }
                }],
                h = function() {
                    function e(e) {
                        this.transforms = [], this.transformsMap = Object.create(null), this.serializer = e || l, this.addTransforms(m)
                    }
                    return e.prototype.addTransforms = function(e) {
                        for (var t = 0, r = e = Array.isArray(e) ? e : [e]; t < r.length; t++) {
                            var n = r[t];
                            if (this.transformsMap[n.type]) throw new Error('Transform with type "' + n.type + '" was already added.');
                            this.transforms.push(n), this.transformsMap[n.type] = n
                        }
                        return this
                    }, e.prototype.removeTransforms = function(e) {
                        for (var t = 0, r = e = Array.isArray(e) ? e : [e]; t < r.length; t++) {
                            var n = r[t],
                                o = this.transforms.indexOf(n);
                            o > -1 && this.transforms.splice(o, 1), delete this.transformsMap[n.type]
                        }
                        return this
                    }, e.prototype.encode = function(e) {
                        var t = new c(e, this.transforms).transform();
                        return this.serializer.serialize(t)
                    }, e.prototype.decode = function(e) {
                        var t = this.serializer.deserialize(e);
                        return new d(t, this.transformsMap).transform()
                    }, e
                }();
            t.default = h
        },
        "../../node_modules/console-feed/lib/definitions/Methods.js": function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            t.default = ["log", "debug", "info", "warn", "error", "table", "clear", "time", "timeEnd", "count", "assert"]
        }
    }
]);
//# sourceMappingURL=vendors~app~embed~sandbox-startup.6e3433fd3.chunk.js.map