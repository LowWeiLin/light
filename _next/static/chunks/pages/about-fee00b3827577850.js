(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    6076: function (e, t, n) {
      "use strict";
      n(7294);
      var r = n(9008),
        a = n.n(r),
        o = n(5893);
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          r = e.children;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(a(), {
              children: [
                (0, o.jsx)("title", { children: t }),
                (0, o.jsx)("meta", { name: "description", content: n }),
                (0, o.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            r,
          ],
        });
      };
    },
    8e3: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var a = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.AmpStateContext = a;
    },
    9470: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = void 0 !== t && t,
            r = e.hybrid,
            a = void 0 !== r && r,
            o = e.hasQuery,
            u = void 0 !== o && o;
          return n || (a && u);
        });
    },
    2717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = l),
        (t.default = void 0);
      var r,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, a, o)
                : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(7294)),
        o = (r = n(1585)) && r.__esModule ? r : { default: r },
        u = n(8e3),
        i = n(5850),
        f = n(9470);
      n(9475);
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      function d() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function s(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function v(e, t) {
        return e
          .reduce(s, [])
          .reverse()
          .concat(l(t.inAmpMode).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0,
                  u = !1;
                if (
                  a.key &&
                  "number" !== typeof a.key &&
                  a.key.indexOf("$") > 0
                ) {
                  u = !0;
                  var i = a.key.slice(a.key.indexOf("$") + 1);
                  e.has(i) ? (o = !1) : e.add(i);
                }
                switch (a.type) {
                  case "title":
                  case "base":
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case "meta":
                    for (var f = 0, c = p.length; f < c; f++) {
                      var d = p[f];
                      if (a.props.hasOwnProperty(d))
                        if ("charSet" === d) n.has(d) ? (o = !1) : n.add(d);
                        else {
                          var l = a.props[d],
                            s = r[d] || new Set();
                          ("name" === d && u) || !s.has(l)
                            ? (s.add(l), (r[d] = s))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var r = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var o = c({}, e.props || {});
              return (
                (o["data-href"] = o.href),
                (o.href = void 0),
                (o["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, o)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      var y = function (e) {
        var t = e.children,
          n = a.useContext(u.AmpStateContext),
          r = a.useContext(i.HeadManagerContext);
        return a.default.createElement(
          o.default,
          {
            reduceComponentsToState: v,
            headManager: r,
            inAmpMode: f.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = y),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1585: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.headManager,
            n = e.reduceComponentsToState;
          function a() {
            if (t && t.mountedInstances) {
              var a = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(a, e));
            }
          }
          if (o) {
            var f;
            null == t || null == (f = t.mountedInstances) || f.add(e.children),
              a();
          }
          return (
            u(function () {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                function () {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            u(function () {
              return (
                t && (t._pendingUpdate = a),
                function () {
                  t && (t._pendingUpdate = a);
                }
              );
            }),
            i(function () {
              return (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                function () {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== typeof e && "function" !== typeof e))
          return { default: e };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var u = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(n, o, u)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(7294));
      function a() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      var o = !1,
        u = o ? function () {} : r.useLayoutEffect,
        i = o ? function () {} : r.useEffect;
    },
    5729: function (e, t, n) {
      "use strict";
      n.r(t);
      n(7294);
      var r = n(6076),
        a = n(5893);
      t.default = function () {
        return (0, a.jsx)(r.Z, {
          title: "light",
          description: "",
          children: "About",
        });
      };
    },
    9212: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(5729);
        },
      ]);
    },
    9008: function (e, t, n) {
      e.exports = n(2717);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 9212), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
