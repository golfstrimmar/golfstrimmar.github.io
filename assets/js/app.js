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
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (V) {
  var Z = 0;
  return function () {
    return Z < V.length ? { done: !1, value: V[Z++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (V) {
  return { next: $jscomp.arrayIteratorImpl(V) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (V, Z, N) {
        if (V == Array.prototype || V == Object.prototype) return V;
        V[Z] = N.value;
        return V;
      };
$jscomp.getGlobal = function (V) {
  V = [
    "object" == typeof globalThis && globalThis,
    V,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var Z = 0; Z < V.length; ++Z) {
    var N = V[Z];
    if (N && N.Math == Math) return N;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (V, Z) {
  var N = $jscomp.propertyToPolyfillSymbol[Z];
  if (null == N) return V[Z];
  N = V[N];
  return void 0 !== N ? N : V[Z];
};
$jscomp.polyfill = function (V, Z, N, I) {
  Z &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(V, Z, N, I)
      : $jscomp.polyfillUnisolated(V, Z, N, I));
};
$jscomp.polyfillUnisolated = function (V, Z, N, I) {
  N = $jscomp.global;
  V = V.split(".");
  for (I = 0; I < V.length - 1; I++) {
    var Q = V[I];
    if (!(Q in N)) return;
    N = N[Q];
  }
  V = V[V.length - 1];
  I = N[V];
  Z = Z(I);
  Z != I &&
    null != Z &&
    $jscomp.defineProperty(N, V, { configurable: !0, writable: !0, value: Z });
};
$jscomp.polyfillIsolated = function (V, Z, N, I) {
  var Q = V.split(".");
  V = 1 === Q.length;
  I = Q[0];
  I = !V && I in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var Ia = 0; Ia < Q.length - 1; Ia++) {
    var Ha = Q[Ia];
    if (!(Ha in I)) return;
    I = I[Ha];
  }
  Q = Q[Q.length - 1];
  N = $jscomp.IS_SYMBOL_NATIVE && "es6" === N ? I[Q] : null;
  Z = Z(N);
  null != Z &&
    (V
      ? $jscomp.defineProperty($jscomp.polyfills, Q, {
          configurable: !0,
          writable: !0,
          value: Z,
        })
      : Z !== N &&
        (($jscomp.propertyToPolyfillSymbol[Q] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(Q)
          : $jscomp.POLYFILL_PREFIX + Q),
        (Q = $jscomp.propertyToPolyfillSymbol[Q]),
        $jscomp.defineProperty(I, Q, {
          configurable: !0,
          writable: !0,
          value: Z,
        })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (V) {
    if (V) return V;
    var Z = function (Q, Ia) {
      this.$jscomp$symbol$id_ = Q;
      $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: Ia,
      });
    };
    Z.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var N = 0,
      I = function (Q) {
        if (this instanceof I)
          throw new TypeError("Symbol is not a constructor");
        return new Z("jscomp_symbol_" + (Q || "") + "_" + N++, Q);
      };
    return I;
  },
  "es6",
  "es3"
);
$jscomp.polyfill(
  "Symbol.iterator",
  function (V) {
    if (V) return V;
    V = Symbol("Symbol.iterator");
    for (
      var Z = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        N = 0;
      N < Z.length;
      N++
    ) {
      var I = $jscomp.global[Z[N]];
      "function" === typeof I &&
        "function" != typeof I.prototype[V] &&
        $jscomp.defineProperty(I.prototype, V, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          },
        });
    }
    return V;
  },
  "es6",
  "es3"
);
$jscomp.iteratorPrototype = function (V) {
  V = { next: V };
  V[Symbol.iterator] = function () {
    return this;
  };
  return V;
};
!(function (V) {
  function Z(I) {
    if (N[I]) return N[I].exports;
    var Q = (N[I] = { i: I, l: !1, exports: {} });
    return V[I].call(Q.exports, Q, Q.exports, Z), (Q.l = !0), Q.exports;
  }
  var N = {};
  Z.m = V;
  Z.c = N;
  Z.d = function (I, Q, Ia) {
    Z.o(I, Q) || Object.defineProperty(I, Q, { enumerable: !0, get: Ia });
  };
  Z.r = function (I) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(I, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(I, "__esModule", { value: !0 });
  };
  Z.t = function (I, Q) {
    if (
      (1 & Q && (I = Z(I)), 8 & Q) ||
      (4 & Q && "object" == typeof I && I && I.__esModule)
    )
      return I;
    var Ia = Object.create(null);
    if (
      (Z.r(Ia),
      Object.defineProperty(Ia, "default", { enumerable: !0, value: I }),
      2 & Q && "string" != typeof I)
    )
      for (var Ha in I)
        Z.d(
          Ia,
          Ha,
          function (K) {
            return I[K];
          }.bind(null, Ha)
        );
    return Ia;
  };
  Z.n = function (I) {
    var Q =
      I && I.__esModule
        ? function () {
            return I["default"];
          }
        : function () {
            return I;
          };
    return Z.d(Q, "a", Q), Q;
  };
  Z.o = function (I, Q) {
    return Object.prototype.hasOwnProperty.call(I, Q);
  };
  Z.p = "";
  Z((Z.s = 14));
})([
  function (V, Z, N) {
    var I;
    !(function (Q, Ia) {
      "object" == typeof V.exports
        ? (V.exports = Q.document
            ? Ia(Q, !0)
            : function (Ha) {
                if (!Ha.document)
                  throw Error("jQuery requires a window with a document");
                return Ia(Ha);
              })
        : Ia(Q);
    })("undefined" != typeof window ? window : this, function (Q, Ia) {
      function Ha(a, c, f) {
        var g,
          l,
          n = (f = f || ma).createElement("script");
        if (((n.text = a), c))
          for (g in dd)
            (l = c[g] || (c.getAttribute && c.getAttribute(g))) &&
              n.setAttribute(g, l);
        f.head.appendChild(n).parentNode.removeChild(n);
      }
      function K(a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? sc[Ic.call(a)] || "object"
          : typeof a;
      }
      function O(a) {
        var c = !!a && "length" in a && a.length,
          f = K(a);
        return (
          !va(a) &&
          !kc(a) &&
          ("array" === f ||
            0 === c ||
            ("number" == typeof c && 0 < c && c - 1 in a))
        );
      }
      function Ja(a, c) {
        return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase();
      }
      function m(a, c, f) {
        return va(c)
          ? h.grep(a, function (g, l) {
              return !!c.call(g, l, g) !== f;
            })
          : c.nodeType
          ? h.grep(a, function (g) {
              return (g === c) !== f;
            })
          : "string" != typeof c
          ? h.grep(a, function (g) {
              return -1 < tc.call(c, g) !== f;
            })
          : h.filter(c, a, f);
      }
      function z(a, c) {
        for (; (a = a[c]) && 1 !== a.nodeType; );
        return a;
      }
      function E(a) {
        return a;
      }
      function A(a) {
        throw a;
      }
      function F(a, c, f, g) {
        var l;
        try {
          a && va((l = a.promise))
            ? l.call(a).done(c).fail(f)
            : a && va((l = a.then))
            ? l.call(a, c, f)
            : c.apply(void 0, [a].slice(g));
        } catch (n) {
          f.apply(void 0, [n]);
        }
      }
      function S() {
        ma.removeEventListener("DOMContentLoaded", S);
        Q.removeEventListener("load", S);
        h.ready();
      }
      function P(a, c) {
        return c.toUpperCase();
      }
      function G(a) {
        return a.replace(uc, "ms-").replace(ka, P);
      }
      function ea() {
        this.expando = h.expando + ea.uid++;
      }
      function ca(a, c, f) {
        var g;
        if (void 0 === f && 1 === a.nodeType)
          if (
            ((g = "data-" + c.replace(Pc, "-$&").toLowerCase()),
            "string" == typeof (f = a.getAttribute(g)))
          ) {
            try {
              (g = f),
                (f =
                  "true" === g ||
                  ("false" !== g &&
                    ("null" === g
                      ? null
                      : g === +g + ""
                      ? +g
                      : ed.test(g)
                      ? JSON.parse(g)
                      : g)));
            } catch (l) {}
            pb.set(a, c, f);
          } else f = void 0;
        return f;
      }
      function Ua(a, c, f, g) {
        var l,
          n,
          q = 20,
          w = g
            ? function () {
                return g.cur();
              }
            : function () {
                return h.css(a, c, "");
              },
          x = w(),
          H = (f && f[3]) || (h.cssNumber[c] ? "" : "px"),
          L =
            a.nodeType &&
            (h.cssNumber[c] || ("px" !== H && +x)) &&
            Yb.exec(h.css(a, c));
        if (L && L[3] !== H) {
          x /= 2;
          H = H || L[3];
          for (L = +x || 1; q--; )
            h.style(a, c, L + H),
              0 >= (1 - n) * (1 - (n = w() / x || 0.5)) && (q = 0),
              (L /= n);
          L *= 2;
          h.style(a, c, L + H);
          f = f || [];
        }
        return (
          f &&
            ((L = +L || +x || 0),
            (l = f[1] ? L + (f[1] + 1) * f[2] : +f[2]),
            g && ((g.unit = H), (g.start = L), (g.end = l))),
          l
        );
      }
      function Ma(a, c) {
        for (var f, g, l = [], n = 0, q = a.length; n < q; n++)
          if ((g = a[n]).style)
            if (((f = g.style.display), c)) {
              if (
                ("none" === f &&
                  ((l[n] = na.get(g, "display") || null),
                  l[n] || (g.style.display = "")),
                "" === g.style.display && Tb(g))
              ) {
                f = n;
                var w = void 0;
                var x = g.ownerDocument;
                var H = g.nodeName;
                x =
                  (g = Qc[H]) ||
                  ((w = x.body.appendChild(x.createElement(H))),
                  (g = h.css(w, "display")),
                  w.parentNode.removeChild(w),
                  "none" === g && (g = "block"),
                  (Qc[H] = g),
                  g);
                l[f] = x;
              }
            } else "none" !== f && ((l[n] = "none"), na.set(g, "display", f));
        for (n = 0; n < q; n++) null != l[n] && (a[n].style.display = l[n]);
        return a;
      }
      function Y(a, c) {
        var f;
        return (
          (f =
            void 0 !== a.getElementsByTagName
              ? a.getElementsByTagName(c || "*")
              : void 0 !== a.querySelectorAll
              ? a.querySelectorAll(c || "*")
              : []),
          void 0 === c || (c && Ja(a, c)) ? h.merge([a], f) : f
        );
      }
      function Zb(a, c) {
        for (var f = 0, g = a.length; f < g; f++)
          na.set(a[f], "globalEval", !c || na.get(c[f], "globalEval"));
      }
      function qb(a, c, f, g, l) {
        for (
          var n,
            q,
            w,
            x,
            H = c.createDocumentFragment(),
            L = [],
            C = 0,
            aa = a.length;
          C < aa;
          C++
        )
          if ((n = a[C]) || 0 === n)
            if ("object" === K(n)) h.merge(L, n.nodeType ? [n] : n);
            else if (Ub.test(n)) {
              q = q || H.appendChild(c.createElement("div"));
              w = (Rc.exec(n) || ["", ""])[1].toLowerCase();
              w = sb[w] || sb._default;
              q.innerHTML = w[1] + h.htmlPrefilter(n) + w[2];
              for (w = w[0]; w--; ) q = q.lastChild;
              h.merge(L, q.childNodes);
              (q = H.firstChild).textContent = "";
            } else L.push(c.createTextNode(n));
        H.textContent = "";
        for (C = 0; (n = L[C++]); )
          if (g && -1 < h.inArray(n, g)) l && l.push(n);
          else if (
            ((x = lc(n)), (q = Y(H.appendChild(n), "script")), x && Zb(q), f)
          )
            for (w = 0; (n = q[w++]); ) X.test(n.type || "") && f.push(n);
        return H;
      }
      function Jb() {
        return !0;
      }
      function Kb() {
        return !1;
      }
      function Db(a, c) {
        a: {
          try {
            var f = ma.activeElement;
            break a;
          } catch (g) {}
          f = void 0;
        }
        return (a === f) == ("focus" === c);
      }
      function Lb(a, c, f, g, l, n) {
        var q, w;
        if ("object" == typeof c) {
          for (w in ("string" != typeof f && ((g = g || f), (f = void 0)), c))
            Lb(a, w, f, g, c[w], n);
          return a;
        }
        if (
          (null == g && null == l
            ? ((l = f), (g = f = void 0))
            : null == l &&
              ("string" == typeof f
                ? ((l = g), (g = void 0))
                : ((l = g), (g = f), (f = void 0))),
          !1 === l)
        )
          l = Kb;
        else if (!l) return a;
        return (
          1 === n &&
            ((q = l),
            ((l = function (x) {
              return h().off(x), q.apply(this, arguments);
            }).guid = q.guid || (q.guid = h.guid++))),
          a.each(function () {
            h.event.add(this, c, l, g, f);
          })
        );
      }
      function wa(a, c, f) {
        f
          ? (na.set(a, c, !1),
            h.event.add(a, c, {
              namespace: !1,
              handler: function (g) {
                var l,
                  n,
                  q = na.get(this, c);
                if (1 & g.isTrigger && this[c])
                  if (q.length)
                    (h.event.special[c] || {}).delegateType &&
                      g.stopPropagation();
                  else {
                    if (
                      ((q = Eb.call(arguments)),
                      na.set(this, c, q),
                      (l = f(this, c)),
                      this[c](),
                      q !== (n = na.get(this, c)) || l
                        ? na.set(this, c, !1)
                        : (n = {}),
                      q !== n)
                    )
                      return (
                        g.stopImmediatePropagation(),
                        g.preventDefault(),
                        n.value
                      );
                  }
                else
                  q.length &&
                    (na.set(this, c, {
                      value: h.event.trigger(
                        h.extend(q[0], h.Event.prototype),
                        q.slice(1),
                        this
                      ),
                    }),
                    g.stopImmediatePropagation());
              },
            }))
          : void 0 === na.get(a, c) && h.event.add(a, c, Jb);
      }
      function vc(a, c) {
        return (
          (Ja(a, "table") &&
            Ja(11 !== c.nodeType ? c : c.firstChild, "tr") &&
            h(a).children("tbody")[0]) ||
          a
        );
      }
      function $b(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
      }
      function mc(a) {
        return (
          "true/" === (a.type || "").slice(0, 5)
            ? (a.type = a.type.slice(5))
            : a.removeAttribute("type"),
          a
        );
      }
      function gb(a, c) {
        var f, g, l, n, q;
        if (1 === c.nodeType) {
          if (na.hasData(a) && (q = na.get(a).events))
            for (g in (na.remove(c, "handle events"), q)) {
              var w = 0;
              for (f = q[g].length; w < f; w++) h.event.add(c, g, q[g][w]);
            }
          pb.hasData(a) &&
            ((l = pb.access(a)), (n = h.extend({}, l)), pb.set(c, n));
        }
      }
      function Vb(a, c, f, g) {
        c = nc(c);
        var l,
          n,
          q,
          w = 0,
          x = a.length,
          H = x - 1,
          L = c[0],
          C = va(L);
        if (
          C ||
          (1 < x && "string" == typeof L && !Ea.checkClone && qd.test(L))
        )
          return a.each(function (oa) {
            var fa = a.eq(oa);
            C && (c[0] = L.call(this, oa, fa.html()));
            Vb(fa, c, f, g);
          });
        if (
          x &&
          ((n = (l = qb(c, a[0].ownerDocument, !1, a, g)).firstChild),
          1 === l.childNodes.length && (l = n),
          n || g)
        ) {
          for (q = (n = h.map(Y(l, "script"), $b)).length; w < x; w++) {
            var aa = l;
            w !== H &&
              ((aa = h.clone(aa, !0, !0)), q && h.merge(n, Y(aa, "script")));
            f.call(a[w], aa, w);
          }
          if (q)
            for (
              l = n[n.length - 1].ownerDocument, h.map(n, mc), w = 0;
              w < q;
              w++
            )
              (aa = n[w]),
                X.test(aa.type || "") &&
                  !na.access(aa, "globalEval") &&
                  h.contains(l, aa) &&
                  (aa.src && "module" !== (aa.type || "").toLowerCase()
                    ? h._evalUrl &&
                      !aa.noModule &&
                      h._evalUrl(
                        aa.src,
                        { nonce: aa.nonce || aa.getAttribute("nonce") },
                        l
                      )
                    : Ha(aa.textContent.replace(rd, ""), aa, l));
        }
        return a;
      }
      function ac(a, c, f) {
        for (var g = c ? h.filter(c, a) : a, l = 0; null != (c = g[l]); l++)
          f || 1 !== c.nodeType || h.cleanData(Y(c)),
            c.parentNode &&
              (f && lc(c) && Zb(Y(c, "script")), c.parentNode.removeChild(c));
        return a;
      }
      function xa(a, c, f) {
        var g,
          l,
          n,
          q,
          w = a.style;
        return (
          (f = f || bc(a)) &&
            ("" !== (q = f.getPropertyValue(c) || f[c]) ||
              lc(a) ||
              (q = h.style(a, c)),
            !Ea.pixelBoxStyles() &&
              wc.test(q) &&
              sd.test(c) &&
              ((g = w.width),
              (l = w.minWidth),
              (n = w.maxWidth),
              (w.minWidth = w.maxWidth = w.width = q),
              (q = f.width),
              (w.width = g),
              (w.minWidth = l),
              (w.maxWidth = n))),
          void 0 !== q ? q + "" : q
        );
      }
      function xc(a, c) {
        return {
          get: function () {
            if (!a()) return (this.get = c).apply(this, arguments);
            delete this.get;
          },
        };
      }
      function yc(a) {
        var c;
        if (!(c = h.cssProps[a] || Jc[a])) {
          if (!(a in Sc)) {
            a: {
              c = a;
              for (
                var f = c[0].toUpperCase() + c.slice(1), g = Tc.length;
                g--;

              )
                if ((c = Tc[g] + f) in Sc) break a;
              c = void 0;
            }
            a = Jc[a] = c || a;
          }
          c = a;
        }
        return c;
      }
      function qa(a, c, f) {
        return (a = Yb.exec(c))
          ? Math.max(0, a[2] - (f || 0)) + (a[3] || "px")
          : c;
      }
      function Uc(a, c, f, g, l, n) {
        var q = "width" === c ? 1 : 0,
          w = 0,
          x = 0;
        if (f === (g ? "border" : "content")) return 0;
        for (; 4 > q; q += 2)
          "margin" === f && (x += h.css(a, f + Fb[q], !0, l)),
            g
              ? ("content" === f && (x -= h.css(a, "padding" + Fb[q], !0, l)),
                "margin" !== f &&
                  (x -= h.css(a, "border" + Fb[q] + "Width", !0, l)))
              : ((x += h.css(a, "padding" + Fb[q], !0, l)),
                "padding" !== f
                  ? (x += h.css(a, "border" + Fb[q] + "Width", !0, l))
                  : (w += h.css(a, "border" + Fb[q] + "Width", !0, l)));
        return (
          !g &&
            0 <= n &&
            (x +=
              Math.max(
                0,
                Math.ceil(
                  a["offset" + c[0].toUpperCase() + c.slice(1)] -
                    n -
                    x -
                    w -
                    0.5
                )
              ) || 0),
          x
        );
      }
      function fd(a, c, f) {
        var g = bc(a),
          l =
            (!Ea.boxSizingReliable() || f) &&
            "border-box" === h.css(a, "boxSizing", !1, g),
          n = l,
          q = xa(a, c, g),
          w = "offset" + c[0].toUpperCase() + c.slice(1);
        if (wc.test(q)) {
          if (!f) return q;
          q = "auto";
        }
        return (
          ((!Ea.boxSizingReliable() && l) ||
            (!Ea.reliableTrDimensions() && Ja(a, "tr")) ||
            "auto" === q ||
            (!parseFloat(q) && "inline" === h.css(a, "display", !1, g))) &&
            a.getClientRects().length &&
            ((l = "border-box" === h.css(a, "boxSizing", !1, g)),
            (n = w in a) && (q = a[w])),
          (q = parseFloat(q) || 0) +
            Uc(a, c, f || (l ? "border" : "content"), n, g, q) +
            "px"
        );
      }
      function Ya(a, c, f, g, l) {
        return new Ya.prototype.init(a, c, f, g, l);
      }
      function Kc() {
        r &&
          (!1 === ma.hidden && Q.requestAnimationFrame
            ? Q.requestAnimationFrame(Kc)
            : Q.setTimeout(Kc, h.fx.interval),
          h.fx.tick());
      }
      function Vc() {
        return (
          Q.setTimeout(function () {
            k = void 0;
          }),
          (k = Date.now())
        );
      }
      function oc(a, c) {
        var f,
          g = 0,
          l = { height: a };
        for (c = c ? 1 : 0; 4 > g; g += 2 - c)
          l["margin" + (f = Fb[g])] = l["padding" + f] = a;
        return c && (l.opacity = l.width = a), l;
      }
      function Mb(a, c, f) {
        for (
          var g,
            l = (tb.tweeners[c] || []).concat(tb.tweeners["*"]),
            n = 0,
            q = l.length;
          n < q;
          n++
        )
          if ((g = l[n].call(f, c, a))) return g;
      }
      function tb(a, c, f) {
        var g,
          l = 0,
          n = tb.prefilters.length,
          q = h.Deferred().always(function () {
            delete w.elem;
          }),
          w = function () {
            if (g) return !1;
            var H = k || Vc();
            H = Math.max(0, x.startTime + x.duration - H);
            for (
              var L = 1 - (H / x.duration || 0), C = 0, aa = x.tweens.length;
              C < aa;
              C++
            )
              x.tweens[C].run(L);
            return (
              q.notifyWith(a, [x, L, H]),
              1 > L && aa
                ? H
                : (aa || q.notifyWith(a, [x, 1, 0]), q.resolveWith(a, [x]), !1)
            );
          },
          x = q.promise({
            elem: a,
            props: h.extend({}, c),
            opts: h.extend(
              !0,
              { specialEasing: {}, easing: h.easing._default },
              f
            ),
            originalProperties: c,
            originalOptions: f,
            startTime: k || Vc(),
            duration: f.duration,
            tweens: [],
            createTween: function (H, L) {
              var C = h.Tween(
                a,
                x.opts,
                H,
                L,
                x.opts.specialEasing[H] || x.opts.easing
              );
              return x.tweens.push(C), C;
            },
            stop: function (H) {
              var L = 0,
                C = H ? x.tweens.length : 0;
              if (g) return this;
              for (g = !0; L < C; L++) x.tweens[L].run(1);
              return (
                H
                  ? (q.notifyWith(a, [x, 1, 0]), q.resolveWith(a, [x, H]))
                  : q.rejectWith(a, [x, H]),
                this
              );
            },
          });
        f = x.props;
        !(function (H, L) {
          var C, aa, oa, fa, ya;
          for (C in H)
            if (
              ((oa = L[(aa = G(C))]),
              (fa = H[C]),
              Array.isArray(fa) && ((oa = fa[1]), (fa = H[C] = fa[0])),
              C !== aa && ((H[aa] = fa), delete H[C]),
              (ya = h.cssHooks[aa]) && "expand" in ya)
            )
              for (C in ((fa = ya.expand(fa)), delete H[aa], fa))
                C in H || ((H[C] = fa[C]), (L[C] = oa));
            else L[aa] = oa;
        })(f, x.opts.specialEasing);
        for (; l < n; l++)
          if ((c = tb.prefilters[l].call(x, a, f, x.opts)))
            return (
              va(c.stop) &&
                (h._queueHooks(x.elem, x.opts.queue).stop = c.stop.bind(c)),
              c
            );
        return (
          h.map(f, Mb, x),
          va(x.opts.start) && x.opts.start.call(a, x),
          x
            .progress(x.opts.progress)
            .done(x.opts.done, x.opts.complete)
            .fail(x.opts.fail)
            .always(x.opts.always),
          h.fx.timer(h.extend(w, { elem: a, anim: x, queue: x.opts.queue })),
          x
        );
      }
      function Nb(a) {
        return (a.match(Ka) || []).join(" ");
      }
      function cc(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
      }
      function Wc(a) {
        return Array.isArray(a)
          ? a
          : ("string" == typeof a && a.match(Ka)) || [];
      }
      function dc(a, c, f, g) {
        var l;
        if (Array.isArray(c))
          h.each(c, function (n, q) {
            f || La.test(a)
              ? g(a, q)
              : dc(
                  a + "[" + ("object" == typeof q && null != q ? n : "") + "]",
                  q,
                  f,
                  g
                );
          });
        else if (f || "object" !== K(c)) g(a, c);
        else for (l in c) dc(a + "[" + l + "]", c[l], f, g);
      }
      function Xc(a) {
        return function (c, f) {
          "string" != typeof c && ((f = c), (c = "*"));
          var g,
            l = 0,
            n = c.toLowerCase().match(Ka) || [];
          if (va(f))
            for (; (g = n[l++]); )
              "+" === g[0]
                ? ((g = g.slice(1) || "*"), (a[g] = a[g] || []).unshift(f))
                : (a[g] = a[g] || []).push(f);
        };
      }
      function zc(a, c, f, g) {
        function l(w) {
          var x;
          return (
            (n[w] = !0),
            h.each(a[w] || [], function (H, L) {
              var C = L(c, f, g);
              return "string" != typeof C || q || n[C]
                ? q
                  ? !(x = C)
                  : void 0
                : (c.dataTypes.unshift(C), l(C), !1);
            }),
            x
          );
        }
        var n = {},
          q = a === td;
        return l(c.dataTypes[0]) || (!n["*"] && l("*"));
      }
      function Lc(a, c) {
        var f,
          g,
          l = h.ajaxSettings.flatOptions || {};
        for (f in c) void 0 !== c[f] && ((l[f] ? a : g || (g = {}))[f] = c[f]);
        return g && h.extend(!0, a, g), a;
      }
      var Gb = [],
        Ac = Object.getPrototypeOf,
        Eb = Gb.slice,
        nc = Gb.flat
          ? function (a) {
              return Gb.flat.call(a);
            }
          : function (a) {
              return Gb.concat.apply([], a);
            },
        ec = Gb.push,
        tc = Gb.indexOf,
        sc = {},
        Ic = sc.toString,
        pc = sc.hasOwnProperty,
        fc = pc.toString,
        Bc = fc.call(Object),
        Ea = {},
        va = function (a) {
          return "function" == typeof a && "number" != typeof a.nodeType;
        },
        kc = function (a) {
          return null != a && a === a.window;
        },
        ma = Q.document,
        dd = { type: !0, src: !0, nonce: !0, noModule: !0 },
        h = function (a, c) {
          return new h.fn.init(a, c);
        };
      h.fn = h.prototype = {
        jquery: "3.5.1",
        constructor: h,
        length: 0,
        toArray: function () {
          return Eb.call(this);
        },
        get: function (a) {
          return null == a
            ? Eb.call(this)
            : 0 > a
            ? this[a + this.length]
            : this[a];
        },
        pushStack: function (a) {
          a = h.merge(this.constructor(), a);
          return (a.prevObject = this), a;
        },
        each: function (a) {
          return h.each(this, a);
        },
        map: function (a) {
          return this.pushStack(
            h.map(this, function (c, f) {
              return a.call(c, f, c);
            })
          );
        },
        slice: function () {
          return this.pushStack(Eb.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            h.grep(this, function (a, c) {
              return (c + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            h.grep(this, function (a, c) {
              return c % 2;
            })
          );
        },
        eq: function (a) {
          var c = this.length;
          a = +a + (0 > a ? c : 0);
          return this.pushStack(0 <= a && a < c ? [this[a]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: ec,
        sort: Gb.sort,
        splice: Gb.splice,
      };
      h.extend = h.fn.extend = function () {
        var a,
          c,
          f,
          g,
          l,
          n = arguments[0] || {},
          q = 1,
          w = arguments.length,
          x = !1;
        "boolean" == typeof n && ((x = n), (n = arguments[q] || {}), q++);
        "object" == typeof n || va(n) || (n = {});
        for (q === w && ((n = this), q--); q < w; q++)
          if (null != (a = arguments[q]))
            for (c in a) {
              var H = a[c];
              "__proto__" !== c &&
                n !== H &&
                (x && H && (h.isPlainObject(H) || (g = Array.isArray(H)))
                  ? ((f = n[c]),
                    (l =
                      g && !Array.isArray(f)
                        ? []
                        : g || h.isPlainObject(f)
                        ? f
                        : {}),
                    (g = !1),
                    (n[c] = h.extend(x, l, H)))
                  : void 0 !== H && (n[c] = H));
            }
        return n;
      };
      h.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw Error(a);
        },
        noop: function () {},
        isPlainObject: function (a) {
          var c, f;
          return (
            !(!a || "[object Object]" !== Ic.call(a)) &&
            (!(c = Ac(a)) ||
              ("function" ==
                typeof (f = pc.call(c, "constructor") && c.constructor) &&
                fc.call(f) === Bc))
          );
        },
        isEmptyObject: function (a) {
          for (var c in a) return !1;
          return !0;
        },
        globalEval: function (a, c, f) {
          Ha(a, { nonce: c && c.nonce }, f);
        },
        each: function (a, c) {
          var f,
            g = 0;
          if (O(a))
            for (f = a.length; g < f && !1 !== c.call(a[g], g, a[g]); g++);
          else for (g in a) if (!1 === c.call(a[g], g, a[g])) break;
          return a;
        },
        makeArray: function (a, c) {
          var f = c || [];
          return (
            null != a &&
              (O(Object(a))
                ? h.merge(f, "string" == typeof a ? [a] : a)
                : ec.call(f, a)),
            f
          );
        },
        inArray: function (a, c, f) {
          return null == c ? -1 : tc.call(c, a, f);
        },
        merge: function (a, c) {
          for (var f = +c.length, g = 0, l = a.length; g < f; g++)
            a[l++] = c[g];
          return (a.length = l), a;
        },
        grep: function (a, c, f) {
          var g = [],
            l = 0,
            n = a.length;
          for (f = !f; l < n; l++) !c(a[l], l) !== f && g.push(a[l]);
          return g;
        },
        map: function (a, c, f) {
          var g,
            l,
            n = 0,
            q = [];
          if (O(a))
            for (g = a.length; n < g; n++)
              null != (l = c(a[n], n, f)) && q.push(l);
          else for (n in a) null != (l = c(a[n], n, f)) && q.push(l);
          return nc(q);
        },
        guid: 1,
        support: Ea,
      });
      "function" == typeof Symbol &&
        (h.fn[Symbol.iterator] = Gb[Symbol.iterator]);
      h.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, c) {
          sc["[object " + c + "]"] = c.toLowerCase();
        }
      );
      var Wb = (function (a) {
        function c(p, v, B, D) {
          var J,
            U,
            R,
            ja,
            W = v && v.ownerDocument;
          var sa = v ? v.nodeType : 9;
          if (
            ((B = B || []),
            "string" != typeof p || !p || (1 !== sa && 9 !== sa && 11 !== sa))
          )
            return B;
          if (!D && (ub(v), (v = v || Fa), Wa)) {
            if (11 !== sa && (ja = Ld.exec(p)))
              if ((J = ja[1]))
                if (9 === sa) {
                  if (!(U = v.getElementById(J))) return B;
                  if (U.id === J) return B.push(U), B;
                } else {
                  if (W && (U = W.getElementById(J)) && mb(v, U) && U.id === J)
                    return B.push(U), B;
                }
              else {
                if (ja[2]) return qc.apply(B, v.getElementsByTagName(p)), B;
                if (
                  (J = ja[3]) &&
                  la.getElementsByClassName &&
                  v.getElementsByClassName
                )
                  return qc.apply(B, v.getElementsByClassName(J)), B;
              }
            if (
              !(
                !la.qsa ||
                gd[p + " "] ||
                (Qa && Qa.test(p)) ||
                (1 === sa && "object" === v.nodeName.toLowerCase())
              )
            ) {
              if (((J = p), (W = v), 1 === sa && (Md.test(p) || Ad.test(p)))) {
                ((W = (ud.test(p) && C(v.parentNode)) || v) === v &&
                  la.scope) ||
                  ((R = v.getAttribute("id"))
                    ? (R = R.replace(Bd, Cd))
                    : v.setAttribute("id", (R = ta)));
                for (sa = (J = eb(p)).length; sa--; )
                  J[sa] = (R ? "#" + R : ":scope") + " " + oa(J[sa]);
                J = J.join(",");
              }
              try {
                return qc.apply(B, W.querySelectorAll(J)), B;
              } catch (Ga) {
                gd(p, !0);
              } finally {
                R === ta && v.removeAttribute("id");
              }
            }
          }
          return hd(p.replace(id, "$1"), v, B, D);
        }
        function f() {
          var p = [];
          return function J(B, D) {
            return (
              p.push(B + " ") > za.cacheLength && delete J[p.shift()],
              (J[B + " "] = D)
            );
          };
        }
        function g(p) {
          return (p[ta] = !0), p;
        }
        function l(p) {
          var v = Fa.createElement("fieldset");
          try {
            return !!p(v);
          } catch (B) {
            return !1;
          } finally {
            v.parentNode && v.parentNode.removeChild(v);
          }
        }
        function n(p, v) {
          for (var B = p.split("|"), D = B.length; D--; )
            za.attrHandle[B[D]] = v;
        }
        function q(p, v) {
          var B = v && p,
            D =
              B &&
              1 === p.nodeType &&
              1 === v.nodeType &&
              p.sourceIndex - v.sourceIndex;
          if (D) return D;
          if (B) for (; (B = B.nextSibling); ) if (B === v) return -1;
          return p ? 1 : -1;
        }
        function w(p) {
          return function (v) {
            return "input" === v.nodeName.toLowerCase() && v.type === p;
          };
        }
        function x(p) {
          return function (v) {
            var B = v.nodeName.toLowerCase();
            return ("input" === B || "button" === B) && v.type === p;
          };
        }
        function H(p) {
          return function (v) {
            return "form" in v
              ? v.parentNode && !1 === v.disabled
                ? "label" in v
                  ? "label" in v.parentNode
                    ? v.parentNode.disabled === p
                    : v.disabled === p
                  : v.isDisabled === p || (v.isDisabled !== !p && Nd(v) === p)
                : v.disabled === p
              : "label" in v && v.disabled === p;
          };
        }
        function L(p) {
          return g(function (v) {
            return (
              (v = +v),
              g(function (B, D) {
                for (var J, U = p([], B.length, v), R = U.length; R--; )
                  B[(J = U[R])] && (B[J] = !(D[J] = B[J]));
              })
            );
          });
        }
        function C(p) {
          return p && void 0 !== p.getElementsByTagName && p;
        }
        function aa() {}
        function oa(p) {
          for (var v = 0, B = p.length, D = ""; v < B; v++) D += p[v].value;
          return D;
        }
        function fa(p, v, B) {
          var D = v.dir,
            J = v.next,
            U = J || D,
            R = B && "parentNode" === U,
            ja = ib++;
          return v.first
            ? function (W, sa, Ga) {
                for (; (W = W[D]); )
                  if (1 === W.nodeType || R) return p(W, sa, Ga);
                return !1;
              }
            : function (W, sa, Ga) {
                var $a,
                  ab,
                  Aa,
                  Ra = [nb, ja];
                if (Ga)
                  for (; (W = W[D]); ) {
                    if ((1 === W.nodeType || R) && p(W, sa, Ga)) return !0;
                  }
                else
                  for (; (W = W[D]); )
                    if (1 === W.nodeType || R)
                      if (
                        ((ab =
                          (Aa = W[ta] || (W[ta] = {}))[W.uniqueID] ||
                          (Aa[W.uniqueID] = {})),
                        J && J === W.nodeName.toLowerCase())
                      )
                        W = W[D] || W;
                      else {
                        if (($a = ab[U]) && $a[0] === nb && $a[1] === ja)
                          return (Ra[2] = $a[2]);
                        if (((ab[U] = Ra), (Ra[2] = p(W, sa, Ga)))) return !0;
                      }
                return !1;
              };
        }
        function ya(p) {
          return 1 < p.length
            ? function (v, B, D) {
                for (var J = p.length; J--; ) if (!p[J](v, B, D)) return !1;
                return !0;
              }
            : p[0];
        }
        function jb(p, v, B, D, J) {
          for (
            var U, R = [], ja = 0, W = p.length, sa = null != v;
            ja < W;
            ja++
          )
            (U = p[ja]) &&
              ((B && !B(U, D, J)) || (R.push(U), sa && v.push(ja)));
          return R;
        }
        function Ob(p, v, B, D, J, U) {
          return (
            D && !D[ta] && (D = Ob(D)),
            J && !J[ta] && (J = Ob(J, U)),
            g(function (R, ja, W, sa) {
              var Ga,
                $a = [],
                ab = [],
                Aa = ja.length,
                Ra;
              if (!(Ra = R)) {
                Ra = v || "*";
                for (
                  var Na = W.nodeType ? [W] : W,
                    vb = [],
                    yb = 0,
                    kb = Na.length;
                  yb < kb;
                  yb++
                )
                  c(Ra, Na[yb], vb);
                Ra = vb;
              }
              Ra = !p || (!R && v) ? Ra : jb(Ra, $a, p, W, sa);
              Na = B ? (J || (R ? p : Aa || D) ? [] : ja) : Ra;
              if ((B && B(Ra, Na, W, sa), D)) {
                var bb = jb(Na, ab);
                D(bb, [], W, sa);
                for (W = bb.length; W--; )
                  (Ga = bb[W]) && (Na[ab[W]] = !(Ra[ab[W]] = Ga));
              }
              if (R) {
                if (J || p) {
                  if (J) {
                    bb = [];
                    for (W = Na.length; W--; )
                      (Ga = Na[W]) && bb.push((Ra[W] = Ga));
                    J(null, (Na = []), bb, sa);
                  }
                  for (W = Na.length; W--; )
                    (Ga = Na[W]) &&
                      -1 < (bb = J ? Cc(R, Ga) : $a[W]) &&
                      (R[bb] = !(ja[bb] = Ga));
                }
              } else (Na = jb(Na === ja ? Na.splice(Aa, Na.length) : Na)), J ? J(null, ja, Na, sa) : qc.apply(ja, Na);
            })
          );
        }
        function ob(p) {
          var v,
            B,
            D = p.length,
            J = za.relative[p[0].type];
          var U = J || za.relative[" "];
          for (
            var R = J ? 1 : 0,
              ja = fa(
                function (Ga) {
                  return Ga === v;
                },
                U,
                !0
              ),
              W = fa(
                function (Ga) {
                  return -1 < Cc(v, Ga);
                },
                U,
                !0
              ),
              sa = [
                function (Ga, $a, ab) {
                  Ga =
                    (!J && (ab || $a !== zb)) ||
                    ((v = $a).nodeType ? ja(Ga, $a, ab) : W(Ga, $a, ab));
                  return (v = null), Ga;
                },
              ];
            R < D;
            R++
          )
            if ((U = za.relative[p[R].type])) sa = [fa(ya(sa), U)];
            else {
              if ((U = za.filter[p[R].type].apply(null, p[R].matches))[ta]) {
                for (B = ++R; B < D && !za.relative[p[B].type]; B++);
                return Ob(
                  1 < R && ya(sa),
                  1 < R &&
                    oa(
                      p
                        .slice(0, R - 1)
                        .concat({ value: " " === p[R - 2].type ? "*" : "" })
                    ).replace(id, "$1"),
                  U,
                  R < B && ob(p.slice(R, B)),
                  B < D && ob((p = p.slice(B))),
                  B < D && oa(p)
                );
              }
              sa.push(U);
            }
          return ya(sa);
        }
        var Ab,
          la,
          za,
          rb,
          Ca,
          eb,
          Mc,
          hd,
          zb,
          Hb,
          Pb,
          ub,
          Fa,
          cb,
          Wa,
          Qa,
          Bb,
          Qb,
          mb,
          ta = "sizzle" + 1 * new Date(),
          Va = a.document,
          nb = 0,
          ib = 0,
          Rb = f(),
          Dc = f(),
          jd = f(),
          gd = f(),
          vd = function (p, v) {
            return p === v && (Pb = !0), 0;
          },
          Od = {}.hasOwnProperty,
          Ec = [],
          Pd = Ec.pop,
          Qd = Ec.push,
          qc = Ec.push,
          Dd = Ec.slice,
          Cc = function (p, v) {
            for (var B = 0, D = p.length; B < D; B++) if (p[B] === v) return B;
            return -1;
          },
          Rd = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
          id = RegExp(
            "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
            "g"
          ),
          Sd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          Ad = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          Md = /[\x20\t\r\n\f]|>/,
          Td = /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          Ud = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/,
          kd = {
            ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
          },
          Vd = /HTML$/i,
          Wd = /^(?:input|select|textarea|button)$/i,
          Xd = /^h\d$/i,
          Yc = /^[^{]+\{\s*\[native \w/,
          Ld = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ud = /[+~]/,
          gc = RegExp(
            "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          hc = function (p, v) {
            var B = "0x" + p.slice(1) - 65536;
            return (
              v ||
              (0 > B
                ? String.fromCharCode(B + 65536)
                : String.fromCharCode((B >> 10) | 55296, (1023 & B) | 56320))
            );
          },
          Bd = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Cd = function (p, v) {
            return v
              ? "\x00" === p
                ? "\ufffd"
                : p.slice(0, -1) +
                  "\\" +
                  p.charCodeAt(p.length - 1).toString(16) +
                  " "
              : "\\" + p;
          },
          Ed = function () {
            ub();
          },
          Nd = fa(
            function (p) {
              return (
                !0 === p.disabled && "fieldset" === p.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          qc.apply((Ec = Dd.call(Va.childNodes)), Va.childNodes),
            Ec[Va.childNodes.length].nodeType;
        } catch (p) {
          qc = {
            apply: Ec.length
              ? function (v, B) {
                  Qd.apply(v, Dd.call(B));
                }
              : function (v, B) {
                  for (var D = v.length, J = 0; (v[D++] = B[J++]); );
                  v.length = D - 1;
                },
          };
        }
        for (Ab in ((la = c.support = {}),
        (Ca = c.isXML = function (p) {
          var v = (p.ownerDocument || p).documentElement;
          return !Vd.test(p.namespaceURI || (v && v.nodeName) || "HTML");
        }),
        (ub = c.setDocument = function (p) {
          var v, B;
          p = p ? p.ownerDocument || p : Va;
          return p != Fa && 9 === p.nodeType && p.documentElement
            ? ((cb = (Fa = p).documentElement),
              (Wa = !Ca(Fa)),
              Va != Fa &&
                (B = Fa.defaultView) &&
                B.top !== B &&
                (B.addEventListener
                  ? B.addEventListener("unload", Ed, !1)
                  : B.attachEvent && B.attachEvent("onunload", Ed)),
              (la.scope = l(function (D) {
                return (
                  cb.appendChild(D).appendChild(Fa.createElement("div")),
                  void 0 !== D.querySelectorAll &&
                    !D.querySelectorAll(":scope fieldset div").length
                );
              })),
              (la.attributes = l(function (D) {
                return (D.className = "i"), !D.getAttribute("className");
              })),
              (la.getElementsByTagName = l(function (D) {
                return (
                  D.appendChild(Fa.createComment("")),
                  !D.getElementsByTagName("*").length
                );
              })),
              (la.getElementsByClassName = Yc.test(Fa.getElementsByClassName)),
              (la.getById = l(function (D) {
                return (
                  (cb.appendChild(D).id = ta),
                  !Fa.getElementsByName || !Fa.getElementsByName(ta).length
                );
              })),
              la.getById
                ? ((za.filter.ID = function (D) {
                    var J = D.replace(gc, hc);
                    return function (U) {
                      return U.getAttribute("id") === J;
                    };
                  }),
                  (za.find.ID = function (D, J) {
                    if (void 0 !== J.getElementById && Wa) {
                      var U = J.getElementById(D);
                      return U ? [U] : [];
                    }
                  }))
                : ((za.filter.ID = function (D) {
                    var J = D.replace(gc, hc);
                    return function (U) {
                      return (
                        (U =
                          void 0 !== U.getAttributeNode &&
                          U.getAttributeNode("id")) && U.value === J
                      );
                    };
                  }),
                  (za.find.ID = function (D, J) {
                    if (void 0 !== J.getElementById && Wa) {
                      var U,
                        R,
                        ja = J.getElementById(D);
                      if (ja) {
                        if ((U = ja.getAttributeNode("id")) && U.value === D)
                          return [ja];
                        var W = J.getElementsByName(D);
                        for (R = 0; (ja = W[R++]); )
                          if ((U = ja.getAttributeNode("id")) && U.value === D)
                            return [ja];
                      }
                      return [];
                    }
                  })),
              (za.find.TAG = la.getElementsByTagName
                ? function (D, J) {
                    return void 0 !== J.getElementsByTagName
                      ? J.getElementsByTagName(D)
                      : la.qsa
                      ? J.querySelectorAll(D)
                      : void 0;
                  }
                : function (D, J) {
                    var U,
                      R = [],
                      ja = 0,
                      W = J.getElementsByTagName(D);
                    if ("*" === D) {
                      for (; (U = W[ja++]); ) 1 === U.nodeType && R.push(U);
                      return R;
                    }
                    return W;
                  }),
              (za.find.CLASS =
                la.getElementsByClassName &&
                function (D, J) {
                  if (void 0 !== J.getElementsByClassName && Wa)
                    return J.getElementsByClassName(D);
                }),
              (Bb = []),
              (Qa = []),
              (la.qsa = Yc.test(Fa.querySelectorAll)) &&
                (l(function (D) {
                  var J;
                  cb.appendChild(D).innerHTML =
                    "<a id='" +
                    ta +
                    "'></a><select id='" +
                    ta +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>";
                  D.querySelectorAll("[msallowcapture^='']").length &&
                    Qa.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                  D.querySelectorAll("[selected]").length ||
                    Qa.push(
                      "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                    );
                  D.querySelectorAll("[id~=" + ta + "-]").length ||
                    Qa.push("~=");
                  (J = Fa.createElement("input")).setAttribute("name", "");
                  D.appendChild(J);
                  D.querySelectorAll("[name='']").length ||
                    Qa.push(
                      "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                    );
                  D.querySelectorAll(":checked").length || Qa.push(":checked");
                  D.querySelectorAll("a#" + ta + "+*").length ||
                    Qa.push(".#.+[+~]");
                  D.querySelectorAll("\\\f");
                  Qa.push("[\\r\\n\\f]");
                }),
                l(function (D) {
                  D.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var J = Fa.createElement("input");
                  J.setAttribute("type", "hidden");
                  D.appendChild(J).setAttribute("name", "D");
                  D.querySelectorAll("[name=d]").length &&
                    Qa.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                  2 !== D.querySelectorAll(":enabled").length &&
                    Qa.push(":enabled", ":disabled");
                  cb.appendChild(D).disabled = !0;
                  2 !== D.querySelectorAll(":disabled").length &&
                    Qa.push(":enabled", ":disabled");
                  D.querySelectorAll("*,:x");
                  Qa.push(",.*:");
                })),
              (la.matchesSelector = Yc.test(
                (Qb =
                  cb.matches ||
                  cb.webkitMatchesSelector ||
                  cb.mozMatchesSelector ||
                  cb.oMatchesSelector ||
                  cb.msMatchesSelector)
              )) &&
                l(function (D) {
                  la.disconnectedMatch = Qb.call(D, "*");
                  Qb.call(D, "[s!='']:x");
                  Bb.push(
                    "!=",
                    ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                  );
                }),
              (Qa = Qa.length && new RegExp(Qa.join("|"))),
              (Bb = Bb.length && new RegExp(Bb.join("|"))),
              (v = Yc.test(cb.compareDocumentPosition)),
              (mb =
                v || Yc.test(cb.contains)
                  ? function (D, J) {
                      var U = 9 === D.nodeType ? D.documentElement : D,
                        R = J && J.parentNode;
                      return (
                        D === R ||
                        !(
                          !R ||
                          1 !== R.nodeType ||
                          !(U.contains
                            ? U.contains(R)
                            : D.compareDocumentPosition &&
                              16 & D.compareDocumentPosition(R))
                        )
                      );
                    }
                  : function (D, J) {
                      if (J)
                        for (; (J = J.parentNode); ) if (J === D) return !0;
                      return !1;
                    }),
              (vd = v
                ? function (D, J) {
                    if (D === J) return (Pb = !0), 0;
                    var U =
                      !D.compareDocumentPosition - !J.compareDocumentPosition;
                    return (
                      U ||
                      (1 &
                        (U =
                          (D.ownerDocument || D) == (J.ownerDocument || J)
                            ? D.compareDocumentPosition(J)
                            : 1) ||
                      (!la.sortDetached && J.compareDocumentPosition(D) === U)
                        ? D == Fa || (D.ownerDocument == Va && mb(Va, D))
                          ? -1
                          : J == Fa || (J.ownerDocument == Va && mb(Va, J))
                          ? 1
                          : Hb
                          ? Cc(Hb, D) - Cc(Hb, J)
                          : 0
                        : 4 & U
                        ? -1
                        : 1)
                    );
                  }
                : function (D, J) {
                    if (D === J) return (Pb = !0), 0;
                    var U = 0;
                    var R = D.parentNode;
                    var ja = J.parentNode,
                      W = [D],
                      sa = [J];
                    if (!R || !ja)
                      return D == Fa
                        ? -1
                        : J == Fa
                        ? 1
                        : R
                        ? -1
                        : ja
                        ? 1
                        : Hb
                        ? Cc(Hb, D) - Cc(Hb, J)
                        : 0;
                    if (R === ja) return q(D, J);
                    for (R = D; (R = R.parentNode); ) W.unshift(R);
                    for (R = J; (R = R.parentNode); ) sa.unshift(R);
                    for (; W[U] === sa[U]; ) U++;
                    return U
                      ? q(W[U], sa[U])
                      : W[U] == Va
                      ? -1
                      : sa[U] == Va
                      ? 1
                      : 0;
                  }),
              Fa)
            : Fa;
        }),
        (c.matches = function (p, v) {
          return c(p, null, null, v);
        }),
        (c.matchesSelector = function (p, v) {
          if (
            (ub(p),
            !(
              !la.matchesSelector ||
              !Wa ||
              gd[v + " "] ||
              (Bb && Bb.test(v)) ||
              (Qa && Qa.test(v))
            ))
          )
            try {
              var B = Qb.call(p, v);
              if (
                B ||
                la.disconnectedMatch ||
                (p.document && 11 !== p.document.nodeType)
              )
                return B;
            } catch (D) {
              gd(v, !0);
            }
          return 0 < c(v, Fa, null, [p]).length;
        }),
        (c.contains = function (p, v) {
          return (p.ownerDocument || p) != Fa && ub(p), mb(p, v);
        }),
        (c.attr = function (p, v) {
          (p.ownerDocument || p) != Fa && ub(p);
          var B = za.attrHandle[v.toLowerCase()];
          B =
            B && Od.call(za.attrHandle, v.toLowerCase())
              ? B(p, v, !Wa)
              : void 0;
          return void 0 !== B
            ? B
            : la.attributes || !Wa
            ? p.getAttribute(v)
            : (B = p.getAttributeNode(v)) && B.specified
            ? B.value
            : null;
        }),
        (c.escape = function (p) {
          return (p + "").replace(Bd, Cd);
        }),
        (c.error = function (p) {
          throw Error("Syntax error, unrecognized expression: " + p);
        }),
        (c.uniqueSort = function (p) {
          var v,
            B = [],
            D = 0,
            J = 0;
          if (
            ((Pb = !la.detectDuplicates),
            (Hb = !la.sortStable && p.slice(0)),
            p.sort(vd),
            Pb)
          ) {
            for (; (v = p[J++]); ) v === p[J] && (D = B.push(J));
            for (; D--; ) p.splice(B[D], 1);
          }
          return (Hb = null), p;
        }),
        (rb = c.getText = function (p) {
          var v,
            B = "",
            D = 0;
          if ((v = p.nodeType))
            if (1 === v || 9 === v || 11 === v) {
              if ("string" == typeof p.textContent) return p.textContent;
              for (p = p.firstChild; p; p = p.nextSibling) B += rb(p);
            } else {
              if (3 === v || 4 === v) return p.nodeValue;
            }
          else for (; (v = p[D++]); ) B += rb(v);
          return B;
        }),
        ((za = c.selectors = {
          cacheLength: 50,
          createPseudo: g,
          match: kd,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (p) {
              return (
                (p[1] = p[1].replace(gc, hc)),
                (p[3] = (p[3] || p[4] || p[5] || "").replace(gc, hc)),
                "~=" === p[2] && (p[3] = " " + p[3] + " "),
                p.slice(0, 4)
              );
            },
            CHILD: function (p) {
              return (
                (p[1] = p[1].toLowerCase()),
                "nth" === p[1].slice(0, 3)
                  ? (p[3] || c.error(p[0]),
                    (p[4] = +(p[4]
                      ? p[5] + (p[6] || 1)
                      : 2 * ("even" === p[3] || "odd" === p[3]))),
                    (p[5] = +(p[7] + p[8] || "odd" === p[3])))
                  : p[3] && c.error(p[0]),
                p
              );
            },
            PSEUDO: function (p) {
              var v,
                B = !p[6] && p[2];
              return kd.CHILD.test(p[0])
                ? null
                : (p[3]
                    ? (p[2] = p[4] || p[5] || "")
                    : B &&
                      Td.test(B) &&
                      (v = eb(B, !0)) &&
                      (v = B.indexOf(")", B.length - v) - B.length) &&
                      ((p[0] = p[0].slice(0, v)), (p[2] = B.slice(0, v))),
                  p.slice(0, 3));
            },
          },
          filter: {
            TAG: function (p) {
              var v = p.replace(gc, hc).toLowerCase();
              return "*" === p
                ? function () {
                    return !0;
                  }
                : function (B) {
                    return B.nodeName && B.nodeName.toLowerCase() === v;
                  };
            },
            CLASS: function (p) {
              var v = Rb[p + " "];
              return (
                v ||
                ((v = new RegExp(
                  "(^|[\\x20\\t\\r\\n\\f])" + p + "([\\x20\\t\\r\\n\\f]|$)"
                )),
                Rb(p, function (B) {
                  return v.test(
                    ("string" == typeof B.className && B.className) ||
                      (void 0 !== B.getAttribute && B.getAttribute("class")) ||
                      ""
                  );
                }))
              );
            },
            ATTR: function (p, v, B) {
              return function (D) {
                D = c.attr(D, p);
                return null == D
                  ? "!=" === v
                  : !v ||
                      ((D += ""),
                      "=" === v
                        ? D === B
                        : "!=" === v
                        ? D !== B
                        : "^=" === v
                        ? B && 0 === D.indexOf(B)
                        : "*=" === v
                        ? B && -1 < D.indexOf(B)
                        : "$=" === v
                        ? B && D.slice(-B.length) === B
                        : "~=" === v
                        ? -1 < (" " + D.replace(Rd, " ") + " ").indexOf(B)
                        : "|=" === v &&
                          (D === B || D.slice(0, B.length + 1) === B + "-"));
              };
            },
            CHILD: function (p, v, B, D, J) {
              var U = "nth" !== p.slice(0, 3),
                R = "last" !== p.slice(-4),
                ja = "of-type" === v;
              return 1 === D && 0 === J
                ? function (W) {
                    return !!W.parentNode;
                  }
                : function (W, sa, Ga) {
                    var $a, ab, Aa, Ra;
                    sa = U !== R ? "nextSibling" : "previousSibling";
                    var Na = W.parentNode,
                      vb = ja && W.nodeName.toLowerCase(),
                      yb = !Ga && !ja,
                      kb = !1;
                    if (Na) {
                      if (U) {
                        for (; sa; ) {
                          for (Aa = W; (Aa = Aa[sa]); )
                            if (
                              ja
                                ? Aa.nodeName.toLowerCase() === vb
                                : 1 === Aa.nodeType
                            )
                              return !1;
                          var bb = (sa = "only" === p && !bb && "nextSibling");
                        }
                        return !0;
                      }
                      if (((bb = [R ? Na.firstChild : Na.lastChild]), R && yb))
                        for (
                          kb =
                            (Ra =
                              ($a =
                                (Ga =
                                  (ab = (Aa = Na)[ta] || (Aa[ta] = {}))[
                                    Aa.uniqueID
                                  ] || (ab[Aa.uniqueID] = {}))[p] || [])[0] ===
                                nb && $a[1]) && $a[2],
                            Aa = Ra && Na.childNodes[Ra];
                          (Aa =
                            (++Ra && Aa && Aa[sa]) ||
                            (kb = Ra = 0) ||
                            bb.pop());

                        ) {
                          if (1 === Aa.nodeType && ++kb && Aa === W) {
                            Ga[p] = [nb, Ra, kb];
                            break;
                          }
                        }
                      else if (
                        (yb &&
                          (kb = Ra =
                            ($a =
                              ((ab = (Aa = W)[ta] || (Aa[ta] = {}))[
                                Aa.uniqueID
                              ] || (ab[Aa.uniqueID] = {}))[p] || [])[0] ===
                              nb && $a[1]),
                        !1 === kb)
                      )
                        for (
                          ;
                          (Aa =
                            (++Ra && Aa && Aa[sa]) ||
                            (kb = Ra = 0) ||
                            bb.pop()) &&
                          ((ja
                            ? Aa.nodeName.toLowerCase() !== vb
                            : 1 !== Aa.nodeType) ||
                            !++kb ||
                            (yb &&
                              ((Ga =
                                (ab = Aa[ta] || (Aa[ta] = {}))[Aa.uniqueID] ||
                                (ab[Aa.uniqueID] = {}))[p] = [nb, kb]),
                            Aa !== W));

                        );
                      return (kb -= J) === D || (0 == kb % D && 0 <= kb / D);
                    }
                  };
            },
            PSEUDO: function (p, v) {
              var B,
                D =
                  za.pseudos[p] ||
                  za.setFilters[p.toLowerCase()] ||
                  c.error("unsupported pseudo: " + p);
              return D[ta]
                ? D(v)
                : 1 < D.length
                ? ((B = [p, p, "", v]),
                  za.setFilters.hasOwnProperty(p.toLowerCase())
                    ? g(function (J, U) {
                        for (var R, ja = D(J, v), W = ja.length; W--; )
                          J[(R = Cc(J, ja[W]))] = !(U[R] = ja[W]);
                      })
                    : function (J) {
                        return D(J, 0, B);
                      })
                : D;
            },
          },
          pseudos: {
            not: g(function (p) {
              var v = [],
                B = [],
                D = Mc(p.replace(id, "$1"));
              return D[ta]
                ? g(function (J, U, R, ja) {
                    var W;
                    R = D(J, null, ja, []);
                    for (ja = J.length; ja--; )
                      (W = R[ja]) && (J[ja] = !(U[ja] = W));
                  })
                : function (J, U, R) {
                    return (
                      (v[0] = J), D(v, null, R, B), (v[0] = null), !B.pop()
                    );
                  };
            }),
            has: g(function (p) {
              return function (v) {
                return 0 < c(p, v).length;
              };
            }),
            contains: g(function (p) {
              return (
                (p = p.replace(gc, hc)),
                function (v) {
                  return -1 < (v.textContent || rb(v)).indexOf(p);
                }
              );
            }),
            lang: g(function (p) {
              return (
                Ud.test(p || "") || c.error("unsupported lang: " + p),
                (p = p.replace(gc, hc).toLowerCase()),
                function (v) {
                  var B;
                  do
                    if (
                      (B = Wa
                        ? v.lang
                        : v.getAttribute("xml:lang") || v.getAttribute("lang"))
                    )
                      return (
                        (B = B.toLowerCase()) === p || 0 === B.indexOf(p + "-")
                      );
                  while ((v = v.parentNode) && 1 === v.nodeType);
                  return !1;
                }
              );
            }),
            target: function (p) {
              var v = a.location && a.location.hash;
              return v && v.slice(1) === p.id;
            },
            root: function (p) {
              return p === cb;
            },
            focus: function (p) {
              return (
                p === Fa.activeElement &&
                (!Fa.hasFocus || Fa.hasFocus()) &&
                !!(p.type || p.href || ~p.tabIndex)
              );
            },
            enabled: H(!1),
            disabled: H(!0),
            checked: function (p) {
              var v = p.nodeName.toLowerCase();
              return (
                ("input" === v && !!p.checked) ||
                ("option" === v && !!p.selected)
              );
            },
            selected: function (p) {
              return (
                p.parentNode && p.parentNode.selectedIndex, !0 === p.selected
              );
            },
            empty: function (p) {
              for (p = p.firstChild; p; p = p.nextSibling)
                if (6 > p.nodeType) return !1;
              return !0;
            },
            parent: function (p) {
              return !za.pseudos.empty(p);
            },
            header: function (p) {
              return Xd.test(p.nodeName);
            },
            input: function (p) {
              return Wd.test(p.nodeName);
            },
            button: function (p) {
              var v = p.nodeName.toLowerCase();
              return ("input" === v && "button" === p.type) || "button" === v;
            },
            text: function (p) {
              var v;
              return (
                "input" === p.nodeName.toLowerCase() &&
                "text" === p.type &&
                (null == (v = p.getAttribute("type")) ||
                  "text" === v.toLowerCase())
              );
            },
            first: L(function () {
              return [0];
            }),
            last: L(function (p, v) {
              return [v - 1];
            }),
            eq: L(function (p, v, B) {
              return [0 > B ? B + v : B];
            }),
            even: L(function (p, v) {
              for (var B = 0; B < v; B += 2) p.push(B);
              return p;
            }),
            odd: L(function (p, v) {
              for (var B = 1; B < v; B += 2) p.push(B);
              return p;
            }),
            lt: L(function (p, v, B) {
              for (v = 0 > B ? B + v : B > v ? v : B; 0 <= --v; ) p.push(v);
              return p;
            }),
            gt: L(function (p, v, B) {
              for (B = 0 > B ? B + v : B; ++B < v; ) p.push(B);
              return p;
            }),
          },
        }).pseudos.nth = za.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          za.pseudos[Ab] = w(Ab);
        for (Ab in { submit: !0, reset: !0 }) za.pseudos[Ab] = x(Ab);
        return (
          (aa.prototype = za.filters = za.pseudos),
          (za.setFilters = new aa()),
          (eb = c.tokenize = function (p, v) {
            var B, D, J, U, R, ja;
            if ((R = Dc[p + " "])) return v ? 0 : R.slice(0);
            R = p;
            var W = [];
            for (ja = za.preFilter; R; ) {
              for (U in ((B && !(D = Sd.exec(R))) ||
                (D && (R = R.slice(D[0].length) || R), W.push((J = []))),
              (B = !1),
              (D = Ad.exec(R)) &&
                ((B = D.shift()),
                J.push({ value: B, type: D[0].replace(id, " ") }),
                (R = R.slice(B.length))),
              za.filter))
                !(D = kd[U].exec(R)) ||
                  (ja[U] && !(D = ja[U](D))) ||
                  ((B = D.shift()),
                  J.push({ value: B, type: U, matches: D }),
                  (R = R.slice(B.length)));
              if (!B) break;
            }
            return v ? R.length : R ? c.error(p) : Dc(p, W).slice(0);
          }),
          (Mc = c.compile = function (p, v) {
            var B,
              D = [],
              J = [],
              U = jd[p + " "];
            if (!U) {
              v || (v = eb(p));
              for (B = v.length; B--; )
                (U = ob(v[B]))[ta] ? D.push(U) : J.push(U);
              (U = jd(
                p,
                (function (R, ja) {
                  var W = 0 < ja.length,
                    sa = 0 < R.length,
                    Ga = function ($a, ab, Aa, Ra, Na) {
                      var vb,
                        yb,
                        kb = 0,
                        bb = "0",
                        ld = $a && [],
                        Fc = [],
                        Fd = zb,
                        Gd = $a || (sa && za.find.TAG("*", Na)),
                        Hd = (nb += null == Fd ? 1 : Math.random() || 0.1),
                        Yd = Gd.length;
                      for (
                        Na && (zb = ab == Fa || ab || Na);
                        bb !== Yd && null != (vb = Gd[bb]);
                        bb++
                      ) {
                        if (sa && vb) {
                          var wd = 0;
                          for (
                            ab ||
                            vb.ownerDocument == Fa ||
                            (ub(vb), (Aa = !Wa));
                            (yb = R[wd++]);

                          )
                            if (yb(vb, ab || Fa, Aa)) {
                              Ra.push(vb);
                              break;
                            }
                          Na && (nb = Hd);
                        }
                        W && ((vb = !yb && vb) && kb--, $a && ld.push(vb));
                      }
                      if (((kb += bb), W && bb !== kb)) {
                        for (wd = 0; (yb = ja[wd++]); ) yb(ld, Fc, ab, Aa);
                        if ($a) {
                          if (0 < kb)
                            for (; bb--; )
                              ld[bb] || Fc[bb] || (Fc[bb] = Pd.call(Ra));
                          Fc = jb(Fc);
                        }
                        qc.apply(Ra, Fc);
                        Na &&
                          !$a &&
                          0 < Fc.length &&
                          1 < kb + ja.length &&
                          c.uniqueSort(Ra);
                      }
                      return Na && ((nb = Hd), (zb = Fd)), ld;
                    };
                  return W ? g(Ga) : Ga;
                })(J, D)
              )).selector = p;
            }
            return U;
          }),
          (hd = c.select = function (p, v, B, D) {
            var J,
              U,
              R,
              ja,
              W,
              sa = "function" == typeof p && p,
              Ga = !D && eb((p = sa.selector || p));
            if (((B = B || []), 1 === Ga.length)) {
              if (
                2 < (U = Ga[0] = Ga[0].slice(0)).length &&
                "ID" === (R = U[0]).type &&
                9 === v.nodeType &&
                Wa &&
                za.relative[U[1].type]
              ) {
                if (
                  !(v = (za.find.ID(R.matches[0].replace(gc, hc), v) || [])[0])
                )
                  return B;
                sa && (v = v.parentNode);
                p = p.slice(U.shift().value.length);
              }
              for (
                J = kd.needsContext.test(p) ? 0 : U.length;
                J-- && ((R = U[J]), !za.relative[(ja = R.type)]);

              )
                if (
                  (W = za.find[ja]) &&
                  (D = W(
                    R.matches[0].replace(gc, hc),
                    (ud.test(U[0].type) && C(v.parentNode)) || v
                  ))
                ) {
                  if ((U.splice(J, 1), !(p = D.length && oa(U))))
                    return qc.apply(B, D), B;
                  break;
                }
            }
            return (
              (sa || Mc(p, Ga))(
                D,
                v,
                !Wa,
                B,
                !v || (ud.test(p) && C(v.parentNode)) || v
              ),
              B
            );
          }),
          (la.sortStable = ta.split("").sort(vd).join("") === ta),
          (la.detectDuplicates = !!Pb),
          ub(),
          (la.sortDetached = l(function (p) {
            return 1 & p.compareDocumentPosition(Fa.createElement("fieldset"));
          })),
          l(function (p) {
            return (
              (p.innerHTML = "<a href='#'></a>"),
              "#" === p.firstChild.getAttribute("href")
            );
          }) ||
            n("type|href|height|width", function (p, v, B) {
              if (!B)
                return p.getAttribute(v, "type" === v.toLowerCase() ? 1 : 2);
            }),
          (la.attributes &&
            l(function (p) {
              return (
                (p.innerHTML = "<input/>"),
                p.firstChild.setAttribute("value", ""),
                "" === p.firstChild.getAttribute("value")
              );
            })) ||
            n("value", function (p, v, B) {
              if (!B && "input" === p.nodeName.toLowerCase())
                return p.defaultValue;
            }),
          l(function (p) {
            return null == p.getAttribute("disabled");
          }) ||
            n(
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              function (p, v, B) {
                var D;
                if (!B)
                  return !0 === p[v]
                    ? v.toLowerCase()
                    : (D = p.getAttributeNode(v)) && D.specified
                    ? D.value
                    : null;
              }
            ),
          c
        );
      })(Q);
      h.find = Wb;
      h.expr = Wb.selectors;
      h.expr[":"] = h.expr.pseudos;
      h.uniqueSort = h.unique = Wb.uniqueSort;
      h.text = Wb.getText;
      h.isXMLDoc = Wb.isXML;
      h.contains = Wb.contains;
      h.escapeSelector = Wb.escape;
      var ic = function (a, c, f) {
          for (var g = [], l = void 0 !== f; (a = a[c]) && 9 !== a.nodeType; )
            if (1 === a.nodeType) {
              if (l && h(a).is(f)) break;
              g.push(a);
            }
          return g;
        },
        Zc = function (a, c) {
          for (var f = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== c && f.push(a);
          return f;
        },
        $c = h.expr.match.needsContext,
        Cb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      h.filter = function (a, c, f) {
        var g = c[0];
        return (
          f && (a = ":not(" + a + ")"),
          1 === c.length && 1 === g.nodeType
            ? h.find.matchesSelector(g, a)
              ? [g]
              : []
            : h.find.matches(
                a,
                h.grep(c, function (l) {
                  return 1 === l.nodeType;
                })
              )
        );
      };
      h.fn.extend({
        find: function (a) {
          var c,
            f = this.length,
            g = this;
          if ("string" != typeof a)
            return this.pushStack(
              h(a).filter(function () {
                for (c = 0; c < f; c++) if (h.contains(g[c], this)) return !0;
              })
            );
          var l = this.pushStack([]);
          for (c = 0; c < f; c++) h.find(a, g[c], l);
          return 1 < f ? h.uniqueSort(l) : l;
        },
        filter: function (a) {
          return this.pushStack(m(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(m(this, a || [], !0));
        },
        is: function (a) {
          return !!m(
            this,
            "string" == typeof a && $c.test(a) ? h(a) : a || [],
            !1
          ).length;
        },
      });
      var Za = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (h.fn.init = function (a, c, f) {
        var g, l;
        if (!a) return this;
        if (((f = f || fb), "string" == typeof a)) {
          if (
            !(g =
              "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length
                ? [null, a, null]
                : Za.exec(a)) ||
            (!g[1] && c)
          )
            return !c || c.jquery
              ? (c || f).find(a)
              : this.constructor(c).find(a);
          if (g[1]) {
            if (
              ((c = c instanceof h ? c[0] : c),
              h.merge(
                this,
                h.parseHTML(
                  g[1],
                  c && c.nodeType ? c.ownerDocument || c : ma,
                  !0
                )
              ),
              Cb.test(g[1]) && h.isPlainObject(c))
            )
              for (g in c) va(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
            return this;
          }
          return (
            (l = ma.getElementById(g[2])) && ((this[0] = l), (this.length = 1)),
            this
          );
        }
        return a.nodeType
          ? ((this[0] = a), (this.length = 1), this)
          : va(a)
          ? void 0 !== f.ready
            ? f.ready(a)
            : a(h)
          : h.makeArray(a, this);
      }).prototype = h.fn;
      var fb = h(ma);
      var wb = /^(?:parents|prev(?:Until|All))/,
        Xa = { children: !0, contents: !0, next: !0, prev: !0 };
      h.fn.extend({
        has: function (a) {
          var c = h(a, this),
            f = c.length;
          return this.filter(function () {
            for (var g = 0; g < f; g++) if (h.contains(this, c[g])) return !0;
          });
        },
        closest: function (a, c) {
          var f,
            g = 0,
            l = this.length,
            n = [],
            q = "string" != typeof a && h(a);
          if (!$c.test(a))
            for (; g < l; g++)
              for (f = this[g]; f && f !== c; f = f.parentNode)
                if (
                  11 > f.nodeType &&
                  (q
                    ? -1 < q.index(f)
                    : 1 === f.nodeType && h.find.matchesSelector(f, a))
                ) {
                  n.push(f);
                  break;
                }
          return this.pushStack(1 < n.length ? h.uniqueSort(n) : n);
        },
        index: function (a) {
          return a
            ? "string" == typeof a
              ? tc.call(h(a), this[0])
              : tc.call(this, a.jquery ? a[0] : a)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (a, c) {
          return this.pushStack(h.uniqueSort(h.merge(this.get(), h(a, c))));
        },
        addBack: function (a) {
          return this.add(
            null == a ? this.prevObject : this.prevObject.filter(a)
          );
        },
      });
      h.each(
        {
          parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
          },
          parents: function (a) {
            return ic(a, "parentNode");
          },
          parentsUntil: function (a, c, f) {
            return ic(a, "parentNode", f);
          },
          next: function (a) {
            return z(a, "nextSibling");
          },
          prev: function (a) {
            return z(a, "previousSibling");
          },
          nextAll: function (a) {
            return ic(a, "nextSibling");
          },
          prevAll: function (a) {
            return ic(a, "previousSibling");
          },
          nextUntil: function (a, c, f) {
            return ic(a, "nextSibling", f);
          },
          prevUntil: function (a, c, f) {
            return ic(a, "previousSibling", f);
          },
          siblings: function (a) {
            return Zc((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return Zc(a.firstChild);
          },
          contents: function (a) {
            return null != a.contentDocument && Ac(a.contentDocument)
              ? a.contentDocument
              : (Ja(a, "template") && (a = a.content || a),
                h.merge([], a.childNodes));
          },
        },
        function (a, c) {
          h.fn[a] = function (f, g) {
            var l = h.map(this, c, f);
            return (
              "Until" !== a.slice(-5) && (g = f),
              g && "string" == typeof g && (l = h.filter(g, l)),
              1 < this.length &&
                (Xa[a] || h.uniqueSort(l), wb.test(a) && l.reverse()),
              this.pushStack(l)
            );
          };
        }
      );
      var Ka = /[^\x20\t\r\n\f]+/g;
      h.Callbacks = function (a) {
        a =
          "string" == typeof a
            ? (function (L) {
                var C = {};
                return (
                  h.each(L.match(Ka) || [], function (aa, oa) {
                    C[oa] = !0;
                  }),
                  C
                );
              })(a)
            : h.extend({}, a);
        var c,
          f,
          g,
          l,
          n = [],
          q = [],
          w = -1,
          x = function () {
            l = l || a.once;
            for (g = c = !0; q.length; w = -1)
              for (f = q.shift(); ++w < n.length; )
                !1 === n[w].apply(f[0], f[1]) &&
                  a.stopOnFalse &&
                  ((w = n.length), (f = !1));
            a.memory || (f = !1);
            c = !1;
            l && (n = f ? [] : "");
          },
          H = {
            add: function () {
              return (
                n &&
                  (f && !c && ((w = n.length - 1), q.push(f)),
                  (function aa(C) {
                    h.each(C, function (oa, fa) {
                      va(fa)
                        ? (a.unique && H.has(fa)) || n.push(fa)
                        : fa && fa.length && "string" !== K(fa) && aa(fa);
                    });
                  })(arguments),
                  f && !c && x()),
                this
              );
            },
            remove: function () {
              return (
                h.each(arguments, function (L, C) {
                  for (var aa; -1 < (aa = h.inArray(C, n, aa)); )
                    n.splice(aa, 1), aa <= w && w--;
                }),
                this
              );
            },
            has: function (L) {
              return L ? -1 < h.inArray(L, n) : 0 < n.length;
            },
            empty: function () {
              return n && (n = []), this;
            },
            disable: function () {
              return (l = q = []), (n = f = ""), this;
            },
            disabled: function () {
              return !n;
            },
            lock: function () {
              return (l = q = []), f || c || (n = f = ""), this;
            },
            locked: function () {
              return !!l;
            },
            fireWith: function (L, C) {
              return (
                l ||
                  ((C = [L, (C = C || []).slice ? C.slice() : C]),
                  q.push(C),
                  c || x()),
                this
              );
            },
            fire: function () {
              return H.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!g;
            },
          };
        return H;
      };
      h.extend({
        Deferred: function (a) {
          var c = [
              [
                "notify",
                "progress",
                h.Callbacks("memory"),
                h.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                h.Callbacks("once memory"),
                h.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                h.Callbacks("once memory"),
                h.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            f = "pending",
            g = {
              state: function () {
                return f;
              },
              always: function () {
                return l.done(arguments).fail(arguments), this;
              },
              catch: function (n) {
                return g.then(null, n);
              },
              pipe: function () {
                var n = arguments;
                return h
                  .Deferred(function (q) {
                    h.each(c, function (w, x) {
                      var H = va(n[x[4]]) && n[x[4]];
                      l[x[1]](function () {
                        var L = H && H.apply(this, arguments);
                        L && va(L.promise)
                          ? L.promise()
                              .progress(q.notify)
                              .done(q.resolve)
                              .fail(q.reject)
                          : q[x[0] + "With"](this, H ? [L] : arguments);
                      });
                    });
                    n = null;
                  })
                  .promise();
              },
              then: function (n, q, w) {
                function x(L, C, aa, oa) {
                  return function () {
                    var fa = this,
                      ya = arguments,
                      jb = function () {
                        var ob;
                        if (!(L < H)) {
                          if ((ob = aa.apply(fa, ya)) === C.promise())
                            throw new TypeError("Thenable self-resolution");
                          var Ab =
                            ob &&
                            ("object" == typeof ob ||
                              "function" == typeof ob) &&
                            ob.then;
                          va(Ab)
                            ? oa
                              ? Ab.call(ob, x(H, C, E, oa), x(H, C, A, oa))
                              : (H++,
                                Ab.call(
                                  ob,
                                  x(H, C, E, oa),
                                  x(H, C, A, oa),
                                  x(H, C, E, C.notifyWith)
                                ))
                            : (aa !== E && ((fa = void 0), (ya = [ob])),
                              (oa || C.resolveWith)(fa, ya));
                        }
                      },
                      Ob = oa
                        ? jb
                        : function () {
                            try {
                              jb();
                            } catch (ob) {
                              h.Deferred.exceptionHook &&
                                h.Deferred.exceptionHook(ob, Ob.stackTrace),
                                L + 1 >= H &&
                                  (aa !== A && ((fa = void 0), (ya = [ob])),
                                  C.rejectWith(fa, ya));
                            }
                          };
                    L
                      ? Ob()
                      : (h.Deferred.getStackHook &&
                          (Ob.stackTrace = h.Deferred.getStackHook()),
                        Q.setTimeout(Ob));
                  };
                }
                var H = 0;
                return h
                  .Deferred(function (L) {
                    c[0][3].add(x(0, L, va(w) ? w : E, L.notifyWith));
                    c[1][3].add(x(0, L, va(n) ? n : E));
                    c[2][3].add(x(0, L, va(q) ? q : A));
                  })
                  .promise();
              },
              promise: function (n) {
                return null != n ? h.extend(n, g) : g;
              },
            },
            l = {};
          return (
            h.each(c, function (n, q) {
              var w = q[2],
                x = q[5];
              g[q[1]] = w.add;
              x &&
                w.add(
                  function () {
                    f = x;
                  },
                  c[3 - n][2].disable,
                  c[3 - n][3].disable,
                  c[0][2].lock,
                  c[0][3].lock
                );
              w.add(q[3].fire);
              l[q[0]] = function () {
                return (
                  l[q[0] + "With"](this === l ? void 0 : this, arguments), this
                );
              };
              l[q[0] + "With"] = w.fireWith;
            }),
            g.promise(l),
            a && a.call(l, l),
            l
          );
        },
        when: function (a) {
          var c = arguments.length,
            f = c,
            g = Array(f),
            l = Eb.call(arguments),
            n = h.Deferred(),
            q = function (w) {
              return function (x) {
                g[w] = this;
                l[w] = 1 < arguments.length ? Eb.call(arguments) : x;
                --c || n.resolveWith(g, l);
              };
            };
          if (
            1 >= c &&
            (F(a, n.done(q(f)).resolve, n.reject, !c),
            "pending" === n.state() || va(l[f] && l[f].then))
          )
            return n.then();
          for (; f--; ) F(l[f], q(f), n.reject);
          return n.promise();
        },
      });
      var Gc = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      h.Deferred.exceptionHook = function (a, c) {
        Q.console &&
          Q.console.warn &&
          a &&
          Gc.test(a.name) &&
          Q.console.warn("jQuery.Deferred exception: " + a.message, a.stack, c);
      };
      h.readyException = function (a) {
        Q.setTimeout(function () {
          throw a;
        });
      };
      var da = h.Deferred();
      h.fn.ready = function (a) {
        return (
          da.then(a)["catch"](function (c) {
            h.readyException(c);
          }),
          this
        );
      };
      h.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
          (!0 === a ? --h.readyWait : h.isReady) ||
            ((h.isReady = !0),
            (!0 !== a && 0 < --h.readyWait) || da.resolveWith(ma, [h]));
        },
      });
      h.ready.then = da.then;
      "complete" === ma.readyState ||
      ("loading" !== ma.readyState && !ma.documentElement.doScroll)
        ? Q.setTimeout(h.ready)
        : (ma.addEventListener("DOMContentLoaded", S),
          Q.addEventListener("load", S));
      var Ib = function (a, c, f, g, l, n, q) {
          var w = 0,
            x = a.length,
            H = null == f;
          if ("object" === K(f))
            for (w in ((l = !0), f)) Ib(a, c, w, f[w], !0, n, q);
          else if (
            void 0 !== g &&
            ((l = !0),
            va(g) || (q = !0),
            H &&
              (q
                ? (c.call(a, g), (c = null))
                : ((H = c),
                  (c = function (L, C, aa) {
                    return H.call(h(L), aa);
                  }))),
            c)
          )
            for (; w < x; w++) c(a[w], f, q ? g : g.call(a[w], w, c(a[w], f)));
          return l ? a : H ? c.call(a) : x ? c(a[0], f) : n;
        },
        uc = /^-ms-/,
        ka = /-([a-z])/g,
        jc = function (a) {
          return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
      ea.uid = 1;
      ea.prototype = {
        cache: function (a) {
          var c = a[this.expando];
          return (
            c ||
              ((c = {}),
              jc(a) &&
                (a.nodeType
                  ? (a[this.expando] = c)
                  : Object.defineProperty(a, this.expando, {
                      value: c,
                      configurable: !0,
                    }))),
            c
          );
        },
        set: function (a, c, f) {
          var g;
          a = this.cache(a);
          if ("string" == typeof c) a[G(c)] = f;
          else for (g in c) a[G(g)] = c[g];
          return a;
        },
        get: function (a, c) {
          return void 0 === c
            ? this.cache(a)
            : a[this.expando] && a[this.expando][G(c)];
        },
        access: function (a, c, f) {
          return void 0 === c || (c && "string" == typeof c && void 0 === f)
            ? this.get(a, c)
            : (this.set(a, c, f), void 0 !== f ? f : c);
        },
        remove: function (a, c) {
          var f = a[this.expando];
          if (void 0 !== f) {
            if (void 0 !== c) {
              var g = (c = Array.isArray(c)
                ? c.map(G)
                : (c = G(c)) in f
                ? [c]
                : c.match(Ka) || []).length;
              for (; g--; ) delete f[c[g]];
            }
            (void 0 === c || h.isEmptyObject(f)) &&
              (a.nodeType
                ? (a[this.expando] = void 0)
                : delete a[this.expando]);
          }
        },
        hasData: function (a) {
          a = a[this.expando];
          return void 0 !== a && !h.isEmptyObject(a);
        },
      };
      var na = new ea(),
        pb = new ea(),
        ed = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Pc = /[A-Z]/g;
      h.extend({
        hasData: function (a) {
          return pb.hasData(a) || na.hasData(a);
        },
        data: function (a, c, f) {
          return pb.access(a, c, f);
        },
        removeData: function (a, c) {
          pb.remove(a, c);
        },
        _data: function (a, c, f) {
          return na.access(a, c, f);
        },
        _removeData: function (a, c) {
          na.remove(a, c);
        },
      });
      h.fn.extend({
        data: function (a, c) {
          var f,
            g,
            l,
            n = this[0],
            q = n && n.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((l = pb.get(n)), 1 === n.nodeType && !na.get(n, "hasDataAttrs"))
            ) {
              for (f = q.length; f--; )
                q[f] &&
                  0 === (g = q[f].name).indexOf("data-") &&
                  ((g = G(g.slice(5))), ca(n, g, l[g]));
              na.set(n, "hasDataAttrs", !0);
            }
            return l;
          }
          return "object" == typeof a
            ? this.each(function () {
                pb.set(this, a);
              })
            : Ib(
                this,
                function (w) {
                  var x;
                  if (n && void 0 === w)
                    return void 0 !== (x = pb.get(n, a)) ||
                      void 0 !== (x = ca(n, a))
                      ? x
                      : void 0;
                  this.each(function () {
                    pb.set(this, a, w);
                  });
                },
                null,
                c,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (a) {
          return this.each(function () {
            pb.remove(this, a);
          });
        },
      });
      h.extend({
        queue: function (a, c, f) {
          var g;
          if (a)
            return (
              (c = (c || "fx") + "queue"),
              (g = na.get(a, c)),
              f &&
                (!g || Array.isArray(f)
                  ? (g = na.access(a, c, h.makeArray(f)))
                  : g.push(f)),
              g || []
            );
        },
        dequeue: function (a, c) {
          c = c || "fx";
          var f = h.queue(a, c),
            g = f.length,
            l = f.shift(),
            n = h._queueHooks(a, c);
          "inprogress" === l && ((l = f.shift()), g--);
          l &&
            ("fx" === c && f.unshift("inprogress"),
            delete n.stop,
            l.call(
              a,
              function () {
                h.dequeue(a, c);
              },
              n
            ));
          !g && n && n.empty.fire();
        },
        _queueHooks: function (a, c) {
          var f = c + "queueHooks";
          return (
            na.get(a, f) ||
            na.access(a, f, {
              empty: h.Callbacks("once memory").add(function () {
                na.remove(a, [c + "queue", f]);
              }),
            })
          );
        },
      });
      h.fn.extend({
        queue: function (a, c) {
          var f = 2;
          return (
            "string" != typeof a && ((c = a), (a = "fx"), f--),
            arguments.length < f
              ? h.queue(this[0], a)
              : void 0 === c
              ? this
              : this.each(function () {
                  var g = h.queue(this, a, c);
                  h._queueHooks(this, a);
                  "fx" === a && "inprogress" !== g[0] && h.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            h.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, c) {
          var f,
            g = 1,
            l = h.Deferred(),
            n = this,
            q = this.length,
            w = function () {
              --g || l.resolveWith(n, [n]);
            };
          "string" != typeof a && ((c = a), (a = void 0));
          for (a = a || "fx"; q--; )
            (f = na.get(n[q], a + "queueHooks")) &&
              f.empty &&
              (g++, f.empty.add(w));
          return w(), l.promise(c);
        },
      });
      var Sb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Yb = new RegExp("^(?:([+-])=|)(" + Sb + ")([a-z%]*)$", "i"),
        Fb = ["Top", "Right", "Bottom", "Left"],
        Sa = ma.documentElement,
        lc = function (a) {
          return h.contains(a.ownerDocument, a);
        },
        Xb = { composed: !0 };
      Sa.getRootNode &&
        (lc = function (a) {
          return (
            h.contains(a.ownerDocument, a) ||
            a.getRootNode(Xb) === a.ownerDocument
          );
        });
      var Tb = function (a, c) {
          return (
            "none" === (a = c || a).style.display ||
            ("" === a.style.display && lc(a) && "none" === h.css(a, "display"))
          );
        },
        Qc = {};
      h.fn.extend({
        show: function () {
          return Ma(this, !0);
        },
        hide: function () {
          return Ma(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                Tb(this) ? h(this).show() : h(this).hide();
              });
        },
      });
      var Hc,
        db = /^(?:checkbox|radio)$/i,
        Rc = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        X = /^$|^module$|\/(?:java|ecma)script/i;
      var Ba = ma.createDocumentFragment().appendChild(ma.createElement("div"));
      (Hc = ma.createElement("input")).setAttribute("type", "radio");
      Hc.setAttribute("checked", "checked");
      Hc.setAttribute("name", "t");
      Ba.appendChild(Hc);
      Ea.checkClone = Ba.cloneNode(!0).cloneNode(!0).lastChild.checked;
      Ba.innerHTML = "<textarea>x</textarea>";
      Ea.noCloneChecked = !!Ba.cloneNode(!0).lastChild.defaultValue;
      Ba.innerHTML = "<option></option>";
      Ea.option = !!Ba.lastChild;
      var sb = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead;
      sb.th = sb.td;
      Ea.option ||
        (sb.optgroup = sb.option = [
          1,
          "<select multiple='multiple'>",
          "</select>",
        ]);
      var Ub = /<|&#?\w+;/,
        ad = /^key/,
        xd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        md = /^([^.]*)(?:\.(.+)|)/;
      h.event = {
        global: {},
        add: function (a, c, f, g, l) {
          var n, q, w, x, H, L, C, aa;
          var oa = na.get(a);
          if (jc(a))
            for (
              f.handler && ((f = (n = f).handler), (l = n.selector)),
                l && h.find.matchesSelector(Sa, l),
                f.guid || (f.guid = h.guid++),
                (x = oa.events) || (x = oa.events = Object.create(null)),
                (q = oa.handle) ||
                  (q = oa.handle = function (ya) {
                    return void 0 !== h && h.event.triggered !== ya.type
                      ? h.event.dispatch.apply(a, arguments)
                      : void 0;
                  }),
                oa = (c = (c || "").match(Ka) || [""]).length;
              oa--;

            ) {
              var fa = (aa = (w = md.exec(c[oa]) || [])[1]);
              w = (w[2] || "").split(".").sort();
              fa &&
                ((L = h.event.special[fa] || {}),
                (fa = (l ? L.delegateType : L.bindType) || fa),
                (L = h.event.special[fa] || {}),
                (H = h.extend(
                  {
                    type: fa,
                    origType: aa,
                    data: g,
                    handler: f,
                    guid: f.guid,
                    selector: l,
                    needsContext: l && h.expr.match.needsContext.test(l),
                    namespace: w.join("."),
                  },
                  n
                )),
                (C = x[fa]) ||
                  (((C = x[fa] = []).delegateCount = 0),
                  (L.setup && !1 !== L.setup.call(a, g, w, q)) ||
                    (a.addEventListener && a.addEventListener(fa, q))),
                L.add &&
                  (L.add.call(a, H),
                  H.handler.guid || (H.handler.guid = f.guid)),
                l ? C.splice(C.delegateCount++, 0, H) : C.push(H),
                (h.event.global[fa] = !0));
            }
        },
        remove: function (a, c, f, g, l) {
          var n,
            q,
            w,
            x,
            H,
            L,
            C,
            aa,
            oa = na.hasData(a) && na.get(a);
          if (oa && (x = oa.events)) {
            for (H = (c = (c || "").match(Ka) || [""]).length; H--; )
              if (
                ((L = aa = (w = md.exec(c[H]) || [])[1]),
                (C = (w[2] || "").split(".").sort()),
                L)
              ) {
                var fa = h.event.special[L] || {};
                var ya =
                  x[(L = (g ? fa.delegateType : fa.bindType) || L)] || [];
                w =
                  w[2] &&
                  new RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)");
                for (q = n = ya.length; n--; ) {
                  var jb = ya[n];
                  (!l && aa !== jb.origType) ||
                    (f && f.guid !== jb.guid) ||
                    (w && !w.test(jb.namespace)) ||
                    (g && g !== jb.selector && ("**" !== g || !jb.selector)) ||
                    (ya.splice(n, 1),
                    jb.selector && ya.delegateCount--,
                    fa.remove && fa.remove.call(a, jb));
                }
                q &&
                  !ya.length &&
                  ((fa.teardown && !1 !== fa.teardown.call(a, C, oa.handle)) ||
                    h.removeEvent(a, L, oa.handle),
                  delete x[L]);
              } else for (L in x) h.event.remove(a, L + c[H], f, g, !0);
            h.isEmptyObject(x) && na.remove(a, "handle events");
          }
        },
        dispatch: function (a) {
          var c,
            f,
            g,
            l,
            n = Array(arguments.length),
            q = h.event.fix(a);
          var w = (na.get(this, "events") || Object.create(null))[q.type] || [];
          var x = h.event.special[q.type] || {};
          n[0] = q;
          for (c = 1; c < arguments.length; c++) n[c] = arguments[c];
          if (
            ((q.delegateTarget = this),
            !x.preDispatch || !1 !== x.preDispatch.call(this, q))
          ) {
            var H = h.event.handlers.call(this, q, w);
            for (c = 0; (g = H[c++]) && !q.isPropagationStopped(); )
              for (
                q.currentTarget = g.elem, w = 0;
                (l = g.handlers[w++]) && !q.isImmediatePropagationStopped();

              )
                (q.rnamespace &&
                  !1 !== l.namespace &&
                  !q.rnamespace.test(l.namespace)) ||
                  ((q.handleObj = l),
                  (q.data = l.data),
                  void 0 !==
                    (f = (
                      (h.event.special[l.origType] || {}).handle || l.handler
                    ).apply(g.elem, n)) &&
                    !1 === (q.result = f) &&
                    (q.preventDefault(), q.stopPropagation()));
            return x.postDispatch && x.postDispatch.call(this, q), q.result;
          }
        },
        handlers: function (a, c) {
          var f,
            g,
            l,
            n = [],
            q = c.delegateCount,
            w = a.target;
          if (q && w.nodeType && !("click" === a.type && 1 <= a.button))
            for (; w !== this; w = w.parentNode || this)
              if (
                1 === w.nodeType &&
                ("click" !== a.type || !0 !== w.disabled)
              ) {
                var x = [];
                var H = {};
                for (f = 0; f < q; f++)
                  void 0 === H[(l = (g = c[f]).selector + " ")] &&
                    (H[l] = g.needsContext
                      ? -1 < h(l, this).index(w)
                      : h.find(l, this, null, [w]).length),
                    H[l] && x.push(g);
                x.length && n.push({ elem: w, handlers: x });
              }
          return (
            (w = this),
            q < c.length && n.push({ elem: w, handlers: c.slice(q) }),
            n
          );
        },
        addProp: function (a, c) {
          Object.defineProperty(h.Event.prototype, a, {
            enumerable: !0,
            configurable: !0,
            get: va(c)
              ? function () {
                  if (this.originalEvent) return c(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[a];
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
        fix: function (a) {
          return a[h.expando] ? a : new h.Event(a);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (a) {
              a = this || a;
              return (
                db.test(a.type) &&
                  a.click &&
                  Ja(a, "input") &&
                  wa(a, "click", Jb),
                !1
              );
            },
            trigger: function (a) {
              a = this || a;
              return (
                db.test(a.type) && a.click && Ja(a, "input") && wa(a, "click"),
                !0
              );
            },
            _default: function (a) {
              a = a.target;
              return (
                (db.test(a.type) &&
                  a.click &&
                  Ja(a, "input") &&
                  na.get(a, "click")) ||
                Ja(a, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (a) {
              void 0 !== a.result &&
                a.originalEvent &&
                (a.originalEvent.returnValue = a.result);
            },
          },
        },
      };
      h.removeEvent = function (a, c, f) {
        a.removeEventListener && a.removeEventListener(c, f);
      };
      h.Event = function (a, c) {
        if (!(this instanceof h.Event)) return new h.Event(a, c);
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              (void 0 === a.defaultPrevented && !1 === a.returnValue)
                ? Jb
                : Kb),
            (this.target =
              a.target && 3 === a.target.nodeType
                ? a.target.parentNode
                : a.target),
            (this.currentTarget = a.currentTarget),
            (this.relatedTarget = a.relatedTarget))
          : (this.type = a);
        c && h.extend(this, c);
        this.timeStamp = (a && a.timeStamp) || Date.now();
        this[h.expando] = !0;
      };
      h.Event.prototype = {
        constructor: h.Event,
        isDefaultPrevented: Kb,
        isPropagationStopped: Kb,
        isImmediatePropagationStopped: Kb,
        isSimulated: !1,
        preventDefault: function () {
          var a = this.originalEvent;
          this.isDefaultPrevented = Jb;
          a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          this.isPropagationStopped = Jb;
          a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          this.isImmediatePropagationStopped = Jb;
          a && !this.isSimulated && a.stopImmediatePropagation();
          this.stopPropagation();
        },
      };
      h.each(
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
            var c = a.button;
            return null == a.which && ad.test(a.type)
              ? null != a.charCode
                ? a.charCode
                : a.keyCode
              : !a.which && void 0 !== c && xd.test(a.type)
              ? 1 & c
                ? 1
                : 2 & c
                ? 3
                : 4 & c
                ? 2
                : 0
              : a.which;
          },
        },
        h.event.addProp
      );
      h.each({ focus: "focusin", blur: "focusout" }, function (a, c) {
        h.event.special[a] = {
          setup: function () {
            return wa(this, a, Db), !1;
          },
          trigger: function () {
            return wa(this, a), !0;
          },
          delegateType: c,
        };
      });
      h.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, c) {
          h.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function (f) {
              var g,
                l = f.relatedTarget,
                n = f.handleObj;
              return (
                (l && (l === this || h.contains(this, l))) ||
                  ((f.type = n.origType),
                  (g = n.handler.apply(this, arguments)),
                  (f.type = c)),
                g
              );
            },
          };
        }
      );
      h.fn.extend({
        on: function (a, c, f, g) {
          return Lb(this, a, c, f, g);
        },
        one: function (a, c, f, g) {
          return Lb(this, a, c, f, g, 1);
        },
        off: function (a, c, f) {
          var g, l;
          if (a && a.preventDefault && a.handleObj)
            return (
              (g = a.handleObj),
              h(a.delegateTarget).off(
                g.namespace ? g.origType + "." + g.namespace : g.origType,
                g.selector,
                g.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (l in a) this.off(l, c, a[l]);
            return this;
          }
          return (
            (!1 !== c && "function" != typeof c) || ((f = c), (c = void 0)),
            !1 === f && (f = Kb),
            this.each(function () {
              h.event.remove(this, a, f, c);
            })
          );
        },
      });
      var Ta = /<script|<style|<link/i,
        qd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      h.extend({
        htmlPrefilter: function (a) {
          return a;
        },
        clone: function (a, c, f) {
          var g,
            l,
            n = a.cloneNode(!0),
            q = lc(a);
          if (
            !(
              Ea.noCloneChecked ||
              (1 !== a.nodeType && 11 !== a.nodeType) ||
              h.isXMLDoc(a)
            )
          ) {
            var w = Y(n);
            var x = 0;
            for (g = (l = Y(a)).length; x < g; x++) {
              var H = l[x],
                L = w[x],
                C = L.nodeName.toLowerCase();
              "input" === C && db.test(H.type)
                ? (L.checked = H.checked)
                : ("input" !== C && "textarea" !== C) ||
                  (L.defaultValue = H.defaultValue);
            }
          }
          if (c)
            if (f)
              for (
                l = l || Y(a), w = w || Y(n), x = 0, g = l.length;
                x < g;
                x++
              )
                gb(l[x], w[x]);
            else gb(a, n);
          return (
            0 < (w = Y(n, "script")).length && Zb(w, !q && Y(a, "script")), n
          );
        },
        cleanData: function (a) {
          for (
            var c, f, g, l = h.event.special, n = 0;
            void 0 !== (f = a[n]);
            n++
          )
            if (jc(f)) {
              if ((c = f[na.expando])) {
                if (c.events)
                  for (g in c.events)
                    l[g] ? h.event.remove(f, g) : h.removeEvent(f, g, c.handle);
                f[na.expando] = void 0;
              }
              f[pb.expando] && (f[pb.expando] = void 0);
            }
        },
      });
      h.fn.extend({
        detach: function (a) {
          return ac(this, a, !0);
        },
        remove: function (a) {
          return ac(this, a);
        },
        text: function (a) {
          return Ib(
            this,
            function (c) {
              return void 0 === c
                ? h.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = c);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return Vb(this, arguments, function (a) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              vc(this, a).appendChild(a);
          });
        },
        prepend: function () {
          return Vb(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var c = vc(this, a);
              c.insertBefore(a, c.firstChild);
            }
          });
        },
        before: function () {
          return Vb(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return Vb(this, arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, c = 0; null != (a = this[c]); c++)
            1 === a.nodeType && (h.cleanData(Y(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function (a, c) {
          return (
            (a = null != a && a),
            (c = null == c ? a : c),
            this.map(function () {
              return h.clone(this, a, c);
            })
          );
        },
        html: function (a) {
          return Ib(
            this,
            function (c) {
              var f = this[0] || {},
                g = 0,
                l = this.length;
              if (void 0 === c && 1 === f.nodeType) return f.innerHTML;
              if (
                "string" == typeof c &&
                !Ta.test(c) &&
                !sb[(Rc.exec(c) || ["", ""])[1].toLowerCase()]
              ) {
                c = h.htmlPrefilter(c);
                try {
                  for (; g < l; g++)
                    1 === (f = this[g] || {}).nodeType &&
                      (h.cleanData(Y(f, !1)), (f.innerHTML = c));
                  f = 0;
                } catch (n) {}
              }
              f && this.empty().append(c);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return Vb(
            this,
            arguments,
            function (c) {
              var f = this.parentNode;
              0 > h.inArray(this, a) &&
                (h.cleanData(Y(this)), f && f.replaceChild(c, this));
            },
            a
          );
        },
      });
      h.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, c) {
          h.fn[a] = function (f) {
            for (var g = [], l = h(f), n = l.length - 1, q = 0; q <= n; q++)
              (f = q === n ? this : this.clone(!0)),
                h(l[q])[c](f),
                ec.apply(g, f.get());
            return this.pushStack(g);
          };
        }
      );
      var wc = new RegExp("^(" + Sb + ")(?!px)[a-z%]+$", "i"),
        bc = function (a) {
          var c = a.ownerDocument.defaultView;
          return (c && c.opener) || (c = Q), c.getComputedStyle(a);
        },
        bd = function (a, c, f) {
          var g,
            l = {};
          for (g in c) (l[g] = a.style[g]), (a.style[g] = c[g]);
          for (g in ((f = f.call(a)), c)) a.style[g] = l[g];
          return f;
        },
        sd = new RegExp(Fb.join("|"), "i");
      !(function () {
        function a() {
          if (x) {
            w.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            x.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            Sa.appendChild(w).appendChild(x);
            var H = Q.getComputedStyle(x);
            c = "1%" !== H.top;
            q = 12 === Math.round(parseFloat(H.marginLeft));
            x.style.right = "60%";
            l = 36 === Math.round(parseFloat(H.right));
            f = 36 === Math.round(parseFloat(H.width));
            x.style.position = "absolute";
            g = 12 === Math.round(parseFloat(x.offsetWidth / 3));
            Sa.removeChild(w);
            x = null;
          }
        }
        var c,
          f,
          g,
          l,
          n,
          q,
          w = ma.createElement("div"),
          x = ma.createElement("div");
        x.style &&
          ((x.style.backgroundClip = "content-box"),
          (x.cloneNode(!0).style.backgroundClip = ""),
          (Ea.clearCloneStyle = "content-box" === x.style.backgroundClip),
          h.extend(Ea, {
            boxSizingReliable: function () {
              return a(), f;
            },
            pixelBoxStyles: function () {
              return a(), l;
            },
            pixelPosition: function () {
              return a(), c;
            },
            reliableMarginLeft: function () {
              return a(), q;
            },
            scrollboxSize: function () {
              return a(), g;
            },
            reliableTrDimensions: function () {
              var H, L, C, aa;
              return (
                null == n &&
                  ((H = ma.createElement("table")),
                  (L = ma.createElement("tr")),
                  (C = ma.createElement("div")),
                  (H.style.cssText = "position:absolute;left:-11111px"),
                  (L.style.height = "1px"),
                  (C.style.height = "9px"),
                  Sa.appendChild(H).appendChild(L).appendChild(C),
                  (aa = Q.getComputedStyle(L)),
                  (n = 3 < parseInt(aa.height)),
                  Sa.removeChild(H)),
                n
              );
            },
          }));
      })();
      var Tc = ["Webkit", "Moz", "ms"],
        Sc = ma.createElement("div").style,
        Jc = {},
        nd = /^(none|table(?!-c[ea]).+)/,
        d = /^--/,
        b = { position: "absolute", visibility: "hidden", display: "block" },
        e = { letterSpacing: "0", fontWeight: "400" };
      h.extend({
        cssHooks: {
          opacity: {
            get: function (a, c) {
              if (c) {
                var f = xa(a, "opacity");
                return "" === f ? "1" : f;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (a, c, f, g) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var l,
              n,
              q,
              w = G(c),
              x = d.test(c),
              H = a.style;
            if (
              (x || (c = yc(w)),
              (q = h.cssHooks[c] || h.cssHooks[w]),
              void 0 === f)
            )
              return q && "get" in q && void 0 !== (l = q.get(a, !1, g))
                ? l
                : H[c];
            "string" === (n = typeof f) &&
              (l = Yb.exec(f)) &&
              l[1] &&
              ((f = Ua(a, c, l)), (n = "number"));
            null != f &&
              f == f &&
              ("number" !== n ||
                x ||
                (f += (l && l[3]) || (h.cssNumber[w] ? "" : "px")),
              Ea.clearCloneStyle ||
                "" !== f ||
                0 !== c.indexOf("background") ||
                (H[c] = "inherit"),
              (q && "set" in q && void 0 === (f = q.set(a, f, g))) ||
                (x ? H.setProperty(c, f) : (H[c] = f)));
          }
        },
        css: function (a, c, f, g) {
          var l,
            n,
            q,
            w = G(c);
          return (
            d.test(c) || (c = yc(w)),
            (q = h.cssHooks[c] || h.cssHooks[w]) &&
              "get" in q &&
              (l = q.get(a, !0, f)),
            void 0 === l && (l = xa(a, c, g)),
            "normal" === l && c in e && (l = e[c]),
            "" === f || f
              ? ((n = parseFloat(l)), !0 === f || isFinite(n) ? n || 0 : l)
              : l
          );
        },
      });
      h.each(["height", "width"], function (a, c) {
        h.cssHooks[c] = {
          get: function (f, g, l) {
            if (g)
              return !nd.test(h.css(f, "display")) ||
                (f.getClientRects().length && f.getBoundingClientRect().width)
                ? fd(f, c, l)
                : bd(f, b, function () {
                    return fd(f, c, l);
                  });
          },
          set: function (f, g, l) {
            var n,
              q = bc(f),
              w = !Ea.scrollboxSize() && "absolute" === q.position,
              x = (w || l) && "border-box" === h.css(f, "boxSizing", !1, q);
            l = l ? Uc(f, c, l, x, q) : 0;
            return (
              x &&
                w &&
                (l -= Math.ceil(
                  f["offset" + c[0].toUpperCase() + c.slice(1)] -
                    parseFloat(q[c]) -
                    Uc(f, c, "border", !1, q) -
                    0.5
                )),
              l &&
                (n = Yb.exec(g)) &&
                "px" !== (n[3] || "px") &&
                ((f.style[c] = g), (g = h.css(f, c))),
              qa(0, g, l)
            );
          },
        };
      });
      h.cssHooks.marginLeft = xc(Ea.reliableMarginLeft, function (a, c) {
        if (c)
          return (
            (parseFloat(xa(a, "marginLeft")) ||
              a.getBoundingClientRect().left -
                bd(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })) + "px"
          );
      });
      h.each({ margin: "", padding: "", border: "Width" }, function (a, c) {
        h.cssHooks[a + c] = {
          expand: function (f) {
            var g = 0,
              l = {};
            for (f = "string" == typeof f ? f.split(" ") : [f]; 4 > g; g++)
              l[a + Fb[g] + c] = f[g] || f[g - 2] || f[0];
            return l;
          },
        };
        "margin" !== a && (h.cssHooks[a + c].set = qa);
      });
      h.fn.extend({
        css: function (a, c) {
          return Ib(
            this,
            function (f, g, l) {
              var n,
                q = {},
                w = 0;
              if (Array.isArray(g)) {
                l = bc(f);
                for (n = g.length; w < n; w++) q[g[w]] = h.css(f, g[w], !1, l);
                return q;
              }
              return void 0 !== l ? h.style(f, g, l) : h.css(f, g);
            },
            a,
            c,
            1 < arguments.length
          );
        },
      });
      h.Tween = Ya;
      Ya.prototype = {
        constructor: Ya,
        init: function (a, c, f, g, l, n) {
          this.elem = a;
          this.prop = f;
          this.easing = l || h.easing._default;
          this.options = c;
          this.start = this.now = this.cur();
          this.end = g;
          this.unit = n || (h.cssNumber[f] ? "" : "px");
        },
        cur: function () {
          var a = Ya.propHooks[this.prop];
          return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
        },
        run: function (a) {
          var c,
            f = Ya.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = c = h.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = c = a),
            (this.now = (this.end - this.start) * c + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            f && f.set ? f.set(this) : Ya.propHooks._default.set(this),
            this
          );
        },
      };
      Ya.prototype.init.prototype = Ya.prototype;
      Ya.propHooks = {
        _default: {
          get: function (a) {
            var c;
            return 1 !== a.elem.nodeType ||
              (null != a.elem[a.prop] && null == a.elem.style[a.prop])
              ? a.elem[a.prop]
              : (c = h.css(a.elem, a.prop, "")) && "auto" !== c
              ? c
              : 0;
          },
          set: function (a) {
            h.fx.step[a.prop]
              ? h.fx.step[a.prop](a)
              : 1 !== a.elem.nodeType ||
                (!h.cssHooks[a.prop] && null == a.elem.style[yc(a.prop)])
              ? (a.elem[a.prop] = a.now)
              : h.style(a.elem, a.prop, a.now + a.unit);
          },
        },
      };
      Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      };
      h.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing",
      };
      h.fx = Ya.prototype.init;
      h.fx.step = {};
      var k,
        r,
        t = /^(?:toggle|show|hide)$/,
        u = /queueHooks$/;
      h.Animation = h.extend(tb, {
        tweeners: {
          "*": [
            function (a, c) {
              var f = this.createTween(a, c);
              return Ua(f.elem, a, Yb.exec(c), f), f;
            },
          ],
        },
        tweener: function (a, c) {
          va(a) ? ((c = a), (a = ["*"])) : (a = a.match(Ka));
          for (var f, g = 0, l = a.length; g < l; g++)
            (f = a[g]),
              (tb.tweeners[f] = tb.tweeners[f] || []),
              tb.tweeners[f].unshift(c);
        },
        prefilters: [
          function (a, c, f) {
            var g,
              l,
              n,
              q,
              w,
              x,
              H,
              L = "width" in c || "height" in c,
              C = this,
              aa = {},
              oa = a.style,
              fa = a.nodeType && Tb(a),
              ya = na.get(a, "fxshow");
            for (g in (f.queue ||
              (null == (q = h._queueHooks(a, "fx")).unqueued &&
                ((q.unqueued = 0),
                (w = q.empty.fire),
                (q.empty.fire = function () {
                  q.unqueued || w();
                })),
              q.unqueued++,
              C.always(function () {
                C.always(function () {
                  q.unqueued--;
                  h.queue(a, "fx").length || q.empty.fire();
                });
              })),
            c))
              if (((l = c[g]), t.test(l))) {
                if (
                  (delete c[g],
                  (n = n || "toggle" === l),
                  l === (fa ? "hide" : "show"))
                ) {
                  if ("show" !== l || !ya || void 0 === ya[g]) continue;
                  fa = !0;
                }
                aa[g] = (ya && ya[g]) || h.style(a, g);
              }
            if ((c = !h.isEmptyObject(c)) || !h.isEmptyObject(aa))
              for (g in (L &&
                1 === a.nodeType &&
                ((f.overflow = [oa.overflow, oa.overflowX, oa.overflowY]),
                null == (x = ya && ya.display) && (x = na.get(a, "display")),
                "none" === (H = h.css(a, "display")) &&
                  (x
                    ? (H = x)
                    : (Ma([a], !0),
                      (x = a.style.display || x),
                      (H = h.css(a, "display")),
                      Ma([a]))),
                ("inline" === H || ("inline-block" === H && null != x)) &&
                  "none" === h.css(a, "float") &&
                  (c ||
                    (C.done(function () {
                      oa.display = x;
                    }),
                    null == x &&
                      ((H = oa.display), (x = "none" === H ? "" : H))),
                  (oa.display = "inline-block"))),
              f.overflow &&
                ((oa.overflow = "hidden"),
                C.always(function () {
                  oa.overflow = f.overflow[0];
                  oa.overflowX = f.overflow[1];
                  oa.overflowY = f.overflow[2];
                })),
              (c = !1),
              aa))
                c ||
                  (ya
                    ? "hidden" in ya && (fa = ya.hidden)
                    : (ya = na.access(a, "fxshow", { display: x })),
                  n && (ya.hidden = !fa),
                  fa && Ma([a], !0),
                  C.done(function () {
                    for (g in (fa || Ma([a]), na.remove(a, "fxshow"), aa))
                      h.style(a, g, aa[g]);
                  })),
                  (c = Mb(fa ? ya[g] : 0, g, C)),
                  g in ya ||
                    ((ya[g] = c.start),
                    fa && ((c.end = c.start), (c.start = 0)));
          },
        ],
        prefilter: function (a, c) {
          c ? tb.prefilters.unshift(a) : tb.prefilters.push(a);
        },
      });
      h.speed = function (a, c, f) {
        var g =
          a && "object" == typeof a
            ? h.extend({}, a)
            : {
                complete: f || (!f && c) || (va(a) && a),
                duration: a,
                easing: (f && c) || (c && !va(c) && c),
              };
        return (
          h.fx.off
            ? (g.duration = 0)
            : "number" != typeof g.duration &&
              (g.duration in h.fx.speeds
                ? (g.duration = h.fx.speeds[g.duration])
                : (g.duration = h.fx.speeds._default)),
          (null != g.queue && !0 !== g.queue) || (g.queue = "fx"),
          (g.old = g.complete),
          (g.complete = function () {
            va(g.old) && g.old.call(this);
            g.queue && h.dequeue(this, g.queue);
          }),
          g
        );
      };
      h.fn.extend({
        fadeTo: function (a, c, f, g) {
          return this.filter(Tb)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: c }, a, f, g);
        },
        animate: function (a, c, f, g) {
          var l = h.isEmptyObject(a),
            n = h.speed(c, f, g);
          c = function () {
            var q = tb(this, h.extend({}, a), n);
            (l || na.get(this, "finish")) && q.stop(!0);
          };
          return (
            (c.finish = c),
            l || !1 === n.queue ? this.each(c) : this.queue(n.queue, c)
          );
        },
        stop: function (a, c, f) {
          var g = function (l) {
            var n = l.stop;
            delete l.stop;
            n(f);
          };
          return (
            "string" != typeof a && ((f = c), (c = a), (a = void 0)),
            c && this.queue(a || "fx", []),
            this.each(function () {
              var l = !0,
                n = null != a && a + "queueHooks",
                q = h.timers,
                w = na.get(this);
              if (n) w[n] && w[n].stop && g(w[n]);
              else for (n in w) w[n] && w[n].stop && u.test(n) && g(w[n]);
              for (n = q.length; n--; )
                q[n].elem !== this ||
                  (null != a && q[n].queue !== a) ||
                  (q[n].anim.stop(f), (l = !1), q.splice(n, 1));
              (!l && f) || h.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var c = na.get(this),
                f = c[a + "queue"];
              var g = c[a + "queueHooks"];
              var l = h.timers,
                n = f ? f.length : 0;
              c.finish = !0;
              h.queue(this, a, []);
              g && g.stop && g.stop.call(this, !0);
              for (g = l.length; g--; )
                l[g].elem === this &&
                  l[g].queue === a &&
                  (l[g].anim.stop(!0), l.splice(g, 1));
              for (g = 0; g < n; g++)
                f[g] && f[g].finish && f[g].finish.call(this);
              delete c.finish;
            })
          );
        },
      });
      h.each(["toggle", "show", "hide"], function (a, c) {
        var f = h.fn[c];
        h.fn[c] = function (g, l, n) {
          return null == g || "boolean" == typeof g
            ? f.apply(this, arguments)
            : this.animate(oc(c, !0), g, l, n);
        };
      });
      h.each(
        {
          slideDown: oc("show"),
          slideUp: oc("hide"),
          slideToggle: oc("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (a, c) {
          h.fn[a] = function (f, g, l) {
            return this.animate(c, f, g, l);
          };
        }
      );
      h.timers = [];
      h.fx.tick = function () {
        var a,
          c = 0,
          f = h.timers;
        for (k = Date.now(); c < f.length; c++)
          (a = f[c])() || f[c] !== a || f.splice(c--, 1);
        f.length || h.fx.stop();
        k = void 0;
      };
      h.fx.timer = function (a) {
        h.timers.push(a);
        h.fx.start();
      };
      h.fx.interval = 13;
      h.fx.start = function () {
        r || ((r = !0), Kc());
      };
      h.fx.stop = function () {
        r = null;
      };
      h.fx.speeds = { slow: 600, fast: 200, _default: 400 };
      h.fn.delay = function (a, c) {
        return (
          (a = (h.fx && h.fx.speeds[a]) || a),
          (c = c || "fx"),
          this.queue(c, function (f, g) {
            var l = Q.setTimeout(f, a);
            g.stop = function () {
              Q.clearTimeout(l);
            };
          })
        );
      };
      (function () {
        var a = ma.createElement("input"),
          c = ma
            .createElement("select")
            .appendChild(ma.createElement("option"));
        a.type = "checkbox";
        Ea.checkOn = "" !== a.value;
        Ea.optSelected = c.selected;
        (a = ma.createElement("input")).value = "t";
        a.type = "radio";
        Ea.radioValue = "t" === a.value;
      })();
      var y = h.expr.attrHandle;
      h.fn.extend({
        attr: function (a, c) {
          return Ib(this, h.attr, a, c, 1 < arguments.length);
        },
        removeAttr: function (a) {
          return this.each(function () {
            h.removeAttr(this, a);
          });
        },
      });
      h.extend({
        attr: function (a, c, f) {
          var g,
            l,
            n = a.nodeType;
          if (3 !== n && 8 !== n && 2 !== n)
            return void 0 === a.getAttribute
              ? h.prop(a, c, f)
              : ((1 === n && h.isXMLDoc(a)) ||
                  (l =
                    h.attrHooks[c.toLowerCase()] ||
                    (h.expr.match.bool.test(c) ? M : void 0)),
                void 0 !== f
                  ? null === f
                    ? void h.removeAttr(a, c)
                    : l && "set" in l && void 0 !== (g = l.set(a, f, c))
                    ? g
                    : (a.setAttribute(c, f + ""), f)
                  : l && "get" in l && null !== (g = l.get(a, c))
                  ? g
                  : null == (g = h.find.attr(a, c))
                  ? void 0
                  : g);
        },
        attrHooks: {
          type: {
            set: function (a, c) {
              if (!Ea.radioValue && "radio" === c && Ja(a, "input")) {
                var f = a.value;
                return a.setAttribute("type", c), f && (a.value = f), c;
              }
            },
          },
        },
        removeAttr: function (a, c) {
          var f,
            g = 0,
            l = c && c.match(Ka);
          if (l && 1 === a.nodeType)
            for (; (f = l[g++]); ) a.removeAttribute(f);
        },
      });
      var M = {
        set: function (a, c, f) {
          return !1 === c ? h.removeAttr(a, f) : a.setAttribute(f, f), f;
        },
      };
      h.each(h.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var f = y[c] || h.find.attr;
        y[c] = function (g, l, n) {
          var q,
            w,
            x = l.toLowerCase();
          return (
            n ||
              ((w = y[x]),
              (y[x] = q),
              (q = null != f(g, l, n) ? x : null),
              (y[x] = w)),
            q
          );
        };
      });
      var ha = /^(?:input|select|textarea|button)$/i,
        ba = /^(?:a|area)$/i;
      h.fn.extend({
        prop: function (a, c) {
          return Ib(this, h.prop, a, c, 1 < arguments.length);
        },
        removeProp: function (a) {
          return this.each(function () {
            delete this[h.propFix[a] || a];
          });
        },
      });
      h.extend({
        prop: function (a, c, f) {
          var g,
            l,
            n = a.nodeType;
          if (3 !== n && 8 !== n && 2 !== n)
            return (
              (1 === n && h.isXMLDoc(a)) ||
                ((c = h.propFix[c] || c), (l = h.propHooks[c])),
              void 0 !== f
                ? l && "set" in l && void 0 !== (g = l.set(a, f, c))
                  ? g
                  : (a[c] = f)
                : l && "get" in l && null !== (g = l.get(a, c))
                ? g
                : a[c]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var c = h.find.attr(a, "tabindex");
              return c
                ? parseInt(c, 10)
                : ha.test(a.nodeName) || (ba.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      });
      Ea.optSelected ||
        (h.propHooks.selected = {
          get: function (a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null;
          },
          set: function (a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
          },
        });
      h.each(
        "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
          " "
        ),
        function () {
          h.propFix[this.toLowerCase()] = this;
        }
      );
      h.fn.extend({
        addClass: function (a) {
          var c,
            f,
            g,
            l,
            n,
            q,
            w,
            x = 0;
          if (va(a))
            return this.each(function (H) {
              h(this).addClass(a.call(this, H, cc(this)));
            });
          if ((c = Wc(a)).length)
            for (; (f = this[x++]); )
              if (((l = cc(f)), (g = 1 === f.nodeType && " " + Nb(l) + " "))) {
                for (q = 0; (n = c[q++]); )
                  0 > g.indexOf(" " + n + " ") && (g += n + " ");
                l !== (w = Nb(g)) && f.setAttribute("class", w);
              }
          return this;
        },
        removeClass: function (a) {
          var c,
            f,
            g,
            l,
            n,
            q,
            w,
            x = 0;
          if (va(a))
            return this.each(function (H) {
              h(this).removeClass(a.call(this, H, cc(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((c = Wc(a)).length)
            for (; (f = this[x++]); )
              if (((l = cc(f)), (g = 1 === f.nodeType && " " + Nb(l) + " "))) {
                for (q = 0; (n = c[q++]); )
                  for (; -1 < g.indexOf(" " + n + " "); )
                    g = g.replace(" " + n + " ", " ");
                l !== (w = Nb(g)) && f.setAttribute("class", w);
              }
          return this;
        },
        toggleClass: function (a, c) {
          var f = typeof a,
            g = "string" === f || Array.isArray(a);
          return "boolean" == typeof c && g
            ? c
              ? this.addClass(a)
              : this.removeClass(a)
            : va(a)
            ? this.each(function (l) {
                h(this).toggleClass(a.call(this, l, cc(this), c), c);
              })
            : this.each(function () {
                var l, n;
                if (g) {
                  var q = 0;
                  var w = h(this);
                  for (n = Wc(a); (l = n[q++]); )
                    w.hasClass(l) ? w.removeClass(l) : w.addClass(l);
                } else (void 0 !== a && "boolean" !== f) || ((l = cc(this)) && na.set(this, "__className__", l), this.setAttribute && this.setAttribute("class", l || !1 === a ? "" : na.get(this, "__className__") || ""));
              });
        },
        hasClass: function (a) {
          var c,
            f = 0;
          for (a = " " + a + " "; (c = this[f++]); )
            if (1 === c.nodeType && -1 < (" " + Nb(cc(c)) + " ").indexOf(a))
              return !0;
          return !1;
        },
      });
      var ua = /\r/g;
      h.fn.extend({
        val: function (a) {
          var c,
            f,
            g,
            l = this[0];
          return arguments.length
            ? ((g = va(a)),
              this.each(function (n) {
                var q;
                1 === this.nodeType &&
                  (null == (q = g ? a.call(this, n, h(this).val()) : a)
                    ? (q = "")
                    : "number" == typeof q
                    ? (q += "")
                    : Array.isArray(q) &&
                      (q = h.map(q, function (w) {
                        return null == w ? "" : w + "";
                      })),
                  ((c =
                    h.valHooks[this.type] ||
                    h.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in c &&
                    void 0 !== c.set(this, q, "value")) ||
                    (this.value = q));
              }))
            : l
            ? (c =
                h.valHooks[l.type] || h.valHooks[l.nodeName.toLowerCase()]) &&
              "get" in c &&
              void 0 !== (f = c.get(l, "value"))
              ? f
              : "string" == typeof (f = l.value)
              ? f.replace(ua, "")
              : null == f
              ? ""
              : f
            : void 0;
        },
      });
      h.extend({
        valHooks: {
          option: {
            get: function (a) {
              var c = h.find.attr(a, "value");
              return null != c ? c : Nb(h.text(a));
            },
          },
          select: {
            get: function (a) {
              var c,
                f,
                g = a.options,
                l = a.selectedIndex,
                n = "select-one" === a.type,
                q = n ? null : [],
                w = n ? l + 1 : g.length;
              for (f = 0 > l ? w : n ? l : 0; f < w; f++)
                if (
                  !(
                    (!(c = g[f]).selected && f !== l) ||
                    c.disabled ||
                    (c.parentNode.disabled && Ja(c.parentNode, "optgroup"))
                  )
                ) {
                  if (((a = h(c).val()), n)) return a;
                  q.push(a);
                }
              return q;
            },
            set: function (a, c) {
              for (
                var f, g, l = a.options, n = h.makeArray(c), q = l.length;
                q--;

              )
                ((g = l[q]).selected =
                  -1 < h.inArray(h.valHooks.option.get(g), n)) && (f = !0);
              return f || (a.selectedIndex = -1), n;
            },
          },
        },
      });
      h.each(["radio", "checkbox"], function () {
        h.valHooks[this] = {
          set: function (a, c) {
            if (Array.isArray(c))
              return (a.checked = -1 < h.inArray(h(a).val(), c));
          },
        };
        Ea.checkOn ||
          (h.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
      });
      Ea.focusin = "onfocusin" in Q;
      var Oa = /^(?:focusinfocus|focusoutblur)$/,
        ia = function (a) {
          a.stopPropagation();
        };
      h.extend(h.event, {
        trigger: function (a, c, f, g) {
          var l,
            n,
            q,
            w,
            x,
            H,
            L = [f || ma],
            C = pc.call(a, "type") ? a.type : a;
          var aa = pc.call(a, "namespace") ? a.namespace.split(".") : [];
          if (
            ((l = H = n = f = f || ma),
            3 !== f.nodeType &&
              8 !== f.nodeType &&
              !Oa.test(C + h.event.triggered) &&
              (-1 < C.indexOf(".") &&
                ((aa = C.split(".")), (C = aa.shift()), aa.sort()),
              (q = 0 > C.indexOf(":") && "on" + C),
              ((a = a[h.expando]
                ? a
                : new h.Event(C, "object" == typeof a && a)).isTrigger = g
                ? 2
                : 3),
              (a.namespace = aa.join(".")),
              (a.rnamespace = a.namespace
                ? new RegExp("(^|\\.)" + aa.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (a.result = void 0),
              a.target || (a.target = f),
              (c = null == c ? [a] : h.makeArray(c, [a])),
              (x = h.event.special[C] || {}),
              g || !x.trigger || !1 !== x.trigger.apply(f, c)))
          ) {
            if (!g && !x.noBubble && !kc(f)) {
              var oa = x.delegateType || C;
              for (Oa.test(oa + C) || (l = l.parentNode); l; l = l.parentNode)
                L.push(l), (n = l);
              n === (f.ownerDocument || ma) &&
                L.push(n.defaultView || n.parentWindow || Q);
            }
            for (aa = 0; (l = L[aa++]) && !a.isPropagationStopped(); )
              (H = l),
                (a.type = 1 < aa ? oa : x.bindType || C),
                (w =
                  (na.get(l, "events") || Object.create(null))[a.type] &&
                  na.get(l, "handle")) && w.apply(l, c),
                (w = q && l[q]) &&
                  w.apply &&
                  jc(l) &&
                  ((a.result = w.apply(l, c)),
                  !1 === a.result && a.preventDefault());
            return (
              (a.type = C),
              g ||
                a.isDefaultPrevented() ||
                (x._default && !1 !== x._default.apply(L.pop(), c)) ||
                !jc(f) ||
                (q &&
                  va(f[C]) &&
                  !kc(f) &&
                  ((n = f[q]) && (f[q] = null),
                  (h.event.triggered = C),
                  a.isPropagationStopped() && H.addEventListener(C, ia),
                  f[C](),
                  a.isPropagationStopped() && H.removeEventListener(C, ia),
                  (h.event.triggered = void 0),
                  n && (f[q] = n))),
              a.result
            );
          }
        },
        simulate: function (a, c, f) {
          a = h.extend(new h.Event(), f, { type: a, isSimulated: !0 });
          h.event.trigger(a, null, c);
        },
      });
      h.fn.extend({
        trigger: function (a, c) {
          return this.each(function () {
            h.event.trigger(a, c, this);
          });
        },
        triggerHandler: function (a, c) {
          var f = this[0];
          if (f) return h.event.trigger(a, c, f, !0);
        },
      });
      Ea.focusin ||
        h.each({ focus: "focusin", blur: "focusout" }, function (a, c) {
          var f = function (g) {
            h.event.simulate(c, g.target, h.event.fix(g));
          };
          h.event.special[c] = {
            setup: function () {
              var g = this.ownerDocument || this.document || this,
                l = na.access(g, c);
              l || g.addEventListener(a, f, !0);
              na.access(g, c, (l || 0) + 1);
            },
            teardown: function () {
              var g = this.ownerDocument || this.document || this,
                l = na.access(g, c) - 1;
              l
                ? na.access(g, c, l)
                : (g.removeEventListener(a, f, !0), na.remove(g, c));
            },
          };
        });
      var T = Q.location,
        pa = Date.now(),
        Da = /\?/;
      h.parseXML = function (a) {
        if (!a || "string" != typeof a) return null;
        try {
          var c = new Q.DOMParser().parseFromString(a, "text/xml");
        } catch (f) {
          c = void 0;
        }
        return (
          (c && !c.getElementsByTagName("parsererror").length) ||
            h.error("Invalid XML: " + a),
          c
        );
      };
      var La = /\[\]$/,
        ra = /\r?\n/g,
        Pa = /^(?:submit|button|image|reset|file)$/i,
        hb = /^(?:input|select|textarea|keygen)/i;
      h.param = function (a, c) {
        var f,
          g = [],
          l = function (n, q) {
            var w = va(q) ? q() : q;
            g[g.length] =
              encodeURIComponent(n) +
              "=" +
              encodeURIComponent(null == w ? "" : w);
          };
        if (null == a) return "";
        if (Array.isArray(a) || (a.jquery && !h.isPlainObject(a)))
          h.each(a, function () {
            l(this.name, this.value);
          });
        else for (f in a) dc(f, a[f], c, l);
        return g.join("&");
      };
      h.fn.extend({
        serialize: function () {
          return h.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = h.prop(this, "elements");
            return a ? h.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !h(this).is(":disabled") &&
                hb.test(this.nodeName) &&
                !Pa.test(a) &&
                (this.checked || !db.test(a))
              );
            })
            .map(function (a, c) {
              var f = h(this).val();
              return null == f
                ? null
                : Array.isArray(f)
                ? h.map(f, function (g) {
                    return { name: c.name, value: g.replace(ra, "\r\n") };
                  })
                : { name: c.name, value: f.replace(ra, "\r\n") };
            })
            .get();
        },
      });
      var lb = /%20/g,
        xb = /#.*$/,
        rc = /([?&])_=[^&]*/,
        Nc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        od = /^(?:GET|HEAD)$/,
        Oc = /^\/\//,
        pd = {},
        td = {},
        Id = "*/".concat("*"),
        yd = ma.createElement("a");
      yd.href = T.href;
      h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: T.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            T.protocol
          ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Id,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": h.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, c) {
          return c ? Lc(Lc(a, h.ajaxSettings), c) : Lc(h.ajaxSettings, a);
        },
        ajaxPrefilter: Xc(pd),
        ajaxTransport: Xc(td),
        ajax: function (a, c) {
          function f(Ca, eb, Mc, hd) {
            var zb,
              Hb,
              Pb,
              ub,
              Fa,
              cb = eb;
            rb ||
              ((rb = !0),
              w && Q.clearTimeout(w),
              (g = void 0),
              (n = hd || ""),
              (la.readyState = 0 < Ca ? 4 : 0),
              (zb = (200 <= Ca && 300 > Ca) || 304 === Ca),
              Mc &&
                (ub = (function (Wa, Qa, Bb) {
                  for (
                    var Qb, mb, ta, Va, nb = Wa.contents, ib = Wa.dataTypes;
                    "*" === ib[0];

                  )
                    ib.shift(),
                      void 0 === Qb &&
                        (Qb =
                          Wa.mimeType || Qa.getResponseHeader("Content-Type"));
                  if (Qb)
                    for (mb in nb)
                      if (nb[mb] && nb[mb].test(Qb)) {
                        ib.unshift(mb);
                        break;
                      }
                  if (ib[0] in Bb) ta = ib[0];
                  else {
                    for (mb in Bb) {
                      if (!ib[0] || Wa.converters[mb + " " + ib[0]]) {
                        ta = mb;
                        break;
                      }
                      Va || (Va = mb);
                    }
                    ta = ta || Va;
                  }
                  if (ta) return ta !== ib[0] && ib.unshift(ta), Bb[ta];
                })(C, la, Mc)),
              !zb &&
                -1 < h.inArray("script", C.dataTypes) &&
                (C.converters["text script"] = function () {}),
              (ub = (function (Wa, Qa, Bb, Qb) {
                var mb,
                  ta,
                  Va,
                  nb,
                  ib,
                  Rb = {},
                  Dc = Wa.dataTypes.slice();
                if (Dc[1])
                  for (Va in Wa.converters)
                    Rb[Va.toLowerCase()] = Wa.converters[Va];
                for (ta = Dc.shift(); ta; )
                  if (
                    (Wa.responseFields[ta] && (Bb[Wa.responseFields[ta]] = Qa),
                    !ib &&
                      Qb &&
                      Wa.dataFilter &&
                      (Qa = Wa.dataFilter(Qa, Wa.dataType)),
                    (ib = ta),
                    (ta = Dc.shift()))
                  )
                    if ("*" === ta) ta = ib;
                    else if ("*" !== ib && ib !== ta) {
                      if (!(Va = Rb[ib + " " + ta] || Rb["* " + ta]))
                        for (mb in Rb)
                          if (
                            (nb = mb.split(" "))[1] === ta &&
                            (Va = Rb[ib + " " + nb[0]] || Rb["* " + nb[0]])
                          ) {
                            !0 === Va
                              ? (Va = Rb[mb])
                              : !0 !== Rb[mb] &&
                                ((ta = nb[0]), Dc.unshift(nb[1]));
                            break;
                          }
                      if (!0 !== Va)
                        if (Va && Wa["throws"]) Qa = Va(Qa);
                        else
                          try {
                            Qa = Va(Qa);
                          } catch (jd) {
                            return {
                              state: "parsererror",
                              error: Va
                                ? jd
                                : "No conversion from " + ib + " to " + ta,
                            };
                          }
                    }
                return { state: "success", data: Qa };
              })(C, ub, la, zb)),
              zb
                ? (C.ifModified &&
                    ((Fa = la.getResponseHeader("Last-Modified")) &&
                      (h.lastModified[l] = Fa),
                    (Fa = la.getResponseHeader("etag")) && (h.etag[l] = Fa)),
                  204 === Ca || "HEAD" === C.type
                    ? (cb = "nocontent")
                    : 304 === Ca
                    ? (cb = "notmodified")
                    : ((cb = ub.state),
                      (Hb = ub.data),
                      (zb = !(Pb = ub.error))))
                : ((Pb = cb),
                  (!Ca && cb) || ((cb = "error"), 0 > Ca && (Ca = 0))),
              (la.status = Ca),
              (la.statusText = (eb || cb) + ""),
              zb
                ? fa.resolveWith(aa, [Hb, cb, la])
                : fa.rejectWith(aa, [la, cb, Pb]),
              la.statusCode(jb),
              (jb = void 0),
              x &&
                oa.trigger(zb ? "ajaxSuccess" : "ajaxError", [
                  la,
                  C,
                  zb ? Hb : Pb,
                ]),
              ya.fireWith(aa, [la, cb]),
              x &&
                (oa.trigger("ajaxComplete", [la, C]),
                --h.active || h.event.trigger("ajaxStop")));
          }
          "object" == typeof a && ((c = a), (a = void 0));
          c = c || {};
          var g,
            l,
            n,
            q,
            w,
            x,
            H,
            L,
            C = h.ajaxSetup({}, c),
            aa = C.context || C,
            oa = C.context && (aa.nodeType || aa.jquery) ? h(aa) : h.event,
            fa = h.Deferred(),
            ya = h.Callbacks("once memory"),
            jb = C.statusCode || {},
            Ob = {},
            ob = {},
            Ab = "canceled",
            la = {
              readyState: 0,
              getResponseHeader: function (Ca) {
                var eb;
                if (rb) {
                  if (!q)
                    for (q = {}; (eb = Nc.exec(n)); )
                      q[eb[1].toLowerCase() + " "] = (
                        q[eb[1].toLowerCase() + " "] || []
                      ).concat(eb[2]);
                  eb = q[Ca.toLowerCase() + " "];
                }
                return null == eb ? null : eb.join(", ");
              },
              getAllResponseHeaders: function () {
                return rb ? n : null;
              },
              setRequestHeader: function (Ca, eb) {
                return (
                  null == rb &&
                    ((Ca = ob[Ca.toLowerCase()] = ob[Ca.toLowerCase()] || Ca),
                    (Ob[Ca] = eb)),
                  this
                );
              },
              overrideMimeType: function (Ca) {
                return null == rb && (C.mimeType = Ca), this;
              },
              statusCode: function (Ca) {
                var eb;
                if (Ca)
                  if (rb) la.always(Ca[la.status]);
                  else for (eb in Ca) jb[eb] = [jb[eb], Ca[eb]];
                return this;
              },
              abort: function (Ca) {
                Ca = Ca || Ab;
                return g && g.abort(Ca), f(0, Ca), this;
              },
            };
          if (
            (fa.promise(la),
            (C.url = ((a || C.url || T.href) + "").replace(
              Oc,
              T.protocol + "//"
            )),
            (C.type = c.method || c.type || C.method || C.type),
            (C.dataTypes = (C.dataType || "*").toLowerCase().match(Ka) || [""]),
            null == C.crossDomain)
          ) {
            var za = ma.createElement("a");
            try {
              (za.href = C.url),
                (za.href = za.href),
                (C.crossDomain =
                  yd.protocol + "//" + yd.host != za.protocol + "//" + za.host);
            } catch (Ca) {
              C.crossDomain = !0;
            }
          }
          if (
            (C.data &&
              C.processData &&
              "string" != typeof C.data &&
              (C.data = h.param(C.data, C.traditional)),
            zc(pd, C, c, la),
            rb)
          )
            return la;
          for (H in ((x = h.event && C.global) &&
            0 == h.active++ &&
            h.event.trigger("ajaxStart"),
          (C.type = C.type.toUpperCase()),
          (C.hasContent = !od.test(C.type)),
          (l = C.url.replace(xb, "")),
          C.hasContent
            ? C.data &&
              C.processData &&
              0 ===
                (C.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (C.data = C.data.replace(lb, "+"))
            : ((L = C.url.slice(l.length)),
              C.data &&
                (C.processData || "string" == typeof C.data) &&
                ((l += (Da.test(l) ? "&" : "?") + C.data), delete C.data),
              !1 === C.cache &&
                ((l = l.replace(rc, "$1")),
                (L = (Da.test(l) ? "&" : "?") + "_=" + pa++ + L)),
              (C.url = l + L)),
          C.ifModified &&
            (h.lastModified[l] &&
              la.setRequestHeader("If-Modified-Since", h.lastModified[l]),
            h.etag[l] && la.setRequestHeader("If-None-Match", h.etag[l])),
          ((C.data && C.hasContent && !1 !== C.contentType) || c.contentType) &&
            la.setRequestHeader("Content-Type", C.contentType),
          la.setRequestHeader(
            "Accept",
            C.dataTypes[0] && C.accepts[C.dataTypes[0]]
              ? C.accepts[C.dataTypes[0]] +
                  ("*" !== C.dataTypes[0] ? ", " + Id + "; q=0.01" : "")
              : C.accepts["*"]
          ),
          C.headers))
            la.setRequestHeader(H, C.headers[H]);
          if (C.beforeSend && (!1 === C.beforeSend.call(aa, la, C) || rb))
            return la.abort();
          if (
            ((Ab = "abort"),
            ya.add(C.complete),
            la.done(C.success),
            la.fail(C.error),
            (g = zc(td, C, c, la)))
          ) {
            if (((la.readyState = 1), x && oa.trigger("ajaxSend", [la, C]), rb))
              return la;
            C.async &&
              0 < C.timeout &&
              (w = Q.setTimeout(function () {
                la.abort("timeout");
              }, C.timeout));
            try {
              var rb = !1;
              g.send(Ob, f);
            } catch (Ca) {
              if (rb) throw Ca;
              f(-1, Ca);
            }
          } else f(-1, "No Transport");
          return la;
        },
        getJSON: function (a, c, f) {
          return h.get(a, c, f, "json");
        },
        getScript: function (a, c) {
          return h.get(a, void 0, c, "script");
        },
      });
      h.each(["get", "post"], function (a, c) {
        h[c] = function (f, g, l, n) {
          return (
            va(g) && ((n = n || l), (l = g), (g = void 0)),
            h.ajax(
              h.extend(
                { url: f, type: c, dataType: n, data: g, success: l },
                h.isPlainObject(f) && f
              )
            )
          );
        };
      });
      h.ajaxPrefilter(function (a) {
        for (var c in a.headers)
          "content-type" === c.toLowerCase() &&
            (a.contentType = a.headers[c] || "");
      });
      h._evalUrl = function (a, c, f) {
        return h.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (g) {
            h.globalEval(g, c, f);
          },
        });
      };
      h.fn.extend({
        wrapAll: function (a) {
          var c;
          return (
            this[0] &&
              (va(a) && (a = a.call(this[0])),
              (c = h(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && c.insertBefore(this[0]),
              c
                .map(function () {
                  for (var f = this; f.firstElementChild; )
                    f = f.firstElementChild;
                  return f;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (a) {
          return va(a)
            ? this.each(function (c) {
                h(this).wrapInner(a.call(this, c));
              })
            : this.each(function () {
                var c = h(this),
                  f = c.contents();
                f.length ? f.wrapAll(a) : c.append(a);
              });
        },
        wrap: function (a) {
          var c = va(a);
          return this.each(function (f) {
            h(this).wrapAll(c ? a.call(this, f) : a);
          });
        },
        unwrap: function (a) {
          return (
            this.parent(a)
              .not("body")
              .each(function () {
                h(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      });
      h.expr.pseudos.hidden = function (a) {
        return !h.expr.pseudos.visible(a);
      };
      h.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      };
      h.ajaxSettings.xhr = function () {
        try {
          return new Q.XMLHttpRequest();
        } catch (a) {}
      };
      var Zd = { 0: 200, 1223: 204 },
        cd = h.ajaxSettings.xhr();
      Ea.cors = !!cd && "withCredentials" in cd;
      Ea.ajax = cd = !!cd;
      h.ajaxTransport(function (a) {
        var c, f;
        if (Ea.cors || (cd && !a.crossDomain))
          return {
            send: function (g, l) {
              var n,
                q = a.xhr();
              if (
                (q.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (n in a.xhrFields) q[n] = a.xhrFields[n];
              for (n in (a.mimeType &&
                q.overrideMimeType &&
                q.overrideMimeType(a.mimeType),
              a.crossDomain ||
                g["X-Requested-With"] ||
                (g["X-Requested-With"] = "XMLHttpRequest"),
              g))
                q.setRequestHeader(n, g[n]);
              c = function (w) {
                return function () {
                  c &&
                    ((c = f = q.onload = q.onerror = q.onabort = q.ontimeout = q.onreadystatechange = null),
                    "abort" === w
                      ? q.abort()
                      : "error" === w
                      ? "number" != typeof q.status
                        ? l(0, "error")
                        : l(q.status, q.statusText)
                      : l(
                          Zd[q.status] || q.status,
                          q.statusText,
                          "text" !== (q.responseType || "text") ||
                            "string" != typeof q.responseText
                            ? { binary: q.response }
                            : { text: q.responseText },
                          q.getAllResponseHeaders()
                        ));
                };
              };
              q.onload = c();
              f = q.onerror = q.ontimeout = c("error");
              void 0 !== q.onabort
                ? (q.onabort = f)
                : (q.onreadystatechange = function () {
                    4 === q.readyState &&
                      Q.setTimeout(function () {
                        c && f();
                      });
                  });
              c = c("abort");
              try {
                q.send((a.hasContent && a.data) || null);
              } catch (w) {
                if (c) throw w;
              }
            },
            abort: function () {
              c && c();
            },
          };
      });
      h.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
      });
      h.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (a) {
            return h.globalEval(a), a;
          },
        },
      });
      h.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET");
      });
      h.ajaxTransport("script", function (a) {
        var c, f;
        if (a.crossDomain || a.scriptAttrs)
          return {
            send: function (g, l) {
              c = h("<script>")
                .attr(a.scriptAttrs || {})
                .prop({ charset: a.scriptCharset, src: a.url })
                .on(
                  "load error",
                  (f = function (n) {
                    c.remove();
                    f = null;
                    n && l("error" === n.type ? 404 : 200, n.type);
                  })
                );
              ma.head.appendChild(c[0]);
            },
            abort: function () {
              f && f();
            },
          };
      });
      var Jd,
        Kd = [],
        zd = /(=)\?(?=&|$)|\?\?/;
      h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var a = Kd.pop() || h.expando + "_" + pa++;
          return (this[a] = !0), a;
        },
      });
      h.ajaxPrefilter("json jsonp", function (a, c, f) {
        var g,
          l,
          n,
          q =
            !1 !== a.jsonp &&
            (zd.test(a.url)
              ? "url"
              : "string" == typeof a.data &&
                0 ===
                  (a.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                zd.test(a.data) &&
                "data");
        if (q || "jsonp" === a.dataTypes[0])
          return (
            (g = a.jsonpCallback = va(a.jsonpCallback)
              ? a.jsonpCallback()
              : a.jsonpCallback),
            q
              ? (a[q] = a[q].replace(zd, "$1" + g))
              : !1 !== a.jsonp &&
                (a.url += (Da.test(a.url) ? "&" : "?") + a.jsonp + "=" + g),
            (a.converters["script json"] = function () {
              return n || h.error(g + " was not called"), n[0];
            }),
            (a.dataTypes[0] = "json"),
            (l = Q[g]),
            (Q[g] = function () {
              n = arguments;
            }),
            f.always(function () {
              void 0 === l ? h(Q).removeProp(g) : (Q[g] = l);
              a[g] && ((a.jsonpCallback = c.jsonpCallback), Kd.push(g));
              n && va(l) && l(n[0]);
              n = l = void 0;
            }),
            "script"
          );
      });
      Ea.createHTMLDocument =
        (((Jd = ma.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Jd.childNodes.length);
      h.parseHTML = function (a, c, f) {
        return "string" != typeof a
          ? []
          : ("boolean" == typeof c && ((f = c), (c = !1)),
            c ||
              (Ea.createHTMLDocument
                ? (((g = (c = ma.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = ma.location.href),
                  c.head.appendChild(g))
                : (c = ma)),
            (n = !f && []),
            (l = Cb.exec(a))
              ? [c.createElement(l[1])]
              : ((l = qb([a], c, n)),
                n && n.length && h(n).remove(),
                h.merge([], l.childNodes)));
        var g, l, n;
      };
      h.fn.load = function (a, c, f) {
        var g,
          l,
          n,
          q = this,
          w = a.indexOf(" ");
        return (
          -1 < w && ((g = Nb(a.slice(w))), (a = a.slice(0, w))),
          va(c)
            ? ((f = c), (c = void 0))
            : c && "object" == typeof c && (l = "POST"),
          0 < q.length &&
            h
              .ajax({ url: a, type: l || "GET", dataType: "html", data: c })
              .done(function (x) {
                n = arguments;
                q.html(g ? h("<div>").append(h.parseHTML(x)).find(g) : x);
              })
              .always(
                f &&
                  function (x, H) {
                    q.each(function () {
                      f.apply(this, n || [x.responseText, H, x]);
                    });
                  }
              ),
          this
        );
      };
      h.expr.pseudos.animated = function (a) {
        return h.grep(h.timers, function (c) {
          return a === c.elem;
        }).length;
      };
      h.offset = {
        setOffset: function (a, c, f) {
          var g,
            l,
            n,
            q = h.css(a, "position"),
            w = h(a),
            x = {};
          "static" === q && (a.style.position = "relative");
          var H = w.offset();
          var L = h.css(a, "top");
          var C = h.css(a, "left");
          ("absolute" === q || "fixed" === q) && -1 < (L + C).indexOf("auto")
            ? ((n = (g = w.position()).top), (l = g.left))
            : ((n = parseFloat(L) || 0), (l = parseFloat(C) || 0));
          va(c) && (c = c.call(a, f, h.extend({}, H)));
          null != c.top && (x.top = c.top - H.top + n);
          null != c.left && (x.left = c.left - H.left + l);
          "using" in c
            ? c.using.call(a, x)
            : ("number" == typeof x.top && (x.top += "px"),
              "number" == typeof x.left && (x.left += "px"),
              w.css(x));
        },
      };
      h.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (l) {
                  h.offset.setOffset(this, a, l);
                });
          var c,
            f,
            g = this[0];
          return g
            ? g.getClientRects().length
              ? ((c = g.getBoundingClientRect()),
                (f = g.ownerDocument.defaultView),
                { top: c.top + f.pageYOffset, left: c.left + f.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var a,
              c = this[0],
              f = { top: 0, left: 0 };
            if ("fixed" === h.css(c, "position"))
              var g = c.getBoundingClientRect();
            else {
              g = this.offset();
              var l = c.ownerDocument;
              for (
                a = c.offsetParent || l.documentElement;
                a &&
                (a === l.body || a === l.documentElement) &&
                "static" === h.css(a, "position");

              )
                a = a.parentNode;
              a &&
                a !== c &&
                1 === a.nodeType &&
                (((f = h(a).offset()).top += h.css(a, "borderTopWidth", !0)),
                (f.left += h.css(a, "borderLeftWidth", !0)));
            }
            return {
              top: g.top - f.top - h.css(c, "marginTop", !0),
              left: g.left - f.left - h.css(c, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var a = this.offsetParent;
              a && "static" === h.css(a, "position");

            )
              a = a.offsetParent;
            return a || Sa;
          });
        },
      });
      h.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (a, c) {
          var f = "pageYOffset" === c;
          h.fn[a] = function (g) {
            return Ib(
              this,
              function (l, n, q) {
                var w;
                if (
                  (kc(l) ? (w = l) : 9 === l.nodeType && (w = l.defaultView),
                  void 0 === q)
                )
                  return w ? w[c] : l[n];
                w
                  ? w.scrollTo(f ? w.pageXOffset : q, f ? q : w.pageYOffset)
                  : (l[n] = q);
              },
              a,
              g,
              arguments.length
            );
          };
        }
      );
      h.each(["top", "left"], function (a, c) {
        h.cssHooks[c] = xc(Ea.pixelPosition, function (f, g) {
          if (g)
            return (g = xa(f, c)), wc.test(g) ? h(f).position()[c] + "px" : g;
        });
      });
      h.each({ Height: "height", Width: "width" }, function (a, c) {
        h.each(
          { padding: "inner" + a, content: c, "": "outer" + a },
          function (f, g) {
            h.fn[g] = function (l, n) {
              var q = arguments.length && (f || "boolean" != typeof l),
                w = f || (!0 === l || !0 === n ? "margin" : "border");
              return Ib(
                this,
                function (x, H, L) {
                  var C;
                  return kc(x)
                    ? 0 === g.indexOf("outer")
                      ? x["inner" + a]
                      : x.document.documentElement["client" + a]
                    : 9 === x.nodeType
                    ? ((C = x.documentElement),
                      Math.max(
                        x.body["scroll" + a],
                        C["scroll" + a],
                        x.body["offset" + a],
                        C["offset" + a],
                        C["client" + a]
                      ))
                    : void 0 === L
                    ? h.css(x, H, w)
                    : h.style(x, H, L, w);
                },
                c,
                q ? l : void 0,
                q
              );
            };
          }
        );
      });
      h.each(
        "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
          " "
        ),
        function (a, c) {
          h.fn[c] = function (f) {
            return this.on(c, f);
          };
        }
      );
      h.fn.extend({
        bind: function (a, c, f) {
          return this.on(a, null, c, f);
        },
        unbind: function (a, c) {
          return this.off(a, null, c);
        },
        delegate: function (a, c, f, g) {
          return this.on(c, a, f, g);
        },
        undelegate: function (a, c, f) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(c, a || "**", f);
        },
        hover: function (a, c) {
          return this.mouseenter(a).mouseleave(c || a);
        },
      });
      h.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (a, c) {
          h.fn[c] = function (f, g) {
            return 0 < arguments.length
              ? this.on(c, null, f, g)
              : this.trigger(c);
          };
        }
      );
      var $d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      h.proxy = function (a, c) {
        var f, g, l;
        if (("string" == typeof c && ((f = a[c]), (c = a), (a = f)), va(a)))
          return (
            (g = Eb.call(arguments, 2)),
            ((l = function () {
              return a.apply(c || this, g.concat(Eb.call(arguments)));
            }).guid = a.guid = a.guid || h.guid++),
            l
          );
      };
      h.holdReady = function (a) {
        a ? h.readyWait++ : h.ready(!0);
      };
      h.isArray = Array.isArray;
      h.parseJSON = JSON.parse;
      h.nodeName = Ja;
      h.isFunction = va;
      h.isWindow = kc;
      h.camelCase = G;
      h.type = K;
      h.now = Date.now;
      h.isNumeric = function (a) {
        var c = h.type(a);
        return ("number" === c || "string" === c) && !isNaN(a - parseFloat(a));
      };
      h.trim = function (a) {
        return null == a ? "" : (a + "").replace($d, "");
      };
      void 0 ===
        (I = function () {
          return h;
        }.apply(Z, [])) || (V.exports = I);
      var ae = Q.jQuery,
        be = Q.$;
      return (
        (h.noConflict = function (a) {
          return (
            Q.$ === h && (Q.$ = be), a && Q.jQuery === h && (Q.jQuery = ae), h
          );
        }),
        void 0 === Ia && (Q.jQuery = Q.$ = h),
        h
      );
    });
  },
  function (V, Z, N) {
    function I(P) {
      for (var G = -1, ea = 0; ea < z.length; ea++)
        if (z[ea].identifier === P) {
          G = ea;
          break;
        }
      return G;
    }
    function Q(P, G) {
      for (var ea = {}, ca = [], Ua = 0; Ua < P.length; Ua++) {
        var Ma = P[Ua],
          Y = G.base ? Ma[0] + G.base : Ma[0],
          Zb = ea[Y] || 0,
          qb = "".concat(Y, " ").concat(Zb);
        ea[Y] = Zb + 1;
        Y = I(qb);
        Ma = { css: Ma[1], media: Ma[2], sourceMap: Ma[3] };
        -1 !== Y
          ? (z[Y].references++, z[Y].updater(Ma))
          : z.push({ identifier: qb, updater: O(Ma, G), references: 1 });
        ca.push(qb);
      }
      return ca;
    }
    function Ia(P) {
      var G = document.createElement("style"),
        ea = P.attributes || {};
      if (void 0 === ea.nonce) {
        var ca = N.nc;
        ca && (ea.nonce = ca);
      }
      if (
        (Object.keys(ea).forEach(function (Ua) {
          G.setAttribute(Ua, ea[Ua]);
        }),
        "function" == typeof P.insert)
      )
        P.insert(G);
      else {
        P = m(P.insert || "head");
        if (!P)
          throw Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        P.appendChild(G);
      }
      return G;
    }
    function Ha(P, G, ea, ca) {
      ea = ea
        ? ""
        : ca.media
        ? "@media ".concat(ca.media, " {").concat(ca.css, "}")
        : ca.css;
      P.styleSheet
        ? (P.styleSheet.cssText = A(G, ea))
        : ((ea = document.createTextNode(ea)),
          (ca = P.childNodes),
          ca[G] && P.removeChild(ca[G]),
          ca.length ? P.insertBefore(ea, ca[G]) : P.appendChild(ea));
    }
    function K(P, G, ea) {
      G = ea.css;
      var ca = ea.media;
      ea = ea.sourceMap;
      if (
        (ca ? P.setAttribute("media", ca) : P.removeAttribute("media"),
        ea &&
          btoa &&
          (G += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(ea)))),
            " */"
          )),
        P.styleSheet)
      )
        P.styleSheet.cssText = G;
      else {
        for (; P.firstChild; ) P.removeChild(P.firstChild);
        P.appendChild(document.createTextNode(G));
      }
    }
    function O(P, G) {
      if (G.singleton) {
        var ea = S++;
        var ca = F || (F = Ia(G));
        var Ua = Ha.bind(null, ca, ea, !1);
        var Ma = Ha.bind(null, ca, ea, !0);
      } else
        (ca = Ia(G)),
          (Ua = K.bind(null, ca, G)),
          (Ma = function () {
            if (null === ca.parentNode) var Y = !1;
            else ca.parentNode.removeChild(ca), (Y = void 0);
            !Y;
          });
      return (
        Ua(P),
        function (Y) {
          Y
            ? (Y.css !== P.css ||
                Y.media !== P.media ||
                Y.sourceMap !== P.sourceMap) &&
              Ua((P = Y))
            : Ma();
        }
      );
    }
    var Ja,
      m = (function () {
        var P = {};
        return function (G) {
          if (void 0 === P[G]) {
            var ea = document.querySelector(G);
            if (
              window.HTMLIFrameElement &&
              ea instanceof window.HTMLIFrameElement
            )
              try {
                ea = ea.contentDocument.head;
              } catch (ca) {
                ea = null;
              }
            P[G] = ea;
          }
          return P[G];
        };
      })(),
      z = [],
      E,
      A =
        ((E = []),
        function (P, G) {
          return (E[P] = G), E.filter(Boolean).join("\n");
        }),
      F = null,
      S = 0;
    V.exports = function (P, G) {
      (G = G || {}).singleton ||
        "boolean" == typeof G.singleton ||
        (G.singleton =
          (void 0 === Ja &&
            (Ja = !(!(window && document && document.all) || window.atob)),
          Ja));
      var ea = Q((P = P || []), G);
      return function (ca) {
        if (
          ((ca = ca || []),
          "[object Array]" === Object.prototype.toString.call(ca))
        ) {
          for (var Ua = 0; Ua < ea.length; Ua++) {
            var Ma = I(ea[Ua]);
            z[Ma].references--;
          }
          ca = Q(ca, G);
          for (Ua = 0; Ua < ea.length; Ua++)
            (Ma = I(ea[Ua])),
              0 === z[Ma].references && (z[Ma].updater(), z.splice(Ma, 1));
          ea = ca;
        }
      };
    };
  },
  function (V, Z, N) {
    (function (I) {
      "object" == typeof navigator &&
        (V.exports = (function () {
          function Q(d, b) {
            if (!(d instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function Ia(d, b) {
            for (var e = 0; e < b.length; e++) {
              var k = b[e];
              k.enumerable = k.enumerable || !1;
              k.configurable = !0;
              "value" in k && (k.writable = !0);
              Object.defineProperty(d, k.key, k);
            }
          }
          function Ha(d, b, e) {
            return b && Ia(d.prototype, b), e && Ia(d, e), d;
          }
          function K(d, b, e) {
            return (
              b in d
                ? Object.defineProperty(d, b, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (d[b] = e),
              d
            );
          }
          function O(d, b) {
            var e = Object.keys(d);
            if (Object.getOwnPropertySymbols) {
              var k = Object.getOwnPropertySymbols(d);
              b &&
                (k = k.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(d, r).enumerable;
                }));
              e.push.apply(e, k);
            }
            return e;
          }
          function Ja(d) {
            for (var b = 1; b < arguments.length; b++) {
              var e = null != arguments[b] ? arguments[b] : {};
              b % 2
                ? O(Object(e), !0).forEach(function (k) {
                    K(d, k, e[k]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    d,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : O(Object(e)).forEach(function (k) {
                    Object.defineProperty(
                      d,
                      k,
                      Object.getOwnPropertyDescriptor(e, k)
                    );
                  });
            }
            return d;
          }
          function m(d, b) {
            var e;
            if (
              !(e =
                (function (k) {
                  if (Array.isArray(k)) return k;
                })(d) ||
                (function (k, r) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(k)
                  ) {
                    var t = [],
                      u = !0,
                      y = !1,
                      M = void 0;
                    try {
                      for (
                        var ha, ba = k[Symbol.iterator]();
                        !(u = (ha = ba.next()).done) &&
                        (t.push(ha.value), !r || t.length !== r);
                        u = !0
                      );
                    } catch (ua) {
                      (y = !0), (M = ua);
                    } finally {
                      try {
                        u || null == ba["return"] || ba["return"]();
                      } finally {
                        if (y) throw M;
                      }
                    }
                    return t;
                  }
                })(d, b) ||
                E(d, b))
            )
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            return e;
          }
          function z(d) {
            var b = Array.isArray(d) ? A(d) : void 0;
            b ||
              (b =
                "undefined" != typeof Symbol && Symbol.iterator in Object(d)
                  ? Array.from(d)
                  : void 0);
            if (!(d = b || E(d)))
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            return d;
          }
          function E(d, b) {
            if (d) {
              if ("string" == typeof d) return A(d, b);
              var e = Object.prototype.toString.call(d).slice(8, -1);
              return (
                "Object" === e && d.constructor && (e = d.constructor.name),
                "Map" === e || "Set" === e
                  ? Array.from(d)
                  : "Arguments" === e ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                  ? A(d, b)
                  : void 0
              );
            }
          }
          function A(d, b) {
            (null == b || b > d.length) && (b = d.length);
            for (var e = 0, k = Array(b); e < b; e++) k[e] = d[e];
            return k;
          }
          function F(d, b) {
            for (var e = 0; e < b.length; e++) {
              var k = b[e];
              k.enumerable = k.enumerable || !1;
              k.configurable = !0;
              "value" in k && (k.writable = !0);
              Object.defineProperty(d, k.key, k);
            }
          }
          function S(d, b) {
            var e = Object.keys(d);
            if (Object.getOwnPropertySymbols) {
              var k = Object.getOwnPropertySymbols(d);
              b &&
                (k = k.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(d, r).enumerable;
                }));
              e.push.apply(e, k);
            }
            return e;
          }
          function P(d) {
            for (var b = 1; b < arguments.length; b++) {
              var e = null != arguments[b] ? arguments[b] : {};
              b % 2
                ? S(Object(e), !0).forEach(function (k) {
                    var r = e[k];
                    k in d
                      ? Object.defineProperty(d, k, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (d[k] = r);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    d,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : S(Object(e)).forEach(function (k) {
                    Object.defineProperty(
                      d,
                      k,
                      Object.getOwnPropertyDescriptor(e, k)
                    );
                  });
            }
            return d;
          }
          function G(d, b) {
            setTimeout(function () {
              try {
                (d.hidden = !0), d.offsetHeight, (d.hidden = !1);
              } catch (e) {}
            }, b);
          }
          function ea(d, b) {
            return b.split(".").reduce(function (e, k) {
              return e && e[k];
            }, d);
          }
          function ca() {
            for (
              var d =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                b = arguments.length,
                e = Array(1 < b ? b - 1 : 0),
                k = 1;
              k < b;
              k++
            )
              e[k - 1] = arguments[k];
            if (!e.length) return d;
            var r = e.shift();
            return Cb(r)
              ? (Object.keys(r).forEach(function (t) {
                  Cb(r[t])
                    ? (Object.keys(d).includes(t) ||
                        Object.assign(d, K({}, t, {})),
                      ca(d[t], r[t]))
                    : Object.assign(d, K({}, t, r[t]));
                }),
                ca.apply(void 0, [d].concat(e)))
              : d;
          }
          function Ua(d, b) {
            Array.from(d.length ? d : [d])
              .reverse()
              .forEach(function (e, k) {
                var r = 0 < k ? b.cloneNode(!0) : b,
                  t = e.parentNode,
                  u = e.nextSibling;
                r.appendChild(e);
                u ? t.insertBefore(r, u) : t.appendChild(r);
              });
          }
          function Ma(d, b) {
            da(d) &&
              !ka(b) &&
              Object.entries(b)
                .filter(function (e) {
                  return null != m(e, 2)[1];
                })
                .forEach(function (e) {
                  e = m(e, 2);
                  return d.setAttribute(e[0], e[1]);
                });
          }
          function Y(d, b, e) {
            d = document.createElement(d);
            return Cb(b) && Ma(d, b), fb(e) && (d.innerText = e), d;
          }
          function Zb(d, b, e, k) {
            da(b) && b.appendChild(Y(d, e, k));
          }
          function qb(d) {
            Gc(d) || Ka(d)
              ? Array.from(d).forEach(qb)
              : da(d) && da(d.parentNode) && d.parentNode.removeChild(d);
          }
          function Jb(d) {
            if (da(d))
              for (var b = d.childNodes.length; 0 < b; )
                d.removeChild(d.lastChild), --b;
          }
          function Kb(d, b) {
            return da(b) && da(b.parentNode) && da(d)
              ? (b.parentNode.replaceChild(d, b), d)
              : null;
          }
          function Db(d, b) {
            if (!fb(d) || ka(d)) return {};
            var e = {},
              k = ca({}, b);
            return (
              d.split(",").forEach(function (r) {
                r = r.trim();
                var t = r.replace(".", ""),
                  u = r.replace(/[[\]]/g, "").split("="),
                  y = m(u, 1)[0];
                u = 1 < u.length ? u[1].replace(/["']/g, "") : "";
                switch (r.charAt(0)) {
                  case ".":
                    fb(k["class"])
                      ? (e["class"] = "".concat(k["class"], " ").concat(t))
                      : (e["class"] = t);
                    break;
                  case "#":
                    e.id = r.replace("#", "");
                    break;
                  case "[":
                    e[y] = u;
                }
              }),
              ca(k, e)
            );
          }
          function Lb(d, b) {
            if (da(d)) {
              var e = b;
              wb(e) || (e = !d.hidden);
              d.hidden = e;
            }
          }
          function wa(d, b, e) {
            if (Gc(d))
              return Array.from(d).map(function (r) {
                return wa(r, b, e);
              });
            if (da(d)) {
              var k = "toggle";
              return (
                void 0 !== e && (k = e ? "add" : "remove"),
                d.classList[k](b),
                d.classList.contains(b)
              );
            }
            return !1;
          }
          function vc(d, b) {
            return da(d) && d.classList.contains(b);
          }
          function $b(d, b) {
            var e = Element.prototype;
            return (
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              function () {
                return Array.from(document.querySelectorAll(b)).includes(this);
              }
            ).call(d, b);
          }
          function mc(d) {
            return this.elements.container.querySelectorAll(d);
          }
          function gb(d) {
            return this.elements.container.querySelector(d);
          }
          function Vb() {
            var d =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              b =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            da(d) &&
              (d.focus({ preventScroll: !0 }),
              b && wa(d, this.config.classNames.tabFocus));
          }
          function ac(d, b, e) {
            var k = this,
              r =
                3 < arguments.length && void 0 !== arguments[3] && arguments[3],
              t =
                !(4 < arguments.length && void 0 !== arguments[4]) ||
                arguments[4],
              u =
                5 < arguments.length && void 0 !== arguments[5] && arguments[5];
            if (d && "addEventListener" in d && !ka(b) && Xa(e)) {
              var y = b.split(" "),
                M = u;
              lc && (M = { passive: t, capture: u });
              y.forEach(function (ha) {
                k &&
                  k.eventListeners &&
                  r &&
                  k.eventListeners.push({
                    element: d,
                    type: ha,
                    callback: e,
                    options: M,
                  });
                d[r ? "addEventListener" : "removeEventListener"](ha, e, M);
              });
            }
          }
          function xa(d) {
            ac.call(
              this,
              d,
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
          function xc(d) {
            ac.call(
              this,
              d,
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
          function yc(d) {
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
            ac.call(
              this,
              d,
              e,
              function y() {
                xc(d, e, y, r, t);
                for (
                  var M = arguments.length, ha = Array(M), ba = 0;
                  ba < M;
                  ba++
                )
                  ha[ba] = arguments[ba];
                k.apply(b, ha);
              },
              !0,
              r,
              t
            );
          }
          function qa(d) {
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
            da(d) &&
              !ka(b) &&
              ((b = new CustomEvent(b, {
                bubbles: e,
                detail: Ja(Ja({}, k), {}, { plyr: this }),
              })),
              d.dispatchEvent(b));
          }
          function Uc() {
            this &&
              this.eventListeners &&
              (this.eventListeners.forEach(function (d) {
                d.element.removeEventListener(d.type, d.callback, d.options);
              }),
              (this.eventListeners = []));
          }
          function fd() {
            var d = this;
            return new Promise(function (b) {
              return d.ready
                ? setTimeout(b, 0)
                : xa.call(d, d.elements.container, "ready", b);
            }).then(function () {});
          }
          function Ya(d) {
            (function (b) {
              return ma(b, Promise) && Wb(b.then);
            })(d) && d.then(null, function () {});
          }
          function Kc(d) {
            return (
              !!(Ka(d) || (fb(d) && d.includes(":"))) &&
              (Ka(d) ? d : d.split(":")).map(Number).every(Za)
            );
          }
          function Vc(d) {
            if (!Ka(d) || !d.every(Za)) return null;
            var b = m(d, 2);
            d = b[0];
            b = b[1];
            var e = (function u(r, t) {
              return 0 === t ? r : u(t, r % t);
            })(d, b);
            return [d / e, b / e];
          }
          function oc(d) {
            var b = function (e) {
              return Kc(e) ? e.split(":").map(Number) : null;
            };
            d = b(d);
            if (
              (null === d && (d = b(this.config.ratio)),
              null === d &&
                !ka(this.embed) &&
                Ka(this.embed.ratio) &&
                (d = this.embed.ratio),
              null === d && this.isHTML5)
            )
              (b = this.media), (d = Vc([b.videoWidth, b.videoHeight]));
            return d;
          }
          function Mb(d) {
            if (!this.isVideo) return {};
            var b = this.elements.wrapper;
            d = oc.call(this, d);
            var e = m(Ka(d) ? d : [0, 0], 2);
            e = (100 / e[0]) * e[1];
            if (
              ((b.style.paddingBottom = "".concat(e, "%")),
              this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
            ) {
              var k =
                (100 / this.media.offsetWidth) *
                parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
              this.fullscreen.active
                ? (b.style.paddingBottom = null)
                : (this.media.style.transform = "translateY(-".concat(
                    (k - e) / (k / 50),
                    "%)"
                  ));
            } else
              this.isHTML5 &&
                b.classList.toggle(
                  this.config.classNames.videoFixedRatio,
                  null !== d
                );
            return { padding: e, ratio: d };
          }
          function tb(d) {
            return Ka(d)
              ? d.filter(function (b, e) {
                  return d.indexOf(b) === e;
                })
              : d;
          }
          function Nb(d) {
            for (
              var b = arguments.length, e = Array(1 < b ? b - 1 : 0), k = 1;
              k < b;
              k++
            )
              e[k - 1] = arguments[k];
            return ka(d)
              ? d
              : d.toString().replace(/{(\d+)}/g, function (r, t) {
                  return e[t].toString();
                });
          }
          function cc() {
            var d = (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : ""
            ).toString();
            return (
              (d = Tb(d, "-", " ")),
              (d = Tb(d, "_", " ")),
              (d = Qc(d)),
              Tb(d, " ", "")
            );
          }
          function Wc(d) {
            var b = document.createElement("div");
            return b.appendChild(d), b.innerHTML;
          }
          function dc(d) {
            var b =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : "text";
            return new Promise(function (e, k) {
              try {
                var r = new XMLHttpRequest();
                "withCredentials" in r &&
                  (r.addEventListener("load", function () {
                    if ("text" === b)
                      try {
                        e(JSON.parse(r.responseText));
                      } catch (t) {
                        e(r.responseText);
                      }
                    else e(r.response);
                  }),
                  r.addEventListener("error", function () {
                    throw Error(r.status);
                  }),
                  r.open("GET", d, !0),
                  (r.responseType = b),
                  r.send());
              } catch (t) {
                k(t);
              }
            });
          }
          function Xc(d, b) {
            if (fb(d)) {
              var e = fb(b),
                k = function (y, M) {
                  y.innerHTML = M;
                  (e && null !== document.getElementById(b)) ||
                    document.body.insertAdjacentElement("afterbegin", y);
                };
              if (!e || null === document.getElementById(b)) {
                var r = Rc.supported,
                  t = document.createElement("div");
                if (
                  (t.setAttribute("hidden", ""),
                  e && t.setAttribute("id", b),
                  r)
                ) {
                  var u = window.localStorage.getItem(
                    "".concat("cache", "-").concat(b)
                  );
                  null !== u && ((u = JSON.parse(u)), k(t, u.content));
                }
                dc(d)
                  .then(function (y) {
                    ka(y) ||
                      (r &&
                        window.localStorage.setItem(
                          "".concat("cache", "-").concat(b),
                          JSON.stringify({ content: y })
                        ),
                      k(t, y));
                  })
                  ["catch"](function () {});
              }
            }
          }
          function zc() {
            var d =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              b =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              e =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if (!Za(d)) return zc(void 0, b, e);
            var k = Math.trunc((d / 60 / 60) % 60, 10),
              r = Math.trunc((d / 60) % 60, 10),
              t = Math.trunc(d % 60, 10);
            return (
              (k = b || 0 < k ? "".concat(k, ":") : ""),
              ""
                .concat(e && 0 < d ? "-" : "")
                .concat(k)
                .concat("0".concat(r).slice(-2), ":")
                .concat("0".concat(t).slice(-2))
            );
          }
          function Lc(d) {
            var b = d;
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
          function Gb(d) {
            var b = new URLSearchParams();
            return (
              Cb(d) &&
                Object.entries(d).forEach(function (e) {
                  e = m(e, 2);
                  b.set(e[0], e[1]);
                }),
              b
            );
          }
          function Ac(d) {
            var b =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return new Promise(function (e, k) {
              var r = new Image(),
                t = function () {
                  delete r.onload;
                  delete r.onerror;
                  (r.naturalWidth >= b ? e : k)(r);
                };
              Object.assign(r, { onload: t, onerror: t, src: d });
            });
          }
          function Eb(d) {
            return new Promise(function (b, e) {
              rd(d, { success: b, error: e });
            });
          }
          function nc(d) {
            d && !this.embed.hasPlayed && (this.embed.hasPlayed = !0);
            this.media.paused === d &&
              ((this.media.paused = !d),
              qa.call(this, this.media, d ? "play" : "pause"));
          }
          function ec(d) {
            d && !this.embed.hasPlayed && (this.embed.hasPlayed = !0);
            this.media.paused === d &&
              ((this.media.paused = !d),
              qa.call(this, this.media, d ? "play" : "pause"));
          }
          var tc = { addCSS: !0, thumbWidth: 15, watch: !0 },
            sc,
            Ic,
            pc,
            fc = function (d) {
              return null != d ? d.constructor : null;
            },
            Bc = function (d, b) {
              return !!(d && b && d instanceof b);
            },
            Ea = function (d) {
              return Bc(d, Element);
            },
            va = function (d) {
              return (
                null == d ||
                ((fc(d) === String || Array.isArray(d) || Bc(d, NodeList)) &&
                  !d.length) ||
                (fc(d) === Object && !Object.keys(d).length)
              );
            },
            kc = (function () {
              function d(b, e) {
                if (!(this instanceof d))
                  throw new TypeError("Cannot call a class as a function");
                Ea(b)
                  ? (this.element = b)
                  : fc(b) === String &&
                    (this.element = document.querySelector(b));
                Ea(this.element) &&
                  va(this.element.rangeTouch) &&
                  ((this.config = P({}, tc, {}, e)), this.init());
              }
              return (
                (function (b, e, k) {
                  e && F(b.prototype, e);
                  k && F(b, k);
                })(
                  d,
                  [
                    {
                      key: "init",
                      value: function () {
                        d.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = "none"),
                            (this.element.style.webKitUserSelect = "none"),
                            (this.element.style.touchAction = "manipulation")),
                          this.listeners(!0),
                          (this.element.rangeTouch = this));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        d.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = ""),
                            (this.element.style.webKitUserSelect = ""),
                            (this.element.style.touchAction = "")),
                          this.listeners(!1),
                          (this.element.rangeTouch = null));
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
                        if (!d.enabled || !Bc(b, Event)) return null;
                        var e,
                          k = b.target,
                          r = b.changedTouches[0];
                        b = parseFloat(k.getAttribute("min")) || 0;
                        var t = parseFloat(k.getAttribute("max")) || 100,
                          u = parseFloat(k.getAttribute("step")) || 1;
                        k = k.getBoundingClientRect();
                        var y =
                          ((100 / k.width) * (this.config.thumbWidth / 2)) /
                          100;
                        0 > (e = (100 / k.width) * (r.clientX - k.left))
                          ? (e = 0)
                          : 100 < e && (e = 100);
                        50 > e
                          ? (e -= (100 - 2 * e) * y)
                          : 50 < e && (e += 2 * (e - 50) * y);
                        e = (e / 100) * (t - b);
                        1 > u
                          ? ((u = ""
                              .concat(u)
                              .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)),
                            (e = parseFloat(
                              e.toFixed(
                                u
                                  ? Math.max(
                                      0,
                                      (u[1] ? u[1].length : 0) -
                                        (u[2] ? +u[2] : 0)
                                    )
                                  : 0
                              )
                            )))
                          : (e = Math.round(e / u) * u);
                        return b + e;
                      },
                    },
                    {
                      key: "set",
                      value: function (b) {
                        if (d.enabled && Bc(b, Event) && !b.target.disabled) {
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
                          (va(b) || fc(b) === String
                            ? (k = Array.from(
                                document.querySelectorAll(
                                  fc(b) === String ? b : 'input[type="range"]'
                                )
                              ))
                            : Ea(b)
                            ? (k = [b])
                            : Bc(b, NodeList)
                            ? (k = Array.from(b))
                            : Array.isArray(b) && (k = b.filter(Ea)),
                          va(k))
                        )
                          return null;
                        var r = P({}, tc, {}, e);
                        fc(b) === String &&
                          r.watch &&
                          new MutationObserver(function (t) {
                            Array.from(t).forEach(function (u) {
                              Array.from(u.addedNodes).forEach(function (y) {
                                var M;
                                if ((M = Ea(y)))
                                  M = Array.from(
                                    document.querySelectorAll(b)
                                  ).includes(y);
                                M && new d(y, r);
                              });
                            });
                          }).observe(document.body, {
                            childList: !0,
                            subtree: !0,
                          });
                        return k.map(function (t) {
                          return new d(t, e);
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
                d
              );
            })(),
            ma = function (d, b) {
              return !!(d && b && d instanceof b);
            },
            dd = function (d) {
              return (null != d ? d.constructor : null) === Object;
            },
            h = function (d) {
              return (null != d ? d.constructor : null) === String;
            },
            Wb = function (d) {
              return (null != d ? d.constructor : null) === Function;
            },
            ic = function (d) {
              return Array.isArray(d);
            },
            Zc = function (d) {
              return ma(d, NodeList);
            },
            $c = function (d) {
              return (
                null == d ||
                ((h(d) || ic(d) || Zc(d)) && !d.length) ||
                (dd(d) && !Object.keys(d).length)
              );
            },
            Cb = dd,
            Za = function (d) {
              return (
                (null != d ? d.constructor : null) === Number &&
                !Number.isNaN(d)
              );
            },
            fb = h,
            wb = function (d) {
              return (null != d ? d.constructor : null) === Boolean;
            },
            Xa = Wb,
            Ka = ic,
            Gc = Zc,
            da = function (d) {
              return ma(d, Element);
            },
            Ib = function (d) {
              return ma(d, TextTrack) || (null != d && h(d.kind));
            },
            uc = function (d) {
              if (ma(d, window.URL)) return !0;
              if (!h(d)) return !1;
              var b = d;
              (d.startsWith("http://") && d.startsWith("https://")) ||
                (b = "http://".concat(d));
              try {
                return !$c(new URL(b).hostname);
              } catch (e) {
                return !1;
              }
            },
            ka = $c,
            jc =
              ((sc = document.createElement("span")),
              (Ic = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
              }),
              (pc = Object.keys(Ic).find(function (d) {
                return void 0 !== sc.style[d];
              })),
              !!fb(pc) && Ic[pc]),
            na = !!document.documentMode,
            pb = window.navigator.userAgent.includes("Edge"),
            ed =
              "WebkitAppearance" in document.documentElement.style &&
              !/Edge/.test(navigator.userAgent),
            Pc = /(iPhone|iPod)/gi.test(navigator.platform),
            Sb = /(iPad|iPhone|iPod)/gi.test(navigator.platform),
            Yb,
            Fb = {
              "audio/ogg": "vorbis",
              "audio/wav": "1",
              "video/webm": "vp8, vorbis",
              "video/mp4": "avc1.42E01E, mp4a.40.2",
              "video/ogg": "theora",
            },
            Sa = {
              audio: "canPlayType" in document.createElement("audio"),
              video: "canPlayType" in document.createElement("video"),
              check: function (d, b, e) {
                e = Pc && e && Sa.playsinline;
                b = Sa[d] || "html5" !== b;
                return {
                  api: b,
                  ui: b && Sa.rangeInput && ("video" !== d || !Pc || e),
                };
              },
              pip: !(
                Pc ||
                (!Xa(Y("video").webkitSetPresentationMode) &&
                  (!document.pictureInPictureEnabled ||
                    Y("video").disablePictureInPicture))
              ),
              airplay: Xa(window.WebKitPlaybackTargetAvailabilityEvent),
              playsinline: "playsInline" in document.createElement("video"),
              mime: function (d) {
                if (ka(d)) return !1;
                var b = m(d.split("/"), 1)[0],
                  e = d;
                if (!this.isHTML5 || b !== this.type) return !1;
                Object.keys(Fb).includes(e) &&
                  (e += '; codecs="'.concat(Fb[d], '"'));
                try {
                  return !(!e || !this.media.canPlayType(e).replace(/no/, ""));
                } catch (k) {
                  return !1;
                }
              },
              textTracks: "textTracks" in document.createElement("video"),
              rangeInput:
                ((Yb = document.createElement("input")),
                (Yb.type = "range"),
                "range" === Yb.type),
              touch: "ontouchstart" in document.documentElement,
              transitions: !1 !== jc,
              reducedMotion:
                "matchMedia" in window &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            },
            lc = (function () {
              var d = !1;
              try {
                var b = Object.defineProperty({}, "passive", {
                  get: function () {
                    return (d = !0), null;
                  },
                });
                window.addEventListener("test", null, b);
                window.removeEventListener("test", null, b);
              } catch (e) {}
              return d;
            })(),
            Xb = {
              getSources: function () {
                var d = this;
                return this.isHTML5
                  ? Array.from(this.media.querySelectorAll("source")).filter(
                      function (b) {
                        b = b.getAttribute("type");
                        return !!ka(b) || Sa.mime.call(d, b);
                      }
                    )
                  : [];
              },
              getQualityOptions: function () {
                return this.config.quality.forced
                  ? this.config.quality.options
                  : Xb.getSources
                      .call(this)
                      .map(function (d) {
                        return Number(d.getAttribute("size"));
                      })
                      .filter(Boolean);
              },
              setup: function () {
                if (this.isHTML5) {
                  var d = this;
                  d.options.speed = d.config.speed.options;
                  ka(this.config.ratio) || Mb.call(d);
                  Object.defineProperty(d.media, "quality", {
                    get: function () {
                      var b = Xb.getSources.call(d).find(function (e) {
                        return e.getAttribute("src") === d.source;
                      });
                      return b && Number(b.getAttribute("size"));
                    },
                    set: function (b) {
                      if (d.quality !== b) {
                        if (
                          d.config.quality.forced &&
                          Xa(d.config.quality.onChange)
                        )
                          d.config.quality.onChange(b);
                        else {
                          var e = Xb.getSources.call(d).find(function (ha) {
                            return Number(ha.getAttribute("size")) === b;
                          });
                          if (!e) return;
                          var k = d.media,
                            r = k.currentTime,
                            t = k.paused,
                            u = k.preload,
                            y = k.readyState,
                            M = k.playbackRate;
                          d.media.src = e.getAttribute("src");
                          ("none" !== u || y) &&
                            (d.once("loadedmetadata", function () {
                              d.speed = M;
                              d.currentTime = r;
                              t || Ya(d.play());
                            }),
                            d.media.load());
                        }
                        qa.call(d, d.media, "qualitychange", !1, {
                          quality: b,
                        });
                      }
                    },
                  });
                }
              },
              cancelRequests: function () {
                this.isHTML5 &&
                  (qb(Xb.getSources.call(this)),
                  this.media.setAttribute("src", this.config.blankVideo),
                  this.media.load(),
                  this.debug.log("Cancelled network requests"));
              },
            },
            Tb = function () {
              var d =
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
                d.toString()
              );
            },
            Qc = function () {
              return (0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : ""
              )
                .toString()
                .replace(/\w\S*/g, function (d) {
                  return d.charAt(0).toUpperCase() + d.substr(1).toLowerCase();
                });
            },
            Hc = {
              pip: "PIP",
              airplay: "AirPlay",
              html5: "HTML5",
              vimeo: "Vimeo",
              youtube: "YouTube",
            },
            db = function () {
              var d =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                b =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (ka(d) || ka(b)) return "";
              var e = ea(b.i18n, d);
              return ka(e)
                ? Object.keys(Hc).includes(d)
                  ? Hc[d]
                  : ""
                : (Object.entries({
                    "{seektime}": b.seekTime,
                    "{title}": b.title,
                  }).forEach(function (k) {
                    k = m(k, 2);
                    e = Tb(e, k[0], k[1]);
                  }),
                  e);
            },
            Rc = (function () {
              function d(b) {
                Q(this, d);
                this.enabled = b.config.storage.enabled;
                this.key = b.config.storage.key;
              }
              return (
                Ha(
                  d,
                  [
                    {
                      key: "get",
                      value: function (b) {
                        if (!d.supported || !this.enabled) return null;
                        var e = window.localStorage.getItem(this.key);
                        if (ka(e)) return null;
                        e = JSON.parse(e);
                        return fb(b) && b.length ? e[b] : e;
                      },
                    },
                    {
                      key: "set",
                      value: function (b) {
                        if (d.supported && this.enabled && Cb(b)) {
                          var e = this.get();
                          ka(e) && (e = {});
                          ca(e, b);
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
                d
              );
            })(),
            X = {
              getIconUrl: function () {
                var d =
                  new URL(this.config.iconUrl, window.location).host !==
                    window.location.host ||
                  (na && !window.svg4everybody);
                return { url: this.config.iconUrl, cors: d };
              },
              findElements: function () {
                try {
                  return (
                    (this.elements.controls = gb.call(
                      this,
                      this.config.selectors.controls.wrapper
                    )),
                    (this.elements.buttons = {
                      play: mc.call(this, this.config.selectors.buttons.play),
                      pause: gb.call(this, this.config.selectors.buttons.pause),
                      restart: gb.call(
                        this,
                        this.config.selectors.buttons.restart
                      ),
                      rewind: gb.call(
                        this,
                        this.config.selectors.buttons.rewind
                      ),
                      fastForward: gb.call(
                        this,
                        this.config.selectors.buttons.fastForward
                      ),
                      mute: gb.call(this, this.config.selectors.buttons.mute),
                      pip: gb.call(this, this.config.selectors.buttons.pip),
                      airplay: gb.call(
                        this,
                        this.config.selectors.buttons.airplay
                      ),
                      settings: gb.call(
                        this,
                        this.config.selectors.buttons.settings
                      ),
                      captions: gb.call(
                        this,
                        this.config.selectors.buttons.captions
                      ),
                      fullscreen: gb.call(
                        this,
                        this.config.selectors.buttons.fullscreen
                      ),
                    }),
                    (this.elements.progress = gb.call(
                      this,
                      this.config.selectors.progress
                    )),
                    (this.elements.inputs = {
                      seek: gb.call(this, this.config.selectors.inputs.seek),
                      volume: gb.call(
                        this,
                        this.config.selectors.inputs.volume
                      ),
                    }),
                    (this.elements.display = {
                      buffer: gb.call(
                        this,
                        this.config.selectors.display.buffer
                      ),
                      currentTime: gb.call(
                        this,
                        this.config.selectors.display.currentTime
                      ),
                      duration: gb.call(
                        this,
                        this.config.selectors.display.duration
                      ),
                    }),
                    da(this.elements.progress) &&
                      (this.elements.display.seekTooltip = this.elements.progress.querySelector(
                        ".".concat(this.config.classNames.tooltip)
                      )),
                    !0
                  );
                } catch (d) {
                  return (
                    this.debug.warn(
                      "It looks like there is a problem with your custom controls HTML",
                      d
                    ),
                    this.toggleNativeControls(!0),
                    !1
                  );
                }
              },
              createIcon: function (d, b) {
                var e = X.getIconUrl.call(this),
                  k = ""
                    .concat(e.cors ? "" : e.url, "#")
                    .concat(this.config.iconPrefix);
                e = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                Ma(e, ca(b, { "aria-hidden": "true", focusable: "false" }));
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "use"
                );
                k = "".concat(k, "-").concat(d);
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
              createLabel: function (d) {
                var b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  e = db(d, this.config);
                b = Ja(
                  Ja({}, b),
                  {},
                  {
                    class: [b["class"], this.config.classNames.hidden]
                      .filter(Boolean)
                      .join(" "),
                  }
                );
                return Y("span", b, e);
              },
              createBadge: function (d) {
                if (ka(d)) return null;
                var b = Y("span", { class: this.config.classNames.menu.value });
                return (
                  b.appendChild(
                    Y("span", { class: this.config.classNames.menu.badge }, d)
                  ),
                  b
                );
              },
              createButton: function (d, b) {
                var e = this,
                  k = ca({}, b),
                  r = (function () {
                    var y = (0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : ""
                    ).toString();
                    return (y = cc(y)).charAt(0).toLowerCase() + y.slice(1);
                  })(d),
                  t = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null,
                  };
                switch (
                  (["element", "icon", "label"].forEach(function (y) {
                    Object.keys(k).includes(y) && ((t[y] = k[y]), delete k[y]);
                  }),
                  "button" !== t.element ||
                    Object.keys(k).includes("type") ||
                    (k.type = "button"),
                  Object.keys(k).includes("class")
                    ? k["class"].split(" ").some(function (y) {
                        return y === e.config.classNames.control;
                      }) ||
                      ca(k, {
                        class: ""
                          .concat(k["class"], " ")
                          .concat(this.config.classNames.control),
                      })
                    : (k["class"] = this.config.classNames.control),
                  d)
                ) {
                  case "play":
                    t.toggle = !0;
                    t.label = "play";
                    t.labelPressed = "pause";
                    t.icon = "play";
                    t.iconPressed = "pause";
                    break;
                  case "mute":
                    t.toggle = !0;
                    t.label = "mute";
                    t.labelPressed = "unmute";
                    t.icon = "volume";
                    t.iconPressed = "muted";
                    break;
                  case "captions":
                    t.toggle = !0;
                    t.label = "enableCaptions";
                    t.labelPressed = "disableCaptions";
                    t.icon = "captions-off";
                    t.iconPressed = "captions-on";
                    break;
                  case "fullscreen":
                    t.toggle = !0;
                    t.label = "enterFullscreen";
                    t.labelPressed = "exitFullscreen";
                    t.icon = "enter-fullscreen";
                    t.iconPressed = "exit-fullscreen";
                    break;
                  case "play-large":
                    k["class"] += " ".concat(
                      this.config.classNames.control,
                      "--overlaid"
                    );
                    r = "play";
                    t.label = "play";
                    t.icon = "play";
                    break;
                  default:
                    ka(t.label) && (t.label = r), ka(t.icon) && (t.icon = d);
                }
                var u = Y(t.element);
                return (
                  t.toggle
                    ? (u.appendChild(
                        X.createIcon.call(this, t.iconPressed, {
                          class: "icon--pressed",
                        })
                      ),
                      u.appendChild(
                        X.createIcon.call(this, t.icon, {
                          class: "icon--not-pressed",
                        })
                      ),
                      u.appendChild(
                        X.createLabel.call(this, t.labelPressed, {
                          class: "label--pressed",
                        })
                      ),
                      u.appendChild(
                        X.createLabel.call(this, t.label, {
                          class: "label--not-pressed",
                        })
                      ))
                    : (u.appendChild(X.createIcon.call(this, t.icon)),
                      u.appendChild(X.createLabel.call(this, t.label))),
                  ca(k, Db(this.config.selectors.buttons[r], k)),
                  Ma(u, k),
                  "play" === r
                    ? (Ka(this.elements.buttons[r]) ||
                        (this.elements.buttons[r] = []),
                      this.elements.buttons[r].push(u))
                    : (this.elements.buttons[r] = u),
                  u
                );
              },
              createRange: function (d, b) {
                var e = Y(
                  "input",
                  ca(
                    Db(this.config.selectors.inputs[d]),
                    {
                      type: "range",
                      min: 0,
                      max: 100,
                      step: 0.01,
                      value: 0,
                      autocomplete: "off",
                      role: "slider",
                      "aria-label": db(d, this.config),
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": 0,
                    },
                    b
                  )
                );
                return (
                  (this.elements.inputs[d] = e),
                  X.updateRangeFill.call(this, e),
                  kc.setup(e),
                  e
                );
              },
              createProgress: function (d, b) {
                var e = Y(
                  "progress",
                  ca(
                    Db(this.config.selectors.display[d]),
                    {
                      min: 0,
                      max: 100,
                      value: 0,
                      role: "progressbar",
                      "aria-hidden": !0,
                    },
                    b
                  )
                );
                if ("volume" !== d) {
                  e.appendChild(Y("span", null, "0"));
                  var k = { played: "played", buffer: "buffered" }[d];
                  k = k ? db(k, this.config) : "";
                  e.innerText = "% ".concat(k.toLowerCase());
                }
                return (this.elements.display[d] = e), e;
              },
              createTime: function (d, b) {
                var e = Db(this.config.selectors.display[d], b);
                e = Y(
                  "div",
                  ca(e, {
                    class: ""
                      .concat(e["class"] ? e["class"] : "", " ")
                      .concat(this.config.classNames.display.time, " ")
                      .trim(),
                    "aria-label": db(d, this.config),
                  }),
                  "00:00"
                );
                return (this.elements.display[d] = e), e;
              },
              bindMenuItemShortcuts: function (d, b) {
                var e = this;
                xa.call(
                  this,
                  d,
                  "keydown keyup",
                  function (k) {
                    if (
                      [32, 38, 39, 40].includes(k.which) &&
                      (k.preventDefault(),
                      k.stopPropagation(),
                      "keydown" !== k.type)
                    ) {
                      var r,
                        t = $b(d, '[role="menuitemradio"]');
                      !t && [32, 39].includes(k.which)
                        ? X.showMenuPanel.call(e, b, !0)
                        : 32 !== k.which &&
                          (40 === k.which || (t && 39 === k.which)
                            ? ((r = d.nextElementSibling),
                              da(r) || (r = d.parentNode.firstElementChild))
                            : ((r = d.previousElementSibling),
                              da(r) || (r = d.parentNode.lastElementChild)),
                          Vb.call(e, r, !0));
                    }
                  },
                  !1
                );
                xa.call(this, d, "keyup", function (k) {
                  13 === k.which && X.focusFirstMenuItem.call(e, null, !0);
                });
              },
              createMenuItem: function (d) {
                var b = this,
                  e = d.value,
                  k = d.list,
                  r = d.type,
                  t = d.title,
                  u = d.badge;
                u = void 0 === u ? null : u;
                d = d.checked;
                d = void 0 !== d && d;
                var y = Db(this.config.selectors.inputs[r]),
                  M = Y(
                    "button",
                    ca(y, {
                      type: "button",
                      role: "menuitemradio",
                      class: ""
                        .concat(this.config.classNames.control, " ")
                        .concat(y["class"] ? y["class"] : "")
                        .trim(),
                      "aria-checked": d,
                      value: e,
                    })
                  );
                d = Y("span");
                d.innerHTML = t;
                da(u) && d.appendChild(u);
                M.appendChild(d);
                Object.defineProperty(M, "checked", {
                  enumerable: !0,
                  get: function () {
                    return "true" === M.getAttribute("aria-checked");
                  },
                  set: function (ha) {
                    ha &&
                      Array.from(M.parentNode.children)
                        .filter(function (ba) {
                          return $b(ba, '[role="menuitemradio"]');
                        })
                        .forEach(function (ba) {
                          return ba.setAttribute("aria-checked", "false");
                        });
                    M.setAttribute("aria-checked", ha ? "true" : "false");
                  },
                });
                this.listeners.bind(
                  M,
                  "click keyup",
                  function (ha) {
                    if (!ma(ha, KeyboardEvent) || 32 === ha.which) {
                      switch (
                        (ha.preventDefault(),
                        ha.stopPropagation(),
                        (M.checked = !0),
                        r)
                      ) {
                        case "language":
                          b.currentTrack = Number(e);
                          break;
                        case "quality":
                          b.quality = e;
                          break;
                        case "speed":
                          b.speed = parseFloat(e);
                      }
                      X.showMenuPanel.call(b, "home", ma(ha, KeyboardEvent));
                    }
                  },
                  r,
                  !1
                );
                X.bindMenuItemShortcuts.call(this, M, r);
                k.appendChild(M);
              },
              formatTime: function () {
                var d =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  b =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return Za(d)
                  ? zc(d, 0 < Math.trunc((this.duration / 60 / 60) % 60, 10), b)
                  : d;
              },
              updateTimeDisplay: function () {
                var d =
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
                da(d) && Za(b) && (d.innerText = X.formatTime(b, e));
              },
              updateVolume: function () {
                this.supported.ui &&
                  (da(this.elements.inputs.volume) &&
                    X.setRange.call(
                      this,
                      this.elements.inputs.volume,
                      this.muted ? 0 : this.volume
                    ),
                  da(this.elements.buttons.mute) &&
                    (this.elements.buttons.mute.pressed =
                      this.muted || 0 === this.volume));
              },
              setRange: function (d) {
                var b =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                da(d) && ((d.value = b), X.updateRangeFill.call(this, d));
              },
              updateProgress: function (d) {
                if (this.supported.ui && ma(d, Event) && d)
                  switch (d.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                      var b = this.currentTime;
                      var e = this.duration;
                      b =
                        0 === b || 0 === e || Number.isNaN(b) || Number.isNaN(e)
                          ? 0
                          : ((b / e) * 100).toFixed(2);
                      "timeupdate" === d.type &&
                        X.setRange.call(this, this.elements.inputs.seek, b);
                      break;
                    case "playing":
                    case "progress":
                      (b = this.elements.display.buffer),
                        (d = 100 * this.buffered),
                        (d = Za(d) ? d : 0),
                        (b = da(b) ? b : this.elements.display.buffer),
                        da(b) &&
                          ((b.value = d),
                          (b = b.getElementsByTagName("span")[0]),
                          da(b) && (b.childNodes[0].nodeValue = d)),
                        !0;
                  }
              },
              updateRangeFill: function (d) {
                d = ma(d, Event) ? d.target : d;
                if (da(d) && "range" === d.getAttribute("type")) {
                  if ($b(d, this.config.selectors.inputs.seek)) {
                    d.setAttribute("aria-valuenow", this.currentTime);
                    var b = X.formatTime(this.currentTime),
                      e = X.formatTime(this.duration),
                      k = db("seekLabel", this.config);
                    d.setAttribute(
                      "aria-valuetext",
                      k.replace("{currentTime}", b).replace("{duration}", e)
                    );
                  } else
                    $b(d, this.config.selectors.inputs.volume)
                      ? ((b = 100 * d.value),
                        d.setAttribute("aria-valuenow", b),
                        d.setAttribute(
                          "aria-valuetext",
                          "".concat(b.toFixed(1), "%")
                        ))
                      : d.setAttribute("aria-valuenow", d.value);
                  ed &&
                    d.style.setProperty(
                      "--value",
                      "".concat((d.value / d.max) * 100, "%")
                    );
                }
              },
              updateSeekTooltip: function (d) {
                if (
                  this.config.tooltips.seek &&
                  da(this.elements.inputs.seek) &&
                  da(this.elements.display.seekTooltip) &&
                  0 !== this.duration
                ) {
                  var b = "".concat(
                    this.config.classNames.tooltip,
                    "--visible"
                  );
                  if (this.touch) wa(this.elements.display.seekTooltip, b, !1);
                  else {
                    var e = this.elements.progress.getBoundingClientRect();
                    if (ma(d, Event)) e = (100 / e.width) * (d.pageX - e.left);
                    else {
                      if (!vc(this.elements.display.seekTooltip, b)) return;
                      e = parseFloat(
                        this.elements.display.seekTooltip.style.left,
                        10
                      );
                    }
                    0 > e ? (e = 0) : 100 < e && (e = 100);
                    X.updateTimeDisplay.call(
                      this,
                      this.elements.display.seekTooltip,
                      (this.duration / 100) * e
                    );
                    this.elements.display.seekTooltip.style.left = "".concat(
                      e,
                      "%"
                    );
                    ma(d, Event) &&
                      ["mouseenter", "mouseleave"].includes(d.type) &&
                      wa(
                        this.elements.display.seekTooltip,
                        b,
                        "mouseenter" === d.type
                      );
                  }
                }
              },
              timeUpdate: function (d) {
                var b =
                  !da(this.elements.display.duration) && this.config.invertTime;
                X.updateTimeDisplay.call(
                  this,
                  this.elements.display.currentTime,
                  b ? this.duration - this.currentTime : this.currentTime,
                  b
                );
                (d && "timeupdate" === d.type && this.media.seeking) ||
                  X.updateProgress.call(this, d);
              },
              durationUpdate: function () {
                if (
                  this.supported.ui &&
                  (this.config.invertTime || !this.currentTime)
                ) {
                  if (this.duration >= Math.pow(2, 32))
                    return (
                      Lb(this.elements.display.currentTime, !0),
                      void Lb(this.elements.progress, !0)
                    );
                  da(this.elements.inputs.seek) &&
                    this.elements.inputs.seek.setAttribute(
                      "aria-valuemax",
                      this.duration
                    );
                  var d = da(this.elements.display.duration);
                  !d &&
                    this.config.displayDuration &&
                    this.paused &&
                    X.updateTimeDisplay.call(
                      this,
                      this.elements.display.currentTime,
                      this.duration
                    );
                  d &&
                    X.updateTimeDisplay.call(
                      this,
                      this.elements.display.duration,
                      this.duration
                    );
                  X.updateSeekTooltip.call(this);
                }
              },
              toggleMenuButton: function (d, b) {
                Lb(this.elements.settings.buttons[d], !b);
              },
              updateSetting: function (d, b, e) {
                var k = this.elements.settings.panels[d],
                  r = null;
                if ("captions" === d) r = this.currentTrack;
                else {
                  if (
                    ((r = ka(e) ? this[d] : e),
                    ka(r) && (r = this.config[d]["default"]),
                    !ka(this.options[d]) && !this.options[d].includes(r))
                  )
                    return void this.debug.warn(
                      "Unsupported value of '".concat(r, "' for ").concat(d)
                    );
                  if (!this.config[d].options.includes(r))
                    return void this.debug.warn(
                      "Disabled value of '".concat(r, "' for ").concat(d)
                    );
                }
                if (
                  (da(b) || (b = k && k.querySelector('[role="menu"]')), da(b))
                )
                  (this.elements.settings.buttons[d].querySelector(
                    ".".concat(this.config.classNames.menu.value)
                  ).innerHTML = X.getLabel.call(this, d, r)),
                    (d = b && b.querySelector('[value="'.concat(r, '"]'))),
                    da(d) && (d.checked = !0);
              },
              getLabel: function (d, b) {
                switch (d) {
                  case "speed":
                    return 1 === b
                      ? db("normal", this.config)
                      : "".concat(b, "&times;");
                  case "quality":
                    if (Za(b)) {
                      var e = db("qualityLabel.".concat(b), this.config);
                      return e.length ? e : "".concat(b, "p");
                    }
                    return Qc(b);
                  case "captions":
                    return Ba.getLabel.call(this);
                  default:
                    return null;
                }
              },
              setQualityMenu: function (d) {
                var b = this;
                if (da(this.elements.settings.panels.quality)) {
                  var e = this.elements.settings.panels.quality.querySelector(
                    '[role="menu"]'
                  );
                  Ka(d) &&
                    (this.options.quality = tb(d).filter(function (k) {
                      return b.config.quality.options.includes(k);
                    }));
                  d =
                    !ka(this.options.quality) &&
                    1 < this.options.quality.length;
                  if (
                    (X.toggleMenuButton.call(this, "quality", d),
                    Jb(e),
                    X.checkMenu.call(this),
                    d)
                  )
                    this.options.quality
                      .sort(function (k, r) {
                        var t = b.config.quality.options;
                        return t.indexOf(k) > t.indexOf(r) ? 1 : -1;
                      })
                      .forEach(function (k) {
                        var r = X.createMenuItem,
                          t = r.call,
                          u = X.getLabel.call(b, "quality", k);
                        var y = db("qualityBadge.".concat(k), b.config);
                        y = y.length ? X.createBadge.call(b, y) : null;
                        t.call(r, b, {
                          value: k,
                          list: e,
                          type: "quality",
                          title: u,
                          badge: y,
                        });
                      }),
                      X.updateSetting.call(this, "quality", e);
                }
              },
              setCaptionsMenu: function () {
                var d = this;
                if (da(this.elements.settings.panels.captions)) {
                  var b = this.elements.settings.panels.captions.querySelector(
                      '[role="menu"]'
                    ),
                    e = Ba.getTracks.call(this),
                    k = !!e.length;
                  if (
                    (X.toggleMenuButton.call(this, "captions", k),
                    Jb(b),
                    X.checkMenu.call(this),
                    k)
                  )
                    (e = e.map(function (r, t) {
                      return {
                        value: t,
                        checked: d.captions.toggled && d.currentTrack === t,
                        title: Ba.getLabel.call(d, r),
                        badge:
                          r.language &&
                          X.createBadge.call(d, r.language.toUpperCase()),
                        list: b,
                        type: "language",
                      };
                    })),
                      e.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: db("disabled", this.config),
                        list: b,
                        type: "language",
                      }),
                      e.forEach(X.createMenuItem.bind(this)),
                      X.updateSetting.call(this, "captions", b);
                }
              },
              setSpeedMenu: function () {
                var d = this;
                if (da(this.elements.settings.panels.speed)) {
                  var b = this.elements.settings.panels.speed.querySelector(
                    '[role="menu"]'
                  );
                  this.options.speed = this.options.speed.filter(function (k) {
                    return k >= d.minimumSpeed && k <= d.maximumSpeed;
                  });
                  var e =
                    !ka(this.options.speed) && 1 < this.options.speed.length;
                  X.toggleMenuButton.call(this, "speed", e);
                  Jb(b);
                  X.checkMenu.call(this);
                  e &&
                    (this.options.speed.forEach(function (k) {
                      X.createMenuItem.call(d, {
                        value: k,
                        list: b,
                        type: "speed",
                        title: X.getLabel.call(d, "speed", k),
                      });
                    }),
                    X.updateSetting.call(this, "speed", b));
                }
              },
              checkMenu: function () {
                var d = this.elements.settings.buttons;
                d =
                  !ka(d) &&
                  Object.values(d).some(function (b) {
                    return !b.hidden;
                  });
                Lb(this.elements.settings.menu, !d);
              },
              focusFirstMenuItem: function (d) {
                var b =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (!this.elements.settings.popup.hidden) {
                  var e = d;
                  da(e) ||
                    (e = Object.values(this.elements.settings.panels).find(
                      function (k) {
                        return !k.hidden;
                      }
                    ));
                  e = e.querySelector('[role^="menuitem"]');
                  Vb.call(this, e, b);
                }
              },
              toggleMenu: function (d) {
                var b = this.elements.settings.popup,
                  e = this.elements.buttons.settings;
                if (da(b) && da(e)) {
                  var k = b.hidden,
                    r = k;
                  if (wb(d)) r = d;
                  else if (ma(d, KeyboardEvent) && 27 === d.which) r = !1;
                  else if (ma(d, Event)) {
                    var t = Xa(d.composedPath) ? d.composedPath()[0] : d.target;
                    if ((t = b.contains(t)) || (!t && d.target !== e && r))
                      return;
                  }
                  e.setAttribute("aria-expanded", r);
                  Lb(b, !r);
                  wa(
                    this.elements.container,
                    this.config.classNames.menu.open,
                    r
                  );
                  r && ma(d, KeyboardEvent)
                    ? X.focusFirstMenuItem.call(this, null, !0)
                    : r || k || Vb.call(this, e, ma(d, KeyboardEvent));
                }
              },
              getMenuSize: function (d) {
                var b = d.cloneNode(!0);
                b.style.position = "absolute";
                b.style.opacity = 0;
                b.removeAttribute("hidden");
                d.parentNode.appendChild(b);
                d = b.scrollWidth;
                var e = b.scrollHeight;
                return qb(b), { width: d, height: e };
              },
              showMenuPanel: function () {
                var d = this,
                  b =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  e =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                b = this.elements.container.querySelector(
                  "#plyr-settings-".concat(this.id, "-").concat(b)
                );
                if (da(b)) {
                  var k = b.parentNode,
                    r = Array.from(k.children).find(function (u) {
                      return !u.hidden;
                    });
                  if (Sa.transitions && !Sa.reducedMotion) {
                    k.style.width = "".concat(r.scrollWidth, "px");
                    k.style.height = "".concat(r.scrollHeight, "px");
                    var t = X.getMenuSize.call(this, b);
                    xa.call(this, k, jc, function M(y) {
                      y.target === k &&
                        ["width", "height"].includes(y.propertyName) &&
                        ((k.style.width = ""),
                        (k.style.height = ""),
                        xc.call(d, k, jc, M));
                    });
                    k.style.width = "".concat(t.width, "px");
                    k.style.height = "".concat(t.height, "px");
                  }
                  Lb(r, !0);
                  Lb(b, !1);
                  X.focusFirstMenuItem.call(this, b, e);
                }
              },
              setDownloadUrl: function () {
                var d = this.elements.buttons.download;
                da(d) && d.setAttribute("href", this.download);
              },
              create: function (d) {
                var b = this,
                  e = X.bindMenuItemShortcuts,
                  k = X.createButton,
                  r = X.createProgress,
                  t = X.createRange,
                  u = X.createTime,
                  y = X.setQualityMenu,
                  M = X.setSpeedMenu,
                  ha = X.showMenuPanel;
                this.elements.controls = null;
                Ka(this.config.controls) &&
                  this.config.controls.includes("play-large") &&
                  this.elements.container.appendChild(
                    k.call(this, "play-large")
                  );
                var ba = Y("div", Db(this.config.selectors.controls.wrapper));
                this.elements.controls = ba;
                var ua = { class: "plyr__controls__item" };
                return (
                  tb(
                    Ka(this.config.controls) ? this.config.controls : []
                  ).forEach(function (Oa) {
                    if (
                      ("restart" === Oa &&
                        ba.appendChild(k.call(b, "restart", ua)),
                      "rewind" === Oa &&
                        ba.appendChild(k.call(b, "rewind", ua)),
                      "play" === Oa && ba.appendChild(k.call(b, "play", ua)),
                      "fast-forward" === Oa &&
                        ba.appendChild(k.call(b, "fast-forward", ua)),
                      "progress" === Oa)
                    ) {
                      var ia = Y("div", {
                          class: "".concat(
                            ua["class"],
                            " plyr__progress__container"
                          ),
                        }),
                        T = Y("div", Db(b.config.selectors.progress));
                      if (
                        (T.appendChild(
                          t.call(b, "seek", { id: "plyr-seek-".concat(d.id) })
                        ),
                        T.appendChild(r.call(b, "buffer")),
                        b.config.tooltips.seek)
                      ) {
                        var pa = Y(
                          "span",
                          { class: b.config.classNames.tooltip },
                          "00:00"
                        );
                        T.appendChild(pa);
                        b.elements.display.seekTooltip = pa;
                      }
                      b.elements.progress = T;
                      ia.appendChild(b.elements.progress);
                      ba.appendChild(ia);
                    }
                    if (
                      ("current-time" === Oa &&
                        ba.appendChild(u.call(b, "currentTime", ua)),
                      "duration" === Oa &&
                        ba.appendChild(u.call(b, "duration", ua)),
                      "mute" === Oa || "volume" === Oa)
                    )
                      (ia = b.elements.volume),
                        ((da(ia) && ba.contains(ia)) ||
                          ((ia = Y(
                            "div",
                            ca({}, ua, {
                              class: ""
                                .concat(ua["class"], " plyr__volume")
                                .trim(),
                            })
                          )),
                          (b.elements.volume = ia),
                          ba.appendChild(ia)),
                        "mute" === Oa && ia.appendChild(k.call(b, "mute")),
                        "volume" !== Oa || Sb) ||
                          ia.appendChild(
                            t.call(
                              b,
                              "volume",
                              ca(
                                { max: 1, step: 0.05, value: b.config.volume },
                                { id: "plyr-volume-".concat(d.id) }
                              )
                            )
                          );
                    if (
                      ("captions" === Oa &&
                        ba.appendChild(k.call(b, "captions", ua)),
                      "settings" === Oa && !ka(b.config.settings))
                    ) {
                      ia = Y(
                        "div",
                        ca({}, ua, {
                          class: "".concat(ua["class"], " plyr__menu").trim(),
                          hidden: "",
                        })
                      );
                      ia.appendChild(
                        k.call(b, "settings", {
                          "aria-haspopup": !0,
                          "aria-controls": "plyr-settings-".concat(d.id),
                          "aria-expanded": !1,
                        })
                      );
                      T = Y("div", {
                        class: "plyr__menu__container",
                        id: "plyr-settings-".concat(d.id),
                        hidden: "",
                      });
                      var Da = Y("div");
                      pa = Y("div", {
                        id: "plyr-settings-".concat(d.id, "-home"),
                      });
                      var La = Y("div", { role: "menu" });
                      pa.appendChild(La);
                      Da.appendChild(pa);
                      b.elements.settings.panels.home = pa;
                      b.config.settings.forEach(function (ra) {
                        var Pa = Y(
                          "button",
                          ca(Db(b.config.selectors.buttons.settings), {
                            type: "button",
                            class: ""
                              .concat(b.config.classNames.control, " ")
                              .concat(b.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: "",
                          })
                        );
                        e.call(b, Pa, ra);
                        xa.call(b, Pa, "click", function () {
                          ha.call(b, ra, !1);
                        });
                        var hb = Y("span", null, db(ra, b.config)),
                          lb = Y("span", {
                            class: b.config.classNames.menu.value,
                          });
                        lb.innerHTML = d[ra];
                        hb.appendChild(lb);
                        Pa.appendChild(hb);
                        La.appendChild(Pa);
                        hb = Y("div", {
                          id: "plyr-settings-".concat(d.id, "-").concat(ra),
                          hidden: "",
                        });
                        lb = Y("button", {
                          type: "button",
                          class: ""
                            .concat(b.config.classNames.control, " ")
                            .concat(b.config.classNames.control, "--back"),
                        });
                        lb.appendChild(
                          Y("span", { "aria-hidden": !0 }, db(ra, b.config))
                        );
                        lb.appendChild(
                          Y(
                            "span",
                            { class: b.config.classNames.hidden },
                            db("menuBack", b.config)
                          )
                        );
                        xa.call(
                          b,
                          hb,
                          "keydown",
                          function (xb) {
                            37 === xb.which &&
                              (xb.preventDefault(),
                              xb.stopPropagation(),
                              ha.call(b, "home", !0));
                          },
                          !1
                        );
                        xa.call(b, lb, "click", function () {
                          ha.call(b, "home", !1);
                        });
                        hb.appendChild(lb);
                        hb.appendChild(Y("div", { role: "menu" }));
                        Da.appendChild(hb);
                        b.elements.settings.buttons[ra] = Pa;
                        b.elements.settings.panels[ra] = hb;
                      });
                      T.appendChild(Da);
                      ia.appendChild(T);
                      ba.appendChild(ia);
                      b.elements.settings.popup = T;
                      b.elements.settings.menu = ia;
                    }
                    if (
                      ("pip" === Oa &&
                        Sa.pip &&
                        ba.appendChild(k.call(b, "pip", ua)),
                      "airplay" === Oa &&
                        Sa.airplay &&
                        ba.appendChild(k.call(b, "airplay", ua)),
                      "download" === Oa)
                    )
                      (ia = ca({}, ua, {
                        element: "a",
                        href: b.download,
                        target: "_blank",
                      })),
                        b.isHTML5 && (ia.download = ""),
                        !uc(b.config.urls.download) &&
                          b.isEmbed &&
                          ca(ia, {
                            icon: "logo-".concat(b.provider),
                            label: b.provider,
                          }),
                        ba.appendChild(k.call(b, "download", ia));
                    "fullscreen" === Oa &&
                      ba.appendChild(k.call(b, "fullscreen", ua));
                  }),
                  this.isHTML5 && y.call(this, Xb.getQualityOptions.call(this)),
                  M.call(this),
                  ba
                );
              },
              inject: function () {
                var d = this;
                if (this.config.loadSprite) {
                  var b = X.getIconUrl.call(this);
                  b.cors && Xc(b.url, "sprite-plyr");
                }
                this.id = Math.floor(1e4 * Math.random());
                b = null;
                this.elements.controls = null;
                var e,
                  k,
                  r = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title,
                  },
                  t = !0;
                if (
                  (Xa(this.config.controls) &&
                    (this.config.controls = this.config.controls.call(this, r)),
                  this.config.controls || (this.config.controls = []),
                  da(this.config.controls) || fb(this.config.controls)
                    ? (b = this.config.controls)
                    : ((b = X.create.call(this, {
                        id: this.id,
                        seektime: this.config.seekTime,
                        speed: this.speed,
                        quality: this.quality,
                        captions: Ba.getLabel.call(this),
                      })),
                      (t = !1)),
                  t &&
                    fb(this.config.controls) &&
                    ((e = b),
                    Object.entries(r).forEach(function (y) {
                      y = m(y, 2);
                      var M = y[1];
                      e = Tb(e, "{".concat(y[0], "}"), M);
                    }),
                    (b = e)),
                  fb(this.config.selectors.controls.container) &&
                    (k = document.querySelector(
                      this.config.selectors.controls.container
                    )),
                  da(k) || (k = this.elements.container),
                  k[da(b) ? "insertAdjacentElement" : "insertAdjacentHTML"](
                    "afterbegin",
                    b
                  ),
                  da(this.elements.controls) || X.findElements.call(this),
                  !ka(this.elements.buttons))
                ) {
                  var u = function (y) {
                    var M = d.config.classNames.controlPressed;
                    Object.defineProperty(y, "pressed", {
                      enumerable: !0,
                      get: function () {
                        return vc(y, M);
                      },
                      set: function () {
                        wa(
                          y,
                          M,
                          0 < arguments.length &&
                            void 0 !== arguments[0] &&
                            arguments[0]
                        );
                      },
                    });
                  };
                  Object.values(this.elements.buttons)
                    .filter(Boolean)
                    .forEach(function (y) {
                      Ka(y) || Gc(y)
                        ? Array.from(y).filter(Boolean).forEach(u)
                        : u(y);
                    });
                }
                if ((pb && G(k), this.config.tooltips.controls))
                  (b = this.config),
                    (k = b.classNames),
                    (b = b.selectors),
                    (k = ""
                      .concat(b.controls.wrapper, " ")
                      .concat(b.labels, " .")
                      .concat(k.hidden)),
                    (k = mc.call(this, k)),
                    Array.from(k).forEach(function (y) {
                      wa(y, d.config.classNames.hidden, !1);
                      wa(y, d.config.classNames.tooltip, !0);
                    });
              },
            },
            Ba = {
              setup: function () {
                if (this.supported.ui)
                  if (
                    !this.isVideo ||
                    this.isYouTube ||
                    (this.isHTML5 && !Sa.textTracks)
                  )
                    Ka(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      X.setCaptionsMenu.call(this);
                  else {
                    if (
                      (da(this.elements.captions) ||
                        ((this.elements.captions = Y(
                          "div",
                          Db(this.config.selectors.captions)
                        )),
                        (function (k, r) {
                          da(k) &&
                            da(r) &&
                            r.parentNode.insertBefore(k, r.nextSibling);
                        })(this.elements.captions, this.elements.wrapper)),
                      na && window.URL)
                    ) {
                      var d = this.media.querySelectorAll("track");
                      Array.from(d).forEach(function (k) {
                        var r = k.getAttribute("src"),
                          t = Lc(r);
                        null !== t &&
                          t.hostname !== window.location.href.hostname &&
                          ["http:", "https:"].includes(t.protocol) &&
                          dc(r, "blob")
                            .then(function (u) {
                              k.setAttribute(
                                "src",
                                window.URL.createObjectURL(u)
                              );
                            })
                            ["catch"](function () {
                              qb(k);
                            });
                      });
                    }
                    d = tb(
                      (
                        navigator.languages || [
                          navigator.language || navigator.userLanguage || "en",
                        ]
                      ).map(function (k) {
                        return k.split("-")[0];
                      })
                    );
                    var b = (
                      this.storage.get("language") ||
                      this.config.captions.language ||
                      "auto"
                    ).toLowerCase();
                    "auto" === b && (b = m(d, 1)[0]);
                    var e = this.storage.get("captions");
                    (wb(e) || (e = this.config.captions.active),
                    Object.assign(this.captions, {
                      toggled: !1,
                      active: e,
                      language: b,
                      languages: d,
                    }),
                    this.isHTML5) &&
                      xa.call(
                        this,
                        this.media.textTracks,
                        this.config.captions.update
                          ? "addtrack removetrack"
                          : "removetrack",
                        Ba.update.bind(this)
                      );
                    setTimeout(Ba.update.bind(this), 0);
                  }
              },
              update: function () {
                var d = this,
                  b = Ba.getTracks.call(this, !0),
                  e = this.captions,
                  k = e.active,
                  r = e.language,
                  t = e.meta;
                e = e.currentTrackNode;
                var u = !!b.find(function (y) {
                  return y.language === r;
                });
                this.isHTML5 &&
                  this.isVideo &&
                  b
                    .filter(function (y) {
                      return !t.get(y);
                    })
                    .forEach(function (y) {
                      d.debug.log("Track added", y);
                      t.set(y, { default: "showing" === y.mode });
                      "showing" === y.mode && (y.mode = "hidden");
                      xa.call(d, y, "cuechange", function () {
                        return Ba.updateCues.call(d);
                      });
                    });
                ((u && this.language !== r) || !b.includes(e)) &&
                  (Ba.setLanguage.call(this, r), Ba.toggle.call(this, k && u));
                wa(
                  this.elements.container,
                  this.config.classNames.captions.enabled,
                  !ka(b)
                );
                Ka(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  this.config.settings.includes("captions") &&
                  X.setCaptionsMenu.call(this);
              },
              toggle: function (d) {
                var b = this,
                  e =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1];
                if (this.supported.ui) {
                  var k = this.captions.toggled,
                    r = this.config.classNames.captions.active,
                    t = null == d ? !k : d;
                  if (t !== k) {
                    if (
                      (e ||
                        ((this.captions.active = t),
                        this.storage.set({ captions: t })),
                      !this.language && t && !e)
                    )
                      return (
                        (e = Ba.getTracks.call(this)),
                        (k = Ba.findTrack.call(
                          this,
                          [this.captions.language].concat(
                            z(this.captions.languages)
                          ),
                          !0
                        )),
                        (this.captions.language = k.language),
                        void Ba.set.call(this, e.indexOf(k))
                      );
                    this.elements.buttons.captions &&
                      (this.elements.buttons.captions.pressed = t);
                    wa(this.elements.container, r, t);
                    this.captions.toggled = t;
                    X.updateSetting.call(this, "captions");
                    qa.call(
                      this,
                      this.media,
                      t ? "captionsenabled" : "captionsdisabled"
                    );
                  }
                  setTimeout(function () {
                    t &&
                      b.captions.toggled &&
                      (b.captions.currentTrackNode.mode = "hidden");
                  });
                }
              },
              set: function (d) {
                var b =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1],
                  e = Ba.getTracks.call(this);
                if (-1 !== d)
                  if (Za(d))
                    if (d in e) {
                      if (this.captions.currentTrack !== d) {
                        this.captions.currentTrack = d;
                        e = e[d];
                        var k = (e || {}).language;
                        this.captions.currentTrackNode = e;
                        X.updateSetting.call(this, "captions");
                        b ||
                          ((this.captions.language = k),
                          this.storage.set({ language: k }));
                        this.isVimeo && this.embed.enableTextTrack(k);
                        qa.call(this, this.media, "languagechange");
                      }
                      Ba.toggle.call(this, !0, b);
                      this.isHTML5 && this.isVideo && Ba.updateCues.call(this);
                    } else this.debug.warn("Track not found", d);
                  else this.debug.warn("Invalid caption argument", d);
                else Ba.toggle.call(this, !1, b);
              },
              setLanguage: function (d) {
                var b =
                  !(1 < arguments.length && void 0 !== arguments[1]) ||
                  arguments[1];
                if (fb(d)) {
                  var e = d.toLowerCase();
                  this.captions.language = e;
                  var k = Ba.getTracks.call(this);
                  e = Ba.findTrack.call(this, [e]);
                  Ba.set.call(this, k.indexOf(e), b);
                } else this.debug.warn("Invalid language argument", d);
              },
              getTracks: function () {
                var d = this,
                  b =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                return Array.from((this.media || {}).textTracks || [])
                  .filter(function (e) {
                    return !d.isHTML5 || b || d.captions.meta.has(e);
                  })
                  .filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind);
                  });
              },
              findTrack: function (d) {
                var b,
                  e = this,
                  k =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = Ba.getTracks.call(this),
                  t = Array.from(r).sort(function (u, y) {
                    return (
                      Number((e.captions.meta.get(y) || {})["default"]) -
                      Number((e.captions.meta.get(u) || {})["default"])
                    );
                  });
                return (
                  d.every(function (u) {
                    return !(b = t.find(function (y) {
                      return y.language === u;
                    }));
                  }),
                  b || (k ? t[0] : void 0)
                );
              },
              getCurrentTrack: function () {
                return Ba.getTracks.call(this)[this.currentTrack];
              },
              getLabel: function (d) {
                var b = d;
                return (
                  !Ib(b) &&
                    Sa.textTracks &&
                    this.captions.toggled &&
                    (b = Ba.getCurrentTrack.call(this)),
                  Ib(b)
                    ? ka(b.label)
                      ? ka(b.language)
                        ? db("enabled", this.config)
                        : d.language.toUpperCase()
                      : b.label
                    : db("disabled", this.config)
                );
              },
              updateCues: function (d) {
                if (this.supported.ui)
                  if (da(this.elements.captions))
                    if (null == d || Array.isArray(d)) {
                      if (
                        (d ||
                          ((d = Ba.getCurrentTrack.call(this)),
                          (d = Array.from((d || {}).activeCues || [])
                            .map(function (e) {
                              return e.getCueAsHTML();
                            })
                            .map(Wc))),
                        (d = d
                          .map(function (e) {
                            return e.trim();
                          })
                          .join("\n")),
                        d !== this.elements.captions.innerHTML)
                      ) {
                        Jb(this.elements.captions);
                        var b = Y("span", Db(this.config.selectors.caption));
                        b.innerHTML = d;
                        this.elements.captions.appendChild(b);
                        qa.call(this, this.media, "cuechange");
                      }
                    } else this.debug.warn("updateCues: Invalid input", d);
                  else this.debug.warn("No captions element to render to");
              },
            },
            sb = {
              enabled: !0,
              title: "",
              debug: !1,
              autoplay: !1,
              autopause: !0,
              playsinline: !0,
              seekTime: 10,
              volume: 1,
              muted: !1,
              duration: null,
              displayDuration: !0,
              invertTime: !0,
              toggleInvert: !0,
              ratio: null,
              clickToPlay: !0,
              hideControls: !0,
              resetOnEnd: !1,
              disableContextMenu: !0,
              loadSprite: !0,
              iconPrefix: "plyr",
              iconUrl: "https://cdn.plyr.io/3.6.3/plyr.svg",
              blankVideo: "https://cdn.plyr.io/static/blank.mp4",
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
                forced: !1,
                onChange: null,
              },
              loop: { active: !1 },
              speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
              },
              keyboard: { focused: !0, global: !1 },
              tooltips: { controls: !1, seek: !0 },
              captions: { active: !1, language: "auto", update: !1 },
              fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
              storage: { enabled: !0, key: "plyr" },
              controls: "play-large play progress current-time mute volume captions settings pip airplay fullscreen".split(
                " "
              ),
              settings: ["captions", "quality", "speed"],
              i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
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
                vimeo: {
                  sdk: "https://player.vimeo.com/api/player.js",
                  iframe: "https://player.vimeo.com/video/{0}?{1}",
                  api: "https://vimeo.com/api/oembed.json?url={0}",
                },
                youtube: {
                  sdk: "https://www.youtube.com/iframe_api",
                  api:
                    "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                },
                googleIMA: {
                  sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                },
              },
              listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null,
              },
              events: "ended progress stalled playing waiting canplay canplaythrough loadstart loadeddata loadedmetadata timeupdate volumechange play pause error seeking seeked emptied ratechange cuechange download enterfullscreen exitfullscreen captionsenabled captionsdisabled languagechange controlshidden controlsshown ready statechange qualitychange adsloaded adscontentpause adscontentresume adstarted adsmidpoint adscomplete adsallcomplete adsimpression adsclick".split(
                " "
              ),
              selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: { container: null, wrapper: ".plyr__controls" },
                labels: "[data-plyr]",
                buttons: {
                  play: '[data-plyr="play"]',
                  pause: '[data-plyr="pause"]',
                  restart: '[data-plyr="restart"]',
                  rewind: '[data-plyr="rewind"]',
                  fastForward: '[data-plyr="fast-forward"]',
                  mute: '[data-plyr="mute"]',
                  captions: '[data-plyr="captions"]',
                  download: '[data-plyr="download"]',
                  fullscreen: '[data-plyr="fullscreen"]',
                  pip: '[data-plyr="pip"]',
                  airplay: '[data-plyr="airplay"]',
                  settings: '[data-plyr="settings"]',
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
                captions: ".plyr__captions",
                caption: ".plyr__caption",
              },
              classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: { time: "plyr__time" },
                menu: {
                  value: "plyr__menu__value",
                  badge: "plyr__badge",
                  open: "plyr--menu-open",
                },
                captions: {
                  enabled: "plyr--captions-enabled",
                  active: "plyr--captions-active",
                },
                fullscreen: {
                  enabled: "plyr--fullscreen-enabled",
                  fallback: "plyr--fullscreen-fallback",
                },
                pip: {
                  supported: "plyr--pip-supported",
                  active: "plyr--pip-active",
                },
                airplay: {
                  supported: "plyr--airplay-supported",
                  active: "plyr--airplay-active",
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                  thumbContainer: "plyr__preview-thumb",
                  thumbContainerShown: "plyr__preview-thumb--is-shown",
                  imageContainer: "plyr__preview-thumb__image-container",
                  timeContainer: "plyr__preview-thumb__time-container",
                  scrubbingContainer: "plyr__preview-scrubbing",
                  scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
                },
              },
              attributes: {
                embed: {
                  provider: "data-plyr-provider",
                  id: "data-plyr-embed-id",
                },
              },
              ads: { enabled: !1, publisherId: "", tagUrl: "" },
              previewThumbnails: { enabled: !1, src: "" },
              vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1,
              },
              youtube: {
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                customControls: !0,
                noCookie: !1,
              },
            },
            Ub = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
            ad = function () {},
            xd = (function () {
              function d() {
                var b =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                Q(this, d);
                (this.enabled = window.console && b) &&
                  this.log("Debugging enabled");
              }
              return (
                Ha(d, [
                  {
                    key: "log",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.log, console)
                        : ad;
                    },
                  },
                  {
                    key: "warn",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.warn, console)
                        : ad;
                    },
                  },
                  {
                    key: "error",
                    get: function () {
                      return this.enabled
                        ? Function.prototype.bind.call(console.error, console)
                        : ad;
                    },
                  },
                ]),
                d
              );
            })(),
            md = (function () {
              function d(b) {
                var e = this;
                Q(this, d);
                this.player = b;
                this.prefix = d.prefix;
                this.property = d.property;
                this.scrollPosition = { x: 0, y: 0 };
                this.forceFallback = "force" === b.config.fullscreen.fallback;
                this.player.elements.fullscreen =
                  b.config.fullscreen.container &&
                  (function (k, r) {
                    return (
                      Element.prototype.closest ||
                      function () {
                        var t = this;
                        do {
                          if ($b.matches(t, r)) return t;
                          t = t.parentElement || t.parentNode;
                        } while (null !== t && 1 === t.nodeType);
                        return null;
                      }
                    ).call(k, r);
                  })(
                    this.player.elements.container,
                    b.config.fullscreen.container
                  );
                xa.call(
                  this.player,
                  document,
                  "ms" === this.prefix
                    ? "MSFullscreenChange"
                    : "".concat(this.prefix, "fullscreenchange"),
                  function () {
                    e.onChange();
                  }
                );
                xa.call(
                  this.player,
                  this.player.elements.container,
                  "dblclick",
                  function (k) {
                    (da(e.player.elements.controls) &&
                      e.player.elements.controls.contains(k.target)) ||
                      e.player.listeners.proxy(k, e.toggle, "fullscreen");
                  }
                );
                xa.call(
                  this,
                  this.player.elements.container,
                  "keydown",
                  function (k) {
                    return e.trapFocus(k);
                  }
                );
                this.update();
              }
              return (
                Ha(
                  d,
                  [
                    {
                      key: "onChange",
                      value: function () {
                        if (this.enabled) {
                          var b = this.player.elements.buttons.fullscreen;
                          da(b) && (b.pressed = this.active);
                          qa.call(
                            this.player,
                            this.target === this.player.media
                              ? this.target
                              : this.player.elements.container,
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
                            ? (this.scrollPosition = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0,
                              })
                            : window.scrollTo(
                                this.scrollPosition.x,
                                this.scrollPosition.y
                              ),
                          (document.body.style.overflow = b ? "hidden" : ""),
                          wa(
                            this.target,
                            this.player.config.classNames.fullscreen.fallback,
                            b
                          ),
                          Sb)
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
                            fb(e.content) &&
                            e.content.includes("viewport-fit=cover");
                          b
                            ? ((this.cleanupViewport = !k),
                              k ||
                                (e.content += ",".concat("viewport-fit=cover")))
                            : this.cleanupViewport &&
                              (e.content = e.content
                                .split(",")
                                .filter(function (r) {
                                  return "viewport-fit=cover" !== r.trim();
                                })
                                .join(","));
                        }
                        this.onChange();
                      },
                    },
                    {
                      key: "trapFocus",
                      value: function (b) {
                        if (
                          !Sb &&
                          this.active &&
                          "Tab" === b.key &&
                          9 === b.keyCode
                        ) {
                          var e = document.activeElement,
                            k = mc.call(
                              this.player,
                              "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                            ),
                            r = m(k, 1)[0];
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
                          ? ((b = this.forceFallback
                              ? "Fallback (forced)"
                              : d["native"]
                              ? "Native"
                              : "Fallback"),
                            this.player.debug.log(
                              "".concat(b, " fullscreen enabled")
                            ))
                          : this.player.debug.log(
                              "Fullscreen not supported and fallback disabled"
                            );
                        wa(
                          this.player.elements.container,
                          this.player.config.classNames.fullscreen.enabled,
                          this.enabled
                        );
                      },
                    },
                    {
                      key: "enter",
                      value: function () {
                        this.enabled &&
                          (Sb && this.player.config.fullscreen.iosNative
                            ? this.target.webkitEnterFullscreen()
                            : !d["native"] || this.forceFallback
                            ? this.toggleFallback(!0)
                            : this.prefix
                            ? ka(this.prefix) ||
                              this.target[
                                ""
                                  .concat(this.prefix, "Request")
                                  .concat(this.property)
                              ]()
                            : this.target.requestFullscreen({
                                navigationUI: "hide",
                              }));
                      },
                    },
                    {
                      key: "exit",
                      value: function () {
                        if (this.enabled)
                          if (Sb && this.player.config.fullscreen.iosNative)
                            this.target.webkitExitFullscreen(),
                              Ya(this.player.play());
                          else if (!d["native"] || this.forceFallback)
                            this.toggleFallback(!1);
                          else if (this.prefix) {
                            if (!ka(this.prefix)) {
                              var b = "moz" === this.prefix ? "Cancel" : "Exit";
                              document[
                                ""
                                  .concat(this.prefix)
                                  .concat(b)
                                  .concat(this.property)
                              ]();
                            }
                          } else
                            (
                              document.cancelFullScreen ||
                              document.exitFullscreen
                            ).call(document);
                      },
                    },
                    {
                      key: "toggle",
                      value: function () {
                        this.active ? this.exit() : this.enter();
                      },
                    },
                    {
                      key: "usingNative",
                      get: function () {
                        return d["native"] && !this.forceFallback;
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return (
                          (d["native"] ||
                            this.player.config.fullscreen.fallback) &&
                          this.player.config.fullscreen.enabled &&
                          this.player.supported.ui &&
                          this.player.isVideo
                        );
                      },
                    },
                    {
                      key: "active",
                      get: function () {
                        if (!this.enabled) return !1;
                        if (!d["native"] || this.forceFallback)
                          return vc(
                            this.target,
                            this.player.config.classNames.fullscreen.fallback
                          );
                        var b = this.prefix
                          ? document[
                              ""
                                .concat(this.prefix)
                                .concat(this.property, "Element")
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
                        return Sb && this.player.config.fullscreen.iosNative
                          ? this.player.media
                          : this.player.elements.fullscreen ||
                              this.player.elements.container;
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
                        if (Xa(document.exitFullscreen)) return "";
                        var b = "";
                        return (
                          ["webkit", "moz", "ms"].some(function (e) {
                            return !(
                              (!Xa(document["".concat(e, "ExitFullscreen")]) &&
                                !Xa(
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
                d
              );
            })(),
            Ta = {
              addStyleHook: function () {
                wa(
                  this.elements.container,
                  this.config.selectors.container.replace(".", ""),
                  !0
                );
                wa(
                  this.elements.container,
                  this.config.classNames.uiSupported,
                  this.supported.ui
                );
              },
              toggleNativeControls: function () {
                0 < arguments.length &&
                void 0 !== arguments[0] &&
                arguments[0] &&
                this.isHTML5
                  ? this.media.setAttribute("controls", "")
                  : this.media.removeAttribute("controls");
              },
              build: function () {
                var d = this;
                if ((this.listeners.media(), !this.supported.ui))
                  return (
                    this.debug.warn(
                      "Basic support only for "
                        .concat(this.provider, " ")
                        .concat(this.type)
                    ),
                    void Ta.toggleNativeControls.call(this, !0)
                  );
                da(this.elements.controls) ||
                  (X.inject.call(this), this.listeners.controls());
                Ta.toggleNativeControls.call(this);
                this.isHTML5 && Ba.setup.call(this);
                this.speed = this.quality = this.loop = this.muted = this.volume = null;
                X.updateVolume.call(this);
                X.timeUpdate.call(this);
                Ta.checkPlaying.call(this);
                wa(
                  this.elements.container,
                  this.config.classNames.pip.supported,
                  Sa.pip && this.isHTML5 && this.isVideo
                );
                wa(
                  this.elements.container,
                  this.config.classNames.airplay.supported,
                  Sa.airplay && this.isHTML5
                );
                wa(this.elements.container, this.config.classNames.isIos, Sb);
                wa(
                  this.elements.container,
                  this.config.classNames.isTouch,
                  this.touch
                );
                this.ready = !0;
                setTimeout(function () {
                  qa.call(d, d.media, "ready");
                }, 0);
                Ta.setTitle.call(this);
                this.poster &&
                  Ta.setPoster
                    .call(this, this.poster, !1)
                    ["catch"](function () {});
                this.config.duration && X.durationUpdate.call(this);
              },
              setTitle: function () {
                var d = db("play", this.config);
                if (
                  (fb(this.config.title) &&
                    !ka(this.config.title) &&
                    (d += ", ".concat(this.config.title)),
                  Array.from(this.elements.buttons.play || []).forEach(
                    function (r) {
                      r.setAttribute("aria-label", d);
                    }
                  ),
                  this.isEmbed)
                ) {
                  var b = gb.call(this, "iframe");
                  if (da(b)) {
                    var e = ka(this.config.title) ? "video" : this.config.title,
                      k = db("frameTitle", this.config);
                    b.setAttribute("title", k.replace("{title}", e));
                  }
                }
              },
              togglePoster: function (d) {
                wa(
                  this.elements.container,
                  this.config.classNames.posterEnabled,
                  d
                );
              },
              setPoster: function (d) {
                var b = this;
                return (1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  !arguments[1]) ||
                  !this.poster
                  ? (this.media.setAttribute("data-poster", d),
                    this.elements.poster.removeAttribute("hidden"),
                    fd
                      .call(this)
                      .then(function () {
                        return Ac(d);
                      })
                      ["catch"](function (e) {
                        throw (
                          (d === b.poster && Ta.togglePoster.call(b, !1), e)
                        );
                      })
                      .then(function () {
                        if (d !== b.poster)
                          throw Error(
                            "setPoster cancelled by later call to setPoster"
                          );
                      })
                      .then(function () {
                        return (
                          Object.assign(b.elements.poster.style, {
                            backgroundImage: "url('".concat(d, "')"),
                            backgroundSize: "",
                          }),
                          Ta.togglePoster.call(b, !0),
                          d
                        );
                      }))
                  : Promise.reject(Error("Poster already set"));
              },
              checkPlaying: function (d) {
                var b = this;
                wa(
                  this.elements.container,
                  this.config.classNames.playing,
                  this.playing
                );
                wa(
                  this.elements.container,
                  this.config.classNames.paused,
                  this.paused
                );
                wa(
                  this.elements.container,
                  this.config.classNames.stopped,
                  this.stopped
                );
                Array.from(this.elements.buttons.play || []).forEach(function (
                  e
                ) {
                  Object.assign(e, { pressed: b.playing });
                  e.setAttribute(
                    "aria-label",
                    db(b.playing ? "pause" : "play", b.config)
                  );
                });
                (ma(d, Event) && "timeupdate" === d.type) ||
                  Ta.toggleControls.call(this);
              },
              checkLoading: function (d) {
                var b = this;
                this.loading = ["stalled", "waiting"].includes(d.type);
                clearTimeout(this.timers.loading);
                this.timers.loading = setTimeout(
                  function () {
                    wa(
                      b.elements.container,
                      b.config.classNames.loading,
                      b.loading
                    );
                    Ta.toggleControls.call(b);
                  },
                  this.loading ? 250 : 0
                );
              },
              toggleControls: function (d) {
                var b = this.elements.controls;
                if (b && this.config.hideControls) {
                  var e = this.touch && this.lastSeekTime + 2e3 > Date.now();
                  this.toggleControls(
                    !!(
                      d ||
                      this.loading ||
                      this.paused ||
                      b.pressed ||
                      b.hover ||
                      e
                    )
                  );
                }
              },
              migrateStyles: function () {
                var d = this;
                Object.values(Ja({}, this.media.style))
                  .filter(function (b) {
                    return !ka(b) && fb(b) && b.startsWith("--plyr");
                  })
                  .forEach(function (b) {
                    d.elements.container.style.setProperty(
                      b,
                      d.media.style.getPropertyValue(b)
                    );
                    d.media.style.removeProperty(b);
                  });
                ka(this.media.style) && this.media.removeAttribute("style");
              },
            },
            qd = (function () {
              function d(b) {
                Q(this, d);
                this.player = b;
                this.lastKeyDown = this.focusTimer = this.lastKey = null;
                this.handleKey = this.handleKey.bind(this);
                this.toggleMenu = this.toggleMenu.bind(this);
                this.setTabFocus = this.setTabFocus.bind(this);
                this.firstTouch = this.firstTouch.bind(this);
              }
              return (
                Ha(d, [
                  {
                    key: "handleKey",
                    value: function (b) {
                      var e = this.player,
                        k = e.elements,
                        r = b.keyCode ? b.keyCode : b.which,
                        t = "keydown" === b.type,
                        u = t && r === this.lastKey;
                      if (
                        !(b.altKey || b.ctrlKey || b.metaKey || b.shiftKey) &&
                        Za(r)
                      )
                        if (t) {
                          t = document.activeElement;
                          if (da(t)) {
                            var y = e.config.selectors.editable;
                            if (
                              (t !== k.inputs.seek && $b(t, y)) ||
                              (32 === b.which &&
                                $b(t, 'button, [role^="menuitem"]'))
                            )
                              return;
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
                              u ||
                                (e.currentTime = (e.duration / 10) * (r - 48));
                              break;
                            case 32:
                            case 75:
                              u || Ya(e.togglePlay());
                              break;
                            case 38:
                              e.increaseVolume(0.1);
                              break;
                            case 40:
                              e.decreaseVolume(0.1);
                              break;
                            case 77:
                              u || (e.muted = !e.muted);
                              break;
                            case 39:
                              e.forward();
                              break;
                            case 37:
                              e.rewind();
                              break;
                            case 70:
                              e.fullscreen.toggle();
                              break;
                            case 67:
                              u || e.toggleCaptions();
                              break;
                            case 76:
                              e.loop = !e.loop;
                          }
                          27 === r &&
                            !e.fullscreen.usingNative &&
                            e.fullscreen.active &&
                            e.fullscreen.toggle();
                          this.lastKey = r;
                        } else this.lastKey = null;
                    },
                  },
                  {
                    key: "toggleMenu",
                    value: function (b) {
                      X.toggleMenu.call(this.player, b);
                    },
                  },
                  {
                    key: "firstTouch",
                    value: function () {
                      var b = this.player,
                        e = b.elements;
                      b.touch = !0;
                      wa(e.container, b.config.classNames.isTouch, !0);
                    },
                  },
                  {
                    key: "setTabFocus",
                    value: function (b) {
                      var e = this.player,
                        k = e.elements;
                      if (
                        (clearTimeout(this.focusTimer),
                        "keydown" !== b.type || 9 === b.which)
                      ) {
                        "keydown" === b.type &&
                          (this.lastKeyDown = b.timeStamp);
                        var r,
                          t = 20 >= b.timeStamp - this.lastKeyDown;
                        ("focus" !== b.type || t) &&
                          ((r = e.config.classNames.tabFocus),
                          wa(mc.call(e, ".".concat(r)), r, !1),
                          "focusout" !== b.type &&
                            (this.focusTimer = setTimeout(function () {
                              k.container.contains(document.activeElement) &&
                                wa(
                                  document.activeElement,
                                  e.config.classNames.tabFocus,
                                  !0
                                );
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
                        e = this.player;
                      e.config.keyboard.global &&
                        ac.call(
                          e,
                          window,
                          "keydown keyup",
                          this.handleKey,
                          b,
                          !1
                        );
                      ac.call(e, document.body, "click", this.toggleMenu, b);
                      yc.call(e, document.body, "touchstart", this.firstTouch);
                      ac.call(
                        e,
                        document.body,
                        "keydown focus blur focusout",
                        this.setTabFocus,
                        b,
                        !1,
                        !0
                      );
                    },
                  },
                  {
                    key: "container",
                    value: function () {
                      var b = this.player,
                        e = b.config,
                        k = b.elements,
                        r = b.timers;
                      !e.keyboard.global &&
                        e.keyboard.focused &&
                        xa.call(
                          b,
                          k.container,
                          "keydown keyup",
                          this.handleKey,
                          !1
                        );
                      xa.call(
                        b,
                        k.container,
                        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                        function (y) {
                          var M = k.controls;
                          M &&
                            "enterfullscreen" === y.type &&
                            ((M.pressed = !1), (M.hover = !1));
                          M = 0;
                          ["touchstart", "touchmove", "mousemove"].includes(
                            y.type
                          ) &&
                            (Ta.toggleControls.call(b, !0),
                            (M = b.touch ? 3e3 : 2e3));
                          clearTimeout(r.controls);
                          r.controls = setTimeout(function () {
                            return Ta.toggleControls.call(b, !1);
                          }, M);
                        }
                      );
                      var t = function (y) {
                          if (!y) return Mb.call(b);
                          y = k.container.getBoundingClientRect();
                          var M = y.height;
                          return Mb.call(b, "".concat(y.width, ":").concat(M));
                        },
                        u = function () {
                          clearTimeout(r.resized);
                          r.resized = setTimeout(t, 50);
                        };
                      xa.call(
                        b,
                        k.container,
                        "enterfullscreen exitfullscreen",
                        function (y) {
                          var M = b.fullscreen,
                            ha = M.usingNative;
                          M.target !== k.container ||
                            (!b.isEmbed && ka(b.config.ratio)) ||
                            ((y = "enterfullscreen" === y.type),
                            (M = t(y)),
                            M.padding,
                            (function (ba, ua, Oa) {
                              if (b.isVimeo && !b.config.vimeo.premium) {
                                ua = b.elements.wrapper.firstChild;
                                ba = m(ba, 2)[1];
                                var ia = m(oc.call(b), 2),
                                  T = ia[0];
                                ia = ia[1];
                                ua.style.maxWidth = Oa
                                  ? "".concat((ba / ia) * T, "px")
                                  : null;
                                ua.style.margin = Oa ? "0 auto" : null;
                              }
                            })(M.ratio, 0, y),
                            y &&
                              setTimeout(function () {
                                return G(k.container);
                              }, 100),
                            ha ||
                              (y
                                ? xa.call(b, window, "resize", u)
                                : xc.call(b, window, "resize", u)));
                        }
                      );
                    },
                  },
                  {
                    key: "media",
                    value: function () {
                      var b = this,
                        e = this.player,
                        k = e.elements;
                      if (
                        (xa.call(
                          e,
                          e.media,
                          "timeupdate seeking seeked",
                          function (u) {
                            return X.timeUpdate.call(e, u);
                          }
                        ),
                        xa.call(
                          e,
                          e.media,
                          "durationchange loadeddata loadedmetadata",
                          function (u) {
                            return X.durationUpdate.call(e, u);
                          }
                        ),
                        xa.call(e, e.media, "ended", function () {
                          e.isHTML5 &&
                            e.isVideo &&
                            e.config.resetOnEnd &&
                            (e.restart(), e.pause());
                        }),
                        xa.call(
                          e,
                          e.media,
                          "progress playing seeking seeked",
                          function (u) {
                            return X.updateProgress.call(e, u);
                          }
                        ),
                        xa.call(e, e.media, "volumechange", function (u) {
                          return X.updateVolume.call(e, u);
                        }),
                        xa.call(
                          e,
                          e.media,
                          "playing play pause ended emptied timeupdate",
                          function (u) {
                            return Ta.checkPlaying.call(e, u);
                          }
                        ),
                        xa.call(
                          e,
                          e.media,
                          "waiting canplay seeked playing",
                          function (u) {
                            return Ta.checkLoading.call(e, u);
                          }
                        ),
                        e.supported.ui && e.config.clickToPlay && !e.isAudio)
                      ) {
                        var r = gb.call(
                          e,
                          ".".concat(e.config.classNames.video)
                        );
                        if (!da(r)) return;
                        xa.call(e, k.container, "click", function (u) {
                          ([k.container, r].includes(u.target) ||
                            r.contains(u.target)) &&
                            ((e.touch && e.config.hideControls) ||
                              (e.ended
                                ? (b.proxy(u, e.restart, "restart"),
                                  b.proxy(
                                    u,
                                    function () {
                                      Ya(e.play());
                                    },
                                    "play"
                                  ))
                                : b.proxy(
                                    u,
                                    function () {
                                      Ya(e.togglePlay());
                                    },
                                    "play"
                                  )));
                        });
                      }
                      e.supported.ui &&
                        e.config.disableContextMenu &&
                        xa.call(
                          e,
                          k.wrapper,
                          "contextmenu",
                          function (u) {
                            u.preventDefault();
                          },
                          !1
                        );
                      xa.call(e, e.media, "volumechange", function () {
                        e.storage.set({ volume: e.volume, muted: e.muted });
                      });
                      xa.call(e, e.media, "ratechange", function () {
                        X.updateSetting.call(e, "speed");
                        e.storage.set({ speed: e.speed });
                      });
                      xa.call(e, e.media, "qualitychange", function (u) {
                        X.updateSetting.call(
                          e,
                          "quality",
                          null,
                          u.detail.quality
                        );
                      });
                      xa.call(e, e.media, "ready qualitychange", function () {
                        X.setDownloadUrl.call(e);
                      });
                      var t = e.config.events
                        .concat(["keyup", "keydown"])
                        .join(" ");
                      xa.call(e, e.media, t, function (u) {
                        var y = u.detail;
                        y = void 0 === y ? {} : y;
                        "error" === u.type && (y = e.media.error);
                        qa.call(e, k.container, u.type, !0, y);
                      });
                    },
                  },
                  {
                    key: "proxy",
                    value: function (b, e, k) {
                      var r = this.player;
                      k = r.config.listeners[k];
                      var t = !0;
                      Xa(k) && (t = k.call(r, b));
                      !1 !== t && Xa(e) && e.call(r, b);
                    },
                  },
                  {
                    key: "bind",
                    value: function (b, e, k, r) {
                      var t = this,
                        u =
                          !(4 < arguments.length && void 0 !== arguments[4]) ||
                          arguments[4],
                        y = this.player,
                        M = Xa(y.config.listeners[r]);
                      xa.call(
                        y,
                        b,
                        e,
                        function (ha) {
                          return t.proxy(ha, k, r);
                        },
                        u && !M
                      );
                    },
                  },
                  {
                    key: "controls",
                    value: function () {
                      var b = this,
                        e = this.player,
                        k = e.elements,
                        r = na ? "change" : "input";
                      if (
                        (k.buttons.play &&
                          Array.from(k.buttons.play).forEach(function (u) {
                            b.bind(
                              u,
                              "click",
                              function () {
                                Ya(e.togglePlay());
                              },
                              "play"
                            );
                          }),
                        this.bind(
                          k.buttons.restart,
                          "click",
                          e.restart,
                          "restart"
                        ),
                        this.bind(
                          k.buttons.rewind,
                          "click",
                          function () {
                            e.lastSeekTime = Date.now();
                            e.rewind();
                          },
                          "rewind"
                        ),
                        this.bind(
                          k.buttons.fastForward,
                          "click",
                          function () {
                            e.lastSeekTime = Date.now();
                            e.forward();
                          },
                          "fastForward"
                        ),
                        this.bind(
                          k.buttons.mute,
                          "click",
                          function () {
                            e.muted = !e.muted;
                          },
                          "mute"
                        ),
                        this.bind(k.buttons.captions, "click", function () {
                          return e.toggleCaptions();
                        }),
                        this.bind(
                          k.buttons.download,
                          "click",
                          function () {
                            qa.call(e, e.media, "download");
                          },
                          "download"
                        ),
                        this.bind(
                          k.buttons.fullscreen,
                          "click",
                          function () {
                            e.fullscreen.toggle();
                          },
                          "fullscreen"
                        ),
                        this.bind(
                          k.buttons.pip,
                          "click",
                          function () {
                            e.pip = "toggle";
                          },
                          "pip"
                        ),
                        this.bind(
                          k.buttons.airplay,
                          "click",
                          e.airplay,
                          "airplay"
                        ),
                        this.bind(
                          k.buttons.settings,
                          "click",
                          function (u) {
                            u.stopPropagation();
                            u.preventDefault();
                            X.toggleMenu.call(e, u);
                          },
                          null,
                          !1
                        ),
                        this.bind(
                          k.buttons.settings,
                          "keyup",
                          function (u) {
                            var y = u.which;
                            [13, 32].includes(y) &&
                              (13 !== y
                                ? (u.preventDefault(),
                                  u.stopPropagation(),
                                  X.toggleMenu.call(e, u))
                                : X.focusFirstMenuItem.call(e, null, !0));
                          },
                          null,
                          !1
                        ),
                        this.bind(k.settings.menu, "keydown", function (u) {
                          27 === u.which && X.toggleMenu.call(e, u);
                        }),
                        this.bind(
                          k.inputs.seek,
                          "mousedown mousemove",
                          function (u) {
                            var y = k.progress.getBoundingClientRect();
                            u.currentTarget.setAttribute(
                              "seek-value",
                              (100 / y.width) * (u.pageX - y.left)
                            );
                          }
                        ),
                        this.bind(
                          k.inputs.seek,
                          "mousedown mouseup keydown keyup touchstart touchend",
                          function (u) {
                            var y = u.currentTarget,
                              M = u.keyCode ? u.keyCode : u.which;
                            (ma(u, KeyboardEvent) && 39 !== M && 37 !== M) ||
                              ((e.lastSeekTime = Date.now()),
                              (M = y.hasAttribute("play-on-seeked")),
                              (u = ["mouseup", "touchend", "keyup"].includes(
                                u.type
                              )),
                              M && u
                                ? (y.removeAttribute("play-on-seeked"),
                                  Ya(e.play()))
                                : !u &&
                                  e.playing &&
                                  (y.setAttribute("play-on-seeked", ""),
                                  e.pause()));
                          }
                        ),
                        Sb)
                      ) {
                        var t = mc.call(e, 'input[type="range"]');
                        Array.from(t).forEach(function (u) {
                          return b.bind(u, r, function (y) {
                            return G(y.target);
                          });
                        });
                      }
                      this.bind(
                        k.inputs.seek,
                        r,
                        function (u) {
                          u = u.currentTarget;
                          var y = u.getAttribute("seek-value");
                          ka(y) && (y = u.value);
                          u.removeAttribute("seek-value");
                          e.currentTime = (y / u.max) * e.duration;
                        },
                        "seek"
                      );
                      this.bind(
                        k.progress,
                        "mouseenter mouseleave mousemove",
                        function (u) {
                          return X.updateSeekTooltip.call(e, u);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mousemove touchmove",
                        function (u) {
                          var y = e.previewThumbnails;
                          y && y.loaded && y.startMove(u);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mouseleave touchend click",
                        function () {
                          var u = e.previewThumbnails;
                          u && u.loaded && u.endMove(!1, !0);
                        }
                      );
                      this.bind(
                        k.progress,
                        "mousedown touchstart",
                        function (u) {
                          var y = e.previewThumbnails;
                          y && y.loaded && y.startScrubbing(u);
                        }
                      );
                      this.bind(k.progress, "mouseup touchend", function (u) {
                        var y = e.previewThumbnails;
                        y && y.loaded && y.endScrubbing(u);
                      });
                      ed &&
                        Array.from(mc.call(e, 'input[type="range"]')).forEach(
                          function (u) {
                            b.bind(u, "input", function (y) {
                              return X.updateRangeFill.call(e, y.target);
                            });
                          }
                        );
                      e.config.toggleInvert &&
                        !da(k.display.duration) &&
                        this.bind(k.display.currentTime, "click", function () {
                          0 !== e.currentTime &&
                            ((e.config.invertTime = !e.config.invertTime),
                            X.timeUpdate.call(e));
                        });
                      this.bind(
                        k.inputs.volume,
                        r,
                        function (u) {
                          e.volume = u.target.value;
                        },
                        "volume"
                      );
                      this.bind(
                        k.controls,
                        "mouseenter mouseleave",
                        function (u) {
                          k.controls.hover =
                            !e.touch && "mouseenter" === u.type;
                        }
                      );
                      k.fullscreen &&
                        Array.from(k.fullscreen.children)
                          .filter(function (u) {
                            return !u.contains(k.container);
                          })
                          .forEach(function (u) {
                            b.bind(u, "mouseenter mouseleave", function (y) {
                              k.controls.hover =
                                !e.touch && "mouseenter" === y.type;
                            });
                          });
                      this.bind(
                        k.controls,
                        "mousedown mouseup touchstart touchend touchcancel",
                        function (u) {
                          k.controls.pressed = [
                            "mousedown",
                            "touchstart",
                          ].includes(u.type);
                        }
                      );
                      this.bind(k.controls, "focusin", function () {
                        var u = e.config,
                          y = e.timers;
                        wa(k.controls, u.classNames.noTransition, !0);
                        Ta.toggleControls.call(e, !0);
                        setTimeout(function () {
                          wa(k.controls, u.classNames.noTransition, !1);
                        }, 0);
                        var M = b.touch ? 3e3 : 4e3;
                        clearTimeout(y.controls);
                        y.controls = setTimeout(function () {
                          return Ta.toggleControls.call(e, !1);
                        }, M);
                      });
                      this.bind(
                        k.inputs.volume,
                        "wheel",
                        function (u) {
                          var y = u.webkitDirectionInvertedFromDevice,
                            M = m(
                              [u.deltaX, -u.deltaY].map(function (ba) {
                                return y ? -ba : ba;
                              }),
                              2
                            ),
                            ha = M[0];
                          M = M[1];
                          ha = Math.sign(Math.abs(ha) > Math.abs(M) ? ha : M);
                          e.increaseVolume(ha / 50);
                          M = e.media.volume;
                          ((1 === ha && 1 > M) || (-1 === ha && 0 < M)) &&
                            u.preventDefault();
                        },
                        "volume",
                        !1
                      );
                    },
                  },
                ]),
                d
              );
            })();
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== I || ("undefined" != typeof self && self);
          var rd = (function (d, b) {
              return (
                (function (e, k) {
                  e.exports = (function () {
                    function r(ia, T) {
                      if (ia) {
                        var pa = Oa[ia];
                        if (((ua[ia] = T), pa))
                          for (; pa.length; ) pa[0](ia, T), pa.splice(0, 1);
                      }
                    }
                    function t(ia, T) {
                      ia.call && (ia = { success: ia });
                      T.length ? (ia.error || ha)(T) : (ia.success || ha)(ia);
                    }
                    function u(ia, T, pa, Da) {
                      var La,
                        ra,
                        Pa = document,
                        hb = pa.async,
                        lb = (pa.numRetries || 0) + 1,
                        xb = pa.before || ha,
                        rc = ia.replace(/[\?|#].*$/, ""),
                        Nc = ia.replace(/^(css|img)!/, "");
                      Da = Da || 0;
                      /(^css!|\.css$)/.test(rc)
                        ? (((ra = Pa.createElement("link")).rel = "stylesheet"),
                          (ra.href = Nc),
                          (La = "hideFocus" in ra) &&
                            ra.relList &&
                            ((La = 0), (ra.rel = "preload"), (ra.as = "style")))
                        : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(rc)
                        ? ((ra = Pa.createElement("img")).src = Nc)
                        : (((ra = Pa.createElement("script")).src = ia),
                          (ra.async = void 0 === hb || hb));
                      ra.onload = ra.onerror = ra.onbeforeload = function (od) {
                        var Oc = od.type[0];
                        if (La)
                          try {
                            ra.sheet.cssText.length || (Oc = "e");
                          } catch (pd) {
                            18 != pd.code && (Oc = "e");
                          }
                        if ("e" == Oc) {
                          if ((Da += 1) < lb) return u(ia, T, pa, Da);
                        } else if ("preload" == ra.rel && "style" == ra.as)
                          return (ra.rel = "stylesheet");
                        T(ia, Oc, od.defaultPrevented);
                      };
                      !1 !== xb(ia, ra) && Pa.head.appendChild(ra);
                    }
                    function y(ia, T, pa) {
                      var Da,
                        La = (ia = ia.push ? ia : [ia]).length,
                        ra = La,
                        Pa = [];
                      var hb = function (lb, xb, rc) {
                        if (("e" == xb && Pa.push(lb), "b" == xb)) {
                          if (!rc) return;
                          Pa.push(lb);
                        }
                        --La || T(Pa);
                      };
                      for (Da = 0; Da < ra; Da++) u(ia[Da], hb, pa);
                    }
                    function M(ia, T, pa) {
                      function Da(Pa, hb) {
                        y(
                          ia,
                          function (lb) {
                            t(ra, lb);
                            Pa && t({ success: Pa, error: hb }, lb);
                            r(La, lb);
                          },
                          ra
                        );
                      }
                      var La, ra;
                      if (
                        (T && T.trim && (La = T),
                        (ra = (La ? pa : T) || {}),
                        La)
                      ) {
                        if (La in ba) throw "LoadJS";
                        ba[La] = !0;
                      }
                      if (ra.returnPromise) return new Promise(Da);
                      Da();
                    }
                    var ha = function () {},
                      ba = {},
                      ua = {},
                      Oa = {};
                    return (
                      (M.ready = function (ia, T) {
                        return (
                          (function (pa, Da) {
                            pa = pa.push ? pa : [pa];
                            var La,
                              ra,
                              Pa = [],
                              hb = pa.length,
                              lb = hb;
                            for (
                              La = function (rc, Nc) {
                                Nc.length && Pa.push(rc);
                                --lb || Da(Pa);
                              };
                              hb--;

                            ) {
                              var xb = pa[hb];
                              (ra = ua[xb])
                                ? La(xb, ra)
                                : (Oa[xb] = Oa[xb] || []).push(La);
                            }
                          })(ia, function (pa) {
                            t(T, pa);
                          }),
                          M
                        );
                      }),
                      (M.done = function (ia) {
                        r(ia, []);
                      }),
                      (M.reset = function () {
                        ba = {};
                        ua = {};
                        Oa = {};
                      }),
                      (M.isDefined = function (ia) {
                        return ia in ba;
                      }),
                      M
                    );
                  })();
                })((b = { exports: {} })),
                b.exports
              );
            })(),
            wc = {
              setup: function () {
                var d = this;
                wa(d.elements.wrapper, d.config.classNames.embed, !0);
                d.options.speed = d.config.speed.options;
                Mb.call(d);
                Cb(window.Vimeo)
                  ? wc.ready.call(d)
                  : Eb(d.config.urls.vimeo.sdk)
                      .then(function () {
                        wc.ready.call(d);
                      })
                      ["catch"](function (b) {
                        d.debug.warn("Vimeo SDK (player.js) failed to load", b);
                      });
              },
              ready: function () {
                var d = this,
                  b = this,
                  e = b.config.vimeo,
                  k = e.premium,
                  r = e.referrerPolicy,
                  t = (function (T, pa) {
                    if (null == T) return {};
                    var Da;
                    if (null == T) var La = {};
                    else {
                      La = {};
                      var ra = Object.keys(T);
                      for (Da = 0; Da < ra.length; Da++) {
                        var Pa = ra[Da];
                        0 <= pa.indexOf(Pa) || (La[Pa] = T[Pa]);
                      }
                    }
                    if (Object.getOwnPropertySymbols)
                      for (
                        ra = Object.getOwnPropertySymbols(T), Da = 0;
                        Da < ra.length;
                        Da++
                      )
                        (Pa = ra[Da]),
                          0 <= pa.indexOf(Pa) ||
                            (Object.prototype.propertyIsEnumerable.call(
                              T,
                              Pa
                            ) &&
                              (La[Pa] = T[Pa]));
                    return La;
                  })(e, ["premium", "referrerPolicy"]);
                k && Object.assign(t, { controls: !1, sidedock: !1 });
                t = Gb(
                  Ja(
                    {
                      loop: b.config.loop.active,
                      autoplay: b.autoplay,
                      muted: b.muted,
                      gesture: "media",
                      playsinline: !this.config.fullscreen.iosNative,
                    },
                    t
                  )
                );
                var u = b.media.getAttribute("src");
                ka(u) &&
                  (u = b.media.getAttribute(b.config.attributes.embed.id));
                var y;
                u = ka((y = u))
                  ? null
                  : Za(Number(y))
                  ? y
                  : y.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                  ? RegExp.$2
                  : y;
                y = Y("iframe");
                t = Nb(b.config.urls.vimeo.iframe, u, t);
                (y.setAttribute("src", t),
                y.setAttribute("allowfullscreen", ""),
                y.setAttribute(
                  "allow",
                  "autoplay,fullscreen,picture-in-picture"
                ),
                ka(r) || y.setAttribute("referrerPolicy", r),
                k || !e.customControls)
                  ? (y.setAttribute("data-poster", b.poster),
                    (b.media = Kb(y, b.media)))
                  : ((k = Y("div", {
                      class: b.config.classNames.embedContainer,
                      "data-poster": b.poster,
                    })),
                    k.appendChild(y),
                    (b.media = Kb(k, b.media)));
                e.customControls ||
                  dc(Nb(b.config.urls.vimeo.api, t)).then(function (T) {
                    !ka(T) &&
                      T.thumbnail_url &&
                      Ta.setPoster
                        .call(b, T.thumbnail_url)
                        ["catch"](function () {});
                  });
                b.embed = new window.Vimeo.Player(y, {
                  autopause: b.config.autopause,
                  muted: b.muted,
                });
                b.media.paused = !0;
                b.media.currentTime = 0;
                b.supported.ui && b.embed.disableTextTrack();
                b.media.play = function () {
                  return nc.call(b, !0), b.embed.play();
                };
                b.media.pause = function () {
                  return nc.call(b, !1), b.embed.pause();
                };
                b.media.stop = function () {
                  b.pause();
                  b.currentTime = 0;
                };
                var M = b.media.currentTime;
                Object.defineProperty(b.media, "currentTime", {
                  get: function () {
                    return M;
                  },
                  set: function (T) {
                    var pa = b.embed,
                      Da = b.media,
                      La = b.volume,
                      ra = b.paused && !pa.hasPlayed;
                    Da.seeking = !0;
                    qa.call(b, Da, "seeking");
                    Promise.resolve(ra && pa.setVolume(0))
                      .then(function () {
                        return pa.setCurrentTime(T);
                      })
                      .then(function () {
                        return ra && pa.pause();
                      })
                      .then(function () {
                        return ra && pa.setVolume(La);
                      })
                      ["catch"](function () {});
                  },
                });
                var ha = b.config.speed.selected;
                Object.defineProperty(b.media, "playbackRate", {
                  get: function () {
                    return ha;
                  },
                  set: function (T) {
                    b.embed
                      .setPlaybackRate(T)
                      .then(function () {
                        ha = T;
                        qa.call(b, b.media, "ratechange");
                      })
                      ["catch"](function () {
                        b.options.speed = [1];
                      });
                  },
                });
                var ba = b.config.volume;
                Object.defineProperty(b.media, "volume", {
                  get: function () {
                    return ba;
                  },
                  set: function (T) {
                    b.embed.setVolume(T).then(function () {
                      ba = T;
                      qa.call(b, b.media, "volumechange");
                    });
                  },
                });
                var ua = b.config.muted;
                Object.defineProperty(b.media, "muted", {
                  get: function () {
                    return ua;
                  },
                  set: function (T) {
                    var pa = !!wb(T) && T;
                    b.embed
                      .setVolume(pa ? 0 : b.config.volume)
                      .then(function () {
                        ua = pa;
                        qa.call(b, b.media, "volumechange");
                      });
                  },
                });
                var Oa,
                  ia = b.config.loop;
                Object.defineProperty(b.media, "loop", {
                  get: function () {
                    return ia;
                  },
                  set: function (T) {
                    var pa = wb(T) ? T : b.config.loop.active;
                    b.embed.setLoop(pa).then(function () {
                      ia = pa;
                    });
                  },
                });
                b.embed
                  .getVideoUrl()
                  .then(function (T) {
                    Oa = T;
                    X.setDownloadUrl.call(b);
                  })
                  ["catch"](function (T) {
                    d.debug.warn(T);
                  });
                Object.defineProperty(b.media, "currentSrc", {
                  get: function () {
                    return Oa;
                  },
                });
                Object.defineProperty(b.media, "ended", {
                  get: function () {
                    return b.currentTime === b.duration;
                  },
                });
                Promise.all([
                  b.embed.getVideoWidth(),
                  b.embed.getVideoHeight(),
                ]).then(function (T) {
                  T = m(T, 2);
                  b.embed.ratio = [T[0], T[1]];
                  Mb.call(d);
                });
                b.embed.setAutopause(b.config.autopause).then(function (T) {
                  b.config.autopause = T;
                });
                b.embed.getVideoTitle().then(function (T) {
                  b.config.title = T;
                  Ta.setTitle.call(d);
                });
                b.embed.getCurrentTime().then(function (T) {
                  M = T;
                  qa.call(b, b.media, "timeupdate");
                });
                b.embed.getDuration().then(function (T) {
                  b.media.duration = T;
                  qa.call(b, b.media, "durationchange");
                });
                b.embed.getTextTracks().then(function (T) {
                  b.media.textTracks = T;
                  Ba.setup.call(b);
                });
                b.embed.on("cuechange", function (T) {
                  T = T.cues;
                  T = (void 0 === T ? [] : T).map(function (pa) {
                    pa = pa.text;
                    var Da = document.createDocumentFragment(),
                      La = document.createElement("div");
                    return (
                      Da.appendChild(La),
                      (La.innerHTML = pa),
                      Da.firstChild.innerText
                    );
                  });
                  Ba.updateCues.call(b, T);
                });
                b.embed.on("loaded", function () {
                  b.embed.getPaused().then(function (T) {
                    nc.call(b, !T);
                    T || qa.call(b, b.media, "playing");
                  });
                  da(b.embed.element) &&
                    b.supported.ui &&
                    b.embed.element.setAttribute("tabindex", -1);
                });
                b.embed.on("bufferstart", function () {
                  qa.call(b, b.media, "waiting");
                });
                b.embed.on("bufferend", function () {
                  qa.call(b, b.media, "playing");
                });
                b.embed.on("play", function () {
                  nc.call(b, !0);
                  qa.call(b, b.media, "playing");
                });
                b.embed.on("pause", function () {
                  nc.call(b, !1);
                });
                b.embed.on("timeupdate", function (T) {
                  b.media.seeking = !1;
                  M = T.seconds;
                  qa.call(b, b.media, "timeupdate");
                });
                b.embed.on("progress", function (T) {
                  b.media.buffered = T.percent;
                  qa.call(b, b.media, "progress");
                  1 === parseInt(T.percent, 10) &&
                    qa.call(b, b.media, "canplaythrough");
                  b.embed.getDuration().then(function (pa) {
                    pa !== b.media.duration &&
                      ((b.media.duration = pa),
                      qa.call(b, b.media, "durationchange"));
                  });
                });
                b.embed.on("seeked", function () {
                  b.media.seeking = !1;
                  qa.call(b, b.media, "seeked");
                });
                b.embed.on("ended", function () {
                  b.media.paused = !0;
                  qa.call(b, b.media, "ended");
                });
                b.embed.on("error", function (T) {
                  b.media.error = T;
                  qa.call(b, b.media, "error");
                });
                e.customControls &&
                  setTimeout(function () {
                    return Ta.build.call(b);
                  }, 0);
              },
            },
            bc = {
              setup: function () {
                var d = this;
                if (
                  (wa(this.elements.wrapper, this.config.classNames.embed, !0),
                  Cb(window.YT) && Xa(window.YT.Player))
                )
                  bc.ready.call(this);
                else {
                  var b = window.onYouTubeIframeAPIReady;
                  window.onYouTubeIframeAPIReady = function () {
                    Xa(b) && b();
                    bc.ready.call(d);
                  };
                  Eb(this.config.urls.youtube.sdk)["catch"](function (e) {
                    d.debug.warn("YouTube API failed to load", e);
                  });
                }
              },
              getTitle: function (d) {
                var b = this;
                dc(Nb(this.config.urls.youtube.api, d))
                  .then(function (e) {
                    if (Cb(e)) {
                      var k = e.height,
                        r = e.width;
                      b.config.title = e.title;
                      Ta.setTitle.call(b);
                      b.embed.ratio = [r, k];
                    }
                    Mb.call(b);
                  })
                  ["catch"](function () {
                    Mb.call(b);
                  });
              },
              ready: function () {
                var d = this,
                  b = d.config.youtube,
                  e = d.media && d.media.getAttribute("id");
                if (ka(e) || !e.startsWith("youtube-")) {
                  e = d.media.getAttribute("src");
                  ka(e) &&
                    (e = d.media.getAttribute(this.config.attributes.embed.id));
                  var k,
                    r,
                    t = ka((k = e))
                      ? null
                      : k.match(
                          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                        )
                      ? RegExp.$2
                      : k;
                  k = Y("div", {
                    id:
                      ((r = d.provider),
                      ""
                        .concat(r, "-")
                        .concat(Math.floor(1e4 * Math.random()))),
                    "data-poster": b.customControls ? d.poster : void 0,
                  });
                  if (((d.media = Kb(k, d.media)), b.customControls)) {
                    var u = function (y) {
                      return "https://i.ytimg.com/vi/"
                        .concat(t, "/")
                        .concat(y, "default.jpg");
                    };
                    Ac(u("maxres"), 121)
                      ["catch"](function () {
                        return Ac(u("sd"), 121);
                      })
                      ["catch"](function () {
                        return Ac(u("hq"));
                      })
                      .then(function (y) {
                        return Ta.setPoster.call(d, y.src);
                      })
                      .then(function (y) {
                        y.includes("maxres") ||
                          (d.elements.poster.style.backgroundSize = "cover");
                      })
                      ["catch"](function () {});
                  }
                  d.embed = new window.YT.Player(d.media, {
                    videoId: t,
                    host: b.noCookie
                      ? "https://www.youtube-nocookie.com"
                      : "http:" === window.location.protocol
                      ? "http://www.youtube.com"
                      : void 0,
                    playerVars: ca(
                      {},
                      {
                        autoplay: d.config.autoplay ? 1 : 0,
                        hl: d.config.hl,
                        controls: d.supported.ui && b.customControls ? 0 : 1,
                        disablekb: 1,
                        playsinline: d.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: d.captions.active ? 1 : 0,
                        cc_lang_pref: d.config.captions.language,
                        widget_referrer: window ? window.location.href : null,
                      },
                      b
                    ),
                    events: {
                      onError: function (y) {
                        d.media.error ||
                          ((y = y.data),
                          (d.media.error = {
                            code: y,
                            message:
                              {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players.",
                              }[y] || "An unknown error occured",
                          }),
                          qa.call(d, d.media, "error"));
                      },
                      onPlaybackRateChange: function (y) {
                        d.media.playbackRate = y.target.getPlaybackRate();
                        qa.call(d, d.media, "ratechange");
                      },
                      onReady: function (y) {
                        if (!Xa(d.media.play)) {
                          var M = y.target;
                          bc.getTitle.call(d, t);
                          d.media.play = function () {
                            ec.call(d, !0);
                            M.playVideo();
                          };
                          d.media.pause = function () {
                            ec.call(d, !1);
                            M.pauseVideo();
                          };
                          d.media.stop = function () {
                            M.stopVideo();
                          };
                          d.media.duration = M.getDuration();
                          d.media.paused = !0;
                          d.media.currentTime = 0;
                          Object.defineProperty(d.media, "currentTime", {
                            get: function () {
                              return Number(M.getCurrentTime());
                            },
                            set: function (ua) {
                              d.paused && !d.embed.hasPlayed && d.embed.mute();
                              d.media.seeking = !0;
                              qa.call(d, d.media, "seeking");
                              M.seekTo(ua);
                            },
                          });
                          Object.defineProperty(d.media, "playbackRate", {
                            get: function () {
                              return M.getPlaybackRate();
                            },
                            set: function (ua) {
                              M.setPlaybackRate(ua);
                            },
                          });
                          var ha = d.config.volume;
                          Object.defineProperty(d.media, "volume", {
                            get: function () {
                              return ha;
                            },
                            set: function (ua) {
                              ha = ua;
                              M.setVolume(100 * ha);
                              qa.call(d, d.media, "volumechange");
                            },
                          });
                          var ba = d.config.muted;
                          Object.defineProperty(d.media, "muted", {
                            get: function () {
                              return ba;
                            },
                            set: function (ua) {
                              ba = ua = wb(ua) ? ua : ba;
                              M[ua ? "mute" : "unMute"]();
                              M.setVolume(100 * ha);
                              qa.call(d, d.media, "volumechange");
                            },
                          });
                          Object.defineProperty(d.media, "currentSrc", {
                            get: function () {
                              return M.getVideoUrl();
                            },
                          });
                          Object.defineProperty(d.media, "ended", {
                            get: function () {
                              return d.currentTime === d.duration;
                            },
                          });
                          y = M.getAvailablePlaybackRates();
                          d.options.speed = y.filter(function (ua) {
                            return d.config.speed.options.includes(ua);
                          });
                          d.supported.ui &&
                            b.customControls &&
                            d.media.setAttribute("tabindex", -1);
                          qa.call(d, d.media, "timeupdate");
                          qa.call(d, d.media, "durationchange");
                          clearInterval(d.timers.buffering);
                          d.timers.buffering = setInterval(function () {
                            d.media.buffered = M.getVideoLoadedFraction();
                            (null === d.media.lastBuffered ||
                              d.media.lastBuffered < d.media.buffered) &&
                              qa.call(d, d.media, "progress");
                            d.media.lastBuffered = d.media.buffered;
                            1 === d.media.buffered &&
                              (clearInterval(d.timers.buffering),
                              qa.call(d, d.media, "canplaythrough"));
                          }, 200);
                          b.customControls &&
                            setTimeout(function () {
                              return Ta.build.call(d);
                            }, 50);
                        }
                      },
                      onStateChange: function (y) {
                        var M = y.target;
                        switch (
                          (clearInterval(d.timers.playing),
                          d.media.seeking &&
                            [1, 2].includes(y.data) &&
                            ((d.media.seeking = !1),
                            qa.call(d, d.media, "seeked")),
                          y.data)
                        ) {
                          case -1:
                            qa.call(d, d.media, "timeupdate");
                            d.media.buffered = M.getVideoLoadedFraction();
                            qa.call(d, d.media, "progress");
                            break;
                          case 0:
                            ec.call(d, !1);
                            d.media.loop
                              ? (M.stopVideo(), M.playVideo())
                              : qa.call(d, d.media, "ended");
                            break;
                          case 1:
                            b.customControls &&
                            !d.config.autoplay &&
                            d.media.paused &&
                            !d.embed.hasPlayed
                              ? d.media.pause()
                              : (ec.call(d, !0),
                                qa.call(d, d.media, "playing"),
                                (d.timers.playing = setInterval(function () {
                                  qa.call(d, d.media, "timeupdate");
                                }, 50)),
                                d.media.duration !== M.getDuration() &&
                                  ((d.media.duration = M.getDuration()),
                                  qa.call(d, d.media, "durationchange")));
                            break;
                          case 2:
                            d.muted || d.embed.unMute();
                            ec.call(d, !1);
                            break;
                          case 3:
                            qa.call(d, d.media, "waiting");
                        }
                        qa.call(d, d.elements.container, "statechange", !1, {
                          code: y.data,
                        });
                      },
                    },
                  });
                }
              },
            },
            bd = function () {
              this.media
                ? (wa(
                    this.elements.container,
                    this.config.classNames.type.replace("{0}", this.type),
                    !0
                  ),
                  wa(
                    this.elements.container,
                    this.config.classNames.provider.replace(
                      "{0}",
                      this.provider
                    ),
                    !0
                  ),
                  this.isEmbed &&
                    wa(
                      this.elements.container,
                      this.config.classNames.type.replace("{0}", "video"),
                      !0
                    ),
                  this.isVideo &&
                    ((this.elements.wrapper = Y("div", {
                      class: this.config.classNames.video,
                    })),
                    Ua(this.media, this.elements.wrapper),
                    (this.elements.poster = Y("div", {
                      class: this.config.classNames.poster,
                      hidden: "",
                    })),
                    this.elements.wrapper.appendChild(this.elements.poster)),
                  this.isHTML5
                    ? Xb.setup.call(this)
                    : this.isYouTube
                    ? bc.setup.call(this)
                    : this.isVimeo && wc.setup.call(this))
                : this.debug.warn("No media element found!");
            },
            sd = (function () {
              function d(b) {
                var e = this;
                Q(this, d);
                this.player = b;
                this.config = b.config.ads;
                this.initialized = this.playing = !1;
                this.elements = { container: null, displayContainer: null };
                this.cuePoints = this.loader = this.manager = null;
                this.events = {};
                this.countdownTimer = this.safetyTimer = null;
                this.managerPromise = new Promise(function (k, r) {
                  e.on("loaded", k);
                  e.on("error", r);
                });
                this.load();
              }
              return (
                Ha(d, [
                  {
                    key: "load",
                    value: function () {
                      var b = this;
                      this.enabled &&
                        (Cb(window.google) && Cb(window.google.ima)
                          ? this.ready()
                          : Eb(this.player.config.urls.googleIMA.sdk)
                              .then(function () {
                                b.ready();
                              })
                              ["catch"](function () {
                                b.trigger(
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
                        (this.manager && this.manager.destroy(),
                        this.elements.displayContainer &&
                          this.elements.displayContainer.destroy(),
                        this.elements.container.remove());
                      this.startSafetyTimer(12e3, "ready()");
                      this.managerPromise.then(function () {
                        b.clearSafetyTimer("onAdsManagerLoaded()");
                      });
                      this.listeners();
                      this.setupIMA();
                    },
                  },
                  {
                    key: "setupIMA",
                    value: function () {
                      var b = this;
                      this.elements.container = Y("div", {
                        class: this.player.config.classNames.ads,
                      });
                      this.player.elements.container.appendChild(
                        this.elements.container
                      );
                      google.ima.settings.setVpaidMode(
                        google.ima.ImaSdkSettings.VpaidMode.ENABLED
                      );
                      google.ima.settings.setLocale(
                        this.player.config.ads.language
                      );
                      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                        this.player.config.playsinline
                      );
                      this.elements.displayContainer = new google.ima.AdDisplayContainer(
                        this.elements.container,
                        this.player.media
                      );
                      this.loader = new google.ima.AdsLoader(
                        this.elements.displayContainer
                      );
                      this.loader.addEventListener(
                        google.ima.AdsManagerLoadedEvent.Type
                          .ADS_MANAGER_LOADED,
                        function (e) {
                          return b.onAdsManagerLoaded(e);
                        },
                        !1
                      );
                      this.loader.addEventListener(
                        google.ima.AdErrorEvent.Type.AD_ERROR,
                        function (e) {
                          return b.onAdError(e);
                        },
                        !1
                      );
                      this.requestAds();
                    },
                  },
                  {
                    key: "requestAds",
                    value: function () {
                      var b = this.player.elements.container;
                      try {
                        var e = new google.ima.AdsRequest();
                        e.adTagUrl = this.tagUrl;
                        e.linearAdSlotWidth = b.offsetWidth;
                        e.linearAdSlotHeight = b.offsetHeight;
                        e.nonLinearAdSlotWidth = b.offsetWidth;
                        e.nonLinearAdSlotHeight = b.offsetHeight;
                        e.forceNonLinearFullSlot = !1;
                        e.setAdWillPlayMuted(!this.player.muted);
                        this.loader.requestAds(e);
                      } catch (k) {
                        this.onAdError(k);
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
                      )
                        return (
                          clearInterval(this.countdownTimer),
                          void this.elements.container.removeAttribute(
                            "data-badge-text"
                          )
                        );
                      this.countdownTimer = setInterval(function () {
                        var e = zc(Math.max(b.manager.getRemainingTime(), 0));
                        e = ""
                          .concat(db("advertisement", b.player.config), " - ")
                          .concat(e);
                        b.elements.container.setAttribute("data-badge-text", e);
                      }, 100);
                    },
                  },
                  {
                    key: "onAdsManagerLoaded",
                    value: function (b) {
                      var e = this;
                      if (this.enabled) {
                        var k = new google.ima.AdsRenderingSettings();
                        k.restoreCustomPlaybackStateOnAdBreakComplete = !0;
                        k.enablePreloading = !0;
                        this.manager = b.getAdsManager(this.player, k);
                        this.cuePoints = this.manager.getCuePoints();
                        this.manager.addEventListener(
                          google.ima.AdErrorEvent.Type.AD_ERROR,
                          function (r) {
                            return e.onAdError(r);
                          }
                        );
                        Object.keys(google.ima.AdEvent.Type).forEach(function (
                          r
                        ) {
                          e.manager.addEventListener(
                            google.ima.AdEvent.Type[r],
                            function (t) {
                              return e.onAdEvent(t);
                            }
                          );
                        });
                        this.trigger("loaded");
                      }
                    },
                  },
                  {
                    key: "addCuePoints",
                    value: function () {
                      var b = this;
                      ka(this.cuePoints) ||
                        this.cuePoints.forEach(function (e) {
                          if (0 !== e && -1 !== e && e < b.player.duration) {
                            var k = b.player.elements.progress;
                            if (da(k)) {
                              e *= 100 / b.player.duration;
                              var r = Y("span", {
                                class: b.player.config.classNames.cues,
                              });
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
                      var e = this.player.elements.container,
                        k = b.getAd(),
                        r = b.getAdData();
                      qa.call(
                        this.player,
                        this.player.media,
                        "ads".concat(b.type.replace(/_/g, "").toLowerCase())
                      );
                      switch (b.type) {
                        case google.ima.AdEvent.Type.LOADED:
                          this.trigger("loaded");
                          this.pollCountdown(!0);
                          k.isLinear() ||
                            ((k.width = e.offsetWidth),
                            (k.height = e.offsetHeight));
                          break;
                        case google.ima.AdEvent.Type.STARTED:
                          this.manager.setVolume(this.player.volume);
                          break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                          this.player.ended
                            ? this.loadAds()
                            : this.loader.contentComplete();
                          break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                          this.pauseContent();
                          break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                          this.pollCountdown();
                          this.resumeContent();
                          break;
                        case google.ima.AdEvent.Type.LOG:
                          r.adError &&
                            this.player.debug.warn(
                              "Non-fatal ad error: ".concat(
                                r.adError.getMessage()
                              )
                            );
                      }
                    },
                  },
                  {
                    key: "onAdError",
                    value: function (b) {
                      this.cancel();
                      this.player.debug.warn("Ads error", b);
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var b,
                        e = this,
                        k = this.player.elements.container;
                      this.player.on("canplay", function () {
                        e.addCuePoints();
                      });
                      this.player.on("ended", function () {
                        e.loader.contentComplete();
                      });
                      this.player.on("timeupdate", function () {
                        b = e.player.currentTime;
                      });
                      this.player.on("seeked", function () {
                        var r = e.player.currentTime;
                        ka(e.cuePoints) ||
                          e.cuePoints.forEach(function (t, u) {
                            b < t &&
                              t < r &&
                              (e.manager.discardAdBreak(),
                              e.cuePoints.splice(u, 1));
                          });
                      });
                      window.addEventListener("resize", function () {
                        e.manager &&
                          e.manager.resize(
                            k.offsetWidth,
                            k.offsetHeight,
                            google.ima.ViewMode.NORMAL
                          );
                      });
                    },
                  },
                  {
                    key: "play",
                    value: function () {
                      var b = this,
                        e = this.player.elements.container;
                      this.managerPromise || this.resumeContent();
                      this.managerPromise
                        .then(function () {
                          b.manager.setVolume(b.player.volume);
                          b.elements.displayContainer.initialize();
                          try {
                            b.initialized ||
                              (b.manager.init(
                                e.offsetWidth,
                                e.offsetHeight,
                                google.ima.ViewMode.NORMAL
                              ),
                              b.manager.start()),
                              (b.initialized = !0);
                          } catch (k) {
                            b.onAdError(k);
                          }
                        })
                        ["catch"](function () {});
                    },
                  },
                  {
                    key: "resumeContent",
                    value: function () {
                      this.elements.container.style.zIndex = "";
                      this.playing = !1;
                      Ya(this.player.media.play());
                    },
                  },
                  {
                    key: "pauseContent",
                    value: function () {
                      this.elements.container.style.zIndex = 3;
                      this.playing = !0;
                      this.player.media.pause();
                    },
                  },
                  {
                    key: "cancel",
                    value: function () {
                      this.initialized && this.resumeContent();
                      this.trigger("error");
                      this.loadAds();
                    },
                  },
                  {
                    key: "loadAds",
                    value: function () {
                      var b = this;
                      this.managerPromise
                        .then(function () {
                          b.manager && b.manager.destroy();
                          b.managerPromise = new Promise(function (e) {
                            b.on("loaded", e);
                            b.player.debug.log(b.manager);
                          });
                          b.initialized = !1;
                          b.requestAds();
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
                      )
                        r[t - 1] = arguments[t];
                      k = this.events[b];
                      Ka(k) &&
                        k.forEach(function (u) {
                          Xa(u) && u.apply(e, r);
                        });
                    },
                  },
                  {
                    key: "on",
                    value: function (b, e) {
                      return (
                        Ka(this.events[b]) || (this.events[b] = []),
                        this.events[b].push(e),
                        this
                      );
                    },
                  },
                  {
                    key: "startSafetyTimer",
                    value: function (b, e) {
                      var k = this;
                      this.player.debug.log(
                        "Safety timer invoked from: ".concat(e)
                      );
                      this.safetyTimer = setTimeout(function () {
                        k.cancel();
                        k.clearSafetyTimer("startSafetyTimer()");
                      }, b);
                    },
                  },
                  {
                    key: "clearSafetyTimer",
                    value: function (b) {
                      null == this.safetyTimer ||
                        (this.player.debug.log(
                          "Safety timer cleared from: ".concat(b)
                        ),
                        clearTimeout(this.safetyTimer),
                        (this.safetyTimer = null));
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      var b = this.config;
                      return (
                        this.player.isHTML5 &&
                        this.player.isVideo &&
                        b.enabled &&
                        (!ka(b.publisherId) || uc(b.tagUrl))
                      );
                    },
                  },
                  {
                    key: "tagUrl",
                    get: function () {
                      var b = this.config;
                      if (uc(b.tagUrl)) return b.tagUrl;
                      b = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: b.publisherId,
                      };
                      return ""
                        .concat(
                          "https://go.aniview.com/api/adserver6/vast/",
                          "?"
                        )
                        .concat(Gb(b));
                    },
                  },
                ]),
                d
              );
            })(),
            Tc = function (d, b) {
              var e = {};
              return (
                d > b.width / b.height
                  ? ((e.width = b.width), (e.height = (1 / d) * b.width))
                  : ((e.height = b.height), (e.width = d * b.height)),
                e
              );
            },
            Sc = (function () {
              function d(b) {
                Q(this, d);
                this.player = b;
                this.thumbnails = [];
                this.loaded = !1;
                this.lastMouseMoveTime = Date.now();
                this.mouseDown = !1;
                this.loadedImages = [];
                this.elements = { thumb: {}, scrubbing: {} };
                this.load();
              }
              return (
                Ha(d, [
                  {
                    key: "load",
                    value: function () {
                      var b = this;
                      this.player.elements.display.seekTooltip &&
                        (this.player.elements.display.seekTooltip.hidden = this.enabled);
                      this.enabled &&
                        this.getThumbnails().then(function () {
                          b.enabled &&
                            (b.render(),
                            b.determineContainerAutoSizing(),
                            (b.loaded = !0));
                        });
                    },
                  },
                  {
                    key: "getThumbnails",
                    value: function () {
                      var b = this;
                      return new Promise(function (e) {
                        var k = b.player.config.previewThumbnails.src;
                        if (ka(k))
                          throw Error(
                            "Missing previewThumbnails.src config attribute"
                          );
                        var r = function () {
                          b.thumbnails.sort(function (t, u) {
                            return t.height - u.height;
                          });
                          b.player.debug.log(
                            "Preview thumbnails",
                            b.thumbnails
                          );
                          e();
                        };
                        Xa(k)
                          ? k(function (t) {
                              b.thumbnails = t;
                              r();
                            })
                          : ((k = (fb(k) ? [k] : k).map(function (t) {
                              return b.getThumbnail(t);
                            })),
                            Promise.all(k).then(r));
                      });
                    },
                  },
                  {
                    key: "getThumbnail",
                    value: function (b) {
                      var e = this;
                      return new Promise(function (k) {
                        dc(b).then(function (r) {
                          var t,
                            u = {
                              frames:
                                ((t = []),
                                r
                                  .split(/\r\n\r\n|\n\n|\r\r/)
                                  .forEach(function (M) {
                                    var ha = {};
                                    M.split(/\r\n|\n|\r/).forEach(function (
                                      ba
                                    ) {
                                      if (Za(ha.startTime)) {
                                        if (!ka(ba.trim()) && ka(ha.text)) {
                                          ba = ba.trim().split("#xywh=");
                                          var ua = m(ba, 1);
                                          if (((ha.text = ua[0]), ba[1]))
                                            (ba = m(ba[1].split(","), 4)),
                                              (ha.x = ba[0]),
                                              (ha.y = ba[1]),
                                              (ha.w = ba[2]),
                                              (ha.h = ba[3]);
                                        }
                                      } else
                                        (ba = ba.match(
                                          /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--\x3e ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                        )) &&
                                          ((ha.startTime =
                                            3600 * Number(ba[1] || 0) +
                                            60 * Number(ba[2]) +
                                            Number(ba[3]) +
                                            Number("0.".concat(ba[4]))),
                                          (ha.endTime =
                                            3600 * Number(ba[6] || 0) +
                                            60 * Number(ba[7]) +
                                            Number(ba[8]) +
                                            Number("0.".concat(ba[9]))));
                                    });
                                    ha.text && t.push(ha);
                                  }),
                                t),
                              height: null,
                              urlPrefix: "",
                            };
                          u.frames[0].text.startsWith("/") ||
                            u.frames[0].text.startsWith("http://") ||
                            u.frames[0].text.startsWith("https://") ||
                            (u.urlPrefix = b.substring(
                              0,
                              b.lastIndexOf("/") + 1
                            ));
                          var y = new Image();
                          y.onload = function () {
                            u.height = y.naturalHeight;
                            u.width = y.naturalWidth;
                            e.thumbnails.push(u);
                            k();
                          };
                          y.src = u.urlPrefix + u.frames[0].text;
                        });
                      });
                    },
                  },
                  {
                    key: "startMove",
                    value: function (b) {
                      if (
                        this.loaded &&
                        ma(b, Event) &&
                        ["touchmove", "mousemove"].includes(b.type) &&
                        this.player.media.duration
                      ) {
                        if ("touchmove" === b.type)
                          this.seekTime =
                            (this.player.elements.inputs.seek.value / 100) *
                            this.player.media.duration;
                        else {
                          var e = this.player.elements.progress.getBoundingClientRect();
                          this.seekTime =
                            (((100 / e.width) * (b.pageX - e.left)) / 100) *
                            this.player.media.duration;
                          0 > this.seekTime && (this.seekTime = 0);
                          this.seekTime > this.player.media.duration - 1 &&
                            (this.seekTime = this.player.media.duration - 1);
                          this.mousePosX = b.pageX;
                          this.elements.thumb.time.innerText = zc(
                            this.seekTime
                          );
                        }
                        this.showImageAtCurrentTime();
                      }
                    },
                  },
                  {
                    key: "endMove",
                    value: function () {
                      this.toggleThumbContainer(!1, !0);
                    },
                  },
                  {
                    key: "startScrubbing",
                    value: function (b) {
                      (null == b.button || !1 === b.button || 0 === b.button) &&
                        ((this.mouseDown = !0),
                        this.player.media.duration &&
                          (this.toggleScrubbingContainer(!0),
                          this.toggleThumbContainer(!1, !0),
                          this.showImageAtCurrentTime()));
                    },
                  },
                  {
                    key: "endScrubbing",
                    value: function () {
                      var b = this;
                      this.mouseDown = !1;
                      Math.ceil(this.lastTime) ===
                      Math.ceil(this.player.media.currentTime)
                        ? this.toggleScrubbingContainer(!1)
                        : yc.call(
                            this.player,
                            this.player.media,
                            "timeupdate",
                            function () {
                              b.mouseDown || b.toggleScrubbingContainer(!1);
                            }
                          );
                    },
                  },
                  {
                    key: "listeners",
                    value: function () {
                      var b = this;
                      this.player.on("play", function () {
                        b.toggleThumbContainer(!1, !0);
                      });
                      this.player.on("seeked", function () {
                        b.toggleThumbContainer(!1);
                      });
                      this.player.on("timeupdate", function () {
                        b.lastTime = b.player.media.currentTime;
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      this.elements.thumb.container = Y("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .thumbContainer,
                      });
                      this.elements.thumb.imageContainer = Y("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .imageContainer,
                      });
                      this.elements.thumb.container.appendChild(
                        this.elements.thumb.imageContainer
                      );
                      var b = Y("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .timeContainer,
                      });
                      this.elements.thumb.time = Y("span", {}, "00:00");
                      b.appendChild(this.elements.thumb.time);
                      this.elements.thumb.container.appendChild(b);
                      da(this.player.elements.progress) &&
                        this.player.elements.progress.appendChild(
                          this.elements.thumb.container
                        );
                      this.elements.scrubbing.container = Y("div", {
                        class: this.player.config.classNames.previewThumbnails
                          .scrubbingContainer,
                      });
                      this.player.elements.wrapper.appendChild(
                        this.elements.scrubbing.container
                      );
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.elements.thumb.container &&
                        this.elements.thumb.container.remove();
                      this.elements.scrubbing.container &&
                        this.elements.scrubbing.container.remove();
                    },
                  },
                  {
                    key: "showImageAtCurrentTime",
                    value: function () {
                      var b = this;
                      this.mouseDown
                        ? this.setScrubbingContainerSize()
                        : this.setThumbContainerSizeAndPos();
                      var e = this.thumbnails[0].frames.findIndex(function (t) {
                          return (
                            b.seekTime >= t.startTime && b.seekTime <= t.endTime
                          );
                        }),
                        k = 0 <= e,
                        r = 0;
                      this.mouseDown || this.toggleThumbContainer(k);
                      k &&
                        (this.thumbnails.forEach(function (t, u) {
                          b.loadedImages.includes(t.frames[e].text) && (r = u);
                        }),
                        e !== this.showingThumb &&
                          ((this.showingThumb = e), this.loadImage(r)));
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
                        k = this.showingThumb,
                        r = this.thumbnails[e],
                        t = r.frames[k],
                        u = r.frames[k].text;
                      r = r.urlPrefix + u;
                      if (
                        this.currentImageElement &&
                        this.currentImageElement.dataset.filename === u
                      )
                        this.showImage(
                          this.currentImageElement,
                          t,
                          e,
                          k,
                          u,
                          !1
                        ),
                          (this.currentImageElement.dataset.index = k),
                          this.removeOldImages(this.currentImageElement);
                      else {
                        this.loadingImage &&
                          this.usingSprites &&
                          (this.loadingImage.onload = null);
                        var y = new Image();
                        y.src = r;
                        y.dataset.index = k;
                        this.showingThumbFilename = y.dataset.filename = u;
                        this.player.debug.log("Loading image: ".concat(r));
                        y.onload = function () {
                          return b.showImage(y, t, e, k, u, !0);
                        };
                        this.loadingImage = y;
                        this.removeOldImages(y);
                      }
                    },
                  },
                  {
                    key: "showImage",
                    value: function (b, e, k, r, t) {
                      var u =
                        !(5 < arguments.length && void 0 !== arguments[5]) ||
                        arguments[5];
                      this.player.debug.log(
                        "Showing thumb: "
                          .concat(t, ". num: ")
                          .concat(r, ". qual: ")
                          .concat(k, ". newimg: ")
                          .concat(u)
                      );
                      this.setImageSizeAndOffset(b, e);
                      u &&
                        (this.currentImageContainer.appendChild(b),
                        (this.currentImageElement = b),
                        this.loadedImages.includes(t) ||
                          this.loadedImages.push(t));
                      this.preloadNearby(r, !0)
                        .then(this.preloadNearby(r, !1))
                        .then(this.getHigherQuality(k, b, e, t));
                    },
                  },
                  {
                    key: "removeOldImages",
                    value: function (b) {
                      var e = this;
                      Array.from(this.currentImageContainer.children).forEach(
                        function (k) {
                          if ("img" === k.tagName.toLowerCase()) {
                            var r = e.usingSprites ? 500 : 1e3;
                            if (
                              k.dataset.index !== b.dataset.index &&
                              !k.dataset.deleting
                            ) {
                              k.dataset.deleting = !0;
                              var t = e.currentImageContainer;
                              setTimeout(function () {
                                t.removeChild(k);
                                e.player.debug.log(
                                  "Removing thumb: ".concat(k.dataset.filename)
                                );
                              }, r);
                            }
                          }
                        }
                      );
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
                          var t = e.thumbnails[0].frames[b].text;
                          if (e.showingThumbFilename === t) {
                            var u = !1;
                            (k
                              ? e.thumbnails[0].frames.slice(b)
                              : e.thumbnails[0].frames.slice(0, b).reverse()
                            ).forEach(function (y) {
                              var M = y.text;
                              if (M !== t && !e.loadedImages.includes(M)) {
                                u = !0;
                                e.player.debug.log(
                                  "Preloading thumb filename: ".concat(M)
                                );
                                y = e.thumbnails[0].urlPrefix + M;
                                var ha = new Image();
                                ha.src = y;
                                ha.onload = function () {
                                  e.player.debug.log(
                                    "Preloaded thumb filename: ".concat(M)
                                  );
                                  e.loadedImages.includes(M) ||
                                    e.loadedImages.push(M);
                                  r();
                                };
                              }
                            });
                            u || r();
                          }
                        }, 300);
                      });
                    },
                  },
                  {
                    key: "getHigherQuality",
                    value: function (b, e, k, r) {
                      var t = this;
                      b < this.thumbnails.length - 1 &&
                        ((e = e.naturalHeight),
                        this.usingSprites && (e = k.h),
                        e < this.thumbContainerHeight &&
                          setTimeout(function () {
                            t.showingThumbFilename === r &&
                              (t.player.debug.log(
                                "Showing higher quality thumb for: ".concat(r)
                              ),
                              t.loadImage(b + 1));
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
                      this.elements.thumb.container.classList.toggle(
                        this.player.config.classNames.previewThumbnails
                          .thumbContainerShown,
                        b
                      );
                      !b &&
                        e &&
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                    },
                  },
                  {
                    key: "toggleScrubbingContainer",
                    value: function () {
                      var b =
                        0 < arguments.length &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      this.elements.scrubbing.container.classList.toggle(
                        this.player.config.classNames.previewThumbnails
                          .scrubbingContainerShown,
                        b
                      );
                      b ||
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                    },
                  },
                  {
                    key: "determineContainerAutoSizing",
                    value: function () {
                      (20 < this.elements.thumb.imageContainer.clientHeight ||
                        20 < this.elements.thumb.imageContainer.clientWidth) &&
                        (this.sizeSpecifiedInCSS = !0);
                    },
                  },
                  {
                    key: "setThumbContainerSizeAndPos",
                    value: function () {
                      if (this.sizeSpecifiedInCSS)
                        20 < this.elements.thumb.imageContainer.clientHeight &&
                        20 > this.elements.thumb.imageContainer.clientWidth
                          ? (this.elements.thumb.imageContainer.style.width = "".concat(
                              Math.floor(
                                this.elements.thumb.imageContainer
                                  .clientHeight * this.thumbAspectRatio
                              ),
                              "px"
                            ))
                          : 20 >
                              this.elements.thumb.imageContainer.clientHeight &&
                            20 <
                              this.elements.thumb.imageContainer.clientWidth &&
                            (this.elements.thumb.imageContainer.style.height = "".concat(
                              Math.floor(
                                this.elements.thumb.imageContainer.clientWidth /
                                  this.thumbAspectRatio
                              ),
                              "px"
                            ));
                      else {
                        var b = Math.floor(
                          this.thumbContainerHeight * this.thumbAspectRatio
                        );
                        this.elements.thumb.imageContainer.style.height = "".concat(
                          this.thumbContainerHeight,
                          "px"
                        );
                        this.elements.thumb.imageContainer.style.width = "".concat(
                          b,
                          "px"
                        );
                      }
                      this.setThumbContainerPos();
                    },
                  },
                  {
                    key: "setThumbContainerPos",
                    value: function () {
                      var b = this.player.elements.progress.getBoundingClientRect(),
                        e = this.player.elements.container.getBoundingClientRect(),
                        k = this.elements.thumb.container,
                        r = e.left - b.left + 10;
                      e = e.right - b.left - k.clientWidth - 10;
                      b = this.mousePosX - b.left - k.clientWidth / 2;
                      b < r && (b = r);
                      b > e && (b = e);
                      k.style.left = "".concat(b, "px");
                    },
                  },
                  {
                    key: "setScrubbingContainerSize",
                    value: function () {
                      var b = Tc(this.thumbAspectRatio, {
                          width: this.player.media.clientWidth,
                          height: this.player.media.clientHeight,
                        }),
                        e = b.height;
                      this.elements.scrubbing.container.style.width = "".concat(
                        b.width,
                        "px"
                      );
                      this.elements.scrubbing.container.style.height = "".concat(
                        e,
                        "px"
                      );
                    },
                  },
                  {
                    key: "setImageSizeAndOffset",
                    value: function (b, e) {
                      if (this.usingSprites) {
                        var k = this.thumbContainerHeight / e.h;
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
                      return (
                        this.player.isHTML5 &&
                        this.player.isVideo &&
                        this.player.config.previewThumbnails.enabled
                      );
                    },
                  },
                  {
                    key: "currentImageContainer",
                    get: function () {
                      return this.mouseDown
                        ? this.elements.scrubbing.container
                        : this.elements.thumb.imageContainer;
                    },
                  },
                  {
                    key: "usingSprites",
                    get: function () {
                      return Object.keys(this.thumbnails[0].frames[0]).includes(
                        "w"
                      );
                    },
                  },
                  {
                    key: "thumbAspectRatio",
                    get: function () {
                      return this.usingSprites
                        ? this.thumbnails[0].frames[0].w /
                            this.thumbnails[0].frames[0].h
                        : this.thumbnails[0].width / this.thumbnails[0].height;
                    },
                  },
                  {
                    key: "thumbContainerHeight",
                    get: function () {
                      return this.mouseDown
                        ? Tc(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight,
                          }).height
                        : this.sizeSpecifiedInCSS
                        ? this.elements.thumb.imageContainer.clientHeight
                        : Math.floor(
                            this.player.media.clientWidth /
                              this.thumbAspectRatio /
                              4
                          );
                    },
                  },
                  {
                    key: "currentImageElement",
                    get: function () {
                      return this.mouseDown
                        ? this.currentScrubbingImageElement
                        : this.currentThumbnailImageElement;
                    },
                    set: function (b) {
                      this.mouseDown
                        ? (this.currentScrubbingImageElement = b)
                        : (this.currentThumbnailImageElement = b);
                    },
                  },
                ]),
                d
              );
            })(),
            Jc = {
              insertElements: function (d, b) {
                var e = this;
                fb(b)
                  ? Zb(d, this.media, { src: b })
                  : Ka(b) &&
                    b.forEach(function (k) {
                      Zb(d, e.media, k);
                    });
              },
              change: function (d) {
                var b = this;
                ea(d, "sources.length")
                  ? (Xb.cancelRequests.call(this),
                    this.destroy.call(
                      this,
                      function () {
                        b.options.quality = [];
                        qb(b.media);
                        b.media = null;
                        da(b.elements.container) &&
                          b.elements.container.removeAttribute("class");
                        var e = d.sources,
                          k = d.type,
                          r = m(e, 1)[0],
                          t = r.provider;
                        t = void 0 === t ? Ub.html5 : t;
                        var u = r.src;
                        r = "html5" === t ? k : "div";
                        u = "html5" === t ? {} : { src: u };
                        Object.assign(b, {
                          provider: t,
                          type: k,
                          supported: Sa.check(k, t, b.config.playsinline),
                          media: Y(r, u),
                        });
                        b.elements.container.appendChild(b.media);
                        wb(d.autoplay) && (b.config.autoplay = d.autoplay);
                        b.isHTML5 &&
                          (b.config.crossorigin &&
                            b.media.setAttribute("crossorigin", ""),
                          b.config.autoplay &&
                            b.media.setAttribute("autoplay", ""),
                          ka(d.poster) || (b.poster = d.poster),
                          b.config.loop.active &&
                            b.media.setAttribute("loop", ""),
                          b.config.muted && b.media.setAttribute("muted", ""),
                          b.config.playsinline &&
                            b.media.setAttribute("playsinline", ""));
                        Ta.addStyleHook.call(b);
                        b.isHTML5 && Jc.insertElements.call(b, "source", e);
                        b.config.title = d.title;
                        bd.call(b);
                        b.isHTML5 &&
                          Object.keys(d).includes("tracks") &&
                          Jc.insertElements.call(b, "track", d.tracks);
                        (b.isHTML5 || (b.isEmbed && !b.supported.ui)) &&
                          Ta.build.call(b);
                        b.isHTML5 && b.media.load();
                        ka(d.previewThumbnails) ||
                          (Object.assign(
                            b.config.previewThumbnails,
                            d.previewThumbnails
                          ),
                          b.previewThumbnails &&
                            b.previewThumbnails.loaded &&
                            (b.previewThumbnails.destroy(),
                            (b.previewThumbnails = null)),
                          b.config.previewThumbnails.enabled &&
                            (b.previewThumbnails = new Sc(b)));
                        b.fullscreen.update();
                      },
                      !0
                    ))
                  : this.debug.warn("Invalid source format");
              },
            },
            nd = (function () {
              function d(b, e) {
                var k = this;
                Q(this, d);
                this.timers = {};
                this.failed = this.loading = this.ready = !1;
                this.touch = Sa.touch;
                this.media = b;
                fb(this.media) &&
                  (this.media = document.querySelectorAll(this.media));
                ((window.jQuery && this.media instanceof jQuery) ||
                  Gc(this.media) ||
                  Ka(this.media)) &&
                  (this.media = this.media[0]);
                var r = d.defaults;
                try {
                  var t = JSON.parse(k.media.getAttribute("data-plyr-config"));
                } catch (y) {
                  t = {};
                }
                if (
                  ((this.config = ca({}, sb, r, e || {}, t)),
                  (this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                      popup: null,
                      menu: null,
                      panels: {},
                      buttons: {},
                    },
                  }),
                  (this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap(),
                  }),
                  (this.fullscreen = { active: !1 }),
                  (this.options = { speed: [], quality: [] }),
                  (this.debug = new xd(this.config.debug)),
                  this.debug.log("Config", this.config),
                  this.debug.log("Support", Sa),
                  null != this.media && da(this.media))
                )
                  if (this.media.plyr) this.debug.warn("Target already setup");
                  else if (this.config.enabled)
                    if (Sa.check().api) {
                      r = this.media.cloneNode(!0);
                      r.autoplay = !1;
                      this.elements.original = r;
                      t = this.media.tagName.toLowerCase();
                      var u = null;
                      r = null;
                      switch (t) {
                        case "div":
                          if (
                            ((u = this.media.querySelector("iframe")), da(u))
                          ) {
                            if (
                              ((r = Lc(u.getAttribute("src"))),
                              (this.provider = (function (y) {
                                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                                  y
                                )
                                  ? Ub.youtube
                                  : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                      y
                                    )
                                  ? Ub.vimeo
                                  : null;
                              })(r.toString())),
                              (this.elements.container = this.media),
                              (this.media = u),
                              (this.elements.container.className = ""),
                              r.search.length)
                            )
                              (t = ["1", "true"]),
                                t.includes(r.searchParams.get("autoplay")) &&
                                  (this.config.autoplay = !0),
                                t.includes(r.searchParams.get("loop")) &&
                                  (this.config.loop.active = !0),
                                this.isYouTube
                                  ? ((this.config.playsinline = t.includes(
                                      r.searchParams.get("playsinline")
                                    )),
                                    (this.config.youtube.hl = r.searchParams.get(
                                      "hl"
                                    )))
                                  : (this.config.playsinline = !0);
                          } else
                            (this.provider = this.media.getAttribute(
                              this.config.attributes.embed.provider
                            )),
                              this.media.removeAttribute(
                                this.config.attributes.embed.provider
                              );
                          if (
                            ka(this.provider) ||
                            !Object.keys(Ub).includes(this.provider)
                          )
                            return void this.debug.error(
                              "Setup failed: Invalid provider"
                            );
                          this.type = "video";
                          break;
                        case "video":
                        case "audio":
                          this.type = t;
                          this.provider = Ub.html5;
                          this.media.hasAttribute("crossorigin") &&
                            (this.config.crossorigin = !0);
                          this.media.hasAttribute("autoplay") &&
                            (this.config.autoplay = !0);
                          (this.media.hasAttribute("playsinline") ||
                            this.media.hasAttribute("webkit-playsinline")) &&
                            (this.config.playsinline = !0);
                          this.media.hasAttribute("muted") &&
                            (this.config.muted = !0);
                          this.media.hasAttribute("loop") &&
                            (this.config.loop.active = !0);
                          break;
                        default:
                          return void this.debug.error(
                            "Setup failed: unsupported type"
                          );
                      }
                      this.supported = Sa.check(
                        this.type,
                        this.provider,
                        this.config.playsinline
                      );
                      this.supported.api
                        ? ((this.eventListeners = []),
                          (this.listeners = new qd(this)),
                          (this.storage = new Rc(this)),
                          (this.media.plyr = this),
                          da(this.elements.container) ||
                            ((this.elements.container = Y("div", {
                              tabindex: 0,
                            })),
                            Ua(this.media, this.elements.container)),
                          Ta.migrateStyles.call(this),
                          Ta.addStyleHook.call(this),
                          bd.call(this),
                          this.config.debug &&
                            xa.call(
                              this,
                              this.elements.container,
                              this.config.events.join(" "),
                              function (y) {
                                k.debug.log("event: ".concat(y.type));
                              }
                            ),
                          (this.fullscreen = new md(this)),
                          (this.isHTML5 ||
                            (this.isEmbed && !this.supported.ui)) &&
                            Ta.build.call(this),
                          this.listeners.container(),
                          this.listeners.global(),
                          this.config.ads.enabled && (this.ads = new sd(this)),
                          this.isHTML5 &&
                            this.config.autoplay &&
                            this.once("canplay", function () {
                              return Ya(k.play());
                            }),
                          (this.lastSeekTime = 0),
                          this.config.previewThumbnails.enabled &&
                            (this.previewThumbnails = new Sc(this)))
                        : this.debug.error("Setup failed: no support");
                    } else this.debug.error("Setup failed: no support");
                  else this.debug.error("Setup failed: disabled by config");
                else
                  this.debug.error("Setup failed: no suitable element passed");
              }
              return (
                Ha(
                  d,
                  [
                    {
                      key: "play",
                      value: function () {
                        var b = this;
                        return Xa(this.media.play)
                          ? (this.ads &&
                              this.ads.enabled &&
                              this.ads.managerPromise
                                .then(function () {
                                  return b.ads.play();
                                })
                                ["catch"](function () {
                                  return Ya(b.media.play());
                                }),
                            this.media.play())
                          : null;
                      },
                    },
                    {
                      key: "pause",
                      value: function () {
                        return this.playing && Xa(this.media.pause)
                          ? this.media.pause()
                          : null;
                      },
                    },
                    {
                      key: "togglePlay",
                      value: function (b) {
                        return (wb(b) ? b : !this.playing)
                          ? this.play()
                          : this.pause();
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.isHTML5
                          ? (this.pause(), this.restart())
                          : Xa(this.media.stop) && this.media.stop();
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
                        this.currentTime -= Za(b) ? b : this.config.seekTime;
                      },
                    },
                    {
                      key: "forward",
                      value: function (b) {
                        this.currentTime += Za(b) ? b : this.config.seekTime;
                      },
                    },
                    {
                      key: "increaseVolume",
                      value: function (b) {
                        this.volume =
                          (this.media.muted ? 0 : this.volume) +
                          (Za(b) ? b : 0);
                      },
                    },
                    {
                      key: "decreaseVolume",
                      value: function (b) {
                        this.increaseVolume(-b);
                      },
                    },
                    {
                      key: "toggleCaptions",
                      value: function (b) {
                        Ba.toggle.call(this, b, !1);
                      },
                    },
                    {
                      key: "airplay",
                      value: function () {
                        Sa.airplay &&
                          this.media.webkitShowPlaybackTargetPicker();
                      },
                    },
                    {
                      key: "toggleControls",
                      value: function (b) {
                        if (this.supported.ui && !this.isAudio) {
                          var e = vc(
                            this.elements.container,
                            this.config.classNames.hideControls
                          );
                          b = wa(
                            this.elements.container,
                            this.config.classNames.hideControls,
                            void 0 === b ? void 0 : !b
                          );
                          (b &&
                            Ka(this.config.controls) &&
                            this.config.controls.includes("settings") &&
                            !ka(this.config.settings) &&
                            X.toggleMenu.call(this, !1),
                          b !== e) &&
                            qa.call(
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
                        xa.call(this, this.elements.container, b, e);
                      },
                    },
                    {
                      key: "once",
                      value: function (b, e) {
                        yc.call(this, this.elements.container, b, e);
                      },
                    },
                    {
                      key: "off",
                      value: function (b, e) {
                        xc(this.elements.container, b, e);
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
                            e.embed = null;
                            k
                              ? (Object.keys(e.elements).length &&
                                  (qb(e.elements.buttons.play),
                                  qb(e.elements.captions),
                                  qb(e.elements.controls),
                                  qb(e.elements.wrapper),
                                  (e.elements.buttons.play = null),
                                  (e.elements.captions = null),
                                  (e.elements.controls = null),
                                  (e.elements.wrapper = null)),
                                Xa(b) && b())
                              : (Uc.call(e),
                                Xb.cancelRequests.call(e),
                                Kb(e.elements.original, e.elements.container),
                                qa.call(
                                  e,
                                  e.elements.original,
                                  "destroyed",
                                  !0
                                ),
                                Xa(b) && b.call(e.elements.original),
                                (e.ready = !1),
                                setTimeout(function () {
                                  e.elements = null;
                                  e.media = null;
                                }, 200));
                          };
                          this.stop();
                          clearTimeout(this.timers.loading);
                          clearTimeout(this.timers.controls);
                          clearTimeout(this.timers.resized);
                          this.isHTML5
                            ? (Ta.toggleNativeControls.call(this, !0), r())
                            : this.isYouTube
                            ? (clearInterval(this.timers.buffering),
                              clearInterval(this.timers.playing),
                              null !== this.embed &&
                                Xa(this.embed.destroy) &&
                                this.embed.destroy(),
                              r())
                            : this.isVimeo &&
                              (null !== this.embed &&
                                this.embed.unload().then(r),
                              setTimeout(r, 200));
                        }
                      },
                    },
                    {
                      key: "supports",
                      value: function (b) {
                        return Sa.mime.call(this, b);
                      },
                    },
                    {
                      key: "isHTML5",
                      get: function () {
                        return this.provider === Ub.html5;
                      },
                    },
                    {
                      key: "isEmbed",
                      get: function () {
                        return this.isYouTube || this.isVimeo;
                      },
                    },
                    {
                      key: "isYouTube",
                      get: function () {
                        return this.provider === Ub.youtube;
                      },
                    },
                    {
                      key: "isVimeo",
                      get: function () {
                        return this.provider === Ub.vimeo;
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
                          var e = Za(b) && 0 < b;
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
                        return Za(b)
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
                        var b = parseFloat(this.config.duration),
                          e = (this.media || {}).duration;
                        e = Za(e) && e !== 1 / 0 ? e : 0;
                        return b || e;
                      },
                    },
                    {
                      key: "volume",
                      set: function (b) {
                        var e = b;
                        fb(e) && (e = Number(e));
                        Za(e) || (e = this.storage.get("volume"));
                        Za(e) || (e = this.config.volume);
                        1 < e && (e = 1);
                        0 > e && (e = 0);
                        this.config.volume = e;
                        this.media.volume = e;
                        !ka(b) && this.muted && 0 < e && (this.muted = !1);
                      },
                      get: function () {
                        return Number(this.media.volume);
                      },
                    },
                    {
                      key: "muted",
                      set: function (b) {
                        wb(b) || (b = this.storage.get("muted"));
                        wb(b) || (b = this.config.muted);
                        this.config.muted = b;
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
                          !this.isHTML5 ||
                          !!this.isAudio ||
                          !!this.media.mozHasAudio ||
                          !!this.media.webkitAudioDecodedByteCount ||
                          !(
                            !this.media.audioTracks ||
                            !this.media.audioTracks.length
                          )
                        );
                      },
                    },
                    {
                      key: "speed",
                      set: function (b) {
                        var e = this,
                          k = null;
                        Za(b) && (k = b);
                        Za(k) || (k = this.storage.get("speed"));
                        Za(k) || (k = this.config.speed.selected);
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
                        })(k, this.minimumSpeed, this.maximumSpeed);
                        this.config.speed.selected = k;
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
                        return this.isYouTube
                          ? Math.min.apply(Math, z(this.options.speed))
                          : this.isVimeo
                          ? 0.5
                          : 0.0625;
                      },
                    },
                    {
                      key: "maximumSpeed",
                      get: function () {
                        return this.isYouTube
                          ? Math.max.apply(Math, z(this.options.speed))
                          : this.isVimeo
                          ? 2
                          : 16;
                      },
                    },
                    {
                      key: "quality",
                      set: function (b) {
                        var e = this.config.quality,
                          k = this.options.quality;
                        if (k.length) {
                          b = [
                            !ka(b) && Number(b),
                            this.storage.get("quality"),
                            e.selected,
                            e["default"],
                          ].find(Za);
                          var r = !0;
                          k.includes(b) ||
                            ((k = (function (t, u) {
                              return Ka(t) && t.length
                                ? t.reduce(function (y, M) {
                                    return Math.abs(M - u) < Math.abs(y - u)
                                      ? M
                                      : y;
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
                        b = wb(b) ? b : this.config.loop.active;
                        this.config.loop.active = b;
                        this.media.loop = b;
                      },
                      get: function () {
                        return !!this.media.loop;
                      },
                    },
                    {
                      key: "source",
                      set: function (b) {
                        Jc.change.call(this, b);
                      },
                      get: function () {
                        return this.media.currentSrc;
                      },
                    },
                    {
                      key: "download",
                      get: function () {
                        var b = this.config.urls.download;
                        return uc(b) ? b : this.source;
                      },
                      set: function (b) {
                        uc(b) &&
                          ((this.config.urls.download = b),
                          X.setDownloadUrl.call(this));
                      },
                    },
                    {
                      key: "poster",
                      set: function (b) {
                        this.isVideo
                          ? Ta.setPoster
                              .call(this, b, !1)
                              ["catch"](function () {})
                          : this.debug.warn("Poster can only be set for video");
                      },
                      get: function () {
                        return this.isVideo
                          ? this.media.getAttribute("poster") ||
                              this.media.getAttribute("data-poster")
                          : null;
                      },
                    },
                    {
                      key: "ratio",
                      get: function () {
                        if (!this.isVideo) return null;
                        var b = Vc(oc.call(this));
                        return Ka(b) ? b.join(":") : b;
                      },
                      set: function (b) {
                        this.isVideo
                          ? fb(b) && Kc(b)
                            ? ((this.config.ratio = b), Mb.call(this))
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
                        b = wb(b) ? b : this.config.autoplay;
                        this.config.autoplay = b;
                      },
                      get: function () {
                        return !!this.config.autoplay;
                      },
                    },
                    {
                      key: "currentTrack",
                      set: function (b) {
                        Ba.set.call(this, b, !1);
                      },
                      get: function () {
                        var b = this.captions,
                          e = b.currentTrack;
                        return b.toggled ? e : -1;
                      },
                    },
                    {
                      key: "language",
                      set: function (b) {
                        Ba.setLanguage.call(this, b, !1);
                      },
                      get: function () {
                        return (Ba.getCurrentTrack.call(this) || {}).language;
                      },
                    },
                    {
                      key: "pip",
                      set: function (b) {
                        Sa.pip &&
                          ((b = wb(b) ? b : !this.pip),
                          Xa(this.media.webkitSetPresentationMode) &&
                            this.media.webkitSetPresentationMode(
                              b ? "picture-in-picture" : "inline"
                            ),
                          Xa(this.media.requestPictureInPicture) &&
                            (!this.pip && b
                              ? this.media.requestPictureInPicture()
                              : this.pip &&
                                !b &&
                                document.exitPictureInPicture()));
                      },
                      get: function () {
                        return Sa.pip
                          ? ka(this.media.webkitPresentationMode)
                            ? this.media === document.pictureInPictureElement
                            : "picture-in-picture" ===
                              this.media.webkitPresentationMode
                          : null;
                      },
                    },
                  ],
                  [
                    {
                      key: "supported",
                      value: function (b, e, k) {
                        return Sa.check(b, e, k);
                      },
                    },
                    {
                      key: "loadSprite",
                      value: function (b, e) {
                        return Xc(b, e);
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
                          fb(b)
                            ? (k = Array.from(document.querySelectorAll(b)))
                            : Gc(b)
                            ? (k = Array.from(b))
                            : Ka(b) && (k = b.filter(da)),
                          ka(k)
                            ? null
                            : k.map(function (r) {
                                return new d(r, e);
                              })
                        );
                      },
                    },
                  ]
                ),
                d
              );
            })();
          return (nd.defaults = JSON.parse(JSON.stringify(sb))), nd;
        })());
    }.call(this, N(3)));
  },
  function (V, Z) {
    var N = (function () {
      return this;
    })();
    try {
      N = N || new Function("return this")();
    } catch (I) {
      "object" == typeof window && (N = window);
    }
    V.exports = N;
  },
  function (V, Z) {
    window.onload = function () {
      var N = document.querySelector("input[name=phone]"),
        I = document.querySelector("input[name=name]");
      document.querySelector("#sub-button").onclick = function (Q) {
        Q.preventDefault();
        (function (Ia) {
          var Ha = new XMLHttpRequest();
          Ha.onreadystatechange = function () {
            4 == Ha.readyState &&
              200 == Ha.status &&
              (console.log(Ha.responseText),
              1 == Ha.responseText
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
                    Ha.responseText),
                  document
                    .querySelector("#result")
                    .classList.remove("badge-success"),
                  document
                    .querySelector("#result")
                    .classList.add("badge-warning")));
          };
          Ha.open("POST", "form.php");
          Ha.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
          Ha.send(Ia);
        })("phone=" + N.value + "&name=" + I.value);
      };
    };
  },
  function (V, Z, N) {
    var I, Q, Ia;
    !(function (Ha) {
      Q = [N(0)];
      void 0 ===
        (Ia =
          "function" ==
          typeof (I = function (K) {
            var O = window.Slick || {};
            ((Ja = 0),
            (O = function (m, z) {
              this.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: K(m),
                appendDots: K(m),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                  '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                  '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (A, F) {
                  return K('<button type="button" />').text(F + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
              };
              this.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1,
              };
              K.extend(this, this.initials);
              this.animProp = this.animType = this.activeBreakpoint = null;
              this.breakpoints = [];
              this.breakpointSettings = [];
              this.interrupted = this.focussed = this.cssTransitions = !1;
              this.hidden = "hidden";
              this.paused = !0;
              this.respondTo = this.positionProp = null;
              this.rowCount = 1;
              this.shouldClick = !0;
              this.$slider = K(m);
              this.transitionType = this.transformType = this.$slidesCache = null;
              this.visibilityChange = "visibilitychange";
              this.windowWidth = 0;
              this.windowTimer = null;
              var E = K(m).data("slick") || {};
              this.options = K.extend({}, this.defaults, z, E);
              this.currentSlide = this.options.initialSlide;
              this.originalSettings = this.options;
              void 0 !== document.mozHidden
                ? ((this.hidden = "mozHidden"),
                  (this.visibilityChange = "mozvisibilitychange"))
                : void 0 !== document.webkitHidden &&
                  ((this.hidden = "webkitHidden"),
                  (this.visibilityChange = "webkitvisibilitychange"));
              this.autoPlay = K.proxy(this.autoPlay, this);
              this.autoPlayClear = K.proxy(this.autoPlayClear, this);
              this.autoPlayIterator = K.proxy(this.autoPlayIterator, this);
              this.changeSlide = K.proxy(this.changeSlide, this);
              this.clickHandler = K.proxy(this.clickHandler, this);
              this.selectHandler = K.proxy(this.selectHandler, this);
              this.setPosition = K.proxy(this.setPosition, this);
              this.swipeHandler = K.proxy(this.swipeHandler, this);
              this.dragHandler = K.proxy(this.dragHandler, this);
              this.keyHandler = K.proxy(this.keyHandler, this);
              this.instanceUid = Ja++;
              this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
              this.registerBreakpoints();
              this.init(!0);
            })).prototype.activateADA = function () {
              this.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
            };
            O.prototype.addSlide = O.prototype.slickAdd = function (m, z, E) {
              if ("boolean" == typeof z) (E = z), (z = null);
              else if (0 > z || z >= this.slideCount) return !1;
              this.unload();
              "number" == typeof z
                ? 0 === z && 0 === this.$slides.length
                  ? K(m).appendTo(this.$slideTrack)
                  : E
                  ? K(m).insertBefore(this.$slides.eq(z))
                  : K(m).insertAfter(this.$slides.eq(z))
                : !0 === E
                ? K(m).prependTo(this.$slideTrack)
                : K(m).appendTo(this.$slideTrack);
              this.$slides = this.$slideTrack.children(this.options.slide);
              this.$slideTrack.children(this.options.slide).detach();
              this.$slideTrack.append(this.$slides);
              this.$slides.each(function (A, F) {
                K(F).attr("data-slick-index", A);
              });
              this.$slidesCache = this.$slides;
              this.reinit();
            };
            O.prototype.animateHeight = function () {
              if (
                1 === this.options.slidesToShow &&
                !0 === this.options.adaptiveHeight &&
                !1 === this.options.vertical
              ) {
                var m = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({ height: m }, this.options.speed);
              }
            };
            O.prototype.animateSlide = function (m, z) {
              var E = {},
                A = this;
              A.animateHeight();
              !0 === A.options.rtl && !1 === A.options.vertical && (m = -m);
              !1 === A.transformsEnabled
                ? !1 === A.options.vertical
                  ? A.$slideTrack.animate(
                      { left: m },
                      A.options.speed,
                      A.options.easing,
                      z
                    )
                  : A.$slideTrack.animate(
                      { top: m },
                      A.options.speed,
                      A.options.easing,
                      z
                    )
                : !1 === A.cssTransitions
                ? (!0 === A.options.rtl && (A.currentLeft = -A.currentLeft),
                  K({ animStart: A.currentLeft }).animate(
                    { animStart: m },
                    {
                      duration: A.options.speed,
                      easing: A.options.easing,
                      step: function (F) {
                        F = Math.ceil(F);
                        !1 === A.options.vertical
                          ? ((E[A.animType] = "translate(" + F + "px, 0px)"),
                            A.$slideTrack.css(E))
                          : ((E[A.animType] = "translate(0px," + F + "px)"),
                            A.$slideTrack.css(E));
                      },
                      complete: function () {
                        z && z.call();
                      },
                    }
                  ))
                : (A.applyTransition(),
                  (m = Math.ceil(m)),
                  !1 === A.options.vertical
                    ? (E[A.animType] = "translate3d(" + m + "px, 0px, 0px)")
                    : (E[A.animType] = "translate3d(0px," + m + "px, 0px)"),
                  A.$slideTrack.css(E),
                  z &&
                    setTimeout(function () {
                      A.disableTransition();
                      z.call();
                    }, A.options.speed));
            };
            O.prototype.getNavTarget = function () {
              var m = this.options.asNavFor;
              return m && null !== m && (m = K(m).not(this.$slider)), m;
            };
            O.prototype.asNavFor = function (m) {
              var z = this.getNavTarget();
              null !== z &&
                "object" == typeof z &&
                z.each(function () {
                  var E = K(this).slick("getSlick");
                  E.unslicked || E.slideHandler(m, !0);
                });
            };
            O.prototype.applyTransition = function (m) {
              var z = {};
              !1 === this.options.fade
                ? (z[this.transitionType] =
                    this.transformType +
                    " " +
                    this.options.speed +
                    "ms " +
                    this.options.cssEase)
                : (z[this.transitionType] =
                    "opacity " +
                    this.options.speed +
                    "ms " +
                    this.options.cssEase);
              !1 === this.options.fade
                ? this.$slideTrack.css(z)
                : this.$slides.eq(m).css(z);
            };
            O.prototype.autoPlay = function () {
              this.autoPlayClear();
              this.slideCount > this.options.slidesToShow &&
                (this.autoPlayTimer = setInterval(
                  this.autoPlayIterator,
                  this.options.autoplaySpeed
                ));
            };
            O.prototype.autoPlayClear = function () {
              this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            };
            O.prototype.autoPlayIterator = function () {
              var m = this.currentSlide + this.options.slidesToScroll;
              this.paused ||
                this.interrupted ||
                this.focussed ||
                (!1 === this.options.infinite &&
                  (1 === this.direction &&
                  this.currentSlide + 1 === this.slideCount - 1
                    ? (this.direction = 0)
                    : 0 === this.direction &&
                      ((m = this.currentSlide - this.options.slidesToScroll),
                      0 == this.currentSlide - 1 && (this.direction = 1))),
                this.slideHandler(m));
            };
            O.prototype.buildArrows = function () {
              !0 === this.options.arrows &&
                ((this.$prevArrow = K(this.options.prevArrow).addClass(
                  "slick-arrow"
                )),
                (this.$nextArrow = K(this.options.nextArrow).addClass(
                  "slick-arrow"
                )),
                this.slideCount > this.options.slidesToShow
                  ? (this.$prevArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    this.$nextArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    this.htmlExpr.test(this.options.prevArrow) &&
                      this.$prevArrow.prependTo(this.options.appendArrows),
                    this.htmlExpr.test(this.options.nextArrow) &&
                      this.$nextArrow.appendTo(this.options.appendArrows),
                    !0 !== this.options.infinite &&
                      this.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"))
                  : this.$prevArrow
                      .add(this.$nextArrow)
                      .addClass("slick-hidden")
                      .attr({ "aria-disabled": "true", tabindex: "-1" }));
            };
            O.prototype.buildDots = function () {
              var m;
              if (
                !0 === this.options.dots &&
                this.slideCount > this.options.slidesToShow
              ) {
                this.$slider.addClass("slick-dotted");
                var z = K("<ul />").addClass(this.options.dotsClass);
                for (m = 0; m <= this.getDotCount(); m += 1)
                  z.append(
                    K("<li />").append(
                      this.options.customPaging.call(this, this, m)
                    )
                  );
                this.$dots = z.appendTo(this.options.appendDots);
                this.$dots.find("li").first().addClass("slick-active");
              }
            };
            O.prototype.buildOut = function () {
              this.$slides = this.$slider
                .children(this.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide");
              this.slideCount = this.$slides.length;
              this.$slides.each(function (m, z) {
                K(z)
                  .attr("data-slick-index", m)
                  .data("originalStyling", K(z).attr("style") || "");
              });
              this.$slider.addClass("slick-slider");
              this.$slideTrack =
                0 === this.slideCount
                  ? K('<div class="slick-track"/>').appendTo(this.$slider)
                  : this.$slides.wrapAll('<div class="slick-track"/>').parent();
              this.$list = this.$slideTrack
                .wrap('<div class="slick-list"/>')
                .parent();
              this.$slideTrack.css("opacity", 0);
              (!0 !== this.options.centerMode &&
                !0 !== this.options.swipeToSlide) ||
                (this.options.slidesToScroll = 1);
              K("img[data-lazy]", this.$slider)
                .not("[src]")
                .addClass("slick-loading");
              this.setupInfinite();
              this.buildArrows();
              this.buildDots();
              this.updateDots();
              this.setSlideClasses(
                "number" == typeof this.currentSlide ? this.currentSlide : 0
              );
              !0 === this.options.draggable && this.$list.addClass("draggable");
            };
            O.prototype.buildRows = function () {
              var m, z, E, A, F;
              if (
                ((A = document.createDocumentFragment()),
                (F = this.$slider.children()),
                0 < this.options.rows)
              ) {
                var S = this.options.slidesPerRow * this.options.rows;
                var P = Math.ceil(F.length / S);
                for (m = 0; m < P; m++) {
                  var G = document.createElement("div");
                  for (z = 0; z < this.options.rows; z++) {
                    var ea = document.createElement("div");
                    for (E = 0; E < this.options.slidesPerRow; E++) {
                      var ca = m * S + (z * this.options.slidesPerRow + E);
                      F.get(ca) && ea.appendChild(F.get(ca));
                    }
                    G.appendChild(ea);
                  }
                  A.appendChild(G);
                }
                this.$slider.empty().append(A);
                this.$slider
                  .children()
                  .children()
                  .children()
                  .css({
                    width: 100 / this.options.slidesPerRow + "%",
                    display: "inline-block",
                  });
              }
            };
            O.prototype.checkResponsive = function (m, z) {
              var E,
                A,
                F = !1;
              var S = this.$slider.width();
              var P = window.innerWidth || K(window).width();
              if (
                ("window" === this.respondTo
                  ? (A = P)
                  : "slider" === this.respondTo
                  ? (A = S)
                  : "min" === this.respondTo && (A = Math.min(P, S)),
                this.options.responsive &&
                  this.options.responsive.length &&
                  null !== this.options.responsive)
              ) {
                for (E in ((S = null), this.breakpoints))
                  this.breakpoints.hasOwnProperty(E) &&
                    (!1 === this.originalSettings.mobileFirst
                      ? A < this.breakpoints[E] && (S = this.breakpoints[E])
                      : A > this.breakpoints[E] && (S = this.breakpoints[E]));
                null !== S
                  ? null !== this.activeBreakpoint
                    ? (S !== this.activeBreakpoint || z) &&
                      ((this.activeBreakpoint = S),
                      "unslick" === this.breakpointSettings[S]
                        ? this.unslick(S)
                        : ((this.options = K.extend(
                            {},
                            this.originalSettings,
                            this.breakpointSettings[S]
                          )),
                          !0 === m &&
                            (this.currentSlide = this.options.initialSlide),
                          this.refresh(m)),
                      (F = S))
                    : ((this.activeBreakpoint = S),
                      "unslick" === this.breakpointSettings[S]
                        ? this.unslick(S)
                        : ((this.options = K.extend(
                            {},
                            this.originalSettings,
                            this.breakpointSettings[S]
                          )),
                          !0 === m &&
                            (this.currentSlide = this.options.initialSlide),
                          this.refresh(m)),
                      (F = S))
                  : null !== this.activeBreakpoint &&
                    ((this.activeBreakpoint = null),
                    (this.options = this.originalSettings),
                    !0 === m && (this.currentSlide = this.options.initialSlide),
                    this.refresh(m),
                    (F = S));
                m || !1 === F || this.$slider.trigger("breakpoint", [this, F]);
              }
            };
            O.prototype.changeSlide = function (m, z) {
              var E;
              var A = K(m.currentTarget);
              switch (
                (A.is("a") && m.preventDefault(),
                A.is("li") || (A = A.closest("li")),
                (E =
                  0 != this.slideCount % this.options.slidesToScroll
                    ? 0
                    : (this.slideCount - this.currentSlide) %
                      this.options.slidesToScroll),
                m.data.message)
              ) {
                case "previous":
                  A =
                    0 === E
                      ? this.options.slidesToScroll
                      : this.options.slidesToShow - E;
                  this.slideCount > this.options.slidesToShow &&
                    this.slideHandler(this.currentSlide - A, !1, z);
                  break;
                case "next":
                  A = 0 === E ? this.options.slidesToScroll : E;
                  this.slideCount > this.options.slidesToShow &&
                    this.slideHandler(this.currentSlide + A, !1, z);
                  break;
                case "index":
                  (E =
                    0 === m.data.index
                      ? 0
                      : m.data.index ||
                        A.index() * this.options.slidesToScroll),
                    this.slideHandler(this.checkNavigable(E), !1, z),
                    A.children().trigger("focus");
              }
            };
            O.prototype.checkNavigable = function (m) {
              var z, E;
              if (((E = 0), m > (z = this.getNavigableIndexes())[z.length - 1]))
                m = z[z.length - 1];
              else
                for (var A in z) {
                  if (m < z[A]) {
                    m = E;
                    break;
                  }
                  E = z[A];
                }
              return m;
            };
            O.prototype.cleanUpEvents = function () {
              this.options.dots &&
                null !== this.$dots &&
                (K("li", this.$dots)
                  .off("click.slick", this.changeSlide)
                  .off("mouseenter.slick", K.proxy(this.interrupt, this, !0))
                  .off("mouseleave.slick", K.proxy(this.interrupt, this, !1)),
                !0 === this.options.accessibility &&
                  this.$dots.off("keydown.slick", this.keyHandler));
              this.$slider.off("focus.slick blur.slick");
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                (this.$prevArrow &&
                  this.$prevArrow.off("click.slick", this.changeSlide),
                this.$nextArrow &&
                  this.$nextArrow.off("click.slick", this.changeSlide),
                !0 === this.options.accessibility &&
                  (this.$prevArrow &&
                    this.$prevArrow.off("keydown.slick", this.keyHandler),
                  this.$nextArrow &&
                    this.$nextArrow.off("keydown.slick", this.keyHandler)));
              this.$list.off(
                "touchstart.slick mousedown.slick",
                this.swipeHandler
              );
              this.$list.off(
                "touchmove.slick mousemove.slick",
                this.swipeHandler
              );
              this.$list.off("touchend.slick mouseup.slick", this.swipeHandler);
              this.$list.off(
                "touchcancel.slick mouseleave.slick",
                this.swipeHandler
              );
              this.$list.off("click.slick", this.clickHandler);
              K(document).off(this.visibilityChange, this.visibility);
              this.cleanUpSlideEvents();
              !0 === this.options.accessibility &&
                this.$list.off("keydown.slick", this.keyHandler);
              !0 === this.options.focusOnSelect &&
                K(this.$slideTrack)
                  .children()
                  .off("click.slick", this.selectHandler);
              K(window).off(
                "orientationchange.slick.slick-" + this.instanceUid,
                this.orientationChange
              );
              K(window).off(
                "resize.slick.slick-" + this.instanceUid,
                this.resize
              );
              K("[draggable!=true]", this.$slideTrack).off(
                "dragstart",
                this.preventDefault
              );
              K(window).off(
                "load.slick.slick-" + this.instanceUid,
                this.setPosition
              );
            };
            O.prototype.cleanUpSlideEvents = function () {
              this.$list.off(
                "mouseenter.slick",
                K.proxy(this.interrupt, this, !0)
              );
              this.$list.off(
                "mouseleave.slick",
                K.proxy(this.interrupt, this, !1)
              );
            };
            O.prototype.cleanUpRows = function () {
              var m;
              0 < this.options.rows &&
                ((m = this.$slides.children().children()).removeAttr("style"),
                this.$slider.empty().append(m));
            };
            O.prototype.clickHandler = function (m) {
              !1 === this.shouldClick &&
                (m.stopImmediatePropagation(),
                m.stopPropagation(),
                m.preventDefault());
            };
            O.prototype.destroy = function (m) {
              this.autoPlayClear();
              this.touchObject = {};
              this.cleanUpEvents();
              K(".slick-cloned", this.$slider).detach();
              this.$dots && this.$dots.remove();
              this.$prevArrow &&
                this.$prevArrow.length &&
                (this.$prevArrow
                  .removeClass("slick-disabled slick-arrow slick-hidden")
                  .removeAttr("aria-hidden aria-disabled tabindex")
                  .css("display", ""),
                this.htmlExpr.test(this.options.prevArrow) &&
                  this.$prevArrow.remove());
              this.$nextArrow &&
                this.$nextArrow.length &&
                (this.$nextArrow
                  .removeClass("slick-disabled slick-arrow slick-hidden")
                  .removeAttr("aria-hidden aria-disabled tabindex")
                  .css("display", ""),
                this.htmlExpr.test(this.options.nextArrow) &&
                  this.$nextArrow.remove());
              this.$slides &&
                (this.$slides
                  .removeClass(
                    "slick-slide slick-active slick-center slick-visible slick-current"
                  )
                  .removeAttr("aria-hidden")
                  .removeAttr("data-slick-index")
                  .each(function () {
                    K(this).attr("style", K(this).data("originalStyling"));
                  }),
                this.$slideTrack.children(this.options.slide).detach(),
                this.$slideTrack.detach(),
                this.$list.detach(),
                this.$slider.append(this.$slides));
              this.cleanUpRows();
              this.$slider.removeClass("slick-slider");
              this.$slider.removeClass("slick-initialized");
              this.$slider.removeClass("slick-dotted");
              this.unslicked = !0;
              m || this.$slider.trigger("destroy", [this]);
            };
            O.prototype.disableTransition = function (m) {
              var z = {};
              z[this.transitionType] = "";
              !1 === this.options.fade
                ? this.$slideTrack.css(z)
                : this.$slides.eq(m).css(z);
            };
            O.prototype.fadeSlide = function (m, z) {
              var E = this;
              !1 === E.cssTransitions
                ? (E.$slides.eq(m).css({ zIndex: E.options.zIndex }),
                  E.$slides
                    .eq(m)
                    .animate(
                      { opacity: 1 },
                      E.options.speed,
                      E.options.easing,
                      z
                    ))
                : (E.applyTransition(m),
                  E.$slides.eq(m).css({ opacity: 1, zIndex: E.options.zIndex }),
                  z &&
                    setTimeout(function () {
                      E.disableTransition(m);
                      z.call();
                    }, E.options.speed));
            };
            O.prototype.fadeSlideOut = function (m) {
              !1 === this.cssTransitions
                ? this.$slides
                    .eq(m)
                    .animate(
                      { opacity: 0, zIndex: this.options.zIndex - 2 },
                      this.options.speed,
                      this.options.easing
                    )
                : (this.applyTransition(m),
                  this.$slides
                    .eq(m)
                    .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
            };
            O.prototype.filterSlides = O.prototype.slickFilter = function (m) {
              null !== m &&
                ((this.$slidesCache = this.$slides),
                this.unload(),
                this.$slideTrack.children(this.options.slide).detach(),
                this.$slidesCache.filter(m).appendTo(this.$slideTrack),
                this.reinit());
            };
            O.prototype.focusHandler = function () {
              var m = this;
              m.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (z) {
                  z.stopImmediatePropagation();
                  var E = K(this);
                  setTimeout(function () {
                    m.options.pauseOnFocus &&
                      ((m.focussed = E.is(":focus")), m.autoPlay());
                  }, 0);
                });
            };
            O.prototype.getCurrent = O.prototype.slickCurrentSlide = function () {
              return this.currentSlide;
            };
            O.prototype.getDotCount = function () {
              var m = 0,
                z = 0,
                E = 0;
              if (!0 === this.options.infinite)
                if (this.slideCount <= this.options.slidesToShow) ++E;
                else
                  for (; m < this.slideCount; )
                    ++E,
                      (m = z + this.options.slidesToScroll),
                      (z +=
                        this.options.slidesToScroll <= this.options.slidesToShow
                          ? this.options.slidesToScroll
                          : this.options.slidesToShow);
              else if (!0 === this.options.centerMode) E = this.slideCount;
              else if (this.options.asNavFor)
                for (; m < this.slideCount; )
                  ++E,
                    (m = z + this.options.slidesToScroll),
                    (z +=
                      this.options.slidesToScroll <= this.options.slidesToShow
                        ? this.options.slidesToScroll
                        : this.options.slidesToShow);
              else
                E =
                  1 +
                  Math.ceil(
                    (this.slideCount - this.options.slidesToShow) /
                      this.options.slidesToScroll
                  );
              return E - 1;
            };
            O.prototype.getLeft = function (m) {
              var z,
                E,
                A,
                F,
                S = 0;
              return (
                (this.slideOffset = 0),
                (E = this.$slides.first().outerHeight(!0)),
                !0 === this.options.infinite
                  ? (this.slideCount > this.options.slidesToShow &&
                      ((this.slideOffset =
                        this.slideWidth * this.options.slidesToShow * -1),
                      (F = -1),
                      !0 === this.options.vertical &&
                        !0 === this.options.centerMode &&
                        (2 === this.options.slidesToShow
                          ? (F = -1.5)
                          : 1 === this.options.slidesToShow && (F = -2)),
                      (S = E * this.options.slidesToShow * F)),
                    0 != this.slideCount % this.options.slidesToScroll &&
                      m + this.options.slidesToScroll > this.slideCount &&
                      this.slideCount > this.options.slidesToShow &&
                      (m > this.slideCount
                        ? ((this.slideOffset =
                            (this.options.slidesToShow -
                              (m - this.slideCount)) *
                            this.slideWidth *
                            -1),
                          (S =
                            (this.options.slidesToShow -
                              (m - this.slideCount)) *
                            E *
                            -1))
                        : ((this.slideOffset =
                            (this.slideCount % this.options.slidesToScroll) *
                            this.slideWidth *
                            -1),
                          (S =
                            (this.slideCount % this.options.slidesToScroll) *
                            E *
                            -1))))
                  : m + this.options.slidesToShow > this.slideCount &&
                    ((this.slideOffset =
                      (m + this.options.slidesToShow - this.slideCount) *
                      this.slideWidth),
                    (S =
                      (m + this.options.slidesToShow - this.slideCount) * E)),
                this.slideCount <= this.options.slidesToShow &&
                  ((this.slideOffset = 0), (S = 0)),
                !0 === this.options.centerMode &&
                this.slideCount <= this.options.slidesToShow
                  ? (this.slideOffset =
                      (this.slideWidth *
                        Math.floor(this.options.slidesToShow)) /
                        2 -
                      (this.slideWidth * this.slideCount) / 2)
                  : !0 === this.options.centerMode &&
                    !0 === this.options.infinite
                  ? (this.slideOffset +=
                      this.slideWidth *
                        Math.floor(this.options.slidesToShow / 2) -
                      this.slideWidth)
                  : !0 === this.options.centerMode &&
                    ((this.slideOffset = 0),
                    (this.slideOffset +=
                      this.slideWidth *
                      Math.floor(this.options.slidesToShow / 2))),
                (z =
                  !1 === this.options.vertical
                    ? m * this.slideWidth * -1 + this.slideOffset
                    : m * E * -1 + S),
                !0 === this.options.variableWidth &&
                  ((A =
                    this.slideCount <= this.options.slidesToShow ||
                    !1 === this.options.infinite
                      ? this.$slideTrack.children(".slick-slide").eq(m)
                      : this.$slideTrack
                          .children(".slick-slide")
                          .eq(m + this.options.slidesToShow)),
                  (z =
                    !0 === this.options.rtl
                      ? A[0]
                        ? -1 *
                          (this.$slideTrack.width() -
                            A[0].offsetLeft -
                            A.width())
                        : 0
                      : A[0]
                      ? -1 * A[0].offsetLeft
                      : 0),
                  !0 === this.options.centerMode &&
                    ((A =
                      this.slideCount <= this.options.slidesToShow ||
                      !1 === this.options.infinite
                        ? this.$slideTrack.children(".slick-slide").eq(m)
                        : this.$slideTrack
                            .children(".slick-slide")
                            .eq(m + this.options.slidesToShow + 1)),
                    (z =
                      !0 === this.options.rtl
                        ? A[0]
                          ? -1 *
                            (this.$slideTrack.width() -
                              A[0].offsetLeft -
                              A.width())
                          : 0
                        : A[0]
                        ? -1 * A[0].offsetLeft
                        : 0),
                    (z += (this.$list.width() - A.outerWidth()) / 2))),
                z
              );
            };
            O.prototype.getOption = O.prototype.slickGetOption = function (m) {
              return this.options[m];
            };
            O.prototype.getNavigableIndexes = function () {
              var m,
                z = 0,
                E = 0,
                A = [];
              for (
                !1 === this.options.infinite
                  ? (m = this.slideCount)
                  : ((z = -1 * this.options.slidesToScroll),
                    (E = -1 * this.options.slidesToScroll),
                    (m = 2 * this.slideCount));
                z < m;

              )
                A.push(z),
                  (z = E + this.options.slidesToScroll),
                  (E +=
                    this.options.slidesToScroll <= this.options.slidesToShow
                      ? this.options.slidesToScroll
                      : this.options.slidesToShow);
              return A;
            };
            O.prototype.getSlick = function () {
              return this;
            };
            O.prototype.getSlideCount = function () {
              var m,
                z,
                E = this;
              return (
                (z =
                  !0 === E.options.centerMode
                    ? E.slideWidth * Math.floor(E.options.slidesToShow / 2)
                    : 0),
                !0 === E.options.swipeToSlide
                  ? (E.$slideTrack.find(".slick-slide").each(function (A, F) {
                      if (
                        F.offsetLeft - z + K(F).outerWidth() / 2 >
                        -1 * E.swipeLeft
                      )
                        return (m = F), !1;
                    }),
                    Math.abs(K(m).attr("data-slick-index") - E.currentSlide) ||
                      1)
                  : E.options.slidesToScroll
              );
            };
            O.prototype.goTo = O.prototype.slickGoTo = function (m, z) {
              this.changeSlide(
                { data: { message: "index", index: parseInt(m) } },
                z
              );
            };
            O.prototype.init = function (m) {
              K(this.$slider).hasClass("slick-initialized") ||
                (K(this.$slider).addClass("slick-initialized"),
                this.buildRows(),
                this.buildOut(),
                this.setProps(),
                this.startLoad(),
                this.loadSlider(),
                this.initializeEvents(),
                this.updateArrows(),
                this.updateDots(),
                this.checkResponsive(!0),
                this.focusHandler());
              m && this.$slider.trigger("init", [this]);
              !0 === this.options.accessibility && this.initADA();
              this.options.autoplay && ((this.paused = !1), this.autoPlay());
            };
            O.prototype.initADA = function () {
              var m = this,
                z = Math.ceil(m.slideCount / m.options.slidesToShow),
                E = m.getNavigableIndexes().filter(function (S) {
                  return 0 <= S && S < m.slideCount;
                });
              m.$slides
                .add(m.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" });
              null !== m.$dots &&
                (m.$slides
                  .not(m.$slideTrack.find(".slick-cloned"))
                  .each(function (S) {
                    var P = E.indexOf(S);
                    if (
                      (K(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + m.instanceUid + S,
                        tabindex: -1,
                      }),
                      -1 !== P)
                    )
                      (S = "slick-slide-control" + m.instanceUid + P),
                        K("#" + S).length &&
                          K(this).attr({ "aria-describedby": S });
                  }),
                m.$dots
                  .attr("role", "tablist")
                  .find("li")
                  .each(function (S) {
                    var P = E[S];
                    K(this).attr({ role: "presentation" });
                    K(this)
                      .find("button")
                      .first()
                      .attr({
                        role: "tab",
                        id: "slick-slide-control" + m.instanceUid + S,
                        "aria-controls": "slick-slide" + m.instanceUid + P,
                        "aria-label": S + 1 + " of " + z,
                        "aria-selected": null,
                        tabindex: "-1",
                      });
                  })
                  .eq(m.currentSlide)
                  .find("button")
                  .attr({ "aria-selected": "true", tabindex: "0" })
                  .end());
              for (
                var A = m.currentSlide, F = A + m.options.slidesToShow;
                A < F;
                A++
              )
                m.options.focusOnChange
                  ? m.$slides.eq(A).attr({ tabindex: "0" })
                  : m.$slides.eq(A).removeAttr("tabindex");
              m.activateADA();
            };
            O.prototype.initArrowEvents = function () {
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                (this.$prevArrow
                  .off("click.slick")
                  .on("click.slick", { message: "previous" }, this.changeSlide),
                this.$nextArrow
                  .off("click.slick")
                  .on("click.slick", { message: "next" }, this.changeSlide),
                !0 === this.options.accessibility &&
                  (this.$prevArrow.on("keydown.slick", this.keyHandler),
                  this.$nextArrow.on("keydown.slick", this.keyHandler)));
            };
            O.prototype.initDotEvents = function () {
              !0 === this.options.dots &&
                this.slideCount > this.options.slidesToShow &&
                (K("li", this.$dots).on(
                  "click.slick",
                  { message: "index" },
                  this.changeSlide
                ),
                !0 === this.options.accessibility &&
                  this.$dots.on("keydown.slick", this.keyHandler));
              !0 === this.options.dots &&
                !0 === this.options.pauseOnDotsHover &&
                this.slideCount > this.options.slidesToShow &&
                K("li", this.$dots)
                  .on("mouseenter.slick", K.proxy(this.interrupt, this, !0))
                  .on("mouseleave.slick", K.proxy(this.interrupt, this, !1));
            };
            O.prototype.initSlideEvents = function () {
              this.options.pauseOnHover &&
                (this.$list.on(
                  "mouseenter.slick",
                  K.proxy(this.interrupt, this, !0)
                ),
                this.$list.on(
                  "mouseleave.slick",
                  K.proxy(this.interrupt, this, !1)
                ));
            };
            O.prototype.initializeEvents = function () {
              this.initArrowEvents();
              this.initDotEvents();
              this.initSlideEvents();
              this.$list.on(
                "touchstart.slick mousedown.slick",
                { action: "start" },
                this.swipeHandler
              );
              this.$list.on(
                "touchmove.slick mousemove.slick",
                { action: "move" },
                this.swipeHandler
              );
              this.$list.on(
                "touchend.slick mouseup.slick",
                { action: "end" },
                this.swipeHandler
              );
              this.$list.on(
                "touchcancel.slick mouseleave.slick",
                { action: "end" },
                this.swipeHandler
              );
              this.$list.on("click.slick", this.clickHandler);
              K(document).on(
                this.visibilityChange,
                K.proxy(this.visibility, this)
              );
              !0 === this.options.accessibility &&
                this.$list.on("keydown.slick", this.keyHandler);
              !0 === this.options.focusOnSelect &&
                K(this.$slideTrack)
                  .children()
                  .on("click.slick", this.selectHandler);
              K(window).on(
                "orientationchange.slick.slick-" + this.instanceUid,
                K.proxy(this.orientationChange, this)
              );
              K(window).on(
                "resize.slick.slick-" + this.instanceUid,
                K.proxy(this.resize, this)
              );
              K("[draggable!=true]", this.$slideTrack).on(
                "dragstart",
                this.preventDefault
              );
              K(window).on(
                "load.slick.slick-" + this.instanceUid,
                this.setPosition
              );
              K(this.setPosition);
            };
            O.prototype.initUI = function () {
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                (this.$prevArrow.show(), this.$nextArrow.show());
              !0 === this.options.dots &&
                this.slideCount > this.options.slidesToShow &&
                this.$dots.show();
            };
            O.prototype.keyHandler = function (m) {
              m.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === m.keyCode && !0 === this.options.accessibility
                  ? this.changeSlide({
                      data: {
                        message: !0 === this.options.rtl ? "next" : "previous",
                      },
                    })
                  : 39 === m.keyCode &&
                    !0 === this.options.accessibility &&
                    this.changeSlide({
                      data: {
                        message: !0 === this.options.rtl ? "previous" : "next",
                      },
                    }));
            };
            O.prototype.lazyLoad = function () {
              function m(G) {
                K("img[data-lazy]", G).each(function () {
                  var ea = K(this),
                    ca = K(this).attr("data-lazy"),
                    Ua = K(this).attr("data-srcset"),
                    Ma =
                      K(this).attr("data-sizes") ||
                      F.$slider.attr("data-sizes"),
                    Y = document.createElement("img");
                  Y.onload = function () {
                    ea.animate({ opacity: 0 }, 100, function () {
                      Ua && (ea.attr("srcset", Ua), Ma && ea.attr("sizes", Ma));
                      ea.attr("src", ca).animate(
                        { opacity: 1 },
                        200,
                        function () {
                          ea.removeAttr(
                            "data-lazy data-srcset data-sizes"
                          ).removeClass("slick-loading");
                        }
                      );
                      F.$slider.trigger("lazyLoaded", [F, ea, ca]);
                    });
                  };
                  Y.onerror = function () {
                    ea.removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error");
                    F.$slider.trigger("lazyLoadError", [F, ea, ca]);
                  };
                  Y.src = ca;
                });
              }
              var z,
                E,
                A,
                F = this;
              if (
                (!0 === F.options.centerMode
                  ? !0 === F.options.infinite
                    ? (A =
                        (E =
                          F.currentSlide + (F.options.slidesToShow / 2 + 1)) +
                        F.options.slidesToShow +
                        2)
                    : ((E = Math.max(
                        0,
                        F.currentSlide - (F.options.slidesToShow / 2 + 1)
                      )),
                      (A = F.options.slidesToShow / 2 + 3 + F.currentSlide))
                  : ((E = F.options.infinite
                      ? F.options.slidesToShow + F.currentSlide
                      : F.currentSlide),
                    (A = Math.ceil(E + F.options.slidesToShow)),
                    !0 === F.options.fade &&
                      (0 < E && E--, A <= F.slideCount && A++)),
                (z = F.$slider.find(".slick-slide").slice(E, A)),
                "anticipated" === F.options.lazyLoad)
              ) {
                --E;
                for (
                  var S = F.$slider.find(".slick-slide"), P = 0;
                  P < F.options.slidesToScroll;
                  P++
                )
                  0 > E && (E = F.slideCount - 1),
                    (z = (z = z.add(S.eq(E))).add(S.eq(A))),
                    E--,
                    A++;
              }
              m(z);
              F.slideCount <= F.options.slidesToShow
                ? m(F.$slider.find(".slick-slide"))
                : F.currentSlide >= F.slideCount - F.options.slidesToShow
                ? m(
                    F.$slider
                      .find(".slick-cloned")
                      .slice(0, F.options.slidesToShow)
                  )
                : 0 === F.currentSlide &&
                  m(
                    F.$slider
                      .find(".slick-cloned")
                      .slice(-1 * F.options.slidesToShow)
                  );
            };
            O.prototype.loadSlider = function () {
              this.setPosition();
              this.$slideTrack.css({ opacity: 1 });
              this.$slider.removeClass("slick-loading");
              this.initUI();
              "progressive" === this.options.lazyLoad &&
                this.progressiveLazyLoad();
            };
            O.prototype.next = O.prototype.slickNext = function () {
              this.changeSlide({ data: { message: "next" } });
            };
            O.prototype.orientationChange = function () {
              this.checkResponsive();
              this.setPosition();
            };
            O.prototype.pause = O.prototype.slickPause = function () {
              this.autoPlayClear();
              this.paused = !0;
            };
            O.prototype.play = O.prototype.slickPlay = function () {
              this.autoPlay();
              this.options.autoplay = !0;
              this.interrupted = this.focussed = this.paused = !1;
            };
            O.prototype.postSlide = function (m) {
              this.unslicked ||
                (this.$slider.trigger("afterChange", [this, m]),
                (this.animating = !1),
                this.slideCount > this.options.slidesToShow &&
                  this.setPosition(),
                (this.swipeLeft = null),
                this.options.autoplay && this.autoPlay(),
                !0 === this.options.accessibility &&
                  (this.initADA(),
                  this.options.focusOnChange &&
                    K(this.$slides.get(this.currentSlide))
                      .attr("tabindex", 0)
                      .focus()));
            };
            O.prototype.prev = O.prototype.slickPrev = function () {
              this.changeSlide({ data: { message: "previous" } });
            };
            O.prototype.preventDefault = function (m) {
              m.preventDefault();
            };
            O.prototype.progressiveLazyLoad = function (m) {
              m = m || 1;
              var z,
                E,
                A,
                F,
                S,
                P = this,
                G = K("img[data-lazy]", P.$slider);
              G.length
                ? ((z = G.first()),
                  (E = z.attr("data-lazy")),
                  (A = z.attr("data-srcset")),
                  (F = z.attr("data-sizes") || P.$slider.attr("data-sizes")),
                  ((S = document.createElement("img")).onload = function () {
                    A && (z.attr("srcset", A), F && z.attr("sizes", F));
                    z.attr("src", E)
                      .removeAttr("data-lazy data-srcset data-sizes")
                      .removeClass("slick-loading");
                    !0 === P.options.adaptiveHeight && P.setPosition();
                    P.$slider.trigger("lazyLoaded", [P, z, E]);
                    P.progressiveLazyLoad();
                  }),
                  (S.onerror = function () {
                    3 > m
                      ? setTimeout(function () {
                          P.progressiveLazyLoad(m + 1);
                        }, 500)
                      : (z
                          .removeAttr("data-lazy")
                          .removeClass("slick-loading")
                          .addClass("slick-lazyload-error"),
                        P.$slider.trigger("lazyLoadError", [P, z, E]),
                        P.progressiveLazyLoad());
                  }),
                  (S.src = E))
                : P.$slider.trigger("allImagesLoaded", [P]);
            };
            O.prototype.refresh = function (m) {
              var z = this.slideCount - this.options.slidesToShow;
              !this.options.infinite &&
                this.currentSlide > z &&
                (this.currentSlide = z);
              this.slideCount <= this.options.slidesToShow &&
                (this.currentSlide = 0);
              z = this.currentSlide;
              this.destroy(!0);
              K.extend(this, this.initials, { currentSlide: z });
              this.init();
              m ||
                this.changeSlide({ data: { message: "index", index: z } }, !1);
            };
            O.prototype.registerBreakpoints = function () {
              var m,
                z,
                E,
                A = this,
                F = A.options.responsive || null;
              if ("array" === K.type(F) && F.length) {
                for (m in ((A.respondTo = A.options.respondTo || "window"), F))
                  if (((E = A.breakpoints.length - 1), F.hasOwnProperty(m))) {
                    for (z = F[m].breakpoint; 0 <= E; )
                      A.breakpoints[E] &&
                        A.breakpoints[E] === z &&
                        A.breakpoints.splice(E, 1),
                        E--;
                    A.breakpoints.push(z);
                    A.breakpointSettings[z] = F[m].settings;
                  }
                A.breakpoints.sort(function (S, P) {
                  return A.options.mobileFirst ? S - P : P - S;
                });
              }
            };
            O.prototype.reinit = function () {
              this.$slides = this.$slideTrack
                .children(this.options.slide)
                .addClass("slick-slide");
              this.slideCount = this.$slides.length;
              this.currentSlide >= this.slideCount &&
                0 !== this.currentSlide &&
                (this.currentSlide -= this.options.slidesToScroll);
              this.slideCount <= this.options.slidesToShow &&
                (this.currentSlide = 0);
              this.registerBreakpoints();
              this.setProps();
              this.setupInfinite();
              this.buildArrows();
              this.updateArrows();
              this.initArrowEvents();
              this.buildDots();
              this.updateDots();
              this.initDotEvents();
              this.cleanUpSlideEvents();
              this.initSlideEvents();
              this.checkResponsive(!1, !0);
              !0 === this.options.focusOnSelect &&
                K(this.$slideTrack)
                  .children()
                  .on("click.slick", this.selectHandler);
              this.setSlideClasses(
                "number" == typeof this.currentSlide ? this.currentSlide : 0
              );
              this.setPosition();
              this.focusHandler();
              this.paused = !this.options.autoplay;
              this.autoPlay();
              this.$slider.trigger("reInit", [this]);
            };
            O.prototype.resize = function () {
              var m = this;
              K(window).width() !== m.windowWidth &&
                (clearTimeout(m.windowDelay),
                (m.windowDelay = window.setTimeout(function () {
                  m.windowWidth = K(window).width();
                  m.checkResponsive();
                  m.unslicked || m.setPosition();
                }, 50)));
            };
            O.prototype.removeSlide = O.prototype.slickRemove = function (
              m,
              z,
              E
            ) {
              if (
                ((m =
                  "boolean" == typeof m
                    ? !0 === m
                      ? 0
                      : this.slideCount - 1
                    : !0 === z
                    ? --m
                    : m),
                1 > this.slideCount || 0 > m || m > this.slideCount - 1)
              )
                return !1;
              this.unload();
              !0 === E
                ? this.$slideTrack.children().remove()
                : this.$slideTrack.children(this.options.slide).eq(m).remove();
              this.$slides = this.$slideTrack.children(this.options.slide);
              this.$slideTrack.children(this.options.slide).detach();
              this.$slideTrack.append(this.$slides);
              this.$slidesCache = this.$slides;
              this.reinit();
            };
            O.prototype.setCSS = function (m) {
              var z = {};
              !0 === this.options.rtl && (m = -m);
              var E = "left" == this.positionProp ? Math.ceil(m) + "px" : "0px";
              var A = "top" == this.positionProp ? Math.ceil(m) + "px" : "0px";
              z[this.positionProp] = m;
              !1 === this.transformsEnabled
                ? this.$slideTrack.css(z)
                : ((z = {}),
                  !1 === this.cssTransitions
                    ? ((z[this.animType] = "translate(" + E + ", " + A + ")"),
                      this.$slideTrack.css(z))
                    : ((z[this.animType] =
                        "translate3d(" + E + ", " + A + ", 0px)"),
                      this.$slideTrack.css(z)));
            };
            O.prototype.setDimensions = function () {
              !1 === this.options.vertical
                ? !0 === this.options.centerMode &&
                  this.$list.css({
                    padding: "0px " + this.options.centerPadding,
                  })
                : (this.$list.height(
                    this.$slides.first().outerHeight(!0) *
                      this.options.slidesToShow
                  ),
                  !0 === this.options.centerMode &&
                    this.$list.css({
                      padding: this.options.centerPadding + " 0px",
                    }));
              this.listWidth = this.$list.width();
              this.listHeight = this.$list.height();
              !1 === this.options.vertical && !1 === this.options.variableWidth
                ? ((this.slideWidth = Math.ceil(
                    this.listWidth / this.options.slidesToShow
                  )),
                  this.$slideTrack.width(
                    Math.ceil(
                      this.slideWidth *
                        this.$slideTrack.children(".slick-slide").length
                    )
                  ))
                : !0 === this.options.variableWidth
                ? this.$slideTrack.width(5e3 * this.slideCount)
                : ((this.slideWidth = Math.ceil(this.listWidth)),
                  this.$slideTrack.height(
                    Math.ceil(
                      this.$slides.first().outerHeight(!0) *
                        this.$slideTrack.children(".slick-slide").length
                    )
                  ));
              var m =
                this.$slides.first().outerWidth(!0) -
                this.$slides.first().width();
              !1 === this.options.variableWidth &&
                this.$slideTrack
                  .children(".slick-slide")
                  .width(this.slideWidth - m);
            };
            O.prototype.setFade = function () {
              var m,
                z = this;
              z.$slides.each(function (E, A) {
                m = z.slideWidth * E * -1;
                !0 === z.options.rtl
                  ? K(A).css({
                      position: "relative",
                      right: m,
                      top: 0,
                      zIndex: z.options.zIndex - 2,
                      opacity: 0,
                    })
                  : K(A).css({
                      position: "relative",
                      left: m,
                      top: 0,
                      zIndex: z.options.zIndex - 2,
                      opacity: 0,
                    });
              });
              z.$slides
                .eq(z.currentSlide)
                .css({ zIndex: z.options.zIndex - 1, opacity: 1 });
            };
            O.prototype.setHeight = function () {
              if (
                1 === this.options.slidesToShow &&
                !0 === this.options.adaptiveHeight &&
                !1 === this.options.vertical
              ) {
                var m = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", m);
              }
            };
            O.prototype.setOption = O.prototype.slickSetOption = function (
              m,
              z,
              E
            ) {
              var A,
                F,
                S,
                P,
                G = this,
                ea = !1;
              if (
                ("object" === K.type(m)
                  ? ((F = m), (ea = z), (P = "multiple"))
                  : "string" === K.type(m) &&
                    ((F = m),
                    (S = z),
                    (ea = E),
                    "responsive" === m && "array" === K.type(z)
                      ? (P = "responsive")
                      : void 0 !== z && (P = "single")),
                "single" === P)
              )
                G.options[F] = S;
              else if ("multiple" === P)
                K.each(F, function (ca, Ua) {
                  G.options[ca] = Ua;
                });
              else if ("responsive" === P)
                for (A in S)
                  if ("array" !== K.type(G.options.responsive))
                    G.options.responsive = [S[A]];
                  else {
                    for (m = G.options.responsive.length - 1; 0 <= m; )
                      G.options.responsive[m].breakpoint === S[A].breakpoint &&
                        G.options.responsive.splice(m, 1),
                        m--;
                    G.options.responsive.push(S[A]);
                  }
              ea && (G.unload(), G.reinit());
            };
            O.prototype.setPosition = function () {
              this.setDimensions();
              this.setHeight();
              !1 === this.options.fade
                ? this.setCSS(this.getLeft(this.currentSlide))
                : this.setFade();
              this.$slider.trigger("setPosition", [this]);
            };
            O.prototype.setProps = function () {
              var m = document.body.style;
              this.positionProp = !0 === this.options.vertical ? "top" : "left";
              "top" === this.positionProp
                ? this.$slider.addClass("slick-vertical")
                : this.$slider.removeClass("slick-vertical");
              (void 0 === m.WebkitTransition &&
                void 0 === m.MozTransition &&
                void 0 === m.msTransition) ||
                (!0 === this.options.useCSS && (this.cssTransitions = !0));
              this.options.fade &&
                ("number" == typeof this.options.zIndex
                  ? 3 > this.options.zIndex && (this.options.zIndex = 3)
                  : (this.options.zIndex = this.defaults.zIndex));
              void 0 !== m.OTransform &&
                ((this.animType = "OTransform"),
                (this.transformType = "-o-transform"),
                (this.transitionType = "OTransition"),
                void 0 === m.perspectiveProperty &&
                  void 0 === m.webkitPerspective &&
                  (this.animType = !1));
              void 0 !== m.MozTransform &&
                ((this.animType = "MozTransform"),
                (this.transformType = "-moz-transform"),
                (this.transitionType = "MozTransition"),
                void 0 === m.perspectiveProperty &&
                  void 0 === m.MozPerspective &&
                  (this.animType = !1));
              void 0 !== m.webkitTransform &&
                ((this.animType = "webkitTransform"),
                (this.transformType = "-webkit-transform"),
                (this.transitionType = "webkitTransition"),
                void 0 === m.perspectiveProperty &&
                  void 0 === m.webkitPerspective &&
                  (this.animType = !1));
              void 0 !== m.msTransform &&
                ((this.animType = "msTransform"),
                (this.transformType = "-ms-transform"),
                (this.transitionType = "msTransition"),
                void 0 === m.msTransform && (this.animType = !1));
              void 0 !== m.transform &&
                !1 !== this.animType &&
                ((this.animType = "transform"),
                (this.transformType = "transform"),
                (this.transitionType = "transition"));
              this.transformsEnabled =
                this.options.useTransform &&
                null !== this.animType &&
                !1 !== this.animType;
            };
            O.prototype.setSlideClasses = function (m) {
              var z, E;
              if (
                ((z = this.$slider
                  .find(".slick-slide")
                  .removeClass("slick-active slick-center slick-current")
                  .attr("aria-hidden", "true")),
                this.$slides.eq(m).addClass("slick-current"),
                !0 === this.options.centerMode)
              ) {
                var A = 0 == this.options.slidesToShow % 2 ? 1 : 0;
                var F = Math.floor(this.options.slidesToShow / 2);
                !0 === this.options.infinite &&
                  (m >= F && m <= this.slideCount - 1 - F
                    ? this.$slides
                        .slice(m - F + A, m + F + 1)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                    : ((E = this.options.slidesToShow + m),
                      z
                        .slice(E - F + 1 + A, E + F + 2)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")),
                  0 === m
                    ? z
                        .eq(z.length - 1 - this.options.slidesToShow)
                        .addClass("slick-center")
                    : m === this.slideCount - 1 &&
                      z.eq(this.options.slidesToShow).addClass("slick-center"));
                this.$slides.eq(m).addClass("slick-center");
              } else
                0 <= m && m <= this.slideCount - this.options.slidesToShow
                  ? this.$slides
                      .slice(m, m + this.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : z.length <= this.options.slidesToShow
                  ? z.addClass("slick-active").attr("aria-hidden", "false")
                  : ((F = this.slideCount % this.options.slidesToShow),
                    (E =
                      !0 === this.options.infinite
                        ? this.options.slidesToShow + m
                        : m),
                    this.options.slidesToShow == this.options.slidesToScroll &&
                    this.slideCount - m < this.options.slidesToShow
                      ? z
                          .slice(E - (this.options.slidesToShow - F), E + F)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : z
                          .slice(E, E + this.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false"));
              ("ondemand" !== this.options.lazyLoad &&
                "anticipated" !== this.options.lazyLoad) ||
                this.lazyLoad();
            };
            O.prototype.setupInfinite = function () {
              var m, z;
              if (
                (!0 === this.options.fade && (this.options.centerMode = !1),
                !0 === this.options.infinite &&
                  !1 === this.options.fade &&
                  ((z = null), this.slideCount > this.options.slidesToShow))
              ) {
                var E =
                  !0 === this.options.centerMode
                    ? this.options.slidesToShow + 1
                    : this.options.slidesToShow;
                for (m = this.slideCount; m > this.slideCount - E; --m)
                  (z = m - 1),
                    K(this.$slides[z])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", z - this.slideCount)
                      .prependTo(this.$slideTrack)
                      .addClass("slick-cloned");
                for (m = 0; m < E + this.slideCount; m += 1)
                  (z = m),
                    K(this.$slides[z])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", z + this.slideCount)
                      .appendTo(this.$slideTrack)
                      .addClass("slick-cloned");
                this.$slideTrack
                  .find(".slick-cloned")
                  .find("[id]")
                  .each(function () {
                    K(this).attr("id", "");
                  });
              }
            };
            O.prototype.interrupt = function (m) {
              m || this.autoPlay();
              this.interrupted = m;
            };
            O.prototype.selectHandler = function (m) {
              m = K(m.target).is(".slick-slide")
                ? K(m.target)
                : K(m.target).parents(".slick-slide");
              (m = parseInt(m.attr("data-slick-index"))) || (m = 0);
              this.slideCount <= this.options.slidesToShow
                ? this.slideHandler(m, !1, !0)
                : this.slideHandler(m);
            };
            O.prototype.slideHandler = function (m, z, E) {
              var A,
                F,
                S,
                P,
                G = this;
              if (
                ((z = z || !1),
                !(
                  (!0 === G.animating && !0 === G.options.waitForAnimate) ||
                  (!0 === G.options.fade && G.currentSlide === m)
                ))
              )
                if (
                  (!1 === z && G.asNavFor(m),
                  (A = m),
                  (z = G.getLeft(A)),
                  (S = G.getLeft(G.currentSlide)),
                  (G.currentLeft = null === G.swipeLeft ? S : G.swipeLeft),
                  !1 === G.options.infinite &&
                    !1 === G.options.centerMode &&
                    (0 > m || m > G.getDotCount() * G.options.slidesToScroll))
                )
                  !1 === G.options.fade &&
                    ((A = G.currentSlide),
                    !0 !== E && G.slideCount > G.options.slidesToShow
                      ? G.animateSlide(S, function () {
                          G.postSlide(A);
                        })
                      : G.postSlide(A));
                else if (
                  !1 === G.options.infinite &&
                  !0 === G.options.centerMode &&
                  (0 > m || m > G.slideCount - G.options.slidesToScroll)
                )
                  !1 === G.options.fade &&
                    ((A = G.currentSlide),
                    !0 !== E && G.slideCount > G.options.slidesToShow
                      ? G.animateSlide(S, function () {
                          G.postSlide(A);
                        })
                      : G.postSlide(A));
                else {
                  if (
                    (G.options.autoplay && clearInterval(G.autoPlayTimer),
                    (F =
                      0 > A
                        ? 0 != G.slideCount % G.options.slidesToScroll
                          ? G.slideCount -
                            (G.slideCount % G.options.slidesToScroll)
                          : G.slideCount + A
                        : A >= G.slideCount
                        ? 0 != G.slideCount % G.options.slidesToScroll
                          ? 0
                          : A - G.slideCount
                        : A),
                    (G.animating = !0),
                    G.$slider.trigger("beforeChange", [G, G.currentSlide, F]),
                    (m = G.currentSlide),
                    (G.currentSlide = F),
                    G.setSlideClasses(G.currentSlide),
                    G.options.asNavFor &&
                      (P = (P = G.getNavTarget()).slick("getSlick"))
                        .slideCount <= P.options.slidesToShow &&
                      P.setSlideClasses(G.currentSlide),
                    G.updateDots(),
                    G.updateArrows(),
                    !0 === G.options.fade)
                  )
                    return (
                      !0 !== E
                        ? (G.fadeSlideOut(m),
                          G.fadeSlide(F, function () {
                            G.postSlide(F);
                          }))
                        : G.postSlide(F),
                      void G.animateHeight()
                    );
                  !0 !== E && G.slideCount > G.options.slidesToShow
                    ? G.animateSlide(z, function () {
                        G.postSlide(F);
                      })
                    : G.postSlide(F);
                }
            };
            O.prototype.startLoad = function () {
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                (this.$prevArrow.hide(), this.$nextArrow.hide());
              !0 === this.options.dots &&
                this.slideCount > this.options.slidesToShow &&
                this.$dots.hide();
              this.$slider.addClass("slick-loading");
            };
            O.prototype.swipeDirection = function () {
              var m, z, E, A;
              return (
                (m = this.touchObject.startX - this.touchObject.curX),
                (z = this.touchObject.startY - this.touchObject.curY),
                (E = Math.atan2(z, m)),
                0 > (A = Math.round((180 * E) / Math.PI)) &&
                  (A = 360 - Math.abs(A)),
                (45 >= A && 0 <= A) || (360 >= A && 315 <= A)
                  ? !1 === this.options.rtl
                    ? "left"
                    : "right"
                  : 135 <= A && 225 >= A
                  ? !1 === this.options.rtl
                    ? "right"
                    : "left"
                  : !0 === this.options.verticalSwiping
                  ? 35 <= A && 135 >= A
                    ? "down"
                    : "up"
                  : "vertical"
              );
            };
            O.prototype.swipeEnd = function (m) {
              if (((this.dragging = !1), (this.swiping = !1), this.scrolling))
                return (this.scrolling = !1), !1;
              if (
                ((this.interrupted = !1),
                (this.shouldClick = !(10 < this.touchObject.swipeLength)),
                void 0 === this.touchObject.curX)
              )
                return !1;
              if (
                (!0 === this.touchObject.edgeHit &&
                  this.$slider.trigger("edge", [this, this.swipeDirection()]),
                this.touchObject.swipeLength >= this.touchObject.minSwipe)
              ) {
                switch ((m = this.swipeDirection())) {
                  case "left":
                  case "down":
                    var z = this.options.swipeToSlide
                      ? this.checkNavigable(
                          this.currentSlide + this.getSlideCount()
                        )
                      : this.currentSlide + this.getSlideCount();
                    this.currentDirection = 0;
                    break;
                  case "right":
                  case "up":
                    (z = this.options.swipeToSlide
                      ? this.checkNavigable(
                          this.currentSlide - this.getSlideCount()
                        )
                      : this.currentSlide - this.getSlideCount()),
                      (this.currentDirection = 1);
                }
                "vertical" != m &&
                  (this.slideHandler(z),
                  (this.touchObject = {}),
                  this.$slider.trigger("swipe", [this, m]));
              } else
                this.touchObject.startX !== this.touchObject.curX &&
                  (this.slideHandler(this.currentSlide),
                  (this.touchObject = {}));
            };
            O.prototype.swipeHandler = function (m) {
              if (
                !(
                  !1 === this.options.swipe ||
                  ("ontouchend" in document && !1 === this.options.swipe) ||
                  (!1 === this.options.draggable &&
                    -1 !== m.type.indexOf("mouse"))
                )
              )
                switch (
                  ((this.touchObject.fingerCount =
                    m.originalEvent && void 0 !== m.originalEvent.touches
                      ? m.originalEvent.touches.length
                      : 1),
                  (this.touchObject.minSwipe =
                    this.listWidth / this.options.touchThreshold),
                  !0 === this.options.verticalSwiping &&
                    (this.touchObject.minSwipe =
                      this.listHeight / this.options.touchThreshold),
                  m.data.action)
                ) {
                  case "start":
                    this.swipeStart(m);
                    break;
                  case "move":
                    this.swipeMove(m);
                    break;
                  case "end":
                    this.swipeEnd(m);
                }
            };
            O.prototype.swipeMove = function (m) {
              var z, E, A, F, S, P;
              return (
                (S =
                  void 0 !== m.originalEvent ? m.originalEvent.touches : null),
                !(!this.dragging || this.scrolling || (S && 1 !== S.length)) &&
                  ((z = this.getLeft(this.currentSlide)),
                  (this.touchObject.curX =
                    void 0 !== S ? S[0].pageX : m.clientX),
                  (this.touchObject.curY =
                    void 0 !== S ? S[0].pageY : m.clientY),
                  (this.touchObject.swipeLength = Math.round(
                    Math.sqrt(
                      Math.pow(
                        this.touchObject.curX - this.touchObject.startX,
                        2
                      )
                    )
                  )),
                  (P = Math.round(
                    Math.sqrt(
                      Math.pow(
                        this.touchObject.curY - this.touchObject.startY,
                        2
                      )
                    )
                  )),
                  !this.options.verticalSwiping && !this.swiping && 4 < P
                    ? ((this.scrolling = !0), !1)
                    : (!0 === this.options.verticalSwiping &&
                        (this.touchObject.swipeLength = P),
                      (E = this.swipeDirection()),
                      void 0 !== m.originalEvent &&
                        4 < this.touchObject.swipeLength &&
                        ((this.swiping = !0), m.preventDefault()),
                      (F =
                        (!1 === this.options.rtl ? 1 : -1) *
                        (this.touchObject.curX > this.touchObject.startX
                          ? 1
                          : -1)),
                      !0 === this.options.verticalSwiping &&
                        (F =
                          this.touchObject.curY > this.touchObject.startY
                            ? 1
                            : -1),
                      (A = this.touchObject.swipeLength),
                      (this.touchObject.edgeHit = !1),
                      !1 === this.options.infinite &&
                        ((0 === this.currentSlide && "right" === E) ||
                          (this.currentSlide >= this.getDotCount() &&
                            "left" === E)) &&
                        ((A =
                          this.touchObject.swipeLength *
                          this.options.edgeFriction),
                        (this.touchObject.edgeHit = !0)),
                      !1 === this.options.vertical
                        ? (this.swipeLeft = z + A * F)
                        : (this.swipeLeft =
                            z + A * (this.$list.height() / this.listWidth) * F),
                      !0 === this.options.verticalSwiping &&
                        (this.swipeLeft = z + A * F),
                      !0 !== this.options.fade &&
                        !1 !== this.options.touchMove &&
                        (!0 === this.animating
                          ? ((this.swipeLeft = null), !1)
                          : void this.setCSS(this.swipeLeft))))
              );
            };
            O.prototype.swipeStart = function (m) {
              var z;
              if (
                ((this.interrupted = !0),
                1 !== this.touchObject.fingerCount ||
                  this.slideCount <= this.options.slidesToShow)
              )
                return (this.touchObject = {}), !1;
              void 0 !== m.originalEvent &&
                void 0 !== m.originalEvent.touches &&
                (z = m.originalEvent.touches[0]);
              this.touchObject.startX = this.touchObject.curX =
                void 0 !== z ? z.pageX : m.clientX;
              this.touchObject.startY = this.touchObject.curY =
                void 0 !== z ? z.pageY : m.clientY;
              this.dragging = !0;
            };
            O.prototype.unfilterSlides = O.prototype.slickUnfilter = function () {
              null !== this.$slidesCache &&
                (this.unload(),
                this.$slideTrack.children(this.options.slide).detach(),
                this.$slidesCache.appendTo(this.$slideTrack),
                this.reinit());
            };
            O.prototype.unload = function () {
              K(".slick-cloned", this.$slider).remove();
              this.$dots && this.$dots.remove();
              this.$prevArrow &&
                this.htmlExpr.test(this.options.prevArrow) &&
                this.$prevArrow.remove();
              this.$nextArrow &&
                this.htmlExpr.test(this.options.nextArrow) &&
                this.$nextArrow.remove();
              this.$slides
                .removeClass(
                  "slick-slide slick-active slick-visible slick-current"
                )
                .attr("aria-hidden", "true")
                .css("width", "");
            };
            O.prototype.unslick = function (m) {
              this.$slider.trigger("unslick", [this, m]);
              this.destroy();
            };
            O.prototype.updateArrows = function () {
              Math.floor(this.options.slidesToShow / 2);
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                !this.options.infinite &&
                (this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"),
                this.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"),
                0 === this.currentSlide
                  ? (this.$prevArrow
                      .addClass("slick-disabled")
                      .attr("aria-disabled", "true"),
                    this.$nextArrow
                      .removeClass("slick-disabled")
                      .attr("aria-disabled", "false"))
                  : ((this.currentSlide >=
                      this.slideCount - this.options.slidesToShow &&
                      !1 === this.options.centerMode) ||
                      (this.currentSlide >= this.slideCount - 1 &&
                        !0 === this.options.centerMode)) &&
                    (this.$nextArrow
                      .addClass("slick-disabled")
                      .attr("aria-disabled", "true"),
                    this.$prevArrow
                      .removeClass("slick-disabled")
                      .attr("aria-disabled", "false")));
            };
            O.prototype.updateDots = function () {
              null !== this.$dots &&
                (this.$dots.find("li").removeClass("slick-active").end(),
                this.$dots
                  .find("li")
                  .eq(
                    Math.floor(this.currentSlide / this.options.slidesToScroll)
                  )
                  .addClass("slick-active"));
            };
            O.prototype.visibility = function () {
              this.options.autoplay &&
                (document[this.hidden]
                  ? (this.interrupted = !0)
                  : (this.interrupted = !1));
            };
            K.fn.slick = function () {
              var m,
                z,
                E = arguments[0],
                A = Array.prototype.slice.call(arguments, 1),
                F = this.length;
              for (m = 0; m < F; m++)
                if (
                  ("object" == typeof E || void 0 === E
                    ? (this[m].slick = new O(this[m], E))
                    : (z = this[m].slick[E].apply(this[m].slick, A)),
                  void 0 !== z)
                )
                  return z;
              return this;
            };
            var Ja;
          })
            ? I.apply(Z, Q)
            : I) || (V.exports = Ia);
    })();
  },
  function (V, Z, N) {
    Z = N(1);
    N = N(7);
    "string" == typeof (N = N.__esModule ? N["default"] : N) &&
      (N = [[V.i, N, ""]]);
    Z(N, { insert: "head", singleton: !1 });
    V.exports = N.locals || {};
  },
  function (V, Z, N) {},
  function (V, Z, N) {
    Z = N(1);
    N = N(9);
    "string" == typeof (N = N.__esModule ? N["default"] : N) &&
      (N = [[V.i, N, ""]]);
    Z(N, { insert: "head", singleton: !1 });
    V.exports = N.locals || {};
  },
  function (V, Z, N) {},
  function (V, Z, N) {
    Z = N(1);
    N = N(11);
    "string" == typeof (N = N.__esModule ? N["default"] : N) &&
      (N = [[V.i, N, ""]]);
    Z(N, { insert: "head", singleton: !1 });
    V.exports = N.locals || {};
  },
  function (V, Z, N) {},
  function (V, Z, N) {
    Z = N(1);
    N = N(13);
    "string" == typeof (N = N.__esModule ? N["default"] : N) &&
      (N = [[V.i, N, ""]]);
    Z(N, { insert: "head", singleton: !1 });
    V.exports = N.locals || {};
  },
  function (V, Z, N) {},
  function (V, Z, N) {
    N.r(Z);
    V = N(0);
    var I = N.n(V);
    V = N(2);
    var Q = N.n(V);
    I()(document).ready(function () {
      I.a.each(I()(".ibg"), function (A, F) {
        0 < I()(this).find("img").length &&
          I()(this).css(
            "background-image",
            'url("' + I()(this).find("img").attr("src") + '")'
          );
      });
    });
    I()(window).on("load", function () {
      I()(".cssload").delay(200).fadeOut("slow");
    });
    var Ia;
    V = document.querySelector(".wrapper");
    var Ha = document.querySelector(".header__menu_overlay"),
      K = document.querySelector(".header-burger"),
      O = document.body,
      Ja = document.querySelector(".header__body"),
      m = document.querySelector("#header__menu"),
      z = document.querySelector(".header__service");
    V.addEventListener("click", function (A) {
      A.target == K
        ? (m.classList.add("header__menu_act"),
          m.appendChild(z),
          z.classList.add("header-service_act"),
          O.classList.add("lock"))
        : Ha !== A.target &&
          document.querySelector("input") !== A.target &&
          document.querySelector("i") !== A.target &&
          document.querySelector(".bg") !== A.target &&
          (m.classList.remove("header__menu_act"),
          z.classList.remove("header-service_act"),
          Ja.appendChild(z),
          O.classList.remove("lock"));
      A.target == document.querySelector(".header-close") &&
        (m.classList.remove("header__menu_act"), O.classList.remove("lock"));
    });
    window.addEventListener("resize", function (A) {
      992 < document.documentElement.clientWidth &&
        m.classList.contains("header__menu_act") &&
        (m.classList.remove("header__menu_act"),
        z.classList.remove("header-service_act"),
        Ja.appendChild(z),
        (O.style.overflow = "visible"));
    });
    window.addEventListener("scroll", function (A) {
      150 < window.pageYOffset
        ? document.querySelector(".header").classList.add("responciveHeader")
        : document
            .querySelector(".header")
            .classList.remove("responciveHeader");
    });
    var E = document.querySelector(".up_down_btn");
    window.addEventListener("scroll", function () {
      var A = window.pageYOffset;
      200 < A &&
        (E.classList.add("up_down_btn-show"),
        (E.innerHTML = "&uarr;"),
        E.setAttribute("title", "\u041d\u0430\u0432\u0435\u0440\u0445"),
        (Ia = !1));
      200 > A &&
        ((E.innerHTML = "&darr;"),
        E.setAttribute("title", "\u0412\u043d\u0438\u0437"),
        (Ia = !0));
    });
    E.addEventListener("click", function () {
      E.classList.add("up_down_btn-disabled");
      Ia
        ? Ia &&
          (function F() {
            Math.ceil(
              window.pageYOffset + document.documentElement.clientHeight
            ) != document.documentElement.scrollHeight
              ? (window.scrollBy(0, 15), setTimeout(F, 0))
              : E.classList.remove("up_down_btn-disabled");
          })()
        : (function S() {
            0 !== window.pageYOffset
              ? (window.scrollBy(0, -15), setTimeout(S, 0))
              : E.classList.remove("up_down_btn-disabled");
          })();
    });
    I()(document).ready(function (A) {
      I()('a[href^="#slider"]').click(function () {
        var F = I()(this).attr("href");
        return (
          I()("html, body").animate(
            { scrollTop: I()(F).offset().top - 60 },
            800
          ),
          m.classList.remove("header__menu_act"),
          z.classList.remove("header-service_act"),
          Ja.appendChild(z),
          (O.style.overflow = "visible"),
          !1
        );
      });
    });
    I()(document).ready(function (A) {
      I()('a[href^="#work"]').click(function () {
        var F = I()(this).attr("href");
        return (
          I()("html, body").animate(
            { scrollTop: I()(F).offset().top - 60 },
            800
          ),
          m.classList.remove("header__menu_act"),
          z.classList.remove("header-service_act"),
          Ja.appendChild(z),
          (O.style.overflow = "visible"),
          !1
        );
      });
    });
    I()(document).ready(function (A) {
      I()('a[href^="#arhi"]').click(function () {
        var F = I()(this).attr("href");
        return (
          I()("html, body").animate(
            { scrollTop: I()(F).offset().top - 60 },
            800
          ),
          m.classList.remove("header__menu_act"),
          z.classList.remove("header-service_act"),
          Ja.appendChild(z),
          (O.style.overflow = "visible"),
          !1
        );
      });
    });
    I()(document).ready(function (A) {
      I()('a[href^="#footer"]').click(function () {
        var F = I()(this).attr("href");
        return (
          I()("html, body").animate(
            { scrollTop: I()(F).offset().top - 60 },
            800
          ),
          m.classList.remove("header__menu_act"),
          z.classList.remove("header-service_act"),
          Ja.appendChild(z),
          (O.style.overflow = "visible"),
          !1
        );
      });
    });
    I()(document).ready(function () {
      var A = new Q.a("#player"),
        F = I()(".popup");
      I()(".popup-init-js").on("click", function () {
        F.fadeOut(200);
        var S = I()(this).attr("rel"),
          P = I()("div." + S);
        F.hasClass(S) && P.fadeIn(200);
        P.hasClass("first-popup") && A.play();
        I()("body").css("overflow", "hidden");
      });
      I()(".close-js").on("click", function () {
        F.fadeOut(200);
        I()("body").css("overflow", "visible");
        A.stop();
      });
      I()(document).on("mouseup", function (S) {
        I()(".popup__overlay").is(S.target) &&
          (F.fadeOut(200),
          I()("body").removeClass("lock"),
          I()("body").css("overflow", "visible"),
          A.stop());
      });
    });
    N(4);
    I()(document).ready(function (A) {
      I()(".tabs-title-js").on("click", function () {
        var F = I()(this).siblings(".tabs-drop-js"),
          S = I()(this).find(".tabs-img-js"),
          P = I()(this).parent().parent(".tabs__item");
        F.hasClass("act")
          ? (F.slideUp(200).removeClass("act"),
            setTimeout(function () {
              P.removeClass("act");
            }, 200),
            S.css("transform", "rotate(90deg)"))
          : (P.addClass("act"),
            S.css("transform", "rotate(-90deg)"),
            F.slideDown(200).addClass("act"));
      });
    });
    I()(document).ready(function (A) {
      I()(".tabsDep-title-js").on("click", function () {
        var F = I()(this).siblings(".tabsDep-drop-js"),
          S = I()(this).find(".tabsDep-img-js"),
          P = I()(this).parent().parent(".tabs__item");
        F.hasClass("act")
          ? (F.slideUp(200).removeClass("act"),
            setTimeout(function () {
              P.removeClass("act");
            }, 200),
            S.css("transform", "rotate(90deg)"))
          : (P.addClass("act"),
            S.css("transform", "rotate(-90deg)"),
            F.slideDown(200).addClass("act"),
            setTimeout(function () {
              I()(".tabs__item").not(P).removeClass("act");
            }, 200),
            I()(".tabs__item")
              .not(P)
              .find(".tabs-item__img")
              .css("transform", "rotate(90deg)"),
            I()(".tabs__item")
              .not(P)
              .find(".tabs__drop")
              .slideUp(200)
              .removeClass("act"));
      });
    });
    I()(document).ready(function () {
      I()(".load-more").on("click", function () {
        var A = I()(this),
          F = I()(this).find(".spinner-border");
        I()(".addFiles").slideUp(1);
        I.a.ajax({
          url: "/data.html",
          type: "GET",
          beforeSend: function () {
            A.attr("disabled", !0);
            F.addClass("d-inline-block");
          },
          success: function (S) {
            setTimeout(function () {
              F.removeClass("d-inline-block");
              A.attr("disabled", !0);
            }, 300);
            I()(".addFiles").append(S).slideDown(500);
          },
          error: function () {
            alert("Error");
            F.removeClass("d-inline-block");
            A.attr("disabled", !1);
          },
        });
      });
    });
    N(5);
    I()(Document).ready(function () {
      I()(".slider-main-js").slick({
        dots: !0,
        arrows: !0,
        speed: 800,
        easing: "ease",
        cssEase: "linear",
        autoplaySpeed: 1e3,
        centerMode: !1,
        slidesToShow: 1,
        nextArrow: I()(".slider-main-arrows__arrow_next"),
        prevArrow: I()(".slider-main-arrows__arrow_prev"),
        customPaging: function (A, F) {
          return F + 1 + "/" + A.slideCount;
        },
      });
    });
    N(6);
    N(8);
    N(10);
    N(12);
  },
]);
