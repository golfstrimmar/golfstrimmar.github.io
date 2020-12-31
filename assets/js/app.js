/*
 jQuery JavaScript Library v3.5.1
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2020-05-04T22:49Z
 Sizzle CSS Selector Engine v2.3.5
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://js.foundation/

 Date: 2020-03-14
*/
function jd(X) {
  var ca = 0;
  return function () {
    return ca < X.length ? { done: !1, value: X[ca++] } : { done: !0 };
  };
}
var xd =
  "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (X, ca, Q) {
        if (X == Array.prototype || X == Object.prototype) {
          return X;
        }
        X[ca] = Q.value;
        return X;
      };
function yd(X) {
  X = [
    "object" == typeof globalThis && globalThis,
    X,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var ca = 0; ca < X.length; ++ca) {
    var Q = X[ca];
    if (Q && Q.Math == Math) {
      return Q;
    }
  }
  throw Error("Cannot find global object");
}
var Md = yd(this);
function Nd(X, ca) {
  if (ca) {
    a: {
      for (var Q = Md, H = X.split("."), da = 0; da < H.length - 1; da++) {
        var Ia = H[da];
        if (!(Ia in Q)) {
          break a;
        }
        Q = Q[Ia];
      }
      H = H[H.length - 1];
      da = Q[H];
      Ia = ca(da);
      Ia != da &&
        null != Ia &&
        xd(Q, H, { configurable: !0, writable: !0, value: Ia });
    }
  }
}
Nd("Symbol", function (X) {
  function ca(da) {
    if (this instanceof ca) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new Q("jscomp_symbol_" + (da || "") + "_" + H++, da);
  }
  function Q(da, Ia) {
    this.Lh = da;
    xd(this, "description", { configurable: !0, writable: !0, value: Ia });
  }
  if (X) {
    return X;
  }
  Q.prototype.toString = function () {
    return this.Lh;
  };
  var H = 0;
  return ca;
});
Nd("Symbol.iterator", function (X) {
  if (X) {
    return X;
  }
  X = Symbol("Symbol.iterator");
  for (
    var ca = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
        " "
      ),
      Q = 0;
    Q < ca.length;
    Q++
  ) {
    var H = Md[ca[Q]];
    "function" === typeof H &&
      "function" != typeof H.prototype[X] &&
      xd(H.prototype, X, {
        configurable: !0,
        writable: !0,
        value: function () {
          return Od(jd(this));
        },
      });
  }
  return X;
});
function Od(X) {
  X = { next: X };
  X[Symbol.iterator] = function () {
    return this;
  };
  return X;
}
!(function (X) {
  function ca(H) {
    if (Q[H]) {
      return Q[H].exports;
    }
    var da = (Q[H] = { Id: H, wj: !1, exports: {} });
    return X[H].call(da.exports, da, da.exports, ca), (da.wj = !0), da.exports;
  }
  var Q = {};
  ca.c = Q;
  ca.d = function (H, da, Ia) {
    ca.Mj(H, da) || Object.defineProperty(H, da, { enumerable: !0, get: Ia });
  };
  ca.r = function (H) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(H, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(H, "__esModule", { value: !0 });
  };
  ca.t = function (H, da) {
    if ((1 & da && (H = ca(H)), 8 & da)) {
      return H;
    }
    if (4 & da && "object" == typeof H && H && H.yc) {
      return H;
    }
    var Ia = Object.create(null);
    if (
      (ca.r(Ia),
      Object.defineProperty(Ia, "default", { enumerable: !0, value: H }),
      2 & da && "string" != typeof H)
    ) {
      for (var M in H) {
        ca.d(
          Ia,
          M,
          function (N) {
            return H[N];
          }.bind(null, M)
        );
      }
    }
    return Ia;
  };
  ca.n = function (H) {
    var da =
      H && H.yc
        ? function () {
            return H["default"];
          }
        : function () {
            return H;
          };
    return ca.d(da, "a", da), da;
  };
  ca.Mj = function (H, da) {
    return Object.prototype.hasOwnProperty.call(H, da);
  };
  ca.p = "";
  ca(14);
})([
  function (X, ca) {
    var Q;
    !(function (H, da) {
      "object" == typeof X.exports
        ? (X.exports = H.document
            ? da(H, !0)
            : function (Ia) {
                if (!Ia.document) {
                  throw Error("jQuery requires a window with a document");
                }
                return da(Ia);
              })
        : da(H);
    })("undefined" != typeof window ? window : this, function (H, da) {
      function Ia(a) {
        a.stopPropagation();
      }
      function M(a, d, f) {
        var h,
          l = {};
        for (h in d) {
          (l[h] = a.style[h]), (a.style[h] = d[h]);
        }
        for (h in ((f = f.call(a)), d)) {
          a.style[h] = l[h];
        }
        return f;
      }
      function N(a) {
        var d = a.ownerDocument.defaultView;
        return (d && d.opener) || (d = H), d.getComputedStyle(a);
      }
      function gb(a, d) {
        return (
          "none" === (a = d || a).style.display ||
          ("" === a.style.display && q(a) && "none" === g.m(a, "display"))
        );
      }
      function q(a) {
        return g.contains(a.ownerDocument, a);
      }
      function B(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      }
      function E(a, d, f, h, l, n, m) {
        var u = 0,
          v = a.length,
          I = null == f;
        if ("object" === Z(f)) {
          for (u in ((l = !0), f)) {
            E(a, d, u, f[u], !0, n, m);
          }
        } else {
          if (
            void 0 !== h &&
            ((l = !0),
            G(h) || (m = !0),
            I &&
              (m
                ? (d.call(a, h), (d = null))
                : ((I = d),
                  (d = function (L, C, U) {
                    return I.call(g(L), U);
                  }))),
            d)
          ) {
            for (; u < v; u++) {
              d(a[u], f, m ? h : h.call(a[u], u, d(a[u], f)));
            }
          }
        }
        return l ? a : I ? d.call(a) : v ? d(a[0], f) : n;
      }
      function w(a, d) {
        for (var f = []; a; a = a.nextSibling) {
          1 === a.nodeType && a !== d && f.push(a);
        }
        return f;
      }
      function F(a, d, f) {
        for (var h = [], l = void 0 !== f; (a = a[d]) && 9 !== a.nodeType; ) {
          if (1 === a.nodeType) {
            if (l && g(a).is(f)) {
              break;
            }
            h.push(a);
          }
        }
        return h;
      }
      function g(a, d) {
        return new g.M.Ya(a, d);
      }
      function W(a) {
        return null != a && a === a.window;
      }
      function G(a) {
        return "function" == typeof a && "number" != typeof a.nodeType;
      }
      function ea(a, d, f) {
        var h,
          l,
          n = (f = f || ua).createElement("script");
        if (((n.text = a), d)) {
          for (h in nc) {
            (l = d[h] || (d.getAttribute && d.getAttribute(h))) &&
              n.setAttribute(h, l);
          }
        }
        f.head.appendChild(n).parentNode.removeChild(n);
      }
      function Z(a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? Sb[Hc.call(a)] || "object"
          : typeof a;
      }
      function oa(a) {
        var d = !!a && "length" in a && a.length,
          f = Z(a);
        return (
          !G(a) &&
          !W(a) &&
          ("array" === f ||
            0 === d ||
            ("number" == typeof d && 0 < d && d - 1 in a))
        );
      }
      function Ba(a, d) {
        return a.nodeName && a.nodeName.toLowerCase() === d.toLowerCase();
      }
      function ra(a, d, f) {
        return G(d)
          ? g.Kb(a, function (h, l) {
              return !!d.call(h, l, h) !== f;
            })
          : d.nodeType
          ? g.Kb(a, function (h) {
              return (h === d) !== f;
            })
          : "string" != typeof d
          ? g.Kb(a, function (h) {
              return -1 < wc.call(d, h) !== f;
            })
          : g.filter(d, a, f);
      }
      function bb(a, d) {
        for (; (a = a[d]) && 1 !== a.nodeType; ) {}
        return a;
      }
      function rb(a) {
        return a;
      }
      function wb(a) {
        throw a;
      }
      function bc(a, d, f, h) {
        var l;
        try {
          a && G((l = a.promise))
            ? l.call(a).done(d).Jc(f)
            : a && G((l = a.then))
            ? l.call(a, d, f)
            : d.apply(void 0, [a].slice(h));
        } catch (n) {
          f.apply(void 0, [n]);
        }
      }
      function Ib() {
        ua.removeEventListener("DOMContentLoaded", Ib);
        H.removeEventListener("load", Ib);
        g.ready();
      }
      function Zc(a, d) {
        return d.toUpperCase();
      }
      function nb(a) {
        return a.replace(oc, "ms-").replace(aa, Zc);
      }
      function cc() {
        this.expando = g.expando + cc.uid++;
      }
      function Ic(a, d, f) {
        var h;
        if (void 0 === f && 1 === a.nodeType) {
          if (
            ((h = "data-" + d.replace($c, "-$&").toLowerCase()),
            "string" == typeof (f = a.getAttribute(h)))
          ) {
            try {
              (h = f),
                (f =
                  "true" === h ||
                  ("false" !== h &&
                    ("null" === h
                      ? null
                      : h === +h + ""
                      ? +h
                      : kd.test(h)
                      ? JSON.parse(h)
                      : h)));
            } catch (l) {}
            lb.set(a, d, f);
          } else {
            f = void 0;
          }
        }
        return f;
      }
      function dc(a, d, f, h) {
        var l,
          n,
          m = 20,
          u = h
            ? function () {
                return h.ag();
              }
            : function () {
                return g.m(a, d, "");
              },
          v = u(),
          I = (f && f[3]) || (g.vd[d] ? "" : "px"),
          L =
            a.nodeType && (g.vd[d] || ("px" !== I && +v)) && xb.exec(g.m(a, d));
        if (L && L[3] !== I) {
          v /= 2;
          I = I || L[3];
          for (L = +v || 1; m--; ) {
            g.style(a, d, L + I),
              0 >= (1 - n) * (1 - (n = u() / v || 0.5)) && (m = 0),
              (L /= n);
          }
          L *= 2;
          g.style(a, d, L + I);
          f = f || [];
        }
        return (
          f &&
            ((L = +L || +v || 0),
            (l = f[1] ? L + (f[1] + 1) * f[2] : +f[2]),
            h && ((h.Ah = I), (h.start = L), (h.end = l))),
          l
        );
      }
      function Va(a, d) {
        for (var f, h, l = [], n = 0, m = a.length; n < m; n++) {
          if ((h = a[n]).style) {
            if (((f = h.style.display), d)) {
              if (
                ("none" === f &&
                  ((l[n] = ja.get(h, "display") || null),
                  l[n] || (h.style.display = "")),
                "" === h.style.display && gb(h))
              ) {
                f = n;
                var u = void 0;
                var v = h.ownerDocument;
                var I = h.nodeName;
                v =
                  (h = ad[I]) ||
                  ((u = v.body.appendChild(v.createElement(I))),
                  (h = g.m(u, "display")),
                  u.parentNode.removeChild(u),
                  "none" === h && (h = "block"),
                  (ad[I] = h),
                  h);
                l[f] = v;
              }
            } else {
              "none" !== f && ((l[n] = "none"), ja.set(h, "display", f));
            }
          }
        }
        for (n = 0; n < m; n++) {
          null != l[n] && (a[n].style.display = l[n]);
        }
        return a;
      }
      function mb(a, d) {
        var f;
        return (
          (f =
            void 0 !== a.getElementsByTagName
              ? a.getElementsByTagName(d || "*")
              : void 0 !== a.querySelectorAll
              ? a.querySelectorAll(d || "*")
              : []),
          void 0 === d || (d && Ba(a, d)) ? g.ab([a], f) : f
        );
      }
      function xc(a, d) {
        for (var f = 0, h = a.length; f < h; f++) {
          ja.set(a[f], "globalEval", !d || ja.get(d[f], "globalEval"));
        }
      }
      function yc(a, d, f, h, l) {
        for (
          var n,
            m,
            u,
            v,
            I = d.createDocumentFragment(),
            L = [],
            C = 0,
            U = a.length;
          C < U;
          C++
        ) {
          if ((n = a[C]) || 0 === n) {
            if ("object" === Z(n)) {
              g.ab(L, n.nodeType ? [n] : n);
            } else {
              if (Tb.test(n)) {
                m = m || I.appendChild(d.createElement("div"));
                u = (Jc.exec(n) || ["", ""])[1].toLowerCase();
                u = sb[u] || sb.Ga;
                m.innerHTML = u[1] + g.vg(n) + u[2];
                for (u = u[0]; u--; ) {
                  m = m.lastChild;
                }
                g.ab(L, m.childNodes);
                (m = I.firstChild).textContent = "";
              } else {
                L.push(d.createTextNode(n));
              }
            }
          }
        }
        I.textContent = "";
        for (C = 0; (n = L[C++]); ) {
          if (h && -1 < g.Lb(n, h)) {
            l && l.push(n);
          } else {
            if (
              ((v = q(n)), (m = mb(I.appendChild(n), "script")), v && xc(m), f)
            ) {
              for (u = 0; (n = m[u++]); ) {
                T.test(n.type || "") && f.push(n);
              }
            }
          }
        }
        return I;
      }
      function ec() {
        return !0;
      }
      function fc() {
        return !1;
      }
      function bd(a, d) {
        a: {
          try {
            var f = ua.activeElement;
            break a;
          } catch (h) {}
          f = void 0;
        }
        return (a === f) == ("focus" === d);
      }
      function pc(a, d, f, h, l, n) {
        var m, u;
        if ("object" == typeof d) {
          for (u in ("string" != typeof f && ((h = h || f), (f = void 0)), d)) {
            pc(a, u, f, h, d[u], n);
          }
          return a;
        }
        if (
          (null == h && null == l
            ? ((l = f), (h = f = void 0))
            : null == l &&
              ("string" == typeof f
                ? ((l = h), (h = void 0))
                : ((l = h), (h = f), (f = void 0))),
          !1 === l)
        ) {
          l = fc;
        } else {
          if (!l) {
            return a;
          }
        }
        return (
          1 === n &&
            ((m = l),
            ((l = function (v) {
              return g().P(v), m.apply(this, arguments);
            }).la = m.la || (m.la = g.la++))),
          a.s(function () {
            g.event.add(this, d, l, h, f);
          })
        );
      }
      function qc(a, d, f) {
        f
          ? (ja.set(a, d, !1),
            g.event.add(a, d, {
              kb: !1,
              rb: function (h) {
                var l,
                  n,
                  m = ja.get(this, d);
                if (1 & h.tj && this[d]) {
                  if (m.length) {
                    (g.event.Ra[d] || {}).Gc && h.stopPropagation();
                  } else {
                    if (
                      ((m = Nb.call(arguments)),
                      ja.set(this, d, m),
                      (l = f(this, d)),
                      this[d](),
                      m !== (n = ja.get(this, d)) || l
                        ? ja.set(this, d, !1)
                        : (n = {}),
                      m !== n)
                    ) {
                      return (
                        h.stopImmediatePropagation(),
                        h.preventDefault(),
                        n.value
                      );
                    }
                  }
                } else {
                  m.length &&
                    (ja.set(this, d, {
                      value: g.event.O(
                        g.extend(m[0], g.Event.prototype),
                        m.slice(1),
                        this
                      ),
                    }),
                    h.stopImmediatePropagation());
                }
              },
            }))
          : void 0 === ja.get(a, d) && g.event.add(a, d, ec);
      }
      function Wa(a, d) {
        return (
          (Ba(a, "table") &&
            Ba(11 !== d.nodeType ? d : d.firstChild, "tr") &&
            g(a).children("tbody")[0]) ||
          a
        );
      }
      function cd(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
      }
      function Kc(a) {
        return (
          "true/" === (a.type || "").slice(0, 5)
            ? (a.type = a.type.slice(5))
            : a.removeAttribute("type"),
          a
        );
      }
      function la(a, d) {
        var f, h, l, n, m;
        if (1 === d.nodeType) {
          if (ja.dc(a) && (m = ja.get(a).va)) {
            for (h in (ja.remove(d, "handle events"), m)) {
              var u = 0;
              for (f = m[h].length; u < f; u++) {
                g.event.add(d, h, m[h][u]);
              }
            }
          }
          lb.dc(a) && ((l = lb.La(a)), (n = g.extend({}, l)), lb.set(d, n));
        }
      }
      function gc(a, d, f, h) {
        d = zc(d);
        var l,
          n,
          m,
          u = 0,
          v = a.length,
          I = v - 1,
          L = d[0],
          C = G(L);
        if (C || (1 < v && "string" == typeof L && !Ja.hi && ld.test(L))) {
          return a.s(function (ka) {
            var fa = a.T(ka);
            C && (d[0] = L.call(this, ka, fa.Gd()));
            gc(fa, d, f, h);
          });
        }
        if (
          v &&
          ((n = (l = yc(d, a[0].ownerDocument, !1, a, h)).firstChild),
          1 === l.childNodes.length && (l = n),
          n || h)
        ) {
          for (m = (n = g.map(mb(l, "script"), cd)).length; u < v; u++) {
            var U = l;
            u !== I &&
              ((U = g.clone(U, !0, !0)), m && g.ab(n, mb(U, "script")));
            f.call(a[u], U, u);
          }
          if (m) {
            for (
              l = n[n.length - 1].ownerDocument, g.map(n, Kc), u = 0;
              u < m;
              u++
            ) {
              (U = n[u]),
                T.test(U.type || "") &&
                  !ja.La(U, "globalEval") &&
                  g.contains(l, U) &&
                  (U.src && "module" !== (U.type || "").toLowerCase()
                    ? g.Jf &&
                      !U.noModule &&
                      g.Jf(
                        U.src,
                        { nonce: U.nonce || U.getAttribute("nonce") },
                        l
                      )
                    : ea(U.textContent.replace(Lc, ""), U, l));
            }
          }
        }
        return a;
      }
      function Jb(a, d, f) {
        for (var h = d ? g.filter(d, a) : a, l = 0; null != (d = h[l]); l++) {
          f || 1 !== d.nodeType || g.sd(mb(d)),
            d.parentNode &&
              (f && q(d) && xc(mb(d, "script")), d.parentNode.removeChild(d));
        }
        return a;
      }
      function Ub(a, d, f) {
        var h,
          l,
          n,
          m,
          u = a.style;
        return (
          (f = f || N(a)) &&
            ("" !== (m = f.getPropertyValue(d) || f[d]) ||
              q(a) ||
              (m = g.style(a, d)),
            !Ja.Wj() &&
              kc.test(m) &&
              md.test(d) &&
              ((h = u.width),
              (l = u.minWidth),
              (n = u.maxWidth),
              (u.minWidth = u.maxWidth = u.width = m),
              (m = f.width),
              (u.width = h),
              (u.minWidth = l),
              (u.maxWidth = n))),
          void 0 !== m ? m + "" : m
        );
      }
      function rc(a, d) {
        return {
          get: function () {
            if (!a()) {
              return (this.get = d).apply(this, arguments);
            }
            delete this.get;
          },
        };
      }
      function yb(a) {
        var d;
        if (!(d = g.zi[a] || Mc[a])) {
          if (!(a in Ac)) {
            a: {
              d = a;
              for (
                var f = d[0].toUpperCase() + d.slice(1), h = Nc.length;
                h--;

              ) {
                if ((d = Nc[h] + f) in Ac) {
                  break a;
                }
              }
              d = void 0;
            }
            a = Mc[a] = d || a;
          }
          d = a;
        }
        return d;
      }
      function Vb(a, d, f) {
        return (a = xb.exec(d))
          ? Math.max(0, a[2] - (f || 0)) + (a[3] || "px")
          : d;
      }
      function xa(a, d, f, h, l, n) {
        var m = "width" === d ? 1 : 0,
          u = 0,
          v = 0;
        if (f === (h ? "border" : "content")) {
          return 0;
        }
        for (; 4 > m; m += 2) {
          "margin" === f && (v += g.m(a, f + Bb[m], !0, l)),
            h
              ? ("content" === f && (v -= g.m(a, "padding" + Bb[m], !0, l)),
                "margin" !== f &&
                  (v -= g.m(a, "border" + Bb[m] + "Width", !0, l)))
              : ((v += g.m(a, "padding" + Bb[m], !0, l)),
                "padding" !== f
                  ? (v += g.m(a, "border" + Bb[m] + "Width", !0, l))
                  : (u += g.m(a, "border" + Bb[m] + "Width", !0, l)));
        }
        return (
          !h &&
            0 <= n &&
            (v +=
              Math.max(
                0,
                Math.ceil(
                  a["offset" + d[0].toUpperCase() + d.slice(1)] -
                    n -
                    v -
                    u -
                    0.5
                )
              ) || 0),
          v
        );
      }
      function sc(a, d, f) {
        var h = N(a),
          l = (!Ja.Vf() || f) && "border-box" === g.m(a, "boxSizing", !1, h),
          n = l,
          m = Ub(a, d, h),
          u = "offset" + d[0].toUpperCase() + d.slice(1);
        if (kc.test(m)) {
          if (!f) {
            return m;
          }
          m = "auto";
        }
        return (
          ((!Ja.Vf() && l) ||
            (!Ja.lk() && Ba(a, "tr")) ||
            "auto" === m ||
            (!parseFloat(m) && "inline" === g.m(a, "display", !1, h))) &&
            a.getClientRects().length &&
            ((l = "border-box" === g.m(a, "boxSizing", !1, h)),
            (n = u in a) && (m = a[u])),
          (m = parseFloat(m) || 0) +
            xa(a, d, f || (l ? "border" : "content"), n, h, m) +
            "px"
        );
      }
      function eb(a, d, f, h, l) {
        return new eb.prototype.Ya(a, d, f, h, l);
      }
      function Wb() {
        t &&
          (!1 === ua.hidden && H.requestAnimationFrame
            ? H.requestAnimationFrame(Wb)
            : H.setTimeout(Wb, g.da.interval),
          g.da.Zk());
      }
      function Bc() {
        return (
          H.setTimeout(function () {
            r = void 0;
          }),
          (r = Date.now())
        );
      }
      function Ob(a, d) {
        var f,
          h = 0,
          l = { height: a };
        for (d = d ? 1 : 0; 4 > h; h += 2 - d) {
          l["margin" + (f = Bb[h])] = l["padding" + f] = a;
        }
        return d && (l.opacity = l.width = a), l;
      }
      function Da(a, d, f) {
        for (
          var h, l = (qb.gd[d] || []).concat(qb.gd["*"]), n = 0, m = l.length;
          n < m;
          n++
        ) {
          if ((h = l[n].call(f, d, a))) {
            return h;
          }
        }
      }
      function qb(a, d, f) {
        function h() {
          if (l) {
            return !1;
          }
          var I = r || Bc();
          I = Math.max(0, v.startTime + v.duration - I);
          for (
            var L = 1 - (I / v.duration || 0), C = 0, U = v.hd.length;
            C < U;
            C++
          ) {
            v.hd[C].gh(L);
          }
          return (
            u.Qd(a, [v, L, I]),
            1 > L && U ? I : (U || u.Qd(a, [v, 1, 0]), u.qc(a, [v]), !1)
          );
        }
        var l,
          n = 0,
          m = qb.Ud.length,
          u = g.Fa().fb(function () {
            delete h.Y;
          }),
          v = u.promise({
            Y: a,
            ek: g.extend({}, d),
            wa: g.extend(!0, { sh: {}, easing: g.easing.Ga }, f),
            Wn: d,
            Vn: f,
            startTime: r || Bc(),
            duration: f.duration,
            hd: [],
            xi: function (I, L) {
              var C = g.Ph(a, v.wa, I, L, v.wa.sh[I] || v.wa.easing);
              return v.hd.push(C), C;
            },
            stop: function (I) {
              var L = 0,
                C = I ? v.hd.length : 0;
              if (l) {
                return this;
              }
              for (l = !0; L < C; L++) {
                v.hd[L].gh(1);
              }
              return (
                I ? (u.Qd(a, [v, 1, 0]), u.qc(a, [v, I])) : u.Zg(a, [v, I]),
                this
              );
            },
          });
        f = v.ek;
        !(function (I, L) {
          var C, U, ka, fa, sa;
          for (C in I) {
            if (
              ((ka = L[(U = nb(C))]),
              (fa = I[C]),
              Array.isArray(fa) && ((ka = fa[1]), (fa = I[C] = fa[0])),
              C !== U && ((I[U] = fa), delete I[C]),
              (sa = g.Ma[U]) && "expand" in sa)
            ) {
              for (C in ((fa = sa.expand(fa)), delete I[U], fa)) {
                C in I || ((I[C] = fa[C]), (L[C] = ka));
              }
            } else {
              L[U] = ka;
            }
          }
        })(f, v.wa.sh);
        for (; n < m; n++) {
          if ((d = qb.Ud[n].call(v, a, f, v.wa))) {
            return G(d.stop) && (g.jd(v.Y, v.wa.$).stop = d.stop.bind(d)), d;
          }
        }
        return (
          g.map(f, Da, v),
          G(v.wa.start) && v.wa.start.call(a, v),
          v
            .progress(v.wa.progress)
            .done(v.wa.done, v.wa.complete)
            .Jc(v.wa.Jc)
            .fb(v.wa.fb),
          g.da.al(g.extend(h, { Y: a, Nf: v, $: v.wa.$ })),
          v
        );
      }
      function Pb(a) {
        return (a.match(La) || []).join(" ");
      }
      function ha(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
      }
      function Oc(a) {
        return Array.isArray(a)
          ? a
          : ("string" == typeof a && a.match(La)) || [];
      }
      function Pc(a, d, f, h) {
        var l;
        if (Array.isArray(d)) {
          g.s(d, function (n, m) {
            f || ta.test(a)
              ? h(a, m)
              : Pc(
                  a + "[" + ("object" == typeof m && null != m ? n : "") + "]",
                  m,
                  f,
                  h
                );
          });
        } else {
          if (f || "object" !== Z(d)) {
            h(a, d);
          } else {
            for (l in d) {
              Pc(a + "[" + l + "]", d[l], f, h);
            }
          }
        }
      }
      function Cb(a) {
        return function (d, f) {
          "string" != typeof d && ((f = d), (d = "*"));
          var h,
            l = 0,
            n = d.toLowerCase().match(La) || [];
          if (G(f)) {
            for (; (h = n[l++]); ) {
              "+" === h[0]
                ? ((h = h.slice(1) || "*"), (a[h] = a[h] || []).unshift(f))
                : (a[h] = a[h] || []).push(f);
            }
          }
        };
      }
      function Qc(a, d, f, h) {
        function l(u) {
          var v;
          return (
            (n[u] = !0),
            g.s(a[u] || [], function (I, L) {
              var C = L(d, f, h);
              return "string" != typeof C || m || n[C]
                ? m
                  ? !(v = C)
                  : void 0
                : (d.Na.unshift(C), l(C), !1);
            }),
            v
          );
        }
        var n = {},
          m = a === nd;
        return l(d.Na[0]) || (!n["*"] && l("*"));
      }
      function Cc(a, d) {
        var f,
          h,
          l = g.Ac.Ui || {};
        for (f in d) {
          void 0 !== d[f] && ((l[f] ? a : h || (h = {}))[f] = d[f]);
        }
        return h && g.extend(!0, a, h), a;
      }
      var Db = [],
        Qb = Object.getPrototypeOf,
        Nb = Db.slice,
        zc = Db.flat
          ? function (a) {
              return Db.flat.call(a);
            }
          : function (a) {
              return Db.concat.apply([], a);
            },
        Rc = Db.push,
        wc = Db.indexOf,
        Sb = {},
        Hc = Sb.toString,
        hc = Sb.hasOwnProperty,
        Sc = hc.toString,
        dd = Sc.call(Object),
        Ja = {},
        ua = H.document,
        nc = { type: !0, src: !0, nonce: !0, noModule: !0 };
      g.M = g.prototype = {
        Nd: "3.5.1",
        constructor: g,
        length: 0,
        get: function (a) {
          return null == a
            ? Nb.call(this)
            : 0 > a
            ? this[a + this.length]
            : this[a];
        },
        Da: function (a) {
          a = g.ab(this.constructor(), a);
          return (a.df = this), a;
        },
        s: function (a) {
          return g.s(this, a);
        },
        map: function (a) {
          return this.Da(
            g.map(this, function (d, f) {
              return a.call(d, f, d);
            })
          );
        },
        slice: function () {
          return this.Da(Nb.apply(this, arguments));
        },
        first: function () {
          return this.T(0);
        },
        xj: function () {
          return this.T(-1);
        },
        Oi: function () {
          return this.Da(
            g.Kb(this, function (a, d) {
              return (d + 1) % 2;
            })
          );
        },
        Nj: function () {
          return this.Da(
            g.Kb(this, function (a, d) {
              return d % 2;
            })
          );
        },
        T: function (a) {
          var d = this.length;
          a = +a + (0 > a ? d : 0);
          return this.Da(0 <= a && a < d ? [this[a]] : []);
        },
        end: function () {
          return this.df || this.constructor();
        },
        push: Rc,
        sort: Db.sort,
        splice: Db.splice,
      };
      g.extend = g.M.extend = function () {
        var a,
          d,
          f,
          h,
          l,
          n = arguments[0] || {},
          m = 1,
          u = arguments.length,
          v = !1;
        "boolean" == typeof n && ((v = n), (n = arguments[m] || {}), m++);
        "object" == typeof n || G(n) || (n = {});
        for (m === u && ((n = this), m--); m < u; m++) {
          if (null != (a = arguments[m])) {
            for (d in a) {
              var I = a[d];
              "__proto__" !== d &&
                n !== I &&
                (v && I && (g.Uc(I) || (h = Array.isArray(I)))
                  ? ((f = n[d]),
                    (l = h && !Array.isArray(f) ? [] : h || g.Uc(f) ? f : {}),
                    (h = !1),
                    (n[d] = g.extend(v, l, I)))
                  : void 0 !== I && (n[d] = I));
            }
          }
        }
        return n;
      };
      g.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        Ve: !0,
        error: function (a) {
          throw Error(a);
        },
        In: function () {},
        Uc: function (a) {
          var d, f;
          return (
            !(!a || "[object Object]" !== Hc.call(a)) &&
            (!(d = Qb(a)) ||
              ("function" ==
                typeof (f = hc.call(d, "constructor") && d.constructor) &&
                Sc.call(f) === dd))
          );
        },
        ic: function (a) {
          for (var d in a) {
            return !1;
          }
          return !0;
        },
        tg: function (a, d, f) {
          ea(a, { nonce: d && d.nonce }, f);
        },
        s: function (a, d) {
          var f,
            h = 0;
          if (oa(a)) {
            for (f = a.length; h < f && !1 !== d.call(a[h], h, a[h]); h++) {}
          } else {
            for (h in a) {
              if (!1 === d.call(a[h], h, a[h])) {
                break;
              }
            }
          }
          return a;
        },
        Yc: function (a, d) {
          var f = d || [];
          return (
            null != a &&
              (oa(Object(a))
                ? g.ab(f, "string" == typeof a ? [a] : a)
                : Rc.call(f, a)),
            f
          );
        },
        Lb: function (a, d, f) {
          return null == d ? -1 : wc.call(d, a, f);
        },
        ab: function (a, d) {
          for (var f = +d.length, h = 0, l = a.length; h < f; h++) {
            a[l++] = d[h];
          }
          return (a.length = l), a;
        },
        Kb: function (a, d, f) {
          var h = [],
            l = 0,
            n = a.length;
          for (f = !f; l < n; l++) {
            !d(a[l], l) !== f && h.push(a[l]);
          }
          return h;
        },
        map: function (a, d, f) {
          var h,
            l,
            n = 0,
            m = [];
          if (oa(a)) {
            for (h = a.length; n < h; n++) {
              null != (l = d(a[n], n, f)) && m.push(l);
            }
          } else {
            for (n in a) {
              null != (l = d(a[n], n, f)) && m.push(l);
            }
          }
          return zc(m);
        },
        la: 1,
        Pk: Ja,
      });
      "function" == typeof Symbol &&
        (g.M[Symbol.iterator] = Db[Symbol.iterator]);
      g.s(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, d) {
          Sb["[object " + d + "]"] = d.toLowerCase();
        }
      );
      var Kb = (function (a) {
        function d() {
          zb();
        }
        function f(p, x) {
          return x
            ? "\x00" === p
              ? "\ufffd"
              : p.slice(0, -1) +
                "\\" +
                p.charCodeAt(p.length - 1).toString(16) +
                " "
            : "\\" + p;
        }
        function h(p, x) {
          var A = "0x" + p.slice(1) - 65536;
          return (
            x ||
            (0 > A
              ? String.fromCharCode(A + 65536)
              : String.fromCharCode((A >> 10) | 55296, (1023 & A) | 56320))
          );
        }
        function l(p, x) {
          for (var A = 0, D = p.length; A < D; A++) {
            if (p[A] === x) {
              return A;
            }
          }
          return -1;
        }
        function n(p, x) {
          return p === x && (ob = !0), 0;
        }
        function m(p, x, A, D) {
          var J,
            R,
            P,
            Y,
            S = x && x.ownerDocument;
          var ma = x ? x.nodeType : 9;
          if (
            ((A = A || []),
            "string" != typeof p || !p || (1 !== ma && 9 !== ma && 11 !== ma))
          ) {
            return A;
          }
          if (!D && (zb(x), (x = x || ya), Ea)) {
            if (11 !== ma && (Y = Pd.exec(p))) {
              if ((J = Y[1])) {
                if (9 === ma) {
                  if (!(R = x.getElementById(J))) {
                    return A;
                  }
                  if (R.id === J) {
                    return A.push(R), A;
                  }
                } else {
                  if (
                    S &&
                    (R = S.getElementById(J)) &&
                    Ab(x, R) &&
                    R.id === J
                  ) {
                    return A.push(R), A;
                  }
                }
              } else {
                if (Y[2]) {
                  return lc.apply(A, x.getElementsByTagName(p)), A;
                }
                if (
                  (J = Y[3]) &&
                  Qa.getElementsByClassName &&
                  x.getElementsByClassName
                ) {
                  return lc.apply(A, x.getElementsByClassName(J)), A;
                }
              }
            }
            if (
              !(
                !Qa.Wg ||
                ed[p + " "] ||
                (Fa && Fa.test(p)) ||
                (1 === ma && "object" === x.nodeName.toLowerCase())
              )
            ) {
              if (((J = p), (S = x), 1 === ma && (Qd.test(p) || zd.test(p)))) {
                ((S = (od.test(p) && fb(x.parentNode)) || x) === x &&
                  Qa.scope) ||
                  ((P = x.getAttribute("id"))
                    ? (P = P.replace(Ad, f))
                    : x.setAttribute("id", (P = Oa)));
                for (ma = (J = Xb(p)).length; ma--; ) {
                  J[ma] = (P ? "#" + P : ":scope") + " " + jb(J[ma]);
                }
                J = J.join(",");
              }
              try {
                return lc.apply(A, S.querySelectorAll(J)), A;
              } catch (Ga) {
                ed(p, !0);
              } finally {
                P === Oa && x.removeAttribute("id");
              }
            }
          }
          return tc(p.replace(fd, "$1"), x, A, D);
        }
        function u() {
          var p = [];
          return function J(A, D) {
            return (
              p.push(A + " ") > Ka.ei && delete J[p.shift()], (J[A + " "] = D)
            );
          };
        }
        function v(p) {
          return (p[Oa] = !0), p;
        }
        function I(p) {
          var x = ya.createElement("fieldset");
          try {
            return !!p(x);
          } catch (A) {
            return !1;
          } finally {
            x.parentNode && x.parentNode.removeChild(x);
          }
        }
        function L(p, x) {
          for (var A = p.split("|"), D = A.length; D--; ) {
            Ka.od[A[D]] = x;
          }
        }
        function C(p, x) {
          var A = x && p,
            D =
              A &&
              1 === p.nodeType &&
              1 === x.nodeType &&
              p.sourceIndex - x.sourceIndex;
          if (D) {
            return D;
          }
          if (A) {
            for (; (A = A.nextSibling); ) {
              if (A === x) {
                return -1;
              }
            }
          }
          return p ? 1 : -1;
        }
        function U(p) {
          return function (x) {
            return "input" === x.nodeName.toLowerCase() && x.type === p;
          };
        }
        function ka(p) {
          return function (x) {
            var A = x.nodeName.toLowerCase();
            return ("input" === A || "button" === A) && x.type === p;
          };
        }
        function fa(p) {
          return function (x) {
            return "form" in x
              ? x.parentNode && !1 === x.disabled
                ? "label" in x
                  ? "label" in x.parentNode
                    ? x.parentNode.disabled === p
                    : x.disabled === p
                  : x.rj === p || (x.rj !== !p && Rd(x) === p)
                : x.disabled === p
              : "label" in x && x.disabled === p;
          };
        }
        function sa(p) {
          return v(function (x) {
            return (
              (x = +x),
              v(function (A, D) {
                for (var J, R = p([], A.length, x), P = R.length; P--; ) {
                  A[(J = R[P])] && (A[J] = !(D[J] = A[J]));
                }
              })
            );
          });
        }
        function fb(p) {
          return p && void 0 !== p.getElementsByTagName && p;
        }
        function Yb() {}
        function jb(p) {
          for (var x = 0, A = p.length, D = ""; x < A; x++) {
            D += p[x].value;
          }
          return D;
        }
        function Rb(p, x, A) {
          var D = x.dir,
            J = x.next,
            R = J || D,
            P = A && "parentNode" === R,
            Y = Sd++;
          return x.first
            ? function (S, ma, Ga) {
                for (; (S = S[D]); ) {
                  if (1 === S.nodeType || P) {
                    return p(S, ma, Ga);
                  }
                }
                return !1;
              }
            : function (S, ma, Ga) {
                var Xa,
                  Ya,
                  wa,
                  Pa = [ic, Y];
                if (Ga) {
                  for (; (S = S[D]); ) {
                    if ((1 === S.nodeType || P) && p(S, ma, Ga)) {
                      return !0;
                    }
                  }
                } else {
                  for (; (S = S[D]); ) {
                    if (1 === S.nodeType || P) {
                      if (
                        ((Ya =
                          (wa = S[Oa] || (S[Oa] = {}))[S.uniqueID] ||
                          (wa[S.uniqueID] = {})),
                        J && J === S.nodeName.toLowerCase())
                      ) {
                        S = S[D] || S;
                      } else {
                        if ((Xa = Ya[R]) && Xa[0] === ic && Xa[1] === Y) {
                          return (Pa[2] = Xa[2]);
                        }
                        if (((Ya[R] = Pa), (Pa[2] = p(S, ma, Ga)))) {
                          return !0;
                        }
                      }
                    }
                  }
                }
                return !1;
              };
        }
        function Ca(p) {
          return 1 < p.length
            ? function (x, A, D) {
                for (var J = p.length; J--; ) {
                  if (!p[J](x, A, D)) {
                    return !1;
                  }
                }
                return !0;
              }
            : p[0];
        }
        function Zb(p, x, A, D, J) {
          for (var R, P = [], Y = 0, S = p.length, ma = null != x; Y < S; Y++) {
            (R = p[Y]) && ((A && !A(R, D, J)) || (P.push(R), ma && x.push(Y)));
          }
          return P;
        }
        function tb(p, x, A, D, J, R) {
          return (
            D && !D[Oa] && (D = tb(D)),
            J && !J[Oa] && (J = tb(J, R)),
            v(function (P, Y, S, ma) {
              var Ga,
                Xa = [],
                Ya = [],
                wa = Y.length,
                Pa;
              if (!(Pa = P)) {
                Pa = x || "*";
                for (
                  var Ma = S.nodeType ? [S] : S,
                    ub = [],
                    Eb = 0,
                    ib = Ma.length;
                  Eb < ib;
                  Eb++
                ) {
                  m(Pa, Ma[Eb], ub);
                }
                Pa = ub;
              }
              Pa = !p || (!P && x) ? Pa : Zb(Pa, Xa, p, S, ma);
              Ma = A ? (J || (P ? p : wa || D) ? [] : Y) : Pa;
              if ((A && A(Pa, Ma, S, ma), D)) {
                var Za = Zb(Ma, Ya);
                D(Za, [], S, ma);
                for (S = Za.length; S--; ) {
                  (Ga = Za[S]) && (Ma[Ya[S]] = !(Pa[Ya[S]] = Ga));
                }
              }
              if (P) {
                if (J || p) {
                  if (J) {
                    Za = [];
                    for (S = Ma.length; S--; ) {
                      (Ga = Ma[S]) && Za.push((Pa[S] = Ga));
                    }
                    J(null, (Ma = []), Za, ma);
                  }
                  for (S = Ma.length; S--; ) {
                    (Ga = Ma[S]) &&
                      -1 < (Za = J ? l(P, Ga) : Xa[S]) &&
                      (P[Za] = !(Y[Za] = Ga));
                  }
                }
              } else {
                (Ma = Zb(Ma === Y ? Ma.splice(wa, Ma.length) : Ma)),
                  J ? J(null, Y, Ma, ma) : lc.apply(Y, Ma);
              }
            })
          );
        }
        function za(p) {
          var x,
            A,
            D = p.length,
            J = Ka.pc[p[0].type];
          var R = J || Ka.pc[" "];
          for (
            var P = J ? 1 : 0,
              Y = Rb(
                function (Ga) {
                  return Ga === x;
                },
                R,
                !0
              ),
              S = Rb(
                function (Ga) {
                  return -1 < l(x, Ga);
                },
                R,
                !0
              ),
              ma = [
                function (Ga, Xa, Ya) {
                  Ga =
                    (!J && (Ya || Xa !== vb)) ||
                    ((x = Xa).nodeType ? Y(Ga, Xa, Ya) : S(Ga, Xa, Ya));
                  return (x = null), Ga;
                },
              ];
            P < D;
            P++
          ) {
            if ((R = Ka.pc[p[P].type])) {
              ma = [Rb(Ca(ma), R)];
            } else {
              if ((R = Ka.filter[p[P].type].apply(null, p[P].matches))[Oa]) {
                for (A = ++P; A < D && !Ka.pc[p[A].type]; A++) {}
                return tb(
                  1 < P && Ca(ma),
                  1 < P &&
                    jb(
                      p
                        .slice(0, P - 1)
                        .concat({ value: " " === p[P - 2].type ? "*" : "" })
                    ).replace(fd, "$1"),
                  R,
                  P < A && za(p.slice(P, A)),
                  A < D && za((p = p.slice(A))),
                  A < D && jb(p)
                );
              }
              ma.push(R);
            }
          }
          return Ca(ma);
        }
        var $a,
          Qa,
          Ka,
          Fb,
          Dc,
          Xb,
          $b,
          tc,
          vb,
          cb,
          ob,
          zb,
          ya,
          Ra,
          Ea,
          Fa,
          pb,
          db,
          Ab,
          Oa = "sizzle" + 1 * new Date(),
          Gb = a.document,
          ic = 0,
          Sd = 0,
          Bd = u(),
          Cd = u(),
          Dd = u(),
          ed = u(),
          Td = {}.hasOwnProperty,
          uc = [],
          Ud = uc.pop,
          Vd = uc.push,
          lc = uc.push,
          Ed = uc.slice,
          Wd = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
          fd = RegExp(
            "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
            "g"
          ),
          Xd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          zd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          Qd = /[\x20\t\r\n\f]|>/,
          Yd = /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          Zd = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/,
          gd = {
            xc: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            Ff: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            te: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,
            Ef: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\]/,
            Gf: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            se: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            Uf: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            $c: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
          },
          $d = /HTML$/i,
          ae = /^(?:input|select|textarea|button)$/i,
          be = /^h\d$/i,
          Tc = /^[^{]+\{\s*\[native \w/,
          Pd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          od = /[+~]/,
          jc = RegExp(
            "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Ad = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Rd = Rb(
            function (p) {
              return (
                !0 === p.disabled && "fieldset" === p.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          lc.apply((uc = Ed.call(Gb.childNodes)), Gb.childNodes),
            uc[Gb.childNodes.length].nodeType;
        } catch (p) {
          lc = {
            apply: uc.length
              ? function (x, A) {
                  Vd.apply(x, Ed.call(A));
                }
              : function (x, A) {
                  for (var D = x.length, J = 0; (x[D++] = A[J++]); ) {}
                  x.length = D - 1;
                },
          };
        }
        for ($a in ((Qa = m.Pk = {}),
        (Dc = m.uj = function (p) {
          var x = (p.ownerDocument || p).documentElement;
          return !$d.test(p.namespaceURI || (x && x.nodeName) || "HTML");
        }),
        (zb = function (p) {
          var x, A;
          p = p ? p.ownerDocument || p : Gb;
          return p != ya && 9 === p.nodeType && p.documentElement
            ? ((Ra = (ya = p).documentElement),
              (Ea = !Dc(ya)),
              Gb != ya &&
                (A = ya.defaultView) &&
                A.top !== A &&
                (A.addEventListener
                  ? A.addEventListener("unload", d, !1)
                  : A.attachEvent && A.attachEvent("onunload", d)),
              (Qa.scope = I(function (D) {
                return (
                  Ra.appendChild(D).appendChild(ya.createElement("div")),
                  void 0 !== D.querySelectorAll &&
                    !D.querySelectorAll(":scope fieldset div").length
                );
              })),
              (Qa.attributes = I(function (D) {
                return (D.className = "i"), !D.getAttribute("className");
              })),
              (Qa.getElementsByTagName = I(function (D) {
                return (
                  D.appendChild(ya.createComment("")),
                  !D.getElementsByTagName("*").length
                );
              })),
              (Qa.getElementsByClassName = Tc.test(ya.getElementsByClassName)),
              (Qa.Xi = I(function (D) {
                return (
                  (Ra.appendChild(D).id = Oa),
                  !ya.getElementsByName || !ya.getElementsByName(Oa).length
                );
              })),
              Qa.Xi
                ? ((Ka.filter.xc = function (D) {
                    var J = D.replace(jc, h);
                    return function (R) {
                      return R.getAttribute("id") === J;
                    };
                  }),
                  (Ka.find.xc = function (D, J) {
                    if (void 0 !== J.getElementById && Ea) {
                      var R = J.getElementById(D);
                      return R ? [R] : [];
                    }
                  }))
                : ((Ka.filter.xc = function (D) {
                    var J = D.replace(jc, h);
                    return function (R) {
                      return (
                        (R =
                          void 0 !== R.getAttributeNode &&
                          R.getAttributeNode("id")) && R.value === J
                      );
                    };
                  }),
                  (Ka.find.xc = function (D, J) {
                    if (void 0 !== J.getElementById && Ea) {
                      var R,
                        P,
                        Y = J.getElementById(D);
                      if (Y) {
                        if ((R = Y.getAttributeNode("id")) && R.value === D) {
                          return [Y];
                        }
                        var S = J.getElementsByName(D);
                        for (P = 0; (Y = S[P++]); ) {
                          if ((R = Y.getAttributeNode("id")) && R.value === D) {
                            return [Y];
                          }
                        }
                      }
                      return [];
                    }
                  })),
              (Ka.find.te = Qa.getElementsByTagName
                ? function (D, J) {
                    return void 0 !== J.getElementsByTagName
                      ? J.getElementsByTagName(D)
                      : Qa.Wg
                      ? J.querySelectorAll(D)
                      : void 0;
                  }
                : function (D, J) {
                    var R,
                      P = [],
                      Y = 0,
                      S = J.getElementsByTagName(D);
                    if ("*" === D) {
                      for (; (R = S[Y++]); ) {
                        1 === R.nodeType && P.push(R);
                      }
                      return P;
                    }
                    return S;
                  }),
              (Ka.find.Ff =
                Qa.getElementsByClassName &&
                function (D, J) {
                  if (void 0 !== J.getElementsByClassName && Ea) {
                    return J.getElementsByClassName(D);
                  }
                }),
              (pb = []),
              (Fa = []),
              (Qa.Wg = Tc.test(ya.querySelectorAll)) &&
                (I(function (D) {
                  var J;
                  Ra.appendChild(D).innerHTML =
                    "<a id='" +
                    Oa +
                    "'></a><select id='" +
                    Oa +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>";
                  D.querySelectorAll("[msallowcapture^='']").length &&
                    Fa.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                  D.querySelectorAll("[selected]").length ||
                    Fa.push(
                      "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                    );
                  D.querySelectorAll("[id~=" + Oa + "-]").length ||
                    Fa.push("~=");
                  (J = ya.createElement("input")).setAttribute("name", "");
                  D.appendChild(J);
                  D.querySelectorAll("[name='']").length ||
                    Fa.push(
                      "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                    );
                  D.querySelectorAll(":checked").length || Fa.push(":checked");
                  D.querySelectorAll("a#" + Oa + "+*").length ||
                    Fa.push(".#.+[+~]");
                  D.querySelectorAll("\\\f");
                  Fa.push("[\\r\\n\\f]");
                }),
                I(function (D) {
                  D.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var J = ya.createElement("input");
                  J.setAttribute("type", "hidden");
                  D.appendChild(J).setAttribute("name", "D");
                  D.querySelectorAll("[name=d]").length &&
                    Fa.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                  2 !== D.querySelectorAll(":enabled").length &&
                    Fa.push(":enabled", ":disabled");
                  Ra.appendChild(D).disabled = !0;
                  2 !== D.querySelectorAll(":disabled").length &&
                    Fa.push(":enabled", ":disabled");
                  D.querySelectorAll("*,:x");
                  Fa.push(",.*:");
                })),
              (Qa.matchesSelector = Tc.test(
                (db =
                  Ra.matches ||
                  Ra.webkitMatchesSelector ||
                  Ra.mozMatchesSelector ||
                  Ra.oMatchesSelector ||
                  Ra.msMatchesSelector)
              )) &&
                I(function (D) {
                  Qa.Gi = db.call(D, "*");
                  db.call(D, "[s!='']:x");
                  pb.push(
                    "!=",
                    ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                  );
                }),
              (Fa = Fa.length && new RegExp(Fa.join("|"))),
              (pb = pb.length && new RegExp(pb.join("|"))),
              (x = Tc.test(Ra.compareDocumentPosition)),
              (Ab =
                x || Tc.test(Ra.contains)
                  ? function (D, J) {
                      var R = 9 === D.nodeType ? D.documentElement : D,
                        P = J && J.parentNode;
                      return (
                        D === P ||
                        !(
                          !P ||
                          1 !== P.nodeType ||
                          !(R.contains
                            ? R.contains(P)
                            : D.compareDocumentPosition &&
                              16 & D.compareDocumentPosition(P))
                        )
                      );
                    }
                  : function (D, J) {
                      if (J) {
                        for (; (J = J.parentNode); ) {
                          if (J === D) {
                            return !0;
                          }
                        }
                      }
                      return !1;
                    }),
              (n = x
                ? function (D, J) {
                    if (D === J) {
                      return (ob = !0), 0;
                    }
                    var R =
                      !D.compareDocumentPosition - !J.compareDocumentPosition;
                    return (
                      R ||
                      (1 &
                        (R =
                          (D.ownerDocument || D) == (J.ownerDocument || J)
                            ? D.compareDocumentPosition(J)
                            : 1) ||
                      (!Qa.Kk && J.compareDocumentPosition(D) === R)
                        ? D == ya || (D.ownerDocument == Gb && Ab(Gb, D))
                          ? -1
                          : J == ya || (J.ownerDocument == Gb && Ab(Gb, J))
                          ? 1
                          : cb
                          ? l(cb, D) - l(cb, J)
                          : 0
                        : 4 & R
                        ? -1
                        : 1)
                    );
                  }
                : function (D, J) {
                    if (D === J) {
                      return (ob = !0), 0;
                    }
                    var R = 0;
                    var P = D.parentNode;
                    var Y = J.parentNode,
                      S = [D],
                      ma = [J];
                    if (!P || !Y) {
                      return D == ya
                        ? -1
                        : J == ya
                        ? 1
                        : P
                        ? -1
                        : Y
                        ? 1
                        : cb
                        ? l(cb, D) - l(cb, J)
                        : 0;
                    }
                    if (P === Y) {
                      return C(D, J);
                    }
                    for (P = D; (P = P.parentNode); ) {
                      S.unshift(P);
                    }
                    for (P = J; (P = P.parentNode); ) {
                      ma.unshift(P);
                    }
                    for (; S[R] === ma[R]; ) {
                      R++;
                    }
                    return R
                      ? C(S[R], ma[R])
                      : S[R] == Gb
                      ? -1
                      : ma[R] == Gb
                      ? 1
                      : 0;
                  }),
              ya)
            : ya;
        }),
        (m.matches = function (p, x) {
          return m(p, null, null, x);
        }),
        (m.matchesSelector = function (p, x) {
          if (
            (zb(p),
            !(
              !Qa.matchesSelector ||
              !Ea ||
              ed[x + " "] ||
              (pb && pb.test(x)) ||
              (Fa && Fa.test(x))
            ))
          ) {
            try {
              var A = db.call(p, x);
              if (A || Qa.Gi || (p.document && 11 !== p.document.nodeType)) {
                return A;
              }
            } catch (D) {
              ed(x, !0);
            }
          }
          return 0 < m(x, ya, null, [p]).length;
        }),
        (m.contains = function (p, x) {
          return (p.ownerDocument || p) != ya && zb(p), Ab(p, x);
        }),
        (m.o = function (p, x) {
          (p.ownerDocument || p) != ya && zb(p);
          var A = Ka.od[x.toLowerCase()];
          A = A && Td.call(Ka.od, x.toLowerCase()) ? A(p, x, !Ea) : void 0;
          return void 0 !== A
            ? A
            : Qa.attributes || !Ea
            ? p.getAttribute(x)
            : (A = p.getAttributeNode(x)) && A.specified
            ? A.value
            : null;
        }),
        (m.escape = function (p) {
          return (p + "").replace(Ad, f);
        }),
        (m.error = function (p) {
          throw Error("Syntax error, unrecognized expression: " + p);
        }),
        (m.Tb = function (p) {
          var x,
            A = [],
            D = 0,
            J = 0;
          if (((ob = !Qa.Ei), (cb = !Qa.Lk && p.slice(0)), p.sort(n), ob)) {
            for (; (x = p[J++]); ) {
              x === p[J] && (D = A.push(J));
            }
            for (; D--; ) {
              p.splice(A[D], 1);
            }
          }
          return (cb = null), p;
        }),
        (Fb = m.cj = function (p) {
          var x,
            A = "",
            D = 0;
          if ((x = p.nodeType)) {
            if (1 === x || 9 === x || 11 === x) {
              if ("string" == typeof p.textContent) {
                return p.textContent;
              }
              for (p = p.firstChild; p; p = p.nextSibling) {
                A += Fb(p);
              }
            } else {
              if (3 === x || 4 === x) {
                return p.nodeValue;
              }
            }
          } else {
            for (; (x = p[D++]); ) {
              A += Fb(x);
            }
          }
          return A;
        }),
        ((Ka = m.K = {
          ei: 50,
          pm: v,
          match: gd,
          od: {},
          find: {},
          pc: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          bk: {
            Ef: function (p) {
              return (
                (p[1] = p[1].replace(jc, h)),
                (p[3] = (p[3] || p[4] || p[5] || "").replace(jc, h)),
                "~=" === p[2] && (p[3] = " " + p[3] + " "),
                p.slice(0, 4)
              );
            },
            se: function (p) {
              return (
                (p[1] = p[1].toLowerCase()),
                "nth" === p[1].slice(0, 3)
                  ? (p[3] || m.error(p[0]),
                    (p[4] = +(p[4]
                      ? p[5] + (p[6] || 1)
                      : 2 * ("even" === p[3] || "odd" === p[3]))),
                    (p[5] = +(p[7] + p[8] || "odd" === p[3])))
                  : p[3] && m.error(p[0]),
                p
              );
            },
            Gf: function (p) {
              var x,
                A = !p[6] && p[2];
              return gd.se.test(p[0])
                ? null
                : (p[3]
                    ? (p[2] = p[4] || p[5] || "")
                    : A &&
                      Yd.test(A) &&
                      (x = Xb(A, !0)) &&
                      (x = A.indexOf(")", A.length - x) - A.length) &&
                      ((p[0] = p[0].slice(0, x)), (p[2] = A.slice(0, x))),
                  p.slice(0, 3));
            },
          },
          filter: {
            te: function (p) {
              var x = p.replace(jc, h).toLowerCase();
              return "*" === p
                ? function () {
                    return !0;
                  }
                : function (A) {
                    return A.nodeName && A.nodeName.toLowerCase() === x;
                  };
            },
            Ff: function (p) {
              var x = Bd[p + " "];
              return (
                x ||
                ((x = new RegExp(
                  "(^|[\\x20\\t\\r\\n\\f])" + p + "([\\x20\\t\\r\\n\\f]|$)"
                )),
                Bd(p, function (A) {
                  return x.test(
                    ("string" == typeof A.className && A.className) ||
                      (void 0 !== A.getAttribute && A.getAttribute("class")) ||
                      ""
                  );
                }))
              );
            },
            Ef: function (p, x, A) {
              return function (D) {
                D = m.o(D, p);
                return null == D
                  ? "!=" === x
                  : !x ||
                      ((D += ""),
                      "=" === x
                        ? D === A
                        : "!=" === x
                        ? D !== A
                        : "^=" === x
                        ? A && 0 === D.indexOf(A)
                        : "*=" === x
                        ? A && -1 < D.indexOf(A)
                        : "$=" === x
                        ? A && D.slice(-A.length) === A
                        : "~=" === x
                        ? -1 < (" " + D.replace(Wd, " ") + " ").indexOf(A)
                        : "|=" === x &&
                          (D === A || D.slice(0, A.length + 1) === A + "-"));
              };
            },
            se: function (p, x, A, D, J) {
              var R = "nth" !== p.slice(0, 3),
                P = "last" !== p.slice(-4),
                Y = "of-type" === x;
              return 1 === D && 0 === J
                ? function (S) {
                    return !!S.parentNode;
                  }
                : function (S, ma, Ga) {
                    var Xa, Ya, wa, Pa;
                    ma = R !== P ? "nextSibling" : "previousSibling";
                    var Ma = S.parentNode,
                      ub = Y && S.nodeName.toLowerCase(),
                      Eb = !Ga && !Y,
                      ib = !1;
                    if (Ma) {
                      if (R) {
                        for (; ma; ) {
                          for (wa = S; (wa = wa[ma]); ) {
                            if (
                              Y
                                ? wa.nodeName.toLowerCase() === ub
                                : 1 === wa.nodeType
                            ) {
                              return !1;
                            }
                          }
                          var Za = (ma = "only" === p && !Za && "nextSibling");
                        }
                        return !0;
                      }
                      if (
                        ((Za = [P ? Ma.firstChild : Ma.lastChild]), P && Eb)
                      ) {
                        for (
                          ib =
                            (Pa =
                              (Xa =
                                (Ga =
                                  (Ya = (wa = Ma)[Oa] || (wa[Oa] = {}))[
                                    wa.uniqueID
                                  ] || (Ya[wa.uniqueID] = {}))[p] || [])[0] ===
                                ic && Xa[1]) && Xa[2],
                            wa = Pa && Ma.childNodes[Pa];
                          (wa =
                            (++Pa && wa && wa[ma]) ||
                            (ib = Pa = 0) ||
                            Za.pop());

                        ) {
                          if (1 === wa.nodeType && ++ib && wa === S) {
                            Ga[p] = [ic, Pa, ib];
                            break;
                          }
                        }
                      } else {
                        if (
                          (Eb &&
                            (ib = Pa =
                              (Xa =
                                ((Ya = (wa = S)[Oa] || (wa[Oa] = {}))[
                                  wa.uniqueID
                                ] || (Ya[wa.uniqueID] = {}))[p] || [])[0] ===
                                ic && Xa[1]),
                          !1 === ib)
                        ) {
                          for (
                            ;
                            (wa =
                              (++Pa && wa && wa[ma]) ||
                              (ib = Pa = 0) ||
                              Za.pop()) &&
                            ((Y
                              ? wa.nodeName.toLowerCase() !== ub
                              : 1 !== wa.nodeType) ||
                              !++ib ||
                              (Eb &&
                                ((Ga =
                                  (Ya = wa[Oa] || (wa[Oa] = {}))[wa.uniqueID] ||
                                  (Ya[wa.uniqueID] = {}))[p] = [ic, ib]),
                              wa !== S));

                          ) {}
                        }
                      }
                      return (ib -= J) === D || (0 == ib % D && 0 <= ib / D);
                    }
                  };
            },
            Gf: function (p, x) {
              var A,
                D =
                  Ka.Ka[p] ||
                  Ka.kh[p.toLowerCase()] ||
                  m.error("unsupported pseudo: " + p);
              return D[Oa]
                ? D(x)
                : 1 < D.length
                ? ((A = [p, p, "", x]),
                  Ka.kh.hasOwnProperty(p.toLowerCase())
                    ? v(function (J, R) {
                        for (var P, Y = D(J, x), S = Y.length; S--; ) {
                          J[(P = l(J, Y[S]))] = !(R[P] = Y[S]);
                        }
                      })
                    : function (J) {
                        return D(J, 0, A);
                      })
                : D;
            },
          },
          Ka: {
            ub: v(function (p) {
              var x = [],
                A = [],
                D = $b(p.replace(fd, "$1"));
              return D[Oa]
                ? v(function (J, R, P, Y) {
                    var S;
                    P = D(J, null, Y, []);
                    for (Y = J.length; Y--; ) {
                      (S = P[Y]) && (J[Y] = !(R[Y] = S));
                    }
                  })
                : function (J, R, P) {
                    return (
                      (x[0] = J), D(x, null, P, A), (x[0] = null), !A.pop()
                    );
                  };
            }),
            has: v(function (p) {
              return function (x) {
                return 0 < m(p, x).length;
              };
            }),
            contains: v(function (p) {
              return (
                (p = p.replace(jc, h)),
                function (x) {
                  return -1 < (x.textContent || Fb(x)).indexOf(p);
                }
              );
            }),
            lang: v(function (p) {
              return (
                Zd.test(p || "") || m.error("unsupported lang: " + p),
                (p = p.replace(jc, h).toLowerCase()),
                function (x) {
                  var A;
                  do {
                    if (
                      (A = Ea
                        ? x.lang
                        : x.getAttribute("xml:lang") || x.getAttribute("lang"))
                    ) {
                      return (
                        (A = A.toLowerCase()) === p || 0 === A.indexOf(p + "-")
                      );
                    }
                  } while ((x = x.parentNode) && 1 === x.nodeType);
                  return !1;
                }
              );
            }),
            target: function (p) {
              var x = a.location && a.location.hash;
              return x && x.slice(1) === p.id;
            },
            root: function (p) {
              return p === Ra;
            },
            focus: function (p) {
              return (
                p === ya.activeElement &&
                (!ya.hasFocus || ya.hasFocus()) &&
                !!(p.type || p.href || ~p.tabIndex)
              );
            },
            enabled: fa(!1),
            disabled: fa(!0),
            checked: function (p) {
              var x = p.nodeName.toLowerCase();
              return (
                ("input" === x && !!p.checked) ||
                ("option" === x && !!p.selected)
              );
            },
            selected: function (p) {
              return (
                p.parentNode && p.parentNode.selectedIndex, !0 === p.selected
              );
            },
            empty: function (p) {
              for (p = p.firstChild; p; p = p.nextSibling) {
                if (6 > p.nodeType) {
                  return !1;
                }
              }
              return !0;
            },
            parent: function (p) {
              return !Ka.Ka.empty(p);
            },
            pn: function (p) {
              return be.test(p.nodeName);
            },
            input: function (p) {
              return ae.test(p.nodeName);
            },
            button: function (p) {
              var x = p.nodeName.toLowerCase();
              return ("input" === x && "button" === p.type) || "button" === x;
            },
            text: function (p) {
              var x;
              return (
                "input" === p.nodeName.toLowerCase() &&
                "text" === p.type &&
                (null == (x = p.getAttribute("type")) ||
                  "text" === x.toLowerCase())
              );
            },
            first: sa(function () {
              return [0];
            }),
            xj: sa(function (p, x) {
              return [x - 1];
            }),
            T: sa(function (p, x, A) {
              return [0 > A ? A + x : A];
            }),
            Oi: sa(function (p, x) {
              for (var A = 0; A < x; A += 2) {
                p.push(A);
              }
              return p;
            }),
            Nj: sa(function (p, x) {
              for (var A = 1; A < x; A += 2) {
                p.push(A);
              }
              return p;
            }),
            zn: sa(function (p, x, A) {
              for (x = 0 > A ? A + x : A > x ? x : A; 0 <= --x; ) {
                p.push(x);
              }
              return p;
            }),
            on: sa(function (p, x, A) {
              for (A = 0 > A ? A + x : A; ++A < x; ) {
                p.push(A);
              }
              return p;
            }),
          },
        }).Ka.Kn = Ka.Ka.T),
        { lo: !0, km: !0, file: !0, password: !0, image: !0 })) {
          Ka.Ka[$a] = U($a);
        }
        for ($a in { submit: !0, reset: !0 }) {
          Ka.Ka[$a] = ka($a);
        }
        return (
          (Yb.prototype = Ka.filters = Ka.Ka),
          (Ka.kh = new Yb()),
          (Xb = function (p, x) {
            var A, D, J, R, P, Y;
            if ((P = Cd[p + " "])) {
              return x ? 0 : P.slice(0);
            }
            P = p;
            var S = [];
            for (Y = Ka.bk; P; ) {
              for (R in ((A && !(D = Xd.exec(P))) ||
                (D && (P = P.slice(D[0].length) || P), S.push((J = []))),
              (A = !1),
              (D = zd.exec(P)) &&
                ((A = D.shift()),
                J.push({ value: A, type: D[0].replace(fd, " ") }),
                (P = P.slice(A.length))),
              Ka.filter)) {
                !(D = gd[R].exec(P)) ||
                  (Y[R] && !(D = Y[R](D))) ||
                  ((A = D.shift()),
                  J.push({ value: A, type: R, matches: D }),
                  (P = P.slice(A.length)));
              }
              if (!A) {
                break;
              }
            }
            return x ? P.length : P ? m.error(p) : Cd(p, S).slice(0);
          }),
          ($b = m.compile = function (p, x) {
            var A,
              D = [],
              J = [],
              R = Dd[p + " "];
            if (!R) {
              x || (x = Xb(p));
              for (A = x.length; A--; ) {
                (R = za(x[A]))[Oa] ? D.push(R) : J.push(R);
              }
              (R = Dd(
                p,
                (function (P, Y) {
                  function S(Xa, Ya, wa, Pa, Ma) {
                    var ub,
                      Eb,
                      ib = 0,
                      Za = "0",
                      hd = Xa && [],
                      vc = [],
                      Fd = vb,
                      Gd = Xa || (Ga && Ka.find.te("*", Ma)),
                      Hd = (ic += null == Fd ? 1 : Math.random() || 0.1),
                      ce = Gd.length;
                    for (
                      Ma && (vb = Ya == ya || Ya || Ma);
                      Za !== ce && null != (ub = Gd[Za]);
                      Za++
                    ) {
                      if (Ga && ub) {
                        var pd = 0;
                        for (
                          Ya || ub.ownerDocument == ya || (zb(ub), (wa = !Ea));
                          (Eb = P[pd++]);

                        ) {
                          if (Eb(ub, Ya || ya, wa)) {
                            Pa.push(ub);
                            break;
                          }
                        }
                        Ma && (ic = Hd);
                      }
                      ma && ((ub = !Eb && ub) && ib--, Xa && hd.push(ub));
                    }
                    if (((ib += Za), ma && Za !== ib)) {
                      for (pd = 0; (Eb = Y[pd++]); ) {
                        Eb(hd, vc, Ya, wa);
                      }
                      if (Xa) {
                        if (0 < ib) {
                          for (; Za--; ) {
                            hd[Za] || vc[Za] || (vc[Za] = Ud.call(Pa));
                          }
                        }
                        vc = Zb(vc);
                      }
                      lc.apply(Pa, vc);
                      Ma &&
                        !Xa &&
                        0 < vc.length &&
                        1 < ib + Y.length &&
                        m.Tb(Pa);
                    }
                    return Ma && ((ic = Hd), (vb = Fd)), hd;
                  }
                  var ma = 0 < Y.length,
                    Ga = 0 < P.length;
                  return ma ? v(S) : S;
                })(J, D)
              )).yb = p;
            }
            return R;
          }),
          (tc = m.select = function (p, x, A, D) {
            var J,
              R,
              P,
              Y,
              S,
              ma = "function" == typeof p && p,
              Ga = !D && Xb((p = ma.yb || p));
            if (((A = A || []), 1 === Ga.length)) {
              if (
                2 < (R = Ga[0] = Ga[0].slice(0)).length &&
                "ID" === (P = R[0]).type &&
                9 === x.nodeType &&
                Ea &&
                Ka.pc[R[1].type]
              ) {
                if (
                  !(x = (Ka.find.xc(P.matches[0].replace(jc, h), x) || [])[0])
                ) {
                  return A;
                }
                ma && (x = x.parentNode);
                p = p.slice(R.shift().value.length);
              }
              for (
                J = gd.$c.test(p) ? 0 : R.length;
                J-- && ((P = R[J]), !Ka.pc[(Y = P.type)]);

              ) {
                if (
                  (S = Ka.find[Y]) &&
                  (D = S(
                    P.matches[0].replace(jc, h),
                    (od.test(R[0].type) && fb(x.parentNode)) || x
                  ))
                ) {
                  if ((R.splice(J, 1), !(p = D.length && jb(R)))) {
                    return lc.apply(A, D), A;
                  }
                  break;
                }
              }
            }
            return (
              (ma || $b(p, Ga))(
                D,
                x,
                !Ea,
                A,
                !x || (od.test(p) && fb(x.parentNode)) || x
              ),
              A
            );
          }),
          (Qa.Lk = Oa.split("").sort(n).join("") === Oa),
          (Qa.Ei = !!ob),
          zb(),
          (Qa.Kk = I(function (p) {
            return 1 & p.compareDocumentPosition(ya.createElement("fieldset"));
          })),
          I(function (p) {
            return (
              (p.innerHTML = "<a href='#'></a>"),
              "#" === p.firstChild.getAttribute("href")
            );
          }) ||
            L("type|href|height|width", function (p, x, A) {
              if (!A) {
                return p.getAttribute(x, "type" === x.toLowerCase() ? 1 : 2);
              }
            }),
          (Qa.attributes &&
            I(function (p) {
              return (
                (p.innerHTML = "<input/>"),
                p.firstChild.setAttribute("value", ""),
                "" === p.firstChild.getAttribute("value")
              );
            })) ||
            L("value", function (p, x, A) {
              if (!A && "input" === p.nodeName.toLowerCase()) {
                return p.defaultValue;
              }
            }),
          I(function (p) {
            return null == p.getAttribute("disabled");
          }) ||
            L(
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              function (p, x, A) {
                var D;
                if (!A) {
                  return !0 === p[x]
                    ? x.toLowerCase()
                    : (D = p.getAttributeNode(x)) && D.specified
                    ? D.value
                    : null;
                }
              }
            ),
          m
        );
      })(H);
      g.find = Kb;
      g.Oa = Kb.K;
      g.Oa[":"] = g.Oa.Ka;
      g.Tb = g.unique = Kb.Tb;
      g.text = Kb.cj;
      g.We = Kb.uj;
      g.contains = Kb.contains;
      var Uc = g.Oa.match.$c,
        Vc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      g.filter = function (a, d, f) {
        var h = d[0];
        return (
          f && (a = ":not(" + a + ")"),
          1 === d.length && 1 === h.nodeType
            ? g.find.matchesSelector(h, a)
              ? [h]
              : []
            : g.find.matches(
                a,
                g.Kb(d, function (l) {
                  return 1 === l.nodeType;
                })
              )
        );
      };
      g.M.extend({
        find: function (a) {
          var d,
            f = this.length,
            h = this;
          if ("string" != typeof a) {
            return this.Da(
              g(a).filter(function () {
                for (d = 0; d < f; d++) {
                  if (g.contains(h[d], this)) {
                    return !0;
                  }
                }
              })
            );
          }
          var l = this.Da([]);
          for (d = 0; d < f; d++) {
            g.find(a, h[d], l);
          }
          return 1 < f ? g.Tb(l) : l;
        },
        filter: function (a) {
          return this.Da(ra(this, a || [], !1));
        },
        ub: function (a) {
          return this.Da(ra(this, a || [], !0));
        },
        is: function (a) {
          return !!ra(
            this,
            "string" == typeof a && Uc.test(a) ? g(a) : a || [],
            !1
          ).length;
        },
      });
      var Wc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (g.M.Ya = function (a, d, f) {
        var h, l;
        if (!a) {
          return this;
        }
        if (((f = f || Xc), "string" == typeof a)) {
          if (
            !(h =
              "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length
                ? [null, a, null]
                : Wc.exec(a)) ||
            (!h[1] && d)
          ) {
            return !d || d.Nd ? (d || f).find(a) : this.constructor(d).find(a);
          }
          if (h[1]) {
            if (
              ((d = d instanceof g ? d[0] : d),
              g.ab(
                this,
                g.Pg(h[1], d && d.nodeType ? d.ownerDocument || d : ua, !0)
              ),
              Vc.test(h[1]) && g.Uc(d))
            ) {
              for (h in d) {
                G(this[h]) ? this[h](d[h]) : this.o(h, d[h]);
              }
            }
            return this;
          }
          return (
            (l = ua.getElementById(h[2])) && ((this[0] = l), (this.length = 1)),
            this
          );
        }
        return a.nodeType
          ? ((this[0] = a), (this.length = 1), this)
          : G(a)
          ? void 0 !== f.ready
            ? f.ready(a)
            : a(g)
          : g.Yc(a, this);
      }).prototype = g.M;
      var Xc = g(ua);
      var qd = /^(?:parents|prev(?:Until|All))/,
        Lb = { children: !0, Yb: !0, next: !0, Ug: !0 };
      g.M.extend({
        has: function (a) {
          var d = g(a, this),
            f = d.length;
          return this.filter(function () {
            for (var h = 0; h < f; h++) {
              if (g.contains(this, d[h])) {
                return !0;
              }
            }
          });
        },
        closest: function (a, d) {
          var f,
            h = 0,
            l = this.length,
            n = [],
            m = "string" != typeof a && g(a);
          if (!Uc.test(a)) {
            for (; h < l; h++) {
              for (f = this[h]; f && f !== d; f = f.parentNode) {
                if (
                  11 > f.nodeType &&
                  (m
                    ? -1 < m.index(f)
                    : 1 === f.nodeType && g.find.matchesSelector(f, a))
                ) {
                  n.push(f);
                  break;
                }
              }
            }
          }
          return this.Da(1 < n.length ? g.Tb(n) : n);
        },
        index: function (a) {
          return a
            ? "string" == typeof a
              ? wc.call(g(a), this[0])
              : wc.call(this, a.Nd ? a[0] : a)
            : this[0] && this[0].parentNode
            ? this.first().dk().length
            : -1;
        },
        add: function (a, d) {
          return this.Da(g.Tb(g.ab(this.get(), g(a, d))));
        },
        Zl: function (a) {
          return this.add(null == a ? this.df : this.df.filter(a));
        },
      });
      g.s(
        {
          parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
          },
          Qj: function (a) {
            return F(a, "parentNode");
          },
          Xn: function (a, d, f) {
            return F(a, "parentNode", f);
          },
          next: function (a) {
            return bb(a, "nextSibling");
          },
          Ug: function (a) {
            return bb(a, "previousSibling");
          },
          En: function (a) {
            return F(a, "nextSibling");
          },
          dk: function (a) {
            return F(a, "previousSibling");
          },
          Fn: function (a, d, f) {
            return F(a, "nextSibling", f);
          },
          jo: function (a, d, f) {
            return F(a, "previousSibling", f);
          },
          ph: function (a) {
            return w((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return w(a.firstChild);
          },
          Yb: function (a) {
            return null != a.contentDocument && Qb(a.contentDocument)
              ? a.contentDocument
              : (Ba(a, "template") && (a = a.content || a),
                g.ab([], a.childNodes));
          },
        },
        function (a, d) {
          g.M[a] = function (f, h) {
            var l = g.map(this, d, f);
            return (
              "Until" !== a.slice(-5) && (h = f),
              h && "string" == typeof h && (l = g.filter(h, l)),
              1 < this.length && (Lb[a] || g.Tb(l), qd.test(a) && l.reverse()),
              this.Da(l)
            );
          };
        }
      );
      var La = /[^\x20\t\r\n\f]+/g;
      g.qb = function (a) {
        function d() {
          n = n || a.once;
          for (l = f = !0; u.length; v = -1) {
            for (h = u.shift(); ++v < m.length; ) {
              !1 === m[v].apply(h[0], h[1]) &&
                a.Po &&
                ((v = m.length), (h = !1));
            }
          }
          a.memory || (h = !1);
          f = !1;
          n && (m = h ? [] : "");
        }
        a =
          "string" == typeof a
            ? (function (L) {
                var C = {};
                return (
                  g.s(L.match(La) || [], function (U, ka) {
                    C[ka] = !0;
                  }),
                  C
                );
              })(a)
            : g.extend({}, a);
        var f,
          h,
          l,
          n,
          m = [],
          u = [],
          v = -1,
          I = {
            add: function () {
              return (
                m &&
                  (h && !f && ((v = m.length - 1), u.push(h)),
                  (function U(C) {
                    g.s(C, function (ka, fa) {
                      G(fa)
                        ? (a.unique && I.has(fa)) || m.push(fa)
                        : fa && fa.length && "string" !== Z(fa) && U(fa);
                    });
                  })(arguments),
                  h && !f && d()),
                this
              );
            },
            remove: function () {
              return (
                g.s(arguments, function (L, C) {
                  for (var U; -1 < (U = g.Lb(C, m, U)); ) {
                    m.splice(U, 1), U <= v && v--;
                  }
                }),
                this
              );
            },
            has: function (L) {
              return L ? -1 < g.Lb(L, m) : 0 < m.length;
            },
            empty: function () {
              return m && (m = []), this;
            },
            disable: function () {
              return (n = u = []), (m = h = ""), this;
            },
            disabled: function () {
              return !m;
            },
            lock: function () {
              return (n = u = []), h || f || (m = h = ""), this;
            },
            locked: function () {
              return !!n;
            },
            Le: function (L, C) {
              return (
                n ||
                  ((C = [L, (C = C || []).slice ? C.slice() : C]),
                  u.push(C),
                  f || d()),
                this
              );
            },
            Mc: function () {
              return I.Le(this, arguments), this;
            },
            Lm: function () {
              return !!l;
            },
          };
        return I;
      };
      g.extend({
        Fa: function (a) {
          var d = [
              ["notify", "progress", g.qb("memory"), g.qb("memory"), 2],
              [
                "resolve",
                "done",
                g.qb("once memory"),
                g.qb("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                g.qb("once memory"),
                g.qb("once memory"),
                1,
                "rejected",
              ],
            ],
            f = "pending",
            h = {
              state: function () {
                return f;
              },
              fb: function () {
                return l.done(arguments).Jc(arguments), this;
              },
              catch: function (n) {
                return h.then(null, n);
              },
              bo: function () {
                var n = arguments;
                return g
                  .Fa(function (m) {
                    g.s(d, function (u, v) {
                      var I = G(n[v[4]]) && n[v[4]];
                      l[v[1]](function () {
                        var L = I && I.apply(this, arguments);
                        L && G(L.promise)
                          ? L.promise()
                              .progress(m.notify)
                              .done(m.resolve)
                              .Jc(m.reject)
                          : m[v[0] + "With"](this, I ? [L] : arguments);
                      });
                    });
                    n = null;
                  })
                  .promise();
              },
              then: function (n, m, u) {
                function v(L, C, U, ka) {
                  return function () {
                    function fa() {
                      var jb;
                      if (!(L < I)) {
                        if ((jb = U.apply(sa, fb)) === C.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }
                        var Rb =
                          jb &&
                          ("object" == typeof jb || "function" == typeof jb) &&
                          jb.then;
                        G(Rb)
                          ? ka
                            ? Rb.call(jb, v(I, C, rb, ka), v(I, C, wb, ka))
                            : (I++,
                              Rb.call(
                                jb,
                                v(I, C, rb, ka),
                                v(I, C, wb, ka),
                                v(I, C, rb, C.Qd)
                              ))
                          : (U !== rb && ((sa = void 0), (fb = [jb])),
                            (ka || C.qc)(sa, fb));
                      }
                    }
                    var sa = this,
                      fb = arguments,
                      Yb = ka
                        ? fa
                        : function () {
                            try {
                              fa();
                            } catch (jb) {
                              g.Fa.ig && g.Fa.ig(jb, Yb.Mk),
                                L + 1 >= I &&
                                  (U !== wb && ((sa = void 0), (fb = [jb])),
                                  C.Zg(sa, fb));
                            }
                          };
                    L
                      ? Yb()
                      : (g.Fa.bj && (Yb.Mk = g.Fa.bj()), H.setTimeout(Yb));
                  };
                }
                var I = 0;
                return g
                  .Fa(function (L) {
                    d[0][3].add(v(0, L, G(u) ? u : rb, L.Qd));
                    d[1][3].add(v(0, L, G(n) ? n : rb));
                    d[2][3].add(v(0, L, G(m) ? m : wb));
                  })
                  .promise();
              },
              promise: function (n) {
                return null != n ? g.extend(n, h) : h;
              },
            },
            l = {};
          return (
            g.s(d, function (n, m) {
              var u = m[2],
                v = m[5];
              h[m[1]] = u.add;
              v &&
                u.add(
                  function () {
                    f = v;
                  },
                  d[3 - n][2].disable,
                  d[3 - n][3].disable,
                  d[0][2].lock,
                  d[0][3].lock
                );
              u.add(m[3].Mc);
              l[m[0]] = function () {
                return (
                  l[m[0] + "With"](this === l ? void 0 : this, arguments), this
                );
              };
              l[m[0] + "With"] = u.Le;
            }),
            h.promise(l),
            a && a.call(l, l),
            l
          );
        },
        op: function (a) {
          function d(u) {
            return function (v) {
              l[u] = this;
              n[u] = 1 < arguments.length ? Nb.call(arguments) : v;
              --f || m.qc(l, n);
            };
          }
          var f = arguments.length,
            h = f,
            l = Array(h),
            n = Nb.call(arguments),
            m = g.Fa();
          if (
            1 >= f &&
            (bc(a, m.done(d(h)).resolve, m.reject, !f),
            "pending" === m.state() || G(n[h] && n[h].then))
          ) {
            return m.then();
          }
          for (; h--; ) {
            bc(n[h], d(h), m.reject);
          }
          return m.promise();
        },
      });
      var Sa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      g.Fa.ig = function (a, d) {
        H.console &&
          H.console.warn &&
          a &&
          Sa.test(a.name) &&
          H.console.warn("jQuery.Deferred exception: " + a.message, a.stack, d);
      };
      g.hk = function (a) {
        H.setTimeout(function () {
          throw a;
        });
      };
      var Ua = g.Fa();
      g.M.ready = function (a) {
        return (
          Ua.then(a)["catch"](function (d) {
            g.hk(d);
          }),
          this
        );
      };
      g.extend({
        Ve: !1,
        Yg: 1,
        ready: function (a) {
          (!0 === a ? --g.Yg : g.Ve) ||
            ((g.Ve = !0), (!0 !== a && 0 < --g.Yg) || Ua.qc(ua, [g]));
        },
      });
      g.ready.then = Ua.then;
      "complete" === ua.readyState ||
      ("loading" !== ua.readyState && !ua.documentElement.doScroll)
        ? H.setTimeout(g.ready)
        : (ua.addEventListener("DOMContentLoaded", Ib),
          H.addEventListener("load", Ib));
      var oc = /^-ms-/,
        aa = /-([a-z])/g;
      cc.uid = 1;
      cc.prototype = {
        cache: function (a) {
          var d = a[this.expando];
          return (
            d ||
              ((d = {}),
              B(a) &&
                (a.nodeType
                  ? (a[this.expando] = d)
                  : Object.defineProperty(a, this.expando, {
                      value: d,
                      configurable: !0,
                    }))),
            d
          );
        },
        set: function (a, d, f) {
          var h;
          a = this.cache(a);
          if ("string" == typeof d) {
            a[nb(d)] = f;
          } else {
            for (h in d) {
              a[nb(h)] = d[h];
            }
          }
          return a;
        },
        get: function (a, d) {
          return void 0 === d
            ? this.cache(a)
            : a[this.expando] && a[this.expando][nb(d)];
        },
        La: function (a, d, f) {
          return void 0 === d || (d && "string" == typeof d && void 0 === f)
            ? this.get(a, d)
            : (this.set(a, d, f), void 0 !== f ? f : d);
        },
        remove: function (a, d) {
          var f = a[this.expando];
          if (void 0 !== f) {
            if (void 0 !== d) {
              var h = (d = Array.isArray(d)
                ? d.map(nb)
                : (d = nb(d)) in f
                ? [d]
                : d.match(La) || []).length;
              for (; h--; ) {
                delete f[d[h]];
              }
            }
            (void 0 === d || g.ic(f)) &&
              (a.nodeType
                ? (a[this.expando] = void 0)
                : delete a[this.expando]);
          }
        },
        dc: function (a) {
          a = a[this.expando];
          return void 0 !== a && !g.ic(a);
        },
      };
      var ja = new cc(),
        lb = new cc(),
        kd = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $c = /[A-Z]/g;
      g.extend({
        dc: function (a) {
          return lb.dc(a) || ja.dc(a);
        },
        data: function (a, d, f) {
          return lb.La(a, d, f);
        },
        mk: function (a, d) {
          lb.remove(a, d);
        },
        Wl: function (a, d, f) {
          return ja.La(a, d, f);
        },
        Xl: function (a, d) {
          ja.remove(a, d);
        },
      });
      g.M.extend({
        data: function (a, d) {
          var f,
            h,
            l,
            n = this[0],
            m = n && n.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((l = lb.get(n)), 1 === n.nodeType && !ja.get(n, "hasDataAttrs"))
            ) {
              for (f = m.length; f--; ) {
                m[f] &&
                  0 === (h = m[f].name).indexOf("data-") &&
                  ((h = nb(h.slice(5))), Ic(n, h, l[h]));
              }
              ja.set(n, "hasDataAttrs", !0);
            }
            return l;
          }
          return "object" == typeof a
            ? this.s(function () {
                lb.set(this, a);
              })
            : E(
                this,
                function (u) {
                  var v;
                  if (n && void 0 === u) {
                    return void 0 !== (v = lb.get(n, a)) ||
                      void 0 !== (v = Ic(n, a))
                      ? v
                      : void 0;
                  }
                  this.s(function () {
                    lb.set(this, a, u);
                  });
                },
                null,
                d,
                1 < arguments.length,
                null,
                !0
              );
        },
        mk: function (a) {
          return this.s(function () {
            lb.remove(this, a);
          });
        },
      });
      g.extend({
        $: function (a, d, f) {
          var h;
          if (a) {
            return (
              (d = (d || "fx") + "queue"),
              (h = ja.get(a, d)),
              f &&
                (!h || Array.isArray(f)
                  ? (h = ja.La(a, d, g.Yc(f)))
                  : h.push(f)),
              h || []
            );
          }
        },
        ac: function (a, d) {
          d = d || "fx";
          var f = g.$(a, d),
            h = f.length,
            l = f.shift(),
            n = g.jd(a, d);
          "inprogress" === l && ((l = f.shift()), h--);
          l &&
            ("fx" === d && f.unshift("inprogress"),
            delete n.stop,
            l.call(
              a,
              function () {
                g.ac(a, d);
              },
              n
            ));
          !h && n && n.empty.Mc();
        },
        jd: function (a, d) {
          var f = d + "queueHooks";
          return (
            ja.get(a, f) ||
            ja.La(a, f, {
              empty: g.qb("once memory").add(function () {
                ja.remove(a, [d + "queue", f]);
              }),
            })
          );
        },
      });
      g.M.extend({
        $: function (a, d) {
          var f = 2;
          return (
            "string" != typeof a && ((d = a), (a = "fx"), f--),
            arguments.length < f
              ? g.$(this[0], a)
              : void 0 === d
              ? this
              : this.s(function () {
                  var h = g.$(this, a, d);
                  g.jd(this, a);
                  "fx" === a && "inprogress" !== h[0] && g.ac(this, a);
                })
          );
        },
        ac: function (a) {
          return this.s(function () {
            g.ac(this, a);
          });
        },
        lm: function (a) {
          return this.$(a || "fx", []);
        },
        promise: function (a, d) {
          function f() {
            --l || n.qc(m, [m]);
          }
          var h,
            l = 1,
            n = g.Fa(),
            m = this,
            u = this.length;
          "string" != typeof a && ((d = a), (a = void 0));
          for (a = a || "fx"; u--; ) {
            (h = ja.get(m[u], a + "queueHooks")) &&
              h.empty &&
              (l++, h.empty.add(f));
          }
          return f(), n.promise(d);
        },
      });
      var Ec = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xb = new RegExp("^(?:([+-])=|)(" + Ec + ")([a-z%]*)$", "i"),
        Bb = ["Top", "Right", "Bottom", "Left"],
        ac = ua.documentElement,
        ab = { composed: !0 };
      ac.getRootNode &&
        (q = function (a) {
          return (
            g.contains(a.ownerDocument, a) ||
            a.getRootNode(ab) === a.ownerDocument
          );
        });
      var ad = {};
      g.M.extend({
        show: function () {
          return Va(this, !0);
        },
        Oc: function () {
          return Va(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.Oc()
            : this.s(function () {
                gb(this) ? g(this).show() : g(this).Oc();
              });
        },
      });
      var Hb,
        mc = /^(?:checkbox|radio)$/i,
        Jc = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        T = /^$|^module$|\/(?:java|ecma)script/i;
      var Aa = ua.createDocumentFragment().appendChild(ua.createElement("div"));
      (Hb = ua.createElement("input")).setAttribute("type", "radio");
      Hb.setAttribute("checked", "checked");
      Hb.setAttribute("name", "t");
      Aa.appendChild(Hb);
      Ja.hi = Aa.cloneNode(!0).cloneNode(!0).lastChild.checked;
      Aa.innerHTML = "<textarea>x</textarea>";
      Ja.Kj = !!Aa.cloneNode(!0).lastChild.defaultValue;
      Aa.innerHTML = "<option></option>";
      Ja.Sd = !!Aa.lastChild;
      var sb = {
        Uk: [1, "<table>", "</table>"],
        mm: [2, "<table><colgroup>", "</colgroup></table>"],
        Wo: [2, "<table><tbody>", "</tbody></table>"],
        Tk: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        Ga: [0, "", ""],
      };
      sb.So = sb.To = sb.nm = sb.caption = sb.Uk;
      sb.Uo = sb.Tk;
      Ja.Sd ||
        (sb.Un = sb.Sd = [1, "<select multiple='multiple'>", "</select>"]);
      var Tb = /<|&#?\w+;/,
        rd = /^key/,
        sd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Na = /^([^.]*)(?:\.(.+)|)/;
      g.event = {
        global: {},
        add: function (a, d, f, h, l) {
          var n, m, u, v, I, L, C, U;
          var ka = ja.get(a);
          if (B(a)) {
            for (
              f.rb && ((f = (n = f).rb), (l = n.yb)),
                l && g.find.matchesSelector(ac, l),
                f.la || (f.la = g.la++),
                (v = ka.va) || (v = ka.va = Object.create(null)),
                (m = ka.bc) ||
                  (m = ka.bc = function (sa) {
                    return void 0 !== g && g.event.zf !== sa.type
                      ? g.event.Hi.apply(a, arguments)
                      : void 0;
                  }),
                ka = (d = (d || "").match(La) || [""]).length;
              ka--;

            ) {
              var fa = (U = (u = Na.exec(d[ka]) || [])[1]);
              u = (u[2] || "").split(".").sort();
              fa &&
                ((L = g.event.Ra[fa] || {}),
                (fa = (l ? L.Gc : L.ze) || fa),
                (L = g.event.Ra[fa] || {}),
                (I = g.extend(
                  {
                    type: fa,
                    bd: U,
                    data: h,
                    rb: f,
                    la: f.la,
                    yb: l,
                    $c: l && g.Oa.match.$c.test(l),
                    kb: u.join("."),
                  },
                  n
                )),
                (C = v[fa]) ||
                  (((C = v[fa] = []).Ie = 0),
                  (L.ya && !1 !== L.ya.call(a, h, u, m)) ||
                    (a.addEventListener && a.addEventListener(fa, m))),
                L.add && (L.add.call(a, I), I.rb.la || (I.rb.la = f.la)),
                l ? C.splice(C.Ie++, 0, I) : C.push(I),
                (g.event.global[fa] = !0));
            }
          }
        },
        remove: function (a, d, f, h, l) {
          var n,
            m,
            u,
            v,
            I,
            L,
            C,
            U,
            ka = ja.dc(a) && ja.get(a);
          if (ka && (v = ka.va)) {
            for (I = (d = (d || "").match(La) || [""]).length; I--; ) {
              if (
                ((L = U = (u = Na.exec(d[I]) || [])[1]),
                (C = (u[2] || "").split(".").sort()),
                L)
              ) {
                var fa = g.event.Ra[L] || {};
                var sa = v[(L = (h ? fa.Gc : fa.ze) || L)] || [];
                u =
                  u[2] &&
                  new RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)");
                for (m = n = sa.length; n--; ) {
                  var fb = sa[n];
                  (!l && U !== fb.bd) ||
                    (f && f.la !== fb.la) ||
                    (u && !u.test(fb.kb)) ||
                    (h && h !== fb.yb && ("**" !== h || !fb.yb)) ||
                    (sa.splice(n, 1),
                    fb.yb && sa.Ie--,
                    fa.remove && fa.remove.call(a, fb));
                }
                m &&
                  !sa.length &&
                  ((fa.vh && !1 !== fa.vh.call(a, C, ka.bc)) ||
                    g.$g(a, L, ka.bc),
                  delete v[L]);
              } else {
                for (L in v) {
                  g.event.remove(a, L + d[I], f, h, !0);
                }
              }
            }
            g.ic(v) && ja.remove(a, "handle events");
          }
        },
        Hi: function (a) {
          var d,
            f,
            h,
            l,
            n = Array(arguments.length),
            m = g.event.lg(a);
          var u = (ja.get(this, "events") || Object.create(null))[m.type] || [];
          var v = g.event.Ra[m.type] || {};
          n[0] = m;
          for (d = 1; d < arguments.length; d++) {
            n[d] = arguments[d];
          }
          if (((m.Ci = this), !v.ak || !1 !== v.ak.call(this, m))) {
            var I = g.event.Fd.call(this, m, u);
            for (d = 0; (h = I[d++]) && !m.Vc(); ) {
              for (m.currentTarget = h.Y, u = 0; (l = h.Fd[u++]) && !m.Cg(); ) {
                (m.fh && !1 !== l.kb && !m.fh.test(l.kb)) ||
                  ((m.Se = l),
                  (m.data = l.data),
                  void 0 !==
                    (f = ((g.event.Ra[l.bd] || {}).bc || l.rb).apply(h.Y, n)) &&
                    !1 === (m.result = f) &&
                    (m.preventDefault(), m.stopPropagation()));
              }
            }
            return v.Sg && v.Sg.call(this, m), m.result;
          }
        },
        Fd: function (a, d) {
          var f,
            h,
            l,
            n = [],
            m = d.Ie,
            u = a.target;
          if (m && u.nodeType && !("click" === a.type && 1 <= a.button)) {
            for (; u !== this; u = u.parentNode || this) {
              if (
                1 === u.nodeType &&
                ("click" !== a.type || !0 !== u.disabled)
              ) {
                var v = [];
                var I = {};
                for (f = 0; f < m; f++) {
                  void 0 === I[(l = (h = d[f]).yb + " ")] &&
                    (I[l] = h.$c
                      ? -1 < g(l, this).index(u)
                      : g.find(l, this, null, [u]).length),
                    I[l] && v.push(h);
                }
                v.length && n.push({ Y: u, Fd: v });
              }
            }
          }
          return (
            (u = this), m < d.length && n.push({ Y: u, Fd: d.slice(m) }), n
          );
        },
        Uh: function (a, d) {
          Object.defineProperty(g.Event.prototype, a, {
            enumerable: !0,
            configurable: !0,
            get: G(d)
              ? function () {
                  if (this.na) {
                    return d(this.na);
                  }
                }
              : function () {
                  if (this.na) {
                    return this.na[a];
                  }
                },
            set: function (f) {
              Object.defineProperty(this, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              });
            },
          });
        },
        lg: function (a) {
          return a[g.expando] ? a : new g.Event(a);
        },
        Ra: {
          load: { Jj: !0 },
          click: {
            ya: function (a) {
              a = this || a;
              return (
                mc.test(a.type) &&
                  a.click &&
                  Ba(a, "input") &&
                  qc(a, "click", ec),
                !1
              );
            },
            O: function (a) {
              a = this || a;
              return (
                mc.test(a.type) && a.click && Ba(a, "input") && qc(a, "click"),
                !0
              );
            },
            Ga: function (a) {
              a = a.target;
              return (
                (mc.test(a.type) &&
                  a.click &&
                  Ba(a, "input") &&
                  ja.get(a, "click")) ||
                Ba(a, "a")
              );
            },
          },
          cm: {
            Sg: function (a) {
              void 0 !== a.result && a.na && (a.na.returnValue = a.result);
            },
          },
        },
      };
      g.$g = function (a, d, f) {
        a.removeEventListener && a.removeEventListener(d, f);
      };
      g.Event = function (a, d) {
        if (!(this instanceof g.Event)) {
          return new g.Event(a, d);
        }
        a && a.type
          ? ((this.na = a),
            (this.type = a.type),
            (this.Ue =
              a.defaultPrevented ||
              (void 0 === a.defaultPrevented && !1 === a.returnValue)
                ? ec
                : fc),
            (this.target =
              a.target && 3 === a.target.nodeType
                ? a.target.parentNode
                : a.target),
            (this.currentTarget = a.currentTarget),
            (this.relatedTarget = a.relatedTarget))
          : (this.type = a);
        d && g.extend(this, d);
        this.timeStamp = (a && a.timeStamp) || Date.now();
        this[g.expando] = !0;
      };
      g.Event.prototype = {
        constructor: g.Event,
        Ue: fc,
        Vc: fc,
        Cg: fc,
        Md: !1,
        preventDefault: function () {
          var a = this.na;
          this.Ue = ec;
          a && !this.Md && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.na;
          this.Vc = ec;
          a && !this.Md && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.na;
          this.Cg = ec;
          a && !this.Md && a.stopImmediatePropagation();
          this.stopPropagation();
        },
      };
      g.s(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (a) {
            var d = a.button;
            return null == a.which && rd.test(a.type)
              ? null != a.charCode
                ? a.charCode
                : a.keyCode
              : !a.which && void 0 !== d && sd.test(a.type)
              ? 1 & d
                ? 1
                : 2 & d
                ? 3
                : 4 & d
                ? 2
                : 0
              : a.which;
          },
        },
        g.event.Uh
      );
      g.s({ focus: "focusin", blur: "focusout" }, function (a, d) {
        g.event.Ra[a] = {
          ya: function () {
            return qc(this, a, bd), !1;
          },
          O: function () {
            return qc(this, a), !0;
          },
          Gc: d,
        };
      });
      g.s(
        {
          Hj: "mouseover",
          Ij: "mouseout",
          eo: "pointerover",
          fo: "pointerout",
        },
        function (a, d) {
          g.event.Ra[a] = {
            Gc: d,
            ze: d,
            bc: function (f) {
              var h,
                l = f.relatedTarget,
                n = f.Se;
              return (
                (l && (l === this || g.contains(this, l))) ||
                  ((f.type = n.bd),
                  (h = n.rb.apply(this, arguments)),
                  (f.type = d)),
                h
              );
            },
          };
        }
      );
      g.M.extend({
        A: function (a, d, f, h) {
          return pc(this, a, d, f, h);
        },
        Tn: function (a, d, f, h) {
          return pc(this, a, d, f, h, 1);
        },
        P: function (a, d, f) {
          var h, l;
          if (a && a.preventDefault && a.Se) {
            return (
              (h = a.Se),
              g(a.Ci).P(h.kb ? h.bd + "." + h.kb : h.bd, h.yb, h.rb),
              this
            );
          }
          if ("object" == typeof a) {
            for (l in a) {
              this.P(l, d, a[l]);
            }
            return this;
          }
          return (
            (!1 !== d && "function" != typeof d) || ((f = d), (d = void 0)),
            !1 === f && (f = fc),
            this.s(function () {
              g.event.remove(this, a, f, d);
            })
          );
        },
      });
      var td = /<script|<style|<link/i,
        ld = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      g.extend({
        vg: function (a) {
          return a;
        },
        clone: function (a, d, f) {
          var h,
            l,
            n = a.cloneNode(!0),
            m = q(a);
          if (!(Ja.Kj || (1 !== a.nodeType && 11 !== a.nodeType) || g.We(a))) {
            var u = mb(n);
            var v = 0;
            for (h = (l = mb(a)).length; v < h; v++) {
              var I = l[v],
                L = u[v],
                C = L.nodeName.toLowerCase();
              "input" === C && mc.test(I.type)
                ? (L.checked = I.checked)
                : ("input" !== C && "textarea" !== C) ||
                  (L.defaultValue = I.defaultValue);
            }
          }
          if (d) {
            if (f) {
              for (
                l = l || mb(a), u = u || mb(n), v = 0, h = l.length;
                v < h;
                v++
              ) {
                la(l[v], u[v]);
              }
            } else {
              la(a, n);
            }
          }
          return (
            0 < (u = mb(n, "script")).length && xc(u, !m && mb(a, "script")), n
          );
        },
        sd: function (a) {
          for (var d, f, h, l = g.event.Ra, n = 0; void 0 !== (f = a[n]); n++) {
            if (B(f)) {
              if ((d = f[ja.expando])) {
                if (d.va) {
                  for (h in d.va) {
                    l[h] ? g.event.remove(f, h) : g.$g(f, h, d.bc);
                  }
                }
                f[ja.expando] = void 0;
              }
              f[lb.expando] && (f[lb.expando] = void 0);
            }
          }
        },
      });
      g.M.extend({
        detach: function (a) {
          return Jb(this, a, !0);
        },
        remove: function (a) {
          return Jb(this, a);
        },
        text: function (a) {
          return E(
            this,
            function (d) {
              return void 0 === d
                ? g.text(this)
                : this.empty().s(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = d);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return gc(this, arguments, function (a) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Wa(this, a).appendChild(a);
          });
        },
        prepend: function () {
          return gc(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var d = Wa(this, a);
              d.insertBefore(a, d.firstChild);
            }
          });
        },
        before: function () {
          return gc(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return gc(this, arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, d = 0; null != (a = this[d]); d++) {
            1 === a.nodeType && (g.sd(mb(a, !1)), (a.textContent = ""));
          }
          return this;
        },
        clone: function (a, d) {
          return (
            (a = null != a && a),
            (d = null == d ? a : d),
            this.map(function () {
              return g.clone(this, a, d);
            })
          );
        },
        Gd: function (a) {
          return E(
            this,
            function (d) {
              var f = this[0] || {},
                h = 0,
                l = this.length;
              if (void 0 === d && 1 === f.nodeType) {
                return f.innerHTML;
              }
              if (
                "string" == typeof d &&
                !td.test(d) &&
                !sb[(Jc.exec(d) || ["", ""])[1].toLowerCase()]
              ) {
                d = g.vg(d);
                try {
                  for (; h < l; h++) {
                    1 === (f = this[h] || {}).nodeType &&
                      (g.sd(mb(f, !1)), (f.innerHTML = d));
                  }
                  f = 0;
                } catch (n) {}
              }
              f && this.empty().append(d);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return gc(
            this,
            arguments,
            function (d) {
              var f = this.parentNode;
              0 > g.Lb(this, a) &&
                (g.sd(mb(this)), f && f.replaceChild(d, this));
            },
            a
          );
        },
      });
      g.s(
        {
          nd: "append",
          Tg: "prepend",
          insertBefore: "before",
          rn: "after",
          no: "replaceWith",
        },
        function (a, d) {
          g.M[a] = function (f) {
            for (var h = [], l = g(f), n = l.length - 1, m = 0; m <= n; m++) {
              (f = m === n ? this : this.clone(!0)),
                g(l[m])[d](f),
                Rc.apply(h, f.get());
            }
            return this.Da(h);
          };
        }
      );
      var kc = new RegExp("^(" + Ec + ")(?!px)[a-z%]+$", "i"),
        md = new RegExp(Bb.join("|"), "i");
      !(function () {
        function a() {
          if (v) {
            u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            v.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            ac.appendChild(u).appendChild(v);
            var I = H.getComputedStyle(v);
            d = "1%" !== I.top;
            m = 12 === Math.round(parseFloat(I.marginLeft));
            v.style.right = "60%";
            l = 36 === Math.round(parseFloat(I.right));
            f = 36 === Math.round(parseFloat(I.width));
            v.style.position = "absolute";
            h = 12 === Math.round(parseFloat(v.offsetWidth / 3));
            ac.removeChild(u);
            v = null;
          }
        }
        var d,
          f,
          h,
          l,
          n,
          m,
          u = ua.createElement("div"),
          v = ua.createElement("div");
        v.style &&
          ((v.style.Rf = "content-box"),
          (v.cloneNode(!0).style.Rf = ""),
          (Ja.oi = "content-box" === v.style.Rf),
          g.extend(Ja, {
            Vf: function () {
              return a(), f;
            },
            Wj: function () {
              return a(), l;
            },
            Xj: function () {
              return a(), d;
            },
            kk: function () {
              return a(), m;
            },
            tk: function () {
              return a(), h;
            },
            lk: function () {
              var I, L, C, U;
              return (
                null == n &&
                  ((I = ua.createElement("table")),
                  (L = ua.createElement("tr")),
                  (C = ua.createElement("div")),
                  (I.style.cssText = "position:absolute;left:-11111px"),
                  (L.style.height = "1px"),
                  (C.style.height = "9px"),
                  ac.appendChild(I).appendChild(L).appendChild(C),
                  (U = H.getComputedStyle(L)),
                  (n = 3 < parseInt(U.height)),
                  ac.removeChild(I)),
                n
              );
            },
          }));
      })();
      var Nc = ["Webkit", "Moz", "ms"],
        Ac = ua.createElement("div").style,
        Mc = {},
        c = /^(none|table(?!-c[ea]).+)/,
        b = /^--/,
        e = { position: "absolute", visibility: "hidden", display: "block" },
        k = { letterSpacing: "0", fontWeight: "400" };
      g.extend({
        Ma: {
          opacity: {
            get: function (a, d) {
              if (d) {
                var f = Ub(a, "opacity");
                return "" === f ? "1" : f;
              }
            },
          },
        },
        vd: {
          animationIterationCount: !0,
          om: !0,
          Km: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gn: !0,
          hn: !0,
          jn: !0,
          kn: !0,
          ln: !0,
          mn: !0,
          nn: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        zi: {},
        style: function (a, d, f, h) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var l,
              n,
              m,
              u = nb(d),
              v = b.test(d),
              I = a.style;
            if ((v || (d = yb(u)), (m = g.Ma[d] || g.Ma[u]), void 0 === f)) {
              return m && "get" in m && void 0 !== (l = m.get(a, !1, h))
                ? l
                : I[d];
            }
            "string" === (n = typeof f) &&
              (l = xb.exec(f)) &&
              l[1] &&
              ((f = dc(a, d, l)), (n = "number"));
            null != f &&
              f == f &&
              ("number" !== n ||
                v ||
                (f += (l && l[3]) || (g.vd[u] ? "" : "px")),
              Ja.oi ||
                "" !== f ||
                0 !== d.indexOf("background") ||
                (I[d] = "inherit"),
              (m && "set" in m && void 0 === (f = m.set(a, f, h))) ||
                (v ? I.setProperty(d, f) : (I[d] = f)));
          }
        },
        m: function (a, d, f, h) {
          var l,
            n,
            m,
            u = nb(d);
          return (
            b.test(d) || (d = yb(u)),
            (m = g.Ma[d] || g.Ma[u]) && "get" in m && (l = m.get(a, !0, f)),
            void 0 === l && (l = Ub(a, d, h)),
            "normal" === l && d in k && (l = k[d]),
            "" === f || f
              ? ((n = parseFloat(l)), !0 === f || isFinite(n) ? n || 0 : l)
              : l
          );
        },
      });
      g.s(["height", "width"], function (a, d) {
        g.Ma[d] = {
          get: function (f, h, l) {
            if (h) {
              return !c.test(g.m(f, "display")) ||
                (f.getClientRects().length && f.getBoundingClientRect().width)
                ? sc(f, d, l)
                : M(f, e, function () {
                    return sc(f, d, l);
                  });
            }
          },
          set: function (f, h, l) {
            var n,
              m = N(f),
              u = !Ja.tk() && "absolute" === m.position,
              v = (u || l) && "border-box" === g.m(f, "boxSizing", !1, m);
            l = l ? xa(f, d, l, v, m) : 0;
            return (
              v &&
                u &&
                (l -= Math.ceil(
                  f["offset" + d[0].toUpperCase() + d.slice(1)] -
                    parseFloat(m[d]) -
                    xa(f, d, "border", !1, m) -
                    0.5
                )),
              l &&
                (n = xb.exec(h)) &&
                "px" !== (n[3] || "px") &&
                ((f.style[d] = h), (h = g.m(f, d))),
              Vb(0, h, l)
            );
          },
        };
      });
      g.Ma.marginLeft = rc(Ja.kk, function (a, d) {
        if (d) {
          return (
            (parseFloat(Ub(a, "marginLeft")) ||
              a.getBoundingClientRect().left -
                M(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })) + "px"
          );
        }
      });
      g.s({ margin: "", padding: "", border: "Width" }, function (a, d) {
        g.Ma[a + d] = {
          expand: function (f) {
            var h = 0,
              l = {};
            for (f = "string" == typeof f ? f.split(" ") : [f]; 4 > h; h++) {
              l[a + Bb[h] + d] = f[h] || f[h - 2] || f[0];
            }
            return l;
          },
        };
        "margin" !== a && (g.Ma[a + d].set = Vb);
      });
      g.M.extend({
        m: function (a, d) {
          return E(
            this,
            function (f, h, l) {
              var n,
                m = {},
                u = 0;
              if (Array.isArray(h)) {
                l = N(f);
                for (n = h.length; u < n; u++) {
                  m[h[u]] = g.m(f, h[u], !1, l);
                }
                return m;
              }
              return void 0 !== l ? g.style(f, h, l) : g.m(f, h);
            },
            a,
            d,
            1 < arguments.length
          );
        },
      });
      g.Ph = eb;
      eb.prototype = {
        constructor: eb,
        Ya: function (a, d, f, h, l, n) {
          this.Y = a;
          this.ia = f;
          this.easing = l || g.easing.Ga;
          this.options = d;
          this.start = this.now = this.ag();
          this.end = h;
          this.Ah = n || (g.vd[f] ? "" : "px");
        },
        ag: function () {
          var a = eb.lb[this.ia];
          return a && a.get ? a.get(this) : eb.lb.Ga.get(this);
        },
        gh: function (a) {
          var d,
            f = eb.lb[this.ia];
          return (
            this.options.duration
              ? (d = g.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
              : (d = a),
            (this.now = (this.end - this.start) * d + this.start),
            this.options.step && this.options.step.call(this.Y, this.now, this),
            f && f.set ? f.set(this) : eb.lb.Ga.set(this),
            this
          );
        },
      };
      eb.prototype.Ya.prototype = eb.prototype;
      eb.lb = {
        Ga: {
          get: function (a) {
            var d;
            return 1 !== a.Y.nodeType ||
              (null != a.Y[a.ia] && null == a.Y.style[a.ia])
              ? a.Y[a.ia]
              : (d = g.m(a.Y, a.ia, "")) && "auto" !== d
              ? d
              : 0;
          },
          set: function (a) {
            g.da.step[a.ia]
              ? g.da.step[a.ia](a)
              : 1 !== a.Y.nodeType ||
                (!g.Ma[a.ia] && null == a.Y.style[yb(a.ia)])
              ? (a.Y[a.ia] = a.now)
              : g.style(a.Y, a.ia, a.now + a.Ah);
          },
        },
      };
      eb.lb.scrollTop = eb.lb.scrollLeft = {
        set: function (a) {
          a.Y.nodeType && a.Y.parentNode && (a.Y[a.ia] = a.now);
        },
      };
      g.easing = {
        vn: function (a) {
          return a;
        },
        Ro: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        Ga: "swing",
      };
      g.da = eb.prototype.Ya;
      g.da.step = {};
      var r,
        t,
        y = /^(?:toggle|show|hide)$/,
        z = /queueHooks$/;
      g.Animation = g.extend(qb, {
        gd: {
          "*": [
            function (a, d) {
              var f = this.xi(a, d);
              return dc(f.Y, a, xb.exec(d), f), f;
            },
          ],
        },
        bp: function (a, d) {
          G(a) ? ((d = a), (a = ["*"])) : (a = a.match(La));
          for (var f, h = 0, l = a.length; h < l; h++) {
            (f = a[h]), (qb.gd[f] = qb.gd[f] || []), qb.gd[f].unshift(d);
          }
        },
        Ud: [
          function (a, d, f) {
            var h,
              l,
              n,
              m,
              u,
              v,
              I,
              L = "width" in d || "height" in d,
              C = this,
              U = {},
              ka = a.style,
              fa = a.nodeType && gb(a),
              sa = ja.get(a, "fxshow");
            for (h in (f.$ ||
              (null == (m = g.jd(a, "fx")).le &&
                ((m.le = 0),
                (u = m.empty.Mc),
                (m.empty.Mc = function () {
                  m.le || u();
                })),
              m.le++,
              C.fb(function () {
                C.fb(function () {
                  m.le--;
                  g.$(a, "fx").length || m.empty.Mc();
                });
              })),
            d)) {
              if (((l = d[h]), y.test(l))) {
                if (
                  (delete d[h],
                  (n = n || "toggle" === l),
                  l === (fa ? "hide" : "show"))
                ) {
                  if ("show" !== l || !sa || void 0 === sa[h]) {
                    continue;
                  }
                  fa = !0;
                }
                U[h] = (sa && sa[h]) || g.style(a, h);
              }
            }
            if ((d = !g.ic(d)) || !g.ic(U)) {
              for (h in (L &&
                1 === a.nodeType &&
                ((f.overflow = [ka.overflow, ka.overflowX, ka.overflowY]),
                null == (v = sa && sa.display) && (v = ja.get(a, "display")),
                "none" === (I = g.m(a, "display")) &&
                  (v
                    ? (I = v)
                    : (Va([a], !0),
                      (v = a.style.display || v),
                      (I = g.m(a, "display")),
                      Va([a]))),
                ("inline" === I || ("inline-block" === I && null != v)) &&
                  "none" === g.m(a, "float") &&
                  (d ||
                    (C.done(function () {
                      ka.display = v;
                    }),
                    null == v &&
                      ((I = ka.display), (v = "none" === I ? "" : I))),
                  (ka.display = "inline-block"))),
              f.overflow &&
                ((ka.overflow = "hidden"),
                C.fb(function () {
                  ka.overflow = f.overflow[0];
                  ka.overflowX = f.overflow[1];
                  ka.overflowY = f.overflow[2];
                })),
              (d = !1),
              U)) {
                d ||
                  (sa
                    ? "hidden" in sa && (fa = sa.hidden)
                    : (sa = ja.La(a, "fxshow", { display: v })),
                  n && (sa.hidden = !fa),
                  fa && Va([a], !0),
                  C.done(function () {
                    for (h in (fa || Va([a]), ja.remove(a, "fxshow"), U)) {
                      g.style(a, h, U[h]);
                    }
                  })),
                  (d = Da(fa ? sa[h] : 0, h, C)),
                  h in sa ||
                    ((sa[h] = d.start),
                    fa && ((d.end = d.start), (d.start = 0)));
              }
            }
          },
        ],
        io: function (a, d) {
          d ? qb.Ud.unshift(a) : qb.Ud.push(a);
        },
      });
      g.speed = function (a, d, f) {
        var h =
          a && "object" == typeof a
            ? g.extend({}, a)
            : {
                complete: f || (!f && d) || (G(a) && a),
                duration: a,
                easing: (f && d) || (d && !G(d) && d),
              };
        return (
          g.da.P
            ? (h.duration = 0)
            : "number" != typeof h.duration &&
              (h.duration in g.da.ee
                ? (h.duration = g.da.ee[h.duration])
                : (h.duration = g.da.ee.Ga)),
          (null != h.$ && !0 !== h.$) || (h.$ = "fx"),
          (h.Mg = h.complete),
          (h.complete = function () {
            G(h.Mg) && h.Mg.call(this);
            h.$ && g.ac(this, h.$);
          }),
          h
        );
      };
      g.M.extend({
        Hm: function (a, d, f, h) {
          return this.filter(gb)
            .m("opacity", 0)
            .show()
            .end()
            .animate({ opacity: d }, a, f, h);
        },
        animate: function (a, d, f, h) {
          function l() {
            var u = qb(this, g.extend({}, a), m);
            (n || ja.get(this, "finish")) && u.stop(!0);
          }
          var n = g.ic(a),
            m = g.speed(d, f, h);
          return (l.finish = l), n || !1 === m.$ ? this.s(l) : this.$(m.$, l);
        },
        stop: function (a, d, f) {
          function h(l) {
            var n = l.stop;
            delete l.stop;
            n(f);
          }
          return (
            "string" != typeof a && ((f = d), (d = a), (a = void 0)),
            d && this.$(a || "fx", []),
            this.s(function () {
              var l = !0,
                n = null != a && a + "queueHooks",
                m = g.fa,
                u = ja.get(this);
              if (n) {
                u[n] && u[n].stop && h(u[n]);
              } else {
                for (n in u) {
                  u[n] && u[n].stop && z.test(n) && h(u[n]);
                }
              }
              for (n = m.length; n--; ) {
                m[n].Y !== this ||
                  (null != a && m[n].$ !== a) ||
                  (m[n].Nf.stop(f), (l = !1), m.splice(n, 1));
              }
              (!l && f) || g.ac(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.s(function () {
              var d = ja.get(this),
                f = d[a + "queue"];
              var h = d[a + "queueHooks"];
              var l = g.fa,
                n = f ? f.length : 0;
              d.finish = !0;
              g.$(this, a, []);
              h && h.stop && h.stop.call(this, !0);
              for (h = l.length; h--; ) {
                l[h].Y === this &&
                  l[h].$ === a &&
                  (l[h].Nf.stop(!0), l.splice(h, 1));
              }
              for (h = 0; h < n; h++) {
                f[h] && f[h].finish && f[h].finish.call(this);
              }
              delete d.finish;
            })
          );
        },
      });
      g.s(["toggle", "show", "hide"], function (a, d) {
        var f = g.M[d];
        g.M[d] = function (h, l, n) {
          return null == h || "boolean" == typeof h
            ? f.apply(this, arguments)
            : this.animate(Ob(d, !0), h, l, n);
        };
      });
      g.s(
        {
          nf: Ob("show"),
          ce: Ob("hide"),
          Jo: Ob("toggle"),
          Pi: { opacity: "show" },
          zd: { opacity: "hide" },
          Im: { opacity: "toggle" },
        },
        function (a, d) {
          g.M[a] = function (f, h, l) {
            return this.animate(d, f, h, l);
          };
        }
      );
      g.fa = [];
      g.da.Zk = function () {
        var a,
          d = 0,
          f = g.fa;
        for (r = Date.now(); d < f.length; d++) {
          (a = f[d])() || f[d] !== a || f.splice(d--, 1);
        }
        f.length || g.da.stop();
        r = void 0;
      };
      g.da.al = function (a) {
        g.fa.push(a);
        g.da.start();
      };
      g.da.interval = 13;
      g.da.start = function () {
        t || ((t = !0), Wb());
      };
      g.da.stop = function () {
        t = null;
      };
      g.da.ee = { Lo: 600, Jm: 200, Ga: 400 };
      g.M.delay = function (a, d) {
        return (
          (a = (g.da && g.da.ee[a]) || a),
          (d = d || "fx"),
          this.$(d, function (f, h) {
            var l = H.setTimeout(f, a);
            h.stop = function () {
              H.clearTimeout(l);
            };
          })
        );
      };
      (function () {
        var a = ua.createElement("input"),
          d = ua
            .createElement("select")
            .appendChild(ua.createElement("option"));
        a.type = "checkbox";
        Ja.ji = "" !== a.value;
        Ja.Pj = d.selected;
        (a = ua.createElement("input")).value = "t";
        a.type = "radio";
        Ja.fk = "t" === a.value;
      })();
      var K = g.Oa.od;
      g.M.extend({
        o: function (a, d) {
          return E(this, g.o, a, d, 1 < arguments.length);
        },
        sa: function (a) {
          return this.s(function () {
            g.sa(this, a);
          });
        },
      });
      g.extend({
        o: function (a, d, f) {
          var h,
            l,
            n = a.nodeType;
          if (3 !== n && 8 !== n && 2 !== n) {
            return void 0 === a.getAttribute
              ? g.ia(a, d, f)
              : ((1 === n && g.We(a)) ||
                  (l =
                    g.Xh[d.toLowerCase()] ||
                    (g.Oa.match.Uf.test(d) ? ba : void 0)),
                void 0 !== f
                  ? null === f
                    ? void g.sa(a, d)
                    : l && "set" in l && void 0 !== (h = l.set(a, f, d))
                    ? h
                    : (a.setAttribute(d, f + ""), f)
                  : l && "get" in l && null !== (h = l.get(a, d))
                  ? h
                  : null == (h = g.find.o(a, d))
                  ? void 0
                  : h);
          }
        },
        Xh: {
          type: {
            set: function (a, d) {
              if (!Ja.fk && "radio" === d && Ba(a, "input")) {
                var f = a.value;
                return a.setAttribute("type", d), f && (a.value = f), d;
              }
            },
          },
        },
        sa: function (a, d) {
          var f,
            h = 0,
            l = d && d.match(La);
          if (l && 1 === a.nodeType) {
            for (; (f = l[h++]); ) {
              a.removeAttribute(f);
            }
          }
        },
      });
      var ba = {
        set: function (a, d, f) {
          return !1 === d ? g.sa(a, f) : a.setAttribute(f, f), f;
        },
      };
      g.s(g.Oa.match.Uf.source.match(/\w+/g), function (a, d) {
        var f = K[d] || g.find.o;
        K[d] = function (h, l, n) {
          var m,
            u,
            v = l.toLowerCase();
          return (
            n ||
              ((u = K[v]),
              (K[v] = m),
              (m = null != f(h, l, n) ? v : null),
              (K[v] = u)),
            m
          );
        };
      });
      var V = /^(?:input|select|textarea|button)$/i,
        qa = /^(?:a|area)$/i;
      g.M.extend({
        ia: function (a, d) {
          return E(this, g.ia, a, d, 1 < arguments.length);
        },
        pk: function (a) {
          return this.s(function () {
            delete this[g.ff[a] || a];
          });
        },
      });
      g.extend({
        ia: function (a, d, f) {
          var h,
            l,
            n = a.nodeType;
          if (3 !== n && 8 !== n && 2 !== n) {
            return (
              (1 === n && g.We(a)) || ((d = g.ff[d] || d), (l = g.lb[d])),
              void 0 !== f
                ? l && "set" in l && void 0 !== (h = l.set(a, f, d))
                  ? h
                  : (a[d] = f)
                : l && "get" in l && null !== (h = l.get(a, d))
                ? h
                : a[d]
            );
          }
        },
        lb: {
          tabIndex: {
            get: function (a) {
              var d = g.find.o(a, "tabindex");
              return d
                ? parseInt(d, 10)
                : V.test(a.nodeName) || (qa.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        ff: { for: "htmlFor", F: "className" },
      });
      Ja.Pj ||
        (g.lb.selected = {
          get: function (a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null;
          },
          set: function (a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
          },
        });
      g.s(
        "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
          " "
        ),
        function () {
          g.ff[this.toLowerCase()] = this;
        }
      );
      g.M.extend({
        I: function (a) {
          var d,
            f,
            h,
            l,
            n,
            m,
            u,
            v = 0;
          if (G(a)) {
            return this.s(function (I) {
              g(this).I(a.call(this, I, ha(this)));
            });
          }
          if ((d = Oc(a)).length) {
            for (; (f = this[v++]); ) {
              if (((l = ha(f)), (h = 1 === f.nodeType && " " + Pb(l) + " "))) {
                for (m = 0; (n = d[m++]); ) {
                  0 > h.indexOf(" " + n + " ") && (h += n + " ");
                }
                l !== (u = Pb(h)) && f.setAttribute("class", u);
              }
            }
          }
          return this;
        },
        R: function (a) {
          var d,
            f,
            h,
            l,
            n,
            m,
            u,
            v = 0;
          if (G(a)) {
            return this.s(function (I) {
              g(this).R(a.call(this, I, ha(this)));
            });
          }
          if (!arguments.length) {
            return this.o("class", "");
          }
          if ((d = Oc(a)).length) {
            for (; (f = this[v++]); ) {
              if (((l = ha(f)), (h = 1 === f.nodeType && " " + Pb(l) + " "))) {
                for (m = 0; (n = d[m++]); ) {
                  for (; -1 < h.indexOf(" " + n + " "); ) {
                    h = h.replace(" " + n + " ", " ");
                  }
                }
                l !== (u = Pb(h)) && f.setAttribute("class", u);
              }
            }
          }
          return this;
        },
        cl: function (a, d) {
          var f = typeof a,
            h = "string" === f || Array.isArray(a);
          return "boolean" == typeof d && h
            ? d
              ? this.I(a)
              : this.R(a)
            : G(a)
            ? this.s(function (l) {
                g(this).cl(a.call(this, l, ha(this), d), d);
              })
            : this.s(function () {
                var l, n;
                if (h) {
                  var m = 0;
                  var u = g(this);
                  for (n = Oc(a); (l = n[m++]); ) {
                    u.cc(l) ? u.R(l) : u.I(l);
                  }
                } else {
                  (void 0 !== a && "boolean" !== f) ||
                    ((l = ha(this)) && ja.set(this, "__className__", l),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        l || !1 === a ? "" : ja.get(this, "__className__") || ""
                      ));
                }
              });
        },
        cc: function (a) {
          var d,
            f = 0;
          for (a = " " + a + " "; (d = this[f++]); ) {
            if (1 === d.nodeType && -1 < (" " + Pb(ha(d)) + " ").indexOf(a)) {
              return !0;
            }
          }
          return !1;
        },
      });
      var ia = /\r/g;
      g.M.extend({
        pe: function (a) {
          var d,
            f,
            h,
            l = this[0];
          return arguments.length
            ? ((h = G(a)),
              this.s(function (n) {
                var m;
                1 === this.nodeType &&
                  (null == (m = h ? a.call(this, n, g(this).pe()) : a)
                    ? (m = "")
                    : "number" == typeof m
                    ? (m += "")
                    : Array.isArray(m) &&
                      (m = g.map(m, function (u) {
                        return null == u ? "" : u + "";
                      })),
                  ((d = g.Vb[this.type] || g.Vb[this.nodeName.toLowerCase()]) &&
                    "set" in d &&
                    void 0 !== d.set(this, m, "value")) ||
                    (this.value = m));
              }))
            : l
            ? (d = g.Vb[l.type] || g.Vb[l.nodeName.toLowerCase()]) &&
              "get" in d &&
              void 0 !== (f = d.get(l, "value"))
              ? f
              : "string" == typeof (f = l.value)
              ? f.replace(ia, "")
              : null == f
              ? ""
              : f
            : void 0;
        },
      });
      g.extend({
        Vb: {
          Sd: {
            get: function (a) {
              var d = g.find.o(a, "value");
              return null != d ? d : Pb(g.text(a));
            },
          },
          select: {
            get: function (a) {
              var d,
                f,
                h = a.options,
                l = a.selectedIndex,
                n = "select-one" === a.type,
                m = n ? null : [],
                u = n ? l + 1 : h.length;
              for (f = 0 > l ? u : n ? l : 0; f < u; f++) {
                if (
                  !(
                    (!(d = h[f]).selected && f !== l) ||
                    d.disabled ||
                    (d.parentNode.disabled && Ba(d.parentNode, "optgroup"))
                  )
                ) {
                  if (((a = g(d).pe()), n)) {
                    return a;
                  }
                  m.push(a);
                }
              }
              return m;
            },
            set: function (a, d) {
              for (var f, h, l = a.options, n = g.Yc(d), m = l.length; m--; ) {
                ((h = l[m]).selected = -1 < g.Lb(g.Vb.Sd.get(h), n)) &&
                  (f = !0);
              }
              return f || (a.selectedIndex = -1), n;
            },
          },
        },
      });
      g.s(["radio", "checkbox"], function () {
        g.Vb[this] = {
          set: function (a, d) {
            if (Array.isArray(d)) {
              return (a.checked = -1 < g.Lb(g(a).pe(), d));
            }
          },
        };
        Ja.ji ||
          (g.Vb[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
      });
      Ja.Wi = "onfocusin" in H;
      var na = /^(?:focusinfocus|focusoutblur)$/;
      g.extend(g.event, {
        O: function (a, d, f, h) {
          var l,
            n,
            m,
            u,
            v,
            I,
            L = [f || ua],
            C = hc.call(a, "type") ? a.type : a;
          var U = hc.call(a, "namespace") ? a.kb.split(".") : [];
          if (
            ((l = I = n = f = f || ua),
            3 !== f.nodeType &&
              8 !== f.nodeType &&
              !na.test(C + g.event.zf) &&
              (-1 < C.indexOf(".") &&
                ((U = C.split(".")), (C = U.shift()), U.sort()),
              (m = 0 > C.indexOf(":") && "on" + C),
              ((a = a[g.expando]
                ? a
                : new g.Event(C, "object" == typeof a && a)).tj = h ? 2 : 3),
              (a.kb = U.join(".")),
              (a.fh = a.kb
                ? new RegExp("(^|\\.)" + U.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (a.result = void 0),
              a.target || (a.target = f),
              (d = null == d ? [a] : g.Yc(d, [a])),
              (v = g.event.Ra[C] || {}),
              h || !v.O || !1 !== v.O.apply(f, d)))
          ) {
            if (!h && !v.Jj && !W(f)) {
              var ka = v.Gc || C;
              for (na.test(ka + C) || (l = l.parentNode); l; l = l.parentNode) {
                L.push(l), (n = l);
              }
              n === (f.ownerDocument || ua) &&
                L.push(n.defaultView || n.parentWindow || H);
            }
            for (U = 0; (l = L[U++]) && !a.Vc(); ) {
              (I = l),
                (a.type = 1 < U ? ka : v.ze || C),
                (u =
                  (ja.get(l, "events") || Object.create(null))[a.type] &&
                  ja.get(l, "handle")) && u.apply(l, d),
                (u = m && l[m]) &&
                  u.apply &&
                  B(l) &&
                  ((a.result = u.apply(l, d)),
                  !1 === a.result && a.preventDefault());
            }
            return (
              (a.type = C),
              h ||
                a.Ue() ||
                (v.Ga && !1 !== v.Ga.apply(L.pop(), d)) ||
                !B(f) ||
                (m &&
                  G(f[C]) &&
                  !W(f) &&
                  ((n = f[m]) && (f[m] = null),
                  (g.event.zf = C),
                  a.Vc() && I.addEventListener(C, Ia),
                  f[C](),
                  a.Vc() && I.removeEventListener(C, Ia),
                  (g.event.zf = void 0),
                  n && (f[m] = n))),
              a.result
            );
          }
        },
        Jk: function (a, d, f) {
          a = g.extend(new g.Event(), f, { type: a, Md: !0 });
          g.event.O(a, null, d);
        },
      });
      g.M.extend({
        O: function (a, d) {
          return this.s(function () {
            g.event.O(a, d, this);
          });
        },
        ap: function (a, d) {
          var f = this[0];
          if (f) {
            return g.event.O(a, d, f, !0);
          }
        },
      });
      Ja.Wi ||
        g.s({ focus: "focusin", blur: "focusout" }, function (a, d) {
          function f(h) {
            g.event.Jk(d, h.target, g.event.lg(h));
          }
          g.event.Ra[d] = {
            ya: function () {
              var h = this.ownerDocument || this.document || this,
                l = ja.La(h, d);
              l || h.addEventListener(a, f, !0);
              ja.La(h, d, (l || 0) + 1);
            },
            vh: function () {
              var h = this.ownerDocument || this.document || this,
                l = ja.La(h, d) - 1;
              l
                ? ja.La(h, d, l)
                : (h.removeEventListener(a, f, !0), ja.remove(h, d));
            },
          };
        });
      var O = H.location,
        pa = Date.now(),
        va = /\?/;
      g.Rj = function (a) {
        if (!a || "string" != typeof a) {
          return null;
        }
        try {
          var d = new H.DOMParser().parseFromString(a, "text/xml");
        } catch (f) {
          d = void 0;
        }
        return (
          (d && !d.getElementsByTagName("parsererror").length) ||
            g.error("Invalid XML: " + a),
          d
        );
      };
      var ta = /\[\]$/,
        Ha = /\r?\n/g,
        Ta = /^(?:submit|button|image|reset|file)$/i,
        hb = /^(?:input|select|textarea|keygen)/i;
      g.Og = function (a, d) {
        function f(n, m) {
          var u = G(m) ? m() : m;
          l[l.length] =
            encodeURIComponent(n) +
            "=" +
            encodeURIComponent(null == u ? "" : u);
        }
        var h,
          l = [];
        if (null == a) {
          return "";
        }
        if (Array.isArray(a) || (a.Nd && !g.Uc(a))) {
          g.s(a, function () {
            f(this.name, this.value);
          });
        } else {
          for (h in a) {
            Pc(h, a[h], d, f);
          }
        }
        return l.join("&");
      };
      g.M.extend({
        uo: function () {
          return g.Og(this.xk());
        },
        xk: function () {
          return this.map(function () {
            var a = g.ia(this, "elements");
            return a ? g.Yc(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !g(this).is(":disabled") &&
                hb.test(this.nodeName) &&
                !Ta.test(a) &&
                (this.checked || !mc.test(a))
              );
            })
            .map(function (a, d) {
              var f = g(this).pe();
              return null == f
                ? null
                : Array.isArray(f)
                ? g.map(f, function (h) {
                    return { name: d.name, value: h.replace(Ha, "\r\n") };
                  })
                : { name: d.name, value: f.replace(Ha, "\r\n") };
            })
            .get();
        },
      });
      var kb = /%20/g,
        Mb = /#.*$/,
        Fc = /([?&])_=[^&]*/,
        id = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Gc = /^(?:GET|HEAD)$/,
        ud = /^\/\//,
        Id = {},
        nd = {},
        Jd = "*/".concat("*"),
        vd = ua.createElement("a");
      vd.href = O.href;
      g.extend({
        active: 0,
        lastModified: {},
        Ke: {},
        Ac: {
          url: O.href,
          type: "GET",
          tn: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            O.protocol
          ),
          global: !0,
          ef: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          kd: {
            "*": Jd,
            text: "text/plain",
            Gd: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          Yb: { xml: /\bxml\b/, Gd: /\bhtml/, json: /\bjson\b/ },
          dh: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          Fb: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": g.Rj,
          },
          Ui: { url: !0, context: !0 },
        },
        ve: function (a, d) {
          return d ? Cc(Cc(a, g.Ac), d) : Cc(g.Ac, a);
        },
        ld: Cb(Id),
        Mf: Cb(nd),
        zc: function (a, d) {
          function f(za, $a, Qa, Ka) {
            var Fb,
              Dc,
              Xb,
              $b,
              tc,
              vb = $a;
            tb ||
              ((tb = !0),
              u && H.clearTimeout(u),
              (h = void 0),
              (n = Ka || ""),
              (Ca.readyState = 0 < za ? 4 : 0),
              (Fb = (200 <= za && 300 > za) || 304 === za),
              Qa &&
                ($b = (function (cb, ob, zb) {
                  for (
                    var ya, Ra, Ea, Fa, pb = cb.Yb, db = cb.Na;
                    "*" === db[0];

                  ) {
                    db.shift(),
                      void 0 === ya &&
                        (ya =
                          cb.mimeType || ob.getResponseHeader("Content-Type"));
                  }
                  if (ya) {
                    for (Ra in pb) {
                      if (pb[Ra] && pb[Ra].test(ya)) {
                        db.unshift(Ra);
                        break;
                      }
                    }
                  }
                  if (db[0] in zb) {
                    Ea = db[0];
                  } else {
                    for (Ra in zb) {
                      if (!db[0] || cb.Fb[Ra + " " + db[0]]) {
                        Ea = Ra;
                        break;
                      }
                      Fa || (Fa = Ra);
                    }
                    Ea = Ea || Fa;
                  }
                  if (Ea) {
                    return Ea !== db[0] && db.unshift(Ea), zb[Ea];
                  }
                })(C, Ca, Qa)),
              !Fb &&
                -1 < g.Lb("script", C.Na) &&
                (C.Fb["text script"] = function () {}),
              ($b = (function (cb, ob, zb, ya) {
                var Ra,
                  Ea,
                  Fa,
                  pb,
                  db,
                  Ab = {},
                  Oa = cb.Na.slice();
                if (Oa[1]) {
                  for (Fa in cb.Fb) {
                    Ab[Fa.toLowerCase()] = cb.Fb[Fa];
                  }
                }
                for (Ea = Oa.shift(); Ea; ) {
                  if (
                    (cb.dh[Ea] && (zb[cb.dh[Ea]] = ob),
                    !db && ya && cb.eg && (ob = cb.eg(ob, cb.dataType)),
                    (db = Ea),
                    (Ea = Oa.shift()))
                  ) {
                    if ("*" === Ea) {
                      Ea = db;
                    } else {
                      if ("*" !== db && db !== Ea) {
                        if (!(Fa = Ab[db + " " + Ea] || Ab["* " + Ea])) {
                          for (Ra in Ab) {
                            if (
                              (pb = Ra.split(" "))[1] === Ea &&
                              (Fa = Ab[db + " " + pb[0]] || Ab["* " + pb[0]])
                            ) {
                              !0 === Fa
                                ? (Fa = Ab[Ra])
                                : !0 !== Ab[Ra] &&
                                  ((Ea = pb[0]), Oa.unshift(pb[1]));
                              break;
                            }
                          }
                        }
                        if (!0 !== Fa) {
                          if (Fa && cb.Vo) {
                            ob = Fa(ob);
                          } else {
                            try {
                              ob = Fa(ob);
                            } catch (Gb) {
                              return {
                                state: "parsererror",
                                error: Fa
                                  ? Gb
                                  : "No conversion from " + db + " to " + Ea,
                              };
                            }
                          }
                        }
                      }
                    }
                  }
                }
                return { state: "success", data: ob };
              })(C, $b, Ca, Fb)),
              Fb
                ? (C.jj &&
                    ((tc = Ca.getResponseHeader("Last-Modified")) &&
                      (g.lastModified[l] = tc),
                    (tc = Ca.getResponseHeader("etag")) && (g.Ke[l] = tc)),
                  204 === za || "HEAD" === C.type
                    ? (vb = "nocontent")
                    : 304 === za
                    ? (vb = "notmodified")
                    : ((vb = $b.state),
                      (Dc = $b.data),
                      (Fb = !(Xb = $b.error))))
                : ((Xb = vb),
                  (!za && vb) || ((vb = "error"), 0 > za && (za = 0))),
              (Ca.status = za),
              (Ca.statusText = ($a || vb) + ""),
              Fb ? fa.qc(U, [Dc, vb, Ca]) : fa.Zg(U, [Ca, vb, Xb]),
              Ca.th(fb),
              (fb = void 0),
              v &&
                ka.O(Fb ? "ajaxSuccess" : "ajaxError", [Ca, C, Fb ? Dc : Xb]),
              sa.Le(U, [Ca, vb]),
              v &&
                (ka.O("ajaxComplete", [Ca, C]),
                --g.active || g.event.O("ajaxStop")));
          }
          "object" == typeof a && ((d = a), (a = void 0));
          d = d || {};
          var h,
            l,
            n,
            m,
            u,
            v,
            I,
            L,
            C = g.ve({}, d),
            U = C.context || C,
            ka = C.context && (U.nodeType || U.Nd) ? g(U) : g.event,
            fa = g.Fa(),
            sa = g.qb("once memory"),
            fb = C.th || {},
            Yb = {},
            jb = {},
            Rb = "canceled",
            Ca = {
              readyState: 0,
              getResponseHeader: function (za) {
                var $a;
                if (tb) {
                  if (!m) {
                    for (m = {}; ($a = id.exec(n)); ) {
                      m[$a[1].toLowerCase() + " "] = (
                        m[$a[1].toLowerCase() + " "] || []
                      ).concat($a[2]);
                    }
                  }
                  $a = m[za.toLowerCase() + " "];
                }
                return null == $a ? null : $a.join(", ");
              },
              getAllResponseHeaders: function () {
                return tb ? n : null;
              },
              setRequestHeader: function (za, $a) {
                return (
                  null == tb &&
                    ((za = jb[za.toLowerCase()] = jb[za.toLowerCase()] || za),
                    (Yb[za] = $a)),
                  this
                );
              },
              overrideMimeType: function (za) {
                return null == tb && (C.mimeType = za), this;
              },
              th: function (za) {
                var $a;
                if (za) {
                  if (tb) {
                    Ca.fb(za[Ca.status]);
                  } else {
                    for ($a in za) {
                      fb[$a] = [fb[$a], za[$a]];
                    }
                  }
                }
                return this;
              },
              abort: function (za) {
                za = za || Rb;
                return h && h.abort(za), f(0, za), this;
              },
            };
          if (
            (fa.promise(Ca),
            (C.url = ((a || C.url || O.href) + "").replace(
              ud,
              O.protocol + "//"
            )),
            (C.type = d.method || d.type || C.method || C.type),
            (C.Na = (C.dataType || "*").toLowerCase().match(La) || [""]),
            null == C.Gb)
          ) {
            var Zb = ua.createElement("a");
            try {
              (Zb.href = C.url),
                (Zb.href = Zb.href),
                (C.Gb =
                  vd.protocol + "//" + vd.host != Zb.protocol + "//" + Zb.host);
            } catch (za) {
              C.Gb = !0;
            }
          }
          if (
            (C.data &&
              C.ef &&
              "string" != typeof C.data &&
              (C.data = g.Og(C.data, C.Yo)),
            Qc(Id, C, d, Ca),
            tb)
          ) {
            return Ca;
          }
          for (I in ((v = g.event && C.global) &&
            0 == g.active++ &&
            g.event.O("ajaxStart"),
          (C.type = C.type.toUpperCase()),
          (C.Te = !Gc.test(C.type)),
          (l = C.url.replace(Mb, "")),
          C.Te
            ? C.data &&
              C.ef &&
              0 ===
                (C.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (C.data = C.data.replace(kb, "+"))
            : ((L = C.url.slice(l.length)),
              C.data &&
                (C.ef || "string" == typeof C.data) &&
                ((l += (va.test(l) ? "&" : "?") + C.data), delete C.data),
              !1 === C.cache &&
                ((l = l.replace(Fc, "$1")),
                (L = (va.test(l) ? "&" : "?") + "_=" + pa++ + L)),
              (C.url = l + L)),
          C.jj &&
            (g.lastModified[l] &&
              Ca.setRequestHeader("If-Modified-Since", g.lastModified[l]),
            g.Ke[l] && Ca.setRequestHeader("If-None-Match", g.Ke[l])),
          ((C.data && C.Te && !1 !== C.contentType) || d.contentType) &&
            Ca.setRequestHeader("Content-Type", C.contentType),
          Ca.setRequestHeader(
            "Accept",
            C.Na[0] && C.kd[C.Na[0]]
              ? C.kd[C.Na[0]] + ("*" !== C.Na[0] ? ", " + Jd + "; q=0.01" : "")
              : C.kd["*"]
          ),
          C.headers)) {
            Ca.setRequestHeader(I, C.headers[I]);
          }
          if (C.Sf && (!1 === C.Sf.call(U, Ca, C) || tb)) {
            return Ca.abort();
          }
          if (
            ((Rb = "abort"),
            sa.add(C.complete),
            Ca.done(C.tc),
            Ca.Jc(C.error),
            (h = Qc(nd, C, d, Ca)))
          ) {
            if (((Ca.readyState = 1), v && ka.O("ajaxSend", [Ca, C]), tb)) {
              return Ca;
            }
            C.async &&
              0 < C.timeout &&
              (u = H.setTimeout(function () {
                Ca.abort("timeout");
              }, C.timeout));
            try {
              var tb = !1;
              h.send(Yb, f);
            } catch (za) {
              if (tb) {
                throw za;
              }
              f(-1, za);
            }
          } else {
            f(-1, "No Transport");
          }
          return Ca;
        },
        Wm: function (a, d, f) {
          return g.get(a, d, f, "json");
        },
        $m: function (a, d) {
          return g.get(a, void 0, d, "script");
        },
      });
      g.s(["get", "post"], function (a, d) {
        g[d] = function (f, h, l, n) {
          return (
            G(h) && ((n = n || l), (l = h), (h = void 0)),
            g.zc(
              g.extend(
                { url: f, type: d, dataType: n, data: h, tc: l },
                g.Uc(f) && f
              )
            )
          );
        };
      });
      g.ld(function (a) {
        for (var d in a.headers) {
          "content-type" === d.toLowerCase() &&
            (a.contentType = a.headers[d] || "");
        }
      });
      g.Jf = function (a, d, f) {
        return g.zc({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          Fb: { "text script": function () {} },
          eg: function (h) {
            g.tg(h, d, f);
          },
        });
      };
      g.M.extend({
        Df: function (a) {
          var d;
          return (
            this[0] &&
              (G(a) && (a = a.call(this[0])),
              (d = g(a, this[0].ownerDocument).T(0).clone(!0)),
              this[0].parentNode && d.insertBefore(this[0]),
              d
                .map(function () {
                  for (var f = this; f.firstElementChild; ) {
                    f = f.firstElementChild;
                  }
                  return f;
                })
                .append(this)),
            this
          );
        },
        tl: function (a) {
          return G(a)
            ? this.s(function (d) {
                g(this).tl(a.call(this, d));
              })
            : this.s(function () {
                var d = g(this),
                  f = d.Yb();
                f.length ? f.Df(a) : d.append(a);
              });
        },
        sl: function (a) {
          var d = G(a);
          return this.s(function (f) {
            g(this).Df(d ? a.call(this, f) : a);
          });
        },
        hp: function (a) {
          return (
            this.parent(a)
              .ub("body")
              .s(function () {
                g(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      });
      g.Oa.Ka.hidden = function (a) {
        return !g.Oa.Ka.visible(a);
      };
      g.Oa.Ka.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      };
      g.Ac.Jh = function () {
        try {
          return new H.XMLHttpRequest();
        } catch (a) {}
      };
      var de = { 0: 200, 1223: 204 },
        Yc = g.Ac.Jh();
      Ja.ud = !!Yc && "withCredentials" in Yc;
      Ja.zc = Yc = !!Yc;
      g.Mf(function (a) {
        var d, f;
        if (Ja.ud || (Yc && !a.Gb)) {
          return {
            send: function (h, l) {
              var n,
                m = a.Jh();
              if (
                (m.open(a.type, a.url, a.async, a.username, a.password), a.Kh)
              ) {
                for (n in a.Kh) {
                  m[n] = a.Kh[n];
                }
              }
              for (n in (a.mimeType &&
                m.overrideMimeType &&
                m.overrideMimeType(a.mimeType),
              a.Gb ||
                h["X-Requested-With"] ||
                (h["X-Requested-With"] = "XMLHttpRequest"),
              h)) {
                m.setRequestHeader(n, h[n]);
              }
              d = function (u) {
                return function () {
                  d &&
                    ((d = f = m.onload = m.onerror = m.onabort = m.ontimeout = m.onreadystatechange = null),
                    "abort" === u
                      ? m.abort()
                      : "error" === u
                      ? "number" != typeof m.status
                        ? l(0, "error")
                        : l(m.status, m.statusText)
                      : l(
                          de[m.status] || m.status,
                          m.statusText,
                          "text" !== (m.responseType || "text") ||
                            "string" != typeof m.responseText
                            ? { dm: m.response }
                            : { text: m.responseText },
                          m.getAllResponseHeaders()
                        ));
                };
              };
              m.onload = d();
              f = m.onerror = m.ontimeout = d("error");
              void 0 !== m.onabort
                ? (m.onabort = f)
                : (m.onreadystatechange = function () {
                    4 === m.readyState &&
                      H.setTimeout(function () {
                        d && f();
                      });
                  });
              d = d("abort");
              try {
                m.send((a.Te && a.data) || null);
              } catch (u) {
                if (d) {
                  throw u;
                }
              }
            },
            abort: function () {
              d && d();
            },
          };
        }
      });
      g.ld(function (a) {
        a.Gb && (a.Yb.hh = !1);
      });
      g.ve({
        kd: {
          hh:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        Yb: { hh: /\b(?:java|ecma)script\b/ },
        Fb: {
          "text script": function (a) {
            return g.tg(a), a;
          },
        },
      });
      g.ld("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.Gb && (a.type = "GET");
      });
      g.Mf("script", function (a) {
        var d, f;
        if (a.Gb || a.sk) {
          return {
            send: function (h, l) {
              d = g("<script>")
                .o(a.sk || {})
                .ia({ charset: a.qo, src: a.url })
                .A(
                  "load error",
                  (f = function (n) {
                    d.remove();
                    f = null;
                    n && l("error" === n.type ? 404 : 200, n.type);
                  })
                );
              ua.head.appendChild(d[0]);
            },
            abort: function () {
              f && f();
            },
          };
        }
      });
      var Kd,
        Ld = [],
        wd = /(=)\?(?=&|$)|\?\?/;
      g.ve({
        Xe: "callback",
        kc: function () {
          var a = Ld.pop() || g.expando + "_" + pa++;
          return (this[a] = !0), a;
        },
      });
      g.ld("json jsonp", function (a, d, f) {
        var h,
          l,
          n,
          m =
            !1 !== a.Xe &&
            (wd.test(a.url)
              ? "url"
              : "string" == typeof a.data &&
                0 ===
                  (a.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                wd.test(a.data) &&
                "data");
        if (m || "jsonp" === a.Na[0]) {
          return (
            (h = a.kc = G(a.kc) ? a.kc() : a.kc),
            m
              ? (a[m] = a[m].replace(wd, "$1" + h))
              : !1 !== a.Xe &&
                (a.url += (va.test(a.url) ? "&" : "?") + a.Xe + "=" + h),
            (a.Fb["script json"] = function () {
              return n || g.error(h + " was not called"), n[0];
            }),
            (a.Na[0] = "json"),
            (l = H[h]),
            (H[h] = function () {
              n = arguments;
            }),
            f.fb(function () {
              void 0 === l ? g(H).pk(h) : (H[h] = l);
              a[h] && ((a.kc = d.kc), Ld.push(h));
              n && G(l) && l(n[0]);
              n = l = void 0;
            }),
            "script"
          );
        }
      });
      Ja.createHTMLDocument =
        (((Kd = ua.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Kd.childNodes.length);
      g.Pg = function (a, d, f) {
        return "string" != typeof a
          ? []
          : ("boolean" == typeof d && ((f = d), (d = !1)),
            d ||
              (Ja.createHTMLDocument
                ? (((h = (d = ua.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = ua.location.href),
                  d.head.appendChild(h))
                : (d = ua)),
            (n = !f && []),
            (l = Vc.exec(a))
              ? [d.createElement(l[1])]
              : ((l = yc([a], d, n)),
                n && n.length && g(n).remove(),
                g.ab([], l.childNodes)));
        var h, l, n;
      };
      g.M.load = function (a, d, f) {
        var h,
          l,
          n,
          m = this,
          u = a.indexOf(" ");
        return (
          -1 < u && ((h = Pb(a.slice(u))), (a = a.slice(0, u))),
          G(d)
            ? ((f = d), (d = void 0))
            : d && "object" == typeof d && (l = "POST"),
          0 < m.length &&
            g
              .zc({ url: a, type: l || "GET", dataType: "html", data: d })
              .done(function (v) {
                n = arguments;
                m.Gd(h ? g("<div>").append(g.Pg(v)).find(h) : v);
              })
              .fb(
                f &&
                  function (v, I) {
                    m.s(function () {
                      f.apply(this, n || [v.responseText, I, v]);
                    });
                  }
              ),
          this
        );
      };
      g.Oa.Ka.bm = function (a) {
        return g.Kb(g.fa, function (d) {
          return a === d.Y;
        }).length;
      };
      g.offset = {
        Bk: function (a, d, f) {
          var h,
            l,
            n,
            m = g.m(a, "position"),
            u = g(a),
            v = {};
          "static" === m && (a.style.position = "relative");
          var I = u.offset();
          var L = g.m(a, "top");
          var C = g.m(a, "left");
          ("absolute" === m || "fixed" === m) && -1 < (L + C).indexOf("auto")
            ? ((n = (h = u.position()).top), (l = h.left))
            : ((n = parseFloat(L) || 0), (l = parseFloat(C) || 0));
          G(d) && (d = d.call(a, f, g.extend({}, I)));
          null != d.top && (v.top = d.top - I.top + n);
          null != d.left && (v.left = d.left - I.left + l);
          "using" in d
            ? d.jp.call(a, v)
            : ("number" == typeof v.top && (v.top += "px"),
              "number" == typeof v.left && (v.left += "px"),
              u.m(v));
        },
      };
      g.M.extend({
        offset: function (a) {
          if (arguments.length) {
            return void 0 === a
              ? this
              : this.s(function (l) {
                  g.offset.Bk(this, a, l);
                });
          }
          var d,
            f,
            h = this[0];
          return h
            ? h.getClientRects().length
              ? ((d = h.getBoundingClientRect()),
                (f = h.ownerDocument.defaultView),
                { top: d.top + f.pageYOffset, left: d.left + f.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var a,
              d = this[0],
              f = { top: 0, left: 0 };
            if ("fixed" === g.m(d, "position")) {
              var h = d.getBoundingClientRect();
            } else {
              h = this.offset();
              var l = d.ownerDocument;
              for (
                a = d.offsetParent || l.documentElement;
                a &&
                (a === l.body || a === l.documentElement) &&
                "static" === g.m(a, "position");

              ) {
                a = a.parentNode;
              }
              a &&
                a !== d &&
                1 === a.nodeType &&
                (((f = g(a).offset()).top += g.m(a, "borderTopWidth", !0)),
                (f.left += g.m(a, "borderLeftWidth", !0)));
            }
            return {
              top: h.top - f.top - g.m(d, "marginTop", !0),
              left: h.left - f.left - g.m(d, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var a = this.offsetParent;
              a && "static" === g.m(a, "position");

            ) {
              a = a.offsetParent;
            }
            return a || ac;
          });
        },
      });
      g.s(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (a, d) {
          var f = "pageYOffset" === d;
          g.M[a] = function (h) {
            return E(
              this,
              function (l, n, m) {
                var u;
                if (
                  (W(l) ? (u = l) : 9 === l.nodeType && (u = l.defaultView),
                  void 0 === m)
                ) {
                  return u ? u[d] : l[n];
                }
                u
                  ? u.scrollTo(f ? u.pageXOffset : m, f ? m : u.pageYOffset)
                  : (l[n] = m);
              },
              a,
              h,
              arguments.length
            );
          };
        }
      );
      g.s(["top", "left"], function (a, d) {
        g.Ma[d] = rc(Ja.Xj, function (f, h) {
          if (h) {
            return (h = Ub(f, d)), kc.test(h) ? g(f).position()[d] + "px" : h;
          }
        });
      });
      g.s({ Ll: "height", Vl: "width" }, function (a, d) {
        g.s(
          { padding: "inner" + a, content: d, "": "outer" + a },
          function (f, h) {
            g.M[h] = function (l, n) {
              var m = arguments.length && (f || "boolean" != typeof l),
                u = f || (!0 === l || !0 === n ? "margin" : "border");
              return E(
                this,
                function (v, I, L) {
                  var C;
                  return W(v)
                    ? 0 === h.indexOf("outer")
                      ? v["inner" + a]
                      : v.document.documentElement["client" + a]
                    : 9 === v.nodeType
                    ? ((C = v.documentElement),
                      Math.max(
                        v.body["scroll" + a],
                        C["scroll" + a],
                        v.body["offset" + a],
                        C["offset" + a],
                        C["client" + a]
                      ))
                    : void 0 === L
                    ? g.m(v, I, u)
                    : g.style(v, I, L, u);
                },
                d,
                m ? l : void 0,
                m
              );
            };
          }
        );
      });
      g.s(
        "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
          " "
        ),
        function (a, d) {
          g.M[d] = function (f) {
            return this.A(d, f);
          };
        }
      );
      g.M.extend({
        bind: function (a, d, f) {
          return this.A(a, null, d, f);
        },
        ep: function (a, d) {
          return this.P(a, null, d);
        },
        rm: function (a, d, f, h) {
          return this.A(d, a, f, h);
        },
        fp: function (a, d, f) {
          return 1 === arguments.length
            ? this.P(a, "**")
            : this.P(d, a || "**", f);
        },
        Qc: function (a, d) {
          return this.Hj(a).Ij(d || a);
        },
      });
      g.s(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (a, d) {
          g.M[d] = function (f, h) {
            return 0 < arguments.length ? this.A(d, null, f, h) : this.O(d);
          };
        }
      );
      var ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      g.X = function (a, d) {
        var f, h, l;
        if (("string" == typeof d && ((f = a[d]), (d = a), (a = f)), G(a))) {
          return (
            (h = Nb.call(arguments, 2)),
            ((l = function () {
              return a.apply(d || this, h.concat(Nb.call(arguments)));
            }).la = a.la = a.la || g.la++),
            l
          );
        }
      };
      g.isArray = Array.isArray;
      g.nodeName = Ba;
      g.type = Z;
      g.now = Date.now;
      g.trim = function (a) {
        return null == a ? "" : (a + "").replace(ee, "");
      };
      void 0 ===
        (Q = function () {
          return g;
        }.apply(ca, [])) || (X.exports = Q);
      return void 0 === da && (H.vj = H.ul = g), g;
    });
  },
  function (X, ca, Q) {
    function H(G) {
      for (var ea = -1, Z = 0; Z < E.length; Z++) {
        if (E[Z].identifier === G) {
          ea = Z;
          break;
        }
      }
      return ea;
    }
    function da(G, ea) {
      for (var Z = {}, oa = [], Ba = 0; Ba < G.length; Ba++) {
        var ra = G[Ba],
          bb = ea.Zh ? ra[0] + ea.Zh : ra[0],
          rb = Z[bb] || 0,
          wb = "".concat(bb, " ").concat(rb);
        Z[bb] = rb + 1;
        bb = H(wb);
        ra = { m: ra[1], media: ra[2], pf: ra[3] };
        -1 !== bb
          ? (E[bb].gf++, E[bb].Gh(ra))
          : E.push({ identifier: wb, Gh: gb(ra, ea), gf: 1 });
        oa.push(wb);
      }
      return oa;
    }
    function Ia(G) {
      var ea = document.createElement("style"),
        Z = G.attributes || {};
      if (void 0 === Z.nonce) {
        var oa = Q.Dn;
        oa && (Z.nonce = oa);
      }
      if (
        (Object.keys(Z).forEach(function (Ba) {
          ea.setAttribute(Ba, Z[Ba]);
        }),
        "function" == typeof G.hc)
      ) {
        G.hc(ea);
      } else {
        G = B(G.hc || "head");
        if (!G) {
          throw Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        }
        G.appendChild(ea);
      }
      return ea;
    }
    function M(G, ea, Z, oa) {
      Z = Z
        ? ""
        : oa.media
        ? "@media ".concat(oa.media, " {").concat(oa.m, "}")
        : oa.m;
      G.styleSheet
        ? (G.styleSheet.cssText = F(ea, Z))
        : ((Z = document.createTextNode(Z)),
          (oa = G.childNodes),
          oa[ea] && G.removeChild(oa[ea]),
          oa.length ? G.insertBefore(Z, oa[ea]) : G.appendChild(Z));
    }
    function N(G, ea, Z) {
      ea = Z.m;
      var oa = Z.media;
      Z = Z.pf;
      if (
        (oa ? G.setAttribute("media", oa) : G.removeAttribute("media"),
        Z &&
          btoa &&
          (ea += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(Z)))),
            " */"
          )),
        G.styleSheet)
      ) {
        G.styleSheet.cssText = ea;
      } else {
        for (; G.firstChild; ) {
          G.removeChild(G.firstChild);
        }
        G.appendChild(document.createTextNode(ea));
      }
    }
    function gb(G, ea) {
      if (ea.Qb) {
        var Z = W++;
        var oa = g || (g = Ia(ea));
        var Ba = M.bind(null, oa, Z, !1);
        var ra = M.bind(null, oa, Z, !0);
      } else {
        (oa = Ia(ea)),
          (Ba = N.bind(null, oa, ea)),
          (ra = function () {
            if (null === oa.parentNode) {
              var bb = !1;
            } else {
              oa.parentNode.removeChild(oa), (bb = void 0);
            }
            !bb;
          });
      }
      return (
        Ba(G),
        function (bb) {
          bb
            ? (bb.m !== G.m || bb.media !== G.media || bb.pf !== G.pf) &&
              Ba((G = bb))
            : ra();
        }
      );
    }
    var q,
      B = (function () {
        var G = {};
        return function (ea) {
          if (void 0 === G[ea]) {
            var Z = document.querySelector(ea);
            if (
              window.HTMLIFrameElement &&
              Z instanceof window.HTMLIFrameElement
            ) {
              try {
                Z = Z.contentDocument.head;
              } catch (oa) {
                Z = null;
              }
            }
            G[ea] = Z;
          }
          return G[ea];
        };
      })(),
      E = [],
      w,
      F =
        ((w = []),
        function (G, ea) {
          return (w[G] = ea), w.filter(Boolean).join("\n");
        }),
      g = null,
      W = 0;
    X.exports = function (G, ea) {
      (ea = ea || {}).Qb ||
        "boolean" == typeof ea.Qb ||
        (ea.Qb =
          (void 0 === q &&
            (q = !(!(window && document && document.all) || window.atob)),
          q));
      var Z = da((G = G || []), ea);
      return function (oa) {
        if (
          ((oa = oa || []),
          "[object Array]" === Object.prototype.toString.call(oa))
        ) {
          for (var Ba = 0; Ba < Z.length; Ba++) {
            var ra = H(Z[Ba]);
            E[ra].gf--;
          }
          oa = da(oa, ea);
          for (Ba = 0; Ba < Z.length; Ba++) {
            (ra = H(Z[Ba])), 0 === E[ra].gf && (E[ra].Gh(), E.splice(ra, 1));
          }
          Z = oa;
        }
      };
    };
  },
  function (X, ca, Q) {
    (function (H) {
      "object" == typeof navigator &&
        (X.exports = (function () {
          function da(c, b) {
            var e = {};
            return (
              c > b.width / b.height
                ? ((e.width = b.width), (e.height = (1 / c) * b.width))
                : ((e.height = b.height), (e.width = c * b.height)),
              e
            );
          }
          function Ia() {
            this.media
              ? (xa(
                  this.elements.i,
                  this.g.u.type.replace("{0}", this.type),
                  !0
                ),
                xa(this.elements.i, this.g.u.ea.replace("{0}", this.ea), !0),
                this.Tc &&
                  xa(
                    this.elements.i,
                    this.g.u.type.replace("{0}", "video"),
                    !0
                  ),
                this.Ba &&
                  ((this.elements.ua = la("div", { F: this.g.u.video })),
                  cd(this.media, this.elements.ua),
                  (this.elements.poster = la("div", {
                    F: this.g.u.poster,
                    hidden: "",
                  })),
                  this.elements.ua.appendChild(this.elements.poster)),
                this.U
                  ? Hb.ya.call(this)
                  : this.jc
                  ? kc.ya.call(this)
                  : this.Nb && Lc.ya.call(this))
              : this.debug.warn("No media element found!");
          }
          function M() {}
          function N() {
            var c =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              b =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (aa(c) || aa(b)) {
              return "";
            }
            var e = qc(b.hj, c);
            return aa(e)
              ? Object.keys(mc).includes(c)
                ? mc[c]
                : ""
              : (Object.entries({
                  "{seektime}": b.xa,
                  "{title}": b.title,
                }).forEach(function (k) {
                  k = Va(k, 2);
                  e = q(e, k[0], k[1]);
                }),
                e);
          }
          function gb() {
            return (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : ""
            )
              .toString()
              .replace(/\w\S*/g, function (c) {
                return c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
              });
          }
          function q() {
            var c =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : "";
            return (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : ""
            ).replace(
              new RegExp(
                (1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : ""
                )
                  .toString()
                  .replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
                "g"
              ),
              c.toString()
            );
          }
          function B(c) {
            if (ra(c, window.URL)) {
              return !0;
            }
            if (!oa(c)) {
              return !1;
            }
            var b = c;
            (c.startsWith("http://") && c.startsWith("https://")) ||
              (b = "http://".concat(c));
            try {
              return !W(new URL(b).hostname);
            } catch (e) {
              return !1;
            }
          }
          function E(c) {
            return ra(c, TextTrack) || (null != c && oa(c.kind));
          }
          function w(c) {
            return ra(c, Element);
          }
          function F(c) {
            return (null != c ? c.constructor : null) === Boolean;
          }
          function g(c) {
            return (
              (null != c ? c.constructor : null) === Number && !Number.isNaN(c)
            );
          }
          function W(c) {
            return (
              null == c ||
              ((oa(c) || ea(c) || G(c)) && !c.length) ||
              (Ba(c) && !Object.keys(c).length)
            );
          }
          function G(c) {
            return ra(c, NodeList);
          }
          function ea(c) {
            return Array.isArray(c);
          }
          function Z(c) {
            return (null != c ? c.constructor : null) === Function;
          }
          function oa(c) {
            return (null != c ? c.constructor : null) === String;
          }
          function Ba(c) {
            return (null != c ? c.constructor : null) === Object;
          }
          function ra(c, b) {
            return !!(c && b && c instanceof b);
          }
          function bb(c) {
            return (
              null == c ||
              ((bc(c) === String || Array.isArray(c) || wb(c, NodeList)) &&
                !c.length) ||
              (bc(c) === Object && !Object.keys(c).length)
            );
          }
          function rb(c) {
            return wb(c, Element);
          }
          function wb(c, b) {
            return !!(c && b && c instanceof b);
          }
          function bc(c) {
            return null != c ? c.constructor : null;
          }
          function Ib(c, b) {
            if (!(c instanceof b)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function Zc(c, b) {
            for (var e = 0; e < b.length; e++) {
              var k = b[e];
              k.enumerable = k.enumerable || !1;
              k.configurable = !0;
              "value" in k && (k.writable = !0);
              Object.defineProperty(c, k.key, k);
            }
          }
          function nb(c, b, e) {
            return b && Zc(c.prototype, b), e && Zc(c, e), c;
          }
          function cc(c, b, e) {
            return (
              b in c
                ? Object.defineProperty(c, b, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (c[b] = e),
              c
            );
          }
          function Ic(c, b) {
            var e = Object.keys(c);
            if (Object.getOwnPropertySymbols) {
              var k = Object.getOwnPropertySymbols(c);
              b &&
                (k = k.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(c, r).enumerable;
                }));
              e.push.apply(e, k);
            }
            return e;
          }
          function dc(c) {
            for (var b = 1; b < arguments.length; b++) {
              var e = null != arguments[b] ? arguments[b] : {};
              b % 2
                ? Ic(Object(e), !0).forEach(function (k) {
                    cc(c, k, e[k]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    c,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : Ic(Object(e)).forEach(function (k) {
                    Object.defineProperty(
                      c,
                      k,
                      Object.getOwnPropertyDescriptor(e, k)
                    );
                  });
            }
            return c;
          }
          function Va(c, b) {
            var e = Array.isArray(c) ? c : void 0;
            var k;
            if (!e) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(c)
              ) {
                e = [];
                var r = !0,
                  t = !1,
                  y = void 0;
                try {
                  for (
                    var z = c[Symbol.iterator]();
                    !(r = (k = z.next()).done) &&
                    (e.push(k.value), !b || e.length !== b);
                    r = !0
                  ) {}
                } catch (K) {
                  (t = !0), (y = K);
                } finally {
                  try {
                    r || null == z["return"] || z["return"]();
                  } finally {
                    if (t) {
                      throw y;
                    }
                  }
                }
              } else {
                e = void 0;
              }
            }
            if (!(k = e || xc(c, b))) {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            return k;
          }
          function mb(c) {
            var b = Array.isArray(c) ? yc(c) : void 0;
            b ||
              (b =
                "undefined" != typeof Symbol && Symbol.iterator in Object(c)
                  ? Array.from(c)
                  : void 0);
            if (!(c = b || xc(c))) {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            return c;
          }
          function xc(c, b) {
            if (c) {
              if ("string" == typeof c) {
                return yc(c, b);
              }
              var e = Object.prototype.toString.call(c).slice(8, -1);
              return (
                "Object" === e && c.constructor && (e = c.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(c)
                  : "Arguments" === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? yc(c, b)
                  : void 0
              );
            }
          }
          function yc(c, b) {
            (null == b || b > c.length) && (b = c.length);
            for (var e = 0, k = Array(b); e < b; e++) {
              k[e] = c[e];
            }
            return k;
          }
          function ec(c, b) {
            for (var e = 0; e < b.length; e++) {
              var k = b[e];
              k.enumerable = k.enumerable || !1;
              k.configurable = !0;
              "value" in k && (k.writable = !0);
              Object.defineProperty(c, k.key, k);
            }
          }
          function fc(c, b) {
            var e = Object.keys(c);
            if (Object.getOwnPropertySymbols) {
              var k = Object.getOwnPropertySymbols(c);
              b &&
                (k = k.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(c, r).enumerable;
                }));
              e.push.apply(e, k);
            }
            return e;
          }
          function bd(c) {
            for (var b = 1; b < arguments.length; b++) {
              var e = null != arguments[b] ? arguments[b] : {};
              b % 2
                ? fc(Object(e), !0).forEach(function (k) {
                    var r = e[k];
                    k in c
                      ? Object.defineProperty(c, k, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (c[k] = r);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    c,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : fc(Object(e)).forEach(function (k) {
                    Object.defineProperty(
                      c,
                      k,
                      Object.getOwnPropertyDescriptor(e, k)
                    );
                  });
            }
            return c;
          }
          function pc(c, b) {
            setTimeout(function () {
              try {
                (c.hidden = !0), c.offsetHeight, (c.hidden = !1);
              } catch (e) {}
            }, b);
          }
          function qc(c, b) {
            return b.split(".").reduce(function (e, k) {
              return e && e[k];
            }, c);
          }
          function Wa() {
            for (
              var c =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                b = arguments.length,
                e = Array(1 < b ? b - 1 : 0),
                k = 1;
              k < b;
              k++
            ) {
              e[k - 1] = arguments[k];
            }
            if (!e.length) {
              return c;
            }
            var r = e.shift();
            return Lb(r)
              ? (Object.keys(r).forEach(function (t) {
                  Lb(r[t])
                    ? (Object.keys(c).includes(t) ||
                        Object.assign(c, cc({}, t, {})),
                      Wa(c[t], r[t]))
                    : Object.assign(c, cc({}, t, r[t]));
                }),
                Wa.apply(void 0, [c].concat(e)))
              : c;
          }
          function cd(c, b) {
            Array.from(c.length ? c : [c])
              .reverse()
              .forEach(function (e, k) {
                var r = 0 < k ? b.cloneNode(!0) : b,
                  t = e.parentNode,
                  y = e.nextSibling;
                r.appendChild(e);
                y ? t.insertBefore(r, y) : t.appendChild(r);
              });
          }
          function Kc(c, b) {
            w(c) &&
              !aa(b) &&
              Object.entries(b)
                .filter(function (e) {
                  return null != Va(e, 2)[1];
                })
                .forEach(function (e) {
                  e = Va(e, 2);
                  return c.setAttribute(e[0], e[1]);
                });
          }
          function la(c, b, e) {
            c = document.createElement(c);
            return Lb(b) && Kc(c, b), La(e) && (c.innerText = e), c;
          }
          function gc(c, b, e, k) {
            w(b) && b.appendChild(la(c, e, k));
          }
          function Jb(c) {
            oc(c) || Ua(c)
              ? Array.from(c).forEach(Jb)
              : w(c) && w(c.parentNode) && c.parentNode.removeChild(c);
          }
          function Ub(c) {
            if (w(c)) {
              for (var b = c.childNodes.length; 0 < b; ) {
                c.removeChild(c.lastChild), --b;
              }
            }
          }
          function rc(c, b) {
            return w(b) && w(b.parentNode) && w(c)
              ? (b.parentNode.replaceChild(c, b), c)
              : null;
          }
          function yb(c, b) {
            if (!La(c) || aa(c)) {
              return {};
            }
            var e = {},
              k = Wa({}, b);
            return (
              c.split(",").forEach(function (r) {
                r = r.trim();
                var t = r.replace(".", ""),
                  y = r.replace(/[[\]]/g, "").split("="),
                  z = Va(y, 1)[0];
                y = 1 < y.length ? y[1].replace(/["']/g, "") : "";
                switch (r.charAt(0)) {
                  case ".":
                    La(k.F) ? (e.F = "".concat(k.F, " ").concat(t)) : (e.F = t);
                    break;
                  case "#":
                    e.id = r.replace("#", "");
                    break;
                  case "[":
                    e[z] = y;
                }
              }),
              Wa(k, e)
            );
          }
          function Vb(c, b) {
            if (w(c)) {
              var e = b;
              F(e) || (e = !c.hidden);
              c.hidden = e;
            }
          }
          function xa(c, b, e) {
            if (oc(c)) {
              return Array.from(c).map(function (r) {
                return xa(r, b, e);
              });
            }
            if (w(c)) {
              var k = "toggle";
              return (
                void 0 !== e && (k = e ? "add" : "remove"),
                c.classList[k](b),
                c.classList.contains(b)
              );
            }
            return !1;
          }
          function sc(c, b) {
            return w(c) && c.classList.contains(b);
          }
          function eb(c, b) {
            var e = Element.prototype;
            return (
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              function () {
                return Array.from(document.querySelectorAll(b)).includes(this);
              }
            ).call(c, b);
          }
          function Wb(c) {
            return this.elements.i.querySelectorAll(c);
          }
          function Bc() {
            var c =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              b =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            w(c) && (c.focus({ preventScroll: !0 }), b && xa(c, this.g.u.tf));
          }
          function Ob(c, b, e) {
            var k = this,
              r =
                3 < arguments.length && void 0 !== arguments[3] && arguments[3],
              t =
                !(4 < arguments.length && void 0 !== arguments[4]) ||
                arguments[4],
              y =
                5 < arguments.length && void 0 !== arguments[5] && arguments[5];
            if (c && "addEventListener" in c && !aa(b) && Sa(e)) {
              var z = b.split(" "),
                K = y;
              ad && (K = { passive: t, capture: y });
              z.forEach(function (ba) {
                k &&
                  k.Ic &&
                  r &&
                  k.Ic.push({ element: c, type: ba, fi: e, options: K });
                c[r ? "addEventListener" : "removeEventListener"](ba, e, K);
              });
            }
          }
          function Da(c) {
            Ob.call(
              this,
              c,
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : "",
              2 < arguments.length ? arguments[2] : void 0,
              !0,
              !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              4 < arguments.length && void 0 !== arguments[4] && arguments[4]
            );
          }
          function qb(c) {
            Ob.call(
              this,
              c,
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : "",
              2 < arguments.length ? arguments[2] : void 0,
              !1,
              !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              4 < arguments.length && void 0 !== arguments[4] && arguments[4]
            );
          }
          function Pb(c) {
            var b = this,
              e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              k = 2 < arguments.length ? arguments[2] : void 0,
              r =
                !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              t =
                4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            Ob.call(
              this,
              c,
              e,
              function z() {
                qb(c, e, z, r, t);
                for (
                  var K = arguments.length, ba = Array(K), V = 0;
                  V < K;
                  V++
                ) {
                  ba[V] = arguments[V];
                }
                k.apply(b, ba);
              },
              !0,
              r,
              t
            );
          }
          function ha(c) {
            var b =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              e =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              k =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            w(c) &&
              !aa(b) &&
              ((b = new CustomEvent(b, {
                bubbles: e,
                detail: dc(dc({}, k), {}, { Rg: this }),
              })),
              c.dispatchEvent(b));
          }
          function Oc() {
            this &&
              this.Ic &&
              (this.Ic.forEach(function (c) {
                c.element.removeEventListener(c.type, c.fi, c.options);
              }),
              (this.Ic = []));
          }
          function Pc() {
            var c = this;
            return new Promise(function (b) {
              return c.ready
                ? setTimeout(b, 0)
                : Da.call(c, c.elements.i, "ready", b);
            }).then(function () {});
          }
          function Cb(c) {
            (function (b) {
              return ra(b, Promise) && Z(b.then);
            })(c) && c.then(null, function () {});
          }
          function Qc(c) {
            return (
              !!(Ua(c) || (La(c) && c.includes(":"))) &&
              (Ua(c) ? c : c.split(":")).map(Number).every(g)
            );
          }
          function Cc(c) {
            if (!Ua(c) || !c.every(g)) {
              return null;
            }
            var b = Va(c, 2);
            c = b[0];
            b = b[1];
            var e = (function y(r, t) {
              return 0 === t ? r : y(t, r % t);
            })(c, b);
            return [c / e, b / e];
          }
          function Db(c) {
            function b(e) {
              return Qc(e) ? e.split(":").map(Number) : null;
            }
            c = b(c);
            if (
              (null === c && (c = b(this.g.ratio)),
              null === c &&
                !aa(this.v) &&
                Ua(this.v.ratio) &&
                (c = this.v.ratio),
              null === c && this.U)
            ) {
              (c = this.media), (c = Cc([c.videoWidth, c.videoHeight]));
            }
            return c;
          }
          function Qb(c) {
            if (!this.Ba) {
              return {};
            }
            var b = this.elements.ua;
            c = Db.call(this, c);
            var e = Va(Ua(c) ? c : [0, 0], 2);
            e = (100 / e[0]) * e[1];
            if (
              ((b.style.paddingBottom = "".concat(e, "%")),
              this.Nb && !this.g.Ta.cf && this.supported.ja)
            ) {
              var k =
                (100 / this.media.offsetWidth) *
                parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
              this.N.active
                ? (b.style.paddingBottom = null)
                : (this.media.style.transform = "translateY(-".concat(
                    (k - e) / (k / 50),
                    "%)"
                  ));
            } else {
              this.U && b.classList.toggle(this.g.u.ml, null !== c);
            }
            return { padding: e, ratio: c };
          }
          function Nb(c) {
            return Ua(c)
              ? c.filter(function (b, e) {
                  return c.indexOf(b) === e;
                })
              : c;
          }
          function zc(c) {
            for (
              var b = arguments.length, e = Array(1 < b ? b - 1 : 0), k = 1;
              k < b;
              k++
            ) {
              e[k - 1] = arguments[k];
            }
            return aa(c)
              ? c
              : c.toString().replace(/{(\d+)}/g, function (r, t) {
                  return e[t].toString();
                });
          }
          function Rc() {
            var c = (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : ""
            ).toString();
            return (
              (c = q(c, "-", " ")),
              (c = q(c, "_", " ")),
              (c = gb(c)),
              q(c, " ", "")
            );
          }
          function wc(c) {
            var b = document.createElement("div");
            return b.appendChild(c), b.innerHTML;
          }
          function Sb(c) {
            var b =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : "text";
            return new Promise(function (e, k) {
              try {
                var r = new XMLHttpRequest();
                "withCredentials" in r &&
                  (r.addEventListener("load", function () {
                    if ("text" === b) {
                      try {
                        e(JSON.parse(r.responseText));
                      } catch (t) {
                        e(r.responseText);
                      }
                    } else {
                      e(r.response);
                    }
                  }),
                  r.addEventListener("error", function () {
                    throw Error(r.status);
                  }),
                  r.open("GET", c, !0),
                  (r.responseType = b),
                  r.send());
              } catch (t) {
                k(t);
              }
            });
          }
          function Hc(c, b) {
            if (La(c)) {
              var e = La(b),
                k = function (z, K) {
                  z.innerHTML = K;
                  (e && null !== document.getElementById(b)) ||
                    document.body.insertAdjacentElement("afterbegin", z);
                };
              if (!e || null === document.getElementById(b)) {
                var r = Jc.supported,
                  t = document.createElement("div");
                if (
                  (t.setAttribute("hidden", ""),
                  e && t.setAttribute("id", b),
                  r)
                ) {
                  var y = window.localStorage.getItem(
                    "".concat("cache", "-").concat(b)
                  );
                  null !== y && ((y = JSON.parse(y)), k(t, y.content));
                }
                Sb(c)
                  .then(function (z) {
                    aa(z) ||
                      (r &&
                        window.localStorage.setItem(
                          "".concat("cache", "-").concat(b),
                          JSON.stringify({ content: z })
                        ),
                      k(t, z));
                  })
                  ["catch"](function () {});
              }
            }
          }
          function hc() {
            var c =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              b =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              e =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if (!g(c)) {
              return hc(void 0, b, e);
            }
            var k = Math.trunc((c / 60 / 60) % 60, 10),
              r = Math.trunc((c / 60) % 60, 10),
              t = Math.trunc(c % 60, 10);
            return (
              (k = b || 0 < k ? "".concat(k, ":") : ""),
              ""
                .concat(e && 0 < c ? "-" : "")
                .concat(k)
                .concat("0".concat(r).slice(-2), ":")
                .concat("0".concat(t).slice(-2))
            );
          }
          function Sc(c) {
            var b = c;
            if (
              !(1 < arguments.length && void 0 !== arguments[1]) ||
              arguments[1]
            ) {
              var e = document.createElement("a");
              e.href = b;
              b = e.href;
            }
            try {
              return new URL(b);
            } catch (k) {
              return null;
            }
          }
          function dd(c) {
            var b = new URLSearchParams();
            return (
              Lb(c) &&
                Object.entries(c).forEach(function (e) {
                  e = Va(e, 2);
                  b.set(e[0], e[1]);
                }),
              b
            );
          }
          function Ja(c) {
            var b =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return new Promise(function (e, k) {
              function r() {
                delete t.onload;
                delete t.onerror;
                (t.naturalWidth >= b ? e : k)(t);
              }
              var t = new Image();
              Object.assign(t, { onload: r, onerror: r, src: c });
            });
          }
          function ua(c) {
            return new Promise(function (b, e) {
              ld(c, { tc: b, error: e });
            });
          }
          function nc(c) {
            c && !this.v.ec && (this.v.ec = !0);
            this.media.paused === c &&
              ((this.media.paused = !c),
              ha.call(this, this.media, c ? "play" : "pause"));
          }
          function Kb(c) {
            c && !this.v.ec && (this.v.ec = !0);
            this.media.paused === c &&
              ((this.media.paused = !c),
              ha.call(this, this.media, c ? "play" : "pause"));
          }
          var Uc = { Kf: !0, Xk: 15, ol: !0 },
            Vc,
            Wc,
            Xc,
            qd = (function () {
              function c(b, e) {
                if (!(this instanceof c)) {
                  throw new TypeError("Cannot call a class as a function");
                }
                rb(b)
                  ? (this.element = b)
                  : bc(b) === String &&
                    (this.element = document.querySelector(b));
                rb(this.element) &&
                  bb(this.element.Xg) &&
                  ((this.g = bd({}, Uc, {}, e)), this.Ya());
              }
              return (
                (function (b, e, k) {
                  e && ec(b.prototype, e);
                  k && ec(b, k);
                })(
                  c,
                  [
                    {
                      key: "init",
                      value: function () {
                        c.enabled &&
                          (this.g.Kf &&
                            ((this.element.style.userSelect = "none"),
                            (this.element.style.pl = "none"),
                            (this.element.style.touchAction = "manipulation")),
                          this.Ja(!0),
                          (this.element.Xg = this));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        c.enabled &&
                          (this.g.Kf &&
                            ((this.element.style.userSelect = ""),
                            (this.element.style.pl = ""),
                            (this.element.style.touchAction = "")),
                          this.Ja(!1),
                          (this.element.Xg = null));
                      },
                    },
                    {
                      key: "listeners",
                      value: function (b) {
                        var e = this,
                          k = b ? "addEventListener" : "removeEventListener";
                        ["touchstart", "touchmove", "touchend"].forEach(
                          function (r) {
                            e.element[k](
                              r,
                              function (t) {
                                return e.set(t);
                              },
                              !1
                            );
                          }
                        );
                      },
                    },
                    {
                      key: "get",
                      value: function (b) {
                        if (!c.enabled || !wb(b, Event)) {
                          return null;
                        }
                        var e,
                          k = b.target,
                          r = b.changedTouches[0];
                        b = parseFloat(k.getAttribute("min")) || 0;
                        var t = parseFloat(k.getAttribute("max")) || 100,
                          y = parseFloat(k.getAttribute("step")) || 1;
                        k = k.getBoundingClientRect();
                        var z = ((100 / k.width) * (this.g.Xk / 2)) / 100;
                        0 > (e = (100 / k.width) * (r.clientX - k.left))
                          ? (e = 0)
                          : 100 < e && (e = 100);
                        50 > e
                          ? (e -= (100 - 2 * e) * z)
                          : 50 < e && (e += 2 * (e - 50) * z);
                        e = (e / 100) * (t - b);
                        1 > y
                          ? ((y = ""
                              .concat(y)
                              .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)),
                            (e = parseFloat(
                              e.toFixed(
                                y
                                  ? Math.max(
                                      0,
                                      (y[1] ? y[1].length : 0) -
                                        (y[2] ? +y[2] : 0)
                                    )
                                  : 0
                              )
                            )))
                          : (e = Math.round(e / y) * y);
                        return b + e;
                      },
                    },
                    {
                      key: "set",
                      value: function (b) {
                        if (c.enabled && wb(b, Event) && !b.target.disabled) {
                          b.preventDefault();
                          b.target.value = this.get(b);
                          var e = b.target;
                          b = "touchend" === b.type ? "change" : "input";
                          e &&
                            b &&
                            ((b = new Event(b, { bubbles: !0 })),
                            e.dispatchEvent(b));
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "setup",
                      value: function (b) {
                        var e =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          k = null;
                        if (
                          (bb(b) || bc(b) === String
                            ? (k = Array.from(
                                document.querySelectorAll(
                                  bc(b) === String ? b : 'input[type="range"]'
                                )
                              ))
                            : rb(b)
                            ? (k = [b])
                            : wb(b, NodeList)
                            ? (k = Array.from(b))
                            : Array.isArray(b) && (k = b.filter(rb)),
                          bb(k))
                        ) {
                          return null;
                        }
                        var r = bd({}, Uc, {}, e);
                        bc(b) === String &&
                          r.ol &&
                          new MutationObserver(function (t) {
                            Array.from(t).forEach(function (y) {
                              Array.from(y.addedNodes).forEach(function (z) {
                                var K;
                                if ((K = rb(z))) {
                                  K = Array.from(
                                    document.querySelectorAll(b)
                                  ).includes(z);
                                }
                                K && new c(z, r);
                              });
                            });
                          }).observe(document.body, {
                            childList: !0,
                            subtree: !0,
                          });
                        return k.map(function (t) {
                          return new c(t, e);
                        });
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return "ontouchstart" in document.documentElement;
                      },
                    },
                  ]
                ),
                c
              );
            })(),
            Lb = Ba,
            La = oa,
            Sa = Z,
            Ua = ea,
            oc = G,
            aa = W,
            ja =
              ((Vc = document.createElement("span")),
              (Wc = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                Ql: "oTransitionEnd otransitionend",
                transition: "transitionend",
              }),
              (Xc = Object.keys(Wc).find(function (c) {
                return void 0 !== Vc.style[c];
              })),
              !!La(Xc) && Wc[Xc]),
            lb = !!document.documentMode,
            kd = window.navigator.userAgent.includes("Edge"),
            $c =
              "WebkitAppearance" in document.documentElement.style &&
              !/Edge/.test(navigator.userAgent),
            Ec = /(iPhone|iPod)/gi.test(navigator.platform),
            xb = /(iPad|iPhone|iPod)/gi.test(navigator.platform),
            Bb,
            ac = {
              "audio/ogg": "vorbis",
              "audio/wav": "1",
              "video/webm": "vp8, vorbis",
              "video/mp4": "avc1.42E01E, mp4a.40.2",
              "video/ogg": "theora",
            },
            ab = {
              audio: "canPlayType" in document.createElement("audio"),
              video: "canPlayType" in document.createElement("video"),
              check: function (c, b, e) {
                e = Ec && e && ab.Pa;
                b = ab[c] || "html5" !== b;
                return { Xb: b, ja: b && ab.gk && ("video" !== c || !Ec || e) };
              },
              qa: !(
                Ec ||
                (!Sa(la("video").Hh) && (!document.ao || la("video").um))
              ),
              Ha: Sa(window.Ul),
              Pa: "playsInline" in document.createElement("video"),
              Ig: function (c) {
                if (aa(c)) {
                  return !1;
                }
                var b = Va(c.split("/"), 1)[0],
                  e = c;
                if (!this.U || b !== this.type) {
                  return !1;
                }
                Object.keys(ac).includes(e) &&
                  (e += '; codecs="'.concat(ac[c], '"'));
                try {
                  return !(!e || !this.media.canPlayType(e).replace(/no/, ""));
                } catch (k) {
                  return !1;
                }
              },
              textTracks: "textTracks" in document.createElement("video"),
              gk:
                ((Bb = document.createElement("input")),
                (Bb.type = "range"),
                "range" === Bb.type),
              Sa: "ontouchstart" in document.documentElement,
              gl: !1 !== ja,
              ik:
                "matchMedia" in window &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            },
            ad = (function () {
              var c = !1;
              try {
                var b = Object.defineProperty({}, "passive", {
                  get: function () {
                    return (c = !0), null;
                  },
                });
                window.addEventListener("test", null, b);
                window.removeEventListener("test", null, b);
              } catch (e) {}
              return c;
            })(),
            Hb = {
              Ed: function () {
                var c = this;
                return this.U
                  ? Array.from(this.media.querySelectorAll("source")).filter(
                      function (b) {
                        b = b.getAttribute("type");
                        return !!aa(b) || ab.Ig.call(c, b);
                      }
                    )
                  : [];
              },
              aj: function () {
                return this.g.quality.pg
                  ? this.g.quality.options
                  : Hb.Ed.call(this)
                      .map(function (c) {
                        return Number(c.getAttribute("size"));
                      })
                      .filter(Boolean);
              },
              ya: function () {
                if (this.U) {
                  var c = this;
                  c.options.speed = c.g.speed.options;
                  aa(this.g.ratio) || Qb.call(c);
                  Object.defineProperty(c.media, "quality", {
                    get: function () {
                      var b = Hb.Ed.call(c).find(function (e) {
                        return e.getAttribute("src") === c.source;
                      });
                      return b && Number(b.getAttribute("size"));
                    },
                    set: function (b) {
                      if (c.quality !== b) {
                        if (c.g.quality.pg && Sa(c.g.quality.Rd)) {
                          c.g.quality.Rd(b);
                        } else {
                          var e = Hb.Ed.call(c).find(function (ba) {
                            return Number(ba.getAttribute("size")) === b;
                          });
                          if (!e) {
                            return;
                          }
                          var k = c.media,
                            r = k.currentTime,
                            t = k.paused,
                            y = k.preload,
                            z = k.readyState,
                            K = k.playbackRate;
                          c.media.src = e.getAttribute("src");
                          ("none" !== y || z) &&
                            (c.once("loadedmetadata", function () {
                              c.speed = K;
                              c.currentTime = r;
                              t || Cb(c.play());
                            }),
                            c.media.load());
                        }
                        ha.call(c, c.media, "qualitychange", !1, {
                          quality: b,
                        });
                      }
                    },
                  });
                }
              },
              Wf: function () {
                this.U &&
                  (Jb(Hb.Ed.call(this)),
                  this.media.setAttribute("src", this.g.$h),
                  this.media.load(),
                  this.debug.log("Cancelled network requests"));
              },
            },
            mc = {
              qa: "PIP",
              Ha: "AirPlay",
              Hd: "HTML5",
              Ta: "Vimeo",
              pb: "YouTube",
            },
            Jc = (function () {
              function c(b) {
                Ib(this, c);
                this.enabled = b.g.storage.enabled;
                this.key = b.g.storage.key;
              }
              return (
                nb(
                  c,
                  [
                    {
                      key: "get",
                      value: function (b) {
                        if (!c.supported || !this.enabled) {
                          return null;
                        }
                        var e = window.localStorage.getItem(this.key);
                        if (aa(e)) {
                          return null;
                        }
                        e = JSON.parse(e);
                        return La(b) && b.length ? e[b] : e;
                      },
                    },
                    {
                      key: "set",
                      value: function (b) {
                        if (c.supported && this.enabled && Lb(b)) {
                          var e = this.get();
                          aa(e) && (e = {});
                          Wa(e, b);
                          window.localStorage.setItem(
                            this.key,
                            JSON.stringify(e)
                          );
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "supported",
                      get: function () {
                        try {
                          return "localStorage" in window
                            ? (window.localStorage.setItem(
                                "___test",
                                "___test"
                              ),
                              window.localStorage.removeItem("___test"),
                              !0)
                            : !1;
                        } catch (b) {
                          return !1;
                        }
                      },
                    },
                  ]
                ),
                c
              );
            })(),
            T = {
              qg: function () {
                var c =
                  new URL(this.g.wg, window.location).host !==
                    window.location.host ||
                  (lb && !window.Qo);
                return { url: this.g.wg, ud: c };
              },
              Si: function () {
                try {
                  return (
                    (this.elements.controls = this.elements.i.querySelector(
                      this.g.K.controls.ua
                    )),
                    (this.elements.buttons = {
                      play: Wb.call(this, this.g.K.buttons.play),
                      pause: this.elements.i.querySelector(
                        this.g.K.buttons.pause
                      ),
                      mb: this.elements.i.querySelector(this.g.K.buttons.mb),
                      Ob: this.elements.i.querySelector(this.g.K.buttons.Ob),
                      Lc: this.elements.i.querySelector(this.g.K.buttons.Lc),
                      tb: this.elements.i.querySelector(this.g.K.buttons.tb),
                      qa: this.elements.i.querySelector(this.g.K.buttons.qa),
                      Ha: this.elements.i.querySelector(this.g.K.buttons.Ha),
                      J: this.elements.i.querySelector(this.g.K.buttons.J),
                      B: this.elements.i.querySelector(this.g.K.buttons.B),
                      N: this.elements.i.querySelector(this.g.K.buttons.N),
                    }),
                    (this.elements.progress = this.elements.i.querySelector(
                      this.g.K.progress
                    )),
                    (this.elements.inputs = {
                      seek: this.elements.i.querySelector(this.g.K.inputs.seek),
                      volume: this.elements.i.querySelector(
                        this.g.K.inputs.volume
                      ),
                    }),
                    (this.elements.display = {
                      buffer: this.elements.i.querySelector(
                        this.g.K.display.buffer
                      ),
                      currentTime: this.elements.i.querySelector(
                        this.g.K.display.currentTime
                      ),
                      duration: this.elements.i.querySelector(
                        this.g.K.display.duration
                      ),
                    }),
                    w(this.elements.progress) &&
                      (this.elements.display.cb = this.elements.progress.querySelector(
                        ".".concat(this.g.u.ke)
                      )),
                    !0
                  );
                } catch (c) {
                  return (
                    this.debug.warn(
                      "It looks like there is a problem with your custom controls HTML",
                      c
                    ),
                    this.ie(!0),
                    !1
                  );
                }
              },
              Ee: function (c, b) {
                var e = T.qg.call(this),
                  k = "".concat(e.ud ? "" : e.url, "#").concat(this.g.ij);
                e = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                Kc(e, Wa(b, { "aria-hidden": "true", Mm: "false" }));
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "use"
                );
                k = "".concat(k, "-").concat(c);
                return (
                  "href" in r &&
                    r.setAttributeNS("http://www.w3.org/1999/xlink", "href", k),
                  r.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    k
                  ),
                  e.appendChild(r),
                  e
                );
              },
              Fe: function (c) {
                var b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  e = N(c, this.g);
                b = dc(
                  dc({}, b),
                  {},
                  { F: [b.F, this.g.u.hidden].filter(Boolean).join(" ") }
                );
                return la("span", b, e);
              },
              $f: function (c) {
                if (aa(c)) {
                  return null;
                }
                var b = la("span", { F: this.g.u.ib.value });
                return (
                  b.appendChild(la("span", { F: this.g.u.ib.badge }, c)), b
                );
              },
              ui: function (c, b) {
                var e = this,
                  k = Wa({}, b),
                  r = (function () {
                    var z = (0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : ""
                    ).toString();
                    return (z = Rc(z)).charAt(0).toLowerCase() + z.slice(1);
                  })(c),
                  t = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    Wc: null,
                    Rc: null,
                  };
                switch (
                  (["element", "icon", "label"].forEach(function (z) {
                    Object.keys(k).includes(z) && ((t[z] = k[z]), delete k[z]);
                  }),
                  "button" !== t.element ||
                    Object.keys(k).includes("type") ||
                    (k.type = "button"),
                  Object.keys(k).includes("class")
                    ? k.F.split(" ").some(function (z) {
                        return z === e.g.u.control;
                      }) ||
                      Wa(k, { F: "".concat(k.F, " ").concat(this.g.u.control) })
                    : (k.F = this.g.u.control),
                  c)
                ) {
                  case "play":
                    t.toggle = !0;
                    t.label = "play";
                    t.Wc = "pause";
                    t.icon = "play";
                    t.Rc = "pause";
                    break;
                  case "mute":
                    t.toggle = !0;
                    t.label = "mute";
                    t.Wc = "unmute";
                    t.icon = "volume";
                    t.Rc = "muted";
                    break;
                  case "captions":
                    t.toggle = !0;
                    t.label = "enableCaptions";
                    t.Wc = "disableCaptions";
                    t.icon = "captions-off";
                    t.Rc = "captions-on";
                    break;
                  case "fullscreen":
                    t.toggle = !0;
                    t.label = "enterFullscreen";
                    t.Wc = "exitFullscreen";
                    t.icon = "enter-fullscreen";
                    t.Rc = "exit-fullscreen";
                    break;
                  case "play-large":
                    k.F += " ".concat(this.g.u.control, "--overlaid");
                    r = "play";
                    t.label = "play";
                    t.icon = "play";
                    break;
                  default:
                    aa(t.label) && (t.label = r), aa(t.icon) && (t.icon = c);
                }
                var y = la(t.element);
                return (
                  t.toggle
                    ? (y.appendChild(
                        T.Ee.call(this, t.Rc, { F: "icon--pressed" })
                      ),
                      y.appendChild(
                        T.Ee.call(this, t.icon, { F: "icon--not-pressed" })
                      ),
                      y.appendChild(
                        T.Fe.call(this, t.Wc, { F: "label--pressed" })
                      ),
                      y.appendChild(
                        T.Fe.call(this, t.label, { F: "label--not-pressed" })
                      ))
                    : (y.appendChild(T.Ee.call(this, t.icon)),
                      y.appendChild(T.Fe.call(this, t.label))),
                  Wa(k, yb(this.g.K.buttons[r], k)),
                  Kc(y, k),
                  "play" === r
                    ? (Ua(this.elements.buttons[r]) ||
                        (this.elements.buttons[r] = []),
                      this.elements.buttons[r].push(y))
                    : (this.elements.buttons[r] = y),
                  y
                );
              },
              createRange: function (c, b) {
                var e = la(
                  "input",
                  Wa(
                    yb(this.g.K.inputs[c]),
                    {
                      type: "range",
                      min: 0,
                      max: 100,
                      step: 0.01,
                      value: 0,
                      autocomplete: "off",
                      wb: "slider",
                      "aria-label": N(c, this.g),
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": 0,
                    },
                    b
                  )
                );
                return (
                  (this.elements.inputs[c] = e), T.Cf.call(this, e), qd.ya(e), e
                );
              },
              vi: function (c, b) {
                var e = la(
                  "progress",
                  Wa(
                    yb(this.g.K.display[c]),
                    {
                      min: 0,
                      max: 100,
                      value: 0,
                      wb: "progressbar",
                      "aria-hidden": !0,
                    },
                    b
                  )
                );
                if ("volume" !== c) {
                  e.appendChild(la("span", null, "0"));
                  var k = { played: "played", buffer: "buffered" }[c];
                  k = k ? N(k, this.g) : "";
                  e.innerText = "% ".concat(k.toLowerCase());
                }
                return (this.elements.display[c] = e), e;
              },
              wi: function (c, b) {
                var e = yb(this.g.K.display[c], b);
                e = la(
                  "div",
                  Wa(e, {
                    F: ""
                      .concat(e.F ? e.F : "", " ")
                      .concat(this.g.u.display.time, " ")
                      .trim(),
                    "aria-label": N(c, this.g),
                  }),
                  "00:00"
                );
                return (this.elements.display[c] = e), e;
              },
              Tf: function (c, b) {
                var e = this;
                Da.call(
                  this,
                  c,
                  "keydown keyup",
                  function (k) {
                    if (
                      [32, 38, 39, 40].includes(k.which) &&
                      (k.preventDefault(),
                      k.stopPropagation(),
                      "keydown" !== k.type)
                    ) {
                      var r,
                        t = eb(c, '[role="menuitemradio"]');
                      !t && [32, 39].includes(k.which)
                        ? T.mf.call(e, b, !0)
                        : 32 !== k.which &&
                          (40 === k.which || (t && 39 === k.which)
                            ? ((r = c.nextElementSibling),
                              w(r) || (r = c.parentNode.firstElementChild))
                            : ((r = c.previousElementSibling),
                              w(r) || (r = c.parentNode.lastElementChild)),
                          Bc.call(e, r, !0));
                    }
                  },
                  !1
                );
                Da.call(this, c, "keyup", function (k) {
                  13 === k.which && T.Ad.call(e, null, !0);
                });
              },
              Ge: function (c) {
                var b = this,
                  e = c.value,
                  k = c.list,
                  r = c.type,
                  t = c.title,
                  y = c.badge;
                y = void 0 === y ? null : y;
                c = c.checked;
                c = void 0 !== c && c;
                var z = yb(this.g.K.inputs[r]),
                  K = la(
                    "button",
                    Wa(z, {
                      type: "button",
                      wb: "menuitemradio",
                      F: ""
                        .concat(this.g.u.control, " ")
                        .concat(z.F ? z.F : "")
                        .trim(),
                      "aria-checked": c,
                      value: e,
                    })
                  );
                c = la("span");
                c.innerHTML = t;
                w(y) && c.appendChild(y);
                K.appendChild(c);
                Object.defineProperty(K, "checked", {
                  enumerable: !0,
                  get: function () {
                    return "true" === K.getAttribute("aria-checked");
                  },
                  set: function (ba) {
                    ba &&
                      Array.from(K.parentNode.children)
                        .filter(function (V) {
                          return eb(V, '[role="menuitemradio"]');
                        })
                        .forEach(function (V) {
                          return V.setAttribute("aria-checked", "false");
                        });
                    K.setAttribute("aria-checked", ba ? "true" : "false");
                  },
                });
                this.Ja.bind(
                  K,
                  "click keyup",
                  function (ba) {
                    if (!ra(ba, KeyboardEvent) || 32 === ba.which) {
                      switch (
                        (ba.preventDefault(),
                        ba.stopPropagation(),
                        (K.checked = !0),
                        r)
                      ) {
                        case "language":
                          b.Hb = Number(e);
                          break;
                        case "quality":
                          b.quality = e;
                          break;
                        case "speed":
                          b.speed = parseFloat(e);
                      }
                      T.mf.call(b, "home", ra(ba, KeyboardEvent));
                    }
                  },
                  r,
                  !1
                );
                T.Tf.call(this, K, r);
                k.appendChild(K);
              },
              Ne: function () {
                var c =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  b =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return g(c)
                  ? hc(c, 0 < Math.trunc((this.duration / 60 / 60) % 60, 10), b)
                  : c;
              },
              ne: function () {
                var c =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  e =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                w(c) && g(b) && (c.innerText = T.Ne(b, e));
              },
              Fh: function () {
                this.supported.ja &&
                  (w(this.elements.inputs.volume) &&
                    T.mh.call(
                      this,
                      this.elements.inputs.volume,
                      this.muted ? 0 : this.volume
                    ),
                  w(this.elements.buttons.tb) &&
                    (this.elements.buttons.tb.pressed =
                      this.muted || 0 === this.volume));
              },
              mh: function (c) {
                var b =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                w(c) && ((c.value = b), T.Cf.call(this, c));
              },
              Dh: function (c) {
                if (this.supported.ja && ra(c, Event) && c) {
                  switch (c.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                      var b = this.currentTime;
                      var e = this.duration;
                      b =
                        0 === b || 0 === e || Number.isNaN(b) || Number.isNaN(e)
                          ? 0
                          : ((b / e) * 100).toFixed(2);
                      "timeupdate" === c.type &&
                        T.mh.call(this, this.elements.inputs.seek, b);
                      break;
                    case "playing":
                    case "progress":
                      (b = this.elements.display.buffer),
                        (c = 100 * this.buffered),
                        (c = g(c) ? c : 0),
                        (b = w(b) ? b : this.elements.display.buffer),
                        w(b) &&
                          ((b.value = c),
                          (b = b.getElementsByTagName("span")[0]),
                          w(b) && (b.childNodes[0].nodeValue = c)),
                        !0;
                  }
                }
              },
              Cf: function (c) {
                c = ra(c, Event) ? c.target : c;
                if (w(c) && "range" === c.getAttribute("type")) {
                  if (eb(c, this.g.K.inputs.seek)) {
                    c.setAttribute("aria-valuenow", this.currentTime);
                    var b = T.Ne(this.currentTime),
                      e = T.Ne(this.duration),
                      k = N("seekLabel", this.g);
                    c.setAttribute(
                      "aria-valuetext",
                      k.replace("{currentTime}", b).replace("{duration}", e)
                    );
                  } else {
                    eb(c, this.g.K.inputs.volume)
                      ? ((b = 100 * c.value),
                        c.setAttribute("aria-valuenow", b),
                        c.setAttribute(
                          "aria-valuetext",
                          "".concat(b.toFixed(1), "%")
                        ))
                      : c.setAttribute("aria-valuenow", c.value);
                  }
                  $c &&
                    c.style.setProperty(
                      "--value",
                      "".concat((c.value / c.max) * 100, "%")
                    );
                }
              },
              Eh: function (c) {
                if (
                  this.g.xf.seek &&
                  w(this.elements.inputs.seek) &&
                  w(this.elements.display.cb) &&
                  0 !== this.duration
                ) {
                  var b = "".concat(this.g.u.ke, "--visible");
                  if (this.Sa) {
                    xa(this.elements.display.cb, b, !1);
                  } else {
                    var e = this.elements.progress.getBoundingClientRect();
                    if (ra(c, Event)) {
                      e = (100 / e.width) * (c.pageX - e.left);
                    } else {
                      if (!sc(this.elements.display.cb, b)) {
                        return;
                      }
                      e = parseFloat(this.elements.display.cb.style.left, 10);
                    }
                    0 > e ? (e = 0) : 100 < e && (e = 100);
                    T.ne.call(
                      this,
                      this.elements.display.cb,
                      (this.duration / 100) * e
                    );
                    this.elements.display.cb.style.left = "".concat(e, "%");
                    ra(c, Event) &&
                      ["mouseenter", "mouseleave"].includes(c.type) &&
                      xa(this.elements.display.cb, b, "mouseenter" === c.type);
                  }
                }
              },
              vf: function (c) {
                var b = !w(this.elements.display.duration) && this.g.Ld;
                T.ne.call(
                  this,
                  this.elements.display.currentTime,
                  b ? this.duration - this.currentTime : this.currentTime,
                  b
                );
                (c && "timeupdate" === c.type && this.media.seeking) ||
                  T.Dh.call(this, c);
              },
              gg: function () {
                if (this.supported.ja && (this.g.Ld || !this.currentTime)) {
                  if (this.duration >= Math.pow(2, 32)) {
                    return (
                      Vb(this.elements.display.currentTime, !0),
                      void Vb(this.elements.progress, !0)
                    );
                  }
                  w(this.elements.inputs.seek) &&
                    this.elements.inputs.seek.setAttribute(
                      "aria-valuemax",
                      this.duration
                    );
                  var c = w(this.elements.display.duration);
                  !c &&
                    this.g.Ii &&
                    this.paused &&
                    T.ne.call(
                      this,
                      this.elements.display.currentTime,
                      this.duration
                    );
                  c &&
                    T.ne.call(
                      this,
                      this.elements.display.duration,
                      this.duration
                    );
                  T.Eh.call(this);
                }
              },
              wf: function (c, b) {
                Vb(this.elements.J.buttons[c], !b);
              },
              Ub: function (c, b, e) {
                var k = this.elements.J.bb[c],
                  r = null;
                if ("captions" === c) {
                  r = this.Hb;
                } else {
                  if (
                    ((r = aa(e) ? this[c] : e),
                    aa(r) && (r = this.g[c]["default"]),
                    !aa(this.options[c]) && !this.options[c].includes(r))
                  ) {
                    return void this.debug.warn(
                      "Unsupported value of '".concat(r, "' for ").concat(c)
                    );
                  }
                  if (!this.g[c].options.includes(r)) {
                    return void this.debug.warn(
                      "Disabled value of '".concat(r, "' for ").concat(c)
                    );
                  }
                }
                if (
                  (w(b) || (b = k && k.querySelector('[role="menu"]')), w(b))
                ) {
                  (this.elements.J.buttons[c].querySelector(
                    ".".concat(this.g.u.ib.value)
                  ).innerHTML = T.Jb.call(this, c, r)),
                    (c = b && b.querySelector('[value="'.concat(r, '"]'))),
                    w(c) && (c.checked = !0);
                }
              },
              Jb: function (c, b) {
                switch (c) {
                  case "speed":
                    return 1 === b
                      ? N("normal", this.g)
                      : "".concat(b, "&times;");
                  case "quality":
                    if (g(b)) {
                      var e = N("qualityLabel.".concat(b), this.g);
                      return e.length ? e : "".concat(b, "p");
                    }
                    return gb(b);
                  case "captions":
                    return Aa.Jb.call(this);
                  default:
                    return null;
                }
              },
              Ek: function (c) {
                var b = this;
                if (w(this.elements.J.bb.quality)) {
                  var e = this.elements.J.bb.quality.querySelector(
                    '[role="menu"]'
                  );
                  Ua(c) &&
                    (this.options.quality = Nb(c).filter(function (k) {
                      return b.g.quality.options.includes(k);
                    }));
                  c =
                    !aa(this.options.quality) &&
                    1 < this.options.quality.length;
                  if (
                    (T.wf.call(this, "quality", c), Ub(e), T.Be.call(this), c)
                  ) {
                    this.options.quality
                      .sort(function (k, r) {
                        var t = b.g.quality.options;
                        return t.indexOf(k) > t.indexOf(r) ? 1 : -1;
                      })
                      .forEach(function (k) {
                        var r = T.Ge,
                          t = r.call,
                          y = T.Jb.call(b, "quality", k);
                        var z = N("qualityBadge.".concat(k), b.g);
                        z = z.length ? T.$f.call(b, z) : null;
                        t.call(r, b, {
                          value: k,
                          list: e,
                          type: "quality",
                          title: y,
                          badge: z,
                        });
                      }),
                      T.Ub.call(this, "quality", e);
                  }
                }
              },
              jh: function () {
                var c = this;
                if (w(this.elements.J.bb.B)) {
                  var b = this.elements.J.bb.B.querySelector('[role="menu"]'),
                    e = Aa.getTracks.call(this),
                    k = !!e.length;
                  if (
                    (T.wf.call(this, "captions", k), Ub(b), T.Be.call(this), k)
                  ) {
                    (e = e.map(function (r, t) {
                      return {
                        value: t,
                        checked: c.B.Sb && c.Hb === t,
                        title: Aa.Jb.call(c, r),
                        badge:
                          r.language && T.$f.call(c, r.language.toUpperCase()),
                        list: b,
                        type: "language",
                      };
                    })),
                      e.unshift({
                        value: -1,
                        checked: !this.B.Sb,
                        title: N("disabled", this.g),
                        list: b,
                        type: "language",
                      }),
                      e.forEach(T.Ge.bind(this)),
                      T.Ub.call(this, "captions", b);
                  }
                }
              },
              Fk: function () {
                var c = this;
                if (w(this.elements.J.bb.speed)) {
                  var b = this.elements.J.bb.speed.querySelector(
                    '[role="menu"]'
                  );
                  this.options.speed = this.options.speed.filter(function (k) {
                    return k >= c.Fj && k <= c.Dj;
                  });
                  var e =
                    !aa(this.options.speed) && 1 < this.options.speed.length;
                  T.wf.call(this, "speed", e);
                  Ub(b);
                  T.Be.call(this);
                  e &&
                    (this.options.speed.forEach(function (k) {
                      T.Ge.call(c, {
                        value: k,
                        list: b,
                        type: "speed",
                        title: T.Jb.call(c, "speed", k),
                      });
                    }),
                    T.Ub.call(this, "speed", b));
                }
              },
              Be: function () {
                var c = this.elements.J.buttons;
                c =
                  !aa(c) &&
                  Object.values(c).some(function (b) {
                    return !b.hidden;
                  });
                Vb(this.elements.J.ib, !c);
              },
              Ad: function (c) {
                var b =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (!this.elements.J.bf.hidden) {
                  var e = c;
                  w(e) ||
                    (e = Object.values(this.elements.J.bb).find(function (k) {
                      return !k.hidden;
                    }));
                  Bc.call(this, e.querySelector('[role^="menuitem"]'), b);
                }
              },
              Ab: function (c) {
                var b = this.elements.J.bf,
                  e = this.elements.buttons.J;
                if (w(b) && w(e)) {
                  var k = b.hidden,
                    r = k;
                  if (F(c)) {
                    r = c;
                  } else {
                    if (ra(c, KeyboardEvent) && 27 === c.which) {
                      r = !1;
                    } else {
                      if (ra(c, Event)) {
                        var t = Sa(c.composedPath)
                          ? c.composedPath()[0]
                          : c.target;
                        if (
                          (t = b.contains(t)) ||
                          (!t && c.target !== e && r)
                        ) {
                          return;
                        }
                      }
                    }
                  }
                  e.setAttribute("aria-expanded", r);
                  Vb(b, !r);
                  xa(this.elements.i, this.g.u.ib.open, r);
                  r && ra(c, KeyboardEvent)
                    ? T.Ad.call(this, null, !0)
                    : r || k || Bc.call(this, e, ra(c, KeyboardEvent));
                }
              },
              Zi: function (c) {
                var b = c.cloneNode(!0);
                b.style.position = "absolute";
                b.style.opacity = 0;
                b.removeAttribute("hidden");
                c.parentNode.appendChild(b);
                c = b.scrollWidth;
                var e = b.scrollHeight;
                return Jb(b), { width: c, height: e };
              },
              mf: function () {
                var c = this,
                  b =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  e = this.elements.i.querySelector(
                    "#plyr-settings-"
                      .concat(this.id, "-")
                      .concat(
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : ""
                      )
                  );
                if (w(e)) {
                  var k = e.parentNode,
                    r = Array.from(k.children).find(function (y) {
                      return !y.hidden;
                    });
                  if (ab.gl && !ab.ik) {
                    k.style.width = "".concat(r.scrollWidth, "px");
                    k.style.height = "".concat(r.scrollHeight, "px");
                    var t = T.Zi.call(this, e);
                    Da.call(this, k, ja, function K(z) {
                      z.target === k &&
                        ["width", "height"].includes(z.propertyName) &&
                        ((k.style.width = ""),
                        (k.style.height = ""),
                        qb.call(c, k, ja, K));
                    });
                    k.style.width = "".concat(t.width, "px");
                    k.style.height = "".concat(t.height, "px");
                  }
                  Vb(r, !0);
                  Vb(e, !1);
                  T.Ad.call(this, e, b);
                }
              },
              jf: function () {
                var c = this.elements.buttons.download;
                w(c) && c.setAttribute("href", this.download);
              },
              create: function (c) {
                var b = this,
                  e = T.Tf,
                  k = T.ui,
                  r = T.vi,
                  t = T.createRange,
                  y = T.wi,
                  z = T.Ek,
                  K = T.Fk,
                  ba = T.mf;
                this.elements.controls = null;
                Ua(this.g.controls) &&
                  this.g.controls.includes("play-large") &&
                  this.elements.i.appendChild(k.call(this, "play-large"));
                var V = la("div", yb(this.g.K.controls.ua));
                this.elements.controls = V;
                var qa = { F: "plyr__controls__item" };
                return (
                  Nb(Ua(this.g.controls) ? this.g.controls : []).forEach(
                    function (ia) {
                      if (
                        ("restart" === ia &&
                          V.appendChild(k.call(b, "restart", qa)),
                        "rewind" === ia &&
                          V.appendChild(k.call(b, "rewind", qa)),
                        "play" === ia && V.appendChild(k.call(b, "play", qa)),
                        "fast-forward" === ia &&
                          V.appendChild(k.call(b, "fast-forward", qa)),
                        "progress" === ia)
                      ) {
                        var na = la("div", {
                            F: "".concat(qa.F, " plyr__progress__container"),
                          }),
                          O = la("div", yb(b.g.K.progress));
                        if (
                          (O.appendChild(
                            t.call(b, "seek", { id: "plyr-seek-".concat(c.id) })
                          ),
                          O.appendChild(r.call(b, "buffer")),
                          b.g.xf.seek)
                        ) {
                          var pa = la("span", { F: b.g.u.ke }, "00:00");
                          O.appendChild(pa);
                          b.elements.display.cb = pa;
                        }
                        b.elements.progress = O;
                        na.appendChild(b.elements.progress);
                        V.appendChild(na);
                      }
                      if (
                        ("current-time" === ia &&
                          V.appendChild(y.call(b, "currentTime", qa)),
                        "duration" === ia &&
                          V.appendChild(y.call(b, "duration", qa)),
                        "mute" === ia || "volume" === ia)
                      ) {
                        (na = b.elements.volume),
                          ((w(na) && V.contains(na)) ||
                            ((na = la(
                              "div",
                              Wa({}, qa, {
                                F: "".concat(qa.F, " plyr__volume").trim(),
                              })
                            )),
                            (b.elements.volume = na),
                            V.appendChild(na)),
                          "mute" === ia && na.appendChild(k.call(b, "mute")),
                          "volume" !== ia || xb) ||
                            na.appendChild(
                              t.call(
                                b,
                                "volume",
                                Wa(
                                  { max: 1, step: 0.05, value: b.g.volume },
                                  { id: "plyr-volume-".concat(c.id) }
                                )
                              )
                            );
                      }
                      if (
                        ("captions" === ia &&
                          V.appendChild(k.call(b, "captions", qa)),
                        "settings" === ia && !aa(b.g.J))
                      ) {
                        na = la(
                          "div",
                          Wa({}, qa, {
                            F: "".concat(qa.F, " plyr__menu").trim(),
                            hidden: "",
                          })
                        );
                        na.appendChild(
                          k.call(b, "settings", {
                            "aria-haspopup": !0,
                            "aria-controls": "plyr-settings-".concat(c.id),
                            "aria-expanded": !1,
                          })
                        );
                        O = la("div", {
                          F: "plyr__menu__container",
                          id: "plyr-settings-".concat(c.id),
                          hidden: "",
                        });
                        var va = la("div");
                        pa = la("div", {
                          id: "plyr-settings-".concat(c.id, "-home"),
                        });
                        var ta = la("div", { wb: "menu" });
                        pa.appendChild(ta);
                        va.appendChild(pa);
                        b.elements.J.bb.home = pa;
                        b.g.J.forEach(function (Ha) {
                          var Ta = la(
                            "button",
                            Wa(yb(b.g.K.buttons.J), {
                              type: "button",
                              F: ""
                                .concat(b.g.u.control, " ")
                                .concat(b.g.u.control, "--forward"),
                              wb: "menuitem",
                              "aria-haspopup": !0,
                              hidden: "",
                            })
                          );
                          e.call(b, Ta, Ha);
                          Da.call(b, Ta, "click", function () {
                            ba.call(b, Ha, !1);
                          });
                          var hb = la("span", null, N(Ha, b.g)),
                            kb = la("span", { F: b.g.u.ib.value });
                          kb.innerHTML = c[Ha];
                          hb.appendChild(kb);
                          Ta.appendChild(hb);
                          ta.appendChild(Ta);
                          hb = la("div", {
                            id: "plyr-settings-".concat(c.id, "-").concat(Ha),
                            hidden: "",
                          });
                          kb = la("button", {
                            type: "button",
                            F: ""
                              .concat(b.g.u.control, " ")
                              .concat(b.g.u.control, "--back"),
                          });
                          kb.appendChild(
                            la("span", { "aria-hidden": !0 }, N(Ha, b.g))
                          );
                          kb.appendChild(
                            la("span", { F: b.g.u.hidden }, N("menuBack", b.g))
                          );
                          Da.call(
                            b,
                            hb,
                            "keydown",
                            function (Mb) {
                              37 === Mb.which &&
                                (Mb.preventDefault(),
                                Mb.stopPropagation(),
                                ba.call(b, "home", !0));
                            },
                            !1
                          );
                          Da.call(b, kb, "click", function () {
                            ba.call(b, "home", !1);
                          });
                          hb.appendChild(kb);
                          hb.appendChild(la("div", { wb: "menu" }));
                          va.appendChild(hb);
                          b.elements.J.buttons[Ha] = Ta;
                          b.elements.J.bb[Ha] = hb;
                        });
                        O.appendChild(va);
                        na.appendChild(O);
                        V.appendChild(na);
                        b.elements.J.bf = O;
                        b.elements.J.ib = na;
                      }
                      if (
                        ("pip" === ia &&
                          ab.qa &&
                          V.appendChild(k.call(b, "pip", qa)),
                        "airplay" === ia &&
                          ab.Ha &&
                          V.appendChild(k.call(b, "airplay", qa)),
                        "download" === ia)
                      ) {
                        (na = Wa({}, qa, {
                          element: "a",
                          href: b.download,
                          target: "_blank",
                        })),
                          b.U && (na.download = ""),
                          !B(b.g.urls.download) &&
                            b.Tc &&
                            Wa(na, { icon: "logo-".concat(b.ea), label: b.ea }),
                          V.appendChild(k.call(b, "download", na));
                      }
                      "fullscreen" === ia &&
                        V.appendChild(k.call(b, "fullscreen", qa));
                    }
                  ),
                  this.U && z.call(this, Hb.aj.call(this)),
                  K.call(this),
                  V
                );
              },
              qj: function () {
                var c = this;
                if (this.g.Cj) {
                  var b = T.qg.call(this);
                  b.ud && Hc(b.url, "sprite-plyr");
                }
                this.id = Math.floor(1e4 * Math.random());
                b = null;
                this.elements.controls = null;
                var e,
                  k,
                  r = { id: this.id, wk: this.g.xa, title: this.g.title },
                  t = !0;
                if (
                  (Sa(this.g.controls) &&
                    (this.g.controls = this.g.controls.call(this, r)),
                  this.g.controls || (this.g.controls = []),
                  w(this.g.controls) || La(this.g.controls)
                    ? (b = this.g.controls)
                    : ((b = T.create.call(this, {
                        id: this.id,
                        wk: this.g.xa,
                        speed: this.speed,
                        quality: this.quality,
                        B: Aa.Jb.call(this),
                      })),
                      (t = !1)),
                  t &&
                    La(this.g.controls) &&
                    ((e = b),
                    Object.entries(r).forEach(function (z) {
                      z = Va(z, 2);
                      e = q(e, "{".concat(z[0], "}"), z[1]);
                    }),
                    (b = e)),
                  La(this.g.K.controls.i) &&
                    (k = document.querySelector(this.g.K.controls.i)),
                  w(k) || (k = this.elements.i),
                  k[w(b) ? "insertAdjacentElement" : "insertAdjacentHTML"](
                    "afterbegin",
                    b
                  ),
                  w(this.elements.controls) || T.Si.call(this),
                  !aa(this.elements.buttons))
                ) {
                  var y = function (z) {
                    var K = c.g.u.ti;
                    Object.defineProperty(z, "pressed", {
                      enumerable: !0,
                      get: function () {
                        return sc(z, K);
                      },
                      set: function () {
                        xa(
                          z,
                          K,
                          0 < arguments.length &&
                            void 0 !== arguments[0] &&
                            arguments[0]
                        );
                      },
                    });
                  };
                  Object.values(this.elements.buttons)
                    .filter(Boolean)
                    .forEach(function (z) {
                      Ua(z) || oc(z)
                        ? Array.from(z).filter(Boolean).forEach(y)
                        : y(z);
                    });
                }
                if ((kd && pc(k), this.g.xf.controls)) {
                  (k = this.g),
                    (b = k.K),
                    (k = Wb.call(
                      this,
                      ""
                        .concat(b.controls.ua, " ")
                        .concat(b.labels, " .")
                        .concat(k.u.hidden)
                    )),
                    Array.from(k).forEach(function (z) {
                      xa(z, c.g.u.hidden, !1);
                      xa(z, c.g.u.ke, !0);
                    });
                }
              },
            },
            Aa = {
              ya: function () {
                if (this.supported.ja) {
                  if (!this.Ba || this.jc || (this.U && !ab.textTracks)) {
                    Ua(this.g.controls) &&
                      this.g.controls.includes("settings") &&
                      this.g.J.includes("captions") &&
                      T.jh.call(this);
                  } else {
                    if (
                      (w(this.elements.B) ||
                        ((this.elements.B = la("div", yb(this.g.K.B))),
                        (function (k, r) {
                          w(k) &&
                            w(r) &&
                            r.parentNode.insertBefore(k, r.nextSibling);
                        })(this.elements.B, this.elements.ua)),
                      lb && window.URL)
                    ) {
                      var c = this.media.querySelectorAll("track");
                      Array.from(c).forEach(function (k) {
                        var r = k.getAttribute("src"),
                          t = Sc(r);
                        null !== t &&
                          t.hostname !== window.location.href.hostname &&
                          ["http:", "https:"].includes(t.protocol) &&
                          Sb(r, "blob")
                            .then(function (y) {
                              k.setAttribute(
                                "src",
                                window.URL.createObjectURL(y)
                              );
                            })
                            ["catch"](function () {
                              Jb(k);
                            });
                      });
                    }
                    c = Nb(
                      (
                        navigator.languages || [
                          navigator.language || navigator.ip || "en",
                        ]
                      ).map(function (k) {
                        return k.split("-")[0];
                      })
                    );
                    var b = (
                      this.storage.get("language") ||
                      this.g.B.language ||
                      "auto"
                    ).toLowerCase();
                    "auto" === b && (b = Va(c, 1)[0]);
                    var e = this.storage.get("captions");
                    (F(e) || (e = this.g.B.active),
                    Object.assign(this.B, {
                      Sb: !1,
                      active: e,
                      language: b,
                      languages: c,
                    }),
                    this.U) &&
                      Da.call(
                        this,
                        this.media.textTracks,
                        this.g.B.update
                          ? "addtrack removetrack"
                          : "removetrack",
                        Aa.update.bind(this)
                      );
                    setTimeout(Aa.update.bind(this), 0);
                  }
                }
              },
              update: function () {
                var c = this,
                  b = Aa.getTracks.call(this, !0),
                  e = this.B,
                  k = e.active,
                  r = e.language,
                  t = e.Pd;
                e = e.cg;
                var y = !!b.find(function (z) {
                  return z.language === r;
                });
                this.U &&
                  this.Ba &&
                  b
                    .filter(function (z) {
                      return !t.get(z);
                    })
                    .forEach(function (z) {
                      c.debug.log("Track added", z);
                      t.set(z, { default: "showing" === z.mode });
                      "showing" === z.mode && (z.mode = "hidden");
                      Da.call(c, z, "cuechange", function () {
                        return Aa.Af.call(c);
                      });
                    });
                ((y && this.language !== r) || !b.includes(e)) &&
                  (Aa.lh.call(this, r), Aa.toggle.call(this, k && y));
                xa(this.elements.i, this.g.u.B.enabled, !aa(b));
                Ua(this.g.controls) &&
                  this.g.controls.includes("settings") &&
                  this.g.J.includes("captions") &&
                  T.jh.call(this);
              },
              toggle: function (c) {
                var b = this,
                  e =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1];
                if (this.supported.ja) {
                  var k = this.B.Sb,
                    r = this.g.u.B.active,
                    t = null == c ? !k : c;
                  if (t !== k) {
                    if (
                      (e || ((this.B.active = t), this.storage.set({ B: t })),
                      !this.language && t && !e)
                    ) {
                      return (
                        (e = Aa.getTracks.call(this)),
                        (k = Aa.jg.call(
                          this,
                          [this.B.language].concat(mb(this.B.languages)),
                          !0
                        )),
                        (this.B.language = k.language),
                        void Aa.set.call(this, e.indexOf(k))
                      );
                    }
                    this.elements.buttons.B &&
                      (this.elements.buttons.B.pressed = t);
                    xa(this.elements.i, r, t);
                    this.B.Sb = t;
                    T.Ub.call(this, "captions");
                    ha.call(
                      this,
                      this.media,
                      t ? "captionsenabled" : "captionsdisabled"
                    );
                  }
                  setTimeout(function () {
                    t && b.B.Sb && (b.B.cg.mode = "hidden");
                  });
                }
              },
              set: function (c) {
                var b =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1],
                  e = Aa.getTracks.call(this);
                if (-1 !== c) {
                  if (g(c)) {
                    if (c in e) {
                      if (this.B.Hb !== c) {
                        this.B.Hb = c;
                        e = e[c];
                        var k = (e || {}).language;
                        this.B.cg = e;
                        T.Ub.call(this, "captions");
                        b ||
                          ((this.B.language = k),
                          this.storage.set({ language: k }));
                        this.Nb && this.v.Am(k);
                        ha.call(this, this.media, "languagechange");
                      }
                      Aa.toggle.call(this, !0, b);
                      this.U && this.Ba && Aa.Af.call(this);
                    } else {
                      this.debug.warn("Track not found", c);
                    }
                  } else {
                    this.debug.warn("Invalid caption argument", c);
                  }
                } else {
                  Aa.toggle.call(this, !1, b);
                }
              },
              lh: function (c) {
                var b =
                  !(1 < arguments.length && void 0 !== arguments[1]) ||
                  arguments[1];
                if (La(c)) {
                  var e = c.toLowerCase();
                  this.B.language = e;
                  var k = Aa.getTracks.call(this);
                  e = Aa.jg.call(this, [e]);
                  Aa.set.call(this, k.indexOf(e), b);
                } else {
                  this.debug.warn("Invalid language argument", c);
                }
              },
              getTracks: function () {
                var c = this,
                  b =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                return Array.from((this.media || {}).textTracks || [])
                  .filter(function (e) {
                    return !c.U || b || c.B.Pd.has(e);
                  })
                  .filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind);
                  });
              },
              jg: function (c) {
                var b,
                  e = this,
                  k =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = Aa.getTracks.call(this),
                  t = Array.from(r).sort(function (y, z) {
                    return (
                      Number((e.B.Pd.get(z) || {})["default"]) -
                      Number((e.B.Pd.get(y) || {})["default"])
                    );
                  });
                return (
                  c.every(function (y) {
                    return !(b = t.find(function (z) {
                      return z.language === y;
                    }));
                  }),
                  b || (k ? t[0] : void 0)
                );
              },
              Oe: function () {
                return Aa.getTracks.call(this)[this.Hb];
              },
              Jb: function (c) {
                var b = c;
                return (
                  !E(b) && ab.textTracks && this.B.Sb && (b = Aa.Oe.call(this)),
                  E(b)
                    ? aa(b.label)
                      ? aa(b.language)
                        ? N("enabled", this.g)
                        : c.language.toUpperCase()
                      : b.label
                    : N("disabled", this.g)
                );
              },
              Af: function (c) {
                if (this.supported.ja) {
                  if (w(this.elements.B)) {
                    if (null == c || Array.isArray(c)) {
                      if (
                        (c ||
                          ((c = Aa.Oe.call(this)),
                          (c = Array.from((c || {}).activeCues || [])
                            .map(function (e) {
                              return e.getCueAsHTML();
                            })
                            .map(wc))),
                        (c = c
                          .map(function (e) {
                            return e.trim();
                          })
                          .join("\n")),
                        c !== this.elements.B.innerHTML)
                      ) {
                        Ub(this.elements.B);
                        var b = la("span", yb(this.g.K.caption));
                        b.innerHTML = c;
                        this.elements.B.appendChild(b);
                        ha.call(this, this.media, "cuechange");
                      }
                    } else {
                      this.debug.warn("updateCues: Invalid input", c);
                    }
                  } else {
                    this.debug.warn("No captions element to render to");
                  }
                }
              },
            },
            sb = {
              enabled: !0,
              title: "",
              debug: !1,
              autoplay: !1,
              qd: !0,
              Pa: !0,
              xa: 10,
              volume: 1,
              muted: !1,
              duration: null,
              Ii: !0,
              Ld: !0,
              el: !0,
              ratio: null,
              ri: !0,
              Pc: !0,
              rk: !1,
              Fi: !0,
              Cj: !0,
              ij: "plyr",
              wg: "https://cdn.plyr.io/3.6.3/plyr.svg",
              $h: "https://cdn.plyr.io/static/blank.mp4",
              quality: {
                default: 576,
                options: [
                  4320,
                  2880,
                  2160,
                  1440,
                  1080,
                  720,
                  576,
                  480,
                  360,
                  240,
                ],
                pg: !1,
                Rd: null,
              },
              loop: { active: !1 },
              speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
              },
              keyboard: { focused: !0, global: !1 },
              xf: { controls: !1, seek: !0 },
              B: { active: !1, language: "auto", update: !1 },
              N: { enabled: !0, Kc: !0, Sc: !1 },
              storage: { enabled: !0, key: "plyr" },
              controls: "play-large play progress current-time mute volume captions settings pip airplay fullscreen".split(
                " "
              ),
              J: ["captions", "quality", "speed"],
              hj: {
                mb: "Restart",
                Ob: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                Lc: "Forward {seektime}s",
                seek: "Seek",
                so: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                tb: "Mute",
                gp: "Unmute",
                ym: "Enable captions",
                tm: "Disable captions",
                download: "Download",
                Em: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                Om: "Player for {title}",
                B: "Captions",
                J: "Settings",
                qa: "PIP",
                An: "Go back to previous menu",
                speed: "Speed",
                Jn: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                am: "Ad",
                ko: {
                  2160: "4K",
                  1440: "HD",
                  1080: "HD",
                  720: "HD",
                  576: "SD",
                  480: "SD",
                },
              },
              urls: {
                download: null,
                Ta: {
                  ed: "https://player.vimeo.com/api/player.js",
                  kj: "https://player.vimeo.com/video/{0}?{1}",
                  Xb: "https://vimeo.com/api/oembed.json?url={0}",
                },
                pb: {
                  ed: "https://www.youtube.com/iframe_api",
                  Xb:
                    "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                },
                gj: {
                  ed: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                },
              },
              Ja: {
                seek: null,
                play: null,
                pause: null,
                mb: null,
                Ob: null,
                Lc: null,
                tb: null,
                volume: null,
                B: null,
                download: null,
                N: null,
                qa: null,
                Ha: null,
                speed: null,
                quality: null,
                loop: null,
                language: null,
              },
              va: "ended progress stalled playing waiting canplay canplaythrough loadstart loadeddata loadedmetadata timeupdate volumechange play pause error seeking seeked emptied ratechange cuechange download enterfullscreen exitfullscreen captionsenabled captionsdisabled languagechange controlshidden controlsshown ready statechange qualitychange adsloaded adscontentpause adscontentresume adstarted adsmidpoint adscomplete adsallcomplete adsimpression adsclick".split(
                " "
              ),
              K: {
                Mi: "input, textarea, select, [contenteditable]",
                i: ".plyr",
                controls: { i: null, ua: ".plyr__controls" },
                labels: "[data-plyr]",
                buttons: {
                  play: '[data-plyr="play"]',
                  pause: '[data-plyr="pause"]',
                  mb: '[data-plyr="restart"]',
                  Ob: '[data-plyr="rewind"]',
                  Lc: '[data-plyr="fast-forward"]',
                  tb: '[data-plyr="mute"]',
                  B: '[data-plyr="captions"]',
                  download: '[data-plyr="download"]',
                  N: '[data-plyr="fullscreen"]',
                  qa: '[data-plyr="pip"]',
                  Ha: '[data-plyr="airplay"]',
                  J: '[data-plyr="settings"]',
                  loop: '[data-plyr="loop"]',
                },
                inputs: {
                  seek: '[data-plyr="seek"]',
                  volume: '[data-plyr="volume"]',
                  speed: '[data-plyr="speed"]',
                  language: '[data-plyr="language"]',
                  quality: '[data-plyr="quality"]',
                },
                display: {
                  currentTime: ".plyr__time--current",
                  duration: ".plyr__time--duration",
                  buffer: ".plyr__progress__buffer",
                  loop: ".plyr__progress__loop",
                  volume: ".plyr__volume--display",
                },
                progress: ".plyr__progress",
                B: ".plyr__captions",
                caption: ".plyr__caption",
              },
              u: {
                type: "plyr--{0}",
                ea: "plyr--{0}",
                video: "plyr__video-wrapper",
                v: "plyr__video-embed",
                ml: "plyr__video-wrapper--fixed-ratio",
                Ni: "plyr__video-embed__container",
                poster: "plyr__poster",
                $j: "plyr__poster-enabled",
                Wa: "plyr__ads",
                control: "plyr__control",
                ti: "plyr__control--pressed",
                Ca: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                hb: "plyr--loading",
                Qc: "plyr--hover",
                ke: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                Pc: "plyr--hide-controls",
                sj: "plyr--is-ios",
                Dg: "plyr--is-touch",
                hl: "plyr--full-ui",
                Lg: "plyr--no-transition",
                display: { time: "plyr__time" },
                ib: {
                  value: "plyr__menu__value",
                  badge: "plyr__badge",
                  open: "plyr--menu-open",
                },
                B: {
                  enabled: "plyr--captions-enabled",
                  active: "plyr--captions-active",
                },
                N: {
                  enabled: "plyr--fullscreen-enabled",
                  Kc: "plyr--fullscreen-fallback",
                },
                qa: {
                  supported: "plyr--pip-supported",
                  active: "plyr--pip-active",
                },
                Ha: {
                  supported: "plyr--airplay-supported",
                  active: "plyr--airplay-active",
                },
                tf: "plyr__tab-focus",
                Z: {
                  Vk: "plyr__preview-thumb",
                  Wk: "plyr__preview-thumb--is-shown",
                  oa: "plyr__preview-thumb__image-container",
                  $k: "plyr__preview-thumb__time-container",
                  uk: "plyr__preview-scrubbing",
                  vk: "plyr__preview-scrubbing--is-shown",
                },
              },
              attributes: {
                v: { ea: "data-plyr-provider", id: "data-plyr-embed-id" },
              },
              Wa: { enabled: !1, Vg: "", he: "" },
              Z: { enabled: !1, src: "" },
              Ta: {
                fm: !1,
                ho: !1,
                title: !1,
                speed: !0,
                Zo: !1,
                Xa: !0,
                referrerPolicy: null,
                cf: !1,
              },
              pb: { rel: 0, Ho: 0, un: 3, Bn: 1, Xa: !0, Lj: !1 },
            },
            Tb = { Hd: "html5", pb: "youtube", Ta: "vimeo" },
            rd = (function () {
              function c() {
                var b =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                Ib(this, c);
                (this.enabled = window.console && b) &&
                  this.log("Debugging enabled");
              }
              return (
                nb(c, [
                  {
                    key: "log",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.log, console)
                        : M;
                    },
                  },
                  {
                    key: "warn",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.warn, console)
                        : M;
                    },
                  },
                  {
                    key: "error",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.error, console)
                        : M;
                    },
                  },
                ]),
                c
              );
            })(),
            sd = (function () {
              function c(b) {
                var e = this;
                Ib(this, c);
                this.h = b;
                this.prefix = c.prefix;
                this.Wd = c.Wd;
                this.hf = { x: 0, y: 0 };
                this.Nc = "force" === b.g.N.Kc;
                this.h.elements.N =
                  b.g.N.i &&
                  (function (k, r) {
                    return (
                      Element.prototype.closest ||
                      function () {
                        var t = this;
                        do {
                          if (eb.matches(t, r)) {
                            return t;
                          }
                          t = t.parentElement || t.parentNode;
                        } while (null !== t && 1 === t.nodeType);
                        return null;
                      }
                    ).call(k, r);
                  })(this.h.elements.i, b.g.N.i);
                Da.call(
                  this.h,
                  document,
                  "ms" === this.prefix
                    ? "MSFullscreenChange"
                    : "".concat(this.prefix, "fullscreenchange"),
                  function () {
                    e.Rd();
                  }
                );
                Da.call(this.h, this.h.elements.i, "dblclick", function (k) {
                  (w(e.h.elements.controls) &&
                    e.h.elements.controls.contains(k.target)) ||
                    e.h.Ja.X(k, e.toggle, "fullscreen");
                });
                Da.call(this, this.h.elements.i, "keydown", function (k) {
                  return e.$o(k);
                });
                this.update();
              }
              return (
                nb(
                  c,
                  [
                    {
                      key: "onChange",
                      value: function () {
                        if (this.enabled) {
                          var b = this.h.elements.buttons.N;
                          w(b) && (b.pressed = this.active);
                          ha.call(
                            this.h,
                            this.target === this.h.media
                              ? this.target
                              : this.h.elements.i,
                            this.active ? "enterfullscreen" : "exitfullscreen",
                            !0
                          );
                        }
                      },
                    },
                    {
                      key: "toggleFallback",
                      value: function () {
                        var b =
                          0 < arguments.length &&
                          void 0 !== arguments[0] &&
                          arguments[0];
                        if (
                          (b
                            ? (this.hf = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0,
                              })
                            : window.scrollTo(this.hf.x, this.hf.y),
                          (document.body.style.overflow = b ? "hidden" : ""),
                          xa(this.target, this.h.g.u.N.Kc, b),
                          xb)
                        ) {
                          var e = document.head.querySelector(
                            'meta[name="viewport"]'
                          );
                          e ||
                            (e = document.createElement("meta")).setAttribute(
                              "name",
                              "viewport"
                            );
                          var k =
                            La(e.content) &&
                            e.content.includes("viewport-fit=cover");
                          b
                            ? ((this.ni = !k),
                              k ||
                                (e.content += ",".concat("viewport-fit=cover")))
                            : this.ni &&
                              (e.content = e.content
                                .split(",")
                                .filter(function (r) {
                                  return "viewport-fit=cover" !== r.trim();
                                })
                                .join(","));
                        }
                        this.Rd();
                      },
                    },
                    {
                      key: "trapFocus",
                      value: function (b) {
                        if (
                          !xb &&
                          this.active &&
                          "Tab" === b.key &&
                          9 === b.keyCode
                        ) {
                          var e = document.activeElement,
                            k = Wb.call(
                              this.h,
                              "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                            ),
                            r = Va(k, 1)[0];
                          k = k[k.length - 1];
                          e !== k || b.shiftKey
                            ? e === r &&
                              b.shiftKey &&
                              (k.focus(), b.preventDefault())
                            : (r.focus(), b.preventDefault());
                        }
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        var b;
                        this.enabled
                          ? ((b = this.Nc
                              ? "Fallback (forced)"
                              : c.Zc
                              ? "Native"
                              : "Fallback"),
                            this.h.debug.log(
                              "".concat(b, " fullscreen enabled")
                            ))
                          : this.h.debug.log(
                              "Fullscreen not supported and fallback disabled"
                            );
                        xa(
                          this.h.elements.i,
                          this.h.g.u.N.enabled,
                          this.enabled
                        );
                      },
                    },
                    {
                      key: "enter",
                      value: function () {
                        this.enabled &&
                          (xb && this.h.g.N.Sc
                            ? this.target.webkitEnterFullscreen()
                            : !c.Zc || this.Nc
                            ? this.dl(!0)
                            : this.prefix
                            ? aa(this.prefix) ||
                              this.target[
                                ""
                                  .concat(this.prefix, "Request")
                                  .concat(this.Wd)
                              ]()
                            : this.target.requestFullscreen({
                                navigationUI: "hide",
                              }));
                      },
                    },
                    {
                      key: "exit",
                      value: function () {
                        if (this.enabled) {
                          if (xb && this.h.g.N.Sc) {
                            this.target.webkitExitFullscreen(),
                              Cb(this.h.play());
                          } else {
                            if (!c.Zc || this.Nc) {
                              this.dl(!1);
                            } else {
                              if (this.prefix) {
                                if (!aa(this.prefix)) {
                                  document[
                                    ""
                                      .concat(this.prefix)
                                      .concat(
                                        "moz" === this.prefix
                                          ? "Cancel"
                                          : "Exit"
                                      )
                                      .concat(this.Wd)
                                  ]();
                                }
                              } else {
                                (document.gm || document.exitFullscreen).call(
                                  document
                                );
                              }
                            }
                          }
                        }
                      },
                    },
                    {
                      key: "toggle",
                      value: function () {
                        this.active ? this.Fm() : this.Dm();
                      },
                    },
                    {
                      key: "usingNative",
                      get: function () {
                        return c.Zc && !this.Nc;
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return (
                          (c.Zc || this.h.g.N.Kc) &&
                          this.h.g.N.enabled &&
                          this.h.supported.ja &&
                          this.h.Ba
                        );
                      },
                    },
                    {
                      key: "active",
                      get: function () {
                        if (!this.enabled) {
                          return !1;
                        }
                        if (!c.Zc || this.Nc) {
                          return sc(this.target, this.h.g.u.N.Kc);
                        }
                        var b = this.prefix
                          ? document[
                              "".concat(this.prefix).concat(this.Wd, "Element")
                            ]
                          : document.fullscreenElement;
                        return b && b.shadowRoot
                          ? b === this.target.getRootNode().host
                          : b === this.target;
                      },
                    },
                    {
                      key: "target",
                      get: function () {
                        return xb && this.h.g.N.Sc
                          ? this.h.media
                          : this.h.elements.N || this.h.elements.i;
                      },
                    },
                  ],
                  [
                    {
                      key: "native",
                      get: function () {
                        return !!(
                          document.fullscreenEnabled ||
                          document.webkitFullscreenEnabled ||
                          document.mozFullScreenEnabled ||
                          document.msFullscreenEnabled
                        );
                      },
                    },
                    {
                      key: "prefix",
                      get: function () {
                        if (Sa(document.exitFullscreen)) {
                          return "";
                        }
                        var b = "";
                        return (
                          ["webkit", "moz", "ms"].some(function (e) {
                            return !(
                              (!Sa(document["".concat(e, "ExitFullscreen")]) &&
                                !Sa(
                                  document["".concat(e, "CancelFullScreen")]
                                )) ||
                              ((b = e), 0)
                            );
                          }),
                          b
                        );
                      },
                    },
                    {
                      key: "property",
                      get: function () {
                        return "moz" === this.prefix
                          ? "FullScreen"
                          : "Fullscreen";
                      },
                    },
                  ]
                ),
                c
              );
            })(),
            Na = {
              Lf: function () {
                xa(this.elements.i, this.g.K.i.replace(".", ""), !0);
                xa(this.elements.i, this.g.u.hl, this.supported.ja);
              },
              ie: function () {
                0 < arguments.length &&
                void 0 !== arguments[0] &&
                arguments[0] &&
                this.U
                  ? this.media.setAttribute("controls", "")
                  : this.media.removeAttribute("controls");
              },
              rd: function () {
                var c = this;
                if ((this.Ja.media(), !this.supported.ja)) {
                  return (
                    this.debug.warn(
                      "Basic support only for "
                        .concat(this.ea, " ")
                        .concat(this.type)
                    ),
                    void Na.ie.call(this, !0)
                  );
                }
                w(this.elements.controls) ||
                  (T.qj.call(this), this.Ja.controls());
                Na.ie.call(this);
                this.U && Aa.ya.call(this);
                this.speed = this.quality = this.loop = this.muted = this.volume = null;
                T.Fh.call(this);
                T.vf.call(this);
                Na.Yf.call(this);
                xa(
                  this.elements.i,
                  this.g.u.qa.supported,
                  ab.qa && this.U && this.Ba
                );
                xa(this.elements.i, this.g.u.Ha.supported, ab.Ha && this.U);
                xa(this.elements.i, this.g.u.sj, xb);
                xa(this.elements.i, this.g.u.Dg, this.Sa);
                this.ready = !0;
                setTimeout(function () {
                  ha.call(c, c.media, "ready");
                }, 0);
                Na.lf.call(this);
                this.poster &&
                  Na.$d.call(this, this.poster, !1)["catch"](function () {});
                this.g.duration && T.gg.call(this);
              },
              lf: function () {
                var c = N("play", this.g);
                if (
                  (La(this.g.title) &&
                    !aa(this.g.title) &&
                    (c += ", ".concat(this.g.title)),
                  Array.from(this.elements.buttons.play || []).forEach(
                    function (r) {
                      r.setAttribute("aria-label", c);
                    }
                  ),
                  this.Tc)
                ) {
                  var b = this.elements.i.querySelector("iframe");
                  if (w(b)) {
                    var e = aa(this.g.title) ? "video" : this.g.title,
                      k = N("frameTitle", this.g);
                    b.setAttribute("title", k.replace("{title}", e));
                  }
                }
              },
              xh: function (c) {
                xa(this.elements.i, this.g.u.$j, c);
              },
              $d: function (c) {
                var b = this;
                return (1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  !arguments[1]) ||
                  !this.poster
                  ? (this.media.setAttribute("data-poster", c),
                    this.elements.poster.removeAttribute("hidden"),
                    Pc.call(this)
                      .then(function () {
                        return Ja(c);
                      })
                      ["catch"](function (e) {
                        throw (c === b.poster && Na.xh.call(b, !1), e);
                      })
                      .then(function () {
                        if (c !== b.poster) {
                          throw Error(
                            "setPoster cancelled by later call to setPoster"
                          );
                        }
                      })
                      .then(function () {
                        return (
                          Object.assign(b.elements.poster.style, {
                            backgroundImage: "url('".concat(c, "')"),
                            backgroundSize: "",
                          }),
                          Na.xh.call(b, !0),
                          c
                        );
                      }))
                  : Promise.reject(Error("Poster already set"));
              },
              Yf: function (c) {
                var b = this;
                xa(this.elements.i, this.g.u.Ca, this.Ca);
                xa(this.elements.i, this.g.u.paused, this.paused);
                xa(this.elements.i, this.g.u.stopped, this.stopped);
                Array.from(this.elements.buttons.play || []).forEach(function (
                  e
                ) {
                  Object.assign(e, { pressed: b.Ca });
                  e.setAttribute("aria-label", N(b.Ca ? "pause" : "play", b.g));
                });
                (ra(c, Event) && "timeupdate" === c.type) || Na.Rb.call(this);
              },
              ii: function (c) {
                var b = this;
                this.hb = ["stalled", "waiting"].includes(c.type);
                clearTimeout(this.fa.hb);
                this.fa.hb = setTimeout(
                  function () {
                    xa(b.elements.i, b.g.u.hb, b.hb);
                    Na.Rb.call(b);
                  },
                  this.hb ? 250 : 0
                );
              },
              Rb: function (c) {
                var b = this.elements.controls;
                if (b && this.g.Pc) {
                  var e = this.Sa && this.Od + 2e3 > Date.now();
                  this.Rb(
                    !!(c || this.hb || this.paused || b.pressed || b.Qc || e)
                  );
                }
              },
              Ej: function () {
                var c = this;
                Object.values(dc({}, this.media.style))
                  .filter(function (b) {
                    return !aa(b) && La(b) && b.startsWith("--plyr");
                  })
                  .forEach(function (b) {
                    c.elements.i.style.setProperty(
                      b,
                      c.media.style.getPropertyValue(b)
                    );
                    c.media.style.removeProperty(b);
                  });
                aa(this.media.style) && this.media.removeAttribute("style");
              },
            },
            td = (function () {
              function c(b) {
                Ib(this, c);
                this.h = b;
                this.Fg = this.og = this.Ye = null;
                this.Re = this.Re.bind(this);
                this.Ab = this.Ab.bind(this);
                this.nh = this.nh.bind(this);
                this.kg = this.kg.bind(this);
              }
              return (
                nb(c, [
                  {
                    key: "handleKey",
                    value: function (b) {
                      var e = this.h,
                        k = e.elements,
                        r = b.keyCode ? b.keyCode : b.which,
                        t = "keydown" === b.type,
                        y = t && r === this.Ye;
                      if (
                        !(b.altKey || b.ctrlKey || b.metaKey || b.shiftKey) &&
                        g(r)
                      ) {
                        if (t) {
                          t = document.activeElement;
                          if (w(t)) {
                            var z = e.g.K.Mi;
                            if (
                              (t !== k.inputs.seek && eb(t, z)) ||
                              (32 === b.which &&
                                eb(t, 'button, [role^="menuitem"]'))
                            ) {
                              return;
                            }
                          }
                          switch (
                            ([
                              32,
                              37,
                              38,
                              39,
                              40,
                              48,
                              49,
                              50,
                              51,
                              52,
                              53,
                              54,
                              56,
                              57,
                              67,
                              70,
                              73,
                              75,
                              76,
                              77,
                              79,
                            ].includes(r) &&
                              (b.preventDefault(), b.stopPropagation()),
                            r)
                          ) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                              y ||
                                (e.currentTime = (e.duration / 10) * (r - 48));
                              break;
                            case 32:
                            case 75:
                              y || Cb(e.wh());
                              break;
                            case 38:
                              e.xg(0.1);
                              break;
                            case 40:
                              e.qm(0.1);
                              break;
                            case 77:
                              y || (e.muted = !e.muted);
                              break;
                            case 39:
                              e.forward();
                              break;
                            case 37:
                              e.Ob();
                              break;
                            case 70:
                              e.N.toggle();
                              break;
                            case 67:
                              y || e.bl();
                              break;
                            case 76:
                              e.loop = !e.loop;
                          }
                          27 === r && !e.N.ll && e.N.active && e.N.toggle();
                          this.Ye = r;
                        } else {
                          this.Ye = null;
                        }
                      }
                    },
                  },
                  {
                    key: "toggleMenu",
                    value: function (b) {
                      T.Ab.call(this.h, b);
                    },
                  },
                  {
                    key: "firstTouch",
                    value: function () {
                      var b = this.h,
                        e = b.elements;
                      b.Sa = !0;
                      xa(e.i, b.g.u.Dg, !0);
                    },
                  },
                  {
                    key: "setTabFocus",
                    value: function (b) {
                      var e = this.h,
                        k = e.elements;
                      if (
                        (clearTimeout(this.og),
                        "keydown" !== b.type || 9 === b.which)
                      ) {
                        "keydown" === b.type && (this.Fg = b.timeStamp);
                        var r,
                          t = 20 >= b.timeStamp - this.Fg;
                        ("focus" !== b.type || t) &&
                          ((r = e.g.u.tf),
                          xa(Wb.call(e, ".".concat(r)), r, !1),
                          "focusout" !== b.type &&
                            (this.og = setTimeout(function () {
                              k.i.contains(document.activeElement) &&
                                xa(document.activeElement, e.g.u.tf, !0);
                            }, 10)));
                      }
                    },
                  },
                  {
                    key: "global",
                    value: function () {
                      var b =
                          !(0 < arguments.length && void 0 !== arguments[0]) ||
                          arguments[0],
                        e = this.h;
                      e.g.keyboard.global &&
                        Ob.call(e, window, "keydown keyup", this.Re, b, !1);
                      Ob.call(e, document.body, "click", this.Ab, b);
                      Pb.call(e, document.body, "touchstart", this.kg);
                      Ob.call(
                        e,
                        document.body,
                        "keydown focus blur focusout",
                        this.nh,
                        b,
                        !1,
                        !0
                      );
                    },
                  },
                  {
                    key: "container",
                    value: function () {
                      function b() {
                        clearTimeout(y.bh);
                        y.bh = setTimeout(e, 50);
                      }
                      function e(z) {
                        if (!z) {
                          return Qb.call(k);
                        }
                        z = t.i.getBoundingClientRect();
                        return Qb.call(
                          k,
                          "".concat(z.width, ":").concat(z.height)
                        );
                      }
                      var k = this.h,
                        r = k.g,
                        t = k.elements,
                        y = k.fa;
                      !r.keyboard.global &&
                        r.keyboard.focused &&
                        Da.call(k, t.i, "keydown keyup", this.Re, !1);
                      Da.call(
                        k,
                        t.i,
                        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                        function (z) {
                          var K = t.controls;
                          K &&
                            "enterfullscreen" === z.type &&
                            ((K.pressed = !1), (K.Qc = !1));
                          K = 0;
                          ["touchstart", "touchmove", "mousemove"].includes(
                            z.type
                          ) && (Na.Rb.call(k, !0), (K = k.Sa ? 3e3 : 2e3));
                          clearTimeout(y.controls);
                          y.controls = setTimeout(function () {
                            return Na.Rb.call(k, !1);
                          }, K);
                        }
                      );
                      Da.call(
                        k,
                        t.i,
                        "enterfullscreen exitfullscreen",
                        function (z) {
                          var K = k.N,
                            ba = K.ll;
                          K.target !== t.i ||
                            (!k.Tc && aa(k.g.ratio)) ||
                            ((z = "enterfullscreen" === z.type),
                            (K = e(z)),
                            K.padding,
                            (function (V, qa, ia) {
                              if (k.Nb && !k.g.Ta.cf) {
                                qa = k.elements.ua.firstChild;
                                V = Va(V, 2)[1];
                                var na = Va(Db.call(k), 2),
                                  O = na[0];
                                na = na[1];
                                qa.style.maxWidth = ia
                                  ? "".concat((V / na) * O, "px")
                                  : null;
                                qa.style.margin = ia ? "0 auto" : null;
                              }
                            })(K.ratio, 0, z),
                            z &&
                              setTimeout(function () {
                                return pc(t.i);
                              }, 100),
                            ba ||
                              (z
                                ? Da.call(k, window, "resize", b)
                                : qb.call(k, window, "resize", b)));
                        }
                      );
                    },
                  },
                  {
                    key: "media",
                    value: function () {
                      var b = this,
                        e = this.h,
                        k = e.elements;
                      if (
                        (Da.call(
                          e,
                          e.media,
                          "timeupdate seeking seeked",
                          function (t) {
                            return T.vf.call(e, t);
                          }
                        ),
                        Da.call(
                          e,
                          e.media,
                          "durationchange loadeddata loadedmetadata",
                          function (t) {
                            return T.gg.call(e, t);
                          }
                        ),
                        Da.call(e, e.media, "ended", function () {
                          e.U && e.Ba && e.g.rk && (e.mb(), e.pause());
                        }),
                        Da.call(
                          e,
                          e.media,
                          "progress playing seeking seeked",
                          function (t) {
                            return T.Dh.call(e, t);
                          }
                        ),
                        Da.call(e, e.media, "volumechange", function (t) {
                          return T.Fh.call(e, t);
                        }),
                        Da.call(
                          e,
                          e.media,
                          "playing play pause ended emptied timeupdate",
                          function (t) {
                            return Na.Yf.call(e, t);
                          }
                        ),
                        Da.call(
                          e,
                          e.media,
                          "waiting canplay seeked playing",
                          function (t) {
                            return Na.ii.call(e, t);
                          }
                        ),
                        e.supported.ja && e.g.ri && !e.Bg)
                      ) {
                        var r = e.elements.i.querySelector(
                          ".".concat(e.g.u.video)
                        );
                        if (!w(r)) {
                          return;
                        }
                        Da.call(e, k.i, "click", function (t) {
                          ([k.i, r].includes(t.target) ||
                            r.contains(t.target)) &&
                            ((e.Sa && e.g.Pc) ||
                              (e.ended
                                ? (b.X(t, e.mb, "restart"),
                                  b.X(
                                    t,
                                    function () {
                                      Cb(e.play());
                                    },
                                    "play"
                                  ))
                                : b.X(
                                    t,
                                    function () {
                                      Cb(e.wh());
                                    },
                                    "play"
                                  )));
                        });
                      }
                      e.supported.ja &&
                        e.g.Fi &&
                        Da.call(
                          e,
                          k.ua,
                          "contextmenu",
                          function (t) {
                            t.preventDefault();
                          },
                          !1
                        );
                      Da.call(e, e.media, "volumechange", function () {
                        e.storage.set({ volume: e.volume, muted: e.muted });
                      });
                      Da.call(e, e.media, "ratechange", function () {
                        T.Ub.call(e, "speed");
                        e.storage.set({ speed: e.speed });
                      });
                      Da.call(e, e.media, "qualitychange", function (t) {
                        T.Ub.call(e, "quality", null, t.detail.quality);
                      });
                      Da.call(e, e.media, "ready qualitychange", function () {
                        T.jf.call(e);
                      });
                      Da.call(
                        e,
                        e.media,
                        e.g.va.concat(["keyup", "keydown"]).join(" "),
                        function (t) {
                          var y = t.detail;
                          y = void 0 === y ? {} : y;
                          "error" === t.type && (y = e.media.error);
                          ha.call(e, k.i, t.type, !0, y);
                        }
                      );
                    },
                  },
                  {
                    key: "proxy",
                    value: function (b, e, k) {
                      var r = this.h;
                      k = r.g.Ja[k];
                      var t = !0;
                      Sa(k) && (t = k.call(r, b));
                      !1 !== t && Sa(e) && e.call(r, b);
                    },
                  },
                  {
                    key: "bind",
                    value: function (b, e, k, r) {
                      var t = this,
                        y =
                          !(4 < arguments.length && void 0 !== arguments[4]) ||
                          arguments[4],
                        z = this.h,
                        K = Sa(z.g.Ja[r]);
                      Da.call(
                        z,
                        b,
                        e,
                        function (ba) {
                          return t.X(ba, k, r);
                        },
                        y && !K
                      );
                    },
                  },
                  {
                    key: "controls",
                    value: function () {
                      var b = this,
                        e = this.h,
                        k = e.elements,
                        r = lb ? "change" : "input";
                      if (
                        (k.buttons.play &&
                          Array.from(k.buttons.play).forEach(function (y) {
                            b.bind(
                              y,
                              "click",
                              function () {
                                Cb(e.wh());
                              },
                              "play"
                            );
                          }),
                        this.bind(k.buttons.mb, "click", e.mb, "restart"),
                        this.bind(
                          k.buttons.Ob,
                          "click",
                          function () {
                            e.Od = Date.now();
                            e.Ob();
                          },
                          "rewind"
                        ),
                        this.bind(
                          k.buttons.Lc,
                          "click",
                          function () {
                            e.Od = Date.now();
                            e.forward();
                          },
                          "fastForward"
                        ),
                        this.bind(
                          k.buttons.tb,
                          "click",
                          function () {
                            e.muted = !e.muted;
                          },
                          "mute"
                        ),
                        this.bind(k.buttons.B, "click", function () {
                          return e.bl();
                        }),
                        this.bind(
                          k.buttons.download,
                          "click",
                          function () {
                            ha.call(e, e.media, "download");
                          },
                          "download"
                        ),
                        this.bind(
                          k.buttons.N,
                          "click",
                          function () {
                            e.N.toggle();
                          },
                          "fullscreen"
                        ),
                        this.bind(
                          k.buttons.qa,
                          "click",
                          function () {
                            e.qa = "toggle";
                          },
                          "pip"
                        ),
                        this.bind(k.buttons.Ha, "click", e.Ha, "airplay"),
                        this.bind(
                          k.buttons.J,
                          "click",
                          function (y) {
                            y.stopPropagation();
                            y.preventDefault();
                            T.Ab.call(e, y);
                          },
                          null,
                          !1
                        ),
                        this.bind(
                          k.buttons.J,
                          "keyup",
                          function (y) {
                            var z = y.which;
                            [13, 32].includes(z) &&
                              (13 !== z
                                ? (y.preventDefault(),
                                  y.stopPropagation(),
                                  T.Ab.call(e, y))
                                : T.Ad.call(e, null, !0));
                          },
                          null,
                          !1
                        ),
                        this.bind(k.J.ib, "keydown", function (y) {
                          27 === y.which && T.Ab.call(e, y);
                        }),
                        this.bind(
                          k.inputs.seek,
                          "mousedown mousemove",
                          function (y) {
                            var z = k.progress.getBoundingClientRect();
                            y.currentTarget.setAttribute(
                              "seek-value",
                              (100 / z.width) * (y.pageX - z.left)
                            );
                          }
                        ),
                        this.bind(
                          k.inputs.seek,
                          "mousedown mouseup keydown keyup touchstart touchend",
                          function (y) {
                            var z = y.currentTarget,
                              K = y.keyCode ? y.keyCode : y.which;
                            (ra(y, KeyboardEvent) && 39 !== K && 37 !== K) ||
                              ((e.Od = Date.now()),
                              (K = z.hasAttribute("play-on-seeked")),
                              (y = ["mouseup", "touchend", "keyup"].includes(
                                y.type
                              )),
                              K && y
                                ? (z.removeAttribute("play-on-seeked"),
                                  Cb(e.play()))
                                : !y &&
                                  e.Ca &&
                                  (z.setAttribute("play-on-seeked", ""),
                                  e.pause()));
                          }
                        ),
                        xb)
                      ) {
                        var t = Wb.call(e, 'input[type="range"]');
                        Array.from(t).forEach(function (y) {
                          return b.bind(y, r, function (z) {
                            return pc(z.target);
                          });
                        });
                      }
                      this.bind(
                        k.inputs.seek,
                        r,
                        function (y) {
                          y = y.currentTarget;
                          var z = y.getAttribute("seek-value");
                          aa(z) && (z = y.value);
                          y.removeAttribute("seek-value");
                          e.currentTime = (z / y.max) * e.duration;
                        },
                        "seek"
                      );
                      this.bind(
                        k.progress,
                        "mouseenter mouseleave mousemove",
                        function (y) {
                          return T.Eh.call(e, y);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mousemove touchmove",
                        function (y) {
                          var z = e.Z;
                          z && z.loaded && z.Mo(y);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mouseleave touchend click",
                        function () {
                          var y = e.Z;
                          y && y.loaded && y.Bm(!1, !0);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mousedown touchstart",
                        function (y) {
                          var z = e.Z;
                          z && z.loaded && z.Oo(y);
                        }
                      );
                      this.bind(k.progress, "mouseup touchend", function (y) {
                        var z = e.Z;
                        z && z.loaded && z.Cm(y);
                      });
                      $c &&
                        Array.from(Wb.call(e, 'input[type="range"]')).forEach(
                          function (y) {
                            b.bind(y, "input", function (z) {
                              return T.Cf.call(e, z.target);
                            });
                          }
                        );
                      e.g.el &&
                        !w(k.display.duration) &&
                        this.bind(k.display.currentTime, "click", function () {
                          0 !== e.currentTime &&
                            ((e.g.Ld = !e.g.Ld), T.vf.call(e));
                        });
                      this.bind(
                        k.inputs.volume,
                        r,
                        function (y) {
                          e.volume = y.target.value;
                        },
                        "volume"
                      );
                      this.bind(
                        k.controls,
                        "mouseenter mouseleave",
                        function (y) {
                          k.controls.Qc = !e.Sa && "mouseenter" === y.type;
                        }
                      );
                      k.N &&
                        Array.from(k.N.children)
                          .filter(function (y) {
                            return !y.contains(k.i);
                          })
                          .forEach(function (y) {
                            b.bind(y, "mouseenter mouseleave", function (z) {
                              k.controls.Qc = !e.Sa && "mouseenter" === z.type;
                            });
                          });
                      this.bind(
                        k.controls,
                        "mousedown mouseup touchstart touchend touchcancel",
                        function (y) {
                          k.controls.pressed = [
                            "mousedown",
                            "touchstart",
                          ].includes(y.type);
                        }
                      );
                      this.bind(k.controls, "focusin", function () {
                        var y = e.g,
                          z = e.fa;
                        xa(k.controls, y.u.Lg, !0);
                        Na.Rb.call(e, !0);
                        setTimeout(function () {
                          xa(k.controls, y.u.Lg, !1);
                        }, 0);
                        var K = b.Sa ? 3e3 : 4e3;
                        clearTimeout(z.controls);
                        z.controls = setTimeout(function () {
                          return Na.Rb.call(e, !1);
                        }, K);
                      });
                      this.bind(
                        k.inputs.volume,
                        "wheel",
                        function (y) {
                          var z = y.mp,
                            K = Va(
                              [y.deltaX, -y.deltaY].map(function (V) {
                                return z ? -V : V;
                              }),
                              2
                            ),
                            ba = K[0];
                          K = K[1];
                          ba = Math.sign(Math.abs(ba) > Math.abs(K) ? ba : K);
                          e.xg(ba / 50);
                          K = e.media.volume;
                          ((1 === ba && 1 > K) || (-1 === ba && 0 < K)) &&
                            y.preventDefault();
                        },
                        "volume",
                        !1
                      );
                    },
                  },
                ]),
                c
              );
            })();
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== H || ("undefined" != typeof self && self);
          var ld = (function (c, b) {
              return (
                (function (e) {
                  e.exports = (function () {
                    function k() {}
                    function r(ia, na) {
                      if (ia) {
                        var O = qa[ia];
                        if (((V[ia] = na), O)) {
                          for (; O.length; ) {
                            O[0](ia, na), O.splice(0, 1);
                          }
                        }
                      }
                    }
                    function t(ia, na) {
                      ia.call && (ia = { tc: ia });
                      na.length ? (ia.error || k)(na) : (ia.tc || k)(ia);
                    }
                    function y(ia, na, O, pa) {
                      var va,
                        ta,
                        Ha = document,
                        Ta = O.async,
                        hb = (O.Ln || 0) + 1,
                        kb = O.before || k,
                        Mb = ia.replace(/[\?|#].*$/, ""),
                        Fc = ia.replace(/^(css|img)!/, "");
                      pa = pa || 0;
                      /(^css!|\.css$)/.test(Mb)
                        ? (((ta = Ha.createElement("link")).rel = "stylesheet"),
                          (ta.href = Fc),
                          (va = "hideFocus" in ta) &&
                            ta.relList &&
                            ((va = 0), (ta.rel = "preload"), (ta.as = "style")))
                        : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(Mb)
                        ? ((ta = Ha.createElement("img")).src = Fc)
                        : (((ta = Ha.createElement("script")).src = ia),
                          (ta.async = void 0 === Ta || Ta));
                      ta.onload = ta.onerror = ta.Sn = function (id) {
                        var Gc = id.type[0];
                        if (va) {
                          try {
                            ta.sheet.cssText.length || (Gc = "e");
                          } catch (ud) {
                            18 != ud.code && (Gc = "e");
                          }
                        }
                        if ("e" == Gc) {
                          if ((pa += 1) < hb) {
                            return y(ia, na, O, pa);
                          }
                        } else {
                          if ("preload" == ta.rel && "style" == ta.as) {
                            return (ta.rel = "stylesheet");
                          }
                        }
                        na(ia, Gc, id.defaultPrevented);
                      };
                      !1 !== kb(ia, ta) && Ha.head.appendChild(ta);
                    }
                    function z(ia, na, O) {
                      var pa,
                        va = (ia = ia.push ? ia : [ia]).length,
                        ta = va,
                        Ha = [];
                      var Ta = function (hb, kb, Mb) {
                        if (("e" == kb && Ha.push(hb), "b" == kb)) {
                          if (!Mb) {
                            return;
                          }
                          Ha.push(hb);
                        }
                        --va || na(Ha);
                      };
                      for (pa = 0; pa < ta; pa++) {
                        y(ia[pa], Ta, O);
                      }
                    }
                    function K(ia, na, O) {
                      function pa(Ha, Ta) {
                        z(
                          ia,
                          function (hb) {
                            t(ta, hb);
                            Ha && t({ tc: Ha, error: Ta }, hb);
                            r(va, hb);
                          },
                          ta
                        );
                      }
                      var va, ta;
                      if (
                        (na && na.trim && (va = na),
                        (ta = (va ? O : na) || {}),
                        va)
                      ) {
                        if (va in ba) {
                          throw "LoadJS";
                        }
                        ba[va] = !0;
                      }
                      if (ta.po) {
                        return new Promise(pa);
                      }
                      pa();
                    }
                    var ba = {},
                      V = {},
                      qa = {};
                    return (
                      (K.ready = function (ia, na) {
                        return (
                          (function (O, pa) {
                            O = O.push ? O : [O];
                            var va,
                              ta,
                              Ha = [],
                              Ta = O.length,
                              hb = Ta;
                            for (
                              va = function (Mb, Fc) {
                                Fc.length && Ha.push(Mb);
                                --hb || pa(Ha);
                              };
                              Ta--;

                            ) {
                              var kb = O[Ta];
                              (ta = V[kb])
                                ? va(kb, ta)
                                : (qa[kb] = qa[kb] || []).push(va);
                            }
                          })(ia, function (O) {
                            t(na, O);
                          }),
                          K
                        );
                      }),
                      (K.done = function (ia) {
                        r(ia, []);
                      }),
                      (K.reset = function () {
                        ba = {};
                        V = {};
                        qa = {};
                      }),
                      K
                    );
                  })();
                })((b = { exports: {} })),
                b.exports
              );
            })(),
            Lc = {
              ya: function () {
                var c = this;
                xa(c.elements.ua, c.g.u.v, !0);
                c.options.speed = c.g.speed.options;
                Qb.call(c);
                Lb(window.Rh)
                  ? Lc.ready.call(c)
                  : ua(c.g.urls.Ta.ed)
                      .then(function () {
                        Lc.ready.call(c);
                      })
                      ["catch"](function (b) {
                        c.debug.warn("Vimeo SDK (player.js) failed to load", b);
                      });
              },
              ready: function () {
                var c = this,
                  b = this,
                  e = b.g.Ta,
                  k = e.cf,
                  r = e.referrerPolicy,
                  t = (function (O, pa) {
                    if (null == O) {
                      return {};
                    }
                    var va;
                    if (null == O) {
                      var ta = {};
                    } else {
                      ta = {};
                      var Ha = Object.keys(O);
                      for (va = 0; va < Ha.length; va++) {
                        var Ta = Ha[va];
                        0 <= pa.indexOf(Ta) || (ta[Ta] = O[Ta]);
                      }
                    }
                    if (Object.getOwnPropertySymbols) {
                      for (
                        Ha = Object.getOwnPropertySymbols(O), va = 0;
                        va < Ha.length;
                        va++
                      ) {
                        (Ta = Ha[va]),
                          0 <= pa.indexOf(Ta) ||
                            (Object.prototype.propertyIsEnumerable.call(
                              O,
                              Ta
                            ) &&
                              (ta[Ta] = O[Ta]));
                      }
                    }
                    return ta;
                  })(e, ["premium", "referrerPolicy"]);
                k && Object.assign(t, { controls: !1, Io: !1 });
                t = dd(
                  dc(
                    {
                      loop: b.g.loop.active,
                      autoplay: b.autoplay,
                      muted: b.muted,
                      Pm: "media",
                      Pa: !this.g.N.Sc,
                    },
                    t
                  )
                );
                var y = b.media.getAttribute("src");
                aa(y) && (y = b.media.getAttribute(b.g.attributes.v.id));
                var z;
                y = aa((z = y))
                  ? null
                  : g(Number(z))
                  ? z
                  : z.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                  ? RegExp.$2
                  : z;
                z = la("iframe");
                t = zc(b.g.urls.Ta.kj, y, t);
                (z.setAttribute("src", t),
                z.setAttribute("allowfullscreen", ""),
                z.setAttribute(
                  "allow",
                  "autoplay,fullscreen,picture-in-picture"
                ),
                aa(r) || z.setAttribute("referrerPolicy", r),
                k || !e.Xa)
                  ? (z.setAttribute("data-poster", b.poster),
                    (b.media = rc(z, b.media)))
                  : ((k = la("div", { F: b.g.u.Ni, "data-poster": b.poster })),
                    k.appendChild(z),
                    (b.media = rc(k, b.media)));
                e.Xa ||
                  Sb(zc(b.g.urls.Ta.Xb, t)).then(function (O) {
                    !aa(O) &&
                      O.Yk &&
                      Na.$d.call(b, O.Yk)["catch"](function () {});
                  });
                b.v = new window.Rh.Hf(z, { qd: b.g.qd, muted: b.muted });
                b.media.paused = !0;
                b.media.currentTime = 0;
                b.supported.ja && b.v.vm();
                b.media.play = function () {
                  return nc.call(b, !0), b.v.play();
                };
                b.media.pause = function () {
                  return nc.call(b, !1), b.v.pause();
                };
                b.media.stop = function () {
                  b.pause();
                  b.currentTime = 0;
                };
                var K = b.media.currentTime;
                Object.defineProperty(b.media, "currentTime", {
                  get: function () {
                    return K;
                  },
                  set: function (O) {
                    var pa = b.v,
                      va = b.media,
                      ta = b.volume,
                      Ha = b.paused && !pa.ec;
                    va.seeking = !0;
                    ha.call(b, va, "seeking");
                    Promise.resolve(Ha && pa.Pb(0))
                      .then(function () {
                        return pa.xo(O);
                      })
                      .then(function () {
                        return Ha && pa.pause();
                      })
                      .then(function () {
                        return Ha && pa.Pb(ta);
                      })
                      ["catch"](function () {});
                  },
                });
                var ba = b.g.speed.selected;
                Object.defineProperty(b.media, "playbackRate", {
                  get: function () {
                    return ba;
                  },
                  set: function (O) {
                    b.v
                      .Ck(O)
                      .then(function () {
                        ba = O;
                        ha.call(b, b.media, "ratechange");
                      })
                      ["catch"](function () {
                        b.options.speed = [1];
                      });
                  },
                });
                var V = b.g.volume;
                Object.defineProperty(b.media, "volume", {
                  get: function () {
                    return V;
                  },
                  set: function (O) {
                    b.v.Pb(O).then(function () {
                      V = O;
                      ha.call(b, b.media, "volumechange");
                    });
                  },
                });
                var qa = b.g.muted;
                Object.defineProperty(b.media, "muted", {
                  get: function () {
                    return qa;
                  },
                  set: function (O) {
                    var pa = !!F(O) && O;
                    b.v.Pb(pa ? 0 : b.g.volume).then(function () {
                      qa = pa;
                      ha.call(b, b.media, "volumechange");
                    });
                  },
                });
                var ia,
                  na = b.g.loop;
                Object.defineProperty(b.media, "loop", {
                  get: function () {
                    return na;
                  },
                  set: function (O) {
                    var pa = F(O) ? O : b.g.loop.active;
                    b.v.Bo(pa).then(function () {
                      na = pa;
                    });
                  },
                });
                b.v
                  .fj()
                  .then(function (O) {
                    ia = O;
                    T.jf.call(b);
                  })
                  ["catch"](function (O) {
                    c.debug.warn(O);
                  });
                Object.defineProperty(b.media, "currentSrc", {
                  get: function () {
                    return ia;
                  },
                });
                Object.defineProperty(b.media, "ended", {
                  get: function () {
                    return b.currentTime === b.duration;
                  },
                });
                Promise.all([b.v.fn(), b.v.dn()]).then(function (O) {
                  O = Va(O, 2);
                  b.v.ratio = [O[0], O[1]];
                  Qb.call(c);
                });
                b.v.wo(b.g.qd).then(function (O) {
                  b.g.qd = O;
                });
                b.v.en().then(function (O) {
                  b.g.title = O;
                  Na.lf.call(c);
                });
                b.v.Yi().then(function (O) {
                  K = O;
                  ha.call(b, b.media, "timeupdate");
                });
                b.v.Bd().then(function (O) {
                  b.media.duration = O;
                  ha.call(b, b.media, "durationchange");
                });
                b.v.an().then(function (O) {
                  b.media.textTracks = O;
                  Aa.ya.call(b);
                });
                b.v.A("cuechange", function (O) {
                  O = O.cues;
                  O = (void 0 === O ? [] : O).map(function (pa) {
                    pa = pa.text;
                    var va = document.createDocumentFragment(),
                      ta = document.createElement("div");
                    return (
                      va.appendChild(ta),
                      (ta.innerHTML = pa),
                      va.firstChild.innerText
                    );
                  });
                  Aa.Af.call(b, O);
                });
                b.v.A("loaded", function () {
                  b.v.Ym().then(function (O) {
                    nc.call(b, !O);
                    O || ha.call(b, b.media, "playing");
                  });
                  w(b.v.element) &&
                    b.supported.ja &&
                    b.v.element.setAttribute("tabindex", -1);
                });
                b.v.A("bufferstart", function () {
                  ha.call(b, b.media, "waiting");
                });
                b.v.A("bufferend", function () {
                  ha.call(b, b.media, "playing");
                });
                b.v.A("play", function () {
                  nc.call(b, !0);
                  ha.call(b, b.media, "playing");
                });
                b.v.A("pause", function () {
                  nc.call(b, !1);
                });
                b.v.A("timeupdate", function (O) {
                  b.media.seeking = !1;
                  K = O.ro;
                  ha.call(b, b.media, "timeupdate");
                });
                b.v.A("progress", function (O) {
                  b.media.buffered = O.Vj;
                  ha.call(b, b.media, "progress");
                  1 === parseInt(O.Vj, 10) &&
                    ha.call(b, b.media, "canplaythrough");
                  b.v.Bd().then(function (pa) {
                    pa !== b.media.duration &&
                      ((b.media.duration = pa),
                      ha.call(b, b.media, "durationchange"));
                  });
                });
                b.v.A("seeked", function () {
                  b.media.seeking = !1;
                  ha.call(b, b.media, "seeked");
                });
                b.v.A("ended", function () {
                  b.media.paused = !0;
                  ha.call(b, b.media, "ended");
                });
                b.v.A("error", function (O) {
                  b.media.error = O;
                  ha.call(b, b.media, "error");
                });
                e.Xa &&
                  setTimeout(function () {
                    return Na.rd.call(b);
                  }, 0);
              },
            },
            kc = {
              ya: function () {
                var c = this;
                if (
                  (xa(this.elements.ua, this.g.u.v, !0),
                  Lb(window.If) && Sa(window.If.Hf))
                ) {
                  kc.ready.call(this);
                } else {
                  var b = window.Oj;
                  window.Oj = function () {
                    Sa(b) && b();
                    kc.ready.call(c);
                  };
                  ua(this.g.urls.pb.ed)["catch"](function (e) {
                    c.debug.warn("YouTube API failed to load", e);
                  });
                }
              },
              dj: function (c) {
                var b = this;
                Sb(zc(this.g.urls.pb.Xb, c))
                  .then(function (e) {
                    if (Lb(e)) {
                      var k = e.height,
                        r = e.width;
                      b.g.title = e.title;
                      Na.lf.call(b);
                      b.v.ratio = [r, k];
                    }
                    Qb.call(b);
                  })
                  ["catch"](function () {
                    Qb.call(b);
                  });
              },
              ready: function () {
                var c = this,
                  b = c.g.pb,
                  e = c.media && c.media.getAttribute("id");
                if (aa(e) || !e.startsWith("youtube-")) {
                  e = c.media.getAttribute("src");
                  aa(e) && (e = c.media.getAttribute(this.g.attributes.v.id));
                  var k,
                    r,
                    t = aa((k = e))
                      ? null
                      : k.match(
                          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                        )
                      ? RegExp.$2
                      : k;
                  k = la("div", {
                    id:
                      ((r = c.ea),
                      ""
                        .concat(r, "-")
                        .concat(Math.floor(1e4 * Math.random()))),
                    "data-poster": b.Xa ? c.poster : void 0,
                  });
                  if (((c.media = rc(k, c.media)), b.Xa)) {
                    var y = function (z) {
                      return "https://i.ytimg.com/vi/"
                        .concat(t, "/")
                        .concat(z, "default.jpg");
                    };
                    Ja(y("maxres"), 121)
                      ["catch"](function () {
                        return Ja(y("sd"), 121);
                      })
                      ["catch"](function () {
                        return Ja(y("hq"));
                      })
                      .then(function (z) {
                        return Na.$d.call(c, z.src);
                      })
                      .then(function (z) {
                        z.includes("maxres") ||
                          (c.elements.poster.style.backgroundSize = "cover");
                      })
                      ["catch"](function () {});
                  }
                  c.v = new window.If.Hf(c.media, {
                    kp: t,
                    host: b.Lj
                      ? "https://www.youtube-nocookie.com"
                      : "http:" === window.location.protocol
                      ? "http://www.youtube.com"
                      : void 0,
                    co: Wa(
                      {},
                      {
                        autoplay: c.g.autoplay ? 1 : 0,
                        ug: c.g.ug,
                        controls: c.supported.ja && b.Xa ? 0 : 1,
                        wm: 1,
                        Pa: c.g.N.Sc ? 0 : 1,
                        jm: c.B.active ? 1 : 0,
                        im: c.g.B.language,
                        pp: window ? window.location.href : null,
                      },
                      b
                    ),
                    va: {
                      On: function (z) {
                        c.media.error ||
                          ((z = z.data),
                          (c.media.error = {
                            code: z,
                            message:
                              {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players.",
                              }[z] || "An unknown error occured",
                          }),
                          ha.call(c, c.media, "error"));
                      },
                      Pn: function (z) {
                        c.media.playbackRate = z.target.$i();
                        ha.call(c, c.media, "ratechange");
                      },
                      Qn: function (z) {
                        if (!Sa(c.media.play)) {
                          var K = z.target;
                          kc.dj.call(c, t);
                          c.media.play = function () {
                            Kb.call(c, !0);
                            K.Yj();
                          };
                          c.media.pause = function () {
                            Kb.call(c, !1);
                            K.Zn();
                          };
                          c.media.stop = function () {
                            K.Ok();
                          };
                          c.media.duration = K.Bd();
                          c.media.paused = !0;
                          c.media.currentTime = 0;
                          Object.defineProperty(c.media, "currentTime", {
                            get: function () {
                              return Number(K.Yi());
                            },
                            set: function (qa) {
                              c.paused && !c.v.ec && c.v.tb();
                              c.media.seeking = !0;
                              ha.call(c, c.media, "seeking");
                              K.to(qa);
                            },
                          });
                          Object.defineProperty(c.media, "playbackRate", {
                            get: function () {
                              return K.$i();
                            },
                            set: function (qa) {
                              K.Ck(qa);
                            },
                          });
                          var ba = c.g.volume;
                          Object.defineProperty(c.media, "volume", {
                            get: function () {
                              return ba;
                            },
                            set: function (qa) {
                              ba = qa;
                              K.Pb(100 * ba);
                              ha.call(c, c.media, "volumechange");
                            },
                          });
                          var V = c.g.muted;
                          Object.defineProperty(c.media, "muted", {
                            get: function () {
                              return V;
                            },
                            set: function (qa) {
                              V = qa = F(qa) ? qa : V;
                              K[qa ? "mute" : "unMute"]();
                              K.Pb(100 * ba);
                              ha.call(c, c.media, "volumechange");
                            },
                          });
                          Object.defineProperty(c.media, "currentSrc", {
                            get: function () {
                              return K.fj();
                            },
                          });
                          Object.defineProperty(c.media, "ended", {
                            get: function () {
                              return c.currentTime === c.duration;
                            },
                          });
                          z = K.Tm();
                          c.options.speed = z.filter(function (qa) {
                            return c.g.speed.options.includes(qa);
                          });
                          c.supported.ja &&
                            b.Xa &&
                            c.media.setAttribute("tabindex", -1);
                          ha.call(c, c.media, "timeupdate");
                          ha.call(c, c.media, "durationchange");
                          clearInterval(c.fa.Ae);
                          c.fa.Ae = setInterval(function () {
                            c.media.buffered = K.ej();
                            (null === c.media.Eg ||
                              c.media.Eg < c.media.buffered) &&
                              ha.call(c, c.media, "progress");
                            c.media.Eg = c.media.buffered;
                            1 === c.media.buffered &&
                              (clearInterval(c.fa.Ae),
                              ha.call(c, c.media, "canplaythrough"));
                          }, 200);
                          b.Xa &&
                            setTimeout(function () {
                              return Na.rd.call(c);
                            }, 50);
                        }
                      },
                      Rn: function (z) {
                        var K = z.target;
                        switch (
                          (clearInterval(c.fa.Ca),
                          c.media.seeking &&
                            [1, 2].includes(z.data) &&
                            ((c.media.seeking = !1),
                            ha.call(c, c.media, "seeked")),
                          z.data)
                        ) {
                          case -1:
                            ha.call(c, c.media, "timeupdate");
                            c.media.buffered = K.ej();
                            ha.call(c, c.media, "progress");
                            break;
                          case 0:
                            Kb.call(c, !1);
                            c.media.loop
                              ? (K.Ok(), K.Yj())
                              : ha.call(c, c.media, "ended");
                            break;
                          case 1:
                            b.Xa && !c.g.autoplay && c.media.paused && !c.v.ec
                              ? c.media.pause()
                              : (Kb.call(c, !0),
                                ha.call(c, c.media, "playing"),
                                (c.fa.Ca = setInterval(function () {
                                  ha.call(c, c.media, "timeupdate");
                                }, 50)),
                                c.media.duration !== K.Bd() &&
                                  ((c.media.duration = K.Bd()),
                                  ha.call(c, c.media, "durationchange")));
                            break;
                          case 2:
                            c.muted || c.v.cp();
                            Kb.call(c, !1);
                            break;
                          case 3:
                            ha.call(c, c.media, "waiting");
                        }
                        ha.call(c, c.elements.i, "statechange", !1, {
                          code: z.data,
                        });
                      },
                    },
                  });
                }
              },
            },
            md = (function () {
              function c(b) {
                var e = this;
                Ib(this, c);
                this.h = b;
                this.g = b.g.Wa;
                this.Kd = this.Ca = !1;
                this.elements = { i: null, Hc: null };
                this.Zb = this.nc = this.pa = null;
                this.va = {};
                this.Zf = this.Yd = null;
                this.oc = new Promise(function (k, r) {
                  e.A("loaded", k);
                  e.A("error", r);
                });
                this.load();
              }
              return (
                nb(c, [
                  {
                    key: "load",
                    value: function () {
                      var b = this;
                      this.enabled &&
                        (Lb(window.google) && Lb(window.google.ca)
                          ? this.ready()
                          : ua(this.h.g.urls.gj.ed)
                              .then(function () {
                                b.ready();
                              })
                              ["catch"](function () {
                                b.O(
                                  "error",
                                  Error("Google IMA SDK failed to load")
                                );
                              }));
                    },
                  },
                  {
                    key: "ready",
                    value: function () {
                      var b = this;
                      this.enabled ||
                        (this.pa && this.pa.gb(),
                        this.elements.Hc && this.elements.Hc.gb(),
                        this.elements.i.remove());
                      this.No(12e3, "ready()");
                      this.oc.then(function () {
                        b.pi("onAdsManagerLoaded()");
                      });
                      this.Ja();
                      this.Go();
                    },
                  },
                  {
                    key: "setupIMA",
                    value: function () {
                      var b = this;
                      this.elements.i = la("div", { F: this.h.g.u.Wa });
                      this.h.elements.i.appendChild(this.elements.i);
                      google.ca.J.Fo(google.ca.Ml.Tl.Kl);
                      google.ca.J.Ao(this.h.g.Wa.language);
                      google.ca.J.yo(this.h.g.Pa);
                      this.elements.Hc = new google.ca.Dl(
                        this.elements.i,
                        this.h.media
                      );
                      this.nc = new google.ca.El(this.elements.Hc);
                      this.nc.addEventListener(
                        google.ca.Fl.Ua.vl,
                        function (e) {
                          return b.Nn(e);
                        },
                        !1
                      );
                      this.nc.addEventListener(
                        google.ca.Nh.Ua.Mh,
                        function (e) {
                          return b.$e(e);
                        },
                        !1
                      );
                      this.ah();
                    },
                  },
                  {
                    key: "requestAds",
                    value: function () {
                      var b = this.h.elements.i;
                      try {
                        var e = new google.ca.Hl();
                        e.Yl = this.he;
                        e.xn = b.offsetWidth;
                        e.wn = b.offsetHeight;
                        e.Hn = b.offsetWidth;
                        e.Gn = b.offsetHeight;
                        e.Nm = !1;
                        e.vo(!this.h.muted);
                        this.nc.ah(e);
                      } catch (k) {
                        this.$e(k);
                      }
                    },
                  },
                  {
                    key: "pollCountdown",
                    value: function () {
                      var b = this;
                      if (
                        !(
                          0 < arguments.length &&
                          void 0 !== arguments[0] &&
                          arguments[0]
                        )
                      ) {
                        return (
                          clearInterval(this.Zf),
                          void this.elements.i.removeAttribute(
                            "data-badge-text"
                          )
                        );
                      }
                      this.Zf = setInterval(function () {
                        var e = hc(Math.max(b.pa.Zm(), 0));
                        e = ""
                          .concat(N("advertisement", b.h.g), " - ")
                          .concat(e);
                        b.elements.i.setAttribute("data-badge-text", e);
                      }, 100);
                    },
                  },
                  {
                    key: "onAdsManagerLoaded",
                    value: function (b) {
                      var e = this;
                      if (this.enabled) {
                        var k = new google.ca.Gl();
                        k.oo = !0;
                        k.zm = !0;
                        this.pa = b.Sm(this.h, k);
                        this.Zb = this.pa.Um();
                        this.pa.addEventListener(
                          google.ca.Nh.Ua.Mh,
                          function (r) {
                            return e.$e(r);
                          }
                        );
                        Object.keys(google.ca.Cb.Ua).forEach(function (r) {
                          e.pa.addEventListener(
                            google.ca.Cb.Ua[r],
                            function (t) {
                              return e.Mn(t);
                            }
                          );
                        });
                        this.O("loaded");
                      }
                    },
                  },
                  {
                    key: "addCuePoints",
                    value: function () {
                      var b = this;
                      aa(this.Zb) ||
                        this.Zb.forEach(function (e) {
                          if (0 !== e && -1 !== e && e < b.h.duration) {
                            var k = b.h.elements.progress;
                            if (w(k)) {
                              e *= 100 / b.h.duration;
                              var r = la("span", { F: b.h.g.u.cues });
                              r.style.left = "".concat(e.toString(), "%");
                              k.appendChild(r);
                            }
                          }
                        });
                    },
                  },
                  {
                    key: "onAdEvent",
                    value: function (b) {
                      var e = this.h.elements.i,
                        k = b.Qm(),
                        r = b.Rm();
                      ha.call(
                        this.h,
                        this.h.media,
                        "ads".concat(b.type.replace(/_/g, "").toLowerCase())
                      );
                      switch (b.type) {
                        case google.ca.Cb.Ua.Nl:
                          this.O("loaded");
                          this.Zj(!0);
                          k.sn() ||
                            ((k.width = e.offsetWidth),
                            (k.height = e.offsetHeight));
                          break;
                        case google.ca.Cb.Ua.Rl:
                          this.pa.Pb(this.h.volume);
                          break;
                        case google.ca.Cb.Ua.wl:
                          this.h.ended ? this.zj() : this.nc.si();
                          break;
                        case google.ca.Cb.Ua.Il:
                          this.Yn();
                          break;
                        case google.ca.Cb.Ua.Jl:
                          this.Zj();
                          this.eh();
                          break;
                        case google.ca.Cb.Ua.Ol:
                          r.Th &&
                            this.h.debug.warn(
                              "Non-fatal ad error: ".concat(r.Th.Xm())
                            );
                      }
                    },
                  },
                  {
                    key: "onAdError",
                    value: function (b) {
                      this.cancel();
                      this.h.debug.warn("Ads error", b);
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var b,
                        e = this,
                        k = this.h.elements.i;
                      this.h.A("canplay", function () {
                        e.$l();
                      });
                      this.h.A("ended", function () {
                        e.nc.si();
                      });
                      this.h.A("timeupdate", function () {
                        b = e.h.currentTime;
                      });
                      this.h.A("seeked", function () {
                        var r = e.h.currentTime;
                        aa(e.Zb) ||
                          e.Zb.forEach(function (t, y) {
                            b < t && t < r && (e.pa.xm(), e.Zb.splice(y, 1));
                          });
                      });
                      window.addEventListener("resize", function () {
                        e.pa &&
                          e.pa.resize(
                            k.offsetWidth,
                            k.offsetHeight,
                            google.ca.Qh.Oh
                          );
                      });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var b = this,
                        e = this.h.elements.i;
                      this.oc || this.eh();
                      this.oc
                        .then(function () {
                          b.pa.Pb(b.h.volume);
                          b.elements.Hc.qn();
                          try {
                            b.Kd ||
                              (b.pa.Ya(
                                e.offsetWidth,
                                e.offsetHeight,
                                google.ca.Qh.Oh
                              ),
                              b.pa.start()),
                              (b.Kd = !0);
                          } catch (k) {
                            b.$e(k);
                          }
                        })
                        ["catch"](function () {});
                    },
                  },
                  {
                    key: "resumeContent",
                    value: function () {
                      this.elements.i.style.zIndex = "";
                      this.Ca = !1;
                      Cb(this.h.media.play());
                    },
                  },
                  {
                    key: "pauseContent",
                    value: function () {
                      this.elements.i.style.zIndex = 3;
                      this.Ca = !0;
                      this.h.media.pause();
                    },
                  },
                  {
                    key: "cancel",
                    value: function () {
                      this.Kd && this.eh();
                      this.O("error");
                      this.zj();
                    },
                  },
                  {
                    key: "loadAds",
                    value: function () {
                      var b = this;
                      this.oc
                        .then(function () {
                          b.pa && b.pa.gb();
                          b.oc = new Promise(function (e) {
                            b.A("loaded", e);
                            b.h.debug.log(b.pa);
                          });
                          b.Kd = !1;
                          b.ah();
                        })
                        ["catch"](function () {});
                    },
                  },
                  {
                    key: "trigger",
                    value: function (b) {
                      for (
                        var e = this,
                          k = arguments.length,
                          r = Array(1 < k ? k - 1 : 0),
                          t = 1;
                        t < k;
                        t++
                      ) {
                        r[t - 1] = arguments[t];
                      }
                      k = this.va[b];
                      Ua(k) &&
                        k.forEach(function (y) {
                          Sa(y) && y.apply(e, r);
                        });
                    },
                  },
                  {
                    key: "on",
                    value: function (b, e) {
                      return (
                        Ua(this.va[b]) || (this.va[b] = []),
                        this.va[b].push(e),
                        this
                      );
                    },
                  },
                  {
                    key: "startSafetyTimer",
                    value: function (b, e) {
                      var k = this;
                      this.h.debug.log("Safety timer invoked from: ".concat(e));
                      this.Yd = setTimeout(function () {
                        k.cancel();
                        k.pi("startSafetyTimer()");
                      }, b);
                    },
                  },
                  {
                    key: "clearSafetyTimer",
                    value: function (b) {
                      null == this.Yd ||
                        (this.h.debug.log(
                          "Safety timer cleared from: ".concat(b)
                        ),
                        clearTimeout(this.Yd),
                        (this.Yd = null));
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      var b = this.g;
                      return (
                        this.h.U &&
                        this.h.Ba &&
                        b.enabled &&
                        (!aa(b.Vg) || B(b.he))
                      );
                    },
                  },
                  {
                    key: "tagUrl",
                    get: function () {
                      var b = this.g;
                      if (B(b.he)) {
                        return b.he;
                      }
                      b = {
                        Al: "58c25bb0073ef448b1087ad6",
                        yl: "5a0458dc28a06145e4519d21",
                        Bl: window.location.hostname,
                        hm: Date.now(),
                        Cl: 640,
                        zl: 480,
                        xl: b.Vg,
                      };
                      return ""
                        .concat(
                          "https://go.aniview.com/api/adserver6/vast/",
                          "?"
                        )
                        .concat(dd(b));
                    },
                  },
                ]),
                c
              );
            })(),
            Nc = (function () {
              function c(b) {
                Ib(this, c);
                this.h = b;
                this.ra = [];
                this.loaded = !1;
                Date.now();
                this.jb = !1;
                this.mc = [];
                this.elements = { W: {}, xb: {} };
                this.load();
              }
              return (
                nb(c, [
                  {
                    key: "load",
                    value: function () {
                      var b = this;
                      this.h.elements.display.cb &&
                        (this.h.elements.display.cb.hidden = this.enabled);
                      this.enabled &&
                        this.cn().then(function () {
                          b.enabled && (b.mo(), b.sm(), (b.loaded = !0));
                        });
                    },
                  },
                  {
                    key: "getThumbnails",
                    value: function () {
                      var b = this;
                      return new Promise(function (e) {
                        function k() {
                          b.ra.sort(function (t, y) {
                            return t.height - y.height;
                          });
                          b.h.debug.log("Preview thumbnails", b.ra);
                          e();
                        }
                        var r = b.h.g.Z.src;
                        if (aa(r)) {
                          throw Error(
                            "Missing previewThumbnails.src config attribute"
                          );
                        }
                        Sa(r)
                          ? r(function (t) {
                              b.ra = t;
                              k();
                            })
                          : ((r = (La(r) ? [r] : r).map(function (t) {
                              return b.bn(t);
                            })),
                            Promise.all(r).then(k));
                      });
                    },
                  },
                  {
                    key: "getThumbnail",
                    value: function (b) {
                      var e = this;
                      return new Promise(function (k) {
                        Sb(b).then(function (r) {
                          var t,
                            y = {
                              frames:
                                ((t = []),
                                r
                                  .split(/\r\n\r\n|\n\n|\r\r/)
                                  .forEach(function (K) {
                                    var ba = {};
                                    K.split(/\r\n|\n|\r/).forEach(function (V) {
                                      if (g(ba.startTime)) {
                                        if (!aa(V.trim()) && aa(ba.text)) {
                                          V = V.trim().split("#xywh=");
                                          var qa = Va(V, 1);
                                          if (((ba.text = qa[0]), V[1])) {
                                            (V = Va(V[1].split(","), 4)),
                                              (ba.x = V[0]),
                                              (ba.y = V[1]),
                                              (ba.w = V[2]),
                                              (ba.Qe = V[3]);
                                          }
                                        }
                                      } else {
                                        (V = V.match(
                                          /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--\x3e ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                        )) &&
                                          ((ba.startTime =
                                            3600 * Number(V[1] || 0) +
                                            60 * Number(V[2]) +
                                            Number(V[3]) +
                                            Number("0.".concat(V[4]))),
                                          (ba.endTime =
                                            3600 * Number(V[6] || 0) +
                                            60 * Number(V[7]) +
                                            Number(V[8]) +
                                            Number("0.".concat(V[9]))));
                                      }
                                    });
                                    ba.text && t.push(ba);
                                  }),
                                t),
                              height: null,
                              urlPrefix: "",
                            };
                          y.frames[0].text.startsWith("/") ||
                            y.frames[0].text.startsWith("http://") ||
                            y.frames[0].text.startsWith("https://") ||
                            (y.urlPrefix = b.substring(
                              0,
                              b.lastIndexOf("/") + 1
                            ));
                          var z = new Image();
                          z.onload = function () {
                            y.height = z.naturalHeight;
                            y.width = z.naturalWidth;
                            e.ra.push(y);
                            k();
                          };
                          z.src = y.urlPrefix + y.frames[0].text;
                        });
                      });
                    },
                  },
                  {
                    key: "startMove",
                    value: function (b) {
                      if (
                        this.loaded &&
                        ra(b, Event) &&
                        ["touchmove", "mousemove"].includes(b.type) &&
                        this.h.media.duration
                      ) {
                        if ("touchmove" === b.type) {
                          this.xa =
                            (this.h.elements.inputs.seek.value / 100) *
                            this.h.media.duration;
                        } else {
                          var e = this.h.elements.progress.getBoundingClientRect();
                          this.xa =
                            (((100 / e.width) * (b.pageX - e.left)) / 100) *
                            this.h.media.duration;
                          0 > this.xa && (this.xa = 0);
                          this.xa > this.h.media.duration - 1 &&
                            (this.xa = this.h.media.duration - 1);
                          this.Gj = b.pageX;
                          this.elements.W.time.innerText = hc(this.xa);
                        }
                        this.Ik();
                      }
                    },
                  },
                  {
                    key: "endMove",
                    value: function () {
                      this.je(!1, !0);
                    },
                  },
                  {
                    key: "startScrubbing",
                    value: function (b) {
                      (null == b.button || !1 === b.button || 0 === b.button) &&
                        ((this.jb = !0),
                        this.h.media.duration &&
                          (this.yh(!0), this.je(!1, !0), this.Ik()));
                    },
                  },
                  {
                    key: "endScrubbing",
                    value: function () {
                      var b = this;
                      this.jb = !1;
                      Math.ceil(this.yj) === Math.ceil(this.h.media.currentTime)
                        ? this.yh(!1)
                        : Pb.call(
                            this.h,
                            this.h.media,
                            "timeupdate",
                            function () {
                              b.jb || b.yh(!1);
                            }
                          );
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var b = this;
                      this.h.A("play", function () {
                        b.je(!1, !0);
                      });
                      this.h.A("seeked", function () {
                        b.je(!1);
                      });
                      this.h.A("timeupdate", function () {
                        b.yj = b.h.media.currentTime;
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      this.elements.W.i = la("div", { F: this.h.g.u.Z.Vk });
                      this.elements.W.oa = la("div", { F: this.h.g.u.Z.oa });
                      this.elements.W.i.appendChild(this.elements.W.oa);
                      var b = la("div", { F: this.h.g.u.Z.$k });
                      this.elements.W.time = la("span", {}, "00:00");
                      b.appendChild(this.elements.W.time);
                      this.elements.W.i.appendChild(b);
                      w(this.h.elements.progress) &&
                        this.h.elements.progress.appendChild(this.elements.W.i);
                      this.elements.xb.i = la("div", { F: this.h.g.u.Z.uk });
                      this.h.elements.ua.appendChild(this.elements.xb.i);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.elements.W.i && this.elements.W.i.remove();
                      this.elements.xb.i && this.elements.xb.i.remove();
                    },
                  },
                  {
                    key: "showImageAtCurrentTime",
                    value: function () {
                      var b = this;
                      this.jb ? this.Co() : this.Eo();
                      var e = this.ra[0].frames.findIndex(function (t) {
                          return b.xa >= t.startTime && b.xa <= t.endTime;
                        }),
                        k = 0 <= e,
                        r = 0;
                      this.jb || this.je(k);
                      k &&
                        (this.ra.forEach(function (t, y) {
                          b.mc.includes(t.frames[e].text) && (r = y);
                        }),
                        e !== this.ae && ((this.ae = e), this.Aj(r)));
                    },
                  },
                  {
                    key: "loadImage",
                    value: function () {
                      var b = this,
                        e =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        k = this.ae,
                        r = this.ra[e],
                        t = r.frames[k],
                        y = r.frames[k].text;
                      r = r.urlPrefix + y;
                      if (this.Fc && this.Fc.dataset.filename === y) {
                        this.Hk(this.Fc, t, e, k, y, !1),
                          (this.Fc.dataset.index = k),
                          this.nk(this.Fc);
                      } else {
                        this.Hg && this.oe && (this.Hg.onload = null);
                        var z = new Image();
                        z.src = r;
                        z.dataset.index = k;
                        this.be = z.dataset.filename = y;
                        this.h.debug.log("Loading image: ".concat(r));
                        z.onload = function () {
                          return b.Hk(z, t, e, k, y, !0);
                        };
                        this.Hg = z;
                        this.nk(z);
                      }
                    },
                  },
                  {
                    key: "showImage",
                    value: function (b, e, k, r, t) {
                      var y =
                        !(5 < arguments.length && void 0 !== arguments[5]) ||
                        arguments[5];
                      this.h.debug.log(
                        "Showing thumb: "
                          .concat(t, ". num: ")
                          .concat(r, ". qual: ")
                          .concat(k, ". newimg: ")
                          .concat(y)
                      );
                      this.zo(b, e);
                      y &&
                        (this.bg.appendChild(b),
                        (this.Fc = b),
                        this.mc.includes(t) || this.mc.push(t));
                      this.ck(r, !0)
                        .then(this.ck(r, !1))
                        .then(this.Vm(k, b, e, t));
                    },
                  },
                  {
                    key: "removeOldImages",
                    value: function (b) {
                      var e = this;
                      Array.from(this.bg.children).forEach(function (k) {
                        if ("img" === k.tagName.toLowerCase()) {
                          var r = e.oe ? 500 : 1e3;
                          if (
                            k.dataset.index !== b.dataset.index &&
                            !k.dataset.Di
                          ) {
                            k.dataset.Di = !0;
                            var t = e.bg;
                            setTimeout(function () {
                              t.removeChild(k);
                              e.h.debug.log(
                                "Removing thumb: ".concat(k.dataset.filename)
                              );
                            }, r);
                          }
                        }
                      });
                    },
                  },
                  {
                    key: "preloadNearby",
                    value: function (b) {
                      var e = this,
                        k =
                          !(1 < arguments.length && void 0 !== arguments[1]) ||
                          arguments[1];
                      return new Promise(function (r) {
                        setTimeout(function () {
                          var t = e.ra[0].frames[b].text;
                          if (e.be === t) {
                            var y = !1;
                            (k
                              ? e.ra[0].frames.slice(b)
                              : e.ra[0].frames.slice(0, b).reverse()
                            ).forEach(function (z) {
                              var K = z.text;
                              if (K !== t && !e.mc.includes(K)) {
                                y = !0;
                                e.h.debug.log(
                                  "Preloading thumb filename: ".concat(K)
                                );
                                z = e.ra[0].urlPrefix + K;
                                var ba = new Image();
                                ba.src = z;
                                ba.onload = function () {
                                  e.h.debug.log(
                                    "Preloaded thumb filename: ".concat(K)
                                  );
                                  e.mc.includes(K) || e.mc.push(K);
                                  r();
                                };
                              }
                            });
                            y || r();
                          }
                        }, 300);
                      });
                    },
                  },
                  {
                    key: "getHigherQuality",
                    value: function (b, e, k, r) {
                      var t = this;
                      b < this.ra.length - 1 &&
                        ((e = e.naturalHeight),
                        this.oe && (e = k.Qe),
                        e < this.uf &&
                          setTimeout(function () {
                            t.be === r &&
                              (t.h.debug.log(
                                "Showing higher quality thumb for: ".concat(r)
                              ),
                              t.Aj(b + 1));
                          }, 300));
                    },
                  },
                  {
                    key: "toggleThumbContainer",
                    value: function () {
                      var b =
                          0 < arguments.length &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        e =
                          1 < arguments.length &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                      this.elements.W.i.classList.toggle(this.h.g.u.Z.Wk, b);
                      !b && e && ((this.ae = null), (this.be = null));
                    },
                  },
                  {
                    key: "toggleScrubbingContainer",
                    value: function () {
                      var b =
                        0 < arguments.length &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      this.elements.xb.i.classList.toggle(this.h.g.u.Z.vk, b);
                      b || ((this.ae = null), (this.be = null));
                    },
                  },
                  {
                    key: "determineContainerAutoSizing",
                    value: function () {
                      (20 < this.elements.W.oa.clientHeight ||
                        20 < this.elements.W.oa.clientWidth) &&
                        (this.qh = !0);
                    },
                  },
                  {
                    key: "setThumbContainerSizeAndPos",
                    value: function () {
                      if (this.qh) {
                        20 < this.elements.W.oa.clientHeight &&
                        20 > this.elements.W.oa.clientWidth
                          ? (this.elements.W.oa.style.width = "".concat(
                              Math.floor(
                                this.elements.W.oa.clientHeight * this.fd
                              ),
                              "px"
                            ))
                          : 20 > this.elements.W.oa.clientHeight &&
                            20 < this.elements.W.oa.clientWidth &&
                            (this.elements.W.oa.style.height = "".concat(
                              Math.floor(
                                this.elements.W.oa.clientWidth / this.fd
                              ),
                              "px"
                            ));
                      } else {
                        var b = Math.floor(this.uf * this.fd);
                        this.elements.W.oa.style.height = "".concat(
                          this.uf,
                          "px"
                        );
                        this.elements.W.oa.style.width = "".concat(b, "px");
                      }
                      this.Do();
                    },
                  },
                  {
                    key: "setThumbContainerPos",
                    value: function () {
                      var b = this.h.elements.progress.getBoundingClientRect(),
                        e = this.h.elements.i.getBoundingClientRect(),
                        k = this.elements.W.i,
                        r = e.left - b.left + 10;
                      e = e.right - b.left - k.clientWidth - 10;
                      b = this.Gj - b.left - k.clientWidth / 2;
                      b < r && (b = r);
                      b > e && (b = e);
                      k.style.left = "".concat(b, "px");
                    },
                  },
                  {
                    key: "setScrubbingContainerSize",
                    value: function () {
                      var b = da(this.fd, {
                          width: this.h.media.clientWidth,
                          height: this.h.media.clientHeight,
                        }),
                        e = b.height;
                      this.elements.xb.i.style.width = "".concat(b.width, "px");
                      this.elements.xb.i.style.height = "".concat(e, "px");
                    },
                  },
                  {
                    key: "setImageSizeAndOffset",
                    value: function (b, e) {
                      if (this.oe) {
                        var k = this.uf / e.Qe;
                        b.style.height = "".concat(b.naturalHeight * k, "px");
                        b.style.width = "".concat(b.naturalWidth * k, "px");
                        b.style.left = "-".concat(e.x * k, "px");
                        b.style.top = "-".concat(e.y * k, "px");
                      }
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      return this.h.U && this.h.Ba && this.h.g.Z.enabled;
                    },
                  },
                  {
                    key: "currentImageContainer",
                    get: function () {
                      return this.jb ? this.elements.xb.i : this.elements.W.oa;
                    },
                  },
                  {
                    key: "usingSprites",
                    get: function () {
                      return Object.keys(this.ra[0].frames[0]).includes("w");
                    },
                  },
                  {
                    key: "thumbAspectRatio",
                    get: function () {
                      return this.oe
                        ? this.ra[0].frames[0].w / this.ra[0].frames[0].Qe
                        : this.ra[0].width / this.ra[0].height;
                    },
                  },
                  {
                    key: "thumbContainerHeight",
                    get: function () {
                      return this.jb
                        ? da(this.fd, {
                            width: this.h.media.clientWidth,
                            height: this.h.media.clientHeight,
                          }).height
                        : this.qh
                        ? this.elements.W.oa.clientHeight
                        : Math.floor(this.h.media.clientWidth / this.fd / 4);
                    },
                  },
                  {
                    key: "currentImageElement",
                    get: function () {
                      return this.jb ? this.Ai : this.Bi;
                    },
                    set: function (b) {
                      this.jb ? (this.Ai = b) : (this.Bi = b);
                    },
                  },
                ]),
                c
              );
            })(),
            Ac = {
              Ag: function (c, b) {
                var e = this;
                La(b)
                  ? gc(c, this.media, { src: b })
                  : Ua(b) &&
                    b.forEach(function (k) {
                      gc(c, e.media, k);
                    });
              },
              gi: function (c) {
                var b = this;
                qc(c, "sources.length")
                  ? (Hb.Wf.call(this),
                    this.gb.call(
                      this,
                      function () {
                        b.options.quality = [];
                        Jb(b.media);
                        b.media = null;
                        w(b.elements.i) &&
                          b.elements.i.removeAttribute("class");
                        var e = c.sources,
                          k = c.type,
                          r = Va(e, 1)[0],
                          t = r.ea;
                        t = void 0 === t ? Tb.Hd : t;
                        var y = r.src;
                        r = "html5" === t ? k : "div";
                        y = "html5" === t ? {} : { src: y };
                        Object.assign(b, {
                          ea: t,
                          type: k,
                          supported: ab.check(k, t, b.g.Pa),
                          media: la(r, y),
                        });
                        b.elements.i.appendChild(b.media);
                        F(c.autoplay) && (b.g.autoplay = c.autoplay);
                        b.U &&
                          (b.g.yi && b.media.setAttribute("crossorigin", ""),
                          b.g.autoplay && b.media.setAttribute("autoplay", ""),
                          aa(c.poster) || (b.poster = c.poster),
                          b.g.loop.active && b.media.setAttribute("loop", ""),
                          b.g.muted && b.media.setAttribute("muted", ""),
                          b.g.Pa && b.media.setAttribute("playsinline", ""));
                        Na.Lf.call(b);
                        b.U && Ac.Ag.call(b, "source", e);
                        b.g.title = c.title;
                        Ia.call(b);
                        b.U &&
                          Object.keys(c).includes("tracks") &&
                          Ac.Ag.call(b, "track", c.Xo);
                        (b.U || (b.Tc && !b.supported.ja)) && Na.rd.call(b);
                        b.U && b.media.load();
                        aa(c.Z) ||
                          (Object.assign(b.g.Z, c.Z),
                          b.Z && b.Z.loaded && (b.Z.gb(), (b.Z = null)),
                          b.g.Z.enabled && (b.Z = new Nc(b)));
                        b.N.update();
                      },
                      !0
                    ))
                  : this.debug.warn("Invalid source format");
              },
            },
            Mc = (function () {
              function c(b, e) {
                var k = this;
                Ib(this, c);
                this.fa = {};
                this.hb = this.ready = !1;
                this.Sa = ab.Sa;
                this.media = b;
                La(this.media) &&
                  (this.media = document.querySelectorAll(this.media));
                ((window.vj && this.media instanceof jQuery) ||
                  oc(this.media) ||
                  Ua(this.media)) &&
                  (this.media = this.media[0]);
                var r = c.yd;
                try {
                  var t = JSON.parse(k.media.getAttribute("data-plyr-config"));
                } catch (z) {
                  t = {};
                }
                if (
                  ((this.g = Wa({}, sb, r, e || {}, t)),
                  (this.elements = {
                    i: null,
                    N: null,
                    B: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    J: { bf: null, ib: null, bb: {}, buttons: {} },
                  }),
                  (this.B = { active: null, Hb: -1, Pd: new WeakMap() }),
                  (this.N = { active: !1 }),
                  (this.options = { speed: [], quality: [] }),
                  (this.debug = new rd(this.g.debug)),
                  this.debug.log("Config", this.g),
                  this.debug.log("Support", ab),
                  null != this.media && w(this.media))
                ) {
                  if (this.media.Rg) {
                    this.debug.warn("Target already setup");
                  } else {
                    if (this.g.enabled) {
                      if (ab.check().Xb) {
                        r = this.media.cloneNode(!0);
                        r.autoplay = !1;
                        this.elements.af = r;
                        t = this.media.tagName.toLowerCase();
                        var y = null;
                        r = null;
                        switch (t) {
                          case "div":
                            if (
                              ((y = this.media.querySelector("iframe")), w(y))
                            ) {
                              if (
                                ((r = Sc(y.getAttribute("src"))),
                                (this.ea = (function (z) {
                                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                                    z
                                  )
                                    ? Tb.pb
                                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                        z
                                      )
                                    ? Tb.Ta
                                    : null;
                                })(r.toString())),
                                (this.elements.i = this.media),
                                (this.media = y),
                                (this.elements.i.className = ""),
                                r.search.length)
                              ) {
                                (t = ["1", "true"]),
                                  t.includes(r.searchParams.get("autoplay")) &&
                                    (this.g.autoplay = !0),
                                  t.includes(r.searchParams.get("loop")) &&
                                    (this.g.loop.active = !0),
                                  this.jc
                                    ? ((this.g.Pa = t.includes(
                                        r.searchParams.get("playsinline")
                                      )),
                                      (this.g.pb.ug = r.searchParams.get("hl")))
                                    : (this.g.Pa = !0);
                              }
                            } else {
                              (this.ea = this.media.getAttribute(
                                this.g.attributes.v.ea
                              )),
                                this.media.removeAttribute(
                                  this.g.attributes.v.ea
                                );
                            }
                            if (
                              aa(this.ea) ||
                              !Object.keys(Tb).includes(this.ea)
                            ) {
                              return void this.debug.error(
                                "Setup failed: Invalid provider"
                              );
                            }
                            this.type = "video";
                            break;
                          case "video":
                          case "audio":
                            this.type = t;
                            this.ea = Tb.Hd;
                            this.media.hasAttribute("crossorigin") &&
                              (this.g.yi = !0);
                            this.media.hasAttribute("autoplay") &&
                              (this.g.autoplay = !0);
                            (this.media.hasAttribute("playsinline") ||
                              this.media.hasAttribute("webkit-playsinline")) &&
                              (this.g.Pa = !0);
                            this.media.hasAttribute("muted") &&
                              (this.g.muted = !0);
                            this.media.hasAttribute("loop") &&
                              (this.g.loop.active = !0);
                            break;
                          default:
                            return void this.debug.error(
                              "Setup failed: unsupported type"
                            );
                        }
                        this.supported = ab.check(
                          this.type,
                          this.ea,
                          this.g.Pa
                        );
                        this.supported.Xb
                          ? ((this.Ic = []),
                            (this.Ja = new td(this)),
                            (this.storage = new Jc(this)),
                            (this.media.Rg = this),
                            w(this.elements.i) ||
                              ((this.elements.i = la("div", { zb: 0 })),
                              cd(this.media, this.elements.i)),
                            Na.Ej.call(this),
                            Na.Lf.call(this),
                            Ia.call(this),
                            this.g.debug &&
                              Da.call(
                                this,
                                this.elements.i,
                                this.g.va.join(" "),
                                function (z) {
                                  k.debug.log("event: ".concat(z.type));
                                }
                              ),
                            (this.N = new sd(this)),
                            (this.U || (this.Tc && !this.supported.ja)) &&
                              Na.rd.call(this),
                            this.Ja.i(),
                            this.Ja.global(),
                            this.g.Wa.enabled && (this.Wa = new md(this)),
                            this.U &&
                              this.g.autoplay &&
                              this.once("canplay", function () {
                                return Cb(k.play());
                              }),
                            (this.Od = 0),
                            this.g.Z.enabled && (this.Z = new Nc(this)))
                          : this.debug.error("Setup failed: no support");
                      } else {
                        this.debug.error("Setup failed: no support");
                      }
                    } else {
                      this.debug.error("Setup failed: disabled by config");
                    }
                  }
                } else {
                  this.debug.error("Setup failed: no suitable element passed");
                }
              }
              return (
                nb(
                  c,
                  [
                    {
                      key: "play",
                      value: function () {
                        var b = this;
                        return Sa(this.media.play)
                          ? (this.Wa &&
                              this.Wa.enabled &&
                              this.Wa.oc
                                .then(function () {
                                  return b.Wa.play();
                                })
                                ["catch"](function () {
                                  return Cb(b.media.play());
                                }),
                            this.media.play())
                          : null;
                      },
                    },
                    {
                      key: "pause",
                      value: function () {
                        return this.Ca && Sa(this.media.pause)
                          ? this.media.pause()
                          : null;
                      },
                    },
                    {
                      key: "togglePlay",
                      value: function (b) {
                        return (F(b) ? b : !this.Ca)
                          ? this.play()
                          : this.pause();
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.U
                          ? (this.pause(), this.mb())
                          : Sa(this.media.stop) && this.media.stop();
                      },
                    },
                    {
                      key: "restart",
                      value: function () {
                        this.currentTime = 0;
                      },
                    },
                    {
                      key: "rewind",
                      value: function (b) {
                        this.currentTime -= g(b) ? b : this.g.xa;
                      },
                    },
                    {
                      key: "forward",
                      value: function (b) {
                        this.currentTime += g(b) ? b : this.g.xa;
                      },
                    },
                    {
                      key: "increaseVolume",
                      value: function (b) {
                        this.volume =
                          (this.media.muted ? 0 : this.volume) + (g(b) ? b : 0);
                      },
                    },
                    {
                      key: "decreaseVolume",
                      value: function (b) {
                        this.xg(-b);
                      },
                    },
                    {
                      key: "toggleCaptions",
                      value: function (b) {
                        Aa.toggle.call(this, b, !1);
                      },
                    },
                    {
                      key: "airplay",
                      value: function () {
                        ab.Ha && this.media.np();
                      },
                    },
                    {
                      key: "toggleControls",
                      value: function (b) {
                        if (this.supported.ja && !this.Bg) {
                          var e = sc(this.elements.i, this.g.u.Pc);
                          b = xa(
                            this.elements.i,
                            this.g.u.Pc,
                            void 0 === b ? void 0 : !b
                          );
                          (b &&
                            Ua(this.g.controls) &&
                            this.g.controls.includes("settings") &&
                            !aa(this.g.J) &&
                            T.Ab.call(this, !1),
                          b !== e) &&
                            ha.call(
                              this,
                              this.media,
                              b ? "controlshidden" : "controlsshown"
                            );
                          return !b;
                        }
                        return !1;
                      },
                    },
                    {
                      key: "on",
                      value: function (b, e) {
                        Da.call(this, this.elements.i, b, e);
                      },
                    },
                    {
                      key: "once",
                      value: function (b, e) {
                        Pb.call(this, this.elements.i, b, e);
                      },
                    },
                    {
                      key: "off",
                      value: function (b, e) {
                        qb(this.elements.i, b, e);
                      },
                    },
                    {
                      key: "destroy",
                      value: function (b) {
                        var e = this,
                          k =
                            1 < arguments.length &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                        if (this.ready) {
                          var r = function () {
                            document.body.style.overflow = "";
                            e.v = null;
                            k
                              ? (Object.keys(e.elements).length &&
                                  (Jb(e.elements.buttons.play),
                                  Jb(e.elements.B),
                                  Jb(e.elements.controls),
                                  Jb(e.elements.ua),
                                  (e.elements.buttons.play = null),
                                  (e.elements.B = null),
                                  (e.elements.controls = null),
                                  (e.elements.ua = null)),
                                Sa(b) && b())
                              : (Oc.call(e),
                                Hb.Wf.call(e),
                                rc(e.elements.af, e.elements.i),
                                ha.call(e, e.elements.af, "destroyed", !0),
                                Sa(b) && b.call(e.elements.af),
                                (e.ready = !1),
                                setTimeout(function () {
                                  e.elements = null;
                                  e.media = null;
                                }, 200));
                          };
                          this.stop();
                          clearTimeout(this.fa.hb);
                          clearTimeout(this.fa.controls);
                          clearTimeout(this.fa.bh);
                          this.U
                            ? (Na.ie.call(this, !0), r())
                            : this.jc
                            ? (clearInterval(this.fa.Ae),
                              clearInterval(this.fa.Ca),
                              null !== this.v && Sa(this.v.gb) && this.v.gb(),
                              r())
                            : this.Nb &&
                              (null !== this.v && this.v.il().then(r),
                              setTimeout(r, 200));
                        }
                      },
                    },
                    {
                      key: "supports",
                      value: function (b) {
                        return ab.Ig.call(this, b);
                      },
                    },
                    {
                      key: "isHTML5",
                      get: function () {
                        return this.ea === Tb.Hd;
                      },
                    },
                    {
                      key: "isEmbed",
                      get: function () {
                        return this.jc || this.Nb;
                      },
                    },
                    {
                      key: "isYouTube",
                      get: function () {
                        return this.ea === Tb.pb;
                      },
                    },
                    {
                      key: "isVimeo",
                      get: function () {
                        return this.ea === Tb.Ta;
                      },
                    },
                    {
                      key: "isVideo",
                      get: function () {
                        return "video" === this.type;
                      },
                    },
                    {
                      key: "isAudio",
                      get: function () {
                        return "audio" === this.type;
                      },
                    },
                    {
                      key: "playing",
                      get: function () {
                        return !(!this.ready || this.paused || this.ended);
                      },
                    },
                    {
                      key: "paused",
                      get: function () {
                        return !!this.media.paused;
                      },
                    },
                    {
                      key: "stopped",
                      get: function () {
                        return !(!this.paused || 0 !== this.currentTime);
                      },
                    },
                    {
                      key: "ended",
                      get: function () {
                        return !!this.media.ended;
                      },
                    },
                    {
                      key: "currentTime",
                      set: function (b) {
                        if (this.duration) {
                          var e = g(b) && 0 < b;
                          this.media.currentTime = e
                            ? Math.min(b, this.duration)
                            : 0;
                          this.debug.log(
                            "Seeking to ".concat(this.currentTime, " seconds")
                          );
                        }
                      },
                      get: function () {
                        return Number(this.media.currentTime);
                      },
                    },
                    {
                      key: "buffered",
                      get: function () {
                        var b = this.media.buffered;
                        return g(b)
                          ? b
                          : b && b.length && 0 < this.duration
                          ? b.end(0) / this.duration
                          : 0;
                      },
                    },
                    {
                      key: "seeking",
                      get: function () {
                        return !!this.media.seeking;
                      },
                    },
                    {
                      key: "duration",
                      get: function () {
                        var b = parseFloat(this.g.duration),
                          e = (this.media || {}).duration;
                        e = g(e) && e !== 1 / 0 ? e : 0;
                        return b || e;
                      },
                    },
                    {
                      key: "volume",
                      set: function (b) {
                        var e = b;
                        La(e) && (e = Number(e));
                        g(e) || (e = this.storage.get("volume"));
                        g(e) || (e = this.g.volume);
                        1 < e && (e = 1);
                        0 > e && (e = 0);
                        this.g.volume = e;
                        this.media.volume = e;
                        !aa(b) && this.muted && 0 < e && (this.muted = !1);
                      },
                      get: function () {
                        return Number(this.media.volume);
                      },
                    },
                    {
                      key: "muted",
                      set: function (b) {
                        F(b) || (b = this.storage.get("muted"));
                        F(b) || (b = this.g.muted);
                        this.g.muted = b;
                        this.media.muted = b;
                      },
                      get: function () {
                        return !!this.media.muted;
                      },
                    },
                    {
                      key: "hasAudio",
                      get: function () {
                        return (
                          !this.U ||
                          !!this.Bg ||
                          !!this.media.Cn ||
                          !!this.media.lp ||
                          !(!this.media.Yh || !this.media.Yh.length)
                        );
                      },
                    },
                    {
                      key: "speed",
                      set: function (b) {
                        var e = this,
                          k = null;
                        g(b) && (k = b);
                        g(k) || (k = this.storage.get("speed"));
                        g(k) || (k = this.g.speed.selected);
                        k = (function () {
                          return Math.min(
                            Math.max(
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0
                            ),
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : 255
                          );
                        })(k, this.Fj, this.Dj);
                        this.g.speed.selected = k;
                        setTimeout(function () {
                          e.media.playbackRate = k;
                        }, 0);
                      },
                      get: function () {
                        return Number(this.media.playbackRate);
                      },
                    },
                    {
                      key: "minimumSpeed",
                      get: function () {
                        return this.jc
                          ? Math.min.apply(Math, mb(this.options.speed))
                          : this.Nb
                          ? 0.5
                          : 0.0625;
                      },
                    },
                    {
                      key: "maximumSpeed",
                      get: function () {
                        return this.jc
                          ? Math.max.apply(Math, mb(this.options.speed))
                          : this.Nb
                          ? 2
                          : 16;
                      },
                    },
                    {
                      key: "quality",
                      set: function (b) {
                        var e = this.g.quality,
                          k = this.options.quality;
                        if (k.length) {
                          b = [
                            !aa(b) && Number(b),
                            this.storage.get("quality"),
                            e.selected,
                            e["default"],
                          ].find(g);
                          var r = !0;
                          k.includes(b) ||
                            ((k = (function (t, y) {
                              return Ua(t) && t.length
                                ? t.reduce(function (z, K) {
                                    return Math.abs(K - y) < Math.abs(z - y)
                                      ? K
                                      : z;
                                  })
                                : null;
                            })(k, b)),
                            this.debug.warn(
                              "Unsupported quality option: "
                                .concat(b, ", using ")
                                .concat(k, " instead")
                            ),
                            (b = k),
                            (r = !1));
                          e.selected = b;
                          this.media.quality = b;
                          r && this.storage.set({ quality: b });
                        }
                      },
                      get: function () {
                        return this.media.quality;
                      },
                    },
                    {
                      key: "loop",
                      set: function (b) {
                        b = F(b) ? b : this.g.loop.active;
                        this.g.loop.active = b;
                        this.media.loop = b;
                      },
                      get: function () {
                        return !!this.media.loop;
                      },
                    },
                    {
                      key: "source",
                      set: function (b) {
                        Ac.gi.call(this, b);
                      },
                      get: function () {
                        return this.media.currentSrc;
                      },
                    },
                    {
                      key: "download",
                      get: function () {
                        var b = this.g.urls.download;
                        return B(b) ? b : this.source;
                      },
                      set: function (b) {
                        B(b) && ((this.g.urls.download = b), T.jf.call(this));
                      },
                    },
                    {
                      key: "poster",
                      set: function (b) {
                        this.Ba
                          ? Na.$d.call(this, b, !1)["catch"](function () {})
                          : this.debug.warn("Poster can only be set for video");
                      },
                      get: function () {
                        return this.Ba
                          ? this.media.getAttribute("poster") ||
                              this.media.getAttribute("data-poster")
                          : null;
                      },
                    },
                    {
                      key: "ratio",
                      get: function () {
                        if (!this.Ba) {
                          return null;
                        }
                        var b = Cc(Db.call(this));
                        return Ua(b) ? b.join(":") : b;
                      },
                      set: function (b) {
                        this.Ba
                          ? La(b) && Qc(b)
                            ? ((this.g.ratio = b), Qb.call(this))
                            : this.debug.error(
                                "Invalid aspect ratio specified (".concat(
                                  b,
                                  ")"
                                )
                              )
                          : this.debug.warn(
                              "Aspect ratio can only be set for video"
                            );
                      },
                    },
                    {
                      key: "autoplay",
                      set: function (b) {
                        b = F(b) ? b : this.g.autoplay;
                        this.g.autoplay = b;
                      },
                      get: function () {
                        return !!this.g.autoplay;
                      },
                    },
                    {
                      key: "currentTrack",
                      set: function (b) {
                        Aa.set.call(this, b, !1);
                      },
                      get: function () {
                        var b = this.B,
                          e = b.Hb;
                        return b.Sb ? e : -1;
                      },
                    },
                    {
                      key: "language",
                      set: function (b) {
                        Aa.lh.call(this, b, !1);
                      },
                      get: function () {
                        return (Aa.Oe.call(this) || {}).language;
                      },
                    },
                    {
                      key: "pip",
                      set: function (b) {
                        ab.qa &&
                          ((b = F(b) ? b : !this.qa),
                          Sa(this.media.Hh) &&
                            this.media.Hh(b ? "picture-in-picture" : "inline"),
                          Sa(this.media.qk) &&
                            (!this.qa && b
                              ? this.media.qk()
                              : this.qa && !b && document.Gm()));
                      },
                      get: function () {
                        return ab.qa
                          ? aa(this.media.ql)
                            ? this.media === document.$n
                            : "picture-in-picture" === this.media.ql
                          : null;
                      },
                    },
                  ],
                  [
                    {
                      key: "supported",
                      value: function (b, e, k) {
                        return ab.check(b, e, k);
                      },
                    },
                    {
                      key: "loadSprite",
                      value: function (b, e) {
                        return Hc(b, e);
                      },
                    },
                    {
                      key: "setup",
                      value: function (b) {
                        var e =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          k = null;
                        return (
                          La(b)
                            ? (k = Array.from(document.querySelectorAll(b)))
                            : oc(b)
                            ? (k = Array.from(b))
                            : Ua(b) && (k = b.filter(w)),
                          aa(k)
                            ? null
                            : k.map(function (r) {
                                return new c(r, e);
                              })
                        );
                      },
                    },
                  ]
                ),
                c
              );
            })();
          return (Mc.yd = JSON.parse(JSON.stringify(sb))), Mc;
        })());
    }.call(this, Q(3)));
  },
  function (X) {
    var ca = (function () {
      return this;
    })();
    try {
      ca = ca || new Function("return this")();
    } catch (Q) {
      "object" == typeof window && (ca = window);
    }
    X.exports = ca;
  },
  function () {
    window.onload = function () {
      var X = document.querySelector("input[name=phone]"),
        ca = document.querySelector("input[name=name]");
      document.querySelector("#sub-button").onclick = function (Q) {
        Q.preventDefault();
        (function (H) {
          var da = new XMLHttpRequest();
          da.onreadystatechange = function () {
            4 == da.readyState &&
              200 == da.status &&
              (console.log(da.responseText),
              1 == da.responseText
                ? (document
                    .querySelector("#result")
                    .classList.add("badge-success"),
                  document
                    .querySelector("#result")
                    .classList.remove("badge-warning"),
                  (document.querySelector("#result").innerHTML =
                    "\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f!"),
                  document.querySelector("form").reset())
                : ((document.querySelector("#result").innerHTML =
                    da.responseText),
                  document
                    .querySelector("#result")
                    .classList.remove("badge-success"),
                  document
                    .querySelector("#result")
                    .classList.add("badge-warning")));
          };
          da.open("POST", "form.php");
          da.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
          da.send(H);
        })("phone=" + X.value + "&name=" + ca.value);
      };
    };
  },
  function (X, ca, Q) {
    var H, da, Ia;
    !(function () {
      da = [Q(0)];
      void 0 ===
        (Ia =
          "function" ==
          typeof (H = function (M) {
            var N = window.Sl || {};
            ((gb = 0),
            (N = function (q, B) {
              this.yd = {
                Va: !0,
                ue: !1,
                Pf: M(q),
                Wh: M(q),
                Db: !0,
                Bc: null,
                dd:
                  '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                ad:
                  '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                Qf: 3e3,
                ha: !1,
                Xf: "50px",
                He: "ease",
                dg: function (w, F) {
                  return M('<button type="button" />').text(F + 1);
                },
                Ib: !1,
                Ji: "slick-dots",
                draggable: !0,
                easing: "linear",
                Li: 0.35,
                Aa: !1,
                ng: !1,
                mg: !1,
                ma: !0,
                Jd: 0,
                lc: "ondemand",
                Kg: !1,
                Uj: !0,
                Tj: !0,
                Sj: !1,
                rc: "window",
                Xd: null,
                rows: 1,
                Qa: !1,
                rh: "",
                de: 1,
                j: 1,
                S: 1,
                speed: 500,
                uh: !0,
                ge: !1,
                fl: !0,
                zh: 5,
                jl: !0,
                kl: !0,
                qe: !1,
                vertical: !1,
                wc: !1,
                nl: !0,
                zIndex: 1e3,
              };
              this.zg = {
                md: !1,
                Je: !1,
                pd: null,
                currentDirection: 0,
                xd: null,
                C: 0,
                direction: 1,
                ga: null,
                Xc: null,
                Gg: null,
                yn: 0,
                ba: null,
                aa: null,
                scrolling: !1,
                l: null,
                ta: null,
                H: null,
                L: null,
                Ko: !1,
                Ea: 0,
                ob: null,
                sf: !1,
                V: null,
                G: {},
                yf: !1,
                me: !1,
              };
              M.extend(this, this.zg);
              this.ka = this.Wb = null;
              this.Ia = [];
              this.Dc = [];
              this.Mb = this.Me = this.Ec = !1;
              this.hidden = "hidden";
              this.paused = !0;
              this.rc = this.cd = null;
              this.oh = !0;
              this.D = M(q);
              this.Bb = this.vc = null;
              this.re = "visibilitychange";
              this.Ih = 0;
              var E = M(q).data("slick") || {};
              this.options = M.extend({}, this.yd, B, E);
              this.C = this.options.Jd;
              this.Td = this.options;
              void 0 !== document.mozHidden
                ? ((this.hidden = "mozHidden"),
                  (this.re = "mozvisibilitychange"))
                : void 0 !== document.webkitHidden &&
                  ((this.hidden = "webkitHidden"),
                  (this.re = "webkitvisibilitychange"));
              this.Eb = M.X(this.Eb, this);
              this.Cc = M.X(this.Cc, this);
              this.ye = M.X(this.ye, this);
              this.za = M.X(this.za, this);
              this.td = M.X(this.td, this);
              this.Zd = M.X(this.Zd, this);
              this.setPosition = M.X(this.setPosition, this);
              this.eb = M.X(this.eb, this);
              this.Ki = M.X(this.Ki, this);
              this.$a = M.X(this.$a, this);
              this.Za = gb++;
              this.fc = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
              this.jk();
              this.Ya(!0);
            })).prototype.Sh = function () {
              this.H.find(".slick-active")
                .o({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .o({ zb: "0" });
            };
            N.prototype.Of = function () {
              if (
                1 === this.options.j &&
                !0 === this.options.ue &&
                !1 === this.options.vertical
              ) {
                var q = this.L.T(this.C).outerHeight(!0);
                this.V.animate({ height: q }, this.options.speed);
              }
            };
            N.prototype.we = function (q, B) {
              var E = {},
                w = this;
              w.Of();
              !0 === w.options.Qa && !1 === w.options.vertical && (q = -q);
              !1 === w.yf
                ? !1 === w.options.vertical
                  ? w.H.animate(
                      { left: q },
                      w.options.speed,
                      w.options.easing,
                      B
                    )
                  : w.H.animate(
                      { top: q },
                      w.options.speed,
                      w.options.easing,
                      B
                    )
                : !1 === w.Ec
                ? (!0 === w.options.Qa && (w.xd = -w.xd),
                  M({ Vh: w.xd }).animate(
                    { Vh: q },
                    {
                      duration: w.options.speed,
                      easing: w.options.easing,
                      step: function (F) {
                        F = Math.ceil(F);
                        !1 === w.options.vertical
                          ? ((E[w.ka] = "translate(" + F + "px, 0px)"),
                            w.H.m(E))
                          : ((E[w.ka] = "translate(0px," + F + "px)"),
                            w.H.m(E));
                      },
                      complete: function () {
                        B && B.call();
                      },
                    }
                  ))
                : (w.xe(),
                  (q = Math.ceil(q)),
                  !1 === w.options.vertical
                    ? (E[w.ka] = "translate3d(" + q + "px, 0px, 0px)")
                    : (E[w.ka] = "translate3d(0px," + q + "px, 0px)"),
                  w.H.m(E),
                  B &&
                    setTimeout(function () {
                      w.fg();
                      B.call();
                    }, w.options.speed));
            };
            N.prototype.rg = function () {
              var q = this.options.Bc;
              return q && null !== q && (q = M(q).ub(this.D)), q;
            };
            N.prototype.Bc = function (q) {
              var B = this.rg();
              null !== B &&
                "object" == typeof B &&
                B.s(function () {
                  var E = M(this).sc("getSlick");
                  E.me || E.nb(q, !0);
                });
            };
            N.prototype.xe = function (q) {
              var B = {};
              !1 === this.options.Aa
                ? (B[this.Bb] =
                    this.vc +
                    " " +
                    this.options.speed +
                    "ms " +
                    this.options.He)
                : (B[this.Bb] =
                    "opacity " + this.options.speed + "ms " + this.options.He);
              !1 === this.options.Aa ? this.H.m(B) : this.L.T(q).m(B);
            };
            N.prototype.Eb = function () {
              this.Cc();
              this.l > this.options.j &&
                (this.pd = setInterval(this.ye, this.options.Qf));
            };
            N.prototype.Cc = function () {
              this.pd && clearInterval(this.pd);
            };
            N.prototype.ye = function () {
              var q = this.C + this.options.S;
              this.paused ||
                this.Mb ||
                this.Me ||
                (!1 === this.options.ma &&
                  (1 === this.direction && this.C + 1 === this.l - 1
                    ? (this.direction = 0)
                    : 0 === this.direction &&
                      ((q = this.C - this.options.S),
                      0 == this.C - 1 && (this.direction = 1))),
                this.nb(q));
            };
            N.prototype.ai = function () {
              !0 === this.options.Db &&
                ((this.aa = M(this.options.dd).I("slick-arrow")),
                (this.ba = M(this.options.ad).I("slick-arrow")),
                this.l > this.options.j
                  ? (this.aa.R("slick-hidden").sa("aria-hidden tabindex"),
                    this.ba.R("slick-hidden").sa("aria-hidden tabindex"),
                    this.fc.test(this.options.dd) &&
                      this.aa.Tg(this.options.Pf),
                    this.fc.test(this.options.ad) &&
                      this.ba.nd(this.options.Pf),
                    !0 !== this.options.ma &&
                      this.aa.I("slick-disabled").o("aria-disabled", "true"))
                  : this.aa
                      .add(this.ba)
                      .I("slick-hidden")
                      .o({ "aria-disabled": "true", zb: "-1" }));
            };
            N.prototype.bi = function () {
              var q;
              if (!0 === this.options.Ib && this.l > this.options.j) {
                this.D.I("slick-dotted");
                var B = M("<ul />").I(this.options.Ji);
                for (q = 0; q <= this.Pe(); q += 1) {
                  B.append(
                    M("<li />").append(this.options.dg.call(this, this, q))
                  );
                }
                this.ga = B.nd(this.options.Wh);
                this.ga.find("li").first().I("slick-active");
              }
            };
            N.prototype.ci = function () {
              this.L = this.D.children(
                this.options.rh + ":not(.slick-cloned)"
              ).I("slick-slide");
              this.l = this.L.length;
              this.L.s(function (q, B) {
                M(B)
                  .o("data-slick-index", q)
                  .data("originalStyling", M(B).o("style") || "");
              });
              this.D.I("slick-slider");
              this.H =
                0 === this.l
                  ? M('<div class="slick-track"/>').nd(this.D)
                  : this.L.Df('<div class="slick-track"/>').parent();
              this.V = this.H.sl('<div class="slick-list"/>').parent();
              this.H.m("opacity", 0);
              (!0 !== this.options.ha && !0 !== this.options.ge) ||
                (this.options.S = 1);
              M("img[data-lazy]", this.D).ub("[src]").I("slick-loading");
              this.Gk();
              this.ai();
              this.bi();
              this.Bf();
              this.kf("number" == typeof this.C ? this.C : 0);
              !0 === this.options.draggable && this.V.I("draggable");
            };
            N.prototype.di = function () {
              var q, B, E, w, F;
              if (
                ((w = document.createDocumentFragment()),
                (F = this.D.children()),
                0 < this.options.rows)
              ) {
                var g = this.options.de * this.options.rows;
                var W = Math.ceil(F.length / g);
                for (q = 0; q < W; q++) {
                  var G = document.createElement("div");
                  for (B = 0; B < this.options.rows; B++) {
                    var ea = document.createElement("div");
                    for (E = 0; E < this.options.de; E++) {
                      var Z = q * g + (B * this.options.de + E);
                      F.get(Z) && ea.appendChild(F.get(Z));
                    }
                    G.appendChild(ea);
                  }
                  w.appendChild(G);
                }
                this.D.empty().append(w);
                this.D.children()
                  .children()
                  .children()
                  .m({
                    width: 100 / this.options.de + "%",
                    display: "inline-block",
                  });
              }
            };
            N.prototype.De = function (q) {
              var B,
                E,
                w = !1;
              var F = this.D.width();
              var g = window.innerWidth || M(window).width();
              if (
                ("window" === this.rc
                  ? (E = g)
                  : "slider" === this.rc
                  ? (E = F)
                  : "min" === this.rc && (E = Math.min(g, F)),
                this.options.Xd &&
                  this.options.Xd.length &&
                  null !== this.options.Xd)
              ) {
                for (B in ((F = null), this.Ia)) {
                  this.Ia.hasOwnProperty(B) &&
                    (!1 === this.Td.Kg
                      ? E < this.Ia[B] && (F = this.Ia[B])
                      : E > this.Ia[B] && (F = this.Ia[B]));
                }
                null !== F
                  ? null !== this.Wb
                    ? F !== this.Wb &&
                      ((this.Wb = F),
                      "unslick" === this.Dc[F]
                        ? this.Bh(F)
                        : ((this.options = M.extend({}, this.Td, this.Dc[F])),
                          !0 === q && (this.C = this.options.Jd),
                          this.refresh(q)),
                      (w = F))
                    : ((this.Wb = F),
                      "unslick" === this.Dc[F]
                        ? this.Bh(F)
                        : ((this.options = M.extend({}, this.Td, this.Dc[F])),
                          !0 === q && (this.C = this.options.Jd),
                          this.refresh(q)),
                      (w = F))
                  : null !== this.Wb &&
                    ((this.Wb = null),
                    (this.options = this.Td),
                    !0 === q && (this.C = this.options.Jd),
                    this.refresh(q),
                    (w = F));
                q || !1 === w || this.D.O("breakpoint", [this, w]);
              }
            };
            N.prototype.za = function (q, B) {
              var E;
              var w = M(q.currentTarget);
              switch (
                (w.is("a") && q.preventDefault(),
                w.is("li") || (w = w.closest("li")),
                (E =
                  0 != this.l % this.options.S
                    ? 0
                    : (this.l - this.C) % this.options.S),
                q.data.message)
              ) {
                case "previous":
                  w = 0 === E ? this.options.S : this.options.j - E;
                  this.l > this.options.j && this.nb(this.C - w, !1, B);
                  break;
                case "next":
                  w = 0 === E ? this.options.S : E;
                  this.l > this.options.j && this.nb(this.C + w, !1, B);
                  break;
                case "index":
                  (E =
                    0 === q.data.index
                      ? 0
                      : q.data.index || w.index() * this.options.S),
                    this.nb(this.Ce(E), !1, B),
                    w.children().O("focus");
              }
            };
            N.prototype.Ce = function (q) {
              var B, E;
              if (((E = 0), q > (B = this.sg())[B.length - 1])) {
                q = B[B.length - 1];
              } else {
                for (var w in B) {
                  if (q < B[w]) {
                    q = E;
                    break;
                  }
                  E = B[w];
                }
              }
              return q;
            };
            N.prototype.ki = function () {
              this.options.Ib &&
                null !== this.ga &&
                (M("li", this.ga)
                  .P("click.slick", this.za)
                  .P("mouseenter.slick", M.X(this.sb, this, !0))
                  .P("mouseleave.slick", M.X(this.sb, this, !1)),
                !0 === this.options.Va && this.ga.P("keydown.slick", this.$a));
              this.D.P("focus.slick blur.slick");
              !0 === this.options.Db &&
                this.l > this.options.j &&
                (this.aa && this.aa.P("click.slick", this.za),
                this.ba && this.ba.P("click.slick", this.za),
                !0 === this.options.Va &&
                  (this.aa && this.aa.P("keydown.slick", this.$a),
                  this.ba && this.ba.P("keydown.slick", this.$a)));
              this.V.P("touchstart.slick mousedown.slick", this.eb);
              this.V.P("touchmove.slick mousemove.slick", this.eb);
              this.V.P("touchend.slick mouseup.slick", this.eb);
              this.V.P("touchcancel.slick mouseleave.slick", this.eb);
              this.V.P("click.slick", this.td);
              M(document).P(this.re, this.visibility);
              this.mi();
              !0 === this.options.Va && this.V.P("keydown.slick", this.$a);
              !0 === this.options.ng &&
                M(this.H).children().P("click.slick", this.Zd);
              M(window).P("orientationchange.slick.slick-" + this.Za, this.Ng);
              M(window).P("resize.slick.slick-" + this.Za, this.resize);
              M("[draggable!=true]", this.H).P(
                "dragstart",
                this.preventDefault
              );
              M(window).P("load.slick.slick-" + this.Za, this.setPosition);
            };
            N.prototype.mi = function () {
              this.V.P("mouseenter.slick", M.X(this.sb, this, !0));
              this.V.P("mouseleave.slick", M.X(this.sb, this, !1));
            };
            N.prototype.li = function () {
              var q;
              0 < this.options.rows &&
                ((q = this.L.children().children()).sa("style"),
                this.D.empty().append(q));
            };
            N.prototype.td = function (q) {
              !1 === this.oh &&
                (q.stopImmediatePropagation(),
                q.stopPropagation(),
                q.preventDefault());
            };
            N.prototype.gb = function (q) {
              this.Cc();
              this.G = {};
              this.ki();
              M(".slick-cloned", this.D).detach();
              this.ga && this.ga.remove();
              this.aa &&
                this.aa.length &&
                (this.aa
                  .R("slick-disabled slick-arrow slick-hidden")
                  .sa("aria-hidden aria-disabled tabindex")
                  .m("display", ""),
                this.fc.test(this.options.dd) && this.aa.remove());
              this.ba &&
                this.ba.length &&
                (this.ba
                  .R("slick-disabled slick-arrow slick-hidden")
                  .sa("aria-hidden aria-disabled tabindex")
                  .m("display", ""),
                this.fc.test(this.options.ad) && this.ba.remove());
              this.L &&
                (this.L.R(
                  "slick-slide slick-active slick-center slick-visible slick-current"
                )
                  .sa("aria-hidden")
                  .sa("data-slick-index")
                  .s(function () {
                    M(this).o("style", M(this).data("originalStyling"));
                  }),
                this.H.children(this.options.rh).detach(),
                this.H.detach(),
                this.V.detach(),
                this.D.append(this.L));
              this.li();
              this.D.R("slick-slider");
              this.D.R("slick-initialized");
              this.D.R("slick-dotted");
              this.me = !0;
              q || this.D.O("destroy", [this]);
            };
            N.prototype.fg = function (q) {
              var B = {};
              B[this.Bb] = "";
              !1 === this.options.Aa ? this.H.m(B) : this.L.T(q).m(B);
            };
            N.prototype.Qi = function (q, B) {
              var E = this;
              !1 === E.Ec
                ? (E.L.T(q).m({ zIndex: E.options.zIndex }),
                  E.L.T(q).animate(
                    { opacity: 1 },
                    E.options.speed,
                    E.options.easing,
                    B
                  ))
                : (E.xe(q),
                  E.L.T(q).m({ opacity: 1, zIndex: E.options.zIndex }),
                  B &&
                    setTimeout(function () {
                      E.fg(q);
                      B.call();
                    }, E.options.speed));
            };
            N.prototype.Ri = function (q) {
              !1 === this.Ec
                ? this.L.T(q).animate(
                    { opacity: 0, zIndex: this.options.zIndex - 2 },
                    this.options.speed,
                    this.options.easing
                  )
                : (this.xe(q),
                  this.L.T(q).m({
                    opacity: 0,
                    zIndex: this.options.zIndex - 2,
                  }));
            };
            N.prototype.Vi = function () {
              var q = this;
              q.D.P("focus.slick blur.slick").A(
                "focus.slick blur.slick",
                "*",
                function (B) {
                  B.stopImmediatePropagation();
                  var E = M(this);
                  setTimeout(function () {
                    q.options.Tj && ((q.Me = E.is(":focus")), q.Eb());
                  }, 0);
                }
              );
            };
            N.prototype.Pe = function () {
              var q = 0,
                B = 0,
                E = 0;
              if (!0 === this.options.ma) {
                if (this.l <= this.options.j) {
                  ++E;
                } else {
                  for (; q < this.l; ) {
                    ++E,
                      (q = B + this.options.S),
                      (B +=
                        this.options.S <= this.options.j
                          ? this.options.S
                          : this.options.j);
                  }
                }
              } else {
                if (!0 === this.options.ha) {
                  E = this.l;
                } else {
                  if (this.options.Bc) {
                    for (; q < this.l; ) {
                      ++E,
                        (q = B + this.options.S),
                        (B +=
                          this.options.S <= this.options.j
                            ? this.options.S
                            : this.options.j);
                    }
                  } else {
                    E =
                      1 + Math.ceil((this.l - this.options.j) / this.options.S);
                  }
                }
              }
              return E - 1;
            };
            N.prototype.Cd = function (q) {
              var B,
                E,
                w,
                F,
                g = 0;
              return (
                (this.Ea = 0),
                (E = this.L.first().outerHeight(!0)),
                !0 === this.options.ma
                  ? (this.l > this.options.j &&
                      ((this.Ea = this.ta * this.options.j * -1),
                      (F = -1),
                      !0 === this.options.vertical &&
                        !0 === this.options.ha &&
                        (2 === this.options.j
                          ? (F = -1.5)
                          : 1 === this.options.j && (F = -2)),
                      (g = E * this.options.j * F)),
                    0 != this.l % this.options.S &&
                      q + this.options.S > this.l &&
                      this.l > this.options.j &&
                      (q > this.l
                        ? ((this.Ea =
                            (this.options.j - (q - this.l)) * this.ta * -1),
                          (g = (this.options.j - (q - this.l)) * E * -1))
                        : ((this.Ea = (this.l % this.options.S) * this.ta * -1),
                          (g = (this.l % this.options.S) * E * -1))))
                  : q + this.options.j > this.l &&
                    ((this.Ea = (q + this.options.j - this.l) * this.ta),
                    (g = (q + this.options.j - this.l) * E)),
                this.l <= this.options.j && ((this.Ea = 0), (g = 0)),
                !0 === this.options.ha && this.l <= this.options.j
                  ? (this.Ea =
                      (this.ta * Math.floor(this.options.j)) / 2 -
                      (this.ta * this.l) / 2)
                  : !0 === this.options.ha && !0 === this.options.ma
                  ? (this.Ea +=
                      this.ta * Math.floor(this.options.j / 2) - this.ta)
                  : !0 === this.options.ha &&
                    ((this.Ea = 0),
                    (this.Ea += this.ta * Math.floor(this.options.j / 2))),
                (B =
                  !1 === this.options.vertical
                    ? q * this.ta * -1 + this.Ea
                    : q * E * -1 + g),
                !0 === this.options.qe &&
                  ((w =
                    this.l <= this.options.j || !1 === this.options.ma
                      ? this.H.children(".slick-slide").T(q)
                      : this.H.children(".slick-slide").T(q + this.options.j)),
                  (B =
                    !0 === this.options.Qa
                      ? w[0]
                        ? -1 * (this.H.width() - w[0].offsetLeft - w.width())
                        : 0
                      : w[0]
                      ? -1 * w[0].offsetLeft
                      : 0),
                  !0 === this.options.ha &&
                    ((w =
                      this.l <= this.options.j || !1 === this.options.ma
                        ? this.H.children(".slick-slide").T(q)
                        : this.H.children(".slick-slide").T(
                            q + this.options.j + 1
                          )),
                    (B =
                      !0 === this.options.Qa
                        ? w[0]
                          ? -1 * (this.H.width() - w[0].offsetLeft - w.width())
                          : 0
                        : w[0]
                        ? -1 * w[0].offsetLeft
                        : 0),
                    (B += (this.V.width() - w.outerWidth()) / 2))),
                B
              );
            };
            N.prototype.sg = function () {
              var q,
                B = 0,
                E = 0,
                w = [];
              for (
                !1 === this.options.ma
                  ? (q = this.l)
                  : ((B = -1 * this.options.S),
                    (E = -1 * this.options.S),
                    (q = 2 * this.l));
                B < q;

              ) {
                w.push(B),
                  (B = E + this.options.S),
                  (E +=
                    this.options.S <= this.options.j
                      ? this.options.S
                      : this.options.j);
              }
              return w;
            };
            N.prototype.Dd = function () {
              var q,
                B,
                E = this;
              return (
                (B =
                  !0 === E.options.ha ? E.ta * Math.floor(E.options.j / 2) : 0),
                !0 === E.options.ge
                  ? (E.H.find(".slick-slide").s(function (w, F) {
                      if (
                        F.offsetLeft - B + M(F).outerWidth() / 2 >
                        -1 * E.ob
                      ) {
                        return (q = F), !1;
                      }
                    }),
                    Math.abs(M(q).o("data-slick-index") - E.C) || 1)
                  : E.options.S
              );
            };
            N.prototype.Ya = function (q) {
              M(this.D).cc("slick-initialized") ||
                (M(this.D).I("slick-initialized"),
                this.di(),
                this.ci(),
                this.Dk(),
                this.Nk(),
                this.Bj(),
                this.pj(),
                this.Ch(),
                this.Bf(),
                this.De(!0),
                this.Vi());
              q && this.D.O("init", [this]);
              !0 === this.options.Va && this.yg();
              this.options.autoplay && ((this.paused = !1), this.Eb());
            };
            N.prototype.yg = function () {
              var q = this,
                B = Math.ceil(q.l / q.options.j),
                E = q.sg().filter(function (g) {
                  return 0 <= g && g < q.l;
                });
              q.L.add(q.H.find(".slick-cloned"))
                .o({ "aria-hidden": "true", zb: "-1" })
                .find("a, input, button, select")
                .o({ zb: "-1" });
              null !== q.ga &&
                (q.L.ub(q.H.find(".slick-cloned")).s(function (g) {
                  var W = E.indexOf(g);
                  if (
                    (M(this).o({
                      wb: "tabpanel",
                      id: "slick-slide" + q.Za + g,
                      zb: -1,
                    }),
                    -1 !== W)
                  ) {
                    (g = "slick-slide-control" + q.Za + W),
                      M("#" + g).length && M(this).o({ "aria-describedby": g });
                  }
                }),
                q.ga
                  .o("role", "tablist")
                  .find("li")
                  .s(function (g) {
                    var W = E[g];
                    M(this).o({ wb: "presentation" });
                    M(this)
                      .find("button")
                      .first()
                      .o({
                        wb: "tab",
                        id: "slick-slide-control" + q.Za + g,
                        "aria-controls": "slick-slide" + q.Za + W,
                        "aria-label": g + 1 + " of " + B,
                        "aria-selected": null,
                        zb: "-1",
                      });
                  })
                  .T(q.C)
                  .find("button")
                  .o({ "aria-selected": "true", zb: "0" })
                  .end());
              for (var w = q.C, F = w + q.options.j; w < F; w++) {
                q.options.mg
                  ? q.L.T(w).o({ zb: "0" })
                  : q.L.T(w).sa("tabindex");
              }
              q.Sh();
            };
            N.prototype.lj = function () {
              !0 === this.options.Db &&
                this.l > this.options.j &&
                (this.aa
                  .P("click.slick")
                  .A("click.slick", { message: "previous" }, this.za),
                this.ba
                  .P("click.slick")
                  .A("click.slick", { message: "next" }, this.za),
                !0 === this.options.Va &&
                  (this.aa.A("keydown.slick", this.$a),
                  this.ba.A("keydown.slick", this.$a)));
            };
            N.prototype.mj = function () {
              !0 === this.options.Ib &&
                this.l > this.options.j &&
                (M("li", this.ga).A(
                  "click.slick",
                  { message: "index" },
                  this.za
                ),
                !0 === this.options.Va && this.ga.A("keydown.slick", this.$a));
              !0 === this.options.Ib &&
                !0 === this.options.Sj &&
                this.l > this.options.j &&
                M("li", this.ga)
                  .A("mouseenter.slick", M.X(this.sb, this, !0))
                  .A("mouseleave.slick", M.X(this.sb, this, !1));
            };
            N.prototype.nj = function () {
              this.options.Uj &&
                (this.V.A("mouseenter.slick", M.X(this.sb, this, !0)),
                this.V.A("mouseleave.slick", M.X(this.sb, this, !1)));
            };
            N.prototype.pj = function () {
              this.lj();
              this.mj();
              this.nj();
              this.V.A(
                "touchstart.slick mousedown.slick",
                { action: "start" },
                this.eb
              );
              this.V.A(
                "touchmove.slick mousemove.slick",
                { action: "move" },
                this.eb
              );
              this.V.A(
                "touchend.slick mouseup.slick",
                { action: "end" },
                this.eb
              );
              this.V.A(
                "touchcancel.slick mouseleave.slick",
                { action: "end" },
                this.eb
              );
              this.V.A("click.slick", this.td);
              M(document).A(this.re, M.X(this.visibility, this));
              !0 === this.options.Va && this.V.A("keydown.slick", this.$a);
              !0 === this.options.ng &&
                M(this.H).children().A("click.slick", this.Zd);
              M(window).A(
                "orientationchange.slick.slick-" + this.Za,
                M.X(this.Ng, this)
              );
              M(window).A(
                "resize.slick.slick-" + this.Za,
                M.X(this.resize, this)
              );
              M("[draggable!=true]", this.H).A(
                "dragstart",
                this.preventDefault
              );
              M(window).A("load.slick.slick-" + this.Za, this.setPosition);
              M(this.setPosition);
            };
            N.prototype.oj = function () {
              !0 === this.options.Db &&
                this.l > this.options.j &&
                (this.aa.show(), this.ba.show());
              !0 === this.options.Ib &&
                this.l > this.options.j &&
                this.ga.show();
            };
            N.prototype.$a = function (q) {
              q.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === q.keyCode && !0 === this.options.Va
                  ? this.za({
                      data: {
                        message: !0 === this.options.Qa ? "next" : "previous",
                      },
                    })
                  : 39 === q.keyCode &&
                    !0 === this.options.Va &&
                    this.za({
                      data: {
                        message: !0 === this.options.Qa ? "previous" : "next",
                      },
                    }));
            };
            N.prototype.lc = function () {
              function q(G) {
                M("img[data-lazy]", G).s(function () {
                  var ea = M(this),
                    Z = M(this).o("data-lazy"),
                    oa = M(this).o("data-srcset"),
                    Ba = M(this).o("data-sizes") || F.D.o("data-sizes"),
                    ra = document.createElement("img");
                  ra.onload = function () {
                    ea.animate({ opacity: 0 }, 100, function () {
                      oa && (ea.o("srcset", oa), Ba && ea.o("sizes", Ba));
                      ea.o("src", Z).animate({ opacity: 1 }, 200, function () {
                        ea.sa("data-lazy data-srcset data-sizes").R(
                          "slick-loading"
                        );
                      });
                      F.D.O("lazyLoaded", [F, ea, Z]);
                    });
                  };
                  ra.onerror = function () {
                    ea.sa("data-lazy")
                      .R("slick-loading")
                      .I("slick-lazyload-error");
                    F.D.O("lazyLoadError", [F, ea, Z]);
                  };
                  ra.src = Z;
                });
              }
              var B,
                E,
                w,
                F = this;
              if (
                (!0 === F.options.ha
                  ? !0 === F.options.ma
                    ? (w = (E = F.C + (F.options.j / 2 + 1)) + F.options.j + 2)
                    : ((E = Math.max(0, F.C - (F.options.j / 2 + 1))),
                      (w = F.options.j / 2 + 3 + F.C))
                  : ((E = F.options.ma ? F.options.j + F.C : F.C),
                    (w = Math.ceil(E + F.options.j)),
                    !0 === F.options.Aa && (0 < E && E--, w <= F.l && w++)),
                (B = F.D.find(".slick-slide").slice(E, w)),
                "anticipated" === F.options.lc)
              ) {
                --E;
                for (
                  var g = F.D.find(".slick-slide"), W = 0;
                  W < F.options.S;
                  W++
                ) {
                  0 > E && (E = F.l - 1),
                    (B = (B = B.add(g.T(E))).add(g.T(w))),
                    E--,
                    w++;
                }
              }
              q(B);
              F.l <= F.options.j
                ? q(F.D.find(".slick-slide"))
                : F.C >= F.l - F.options.j
                ? q(F.D.find(".slick-cloned").slice(0, F.options.j))
                : 0 === F.C &&
                  q(F.D.find(".slick-cloned").slice(-1 * F.options.j));
            };
            N.prototype.Bj = function () {
              this.setPosition();
              this.H.m({ opacity: 1 });
              this.D.R("slick-loading");
              this.oj();
              "progressive" === this.options.lc && this.Vd();
            };
            N.prototype.next = function () {
              this.za({ data: { message: "next" } });
            };
            N.prototype.Ng = function () {
              this.De();
              this.setPosition();
            };
            N.prototype.pause = function () {
              this.Cc();
              this.paused = !0;
            };
            N.prototype.play = function () {
              this.Eb();
              this.options.autoplay = !0;
              this.Mb = this.Me = this.paused = !1;
            };
            N.prototype.vb = function (q) {
              this.me ||
                (this.D.O("afterChange", [this, q]),
                (this.md = !1),
                this.l > this.options.j && this.setPosition(),
                (this.ob = null),
                this.options.autoplay && this.Eb(),
                !0 === this.options.Va &&
                  (this.yg(),
                  this.options.mg &&
                    M(this.L.get(this.C)).o("tabindex", 0).focus()));
            };
            N.prototype.Ug = function () {
              this.za({ data: { message: "previous" } });
            };
            N.prototype.preventDefault = function (q) {
              q.preventDefault();
            };
            N.prototype.Vd = function (q) {
              q = q || 1;
              var B,
                E,
                w,
                F,
                g,
                W = this,
                G = M("img[data-lazy]", W.D);
              G.length
                ? ((B = G.first()),
                  (E = B.o("data-lazy")),
                  (w = B.o("data-srcset")),
                  (F = B.o("data-sizes") || W.D.o("data-sizes")),
                  ((g = document.createElement("img")).onload = function () {
                    w && (B.o("srcset", w), F && B.o("sizes", F));
                    B.o("src", E)
                      .sa("data-lazy data-srcset data-sizes")
                      .R("slick-loading");
                    !0 === W.options.ue && W.setPosition();
                    W.D.O("lazyLoaded", [W, B, E]);
                    W.Vd();
                  }),
                  (g.onerror = function () {
                    3 > q
                      ? setTimeout(function () {
                          W.Vd(q + 1);
                        }, 500)
                      : (B.sa("data-lazy")
                          .R("slick-loading")
                          .I("slick-lazyload-error"),
                        W.D.O("lazyLoadError", [W, B, E]),
                        W.Vd());
                  }),
                  (g.src = E))
                : W.D.O("allImagesLoaded", [W]);
            };
            N.prototype.refresh = function (q) {
              var B = this.l - this.options.j;
              !this.options.ma && this.C > B && (this.C = B);
              this.l <= this.options.j && (this.C = 0);
              B = this.C;
              this.gb(!0);
              M.extend(this, this.zg, { C: B });
              this.Ya();
              q || this.za({ data: { message: "index", index: B } }, !1);
            };
            N.prototype.jk = function () {
              var q,
                B,
                E,
                w = this,
                F = w.options.Xd || null;
              if ("array" === M.type(F) && F.length) {
                for (q in ((w.rc = w.options.rc || "window"), F)) {
                  if (((E = w.Ia.length - 1), F.hasOwnProperty(q))) {
                    for (B = F[q].em; 0 <= E; ) {
                      w.Ia[E] && w.Ia[E] === B && w.Ia.splice(E, 1), E--;
                    }
                    w.Ia.push(B);
                    w.Dc[B] = F[q].J;
                  }
                }
                w.Ia.sort(function (g, W) {
                  return w.options.Kg ? g - W : W - g;
                });
              }
            };
            N.prototype.resize = function () {
              var q = this;
              M(window).width() !== q.Ih &&
                (clearTimeout(q.rl),
                (q.rl = window.setTimeout(function () {
                  q.Ih = M(window).width();
                  q.De();
                  q.me || q.setPosition();
                }, 50)));
            };
            N.prototype.ih = function (q) {
              var B = {};
              !0 === this.options.Qa && (q = -q);
              var E = "left" == this.cd ? Math.ceil(q) + "px" : "0px";
              var w = "top" == this.cd ? Math.ceil(q) + "px" : "0px";
              B[this.cd] = q;
              !1 === this.yf
                ? this.H.m(B)
                : ((B = {}),
                  !1 === this.Ec
                    ? ((B[this.ka] = "translate(" + E + ", " + w + ")"),
                      this.H.m(B))
                    : ((B[this.ka] = "translate3d(" + E + ", " + w + ", 0px)"),
                      this.H.m(B)));
            };
            N.prototype.yk = function () {
              !1 === this.options.vertical
                ? !0 === this.options.ha &&
                  this.V.m({ padding: "0px " + this.options.Xf })
                : (this.V.height(
                    this.L.first().outerHeight(!0) * this.options.j
                  ),
                  !0 === this.options.ha &&
                    this.V.m({ padding: this.options.Xf + " 0px" }));
              this.Xc = this.V.width();
              this.Gg = this.V.height();
              !1 === this.options.vertical && !1 === this.options.qe
                ? ((this.ta = Math.ceil(this.Xc / this.options.j)),
                  this.H.width(
                    Math.ceil(this.ta * this.H.children(".slick-slide").length)
                  ))
                : !0 === this.options.qe
                ? this.H.width(5e3 * this.l)
                : ((this.ta = Math.ceil(this.Xc)),
                  this.H.height(
                    Math.ceil(
                      this.L.first().outerHeight(!0) *
                        this.H.children(".slick-slide").length
                    )
                  ));
              var q = this.L.first().outerWidth(!0) - this.L.first().width();
              !1 === this.options.qe &&
                this.H.children(".slick-slide").width(this.ta - q);
            };
            N.prototype.zk = function () {
              var q,
                B = this;
              B.L.s(function (E, w) {
                q = B.ta * E * -1;
                !0 === B.options.Qa
                  ? M(w).m({
                      position: "relative",
                      right: q,
                      top: 0,
                      zIndex: B.options.zIndex - 2,
                      opacity: 0,
                    })
                  : M(w).m({
                      position: "relative",
                      left: q,
                      top: 0,
                      zIndex: B.options.zIndex - 2,
                      opacity: 0,
                    });
              });
              B.L.T(B.C).m({ zIndex: B.options.zIndex - 1, opacity: 1 });
            };
            N.prototype.Ak = function () {
              if (
                1 === this.options.j &&
                !0 === this.options.ue &&
                !1 === this.options.vertical
              ) {
                var q = this.L.T(this.C).outerHeight(!0);
                this.V.m("height", q);
              }
            };
            N.prototype.setPosition = function () {
              this.yk();
              this.Ak();
              !1 === this.options.Aa ? this.ih(this.Cd(this.C)) : this.zk();
              this.D.O("setPosition", [this]);
            };
            N.prototype.Dk = function () {
              var q = document.body.style;
              this.cd = !0 === this.options.vertical ? "top" : "left";
              "top" === this.cd
                ? this.D.I("slick-vertical")
                : this.D.R("slick-vertical");
              (void 0 === q.WebkitTransition &&
                void 0 === q.MozTransition &&
                void 0 === q.msTransition) ||
                (!0 === this.options.jl && (this.Ec = !0));
              this.options.Aa &&
                ("number" == typeof this.options.zIndex
                  ? 3 > this.options.zIndex && (this.options.zIndex = 3)
                  : (this.options.zIndex = this.yd.zIndex));
              void 0 !== q.Pl &&
                ((this.ka = "OTransform"),
                (this.vc = "-o-transform"),
                (this.Bb = "OTransition"),
                void 0 === q.Qg &&
                  void 0 === q.webkitPerspective &&
                  (this.ka = !1));
              void 0 !== q.MozTransform &&
                ((this.ka = "MozTransform"),
                (this.vc = "-moz-transform"),
                (this.Bb = "MozTransition"),
                void 0 === q.Qg &&
                  void 0 === q.MozPerspective &&
                  (this.ka = !1));
              void 0 !== q.webkitTransform &&
                ((this.ka = "webkitTransform"),
                (this.vc = "-webkit-transform"),
                (this.Bb = "webkitTransition"),
                void 0 === q.Qg &&
                  void 0 === q.webkitPerspective &&
                  (this.ka = !1));
              void 0 !== q.msTransform &&
                ((this.ka = "msTransform"),
                (this.vc = "-ms-transform"),
                (this.Bb = "msTransition"),
                void 0 === q.msTransform && (this.ka = !1));
              void 0 !== q.transform &&
                !1 !== this.ka &&
                ((this.ka = "transform"),
                (this.vc = "transform"),
                (this.Bb = "transition"));
              this.yf = this.options.kl && null !== this.ka && !1 !== this.ka;
            };
            N.prototype.kf = function (q) {
              var B, E;
              if (
                ((B = this.D.find(".slick-slide")
                  .R("slick-active slick-center slick-current")
                  .o("aria-hidden", "true")),
                this.L.T(q).I("slick-current"),
                !0 === this.options.ha)
              ) {
                var w = 0 == this.options.j % 2 ? 1 : 0;
                var F = Math.floor(this.options.j / 2);
                !0 === this.options.ma &&
                  (q >= F && q <= this.l - 1 - F
                    ? this.L.slice(q - F + w, q + F + 1)
                        .I("slick-active")
                        .o("aria-hidden", "false")
                    : ((E = this.options.j + q),
                      B.slice(E - F + 1 + w, E + F + 2)
                        .I("slick-active")
                        .o("aria-hidden", "false")),
                  0 === q
                    ? B.T(B.length - 1 - this.options.j).I("slick-center")
                    : q === this.l - 1 &&
                      B.T(this.options.j).I("slick-center"));
                this.L.T(q).I("slick-center");
              } else {
                0 <= q && q <= this.l - this.options.j
                  ? this.L.slice(q, q + this.options.j)
                      .I("slick-active")
                      .o("aria-hidden", "false")
                  : B.length <= this.options.j
                  ? B.I("slick-active").o("aria-hidden", "false")
                  : ((F = this.l % this.options.j),
                    (E = !0 === this.options.ma ? this.options.j + q : q),
                    this.options.j == this.options.S &&
                    this.l - q < this.options.j
                      ? B.slice(E - (this.options.j - F), E + F)
                          .I("slick-active")
                          .o("aria-hidden", "false")
                      : B.slice(E, E + this.options.j)
                          .I("slick-active")
                          .o("aria-hidden", "false"));
              }
              ("ondemand" !== this.options.lc &&
                "anticipated" !== this.options.lc) ||
                this.lc();
            };
            N.prototype.Gk = function () {
              var q, B;
              if (
                (!0 === this.options.Aa && (this.options.ha = !1),
                !0 === this.options.ma &&
                  !1 === this.options.Aa &&
                  ((B = null), this.l > this.options.j))
              ) {
                var E =
                  !0 === this.options.ha ? this.options.j + 1 : this.options.j;
                for (q = this.l; q > this.l - E; --q) {
                  (B = q - 1),
                    M(this.L[B])
                      .clone(!0)
                      .o("id", "")
                      .o("data-slick-index", B - this.l)
                      .Tg(this.H)
                      .I("slick-cloned");
                }
                for (q = 0; q < E + this.l; q += 1) {
                  (B = q),
                    M(this.L[B])
                      .clone(!0)
                      .o("id", "")
                      .o("data-slick-index", B + this.l)
                      .nd(this.H)
                      .I("slick-cloned");
                }
                this.H.find(".slick-cloned")
                  .find("[id]")
                  .s(function () {
                    M(this).o("id", "");
                  });
              }
            };
            N.prototype.sb = function (q) {
              q || this.Eb();
              this.Mb = q;
            };
            N.prototype.Zd = function (q) {
              q = M(q.target).is(".slick-slide")
                ? M(q.target)
                : M(q.target).Qj(".slick-slide");
              (q = parseInt(q.o("data-slick-index"))) || (q = 0);
              this.l <= this.options.j ? this.nb(q, !1, !0) : this.nb(q);
            };
            N.prototype.nb = function (q, B, E) {
              var w,
                F,
                g,
                W,
                G = this;
              ((B = B || !1),
              (!0 === G.md && !0 === G.options.nl) ||
                (!0 === G.options.Aa && G.C === q)) ||
                ((!1 === B && G.Bc(q),
                (w = q),
                (B = G.Cd(w)),
                (g = G.Cd(G.C)),
                (G.xd = null === G.ob ? g : G.ob),
                !1 === G.options.ma &&
                  !1 === G.options.ha &&
                  (0 > q || q > G.Pe() * G.options.S))
                  ? !1 === G.options.Aa &&
                    ((w = G.C),
                    !0 !== E && G.l > G.options.j
                      ? G.we(g, function () {
                          G.vb(w);
                        })
                      : G.vb(w))
                  : !1 === G.options.ma &&
                    !0 === G.options.ha &&
                    (0 > q || q > G.l - G.options.S)
                  ? !1 === G.options.Aa &&
                    ((w = G.C),
                    !0 !== E && G.l > G.options.j
                      ? G.we(g, function () {
                          G.vb(w);
                        })
                      : G.vb(w))
                  : (G.options.autoplay && clearInterval(G.pd),
                    (F =
                      0 > w
                        ? 0 != G.l % G.options.S
                          ? G.l - (G.l % G.options.S)
                          : G.l + w
                        : w >= G.l
                        ? 0 != G.l % G.options.S
                          ? 0
                          : w - G.l
                        : w),
                    (G.md = !0),
                    G.D.O("beforeChange", [G, G.C, F]),
                    (q = G.C),
                    (G.C = F),
                    G.kf(G.C),
                    G.options.Bc &&
                      (W = (W = G.rg()).sc("getSlick")).l <= W.options.j &&
                      W.kf(G.C),
                    G.Bf(),
                    G.Ch(),
                    !0 === G.options.Aa)
                  ? (!0 !== E
                      ? (G.Ri(q),
                        G.Qi(F, function () {
                          G.vb(F);
                        }))
                      : G.vb(F),
                    G.Of())
                  : !0 !== E && G.l > G.options.j
                  ? G.we(B, function () {
                      G.vb(F);
                    })
                  : G.vb(F));
            };
            N.prototype.Nk = function () {
              !0 === this.options.Db &&
                this.l > this.options.j &&
                (this.aa.Oc(), this.ba.Oc());
              !0 === this.options.Ib && this.l > this.options.j && this.ga.Oc();
              this.D.I("slick-loading");
            };
            N.prototype.rf = function () {
              var q, B, E, w;
              return (
                (q = this.G.fe - this.G.$b),
                (B = this.G.qf - this.G.wd),
                (E = Math.atan2(B, q)),
                0 > (w = Math.round((180 * E) / Math.PI)) &&
                  (w = 360 - Math.abs(w)),
                (45 >= w && 0 <= w) || (360 >= w && 315 <= w)
                  ? !1 === this.options.Qa
                    ? "left"
                    : "right"
                  : 135 <= w && 225 >= w
                  ? !1 === this.options.Qa
                    ? "right"
                    : "left"
                  : !0 === this.options.wc
                  ? 35 <= w && 135 >= w
                    ? "down"
                    : "up"
                  : "vertical"
              );
            };
            N.prototype.Qk = function () {
              var q;
              if (((this.Je = !1), (this.sf = !1), this.scrolling)) {
                this.scrolling = !1;
              } else {
                if (
                  ((this.Mb = !1),
                  (this.oh = !(10 < this.G.uc)),
                  void 0 !== this.G.$b)
                ) {
                  if (
                    (!0 === this.G.hg && this.D.O("edge", [this, this.rf()]),
                    this.G.uc >= this.G.Jg)
                  ) {
                    switch ((q = this.rf())) {
                      case "left":
                      case "down":
                        var B = this.options.ge
                          ? this.Ce(this.C + this.Dd())
                          : this.C + this.Dd();
                        this.currentDirection = 0;
                        break;
                      case "right":
                      case "up":
                        (B = this.options.ge
                          ? this.Ce(this.C - this.Dd())
                          : this.C - this.Dd()),
                          (this.currentDirection = 1);
                    }
                    "vertical" != q &&
                      (this.nb(B), (this.G = {}), this.D.O("swipe", [this, q]));
                  } else {
                    this.G.fe !== this.G.$b && (this.nb(this.C), (this.G = {}));
                  }
                }
              }
            };
            N.prototype.eb = function (q) {
              if (
                !(
                  !1 === this.options.uh ||
                  ("ontouchend" in document && !1 === this.options.uh) ||
                  (!1 === this.options.draggable &&
                    -1 !== q.type.indexOf("mouse"))
                )
              ) {
                switch (
                  ((this.G.Ti =
                    q.na && void 0 !== q.na.touches ? q.na.touches.length : 1),
                  (this.G.Jg = this.Xc / this.options.zh),
                  !0 === this.options.wc &&
                    (this.G.Jg = this.Gg / this.options.zh),
                  q.data.action)
                ) {
                  case "start":
                    this.Sk(q);
                    break;
                  case "move":
                    this.Rk(q);
                    break;
                  case "end":
                    this.Qk();
                }
              }
            };
            N.prototype.Rk = function (q) {
              var B, E, w, F, g;
              var W = void 0 !== q.na ? q.na.touches : null;
              !(!this.Je || this.scrolling || (W && 1 !== W.length)) &&
                ((B = this.Cd(this.C)),
                (this.G.$b = void 0 !== W ? W[0].pageX : q.clientX),
                (this.G.wd = void 0 !== W ? W[0].pageY : q.clientY),
                (this.G.uc = Math.round(
                  Math.sqrt(Math.pow(this.G.$b - this.G.fe, 2))
                )),
                (g = Math.round(Math.sqrt(Math.pow(this.G.wd - this.G.qf, 2)))),
                !this.options.wc && !this.sf && 4 < g
                  ? (this.scrolling = !0)
                  : (!0 === this.options.wc && (this.G.uc = g),
                    (E = this.rf()),
                    void 0 !== q.na &&
                      4 < this.G.uc &&
                      ((this.sf = !0), q.preventDefault()),
                    (F =
                      (!1 === this.options.Qa ? 1 : -1) *
                      (this.G.$b > this.G.fe ? 1 : -1)),
                    !0 === this.options.wc &&
                      (F = this.G.wd > this.G.qf ? 1 : -1),
                    (w = this.G.uc),
                    (this.G.hg = !1),
                    !1 === this.options.ma &&
                      ((0 === this.C && "right" === E) ||
                        (this.C >= this.Pe() && "left" === E)) &&
                      ((w = this.G.uc * this.options.Li), (this.G.hg = !0)),
                    !1 === this.options.vertical
                      ? (this.ob = B + w * F)
                      : (this.ob = B + w * (this.V.height() / this.Xc) * F),
                    !0 === this.options.wc && (this.ob = B + w * F),
                    !0 !== this.options.Aa &&
                      !1 !== this.options.fl &&
                      (!0 === this.md ? (this.ob = null) : this.ih(this.ob))));
            };
            N.prototype.Sk = function (q) {
              var B;
              ((this.Mb = !0), 1 !== this.G.Ti || this.l <= this.options.j)
                ? (this.G = {})
                : (void 0 !== q.na &&
                    void 0 !== q.na.touches &&
                    (B = q.na.touches[0]),
                  (this.G.fe = this.G.$b = void 0 !== B ? B.pageX : q.clientX),
                  (this.G.qf = this.G.wd = void 0 !== B ? B.pageY : q.clientY),
                  (this.Je = !0));
            };
            N.prototype.il = function () {
              M(".slick-cloned", this.D).remove();
              this.ga && this.ga.remove();
              this.aa && this.fc.test(this.options.dd) && this.aa.remove();
              this.ba && this.fc.test(this.options.ad) && this.ba.remove();
              this.L.R("slick-slide slick-active slick-visible slick-current")
                .o("aria-hidden", "true")
                .m("width", "");
            };
            N.prototype.Bh = function (q) {
              this.D.O("unslick", [this, q]);
              this.gb();
            };
            N.prototype.Ch = function () {
              Math.floor(this.options.j / 2);
              !0 === this.options.Db &&
                this.l > this.options.j &&
                !this.options.ma &&
                (this.aa.R("slick-disabled").o("aria-disabled", "false"),
                this.ba.R("slick-disabled").o("aria-disabled", "false"),
                0 === this.C
                  ? (this.aa.I("slick-disabled").o("aria-disabled", "true"),
                    this.ba.R("slick-disabled").o("aria-disabled", "false"))
                  : ((this.C >= this.l - this.options.j &&
                      !1 === this.options.ha) ||
                      (this.C >= this.l - 1 && !0 === this.options.ha)) &&
                    (this.ba.I("slick-disabled").o("aria-disabled", "true"),
                    this.aa.R("slick-disabled").o("aria-disabled", "false")));
            };
            N.prototype.Bf = function () {
              null !== this.ga &&
                (this.ga.find("li").R("slick-active").end(),
                this.ga
                  .find("li")
                  .T(Math.floor(this.C / this.options.S))
                  .I("slick-active"));
            };
            N.prototype.visibility = function () {
              this.options.autoplay &&
                (document[this.hidden] ? (this.Mb = !0) : (this.Mb = !1));
            };
            M.M.sc = function () {
              var q,
                B,
                E = arguments[0],
                w = Array.prototype.slice.call(arguments, 1),
                F = this.length;
              for (q = 0; q < F; q++) {
                if (
                  ("object" == typeof E || void 0 === E
                    ? (this[q].sc = new N(this[q], E))
                    : (B = this[q].sc[E].apply(this[q].sc, w)),
                  void 0 !== B)
                ) {
                  return B;
                }
              }
              return this;
            };
            var gb;
          })
            ? H.apply(ca, da)
            : H) || (X.exports = Ia);
    })();
  },
  function (X, ca, Q) {
    ca = Q(1);
    Q = Q(7);
    "string" == typeof (Q = Q.yc ? Q["default"] : Q) && (Q = [[X.Id, Q, ""]]);
    ca(Q, { hc: "head", Qb: !1 });
    X.exports = Q.Ze || {};
  },
  function () {},
  function (X, ca, Q) {
    ca = Q(1);
    Q = Q(9);
    "string" == typeof (Q = Q.yc ? Q["default"] : Q) && (Q = [[X.Id, Q, ""]]);
    ca(Q, { hc: "head", Qb: !1 });
    X.exports = Q.Ze || {};
  },
  function () {},
  function (X, ca, Q) {
    ca = Q(1);
    Q = Q(11);
    "string" == typeof (Q = Q.yc ? Q["default"] : Q) && (Q = [[X.Id, Q, ""]]);
    ca(Q, { hc: "head", Qb: !1 });
    X.exports = Q.Ze || {};
  },
  function () {},
  function (X, ca, Q) {
    ca = Q(1);
    Q = Q(13);
    "string" == typeof (Q = Q.yc ? Q["default"] : Q) && (Q = [[X.Id, Q, ""]]);
    ca(Q, { hc: "head", Qb: !1 });
    X.exports = Q.Ze || {};
  },
  function () {},
  function (X, ca, Q) {
    Q.r(ca);
    X = Q(0);
    var H = Q.n(X);
    X = Q(2);
    var da = Q.n(X);
    H()(document).ready(function () {
      H.a.s(H()(".ibg"), function () {
        0 < H()(this).find("img").length &&
          H()(this).m(
            "background-image",
            'url("' + H()(this).find("img").o("src") + '")'
          );
      });
    });
    H()(window).A("load", function () {
      H()(".cssload").delay(200).zd("slow");
    });
    var Ia,
      M = document.querySelector(".header__menu_overlay"),
      N = document.querySelector(".header-burger"),
      gb = document.body,
      q = document.querySelector(".header__body"),
      B = document.querySelector("#header__menu"),
      E = document.querySelector(".header__service");
    document.querySelector(".wrapper").addEventListener("click", function (F) {
      F.target == N
        ? (B.classList.add("header__menu_act"),
          B.appendChild(E),
          E.classList.add("header-service_act"),
          gb.classList.add("lock"))
        : M !== F.target &&
          document.querySelector("input") !== F.target &&
          document.querySelector("i") !== F.target &&
          document.querySelector(".bg") !== F.target &&
          (B.classList.remove("header__menu_act"),
          E.classList.remove("header-service_act"),
          q.appendChild(E),
          gb.classList.remove("lock"));
      F.target == document.querySelector(".header-close") &&
        (B.classList.remove("header__menu_act"), gb.classList.remove("lock"));
    });
    window.addEventListener("resize", function () {
      992 < document.documentElement.clientWidth &&
        B.classList.contains("header__menu_act") &&
        (B.classList.remove("header__menu_act"),
        E.classList.remove("header-service_act"),
        q.appendChild(E),
        (gb.style.overflow = "visible"));
    });
    window.addEventListener("scroll", function () {
      150 < window.pageYOffset
        ? document.querySelector(".header").classList.add("responciveHeader")
        : document
            .querySelector(".header")
            .classList.remove("responciveHeader");
    });
    var w = document.querySelector(".up_down_btn");
    window.addEventListener("scroll", function () {
      var F = window.pageYOffset;
      200 < F &&
        (w.classList.add("up_down_btn-show"),
        (w.innerHTML = "&uarr;"),
        w.setAttribute("title", "\u041d\u0430\u0432\u0435\u0440\u0445"),
        (Ia = !1));
      200 > F &&
        ((w.innerHTML = "&darr;"),
        w.setAttribute("title", "\u0412\u043d\u0438\u0437"),
        (Ia = !0));
    });
    w.addEventListener("click", function () {
      w.classList.add("up_down_btn-disabled");
      Ia
        ? Ia &&
          (function g() {
            Math.ceil(
              window.pageYOffset + document.documentElement.clientHeight
            ) != document.documentElement.scrollHeight
              ? (window.scrollBy(0, 15), setTimeout(g, 0))
              : w.classList.remove("up_down_btn-disabled");
          })()
        : (function W() {
            0 !== window.pageYOffset
              ? (window.scrollBy(0, -15), setTimeout(W, 0))
              : w.classList.remove("up_down_btn-disabled");
          })();
    });
    H()(document).ready(function () {
      H()('a[href^="#slider"]').click(function () {
        var F = H()(this).o("href");
        return (
          H()("html, body").animate(
            { scrollTop: H()(F).offset().top - 60 },
            800
          ),
          B.classList.remove("header__menu_act"),
          E.classList.remove("header-service_act"),
          q.appendChild(E),
          (gb.style.overflow = "visible"),
          !1
        );
      });
    });
    H()(document).ready(function () {
      H()('a[href^="#work"]').click(function () {
        var F = H()(this).o("href");
        return (
          H()("html, body").animate(
            { scrollTop: H()(F).offset().top - 60 },
            800
          ),
          B.classList.remove("header__menu_act"),
          E.classList.remove("header-service_act"),
          q.appendChild(E),
          (gb.style.overflow = "visible"),
          !1
        );
      });
    });
    H()(document).ready(function () {
      H()('a[href^="#arhi"]').click(function () {
        var F = H()(this).o("href");
        return (
          H()("html, body").animate(
            { scrollTop: H()(F).offset().top - 60 },
            800
          ),
          B.classList.remove("header__menu_act"),
          E.classList.remove("header-service_act"),
          q.appendChild(E),
          (gb.style.overflow = "visible"),
          !1
        );
      });
    });
    H()(document).ready(function () {
      H()('a[href^="#footer"]').click(function () {
        var F = H()(this).o("href");
        return (
          H()("html, body").animate(
            { scrollTop: H()(F).offset().top - 60 },
            800
          ),
          B.classList.remove("header__menu_act"),
          E.classList.remove("header-service_act"),
          q.appendChild(E),
          (gb.style.overflow = "visible"),
          !1
        );
      });
    });
    H()(document).ready(function () {
      var F = new da.a("#player"),
        g = H()(".popup");
      H()(".popup-init-js").A("click", function () {
        g.zd(200);
        var W = H()(this).o("rel"),
          G = H()("div." + W);
        g.cc(W) && G.Pi(200);
        G.cc("first-popup") && F.play();
        H()("body").m("overflow", "hidden");
      });
      H()(".close-js").A("click", function () {
        g.zd(200);
        H()("body").m("overflow", "visible");
        F.stop();
      });
      H()(document).A("mouseup", function (W) {
        H()(".popup__overlay").is(W.target) &&
          (g.zd(200),
          H()("body").R("lock"),
          H()("body").m("overflow", "visible"),
          F.stop());
      });
    });
    Q(4);
    H()(document).ready(function () {
      H()(".tabs-title-js").A("click", function () {
        var F = H()(this).ph(".tabs-drop-js"),
          g = H()(this).find(".tabs-img-js"),
          W = H()(this).parent().parent(".tabs__item");
        F.cc("act")
          ? (F.ce(200).R("act"),
            setTimeout(function () {
              W.R("act");
            }, 200),
            g.m("transform", "rotate(90deg)"))
          : (W.I("act"),
            g.m("transform", "rotate(-90deg)"),
            F.nf(200).I("act"));
      });
    });
    H()(document).ready(function () {
      H()(".tabsDep-title-js").A("click", function () {
        var F = H()(this).ph(".tabsDep-drop-js"),
          g = H()(this).find(".tabsDep-img-js"),
          W = H()(this).parent().parent(".tabs__item");
        F.cc("act")
          ? (F.ce(200).R("act"),
            setTimeout(function () {
              W.R("act");
            }, 200),
            g.m("transform", "rotate(90deg)"))
          : (W.I("act"),
            g.m("transform", "rotate(-90deg)"),
            F.nf(200).I("act"),
            setTimeout(function () {
              H()(".tabs__item").ub(W).R("act");
            }, 200),
            H()(".tabs__item")
              .ub(W)
              .find(".tabs-item__img")
              .m("transform", "rotate(90deg)"),
            H()(".tabs__item").ub(W).find(".tabs__drop").ce(200).R("act"));
      });
    });
    H()(document).ready(function () {
      H()(".load-more").A("click", function () {
        var F = H()(this),
          g = H()(this).find(".spinner-border");
        H()(".addFiles").ce(1);
        H.a.zc({
          url: "/data.html",
          type: "GET",
          Sf: function () {
            F.o("disabled", !0);
            g.I("d-inline-block");
          },
          tc: function (W) {
            setTimeout(function () {
              g.R("d-inline-block");
              F.o("disabled", !0);
            }, 300);
            H()(".addFiles").append(W).nf(500);
          },
          error: function () {
            alert("Error");
            g.R("d-inline-block");
            F.o("disabled", !1);
          },
        });
      });
    });
    Q(5);
    H()(Document).ready(function () {
      H()(".slider-main-js").sc({
        Ib: !0,
        Db: !0,
        speed: 800,
        easing: "ease",
        He: "linear",
        Qf: 1e3,
        ha: !1,
        j: 1,
        ad: H()(".slider-main-arrows__arrow_next"),
        dd: H()(".slider-main-arrows__arrow_prev"),
        dg: function (F, g) {
          return g + 1 + "/" + F.l;
        },
      });
    });
    Q(6);
    Q(8);
    Q(10);
    Q(12);
  },
]);
