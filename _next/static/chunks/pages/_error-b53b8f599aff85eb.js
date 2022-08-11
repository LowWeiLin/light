(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820, 651],
  {
    9651: function (e, t, n) {
      "use strict";
      var r = n(3227),
        o = n(8361),
        a = n(5971),
        i = n(2715),
        u = n(1193);
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(e);
          if (t) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = d(n(7294)),
        f = d(n(2717));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = {
        400: "Bad Request",
        404: "This page could not be found",
        405: "Method Not Allowed",
        500: "Internal Server Error",
      };
      function p(e) {
        var t = e.res,
          n = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        };
      }
      var h = (function (e) {
        a(n, e);
        var t = l(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.statusCode,
                  n = e.withDarkMode,
                  r = void 0 === n || n,
                  o =
                    this.props.title ||
                    s[t] ||
                    "An unexpected error has occurred";
                return c.default.createElement(
                  "div",
                  { style: v.error },
                  c.default.createElement(
                    f.default,
                    null,
                    c.default.createElement(
                      "title",
                      null,
                      t
                        ? "".concat(t, ": ").concat(o)
                        : "Application error: a client-side exception has occurred"
                    )
                  ),
                  c.default.createElement(
                    "div",
                    null,
                    c.default.createElement("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                \n                ".concat(
                            r
                              ? "@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }"
                              : ""
                          ),
                      },
                    }),
                    t
                      ? c.default.createElement(
                          "h1",
                          { className: "next-error-h1", style: v.h1 },
                          t
                        )
                      : null,
                    c.default.createElement(
                      "div",
                      { style: v.desc },
                      c.default.createElement(
                        "h2",
                        { style: v.h2 },
                        this.props.title || t
                          ? o
                          : c.default.createElement(
                              c.default.Fragment,
                              null,
                              "Application error: a client-side exception has occurred (see the browser console for more information)"
                            ),
                        "."
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(c.default.Component);
      (h.displayName = "ErrorPage"),
        (h.getInitialProps = p),
        (h.origGetInitialProps = p);
      var v = {
        error: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: {
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle",
        },
        h1: {
          display: "inline-block",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0,
        },
      };
      t.default = h;
    },
    8e3: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
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
            o = void 0 !== r && r,
            a = e.hasQuery,
            i = void 0 !== a && a;
          return n || (o && i);
        });
    },
    2717: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = d),
        (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(7294)),
        a = (r = n(1585)) && r.__esModule ? r : { default: r },
        i = n(8e3),
        u = n(5850),
        l = n(9470);
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
      function f() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
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
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
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
      function h(e, t) {
        return e
          .reduce(s, [])
          .reverse()
          .concat(d(t.inAmpMode).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var u = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(u) ? (a = !1) : e.add(u);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var l = 0, c = p.length; l < c; l++) {
                      var f = p[l];
                      if (o.props.hasOwnProperty(f))
                        if ("charSet" === f) n.has(f) ? (a = !1) : n.add(f);
                        else {
                          var d = o.props[f],
                            s = r[f] || new Set();
                          ("name" === f && i) || !s.has(d)
                            ? (s.add(d), (r[f] = s))
                            : (a = !1);
                        }
                    }
                }
                return a;
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
              var a = c({}, e.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, a)
              );
            }
            return o.default.cloneElement(e, { key: r });
          });
      }
      var v = function (e) {
        var t = e.children,
          n = o.useContext(i.AmpStateContext),
          r = o.useContext(u.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: l.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = v),
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
          function o() {
            if (t && t.mountedInstances) {
              var o = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(o, e));
            }
          }
          if (a) {
            var l;
            null == t || null == (l = t.mountedInstances) || l.add(e.children),
              o();
          }
          return (
            i(function () {
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
            i(function () {
              return (
                t && (t._pendingUpdate = o),
                function () {
                  t && (t._pendingUpdate = o);
                }
              );
            }),
            u(function () {
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
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(n, a, i)
              : (n[a] = e[a]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(7294));
      function o() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var a = !1,
        i = a ? function () {} : r.useLayoutEffect,
        u = a ? function () {} : r.useEffect;
    },
    1981: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return n(9651);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 1981), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
