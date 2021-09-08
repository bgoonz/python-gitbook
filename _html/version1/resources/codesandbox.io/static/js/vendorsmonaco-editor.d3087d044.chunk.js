(this.csbJsonP = this.csbJsonP || []).push([
    ["vendors~monaco-editor"], {
        "../../node_modules/fast-plist/release/src/main.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = e.length,
                    a = 0,
                    i = 1,
                    s = 0;

                function o(t) {
                    if (null === n) a += t;
                    else
                        for (; t > 0;) {
                            10 === e.charCodeAt(a) ? (a++, i++, s = 0) : (a++, s++), t--
                        }
                }

                function u(e) {
                    null === n ? a = e : o(e - a)
                }

                function l() {
                    for (; a < r;) {
                        var t = e.charCodeAt(a);
                        if (32 !== t && 9 !== t && 13 !== t && 10 !== t) break;
                        o(1)
                    }
                }

                function c(t) {
                    return e.substr(a, t.length) === t && (o(t.length), !0)
                }

                function f(t) {
                    var n = e.indexOf(t, a);
                    u(-1 !== n ? n + t.length : r)
                }

                function h(t) {
                    var n = e.indexOf(t, a);
                    if (-1 !== n) {
                        var i = e.substring(a, n);
                        return u(n + t.length), i
                    }
                    i = e.substr(a);
                    return u(r), i
                }
                r > 0 && 65279 === e.charCodeAt(0) && (a = 1);
                var d = 0,
                    p = null,
                    m = [],
                    g = [],
                    y = null;

                function _(e, t) {
                    m.push(d), g.push(p), d = e, p = t
                }

                function v() {
                    d = m.pop(), p = g.pop()
                }

                function b(t) {
                    throw new Error("Near offset " + a + ": " + t + " ~~~" + e.substr(a, 50) + "~~~")
                }
                var E, k = function() {
                        null === y && b("missing <key>");
                        var e = {};
                        null !== n && (e[n] = {
                            filename: t,
                            line: i,
                            char: s
                        }), p[y] = e, y = null, _(1, e)
                    },
                    T = function() {
                        null === y && b("missing <key>");
                        var e = [];
                        p[y] = e, y = null, _(2, e)
                    },
                    S = function() {
                        var e = {};
                        null !== n && (e[n] = {
                            filename: t,
                            line: i,
                            char: s
                        }), p.push(e), _(1, e)
                    },
                    A = function() {
                        var e = [];
                        p.push(e), _(2, e)
                    };

                function C() {
                    1 === d ? v() : b("unexpected </dict>")
                }

                function w() {
                    1 === d ? b("unexpected </array>") : 2 === d ? v() : b("unexpected </array>")
                }

                function R(e) {
                    1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function x(e) {
                    isNaN(e) && b("cannot parse float"), 1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function O(e) {
                    isNaN(e) && b("cannot parse integer"), 1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function I(e) {
                    1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function N(e) {
                    1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function M(e) {
                    1 === d ? (null === y && b("missing <key>"), p[y] = e, y = null) : 2 === d ? p.push(e) : p = e
                }

                function j() {
                    var e = h(">"),
                        t = !1;
                    return 47 === e.charCodeAt(e.length - 1) && (t = !0, e = e.substring(0, e.length - 1)), {
                        name: e.trim(),
                        isClosed: t
                    }
                }

                function P(e) {
                    if (e.isClosed) return "";
                    var t = h("</");
                    return f(">"), t.replace(/&#([0-9]+);/g, (function(e, t) {
                        return String.fromCodePoint(parseInt(t, 10))
                    })).replace(/&#x([0-9a-f]+);/g, (function(e, t) {
                        return String.fromCodePoint(parseInt(t, 16))
                    })).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, (function(e) {
                        switch (e) {
                            case "&amp;":
                                return "&";
                            case "&lt;":
                                return "<";
                            case "&gt;":
                                return ">";
                            case "&quot;":
                                return '"';
                            case "&apos;":
                                return "'"
                        }
                        return e
                    }))
                }
                for (; a < r && (l(), !(a >= r));) {
                    var L = e.charCodeAt(a);
                    o(1), 60 !== L && b("expected <"), a >= r && b("unexpected end of input");
                    var D = e.charCodeAt(a);
                    if (63 !== D)
                        if (33 !== D) {
                            if (47 === D) {
                                if (o(1), l(), c("plist")) {
                                    f(">");
                                    continue
                                }
                                if (c("dict")) {
                                    f(">"), C();
                                    continue
                                }
                                if (c("array")) {
                                    f(">"), w();
                                    continue
                                }
                                b("unexpected closed tag")
                            }
                            var B = j();
                            switch (B.name) {
                                case "dict":
                                    1 === d ? k() : 2 === d ? S() : (p = {}, null !== n && (p[n] = {
                                        filename: t,
                                        line: i,
                                        char: s
                                    }), _(1, p)), B.isClosed && C();
                                    continue;
                                case "array":
                                    1 === d ? T() : 2 === d ? A() : _(2, p = []), B.isClosed && w();
                                    continue;
                                case "key":
                                    E = P(B), 1 === d ? (null !== y && b("too many <key>"), y = E) : b("unexpected <key>");
                                    continue;
                                case "string":
                                    R(P(B));
                                    continue;
                                case "real":
                                    x(parseFloat(P(B)));
                                    continue;
                                case "integer":
                                    O(parseInt(P(B), 10));
                                    continue;
                                case "date":
                                    I(new Date(P(B)));
                                    continue;
                                case "data":
                                    N(P(B));
                                    continue;
                                case "true":
                                    P(B), M(!0);
                                    continue;
                                case "false":
                                    P(B), M(!1);
                                    continue
                            }
                            /^plist/.test(B.name) || b("unexpected opened tag " + B.name)
                        } else {
                            if (o(1), c("--")) {
                                f("--\x3e");
                                continue
                            }
                            f(">")
                        }
                    else o(1), f("?>")
                }
                return p
            }
            t.parseWithLocation = function(e, t, n) {
                return r(e, t, n)
            }, t.parse = function(e) {
                return r(e, null, null)
            }
        },
        "../../node_modules/lodash-es/groupBy.js": function(e, t, n) {
            "use strict";
            var r = n("../../node_modules/lodash-es/_baseAssignValue.js");
            var a = function(e, t, n, r) {
                    for (var a = -1, i = null == e ? 0 : e.length; ++a < i;) {
                        var s = e[a];
                        t(r, s, n(s), e)
                    }
                    return r
                },
                i = n("../../node_modules/lodash-es/_baseEach.js");
            var s = function(e, t, n, r) {
                    return Object(i.a)(e, (function(e, a, i) {
                        t(r, e, n(e), i)
                    })), r
                },
                o = n("../../node_modules/lodash-es/_baseIteratee.js"),
                u = n("../../node_modules/lodash-es/isArray.js");
            var l = function(e, t) {
                    return function(n, r) {
                        var i = Object(u.a)(n) ? a : s,
                            l = t ? t() : {};
                        return i(n, e, Object(o.a)(r, 2), l)
                    }
                },
                c = Object.prototype.hasOwnProperty,
                f = l((function(e, t, n) {
                    c.call(e, n) ? e[n].push(t) : Object(r.a)(e, n, [t])
                }));
            t.a = f
        },
        "../../node_modules/match-sorter/dist/cjs/index.js": function(e, t, n) {
            "use strict";
            var r, a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = o(n("../../node_modules/match-sorter/node_modules/diacritic/diacritics.js"));
            o(n("../../node_modules/match-sorter/node_modules/global-object/global-object.js"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = {
                CASE_SENSITIVE_EQUAL: 7,
                EQUAL: 6,
                STARTS_WITH: 5,
                WORD_STARTS_WITH: 4,
                CONTAINS: 3,
                ACRONYM: 2,
                MATCHES: 1,
                NO_MATCH: 0
            };

            function l(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.keys,
                    a = n.threshold,
                    i = void 0 === a ? u.MATCHES : a,
                    s = e.reduce(o, []);
                return s.sort(h).map((function(e) {
                    return e.item
                }));

                function o(e, a, s) {
                    var o = c(a, r, t, n),
                        u = o.rank,
                        l = o.keyIndex;
                    return u >= i && e.push({
                        item: a,
                        rank: u,
                        index: s,
                        keyIndex: l
                    }), e
                }
            }

            function c(e, t, n, r) {
                return t ? function(e, t) {
                    return t.reduce((function(t, n) {
                        var r = function(e, t) {
                            "object" === ("undefined" === typeof t ? "undefined" : i(t)) && (t = t.key);
                            var n = void 0;
                            n = "function" === typeof t ? t(e) : -1 !== t.indexOf(".") ? t.split(".").reduce((function(e, t) {
                                return e[t]
                            }), e) : e[t];
                            return n ? [].concat(n) : null
                        }(e, n);
                        return r && r.forEach((function(e) {
                            t.push({
                                itemValue: e,
                                attributes: p(n)
                            })
                        })), t
                    }), [])
                }(e, t).reduce((function(e, t, a) {
                    var i = e.rank,
                        s = e.keyIndex,
                        o = t.itemValue,
                        l = t.attributes,
                        c = f(o, n, r),
                        h = l.minRanking,
                        d = l.maxRanking;
                    return c < h && c >= u.MATCHES ? c = h : c > d && (c = d), c > i && (i = c, s = a), {
                        rank: i,
                        keyIndex: s
                    }
                }), {
                    rank: u.NO_MATCH,
                    keyIndex: -1
                }) : {
                    rank: f(e, n, r),
                    keyIndex: -1
                }
            }

            function f(e, t, n) {
                return e = d(e, n), (t = d(t, n)).length > e.length ? u.NO_MATCH : e === t ? u.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? u.EQUAL : 0 === e.indexOf(t) ? u.STARTS_WITH : -1 !== e.indexOf(" " + t) ? u.WORD_STARTS_WITH : -1 !== e.indexOf(t) ? u.CONTAINS : 1 === t.length ? u.NO_MATCH : -1 !== function(e) {
                    var t = "";
                    return e.split(" ").forEach((function(e) {
                        e.split("-").forEach((function(e) {
                            t += e.substr(0, 1)
                        }))
                    })), t
                }(e).indexOf(t) ? u.ACRONYM : function(e, t) {
                    var n = 0;

                    function r(e, t, n) {
                        for (var r = n; r < t.length; r++) {
                            if (t[r] === e) return r + 1
                        }
                        return -1
                    }
                    var a = r(t[0], e, 0);
                    if (a < 0) return u.NO_MATCH;
                    n = a;
                    for (var i = 1; i < t.length; i++) {
                        var s = t[i];
                        if (!((n = r(s, e, n)) > -1)) return u.NO_MATCH
                    }
                    return function(e) {
                        var n = e - t.length + 1;
                        return u.MATCHES + 1 / n
                    }(n - a)
                }(e, t)
            }

            function h(e, t) {
                var n = e.rank,
                    r = e.index,
                    a = e.keyIndex,
                    i = t.rank,
                    s = t.index,
                    o = t.keyIndex;
                return n === i ? a === o ? r < s ? -1 : 1 : a < o ? -1 : 1 : n > i ? -1 : 1
            }

            function d(e, t) {
                return e = "" + e, t.keepDiacritics || (e = s.default.clean(e)), e
            }

            function p(e) {
                return "string" === typeof e && (e = {
                    key: e
                }), a({
                    maxRanking: 1 / 0,
                    minRanking: -1 / 0
                }, e)
            }
            l.rankings = u, "object" === i(t) && "undefined" !== typeof e ? (l.default = l, e.exports = l, Object.defineProperty(t, "__esModule", {
                value: !0
            })) : void 0 === (r = function() {
                return l
            }.call(t, n, t, e)) || (e.exports = r)
        },
        "../../node_modules/match-sorter/node_modules/diacritic/diacritics.js": function(e, t, n) {
            var r, a, i;
            i = function() {
                for (var e = {
                        map: {}
                    }, t = [{
                        base: " ",
                        letters: "\xa0"
                    }, {
                        base: "A",
                        letters: "A\u24b6\uff21\xc0\xc1\xc2\u1ea6\u1ea4\u1eaa\u1ea8\xc3\u0100\u0102\u1eb0\u1eae\u1eb4\u1eb2\u0226\u01e0\xc4\u01de\u1ea2\xc5\u01fa\u01cd\u0200\u0202\u1ea0\u1eac\u1eb6\u1e00\u0104\u023a\u2c6f"
                    }, {
                        base: "AA",
                        letters: "\ua732"
                    }, {
                        base: "AE",
                        letters: "\xc6\u01fc\u01e2"
                    }, {
                        base: "AO",
                        letters: "\ua734"
                    }, {
                        base: "AU",
                        letters: "\ua736"
                    }, {
                        base: "AV",
                        letters: "\ua738\ua73a"
                    }, {
                        base: "AY",
                        letters: "\ua73c"
                    }, {
                        base: "B",
                        letters: "B\u24b7\uff22\u1e02\u1e04\u1e06\u0243\u0182\u0181"
                    }, {
                        base: "C",
                        letters: "C\u24b8\uff23\u0106\u0108\u010a\u010c\xc7\u1e08\u0187\u023b\ua73e"
                    }, {
                        base: "D",
                        letters: "D\u24b9\uff24\u1e0a\u010e\u1e0c\u1e10\u1e12\u1e0e\u0110\u018b\u018a\u0189\ua779"
                    }, {
                        base: "DZ",
                        letters: "\u01f1\u01c4"
                    }, {
                        base: "Dz",
                        letters: "\u01f2\u01c5"
                    }, {
                        base: "E",
                        letters: "E\u24ba\uff25\xc8\xc9\xca\u1ec0\u1ebe\u1ec4\u1ec2\u1ebc\u0112\u1e14\u1e16\u0114\u0116\xcb\u1eba\u011a\u0204\u0206\u1eb8\u1ec6\u0228\u1e1c\u0118\u1e18\u1e1a\u0190\u018e"
                    }, {
                        base: "F",
                        letters: "F\u24bb\uff26\u1e1e\u0191\ua77b"
                    }, {
                        base: "G",
                        letters: "G\u24bc\uff27\u01f4\u011c\u1e20\u011e\u0120\u01e6\u0122\u01e4\u0193\ua7a0\ua77d\ua77e"
                    }, {
                        base: "H",
                        letters: "H\u24bd\uff28\u0124\u1e22\u1e26\u021e\u1e24\u1e28\u1e2a\u0126\u2c67\u2c75\ua78d"
                    }, {
                        base: "I",
                        letters: "I\u24be\uff29\xcc\xcd\xce\u0128\u012a\u012c\u0130\xcf\u1e2e\u1ec8\u01cf\u0208\u020a\u1eca\u012e\u1e2c\u0197"
                    }, {
                        base: "J",
                        letters: "J\u24bf\uff2a\u0134\u0248"
                    }, {
                        base: "K",
                        letters: "K\u24c0\uff2b\u1e30\u01e8\u1e32\u0136\u1e34\u0198\u2c69\ua740\ua742\ua744\ua7a2"
                    }, {
                        base: "L",
                        letters: "L\u24c1\uff2c\u013f\u0139\u013d\u1e36\u1e38\u013b\u1e3c\u1e3a\u0141\u023d\u2c62\u2c60\ua748\ua746\ua780"
                    }, {
                        base: "LJ",
                        letters: "\u01c7"
                    }, {
                        base: "Lj",
                        letters: "\u01c8"
                    }, {
                        base: "M",
                        letters: "M\u24c2\uff2d\u1e3e\u1e40\u1e42\u2c6e\u019c"
                    }, {
                        base: "N",
                        letters: "N\u24c3\uff2e\u01f8\u0143\xd1\u1e44\u0147\u1e46\u0145\u1e4a\u1e48\u0220\u019d\ua790\ua7a4"
                    }, {
                        base: "NJ",
                        letters: "\u01ca"
                    }, {
                        base: "Nj",
                        letters: "\u01cb"
                    }, {
                        base: "O",
                        letters: "O\u24c4\uff2f\xd2\xd3\xd4\u1ed2\u1ed0\u1ed6\u1ed4\xd5\u1e4c\u022c\u1e4e\u014c\u1e50\u1e52\u014e\u022e\u0230\xd6\u022a\u1ece\u0150\u01d1\u020c\u020e\u01a0\u1edc\u1eda\u1ee0\u1ede\u1ee2\u1ecc\u1ed8\u01ea\u01ec\xd8\u01fe\u0186\u019f\ua74a\ua74c"
                    }, {
                        base: "OI",
                        letters: "\u01a2"
                    }, {
                        base: "OO",
                        letters: "\ua74e"
                    }, {
                        base: "OU",
                        letters: "\u0222"
                    }, {
                        base: "P",
                        letters: "P\u24c5\uff30\u1e54\u1e56\u01a4\u2c63\ua750\ua752\ua754"
                    }, {
                        base: "Q",
                        letters: "Q\u24c6\uff31\ua756\ua758\u024a"
                    }, {
                        base: "R",
                        letters: "R\u24c7\uff32\u0154\u1e58\u0158\u0210\u0212\u1e5a\u1e5c\u0156\u1e5e\u024c\u2c64\ua75a\ua7a6\ua782"
                    }, {
                        base: "S",
                        letters: "S\u24c8\uff33\u1e9e\u015a\u1e64\u015c\u1e60\u0160\u1e66\u1e62\u1e68\u0218\u015e\u2c7e\ua7a8\ua784"
                    }, {
                        base: "T",
                        letters: "T\u24c9\uff34\u1e6a\u0164\u1e6c\u021a\u0162\u1e70\u1e6e\u0166\u01ac\u01ae\u023e\ua786"
                    }, {
                        base: "Th",
                        letters: "\xde"
                    }, {
                        base: "TZ",
                        letters: "\ua728"
                    }, {
                        base: "U",
                        letters: "U\u24ca\uff35\xd9\xda\xdb\u0168\u1e78\u016a\u1e7a\u016c\xdc\u01db\u01d7\u01d5\u01d9\u1ee6\u016e\u0170\u01d3\u0214\u0216\u01af\u1eea\u1ee8\u1eee\u1eec\u1ef0\u1ee4\u1e72\u0172\u1e76\u1e74\u0244"
                    }, {
                        base: "V",
                        letters: "V\u24cb\uff36\u1e7c\u1e7e\u01b2\ua75e\u0245"
                    }, {
                        base: "VY",
                        letters: "\ua760"
                    }, {
                        base: "W",
                        letters: "W\u24cc\uff37\u1e80\u1e82\u0174\u1e86\u1e84\u1e88\u2c72"
                    }, {
                        base: "X",
                        letters: "X\u24cd\uff38\u1e8a\u1e8c"
                    }, {
                        base: "Y",
                        letters: "Y\u24ce\uff39\u1ef2\xdd\u0176\u1ef8\u0232\u1e8e\u0178\u1ef6\u1ef4\u01b3\u024e\u1efe"
                    }, {
                        base: "Z",
                        letters: "Z\u24cf\uff3a\u0179\u1e90\u017b\u017d\u1e92\u1e94\u01b5\u0224\u2c7f\u2c6b\ua762"
                    }, {
                        base: "a",
                        letters: "a\u24d0\uff41\u1e9a\xe0\xe1\xe2\u1ea7\u1ea5\u1eab\u1ea9\xe3\u0101\u0103\u1eb1\u1eaf\u1eb5\u1eb3\u0227\u01e1\xe4\u01df\u1ea3\xe5\u01fb\u01ce\u0201\u0203\u1ea1\u1ead\u1eb7\u1e01\u0105\u2c65\u0250\u0251"
                    }, {
                        base: "aa",
                        letters: "\ua733"
                    }, {
                        base: "ae",
                        letters: "\xe6\u01fd\u01e3"
                    }, {
                        base: "ao",
                        letters: "\ua735"
                    }, {
                        base: "au",
                        letters: "\ua737"
                    }, {
                        base: "av",
                        letters: "\ua739\ua73b"
                    }, {
                        base: "ay",
                        letters: "\ua73d"
                    }, {
                        base: "b",
                        letters: "b\u24d1\uff42\u1e03\u1e05\u1e07\u0180\u0183\u0253"
                    }, {
                        base: "c",
                        letters: "c\u24d2\uff43\u0107\u0109\u010b\u010d\xe7\u1e09\u0188\u023c\ua73f\u2184"
                    }, {
                        base: "d",
                        letters: "d\u24d3\uff44\u1e0b\u010f\u1e0d\u1e11\u1e13\u1e0f\u0111\u018c\u0256\u0257\ua77a"
                    }, {
                        base: "dz",
                        letters: "\u01f3\u01c6"
                    }, {
                        base: "e",
                        letters: "e\u24d4\uff45\xe8\xe9\xea\u1ec1\u1ebf\u1ec5\u1ec3\u1ebd\u0113\u1e15\u1e17\u0115\u0117\xeb\u1ebb\u011b\u0205\u0207\u1eb9\u1ec7\u0229\u1e1d\u0119\u1e19\u1e1b\u0247\u025b\u01dd"
                    }, {
                        base: "f",
                        letters: "f\u24d5\uff46\u1e1f\u0192\ua77c"
                    }, {
                        base: "ff",
                        letters: "\ufb00"
                    }, {
                        base: "fi",
                        letters: "\ufb01"
                    }, {
                        base: "fl",
                        letters: "\ufb02"
                    }, {
                        base: "ffi",
                        letters: "\ufb03"
                    }, {
                        base: "ffl",
                        letters: "\ufb04"
                    }, {
                        base: "g",
                        letters: "g\u24d6\uff47\u01f5\u011d\u1e21\u011f\u0121\u01e7\u0123\u01e5\u0260\ua7a1\u1d79\ua77f"
                    }, {
                        base: "h",
                        letters: "h\u24d7\uff48\u0125\u1e23\u1e27\u021f\u1e25\u1e29\u1e2b\u1e96\u0127\u2c68\u2c76\u0265"
                    }, {
                        base: "hv",
                        letters: "\u0195"
                    }, {
                        base: "i",
                        letters: "i\u24d8\uff49\xec\xed\xee\u0129\u012b\u012d\xef\u1e2f\u1ec9\u01d0\u0209\u020b\u1ecb\u012f\u1e2d\u0268\u0131"
                    }, {
                        base: "j",
                        letters: "j\u24d9\uff4a\u0135\u01f0\u0249"
                    }, {
                        base: "k",
                        letters: "k\u24da\uff4b\u1e31\u01e9\u1e33\u0137\u1e35\u0199\u2c6a\ua741\ua743\ua745\ua7a3"
                    }, {
                        base: "l",
                        letters: "l\u24db\uff4c\u0140\u013a\u013e\u1e37\u1e39\u013c\u1e3d\u1e3b\u017f\u0142\u019a\u026b\u2c61\ua749\ua781\ua747"
                    }, {
                        base: "lj",
                        letters: "\u01c9"
                    }, {
                        base: "m",
                        letters: "m\u24dc\uff4d\u1e3f\u1e41\u1e43\u0271\u026f"
                    }, {
                        base: "n",
                        letters: "n\xf1n\u24dd\uff4e\u01f9\u0144\xf1\u1e45\u0148\u1e47\u0146\u1e4b\u1e49\u019e\u0272\u0149\ua791\ua7a5\u043b\u0509"
                    }, {
                        base: "nj",
                        letters: "\u01cc"
                    }, {
                        base: "o",
                        letters: "\u07c0o\u24de\uff4f\xf2\xf3\xf4\u1ed3\u1ed1\u1ed7\u1ed5\xf5\u1e4d\u022d\u1e4f\u014d\u1e51\u1e53\u014f\u022f\u0231\xf6\u022b\u1ecf\u0151\u01d2\u020d\u020f\u01a1\u1edd\u1edb\u1ee1\u1edf\u1ee3\u1ecd\u1ed9\u01eb\u01ed\xf8\u01ff\u0254\ua74b\ua74d\u0275"
                    }, {
                        base: "oe",
                        letters: "\u0152\u0153"
                    }, {
                        base: "oi",
                        letters: "\u01a3"
                    }, {
                        base: "ou",
                        letters: "\u0223"
                    }, {
                        base: "oo",
                        letters: "\ua74f"
                    }, {
                        base: "p",
                        letters: "p\u24df\uff50\u1e55\u1e57\u01a5\u1d7d\ua751\ua753\ua755"
                    }, {
                        base: "q",
                        letters: "q\u24e0\uff51\u024b\ua757\ua759"
                    }, {
                        base: "r",
                        letters: "r\u24e1\uff52\u0155\u1e59\u0159\u0211\u0213\u1e5b\u1e5d\u0157\u1e5f\u024d\u027d\ua75b\ua7a7\ua783"
                    }, {
                        base: "s",
                        letters: "s\u24e2\uff53\xdf\u015b\u1e65\u015d\u1e61\u0161\u1e67\u1e63\u1e69\u0219\u015f\u023f\ua7a9\ua785\u1e9b"
                    }, {
                        base: "ss",
                        letters: "\xdf"
                    }, {
                        base: "t",
                        letters: "t\u24e3\uff54\u1e6b\u1e97\u0165\u1e6d\u021b\u0163\u1e71\u1e6f\u0167\u01ad\u0288\u2c66\ua787"
                    }, {
                        base: "th",
                        letters: "\xfe"
                    }, {
                        base: "tz",
                        letters: "\ua729"
                    }, {
                        base: "u",
                        letters: "u\u24e4\uff55\xf9\xfa\xfb\u0169\u1e79\u016b\u1e7b\u016d\xfc\u01dc\u01d8\u01d6\u01da\u1ee7\u016f\u0171\u01d4\u0215\u0217\u01b0\u1eeb\u1ee9\u1eef\u1eed\u1ef1\u1ee5\u1e73\u0173\u1e77\u1e75\u0289"
                    }, {
                        base: "v",
                        letters: "v\u24e5\uff56\u1e7d\u1e7f\u028b\ua75f\u028c"
                    }, {
                        base: "vy",
                        letters: "\ua761"
                    }, {
                        base: "w",
                        letters: "w\u24e6\uff57\u1e81\u1e83\u0175\u1e87\u1e85\u1e98\u1e89\u2c73"
                    }, {
                        base: "x",
                        letters: "x\u24e7\uff58\u1e8b\u1e8d"
                    }, {
                        base: "y",
                        letters: "y\u24e8\uff59\u1ef3\xfd\u0177\u1ef9\u0233\u1e8f\xff\u1ef7\u1e99\u1ef5\u01b4\u024f\u1eff"
                    }, {
                        base: "z",
                        letters: "z\u24e9\uff5a\u017a\u1e91\u017c\u017e\u1e93\u1e95\u01b6\u0225\u0240\u2c6c\ua763"
                    }], n = 0, r = t.length; n < r; n++)
                    for (var a = t[n].letters.split(""), i = 0, s = a.length; i < s; i++) e.map[a[i]] = t[n].base;
                return e.clean = function(t) {
                    if (!t || !t.length || t.length < 1) return "";
                    for (var n, r = "", a = t.split(""), i = 0, s = a.length; i < s; i++) r += (n = a[i]) in e.map ? e.map[n] : n;
                    return r
                }, e
            }, e.exports ? e.exports = i() : void 0 === (a = "function" === typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = a)
        },
        "../../node_modules/match-sorter/node_modules/global-object/global-object.js": function(module, exports, __webpack_require__) {
            (function(global) {
                ! function(e) {
                    try {
                        e("export default global")
                    } catch (t) {
                        try {
                            e("export default self")
                        } catch (t) {
                            try {
                                module.exports = global
                            } catch (t) {
                                try {
                                    self.global = self
                                } catch (t) {
                                    window.global = window
                                }
                            }
                        }
                    }
                }(eval)
            }).call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js"))
        },
        "../../node_modules/monaco-textmate/dist/debug.js": function(e, t, n) {
            (function(n) {
                var r, a, i;
                "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [], void 0 === (i = "function" === typeof(r = function() {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.CAPTURE_METADATA = "undefined" !== typeof n && !!n.env.VSCODE_TEXTMATE_DEBUG, t.IN_DEBUG_MODE = "undefined" !== typeof n && !!n.env.VSCODE_TEXTMATE_DEBUG
                }) ? r.apply(t, a) : r) || (e.exports = i)
            }).call(this, n("../../node_modules/process/browser.js"))
        },
        "../../node_modules/monaco-textmate/dist/grammar.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/createClass.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

                function i(e) {
                    if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (e = function(e, t) {
                                if (e) {
                                    if ("string" === typeof e) return s(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                                }
                            }(e))) {
                            var t = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return t >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[t++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, a, i = !0,
                        o = !1;
                    return {
                        s: function() {
                            r = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = r.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            o = !0, a = e
                        },
                        f: function() {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                    }
                }

                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n("../../node_modules/monaco-textmate/dist/utils.js"),
                    u = n("../../node_modules/monaco-textmate/dist/rule.js"),
                    l = n("../../node_modules/monaco-textmate/dist/matcher.js"),
                    c = n("../../node_modules/monaco-textmate/dist/debug.js");

                function f(e, t) {
                    for (var n = 0, r = t.length; n < r; n++) {
                        Array.isArray(t[n].patterns) && f(e, t[n].patterns);
                        var a = t[n].include;
                        if (a && "$base" !== a && "$self" !== a && "#" !== a.charAt(0)) {
                            var i = a.indexOf("#");
                            i >= 0 ? e[a.substring(0, i)] = !0 : e[a] = !0
                        }
                    }
                }

                function h(e, t) {
                    if (!e) return !1;
                    if (e === t) return !0;
                    var n = t.length;
                    return e.length > n && e.substr(0, n) === t && "." === e[n]
                }

                function d(e, t) {
                    if (t.length < e.length) return !1;
                    var n = 0;
                    return e.every((function(e) {
                        for (var r = n; r < t.length; r++)
                            if (h(t[r], e)) return n = r + 1, !0;
                        return !1
                    }))
                }

                function p(e, t, n, r, a) {
                    var s, o = l.createMatchers(t, d),
                        c = u.RuleFactory.getCompiledRuleId(n, r, a.repository),
                        f = i(o);
                    try {
                        for (f.s(); !(s = f.n()).done;) {
                            var h = s.value;
                            e.push({
                                matcher: h.matcher,
                                ruleId: c,
                                grammar: a,
                                priority: h.priority
                            })
                        }
                    } catch (p) {
                        f.e(p)
                    } finally {
                        f.f()
                    }
                }
                t.createGrammar = function(e, t, n, r, a) {
                    return new y(e, t, n, r, a)
                }, t.collectIncludedScopes = function(e, t) {
                    t.patterns && Array.isArray(t.patterns) && f(e, t.patterns), t.repository && function e(t, n) {
                        for (var r in n) {
                            var a = n[r];
                            a.patterns && Array.isArray(a.patterns) && f(t, a.patterns), a.repository && e(t, a.repository)
                        }
                    }(e, t.repository), delete e[t.scopeName]
                };
                var m = function e(t, n, a, i) {
                    (0, r.default)(this, e), this.scopeName = t, this.languageId = n, this.tokenType = a, this.themeData = i
                };
                t.ScopeMetadata = m;
                var g = function() {
                    function t(e, n, a) {
                        if ((0, r.default)(this, t), this._initialLanguage = e, this._themeProvider = n, this.onDidChangeTheme(), this._embeddedLanguages = Object.create(null), a)
                            for (var i = Object.keys(a), s = 0, o = i.length; s < o; s++) {
                                var u = i[s],
                                    l = a[u];
                                "number" === typeof l && 0 !== l ? this._embeddedLanguages[u] = l : console.warn("Invalid embedded language found at scope " + u + ": <<" + l + ">>")
                            }
                        var c = Object.keys(this._embeddedLanguages).map((function(e) {
                            return t._escapeRegExpCharacters(e)
                        }));
                        0 === c.length ? this._embeddedLanguagesRegex = null : (c.sort(), c.reverse(), this._embeddedLanguagesRegex = new RegExp("^((".concat(c.join(")|("), "))($|\\.)"), ""))
                    }
                    return (0, e.default)(t, [{
                        key: "onDidChangeTheme",
                        value: function() {
                            this._cache = Object.create(null), this._defaultMetaData = new m("", this._initialLanguage, 0, [this._themeProvider.getDefaults()])
                        }
                    }, {
                        key: "getDefaultMetadata",
                        value: function() {
                            return this._defaultMetaData
                        }
                    }, {
                        key: "getMetadataForScope",
                        value: function(e) {
                            if (null === e) return t._NULL_SCOPE_METADATA;
                            var n = this._cache[e];
                            return n || (n = this._doGetMetadataForScope(e), this._cache[e] = n, n)
                        }
                    }, {
                        key: "_doGetMetadataForScope",
                        value: function(e) {
                            var t = this._scopeToLanguage(e),
                                n = this._toStandardTokenType(e),
                                r = this._themeProvider.themeMatch(e);
                            return new m(e, t, n, r)
                        }
                    }, {
                        key: "_scopeToLanguage",
                        value: function(e) {
                            if (!e) return 0;
                            if (!this._embeddedLanguagesRegex) return 0;
                            var t = e.match(this._embeddedLanguagesRegex);
                            if (!t) return 0;
                            var n = this._embeddedLanguages[t[1]] || 0;
                            return n || 0
                        }
                    }, {
                        key: "_toStandardTokenType",
                        value: function(e) {
                            var n = e.match(t.STANDARD_TOKEN_TYPE_REGEXP);
                            if (!n) return 0;
                            switch (n[1]) {
                                case "comment":
                                    return 1;
                                case "string":
                                    return 2;
                                case "regex":
                                    return 4;
                                case "meta.embedded":
                                    return 8
                            }
                            throw new Error("Unexpected match for standard token type!")
                        }
                    }], [{
                        key: "_escapeRegExpCharacters",
                        value: function(e) {
                            return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
                        }
                    }]), t
                }();
                g._NULL_SCOPE_METADATA = new m("", 0, 0, null), g.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
                var y = function() {
                    function t(e, n, a, s, o) {
                        if ((0, r.default)(this, t), this._scopeMetadataProvider = new g(n, o, a), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = _(e, null), this._tokenTypeMatchers = [], s)
                            for (var u = 0, c = Object.keys(s); u < c.length; u++) {
                                var f, h = c[u],
                                    p = i(l.createMatchers(h, d));
                                try {
                                    for (p.s(); !(f = p.n()).done;) {
                                        var m = f.value;
                                        this._tokenTypeMatchers.push({
                                            matcher: m.matcher,
                                            type: s[h]
                                        })
                                    }
                                } catch (y) {
                                    p.e(y)
                                } finally {
                                    p.f()
                                }
                            }
                    }
                    return (0, e.default)(t, [{
                        key: "onDidChangeTheme",
                        value: function() {
                            this._scopeMetadataProvider.onDidChangeTheme()
                        }
                    }, {
                        key: "getMetadataForScope",
                        value: function(e) {
                            return this._scopeMetadataProvider.getMetadataForScope(e)
                        }
                    }, {
                        key: "getInjections",
                        value: function() {
                            var e = this;
                            if (!this._injections) {
                                this._injections = [];
                                var t = this._grammar.injections;
                                if (t)
                                    for (var n in t) p(this._injections, n, t[n], this, this._grammar);
                                if (this._grammarRepository) {
                                    var r = this._grammarRepository.injections(this._grammar.scopeName);
                                    r && r.forEach((function(t) {
                                        var n = e.getExternalGrammar(t);
                                        if (n) {
                                            var r = n.injectionSelector;
                                            r && p(e._injections, r, n, e, n)
                                        }
                                    }))
                                }
                                this._injections.sort((function(e, t) {
                                    return e.priority - t.priority
                                }))
                            }
                            return this._injections.length, this._injections
                        }
                    }, {
                        key: "registerRule",
                        value: function(e) {
                            var t = ++this._lastRuleId,
                                n = e(t);
                            return this._ruleId2desc[t] = n, n
                        }
                    }, {
                        key: "getRule",
                        value: function(e) {
                            return this._ruleId2desc[e]
                        }
                    }, {
                        key: "getExternalGrammar",
                        value: function(e, t) {
                            if (this._includedGrammars[e]) return this._includedGrammars[e];
                            if (this._grammarRepository) {
                                var n = this._grammarRepository.lookup(e);
                                if (n) return this._includedGrammars[e] = _(n, t && t.$base), this._includedGrammars[e]
                            }
                        }
                    }, {
                        key: "tokenizeLine",
                        value: function(e, t) {
                            var n = this._tokenize(e, t, !1);
                            return {
                                tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
                                ruleStack: n.ruleStack
                            }
                        }
                    }, {
                        key: "tokenizeLine2",
                        value: function(e, t) {
                            var n = this._tokenize(e, t, !0);
                            return {
                                tokens: n.lineTokens.getBinaryResult(n.ruleStack, n.lineLength),
                                ruleStack: n.ruleStack
                            }
                        }
                    }, {
                        key: "_tokenize",
                        value: function(e, t, n) {
                            var r;
                            if (-1 === this._rootId && (this._rootId = u.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository)), t && t !== A.NULL) r = !1, t.reset();
                            else {
                                r = !0;
                                var a = this._scopeMetadataProvider.getDefaultMetadata(),
                                    i = a.themeData[0],
                                    s = T.set(0, a.languageId, a.tokenType, i.fontStyle, i.foreground, i.background),
                                    o = this.getRule(this._rootId).getName(null, null),
                                    l = this._scopeMetadataProvider.getMetadataForScope(o),
                                    c = S.mergeMetadata(s, null, l),
                                    f = new S(null, o, c);
                                t = new A(null, this._rootId, -1, null, f, f)
                            }
                            e += "\n";
                            var h = u.createOnigString(e),
                                d = u.getString(h).length,
                                p = new w(n, e, this._tokenTypeMatchers);
                            return {
                                lineLength: d,
                                lineTokens: p,
                                ruleStack: k(this, h, r, 0, t, p)
                            }
                        }
                    }]), t
                }();

                function _(e, t) {
                    return (e = o.clone(e)).repository = e.repository || {}, e.repository.$self = {
                        $vscodeTextmateLocation: e.$vscodeTextmateLocation,
                        patterns: e.patterns,
                        name: e.scopeName
                    }, e.repository.$base = t || e.repository.$self, e
                }

                function v(e, t, n, r, a, i, s) {
                    if (0 !== i.length) {
                        for (var o = Math.min(i.length, s.length), l = [], c = s[0].end, f = 0; f < o; f++) {
                            var h = i[f];
                            if (null !== h) {
                                var d = s[f];
                                if (0 !== d.length) {
                                    if (d.start > c) break;
                                    for (; l.length > 0 && l[l.length - 1].endPos <= d.start;) a.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
                                    if (l.length > 0 ? a.produceFromScopes(l[l.length - 1].scopes, d.start) : a.produce(r, d.start), h.retokenizeCapturedWithRuleId) {
                                        var p = h.getName(u.getString(t), s),
                                            m = r.contentNameScopesList.push(e, p),
                                            g = h.getContentName(u.getString(t), s),
                                            y = m.push(e, g),
                                            _ = r.push(h.retokenizeCapturedWithRuleId, d.start, null, m, y);
                                        k(e, u.createOnigString(u.getString(t).substring(0, d.end)), n && 0 === d.start, d.start, _, a)
                                    } else {
                                        var v = h.getName(u.getString(t), s);
                                        if (null !== v) {
                                            var b = (l.length > 0 ? l[l.length - 1].scopes : r.contentNameScopesList).push(e, v);
                                            l.push(new C(b, d.end))
                                        }
                                    }
                                }
                            }
                        }
                        for (; l.length > 0;) a.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop()
                    }
                }

                function b(e) {
                    for (var t = [], n = 0, r = e.rules.length; n < r; n++) t.push("   - " + e.rules[n] + ": " + e.debugRegExps[n]);
                    return t.join("\n")
                }

                function E(e, t, n, r, a, i) {
                    var s = function(e, t, n, r, a, i) {
                            var s = a.getRule(e).compile(e, a.endRule, n, r === i),
                                o = s.scanner.findNextMatchSync(t, r);
                            return c.IN_DEBUG_MODE && (console.log("  scanning for"), console.log(b(s))), o ? {
                                captureIndices: o.captureIndices,
                                matchedRuleId: s.rules[o.index]
                            } : null
                        }(e, t, n, r, a, i),
                        o = e.getInjections();
                    if (0 === o.length) return s;
                    var u = function(e, t, n, r, a, i, s) {
                        for (var o, u = Number.MAX_VALUE, l = null, f = 0, h = i.contentNameScopesList.generateScopes(), d = 0, p = e.length; d < p; d++) {
                            var m = e[d];
                            if (m.matcher(h)) {
                                var g = t.getRule(m.ruleId).compile(t, null, r, a === s),
                                    y = g.scanner.findNextMatchSync(n, a);
                                if (c.IN_DEBUG_MODE && (console.log("  scanning for injections"), console.log(b(g))), y) {
                                    var _ = y.captureIndices[0].start;
                                    if (!(_ >= u) && (u = _, l = y.captureIndices, o = g.rules[y.index], f = m.priority, u === a)) break
                                }
                            }
                        }
                        return l ? {
                            priorityMatch: -1 === f,
                            captureIndices: l,
                            matchedRuleId: o
                        } : null
                    }(o, e, t, n, r, a, i);
                    if (!u) return s;
                    if (!s) return u;
                    var l = s.captureIndices[0].start,
                        f = u.captureIndices[0].start;
                    return f < l || u.priorityMatch && f === l ? u : s
                }

                function k(e, t, n, r, a, i) {
                    var s = u.getString(t).length,
                        o = !1,
                        l = function(e, t, n, r, a, i) {
                            for (var s = -1, o = [], l = a; l; l = l.pop()) {
                                var f = l.getRule(e);
                                f instanceof u.BeginWhileRule && o.push({
                                    rule: f,
                                    stack: l
                                })
                            }
                            for (var h = o.pop(); h; h = o.pop()) {
                                var d = h.rule.compileWhile(e, h.stack.endRule, n, s === r),
                                    p = d.scanner.findNextMatchSync(t, r);
                                if (c.IN_DEBUG_MODE && (console.log("  scanning for while rule"), console.log(b(d))), !p) {
                                    a = h.stack.pop();
                                    break
                                }
                                if (-2 !== d.rules[p.index]) {
                                    a = h.stack.pop();
                                    break
                                }
                                p.captureIndices && p.captureIndices.length && (i.produce(h.stack, p.captureIndices[0].start), v(e, t, n, h.stack, i, h.rule.whileCaptures, p.captureIndices), i.produce(h.stack, p.captureIndices[0].end), s = p.captureIndices[0].end, p.captureIndices[0].end > r && (r = p.captureIndices[0].end, n = !1))
                            }
                            return {
                                stack: a,
                                linePos: r,
                                anchorPosition: s,
                                isFirstLine: n
                            }
                        }(e, t, n, r, a, i);
                    a = l.stack, r = l.linePos, n = l.isFirstLine;
                    for (var f = l.anchorPosition; !o;) h();

                    function h() {
                        c.IN_DEBUG_MODE && (console.log(""), console.log("@@scanNext: |" + u.getString(t).replace(/\n$/, "\\n").substr(r) + "|"));
                        var l = E(e, t, n, r, a, f);
                        if (!l) return c.IN_DEBUG_MODE && console.log("  no more matches."), i.produce(a, s), void(o = !0);
                        var h = l.captureIndices,
                            d = l.matchedRuleId,
                            p = !!(h && h.length > 0) && h[0].end > r;
                        if (-1 === d) {
                            var m = a.getRule(e);
                            c.IN_DEBUG_MODE && console.log("  popping " + m.debugName + " - " + m.debugEndRegExp), i.produce(a, h[0].start), a = a.setContentNameScopesList(a.nameScopesList), v(e, t, n, a, i, m.endCaptures, h), i.produce(a, h[0].end);
                            var g = a;
                            if (a = a.pop(), !p && g.getEnterPos() === r) return console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"), a = g, i.produce(a, s), void(o = !0)
                        } else {
                            var y = e.getRule(d);
                            i.produce(a, h[0].start);
                            var _ = a,
                                b = y.getName(u.getString(t), h),
                                k = a.contentNameScopesList.push(e, b);
                            if (a = a.push(d, r, null, k, k), y instanceof u.BeginEndRule) {
                                var T = y;
                                c.IN_DEBUG_MODE && console.log("  pushing " + T.debugName + " - " + T.debugBeginRegExp), v(e, t, n, a, i, T.beginCaptures, h), i.produce(a, h[0].end), f = h[0].end;
                                var S = T.getContentName(u.getString(t), h),
                                    A = k.push(e, S);
                                if (a = a.setContentNameScopesList(A), T.endHasBackReferences && (a = a.setEndRule(T.getEndWithResolvedBackReferences(u.getString(t), h))), !p && _.hasSameRuleAs(a)) return console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), a = a.pop(), i.produce(a, s), void(o = !0)
                            } else if (y instanceof u.BeginWhileRule) {
                                var C = y;
                                c.IN_DEBUG_MODE && console.log("  pushing " + C.debugName), v(e, t, n, a, i, C.beginCaptures, h), i.produce(a, h[0].end), f = h[0].end;
                                var w = C.getContentName(u.getString(t), h),
                                    R = k.push(e, w);
                                if (a = a.setContentNameScopesList(R), C.whileHasBackReferences && (a = a.setEndRule(C.getWhileWithResolvedBackReferences(u.getString(t), h))), !p && _.hasSameRuleAs(a)) return console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), a = a.pop(), i.produce(a, s), void(o = !0)
                            } else {
                                var x = y;
                                if (c.IN_DEBUG_MODE && console.log("  matched " + x.debugName + " - " + x.debugMatchRegExp), v(e, t, n, a, i, x.captures, h), i.produce(a, h[0].end), a = a.pop(), !p) return console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"), a = a.safePop(), i.produce(a, s), void(o = !0)
                            }
                        }
                        h[0].end > r && (r = h[0].end, n = !1)
                    }
                    return a
                }
                t.Grammar = y;
                var T = function() {
                    function t() {
                        (0, r.default)(this, t)
                    }
                    return (0, e.default)(t, null, [{
                        key: "toBinaryStr",
                        value: function(e) {
                            for (var t = e.toString(2); t.length < 32;) t = "0" + t;
                            return t
                        }
                    }, {
                        key: "printMetadata",
                        value: function(e) {
                            var n = t.getLanguageId(e),
                                r = t.getTokenType(e),
                                a = t.getFontStyle(e),
                                i = t.getForeground(e),
                                s = t.getBackground(e);
                            console.log({
                                languageId: n,
                                tokenType: r,
                                fontStyle: a,
                                foreground: i,
                                background: s
                            })
                        }
                    }, {
                        key: "getLanguageId",
                        value: function(e) {
                            return (255 & e) >>> 0
                        }
                    }, {
                        key: "getTokenType",
                        value: function(e) {
                            return (1792 & e) >>> 8
                        }
                    }, {
                        key: "getFontStyle",
                        value: function(e) {
                            return (14336 & e) >>> 11
                        }
                    }, {
                        key: "getForeground",
                        value: function(e) {
                            return (8372224 & e) >>> 14
                        }
                    }, {
                        key: "getBackground",
                        value: function(e) {
                            return (4286578688 & e) >>> 23
                        }
                    }, {
                        key: "set",
                        value: function(e, n, r, a, i, s) {
                            var o = t.getLanguageId(e),
                                u = t.getTokenType(e),
                                l = t.getFontStyle(e),
                                c = t.getForeground(e),
                                f = t.getBackground(e);
                            return 0 !== n && (o = n), 0 !== r && (u = 8 === r ? 0 : r), -1 !== a && (l = a), 0 !== i && (c = i), 0 !== s && (f = s), (o << 0 | u << 8 | l << 11 | c << 14 | f << 23) >>> 0
                        }
                    }]), t
                }();
                t.StackElementMetadata = T;
                var S = function() {
                    function t(e, n, a) {
                        (0, r.default)(this, t), this.parent = e, this.scope = n, this.metadata = a
                    }
                    return (0, e.default)(t, [{
                        key: "equals",
                        value: function(e) {
                            return t._equals(this, e)
                        }
                    }, {
                        key: "push",
                        value: function(e, n) {
                            return null === n ? this : n.indexOf(" ") >= 0 ? t._push(this, e, n.split(/ /g)) : t._push(this, e, [n])
                        }
                    }, {
                        key: "generateScopes",
                        value: function() {
                            return t._generateScopes(this)
                        }
                    }], [{
                        key: "_equals",
                        value: function(e, t) {
                            for (;;) {
                                if (e === t) return !0;
                                if (e.scope !== t.scope || e.metadata !== t.metadata) return !1;
                                if (e = e.parent, t = t.parent, !e && !t) return !0;
                                if (!e || !t) return !1
                            }
                        }
                    }, {
                        key: "_matchesScope",
                        value: function(e, t, n) {
                            return t === e || e.substring(0, n.length) === n
                        }
                    }, {
                        key: "_matches",
                        value: function(e, t) {
                            if (null === t) return !0;
                            for (var n = t.length, r = 0, a = t[r], i = a + "."; e;) {
                                if (this._matchesScope(e.scope, a, i)) {
                                    if (++r === n) return !0;
                                    i = (a = t[r]) + "."
                                }
                                e = e.parent
                            }
                            return !1
                        }
                    }, {
                        key: "mergeMetadata",
                        value: function(e, t, n) {
                            if (null === n) return e;
                            var r = -1,
                                a = 0,
                                i = 0;
                            if (null !== n.themeData)
                                for (var s = 0, o = n.themeData.length; s < o; s++) {
                                    var u = n.themeData[s];
                                    if (this._matches(t, u.parentScopes)) {
                                        r = u.fontStyle, a = u.foreground, i = u.background;
                                        break
                                    }
                                }
                            return T.set(e, n.languageId, n.tokenType, r, a, i)
                        }
                    }, {
                        key: "_push",
                        value: function(e, n, r) {
                            for (var a = 0, i = r.length; a < i; a++) {
                                var s = r[a],
                                    o = n.getMetadataForScope(s),
                                    u = t.mergeMetadata(e.metadata, e, o);
                                e = new t(e, s, u)
                            }
                            return e
                        }
                    }, {
                        key: "_generateScopes",
                        value: function(e) {
                            for (var t = [], n = 0; e;) t[n++] = e.scope, e = e.parent;
                            return t.reverse(), t
                        }
                    }]), t
                }();
                t.ScopeListElement = S;
                var A = function() {
                    function t(e, n, a, i, s, o) {
                        (0, r.default)(this, t), this.parent = e, this.depth = this.parent ? this.parent.depth + 1 : 1, this.ruleId = n, this._enterPos = a, this.endRule = i, this.nameScopesList = s, this.contentNameScopesList = o
                    }
                    return (0, e.default)(t, [{
                        key: "clone",
                        value: function() {
                            return this
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return null !== e && t._equals(this, e)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            t._reset(this)
                        }
                    }, {
                        key: "pop",
                        value: function() {
                            return this.parent
                        }
                    }, {
                        key: "safePop",
                        value: function() {
                            return this.parent ? this.parent : this
                        }
                    }, {
                        key: "push",
                        value: function(e, n, r, a, i) {
                            return new t(this, e, n, r, a, i)
                        }
                    }, {
                        key: "getEnterPos",
                        value: function() {
                            return this._enterPos
                        }
                    }, {
                        key: "getRule",
                        value: function(e) {
                            return e.getRule(this.ruleId)
                        }
                    }, {
                        key: "_writeString",
                        value: function(e, t) {
                            return this.parent && (t = this.parent._writeString(e, t)), e[t++] = "(".concat(this.ruleId, ", TODO-").concat(this.nameScopesList, ", TODO-").concat(this.contentNameScopesList, ")"), t
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e = [];
                            return this._writeString(e, 0), "[" + e.join(",") + "]"
                        }
                    }, {
                        key: "setContentNameScopesList",
                        value: function(e) {
                            return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this.endRule, this.nameScopesList, e)
                        }
                    }, {
                        key: "setEndRule",
                        value: function(e) {
                            return this.endRule === e ? this : new t(this.parent, this.ruleId, this._enterPos, e, this.nameScopesList, this.contentNameScopesList)
                        }
                    }, {
                        key: "hasSameRuleAs",
                        value: function(e) {
                            return this.ruleId === e.ruleId
                        }
                    }], [{
                        key: "_structuralEquals",
                        value: function(e, t) {
                            for (;;) {
                                if (e === t) return !0;
                                if (e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule) return !1;
                                if (e = e.parent, t = t.parent, !e && !t) return !0;
                                if (!e || !t) return !1
                            }
                        }
                    }, {
                        key: "_equals",
                        value: function(e, t) {
                            return e === t || !!this._structuralEquals(e, t) && e.contentNameScopesList.equals(t.contentNameScopesList)
                        }
                    }, {
                        key: "_reset",
                        value: function(e) {
                            for (; e;) e._enterPos = -1, e = e.parent
                        }
                    }]), t
                }();
                A.NULL = new A(null, 0, 0, null, null, null), t.StackElement = A;
                var C = function e(t, n) {
                    (0, r.default)(this, e), this.scopes = t, this.endPos = n
                };
                t.LocalStackElement = C;
                var w = function() {
                    function t(e, n, a) {
                        (0, r.default)(this, t), this._emitBinaryTokens = e, this._tokenTypeOverrides = a, c.IN_DEBUG_MODE && (this._lineText = n), this._emitBinaryTokens ? this._binaryTokens = [] : this._tokens = [], this._lastTokenEndIndex = 0
                    }
                    return (0, e.default)(t, [{
                        key: "produce",
                        value: function(e, t) {
                            this.produceFromScopes(e.contentNameScopesList, t)
                        }
                    }, {
                        key: "produceFromScopes",
                        value: function(e, t) {
                            if (!(this._lastTokenEndIndex >= t)) {
                                if (this._emitBinaryTokens) {
                                    var n, r = e.metadata,
                                        a = i(this._tokenTypeOverrides);
                                    try {
                                        for (a.s(); !(n = a.n()).done;) {
                                            var s = n.value;
                                            s.matcher(e.generateScopes()) && (r = T.set(r, 0, R(s.type), -1, 0, 0))
                                        }
                                    } catch (l) {
                                        a.e(l)
                                    } finally {
                                        a.f()
                                    }
                                    return this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === r || (this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(r)), void(this._lastTokenEndIndex = t)
                                }
                                var o = e.generateScopes();
                                if (c.IN_DEBUG_MODE) {
                                    console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, "\\n") + "|");
                                    for (var u = 0; u < o.length; u++) console.log("      * " + o[u])
                                }
                                this._tokens.push({
                                    startIndex: this._lastTokenEndIndex,
                                    endIndex: t,
                                    scopes: o
                                }), this._lastTokenEndIndex = t
                            }
                        }
                    }, {
                        key: "getResult",
                        value: function(e, t) {
                            return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(), 0 === this._tokens.length && (this._lastTokenEndIndex = -1, this.produce(e, t), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens
                        }
                    }, {
                        key: "getBinaryResult",
                        value: function(e, t) {
                            this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), 0 === this._binaryTokens.length && (this._lastTokenEndIndex = -1, this.produce(e, t), this._binaryTokens[this._binaryTokens.length - 2] = 0);
                            for (var n = new Uint32Array(this._binaryTokens.length), r = 0, a = this._binaryTokens.length; r < a; r++) n[r] = this._binaryTokens[r];
                            return n
                        }
                    }]), t
                }();

                function R(e) {
                    switch (e) {
                        case 4:
                            return 4;
                        case 2:
                            return 2;
                        case 1:
                            return 1;
                        case 0:
                        default:
                            return 8
                    }
                }
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/grammarReader.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [], void 0 === (i = "function" === typeof(r = function() {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var e = n("../../node_modules/fast-plist/release/src/main.js"),
                    r = n("../../node_modules/monaco-textmate/dist/debug.js"),
                    a = n("../../node_modules/monaco-textmate/dist/json.js");
                t.parseJSONGrammar = function(e, t) {
                    return r.CAPTURE_METADATA ? a.parse(e, t, !0) : JSON.parse(e)
                }, t.parsePLISTGrammar = function(t, n) {
                    return r.CAPTURE_METADATA ? e.parseWithLocation(t, n, "$vscodeTextmateLocation") : e.parse(t)
                }
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/json.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/createClass.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

                function i(e, t) {
                    throw new Error("Near offset " + e.pos + ": " + t + " ~~~" + e.source.substr(e.pos, 50) + "~~~")
                }
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.parse = function(e, t, n) {
                    var r = new s(e),
                        a = new o,
                        l = 0,
                        c = null,
                        f = [],
                        h = [];

                    function d() {
                        f.push(l), h.push(c)
                    }

                    function p() {
                        l = f.pop(), c = h.pop()
                    }

                    function m(e) {
                        i(r, e)
                    }
                    for (; u(r, a);) {
                        if (0 === l) {
                            if (null !== c && m("too many constructs in root"), 3 === a.type) {
                                c = {}, n && (c.$vscodeTextmateLocation = a.toLocation(t)), d(), l = 1;
                                continue
                            }
                            if (2 === a.type) {
                                c = [], d(), l = 4;
                                continue
                            }
                            m("unexpected token in root")
                        }
                        if (2 === l) {
                            if (5 === a.type) {
                                p();
                                continue
                            }
                            if (7 === a.type) {
                                l = 3;
                                continue
                            }
                            m("expected , or }")
                        }
                        if (1 === l || 3 === l) {
                            if (1 === l && 5 === a.type) {
                                p();
                                continue
                            }
                            if (1 === a.type) {
                                var g = a.value;
                                if (u(r, a) && 6 === a.type || m("expected colon"), u(r, a) || m("expected value"), l = 2, 1 === a.type) {
                                    c[g] = a.value;
                                    continue
                                }
                                if (8 === a.type) {
                                    c[g] = null;
                                    continue
                                }
                                if (9 === a.type) {
                                    c[g] = !0;
                                    continue
                                }
                                if (10 === a.type) {
                                    c[g] = !1;
                                    continue
                                }
                                if (11 === a.type) {
                                    c[g] = parseFloat(a.value);
                                    continue
                                }
                                if (2 === a.type) {
                                    var y = [];
                                    c[g] = y, d(), l = 4, c = y;
                                    continue
                                }
                                if (3 === a.type) {
                                    var _ = {};
                                    n && (_.$vscodeTextmateLocation = a.toLocation(t)), c[g] = _, d(), l = 1, c = _;
                                    continue
                                }
                            }
                            m("unexpected token in dict")
                        }
                        if (5 === l) {
                            if (4 === a.type) {
                                p();
                                continue
                            }
                            if (7 === a.type) {
                                l = 6;
                                continue
                            }
                            m("expected , or ]")
                        }
                        if (4 === l || 6 === l) {
                            if (4 === l && 4 === a.type) {
                                p();
                                continue
                            }
                            if (l = 5, 1 === a.type) {
                                c.push(a.value);
                                continue
                            }
                            if (8 === a.type) {
                                c.push(null);
                                continue
                            }
                            if (9 === a.type) {
                                c.push(!0);
                                continue
                            }
                            if (10 === a.type) {
                                c.push(!1);
                                continue
                            }
                            if (11 === a.type) {
                                c.push(parseFloat(a.value));
                                continue
                            }
                            if (2 === a.type) {
                                var v = [];
                                c.push(v), d(), l = 4, c = v;
                                continue
                            }
                            if (3 === a.type) {
                                var b = {};
                                n && (b.$vscodeTextmateLocation = a.toLocation(t)), c.push(b), d(), l = 1, c = b;
                                continue
                            }
                            m("unexpected token in array")
                        }
                        m("unknown state")
                    }
                    return 0 !== h.length && m("unclosed constructs"), c
                };
                var s = function e(t) {
                        (0, r.default)(this, e), this.source = t, this.pos = 0, this.len = t.length, this.line = 1, this.char = 0
                    },
                    o = function() {
                        function t() {
                            (0, r.default)(this, t), this.value = null, this.offset = -1, this.len = -1, this.line = -1, this.char = -1
                        }
                        return (0, e.default)(t, [{
                            key: "toLocation",
                            value: function(e) {
                                return {
                                    filename: e,
                                    line: this.line,
                                    char: this.char
                                }
                            }
                        }]), t
                    }();

                function u(e, t) {
                    t.value = null, t.type = 0, t.offset = -1, t.len = -1, t.line = -1, t.char = -1;
                    for (var n, r = e.source, a = e.pos, s = e.len, o = e.line, u = e.char;;) {
                        if (a >= s) return !1;
                        if (32 !== (n = r.charCodeAt(a)) && 9 !== n && 13 !== n) {
                            if (10 !== n) break;
                            a++, o++, u = 0
                        } else a++, u++
                    }
                    if (t.offset = a, t.line = o, t.char = u, 34 === n) {
                        for (t.type = 1, a++, u++;;) {
                            if (a >= s) return !1;
                            if (n = r.charCodeAt(a), a++, u++, 92 !== n) {
                                if (34 === n) break
                            } else a++, u++
                        }
                        t.value = r.substring(t.offset + 1, a - 1).replace(/\\u([0-9A-Fa-f]{4})/g, (function(e, t) {
                            return String.fromCodePoint(parseInt(t, 16))
                        })).replace(/\\(.)/g, (function(t, n) {
                            switch (n) {
                                case '"':
                                    return '"';
                                case "\\":
                                    return "\\";
                                case "/":
                                    return "/";
                                case "b":
                                    return "\b";
                                case "f":
                                    return "\f";
                                case "n":
                                    return "\n";
                                case "r":
                                    return "\r";
                                case "t":
                                    return "\t";
                                default:
                                    i(e, "invalid escape sequence")
                            }
                        }))
                    } else if (91 === n) t.type = 2, a++, u++;
                    else if (123 === n) t.type = 3, a++, u++;
                    else if (93 === n) t.type = 4, a++, u++;
                    else if (125 === n) t.type = 5, a++, u++;
                    else if (58 === n) t.type = 6, a++, u++;
                    else if (44 === n) t.type = 7, a++, u++;
                    else if (110 === n) {
                        if (t.type = 8, a++, u++, 117 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 108 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 108 !== (n = r.charCodeAt(a))) return !1;
                        a++, u++
                    } else if (116 === n) {
                        if (t.type = 9, a++, u++, 114 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 117 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 101 !== (n = r.charCodeAt(a))) return !1;
                        a++, u++
                    } else if (102 === n) {
                        if (t.type = 10, a++, u++, 97 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 108 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 115 !== (n = r.charCodeAt(a))) return !1;
                        if (a++, u++, 101 !== (n = r.charCodeAt(a))) return !1;
                        a++, u++
                    } else
                        for (t.type = 11;;) {
                            if (a >= s) return !1;
                            if (!(46 === (n = r.charCodeAt(a)) || n >= 48 && n <= 57 || 101 === n || 69 === n || 45 === n || 43 === n)) break;
                            a++, u++
                        }
                    return t.len = a - t.offset, null === t.value && (t.value = r.substr(t.offset, t.len)), e.pos = a, e.line = o, e.char = u, !0
                }
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/main.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/typeof.js"), n("../../node_modules/@babel/runtime/regenerator/index.js"), n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r, a, i, s) {
                "use strict";
                var o = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = o(e), r = o(r), a = o(a), i = o(i), s = o(s), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = n("../../node_modules/monaco-textmate/dist/registry.js"),
                    l = n("../../node_modules/monaco-textmate/dist/grammarReader.js"),
                    c = n("../../node_modules/monaco-textmate/dist/theme.js"),
                    f = n("../../node_modules/monaco-textmate/dist/grammar.js"),
                    h = {
                        getGrammarDefinition: function(e) {
                            return null
                        },
                        getInjections: function(e) {
                            return null
                        }
                    },
                    d = function() {
                        function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
                            (0, i.default)(this, t), this._locator = e, this._syncRegistry = new u.SyncRegistry(c.Theme.createFromRawTheme(e.theme)), this.installationQueue = new Map
                        }
                        return (0, s.default)(t, [{
                            key: "setTheme",
                            value: function(e) {
                                this._syncRegistry.setTheme(c.Theme.createFromRawTheme(e))
                            }
                        }, {
                            key: "getColorMap",
                            value: function() {
                                return this._syncRegistry.getColorMap()
                            }
                        }, {
                            key: "loadGrammarWithEmbeddedLanguages",
                            value: function(e, t, n) {
                                return this.loadGrammarWithConfiguration(e, t, {
                                    embeddedLanguages: n
                                })
                            }
                        }, {
                            key: "loadGrammarWithConfiguration",
                            value: function() {
                                var e = (0, a.default)(r.default.mark((function e(t, n, a) {
                                    return r.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this._loadGrammar(t);
                                            case 2:
                                                return e.abrupt("return", this.grammarForScopeName(t, n, a.embeddedLanguages, a.tokenTypes));
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, n, r) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "loadGrammar",
                            value: function() {
                                var e = (0, a.default)(r.default.mark((function e(t) {
                                    return r.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", this._loadGrammar(t));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_loadGrammar",
                            value: function() {
                                var t = (0, a.default)(r.default.mark((function t(n) {
                                    var i, s, o = this,
                                        u = arguments;
                                    return r.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (i = u.length > 1 && void 0 !== u[1] ? u[1] : null, !this._syncRegistry.lookup(n)) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return", this.grammarForScopeName(n));
                                            case 3:
                                                if (!this.installationQueue.has(n)) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.abrupt("return", this.installationQueue.get(n));
                                            case 5:
                                                return s = new Promise(function() {
                                                    var t = (0, a.default)(r.default.mark((function t(s, u) {
                                                        var c, f, h, d;
                                                        return r.default.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, o._locator.getGrammarDefinition(n, i);
                                                                case 2:
                                                                    if (c = t.sent) {
                                                                        t.next = 5;
                                                                        break
                                                                    }
                                                                    throw new Error("A tmGrammar load was requested but registry host failed to provide grammar definition");
                                                                case 5:
                                                                    if (!("json" !== c.format && "plist" !== c.format || "json" === c.format && "object" !== (0, e.default)(c.content) && "string" !== typeof c.content || "plist" === c.format && "string" !== typeof c.content)) {
                                                                        t.next = 7;
                                                                        break
                                                                    }
                                                                    throw new TypeError('Grammar definition must be an object, either `{ content: string | object, format: "json" }` OR `{ content: string, format: "plist" }`)');
                                                                case 7:
                                                                    return f = "json" === c.format ? "string" === typeof c.content ? l.parseJSONGrammar(c.content, "c://fakepath/grammar.json") : c.content : l.parsePLISTGrammar(c.content, "c://fakepath/grammar.plist"), h = "function" === typeof o._locator.getInjections && o._locator.getInjections(n), f.scopeName = n, d = o._syncRegistry.addGrammar(f, h), t.next = 13, Promise.all(d.map(function() {
                                                                        var e = (0, a.default)(r.default.mark((function e(t) {
                                                                            return r.default.wrap((function(e) {
                                                                                for (;;) switch (e.prev = e.next) {
                                                                                    case 0:
                                                                                        return e.prev = 0, e.abrupt("return", o._loadGrammar(t, n));
                                                                                    case 4:
                                                                                        throw e.prev = 4, e.t0 = e.catch(0), new Error("While trying to load tmGrammar with scopeId: '".concat(n, "', it's dependency (scopeId: ").concat(t, ") loading errored: ").concat(e.t0.message));
                                                                                    case 7:
                                                                                    case "end":
                                                                                        return e.stop()
                                                                                }
                                                                            }), e, null, [
                                                                                [0, 4]
                                                                            ])
                                                                        })));
                                                                        return function(t) {
                                                                            return e.apply(this, arguments)
                                                                        }
                                                                    }()));
                                                                case 13:
                                                                    s(o.grammarForScopeName(n));
                                                                case 14:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()), this.installationQueue.set(n, s), t.next = 9, s;
                                            case 9:
                                                return this.installationQueue.delete(n), t.abrupt("return", s);
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "grammarForScopeName",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                return this._syncRegistry.grammarForScopeName(e, t, n, r)
                            }
                        }]), t
                    }();
                t.Registry = d, t.INITIAL = f.StackElement.NULL
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/matcher.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [], void 0 === (i = "function" === typeof(r = function() {
                "use strict";

                function e(e) {
                    return e && e.match(/[\w\.:]+/)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createMatchers = function(t, n) {
                    for (var r = [], a = function(e) {
                            var t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
                                n = t.exec(e);
                            return {
                                next: function() {
                                    if (!n) return null;
                                    var r = n[0];
                                    return n = t.exec(e), r
                                }
                            }
                        }(t), i = a.next(); null !== i;) {
                        var s = 0;
                        if (2 === i.length && ":" === i.charAt(1)) {
                            switch (i.charAt(0)) {
                                case "R":
                                    s = 1;
                                    break;
                                case "L":
                                    s = -1;
                                    break;
                                default:
                                    console.log("Unknown priority ".concat(i, " in scope selector"))
                            }
                            i = a.next()
                        }
                        var o = l();
                        if (o && r.push({
                                matcher: o,
                                priority: s
                            }), "," !== i) break;
                        i = a.next()
                    }
                    return r;

                    function u() {
                        if ("-" === i) {
                            i = a.next();
                            var t = u();
                            return function(e) {
                                return t && !t(e)
                            }
                        }
                        if ("(" === i) {
                            i = a.next();
                            var r = function() {
                                for (var e = [], t = l(); t && (e.push(t), "|" === i || "," === i);) {
                                    do {
                                        i = a.next()
                                    } while ("|" === i || "," === i);
                                    t = l()
                                }
                                return function(t) {
                                    return e.some((function(e) {
                                        return e(t)
                                    }))
                                }
                            }();
                            return ")" === i && (i = a.next()), r
                        }
                        if (e(i)) {
                            var s = [];
                            do {
                                s.push(i), i = a.next()
                            } while (e(i));
                            return function(e) {
                                return n(s, e)
                            }
                        }
                        return null
                    }

                    function l() {
                        for (var e = [], t = u(); t;) e.push(t), t = u();
                        return function(t) {
                            return e.every((function(e) {
                                return e(t)
                            }))
                        }
                    }
                }
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/registry.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("../../node_modules/monaco-textmate/dist/grammar.js"),
                    s = function() {
                        function t(n) {
                            (0, e.default)(this, t), this._theme = n, this._grammars = {}, this._rawGrammars = {}, this._injectionGrammars = {}
                        }
                        return (0, r.default)(t, [{
                            key: "setTheme",
                            value: function(e) {
                                var t = this;
                                this._theme = e, Object.keys(this._grammars).forEach((function(e) {
                                    t._grammars[e].onDidChangeTheme()
                                }))
                            }
                        }, {
                            key: "getColorMap",
                            value: function() {
                                return this._theme.getColorMap()
                            }
                        }, {
                            key: "addGrammar",
                            value: function(e, t) {
                                this._rawGrammars[e.scopeName] = e;
                                var n = {};
                                return i.collectIncludedScopes(n, e), t && (this._injectionGrammars[e.scopeName] = t, t.forEach((function(e) {
                                    n[e] = !0
                                }))), Object.keys(n)
                            }
                        }, {
                            key: "lookup",
                            value: function(e) {
                                return this._rawGrammars[e]
                            }
                        }, {
                            key: "injections",
                            value: function(e) {
                                return this._injectionGrammars[e]
                            }
                        }, {
                            key: "getDefaults",
                            value: function() {
                                return this._theme.getDefaults()
                            }
                        }, {
                            key: "themeMatch",
                            value: function(e) {
                                return this._theme.match(e)
                            }
                        }, {
                            key: "grammarForScopeName",
                            value: function(e, t, n, r) {
                                if (!this._grammars[e]) {
                                    var a = this._rawGrammars[e];
                                    if (!a) return null;
                                    this._grammars[e] = i.createGrammar(a, t, n, r, this)
                                }
                                return this._grammars[e]
                            }
                        }]), t
                    }();
                t.SyncRegistry = s
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/rule.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/inherits.js"), n("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), n("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r, a, i, s) {
                "use strict";
                var o = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

                function u(e) {
                    var t = function() {
                        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, i = (0, a.default)(e);
                        if (t) {
                            var s = (0, a.default)(this).constructor;
                            n = Reflect.construct(i, arguments, s)
                        } else n = i.apply(this, arguments);
                        return (0, r.default)(this, n)
                    }
                }
                e = o(e), r = o(r), a = o(a), i = o(i), s = o(s), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l = n("../../node_modules/path-browserify/index.js"),
                    c = n("../../node_modules/monaco-textmate/dist/utils.js"),
                    f = n("../../node_modules/onigasm/lib/index.js"),
                    h = /\\(\d+)/,
                    d = /\\(\d+)/g,
                    p = function() {
                        function e(t, n, r, a) {
                            (0, i.default)(this, e), this.$location = t, this.id = n, this._name = r || null, this._nameIsCapturing = c.RegexSource.hasCaptures(this._name), this._contentName = a || null, this._contentNameIsCapturing = c.RegexSource.hasCaptures(this._contentName)
                        }
                        return (0, s.default)(e, [{
                            key: "getName",
                            value: function(e, t) {
                                return this._nameIsCapturing ? c.RegexSource.replaceCaptures(this._name, e, t) : this._name
                            }
                        }, {
                            key: "getContentName",
                            value: function(e, t) {
                                return this._contentNameIsCapturing ? c.RegexSource.replaceCaptures(this._contentName, e, t) : this._contentName
                            }
                        }, {
                            key: "collectPatternsRecursive",
                            value: function(e, t, n) {
                                throw new Error("Implement me!")
                            }
                        }, {
                            key: "compile",
                            value: function(e, t, n, r) {
                                throw new Error("Implement me!")
                            }
                        }, {
                            key: "debugName",
                            get: function() {
                                return "".concat(this.constructor.name, "#").concat(this.id, " @ ").concat(l.basename(this.$location.filename), ":").concat(this.$location.line)
                            }
                        }]), e
                    }();
                t.Rule = p;
                var m = function(t) {
                    (0, e.default)(r, t);
                    var n = u(r);

                    function r(e, t, a, s, o) {
                        var u;
                        return (0, i.default)(this, r), (u = n.call(this, e, t, a, s)).retokenizeCapturedWithRuleId = o, u
                    }
                    return r
                }(p);
                t.CaptureRule = m;
                var g = function() {
                    function e(t, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        (0, i.default)(this, e), r ? this._handleAnchors(t) : (this.source = t, this.hasAnchor = !1), this.hasAnchor && (this._anchorCache = this._buildAnchorCache()), this.ruleId = n, this.hasBackReferences = h.test(this.source)
                    }
                    return (0, s.default)(e, [{
                        key: "clone",
                        value: function() {
                            return new e(this.source, this.ruleId, !0)
                        }
                    }, {
                        key: "setSource",
                        value: function(e) {
                            this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()))
                        }
                    }, {
                        key: "_handleAnchors",
                        value: function(e) {
                            if (e) {
                                var t, n, r, a = 0,
                                    i = [],
                                    s = !1;
                                for (t = 0, n = e.length; t < n; t++) "\\" === e.charAt(t) && t + 1 < n && ("z" === (r = e.charAt(t + 1)) ? (i.push(e.substring(a, t)), i.push("$(?!\\n)(?<!\\n)"), a = t + 2) : "A" !== r && "G" !== r || (s = !0), t++);
                                this.hasAnchor = s, 0 === a ? this.source = e : (i.push(e.substring(a, n)), this.source = i.join(""))
                            } else this.hasAnchor = !1, this.source = e
                        }
                    }, {
                        key: "resolveBackReferences",
                        value: function(e, t) {
                            var n = t.map((function(t) {
                                return e.substring(t.start, t.end)
                            }));
                            return d.lastIndex = 0, this.source.replace(d, (function(e, t) {
                                return (n[parseInt(t, 10)] || "").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
                            }))
                        }
                    }, {
                        key: "_buildAnchorCache",
                        value: function() {
                            var e, t, n, r, a = [],
                                i = [],
                                s = [],
                                o = [];
                            for (e = 0, t = this.source.length; e < t; e++) n = this.source.charAt(e), a[e] = n, i[e] = n, s[e] = n, o[e] = n, "\\" === n && e + 1 < t && ("A" === (r = this.source.charAt(e + 1)) ? (a[e + 1] = "\uffff", i[e + 1] = "\uffff", s[e + 1] = "A", o[e + 1] = "A") : "G" === r ? (a[e + 1] = "\uffff", i[e + 1] = "G", s[e + 1] = "\uffff", o[e + 1] = "G") : (a[e + 1] = r, i[e + 1] = r, s[e + 1] = r, o[e + 1] = r), e++);
                            return {
                                A0_G0: a.join(""),
                                A0_G1: i.join(""),
                                A1_G0: s.join(""),
                                A1_G1: o.join("")
                            }
                        }
                    }, {
                        key: "resolveAnchors",
                        value: function(e, t) {
                            return this.hasAnchor ? e ? t ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0 : this.source
                        }
                    }]), e
                }();

                function y(e) {
                    return new f.OnigScanner(e)
                }
                t.RegExpSource = g, t.createOnigString = function(e) {
                    var t = new f.OnigString(e);
                    return t.$str = e, t
                }, t.getString = function(e) {
                    return e.$str
                };
                var _ = function() {
                    function e() {
                        (0, i.default)(this, e), this._items = [], this._hasAnchors = !1, this._cached = null, this._cachedSources = null, this._anchorCache = {
                            A0_G0: null,
                            A0_G1: null,
                            A1_G0: null,
                            A1_G1: null
                        }
                    }
                    return (0, s.default)(e, [{
                        key: "push",
                        value: function(e) {
                            this._items.push(e), this._hasAnchors = this._hasAnchors || e.hasAnchor
                        }
                    }, {
                        key: "unshift",
                        value: function(e) {
                            this._items.unshift(e), this._hasAnchors = this._hasAnchors || e.hasAnchor
                        }
                    }, {
                        key: "length",
                        value: function() {
                            return this._items.length
                        }
                    }, {
                        key: "setSource",
                        value: function(e, t) {
                            this._items[e].source !== t && (this._cached = null, this._anchorCache.A0_G0 = null, this._anchorCache.A0_G1 = null, this._anchorCache.A1_G0 = null, this._anchorCache.A1_G1 = null, this._items[e].setSource(t))
                        }
                    }, {
                        key: "compile",
                        value: function(e, t, n) {
                            if (this._hasAnchors) return this._anchorCache = {
                                A0_G0: this._anchorCache.A0_G0 || (!1 === t && !1 === n ? this._resolveAnchors(t, n) : null),
                                A0_G1: this._anchorCache.A0_G1 || (!1 === t && !0 === n ? this._resolveAnchors(t, n) : null),
                                A1_G0: this._anchorCache.A1_G0 || (!0 === t && !1 === n ? this._resolveAnchors(t, n) : null),
                                A1_G1: this._anchorCache.A1_G1 || (!0 === t && !0 === n ? this._resolveAnchors(t, n) : null)
                            }, t ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
                            if (!this._cached) {
                                var r = this._items.map((function(e) {
                                    return e.source
                                }));
                                this._cached = {
                                    scanner: y(r),
                                    rules: this._items.map((function(e) {
                                        return e.ruleId
                                    })),
                                    debugRegExps: r
                                }
                            }
                            return this._cached
                        }
                    }, {
                        key: "_resolveAnchors",
                        value: function(e, t) {
                            var n = this._items.map((function(n) {
                                return n.resolveAnchors(e, t)
                            }));
                            return {
                                scanner: y(n),
                                rules: this._items.map((function(e) {
                                    return e.ruleId
                                })),
                                debugRegExps: n
                            }
                        }
                    }]), e
                }();
                t.RegExpSourceList = _;
                var v = function(t) {
                    (0, e.default)(r, t);
                    var n = u(r);

                    function r(e, t, a, s, o) {
                        var u;
                        return (0, i.default)(this, r), (u = n.call(this, e, t, a, null))._match = new g(s, u.id), u.captures = o, u._cachedCompiledPatterns = null, u
                    }
                    return (0, s.default)(r, [{
                        key: "collectPatternsRecursive",
                        value: function(e, t, n) {
                            t.push(this._match)
                        }
                    }, {
                        key: "compile",
                        value: function(e, t, n, r) {
                            return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new _, this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)), this._cachedCompiledPatterns.compile(e, n, r)
                        }
                    }, {
                        key: "debugMatchRegExp",
                        get: function() {
                            return "".concat(this._match.source)
                        }
                    }]), r
                }(p);
                t.MatchRule = v;
                var b = function(t) {
                    (0, e.default)(r, t);
                    var n = u(r);

                    function r(e, t, a, s, o) {
                        var u;
                        return (0, i.default)(this, r), (u = n.call(this, e, t, a, s)).patterns = o.patterns, u.hasMissingPatterns = o.hasMissingPatterns, u._cachedCompiledPatterns = null, u
                    }
                    return (0, s.default)(r, [{
                        key: "collectPatternsRecursive",
                        value: function(e, t, n) {
                            var r, a;
                            for (r = 0, a = this.patterns.length; r < a; r++) e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1)
                        }
                    }, {
                        key: "compile",
                        value: function(e, t, n, r) {
                            return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new _, this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)), this._cachedCompiledPatterns.compile(e, n, r)
                        }
                    }]), r
                }(p);
                t.IncludeOnlyRule = b;
                var E = function(t) {
                    (0, e.default)(r, t);
                    var n = u(r);

                    function r(e, t, a, s, o, u, l, c, f, h) {
                        var d;
                        return (0, i.default)(this, r), (d = n.call(this, e, t, a, s))._begin = new g(o, d.id), d.beginCaptures = u, d._end = new g(l, -1), d.endHasBackReferences = d._end.hasBackReferences, d.endCaptures = c, d.applyEndPatternLast = f || !1, d.patterns = h.patterns, d.hasMissingPatterns = h.hasMissingPatterns, d._cachedCompiledPatterns = null, d
                    }
                    return (0, s.default)(r, [{
                        key: "getEndWithResolvedBackReferences",
                        value: function(e, t) {
                            return this._end.resolveBackReferences(e, t)
                        }
                    }, {
                        key: "collectPatternsRecursive",
                        value: function(e, t, n) {
                            var r, a;
                            if (n)
                                for (r = 0, a = this.patterns.length; r < a; r++) e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1);
                            else t.push(this._begin)
                        }
                    }, {
                        key: "compile",
                        value: function(e, t, n, r) {
                            var a = this._precompile(e);
                            return this._end.hasBackReferences && (this.applyEndPatternLast ? a.setSource(a.length() - 1, t) : a.setSource(0, t)), this._cachedCompiledPatterns.compile(e, n, r)
                        }
                    }, {
                        key: "_precompile",
                        value: function(e) {
                            return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new _, this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0), this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end)), this._cachedCompiledPatterns
                        }
                    }, {
                        key: "debugBeginRegExp",
                        get: function() {
                            return "".concat(this._begin.source)
                        }
                    }, {
                        key: "debugEndRegExp",
                        get: function() {
                            return "".concat(this._end.source)
                        }
                    }]), r
                }(p);
                t.BeginEndRule = E;
                var k = function(t) {
                    (0, e.default)(r, t);
                    var n = u(r);

                    function r(e, t, a, s, o, u, l, c, f) {
                        var h;
                        return (0, i.default)(this, r), (h = n.call(this, e, t, a, s))._begin = new g(o, h.id), h.beginCaptures = u, h.whileCaptures = c, h._while = new g(l, -2), h.whileHasBackReferences = h._while.hasBackReferences, h.patterns = f.patterns, h.hasMissingPatterns = f.hasMissingPatterns, h._cachedCompiledPatterns = null, h._cachedCompiledWhilePatterns = null, h
                    }
                    return (0, s.default)(r, [{
                        key: "getWhileWithResolvedBackReferences",
                        value: function(e, t) {
                            return this._while.resolveBackReferences(e, t)
                        }
                    }, {
                        key: "collectPatternsRecursive",
                        value: function(e, t, n) {
                            var r, a;
                            if (n)
                                for (r = 0, a = this.patterns.length; r < a; r++) e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1);
                            else t.push(this._begin)
                        }
                    }, {
                        key: "compile",
                        value: function(e, t, n, r) {
                            return this._precompile(e), this._cachedCompiledPatterns.compile(e, n, r)
                        }
                    }, {
                        key: "_precompile",
                        value: function(e) {
                            this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new _, this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0))
                        }
                    }, {
                        key: "compileWhile",
                        value: function(e, t, n, r) {
                            return this._precompileWhile(e), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t), this._cachedCompiledWhilePatterns.compile(e, n, r)
                        }
                    }, {
                        key: "_precompileWhile",
                        value: function(e) {
                            this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new _, this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while))
                        }
                    }]), r
                }(p);
                t.BeginWhileRule = k;
                var T = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, s.default)(e, null, [{
                        key: "createCaptureRule",
                        value: function(e, t, n, r, a) {
                            return e.registerRule((function(e) {
                                return new m(t, e, n, r, a)
                            }))
                        }
                    }, {
                        key: "getCompiledRuleId",
                        value: function(t, n, r) {
                            return t.id || n.registerRule((function(a) {
                                return t.id = a, t.match ? new v(t.$vscodeTextmateLocation, t.id, t.name, t.match, e._compileCaptures(t.captures, n, r)) : t.begin ? t.while ? new k(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.while, e._compileCaptures(t.whileCaptures || t.captures, n, r), e._compilePatterns(t.patterns, n, r)) : new E(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.end, e._compileCaptures(t.endCaptures || t.captures, n, r), t.applyEndPatternLast, e._compilePatterns(t.patterns, n, r)) : (t.repository && (r = c.mergeObjects({}, r, t.repository)), new b(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, e._compilePatterns(t.patterns, n, r)))
                            })), t.id
                        }
                    }, {
                        key: "_compileCaptures",
                        value: function(t, n, r) {
                            var a, i, s, o, u = [];
                            if (t) {
                                for (o in i = 0, t) "$vscodeTextmateLocation" !== o && (a = parseInt(o, 10)) > i && (i = a);
                                for (s = 0; s <= i; s++) u[s] = null;
                                for (o in t)
                                    if ("$vscodeTextmateLocation" !== o) {
                                        a = parseInt(o, 10);
                                        var l = 0;
                                        t[o].patterns && (l = e.getCompiledRuleId(t[o], n, r)), u[a] = e.createCaptureRule(n, t[o].$vscodeTextmateLocation, t[o].name, t[o].contentName, l)
                                    }
                            }
                            return u
                        }
                    }, {
                        key: "_compilePatterns",
                        value: function(t, n, r) {
                            var a, i, s, o, u, l, c, f = [];
                            if (t)
                                for (i = 0, s = t.length; i < s; i++) {
                                    if (o = -1, (a = t[i]).include)
                                        if ("#" === a.include.charAt(0)) {
                                            var h = r[a.include.substr(1)];
                                            h && (o = e.getCompiledRuleId(h, n, r))
                                        } else if ("$base" === a.include || "$self" === a.include) o = e.getCompiledRuleId(r[a.include], n, r);
                                    else {
                                        var d = null,
                                            p = null,
                                            m = a.include.indexOf("#");
                                        if (m >= 0 ? (d = a.include.substring(0, m), p = a.include.substring(m + 1)) : d = a.include, u = n.getExternalGrammar(d, r))
                                            if (p) {
                                                var g = u.repository[p];
                                                g && (o = e.getCompiledRuleId(g, n, u.repository))
                                            } else o = e.getCompiledRuleId(u.repository.$self, n, u.repository)
                                    } else o = e.getCompiledRuleId(a, n, r);
                                    if (-1 !== o) {
                                        if (c = !1, ((l = n.getRule(o)) instanceof b || l instanceof E || l instanceof k) && l.hasMissingPatterns && 0 === l.patterns.length && (c = !0), c) continue;
                                        f.push(o)
                                    }
                                }
                            return {
                                patterns: f,
                                hasMissingPatterns: (t ? t.length : 0) !== f.length
                            }
                        }
                    }]), e
                }();
                t.RuleFactory = T
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/theme.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/createClass.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function e(t, n, a, i, s, o) {
                    (0, r.default)(this, e), this.scope = t, this.parentScopes = n, this.index = a, this.fontStyle = i, this.foreground = s, this.background = o
                };

                function s(e) {
                    return !!/^#[0-9a-f]{6}$/i.test(e) || !!/^#[0-9a-f]{8}$/i.test(e) || !!/^#[0-9a-f]{3}$/i.test(e) || !!/^#[0-9a-f]{4}$/i.test(e)
                }

                function o(e) {
                    if (!e) return [];
                    if (!e.settings || !Array.isArray(e.settings)) return [];
                    for (var t = e.settings, n = [], r = 0, a = 0, o = t.length; a < o; a++) {
                        var u = t[a];
                        if (u.settings) {
                            var l = void 0;
                            if ("string" === typeof u.scope) {
                                var c = u.scope;
                                l = (c = (c = c.replace(/^[,]+/, "")).replace(/[,]+$/, "")).split(",")
                            } else l = Array.isArray(u.scope) ? u.scope : [""];
                            var f = -1;
                            if ("string" === typeof u.settings.fontStyle) {
                                f = 0;
                                for (var h = u.settings.fontStyle.split(" "), d = 0, p = h.length; d < p; d++) switch (h[d]) {
                                    case "italic":
                                        f |= 1;
                                        break;
                                    case "bold":
                                        f |= 2;
                                        break;
                                    case "underline":
                                        f |= 4
                                }
                            }
                            var m = null;
                            "string" === typeof u.settings.foreground && s(u.settings.foreground) && (m = u.settings.foreground);
                            var g = null;
                            "string" === typeof u.settings.background && s(u.settings.background) && (g = u.settings.background);
                            for (var y = 0, _ = l.length; y < _; y++) {
                                var v = l[y].trim().split(" "),
                                    b = v[v.length - 1],
                                    E = null;
                                v.length > 1 && (E = v.slice(0, v.length - 1)).reverse(), n[r++] = new i(b, E, a, f, m, g)
                            }
                        }
                    }
                    return n
                }

                function u(e) {
                    e.sort((function(e, t) {
                        var n = f(e.scope, t.scope);
                        return 0 !== n || 0 !== (n = h(e.parentScopes, t.parentScopes)) ? n : e.index - t.index
                    }));
                    for (var t = 0, n = "#000000", r = "#ffffff"; e.length >= 1 && "" === e[0].scope;) {
                        var a = e.shift(); - 1 !== a.fontStyle && (t = a.fontStyle), null !== a.foreground && (n = a.foreground), null !== a.background && (r = a.background)
                    }
                    for (var i = new l, s = new d(0, null, t, i.getId(n), i.getId(r)), o = new p(new d(0, null, -1, 0, 0), []), u = 0, m = e.length; u < m; u++) {
                        var g = e[u];
                        o.insert(0, g.scope, g.parentScopes, g.fontStyle, i.getId(g.foreground), i.getId(g.background))
                    }
                    return new c(i, s, o)
                }
                t.ParsedThemeRule = i, t.parseTheme = o;
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null)
                    }
                    return (0, e.default)(t, [{
                        key: "getId",
                        value: function(e) {
                            if (null === e) return 0;
                            e = e.toUpperCase();
                            var t = this._color2id[e];
                            return t || (t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t)
                        }
                    }, {
                        key: "getColorMap",
                        value: function() {
                            return this._id2color.slice(0)
                        }
                    }]), t
                }();
                t.ColorMap = l;
                var c = function() {
                    function t(e, n, a) {
                        (0, r.default)(this, t), this._colorMap = e, this._root = a, this._defaults = n, this._cache = {}
                    }
                    return (0, e.default)(t, null, [{
                        key: "createFromRawTheme",
                        value: function(e) {
                            return this.createFromParsedTheme(o(e))
                        }
                    }, {
                        key: "createFromParsedTheme",
                        value: function(e) {
                            return u(e)
                        }
                    }]), (0, e.default)(t, [{
                        key: "getColorMap",
                        value: function() {
                            return this._colorMap.getColorMap()
                        }
                    }, {
                        key: "getDefaults",
                        value: function() {
                            return this._defaults
                        }
                    }, {
                        key: "match",
                        value: function(e) {
                            return this._cache.hasOwnProperty(e) || (this._cache[e] = this._root.match(e)), this._cache[e]
                        }
                    }]), t
                }();

                function f(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }

                function h(e, t) {
                    if (null === e && null === t) return 0;
                    if (!e) return -1;
                    if (!t) return 1;
                    var n = e.length,
                        r = t.length;
                    if (n === r) {
                        for (var a = 0; a < n; a++) {
                            var i = f(e[a], t[a]);
                            if (0 !== i) return i
                        }
                        return 0
                    }
                    return n - r
                }
                t.Theme = c, t.strcmp = f, t.strArrCmp = h;
                var d = function() {
                    function t(e, n, a, i, s) {
                        (0, r.default)(this, t), this.scopeDepth = e, this.parentScopes = n, this.fontStyle = a, this.foreground = i, this.background = s
                    }
                    return (0, e.default)(t, [{
                        key: "clone",
                        value: function() {
                            return new t(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background)
                        }
                    }, {
                        key: "acceptOverwrite",
                        value: function(e, t, n, r) {
                            this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, -1 !== t && (this.fontStyle = t), 0 !== n && (this.foreground = n), 0 !== r && (this.background = r)
                        }
                    }], [{
                        key: "cloneArr",
                        value: function(e) {
                            for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n].clone();
                            return t
                        }
                    }]), t
                }();
                t.ThemeTrieElementRule = d;
                var p = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        (0, r.default)(this, t), this._mainRule = e, this._rulesWithParentScopes = n, this._children = a
                    }
                    return (0, e.default)(t, [{
                        key: "match",
                        value: function(e) {
                            if ("" === e) return t._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
                            var n, r, a = e.indexOf(".");
                            return -1 === a ? (n = e, r = "") : (n = e.substring(0, a), r = e.substring(a + 1)), this._children.hasOwnProperty(n) ? this._children[n].match(r) : t._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))
                        }
                    }, {
                        key: "insert",
                        value: function(e, n, r, a, i, s) {
                            if ("" !== n) {
                                var o, u, l, c = n.indexOf("."); - 1 === c ? (o = n, u = "") : (o = n.substring(0, c), u = n.substring(c + 1)), this._children.hasOwnProperty(o) ? l = this._children[o] : (l = new t(this._mainRule.clone(), d.cloneArr(this._rulesWithParentScopes)), this._children[o] = l), l.insert(e + 1, u, r, a, i, s)
                            } else this._doInsertHere(e, r, a, i, s)
                        }
                    }, {
                        key: "_doInsertHere",
                        value: function(e, t, n, r, a) {
                            if (null !== t) {
                                for (var i = 0, s = this._rulesWithParentScopes.length; i < s; i++) {
                                    var o = this._rulesWithParentScopes[i];
                                    if (0 === h(o.parentScopes, t)) return void o.acceptOverwrite(e, n, r, a)
                                } - 1 === n && (n = this._mainRule.fontStyle), 0 === r && (r = this._mainRule.foreground), 0 === a && (a = this._mainRule.background), this._rulesWithParentScopes.push(new d(e, t, n, r, a))
                            } else this._mainRule.acceptOverwrite(e, n, r, a)
                        }
                    }], [{
                        key: "_sortBySpecificity",
                        value: function(e) {
                            return 1 === e.length || e.sort(this._cmpBySpecificity), e
                        }
                    }, {
                        key: "_cmpBySpecificity",
                        value: function(e, t) {
                            if (e.scopeDepth === t.scopeDepth) {
                                var n = e.parentScopes,
                                    r = t.parentScopes,
                                    a = null === n ? 0 : n.length,
                                    i = null === r ? 0 : r.length;
                                if (a === i)
                                    for (var s = 0; s < a; s++) {
                                        var o = n[s].length,
                                            u = r[s].length;
                                        if (o !== u) return u - o
                                    }
                                return i - a
                            }
                            return t.scopeDepth - e.scopeDepth
                        }
                    }]), t
                }();
                t.ThemeTrieElement = p
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/monaco-textmate/dist/utils.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js"), n("../../node_modules/@babel/runtime/helpers/typeof.js")], void 0 === (i = "function" === typeof(r = function(e, r, a) {
                "use strict";
                var i = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

                function s(e) {
                    return Array.isArray(e) ? function(e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = s(e[n]);
                        return t
                    }(e) : "object" === (0, a.default)(e) ? function(e) {
                        var t = {};
                        for (var n in e) t[n] = s(e[n]);
                        return t
                    }(e) : e
                }
                e = i(e), r = i(r), a = i(a), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clone = function(e) {
                    return s(e)
                }, t.mergeObjects = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return n.forEach((function(t) {
                        for (var n in t) e[n] = t[n]
                    })), e
                };
                var o = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/,
                    u = function() {
                        function t() {
                            (0, e.default)(this, t)
                        }
                        return (0, r.default)(t, null, [{
                            key: "hasCaptures",
                            value: function(e) {
                                return o.test(e)
                            }
                        }, {
                            key: "replaceCaptures",
                            value: function(e, t, n) {
                                return e.replace(o, (function(e, r, a, i) {
                                    var s = n[parseInt(r || a, 10)];
                                    if (!s) return e;
                                    for (var o = t.substring(s.start, s.end);
                                        "." === o[0];) o = o.substring(1);
                                    switch (i) {
                                        case "downcase":
                                            return o.toLowerCase();
                                        case "upcase":
                                            return o.toUpperCase();
                                        default:
                                            return o
                                    }
                                }))
                            }
                        }]), t
                    }();
                t.RegexSource = u
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/onigasm/lib/OnigRegExp.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("../../node_modules/onigasm/lib/OnigScanner.js"),
                    s = function() {
                        function t(n) {
                            (0, e.default)(this, t), this.source = n;
                            try {
                                this.scanner = new i.default([this.source])
                            } catch (r) {}
                        }
                        return (0, r.default)(t, [{
                            key: "searchSync",
                            value: function(e, t) {
                                var n;
                                return null == t && (t = 0), n = this.scanner.findNextMatchSync(e, t), this.captureIndicesForMatch(e, n)
                            }
                        }, {
                            key: "search",
                            value: function(e, t, n) {
                                null == t && (t = 0), "function" === typeof t && (n = t, t = 0);
                                try {
                                    n(null, this.searchSync(e, t))
                                } catch (r) {
                                    n(r)
                                }
                            }
                        }, {
                            key: "testSync",
                            value: function(e) {
                                return "boolean" === typeof this.source || "boolean" === typeof e ? this.source === e : null != this.searchSync(e)
                            }
                        }, {
                            key: "test",
                            value: function(e, t) {
                                "function" !== typeof t && (t = function() {});
                                try {
                                    t(null, this.testSync(e))
                                } catch (n) {
                                    t(n)
                                }
                            }
                        }, {
                            key: "captureIndicesForMatch",
                            value: function(e, t) {
                                if (null != t) {
                                    var n, r = t.captureIndices;
                                    e = this.scanner.convertToString(e);
                                    for (var a = 0; a < r.length; a++)(n = r[a]).match = e.slice(n.start, n.end);
                                    return r
                                }
                                return null
                            }
                        }]), t
                    }();
                t.default = s
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/onigasm/lib/OnigScanner.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r, a) {
                "use strict";
                var i = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = i(e), r = i(r), a = i(a), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = n("./config/stubs/lru-cache.js"),
                    o = n("../../node_modules/onigasm/lib/onigasmH.js"),
                    u = n("../../node_modules/onigasm/lib/OnigString.js"),
                    l = new s({
                        dispose: function(e, t) {
                            if (0 !== o.onigasmH.ccall("disposeCompiledPatterns", "number", ["array", "number"], [t.regexTPtrs, e.patterns.length])) {
                                var n = o.onigasmH.ccall("getLastError", "string");
                                throw new Error(n)
                            }
                        },
                        max: 1e3
                    }),
                    c = function() {
                        function t(e) {
                            if ((0, r.default)(this, t), null === o.onigasmH) throw new Error("Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API");
                            for (var n = 0; n < e.length; n++)
                                if ("string" !== typeof e[n]) throw new TypeError("First parameter to OnigScanner constructor must be array of (pattern) strings");
                            this.sources = e.slice()
                        }
                        return (0, a.default)(t, [{
                            key: "findNextMatch",
                            value: function(e, t, n) {
                                null == t && (t = 0), "function" === typeof t && (n = t, t = 0);
                                try {
                                    n(null, this.findNextMatchSync(e, t))
                                } catch (r) {
                                    n(r)
                                }
                            }
                        }, {
                            key: "findNextMatchSync",
                            value: function(t, n) {
                                null == n && (n = 0), n = this.convertToNumber(n);
                                var r = l.get(this);
                                if (!r) {
                                    for (var a = o.onigasmH._malloc(4), i = [], s = 0; s < this.sources.length; s++) {
                                        var c = this.sources[s];
                                        if (0 !== o.onigasmH.ccall("compilePattern", "number", ["string", "number"], [c, a])) {
                                            var f = o.onigasmH.ccall("getLastError", "string");
                                            throw new Error(f)
                                        }
                                        var h = new Uint32Array(o.onigasmH.buffer, a, 1)[0];
                                        i.push(h)
                                    }
                                    r = {
                                        regexTPtrs: new Uint8Array(Uint32Array.from(i).buffer)
                                    }, o.onigasmH._free(a), l.set(this, r)
                                }
                                var d = o.onigasmH._malloc(8),
                                    p = t instanceof u.default ? t : new u.default(this.convertToString(t)),
                                    m = o.onigasmH._malloc(p.utf8Bytes.length);
                                if (o.onigasmH.HEAPU8.set(p.utf8Bytes, m), 0 !== o.onigasmH.ccall("findBestMatch", "number", ["array", "number", "number", "number", "number", "number"], [r.regexTPtrs, this.sources.length, m, p.utf8Bytes.length - 1, p.convertUtf16OffsetToUtf8(n), d])) {
                                    var g = o.onigasmH.ccall("getLastError", "string");
                                    throw new Error(g)
                                }
                                var y = new Uint32Array(o.onigasmH.buffer, d, 3),
                                    _ = (0, e.default)(y, 3),
                                    v = _[0],
                                    b = _[1],
                                    E = _[2];
                                if (o.onigasmH._free(m), o.onigasmH._free(d), E > 0) {
                                    for (var k = new Uint32Array(o.onigasmH.buffer, b, E), T = [], S = 0, A = 0; S < E;) {
                                        var C = A++,
                                            w = k[S++],
                                            R = k[S++];
                                        p.hasMultiByteCharacters && (w = p.convertUtf8OffsetToUtf16(w), R = p.convertUtf8OffsetToUtf16(R)), T.push({
                                            end: R,
                                            index: C,
                                            length: R - w,
                                            start: w
                                        })
                                    }
                                    return o.onigasmH._free(b), {
                                        captureIndices: T,
                                        index: v,
                                        scanner: this
                                    }
                                }
                                return null
                            }
                        }, {
                            key: "convertToString",
                            value: function(e) {
                                return void 0 === e ? "undefined" : null === e ? "null" : e instanceof u.default ? e.content : e.toString()
                            }
                        }, {
                            key: "convertToNumber",
                            value: function(e) {
                                return e = parseInt(e, 10), isFinite(e) || (e = 0), e = Math.max(e, 0)
                            }
                        }, {
                            key: "patterns",
                            get: function() {
                                return this.sources.slice()
                            }
                        }]), t
                    }();
                t.OnigScanner = c, t.default = c
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/onigasm/lib/OnigString.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/helpers/classCallCheck.js"), n("../../node_modules/@babel/runtime/helpers/createClass.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(n) {
                        var r = this;
                        if ((0, e.default)(this, t), this.substring = function(e, t) {
                                return r.source.substring(e, t)
                            }, this.toString = function(e, t) {
                                return r.source
                            }, "string" !== typeof n) throw new TypeError("Argument must be a string");
                        this.source = n, this._utf8Bytes = null, this._utf8Indexes = null
                    }
                    return (0, r.default)(t, [{
                        key: "convertUtf8OffsetToUtf16",
                        value: function(e) {
                            if (e < 0) return 0;
                            if (e >= this._utf8Bytes.length - 1) return this.source.length;
                            var t = this.utf8Indexes;
                            return t && e >= this._mappingTableStartOffset ? function(e, t) {
                                var n = 0,
                                    r = e.length;
                                if (0 === r) return 0;
                                for (; n < r;) {
                                    var a = Math.floor((n + r) / 2);
                                    e[a] >= t ? r = a : n = a + 1
                                }
                                for (; n > 0 && (n >= e.length || e[n] > t);) n--;
                                return n > 0 && e[n] === e[n - 1] && n--, n
                            }(t, e - this._mappingTableStartOffset) + this._mappingTableStartOffset : e
                        }
                    }, {
                        key: "convertUtf16OffsetToUtf8",
                        value: function(e) {
                            if (e < 0) return 0;
                            var t = this._utf8Bytes;
                            if (e >= this.source.length) return t.length - 1;
                            var n = this.utf8Indexes;
                            return n && e >= this._mappingTableStartOffset ? n[e - this._mappingTableStartOffset] + this._mappingTableStartOffset : e
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var e, t = this.source,
                                n = t.length,
                                r = 0,
                                a = 0;

                            function i(t) {
                                var i = 3 * (n - t);
                                e = i <= 255 ? new Uint8Array(n - t) : i <= 65535 ? new Uint16Array(n - t) : new Uint32Array(n - t), a = t, e[r++] = 0
                            }
                            for (var s = new Uint8Array(3 * n + 1), o = 0, u = 0; u < t.length;) {
                                var l = void 0,
                                    c = t.charCodeAt(u);
                                if (e && (e[r++] = o - a), c < 55296 || c > 57343) l = c;
                                else if (c >= 56320) l = 65533;
                                else if (u === n - 1) l = 65533;
                                else {
                                    var f = t.charCodeAt(u + 1);
                                    56320 <= f && f <= 57343 ? (e || i(u), l = 65536 + ((1023 & c) << 10) + (1023 & f), u += 1, e[r++] = o - a) : l = 65533
                                }
                                var h = void 0,
                                    d = void 0;
                                if (l <= 127 ? (h = 1, d = 0) : l <= 2047 ? (h = 2, d = 192) : l <= 65535 ? (h = 3, d = 224) : (h = 4, d = 240), 1 === h) s[o++] = l;
                                else
                                    for (e || i(o), s[o++] = (l >> 6 * --h) + d; h > 0;) {
                                        var p = l >> 6 * (h - 1);
                                        s[o++] = 128 | 63 & p, h -= 1
                                    }
                                u += 1
                            }
                            var m = s.slice(0, o + 1);
                            m[o] = 0, this._utf8Bytes = m, e && (this._utf8Indexes = e, this._mappingTableStartOffset = a)
                        }
                    }, {
                        key: "utf8Bytes",
                        get: function() {
                            return this._utf8Bytes || this.encode(), this._utf8Bytes
                        }
                    }, {
                        key: "utf8Indexes",
                        get: function() {
                            return this._utf8Bytes || this.encode(), this._utf8Indexes
                        }
                    }, {
                        key: "content",
                        get: function() {
                            return this.source
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this.source.length
                        }
                    }, {
                        key: "hasMultiByteCharacters",
                        get: function() {
                            return null !== this.utf8Indexes
                        }
                    }]), t
                }();
                t.default = i
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/onigasm/lib/index.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [], void 0 === (i = "function" === typeof(r = function() {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var e = n("../../node_modules/onigasm/lib/onigasmH.js");
                t.loadWASM = e.loadWASM;
                var r = n("../../node_modules/onigasm/lib/OnigRegExp.js");
                t.OnigRegExp = r.default;
                var a = n("../../node_modules/onigasm/lib/OnigScanner.js");
                t.OnigScanner = a.default;
                var i = n("../../node_modules/onigasm/lib/OnigString.js");
                t.OnigString = i.default
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        "../../node_modules/onigasm/lib/onigasm.js": function(e, t, n) {
            (function(e, r) {
                var a, i, s;
                "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, i = [n("../../node_modules/@babel/runtime/helpers/typeof.js")], a = function(a) {
                    "use strict";
                    var o = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                    a = o(a);
                    var u = function(t) {
                        var n, r = "undefined" !== typeof(t = t || {}) ? t : {},
                            i = {};
                        for (n in r) r.hasOwnProperty(n) && (i[n] = r[n]);
                        r.arguments = [], r.thisProgram = "./this.program", r.quit = function(e, t) {
                            throw t
                        }, r.preRun = [], r.postRun = [];
                        var s, o, u = !1,
                            l = !1,
                            c = !1,
                            f = !1;
                        if (r.ENVIRONMENT)
                            if ("WEB" === r.ENVIRONMENT) u = !0;
                            else if ("WORKER" === r.ENVIRONMENT) l = !0;
                        else if ("NODE" === r.ENVIRONMENT) c = !0;
                        else {
                            if ("SHELL" !== r.ENVIRONMENT) throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");
                            f = !0
                        } else u = "object" === ("undefined" === typeof window ? "undefined" : (0, a.default)(window)), l = "function" === typeof importScripts, c = "object" === ("undefined" === typeof e ? "undefined" : (0, a.default)(e)) && !u && !l, f = !u && !c && !l;
                        for (n in c ? (r.read = function(e, t) {
                                var n;
                                return s || (s = {}), o || (o = {}), e = o.normalize(e), n = s.readFileSync(e), t ? n : n.toString()
                            }, r.readBinary = function(e) {
                                var t = r.read(e, !0);
                                return t.buffer || (t = new Uint8Array(t)), y(t.buffer), t
                            }, e.argv.length > 1 && (r.thisProgram = e.argv[1].replace(/\\/g, "/")), r.arguments = e.argv.slice(2), e.on("uncaughtException", (function(e) {
                                if (!(e instanceof ut)) throw e
                            })), e.on("unhandledRejection", (function(t, n) {
                                e.exit(1)
                            })), r.inspect = function() {
                                return "[Emscripten Module object]"
                            }) : f ? ("undefined" != typeof read && (r.read = function(e) {
                                return read(e)
                            }), r.readBinary = function(e) {
                                var t;
                                return "function" === typeof readbuffer ? new Uint8Array(readbuffer(e)) : (t = read(e, "binary"), y("object" === (0, a.default)(t)), t)
                            }, "undefined" != typeof scriptArgs ? r.arguments = scriptArgs : "undefined" != typeof arguments && (r.arguments = arguments), "function" === typeof quit && (r.quit = function(e, t) {
                                quit(e)
                            })) : (u || l) && (r.read = function(e) {
                                var t = new XMLHttpRequest;
                                return t.open("GET", e, !1), t.send(null), t.responseText
                            }, l && (r.readBinary = function(e) {
                                var t = new XMLHttpRequest;
                                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
                            }), r.readAsync = function(e, t, n) {
                                var r = new XMLHttpRequest;
                                r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() {
                                    200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
                                }, r.onerror = n, r.send(null)
                            }, "undefined" != typeof arguments && (r.arguments = arguments), r.setWindowTitle = function(e) {
                                document.title = e
                            }), r.print = "undefined" !== typeof console ? console.log : "undefined" !== typeof print ? print : null, r.printErr = "undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn || r.print, r.print = r.print, r.printErr = r.printErr, i) i.hasOwnProperty(n) && (r[n] = i[n]);
                        i = void 0;
                        var h = 16;

                        function d(e) {
                            y(!P);
                            var t = j;
                            return j = j + e + 15 & -16, t
                        }

                        function p(e, t) {
                            return t || (t = h), e = Math.ceil(e / t) * t
                        }
                        new Array(0);
                        var m = 1024,
                            g = 0;

                        function y(e, t) {
                            e || ft("Assertion failed: " + t)
                        }

                        function _(e) {
                            var t = r["_" + e];
                            return y(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
                        }
                        var v = {
                                stackSave: function() {
                                    ot()
                                },
                                stackRestore: function() {
                                    st()
                                },
                                arrayToC: function(e) {
                                    var t = it(e.length);
                                    return he(e, t), t
                                },
                                stringToC: function(e) {
                                    var t = 0;
                                    if (null !== e && void 0 !== e && 0 !== e) {
                                        var n = 1 + (e.length << 2);
                                        w(e, t = it(n), n)
                                    }
                                    return t
                                }
                            },
                            b = {
                                string: v.stringToC,
                                array: v.arrayToC
                            };

                        function E(e, t, n, r, a) {
                            var i = _(e),
                                s = [],
                                o = 0;
                            if (r)
                                for (var u = 0; u < r.length; u++) {
                                    var l = b[n[u]];
                                    l ? (0 === o && (o = ot()), s[u] = l(r[u])) : s[u] = r[u]
                                }
                            var c = i.apply(null, s);
                            return "string" === t && (c = k(c)), 0 !== o && st(o), c
                        }

                        function k(e, t) {
                            if (0 === t || !e) return "";
                            for (var n, r = 0, a = 0; r |= n = O[e + a >> 0], (0 != n || t) && (a++, !t || a != t););
                            t || (t = a);
                            var i = "";
                            if (r < 128) {
                                for (var s; t > 0;) s = String.fromCharCode.apply(String, O.subarray(e, e + Math.min(t, 1024))), i = i ? i + s : s, e += 1024, t -= 1024;
                                return i
                            }
                            return A(e)
                        }
                        var T = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                        function S(e, t) {
                            for (var n = t; e[n];) ++n;
                            if (n - t > 16 && e.subarray && T) return T.decode(e.subarray(t, n));
                            for (var r, a, i, s, o, u = "";;) {
                                if (!(r = e[t++])) return u;
                                if (128 & r)
                                    if (a = 63 & e[t++], 192 != (224 & r))
                                        if (i = 63 & e[t++], 224 == (240 & r) ? r = (15 & r) << 12 | a << 6 | i : (s = 63 & e[t++], 240 == (248 & r) ? r = (7 & r) << 18 | a << 12 | i << 6 | s : (o = 63 & e[t++], r = 248 == (252 & r) ? (3 & r) << 24 | a << 18 | i << 12 | s << 6 | o : (1 & r) << 30 | a << 24 | i << 18 | s << 12 | o << 6 | 63 & e[t++])), r < 65536) u += String.fromCharCode(r);
                                        else {
                                            var l = r - 65536;
                                            u += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                                        }
                                else u += String.fromCharCode((31 & r) << 6 | a);
                                else u += String.fromCharCode(r)
                            }
                        }

                        function A(e) {
                            return S(O, e)
                        }

                        function C(e, t, n, r) {
                            if (!(r > 0)) return 0;
                            for (var a = n, i = n + r - 1, s = 0; s < e.length; ++s) {
                                var o = e.charCodeAt(s);
                                if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++s)), o <= 127) {
                                    if (n >= i) break;
                                    t[n++] = o
                                } else if (o <= 2047) {
                                    if (n + 1 >= i) break;
                                    t[n++] = 192 | o >> 6, t[n++] = 128 | 63 & o
                                } else if (o <= 65535) {
                                    if (n + 2 >= i) break;
                                    t[n++] = 224 | o >> 12, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
                                } else if (o <= 2097151) {
                                    if (n + 3 >= i) break;
                                    t[n++] = 240 | o >> 18, t[n++] = 128 | o >> 12 & 63, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
                                } else if (o <= 67108863) {
                                    if (n + 4 >= i) break;
                                    t[n++] = 248 | o >> 24, t[n++] = 128 | o >> 18 & 63, t[n++] = 128 | o >> 12 & 63, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
                                } else {
                                    if (n + 5 >= i) break;
                                    t[n++] = 252 | o >> 30, t[n++] = 128 | o >> 24 & 63, t[n++] = 128 | o >> 18 & 63, t[n++] = 128 | o >> 12 & 63, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
                                }
                            }
                            return t[n] = 0, n - a
                        }

                        function w(e, t, n) {
                            return C(e, O, t, n)
                        }
                        "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
                        var R, x, O, I, N, M, j, P, L, D, B, G, U, W = 65536,
                            F = 16777216,
                            H = 16777216;

                        function $(e, t) {
                            return e % t > 0 && (e += t - e % t), e
                        }

                        function q(e) {
                            r.buffer = R = e
                        }

                        function z() {
                            r.HEAP8 = x = new Int8Array(R), r.HEAP16 = I = new Int16Array(R), r.HEAP32 = N = new Int32Array(R), r.HEAPU8 = O = new Uint8Array(R), r.HEAPU16 = new Uint16Array(R), r.HEAPU32 = new Uint32Array(R), r.HEAPF32 = new Float32Array(R), r.HEAPF64 = new Float64Array(R)
                        }

                        function V() {
                            ft("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + K + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
                        }

                        function X() {
                            var e = r.usingWasm ? W : F,
                                t = 2147483648 - e;
                            if (N[U >> 2] > t) return !1;
                            var n = K;
                            for (K = Math.max(K, H); K < N[U >> 2];) K = K <= 536870912 ? $(2 * K, e) : Math.min($((3 * K + 2147483648) / 4, e), t);
                            var a = r.reallocBuffer(K);
                            return a && a.byteLength == K ? (q(a), z(), !0) : (K = n, !1)
                        }
                        M = j = L = D = B = G = U = 0, P = !1, r.reallocBuffer || (r.reallocBuffer = function(e) {
                            var t;
                            try {
                                if (ArrayBuffer.transfer) t = ArrayBuffer.transfer(R, e);
                                else {
                                    var n = x;
                                    t = new ArrayBuffer(e), new Int8Array(t).set(n)
                                }
                            } catch (r) {
                                return !1
                            }
                            return !!nt(t) && t
                        });
                        try {
                            Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get)(new ArrayBuffer(4))
                        } catch (ht) {}
                        var Y = r.TOTAL_STACK || 5242880,
                            K = r.TOTAL_MEMORY || 157286400;

                        function Q() {
                            return K
                        }
                        if (K < Y && r.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + K + "! (TOTAL_STACK=" + Y + ")"), r.buffer ? R = r.buffer : ("object" === ("undefined" === typeof WebAssembly ? "undefined" : (0, a.default)(WebAssembly)) && "function" === typeof WebAssembly.Memory ? (r.wasmMemory = new WebAssembly.Memory({
                                initial: K / W
                            }), R = r.wasmMemory.buffer) : R = new ArrayBuffer(K), r.buffer = R), z(), N[0] = 1668509029, I[1] = 25459, 115 !== O[2] || 99 !== O[3]) throw "Runtime error: expected the system to be little-endian!";

                        function J(e) {
                            for (; e.length > 0;) {
                                var t = e.shift();
                                if ("function" != typeof t) {
                                    var n = t.func;
                                    "number" === typeof n ? void 0 === t.arg ? r.dynCall_v(n) : r.dynCall_vi(n, t.arg) : n(void 0 === t.arg ? null : t.arg)
                                } else t()
                            }
                        }
                        var Z = [],
                            ee = [],
                            te = [],
                            ne = [],
                            re = [],
                            ae = !1;

                        function ie() {
                            if (r.preRun)
                                for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) ce(r.preRun.shift());
                            J(Z)
                        }

                        function se() {
                            ae || (ae = !0, J(ee))
                        }

                        function oe() {
                            J(te)
                        }

                        function ue() {
                            J(ne)
                        }

                        function le() {
                            if (r.postRun)
                                for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) fe(r.postRun.shift());
                            J(re)
                        }

                        function ce(e) {
                            Z.unshift(e)
                        }

                        function fe(e) {
                            re.unshift(e)
                        }

                        function he(e, t) {
                            x.set(e, t)
                        }
                        Math.abs, Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, Math.atan2, Math.exp, Math.log, Math.sqrt, Math.ceil, Math.floor, Math.pow, Math.imul, Math.fround, Math.round, Math.min, Math.max, Math.clz32, Math.trunc;
                        var de = 0,
                            pe = null,
                            me = null;

                        function ge(e) {
                            de++, r.monitorRunDependencies && r.monitorRunDependencies(de)
                        }

                        function ye(e) {
                            if (de--, r.monitorRunDependencies && r.monitorRunDependencies(de), 0 == de && (null !== pe && (clearInterval(pe), pe = null), me)) {
                                var t = me;
                                me = null, t()
                            }
                        }
                        r.preloadedImages = {}, r.preloadedAudios = {};
                        var _e = "data:application/octet-stream;base64,";

                        function ve(e) {
                            return String.prototype.startsWith ? e.startsWith(_e) : 0 === e.indexOf(_e)
                        }

                        function be() {
                            var e = "onigasm.wast",
                                t = "onigasm.wasm",
                                n = "onigasm.temp.asm.js";
                            "function" === typeof r.locateFile && (ve(e) || (e = r.locateFile(e)), ve(t) || (t = r.locateFile(t)), ve(n) || (n = r.locateFile(n)));
                            var i = {
                                    global: null,
                                    env: null,
                                    asm2wasm: {
                                        "f64-rem": function(e, t) {
                                            return e % t
                                        },
                                        debugger: function() {}
                                    },
                                    parent: r
                                },
                                s = null;

                            function o() {
                                try {
                                    if (r.wasmBinary) return new Uint8Array(r.wasmBinary);
                                    if (r.readBinary) return r.readBinary(t);
                                    throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)"
                                } catch (e) {
                                    ft(e)
                                }
                            }

                            function c(e, n, c) {
                                if ("object" !== ("undefined" === typeof WebAssembly ? "undefined" : (0, a.default)(WebAssembly))) return r.printErr("no native wasm support detected"), !1;
                                if (!(r.wasmMemory instanceof WebAssembly.Memory)) return r.printErr("no native wasm Memory in use"), !1;

                                function f(e, t) {
                                    (s = e.exports).memory && function(e) {
                                        var t = r.buffer;
                                        e.byteLength < t.byteLength && r.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                                        var n = new Int8Array(t);
                                        new Int8Array(e).set(n), q(e), z()
                                    }(s.memory), r.asm = s, r.usingWasm = !0, ye()
                                }
                                if (n.memory = r.wasmMemory, i.global = {
                                        NaN: NaN,
                                        Infinity: 1 / 0
                                    }, i["global.Math"] = Math, i.env = n, ge(), r.instantiateWasm) try {
                                    return r.instantiateWasm(i, f)
                                } catch (ht) {
                                    return r.printErr("Module.instantiateWasm callback failed with error: " + ht), !1
                                }

                                function h(e) {
                                    f(e.instance, e.module)
                                }

                                function d(e) {
                                    (r.wasmBinary || !u && !l || "function" !== typeof fetch ? new Promise((function(e, t) {
                                        e(o())
                                    })) : fetch(t, {
                                        credentials: "same-origin"
                                    }).then((function(e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + t + "'";
                                        return e.arrayBuffer()
                                    })).catch((function() {
                                        return o()
                                    }))).then((function(e) {
                                        return WebAssembly.instantiate(e, i)
                                    })).then(e).catch((function(e) {
                                        r.printErr("failed to asynchronously prepare wasm: " + e), ft(e)
                                    }))
                                }
                                return r.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || ve(t) || "function" !== typeof fetch ? d(h) : WebAssembly.instantiateStreaming(fetch(t, {
                                    credentials: "same-origin"
                                }), i).then(h).catch((function(e) {
                                    r.printErr("wasm streaming compile failed: " + e), r.printErr("falling back to ArrayBuffer instantiation"), d(h)
                                })), {}
                            }
                            r.asmPreload = r.asm;
                            var f = r.reallocBuffer;
                            r.reallocBuffer = function(e) {
                                return "asmjs" === h ? f(e) : function(e) {
                                    e = $(e, r.usingWasm ? W : F);
                                    var t = r.buffer.byteLength;
                                    if (r.usingWasm) try {
                                        return -1 !== r.wasmMemory.grow((e - t) / 65536) ? r.buffer = r.wasmMemory.buffer : null
                                    } catch (ht) {
                                        return null
                                    }
                                }(e)
                            };
                            var h = "";
                            r.asm = function(e, t, n) {
                                if (!(t = t).table) {
                                    var i = r.wasmTableSize;
                                    void 0 === i && (i = 1024);
                                    var s = r.wasmMaxTableSize;
                                    "object" === ("undefined" === typeof WebAssembly ? "undefined" : (0, a.default)(WebAssembly)) && "function" === typeof WebAssembly.Table ? t.table = void 0 !== s ? new WebAssembly.Table({
                                        initial: i,
                                        maximum: s,
                                        element: "anyfunc"
                                    }) : new WebAssembly.Table({
                                        initial: i,
                                        element: "anyfunc"
                                    }) : t.table = new Array(i), r.wasmTable = t.table
                                }
                                var o;
                                return t.memoryBase || (t.memoryBase = r.STATIC_BASE), t.tableBase || (t.tableBase = 0), (o = c(0, t)) || ft("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods"), o
                            }
                        }
                        be(), j = (M = m) + 255296, ee.push();
                        var Ee = 255296;
                        r.STATIC_BASE = M, r.STATIC_BUMP = Ee;
                        var ke = j;

                        function Te() {
                            return !!Te.uncaught_exception
                        }
                        j += 16;
                        var Se = {
                            last: 0,
                            caught: [],
                            infos: {},
                            deAdjust: function(e) {
                                if (!e || Se.infos[e]) return e;
                                for (var t in Se.infos)
                                    if (Se.infos[t].adjusted === e) return t;
                                return e
                            },
                            addRef: function(e) {
                                e && Se.infos[e].refcount++
                            },
                            decRef: function(e) {
                                if (e) {
                                    var t = Se.infos[e];
                                    y(t.refcount > 0), t.refcount--, 0 !== t.refcount || t.rethrown || (t.destructor && r.dynCall_vi(t.destructor, e), delete Se.infos[e], ___cxa_free_exception(e))
                                }
                            },
                            clearRef: function(e) {
                                e && (Se.infos[e].refcount = 0)
                            }
                        };

                        function Ae(e) {
                            var t = Se.infos[e];
                            return t && !t.caught && (t.caught = !0, Te.uncaught_exception--), t && (t.rethrown = !1), Se.caught.push(e), Se.addRef(Se.deAdjust(e)), e
                        }

                        function Ce(e) {
                            throw Se.last || (Se.last = e), e + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
                        }

                        function we() {
                            var e = Se.last;
                            if (!e) return 0 | (at(0), 0);
                            var t = Se.infos[e],
                                n = t.type;
                            if (!n) return 0 | (at(0), e);
                            var a = Array.prototype.slice.call(arguments);
                            r.___cxa_is_pointer_type(n), we.buffer || (we.buffer = rt(4)), N[we.buffer >> 2] = e, e = we.buffer;
                            for (var i = 0; i < a.length; i++)
                                if (a[i] && r.___cxa_can_catch(a[i], n, e)) return e = N[e >> 2], t.adjusted = e, 0 | (at(a[i]), e);
                            return e = N[e >> 2], 0 | (at(n), e)
                        }

                        function Re() {}
                        var xe = {
                            varargs: 0,
                            get: function(e) {
                                return xe.varargs += 4, N[xe.varargs - 4 >> 2]
                            },
                            getStr: function() {
                                return k(xe.get())
                            },
                            get64: function() {
                                var e = xe.get(),
                                    t = xe.get();
                                return y(e >= 0 ? 0 === t : -1 === t), e
                            },
                            getZero: function() {
                                y(0 === xe.get())
                            }
                        };

                        function Oe(e, t) {
                            xe.varargs = t;
                            try {
                                var n = xe.getStreamFromFD(),
                                    r = (xe.get(), xe.get()),
                                    a = xe.get(),
                                    i = xe.get(),
                                    s = r;
                                return FS.llseek(n, s, i), N[a >> 2] = n.position, n.getdents && 0 === s && 0 === i && (n.getdents = null), 0
                            } catch (ht) {
                                return "undefined" !== typeof FS && ht instanceof FS.ErrnoError || ft(ht), -ht.errno
                            }
                        }

                        function Ie() {
                            var e = r._fflush;
                            e && e(0);
                            var t = Ne.printChar;
                            if (t) {
                                var n = Ne.buffers;
                                n[1].length && t(1, 10), n[2].length && t(2, 10)
                            }
                        }

                        function Ne(e, t) {
                            xe.varargs = t;
                            try {
                                var n = xe.get(),
                                    a = xe.get(),
                                    i = xe.get(),
                                    s = 0;
                                Ne.buffers || (Ne.buffers = [null, [],
                                    []
                                ], Ne.printChar = function(e, t) {
                                    var n = Ne.buffers[e];
                                    y(n), 0 === t || 10 === t ? ((1 === e ? r.print : r.printErr)(S(n, 0)), n.length = 0) : n.push(t)
                                });
                                for (var o = 0; o < i; o++) {
                                    for (var u = N[a + 8 * o >> 2], l = N[a + (8 * o + 4) >> 2], c = 0; c < l; c++) Ne.printChar(n, O[u + c]);
                                    s += l
                                }
                                return s
                            } catch (ht) {
                                return "undefined" !== typeof FS && ht instanceof FS.ErrnoError || ft(ht), -ht.errno
                            }
                        }

                        function Me(e, t) {
                            xe.varargs = t;
                            try {
                                var n = xe.getStreamFromFD();
                                return FS.close(n), 0
                            } catch (ht) {
                                return "undefined" !== typeof FS && ht instanceof FS.ErrnoError || ft(ht), -ht.errno
                            }
                        }

                        function je() {
                            r.abort()
                        }

                        function Pe(e, t, n) {
                            return O.set(O.subarray(t, t + n), e), e
                        }
                        var Le = {};

                        function De(e) {
                            return Le[e] || 0
                        }
                        var Be = 1,
                            Ge = {
                                EPERM: 1,
                                ENOENT: 2,
                                ESRCH: 3,
                                EINTR: 4,
                                EIO: 5,
                                ENXIO: 6,
                                E2BIG: 7,
                                ENOEXEC: 8,
                                EBADF: 9,
                                ECHILD: 10,
                                EAGAIN: 11,
                                EWOULDBLOCK: 11,
                                ENOMEM: 12,
                                EACCES: 13,
                                EFAULT: 14,
                                ENOTBLK: 15,
                                EBUSY: 16,
                                EEXIST: 17,
                                EXDEV: 18,
                                ENODEV: 19,
                                ENOTDIR: 20,
                                EISDIR: 21,
                                EINVAL: 22,
                                ENFILE: 23,
                                EMFILE: 24,
                                ENOTTY: 25,
                                ETXTBSY: 26,
                                EFBIG: 27,
                                ENOSPC: 28,
                                ESPIPE: 29,
                                EROFS: 30,
                                EMLINK: 31,
                                EPIPE: 32,
                                EDOM: 33,
                                ERANGE: 34,
                                ENOMSG: 42,
                                EIDRM: 43,
                                ECHRNG: 44,
                                EL2NSYNC: 45,
                                EL3HLT: 46,
                                EL3RST: 47,
                                ELNRNG: 48,
                                EUNATCH: 49,
                                ENOCSI: 50,
                                EL2HLT: 51,
                                EDEADLK: 35,
                                ENOLCK: 37,
                                EBADE: 52,
                                EBADR: 53,
                                EXFULL: 54,
                                ENOANO: 55,
                                EBADRQC: 56,
                                EBADSLT: 57,
                                EDEADLOCK: 35,
                                EBFONT: 59,
                                ENOSTR: 60,
                                ENODATA: 61,
                                ETIME: 62,
                                ENOSR: 63,
                                ENONET: 64,
                                ENOPKG: 65,
                                EREMOTE: 66,
                                ENOLINK: 67,
                                EADV: 68,
                                ESRMNT: 69,
                                ECOMM: 70,
                                EPROTO: 71,
                                EMULTIHOP: 72,
                                EDOTDOT: 73,
                                EBADMSG: 74,
                                ENOTUNIQ: 76,
                                EBADFD: 77,
                                EREMCHG: 78,
                                ELIBACC: 79,
                                ELIBBAD: 80,
                                ELIBSCN: 81,
                                ELIBMAX: 82,
                                ELIBEXEC: 83,
                                ENOSYS: 38,
                                ENOTEMPTY: 39,
                                ENAMETOOLONG: 36,
                                ELOOP: 40,
                                EOPNOTSUPP: 95,
                                EPFNOSUPPORT: 96,
                                ECONNRESET: 104,
                                ENOBUFS: 105,
                                EAFNOSUPPORT: 97,
                                EPROTOTYPE: 91,
                                ENOTSOCK: 88,
                                ENOPROTOOPT: 92,
                                ESHUTDOWN: 108,
                                ECONNREFUSED: 111,
                                EADDRINUSE: 98,
                                ECONNABORTED: 103,
                                ENETUNREACH: 101,
                                ENETDOWN: 100,
                                ETIMEDOUT: 110,
                                EHOSTDOWN: 112,
                                EHOSTUNREACH: 113,
                                EINPROGRESS: 115,
                                EALREADY: 114,
                                EDESTADDRREQ: 89,
                                EMSGSIZE: 90,
                                EPROTONOSUPPORT: 93,
                                ESOCKTNOSUPPORT: 94,
                                EADDRNOTAVAIL: 99,
                                ENETRESET: 102,
                                EISCONN: 106,
                                ENOTCONN: 107,
                                ETOOMANYREFS: 109,
                                EUSERS: 87,
                                EDQUOT: 122,
                                ESTALE: 116,
                                ENOTSUP: 95,
                                ENOMEDIUM: 123,
                                EILSEQ: 84,
                                EOVERFLOW: 75,
                                ECANCELED: 125,
                                ENOTRECOVERABLE: 131,
                                EOWNERDEAD: 130,
                                ESTRPIPE: 86
                            };

                        function Ue(e, t) {
                            return 0 == e ? Ge.EINVAL : (N[e >> 2] = Be, Le[Be] = 0, Be++, 0)
                        }

                        function We(e, t) {
                            We.seen || (We.seen = {}), e in We.seen || (r.dynCall_v(t), We.seen[e] = 1)
                        }

                        function Fe(e, t) {
                            return e in Le ? (Le[e] = t, 0) : Ge.EINVAL
                        }

                        function He(e) {
                            return r.___errno_location && (N[r.___errno_location() >> 2] = e), e
                        }

                        function $e(e) {
                            try {
                                return r.dynCall_i(e)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function qe(e, t) {
                            try {
                                return r.dynCall_ii(e, t)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function ze(e, t, n) {
                            try {
                                return r.dynCall_iii(e, t, n)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Ve(e, t, n, a) {
                            try {
                                return r.dynCall_iiii(e, t, n, a)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Xe(e, t, n, a, i) {
                            try {
                                return r.dynCall_iiiii(e, t, n, a, i)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Ye(e) {
                            try {
                                r.dynCall_v(e)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Ke(e, t) {
                            try {
                                r.dynCall_vi(e, t)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Qe(e, t, n, a, i) {
                            try {
                                r.dynCall_viiii(e, t, n, a, i)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Je(e, t, n, a, i, s) {
                            try {
                                r.dynCall_viiiii(e, t, n, a, i, s)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }

                        function Ze(e, t, n, a, i, s, o) {
                            try {
                                r.dynCall_viiiiii(e, t, n, a, i, s, o)
                            } catch (ht) {
                                if ("number" !== typeof ht && "longjmp" !== ht) throw ht;
                                r.setThrew(1, 0)
                            }
                        }
                        U = d(4), L = D = p(j), G = p(B = L + Y), N[U >> 2] = G, P = !0, r.wasmTableSize = 90, r.wasmMaxTableSize = 90, r.asmGlobalArg = {}, r.asmLibraryArg = {
                            abort: ft,
                            assert: y,
                            enlargeMemory: X,
                            getTotalMemory: Q,
                            abortOnCannotGrowMemory: V,
                            invoke_i: $e,
                            invoke_ii: qe,
                            invoke_iii: ze,
                            invoke_iiii: Ve,
                            invoke_iiiii: Xe,
                            invoke_v: Ye,
                            invoke_vi: Ke,
                            invoke_viiii: Qe,
                            invoke_viiiii: Je,
                            invoke_viiiiii: Ze,
                            __ZSt18uncaught_exceptionv: Te,
                            ___cxa_begin_catch: Ae,
                            ___cxa_find_matching_catch: we,
                            ___gxx_personality_v0: Re,
                            ___resumeException: Ce,
                            ___setErrNo: He,
                            ___syscall140: Oe,
                            ___syscall146: Ne,
                            ___syscall6: Me,
                            _abort: je,
                            _emscripten_memcpy_big: Pe,
                            _pthread_getspecific: De,
                            _pthread_key_create: Ue,
                            _pthread_once: We,
                            _pthread_setspecific: Fe,
                            flush_NO_FILESYSTEM: Ie,
                            DYNAMICTOP_PTR: U,
                            tempDoublePtr: ke,
                            ABORT: g,
                            STACKTOP: D,
                            STACK_MAX: B
                        };
                        var et = r.asm(r.asmGlobalArg, r.asmLibraryArg, R);
                        r.asm = et, r.___cxa_demangle = function() {
                            return r.asm.___cxa_demangle.apply(null, arguments)
                        }, r._compilePattern = function() {
                            return r.asm._compilePattern.apply(null, arguments)
                        }, r._disposeCompiledPatterns = function() {
                            return r.asm._disposeCompiledPatterns.apply(null, arguments)
                        };
                        var tt, nt = r._emscripten_replace_memory = function() {
                                return r.asm._emscripten_replace_memory.apply(null, arguments)
                            },
                            rt = (r._findBestMatch = function() {
                                return r.asm._findBestMatch.apply(null, arguments)
                            }, r._free = function() {
                                return r.asm._free.apply(null, arguments)
                            }, r._getLastError = function() {
                                return r.asm._getLastError.apply(null, arguments)
                            }, r._llvm_bswap_i32 = function() {
                                return r.asm._llvm_bswap_i32.apply(null, arguments)
                            }, r._malloc = function() {
                                return r.asm._malloc.apply(null, arguments)
                            }),
                            at = (r._memcpy = function() {
                                return r.asm._memcpy.apply(null, arguments)
                            }, r._memmove = function() {
                                return r.asm._memmove.apply(null, arguments)
                            }, r._memset = function() {
                                return r.asm._memset.apply(null, arguments)
                            }, r._sbrk = function() {
                                return r.asm._sbrk.apply(null, arguments)
                            }, r.establishStackSpace = function() {
                                return r.asm.establishStackSpace.apply(null, arguments)
                            }, r.getTempRet0 = function() {
                                return r.asm.getTempRet0.apply(null, arguments)
                            }, r.runPostSets = function() {
                                return r.asm.runPostSets.apply(null, arguments)
                            }, r.setTempRet0 = function() {
                                return r.asm.setTempRet0.apply(null, arguments)
                            }),
                            it = (r.setThrew = function() {
                                return r.asm.setThrew.apply(null, arguments)
                            }, r.stackAlloc = function() {
                                return r.asm.stackAlloc.apply(null, arguments)
                            }),
                            st = r.stackRestore = function() {
                                return r.asm.stackRestore.apply(null, arguments)
                            },
                            ot = r.stackSave = function() {
                                return r.asm.stackSave.apply(null, arguments)
                            };

                        function ut(e) {
                            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                        }

                        function lt(e) {
                            function t() {
                                r.calledRun || (r.calledRun = !0, g || (se(), oe(), r.onRuntimeInitialized && r.onRuntimeInitialized(), le()))
                            }
                            e = e || r.arguments, de > 0 || (ie(), de > 0 || r.calledRun || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                                setTimeout((function() {
                                    r.setStatus("")
                                }), 1), t()
                            }), 1)) : t()))
                        }

                        function ct(t, n) {
                            n && r.noExitRuntime && 0 === t || (r.noExitRuntime || (g = !0, D = tt, ue(), r.onExit && r.onExit(t)), c && e.exit(t), r.quit(t, new ut(t)))
                        }

                        function ft(e) {
                            throw r.onAbort && r.onAbort(e), void 0 !== e ? (r.print(e), r.printErr(e), e = JSON.stringify(e)) : e = "", g = !0, "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
                        }
                        if (r.dynCall_i = function() {
                                return r.asm.dynCall_i.apply(null, arguments)
                            }, r.dynCall_ii = function() {
                                return r.asm.dynCall_ii.apply(null, arguments)
                            }, r.dynCall_iii = function() {
                                return r.asm.dynCall_iii.apply(null, arguments)
                            }, r.dynCall_iiii = function() {
                                return r.asm.dynCall_iiii.apply(null, arguments)
                            }, r.dynCall_iiiii = function() {
                                return r.asm.dynCall_iiiii.apply(null, arguments)
                            }, r.dynCall_v = function() {
                                return r.asm.dynCall_v.apply(null, arguments)
                            }, r.dynCall_vi = function() {
                                return r.asm.dynCall_vi.apply(null, arguments)
                            }, r.dynCall_viiii = function() {
                                return r.asm.dynCall_viiii.apply(null, arguments)
                            }, r.dynCall_viiiii = function() {
                                return r.asm.dynCall_viiiii.apply(null, arguments)
                            }, r.dynCall_viiiiii = function() {
                                return r.asm.dynCall_viiiiii.apply(null, arguments)
                            }, r.asm = et, r.ccall = E, r.then = function(e) {
                                if (r.calledRun) e(r);
                                else {
                                    var t = r.onRuntimeInitialized;
                                    r.onRuntimeInitialized = function() {
                                        t && t(), e(r)
                                    }
                                }
                                return r
                            }, ut.prototype = new Error, ut.prototype.constructor = ut, me = function e() {
                                r.calledRun || lt(), r.calledRun || (me = e)
                            }, r.run = lt, r.exit = ct, r.abort = ft, r.preInit)
                            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
                        return r.noExitRuntime = !0, lt(), t
                    };
                    "object" === (0, a.default)(t) && "object" === (0, a.default)(r) ? r.exports = u: void 0 === (s = function() {
                        return u
                    }.apply(t, i = [])) || (r.exports = s)
                }, void 0 === (s = "function" === typeof a ? a.apply(t, i) : a) || (r.exports = s)
            }).call(this, n("../../node_modules/process/browser.js"), n("../../node_modules/webpack/buildin/module.js")(e))
        },
        "../../node_modules/onigasm/lib/onigasmH.js": function(e, t, n) {
            var r, a, i;
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, a = [n("../../node_modules/@babel/runtime/regenerator/index.js"), n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js")], void 0 === (i = "function" === typeof(r = function(e, r) {
                "use strict";
                var a = n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                e = a(e), r = a(r), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("../../node_modules/onigasm/lib/onigasm.js");

                function s(e) {
                    return o.apply(this, arguments)
                }

                function o() {
                    return (o = (0, r.default)(e.default.mark((function n(r) {
                        return e.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        i({
                                            instantiateWasm: function(e, t) {
                                                return WebAssembly.instantiate(r, e).then((function(e) {
                                                    t(e.instance)
                                                })).catch((function(e) {
                                                    throw e
                                                })), {}
                                            }
                                        }).then((function(n) {
                                            t.onigasmH = n, e()
                                        }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), n)
                    })))).apply(this, arguments)
                }
                var u = !1;

                function l() {
                    return (l = (0, r.default)(e.default.mark((function t(n) {
                        var r;
                        return e.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!u) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized");
                                case 2:
                                    if ("string" !== typeof n) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 5, fetch(n);
                                case 5:
                                    return e.next = 7, e.sent.arrayBuffer();
                                case 7:
                                    return r = e.sent, e.next = 10, s(r);
                                case 10:
                                    e.next = 18;
                                    break;
                                case 12:
                                    if (!(n instanceof ArrayBuffer)) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 15, s(n);
                                case 15:
                                    e.next = 18;
                                    break;
                                case 17:
                                    throw new TypeError("Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter");
                                case 18:
                                    u = !0;
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                t.loadWASM = function(e) {
                    return l.apply(this, arguments)
                }
            }) ? r.apply(t, a) : r) || (e.exports = i)
        }
    }
]);
//# sourceMappingURL=vendors~monaco-editor.d3087d044.chunk.js.map