(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const f of o.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && n(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o).catch((error) => {
      console.error("Failed to preload module:", i.href, error);
    });
  }
})();
function ef(e, t) {
  const r = Object.create(null),
    n = e.split(",");
  for (let i = 0; i < n.length; i++) r[n[i]] = !0;
  return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
}
const r0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  n0 = ef(r0);
function Rc(e) {
  return !!e || e === "";
}
function tf(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        i = Xt(n) ? s0(n) : tf(n);
      if (i) for (const o in i) t[o] = i[o];
    }
    return t;
  } else {
    if (Xt(e)) return e;
    if (kt(e)) return e;
  }
}
const i0 = /;(?![^(]*\))/g,
  o0 = /:(.+)/;
function s0(e) {
  const t = {};
  return (
    e.split(i0).forEach((r) => {
      if (r) {
        const n = r.split(o0);
        n.length > 1 && (t[n[0].trim()] = n[1].trim());
      }
    }),
    t
  );
}
function Rn(e) {
  let t = "";
  if (Xt(e)) t = e;
  else if (tt(e))
    for (let r = 0; r < e.length; r++) {
      const n = Rn(e[r]);
      n && (t += n + " ");
    }
  else if (kt(e)) for (const r in e) e[r] && (t += r + " ");
  return t.trim();
}
const wi = (e) =>
    Xt(e)
      ? e
      : e == null
      ? ""
      : tt(e) || (kt(e) && (e.toString === kc || !ut(e.toString)))
      ? JSON.stringify(e, Pc, 2)
      : String(e),
  Pc = (e, t) =>
    t && t.__v_isRef
      ? Pc(e, t.value)
      : Vn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (r, [n, i]) => ((r[`${n} =>`] = i), r),
            {}
          ),
        }
      : Nc(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : kt(t) && !tt(t) && !Uc(t)
      ? String(t)
      : t,
  Nt = {},
  qn = [],
  Or = () => {},
  f0 = () => !1,
  a0 = /^on[^a-z]/,
  lo = (e) => a0.test(e),
  rf = (e) => e.startsWith("onUpdate:"),
  tr = Object.assign,
  nf = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  c0 = Object.prototype.hasOwnProperty,
  pt = (e, t) => c0.call(e, t),
  tt = Array.isArray,
  Vn = (e) => ho(e) === "[object Map]",
  Nc = (e) => ho(e) === "[object Set]",
  ut = (e) => typeof e == "function",
  Xt = (e) => typeof e == "string",
  of = (e) => typeof e == "symbol",
  kt = (e) => e !== null && typeof e == "object",
  Lc = (e) => kt(e) && ut(e.then) && ut(e.catch),
  kc = Object.prototype.toString,
  ho = (e) => kc.call(e),
  u0 = (e) => ho(e).slice(8, -1),
  Uc = (e) => ho(e) === "[object Object]",
  sf = (e) => Xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ji = ef(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  po = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  l0 = /-(\w)/g,
  Yn = po((e) => e.replace(l0, (t, r) => (r ? r.toUpperCase() : ""))),
  h0 = /\B([A-Z])/g,
  oi = po((e) => e.replace(h0, "-$1").toLowerCase()),
  $c = po((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  $o = po((e) => (e ? `on${$c(e)}` : "")),
  bi = (e, t) => !Object.is(e, t),
  Fo = (e, t) => {
    for (let r = 0; r < e.length; r++) e[r](t);
  },
  Qi = (e, t, r) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r });
  },
  Fc = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let zf;
const d0 = () =>
  zf ||
  (zf =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let gr;
class Dc {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = gr),
      !t && gr && ((this.index = (gr.scopes || (gr.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const r = gr;
      try {
        return (gr = this), t();
      } finally {
        gr = r;
      }
    }
  }
