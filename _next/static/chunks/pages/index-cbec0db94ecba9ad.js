(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6076: function (e, t, n) {
      "use strict";
      n(7294);
      var i = n(9008),
        o = n.n(i),
        r = n(5893);
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          i = e.children;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(o(), {
              children: [
                (0, r.jsx)("title", { children: t }),
                (0, r.jsx)("meta", { name: "description", content: n }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            i,
          ],
        });
      };
    },
    5742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var i = n(7294),
        o = n(5118),
        r = n(9888),
        a = n(6135),
        s = n(5759),
        l = n(3708),
        c = n(6753),
        u = n(9477),
        h = n(9101),
        d = n(3955),
        v = n(6076),
        p = n(2307),
        f = n(6486),
        g = n.n(f),
        m = n(2777),
        x = n(2262),
        y = n(9499),
        w = {
          maxAcceleration: 9,
          maxSpeed: 9,
          epsilon: 0.01,
          desiredSeparationRadius: 6,
        },
        b = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new u.Vector2(0, 0),
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : new u.Vector2(0, 0),
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : w;
            (0, m.Z)(this, e),
              (0, y.Z)(this, "options", void 0),
              (0, y.Z)(this, "position", void 0),
              (0, y.Z)(this, "velocity", void 0),
              (0, y.Z)(this, "desiredPosition", void 0),
              (0, y.Z)(this, "desiredVelocity", void 0),
              (0, y.Z)(this, "acceleration", void 0),
              (this.options = i),
              (this.position = t),
              (this.velocity = n),
              (this.acceleration = new u.Vector2(0, 0)),
              (this.desiredPosition = new u.Vector2().copy(this.position)),
              (this.desiredVelocity = new u.Vector2(0, 0));
          }
          return (
            (0, x.Z)(e, [
              {
                key: "run",
                value: function (e, t, n, i) {
                  n ? this.desiredPosition.copy(n) : this.wander(),
                    this.desiredVelocity.subVectors(
                      this.desiredPosition,
                      this.position
                    ),
                    this.separation(t),
                    this.desiredVelocity.clampLength(0, this.options.maxSpeed),
                    i && this.acceleration.copy(i),
                    this.position.distanceTo(this.desiredPosition) >
                      this.options.epsilon &&
                      (this.acceleration.subVectors(
                        this.desiredVelocity,
                        this.velocity
                      ),
                      this.acceleration.clampLength(
                        0,
                        this.options.maxAcceleration
                      )),
                    this.accelerate(e),
                    this.move(e);
                },
              },
              {
                key: "wander",
                value: function () {
                  this.desiredPosition.copy(this.position);
                },
              },
              {
                key: "separation",
                value: function (e) {
                  for (var t = new u.Vector2(), n = 0; n < e.length; n += 1) {
                    var i = this.position.distanceTo(e[n].position);
                    i > 0 &&
                      i < this.options.desiredSeparationRadius &&
                      (t.subVectors(this.position, e[n].position).normalize(),
                      this.desiredVelocity.addScaledVector(
                        t,
                        Math.pow(this.options.desiredSeparationRadius - i, 2)
                      ));
                  }
                },
              },
              {
                key: "accelerate",
                value: function (e) {
                  this.velocity.addScaledVector(this.acceleration, e),
                    this.velocity.clampLength(0, this.options.maxSpeed);
                },
              },
              {
                key: "move",
                value: function (e) {
                  this.position.addScaledVector(this.velocity, e);
                },
              },
            ]),
            e
          );
        })(),
        j = n(4730),
        M = n(5893),
        S = ["size", "height"];
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      var k = function (e) {
          var t = e.size,
            n = void 0 === t ? 1 : t,
            o = e.height,
            r = void 0 === o ? 0.2 : o,
            a = (0, j.Z)(e, S),
            s = (0, i.useRef)(null),
            l = (0, i.useMemo)(
              function () {
                var e = new u.Shape();
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
            c = (0, i.useMemo)(
              function () {
                return {
                  steps: 2,
                  depth: r - 0.1,
                  bevelEnabled: !0,
                  bevelThickness: 0.05,
                  bevelSize: 0.05,
                  bevelOffset: -0.05,
                  bevelSegments: 8,
                };
              },
              [r]
            );
          return (
            (0, i.useEffect)(
              function () {
                var e, t, n;
                null === (e = s.current) ||
                  void 0 === e ||
                  e.rotateX(u.MathUtils.degToRad(-90)),
                  null === (t = s.current) ||
                    void 0 === t ||
                    t.rotateY(u.MathUtils.degToRad(30)),
                  null === (n = s.current) ||
                    void 0 === n ||
                    n.translate(0, -r / 2 + 0.05, 0);
              },
              [r]
            ),
            (0, M.jsx)(
              "extrudeGeometry",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? P(Object(n), !0).forEach(function (t) {
                        (0, y.Z)(e, t, n[t]);
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
              })({ ref: s, args: [l, c] }, a)
            )
          );
        },
        O = n(7048),
        V = (0, p.zr)({ simplex: new O.ZP(), selectedHexId: void 0 }),
        W = g().times(10, function () {
          return new b(
            new u.Vector2().random().subScalar(0.5).multiplyScalar(100)
          );
        }),
        E = new u.Object3D(),
        R = new u.Color(),
        C = function () {
          var e = (0, i.useRef)(null),
            t = (0, i.useMemo)(function () {
              return Float32Array.from(
                new Array(W.length).fill(0).flatMap(function () {
                  return R.set("#b19cd9").toArray();
                })
              );
            }, []),
            n = (0, p.yy)(V),
            o = n.selectedHexId,
            r = n.hexGrid,
            a = (0, i.useMemo)(
              function () {
                var e, t;
                if (void 0 !== o.value && void 0 !== r) {
                  var n =
                    null === (e = r.get({ noproxy: !0 })) ||
                    void 0 === e ||
                    null === (t = e.at(o.value)) ||
                    void 0 === t
                      ? void 0
                      : t.toPoint();
                  if (n) return new u.Vector2(n.x, n.y);
                }
              },
              [r, o.value]
            );
          return (
            (0, s.x)(function (t) {
              var n = t.clock;
              if (e.current) {
                for (var i = n.getDelta(), o = 0; o < W.length; o += 1) {
                  var r;
                  W[o].run(i, W, a),
                    E.position.set(W[o].position.x, 30, W[o].position.y),
                    E.updateMatrixWorld(),
                    null === (r = e.current) ||
                      void 0 === r ||
                      r.setMatrixAt(o, E.matrixWorld);
                }
                e.current.instanceMatrix.needsUpdate = !0;
              }
            }),
            (0, M.jsxs)("instancedMesh", {
              ref: e,
              args: [void 0, void 0, W.length],
              castShadow: !0,
              children: [
                (0, M.jsx)(k, {
                  size: 0.5,
                  height: 0.1,
                  children: (0, M.jsx)("instancedBufferAttribute", {
                    attach: "attributes-color",
                    args: [t, 3],
                  }),
                }),
                (0, M.jsx)("meshPhongMaterial", {
                  toneMapped: !1,
                  vertexColors: !0,
                }),
              ],
            })
          );
        },
        A = function () {
          return (0, M.jsxs)("group", {
            children: [
              (0, M.jsx)("hemisphereLight", {
                args: ["white", "darkslategrey", 0.4],
              }),
              (0, M.jsx)("directionalLight", {
                position: [0, 1, 0],
                intensity: 0.6,
              }),
            ],
          });
        },
        D = new u.Color(100, 100, 100),
        Z = function () {
          var e = (0, p.yy)(V),
            t = e.selectedHexId,
            n = e.hexGrid,
            o = (0, i.useMemo)(
              function () {
                var e, i;
                if (void 0 === t.value || void 0 === n) return null;
                var o =
                  null === (e = n.get({ noproxy: !0 })) ||
                  void 0 === e ||
                  null === (i = e.at(t.value)) ||
                  void 0 === i
                    ? void 0
                    : i.toPoint();
                return o ? new u.Vector3(o.x, 50, o.y) : null;
              },
              [n, t.value]
            );
          return o
            ? (0, M.jsxs)("mesh", {
                position: o,
                children: [
                  (0, M.jsx)("cylinderGeometry", {
                    args: [0.1, 0.1, 100, 8, 1],
                  }),
                  (0, M.jsx)("meshBasicMaterial", { color: D }),
                ],
              })
            : null;
        },
        z = n(1563),
        T = [
          { name: "Water", weight: 2, normWeight: 0, color: "#00a9ff" },
          { name: "Shore", weight: 0.25, normWeight: 0, color: "#ffd68f" },
          { name: "Beach", weight: 0.25, normWeight: 0, color: "#efb28f" },
          { name: "Shrub", weight: 1, normWeight: 0, color: "#9ea667" },
          { name: "Forest", weight: 1, normWeight: 0, color: "#586647" },
          { name: "Stone", weight: 0.5, normWeight: 0, color: "#656565" },
          { name: "Snow", weight: 0.5, normWeight: 0, color: "#9aa7ad" },
        ],
        _ = g().sumBy(T, function (e) {
          return e.weight;
        });
      g().forEach(T),
        T.forEach(function (e) {
          e.normWeight = e.weight / _;
        });
      var B = function (e, t) {
          var n = (0, i.useRef)([0, 0]);
          return {
            handlePointerDownWrapped: function (e) {
              (n.current[0] = e.nativeEvent.clientX),
                (n.current[1] = e.nativeEvent.clientY),
                t && t(e);
            },
            handleClickNoDrag: function (t) {
              var i = t.nativeEvent,
                o = i.clientX,
                r = i.clientY,
                a = n.current[0] - o,
                s = n.current[1] - r;
              Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2)) > 5 || e(t),
                t.stopPropagation();
            },
          };
        },
        I = (0, z.WZ)((0, z.XX)({ orientation: "pointy" })),
        G = new u.Object3D(),
        H = new u.Color(),
        L = function () {
          var e,
            t = (0, p.yy)(V),
            n = t.selectedHexId,
            o = t.simplex,
            r = t.hexGrid,
            a = (0, l.M4)("Terrain", {
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
                value: 0,
                min: 0,
                max: 0.1,
                label: "Change Speed",
              },
            }),
            c = a.terrainSize,
            h = a.terrainRoughness,
            d = a.terrainHeight,
            v = a.terrainChangeSpeed,
            f = (0, i.useRef)(null);
          (0, i.useEffect)(
            function () {
              r.set(I.spiral({ radius: c }));
            },
            [r, c]
          );
          var g = (0, i.useMemo)(
              function () {
                var e;
                return Float32Array.from(
                  new Array(
                    (null === (e = r.value) || void 0 === e
                      ? void 0
                      : e.length) || 0
                  )
                    .fill(0)
                    .flatMap(function () {
                      return H.set("#ffffff").toArray();
                    })
                );
              },
              [r]
            ),
            m = (0, i.useCallback)(
              function (e, t) {
                return e <= T[0].normWeight ? d * T[0].normWeight : d * e;
              },
              [d]
            ),
            x = (0, i.useCallback)(
              function (e, t) {
                if (t === n.value) H.setRGB(10, 10, 10);
                else {
                  var i = (function (e) {
                      for (var t = 0, n = 0; n < T.length; n += 1)
                        if (e <= (t += T[n].normWeight)) return T[n].color;
                      return T[T.length - 1].color;
                    })(e),
                    o = e <= T[0].normWeight,
                    r = u.MathUtils.mapLinear(
                      Math.pow(1 - 1.3 * (T[0].normWeight - e), 6),
                      0,
                      1,
                      0.2,
                      1.4
                    );
                  H.set(i);
                  var a = H.getHSL({ h: 0, s: 1, l: 1 });
                  H.setHSL(a.h, 1.7 * a.s, a.l * (o ? r : 1));
                }
              },
              [n]
            );
          (0, s.x)(function (e) {
            var t,
              n,
              i = e.clock.getElapsedTime();
            null !== f.current &&
              r.value &&
              (null === (t = r.get({ noproxy: !0 })) ||
                void 0 === t ||
                t.forEach(function (e, t) {
                  var n,
                    r = e.toPoint(),
                    a = (o.value.noise3D(r.x * h, r.y * h, i * v) + 1) / 2,
                    s = m(a, t);
                  G.position.set(r.x, s / 2, r.y),
                    (G.scale.y = 0.1 * s),
                    G.updateMatrixWorld(),
                    null === (n = f.current) ||
                      void 0 === n ||
                      n.setMatrixAt(t, G.matrixWorld),
                    x(a, t),
                    H.toArray(g, 3 * t);
                }),
              (f.current.count =
                (null === (n = r.value) || void 0 === n ? void 0 : n.length) ||
                0),
              (f.current.instanceMatrix.needsUpdate = !0),
              (f.current.geometry.attributes.color.needsUpdate = !0));
          });
          var y = B(function (e) {
              void 0 !== e.instanceId &&
                (e.stopPropagation(),
                n.value === e.instanceId ? n.set(void 0) : n.set(e.instanceId));
            }),
            w = y.handlePointerDownWrapped,
            b = y.handleClickNoDrag;
          return (0, M.jsxs)("instancedMesh", {
            ref: f,
            args: [
              void 0,
              void 0,
              (null === (e = r.value) || void 0 === e ? void 0 : e.length) || 0,
            ],
            onClick: b,
            onPointerDown: w,
            receiveShadow: !0,
            children: [
              (0, M.jsx)(k, {
                size: 1,
                height: 10,
                children: (0, M.jsx)("instancedBufferAttribute", {
                  attach: "attributes-color",
                  args: [g, 3],
                }),
              }),
              (0, M.jsx)("meshPhongMaterial", {
                toneMapped: !1,
                vertexColors: !0,
              }),
            ],
          });
        };
      (0, s.e)({ SSAOPass: h.G, UnrealBloomPass: d.m });
      var X = function () {
          var e = (0, s.w)(),
            t = e.scene,
            n = e.camera;
          return (0, M.jsxs)(o.z, {
            disableGamma: !0,
            children: [
              (0, M.jsx)("sSAOPass", {
                args: [t, n],
                kernelRadius: 0.5,
                maxDistance: 0.1,
              }),
              (0, M.jsx)("unrealBloomPass", {
                threshold: 0.9,
                strength: 1.5,
                radius: 0.5,
              }),
            ],
          });
        },
        N = function () {
          var e = (0, l.M4)("Scene", {
              backgroundColor: { value: "#1b1e3e", label: "Background Colour" },
              showStats: { value: !0, label: "Show Stats" },
              autoRotate: { value: !1, label: "Auto-Rotate" },
            }),
            t = e.backgroundColor,
            n = e.showStats,
            i = e.autoRotate;
          return (0, M.jsx)(v.Z, {
            title: "light",
            description: "",
            children: (0, M.jsxs)(a.Xz, {
              camera: { position: [128, 64, 0] },
              style: { height: "100vh" },
              shadows: { type: u.PCFSoftShadowMap },
              gl: {
                antialias: !0,
                toneMappingExposure: 0.5,
                outputEncoding: u.sRGBEncoding,
              },
              children: [
                (0, M.jsx)("color", { attach: "background", args: [t] }),
                (0, M.jsx)(A, {}),
                (0, M.jsx)(Z, {}),
                (0, M.jsx)(L, {}),
                (0, M.jsx)(C, {}),
                (0, M.jsx)(X, {}),
                (0, M.jsx)(c.Iy, { position: "bottom-right", headless: !n }),
                (0, M.jsx)(r.z, {
                  autoRotate: i,
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
          return n(5742);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [737, 662, 409, 829, 774, 888, 179], function () {
      return (t = 8312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
