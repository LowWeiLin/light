(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6076: function (e, t, n) {
      "use strict";
      n(7294);
      var r = n(9008),
        o = n.n(r),
        a = n(5893);
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          r = e.children;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(o(), {
              children: [
                (0, a.jsx)("title", { children: t }),
                (0, a.jsx)("meta", { name: "description", content: n }),
                (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            r,
          ],
        });
      };
    },
    1033: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var r = n(7294),
        o = n(5118),
        a = n(6334),
        i = n(9888),
        s = n(6135),
        c = n(5759),
        u = n(3708),
        l = n(6753),
        h = n(9477),
        f = n(9101),
        d = n(3955),
        g = n(6076),
        p = n(5893),
        v = function () {
          return (0, p.jsxs)("group", {
            children: [
              (0, p.jsx)("hemisphereLight", {
                args: ["white", "darkslategrey", 0.4],
              }),
              (0, p.jsx)("directionalLight", {
                castShadow: !0,
                position: [50, 30, 50],
                intensity: 1,
              }),
              (0, p.jsx)("directionalLight", {
                position: [0, 1, 0],
                intensity: 0.3,
              }),
            ],
          });
        },
        m = n(1563),
        w = n(6486),
        b = n.n(w),
        x = n(7048),
        j = function (e, t) {
          var n = (0, r.useRef)([0, 0]);
          return {
            handlePointerDownWrapped: function (e) {
              (n.current[0] = e.nativeEvent.clientX),
                (n.current[1] = e.nativeEvent.clientY),
                t && t(e);
            },
            handleClickNoDrag: function (t) {
              var r = t.nativeEvent,
                o = r.clientX,
                a = r.clientY,
                i = n.current[0] - o,
                s = n.current[1] - a;
              Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2)) > 5 || e(t),
                t.stopPropagation();
            },
          };
        },
        S = n(9499),
        M = n(4730),
        y = ["size", "height"];
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var O = function (e) {
          var t = e.size,
            n = void 0 === t ? 1 : t,
            o = e.height,
            a = void 0 === o ? 0.2 : o,
            i = (0, M.Z)(e, y),
            s = (0, r.useRef)(null),
            c = (0, r.useMemo)(
              function () {
                var e = new h.Shape();
                e.moveTo(0 + n * Math.cos(0), 0 + n * Math.sin(0));
                for (var t = 1; t < 6; t += 1)
                  e.lineTo(
                    0 + n * Math.cos((2 * t * Math.PI) / 6),
                    0 + n * Math.sin((2 * t * Math.PI) / 6)
                  );
                return e.moveTo(0 + n * Math.cos(0), 0 + n * Math.sin(0)), e;
              },
              [n]
            ),
            u = (0, r.useMemo)(
              function () {
                return {
                  steps: 2,
                  depth: a - 0.1,
                  bevelEnabled: !0,
                  bevelThickness: 0.05,
                  bevelSize: 0.05,
                  bevelOffset: -0.05,
                  bevelSegments: 8,
                };
              },
              [a]
            );
          return (
            (0, r.useEffect)(
              function () {
                var e, t, n;
                null === (e = s.current) ||
                  void 0 === e ||
                  e.rotateX(h.MathUtils.degToRad(-90)),
                  null === (t = s.current) ||
                    void 0 === t ||
                    t.rotateY(h.MathUtils.degToRad(30)),
                  null === (n = s.current) ||
                    void 0 === n ||
                    n.translate(0, -a / 2 + 0.05, 0);
              },
              [a]
            ),
            (0, p.jsx)(
              "extrudeGeometry",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? P(Object(n), !0).forEach(function (t) {
                        (0, S.Z)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : P(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ ref: s, args: [c, u] }, i)
            )
          );
        },
        k = (0, m.WZ)((0, m.XX)({ orientation: "pointy" })),
        E = new x.ZP(),
        W = [
          { name: "Water", weight: 2, normWeight: 0, color: "#00a9ff" },
          { name: "Shore", weight: 0.25, normWeight: 0, color: "#ffd68f" },
          { name: "Beach", weight: 0.25, normWeight: 0, color: "#efb28f" },
          { name: "Shrub", weight: 1, normWeight: 0, color: "#9ea667" },
          { name: "Forest", weight: 1, normWeight: 0, color: "#586647" },
          { name: "Stone", weight: 0.5, normWeight: 0, color: "#656565" },
          { name: "Snow", weight: 0.5, normWeight: 0, color: "#9aa7ad" },
        ],
        R = b().sumBy(W, function (e) {
          return e.weight;
        });
      b().forEach(W),
        W.forEach(function (e) {
          e.normWeight = e.weight / R;
        });
      var C = new h.Object3D(),
        D = new h.Color(),
        _ = function () {
          var e = (0, u.M4)("Terrain", {
              terrainSize: {
                value: 64,
                min: 6,
                max: 128,
                step: 1,
                label: "Size",
              },
              terrainRoughness: {
                value: 0.025,
                min: 0,
                max: 0.1,
                label: "Roughness",
              },
              terrainHeight: { value: 30, min: 0.1, max: 100, label: "Height" },
              terrainChangeSpeed: {
                value: 0.01,
                min: 0,
                max: 0.1,
                label: "Change Speed",
              },
            }),
            t = e.terrainSize,
            n = e.terrainRoughness,
            o = e.terrainHeight,
            a = e.terrainChangeSpeed,
            i = (0, r.useRef)(null),
            s = (0, r.useRef)(),
            l = (0, r.useRef)(new Set()),
            f = (0, r.useMemo)(
              function () {
                return k.spiral({ radius: t });
              },
              [t]
            ),
            d = (0, r.useMemo)(
              function () {
                return Float32Array.from(
                  new Array(f.length).fill(0).flatMap(function () {
                    return D.set("#ffffff").toArray();
                  })
                );
              },
              [f.length]
            ),
            g = (0, r.useCallback)(
              function (e, t) {
                return 0 === t || t === s.current
                  ? 2 * o
                  : e <= W[0].normWeight
                  ? o * W[0].normWeight
                  : o * e;
              },
              [o]
            ),
            v = (0, r.useCallback)(function (e, t) {
              if (0 === t || t === s.current) D.setRGB(10, 10, 10);
              else {
                var n = (function (e) {
                    for (var t = 0, n = 0; n < W.length; n += 1)
                      if (e <= (t += W[n].normWeight)) return W[n].color;
                    return W[W.length - 1].color;
                  })(e),
                  r = e <= W[0].normWeight,
                  o = h.MathUtils.mapLinear(
                    Math.pow(1 - 1.3 * (W[0].normWeight - e), 6),
                    0,
                    1,
                    0.2,
                    1.4
                  );
                D.set(n);
                var a = D.getHSL({ h: 0, s: 1, l: 1 });
                D.setHSL(a.h, 1.7 * a.s, a.l * (r ? o : 1));
              }
            }, []);
          (0, c.x)(function (e) {
            var t = e.clock.getElapsedTime();
            null !== i.current &&
              (f.forEach(function (e, r) {
                var o,
                  s = e.toPoint(),
                  c = (E.noise3D(s.x * n, s.y * n, t * a) + 1) / 2,
                  u = g(c, r);
                C.position.set(s.x, u / 2, s.y),
                  (C.scale.y = 0.1 * u),
                  C.updateMatrixWorld(),
                  null === (o = i.current) ||
                    void 0 === o ||
                    o.setMatrixAt(r, C.matrixWorld),
                  v(c, r),
                  D.toArray(d, 3 * r);
              }),
              (i.current.count = f.length),
              (i.current.instanceMatrix.needsUpdate = !0),
              (i.current.geometry.attributes.color.needsUpdate = !0));
          });
          var m = j(function (e) {
              if (void 0 !== e.instanceId)
                if ((e.stopPropagation(), s.current === e.instanceId))
                  (s.current = void 0), (l.current = new Set());
                else {
                  var t = f[e.instanceId];
                  (s.current = e.instanceId),
                    (l.current = new Set(
                      k
                        .ring({ radius: 7, center: t.coordinates() })
                        .map(function (e) {
                          return e.toString();
                        })
                    ));
                }
            }),
            w = m.handlePointerDownWrapped,
            b = m.handleClickNoDrag;
          return (0, p.jsxs)("instancedMesh", {
            ref: i,
            args: [void 0, void 0, f.length],
            onClick: b,
            onPointerDown: w,
            receiveShadow: !0,
            children: [
              (0, p.jsx)(O, {
                size: 1,
                height: 10,
                children: (0, p.jsx)("instancedBufferAttribute", {
                  attach: "attributes-color",
                  args: [d, 3],
                }),
              }),
              (0, p.jsx)("meshPhongMaterial", {
                toneMapped: !1,
                vertexColors: !0,
              }),
            ],
          });
        };
      (0, c.e)({ SSAOPass: f.G, UnrealBloomPass: d.m });
      var z = function () {
          var e = (0, c.w)(),
            t = e.scene,
            n = e.camera;
          return (0, p.jsxs)(o.z, {
            disableGamma: !0,
            children: [
              (0, p.jsx)("sSAOPass", {
                args: [t, n],
                kernelRadius: 0.5,
                maxDistance: 0.1,
              }),
              (0, p.jsx)("unrealBloomPass", {
                threshold: 0.9,
                strength: 1.5,
                radius: 0.5,
              }),
            ],
          });
        },
        A = function () {
          var e = (0, u.M4)("Scene", {
              backgroundColor: { value: "#1b1e3e", label: "Background Colour" },
              showStats: { value: !1, label: "Show Stats" },
              autoRotate: { value: !0, label: "Auto-Rotate" },
            }),
            t = e.backgroundColor,
            n = e.showStats,
            r = e.autoRotate;
          return (0, p.jsx)(g.Z, {
            title: "light",
            description: "",
            children: (0, p.jsxs)(s.Xz, {
              camera: { position: [128, 64, 0] },
              style: { height: "100vh" },
              shadows: { type: h.PCFSoftShadowMap },
              gl: {
                antialias: !0,
                toneMappingExposure: 0.5,
                outputEncoding: h.sRGBEncoding,
              },
              children: [
                (0, p.jsx)("color", { attach: "background", args: [t] }),
                (0, p.jsx)(a.qA, { preset: "sunset" }),
                (0, p.jsx)(v, {}),
                (0, p.jsx)(_, {}),
                (0, p.jsx)(z, {}),
                (0, p.jsx)(l.Iy, { position: "bottom-right", headless: !n }),
                (0, p.jsx)(i.z, {
                  autoRotate: r,
                  autoRotateSpeed: 0.6,
                  enablePan: !1,
                }),
              ],
            }),
          });
        };
    },
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(1033);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [737, 662, 409, 418, 774, 888, 179], function () {
      return (t = 8312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
