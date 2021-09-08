var e, t;
e = self, t = function() {
    return (() => {
        var e = {
                71: (e, t, r) => {
                    "use strict";

                    function n(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function u(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function o(e, t, r) {
                        var o = t.initialState;
                        return {
                            getState: function() {
                                return o
                            },
                            dispatch: function(i, a) {
                                var c = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? n(Object(r), !0).forEach((function(t) {
                                            u(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({}, o);
                                o = e(o, {
                                    type: i,
                                    props: t,
                                    payload: a
                                }), r({
                                    state: o,
                                    prevState: c
                                })
                            }
                        }
                    }

                    function i(e) {
                        return e.reduce((function(e, t) {
                            return e.concat(t)
                        }), [])
                    }

                    function a(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function c(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(r), !0).forEach((function(t) {
                                l(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function l(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function s(e) {
                        return 0 === e.collections.length ? 0 : e.collections.reduce((function(e, t) {
                            return e + t.items.length
                        }), 0)
                    }
                    r.d(t, {
                        H: () => Yt
                    });
                    var p = 0;

                    function f() {
                        return "autocomplete-".concat(p++)
                    }
                    var d = function() {};

                    function v(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function m(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function D(e, t) {
                        var r = [];
                        return Promise.resolve(e(t)).then((function(e) {
                            return Array.isArray(e), Promise.all(e.filter((function(e) {
                                return Boolean(e)
                            })).map((function(e) {
                                if (e.sourceId, r.includes(e.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                                r.push(e.sourceId);
                                var t = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                                            m(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({
                                    getItemInputValue: function(e) {
                                        return e.state.query
                                    },
                                    getItemUrl: function() {},
                                    onSelect: function(e) {
                                        (0, e.setIsOpen)(!1)
                                    },
                                    onActive: d
                                }, e);
                                return Promise.resolve(t)
                            })))
                        }))
                    }

                    function h(e) {
                        return function(e) {
                            if (Array.isArray(e)) return y(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return y(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function y(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function g(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function b(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? g(Object(r), !0).forEach((function(t) {
                                _(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function _(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function O(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function A(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? O(Object(r), !0).forEach((function(t) {
                                E(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function E(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function C(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function F(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? C(Object(r), !0).forEach((function(t) {
                                P(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function P(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function j(e) {
                        return function(e) {
                            if (Array.isArray(e)) return w(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return w(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function w(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function S(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function B(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? S(Object(r), !0).forEach((function(t) {
                                I(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function I(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function k(e) {
                        return Boolean(e.execute)
                    }

                    function x(e, t) {
                        return r = e, Boolean(null == r ? void 0 : r.execute) ? B(B({}, e), {}, {
                            requests: e.queries.map((function(r) {
                                return {
                                    query: r,
                                    sourceId: t,
                                    transformResponse: e.transformResponse
                                }
                            }))
                        }) : {
                            items: e,
                            sourceId: t
                        };
                        var r
                    }

                    function N(e) {
                        var t = e.reduce((function(e, t) {
                            if (!k(t)) return e.push(t), e;
                            var r = t.searchClient,
                                n = t.execute,
                                u = t.requests,
                                o = e.find((function(e) {
                                    return k(t) && k(e) && e.searchClient === r && e.execute === n
                                }));
                            if (o) {
                                var i;
                                (i = o.items).push.apply(i, j(u))
                            } else {
                                var a = {
                                    execute: n,
                                    items: u,
                                    searchClient: r
                                };
                                e.push(a)
                            }
                            return e
                        }), []).map((function(e) {
                            if (!k(e)) return Promise.resolve(e);
                            var t = e,
                                r = t.execute,
                                n = t.items;
                            return r({
                                searchClient: t.searchClient,
                                requests: n
                            })
                        }));
                        return Promise.all(t).then((function(e) {
                            return i(e)
                        }))
                    }

                    function T(e, t) {
                        return t.map((function(t) {
                            var r = e.filter((function(e) {
                                    return e.sourceId === t.sourceId
                                })),
                                n = r.map((function(e) {
                                    return e.items
                                })),
                                u = r[0].transformResponse,
                                o = u ? u(function(e) {
                                    var t = e.map((function(e) {
                                        var t;
                                        return F(F({}, e), {}, {
                                            hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map((function(t) {
                                                return F(F({}, t), {}, {
                                                    __autocomplete_indexName: e.index,
                                                    __autocomplete_queryID: e.queryID
                                                })
                                            }))
                                        })
                                    }));
                                    return {
                                        results: t,
                                        hits: t.map((function(e) {
                                            return e.hits
                                        })).filter(Boolean),
                                        facetHits: t.map((function(e) {
                                            var t;
                                            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map((function(e) {
                                                return {
                                                    label: e.value,
                                                    count: e.count,
                                                    _highlightResult: {
                                                        label: {
                                                            value: e.highlighted
                                                        }
                                                    }
                                                }
                                            }))
                                        })).filter(Boolean)
                                    }
                                }(n)) : n;
                            return Array.isArray(o), o.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
                                source: t,
                                items: o
                            }
                        }))
                    }

                    function q(e) {
                        var t = function(e) {
                            var t = e.collections.map((function(e) {
                                return e.items.length
                            })).reduce((function(e, t, r) {
                                var n = (e[r - 1] || 0) + t;
                                return e.push(n), e
                            }), []).reduce((function(t, r) {
                                return r <= e.activeItemId ? t + 1 : t
                            }), 0);
                            return e.collections[t]
                        }(e);
                        if (!t) return null;
                        var r = t.items[function(e) {
                                for (var t = e.state, r = e.collection, n = !1, u = 0, o = 0; !1 === n;) {
                                    var i = t.collections[u];
                                    if (i === r) {
                                        n = !0;
                                        break
                                    }
                                    o += i.items.length, u++
                                }
                                return t.activeItemId - o
                            }({
                                state: e,
                                collection: t
                            })],
                            n = t.source;
                        return {
                            item: r,
                            itemInputValue: n.getItemInputValue({
                                item: r,
                                state: e
                            }),
                            itemUrl: n.getItemUrl({
                                item: r,
                                state: e
                            }),
                            source: n
                        }
                    }

                    function R(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function L(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? R(Object(r), !0).forEach((function(t) {
                                M(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function M(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function U(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }
                    var H = null;

                    function W(e) {
                        var t = e.event,
                            r = e.nextState,
                            n = void 0 === r ? {} : r,
                            u = e.props,
                            o = e.query,
                            a = e.refresh,
                            c = e.store,
                            l = U(e, ["event", "nextState", "props", "query", "refresh", "store"]);
                        H && u.environment.clearTimeout(H);
                        var s, p = l.setCollections,
                            f = l.setIsOpen,
                            d = l.setQuery,
                            v = l.setActiveItemId,
                            m = l.setStatus;
                        return d(o), v(u.defaultActiveItemId), o || !1 !== u.openOnFocus ? (m("loading"), H = u.environment.setTimeout((function() {
                            m("stalled")
                        }), u.stallThreshold), u.getSources(L({
                            query: o,
                            refresh: a,
                            state: c.getState()
                        }, l)).then((function(e) {
                            return m("loading"), Promise.all(e.map((function(e) {
                                return Promise.resolve(e.getItems(L({
                                    query: o,
                                    refresh: a,
                                    state: c.getState()
                                }, l))).then((function(t) {
                                    return x(t, e.sourceId)
                                }))
                            }))).then(N).then((function(t) {
                                return T(t, e)
                            })).then((function(e) {
                                return function(e) {
                                    var t = e.collections,
                                        r = e.props,
                                        n = e.state,
                                        u = t.reduce((function(e, t) {
                                            return A(A({}, e), {}, E({}, t.source.sourceId, A(A({}, t.source), {}, {
                                                getItems: function() {
                                                    return i(t.items)
                                                }
                                            })))
                                        }), {});
                                    return i(r.reshape({
                                        sources: Object.values(u),
                                        sourcesBySourceId: u,
                                        state: n
                                    })).filter(Boolean).map((function(e) {
                                        return {
                                            source: e,
                                            items: e.getItems()
                                        }
                                    }))
                                }({
                                    collections: e,
                                    props: u,
                                    state: c.getState()
                                })
                            })).then((function(e) {
                                var r;
                                m("idle"), p(e);
                                var i = u.shouldPanelOpen({
                                    state: c.getState()
                                });
                                f(null !== (r = n.isOpen) && void 0 !== r ? r : u.openOnFocus && !o && i || i);
                                var s = q(c.getState());
                                if (null !== c.getState().activeItemId && s) {
                                    var d = s.item,
                                        v = s.itemInputValue,
                                        D = s.itemUrl,
                                        h = s.source;
                                    h.onActive(L({
                                        event: t,
                                        item: d,
                                        itemInputValue: v,
                                        itemUrl: D,
                                        refresh: a,
                                        source: h,
                                        state: c.getState()
                                    }, l))
                                }
                            })).finally((function() {
                                H && u.environment.clearTimeout(H)
                            }))
                        }))) : (m("idle"), p(c.getState().collections.map((function(e) {
                            return L(L({}, e), {}, {
                                items: []
                            })
                        }))), f(null !== (s = n.isOpen) && void 0 !== s ? s : u.shouldPanelOpen({
                            state: c.getState()
                        })), Promise.resolve())
                    }

                    function V(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function J(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? V(Object(r), !0).forEach((function(t) {
                                Q(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Q(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function $(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }

                    function z(e, t) {
                        return e === t || e.contains(t)
                    }

                    function K(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function G(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? K(Object(r), !0).forEach((function(t) {
                                Z(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Z(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function X(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }

                    function Y(e) {
                        var t = e.props,
                            r = e.refresh,
                            n = e.store,
                            u = X(e, ["props", "refresh", "store"]);
                        return {
                            getEnvironmentProps: function(e) {
                                var r = e.inputElement,
                                    u = e.formElement,
                                    o = e.panelElement;
                                return G({
                                    onTouchStart: function(e) {
                                        !1 !== n.getState().isOpen && e.target !== r && !1 === [u, o].some((function(r) {
                                            return z(r, e.target) || z(r, t.environment.document.activeElement)
                                        })) && n.dispatch("blur", null)
                                    },
                                    onTouchMove: function(e) {
                                        !1 !== n.getState().isOpen && r === t.environment.document.activeElement && e.target !== r && r.blur()
                                    }
                                }, X(e, ["inputElement", "formElement", "panelElement"]))
                            },
                            getRootProps: function(e) {
                                return G({
                                    role: "combobox",
                                    "aria-expanded": n.getState().isOpen,
                                    "aria-haspopup": "listbox",
                                    "aria-owns": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                                    "aria-labelledby": "".concat(t.id, "-label")
                                }, e)
                            },
                            getFormProps: function(e) {
                                return e.inputElement, G({
                                    action: "",
                                    noValidate: !0,
                                    role: "search",
                                    onSubmit: function(o) {
                                        var i;
                                        o.preventDefault(), t.onSubmit(G({
                                            event: o,
                                            refresh: r,
                                            state: n.getState()
                                        }, u)), n.dispatch("submit", null), null === (i = e.inputElement) || void 0 === i || i.blur()
                                    },
                                    onReset: function(o) {
                                        var i;
                                        o.preventDefault(), t.onReset(G({
                                            event: o,
                                            refresh: r,
                                            state: n.getState()
                                        }, u)), n.dispatch("reset", null), null === (i = e.inputElement) || void 0 === i || i.focus()
                                    }
                                }, X(e, ["inputElement"]))
                            },
                            getLabelProps: function(e) {
                                return G({
                                    htmlFor: "".concat(t.id, "-input"),
                                    id: "".concat(t.id, "-label")
                                }, e)
                            },
                            getInputProps: function(e) {
                                function o(e) {
                                    (t.openOnFocus || Boolean(n.getState().query)) && W(G({
                                        event: e,
                                        props: t,
                                        query: n.getState().completion || n.getState().query,
                                        refresh: r,
                                        store: n
                                    }, u)), n.dispatch("focus", null)
                                }
                                var i = "ontouchstart" in t.environment,
                                    a = e || {},
                                    c = (a.inputElement, a.maxLength),
                                    l = void 0 === c ? 512 : c,
                                    s = X(a, ["inputElement", "maxLength"]),
                                    p = q(n.getState());
                                return G({
                                    "aria-autocomplete": "both",
                                    "aria-activedescendant": n.getState().isOpen && null !== n.getState().activeItemId ? "".concat(t.id, "-item-").concat(n.getState().activeItemId) : void 0,
                                    "aria-controls": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                                    "aria-labelledby": "".concat(t.id, "-label"),
                                    value: n.getState().completion || n.getState().query,
                                    id: "".concat(t.id, "-input"),
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    enterKeyHint: null != p && p.itemUrl ? "go" : "search",
                                    spellCheck: "false",
                                    autoFocus: t.autoFocus,
                                    placeholder: t.placeholder,
                                    maxLength: l,
                                    type: "search",
                                    onChange: function(e) {
                                        W(G({
                                            event: e,
                                            props: t,
                                            query: e.currentTarget.value.slice(0, l),
                                            refresh: r,
                                            store: n
                                        }, u))
                                    },
                                    onKeyDown: function(e) {
                                        ! function(e) {
                                            var t = e.event,
                                                r = e.props,
                                                n = e.refresh,
                                                u = e.store,
                                                o = $(e, ["event", "props", "refresh", "store"]);
                                            if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                                                var i = function() {
                                                        var e = r.environment.document.getElementById("".concat(r.id, "-item-").concat(u.getState().activeItemId));
                                                        e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1))
                                                    },
                                                    a = function() {
                                                        var e = q(u.getState());
                                                        if (null !== u.getState().activeItemId && e) {
                                                            var r = e.item,
                                                                i = e.itemInputValue,
                                                                a = e.itemUrl,
                                                                c = e.source;
                                                            c.onActive(J({
                                                                event: t,
                                                                item: r,
                                                                itemInputValue: i,
                                                                itemUrl: a,
                                                                refresh: n,
                                                                source: c,
                                                                state: u.getState()
                                                            }, o))
                                                        }
                                                    };
                                                t.preventDefault(), !1 === u.getState().isOpen && (r.openOnFocus || Boolean(u.getState().query)) ? W(J({
                                                    event: t,
                                                    props: r,
                                                    query: u.getState().query,
                                                    refresh: n,
                                                    store: u
                                                }, o)).then((function() {
                                                    u.dispatch(t.key, {
                                                        nextActiveItemId: r.defaultActiveItemId
                                                    }), a(), setTimeout(i, 0)
                                                })) : (u.dispatch(t.key, {}), a(), i())
                                            } else if ("Escape" === t.key) t.preventDefault(), u.dispatch(t.key, null);
                                            else if ("Enter" === t.key) {
                                                if (null === u.getState().activeItemId || u.getState().collections.every((function(e) {
                                                        return 0 === e.items.length
                                                    }))) return;
                                                t.preventDefault();
                                                var c = q(u.getState()),
                                                    l = c.item,
                                                    s = c.itemInputValue,
                                                    p = c.itemUrl,
                                                    f = c.source;
                                                if (t.metaKey || t.ctrlKey) void 0 !== p && (f.onSelect(J({
                                                    event: t,
                                                    item: l,
                                                    itemInputValue: s,
                                                    itemUrl: p,
                                                    refresh: n,
                                                    source: f,
                                                    state: u.getState()
                                                }, o)), r.navigator.navigateNewTab({
                                                    itemUrl: p,
                                                    item: l,
                                                    state: u.getState()
                                                }));
                                                else if (t.shiftKey) void 0 !== p && (f.onSelect(J({
                                                    event: t,
                                                    item: l,
                                                    itemInputValue: s,
                                                    itemUrl: p,
                                                    refresh: n,
                                                    source: f,
                                                    state: u.getState()
                                                }, o)), r.navigator.navigateNewWindow({
                                                    itemUrl: p,
                                                    item: l,
                                                    state: u.getState()
                                                }));
                                                else if (t.altKey);
                                                else {
                                                    if (void 0 !== p) return f.onSelect(J({
                                                        event: t,
                                                        item: l,
                                                        itemInputValue: s,
                                                        itemUrl: p,
                                                        refresh: n,
                                                        source: f,
                                                        state: u.getState()
                                                    }, o)), void r.navigator.navigate({
                                                        itemUrl: p,
                                                        item: l,
                                                        state: u.getState()
                                                    });
                                                    W(J({
                                                        event: t,
                                                        nextState: {
                                                            isOpen: !1
                                                        },
                                                        props: r,
                                                        query: s,
                                                        refresh: n,
                                                        store: u
                                                    }, o)).then((function() {
                                                        f.onSelect(J({
                                                            event: t,
                                                            item: l,
                                                            itemInputValue: s,
                                                            itemUrl: p,
                                                            refresh: n,
                                                            source: f,
                                                            state: u.getState()
                                                        }, o))
                                                    }))
                                                }
                                            }
                                        }(G({
                                            event: e,
                                            props: t,
                                            refresh: r,
                                            store: n
                                        }, u))
                                    },
                                    onFocus: o,
                                    onBlur: function() {
                                        i || n.dispatch("blur", null)
                                    },
                                    onClick: function(r) {
                                        e.inputElement !== t.environment.document.activeElement || n.getState().isOpen || o(r)
                                    }
                                }, s)
                            },
                            getPanelProps: function(e) {
                                return G({
                                    onMouseDown: function(e) {
                                        e.preventDefault()
                                    },
                                    onMouseLeave: function() {
                                        n.dispatch("mouseleave", null)
                                    }
                                }, e)
                            },
                            getListProps: function(e) {
                                return G({
                                    role: "listbox",
                                    "aria-labelledby": "".concat(t.id, "-label"),
                                    id: "".concat(t.id, "-list")
                                }, e)
                            },
                            getItemProps: function(e) {
                                var o = e.item,
                                    i = e.source,
                                    a = X(e, ["item", "source"]);
                                return G({
                                    id: "".concat(t.id, "-item-").concat(o.__autocomplete_id),
                                    role: "option",
                                    "aria-selected": n.getState().activeItemId === o.__autocomplete_id,
                                    onMouseMove: function(e) {
                                        if (o.__autocomplete_id !== n.getState().activeItemId) {
                                            n.dispatch("mousemove", o.__autocomplete_id);
                                            var t = q(n.getState());
                                            if (null !== n.getState().activeItemId && t) {
                                                var i = t.item,
                                                    a = t.itemInputValue,
                                                    c = t.itemUrl,
                                                    l = t.source;
                                                l.onActive(G({
                                                    event: e,
                                                    item: i,
                                                    itemInputValue: a,
                                                    itemUrl: c,
                                                    refresh: r,
                                                    source: l,
                                                    state: n.getState()
                                                }, u))
                                            }
                                        }
                                    },
                                    onMouseDown: function(e) {
                                        e.preventDefault()
                                    },
                                    onClick: function(e) {
                                        var a = i.getItemInputValue({
                                                item: o,
                                                state: n.getState()
                                            }),
                                            c = i.getItemUrl({
                                                item: o,
                                                state: n.getState()
                                            });
                                        (c ? Promise.resolve() : W(G({
                                            event: e,
                                            nextState: {
                                                isOpen: !1
                                            },
                                            props: t,
                                            query: a,
                                            refresh: r,
                                            store: n
                                        }, u))).then((function() {
                                            i.onSelect(G({
                                                event: e,
                                                item: o,
                                                itemInputValue: a,
                                                itemUrl: c,
                                                refresh: r,
                                                source: i,
                                                state: n.getState()
                                            }, u))
                                        }))
                                    }
                                }, a)
                            }
                        }
                    }

                    function ee(e) {
                        var t, r = e.state;
                        return !1 === r.isOpen || null === r.activeItemId ? null : (null === (t = q(r)) || void 0 === t ? void 0 : t.itemInputValue) || null
                    }

                    function te(e, t, r, n) {
                        if (!r) return null;
                        if (e < 0 && (null === t || null !== n && 0 === t)) return r + e;
                        var u = (null === t ? -1 : t) + e;
                        return u <= -1 || u >= r ? null === n ? null : 0 : u
                    }

                    function re(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function ne(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? re(Object(r), !0).forEach((function(t) {
                                ue(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function ue(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var oe = function(e, t) {
                        switch (t.type) {
                            case "setActiveItemId":
                                return ne(ne({}, e), {}, {
                                    activeItemId: t.payload
                                });
                            case "setQuery":
                                return ne(ne({}, e), {}, {
                                    query: t.payload,
                                    completion: null
                                });
                            case "setCollections":
                                return ne(ne({}, e), {}, {
                                    collections: t.payload
                                });
                            case "setIsOpen":
                                return ne(ne({}, e), {}, {
                                    isOpen: t.payload
                                });
                            case "setStatus":
                                return ne(ne({}, e), {}, {
                                    status: t.payload
                                });
                            case "setContext":
                                return ne(ne({}, e), {}, {
                                    context: ne(ne({}, e.context), t.payload)
                                });
                            case "ArrowDown":
                                var r = ne(ne({}, e), {}, {
                                    activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : te(1, e.activeItemId, s(e), t.props.defaultActiveItemId)
                                });
                                return ne(ne({}, r), {}, {
                                    completion: ee({
                                        state: r
                                    })
                                });
                            case "ArrowUp":
                                var n = ne(ne({}, e), {}, {
                                    activeItemId: te(-1, e.activeItemId, s(e), t.props.defaultActiveItemId)
                                });
                                return ne(ne({}, n), {}, {
                                    completion: ee({
                                        state: n
                                    })
                                });
                            case "Escape":
                                return e.isOpen ? ne(ne({}, e), {}, {
                                    activeItemId: null,
                                    isOpen: !1,
                                    completion: null
                                }) : ne(ne({}, e), {}, {
                                    activeItemId: null,
                                    query: "",
                                    status: "idle",
                                    collections: []
                                });
                            case "submit":
                                return ne(ne({}, e), {}, {
                                    activeItemId: null,
                                    isOpen: !1,
                                    status: "idle"
                                });
                            case "reset":
                                return ne(ne({}, e), {}, {
                                    activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
                                    status: "idle",
                                    query: ""
                                });
                            case "focus":
                                return ne(ne({}, e), {}, {
                                    activeItemId: t.props.defaultActiveItemId,
                                    isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                                        state: e
                                    })
                                });
                            case "blur":
                                return t.props.debug ? e : ne(ne({}, e), {}, {
                                    isOpen: !1,
                                    activeItemId: null
                                });
                            case "mousemove":
                                return ne(ne({}, e), {}, {
                                    activeItemId: t.payload
                                });
                            case "mouseleave":
                                return ne(ne({}, e), {}, {
                                    activeItemId: t.props.defaultActiveItemId
                                });
                            default:
                                return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e
                        }
                    };

                    function ie(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function ae(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ie(Object(r), !0).forEach((function(t) {
                                ce(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function ce(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function le(e) {
                        var t = [],
                            r = function(e, t) {
                                var r, n = "undefined" != typeof window ? window : {},
                                    u = e.plugins || [];
                                return b(b({
                                    debug: !1,
                                    openOnFocus: !1,
                                    placeholder: "",
                                    autoFocus: !1,
                                    defaultActiveItemId: null,
                                    stallThreshold: 300,
                                    environment: n,
                                    shouldPanelOpen: function(e) {
                                        return s(e.state) > 0
                                    },
                                    reshape: function(e) {
                                        return e.sources
                                    }
                                }, e), {}, {
                                    id: null !== (r = e.id) && void 0 !== r ? r : f(),
                                    plugins: u,
                                    initialState: b({
                                        activeItemId: null,
                                        query: "",
                                        completion: null,
                                        collections: [],
                                        isOpen: !1,
                                        status: "idle",
                                        context: {}
                                    }, e.initialState),
                                    onStateChange: function(t) {
                                        var r;
                                        null === (r = e.onStateChange) || void 0 === r || r.call(e, t), u.forEach((function(e) {
                                            var r;
                                            return null === (r = e.onStateChange) || void 0 === r ? void 0 : r.call(e, t)
                                        }))
                                    },
                                    onSubmit: function(t) {
                                        var r;
                                        null === (r = e.onSubmit) || void 0 === r || r.call(e, t), u.forEach((function(e) {
                                            var r;
                                            return null === (r = e.onSubmit) || void 0 === r ? void 0 : r.call(e, t)
                                        }))
                                    },
                                    onReset: function(t) {
                                        var r;
                                        null === (r = e.onReset) || void 0 === r || r.call(e, t), u.forEach((function(e) {
                                            var r;
                                            return null === (r = e.onReset) || void 0 === r ? void 0 : r.call(e, t)
                                        }))
                                    },
                                    getSources: function(r) {
                                        return Promise.all([].concat(h(u.map((function(e) {
                                            return e.getSources
                                        }))), [e.getSources]).filter(Boolean).map((function(e) {
                                            return D(e, r)
                                        }))).then((function(e) {
                                            return i(e)
                                        })).then((function(e) {
                                            return e.map((function(e) {
                                                return b(b({}, e), {}, {
                                                    onSelect: function(r) {
                                                        e.onSelect(r), t.forEach((function(e) {
                                                            var t;
                                                            return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, r)
                                                        }))
                                                    },
                                                    onActive: function(r) {
                                                        e.onActive(r), t.forEach((function(e) {
                                                            var t;
                                                            return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, r)
                                                        }))
                                                    }
                                                })
                                            }))
                                        }))
                                    },
                                    navigator: b({
                                        navigate: function(e) {
                                            var t = e.itemUrl;
                                            n.location.assign(t)
                                        },
                                        navigateNewTab: function(e) {
                                            var t = e.itemUrl,
                                                r = n.open(t, "_blank", "noopener");
                                            null == r || r.focus()
                                        },
                                        navigateNewWindow: function(e) {
                                            var t = e.itemUrl;
                                            n.open(t, "_blank", "noopener")
                                        }
                                    }, e.navigator)
                                })
                            }(e, t),
                            n = o(oe, r, (function(e) {
                                var t = e.prevState,
                                    n = e.state;
                                r.onStateChange(ae({
                                    prevState: t,
                                    state: n,
                                    refresh: l
                                }, u))
                            })),
                            u = function(e) {
                                var t = e.store;
                                return {
                                    setActiveItemId: function(e) {
                                        t.dispatch("setActiveItemId", e)
                                    },
                                    setQuery: function(e) {
                                        t.dispatch("setQuery", e)
                                    },
                                    setCollections: function(e) {
                                        var r = 0,
                                            n = e.map((function(e) {
                                                return c(c({}, e), {}, {
                                                    items: i(e.items).map((function(e) {
                                                        return c(c({}, e), {}, {
                                                            __autocomplete_id: r++
                                                        })
                                                    }))
                                                })
                                            }));
                                        t.dispatch("setCollections", n)
                                    },
                                    setIsOpen: function(e) {
                                        t.dispatch("setIsOpen", e)
                                    },
                                    setStatus: function(e) {
                                        t.dispatch("setStatus", e)
                                    },
                                    setContext: function(e) {
                                        t.dispatch("setContext", e)
                                    }
                                }
                            }({
                                store: n
                            }),
                            a = Y(ae({
                                props: r,
                                refresh: l,
                                store: n
                            }, u));

                        function l() {
                            return W(ae({
                                event: new Event("input"),
                                nextState: {
                                    isOpen: n.getState().isOpen
                                },
                                props: r,
                                query: n.getState().query,
                                refresh: l,
                                store: n
                            }, u))
                        }
                        return r.plugins.forEach((function(e) {
                            var r;
                            return null === (r = e.subscribe) || void 0 === r ? void 0 : r.call(e, ae(ae({}, u), {}, {
                                refresh: l,
                                onSelect: function(e) {
                                    t.push({
                                        onSelect: e
                                    })
                                },
                                onActive: function(e) {
                                    t.push({
                                        onActive: e
                                    })
                                }
                            }))
                        })), ae(ae({
                            refresh: l
                        }, a), u)
                    }

                    function se(e) {
                        return {
                            current: e
                        }
                    }

                    function pe(e, t) {
                        var r = void 0;
                        return function() {
                            for (var n = arguments.length, u = new Array(n), o = 0; o < n; o++) u[o] = arguments[o];
                            r && clearTimeout(r), r = setTimeout((function() {
                                return e.apply(void 0, u)
                            }), t)
                        }
                    }
                    var fe = function(e) {
                            var t = e.environment,
                                r = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            r.setAttribute("class", "aa-SubmitIcon"), r.setAttribute("viewBox", "0 0 24 24"), r.setAttribute("width", "20"), r.setAttribute("height", "20"), r.setAttribute("fill", "currentColor");
                            var n = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return n.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), r.appendChild(n), r
                        },
                        de = function(e) {
                            var t = e.environment,
                                r = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            r.setAttribute("class", "aa-ClearIcon"), r.setAttribute("viewBox", "0 0 24 24"), r.setAttribute("width", "18"), r.setAttribute("height", "18"), r.setAttribute("fill", "currentColor");
                            var n = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return n.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), r.appendChild(n), r
                        },
                        ve = function(e) {
                            var t = e.environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            return t.setAttribute("class", "aa-LoadingIcon"), t.setAttribute("viewBox", "0 0 100 100"), t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>', t
                        };

                    function me(e, t, r) {
                        e[t] = null === r ? "" : "number" != typeof r ? r : r + "px"
                    }

                    function De(e) {
                        this._listeners[e.type](e)
                    }

                    function he(e, t, r) {
                        var n, u, o = e[t];
                        if ("style" === t)
                            if ("string" == typeof r) e.style = r;
                            else if (null === r) e.style = "";
                        else
                            for (t in r) o && r[t] === o[t] || me(e.style, t, r[t]);
                        else "o" === t[0] && "n" === t[1] ? (n = t !== (t = t.replace(/Capture$/, "")), (u = t.toLowerCase()) in e && (t = u), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = r, r ? o || e.addEventListener(t, De, n) : e.removeEventListener(t, De, n)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (null == r || !1 === r && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r))
                    }

                    function ye(e) {
                        switch (e) {
                            case "onChange":
                                return "onInput";
                            default:
                                return e
                        }
                    }

                    function ge(e, t) {
                        for (var r in t) he(e, ye(r), t[r])
                    }

                    function be(e, t) {
                        for (var r in t) "o" === r[0] && "n" === r[1] || he(e, ye(r), t[r])
                    }

                    function _e(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Oe(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Oe(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Oe(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Oe(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function Ae(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }

                    function Ee(e) {
                        return function(t, r) {
                            var n = r.children,
                                u = void 0 === n ? [] : n,
                                o = Ae(r, ["children"]),
                                i = e.document.createElement(t);
                            return ge(i, o), i.append.apply(i, _e(u)), i
                        }
                    }

                    function Ce(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function Fe(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ce(Object(r), !0).forEach((function(t) {
                                Pe(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Pe(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function je(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }

                    function we(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function Se(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? we(Object(r), !0).forEach((function(t) {
                                Be(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Be(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Ie(e) {
                        var t = e.autocomplete,
                            r = e.autocompleteScopeApi,
                            n = e.classNames,
                            u = e.environment,
                            o = e.isDetached,
                            i = e.placeholder,
                            a = void 0 === i ? "Search" : i,
                            c = e.propGetters,
                            l = e.setIsModalOpen,
                            s = e.state,
                            p = e.translations,
                            f = Ee(u),
                            d = c.getRootProps(Se({
                                state: s,
                                props: t.getRootProps({})
                            }, r)),
                            v = f("div", Se({
                                class: n.root
                            }, d)),
                            m = f("div", {
                                class: n.detachedContainer,
                                onMouseDown: function(e) {
                                    e.stopPropagation()
                                }
                            }),
                            D = f("div", {
                                class: n.detachedOverlay,
                                children: [m],
                                onMouseDown: function() {
                                    l(!1), t.setIsOpen(!1)
                                }
                            }),
                            h = c.getLabelProps(Se({
                                state: s,
                                props: t.getLabelProps({})
                            }, r)),
                            y = f("button", {
                                class: n.submitButton,
                                type: "submit",
                                title: p.submitButtonTitle,
                                children: [fe({
                                    environment: u
                                })]
                            }),
                            g = f("label", Se({
                                class: n.label,
                                children: [y]
                            }, h)),
                            b = f("button", {
                                class: n.clearButton,
                                type: "reset",
                                title: p.clearButtonTitle,
                                children: [de({
                                    environment: u
                                })]
                            }),
                            _ = f("div", {
                                class: n.loadingIndicator,
                                children: [ve({
                                    environment: u
                                })]
                            }),
                            O = function(e) {
                                var t = e.autocompleteScopeApi,
                                    r = e.environment,
                                    n = (e.classNames, e.getInputProps),
                                    u = e.getInputPropsCore,
                                    o = e.onDetachedEscape,
                                    i = e.state,
                                    a = je(e, ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "onDetachedEscape", "state"]),
                                    c = Ee(r)("input", a),
                                    l = n(Fe({
                                        state: i,
                                        props: u({
                                            inputElement: c
                                        }),
                                        inputElement: c
                                    }, t));
                                return ge(c, Fe(Fe({}, l), {}, {
                                    onKeyDown: function(e) {
                                        if (o && "Escape" === e.key) return e.preventDefault(), void o();
                                        l.onKeyDown(e)
                                    }
                                })), c
                            }({
                                class: n.input,
                                environment: u,
                                state: s,
                                getInputProps: c.getInputProps,
                                getInputPropsCore: t.getInputProps,
                                autocompleteScopeApi: r,
                                onDetachedEscape: o ? function() {
                                    t.setIsOpen(!1), l(!1)
                                } : void 0
                            }),
                            A = f("div", {
                                class: n.inputWrapperPrefix,
                                children: [g, _]
                            }),
                            E = f("div", {
                                class: n.inputWrapperSuffix,
                                children: [b]
                            }),
                            C = f("div", {
                                class: n.inputWrapper,
                                children: [O]
                            }),
                            F = c.getFormProps(Se({
                                state: s,
                                props: t.getFormProps({
                                    inputElement: O
                                })
                            }, r)),
                            P = f("form", Se({
                                class: n.form,
                                children: [A, C, E]
                            }, F)),
                            j = c.getPanelProps(Se({
                                state: s,
                                props: t.getPanelProps({})
                            }, r)),
                            w = f("div", Se({
                                class: n.panel
                            }, j));
                        if (o) {
                            var S = f("div", {
                                    class: n.detachedSearchButtonIcon,
                                    children: [fe({
                                        environment: u
                                    })]
                                }),
                                B = f("div", {
                                    class: n.detachedSearchButtonPlaceholder,
                                    textContent: a
                                }),
                                I = f("button", {
                                    class: n.detachedSearchButton,
                                    onClick: function(e) {
                                        e.preventDefault(), l(!0)
                                    },
                                    children: [S, B]
                                }),
                                k = f("button", {
                                    class: n.detachedCancelButton,
                                    textContent: p.detachedCancelButtonText,
                                    onClick: function() {
                                        t.setIsOpen(!1), l(!1)
                                    }
                                }),
                                x = f("div", {
                                    class: n.detachedFormContainer,
                                    children: [P, k]
                                });
                            m.appendChild(x), v.appendChild(I)
                        } else v.appendChild(P);
                        return {
                            detachedContainer: m,
                            detachedOverlay: D,
                            inputWrapper: C,
                            input: O,
                            root: v,
                            form: P,
                            label: g,
                            submitButton: y,
                            clearButton: b,
                            loadingIndicator: _,
                            panel: w
                        }
                    }
                    var ke, xe, Ne, Te, qe = {},
                        Re = [],
                        Le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

                    function Me(e, t) {
                        for (var r in t) e[r] = t[r];
                        return e
                    }

                    function Ue(e) {
                        var t = e.parentNode;
                        t && t.removeChild(e)
                    }

                    function He(e, t, r) {
                        var n, u, o, i = arguments,
                            a = {};
                        for (o in t) "key" == o ? n = t[o] : "ref" == o ? u = t[o] : a[o] = t[o];
                        if (arguments.length > 3)
                            for (r = [r], o = 3; o < arguments.length; o++) r.push(i[o]);
                        if (null != r && (a.children = r), "function" == typeof e && null != e.defaultProps)
                            for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
                        return We(e, a, n, u, null)
                    }

                    function We(e, t, r, n, u) {
                        var o = {
                            type: e,
                            props: t,
                            key: r,
                            ref: n,
                            __k: null,
                            __: null,
                            __b: 0,
                            __e: null,
                            __d: void 0,
                            __c: null,
                            __h: null,
                            constructor: void 0,
                            __v: null == u ? ++ke.__v : u
                        };
                        return null != ke.vnode && ke.vnode(o), o
                    }

                    function Ve(e) {
                        return e.children
                    }

                    function Je(e, t) {
                        this.props = e, this.context = t
                    }

                    function Qe(e, t) {
                        if (null == t) return e.__ ? Qe(e.__, e.__.__k.indexOf(e) + 1) : null;
                        for (var r; t < e.__k.length; t++)
                            if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                        return "function" == typeof e.type ? Qe(e) : null
                    }

                    function $e(e) {
                        var t, r;
                        if (null != (e = e.__) && null != e.__c) {
                            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                                if (null != (r = e.__k[t]) && null != r.__e) {
                                    e.__e = e.__c.base = r.__e;
                                    break
                                }
                            return $e(e)
                        }
                    }

                    function ze(e) {
                        (!e.__d && (e.__d = !0) && xe.push(e) && !Ke.__r++ || Te !== ke.debounceRendering) && ((Te = ke.debounceRendering) || Ne)(Ke)
                    }

                    function Ke() {
                        for (var e; Ke.__r = xe.length;) e = xe.sort((function(e, t) {
                            return e.__v.__b - t.__v.__b
                        })), xe = [], e.some((function(e) {
                            var t, r, n, u, o, i;
                            e.__d && (o = (u = (t = e).__v).__e, (i = t.__P) && (r = [], (n = Me({}, u)).__v = u.__v + 1, nt(i, u, n, t.__n, void 0 !== i.ownerSVGElement, null != u.__h ? [o] : null, r, null == o ? Qe(u) : o, u.__h), ut(r, u), u.__e != o && $e(u)))
                        }))
                    }

                    function Ge(e, t, r, n, u, o, i, a, c, l) {
                        var s, p, f, d, v, m, D, h = n && n.__k || Re,
                            y = h.length;
                        for (r.__k = [], s = 0; s < t.length; s++)
                            if (null != (d = r.__k[s] = null == (d = t[s]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? We(null, d, null, null, d) : Array.isArray(d) ? We(Ve, {
                                    children: d
                                }, null, null, null) : d.__b > 0 ? We(d.type, d.props, d.key, null, d.__v) : d)) {
                                if (d.__ = r, d.__b = r.__b + 1, null === (f = h[s]) || f && d.key == f.key && d.type === f.type) h[s] = void 0;
                                else
                                    for (p = 0; p < y; p++) {
                                        if ((f = h[p]) && d.key == f.key && d.type === f.type) {
                                            h[p] = void 0;
                                            break
                                        }
                                        f = null
                                    }
                                nt(e, d, f = f || qe, u, o, i, a, c, l), v = d.__e, (p = d.ref) && f.ref != p && (D || (D = []), f.ref && D.push(f.ref, null, d), D.push(p, d.__c || v, d)), null != v ? (null == m && (m = v), "function" == typeof d.type && null != d.__k && d.__k === f.__k ? d.__d = c = Ze(d, c, e) : c = Xe(e, d, f, h, v, c), l || "option" !== r.type ? "function" == typeof r.type && (r.__d = c) : e.value = "") : c && f.__e == c && c.parentNode != e && (c = Qe(f))
                            }
                        for (r.__e = m, s = y; s--;) null != h[s] && ("function" == typeof r.type && null != h[s].__e && h[s].__e == r.__d && (r.__d = Qe(n, s + 1)), at(h[s], h[s]));
                        if (D)
                            for (s = 0; s < D.length; s++) it(D[s], D[++s], D[++s])
                    }

                    function Ze(e, t, r) {
                        var n, u;
                        for (n = 0; n < e.__k.length; n++)(u = e.__k[n]) && (u.__ = e, t = "function" == typeof u.type ? Ze(u, t, r) : Xe(r, u, u, e.__k, u.__e, t));
                        return t
                    }

                    function Xe(e, t, r, n, u, o) {
                        var i, a, c;
                        if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
                        else if (null == r || u != o || null == u.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(u), i = null;
                            else {
                                for (a = o, c = 0;
                                    (a = a.nextSibling) && c < n.length; c += 2)
                                    if (a == u) break e;
                                e.insertBefore(u, o), i = o
                            }
                        return void 0 !== i ? i : u.nextSibling
                    }

                    function Ye(e, t, r) {
                        "-" === t[0] ? e.setProperty(t, r) : e[t] = null == r ? "" : "number" != typeof r || Le.test(t) ? r : r + "px"
                    }

                    function et(e, t, r, n, u) {
                        var o;
                        e: if ("style" === t)
                            if ("string" == typeof r) e.style.cssText = r;
                            else {
                                if ("string" == typeof n && (e.style.cssText = n = ""), n)
                                    for (t in n) r && t in r || Ye(e.style, t, "");
                                if (r)
                                    for (t in r) n && r[t] === n[t] || Ye(e.style, t, r[t])
                            }
                        else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? rt : tt, o) : e.removeEventListener(t, o ? rt : tt, o);
                        else if ("dangerouslySetInnerHTML" !== t) {
                            if (u) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                                e[t] = null == r ? "" : r;
                                break e
                            } catch (e) {}
                            "function" == typeof r || (null != r && (!1 !== r || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, r) : e.removeAttribute(t))
                        }
                    }

                    function tt(e) {
                        this.l[e.type + !1](ke.event ? ke.event(e) : e)
                    }

                    function rt(e) {
                        this.l[e.type + !0](ke.event ? ke.event(e) : e)
                    }

                    function nt(e, t, r, n, u, o, i, a, c) {
                        var l, s, p, f, d, v, m, D, h, y, g, b = t.type;
                        if (void 0 !== t.constructor) return null;
                        null != r.__h && (c = r.__h, a = t.__e = r.__e, t.__h = null, o = [a]), (l = ke.__b) && l(t);
                        try {
                            e: if ("function" == typeof b) {
                                if (D = t.props, h = (l = b.contextType) && n[l.__c], y = l ? h ? h.props.value : l.__ : n, r.__c ? m = (s = t.__c = r.__c).__ = s.__E : ("prototype" in b && b.prototype.render ? t.__c = s = new b(D, y) : (t.__c = s = new Je(D, y), s.constructor = b, s.render = ct), h && h.sub(s), s.props = D, s.state || (s.state = {}), s.context = y, s.__n = n, p = s.__d = !0, s.__h = []), null == s.__s && (s.__s = s.state), null != b.getDerivedStateFromProps && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, b.getDerivedStateFromProps(D, s.__s))), f = s.props, d = s.state, p) null == b.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount);
                                else {
                                    if (null == b.getDerivedStateFromProps && D !== f && null != s.componentWillReceiveProps && s.componentWillReceiveProps(D, y), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(D, s.__s, y) || t.__v === r.__v) {
                                        s.props = D, s.state = s.__s, t.__v !== r.__v && (s.__d = !1), s.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach((function(e) {
                                            e && (e.__ = t)
                                        })), s.__h.length && i.push(s);
                                        break e
                                    }
                                    null != s.componentWillUpdate && s.componentWillUpdate(D, s.__s, y), null != s.componentDidUpdate && s.__h.push((function() {
                                        s.componentDidUpdate(f, d, v)
                                    }))
                                }
                                s.context = y, s.props = D, s.state = s.__s, (l = ke.__r) && l(t), s.__d = !1, s.__v = t, s.__P = e, l = s.render(s.props, s.state, s.context), s.state = s.__s, null != s.getChildContext && (n = Me(Me({}, n), s.getChildContext())), p || null == s.getSnapshotBeforeUpdate || (v = s.getSnapshotBeforeUpdate(f, d)), g = null != l && l.type === Ve && null == l.key ? l.props.children : l, Ge(e, Array.isArray(g) ? g : [g], t, r, n, u, o, i, a, c), s.base = t.__e, t.__h = null, s.__h.length && i.push(s), m && (s.__E = s.__ = null), s.__e = !1
                            } else null == o && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = ot(r.__e, t, r, n, u, o, i, c);
                            (l = ke.diffed) && l(t)
                        }
                        catch (e) {
                            t.__v = null, (c || null != o) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), ke.__e(e, t, r)
                        }
                    }

                    function ut(e, t) {
                        ke.__c && ke.__c(t, e), e.some((function(t) {
                            try {
                                e = t.__h, t.__h = [], e.some((function(e) {
                                    e.call(t)
                                }))
                            } catch (e) {
                                ke.__e(e, t.__v)
                            }
                        }))
                    }

                    function ot(e, t, r, n, u, o, i, a) {
                        var c, l, s, p, f = r.props,
                            d = t.props,
                            v = t.type,
                            m = 0;
                        if ("svg" === v && (u = !0), null != o)
                            for (; m < o.length; m++)
                                if ((c = o[m]) && (c === e || (v ? c.localName == v : 3 == c.nodeType))) {
                                    e = c, o[m] = null;
                                    break
                                }
                        if (null == e) {
                            if (null === v) return document.createTextNode(d);
                            e = u ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, d.is && d), o = null, a = !1
                        }
                        if (null === v) f === d || a && e.data === d || (e.data = d);
                        else {
                            if (o = o && Re.slice.call(e.childNodes), l = (f = r.props || qe).dangerouslySetInnerHTML, s = d.dangerouslySetInnerHTML, !a) {
                                if (null != o)
                                    for (f = {}, p = 0; p < e.attributes.length; p++) f[e.attributes[p].name] = e.attributes[p].value;
                                (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""))
                            }
                            if (function(e, t, r, n, u) {
                                    var o;
                                    for (o in r) "children" === o || "key" === o || o in t || et(e, o, null, r[o], n);
                                    for (o in t) u && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || et(e, o, t[o], r[o], n)
                                }(e, d, f, u, a), s) t.__k = [];
                            else if (m = t.props.children, Ge(e, Array.isArray(m) ? m : [m], t, r, n, u && "foreignObject" !== v, o, i, e.firstChild, a), null != o)
                                for (m = o.length; m--;) null != o[m] && Ue(o[m]);
                            a || ("value" in d && void 0 !== (m = d.value) && (m !== e.value || "progress" === v && !m) && et(e, "value", m, f.value, !1), "checked" in d && void 0 !== (m = d.checked) && m !== e.checked && et(e, "checked", m, f.checked, !1))
                        }
                        return e
                    }

                    function it(e, t, r) {
                        try {
                            "function" == typeof e ? e(t) : e.current = t
                        } catch (e) {
                            ke.__e(e, r)
                        }
                    }

                    function at(e, t, r) {
                        var n, u, o;
                        if (ke.unmount && ke.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || it(n, null, t)), r || "function" == typeof e.type || (r = null != (u = e.__e)), e.__e = e.__d = void 0, null != (n = e.__c)) {
                            if (n.componentWillUnmount) try {
                                n.componentWillUnmount()
                            } catch (e) {
                                ke.__e(e, t)
                            }
                            n.base = n.__P = null
                        }
                        if (n = e.__k)
                            for (o = 0; o < n.length; o++) n[o] && at(n[o], t, r);
                        null != u && Ue(u)
                    }

                    function ct(e, t, r) {
                        return this.constructor(e, r)
                    }

                    function lt(e, t, r) {
                        var n, u, o;
                        ke.__ && ke.__(e, t), u = (n = "function" == typeof r) ? null : r && r.__k || t.__k, o = [], nt(t, e = (!n && r || t).__k = He(Ve, null, [e]), u || qe, qe, void 0 !== t.ownerSVGElement, !n && r ? [r] : u ? null : t.firstChild ? Re.slice.call(t.childNodes) : null, o, !n && r ? r : u ? u.__e : t.firstChild, n), ut(o, e)
                    }

                    function st(e, t) {
                        return t.reduce((function(e, t) {
                            return e && e[t]
                        }), e)
                    }
                    ke = {
                        __e: function(e, t) {
                            for (var r, n, u; t = t.__;)
                                if ((r = t.__c) && !r.__) try {
                                    if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), u = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e), u = r.__d), u) return r.__E = r
                                } catch (t) {
                                    e = t
                                }
                            throw e
                        },
                        __v: 0
                    }, Je.prototype.setState = function(e, t) {
                        var r;
                        r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), "function" == typeof e && (e = e(Me({}, r), this.props)), e && Me(r, e), null != e && this.__v && (t && this.__h.push(t), ze(this))
                    }, Je.prototype.forceUpdate = function(e) {
                        this.__v && (this.__e = !0, e && this.__h.push(e), ze(this))
                    }, Je.prototype.render = Ve, xe = [], Ne = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ke.__r = 0;
                    var pt = r(773);

                    function ft(e) {
                        var t = e.highlightedValue.split(pt.S),
                            r = t.shift(),
                            n = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return {
                                    get: function() {
                                        return e
                                    },
                                    add: function(t) {
                                        var r = e[e.length - 1];
                                        (null == r ? void 0 : r.isHighlighted) === t.isHighlighted ? e[e.length - 1] = {
                                            value: r.value + t.value,
                                            isHighlighted: r.isHighlighted
                                        } : e.push(t)
                                    }
                                }
                            }(r ? [{
                                value: r,
                                isHighlighted: !1
                            }] : []);
                        return t.forEach((function(e) {
                            var t = e.split(pt.Z);
                            n.add({
                                value: t[0],
                                isHighlighted: !0
                            }), "" !== t[1] && n.add({
                                value: t[1],
                                isHighlighted: !1
                            })
                        })), n.get()
                    }

                    function dt(e) {
                        return function(e) {
                            if (Array.isArray(e)) return vt(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return vt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vt(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function vt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function mt(e) {
                        var t = e.hit,
                            r = e.attribute,
                            n = Array.isArray(r) ? r : [r],
                            u = st(t, ["_highlightResult"].concat(dt(n), ["value"]));
                        return "string" != typeof u && (u = st(t, n) || ""), ft({
                            highlightedValue: u
                        })
                    }
                    var Dt = {
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        },
                        ht = new RegExp(/\w/i),
                        yt = /&(amp|quot|lt|gt|#39);/g,
                        gt = RegExp(yt.source);

                    function bt(e, t) {
                        var r, n, u, o = e[t],
                            i = (null === (r = e[t + 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0,
                            a = (null === (n = e[t - 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0;
                        return ht.test((u = o.value) && gt.test(u) ? u.replace(yt, (function(e) {
                            return Dt[e]
                        })) : u) || a !== i ? o.isHighlighted : a
                    }

                    function _t(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function Ot(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? _t(Object(r), !0).forEach((function(t) {
                                At(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _t(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function At(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Et(e) {
                        return e.some((function(e) {
                            return e.isHighlighted
                        })) ? e.map((function(t, r) {
                            return Ot(Ot({}, t), {}, {
                                isHighlighted: !bt(e, r)
                            })
                        })) : e.map((function(e) {
                            return Ot(Ot({}, e), {}, {
                                isHighlighted: !1
                            })
                        }))
                    }

                    function Ct(e) {
                        var t = e.createElement,
                            r = e.Fragment;
                        return function(e) {
                            var n, u = e.hit,
                                o = e.attribute,
                                i = e.tagName,
                                a = void 0 === i ? "mark" : i;
                            return t(r, {}, (n = {
                                hit: u,
                                attribute: o
                            }, Et(mt(n))).map((function(e, r) {
                                return e.isHighlighted ? t(a, {
                                    key: r
                                }, e.value) : e.value
                            })))
                        }
                    }

                    function Ft(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Pt(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Pt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pt(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Pt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function jt(e) {
                        var t = e.hit,
                            r = e.attribute,
                            n = Array.isArray(r) ? r : [r],
                            u = st(t, ["_snippetResult"].concat(Ft(n), ["value"]));
                        return "string" != typeof u && (u = st(t, n) || ""), ft({
                            highlightedValue: u
                        })
                    }

                    function wt(e) {
                        var t = e.createElement,
                            r = e.Fragment;
                        return function(e) {
                            var n, u = e.hit,
                                o = e.attribute,
                                i = e.tagName,
                                a = void 0 === i ? "mark" : i;
                            return t(r, {}, (n = {
                                hit: u,
                                attribute: o
                            }, Et(jt(n))).map((function(e, r) {
                                return e.isHighlighted ? t(a, {
                                    key: r
                                }, e.value) : e.value
                            })))
                        }
                    }

                    function St(e) {
                        var t = e.createElement,
                            r = e.Fragment;
                        return function(e) {
                            var n = e.hit,
                                u = e.attribute,
                                o = e.tagName,
                                i = void 0 === o ? "mark" : o;
                            return t(r, {}, jt({
                                hit: n,
                                attribute: u
                            }).map((function(e, r) {
                                return e.isHighlighted ? t(i, {
                                    key: r
                                }, e.value) : e.value
                            })))
                        }
                    }

                    function Bt(e, t) {
                        if ("string" == typeof t) {
                            var r = e.document.querySelector(t);
                            return "The element ".concat(JSON.stringify(t), " is not in the document."), r
                        }
                        return t
                    }

                    function It() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.reduce((function(e, t) {
                            return Object.keys(t).forEach((function(r) {
                                var n = e[r],
                                    u = t[r];
                                n !== u && (e[r] = [n, u].filter(Boolean).join(" "))
                            })), e
                        }), {})
                    }

                    function kt(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function xt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? kt(Object(r), !0).forEach((function(t) {
                                Nt(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Nt(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Tt(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }
                    var qt = {
                            clearButton: "aa-ClearButton",
                            detachedCancelButton: "aa-DetachedCancelButton",
                            detachedContainer: "aa-DetachedContainer",
                            detachedFormContainer: "aa-DetachedFormContainer",
                            detachedOverlay: "aa-DetachedOverlay",
                            detachedSearchButton: "aa-DetachedSearchButton",
                            detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
                            detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
                            form: "aa-Form",
                            input: "aa-Input",
                            inputWrapper: "aa-InputWrapper",
                            inputWrapperPrefix: "aa-InputWrapperPrefix",
                            inputWrapperSuffix: "aa-InputWrapperSuffix",
                            item: "aa-Item",
                            label: "aa-Label",
                            list: "aa-List",
                            loadingIndicator: "aa-LoadingIndicator",
                            panel: "aa-Panel",
                            panelLayout: "aa-PanelLayout aa-Panel--scrollable",
                            root: "aa-Autocomplete",
                            source: "aa-Source",
                            sourceFooter: "aa-SourceFooter",
                            sourceHeader: "aa-SourceHeader",
                            sourceNoResults: "aa-SourceNoResults",
                            submitButton: "aa-SubmitButton"
                        },
                        Rt = function(e, t) {
                            lt(e.children, t)
                        },
                        Lt = {
                            createElement: He,
                            Fragment: Ve
                        };

                    function Mt(e) {
                        var t = e.panelPlacement,
                            r = e.container,
                            n = e.form,
                            u = e.environment,
                            o = r.getBoundingClientRect(),
                            i = (u.pageYOffset || u.document.documentElement.scrollTop || u.document.body.scrollTop || 0) + o.top + o.height;
                        switch (t) {
                            case "start":
                                return {
                                    top: i,
                                    left: o.left
                                };
                            case "end":
                                return {
                                    top: i,
                                    right: u.document.documentElement.clientWidth - (o.left + o.width)
                                };
                            case "full-width":
                                return {
                                    top: i,
                                    left: 0,
                                    right: 0,
                                    width: "unset",
                                    maxWidth: "unset"
                                };
                            case "input-wrapper-width":
                                var a = n.getBoundingClientRect();
                                return {
                                    top: i,
                                    left: a.left,
                                    right: u.document.documentElement.clientWidth - (a.left + a.width),
                                    width: "unset",
                                    maxWidth: "unset"
                                };
                            default:
                                throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(t), " is not valid."))
                        }
                    }

                    function Ut() {
                        return (Ut = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function Ht(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function Wt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ht(Object(r), !0).forEach((function(t) {
                                Vt(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ht(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Vt(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Jt(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Qt(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Qt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qt(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Qt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function $t(e) {
                        return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    var zt = function(e) {
                        return e && "object" === $t(e)
                    };

                    function Kt() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.reduce((function(e, t) {
                            return Object.keys(t).forEach((function(r) {
                                var n = e[r],
                                    u = t[r];
                                Array.isArray(n) && Array.isArray(u) ? e[r] = n.concat.apply(n, Jt(u)) : zt(n) && zt(u) ? e[r] = Kt(n, u) : e[r] = u
                            })), e
                        }), {})
                    }

                    function Gt(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function Zt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Gt(Object(r), !0).forEach((function(t) {
                                Xt(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gt(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function Xt(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function Yt(e) {
                        var t, r = function() {
                                var e = [],
                                    t = [];

                                function r(r) {
                                    e.push(r);
                                    var n = r();
                                    t.push(n)
                                }
                                return {
                                    runEffect: r,
                                    cleanupEffects: function() {
                                        var e = t;
                                        t = [], e.forEach((function(e) {
                                            e()
                                        }))
                                    },
                                    runEffects: function() {
                                        var t = e;
                                        e = [], t.forEach((function(e) {
                                            r(e)
                                        }))
                                    }
                                }
                            }(),
                            n = r.runEffect,
                            u = r.cleanupEffects,
                            o = r.runEffects,
                            i = (t = [], {
                                reactive: function(e) {
                                    var r = e(),
                                        n = {
                                            _fn: e,
                                            _ref: {
                                                current: r
                                            },
                                            get value() {
                                                return this._ref.current
                                            },
                                            set value(e) {
                                                this._ref.current = e
                                            }
                                        };
                                    return t.push(n), n
                                },
                                runReactives: function() {
                                    t.forEach((function(e) {
                                        e._ref.current = e._fn()
                                    }))
                                }
                            }),
                            a = i.reactive,
                            c = i.runReactives,
                            l = se(!1),
                            p = se(e),
                            d = se(void 0),
                            v = a((function() {
                                return function(e) {
                                    var t, r = e.classNames,
                                        n = e.container,
                                        u = e.getEnvironmentProps,
                                        o = e.getFormProps,
                                        i = e.getInputProps,
                                        a = e.getItemProps,
                                        c = e.getLabelProps,
                                        l = e.getListProps,
                                        s = e.getPanelProps,
                                        p = e.getRootProps,
                                        d = e.panelContainer,
                                        v = e.panelPlacement,
                                        m = e.render,
                                        D = e.renderNoResults,
                                        h = e.renderer,
                                        y = e.detachedMediaQuery,
                                        g = e.components,
                                        b = e.translations,
                                        _ = Tt(e, ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"]),
                                        O = "undefined" != typeof window ? window : {},
                                        A = Bt(O, n);
                                    A.tagName;
                                    var E, C, F, P = null != h ? h : Lt,
                                        j = {
                                            Highlight: (E = P, C = E.createElement, F = E.Fragment, function(e) {
                                                var t = e.hit,
                                                    r = e.attribute,
                                                    n = e.tagName,
                                                    u = void 0 === n ? "mark" : n;
                                                return C(F, {}, mt({
                                                    hit: t,
                                                    attribute: r
                                                }).map((function(e, t) {
                                                    return e.isHighlighted ? C(u, {
                                                        key: t
                                                    }, e.value) : e.value
                                                })))
                                            }),
                                            ReverseHighlight: Ct(P),
                                            ReverseSnippet: wt(P),
                                            Snippet: St(P)
                                        };
                                    return {
                                        renderer: {
                                            classNames: It(qt, null != r ? r : {}),
                                            container: A,
                                            getEnvironmentProps: null != u ? u : function(e) {
                                                return e.props
                                            },
                                            getFormProps: null != o ? o : function(e) {
                                                return e.props
                                            },
                                            getInputProps: null != i ? i : function(e) {
                                                return e.props
                                            },
                                            getItemProps: null != a ? a : function(e) {
                                                return e.props
                                            },
                                            getLabelProps: null != c ? c : function(e) {
                                                return e.props
                                            },
                                            getListProps: null != l ? l : function(e) {
                                                return e.props
                                            },
                                            getPanelProps: null != s ? s : function(e) {
                                                return e.props
                                            },
                                            getRootProps: null != p ? p : function(e) {
                                                return e.props
                                            },
                                            panelContainer: d ? Bt(O, d) : O.document.body,
                                            panelPlacement: null != v ? v : "input-wrapper-width",
                                            render: null != m ? m : Rt,
                                            renderNoResults: D,
                                            renderer: P,
                                            detachedMediaQuery: null != y ? y : getComputedStyle(O.document.documentElement).getPropertyValue("--aa-detached-media-query"),
                                            components: xt(xt({}, j), g),
                                            translations: xt(xt({}, {
                                                clearButtonTitle: "Clear",
                                                detachedCancelButtonText: "Cancel",
                                                submitButtonTitle: "Submit"
                                            }), b)
                                        },
                                        core: xt(xt({}, _), {}, {
                                            id: null !== (t = _.id) && void 0 !== t ? t : f(),
                                            environment: O
                                        })
                                    }
                                }(p.current)
                            })),
                            m = a((function() {
                                return v.value.core.environment.matchMedia(v.value.renderer.detachedMediaQuery).matches
                            })),
                            D = a((function() {
                                return le(Zt(Zt({}, v.value.core), {}, {
                                    onStateChange: function(e) {
                                        var t, r, n;
                                        l.current = e.state.collections.some((function(e) {
                                            return e.source.templates.noResults
                                        })), null === (t = d.current) || void 0 === t || t.call(d, e), null === (r = (n = v.value.core).onStateChange) || void 0 === r || r.call(n, e)
                                    },
                                    shouldPanelOpen: p.current.shouldPanelOpen || function(e) {
                                        var t = e.state;
                                        if (m.value) return !0;
                                        var r = s(t) > 0;
                                        if (!v.value.core.openOnFocus && !t.query) return r;
                                        var n = Boolean(l.current || v.value.renderer.renderNoResults);
                                        return !r && n || r
                                    }
                                }))
                            })),
                            h = se(Zt({
                                collections: [],
                                completion: null,
                                context: {},
                                isOpen: !1,
                                query: "",
                                activeItemId: null,
                                status: "idle"
                            }, v.value.core.initialState)),
                            y = {
                                getEnvironmentProps: v.value.renderer.getEnvironmentProps,
                                getFormProps: v.value.renderer.getFormProps,
                                getInputProps: v.value.renderer.getInputProps,
                                getItemProps: v.value.renderer.getItemProps,
                                getLabelProps: v.value.renderer.getLabelProps,
                                getListProps: v.value.renderer.getListProps,
                                getPanelProps: v.value.renderer.getPanelProps,
                                getRootProps: v.value.renderer.getRootProps
                            },
                            g = {
                                setActiveItemId: D.value.setActiveItemId,
                                setQuery: D.value.setQuery,
                                setCollections: D.value.setCollections,
                                setIsOpen: D.value.setIsOpen,
                                setStatus: D.value.setStatus,
                                setContext: D.value.setContext,
                                refresh: D.value.refresh
                            },
                            b = a((function() {
                                return Ie({
                                    autocomplete: D.value,
                                    autocompleteScopeApi: g,
                                    classNames: v.value.renderer.classNames,
                                    environment: v.value.core.environment,
                                    isDetached: m.value,
                                    placeholder: v.value.core.placeholder,
                                    propGetters: y,
                                    setIsModalOpen: E,
                                    state: h.current,
                                    translations: v.value.renderer.translations
                                })
                            }));

                        function _() {
                            ge(b.value.panel, {
                                style: m.value ? {} : Mt({
                                    panelPlacement: v.value.renderer.panelPlacement,
                                    container: b.value.root,
                                    form: b.value.form,
                                    environment: v.value.core.environment
                                })
                            })
                        }

                        function O(e) {
                            h.current = e;
                            var t = {
                                    autocomplete: D.value,
                                    autocompleteScopeApi: g,
                                    classNames: v.value.renderer.classNames,
                                    components: v.value.renderer.components,
                                    container: v.value.renderer.container,
                                    createElement: v.value.renderer.renderer.createElement,
                                    dom: b.value,
                                    Fragment: v.value.renderer.renderer.Fragment,
                                    panelContainer: m.value ? b.value.detachedContainer : v.value.renderer.panelContainer,
                                    propGetters: y,
                                    state: h.current
                                },
                                r = !s(e) && !l.current && v.value.renderer.renderNoResults || v.value.renderer.render;
                            ! function(e) {
                                var t = e.autocomplete,
                                    r = e.autocompleteScopeApi,
                                    n = e.dom,
                                    u = e.propGetters,
                                    o = e.state;
                                be(n.root, u.getRootProps(Wt({
                                    state: o,
                                    props: t.getRootProps({})
                                }, r))), be(n.input, u.getInputProps(Wt({
                                    state: o,
                                    props: t.getInputProps({
                                        inputElement: n.input
                                    }),
                                    inputElement: n.input
                                }, r))), ge(n.label, {
                                    hidden: "stalled" === o.status
                                }), ge(n.loadingIndicator, {
                                    hidden: "stalled" !== o.status
                                }), ge(n.clearButton, {
                                    hidden: !o.query
                                })
                            }(t),
                            function(e, t) {
                                var r = t.autocomplete,
                                    n = t.autocompleteScopeApi,
                                    u = t.classNames,
                                    o = t.createElement,
                                    i = t.dom,
                                    a = t.Fragment,
                                    c = t.panelContainer,
                                    l = t.propGetters,
                                    s = t.state,
                                    p = t.components;
                                if (s.isOpen) {
                                    c.contains(i.panel) || "loading" === s.status || c.appendChild(i.panel), i.panel.classList.toggle("aa-Panel--stalled", "stalled" === s.status);
                                    var f = s.collections.filter((function(e) {
                                            var t = e.source,
                                                r = e.items;
                                            return t.templates.noResults || r.length > 0
                                        })).map((function(e, t) {
                                            var i = e.source,
                                                c = e.items;
                                            return o("section", {
                                                key: t,
                                                className: u.source,
                                                "data-autocomplete-source-id": i.sourceId
                                            }, i.templates.header && o("div", {
                                                className: u.sourceHeader
                                            }, i.templates.header({
                                                components: p,
                                                createElement: o,
                                                Fragment: a,
                                                items: c,
                                                source: i,
                                                state: s
                                            })), i.templates.noResults && 0 === c.length ? o("div", {
                                                className: u.sourceNoResults
                                            }, i.templates.noResults({
                                                components: p,
                                                createElement: o,
                                                Fragment: a,
                                                source: i,
                                                state: s
                                            })) : o("ul", Ut({
                                                className: u.list
                                            }, l.getListProps(Wt({
                                                state: s,
                                                props: r.getListProps({})
                                            }, n))), c.map((function(e) {
                                                var t = r.getItemProps({
                                                    item: e,
                                                    source: i
                                                });
                                                return o("li", Ut({
                                                    key: t.id,
                                                    className: u.item
                                                }, l.getItemProps(Wt({
                                                    state: s,
                                                    props: t
                                                }, n))), i.templates.item({
                                                    components: p,
                                                    createElement: o,
                                                    Fragment: a,
                                                    item: e,
                                                    state: s
                                                }))
                                            }))), i.templates.footer && o("div", {
                                                className: u.sourceFooter
                                            }, i.templates.footer({
                                                components: p,
                                                createElement: o,
                                                Fragment: a,
                                                items: c,
                                                source: i,
                                                state: s
                                            })))
                                        })),
                                        d = o(a, null, o("div", {
                                            className: u.panelLayout
                                        }, f), o("div", {
                                            className: "aa-GradientBottom"
                                        })),
                                        v = f.reduce((function(e, t) {
                                            return e[t.props["data-autocomplete-source-id"]] = t, e
                                        }), {});
                                    e(Wt({
                                        children: d,
                                        state: s,
                                        sections: f,
                                        elements: v,
                                        createElement: o,
                                        Fragment: a,
                                        components: p
                                    }, n), i.panel)
                                } else c.contains(i.panel) && c.removeChild(i.panel)
                            }(r, t)
                        }

                        function A() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            u(), p.current = Kt(v.value.renderer, v.value.core, {
                                initialState: h.current
                            }, e), c(), o(), D.value.refresh().then((function() {
                                O(h.current)
                            }))
                        }

                        function E(e) {
                            requestAnimationFrame((function() {
                                var t = v.value.core.environment.document.body.contains(b.value.detachedOverlay);
                                e !== t && (e ? (v.value.core.environment.document.body.appendChild(b.value.detachedOverlay), v.value.core.environment.document.body.classList.add("aa-Detached"), b.value.input.focus()) : (v.value.core.environment.document.body.removeChild(b.value.detachedOverlay), v.value.core.environment.document.body.classList.remove("aa-Detached"), D.value.setQuery(""), D.value.refresh()))
                            }))
                        }
                        return n((function() {
                            var e = D.value.getEnvironmentProps({
                                formElement: b.value.form,
                                panelElement: b.value.panel,
                                inputElement: b.value.input
                            });
                            return ge(v.value.core.environment, e),
                                function() {
                                    ge(v.value.core.environment, Object.keys(e).reduce((function(e, t) {
                                        return Zt(Zt({}, e), {}, Xt({}, t, void 0))
                                    }), {}))
                                }
                        })), n((function() {
                            var e = m.value ? v.value.core.environment.document.body : v.value.renderer.panelContainer,
                                t = m.value ? b.value.detachedOverlay : b.value.panel;
                            return m.value && h.current.isOpen && E(!0), O(h.current),
                                function() {
                                    e.contains(t) && e.removeChild(t)
                                }
                        })), n((function() {
                            var e = v.value.renderer.container;
                            return e.appendChild(b.value.root),
                                function() {
                                    e.removeChild(b.value.root)
                                }
                        })), n((function() {
                            var e = pe((function(e) {
                                O(e.state)
                            }), 0);
                            return d.current = function(t) {
                                    var r = t.state,
                                        n = t.prevState;
                                    m.value && n.isOpen !== r.isOpen && E(r.isOpen), m.value || !r.isOpen || n.isOpen || _(), r.query !== n.query && v.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable").forEach((function(e) {
                                        0 !== e.scrollTop && (e.scrollTop = 0)
                                    })), e({
                                        state: r
                                    })
                                },
                                function() {
                                    d.current = void 0
                                }
                        })), n((function() {
                            var e = pe((function() {
                                var e = m.value;
                                m.value = v.value.core.environment.matchMedia(v.value.renderer.detachedMediaQuery).matches, e !== m.value ? A({}) : requestAnimationFrame(_)
                            }), 20);
                            return v.value.core.environment.addEventListener("resize", e),
                                function() {
                                    v.value.core.environment.removeEventListener("resize", e)
                                }
                        })), n((function() {
                            if (!m.value) return function() {};

                            function e(e) {
                                b.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", e)
                            }

                            function t(t) {
                                e(t.matches)
                            }
                            var r = v.value.core.environment.matchMedia(getComputedStyle(v.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
                            e(r.matches);
                            var n = Boolean(r.addEventListener);
                            return n ? r.addEventListener("change", t) : r.addListener(t),
                                function() {
                                    n ? r.removeEventListener("change", t) : r.removeListener(t)
                                }
                        })), n((function() {
                            return requestAnimationFrame(_),
                                function() {}
                        })), Zt(Zt({}, g), {}, {
                            update: A,
                            destroy: function() {
                                u()
                            }
                        })
                    }
                },
                137: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        autocomplete: () => n.H,
                        getAlgoliaFacets: () => u.U,
                        getAlgoliaResults: () => u.g
                    });
                    var n = r(71),
                        u = r(877),
                        o = r(641),
                        i = {};
                    for (const e in o)["default", "autocomplete", "getAlgoliaFacets", "getAlgoliaResults"].indexOf(e) < 0 && (i[e] = () => o[e]);
                    r.d(t, i)
                },
                877: (e, t, r) => {
                    "use strict";

                    function n(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function u(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? n(Object(r), !0).forEach((function(t) {
                                o(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function o(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    r.d(t, {
                        U: () => _,
                        g: () => O
                    });
                    var i = r(773),
                        a = "1.3.0";

                    function c(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function l(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(r), !0).forEach((function(t) {
                                s(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function s(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function p(e, t) {
                        if (null == e) return {};
                        var r, n, u = function(e, t) {
                            if (null == e) return {};
                            var r, n, u = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                            return u
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                        }
                        return u
                    }

                    function f(e) {
                        return function(e) {
                            if (Array.isArray(e)) return d(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return d(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function d(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function v(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function m(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(Object(r), !0).forEach((function(t) {
                                D(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function D(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var h = function(e) {
                        function t(t) {
                            return e({
                                searchClient: t.searchClient,
                                queries: t.requests.map((function(e) {
                                    return e.query
                                }))
                            }).then((function(e) {
                                return e.map((function(e, r) {
                                    var n = t.requests[r];
                                    return {
                                        items: e,
                                        sourceId: n.sourceId,
                                        transformResponse: n.transformResponse
                                    }
                                }))
                            }))
                        }
                        return function(e) {
                            return function(r) {
                                return u(u({
                                    execute: t
                                }, e), r)
                            }
                        }
                    }((function(e) {
                        return t = m(m({}, e), {}, {
                            userAgents: [{
                                segment: "autocomplete-js",
                                version: "1.3.0"
                            }]
                        }), r = t.searchClient, n = t.queries, u = t.userAgents, o = void 0 === u ? [] : u, "function" == typeof r.addAlgoliaAgent && [{
                            segment: "autocomplete-core",
                            version: a
                        }].concat(f(o)).forEach((function(e) {
                            var t = e.segment,
                                n = e.version;
                            r.addAlgoliaAgent(t, n)
                        })), r.search(n.map((function(e) {
                            var t = e.params;
                            return l(l({}, p(e, ["params"])), {}, {
                                params: l({
                                    hitsPerPage: 5,
                                    highlightPreTag: i.S,
                                    highlightPostTag: i.Z
                                }, t)
                            })
                        }))).then((function(e) {
                            return e.results
                        }));
                        var t, r, n, u, o
                    }));

                    function y(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function g(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? y(Object(r), !0).forEach((function(t) {
                                b(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function b(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }

                    function _(e) {
                        var t = h({
                                transformResponse: function(e) {
                                    return e.facetHits
                                }
                            }),
                            r = e.queries.map((function(e) {
                                return g(g({}, e), {}, {
                                    type: "facet"
                                })
                            }));
                        return t(g(g({}, e), {}, {
                            queries: r
                        }))
                    }
                    var O = h({
                        transformResponse: function(e) {
                            return e.hits
                        }
                    })
                },
                838: () => {},
                508: () => {},
                793: () => {},
                7: () => {},
                673: () => {},
                590: () => {},
                806: () => {},
                229: () => {},
                352: () => {},
                735: () => {},
                724: () => {},
                699: () => {},
                392: () => {},
                218: () => {},
                641: (e, t, r) => {
                    "use strict";
                    r.r(t);
                    var n = r(838),
                        u = {};
                    for (const e in n) "default" !== e && (u[e] = () => n[e]);
                    r.d(t, u);
                    var o = r(508);
                    u = {};
                    for (const e in o) "default" !== e && (u[e] = () => o[e]);
                    r.d(t, u);
                    var i = r(793);
                    u = {};
                    for (const e in i) "default" !== e && (u[e] = () => i[e]);
                    r.d(t, u);
                    var a = r(7);
                    u = {};
                    for (const e in a) "default" !== e && (u[e] = () => a[e]);
                    r.d(t, u);
                    var c = r(673);
                    u = {};
                    for (const e in c) "default" !== e && (u[e] = () => c[e]);
                    r.d(t, u);
                    var l = r(590);
                    u = {};
                    for (const e in l) "default" !== e && (u[e] = () => l[e]);
                    r.d(t, u);
                    var s = r(806);
                    u = {};
                    for (const e in s) "default" !== e && (u[e] = () => s[e]);
                    r.d(t, u);
                    var p = r(229);
                    u = {};
                    for (const e in p) "default" !== e && (u[e] = () => p[e]);
                    r.d(t, u);
                    var f = r(352);
                    u = {};
                    for (const e in f) "default" !== e && (u[e] = () => f[e]);
                    r.d(t, u);
                    var d = r(735);
                    u = {};
                    for (const e in d) "default" !== e && (u[e] = () => d[e]);
                    r.d(t, u);
                    var v = r(724);
                    u = {};
                    for (const e in v) "default" !== e && (u[e] = () => v[e]);
                    r.d(t, u);
                    var m = r(699);
                    u = {};
                    for (const e in m) "default" !== e && (u[e] = () => m[e]);
                    r.d(t, u);
                    var D = r(392);
                    u = {};
                    for (const e in D) "default" !== e && (u[e] = () => D[e]);
                    r.d(t, u);
                    var h = r(218);
                    u = {};
                    for (const e in h) "default" !== e && (u[e] = () => h[e]);
                    r.d(t, u)
                },
                773: (e, t, r) => {
                    "use strict";
                    r.d(t, {
                        S: () => n,
                        Z: () => u
                    });
                    var n = "__aa-highlight__",
                        u = "__/aa-highlight__"
                },
                934: function(e) {
                    /*! algoliasearch-lite.umd.js | 4.10.5 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
                    e.exports = function() {
                        "use strict";

                        function e(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }

                        function t(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), r.push.apply(r, n)
                            }
                            return r
                        }

                        function r(r) {
                            for (var n = 1; n < arguments.length; n++) {
                                var u = null != arguments[n] ? arguments[n] : {};
                                n % 2 ? t(Object(u), !0).forEach((function(t) {
                                    e(r, t, u[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : t(Object(u)).forEach((function(e) {
                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(u, e))
                                }))
                            }
                            return r
                        }

                        function n(e, t) {
                            if (null == e) return {};
                            var r, n, u = function(e, t) {
                                if (null == e) return {};
                                var r, n, u = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (u[r] = e[r]);
                                return u
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                            }
                            return u
                        }

                        function u(e, t) {
                            return function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e, t) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                    var r = [],
                                        n = !0,
                                        u = !1,
                                        o = void 0;
                                    try {
                                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                                    } catch (e) {
                                        u = !0, o = e
                                    } finally {
                                        try {
                                            n || null == a.return || a.return()
                                        } finally {
                                            if (u) throw o
                                        }
                                    }
                                    return r
                                }
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }()
                        }

                        function o(e) {
                            return function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                                    return r
                                }
                            }(e) || function(e) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        }

                        function i(e) {
                            var t, r = "algoliasearch-client-js-".concat(e.key),
                                n = function() {
                                    return void 0 === t && (t = e.localStorage || window.localStorage), t
                                },
                                o = function() {
                                    return JSON.parse(n().getItem(r) || "{}")
                                };
                            return {
                                get: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return Promise.resolve().then((function() {
                                        var r = JSON.stringify(e),
                                            n = o()[r];
                                        return Promise.all([n || t(), void 0 !== n])
                                    })).then((function(e) {
                                        var t = u(e, 2),
                                            n = t[0],
                                            o = t[1];
                                        return Promise.all([n, o || r.miss(n)])
                                    })).then((function(e) {
                                        return u(e, 1)[0]
                                    }))
                                },
                                set: function(e, t) {
                                    return Promise.resolve().then((function() {
                                        var u = o();
                                        return u[JSON.stringify(e)] = t, n().setItem(r, JSON.stringify(u)), t
                                    }))
                                },
                                delete: function(e) {
                                    return Promise.resolve().then((function() {
                                        var t = o();
                                        delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t))
                                    }))
                                },
                                clear: function() {
                                    return Promise.resolve().then((function() {
                                        n().removeItem(r)
                                    }))
                                }
                            }
                        }

                        function a(e) {
                            var t = o(e.caches),
                                r = t.shift();
                            return void 0 === r ? {
                                get: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return t().then((function(e) {
                                        return Promise.all([e, r.miss(e)])
                                    })).then((function(e) {
                                        return u(e, 1)[0]
                                    }))
                                },
                                set: function(e, t) {
                                    return Promise.resolve(t)
                                },
                                delete: function(e) {
                                    return Promise.resolve()
                                },
                                clear: function() {
                                    return Promise.resolve()
                                }
                            } : {
                                get: function(e, n) {
                                    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return r.get(e, n, u).catch((function() {
                                        return a({
                                            caches: t
                                        }).get(e, n, u)
                                    }))
                                },
                                set: function(e, n) {
                                    return r.set(e, n).catch((function() {
                                        return a({
                                            caches: t
                                        }).set(e, n)
                                    }))
                                },
                                delete: function(e) {
                                    return r.delete(e).catch((function() {
                                        return a({
                                            caches: t
                                        }).delete(e)
                                    }))
                                },
                                clear: function() {
                                    return r.clear().catch((function() {
                                        return a({
                                            caches: t
                                        }).clear()
                                    }))
                                }
                            }
                        }

                        function c() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                    serializable: !0
                                },
                                t = {};
                            return {
                                get: function(r, n) {
                                    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                            miss: function() {
                                                return Promise.resolve()
                                            }
                                        },
                                        o = JSON.stringify(r);
                                    if (o in t) return Promise.resolve(e.serializable ? JSON.parse(t[o]) : t[o]);
                                    var i = n(),
                                        a = u && u.miss || function() {
                                            return Promise.resolve()
                                        };
                                    return i.then((function(e) {
                                        return a(e)
                                    })).then((function() {
                                        return i
                                    }))
                                },
                                set: function(r, n) {
                                    return t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n)
                                },
                                delete: function(e) {
                                    return delete t[JSON.stringify(e)], Promise.resolve()
                                },
                                clear: function() {
                                    return t = {}, Promise.resolve()
                                }
                            }
                        }

                        function l(e) {
                            for (var t = e.length - 1; t > 0; t--) {
                                var r = Math.floor(Math.random() * (t + 1)),
                                    n = e[t];
                                e[t] = e[r], e[r] = n
                            }
                            return e
                        }

                        function s(e, t) {
                            return t ? (Object.keys(t).forEach((function(r) {
                                e[r] = t[r](e)
                            })), e) : e
                        }

                        function p(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            var u = 0;
                            return e.replace(/%s/g, (function() {
                                return encodeURIComponent(r[u++])
                            }))
                        }
                        var f = {
                            WithinQueryParameters: 0,
                            WithinHeaders: 1
                        };

                        function d(e, t) {
                            var r = e || {},
                                n = r.data || {};
                            return Object.keys(r).forEach((function(e) {
                                -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e])
                            })), {
                                data: Object.entries(n).length > 0 ? n : void 0,
                                timeout: r.timeout || t,
                                headers: r.headers || {},
                                queryParameters: r.queryParameters || {},
                                cacheable: r.cacheable
                            }
                        }
                        var v = {
                                Read: 1,
                                Write: 2,
                                Any: 3
                            },
                            m = 1,
                            D = 2,
                            h = 3;

                        function y(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                            return r(r({}, e), {}, {
                                status: t,
                                lastUpdate: Date.now()
                            })
                        }

                        function g(e) {
                            return "string" == typeof e ? {
                                protocol: "https",
                                url: e,
                                accept: v.Any
                            } : {
                                protocol: e.protocol || "https",
                                url: e.url,
                                accept: e.accept || v.Any
                            }
                        }
                        var b = "GET",
                            _ = "POST";

                        function O(e, t) {
                            return Promise.all(t.map((function(t) {
                                return e.get(t, (function() {
                                    return Promise.resolve(y(t))
                                }))
                            }))).then((function(e) {
                                var r = e.filter((function(e) {
                                        return function(e) {
                                            return e.status === m || Date.now() - e.lastUpdate > 12e4
                                        }(e)
                                    })),
                                    n = e.filter((function(e) {
                                        return function(e) {
                                            return e.status === h && Date.now() - e.lastUpdate <= 12e4
                                        }(e)
                                    })),
                                    u = [].concat(o(r), o(n));
                                return {
                                    getTimeout: function(e, t) {
                                        return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t
                                    },
                                    statelessHosts: u.length > 0 ? u.map((function(e) {
                                        return g(e)
                                    })) : t
                                }
                            }))
                        }

                        function A(e, t, n, u) {
                            var i = [],
                                a = function(e, t) {
                                    if (e.method !== b && (void 0 !== e.data || void 0 !== t.data)) {
                                        var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
                                        return JSON.stringify(n)
                                    }
                                }(n, u),
                                c = function(e, t) {
                                    var n = r(r({}, e.headers), t.headers),
                                        u = {};
                                    return Object.keys(n).forEach((function(e) {
                                        var t = n[e];
                                        u[e.toLowerCase()] = t
                                    })), u
                                }(e, u),
                                l = n.method,
                                s = n.method !== b ? {} : r(r({}, n.data), u.data),
                                p = r(r(r({
                                    "x-algolia-agent": e.userAgent.value
                                }, e.queryParameters), s), u.queryParameters),
                                f = 0,
                                d = function t(r, o) {
                                    var s = r.pop();
                                    if (void 0 === s) throw {
                                        name: "RetryError",
                                        message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                        transporterStackTrace: P(i)
                                    };
                                    var d = {
                                            data: a,
                                            headers: c,
                                            method: l,
                                            url: C(s, n.path, p),
                                            connectTimeout: o(f, e.timeouts.connect),
                                            responseTimeout: o(f, u.timeout)
                                        },
                                        v = function(e) {
                                            var t = {
                                                request: d,
                                                response: e,
                                                host: s,
                                                triesLeft: r.length
                                            };
                                            return i.push(t), t
                                        },
                                        m = {
                                            onSuccess: function(e) {
                                                return function(e) {
                                                    try {
                                                        return JSON.parse(e.content)
                                                    } catch (t) {
                                                        throw function(e, t) {
                                                            return {
                                                                name: "DeserializationError",
                                                                message: e,
                                                                response: t
                                                            }
                                                        }(t.message, e)
                                                    }
                                                }(e)
                                            },
                                            onRetry: function(n) {
                                                var u = v(n);
                                                return n.isTimedOut && f++, Promise.all([e.logger.info("Retryable failure", j(u)), e.hostsCache.set(s, y(s, n.isTimedOut ? h : D))]).then((function() {
                                                    return t(r, o)
                                                }))
                                            },
                                            onFail: function(e) {
                                                throw v(e),
                                                    function(e, t) {
                                                        var r = e.content,
                                                            n = e.status,
                                                            u = r;
                                                        try {
                                                            u = JSON.parse(r).message
                                                        } catch (e) {}
                                                        return function(e, t, r) {
                                                            return {
                                                                name: "ApiError",
                                                                message: e,
                                                                status: t,
                                                                transporterStackTrace: r
                                                            }
                                                        }(u, n, t)
                                                    }(e, P(i))
                                            }
                                        };
                                    return e.requester.send(d).then((function(e) {
                                        return function(e, t) {
                                            return function(e) {
                                                var t = e.status;
                                                return e.isTimedOut || function(e) {
                                                    var t = e.isTimedOut,
                                                        r = e.status;
                                                    return !t && 0 == ~~r
                                                }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                                            }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e)
                                        }(e, m)
                                    }))
                                };
                            return O(e.hostsCache, t).then((function(e) {
                                return d(o(e.statelessHosts).reverse(), e.getTimeout)
                            }))
                        }

                        function E(e) {
                            var t = {
                                value: "Algolia for JavaScript (".concat(e, ")"),
                                add: function(e) {
                                    var r = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                    return -1 === t.value.indexOf(r) && (t.value = "".concat(t.value).concat(r)), t
                                }
                            };
                            return t
                        }

                        function C(e, t, r) {
                            var n = F(r),
                                u = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
                            return n.length && (u += "?".concat(n)), u
                        }

                        function F(e) {
                            return Object.keys(e).map((function(t) {
                                return p("%s=%s", t, (r = e[t], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
                                var r
                            })).join("&")
                        }

                        function P(e) {
                            return e.map((function(e) {
                                return j(e)
                            }))
                        }

                        function j(e) {
                            var t = e.request.headers["x-algolia-api-key"] ? {
                                "x-algolia-api-key": "*****"
                            } : {};
                            return r(r({}, e), {}, {
                                request: r(r({}, e.request), {}, {
                                    headers: r(r({}, e.request.headers), t)
                                })
                            })
                        }
                        var w = function(e) {
                                var t = e.appId,
                                    n = function(e, t, r) {
                                        var n = {
                                            "x-algolia-api-key": r,
                                            "x-algolia-application-id": t
                                        };
                                        return {
                                            headers: function() {
                                                return e === f.WithinHeaders ? n : {}
                                            },
                                            queryParameters: function() {
                                                return e === f.WithinQueryParameters ? n : {}
                                            }
                                        }
                                    }(void 0 !== e.authMode ? e.authMode : f.WithinHeaders, t, e.apiKey),
                                    o = function(e) {
                                        var t = e.hostsCache,
                                            r = e.logger,
                                            n = e.requester,
                                            o = e.requestsCache,
                                            i = e.responsesCache,
                                            a = e.timeouts,
                                            c = e.userAgent,
                                            l = e.hosts,
                                            s = e.queryParameters,
                                            p = {
                                                hostsCache: t,
                                                logger: r,
                                                requester: n,
                                                requestsCache: o,
                                                responsesCache: i,
                                                timeouts: a,
                                                userAgent: c,
                                                headers: e.headers,
                                                queryParameters: s,
                                                hosts: l.map((function(e) {
                                                    return g(e)
                                                })),
                                                read: function(e, t) {
                                                    var r = d(t, p.timeouts.read),
                                                        n = function() {
                                                            return A(p, p.hosts.filter((function(e) {
                                                                return 0 != (e.accept & v.Read)
                                                            })), e, r)
                                                        };
                                                    if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
                                                    var o = {
                                                        request: e,
                                                        mappedRequestOptions: r,
                                                        transporter: {
                                                            queryParameters: p.queryParameters,
                                                            headers: p.headers
                                                        }
                                                    };
                                                    return p.responsesCache.get(o, (function() {
                                                        return p.requestsCache.get(o, (function() {
                                                            return p.requestsCache.set(o, n()).then((function(e) {
                                                                return Promise.all([p.requestsCache.delete(o), e])
                                                            }), (function(e) {
                                                                return Promise.all([p.requestsCache.delete(o), Promise.reject(e)])
                                                            })).then((function(e) {
                                                                var t = u(e, 2);
                                                                return t[0], t[1]
                                                            }))
                                                        }))
                                                    }), {
                                                        miss: function(e) {
                                                            return p.responsesCache.set(o, e)
                                                        }
                                                    })
                                                },
                                                write: function(e, t) {
                                                    return A(p, p.hosts.filter((function(e) {
                                                        return 0 != (e.accept & v.Write)
                                                    })), e, d(t, p.timeouts.write))
                                                }
                                            };
                                        return p
                                    }(r(r({
                                        hosts: [{
                                            url: "".concat(t, "-dsn.algolia.net"),
                                            accept: v.Read
                                        }, {
                                            url: "".concat(t, ".algolia.net"),
                                            accept: v.Write
                                        }].concat(l([{
                                            url: "".concat(t, "-1.algolianet.com")
                                        }, {
                                            url: "".concat(t, "-2.algolianet.com")
                                        }, {
                                            url: "".concat(t, "-3.algolianet.com")
                                        }]))
                                    }, e), {}, {
                                        headers: r(r(r({}, n.headers()), {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }), e.headers),
                                        queryParameters: r(r({}, n.queryParameters()), e.queryParameters)
                                    }));
                                return s({
                                    transporter: o,
                                    appId: t,
                                    addAlgoliaAgent: function(e, t) {
                                        o.userAgent.add({
                                            segment: e,
                                            version: t
                                        })
                                    },
                                    clearCache: function() {
                                        return Promise.all([o.requestsCache.clear(), o.responsesCache.clear()]).then((function() {}))
                                    }
                                }, e.methods)
                            },
                            S = function(e) {
                                return function(t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return s({
                                        transporter: e.transporter,
                                        appId: e.appId,
                                        indexName: t
                                    }, r.methods)
                                }
                            },
                            B = function(e) {
                                return function(t, n) {
                                    var u = t.map((function(e) {
                                        return r(r({}, e), {}, {
                                            params: F(e.params || {})
                                        })
                                    }));
                                    return e.transporter.read({
                                        method: _,
                                        path: "1/indexes/*/queries",
                                        data: {
                                            requests: u
                                        },
                                        cacheable: !0
                                    }, n)
                                }
                            },
                            I = function(e) {
                                return function(t, u) {
                                    return Promise.all(t.map((function(t) {
                                        var o = t.params,
                                            i = o.facetName,
                                            a = o.facetQuery,
                                            c = n(o, ["facetName", "facetQuery"]);
                                        return S(e)(t.indexName, {
                                            methods: {
                                                searchForFacetValues: N
                                            }
                                        }).searchForFacetValues(i, a, r(r({}, u), c))
                                    })))
                                }
                            },
                            k = function(e) {
                                return function(t, r, n) {
                                    return e.transporter.read({
                                        method: _,
                                        path: p("1/answers/%s/prediction", e.indexName),
                                        data: {
                                            query: t,
                                            queryLanguages: r
                                        },
                                        cacheable: !0
                                    }, n)
                                }
                            },
                            x = function(e) {
                                return function(t, r) {
                                    return e.transporter.read({
                                        method: _,
                                        path: p("1/indexes/%s/query", e.indexName),
                                        data: {
                                            query: t
                                        },
                                        cacheable: !0
                                    }, r)
                                }
                            },
                            N = function(e) {
                                return function(t, r, n) {
                                    return e.transporter.read({
                                        method: _,
                                        path: p("1/indexes/%s/facets/%s/query", e.indexName, t),
                                        data: {
                                            facetQuery: r
                                        },
                                        cacheable: !0
                                    }, n)
                                }
                            },
                            T = 1,
                            q = 2,
                            R = 3;

                        function L(e, t, n) {
                            var u, o = {
                                appId: e,
                                apiKey: t,
                                timeouts: {
                                    connect: 1,
                                    read: 2,
                                    write: 30
                                },
                                requester: {
                                    send: function(e) {
                                        return new Promise((function(t) {
                                            var r = new XMLHttpRequest;
                                            r.open(e.method, e.url, !0), Object.keys(e.headers).forEach((function(t) {
                                                return r.setRequestHeader(t, e.headers[t])
                                            }));
                                            var n, u = function(e, n) {
                                                    return setTimeout((function() {
                                                        r.abort(), t({
                                                            status: 0,
                                                            content: n,
                                                            isTimedOut: !0
                                                        })
                                                    }), 1e3 * e)
                                                },
                                                o = u(e.connectTimeout, "Connection timeout");
                                            r.onreadystatechange = function() {
                                                r.readyState > r.OPENED && void 0 === n && (clearTimeout(o), n = u(e.responseTimeout, "Socket timeout"))
                                            }, r.onerror = function() {
                                                0 === r.status && (clearTimeout(o), clearTimeout(n), t({
                                                    content: r.responseText || "Network request failed",
                                                    status: r.status,
                                                    isTimedOut: !1
                                                }))
                                            }, r.onload = function() {
                                                clearTimeout(o), clearTimeout(n), t({
                                                    content: r.responseText,
                                                    status: r.status,
                                                    isTimedOut: !1
                                                })
                                            }, r.send(e.data)
                                        }))
                                    }
                                },
                                logger: (u = R, {
                                    debug: function(e, t) {
                                        return T >= u && console.debug(e, t), Promise.resolve()
                                    },
                                    info: function(e, t) {
                                        return q >= u && console.info(e, t), Promise.resolve()
                                    },
                                    error: function(e, t) {
                                        return console.error(e, t), Promise.resolve()
                                    }
                                }),
                                responsesCache: c(),
                                requestsCache: c({
                                    serializable: !1
                                }),
                                hostsCache: a({
                                    caches: [i({
                                        key: "".concat("4.10.5", "-").concat(e)
                                    }), c()]
                                }),
                                userAgent: E("4.10.5").add({
                                    segment: "Browser",
                                    version: "lite"
                                }),
                                authMode: f.WithinQueryParameters
                            };
                            return w(r(r(r({}, o), n), {}, {
                                methods: {
                                    search: B,
                                    searchForFacetValues: I,
                                    multipleQueries: B,
                                    multipleSearchForFacetValues: I,
                                    initIndex: function(e) {
                                        return function(t) {
                                            return S(e)(t, {
                                                methods: {
                                                    search: x,
                                                    searchForFacetValues: N,
                                                    findAnswers: k
                                                }
                                            })
                                        }
                                    }
                                }
                            }))
                        }
                        return L.version = "4.10.5", L
                    }()
                },
                756: (e, t, r) => {
                    "use strict";

                    function n(e, t) {
                        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!r) {
                            if (Array.isArray(e) || (r = function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return u(e, t);
                                        var r = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
                                    }
                                }(e)) || t && e && "number" == typeof e.length) {
                                r && (e = r);
                                var n = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                r = r.call(e)
                            },
                            n: function() {
                                var e = r.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, i = e
                            },
                            f: function() {
                                try {
                                    a || null == r.return || r.return()
                                } finally {
                                    if (c) throw i
                                }
                            }
                        }
                    }

                    function u(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.algoliasearchNetlify = void 0;
                    var o = r(369),
                        i = {
                            analytics: !0,
                            hitsPerPage: 5,
                            debug: !1,
                            poweredBy: !0,
                            placeholder: "Search...",
                            openOnFocus: !1
                        },
                        a = ["appId", "apiKey", "selector", "siteId", "branch"],
                        c = [];
                    t.algoliasearchNetlify = function(e) {
                        var t, r = Object.assign(Object.assign({}, i), e),
                            u = n(a);
                        try {
                            for (u.s(); !(t = u.n()).done;) {
                                var l = t.value;
                                if (!r[l]) throw new Error("[algoliasearch-netlify] Missing mandatory key: ".concat(l))
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        var s = new o.AutocompleteWrapper(r);
                        c.push(s);
                        var p = function() {
                            s.render()
                        };
                        ["complete", "interactive"].includes(document.readyState) ? p() : document.addEventListener("DOMContentLoaded", p)
                    }
                },
                369: function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var u = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AutocompleteWrapper = void 0;
                    var o = r(137),
                        i = u(r(934)),
                        a = r(147),
                        c = r(920),
                        l = function() {
                            function e(t) {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.$themeNode = null, this.options = t, this.client = this.createClient(), this.indexName = this.computeIndexName()
                            }
                            var t, r, u;
                            return t = e, (r = [{
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = document.querySelector(this.options.selector);
                                    if (t) {
                                        var r = void 0;
                                        void 0 !== this.options.detached && (r = !0 === this.options.detached ? "" : !1 === this.options.detached ? "none" : this.options.detached.mediaQuery);
                                        var n = o.autocomplete({
                                            container: t,
                                            autoFocus: !1,
                                            placeholder: this.options.placeholder,
                                            debug: this.options.debug,
                                            openOnFocus: this.options.openOnFocus,
                                            panelPlacement: "input-wrapper-width",
                                            detachedMediaQuery: r,
                                            getSources: function() {
                                                return [e.getSources()]
                                            }
                                        });
                                        this.applyTheme(t.firstElementChild), this.autocomplete = n
                                    } else console.error("[algoliasearch-netlify] no element ".concat(this.options.selector, " found"))
                                }
                            }, {
                                key: "computeIndexName",
                                value: function() {
                                    var e = this.options,
                                        t = e.siteId,
                                        r = e.branch.trim().replace(/(?:(?![\x2D\.0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/g, "-").replace(/-{2,}/g, "-").toLocaleLowerCase();
                                    return "netlify_".concat(t, "_").concat(r, "_all")
                                }
                            }, {
                                key: "createClient",
                                value: function() {
                                    var e = i.default(this.options.appId, this.options.apiKey);
                                    return e.addAlgoliaAgent("Netlify integration ".concat(a.version)), e
                                }
                            }, {
                                key: "getSources",
                                value: function() {
                                    var e = this,
                                        t = this.options.poweredBy;
                                    return {
                                        sourceId: "algoliaHits",
                                        getItems: function(t) {
                                            var r = t.query;
                                            return o.getAlgoliaResults({
                                                searchClient: e.client,
                                                queries: [{
                                                    indexName: e.indexName,
                                                    query: r,
                                                    params: {
                                                        analytics: e.options.analytics,
                                                        hitsPerPage: e.options.hitsPerPage
                                                    }
                                                }]
                                            })
                                        },
                                        getItemUrl: function(e) {
                                            return e.item.url
                                        },
                                        templates: {
                                            header: function() {
                                                return ""
                                            },
                                            item: function(e) {
                                                var t = e.item,
                                                    r = e.components;
                                                return c.templates.item(t, r)
                                            },
                                            footer: function() {
                                                return t ? c.templates.poweredBy({
                                                    hostname: window.location.host
                                                }) : ""
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "applyTheme",
                                value: function(e) {
                                    if (e && this.options.theme) {
                                        var t = this.options.theme;
                                        this.$themeNode = function(e) {
                                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                n = null !== (t = null != r ? r : document.querySelector('link[rel=stylesheet][href*="algoliasearchNetlify"]')) && void 0 !== t ? t : document.getElementsByTagName("head")[0].lastChild,
                                                u = document.createElement("style");
                                            return u.setAttribute("type", "text/css"), u.appendChild(document.createTextNode(e)), n.parentNode.insertBefore(u, n.nextSibling)
                                        }(".aa-Autocomplete, .aa-Panel, .aa-DetachedContainer {\n      ".concat(t.mark && "--color-mark: ".concat(t.mark, ";"), "\n      ").concat(t.mark && "--color-background: ".concat(t.background, ";"), "\n      ").concat(t.mark && "--color-selected: ".concat(t.selected, ";"), "\n      ").concat(t.mark && "--color-text: ".concat(t.text, ";"), "\n      ").concat(t.mark && "--color-source-icon: ".concat(t.colorSourceIcon, ";"), "\n    }"), this.$themeNode)
                                    }
                                }
                            }]) && n(t.prototype, r), u && n(t, u), e
                        }();
                    t.AutocompleteWrapper = l
                },
                744: (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(756);
                    e.exports = n.algoliasearchNetlify
                },
                920: (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.templates = void 0;
                    var n = r(275);

                    function u(e, t) {
                        var r = [],
                            u = 0;
                        if (!e.hierarchy) return r;
                        for (var o = 1; o < 7 && u < 3; ++o) e.hierarchy["lvl".concat(o)] && e.hierarchy["lvl".concat(o)].length > 0 && (u > 0 && r.push(" > "), r.push(n.jsx(t.Highlight, {
                            hit: e,
                            attribute: "description"
                        }, void 0)), ++u);
                        return r
                    }

                    function o(e, t) {
                        var r, u, o = null === (r = e._snippetResult) || void 0 === r ? void 0 : r.description,
                            i = null === (u = e._snippetResult) || void 0 === u ? void 0 : u.content;
                        return o && "full" === o.matchLevel ? n.jsx(t.Snippet, {
                            hit: e,
                            attribute: "description"
                        }, void 0) : i && "full" === i.matchLevel ? n.jsx(t.Snippet, {
                            hit: e,
                            attribute: "content"
                        }, void 0) : o && !i ? n.jsx(t.Snippet, {
                            hit: e,
                            attribute: "description"
                        }, void 0) : i ? n.jsx(t.Snippet, {
                            hit: e,
                            attribute: "content"
                        }, void 0) : e.description || e.content || ""
                    }
                    t.templates = {
                        poweredBy: function(e) {
                            var t = e.hostname,
                                r = encodeURIComponent(t);
                            return n.jsxs("div", Object.assign({
                                className: "aa-powered-by"
                            }, {
                                children: ["Search by", n.jsx("a", Object.assign({
                                    href: "https://www.algolia.com/?utm_source=netlify&utm_medium=link&utm_campaign=autocomplete-".concat(r),
                                    className: "aa-powered-by-link"
                                }, {
                                    children: "Algolia"
                                }), void 0)]
                            }), void 0)
                        },
                        item: function(e, t) {
                            var r, i;
                            return n.jsx("a", Object.assign({
                                href: e.url
                            }, {
                                children: n.jsxs("div", Object.assign({
                                    className: "aa-ItemContent"
                                }, {
                                    children: [n.jsx("div", Object.assign({
                                        className: "aa-ItemIcon"
                                    }, {
                                        children: n.jsx("svg", Object.assign({
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20"
                                        }, {
                                            children: n.jsx("path", {
                                                d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
                                                stroke: "currentColor",
                                                fill: "none",
                                                fillRule: "evenodd",
                                                strokeLinejoin: "round"
                                            }, void 0)
                                        }), void 0)
                                    }), void 0), n.jsxs("div", {
                                        children: [n.jsx("div", Object.assign({
                                            className: "aa-ItemTitle"
                                        }, {
                                            children: null !== (i = null === (r = e.hierarchy) || void 0 === r ? void 0 : r.lvl0) && void 0 !== i ? i : n.jsx(t.Highlight, {
                                                hit: e,
                                                attribute: "title"
                                            }, void 0)
                                        }), void 0), e.hierarchy && n.jsx("div", Object.assign({
                                            className: "aa-ItemHierarchy"
                                        }, {
                                            children: u(e, t)
                                        }), void 0), n.jsx("div", Object.assign({
                                            className: "aa-ItemDescription"
                                        }, {
                                            children: o(e, t)
                                        }), void 0)]
                                    }, void 0)]
                                }), void 0)
                            }), void 0)
                        }
                    }
                },
                864: () => {},
                275: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        Fragment: () => m,
                        jsx: () => N,
                        jsxDEV: () => N,
                        jsxs: () => N
                    });
                    var n, u, o, i, a, c, l = {},
                        s = [],
                        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

                    function f(e, t) {
                        for (var r in t) e[r] = t[r];
                        return e
                    }

                    function d(e) {
                        var t = e.parentNode;
                        t && t.removeChild(e)
                    }

                    function v(e, t, r, n, i) {
                        var a = {
                            type: e,
                            props: t,
                            key: r,
                            ref: n,
                            __k: null,
                            __: null,
                            __b: 0,
                            __e: null,
                            __d: void 0,
                            __c: null,
                            __h: null,
                            constructor: void 0,
                            __v: null == i ? ++o : i
                        };
                        return null != u.vnode && u.vnode(a), a
                    }

                    function m(e) {
                        return e.children
                    }

                    function D(e, t) {
                        this.props = e, this.context = t
                    }

                    function h(e, t) {
                        if (null == t) return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null;
                        for (var r; t < e.__k.length; t++)
                            if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                        return "function" == typeof e.type ? h(e) : null
                    }

                    function y(e) {
                        var t, r;
                        if (null != (e = e.__) && null != e.__c) {
                            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                                if (null != (r = e.__k[t]) && null != r.__e) {
                                    e.__e = e.__c.base = r.__e;
                                    break
                                }
                            return y(e)
                        }
                    }

                    function g(e) {
                        (!e.__d && (e.__d = !0) && i.push(e) && !b.__r++ || c !== u.debounceRendering) && ((c = u.debounceRendering) || a)(b)
                    }

                    function b() {
                        for (var e; b.__r = i.length;) e = i.sort((function(e, t) {
                            return e.__v.__b - t.__v.__b
                        })), i = [], e.some((function(e) {
                            var t, r, n, u, o, i;
                            e.__d && (o = (u = (t = e).__v).__e, (i = t.__P) && (r = [], (n = f({}, u)).__v = u.__v + 1, j(i, u, n, t.__n, void 0 !== i.ownerSVGElement, null != u.__h ? [o] : null, r, null == o ? h(u) : o, u.__h), w(r, u), u.__e != o && y(u)))
                        }))
                    }

                    function _(e, t, r, n, u, o, i, a, c, p) {
                        var f, d, D, y, g, b, _, E = n && n.__k || s,
                            C = E.length;
                        for (r.__k = [], f = 0; f < t.length; f++)
                            if (null != (y = r.__k[f] = null == (y = t[f]) || "boolean" == typeof y ? null : "string" == typeof y || "number" == typeof y || "bigint" == typeof y ? v(null, y, null, null, y) : Array.isArray(y) ? v(m, {
                                    children: y
                                }, null, null, null) : y.__b > 0 ? v(y.type, y.props, y.key, null, y.__v) : y)) {
                                if (y.__ = r, y.__b = r.__b + 1, null === (D = E[f]) || D && y.key == D.key && y.type === D.type) E[f] = void 0;
                                else
                                    for (d = 0; d < C; d++) {
                                        if ((D = E[d]) && y.key == D.key && y.type === D.type) {
                                            E[d] = void 0;
                                            break
                                        }
                                        D = null
                                    }
                                j(e, y, D = D || l, u, o, i, a, c, p), g = y.__e, (d = y.ref) && D.ref != d && (_ || (_ = []), D.ref && _.push(D.ref, null, y), _.push(d, y.__c || g, y)), null != g ? (null == b && (b = g), "function" == typeof y.type && null != y.__k && y.__k === D.__k ? y.__d = c = O(y, c, e) : c = A(e, y, D, E, g, c), p || "option" !== r.type ? "function" == typeof r.type && (r.__d = c) : e.value = "") : c && D.__e == c && c.parentNode != e && (c = h(D))
                            }
                        for (r.__e = b, f = C; f--;) null != E[f] && ("function" == typeof r.type && null != E[f].__e && E[f].__e == r.__d && (r.__d = h(n, f + 1)), I(E[f], E[f]));
                        if (_)
                            for (f = 0; f < _.length; f++) B(_[f], _[++f], _[++f])
                    }

                    function O(e, t, r) {
                        var n, u;
                        for (n = 0; n < e.__k.length; n++)(u = e.__k[n]) && (u.__ = e, t = "function" == typeof u.type ? O(u, t, r) : A(r, u, u, e.__k, u.__e, t));
                        return t
                    }

                    function A(e, t, r, n, u, o) {
                        var i, a, c;
                        if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
                        else if (null == r || u != o || null == u.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(u), i = null;
                            else {
                                for (a = o, c = 0;
                                    (a = a.nextSibling) && c < n.length; c += 2)
                                    if (a == u) break e;
                                e.insertBefore(u, o), i = o
                            }
                        return void 0 !== i ? i : u.nextSibling
                    }

                    function E(e, t, r) {
                        "-" === t[0] ? e.setProperty(t, r) : e[t] = null == r ? "" : "number" != typeof r || p.test(t) ? r : r + "px"
                    }

                    function C(e, t, r, n, u) {
                        var o;
                        e: if ("style" === t)
                            if ("string" == typeof r) e.style.cssText = r;
                            else {
                                if ("string" == typeof n && (e.style.cssText = n = ""), n)
                                    for (t in n) r && t in r || E(e.style, t, "");
                                if (r)
                                    for (t in r) n && r[t] === n[t] || E(e.style, t, r[t])
                            }
                        else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? P : F, o) : e.removeEventListener(t, o ? P : F, o);
                        else if ("dangerouslySetInnerHTML" !== t) {
                            if (u) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                                e[t] = null == r ? "" : r;
                                break e
                            } catch (e) {}
                            "function" == typeof r || (null != r && (!1 !== r || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, r) : e.removeAttribute(t))
                        }
                    }

                    function F(e) {
                        this.l[e.type + !1](u.event ? u.event(e) : e)
                    }

                    function P(e) {
                        this.l[e.type + !0](u.event ? u.event(e) : e)
                    }

                    function j(e, t, r, n, o, i, a, c, l) {
                        var s, p, d, v, h, y, g, b, O, A, E, C = t.type;
                        if (void 0 !== t.constructor) return null;
                        null != r.__h && (l = r.__h, c = t.__e = r.__e, t.__h = null, i = [c]), (s = u.__b) && s(t);
                        try {
                            e: if ("function" == typeof C) {
                                if (b = t.props, O = (s = C.contextType) && n[s.__c], A = s ? O ? O.props.value : s.__ : n, r.__c ? g = (p = t.__c = r.__c).__ = p.__E : ("prototype" in C && C.prototype.render ? t.__c = p = new C(b, A) : (t.__c = p = new D(b, A), p.constructor = C, p.render = k), O && O.sub(p), p.props = b, p.state || (p.state = {}), p.context = A, p.__n = n, d = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != C.getDerivedStateFromProps && (p.__s == p.state && (p.__s = f({}, p.__s)), f(p.__s, C.getDerivedStateFromProps(b, p.__s))), v = p.props, h = p.state, d) null == C.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                                else {
                                    if (null == C.getDerivedStateFromProps && b !== v && null != p.componentWillReceiveProps && p.componentWillReceiveProps(b, A), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(b, p.__s, A) || t.__v === r.__v) {
                                        p.props = b, p.state = p.__s, t.__v !== r.__v && (p.__d = !1), p.__v = t, t.__e = r.__e, t.__k = r.__k, t.__k.forEach((function(e) {
                                            e && (e.__ = t)
                                        })), p.__h.length && a.push(p);
                                        break e
                                    }
                                    null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, A), null != p.componentDidUpdate && p.__h.push((function() {
                                        p.componentDidUpdate(v, h, y)
                                    }))
                                }
                                p.context = A, p.props = b, p.state = p.__s, (s = u.__r) && s(t), p.__d = !1, p.__v = t, p.__P = e, s = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (n = f(f({}, n), p.getChildContext())), d || null == p.getSnapshotBeforeUpdate || (y = p.getSnapshotBeforeUpdate(v, h)), E = null != s && s.type === m && null == s.key ? s.props.children : s, _(e, Array.isArray(E) ? E : [E], t, r, n, o, i, a, c, l), p.base = t.__e, t.__h = null, p.__h.length && a.push(p), g && (p.__E = p.__ = null), p.__e = !1
                            } else null == i && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = S(r.__e, t, r, n, o, i, a, l);
                            (s = u.diffed) && s(t)
                        }
                        catch (e) {
                            t.__v = null, (l || null != i) && (t.__e = c, t.__h = !!l, i[i.indexOf(c)] = null), u.__e(e, t, r)
                        }
                    }

                    function w(e, t) {
                        u.__c && u.__c(t, e), e.some((function(t) {
                            try {
                                e = t.__h, t.__h = [], e.some((function(e) {
                                    e.call(t)
                                }))
                            } catch (e) {
                                u.__e(e, t.__v)
                            }
                        }))
                    }

                    function S(e, t, r, u, o, i, a, c) {
                        var s, p, f, v = r.props,
                            m = t.props,
                            D = t.type,
                            y = 0;
                        if ("svg" === D && (o = !0), null != i)
                            for (; y < i.length; y++)
                                if ((s = i[y]) && (s === e || (D ? s.localName == D : 3 == s.nodeType))) {
                                    e = s, i[y] = null;
                                    break
                                }
                        if (null == e) {
                            if (null === D) return document.createTextNode(m);
                            e = o ? document.createElementNS("http://www.w3.org/2000/svg", D) : document.createElement(D, m.is && m), i = null, c = !1
                        }
                        if (null === D) v === m || c && e.data === m || (e.data = m);
                        else {
                            if (i = i && n.call(e.childNodes), p = (v = r.props || l).dangerouslySetInnerHTML, f = m.dangerouslySetInnerHTML, !c) {
                                if (null != i)
                                    for (v = {}, y = 0; y < e.attributes.length; y++) v[e.attributes[y].name] = e.attributes[y].value;
                                (f || p) && (f && (p && f.__html == p.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
                            }
                            if (function(e, t, r, n, u) {
                                    var o;
                                    for (o in r) "children" === o || "key" === o || o in t || C(e, o, null, r[o], n);
                                    for (o in t) u && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || C(e, o, t[o], r[o], n)
                                }(e, m, v, o, c), f) t.__k = [];
                            else if (y = t.props.children, _(e, Array.isArray(y) ? y : [y], t, r, u, o && "foreignObject" !== D, i, a, i ? i[0] : r.__k && h(r, 0), c), null != i)
                                for (y = i.length; y--;) null != i[y] && d(i[y]);
                            c || ("value" in m && void 0 !== (y = m.value) && (y !== e.value || "progress" === D && !y) && C(e, "value", y, v.value, !1), "checked" in m && void 0 !== (y = m.checked) && y !== e.checked && C(e, "checked", y, v.checked, !1))
                        }
                        return e
                    }

                    function B(e, t, r) {
                        try {
                            "function" == typeof e ? e(t) : e.current = t
                        } catch (e) {
                            u.__e(e, r)
                        }
                    }

                    function I(e, t, r) {
                        var n, o;
                        if (u.unmount && u.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || B(n, null, t)), null != (n = e.__c)) {
                            if (n.componentWillUnmount) try {
                                n.componentWillUnmount()
                            } catch (e) {
                                u.__e(e, t)
                            }
                            n.base = n.__P = null
                        }
                        if (n = e.__k)
                            for (o = 0; o < n.length; o++) n[o] && I(n[o], t, "function" != typeof e.type);
                        r || null == e.__e || d(e.__e), e.__e = e.__d = void 0
                    }

                    function k(e, t, r) {
                        return this.constructor(e, r)
                    }
                    n = s.slice, u = {
                        __e: function(e, t) {
                            for (var r, n, u; t = t.__;)
                                if ((r = t.__c) && !r.__) try {
                                    if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), u = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e), u = r.__d), u) return r.__E = r
                                } catch (t) {
                                    e = t
                                }
                            throw e
                        }
                    }, o = 0, D.prototype.setState = function(e, t) {
                        var r;
                        r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, r), this.props)), e && f(r, e), null != e && this.__v && (t && this.__h.push(t), g(this))
                    }, D.prototype.forceUpdate = function(e) {
                        this.__v && (this.__e = !0, e && this.__h.push(e), g(this))
                    }, D.prototype.render = m, i = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0;
                    var x = 0;

                    function N(e, t, r, n, o) {
                        var i, a, c = {};
                        for (a in t) "ref" == a ? i = t[a] : c[a] = t[a];
                        var l = {
                            type: e,
                            props: c,
                            key: r,
                            ref: i,
                            __k: null,
                            __: null,
                            __b: 0,
                            __e: null,
                            __d: void 0,
                            __c: null,
                            __h: null,
                            constructor: void 0,
                            __v: --x,
                            __source: n,
                            __self: o
                        };
                        if ("function" == typeof e && (i = e.defaultProps))
                            for (a in i) void 0 === c[a] && (c[a] = i[a]);
                        return u.vnode && u.vnode(l), l
                    }
                },
                147: e => {
                    "use strict";
                    e.exports = JSON.parse('{"name":"@algolia/algoliasearch-netlify-frontend","version":"1.0.9","private":false,"author":"Algolia Team <contact@algolia.com>","license":"MIT","repository":"https://github.com/algolia/algoliasearch-netlify.git","bugs":{"url":"https://github.com/algolia/algoliasearch-netlify/issues"},"files":["README.md","dist/"],"scripts":{"build":"npx webpack --mode production","dev":"PORT=9100 npx webpack serve --mode development","postinstall":"[ -d dist/ ] || npm run build"},"devDependencies":{"@algolia/autocomplete-js":"1.3.0","@algolia/autocomplete-preset-algolia":"1.3.0","@algolia/autocomplete-theme-classic":"1.3.0","@algolia/transporter":"4.10.5","@babel/core":"7.15.0","@babel/preset-env":"7.15.0","@types/react":"17.0.19","algoliasearch":"4.10.5","babel-loader":"8.2.2","clean-webpack-plugin":"3.0.0","core-js":"3.16.4","css-loader":"6.2.0","fork-ts-checker-webpack-plugin":"6.3.2","mini-css-extract-plugin":"2.2.0","mustache":"4.2.0","node-sass":"6.0.1","postcss":"8.3.6","postcss-loader":"6.1.1","postcss-preset-env":"6.7.0","preact":"10.5.14","sass-loader":"12.1.0","terser-webpack-plugin":"4.2.3","ts-loader":"9.2.5","webpack":"5.51.1","webpack-cli":"4.8.0","webpack-dev-server":"4.0.0"},"keywords":["algolia","algoliasearch","crawl","crawler","indexing","jamstack","netlify-plugin","netlify-search","netlify","plugin","robots","search","ui"]}')
                }
            },
            t = {};

        function r(n) {
            var u = t[n];
            if (void 0 !== u) return u.exports;
            var o = t[n] = {
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.exports
        }
        return r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r(864), r(744)
    })()
}, "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.algoliasearchNetlify = t() : e.algoliasearchNetlify = t();