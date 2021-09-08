(this.csbJsonP = this.csbJsonP || []).push([
    ["vendors~app~codemirror-editor~monaco-editor~sandbox"], {
        "../../node_modules/lodash-es/_ListCache.js": function(e, t, s) {
            "use strict";
            var o = function() {
                    this.__data__ = [], this.size = 0
                },
                n = s("../../node_modules/lodash-es/eq.js");
            var r = function(e, t) {
                    for (var s = e.length; s--;)
                        if (Object(n.a)(e[s][0], t)) return s;
                    return -1
                },
                a = Array.prototype.splice;
            var u = function(e) {
                var t = this.__data__,
                    s = r(t, e);
                return !(s < 0) && (s == t.length - 1 ? t.pop() : a.call(t, s, 1), --this.size, !0)
            };
            var d = function(e) {
                var t = this.__data__,
                    s = r(t, e);
                return s < 0 ? void 0 : t[s][1]
            };
            var c = function(e) {
                return r(this.__data__, e) > -1
            };
            var i = function(e, t) {
                var s = this.__data__,
                    o = r(s, e);
                return o < 0 ? (++this.size, s.push([e, t])) : s[o][1] = t, this
            };

            function l(e) {
                var t = -1,
                    s = null == e ? 0 : e.length;
                for (this.clear(); ++t < s;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            l.prototype.clear = o, l.prototype.delete = u, l.prototype.get = d, l.prototype.has = c, l.prototype.set = i;
            t.a = l
        },
        "../../node_modules/lodash-es/_Map.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_getNative.js"),
                n = s("../../node_modules/lodash-es/_root.js"),
                r = Object(o.a)(n.a, "Map");
            t.a = r
        },
        "../../node_modules/lodash-es/_MapCache.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_getNative.js"),
                n = Object(o.a)(Object, "create");
            var r = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            };
            var a = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                },
                u = Object.prototype.hasOwnProperty;
            var d = function(e) {
                    var t = this.__data__;
                    if (n) {
                        var s = t[e];
                        return "__lodash_hash_undefined__" === s ? void 0 : s
                    }
                    return u.call(t, e) ? t[e] : void 0
                },
                c = Object.prototype.hasOwnProperty;
            var i = function(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : c.call(t, e)
            };
            var l = function(e, t) {
                var s = this.__data__;
                return this.size += this.has(e) ? 0 : 1, s[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
            };

            function _(e) {
                var t = -1,
                    s = null == e ? 0 : e.length;
                for (this.clear(); ++t < s;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            _.prototype.clear = r, _.prototype.delete = a, _.prototype.get = d, _.prototype.has = i, _.prototype.set = l;
            var j = _,
                h = s("../../node_modules/lodash-es/_ListCache.js"),
                f = s("../../node_modules/lodash-es/_Map.js");
            var b = function() {
                this.size = 0, this.__data__ = {
                    hash: new j,
                    map: new(f.a || h.a),
                    string: new j
                }
            };
            var v = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            };
            var m = function(e, t) {
                var s = e.__data__;
                return v(t) ? s["string" == typeof t ? "string" : "hash"] : s.map
            };
            var y = function(e) {
                var t = m(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            };
            var p = function(e) {
                return m(this, e).get(e)
            };
            var O = function(e) {
                return m(this, e).has(e)
            };
            var g = function(e, t) {
                var s = m(this, e),
                    o = s.size;
                return s.set(e, t), this.size += s.size == o ? 0 : 1, this
            };

            function A(e) {
                var t = -1,
                    s = null == e ? 0 : e.length;
                for (this.clear(); ++t < s;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            A.prototype.clear = b, A.prototype.delete = y, A.prototype.get = p, A.prototype.has = O, A.prototype.set = g;
            t.a = A
        },
        "../../node_modules/lodash-es/_Set.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_getNative.js"),
                n = s("../../node_modules/lodash-es/_root.js"),
                r = Object(o.a)(n.a, "Set");
            t.a = r
        },
        "../../node_modules/lodash-es/_SetCache.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_MapCache.js");
            var n = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            };
            var r = function(e) {
                return this.__data__.has(e)
            };

            function a(e) {
                var t = -1,
                    s = null == e ? 0 : e.length;
                for (this.__data__ = new o.a; ++t < s;) this.add(e[t])
            }
            a.prototype.add = a.prototype.push = n, a.prototype.has = r;
            t.a = a
        },
        "../../node_modules/lodash-es/_Stack.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_ListCache.js");
            var n = function() {
                this.__data__ = new o.a, this.size = 0
            };
            var r = function(e) {
                var t = this.__data__,
                    s = t.delete(e);
                return this.size = t.size, s
            };
            var a = function(e) {
                return this.__data__.get(e)
            };
            var u = function(e) {
                    return this.__data__.has(e)
                },
                d = s("../../node_modules/lodash-es/_Map.js"),
                c = s("../../node_modules/lodash-es/_MapCache.js");
            var i = function(e, t) {
                var s = this.__data__;
                if (s instanceof o.a) {
                    var n = s.__data__;
                    if (!d.a || n.length < 199) return n.push([e, t]), this.size = ++s.size, this;
                    s = this.__data__ = new c.a(n)
                }
                return s.set(e, t), this.size = s.size, this
            };

            function l(e) {
                var t = this.__data__ = new o.a(e);
                this.size = t.size
            }
            l.prototype.clear = n, l.prototype.delete = r, l.prototype.get = a, l.prototype.has = u, l.prototype.set = i;
            t.a = l
        },
        "../../node_modules/lodash-es/_Uint8Array.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_root.js").a.Uint8Array;
            t.a = o
        },
        "../../node_modules/lodash-es/_arrayLikeKeys.js": function(e, t, s) {
            "use strict";
            var o = function(e, t) {
                    for (var s = -1, o = Array(e); ++s < e;) o[s] = t(s);
                    return o
                },
                n = s("../../node_modules/lodash-es/isArguments.js"),
                r = s("../../node_modules/lodash-es/isArray.js"),
                a = s("../../node_modules/lodash-es/isBuffer.js"),
                u = s("../../node_modules/lodash-es/_isIndex.js"),
                d = s("../../node_modules/lodash-es/isTypedArray.js"),
                c = Object.prototype.hasOwnProperty;
            t.a = function(e, t) {
                var s = Object(r.a)(e),
                    i = !s && Object(n.a)(e),
                    l = !s && !i && Object(a.a)(e),
                    _ = !s && !i && !l && Object(d.a)(e),
                    j = s || i || l || _,
                    h = j ? o(e.length, String) : [],
                    f = h.length;
                for (var b in e) !t && !c.call(e, b) || j && ("length" == b || l && ("offset" == b || "parent" == b) || _ && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || Object(u.a)(b, f)) || h.push(b);
                return h
            }
        },
        "../../node_modules/lodash-es/_arrayMap.js": function(e, t, s) {
            "use strict";
            t.a = function(e, t) {
                for (var s = -1, o = null == e ? 0 : e.length, n = Array(o); ++s < o;) n[s] = t(e[s], s, e);
                return n
            }
        },
        "../../node_modules/lodash-es/_arrayPush.js": function(e, t, s) {
            "use strict";
            t.a = function(e, t) {
                for (var s = -1, o = t.length, n = e.length; ++s < o;) e[n + s] = t[s];
                return e
            }
        },
        "../../node_modules/lodash-es/_baseAssignValue.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_defineProperty.js");
            t.a = function(e, t, s) {
                "__proto__" == t && o.a ? Object(o.a)(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: s,
                    writable: !0
                }) : e[t] = s
            }
        },
        "../../node_modules/lodash-es/_baseEach.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseForOwn.js"),
                n = s("../../node_modules/lodash-es/isArrayLike.js");
            var r = function(e, t) {
                return function(s, o) {
                    if (null == s) return s;
                    if (!Object(n.a)(s)) return e(s, o);
                    for (var r = s.length, a = t ? r : -1, u = Object(s);
                        (t ? a-- : ++a < r) && !1 !== o(u[a], a, u););
                    return s
                }
            }(o.a);
            t.a = r
        },
        "../../node_modules/lodash-es/_baseFlatten.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_arrayPush.js"),
                n = s("../../node_modules/lodash-es/_Symbol.js"),
                r = s("../../node_modules/lodash-es/isArguments.js"),
                a = s("../../node_modules/lodash-es/isArray.js"),
                u = n.a ? n.a.isConcatSpreadable : void 0;
            var d = function(e) {
                return Object(a.a)(e) || Object(r.a)(e) || !!(u && e && e[u])
            };
            t.a = function e(t, s, n, r, a) {
                var u = -1,
                    c = t.length;
                for (n || (n = d), a || (a = []); ++u < c;) {
                    var i = t[u];
                    s > 0 && n(i) ? s > 1 ? e(i, s - 1, n, r, a) : Object(o.a)(a, i) : r || (a[a.length] = i)
                }
                return a
            }
        },
        "../../node_modules/lodash-es/_baseForOwn.js": function(e, t, s) {
            "use strict";
            var o = function(e) {
                    return function(t, s, o) {
                        for (var n = -1, r = Object(t), a = o(t), u = a.length; u--;) {
                            var d = a[e ? u : ++n];
                            if (!1 === s(r[d], d, r)) break
                        }
                        return t
                    }
                }(),
                n = s("../../node_modules/lodash-es/keys.js");
            t.a = function(e, t) {
                return e && o(e, t, n.a)
            }
        },
        "../../node_modules/lodash-es/_baseGet.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_castPath.js"),
                n = s("../../node_modules/lodash-es/_toKey.js");
            t.a = function(e, t) {
                for (var s = 0, r = (t = Object(o.a)(t, e)).length; null != e && s < r;) e = e[Object(n.a)(t[s++])];
                return s && s == r ? e : void 0
            }
        },
        "../../node_modules/lodash-es/_baseGetAllKeys.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_arrayPush.js"),
                n = s("../../node_modules/lodash-es/isArray.js");
            t.a = function(e, t, s) {
                var r = t(e);
                return Object(n.a)(e) ? r : Object(o.a)(r, s(e))
            }
        },
        "../../node_modules/lodash-es/_baseIsEqual.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_Stack.js"),
                n = s("../../node_modules/lodash-es/_SetCache.js");
            var r = function(e, t) {
                    for (var s = -1, o = null == e ? 0 : e.length; ++s < o;)
                        if (t(e[s], s, e)) return !0;
                    return !1
                },
                a = s("../../node_modules/lodash-es/_cacheHas.js");
            var u = function(e, t, s, o, u, d) {
                    var c = 1 & s,
                        i = e.length,
                        l = t.length;
                    if (i != l && !(c && l > i)) return !1;
                    var _ = d.get(e);
                    if (_ && d.get(t)) return _ == t;
                    var j = -1,
                        h = !0,
                        f = 2 & s ? new n.a : void 0;
                    for (d.set(e, t), d.set(t, e); ++j < i;) {
                        var b = e[j],
                            v = t[j];
                        if (o) var m = c ? o(v, b, j, t, e, d) : o(b, v, j, e, t, d);
                        if (void 0 !== m) {
                            if (m) continue;
                            h = !1;
                            break
                        }
                        if (f) {
                            if (!r(t, (function(e, t) {
                                    if (!Object(a.a)(f, t) && (b === e || u(b, e, s, o, d))) return f.push(t)
                                }))) {
                                h = !1;
                                break
                            }
                        } else if (b !== v && !u(b, v, s, o, d)) {
                            h = !1;
                            break
                        }
                    }
                    return d.delete(e), d.delete(t), h
                },
                d = s("../../node_modules/lodash-es/_Symbol.js"),
                c = s("../../node_modules/lodash-es/_Uint8Array.js"),
                i = s("../../node_modules/lodash-es/eq.js"),
                l = s("../../node_modules/lodash-es/_mapToArray.js"),
                _ = s("../../node_modules/lodash-es/_setToArray.js"),
                j = d.a ? d.a.prototype : void 0,
                h = j ? j.valueOf : void 0;
            var f = function(e, t, s, o, n, r, a) {
                    switch (s) {
                        case "[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !r(new c.a(e), new c.a(t)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return Object(i.a)(+e, +t);
                        case "[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == t + "";
                        case "[object Map]":
                            var d = l.a;
                        case "[object Set]":
                            var j = 1 & o;
                            if (d || (d = _.a), e.size != t.size && !j) return !1;
                            var f = a.get(e);
                            if (f) return f == t;
                            o |= 2, a.set(e, t);
                            var b = u(d(e), d(t), o, n, r, a);
                            return a.delete(e), b;
                        case "[object Symbol]":
                            if (h) return h.call(e) == h.call(t)
                    }
                    return !1
                },
                b = s("../../node_modules/lodash-es/_getAllKeys.js"),
                v = Object.prototype.hasOwnProperty;
            var m = function(e, t, s, o, n, r) {
                    var a = 1 & s,
                        u = Object(b.a)(e),
                        d = u.length;
                    if (d != Object(b.a)(t).length && !a) return !1;
                    for (var c = d; c--;) {
                        var i = u[c];
                        if (!(a ? i in t : v.call(t, i))) return !1
                    }
                    var l = r.get(e);
                    if (l && r.get(t)) return l == t;
                    var _ = !0;
                    r.set(e, t), r.set(t, e);
                    for (var j = a; ++c < d;) {
                        var h = e[i = u[c]],
                            f = t[i];
                        if (o) var m = a ? o(f, h, i, t, e, r) : o(h, f, i, e, t, r);
                        if (!(void 0 === m ? h === f || n(h, f, s, o, r) : m)) {
                            _ = !1;
                            break
                        }
                        j || (j = "constructor" == i)
                    }
                    if (_ && !j) {
                        var y = e.constructor,
                            p = t.constructor;
                        y == p || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof p && p instanceof p || (_ = !1)
                    }
                    return r.delete(e), r.delete(t), _
                },
                y = s("../../node_modules/lodash-es/_getTag.js"),
                p = s("../../node_modules/lodash-es/isArray.js"),
                O = s("../../node_modules/lodash-es/isBuffer.js"),
                g = s("../../node_modules/lodash-es/isTypedArray.js"),
                A = "[object Object]",
                w = Object.prototype.hasOwnProperty;
            var S = function(e, t, s, n, r, a) {
                    var d = Object(p.a)(e),
                        c = Object(p.a)(t),
                        i = d ? "[object Array]" : Object(y.a)(e),
                        l = c ? "[object Array]" : Object(y.a)(t),
                        _ = (i = "[object Arguments]" == i ? A : i) == A,
                        j = (l = "[object Arguments]" == l ? A : l) == A,
                        h = i == l;
                    if (h && Object(O.a)(e)) {
                        if (!Object(O.a)(t)) return !1;
                        d = !0, _ = !1
                    }
                    if (h && !_) return a || (a = new o.a), d || Object(g.a)(e) ? u(e, t, s, n, r, a) : f(e, t, i, s, n, r, a);
                    if (!(1 & s)) {
                        var b = _ && w.call(e, "__wrapped__"),
                            v = j && w.call(t, "__wrapped__");
                        if (b || v) {
                            var S = b ? e.value() : e,
                                k = v ? t.value() : t;
                            return a || (a = new o.a), r(S, k, s, n, a)
                        }
                    }
                    return !!h && (a || (a = new o.a), m(e, t, s, n, r, a))
                },
                k = s("../../node_modules/lodash-es/isObjectLike.js");
            t.a = function e(t, s, o, n, r) {
                return t === s || (null == t || null == s || !Object(k.a)(t) && !Object(k.a)(s) ? t !== t && s !== s : S(t, s, o, n, e, r))
            }
        },
        "../../node_modules/lodash-es/_baseIteratee.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_Stack.js"),
                n = s("../../node_modules/lodash-es/_baseIsEqual.js");
            var r = function(e, t, s, r) {
                    var a = s.length,
                        u = a,
                        d = !r;
                    if (null == e) return !u;
                    for (e = Object(e); a--;) {
                        var c = s[a];
                        if (d && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                    }
                    for (; ++a < u;) {
                        var i = (c = s[a])[0],
                            l = e[i],
                            _ = c[1];
                        if (d && c[2]) {
                            if (void 0 === l && !(i in e)) return !1
                        } else {
                            var j = new o.a;
                            if (r) var h = r(l, _, i, e, t, j);
                            if (!(void 0 === h ? Object(n.a)(_, l, 3, r, j) : h)) return !1
                        }
                    }
                    return !0
                },
                a = s("../../node_modules/lodash-es/isObject.js");
            var u = function(e) {
                    return e === e && !Object(a.a)(e)
                },
                d = s("../../node_modules/lodash-es/keys.js");
            var c = function(e) {
                for (var t = Object(d.a)(e), s = t.length; s--;) {
                    var o = t[s],
                        n = e[o];
                    t[s] = [o, n, u(n)]
                }
                return t
            };
            var i = function(e, t) {
                return function(s) {
                    return null != s && (s[e] === t && (void 0 !== t || e in Object(s)))
                }
            };
            var l = function(e) {
                    var t = c(e);
                    return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(s) {
                        return s === e || r(s, e, t)
                    }
                },
                _ = s("../../node_modules/lodash-es/get.js");
            var j = function(e, t) {
                    return null != e && t in Object(e)
                },
                h = s("../../node_modules/lodash-es/_castPath.js"),
                f = s("../../node_modules/lodash-es/isArguments.js"),
                b = s("../../node_modules/lodash-es/isArray.js"),
                v = s("../../node_modules/lodash-es/_isIndex.js"),
                m = s("../../node_modules/lodash-es/isLength.js"),
                y = s("../../node_modules/lodash-es/_toKey.js");
            var p = function(e, t, s) {
                for (var o = -1, n = (t = Object(h.a)(t, e)).length, r = !1; ++o < n;) {
                    var a = Object(y.a)(t[o]);
                    if (!(r = null != e && s(e, a))) break;
                    e = e[a]
                }
                return r || ++o != n ? r : !!(n = null == e ? 0 : e.length) && Object(m.a)(n) && Object(v.a)(a, n) && (Object(b.a)(e) || Object(f.a)(e))
            };
            var O = function(e, t) {
                    return null != e && p(e, t, j)
                },
                g = s("../../node_modules/lodash-es/_isKey.js");
            var A = function(e, t) {
                    return Object(g.a)(e) && u(t) ? i(Object(y.a)(e), t) : function(s) {
                        var o = Object(_.a)(s, e);
                        return void 0 === o && o === t ? O(s, e) : Object(n.a)(t, o, 3)
                    }
                },
                w = s("../../node_modules/lodash-es/identity.js");
            var S = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                },
                k = s("../../node_modules/lodash-es/_baseGet.js");
            var P = function(e) {
                return function(t) {
                    return Object(k.a)(t, e)
                }
            };
            var z = function(e) {
                return Object(g.a)(e) ? S(Object(y.a)(e)) : P(e)
            };
            t.a = function(e) {
                return "function" == typeof e ? e : null == e ? w.a : "object" == typeof e ? Object(b.a)(e) ? A(e[0], e[1]) : l(e) : z(e)
            }
        },
        "../../node_modules/lodash-es/_baseOrderBy.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_arrayMap.js"),
                n = s("../../node_modules/lodash-es/_baseIteratee.js"),
                r = s("../../node_modules/lodash-es/_baseEach.js"),
                a = s("../../node_modules/lodash-es/isArrayLike.js");
            var u = function(e, t) {
                var s = -1,
                    o = Object(a.a)(e) ? Array(e.length) : [];
                return Object(r.a)(e, (function(e, n, r) {
                    o[++s] = t(e, n, r)
                })), o
            };
            var d = function(e, t) {
                    var s = e.length;
                    for (e.sort(t); s--;) e[s] = e[s].value;
                    return e
                },
                c = s("../../node_modules/lodash-es/_baseUnary.js"),
                i = s("../../node_modules/lodash-es/isSymbol.js");
            var l = function(e, t) {
                if (e !== t) {
                    var s = void 0 !== e,
                        o = null === e,
                        n = e === e,
                        r = Object(i.a)(e),
                        a = void 0 !== t,
                        u = null === t,
                        d = t === t,
                        c = Object(i.a)(t);
                    if (!u && !c && !r && e > t || r && a && d && !u && !c || o && a && d || !s && d || !n) return 1;
                    if (!o && !r && !c && e < t || c && s && n && !o && !r || u && s && n || !a && n || !d) return -1
                }
                return 0
            };
            var _ = function(e, t, s) {
                    for (var o = -1, n = e.criteria, r = t.criteria, a = n.length, u = s.length; ++o < a;) {
                        var d = l(n[o], r[o]);
                        if (d) return o >= u ? d : d * ("desc" == s[o] ? -1 : 1)
                    }
                    return e.index - t.index
                },
                j = s("../../node_modules/lodash-es/identity.js");
            t.a = function(e, t, s) {
                var r = -1;
                t = Object(o.a)(t.length ? t : [j.a], Object(c.a)(n.a));
                var a = u(e, (function(e, s, n) {
                    return {
                        criteria: Object(o.a)(t, (function(t) {
                            return t(e)
                        })),
                        index: ++r,
                        value: e
                    }
                }));
                return d(a, (function(e, t) {
                    return _(e, t, s)
                }))
            }
        },
        "../../node_modules/lodash-es/_baseUnary.js": function(e, t, s) {
            "use strict";
            t.a = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        "../../node_modules/lodash-es/_cacheHas.js": function(e, t, s) {
            "use strict";
            t.a = function(e, t) {
                return e.has(t)
            }
        },
        "../../node_modules/lodash-es/_castPath.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/isArray.js"),
                n = s("../../node_modules/lodash-es/_isKey.js"),
                r = s("../../node_modules/lodash-es/_MapCache.js");

            function a(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var s = function() {
                    var o = arguments,
                        n = t ? t.apply(this, o) : o[0],
                        r = s.cache;
                    if (r.has(n)) return r.get(n);
                    var a = e.apply(this, o);
                    return s.cache = r.set(n, a) || r, a
                };
                return s.cache = new(a.Cache || r.a), s
            }
            a.Cache = r.a;
            var u = a;
            var d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                c = /\\(\\)?/g,
                i = function(e) {
                    var t = u(e, (function(e) {
                            return 500 === s.size && s.clear(), e
                        })),
                        s = t.cache;
                    return t
                }((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(d, (function(e, s, o, n) {
                        t.push(o ? n.replace(c, "$1") : s || e)
                    })), t
                })),
                l = s("../../node_modules/lodash-es/toString.js");
            t.a = function(e, t) {
                return Object(o.a)(e) ? e : Object(n.a)(e, t) ? [e] : i(Object(l.a)(e))
            }
        },
        "../../node_modules/lodash-es/_defineProperty.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_getNative.js"),
                n = function() {
                    try {
                        var e = Object(o.a)(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {}
                }();
            t.a = n
        },
        "../../node_modules/lodash-es/_getAllKeys.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseGetAllKeys.js"),
                n = s("../../node_modules/lodash-es/_getSymbols.js"),
                r = s("../../node_modules/lodash-es/keys.js");
            t.a = function(e) {
                return Object(o.a)(e, r.a, n.a)
            }
        },
        "../../node_modules/lodash-es/_getNative.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/isFunction.js"),
                n = s("../../node_modules/lodash-es/_root.js").a["__core-js_shared__"],
                r = function() {
                    var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            var a = function(e) {
                    return !!r && r in e
                },
                u = s("../../node_modules/lodash-es/isObject.js"),
                d = s("../../node_modules/lodash-es/_toSource.js"),
                c = /^\[object .+?Constructor\]$/,
                i = Function.prototype,
                l = Object.prototype,
                _ = i.toString,
                j = l.hasOwnProperty,
                h = RegExp("^" + _.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            var f = function(e) {
                return !(!Object(u.a)(e) || a(e)) && (Object(o.a)(e) ? h : c).test(Object(d.a)(e))
            };
            var b = function(e, t) {
                return null == e ? void 0 : e[t]
            };
            t.a = function(e, t) {
                var s = b(e, t);
                return f(s) ? s : void 0
            }
        },
        "../../node_modules/lodash-es/_getSymbols.js": function(e, t, s) {
            "use strict";
            var o = function(e, t) {
                    for (var s = -1, o = null == e ? 0 : e.length, n = 0, r = []; ++s < o;) {
                        var a = e[s];
                        t(a, s, e) && (r[n++] = a)
                    }
                    return r
                },
                n = s("../../node_modules/lodash-es/stubArray.js"),
                r = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                u = a ? function(e) {
                    return null == e ? [] : (e = Object(e), o(a(e), (function(t) {
                        return r.call(e, t)
                    })))
                } : n.a;
            t.a = u
        },
        "../../node_modules/lodash-es/_getTag.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_getNative.js"),
                n = s("../../node_modules/lodash-es/_root.js"),
                r = Object(o.a)(n.a, "DataView"),
                a = s("../../node_modules/lodash-es/_Map.js"),
                u = Object(o.a)(n.a, "Promise"),
                d = s("../../node_modules/lodash-es/_Set.js"),
                c = Object(o.a)(n.a, "WeakMap"),
                i = s("../../node_modules/lodash-es/_baseGetTag.js"),
                l = s("../../node_modules/lodash-es/_toSource.js"),
                _ = Object(l.a)(r),
                j = Object(l.a)(a.a),
                h = Object(l.a)(u),
                f = Object(l.a)(d.a),
                b = Object(l.a)(c),
                v = i.a;
            (r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || a.a && "[object Map]" != v(new a.a) || u && "[object Promise]" != v(u.resolve()) || d.a && "[object Set]" != v(new d.a) || c && "[object WeakMap]" != v(new c)) && (v = function(e) {
                var t = Object(i.a)(e),
                    s = "[object Object]" == t ? e.constructor : void 0,
                    o = s ? Object(l.a)(s) : "";
                if (o) switch (o) {
                    case _:
                        return "[object DataView]";
                    case j:
                        return "[object Map]";
                    case h:
                        return "[object Promise]";
                    case f:
                        return "[object Set]";
                    case b:
                        return "[object WeakMap]"
                }
                return t
            });
            t.a = v
        },
        "../../node_modules/lodash-es/_isIndex.js": function(e, t, s) {
            "use strict";
            var o = /^(?:0|[1-9]\d*)$/;
            t.a = function(e, t) {
                var s = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == s || "symbol" != s && o.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
        },
        "../../node_modules/lodash-es/_isKey.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/isArray.js"),
                n = s("../../node_modules/lodash-es/isSymbol.js"),
                r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            t.a = function(e, t) {
                if (Object(o.a)(e)) return !1;
                var s = typeof e;
                return !("number" != s && "symbol" != s && "boolean" != s && null != e && !Object(n.a)(e)) || (a.test(e) || !r.test(e) || null != t && e in Object(t))
            }
        },
        "../../node_modules/lodash-es/_isPrototype.js": function(e, t, s) {
            "use strict";
            var o = Object.prototype;
            t.a = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || o)
            }
        },
        "../../node_modules/lodash-es/_mapToArray.js": function(e, t, s) {
            "use strict";
            t.a = function(e) {
                var t = -1,
                    s = Array(e.size);
                return e.forEach((function(e, o) {
                    s[++t] = [o, e]
                })), s
            }
        },
        "../../node_modules/lodash-es/_nodeUtil.js": function(e, t, s) {
            "use strict";
            (function(e) {
                var o = s("../../node_modules/lodash-es/_freeGlobal.js"),
                    n = "object" == typeof exports && exports && !exports.nodeType && exports,
                    r = n && "object" == typeof e && e && !e.nodeType && e,
                    a = r && r.exports === n && o.a.process,
                    u = function() {
                        try {
                            var e = r && r.require && r.require("util").types;
                            return e || a && a.binding && a.binding("util")
                        } catch (t) {}
                    }();
                t.a = u
            }).call(this, s("../../node_modules/webpack/buildin/harmony-module.js")(e))
        },
        "../../node_modules/lodash-es/_overArg.js": function(e, t, s) {
            "use strict";
            t.a = function(e, t) {
                return function(s) {
                    return e(t(s))
                }
            }
        },
        "../../node_modules/lodash-es/_setToArray.js": function(e, t, s) {
            "use strict";
            t.a = function(e) {
                var t = -1,
                    s = Array(e.size);
                return e.forEach((function(e) {
                    s[++t] = e
                })), s
            }
        },
        "../../node_modules/lodash-es/_toKey.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/isSymbol.js");
            t.a = function(e) {
                if ("string" == typeof e || Object(o.a)(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }
        },
        "../../node_modules/lodash-es/_toSource.js": function(e, t, s) {
            "use strict";
            var o = Function.prototype.toString;
            t.a = function(e) {
                if (null != e) {
                    try {
                        return o.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        "../../node_modules/lodash-es/eq.js": function(e, t, s) {
            "use strict";
            t.a = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        "../../node_modules/lodash-es/flatten.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseFlatten.js");
            t.a = function(e) {
                return (null == e ? 0 : e.length) ? Object(o.a)(e, 1) : []
            }
        },
        "../../node_modules/lodash-es/get.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseGet.js");
            t.a = function(e, t, s) {
                var n = null == e ? void 0 : Object(o.a)(e, t);
                return void 0 === n ? s : n
            }
        },
        "../../node_modules/lodash-es/identity.js": function(e, t, s) {
            "use strict";
            t.a = function(e) {
                return e
            }
        },
        "../../node_modules/lodash-es/isArguments.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseGetTag.js"),
                n = s("../../node_modules/lodash-es/isObjectLike.js");
            var r = function(e) {
                    return Object(n.a)(e) && "[object Arguments]" == Object(o.a)(e)
                },
                a = Object.prototype,
                u = a.hasOwnProperty,
                d = a.propertyIsEnumerable,
                c = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return Object(n.a)(e) && u.call(e, "callee") && !d.call(e, "callee")
                };
            t.a = c
        },
        "../../node_modules/lodash-es/isArray.js": function(e, t, s) {
            "use strict";
            var o = Array.isArray;
            t.a = o
        },
        "../../node_modules/lodash-es/isArrayLike.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/isFunction.js"),
                n = s("../../node_modules/lodash-es/isLength.js");
            t.a = function(e) {
                return null != e && Object(n.a)(e.length) && !Object(o.a)(e)
            }
        },
        "../../node_modules/lodash-es/isBuffer.js": function(e, t, s) {
            "use strict";
            (function(e) {
                var o = s("../../node_modules/lodash-es/_root.js"),
                    n = s("../../node_modules/lodash-es/stubFalse.js"),
                    r = "object" == typeof exports && exports && !exports.nodeType && exports,
                    a = r && "object" == typeof e && e && !e.nodeType && e,
                    u = a && a.exports === r ? o.a.Buffer : void 0,
                    d = (u ? u.isBuffer : void 0) || n.a;
                t.a = d
            }).call(this, s("../../node_modules/webpack/buildin/harmony-module.js")(e))
        },
        "../../node_modules/lodash-es/isFunction.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseGetTag.js"),
                n = s("../../node_modules/lodash-es/isObject.js");
            t.a = function(e) {
                if (!Object(n.a)(e)) return !1;
                var t = Object(o.a)(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        "../../node_modules/lodash-es/isLength.js": function(e, t, s) {
            "use strict";
            t.a = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        "../../node_modules/lodash-es/isTypedArray.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_baseGetTag.js"),
                n = s("../../node_modules/lodash-es/isLength.js"),
                r = s("../../node_modules/lodash-es/isObjectLike.js"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            var u = function(e) {
                    return Object(r.a)(e) && Object(n.a)(e.length) && !!a[Object(o.a)(e)]
                },
                d = s("../../node_modules/lodash-es/_baseUnary.js"),
                c = s("../../node_modules/lodash-es/_nodeUtil.js"),
                i = c.a && c.a.isTypedArray,
                l = i ? Object(d.a)(i) : u;
            t.a = l
        },
        "../../node_modules/lodash-es/keys.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_arrayLikeKeys.js"),
                n = s("../../node_modules/lodash-es/_isPrototype.js"),
                r = s("../../node_modules/lodash-es/_overArg.js"),
                a = Object(r.a)(Object.keys, Object),
                u = Object.prototype.hasOwnProperty;
            var d = function(e) {
                    if (!Object(n.a)(e)) return a(e);
                    var t = [];
                    for (var s in Object(e)) u.call(e, s) && "constructor" != s && t.push(s);
                    return t
                },
                c = s("../../node_modules/lodash-es/isArrayLike.js");
            t.a = function(e) {
                return Object(c.a)(e) ? Object(o.a)(e) : d(e)
            }
        },
        "../../node_modules/lodash-es/stubArray.js": function(e, t, s) {
            "use strict";
            t.a = function() {
                return []
            }
        },
        "../../node_modules/lodash-es/stubFalse.js": function(e, t, s) {
            "use strict";
            t.a = function() {
                return !1
            }
        },
        "../../node_modules/lodash-es/toString.js": function(e, t, s) {
            "use strict";
            var o = s("../../node_modules/lodash-es/_Symbol.js"),
                n = s("../../node_modules/lodash-es/_arrayMap.js"),
                r = s("../../node_modules/lodash-es/isArray.js"),
                a = s("../../node_modules/lodash-es/isSymbol.js"),
                u = o.a ? o.a.prototype : void 0,
                d = u ? u.toString : void 0;
            var c = function e(t) {
                if ("string" == typeof t) return t;
                if (Object(r.a)(t)) return Object(n.a)(t, e) + "";
                if (Object(a.a)(t)) return d ? d.call(t) : "";
                var s = t + "";
                return "0" == s && 1 / t == -1 / 0 ? "-0" : s
            };
            t.a = function(e) {
                return null == e ? "" : c(e)
            }
        }
    }
]);
//# sourceMappingURL=vendors~app~codemirror-editor~monaco-editor~sandbox.5ca13c344.chunk.js.map