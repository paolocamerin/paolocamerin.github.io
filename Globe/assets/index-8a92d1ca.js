(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const $r = "156",
  bn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  An = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Co = 0,
  ds = 1,
  Lo = 2,
  Wa = 1,
  Po = 2,
  jt = 3,
  on = 0,
  gt = 1,
  Bt = 2,
  rn = 0,
  qn = 1,
  fs = 2,
  ps = 3,
  ms = 4,
  Do = 5,
  kn = 100,
  Uo = 101,
  Io = 102,
  gs = 103,
  _s = 104,
  No = 200,
  Fo = 201,
  Oo = 202,
  Bo = 203,
  Xa = 204,
  qa = 205,
  zo = 206,
  Ho = 207,
  Go = 208,
  Vo = 209,
  ko = 210,
  Wo = 0,
  Xo = 1,
  qo = 2,
  Gr = 3,
  Yo = 4,
  jo = 5,
  Ko = 6,
  Zo = 7,
  Ya = 0,
  $o = 1,
  Jo = 2,
  sn = 0,
  Qo = 1,
  el = 2,
  tl = 3,
  nl = 4,
  il = 5,
  ja = 300,
  jn = 301,
  Kn = 302,
  Vr = 303,
  kr = 304,
  Zi = 306,
  Wr = 1e3,
  Dt = 1001,
  Xr = 1002,
  pt = 1003,
  vs = 1004,
  lr = 1005,
  At = 1006,
  rl = 1007,
  di = 1008,
  an = 1009,
  sl = 1010,
  al = 1011,
  Jr = 1012,
  Ka = 1013,
  tn = 1014,
  nn = 1015,
  fi = 1016,
  Za = 1017,
  $a = 1018,
  gn = 1020,
  ol = 1021,
  Ut = 1023,
  ll = 1024,
  cl = 1025,
  _n = 1026,
  Zn = 1027,
  ul = 1028,
  Ja = 1029,
  hl = 1030,
  Qa = 1031,
  eo = 1033,
  cr = 33776,
  ur = 33777,
  hr = 33778,
  dr = 33779,
  xs = 35840,
  Ms = 35841,
  Ss = 35842,
  Es = 35843,
  dl = 36196,
  ys = 37492,
  Ts = 37496,
  bs = 37808,
  As = 37809,
  ws = 37810,
  Rs = 37811,
  Cs = 37812,
  Ls = 37813,
  Ps = 37814,
  Ds = 37815,
  Us = 37816,
  Is = 37817,
  Ns = 37818,
  Fs = 37819,
  Os = 37820,
  Bs = 37821,
  fr = 36492,
  zs = 36494,
  Hs = 36495,
  fl = 36283,
  Gs = 36284,
  Vs = 36285,
  ks = 36286,
  to = 3e3,
  vn = 3001,
  pl = 3200,
  ml = 3201,
  no = 0,
  gl = 1,
  xn = "",
  Xe = "srgb",
  Ht = "srgb-linear",
  $i = "display-p3",
  pr = 7680,
  _l = 519,
  vl = 512,
  xl = 513,
  Ml = 514,
  Sl = 515,
  El = 516,
  yl = 517,
  Tl = 518,
  bl = 519,
  Ws = 35044,
  Xs = "300 es",
  qr = 1035,
  Kt = 2e3,
  Yi = 2001;
class Tn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const lt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let qs = 1234567;
const ci = Math.PI / 180,
  pi = 180 / Math.PI;
function Jn() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    lt[i & 255] +
    lt[(i >> 8) & 255] +
    lt[(i >> 16) & 255] +
    lt[(i >> 24) & 255] +
    "-" +
    lt[e & 255] +
    lt[(e >> 8) & 255] +
    "-" +
    lt[((e >> 16) & 15) | 64] +
    lt[(e >> 24) & 255] +
    "-" +
    lt[(t & 63) | 128] +
    lt[(t >> 8) & 255] +
    "-" +
    lt[(t >> 16) & 255] +
    lt[(t >> 24) & 255] +
    lt[n & 255] +
    lt[(n >> 8) & 255] +
    lt[(n >> 16) & 255] +
    lt[(n >> 24) & 255]
  ).toLowerCase();
}
function at(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Qr(i, e) {
  return ((i % e) + e) % e;
}
function Al(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function wl(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function ui(i, e, t) {
  return (1 - t) * i + t * e;
}
function Rl(i, e, t, n) {
  return ui(i, e, 1 - Math.exp(-t * n));
}
function Cl(i, e = 1) {
  return e - Math.abs(Qr(i, e * 2) - e);
}
function Ll(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function Pl(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function Dl(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Ul(i, e) {
  return i + Math.random() * (e - i);
}
function Il(i) {
  return i * (0.5 - Math.random());
}
function Nl(i) {
  i !== void 0 && (qs = i);
  let e = (qs += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Fl(i) {
  return i * ci;
}
function Ol(i) {
  return i * pi;
}
function Yr(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function Bl(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function ji(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function zl(i, e, t, n, r) {
  const s = Math.cos,
    o = Math.sin,
    a = s(t / 2),
    l = o(t / 2),
    c = s((e + n) / 2),
    u = o((e + n) / 2),
    d = s((e - n) / 2),
    f = o((e - n) / 2),
    m = s((n - e) / 2),
    _ = o((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(a * u, l * d, l * f, a * c);
      break;
    case "YZY":
      i.set(l * f, a * u, l * d, a * c);
      break;
    case "ZXZ":
      i.set(l * d, l * f, a * u, a * c);
      break;
    case "XZX":
      i.set(a * u, l * _, l * m, a * c);
      break;
    case "YXY":
      i.set(l * m, a * u, l * _, a * c);
      break;
    case "ZYZ":
      i.set(l * _, l * m, a * u, a * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r
      );
  }
}
function Wn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function dt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Hl = {
  DEG2RAD: ci,
  RAD2DEG: pi,
  generateUUID: Jn,
  clamp: at,
  euclideanModulo: Qr,
  mapLinear: Al,
  inverseLerp: wl,
  lerp: ui,
  damp: Rl,
  pingpong: Cl,
  smoothstep: Ll,
  smootherstep: Pl,
  randInt: Dl,
  randFloat: Ul,
  randFloatSpread: Il,
  seededRandom: Nl,
  degToRad: Fl,
  radToDeg: Ol,
  isPowerOfTwo: Yr,
  ceilPowerOfTwo: Bl,
  floorPowerOfTwo: ji,
  setQuaternionFromProperEuler: zl,
  normalize: dt,
  denormalize: Wn,
};
class we {
  constructor(e = 0, t = 0) {
    (we.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * r + e.x), (this.y = s * r + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, r, s, o, a, l, c) {
    (Ue.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      d = n[7],
      f = n[2],
      m = n[5],
      _ = n[8],
      v = r[0],
      p = r[3],
      h = r[6],
      b = r[1],
      M = r[4],
      y = r[7],
      A = r[2],
      P = r[5],
      w = r[8];
    return (
      (s[0] = o * v + a * b + l * A),
      (s[3] = o * p + a * M + l * P),
      (s[6] = o * h + a * y + l * w),
      (s[1] = c * v + u * b + d * A),
      (s[4] = c * p + u * M + d * P),
      (s[7] = c * h + u * y + d * w),
      (s[2] = f * v + m * b + _ * A),
      (s[5] = f * p + m * M + _ * P),
      (s[8] = f * h + m * y + _ * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = u * o - a * c,
      f = a * l - u * s,
      m = c * s - o * l,
      _ = t * d + n * f + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return (
      (e[0] = d * v),
      (e[1] = (r * c - u * n) * v),
      (e[2] = (a * n - r * o) * v),
      (e[3] = f * v),
      (e[4] = (u * t - r * l) * v),
      (e[5] = (r * s - a * t) * v),
      (e[6] = m * v),
      (e[7] = (n * l - c * t) * v),
      (e[8] = (o * t - n * s) * v),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(mr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(mr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(mr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const mr = new Ue();
function io(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function mi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Gl() {
  const i = mi("canvas");
  return (i.style.display = "block"), i;
}
const Ys = {};
function hi(i) {
  i in Ys || ((Ys[i] = !0), console.warn(i));
}
function Yn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function gr(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Vl = new Ue().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  kl = new Ue().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]);
function Wl(i) {
  return i.convertSRGBToLinear().applyMatrix3(kl);
}
function Xl(i) {
  return i.applyMatrix3(Vl).convertLinearToSRGB();
}
const ql = { [Ht]: (i) => i, [Xe]: (i) => i.convertSRGBToLinear(), [$i]: Wl },
  Yl = { [Ht]: (i) => i, [Xe]: (i) => i.convertLinearToSRGB(), [$i]: Xl },
  wt = {
    enabled: !0,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(i) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !i);
    },
    get workingColorSpace() {
      return Ht;
    },
    set workingColorSpace(i) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = ql[e],
        r = Yl[t];
      if (n === void 0 || r === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return r(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this.workingColorSpace);
    },
  };
let wn;
class ro {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      wn === void 0 && (wn = mi("canvas")),
        (wn.width = e.width),
        (wn.height = e.height);
      const n = wn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = wn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = mi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Yn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Yn(t[n] / 255) * 255))
          : (t[n] = Yn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let jl = 0;
class so {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: jl++ }),
      (this.uuid = Jn()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(_r(r[o].image)) : s.push(_r(r[o]));
      } else s = _r(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function _r(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? ro.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Kl = 0;
class _t extends Tn {
  constructor(
    e = _t.DEFAULT_IMAGE,
    t = _t.DEFAULT_MAPPING,
    n = Dt,
    r = Dt,
    s = At,
    o = di,
    a = Ut,
    l = an,
    c = _t.DEFAULT_ANISOTROPY,
    u = xn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Kl++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.source = new so(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new we(0, 0)),
      (this.repeat = new we(1, 1)),
      (this.center = new we(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ue()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof u == "string"
        ? (this.colorSpace = u)
        : (hi(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = u === vn ? Xe : xn)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ja) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Wr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Dt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Xr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Wr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Dt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Xr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === Xe ? vn : to
    );
  }
  set encoding(e) {
    hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === vn ? Xe : xn);
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = ja;
_t.DEFAULT_ANISOTROPY = 1;
class qe {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (qe.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      d = l[8],
      f = l[1],
      m = l[5],
      _ = l[9],
      v = l[2],
      p = l[6],
      h = l[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - v) < 0.01 &&
      Math.abs(_ - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + v) < 0.1 &&
        Math.abs(_ + p) < 0.1 &&
        Math.abs(c + m + h - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2,
        y = (m + 1) / 2,
        A = (h + 1) / 2,
        P = (u + f) / 4,
        w = (d + v) / 4,
        q = (_ + p) / 4;
      return (
        M > y && M > A
          ? M < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(M)), (r = P / n), (s = w / n))
          : y > A
          ? y < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(y)), (n = P / r), (s = q / r))
          : A < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(A)), (n = w / s), (r = q / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let b = Math.sqrt(
      (p - _) * (p - _) + (d - v) * (d - v) + (f - u) * (f - u)
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (p - _) / b),
      (this.y = (d - v) / b),
      (this.z = (f - u) / b),
      (this.w = Math.acos((c + m + h - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Zl extends Tn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new qe(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new qe(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (hi(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (n.colorSpace = n.encoding === vn ? Xe : xn)),
      (this.texture = new _t(
        r,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : At),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new so(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Mn extends Zl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class ao extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = pt),
      (this.minFilter = pt),
      (this.wrapR = Dt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class $l extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = pt),
      (this.minFilter = pt),
      (this.wrapR = Dt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Sn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      d = n[r + 3];
    const f = s[o + 0],
      m = s[o + 1],
      _ = s[o + 2],
      v = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = _), (e[t + 3] = v);
      return;
    }
    if (d !== v || l !== f || c !== m || u !== _) {
      let p = 1 - a;
      const h = l * f + c * m + u * _ + d * v,
        b = h >= 0 ? 1 : -1,
        M = 1 - h * h;
      if (M > Number.EPSILON) {
        const A = Math.sqrt(M),
          P = Math.atan2(A, h * b);
        (p = Math.sin(p * P) / A), (a = Math.sin(a * P) / A);
      }
      const y = a * b;
      if (
        ((l = l * p + f * y),
        (c = c * p + m * y),
        (u = u * p + _ * y),
        (d = d * p + v * y),
        p === 1 - a)
      ) {
        const A = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        (l *= A), (c *= A), (u *= A), (d *= A);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      d = s[o],
      f = s[o + 1],
      m = s[o + 2],
      _ = s[o + 3];
    return (
      (e[t] = a * _ + u * d + l * m - c * f),
      (e[t + 1] = l * _ + u * f + c * d - a * m),
      (e[t + 2] = c * _ + u * m + a * f - l * d),
      (e[t + 3] = u * _ - a * d - l * f - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(r / 2),
      d = a(s / 2),
      f = l(n / 2),
      m = l(r / 2),
      _ = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * u * d + c * m * _),
          (this._y = c * m * d - f * u * _),
          (this._z = c * u * _ + f * m * d),
          (this._w = c * u * d - f * m * _);
        break;
      case "YXZ":
        (this._x = f * u * d + c * m * _),
          (this._y = c * m * d - f * u * _),
          (this._z = c * u * _ - f * m * d),
          (this._w = c * u * d + f * m * _);
        break;
      case "ZXY":
        (this._x = f * u * d - c * m * _),
          (this._y = c * m * d + f * u * _),
          (this._z = c * u * _ + f * m * d),
          (this._w = c * u * d - f * m * _);
        break;
      case "ZYX":
        (this._x = f * u * d - c * m * _),
          (this._y = c * m * d + f * u * _),
          (this._z = c * u * _ - f * m * d),
          (this._w = c * u * d + f * m * _);
        break;
      case "YZX":
        (this._x = f * u * d + c * m * _),
          (this._y = c * m * d + f * u * _),
          (this._z = c * u * _ - f * m * d),
          (this._w = c * u * d - f * m * _);
        break;
      case "XZY":
        (this._x = f * u * d - c * m * _),
          (this._y = c * m * d - f * u * _),
          (this._z = c * u * _ + f * m * d),
          (this._w = c * u * d + f * m * _);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      d = t[10],
      f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m);
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      (this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      (this._w = (o - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(at(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - r * a),
      (this._w = o * u - n * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      d = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = o * d + this._w * f),
      (this._x = n * d + this._x * f),
      (this._y = r * d + this._y * f),
      (this._z = s * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    (L.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(js.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(js.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * r - a * n,
      u = l * n + a * t - s * r,
      d = l * r + s * n - o * t,
      f = -s * t - o * n - a * r;
    return (
      (this.x = c * l + f * -s + u * -a - d * -o),
      (this.y = u * l + f * -o + d * -s - c * -a),
      (this.z = d * l + f * -a + c * -o - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - n * l),
      (this.z = n * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return vr.copy(this).projectOnVector(e), this.sub(vr);
  }
  reflect(e) {
    return this.sub(vr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const vr = new L(),
  js = new Sn();
class vi {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        Rn.copy(e.boundingBox),
        Rn.applyMatrix4(e.matrixWorld),
        this.union(Rn);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            kt.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
              this.expandByPoint(kt);
        } else
          r.boundingBox === null && r.computeBoundingBox(),
            Rn.copy(r.boundingBox),
            Rn.applyMatrix4(e.matrixWorld),
            this.union(Rn);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++) this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, kt),
      kt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ni),
      Ti.subVectors(this.max, ni),
      Cn.subVectors(e.a, ni),
      Ln.subVectors(e.b, ni),
      Pn.subVectors(e.c, ni),
      Zt.subVectors(Ln, Cn),
      $t.subVectors(Pn, Ln),
      un.subVectors(Cn, Pn);
    let t = [
      0,
      -Zt.z,
      Zt.y,
      0,
      -$t.z,
      $t.y,
      0,
      -un.z,
      un.y,
      Zt.z,
      0,
      -Zt.x,
      $t.z,
      0,
      -$t.x,
      un.z,
      0,
      -un.x,
      -Zt.y,
      Zt.x,
      0,
      -$t.y,
      $t.x,
      0,
      -un.y,
      un.x,
      0,
    ];
    return !xr(t, Cn, Ln, Pn, Ti) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !xr(t, Cn, Ln, Pn, Ti))
      ? !1
      : (bi.crossVectors(Zt, $t),
        (t = [bi.x, bi.y, bi.z]),
        xr(t, Cn, Ln, Pn, Ti));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(kt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Vt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Vt = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  kt = new L(),
  Rn = new vi(),
  Cn = new L(),
  Ln = new L(),
  Pn = new L(),
  Zt = new L(),
  $t = new L(),
  un = new L(),
  ni = new L(),
  Ti = new L(),
  bi = new L(),
  hn = new L();
function xr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    hn.fromArray(i, s);
    const a =
        r.x * Math.abs(hn.x) + r.y * Math.abs(hn.y) + r.z * Math.abs(hn.z),
      l = e.dot(hn),
      c = t.dot(hn),
      u = n.dot(hn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Jl = new vi(),
  ii = new L(),
  Mr = new L();
class Ji {
  constructor(e = new L(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Jl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ii.subVectors(e, this.center);
    const t = ii.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ii, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Mr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(ii.copy(e.center).add(Mr)),
            this.expandByPoint(ii.copy(e.center).sub(Mr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wt = new L(),
  Sr = new L(),
  Ai = new L(),
  Jt = new L(),
  Er = new L(),
  wi = new L(),
  yr = new L();
class es {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Wt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Wt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Wt.copy(this.origin).addScaledVector(this.direction, t),
        Wt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Sr.copy(e).add(t).multiplyScalar(0.5),
      Ai.copy(t).sub(e).normalize(),
      Jt.copy(this.origin).sub(Sr);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Ai),
      a = Jt.dot(this.direction),
      l = -Jt.dot(Ai),
      c = Jt.lengthSq(),
      u = Math.abs(1 - o * o);
    let d, f, m, _;
    if (u > 0)
      if (((d = o * l - a), (f = o * a - l), (_ = s * u), d >= 0))
        if (f >= -_)
          if (f <= _) {
            const v = 1 / u;
            (d *= v),
              (f *= v),
              (m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c);
          } else
            (f = s),
              (d = Math.max(0, -(o * f + a))),
              (m = -d * d + f * (f + 2 * l) + c);
        else
          (f = -s),
            (d = Math.max(0, -(o * f + a))),
            (m = -d * d + f * (f + 2 * l) + c);
      else
        f <= -_
          ? ((d = Math.max(0, -(-o * s + a))),
            (f = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + f * (f + 2 * l) + c))
          : f <= _
          ? ((d = 0),
            (f = Math.min(Math.max(-s, -l), s)),
            (m = f * (f + 2 * l) + c))
          : ((d = Math.max(0, -(o * s + a))),
            (f = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + f * (f + 2 * l) + c));
    else
      (f = o > 0 ? -s : s),
        (d = Math.max(0, -(o * f + a))),
        (m = -d * d + f * (f + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      r && r.copy(Sr).addScaledVector(Ai, f),
      m
    );
  }
  intersectSphere(e, t) {
    Wt.subVectors(e.center, this.origin);
    const n = Wt.dot(this.direction),
      r = Wt.dot(Wt) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = n - o,
      l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (r = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (r = (e.min.x - f.x) * c)),
      u >= 0
        ? ((s = (e.min.y - f.y) * u), (o = (e.max.y - f.y) * u))
        : ((s = (e.max.y - f.y) * u), (o = (e.min.y - f.y) * u)),
      n > o ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (o < r || isNaN(r)) && (r = o),
      d >= 0
        ? ((a = (e.min.z - f.z) * d), (l = (e.max.z - f.z) * d))
        : ((a = (e.max.z - f.z) * d), (l = (e.min.z - f.z) * d)),
      n > l || a > r) ||
      ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Wt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Er.subVectors(t, e), wi.subVectors(n, e), yr.crossVectors(Er, wi);
    let o = this.direction.dot(yr),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Jt.subVectors(this.origin, e);
    const l = a * this.direction.dot(wi.crossVectors(Jt, wi));
    if (l < 0) return null;
    const c = a * this.direction.dot(Er.cross(Jt));
    if (c < 0 || l + c > o) return null;
    const u = -a * Jt.dot(yr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class je {
  constructor(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p) {
    (je.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, d, f, m, _, v, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = r),
      (h[1] = s),
      (h[5] = o),
      (h[9] = a),
      (h[13] = l),
      (h[2] = c),
      (h[6] = u),
      (h[10] = d),
      (h[14] = f),
      (h[3] = m),
      (h[7] = _),
      (h[11] = v),
      (h[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new je().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Dn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Dn.setFromMatrixColumn(e, 1).length(),
      o = 1 / Dn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u,
        m = o * d,
        _ = a * u,
        v = a * d;
      (t[0] = l * u),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = m + _ * c),
        (t[5] = f - v * c),
        (t[9] = -a * l),
        (t[2] = v - f * c),
        (t[6] = _ + m * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const f = l * u,
        m = l * d,
        _ = c * u,
        v = c * d;
      (t[0] = f + v * a),
        (t[4] = _ * a - m),
        (t[8] = o * c),
        (t[1] = o * d),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - _),
        (t[6] = v + f * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const f = l * u,
        m = l * d,
        _ = c * u,
        v = c * d;
      (t[0] = f - v * a),
        (t[4] = -o * d),
        (t[8] = _ + m * a),
        (t[1] = m + _ * a),
        (t[5] = o * u),
        (t[9] = v - f * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const f = o * u,
        m = o * d,
        _ = a * u,
        v = a * d;
      (t[0] = l * u),
        (t[4] = _ * c - m),
        (t[8] = f * c + v),
        (t[1] = l * d),
        (t[5] = v * c + f),
        (t[9] = m * c - _),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const f = o * l,
        m = o * c,
        _ = a * l,
        v = a * c;
      (t[0] = l * u),
        (t[4] = v - f * d),
        (t[8] = _ * d + m),
        (t[1] = d),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * d + _),
        (t[10] = f - v * d);
    } else if (e.order === "XZY") {
      const f = o * l,
        m = o * c,
        _ = a * l,
        v = a * c;
      (t[0] = l * u),
        (t[4] = -d),
        (t[8] = c * u),
        (t[1] = f * d + v),
        (t[5] = o * u),
        (t[9] = m * d - _),
        (t[2] = _ * d - m),
        (t[6] = a * u),
        (t[10] = v * d + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ql, e, ec);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      St.subVectors(e, t),
      St.lengthSq() === 0 && (St.z = 1),
      St.normalize(),
      Qt.crossVectors(n, St),
      Qt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (St.x += 1e-4) : (St.z += 1e-4),
        St.normalize(),
        Qt.crossVectors(n, St)),
      Qt.normalize(),
      Ri.crossVectors(St, Qt),
      (r[0] = Qt.x),
      (r[4] = Ri.x),
      (r[8] = St.x),
      (r[1] = Qt.y),
      (r[5] = Ri.y),
      (r[9] = St.y),
      (r[2] = Qt.z),
      (r[6] = Ri.z),
      (r[10] = St.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      d = n[5],
      f = n[9],
      m = n[13],
      _ = n[2],
      v = n[6],
      p = n[10],
      h = n[14],
      b = n[3],
      M = n[7],
      y = n[11],
      A = n[15],
      P = r[0],
      w = r[4],
      q = r[8],
      x = r[12],
      T = r[1],
      Z = r[5],
      Q = r[9],
      F = r[13],
      W = r[2],
      H = r[6],
      $ = r[10],
      X = r[14],
      Y = r[3],
      te = r[7],
      K = r[11],
      O = r[15];
    return (
      (s[0] = o * P + a * T + l * W + c * Y),
      (s[4] = o * w + a * Z + l * H + c * te),
      (s[8] = o * q + a * Q + l * $ + c * K),
      (s[12] = o * x + a * F + l * X + c * O),
      (s[1] = u * P + d * T + f * W + m * Y),
      (s[5] = u * w + d * Z + f * H + m * te),
      (s[9] = u * q + d * Q + f * $ + m * K),
      (s[13] = u * x + d * F + f * X + m * O),
      (s[2] = _ * P + v * T + p * W + h * Y),
      (s[6] = _ * w + v * Z + p * H + h * te),
      (s[10] = _ * q + v * Q + p * $ + h * K),
      (s[14] = _ * x + v * F + p * X + h * O),
      (s[3] = b * P + M * T + y * W + A * Y),
      (s[7] = b * w + M * Z + y * H + A * te),
      (s[11] = b * q + M * Q + y * $ + A * K),
      (s[15] = b * x + M * F + y * X + A * O),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      m = e[14],
      _ = e[3],
      v = e[7],
      p = e[11],
      h = e[15];
    return (
      _ *
        (+s * l * d -
          r * c * d -
          s * a * f +
          n * c * f +
          r * a * m -
          n * l * m) +
      v *
        (+t * l * m -
          t * c * f +
          s * o * f -
          r * o * m +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * d -
          t * a * m -
          s * o * d +
          n * o * m +
          s * a * u -
          n * c * u) +
      h *
        (-r * a * u - t * l * d + t * a * f + r * o * d - n * o * f + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      m = e[11],
      _ = e[12],
      v = e[13],
      p = e[14],
      h = e[15],
      b = d * p * c - v * f * c + v * l * m - a * p * m - d * l * h + a * f * h,
      M = _ * f * c - u * p * c - _ * l * m + o * p * m + u * l * h - o * f * h,
      y = u * v * c - _ * d * c + _ * a * m - o * v * m - u * a * h + o * d * h,
      A = _ * d * l - u * v * l - _ * a * f + o * v * f + u * a * p - o * d * p,
      P = t * b + n * M + r * y + s * A;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / P;
    return (
      (e[0] = b * w),
      (e[1] =
        (v * f * s -
          d * p * s -
          v * r * m +
          n * p * m +
          d * r * h -
          n * f * h) *
        w),
      (e[2] =
        (a * p * s -
          v * l * s +
          v * r * c -
          n * p * c -
          a * r * h +
          n * l * h) *
        w),
      (e[3] =
        (d * l * s -
          a * f * s -
          d * r * c +
          n * f * c +
          a * r * m -
          n * l * m) *
        w),
      (e[4] = M * w),
      (e[5] =
        (u * p * s -
          _ * f * s +
          _ * r * m -
          t * p * m -
          u * r * h +
          t * f * h) *
        w),
      (e[6] =
        (_ * l * s -
          o * p * s -
          _ * r * c +
          t * p * c +
          o * r * h -
          t * l * h) *
        w),
      (e[7] =
        (o * f * s -
          u * l * s +
          u * r * c -
          t * f * c -
          o * r * m +
          t * l * m) *
        w),
      (e[8] = y * w),
      (e[9] =
        (_ * d * s -
          u * v * s -
          _ * n * m +
          t * v * m +
          u * n * h -
          t * d * h) *
        w),
      (e[10] =
        (o * v * s -
          _ * a * s +
          _ * n * c -
          t * v * c -
          o * n * h +
          t * a * h) *
        w),
      (e[11] =
        (u * a * s -
          o * d * s -
          u * n * c +
          t * d * c +
          o * n * m -
          t * a * m) *
        w),
      (e[12] = A * w),
      (e[13] =
        (u * v * r -
          _ * d * r +
          _ * n * f -
          t * v * f -
          u * n * p +
          t * d * p) *
        w),
      (e[14] =
        (_ * a * r -
          o * v * r -
          _ * n * l +
          t * v * l +
          o * n * p -
          t * a * p) *
        w),
      (e[15] =
        (o * d * r -
          u * a * r +
          u * n * l -
          t * d * l -
          o * n * f +
          t * a * f) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + n,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      d = a + a,
      f = s * c,
      m = s * u,
      _ = s * d,
      v = o * u,
      p = o * d,
      h = a * d,
      b = l * c,
      M = l * u,
      y = l * d,
      A = n.x,
      P = n.y,
      w = n.z;
    return (
      (r[0] = (1 - (v + h)) * A),
      (r[1] = (m + y) * A),
      (r[2] = (_ - M) * A),
      (r[3] = 0),
      (r[4] = (m - y) * P),
      (r[5] = (1 - (f + h)) * P),
      (r[6] = (p + b) * P),
      (r[7] = 0),
      (r[8] = (_ + M) * w),
      (r[9] = (p - b) * w),
      (r[10] = (1 - (f + v)) * w),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Dn.set(r[0], r[1], r[2]).length();
    const o = Dn.set(r[4], r[5], r[6]).length(),
      a = Dn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      Rt.copy(this);
    const c = 1 / s,
      u = 1 / o,
      d = 1 / a;
    return (
      (Rt.elements[0] *= c),
      (Rt.elements[1] *= c),
      (Rt.elements[2] *= c),
      (Rt.elements[4] *= u),
      (Rt.elements[5] *= u),
      (Rt.elements[6] *= u),
      (Rt.elements[8] *= d),
      (Rt.elements[9] *= d),
      (Rt.elements[10] *= d),
      t.setFromRotationMatrix(Rt),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, r, s, o, a = Kt) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - r),
      d = (t + e) / (t - e),
      f = (n + r) / (n - r);
    let m, _;
    if (a === Kt) (m = -(o + s) / (o - s)), (_ = (-2 * o * s) / (o - s));
    else if (a === Yi) (m = -o / (o - s)), (_ = (-o * s) / (o - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = d),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = _),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, o, a = Kt) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - r),
      d = 1 / (o - s),
      f = (t + e) * c,
      m = (n + r) * u;
    let _, v;
    if (a === Kt) (_ = (o + s) * d), (v = -2 * d);
    else if (a === Yi) (_ = s * d), (v = -1 * d);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = -_),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Dn = new L(),
  Rt = new je(),
  Ql = new L(0, 0, 0),
  ec = new L(1, 1, 1),
  Qt = new L(),
  Ri = new L(),
  St = new L(),
  Ks = new je(),
  Zs = new Sn();
class Qi {
  constructor(e = 0, t = 0, n = 0, r = Qi.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      d = r[2],
      f = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(at(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-at(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(at(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-at(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(at(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-at(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ks.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ks, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Zs.setFromEuler(this), this.setFromQuaternion(Zs, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Qi.DEFAULT_ORDER = "XYZ";
class oo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let tc = 0;
const $s = new L(),
  Un = new Sn(),
  Xt = new je(),
  Ci = new L(),
  ri = new L(),
  nc = new L(),
  ic = new Sn(),
  Js = new L(1, 0, 0),
  Qs = new L(0, 1, 0),
  ea = new L(0, 0, 1),
  rc = { type: "added" },
  sc = { type: "removed" };
class mt extends Tn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: tc++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = mt.DEFAULT_UP.clone());
    const e = new L(),
      t = new Qi(),
      n = new Sn(),
      r = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new je() },
        normalMatrix: { value: new Ue() },
      }),
      (this.matrix = new je()),
      (this.matrixWorld = new je()),
      (this.matrixAutoUpdate = mt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new oo()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Un.setFromAxisAngle(e, t), this.quaternion.multiply(Un), this;
  }
  rotateOnWorldAxis(e, t) {
    return Un.setFromAxisAngle(e, t), this.quaternion.premultiply(Un), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Js, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Qs, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ea, e);
  }
  translateOnAxis(e, t) {
    return (
      $s.copy(e).applyQuaternion(this.quaternion),
      this.position.add($s.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Js, e);
  }
  translateY(e) {
    return this.translateOnAxis(Qs, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ea, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Xt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ci.copy(e) : Ci.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      ri.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Xt.lookAt(ri, Ci, this.up)
        : Xt.lookAt(Ci, ri, this.up),
      this.quaternion.setFromRotationMatrix(Xt),
      r &&
        (Xt.extractRotation(r.matrixWorld),
        Un.setFromRotationMatrix(Xt),
        this.quaternion.premultiply(Un.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(rc))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(sc)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Xt.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Xt),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ri, e, nc), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ri, ic, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        d = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        _ = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        _.length > 0 && (n.nodes = _);
    }
    return (n.object = r), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
mt.DEFAULT_UP = new L(0, 1, 0);
mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ct = new L(),
  qt = new L(),
  Tr = new L(),
  Yt = new L(),
  In = new L(),
  Nn = new L(),
  ta = new L(),
  br = new L(),
  Ar = new L(),
  wr = new L();
let Li = !1;
class Pt {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ct.subVectors(e, t), r.cross(Ct);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Ct.subVectors(r, t), qt.subVectors(n, t), Tr.subVectors(e, t);
    const o = Ct.dot(Ct),
      a = Ct.dot(qt),
      l = Ct.dot(Tr),
      c = qt.dot(qt),
      u = qt.dot(Tr),
      d = o * c - a * a;
    if (d === 0) return s.set(-2, -1, -1);
    const f = 1 / d,
      m = (c * l - a * u) * f,
      _ = (o * u - a * l) * f;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(e, t, n, r) {
    return (
      this.getBarycoord(e, t, n, r, Yt),
      Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1
    );
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return (
      Li === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Li = !0)),
      this.getInterpolation(e, t, n, r, s, o, a, l)
    );
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, r, Yt),
      l.setScalar(0),
      l.addScaledVector(s, Yt.x),
      l.addScaledVector(o, Yt.y),
      l.addScaledVector(a, Yt.z),
      l
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Ct.subVectors(n, t), qt.subVectors(e, t), Ct.cross(qt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Ct.subVectors(this.c, this.b),
      qt.subVectors(this.a, this.b),
      Ct.cross(qt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Pt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Pt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return (
      Li === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Li = !0)),
      Pt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
    );
  }
  getInterpolation(e, t, n, r, s) {
    return Pt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Pt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Pt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    In.subVectors(r, n), Nn.subVectors(s, n), br.subVectors(e, n);
    const l = In.dot(br),
      c = Nn.dot(br);
    if (l <= 0 && c <= 0) return t.copy(n);
    Ar.subVectors(e, r);
    const u = In.dot(Ar),
      d = Nn.dot(Ar);
    if (u >= 0 && d <= u) return t.copy(r);
    const f = l * d - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(In, o);
    wr.subVectors(e, s);
    const m = In.dot(wr),
      _ = Nn.dot(wr);
    if (_ >= 0 && m <= _) return t.copy(s);
    const v = m * c - l * _;
    if (v <= 0 && c >= 0 && _ <= 0)
      return (a = c / (c - _)), t.copy(n).addScaledVector(Nn, a);
    const p = u * _ - m * d;
    if (p <= 0 && d - u >= 0 && m - _ >= 0)
      return (
        ta.subVectors(s, r),
        (a = (d - u) / (d - u + (m - _))),
        t.copy(r).addScaledVector(ta, a)
      );
    const h = 1 / (p + v + f);
    return (
      (o = v * h),
      (a = f * h),
      t.copy(n).addScaledVector(In, o).addScaledVector(Nn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let ac = 0;
class Qn extends Tn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: ac++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = qn),
      (this.side = on),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Xa),
      (this.blendDst = qa),
      (this.blendEquation = kn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Gr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = _l),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = pr),
      (this.stencilZFail = pr),
      (this.stencilZPass = pr),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== qn && (n.blending = this.blending),
      this.side !== on && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = this.alphaHash),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const lo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Lt = { h: 0, s: 0, l: 0 },
  Pi = { h: 0, s: 0, l: 0 };
function Rr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class He {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Xe) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      wt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = wt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      wt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = wt.workingColorSpace) {
    if (((e = Qr(e, 1)), (t = at(t, 0, 1)), (n = at(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = Rr(o, s, e + 1 / 3)),
        (this.g = Rr(o, s, e)),
        (this.b = Rr(o, s, e - 1 / 3));
    }
    return wt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Xe) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Xe) {
    const n = lo[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Yn(e.r)), (this.g = Yn(e.g)), (this.b = Yn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = gr(e.r)), (this.g = gr(e.g)), (this.b = gr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Xe) {
    return (
      wt.fromWorkingColorSpace(ct.copy(this), e),
      Math.round(at(ct.r * 255, 0, 255)) * 65536 +
        Math.round(at(ct.g * 255, 0, 255)) * 256 +
        Math.round(at(ct.b * 255, 0, 255))
    );
  }
  getHexString(e = Xe) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = wt.workingColorSpace) {
    wt.fromWorkingColorSpace(ct.copy(this), t);
    const n = ct.r,
      r = ct.g,
      s = ct.b,
      o = Math.max(n, r, s),
      a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const d = o - a;
      switch (((c = u <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = wt.workingColorSpace) {
    return (
      wt.fromWorkingColorSpace(ct.copy(this), t),
      (e.r = ct.r),
      (e.g = ct.g),
      (e.b = ct.b),
      e
    );
  }
  getStyle(e = Xe) {
    wt.fromWorkingColorSpace(ct.copy(this), e);
    const t = ct.r,
      n = ct.g,
      r = ct.b;
    return e !== Xe
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Lt),
      (Lt.h += e),
      (Lt.s += t),
      (Lt.l += n),
      this.setHSL(Lt.h, Lt.s, Lt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Lt), e.getHSL(Pi);
    const n = ui(Lt.h, Pi.h, t),
      r = ui(Lt.s, Pi.s, t),
      s = ui(Lt.l, Pi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ct = new He();
He.NAMES = lo;
class er extends Qn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new He(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ya),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Je = new L(),
  Di = new we();
class zt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Ws),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = nn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Di.fromBufferAttribute(this, t),
          Di.applyMatrix3(e),
          this.setXY(t, Di.x, Di.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t),
          Je.applyMatrix3(e),
          this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.applyMatrix4(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.applyNormalMatrix(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t),
        Je.transformDirection(e),
        this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Wn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = dt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = dt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = dt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = dt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = dt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = dt(t, this.array)), (n = dt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = dt(t, this.array)),
        (n = dt(n, this.array)),
        (r = dt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = dt(t, this.array)),
        (n = dt(n, this.array)),
        (r = dt(r, this.array)),
        (s = dt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Ws && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class co extends zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class uo extends zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class vt extends zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let oc = 0;
const bt = new je(),
  Cr = new mt(),
  Fn = new L(),
  Et = new vi(),
  si = new vi(),
  st = new L();
class Nt extends Tn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: oc++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (io(e) ? uo : co)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return bt.makeRotationFromQuaternion(e), this.applyMatrix4(bt), this;
  }
  rotateX(e) {
    return bt.makeRotationX(e), this.applyMatrix4(bt), this;
  }
  rotateY(e) {
    return bt.makeRotationY(e), this.applyMatrix4(bt), this;
  }
  rotateZ(e) {
    return bt.makeRotationZ(e), this.applyMatrix4(bt), this;
  }
  translate(e, t, n) {
    return bt.makeTranslation(e, t, n), this.applyMatrix4(bt), this;
  }
  scale(e, t, n) {
    return bt.makeScale(e, t, n), this.applyMatrix4(bt), this;
  }
  lookAt(e) {
    return Cr.lookAt(e), Cr.updateMatrix(), this.applyMatrix4(Cr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Fn).negate(),
      this.translate(Fn.x, Fn.y, Fn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new vt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Et.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (st.addVectors(this.boundingBox.min, Et.min),
                this.boundingBox.expandByPoint(st),
                st.addVectors(this.boundingBox.max, Et.max),
                this.boundingBox.expandByPoint(st))
              : (this.boundingBox.expandByPoint(Et.min),
                this.boundingBox.expandByPoint(Et.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ji());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Et.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          si.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (st.addVectors(Et.min, si.min),
                Et.expandByPoint(st),
                st.addVectors(Et.max, si.max),
                Et.expandByPoint(st))
              : (Et.expandByPoint(si.min), Et.expandByPoint(si.max));
        }
      Et.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        st.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(st)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            st.fromBufferAttribute(a, c),
              l && (Fn.fromBufferAttribute(e, c), st.add(Fn)),
              (r = Math.max(r, n.distanceToSquared(st)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new zt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let T = 0; T < a; T++) (c[T] = new L()), (u[T] = new L());
    const d = new L(),
      f = new L(),
      m = new L(),
      _ = new we(),
      v = new we(),
      p = new we(),
      h = new L(),
      b = new L();
    function M(T, Z, Q) {
      d.fromArray(r, T * 3),
        f.fromArray(r, Z * 3),
        m.fromArray(r, Q * 3),
        _.fromArray(o, T * 2),
        v.fromArray(o, Z * 2),
        p.fromArray(o, Q * 2),
        f.sub(d),
        m.sub(d),
        v.sub(_),
        p.sub(_);
      const F = 1 / (v.x * p.y - p.x * v.y);
      isFinite(F) &&
        (h
          .copy(f)
          .multiplyScalar(p.y)
          .addScaledVector(m, -v.y)
          .multiplyScalar(F),
        b
          .copy(m)
          .multiplyScalar(v.x)
          .addScaledVector(f, -p.x)
          .multiplyScalar(F),
        c[T].add(h),
        c[Z].add(h),
        c[Q].add(h),
        u[T].add(b),
        u[Z].add(b),
        u[Q].add(b));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: n.length }]);
    for (let T = 0, Z = y.length; T < Z; ++T) {
      const Q = y[T],
        F = Q.start,
        W = Q.count;
      for (let H = F, $ = F + W; H < $; H += 3) M(n[H + 0], n[H + 1], n[H + 2]);
    }
    const A = new L(),
      P = new L(),
      w = new L(),
      q = new L();
    function x(T) {
      w.fromArray(s, T * 3), q.copy(w);
      const Z = c[T];
      A.copy(Z),
        A.sub(w.multiplyScalar(w.dot(Z))).normalize(),
        P.crossVectors(q, Z);
      const F = P.dot(u[T]) < 0 ? -1 : 1;
      (l[T * 4] = A.x),
        (l[T * 4 + 1] = A.y),
        (l[T * 4 + 2] = A.z),
        (l[T * 4 + 3] = F);
    }
    for (let T = 0, Z = y.length; T < Z; ++T) {
      const Q = y[T],
        F = Q.start,
        W = Q.count;
      for (let H = F, $ = F + W; H < $; H += 3)
        x(n[H + 0]), x(n[H + 1]), x(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new zt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const r = new L(),
        s = new L(),
        o = new L(),
        a = new L(),
        l = new L(),
        c = new L(),
        u = new L(),
        d = new L();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const _ = e.getX(f + 0),
            v = e.getX(f + 1),
            p = e.getX(f + 2);
          r.fromBufferAttribute(t, _),
            s.fromBufferAttribute(t, v),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, s),
            d.subVectors(r, s),
            u.cross(d),
            a.fromBufferAttribute(n, _),
            l.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, p),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(_, a.x, a.y, a.z),
            n.setXYZ(v, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            o.fromBufferAttribute(t, f + 2),
            u.subVectors(o, s),
            d.subVectors(r, s),
            u.cross(d),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      st.fromBufferAttribute(e, t),
        st.normalize(),
        e.setXYZ(t, st.x, st.y, st.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        d = a.normalized,
        f = new c.constructor(l.length * u);
      let m = 0,
        _ = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute
          ? (m = l[v] * a.data.stride + a.offset)
          : (m = l[v] * u);
        for (let h = 0; h < u; h++) f[_++] = c[m++];
      }
      return new zt(f, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Nt(),
      n = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u],
          m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        d = s[c];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const na = new je(),
  dn = new es(),
  Ui = new Ji(),
  ia = new L(),
  On = new L(),
  Bn = new L(),
  zn = new L(),
  Lr = new L(),
  Ii = new L(),
  Ni = new we(),
  Fi = new we(),
  Oi = new we(),
  ra = new L(),
  sa = new L(),
  aa = new L(),
  Bi = new L(),
  zi = new L();
class It extends mt {
  constructor(e = new Nt(), t = new er()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ii.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          d = s[l];
        u !== 0 &&
          (Lr.fromBufferAttribute(d, e),
          o ? Ii.addScaledVector(Lr, u) : Ii.addScaledVector(Lr.sub(t), u));
      }
      t.add(Ii);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ui.copy(n.boundingSphere),
      Ui.applyMatrix4(s),
      dn.copy(e.ray).recast(e.near),
      !(
        Ui.containsPoint(dn.origin) === !1 &&
        (dn.intersectSphere(Ui, ia) === null ||
          dn.origin.distanceToSquared(ia) > (e.far - e.near) ** 2)
      ) &&
        (na.copy(s).invert(),
        dn.copy(e.ray).applyMatrix4(na),
        !(n.boundingBox !== null && dn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, dn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      d = s.attributes.normal,
      f = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_],
            h = o[p.materialIndex],
            b = Math.max(p.start, m.start),
            M = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let y = b, A = M; y < A; y += 3) {
            const P = a.getX(y),
              w = a.getX(y + 1),
              q = a.getX(y + 2);
            (r = Hi(this, h, e, n, c, u, d, P, w, q)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          v = Math.min(a.count, m.start + m.count);
        for (let p = _, h = v; p < h; p += 3) {
          const b = a.getX(p),
            M = a.getX(p + 1),
            y = a.getX(p + 2);
          (r = Hi(this, o, e, n, c, u, d, b, M, y)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, v = f.length; _ < v; _++) {
          const p = f[_],
            h = o[p.materialIndex],
            b = Math.max(p.start, m.start),
            M = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let y = b, A = M; y < A; y += 3) {
            const P = y,
              w = y + 1,
              q = y + 2;
            (r = Hi(this, h, e, n, c, u, d, P, w, q)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const _ = Math.max(0, m.start),
          v = Math.min(l.count, m.start + m.count);
        for (let p = _, h = v; p < h; p += 3) {
          const b = p,
            M = p + 1,
            y = p + 2;
          (r = Hi(this, o, e, n, c, u, d, b, M, y)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
  }
}
function lc(i, e, t, n, r, s, o, a) {
  let l;
  if (
    (e.side === gt
      ? (l = n.intersectTriangle(o, s, r, !0, a))
      : (l = n.intersectTriangle(r, s, o, e.side === on, a)),
    l === null)
  )
    return null;
  zi.copy(a), zi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(zi);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: zi.clone(), object: i };
}
function Hi(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, On),
    i.getVertexPosition(l, Bn),
    i.getVertexPosition(c, zn);
  const u = lc(i, e, t, n, On, Bn, zn, Bi);
  if (u) {
    r &&
      (Ni.fromBufferAttribute(r, a),
      Fi.fromBufferAttribute(r, l),
      Oi.fromBufferAttribute(r, c),
      (u.uv = Pt.getInterpolation(Bi, On, Bn, zn, Ni, Fi, Oi, new we()))),
      s &&
        (Ni.fromBufferAttribute(s, a),
        Fi.fromBufferAttribute(s, l),
        Oi.fromBufferAttribute(s, c),
        (u.uv1 = Pt.getInterpolation(Bi, On, Bn, zn, Ni, Fi, Oi, new we())),
        (u.uv2 = u.uv1)),
      o &&
        (ra.fromBufferAttribute(o, a),
        sa.fromBufferAttribute(o, l),
        aa.fromBufferAttribute(o, c),
        (u.normal = Pt.getInterpolation(Bi, On, Bn, zn, ra, sa, aa, new L())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new L(), materialIndex: 0 };
    Pt.getNormal(On, Bn, zn, d.normal), (u.face = d);
  }
  return u;
}
class xi extends Nt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      d = [];
    let f = 0,
      m = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      _("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      _("x", "z", "y", 1, 1, e, n, t, r, o, 2),
      _("x", "z", "y", 1, -1, e, n, -t, r, o, 3),
      _("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      _("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new vt(c, 3)),
      this.setAttribute("normal", new vt(u, 3)),
      this.setAttribute("uv", new vt(d, 2));
    function _(v, p, h, b, M, y, A, P, w, q, x) {
      const T = y / w,
        Z = A / q,
        Q = y / 2,
        F = A / 2,
        W = P / 2,
        H = w + 1,
        $ = q + 1;
      let X = 0,
        Y = 0;
      const te = new L();
      for (let K = 0; K < $; K++) {
        const O = K * Z - F;
        for (let G = 0; G < H; G++) {
          const he = G * T - Q;
          (te[v] = he * b),
            (te[p] = O * M),
            (te[h] = W),
            c.push(te.x, te.y, te.z),
            (te[v] = 0),
            (te[p] = 0),
            (te[h] = P > 0 ? 1 : -1),
            u.push(te.x, te.y, te.z),
            d.push(G / w),
            d.push(1 - K / q),
            (X += 1);
        }
      }
      for (let K = 0; K < q; K++)
        for (let O = 0; O < w; O++) {
          const G = f + O + H * K,
            he = f + O + H * (K + 1),
            de = f + (O + 1) + H * (K + 1),
            fe = f + (O + 1) + H * K;
          l.push(G, he, fe), l.push(he, de, fe), (Y += 6);
        }
      a.addGroup(m, Y, x), (m += Y), (f += X);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new xi(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function $n(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function ft(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = $n(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function cc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function ho(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Ht;
}
const uc = { clone: $n, merge: ft };
var hc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  dc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends Qn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = hc),
      (this.fragmentShader = dc),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = $n(e.uniforms)),
      (this.uniformsGroups = cc(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[r] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[r] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[r] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[r] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: o.toArray() })
        : (t.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class fo extends mt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new je()),
      (this.projectionMatrix = new je()),
      (this.projectionMatrixInverse = new je()),
      (this.coordinateSystem = Kt);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class yt extends fo {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = pi * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ci * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return pi * 2 * Math.atan(Math.tan(ci * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ci * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * n) / c),
        (r *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Hn = -90,
  Gn = 1;
class fc extends mt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null);
    const r = new yt(Hn, Gn, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new yt(Hn, Gn, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new yt(Hn, Gn, e, t);
    (o.layers = this.layers), this.add(o);
    const a = new yt(Hn, Gn, e, t);
    (a.layers = this.layers), this.add(a);
    const l = new yt(Hn, Gn, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new yt(Hn, Gn, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Kt)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Yi)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      d = e.xr.enabled;
    e.xr.enabled = !1;
    const f = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, r),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = f),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.xr.enabled = d),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class po extends _t {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : jn),
      super(e, t, n, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class pc extends Mn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (hi(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (t.colorSpace = t.encoding === vn ? Xe : xn)),
      (this.texture = new po(
        r,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new xi(5, 5, 5),
      s = new En({
        name: "CubemapFromEquirect",
        uniforms: $n(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: gt,
        blending: rn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new It(r, s),
      a = t.minFilter;
    return (
      t.minFilter === di && (t.minFilter = At),
      new fc(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Pr = new L(),
  mc = new L(),
  gc = new Ue();
class en {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Pr.subVectors(n, t).cross(mc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Pr),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || gc.getNormalMatrix(e),
      r = this.coplanarPoint(Pr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fn = new Ji(),
  Gi = new L();
class ts {
  constructor(
    e = new en(),
    t = new en(),
    n = new en(),
    r = new en(),
    s = new en(),
    o = new en()
  ) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Kt) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      d = r[6],
      f = r[7],
      m = r[8],
      _ = r[9],
      v = r[10],
      p = r[11],
      h = r[12],
      b = r[13],
      M = r[14],
      y = r[15];
    if (
      (n[0].setComponents(l - s, f - c, p - m, y - h).normalize(),
      n[1].setComponents(l + s, f + c, p + m, y + h).normalize(),
      n[2].setComponents(l + o, f + u, p + _, y + b).normalize(),
      n[3].setComponents(l - o, f - u, p - _, y - b).normalize(),
      n[4].setComponents(l - a, f - d, p - v, y - M).normalize(),
      t === Kt)
    )
      n[5].setComponents(l + a, f + d, p + v, y + M).normalize();
    else if (t === Yi) n[5].setComponents(a, d, v, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(fn);
  }
  intersectsSprite(e) {
    return (
      fn.center.set(0, 0, 0),
      (fn.radius = 0.7071067811865476),
      fn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(fn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((Gi.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Gi.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Gi.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Gi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function mo() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, o) {
    t(s, o), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function _c(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function r(c, u) {
    const d = c.array,
      f = c.usage,
      m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, d, f), c.onUploadCallback();
    let _;
    if (d instanceof Float32Array) _ = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) _ = i.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else _ = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array) _ = i.SHORT;
    else if (d instanceof Uint32Array) _ = i.UNSIGNED_INT;
    else if (d instanceof Int32Array) _ = i.INT;
    else if (d instanceof Int8Array) _ = i.BYTE;
    else if (d instanceof Uint8Array) _ = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray) _ = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: _,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, d) {
    const f = u.array,
      m = u.updateRange;
    i.bindBuffer(d, c),
      m.count === -1
        ? i.bufferSubData(d, 0, f)
        : (t
            ? i.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f,
                m.offset,
                m.count
              )
            : i.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, r(c, u))
      : d.version < c.version && (s(d.buffer, c, u), (d.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class ns extends Nt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      d = e / a,
      f = t / l,
      m = [],
      _ = [],
      v = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const b = h * f - o;
      for (let M = 0; M < c; M++) {
        const y = M * d - s;
        _.push(y, -b, 0), v.push(0, 0, 1), p.push(M / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let b = 0; b < a; b++) {
        const M = b + c * h,
          y = b + c * (h + 1),
          A = b + 1 + c * (h + 1),
          P = b + 1 + c * h;
        m.push(M, y, P), m.push(y, A, P);
      }
    this.setIndex(m),
      this.setAttribute("position", new vt(_, 3)),
      this.setAttribute("normal", new vt(v, 3)),
      this.setAttribute("uv", new vt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ns(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var vc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  xc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Mc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Sc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ec = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  yc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Tc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  bc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Ac = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  wc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Rc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Cc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Lc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Pc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Dc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Uc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Ic = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Nc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Fc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Oc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Bc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  zc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Hc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Gc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Vc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  kc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Wc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Xc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  qc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Yc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Kc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Zc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  $c = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Qc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  eu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  tu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  nu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  iu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  ru = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  su = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  au = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  ou = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  cu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  uu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  hu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  du = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  fu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  pu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,
  mu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  gu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  _u = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  vu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  xu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Mu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Su = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Eu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  yu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Tu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  bu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Au = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  wu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Ru = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Cu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Lu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Pu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Du = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Uu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
  Iu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Nu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Fu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ou = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Bu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  zu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Hu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Gu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Vu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  ku = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Wu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Xu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  qu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Yu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  ju = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Ku = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Zu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  $u = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Ju = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Qu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  eh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  th = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  nh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  ih = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  rh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  sh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  ah = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  oh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  lh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  ch = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  uh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  hh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  dh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  fh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  ph = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const mh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  gh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  _h = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  vh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  xh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Mh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Sh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Eh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  yh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Th = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  bh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Ah = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  wh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Rh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Ch = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Lh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ph = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Dh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Uh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Ih = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Nh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Fh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Oh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Bh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  zh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Hh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Gh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Vh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  kh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Wh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Xh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  qh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Yh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  jh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Pe = {
    alphahash_fragment: vc,
    alphahash_pars_fragment: xc,
    alphamap_fragment: Mc,
    alphamap_pars_fragment: Sc,
    alphatest_fragment: Ec,
    alphatest_pars_fragment: yc,
    aomap_fragment: Tc,
    aomap_pars_fragment: bc,
    begin_vertex: Ac,
    beginnormal_vertex: wc,
    bsdfs: Rc,
    iridescence_fragment: Cc,
    bumpmap_pars_fragment: Lc,
    clipping_planes_fragment: Pc,
    clipping_planes_pars_fragment: Dc,
    clipping_planes_pars_vertex: Uc,
    clipping_planes_vertex: Ic,
    color_fragment: Nc,
    color_pars_fragment: Fc,
    color_pars_vertex: Oc,
    color_vertex: Bc,
    common: zc,
    cube_uv_reflection_fragment: Hc,
    defaultnormal_vertex: Gc,
    displacementmap_pars_vertex: Vc,
    displacementmap_vertex: kc,
    emissivemap_fragment: Wc,
    emissivemap_pars_fragment: Xc,
    colorspace_fragment: qc,
    colorspace_pars_fragment: Yc,
    envmap_fragment: jc,
    envmap_common_pars_fragment: Kc,
    envmap_pars_fragment: Zc,
    envmap_pars_vertex: $c,
    envmap_physical_pars_fragment: cu,
    envmap_vertex: Jc,
    fog_vertex: Qc,
    fog_pars_vertex: eu,
    fog_fragment: tu,
    fog_pars_fragment: nu,
    gradientmap_pars_fragment: iu,
    lightmap_fragment: ru,
    lightmap_pars_fragment: su,
    lights_lambert_fragment: au,
    lights_lambert_pars_fragment: ou,
    lights_pars_begin: lu,
    lights_toon_fragment: uu,
    lights_toon_pars_fragment: hu,
    lights_phong_fragment: du,
    lights_phong_pars_fragment: fu,
    lights_physical_fragment: pu,
    lights_physical_pars_fragment: mu,
    lights_fragment_begin: gu,
    lights_fragment_maps: _u,
    lights_fragment_end: vu,
    logdepthbuf_fragment: xu,
    logdepthbuf_pars_fragment: Mu,
    logdepthbuf_pars_vertex: Su,
    logdepthbuf_vertex: Eu,
    map_fragment: yu,
    map_pars_fragment: Tu,
    map_particle_fragment: bu,
    map_particle_pars_fragment: Au,
    metalnessmap_fragment: wu,
    metalnessmap_pars_fragment: Ru,
    morphcolor_vertex: Cu,
    morphnormal_vertex: Lu,
    morphtarget_pars_vertex: Pu,
    morphtarget_vertex: Du,
    normal_fragment_begin: Uu,
    normal_fragment_maps: Iu,
    normal_pars_fragment: Nu,
    normal_pars_vertex: Fu,
    normal_vertex: Ou,
    normalmap_pars_fragment: Bu,
    clearcoat_normal_fragment_begin: zu,
    clearcoat_normal_fragment_maps: Hu,
    clearcoat_pars_fragment: Gu,
    iridescence_pars_fragment: Vu,
    opaque_fragment: ku,
    packing: Wu,
    premultiplied_alpha_fragment: Xu,
    project_vertex: qu,
    dithering_fragment: Yu,
    dithering_pars_fragment: ju,
    roughnessmap_fragment: Ku,
    roughnessmap_pars_fragment: Zu,
    shadowmap_pars_fragment: $u,
    shadowmap_pars_vertex: Ju,
    shadowmap_vertex: Qu,
    shadowmask_pars_fragment: eh,
    skinbase_vertex: th,
    skinning_pars_vertex: nh,
    skinning_vertex: ih,
    skinnormal_vertex: rh,
    specularmap_fragment: sh,
    specularmap_pars_fragment: ah,
    tonemapping_fragment: oh,
    tonemapping_pars_fragment: lh,
    transmission_fragment: ch,
    transmission_pars_fragment: uh,
    uv_pars_fragment: hh,
    uv_pars_vertex: dh,
    uv_vertex: fh,
    worldpos_vertex: ph,
    background_vert: mh,
    background_frag: gh,
    backgroundCube_vert: _h,
    backgroundCube_frag: vh,
    cube_vert: xh,
    cube_frag: Mh,
    depth_vert: Sh,
    depth_frag: Eh,
    distanceRGBA_vert: yh,
    distanceRGBA_frag: Th,
    equirect_vert: bh,
    equirect_frag: Ah,
    linedashed_vert: wh,
    linedashed_frag: Rh,
    meshbasic_vert: Ch,
    meshbasic_frag: Lh,
    meshlambert_vert: Ph,
    meshlambert_frag: Dh,
    meshmatcap_vert: Uh,
    meshmatcap_frag: Ih,
    meshnormal_vert: Nh,
    meshnormal_frag: Fh,
    meshphong_vert: Oh,
    meshphong_frag: Bh,
    meshphysical_vert: zh,
    meshphysical_frag: Hh,
    meshtoon_vert: Gh,
    meshtoon_frag: Vh,
    points_vert: kh,
    points_frag: Wh,
    shadow_vert: Xh,
    shadow_frag: qh,
    sprite_vert: Yh,
    sprite_frag: jh,
  },
  oe = {
    common: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ue() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ue() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ue() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ue() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ue() },
      normalScale: { value: new we(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ue() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ue() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ue() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ue() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new He(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ue() },
    },
    sprite: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      center: { value: new we(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
  },
  Ot = {
    basic: {
      uniforms: ft([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.fog,
      ]),
      vertexShader: Pe.meshbasic_vert,
      fragmentShader: Pe.meshbasic_frag,
    },
    lambert: {
      uniforms: ft([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new He(0) } },
      ]),
      vertexShader: Pe.meshlambert_vert,
      fragmentShader: Pe.meshlambert_frag,
    },
    phong: {
      uniforms: ft([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new He(0) },
          specular: { value: new He(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Pe.meshphong_vert,
      fragmentShader: Pe.meshphong_frag,
    },
    standard: {
      uniforms: ft([
        oe.common,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.roughnessmap,
        oe.metalnessmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new He(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Pe.meshphysical_vert,
      fragmentShader: Pe.meshphysical_frag,
    },
    toon: {
      uniforms: ft([
        oe.common,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.gradientmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new He(0) } },
      ]),
      vertexShader: Pe.meshtoon_vert,
      fragmentShader: Pe.meshtoon_frag,
    },
    matcap: {
      uniforms: ft([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Pe.meshmatcap_vert,
      fragmentShader: Pe.meshmatcap_frag,
    },
    points: {
      uniforms: ft([oe.points, oe.fog]),
      vertexShader: Pe.points_vert,
      fragmentShader: Pe.points_frag,
    },
    dashed: {
      uniforms: ft([
        oe.common,
        oe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Pe.linedashed_vert,
      fragmentShader: Pe.linedashed_frag,
    },
    depth: {
      uniforms: ft([oe.common, oe.displacementmap]),
      vertexShader: Pe.depth_vert,
      fragmentShader: Pe.depth_frag,
    },
    normal: {
      uniforms: ft([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Pe.meshnormal_vert,
      fragmentShader: Pe.meshnormal_frag,
    },
    sprite: {
      uniforms: ft([oe.sprite, oe.fog]),
      vertexShader: Pe.sprite_vert,
      fragmentShader: Pe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ue() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Pe.background_vert,
      fragmentShader: Pe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Pe.backgroundCube_vert,
      fragmentShader: Pe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Pe.cube_vert,
      fragmentShader: Pe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Pe.equirect_vert,
      fragmentShader: Pe.equirect_frag,
    },
    distanceRGBA: {
      uniforms: ft([
        oe.common,
        oe.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Pe.distanceRGBA_vert,
      fragmentShader: Pe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: ft([
        oe.lights,
        oe.fog,
        { color: { value: new He(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Pe.shadow_vert,
      fragmentShader: Pe.shadow_frag,
    },
  };
Ot.physical = {
  uniforms: ft([
    Ot.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ue() },
      clearcoatNormalScale: { value: new we(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ue() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: new He(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ue() },
      transmissionSamplerSize: { value: new we() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new He(0) },
      specularColor: { value: new He(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ue() },
      anisotropyVector: { value: new we() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ue() },
    },
  ]),
  vertexShader: Pe.meshphysical_vert,
  fragmentShader: Pe.meshphysical_frag,
};
const Vi = { r: 0, b: 0, g: 0 };
function Kh(i, e, t, n, r, s, o) {
  const a = new He(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    d = null,
    f = 0,
    m = null;
  function _(p, h) {
    let b = !1,
      M = h.isScene === !0 ? h.background : null;
    M && M.isTexture && (M = (h.backgroundBlurriness > 0 ? t : e).get(M)),
      M === null ? v(a, l) : M && M.isColor && (v(M, 1), (b = !0));
    const y = i.xr.getEnvironmentBlendMode();
    y === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, o)
      : y === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o),
      (i.autoClear || b) &&
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === Zi)
        ? (u === void 0 &&
            ((u = new It(
              new xi(1, 1, 1),
              new En({
                name: "BackgroundCubeMaterial",
                uniforms: $n(Ot.backgroundCube.uniforms),
                vertexShader: Ot.backgroundCube.vertexShader,
                fragmentShader: Ot.backgroundCube.fragmentShader,
                side: gt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (A, P, w) {
              this.matrixWorld.copyPosition(w.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = M),
          (u.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            h.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (u.material.toneMapped = M.colorSpace !== Xe),
          (d !== M || f !== M.version || m !== i.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (d = M),
            (f = M.version),
            (m = i.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (c === void 0 &&
            ((c = new It(
              new ns(2, 2),
              new En({
                name: "BackgroundMaterial",
                uniforms: $n(Ot.background.uniforms),
                vertexShader: Ot.background.vertexShader,
                fragmentShader: Ot.background.fragmentShader,
                side: on,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = M),
          (c.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (c.material.toneMapped = M.colorSpace !== Xe),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(M.matrix),
          (d !== M || f !== M.version || m !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = M),
            (f = M.version),
            (m = i.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, h) {
    p.getRGB(Vi, ho(i)), n.buffers.color.setClear(Vi.r, Vi.g, Vi.b, h, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, h = 1) {
      a.set(p), (l = h), v(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), v(a, l);
    },
    render: _,
  };
}
function Zh(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function d(W, H, $, X, Y) {
    let te = !1;
    if (o) {
      const K = v(X, $, H);
      c !== K && ((c = K), m(c.object)),
        (te = h(W, X, $, Y)),
        te && b(W, X, $, Y);
    } else {
      const K = H.wireframe === !0;
      (c.geometry !== X.id || c.program !== $.id || c.wireframe !== K) &&
        ((c.geometry = X.id), (c.program = $.id), (c.wireframe = K), (te = !0));
    }
    Y !== null && t.update(Y, i.ELEMENT_ARRAY_BUFFER),
      (te || u) &&
        ((u = !1),
        q(W, H, $, X),
        Y !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(W) {
    return n.isWebGL2 ? i.bindVertexArray(W) : s.bindVertexArrayOES(W);
  }
  function _(W) {
    return n.isWebGL2 ? i.deleteVertexArray(W) : s.deleteVertexArrayOES(W);
  }
  function v(W, H, $) {
    const X = $.wireframe === !0;
    let Y = a[W.id];
    Y === void 0 && ((Y = {}), (a[W.id] = Y));
    let te = Y[H.id];
    te === void 0 && ((te = {}), (Y[H.id] = te));
    let K = te[X];
    return K === void 0 && ((K = p(f())), (te[X] = K)), K;
  }
  function p(W) {
    const H = [],
      $ = [],
      X = [];
    for (let Y = 0; Y < r; Y++) (H[Y] = 0), ($[Y] = 0), (X[Y] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: $,
      attributeDivisors: X,
      object: W,
      attributes: {},
      index: null,
    };
  }
  function h(W, H, $, X) {
    const Y = c.attributes,
      te = H.attributes;
    let K = 0;
    const O = $.getAttributes();
    for (const G in O)
      if (O[G].location >= 0) {
        const de = Y[G];
        let fe = te[G];
        if (
          (fe === void 0 &&
            (G === "instanceMatrix" &&
              W.instanceMatrix &&
              (fe = W.instanceMatrix),
            G === "instanceColor" && W.instanceColor && (fe = W.instanceColor)),
          de === void 0 || de.attribute !== fe || (fe && de.data !== fe.data))
        )
          return !0;
        K++;
      }
    return c.attributesNum !== K || c.index !== X;
  }
  function b(W, H, $, X) {
    const Y = {},
      te = H.attributes;
    let K = 0;
    const O = $.getAttributes();
    for (const G in O)
      if (O[G].location >= 0) {
        let de = te[G];
        de === void 0 &&
          (G === "instanceMatrix" &&
            W.instanceMatrix &&
            (de = W.instanceMatrix),
          G === "instanceColor" && W.instanceColor && (de = W.instanceColor));
        const fe = {};
        (fe.attribute = de),
          de && de.data && (fe.data = de.data),
          (Y[G] = fe),
          K++;
      }
    (c.attributes = Y), (c.attributesNum = K), (c.index = X);
  }
  function M() {
    const W = c.newAttributes;
    for (let H = 0, $ = W.length; H < $; H++) W[H] = 0;
  }
  function y(W) {
    A(W, 0);
  }
  function A(W, H) {
    const $ = c.newAttributes,
      X = c.enabledAttributes,
      Y = c.attributeDivisors;
    ($[W] = 1),
      X[W] === 0 && (i.enableVertexAttribArray(W), (X[W] = 1)),
      Y[W] !== H &&
        ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](W, H),
        (Y[W] = H));
  }
  function P() {
    const W = c.newAttributes,
      H = c.enabledAttributes;
    for (let $ = 0, X = H.length; $ < X; $++)
      H[$] !== W[$] && (i.disableVertexAttribArray($), (H[$] = 0));
  }
  function w(W, H, $, X, Y, te, K) {
    K === !0
      ? i.vertexAttribIPointer(W, H, $, Y, te)
      : i.vertexAttribPointer(W, H, $, X, Y, te);
  }
  function q(W, H, $, X) {
    if (
      n.isWebGL2 === !1 &&
      (W.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    M();
    const Y = X.attributes,
      te = $.getAttributes(),
      K = H.defaultAttributeValues;
    for (const O in te) {
      const G = te[O];
      if (G.location >= 0) {
        let he = Y[O];
        if (
          (he === void 0 &&
            (O === "instanceMatrix" &&
              W.instanceMatrix &&
              (he = W.instanceMatrix),
            O === "instanceColor" && W.instanceColor && (he = W.instanceColor)),
          he !== void 0)
        ) {
          const de = he.normalized,
            fe = he.itemSize,
            xe = t.get(he);
          if (xe === void 0) continue;
          const Te = xe.buffer,
            ge = xe.type,
            Be = xe.bytesPerElement,
            ot =
              n.isWebGL2 === !0 &&
              (ge === i.INT || ge === i.UNSIGNED_INT || he.gpuType === Ka);
          if (he.isInterleavedBufferAttribute) {
            const Ce = he.data,
              U = Ce.stride,
              Qe = he.offset;
            if (Ce.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < G.locationSize; _e++)
                A(G.location + _e, Ce.meshPerAttribute);
              W.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = Ce.meshPerAttribute * Ce.count);
            } else
              for (let _e = 0; _e < G.locationSize; _e++) y(G.location + _e);
            i.bindBuffer(i.ARRAY_BUFFER, Te);
            for (let _e = 0; _e < G.locationSize; _e++)
              w(
                G.location + _e,
                fe / G.locationSize,
                ge,
                de,
                U * Be,
                (Qe + (fe / G.locationSize) * _e) * Be,
                ot
              );
          } else {
            if (he.isInstancedBufferAttribute) {
              for (let Ce = 0; Ce < G.locationSize; Ce++)
                A(G.location + Ce, he.meshPerAttribute);
              W.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let Ce = 0; Ce < G.locationSize; Ce++) y(G.location + Ce);
            i.bindBuffer(i.ARRAY_BUFFER, Te);
            for (let Ce = 0; Ce < G.locationSize; Ce++)
              w(
                G.location + Ce,
                fe / G.locationSize,
                ge,
                de,
                fe * Be,
                (fe / G.locationSize) * Ce * Be,
                ot
              );
          }
        } else if (K !== void 0) {
          const de = K[O];
          if (de !== void 0)
            switch (de.length) {
              case 2:
                i.vertexAttrib2fv(G.location, de);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, de);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, de);
                break;
              default:
                i.vertexAttrib1fv(G.location, de);
            }
        }
      }
    }
    P();
  }
  function x() {
    Q();
    for (const W in a) {
      const H = a[W];
      for (const $ in H) {
        const X = H[$];
        for (const Y in X) _(X[Y].object), delete X[Y];
        delete H[$];
      }
      delete a[W];
    }
  }
  function T(W) {
    if (a[W.id] === void 0) return;
    const H = a[W.id];
    for (const $ in H) {
      const X = H[$];
      for (const Y in X) _(X[Y].object), delete X[Y];
      delete H[$];
    }
    delete a[W.id];
  }
  function Z(W) {
    for (const H in a) {
      const $ = a[H];
      if ($[W.id] === void 0) continue;
      const X = $[W.id];
      for (const Y in X) _(X[Y].object), delete X[Y];
      delete $[W.id];
    }
  }
  function Q() {
    F(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function F() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: d,
    reset: Q,
    resetDefaultState: F,
    dispose: x,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: Z,
    initAttributes: M,
    enableAttribute: y,
    disableUnusedAttributes: P,
  };
}
function $h(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, d) {
    if (d === 0) return;
    let f, m;
    if (r) (f = i), (m = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[m](s, c, u, d), t.update(u, s, d);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function Jh(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" &&
    i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead."
    ),
    (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = i.getParameter(i.MAX_TEXTURE_SIZE),
    _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    v = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    h = i.getParameter(i.MAX_VARYING_VECTORS),
    b = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    M = f > 0,
    y = o || e.has("OES_texture_float"),
    A = M && y,
    P = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: _,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: b,
    vertexTextures: M,
    floatFragmentTextures: y,
    floatVertexTextures: A,
    maxSamples: P,
  };
}
function Qh(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const o = new en(),
    a = new Ue(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const m = d.length !== 0 || f || n !== 0 || r;
      return (r = f), (n = d.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = u(d, f, 0);
    }),
    (this.setState = function (d, f, m) {
      const _ = d.clippingPlanes,
        v = d.clipIntersection,
        p = d.clipShadows,
        h = i.get(d);
      if (!r || _ === null || _.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const b = s ? 0 : n,
          M = b * 4;
        let y = h.clippingState || null;
        (l.value = y), (y = u(_, f, M, m));
        for (let A = 0; A !== M; ++A) y[A] = t[A];
        (h.clippingState = y),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += b);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, f, m, _) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (((p = l.value), _ !== !0 || p === null)) {
        const h = m + v * 4,
          b = f.matrixWorldInverse;
        a.getNormalMatrix(b),
          (p === null || p.length < h) && (p = new Float32Array(h));
        for (let M = 0, y = m; M !== v; ++M, y += 4)
          o.copy(d[M]).applyMatrix4(b, a),
            o.normal.toArray(p, y),
            (p[y + 3] = o.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = v), (e.numIntersection = 0), p;
  }
}
function ed(i) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Vr ? (o.mapping = jn) : a === kr && (o.mapping = Kn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Vr || a === kr)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new pc(l.height / 2);
            return (
              c.fromEquirectangularTexture(i, o),
              e.set(o, c),
              o.addEventListener("dispose", r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class td extends fo {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Xn = 4,
  oa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  mn = 20,
  Dr = new td(),
  la = new He();
let Ur = null;
const pn = (1 + Math.sqrt(5)) / 2,
  Vn = 1 / pn,
  ca = [
    new L(1, 1, 1),
    new L(-1, 1, 1),
    new L(1, 1, -1),
    new L(-1, 1, -1),
    new L(0, pn, Vn),
    new L(0, pn, -Vn),
    new L(Vn, 0, pn),
    new L(-Vn, 0, pn),
    new L(pn, Vn, 0),
    new L(-pn, Vn, 0),
  ];
class ua {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (Ur = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = fa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = da()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ur),
      (e.scissorTest = !1),
      ki(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === jn || e.mapping === Kn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Ur = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: At,
        minFilter: At,
        generateMipmaps: !1,
        type: fi,
        format: Ut,
        colorSpace: Ht,
        depthBuffer: !1,
      },
      r = ha(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ha(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = nd(s)),
        (this._blurMaterial = id(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new It(this._lodPlanes[0], e);
    this._renderer.compile(t, Dr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new yt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(la), (u.toneMapping = sn), (u.autoClear = !1);
    const m = new er({
        name: "PMREM.Background",
        side: gt,
        depthWrite: !1,
        depthTest: !1,
      }),
      _ = new It(new xi(), m);
    let v = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (v = !0))
      : (m.color.copy(la), (v = !0));
    for (let h = 0; h < 6; h++) {
      const b = h % 3;
      b === 0
        ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0))
        : b === 1
        ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0))
        : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const M = this._cubeSize;
      ki(r, b * M, h > 2 ? M : 0, M, M),
        u.setRenderTarget(r),
        v && u.render(_, a),
        u.render(e, a);
    }
    _.geometry.dispose(),
      _.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = d),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === jn || e.mapping === Kn;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = fa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = da());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new It(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    ki(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Dr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        o = ca[(r - 1) % ca.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, "latitudinal", s),
      this._halfBlur(o, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new It(this._lodPlanes[r], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      _ = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * mn - 1),
      v = s / _,
      p = isFinite(s) ? 1 + Math.floor(u * v) : mn;
    p > mn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mn}`
      );
    const h = [];
    let b = 0;
    for (let w = 0; w < mn; ++w) {
      const q = w / v,
        x = Math.exp((-q * q) / 2);
      h.push(x), w === 0 ? (b += x) : w < p && (b += 2 * x);
    }
    for (let w = 0; w < h.length; w++) h[w] = h[w] / b;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = h),
      (f.latitudinal.value = o === "latitudinal"),
      a && (f.poleAxis.value = a);
    const { _lodMax: M } = this;
    (f.dTheta.value = _), (f.mipInt.value = M - n);
    const y = this._sizeLods[r],
      A = 3 * y * (r > M - Xn ? r - M + Xn : 0),
      P = 4 * (this._cubeSize - y);
    ki(t, A, P, 3 * y, 2 * y), l.setRenderTarget(t), l.render(d, Dr);
  }
}
function nd(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - Xn + 1 + oa.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Xn ? (l = oa[o - i + Xn - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      d = 1 + c,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      m = 6,
      _ = 6,
      v = 3,
      p = 2,
      h = 1,
      b = new Float32Array(v * _ * m),
      M = new Float32Array(p * _ * m),
      y = new Float32Array(h * _ * m);
    for (let P = 0; P < m; P++) {
      const w = ((P % 3) * 2) / 3 - 1,
        q = P > 2 ? 0 : -1,
        x = [
          w,
          q,
          0,
          w + 2 / 3,
          q,
          0,
          w + 2 / 3,
          q + 1,
          0,
          w,
          q,
          0,
          w + 2 / 3,
          q + 1,
          0,
          w,
          q + 1,
          0,
        ];
      b.set(x, v * _ * P), M.set(f, p * _ * P);
      const T = [P, P, P, P, P, P];
      y.set(T, h * _ * P);
    }
    const A = new Nt();
    A.setAttribute("position", new zt(b, v)),
      A.setAttribute("uv", new zt(M, p)),
      A.setAttribute("faceIndex", new zt(y, h)),
      e.push(A),
      r > Xn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ha(i, e, t) {
  const n = new Mn(i, e, t);
  return (
    (n.texture.mapping = Zi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function ki(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function id(i, e, t) {
  const n = new Float32Array(mn),
    r = new L(0, 1, 0);
  return new En({
    name: "SphericalGaussianBlur",
    defines: {
      n: mn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: is(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function da() {
  return new En({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: is(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function fa() {
  return new En({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: is(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function is() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function rd(i) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Vr || l === kr,
        u = l === jn || l === Kn;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return (
            t === null && (t = new ua(i)),
            (d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d)),
            e.set(a, d),
            d.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const d = a.image;
            if ((c && d && d.height > 0) || (u && d && r(d))) {
              t === null && (t = new ua(i));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function sd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        r
      );
    },
  };
}
function ad(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes) e.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const v = f.morphAttributes[_];
      for (let p = 0, h = v.length; p < h; p++) e.remove(v[p]);
    }
    f.removeEventListener("dispose", o), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(d, f) {
    return (
      r[f.id] === !0 ||
        (f.addEventListener("dispose", o),
        (r[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function l(d) {
    const f = d.attributes;
    for (const _ in f) e.update(f[_], i.ARRAY_BUFFER);
    const m = d.morphAttributes;
    for (const _ in m) {
      const v = m[_];
      for (let p = 0, h = v.length; p < h; p++) e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const f = [],
      m = d.index,
      _ = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const b = m.array;
      v = m.version;
      for (let M = 0, y = b.length; M < y; M += 3) {
        const A = b[M + 0],
          P = b[M + 1],
          w = b[M + 2];
        f.push(A, P, P, w, w, A);
      }
    } else if (_ !== void 0) {
      const b = _.array;
      v = _.version;
      for (let M = 0, y = b.length / 3 - 1; M < y; M += 3) {
        const A = M + 0,
          P = M + 1,
          w = M + 2;
        f.push(A, P, P, w, w, A);
      }
    } else return;
    const p = new (io(f) ? uo : co)(f, 1);
    p.version = v;
    const h = s.get(d);
    h && e.remove(h), s.set(d, p);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function od(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, l;
  function c(f) {
    (a = f.type), (l = f.bytesPerElement);
  }
  function u(f, m) {
    i.drawElements(s, m, a, f * l), t.update(m, s, 1);
  }
  function d(f, m, _) {
    if (_ === 0) return;
    let v, p;
    if (r) (v = i), (p = "drawElementsInstanced");
    else if (
      ((v = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      v === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    v[p](s, m, a, f * l, _), t.update(m, s, _);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = d);
}
function ld(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function cd(i, e) {
  return i[0] - e[0];
}
function ud(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function hd(i, e, t) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new qe(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, d) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const _ =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        v = _ !== void 0 ? _.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== v) {
        let H = function () {
          F.dispose(), s.delete(u), u.removeEventListener("dispose", H);
        };
        var m = H;
        p !== void 0 && p.texture.dispose();
        const M = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          A = u.morphAttributes.color !== void 0,
          P = u.morphAttributes.position || [],
          w = u.morphAttributes.normal || [],
          q = u.morphAttributes.color || [];
        let x = 0;
        M === !0 && (x = 1), y === !0 && (x = 2), A === !0 && (x = 3);
        let T = u.attributes.position.count * x,
          Z = 1;
        T > e.maxTextureSize &&
          ((Z = Math.ceil(T / e.maxTextureSize)), (T = e.maxTextureSize));
        const Q = new Float32Array(T * Z * 4 * v),
          F = new ao(Q, T, Z, v);
        (F.type = nn), (F.needsUpdate = !0);
        const W = x * 4;
        for (let $ = 0; $ < v; $++) {
          const X = P[$],
            Y = w[$],
            te = q[$],
            K = T * Z * 4 * $;
          for (let O = 0; O < X.count; O++) {
            const G = O * W;
            M === !0 &&
              (o.fromBufferAttribute(X, O),
              (Q[K + G + 0] = o.x),
              (Q[K + G + 1] = o.y),
              (Q[K + G + 2] = o.z),
              (Q[K + G + 3] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(Y, O),
                (Q[K + G + 4] = o.x),
                (Q[K + G + 5] = o.y),
                (Q[K + G + 6] = o.z),
                (Q[K + G + 7] = 0)),
              A === !0 &&
                (o.fromBufferAttribute(te, O),
                (Q[K + G + 8] = o.x),
                (Q[K + G + 9] = o.y),
                (Q[K + G + 10] = o.z),
                (Q[K + G + 11] = te.itemSize === 4 ? o.w : 1));
          }
        }
        (p = { count: v, texture: F, size: new we(T, Z) }),
          s.set(u, p),
          u.addEventListener("dispose", H);
      }
      let h = 0;
      for (let M = 0; M < f.length; M++) h += f[M];
      const b = u.morphTargetsRelative ? 1 : 1 - h;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", b),
        d.getUniforms().setValue(i, "morphTargetInfluences", f),
        d.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t),
        d.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
    } else {
      const _ = f === void 0 ? 0 : f.length;
      let v = n[u.id];
      if (v === void 0 || v.length !== _) {
        v = [];
        for (let y = 0; y < _; y++) v[y] = [y, 0];
        n[u.id] = v;
      }
      for (let y = 0; y < _; y++) {
        const A = v[y];
        (A[0] = y), (A[1] = f[y]);
      }
      v.sort(ud);
      for (let y = 0; y < 8; y++)
        y < _ && v[y][1]
          ? ((a[y][0] = v[y][0]), (a[y][1] = v[y][1]))
          : ((a[y][0] = Number.MAX_SAFE_INTEGER), (a[y][1] = 0));
      a.sort(cd);
      const p = u.morphAttributes.position,
        h = u.morphAttributes.normal;
      let b = 0;
      for (let y = 0; y < 8; y++) {
        const A = a[y],
          P = A[0],
          w = A[1];
        P !== Number.MAX_SAFE_INTEGER && w
          ? (p &&
              u.getAttribute("morphTarget" + y) !== p[P] &&
              u.setAttribute("morphTarget" + y, p[P]),
            h &&
              u.getAttribute("morphNormal" + y) !== h[P] &&
              u.setAttribute("morphNormal" + y, h[P]),
            (r[y] = w),
            (b += w))
          : (p &&
              u.hasAttribute("morphTarget" + y) === !0 &&
              u.deleteAttribute("morphTarget" + y),
            h &&
              u.hasAttribute("morphNormal" + y) === !0 &&
              u.deleteAttribute("morphNormal" + y),
            (r[y] = 0));
      }
      const M = u.morphTargetsRelative ? 1 : 1 - b;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", M),
        d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return { update: l };
}
function dd(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      d = e.get(l, u);
    if (
      (r.get(d) !== c && (e.update(d), r.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return d;
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const go = new _t(),
  _o = new ao(),
  vo = new $l(),
  xo = new po(),
  pa = [],
  ma = [],
  ga = new Float32Array(16),
  _a = new Float32Array(9),
  va = new Float32Array(4);
function ei(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = pa[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (pa[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), i[o].toArray(s, a);
  }
  return s;
}
function nt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function it(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function tr(i, e) {
  let t = ma[e];
  t === void 0 && ((t = new Int32Array(e)), (ma[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function fd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function pd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    i.uniform2fv(this.addr, e), it(t, e);
  }
}
function md(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (nt(t, e)) return;
    i.uniform3fv(this.addr, e), it(t, e);
  }
}
function gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    i.uniform4fv(this.addr, e), it(t, e);
  }
}
function _d(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    va.set(n), i.uniformMatrix2fv(this.addr, !1, va), it(t, n);
  }
}
function vd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    _a.set(n), i.uniformMatrix3fv(this.addr, !1, _a), it(t, n);
  }
}
function xd(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (nt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n)) return;
    ga.set(n), i.uniformMatrix4fv(this.addr, !1, ga), it(t, n);
  }
}
function Md(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Sd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    i.uniform2iv(this.addr, e), it(t, e);
  }
}
function Ed(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (nt(t, e)) return;
    i.uniform3iv(this.addr, e), it(t, e);
  }
}
function yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    i.uniform4iv(this.addr, e), it(t, e);
  }
}
function Td(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (nt(t, e)) return;
    i.uniform2uiv(this.addr, e), it(t, e);
  }
}
function Ad(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (nt(t, e)) return;
    i.uniform3uiv(this.addr, e), it(t, e);
  }
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (nt(t, e)) return;
    i.uniform4uiv(this.addr, e), it(t, e);
  }
}
function Rd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2D(e || go, r);
}
function Cd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || vo, r);
}
function Ld(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || xo, r);
}
function Pd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || _o, r);
}
function Dd(i) {
  switch (i) {
    case 5126:
      return fd;
    case 35664:
      return pd;
    case 35665:
      return md;
    case 35666:
      return gd;
    case 35674:
      return _d;
    case 35675:
      return vd;
    case 35676:
      return xd;
    case 5124:
    case 35670:
      return Md;
    case 35667:
    case 35671:
      return Sd;
    case 35668:
    case 35672:
      return Ed;
    case 35669:
    case 35673:
      return yd;
    case 5125:
      return Td;
    case 36294:
      return bd;
    case 36295:
      return Ad;
    case 36296:
      return wd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Rd;
    case 35679:
    case 36299:
    case 36307:
      return Cd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ld;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Pd;
  }
}
function Ud(i, e) {
  i.uniform1fv(this.addr, e);
}
function Id(i, e) {
  const t = ei(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Nd(i, e) {
  const t = ei(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Fd(i, e) {
  const t = ei(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Od(i, e) {
  const t = ei(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Bd(i, e) {
  const t = ei(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function zd(i, e) {
  const t = ei(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Hd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Gd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Vd(i, e) {
  i.uniform3iv(this.addr, e);
}
function kd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Wd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Xd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function qd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Yd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function jd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = tr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || go, s[o]);
}
function Kd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = tr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || vo, s[o]);
}
function Zd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = tr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || xo, s[o]);
}
function $d(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = tr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || _o, s[o]);
}
function Jd(i) {
  switch (i) {
    case 5126:
      return Ud;
    case 35664:
      return Id;
    case 35665:
      return Nd;
    case 35666:
      return Fd;
    case 35674:
      return Od;
    case 35675:
      return Bd;
    case 35676:
      return zd;
    case 5124:
    case 35670:
      return Hd;
    case 35667:
    case 35671:
      return Gd;
    case 35668:
    case 35672:
      return Vd;
    case 35669:
    case 35673:
      return kd;
    case 5125:
      return Wd;
    case 36294:
      return Xd;
    case 36295:
      return qd;
    case 36296:
      return Yd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jd;
    case 35679:
    case 36299:
    case 36307:
      return Kd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Zd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $d;
  }
}
class Qd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = Dd(t.type));
  }
}
class ef {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Jd(t.type));
  }
}
class tf {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Ir = /(\w+)(\])?(\[|\.)?/g;
function xa(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function nf(i, e, t) {
  const n = i.name,
    r = n.length;
  for (Ir.lastIndex = 0; ; ) {
    const s = Ir.exec(n),
      o = Ir.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      xa(t, c === void 0 ? new Qd(a, i, e) : new ef(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && ((d = new tf(a)), xa(t, d)), (t = d);
    }
  }
}
class qi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      nf(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Ma(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let rf = 0;
function sf(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function af(i) {
  switch (i) {
    case Ht:
      return ["Linear", "( value )"];
    case Xe:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        ["Linear", "( value )"]
      );
  }
}
function Sa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      sf(i.getShaderSource(e), o)
    );
  } else return r;
}
function of(i, e) {
  const t = af(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function lf(i, e) {
  let t;
  switch (e) {
    case Qo:
      t = "Linear";
      break;
    case el:
      t = "Reinhard";
      break;
    case tl:
      t = "OptimizedCineon";
      break;
    case nl:
      t = "ACESFilmic";
      break;
    case il:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function cf(i) {
  return [
    i.extensionDerivatives ||
    i.envMapCubeUVHeight ||
    i.bumpMap ||
    i.normalMapTangentSpace ||
    i.clearcoatNormalMap ||
    i.flatShading ||
    i.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) &&
    i.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) &&
    i.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(oi).join(`
`);
}
function uf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function hf(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2),
      s.type === i.FLOAT_MAT3 && (a = 3),
      s.type === i.FLOAT_MAT4 && (a = 4),
      (t[o] = {
        type: s.type,
        location: i.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function oi(i) {
  return i !== "";
}
function Ea(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ya(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const df = /^[ \t]*#include +<([\w\d./]+)>/gm;
function jr(i) {
  return i.replace(df, pf);
}
const ff = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function pf(i, e) {
  let t = Pe[e];
  if (t === void 0) {
    const n = ff.get(e);
    if (n !== void 0)
      (t = Pe[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return jr(t);
}
const mf =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ta(i) {
  return i.replace(mf, gf);
}
function gf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ba(i) {
  let e =
    "precision " +
    i.precision +
    ` float;
precision ` +
    i.precision +
    " int;";
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function _f(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === Wa
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === Po
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : i.shadowMapType === jt && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function vf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case jn:
      case Kn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Zi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function xf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Kn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Mf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ya:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case $o:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Jo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Sf(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Ef(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = _f(t),
    c = vf(t),
    u = xf(t),
    d = Mf(t),
    f = Sf(t),
    m = t.isWebGL2 ? "" : cf(t),
    _ = uf(s),
    v = r.createProgram();
  let p,
    h,
    b = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(oi).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (h = [
        m,
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
      ].filter(oi).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((p = [
        ba(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(oi).join(`
`)),
      (h = [
        m,
        ba(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== sn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== sn ? Pe.tonemapping_pars_fragment : "",
        t.toneMapping !== sn ? lf("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Pe.colorspace_pars_fragment,
        of("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(oi).join(`
`))),
    (o = jr(o)),
    (o = Ea(o, t)),
    (o = ya(o, t)),
    (a = jr(a)),
    (a = Ea(a, t)),
    (a = ya(a, t)),
    (o = Ta(o)),
    (a = Ta(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (h =
        [
          "#define varying in",
          t.glslVersion === Xs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Xs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h));
  const M = b + p + o,
    y = b + h + a,
    A = Ma(r, r.VERTEX_SHADER, M),
    P = Ma(r, r.FRAGMENT_SHADER, y);
  if (
    (r.attachShader(v, A),
    r.attachShader(v, P),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(v, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"),
    r.linkProgram(v),
    i.debug.checkShaderErrors)
  ) {
    const x = r.getProgramInfoLog(v).trim(),
      T = r.getShaderInfoLog(A).trim(),
      Z = r.getShaderInfoLog(P).trim();
    let Q = !0,
      F = !0;
    if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
      if (((Q = !1), typeof i.debug.onShaderError == "function"))
        i.debug.onShaderError(r, v, A, P);
      else {
        const W = Sa(r, A, "vertex"),
          H = Sa(r, P, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            r.getError() +
            " - VALIDATE_STATUS " +
            r.getProgramParameter(v, r.VALIDATE_STATUS) +
            `

Program Info Log: ` +
            x +
            `
` +
            W +
            `
` +
            H
        );
      }
    else
      x !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", x)
        : (T === "" || Z === "") && (F = !1);
    F &&
      (this.diagnostics = {
        runnable: Q,
        programLog: x,
        vertexShader: { log: T, prefix: p },
        fragmentShader: { log: Z, prefix: h },
      });
  }
  r.deleteShader(A), r.deleteShader(P);
  let w;
  this.getUniforms = function () {
    return w === void 0 && (w = new qi(r, v)), w;
  };
  let q;
  return (
    (this.getAttributes = function () {
      return q === void 0 && (q = hf(r, v)), q;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = rf++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = A),
    (this.fragmentShader = P),
    this
  );
}
let yf = 0;
class Tf {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new bf(e)), t.set(e, n)), n;
  }
}
class bf {
  constructor(e) {
    (this.id = yf++), (this.code = e), (this.usedTimes = 0);
  }
}
function Af(i, e, t, n, r, s, o) {
  const a = new oo(),
    l = new Tf(),
    c = [],
    u = r.isWebGL2,
    d = r.logarithmicDepthBuffer,
    f = r.vertexTextures;
  let m = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function v(x) {
    return x === 0 ? "uv" : `uv${x}`;
  }
  function p(x, T, Z, Q, F) {
    const W = Q.fog,
      H = F.geometry,
      $ = x.isMeshStandardMaterial ? Q.environment : null,
      X = (x.isMeshStandardMaterial ? t : e).get(x.envMap || $),
      Y = X && X.mapping === Zi ? X.image.height : null,
      te = _[x.type];
    x.precision !== null &&
      ((m = r.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const K =
        H.morphAttributes.position ||
        H.morphAttributes.normal ||
        H.morphAttributes.color,
      O = K !== void 0 ? K.length : 0;
    let G = 0;
    H.morphAttributes.position !== void 0 && (G = 1),
      H.morphAttributes.normal !== void 0 && (G = 2),
      H.morphAttributes.color !== void 0 && (G = 3);
    let he, de, fe, xe;
    if (te) {
      const We = Ot[te];
      (he = We.vertexShader), (de = We.fragmentShader);
    } else
      (he = x.vertexShader),
        (de = x.fragmentShader),
        l.update(x),
        (fe = l.getVertexShaderID(x)),
        (xe = l.getFragmentShaderID(x));
    const Te = i.getRenderTarget(),
      ge = F.isInstancedMesh === !0,
      Be = !!x.map,
      ot = !!x.matcap,
      Ce = !!X,
      U = !!x.aoMap,
      Qe = !!x.lightMap,
      _e = !!x.bumpMap,
      Ae = !!x.normalMap,
      Se = !!x.displacementMap,
      ke = !!x.emissiveMap,
      De = !!x.metalnessMap,
      Re = !!x.roughnessMap,
      ze = x.anisotropy > 0,
      et = x.clearcoat > 0,
      rt = x.iridescence > 0,
      E = x.sheen > 0,
      g = x.transmission > 0,
      N = ze && !!x.anisotropyMap,
      ne = et && !!x.clearcoatMap,
      J = et && !!x.clearcoatNormalMap,
      ie = et && !!x.clearcoatRoughnessMap,
      me = rt && !!x.iridescenceMap,
      re = rt && !!x.iridescenceThicknessMap,
      B = E && !!x.sheenColorMap,
      R = E && !!x.sheenRoughnessMap,
      j = !!x.specularMap,
      ue = !!x.specularColorMap,
      ae = !!x.specularIntensityMap,
      ce = g && !!x.transmissionMap,
      be = g && !!x.thicknessMap,
      Oe = !!x.gradientMap,
      C = !!x.alphaMap,
      le = x.alphaTest > 0,
      z = !!x.alphaHash,
      ee = !!x.extensions,
      se = !!H.attributes.uv1,
      Ie = !!H.attributes.uv2,
      Ge = !!H.attributes.uv3;
    let Ve = sn;
    return (
      x.toneMapped &&
        (Te === null || Te.isXRRenderTarget === !0) &&
        (Ve = i.toneMapping),
      {
        isWebGL2: u,
        shaderID: te,
        shaderType: x.type,
        shaderName: x.name,
        vertexShader: he,
        fragmentShader: de,
        defines: x.defines,
        customVertexShaderID: fe,
        customFragmentShaderID: xe,
        isRawShaderMaterial: x.isRawShaderMaterial === !0,
        glslVersion: x.glslVersion,
        precision: m,
        instancing: ge,
        instancingColor: ge && F.instanceColor !== null,
        supportsVertexTextures: f,
        outputColorSpace:
          Te === null
            ? i.outputColorSpace
            : Te.isXRRenderTarget === !0
            ? Te.texture.colorSpace
            : Ht,
        map: Be,
        matcap: ot,
        envMap: Ce,
        envMapMode: Ce && X.mapping,
        envMapCubeUVHeight: Y,
        aoMap: U,
        lightMap: Qe,
        bumpMap: _e,
        normalMap: Ae,
        displacementMap: f && Se,
        emissiveMap: ke,
        normalMapObjectSpace: Ae && x.normalMapType === gl,
        normalMapTangentSpace: Ae && x.normalMapType === no,
        metalnessMap: De,
        roughnessMap: Re,
        anisotropy: ze,
        anisotropyMap: N,
        clearcoat: et,
        clearcoatMap: ne,
        clearcoatNormalMap: J,
        clearcoatRoughnessMap: ie,
        iridescence: rt,
        iridescenceMap: me,
        iridescenceThicknessMap: re,
        sheen: E,
        sheenColorMap: B,
        sheenRoughnessMap: R,
        specularMap: j,
        specularColorMap: ue,
        specularIntensityMap: ae,
        transmission: g,
        transmissionMap: ce,
        thicknessMap: be,
        gradientMap: Oe,
        opaque: x.transparent === !1 && x.blending === qn,
        alphaMap: C,
        alphaTest: le,
        alphaHash: z,
        combine: x.combine,
        mapUv: Be && v(x.map.channel),
        aoMapUv: U && v(x.aoMap.channel),
        lightMapUv: Qe && v(x.lightMap.channel),
        bumpMapUv: _e && v(x.bumpMap.channel),
        normalMapUv: Ae && v(x.normalMap.channel),
        displacementMapUv: Se && v(x.displacementMap.channel),
        emissiveMapUv: ke && v(x.emissiveMap.channel),
        metalnessMapUv: De && v(x.metalnessMap.channel),
        roughnessMapUv: Re && v(x.roughnessMap.channel),
        anisotropyMapUv: N && v(x.anisotropyMap.channel),
        clearcoatMapUv: ne && v(x.clearcoatMap.channel),
        clearcoatNormalMapUv: J && v(x.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ie && v(x.clearcoatRoughnessMap.channel),
        iridescenceMapUv: me && v(x.iridescenceMap.channel),
        iridescenceThicknessMapUv: re && v(x.iridescenceThicknessMap.channel),
        sheenColorMapUv: B && v(x.sheenColorMap.channel),
        sheenRoughnessMapUv: R && v(x.sheenRoughnessMap.channel),
        specularMapUv: j && v(x.specularMap.channel),
        specularColorMapUv: ue && v(x.specularColorMap.channel),
        specularIntensityMapUv: ae && v(x.specularIntensityMap.channel),
        transmissionMapUv: ce && v(x.transmissionMap.channel),
        thicknessMapUv: be && v(x.thicknessMap.channel),
        alphaMapUv: C && v(x.alphaMap.channel),
        vertexTangents: !!H.attributes.tangent && (Ae || ze),
        vertexColors: x.vertexColors,
        vertexAlphas:
          x.vertexColors === !0 &&
          !!H.attributes.color &&
          H.attributes.color.itemSize === 4,
        vertexUv1s: se,
        vertexUv2s: Ie,
        vertexUv3s: Ge,
        pointsUvs: F.isPoints === !0 && !!H.attributes.uv && (Be || C),
        fog: !!W,
        useFog: x.fog === !0,
        fogExp2: W && W.isFogExp2,
        flatShading: x.flatShading === !0,
        sizeAttenuation: x.sizeAttenuation === !0,
        logarithmicDepthBuffer: d,
        skinning: F.isSkinnedMesh === !0,
        morphTargets: H.morphAttributes.position !== void 0,
        morphNormals: H.morphAttributes.normal !== void 0,
        morphColors: H.morphAttributes.color !== void 0,
        morphTargetsCount: O,
        morphTextureStride: G,
        numDirLights: T.directional.length,
        numPointLights: T.point.length,
        numSpotLights: T.spot.length,
        numSpotLightMaps: T.spotLightMap.length,
        numRectAreaLights: T.rectArea.length,
        numHemiLights: T.hemi.length,
        numDirLightShadows: T.directionalShadowMap.length,
        numPointLightShadows: T.pointShadowMap.length,
        numSpotLightShadows: T.spotShadowMap.length,
        numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: x.dithering,
        shadowMapEnabled: i.shadowMap.enabled && Z.length > 0,
        shadowMapType: i.shadowMap.type,
        toneMapping: Ve,
        useLegacyLights: i._useLegacyLights,
        decodeVideoTexture:
          Be && x.map.isVideoTexture === !0 && x.map.colorSpace === Xe,
        premultipliedAlpha: x.premultipliedAlpha,
        doubleSided: x.side === Bt,
        flipSided: x.side === gt,
        useDepthPacking: x.depthPacking >= 0,
        depthPacking: x.depthPacking || 0,
        index0AttributeName: x.index0AttributeName,
        extensionDerivatives: ee && x.extensions.derivatives === !0,
        extensionFragDepth: ee && x.extensions.fragDepth === !0,
        extensionDrawBuffers: ee && x.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: ee && x.extensions.shaderTextureLOD === !0,
        rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: x.customProgramCacheKey(),
      }
    );
  }
  function h(x) {
    const T = [];
    if (
      (x.shaderID
        ? T.push(x.shaderID)
        : (T.push(x.customVertexShaderID), T.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const Z in x.defines) T.push(Z), T.push(x.defines[Z]);
    return (
      x.isRawShaderMaterial === !1 &&
        (b(T, x), M(T, x), T.push(i.outputColorSpace)),
      T.push(x.customProgramCacheKey),
      T.join()
    );
  }
  function b(x, T) {
    x.push(T.precision),
      x.push(T.outputColorSpace),
      x.push(T.envMapMode),
      x.push(T.envMapCubeUVHeight),
      x.push(T.mapUv),
      x.push(T.alphaMapUv),
      x.push(T.lightMapUv),
      x.push(T.aoMapUv),
      x.push(T.bumpMapUv),
      x.push(T.normalMapUv),
      x.push(T.displacementMapUv),
      x.push(T.emissiveMapUv),
      x.push(T.metalnessMapUv),
      x.push(T.roughnessMapUv),
      x.push(T.anisotropyMapUv),
      x.push(T.clearcoatMapUv),
      x.push(T.clearcoatNormalMapUv),
      x.push(T.clearcoatRoughnessMapUv),
      x.push(T.iridescenceMapUv),
      x.push(T.iridescenceThicknessMapUv),
      x.push(T.sheenColorMapUv),
      x.push(T.sheenRoughnessMapUv),
      x.push(T.specularMapUv),
      x.push(T.specularColorMapUv),
      x.push(T.specularIntensityMapUv),
      x.push(T.transmissionMapUv),
      x.push(T.thicknessMapUv),
      x.push(T.combine),
      x.push(T.fogExp2),
      x.push(T.sizeAttenuation),
      x.push(T.morphTargetsCount),
      x.push(T.morphAttributeCount),
      x.push(T.numDirLights),
      x.push(T.numPointLights),
      x.push(T.numSpotLights),
      x.push(T.numSpotLightMaps),
      x.push(T.numHemiLights),
      x.push(T.numRectAreaLights),
      x.push(T.numDirLightShadows),
      x.push(T.numPointLightShadows),
      x.push(T.numSpotLightShadows),
      x.push(T.numSpotLightShadowsWithMaps),
      x.push(T.shadowMapType),
      x.push(T.toneMapping),
      x.push(T.numClippingPlanes),
      x.push(T.numClipIntersection),
      x.push(T.depthPacking);
  }
  function M(x, T) {
    a.disableAll(),
      T.isWebGL2 && a.enable(0),
      T.supportsVertexTextures && a.enable(1),
      T.instancing && a.enable(2),
      T.instancingColor && a.enable(3),
      T.matcap && a.enable(4),
      T.envMap && a.enable(5),
      T.normalMapObjectSpace && a.enable(6),
      T.normalMapTangentSpace && a.enable(7),
      T.clearcoat && a.enable(8),
      T.iridescence && a.enable(9),
      T.alphaTest && a.enable(10),
      T.vertexColors && a.enable(11),
      T.vertexAlphas && a.enable(12),
      T.vertexUv1s && a.enable(13),
      T.vertexUv2s && a.enable(14),
      T.vertexUv3s && a.enable(15),
      T.vertexTangents && a.enable(16),
      T.anisotropy && a.enable(17),
      x.push(a.mask),
      a.disableAll(),
      T.fog && a.enable(0),
      T.useFog && a.enable(1),
      T.flatShading && a.enable(2),
      T.logarithmicDepthBuffer && a.enable(3),
      T.skinning && a.enable(4),
      T.morphTargets && a.enable(5),
      T.morphNormals && a.enable(6),
      T.morphColors && a.enable(7),
      T.premultipliedAlpha && a.enable(8),
      T.shadowMapEnabled && a.enable(9),
      T.useLegacyLights && a.enable(10),
      T.doubleSided && a.enable(11),
      T.flipSided && a.enable(12),
      T.useDepthPacking && a.enable(13),
      T.dithering && a.enable(14),
      T.transmission && a.enable(15),
      T.sheen && a.enable(16),
      T.opaque && a.enable(17),
      T.pointsUvs && a.enable(18),
      T.decodeVideoTexture && a.enable(19),
      x.push(a.mask);
  }
  function y(x) {
    const T = _[x.type];
    let Z;
    if (T) {
      const Q = Ot[T];
      Z = uc.clone(Q.uniforms);
    } else Z = x.uniforms;
    return Z;
  }
  function A(x, T) {
    let Z;
    for (let Q = 0, F = c.length; Q < F; Q++) {
      const W = c[Q];
      if (W.cacheKey === T) {
        (Z = W), ++Z.usedTimes;
        break;
      }
    }
    return Z === void 0 && ((Z = new Ef(i, T, x, s)), c.push(Z)), Z;
  }
  function P(x) {
    if (--x.usedTimes === 0) {
      const T = c.indexOf(x);
      (c[T] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function w(x) {
    l.remove(x);
  }
  function q() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: y,
    acquireProgram: A,
    releaseProgram: P,
    releaseShaderCache: w,
    programs: c,
    dispose: q,
  };
}
function wf() {
  let i = new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && ((o = {}), i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function Rf(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function Aa(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function wa() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function o(d, f, m, _, v, p) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: d.id,
            object: d,
            geometry: f,
            material: m,
            groupOrder: _,
            renderOrder: d.renderOrder,
            z: v,
            group: p,
          }),
          (i[e] = h))
        : ((h.id = d.id),
          (h.object = d),
          (h.geometry = f),
          (h.material = m),
          (h.groupOrder = _),
          (h.renderOrder = d.renderOrder),
          (h.z = v),
          (h.group = p)),
      e++,
      h
    );
  }
  function a(d, f, m, _, v, p) {
    const h = o(d, f, m, _, v, p);
    m.transmission > 0
      ? n.push(h)
      : m.transparent === !0
      ? r.push(h)
      : t.push(h);
  }
  function l(d, f, m, _, v, p) {
    const h = o(d, f, m, _, v, p);
    m.transmission > 0
      ? n.unshift(h)
      : m.transparent === !0
      ? r.unshift(h)
      : t.unshift(h);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || Rf),
      n.length > 1 && n.sort(f || Aa),
      r.length > 1 && r.sort(f || Aa);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function Cf() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new wa()), i.set(n, [o]))
        : r >= s.length
        ? ((o = new wa()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Lf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new L(), color: new He() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new He(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new He(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new He(), groundColor: new He() };
          break;
        case "RectAreaLight":
          t = {
            color: new He(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Pf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let Df = 0;
function Uf(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function If(i, e) {
  const t = new Lf(),
    n = Pf(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) r.probe.push(new L());
  const s = new L(),
    o = new je(),
    a = new je();
  function l(u, d) {
    let f = 0,
      m = 0,
      _ = 0;
    for (let Z = 0; Z < 9; Z++) r.probe[Z].set(0, 0, 0);
    let v = 0,
      p = 0,
      h = 0,
      b = 0,
      M = 0,
      y = 0,
      A = 0,
      P = 0,
      w = 0,
      q = 0;
    u.sort(Uf);
    const x = d === !0 ? Math.PI : 1;
    for (let Z = 0, Q = u.length; Z < Q; Z++) {
      const F = u[Z],
        W = F.color,
        H = F.intensity,
        $ = F.distance,
        X = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        (f += W.r * H * x), (m += W.g * H * x), (_ += W.b * H * x);
      else if (F.isLightProbe)
        for (let Y = 0; Y < 9; Y++)
          r.probe[Y].addScaledVector(F.sh.coefficients[Y], H);
      else if (F.isDirectionalLight) {
        const Y = t.get(F);
        if (
          (Y.color.copy(F.color).multiplyScalar(F.intensity * x), F.castShadow)
        ) {
          const te = F.shadow,
            K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (r.directionalShadow[v] = K),
            (r.directionalShadowMap[v] = X),
            (r.directionalShadowMatrix[v] = F.shadow.matrix),
            y++;
        }
        (r.directional[v] = Y), v++;
      } else if (F.isSpotLight) {
        const Y = t.get(F);
        Y.position.setFromMatrixPosition(F.matrixWorld),
          Y.color.copy(W).multiplyScalar(H * x),
          (Y.distance = $),
          (Y.coneCos = Math.cos(F.angle)),
          (Y.penumbraCos = Math.cos(F.angle * (1 - F.penumbra))),
          (Y.decay = F.decay),
          (r.spot[h] = Y);
        const te = F.shadow;
        if (
          (F.map &&
            ((r.spotLightMap[w] = F.map),
            w++,
            te.updateMatrices(F),
            F.castShadow && q++),
          (r.spotLightMatrix[h] = te.matrix),
          F.castShadow)
        ) {
          const K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (r.spotShadow[h] = K),
            (r.spotShadowMap[h] = X),
            P++;
        }
        h++;
      } else if (F.isRectAreaLight) {
        const Y = t.get(F);
        Y.color.copy(W).multiplyScalar(H),
          Y.halfWidth.set(F.width * 0.5, 0, 0),
          Y.halfHeight.set(0, F.height * 0.5, 0),
          (r.rectArea[b] = Y),
          b++;
      } else if (F.isPointLight) {
        const Y = t.get(F);
        if (
          (Y.color.copy(F.color).multiplyScalar(F.intensity * x),
          (Y.distance = F.distance),
          (Y.decay = F.decay),
          F.castShadow)
        ) {
          const te = F.shadow,
            K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (K.shadowCameraNear = te.camera.near),
            (K.shadowCameraFar = te.camera.far),
            (r.pointShadow[p] = K),
            (r.pointShadowMap[p] = X),
            (r.pointShadowMatrix[p] = F.shadow.matrix),
            A++;
        }
        (r.point[p] = Y), p++;
      } else if (F.isHemisphereLight) {
        const Y = t.get(F);
        Y.skyColor.copy(F.color).multiplyScalar(H * x),
          Y.groundColor.copy(F.groundColor).multiplyScalar(H * x),
          (r.hemi[M] = Y),
          M++;
      }
    }
    b > 0 &&
      (e.isWebGL2 || i.has("OES_texture_float_linear") === !0
        ? ((r.rectAreaLTC1 = oe.LTC_FLOAT_1), (r.rectAreaLTC2 = oe.LTC_FLOAT_2))
        : i.has("OES_texture_half_float_linear") === !0
        ? ((r.rectAreaLTC1 = oe.LTC_HALF_1), (r.rectAreaLTC2 = oe.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (r.ambient[0] = f),
      (r.ambient[1] = m),
      (r.ambient[2] = _);
    const T = r.hash;
    (T.directionalLength !== v ||
      T.pointLength !== p ||
      T.spotLength !== h ||
      T.rectAreaLength !== b ||
      T.hemiLength !== M ||
      T.numDirectionalShadows !== y ||
      T.numPointShadows !== A ||
      T.numSpotShadows !== P ||
      T.numSpotMaps !== w) &&
      ((r.directional.length = v),
      (r.spot.length = h),
      (r.rectArea.length = b),
      (r.point.length = p),
      (r.hemi.length = M),
      (r.directionalShadow.length = y),
      (r.directionalShadowMap.length = y),
      (r.pointShadow.length = A),
      (r.pointShadowMap.length = A),
      (r.spotShadow.length = P),
      (r.spotShadowMap.length = P),
      (r.directionalShadowMatrix.length = y),
      (r.pointShadowMatrix.length = A),
      (r.spotLightMatrix.length = P + w - q),
      (r.spotLightMap.length = w),
      (r.numSpotLightShadowsWithMaps = q),
      (T.directionalLength = v),
      (T.pointLength = p),
      (T.spotLength = h),
      (T.rectAreaLength = b),
      (T.hemiLength = M),
      (T.numDirectionalShadows = y),
      (T.numPointShadows = A),
      (T.numSpotShadows = P),
      (T.numSpotMaps = w),
      (r.version = Df++));
  }
  function c(u, d) {
    let f = 0,
      m = 0,
      _ = 0,
      v = 0,
      p = 0;
    const h = d.matrixWorldInverse;
    for (let b = 0, M = u.length; b < M; b++) {
      const y = u[b];
      if (y.isDirectionalLight) {
        const A = r.directional[f];
        A.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          A.direction.sub(s),
          A.direction.transformDirection(h),
          f++;
      } else if (y.isSpotLight) {
        const A = r.spot[_];
        A.position.setFromMatrixPosition(y.matrixWorld),
          A.position.applyMatrix4(h),
          A.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          A.direction.sub(s),
          A.direction.transformDirection(h),
          _++;
      } else if (y.isRectAreaLight) {
        const A = r.rectArea[v];
        A.position.setFromMatrixPosition(y.matrixWorld),
          A.position.applyMatrix4(h),
          a.identity(),
          o.copy(y.matrixWorld),
          o.premultiply(h),
          a.extractRotation(o),
          A.halfWidth.set(y.width * 0.5, 0, 0),
          A.halfHeight.set(0, y.height * 0.5, 0),
          A.halfWidth.applyMatrix4(a),
          A.halfHeight.applyMatrix4(a),
          v++;
      } else if (y.isPointLight) {
        const A = r.point[m];
        A.position.setFromMatrixPosition(y.matrixWorld),
          A.position.applyMatrix4(h),
          m++;
      } else if (y.isHemisphereLight) {
        const A = r.hemi[p];
        A.direction.setFromMatrixPosition(y.matrixWorld),
          A.direction.transformDirection(h),
          p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Ra(i, e) {
  const t = new If(i, e),
    n = [],
    r = [];
  function s() {
    (n.length = 0), (r.length = 0);
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    r.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function Nf(i, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new Ra(i, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new Ra(i, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Ff extends Qn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = pl),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Of extends Qn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Bf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  zf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Hf(i, e, t) {
  let n = new ts();
  const r = new we(),
    s = new we(),
    o = new qe(),
    a = new Ff({ depthPacking: ml }),
    l = new Of(),
    c = {},
    u = t.maxTextureSize,
    d = { [on]: gt, [gt]: on, [Bt]: Bt },
    f = new En({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new we() },
        radius: { value: 4 },
      },
      vertexShader: Bf,
      fragmentShader: zf,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new Nt();
  _.setAttribute(
    "position",
    new zt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const v = new It(_, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Wa);
  let h = this.type;
  this.render = function (A, P, w) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      A.length === 0
    )
      return;
    const q = i.getRenderTarget(),
      x = i.getActiveCubeFace(),
      T = i.getActiveMipmapLevel(),
      Z = i.state;
    Z.setBlending(rn),
      Z.buffers.color.setClear(1, 1, 1, 1),
      Z.buffers.depth.setTest(!0),
      Z.setScissorTest(!1);
    const Q = h !== jt && this.type === jt,
      F = h === jt && this.type !== jt;
    for (let W = 0, H = A.length; W < H; W++) {
      const $ = A[W],
        X = $.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      r.copy(X.mapSize);
      const Y = X.getFrameExtents();
      if (
        (r.multiply(Y),
        s.copy(X.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / Y.x)),
            (r.x = s.x * Y.x),
            (X.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / Y.y)),
            (r.y = s.y * Y.y),
            (X.mapSize.y = s.y))),
        X.map === null || Q === !0 || F === !0)
      ) {
        const K = this.type !== jt ? { minFilter: pt, magFilter: pt } : {};
        X.map !== null && X.map.dispose(),
          (X.map = new Mn(r.x, r.y, K)),
          (X.map.texture.name = $.name + ".shadowMap"),
          X.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(X.map), i.clear();
      const te = X.getViewportCount();
      for (let K = 0; K < te; K++) {
        const O = X.getViewport(K);
        o.set(s.x * O.x, s.y * O.y, s.x * O.z, s.y * O.w),
          Z.viewport(o),
          X.updateMatrices($, K),
          (n = X.getFrustum()),
          y(P, w, X.camera, $, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === jt && b(X, w),
        (X.needsUpdate = !1);
    }
    (h = this.type), (p.needsUpdate = !1), i.setRenderTarget(q, x, T);
  };
  function b(A, P) {
    const w = e.update(v);
    f.defines.VSM_SAMPLES !== A.blurSamples &&
      ((f.defines.VSM_SAMPLES = A.blurSamples),
      (m.defines.VSM_SAMPLES = A.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      A.mapPass === null && (A.mapPass = new Mn(r.x, r.y)),
      (f.uniforms.shadow_pass.value = A.map.texture),
      (f.uniforms.resolution.value = A.mapSize),
      (f.uniforms.radius.value = A.radius),
      i.setRenderTarget(A.mapPass),
      i.clear(),
      i.renderBufferDirect(P, null, w, f, v, null),
      (m.uniforms.shadow_pass.value = A.mapPass.texture),
      (m.uniforms.resolution.value = A.mapSize),
      (m.uniforms.radius.value = A.radius),
      i.setRenderTarget(A.map),
      i.clear(),
      i.renderBufferDirect(P, null, w, m, v, null);
  }
  function M(A, P, w, q) {
    let x = null;
    const T =
      w.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (T !== void 0) x = T;
    else if (
      ((x = w.isPointLight === !0 ? l : a),
      (i.localClippingEnabled &&
        P.clipShadows === !0 &&
        Array.isArray(P.clippingPlanes) &&
        P.clippingPlanes.length !== 0) ||
        (P.displacementMap && P.displacementScale !== 0) ||
        (P.alphaMap && P.alphaTest > 0) ||
        (P.map && P.alphaTest > 0))
    ) {
      const Z = x.uuid,
        Q = P.uuid;
      let F = c[Z];
      F === void 0 && ((F = {}), (c[Z] = F));
      let W = F[Q];
      W === void 0 && ((W = x.clone()), (F[Q] = W)), (x = W);
    }
    if (
      ((x.visible = P.visible),
      (x.wireframe = P.wireframe),
      q === jt
        ? (x.side = P.shadowSide !== null ? P.shadowSide : P.side)
        : (x.side = P.shadowSide !== null ? P.shadowSide : d[P.side]),
      (x.alphaMap = P.alphaMap),
      (x.alphaTest = P.alphaTest),
      (x.map = P.map),
      (x.clipShadows = P.clipShadows),
      (x.clippingPlanes = P.clippingPlanes),
      (x.clipIntersection = P.clipIntersection),
      (x.displacementMap = P.displacementMap),
      (x.displacementScale = P.displacementScale),
      (x.displacementBias = P.displacementBias),
      (x.wireframeLinewidth = P.wireframeLinewidth),
      (x.linewidth = P.linewidth),
      w.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const Z = i.properties.get(x);
      Z.light = w;
    }
    return x;
  }
  function y(A, P, w, q, x) {
    if (A.visible === !1) return;
    if (
      A.layers.test(P.layers) &&
      (A.isMesh || A.isLine || A.isPoints) &&
      (A.castShadow || (A.receiveShadow && x === jt)) &&
      (!A.frustumCulled || n.intersectsObject(A))
    ) {
      A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, A.matrixWorld);
      const Q = e.update(A),
        F = A.material;
      if (Array.isArray(F)) {
        const W = Q.groups;
        for (let H = 0, $ = W.length; H < $; H++) {
          const X = W[H],
            Y = F[X.materialIndex];
          if (Y && Y.visible) {
            const te = M(A, Y, q, x);
            i.renderBufferDirect(w, null, Q, te, A, X);
          }
        }
      } else if (F.visible) {
        const W = M(A, F, q, x);
        i.renderBufferDirect(w, null, Q, W, A, null);
      }
    }
    const Z = A.children;
    for (let Q = 0, F = Z.length; Q < F; Q++) y(Z[Q], P, w, q, x);
  }
}
function Gf(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let C = !1;
    const le = new qe();
    let z = null;
    const ee = new qe(0, 0, 0, 0);
    return {
      setMask: function (se) {
        z !== se && !C && (i.colorMask(se, se, se, se), (z = se));
      },
      setLocked: function (se) {
        C = se;
      },
      setClear: function (se, Ie, Ge, Ve, xt) {
        xt === !0 && ((se *= Ve), (Ie *= Ve), (Ge *= Ve)),
          le.set(se, Ie, Ge, Ve),
          ee.equals(le) === !1 && (i.clearColor(se, Ie, Ge, Ve), ee.copy(le));
      },
      reset: function () {
        (C = !1), (z = null), ee.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let C = !1,
      le = null,
      z = null,
      ee = null;
    return {
      setTest: function (se) {
        se ? Te(i.DEPTH_TEST) : ge(i.DEPTH_TEST);
      },
      setMask: function (se) {
        le !== se && !C && (i.depthMask(se), (le = se));
      },
      setFunc: function (se) {
        if (z !== se) {
          switch (se) {
            case Wo:
              i.depthFunc(i.NEVER);
              break;
            case Xo:
              i.depthFunc(i.ALWAYS);
              break;
            case qo:
              i.depthFunc(i.LESS);
              break;
            case Gr:
              i.depthFunc(i.LEQUAL);
              break;
            case Yo:
              i.depthFunc(i.EQUAL);
              break;
            case jo:
              i.depthFunc(i.GEQUAL);
              break;
            case Ko:
              i.depthFunc(i.GREATER);
              break;
            case Zo:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          z = se;
        }
      },
      setLocked: function (se) {
        C = se;
      },
      setClear: function (se) {
        ee !== se && (i.clearDepth(se), (ee = se));
      },
      reset: function () {
        (C = !1), (le = null), (z = null), (ee = null);
      },
    };
  }
  function o() {
    let C = !1,
      le = null,
      z = null,
      ee = null,
      se = null,
      Ie = null,
      Ge = null,
      Ve = null,
      xt = null;
    return {
      setTest: function (We) {
        C || (We ? Te(i.STENCIL_TEST) : ge(i.STENCIL_TEST));
      },
      setMask: function (We) {
        le !== We && !C && (i.stencilMask(We), (le = We));
      },
      setFunc: function (We, Ft, ut) {
        (z !== We || ee !== Ft || se !== ut) &&
          (i.stencilFunc(We, Ft, ut), (z = We), (ee = Ft), (se = ut));
      },
      setOp: function (We, Ft, ut) {
        (Ie !== We || Ge !== Ft || Ve !== ut) &&
          (i.stencilOp(We, Ft, ut), (Ie = We), (Ge = Ft), (Ve = ut));
      },
      setLocked: function (We) {
        C = We;
      },
      setClear: function (We) {
        xt !== We && (i.clearStencil(We), (xt = We));
      },
      reset: function () {
        (C = !1),
          (le = null),
          (z = null),
          (ee = null),
          (se = null),
          (Ie = null),
          (Ge = null),
          (Ve = null),
          (xt = null);
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    d = new WeakMap();
  let f = {},
    m = {},
    _ = new WeakMap(),
    v = [],
    p = null,
    h = !1,
    b = null,
    M = null,
    y = null,
    A = null,
    P = null,
    w = null,
    q = null,
    x = !1,
    T = null,
    Z = null,
    Q = null,
    F = null,
    W = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1,
    X = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1
    ? ((X = parseFloat(/^WebGL (\d)/.exec(Y)[1])), ($ = X >= 1))
    : Y.indexOf("OpenGL ES") !== -1 &&
      ((X = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1])), ($ = X >= 2));
  let te = null,
    K = {};
  const O = i.getParameter(i.SCISSOR_BOX),
    G = i.getParameter(i.VIEWPORT),
    he = new qe().fromArray(O),
    de = new qe().fromArray(G);
  function fe(C, le, z, ee) {
    const se = new Uint8Array(4),
      Ie = i.createTexture();
    i.bindTexture(C, Ie),
      i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ge = 0; Ge < z; Ge++)
      n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY)
        ? i.texImage3D(le, 0, i.RGBA, 1, 1, ee, 0, i.RGBA, i.UNSIGNED_BYTE, se)
        : i.texImage2D(
            le + Ge,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            se
          );
    return Ie;
  }
  const xe = {};
  (xe[i.TEXTURE_2D] = fe(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (xe[i.TEXTURE_CUBE_MAP] = fe(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((xe[i.TEXTURE_2D_ARRAY] = fe(
        i.TEXTURE_2D_ARRAY,
        i.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (xe[i.TEXTURE_3D] = fe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Te(i.DEPTH_TEST),
    l.setFunc(Gr),
    Se(!1),
    ke(ds),
    Te(i.CULL_FACE),
    _e(rn);
  function Te(C) {
    f[C] !== !0 && (i.enable(C), (f[C] = !0));
  }
  function ge(C) {
    f[C] !== !1 && (i.disable(C), (f[C] = !1));
  }
  function Be(C, le) {
    return m[C] !== le
      ? (i.bindFramebuffer(C, le),
        (m[C] = le),
        n &&
          (C === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = le),
          C === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = le)),
        !0)
      : !1;
  }
  function ot(C, le) {
    let z = v,
      ee = !1;
    if (C)
      if (
        ((z = _.get(le)),
        z === void 0 && ((z = []), _.set(le, z)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const se = C.texture;
        if (z.length !== se.length || z[0] !== i.COLOR_ATTACHMENT0) {
          for (let Ie = 0, Ge = se.length; Ie < Ge; Ie++)
            z[Ie] = i.COLOR_ATTACHMENT0 + Ie;
          (z.length = se.length), (ee = !0);
        }
      } else
        z[0] !== i.COLOR_ATTACHMENT0 &&
          ((z[0] = i.COLOR_ATTACHMENT0), (ee = !0));
    else z[0] !== i.BACK && ((z[0] = i.BACK), (ee = !0));
    ee &&
      (t.isWebGL2
        ? i.drawBuffers(z)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z));
  }
  function Ce(C) {
    return p !== C ? (i.useProgram(C), (p = C), !0) : !1;
  }
  const U = {
    [kn]: i.FUNC_ADD,
    [Uo]: i.FUNC_SUBTRACT,
    [Io]: i.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (U[gs] = i.MIN), (U[_s] = i.MAX);
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((U[gs] = C.MIN_EXT), (U[_s] = C.MAX_EXT));
  }
  const Qe = {
    [No]: i.ZERO,
    [Fo]: i.ONE,
    [Oo]: i.SRC_COLOR,
    [Xa]: i.SRC_ALPHA,
    [ko]: i.SRC_ALPHA_SATURATE,
    [Go]: i.DST_COLOR,
    [zo]: i.DST_ALPHA,
    [Bo]: i.ONE_MINUS_SRC_COLOR,
    [qa]: i.ONE_MINUS_SRC_ALPHA,
    [Vo]: i.ONE_MINUS_DST_COLOR,
    [Ho]: i.ONE_MINUS_DST_ALPHA,
  };
  function _e(C, le, z, ee, se, Ie, Ge, Ve) {
    if (C === rn) {
      h === !0 && (ge(i.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (Te(i.BLEND), (h = !0)), C !== Do)) {
      if (C !== b || Ve !== x) {
        if (
          ((M !== kn || P !== kn) &&
            (i.blendEquation(i.FUNC_ADD), (M = kn), (P = kn)),
          Ve)
        )
          switch (C) {
            case qn:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case fs:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ps:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ms:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case qn:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case fs:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case ps:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ms:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        (y = null), (A = null), (w = null), (q = null), (b = C), (x = Ve);
      }
      return;
    }
    (se = se || le),
      (Ie = Ie || z),
      (Ge = Ge || ee),
      (le !== M || se !== P) &&
        (i.blendEquationSeparate(U[le], U[se]), (M = le), (P = se)),
      (z !== y || ee !== A || Ie !== w || Ge !== q) &&
        (i.blendFuncSeparate(Qe[z], Qe[ee], Qe[Ie], Qe[Ge]),
        (y = z),
        (A = ee),
        (w = Ie),
        (q = Ge)),
      (b = C),
      (x = !1);
  }
  function Ae(C, le) {
    C.side === Bt ? ge(i.CULL_FACE) : Te(i.CULL_FACE);
    let z = C.side === gt;
    le && (z = !z),
      Se(z),
      C.blending === qn && C.transparent === !1
        ? _e(rn)
        : _e(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha
          ),
      l.setFunc(C.depthFunc),
      l.setTest(C.depthTest),
      l.setMask(C.depthWrite),
      a.setMask(C.colorWrite);
    const ee = C.stencilWrite;
    c.setTest(ee),
      ee &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      Re(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0
        ? Te(i.SAMPLE_ALPHA_TO_COVERAGE)
        : ge(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Se(C) {
    T !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), (T = C));
  }
  function ke(C) {
    C !== Co
      ? (Te(i.CULL_FACE),
        C !== Z &&
          (C === ds
            ? i.cullFace(i.BACK)
            : C === Lo
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : ge(i.CULL_FACE),
      (Z = C);
  }
  function De(C) {
    C !== Q && ($ && i.lineWidth(C), (Q = C));
  }
  function Re(C, le, z) {
    C
      ? (Te(i.POLYGON_OFFSET_FILL),
        (F !== le || W !== z) && (i.polygonOffset(le, z), (F = le), (W = z)))
      : ge(i.POLYGON_OFFSET_FILL);
  }
  function ze(C) {
    C ? Te(i.SCISSOR_TEST) : ge(i.SCISSOR_TEST);
  }
  function et(C) {
    C === void 0 && (C = i.TEXTURE0 + H - 1),
      te !== C && (i.activeTexture(C), (te = C));
  }
  function rt(C, le, z) {
    z === void 0 && (te === null ? (z = i.TEXTURE0 + H - 1) : (z = te));
    let ee = K[z];
    ee === void 0 && ((ee = { type: void 0, texture: void 0 }), (K[z] = ee)),
      (ee.type !== C || ee.texture !== le) &&
        (te !== z && (i.activeTexture(z), (te = z)),
        i.bindTexture(C, le || xe[C]),
        (ee.type = C),
        (ee.texture = le));
  }
  function E() {
    const C = K[te];
    C !== void 0 &&
      C.type !== void 0 &&
      (i.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function g() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function N() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function J() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function re() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function B() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function R() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function j() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ue(C) {
    he.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), he.copy(C));
  }
  function ae(C) {
    de.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), de.copy(C));
  }
  function ce(C, le) {
    let z = d.get(le);
    z === void 0 && ((z = new WeakMap()), d.set(le, z));
    let ee = z.get(C);
    ee === void 0 && ((ee = i.getUniformBlockIndex(le, C.name)), z.set(C, ee));
  }
  function be(C, le) {
    const ee = d.get(le).get(C);
    u.get(le) !== ee &&
      (i.uniformBlockBinding(le, ee, C.__bindingPointIndex), u.set(le, ee));
  }
  function Oe() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      n === !0 &&
        (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null)),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (f = {}),
      (te = null),
      (K = {}),
      (m = {}),
      (_ = new WeakMap()),
      (v = []),
      (p = null),
      (h = !1),
      (b = null),
      (M = null),
      (y = null),
      (A = null),
      (P = null),
      (w = null),
      (q = null),
      (x = !1),
      (T = null),
      (Z = null),
      (Q = null),
      (F = null),
      (W = null),
      he.set(0, 0, i.canvas.width, i.canvas.height),
      de.set(0, 0, i.canvas.width, i.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: Te,
    disable: ge,
    bindFramebuffer: Be,
    drawBuffers: ot,
    useProgram: Ce,
    setBlending: _e,
    setMaterial: Ae,
    setFlipSided: Se,
    setCullFace: ke,
    setLineWidth: De,
    setPolygonOffset: Re,
    setScissorTest: ze,
    activeTexture: et,
    bindTexture: rt,
    unbindTexture: E,
    compressedTexImage2D: g,
    compressedTexImage3D: N,
    texImage2D: R,
    texImage3D: j,
    updateUBOMapping: ce,
    uniformBlockBinding: be,
    texStorage2D: re,
    texStorage3D: B,
    texSubImage2D: ne,
    texSubImage3D: J,
    compressedTexSubImage2D: ie,
    compressedTexSubImage3D: me,
    scissor: ue,
    viewport: ae,
    reset: Oe,
  };
}
function Vf(i, e, t, n, r, s, o) {
  const a = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    u = r.maxTextureSize,
    d = r.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    _ = new WeakMap();
  let v;
  const p = new WeakMap();
  let h = !1;
  try {
    h =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function b(E, g) {
    return h ? new OffscreenCanvas(E, g) : mi("canvas");
  }
  function M(E, g, N, ne) {
    let J = 1;
    if (
      ((E.width > ne || E.height > ne) &&
        (J = ne / Math.max(E.width, E.height)),
      J < 1 || g === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap)
      ) {
        const ie = g ? ji : Math.floor,
          me = ie(J * E.width),
          re = ie(J * E.height);
        v === void 0 && (v = b(me, re));
        const B = N ? b(me, re) : v;
        return (
          (B.width = me),
          (B.height = re),
          B.getContext("2d").drawImage(E, 0, 0, me, re),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              E.width +
              "x" +
              E.height +
              ") to (" +
              me +
              "x" +
              re +
              ")."
          ),
          B
        );
      } else
        return (
          "data" in E &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                E.width +
                "x" +
                E.height +
                ")."
            ),
          E
        );
    return E;
  }
  function y(E) {
    return Yr(E.width) && Yr(E.height);
  }
  function A(E) {
    return a
      ? !1
      : E.wrapS !== Dt ||
          E.wrapT !== Dt ||
          (E.minFilter !== pt && E.minFilter !== At);
  }
  function P(E, g) {
    return E.generateMipmaps && g && E.minFilter !== pt && E.minFilter !== At;
  }
  function w(E) {
    i.generateMipmap(E);
  }
  function q(E, g, N, ne, J = !1) {
    if (a === !1) return g;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let ie = g;
    return (
      g === i.RED &&
        (N === i.FLOAT && (ie = i.R32F),
        N === i.HALF_FLOAT && (ie = i.R16F),
        N === i.UNSIGNED_BYTE && (ie = i.R8)),
      g === i.RED_INTEGER &&
        (N === i.UNSIGNED_BYTE && (ie = i.R8UI),
        N === i.UNSIGNED_SHORT && (ie = i.R16UI),
        N === i.UNSIGNED_INT && (ie = i.R32UI),
        N === i.BYTE && (ie = i.R8I),
        N === i.SHORT && (ie = i.R16I),
        N === i.INT && (ie = i.R32I)),
      g === i.RG &&
        (N === i.FLOAT && (ie = i.RG32F),
        N === i.HALF_FLOAT && (ie = i.RG16F),
        N === i.UNSIGNED_BYTE && (ie = i.RG8)),
      g === i.RGBA &&
        (N === i.FLOAT && (ie = i.RGBA32F),
        N === i.HALF_FLOAT && (ie = i.RGBA16F),
        N === i.UNSIGNED_BYTE &&
          (ie = ne === Xe && J === !1 ? i.SRGB8_ALPHA8 : i.RGBA8),
        N === i.UNSIGNED_SHORT_4_4_4_4 && (ie = i.RGBA4),
        N === i.UNSIGNED_SHORT_5_5_5_1 && (ie = i.RGB5_A1)),
      (ie === i.R16F ||
        ie === i.R32F ||
        ie === i.RG16F ||
        ie === i.RG32F ||
        ie === i.RGBA16F ||
        ie === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      ie
    );
  }
  function x(E, g, N) {
    return P(E, N) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== pt && E.minFilter !== At)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? g.mipmaps.length
      : 1;
  }
  function T(E) {
    return E === pt || E === vs || E === lr ? i.NEAREST : i.LINEAR;
  }
  function Z(E) {
    const g = E.target;
    g.removeEventListener("dispose", Z), F(g), g.isVideoTexture && _.delete(g);
  }
  function Q(E) {
    const g = E.target;
    g.removeEventListener("dispose", Q), H(g);
  }
  function F(E) {
    const g = n.get(E);
    if (g.__webglInit === void 0) return;
    const N = E.source,
      ne = p.get(N);
    if (ne) {
      const J = ne[g.__cacheKey];
      J.usedTimes--,
        J.usedTimes === 0 && W(E),
        Object.keys(ne).length === 0 && p.delete(N);
    }
    n.remove(E);
  }
  function W(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const N = E.source,
      ne = p.get(N);
    delete ne[g.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const g = E.texture,
      N = n.get(E),
      ne = n.get(g);
    if (
      (ne.__webglTexture !== void 0 &&
        (i.deleteTexture(ne.__webglTexture), o.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let J = 0; J < 6; J++) {
        if (Array.isArray(N.__webglFramebuffer[J]))
          for (let ie = 0; ie < N.__webglFramebuffer[J].length; ie++)
            i.deleteFramebuffer(N.__webglFramebuffer[J][ie]);
        else i.deleteFramebuffer(N.__webglFramebuffer[J]);
        N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer[J]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let J = 0; J < N.__webglFramebuffer.length; J++)
          i.deleteFramebuffer(N.__webglFramebuffer[J]);
      else i.deleteFramebuffer(N.__webglFramebuffer);
      if (
        (N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer),
        N.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(N.__webglMultisampledFramebuffer),
        N.__webglColorRenderbuffer)
      )
        for (let J = 0; J < N.__webglColorRenderbuffer.length; J++)
          N.__webglColorRenderbuffer[J] &&
            i.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);
      N.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let J = 0, ie = g.length; J < ie; J++) {
        const me = n.get(g[J]);
        me.__webglTexture &&
          (i.deleteTexture(me.__webglTexture), o.memory.textures--),
          n.remove(g[J]);
      }
    n.remove(g), n.remove(E);
  }
  let $ = 0;
  function X() {
    $ = 0;
  }
  function Y() {
    const E = $;
    return (
      E >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            l
        ),
      ($ += 1),
      E
    );
  }
  function te(E) {
    const g = [];
    return (
      g.push(E.wrapS),
      g.push(E.wrapT),
      g.push(E.wrapR || 0),
      g.push(E.magFilter),
      g.push(E.minFilter),
      g.push(E.anisotropy),
      g.push(E.internalFormat),
      g.push(E.format),
      g.push(E.type),
      g.push(E.generateMipmaps),
      g.push(E.premultiplyAlpha),
      g.push(E.flipY),
      g.push(E.unpackAlignment),
      g.push(E.colorSpace),
      g.join()
    );
  }
  function K(E, g) {
    const N = n.get(E);
    if (
      (E.isVideoTexture && et(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        N.__version !== E.version)
    ) {
      const ne = E.image;
      if (ne === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ne.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Be(N, E, g);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + g);
  }
  function O(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      Be(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + g);
  }
  function G(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      Be(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + g);
  }
  function he(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ot(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + g);
  }
  const de = { [Wr]: i.REPEAT, [Dt]: i.CLAMP_TO_EDGE, [Xr]: i.MIRRORED_REPEAT },
    fe = {
      [pt]: i.NEAREST,
      [vs]: i.NEAREST_MIPMAP_NEAREST,
      [lr]: i.NEAREST_MIPMAP_LINEAR,
      [At]: i.LINEAR,
      [rl]: i.LINEAR_MIPMAP_NEAREST,
      [di]: i.LINEAR_MIPMAP_LINEAR,
    },
    xe = {
      [vl]: i.NEVER,
      [bl]: i.ALWAYS,
      [xl]: i.LESS,
      [Sl]: i.LEQUAL,
      [Ml]: i.EQUAL,
      [Tl]: i.GEQUAL,
      [El]: i.GREATER,
      [yl]: i.NOTEQUAL,
    };
  function Te(E, g, N) {
    if (
      (N
        ? (i.texParameteri(E, i.TEXTURE_WRAP_S, de[g.wrapS]),
          i.texParameteri(E, i.TEXTURE_WRAP_T, de[g.wrapT]),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, de[g.wrapR]),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, fe[g.magFilter]),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, fe[g.minFilter]))
        : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
          i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE),
          (g.wrapS !== Dt || g.wrapT !== Dt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, T(g.magFilter)),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, T(g.minFilter)),
          g.minFilter !== pt &&
            g.minFilter !== At &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      g.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, xe[g.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ne = e.get("EXT_texture_filter_anisotropic");
      if (
        g.magFilter === pt ||
        (g.minFilter !== lr && g.minFilter !== di) ||
        (g.type === nn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          g.type === fi &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (g.anisotropy > 1 || n.get(g).__currentAnisotropy) &&
        (i.texParameterf(
          E,
          ne.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, r.getMaxAnisotropy())
        ),
        (n.get(g).__currentAnisotropy = g.anisotropy));
    }
  }
  function ge(E, g) {
    let N = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), g.addEventListener("dispose", Z));
    const ne = g.source;
    let J = p.get(ne);
    J === void 0 && ((J = {}), p.set(ne, J));
    const ie = te(g);
    if (ie !== E.__cacheKey) {
      J[ie] === void 0 &&
        ((J[ie] = { texture: i.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (N = !0)),
        J[ie].usedTimes++;
      const me = J[E.__cacheKey];
      me !== void 0 &&
        (J[E.__cacheKey].usedTimes--, me.usedTimes === 0 && W(g)),
        (E.__cacheKey = ie),
        (E.__webglTexture = J[ie].texture);
    }
    return N;
  }
  function Be(E, g, N) {
    let ne = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) &&
      (ne = i.TEXTURE_2D_ARRAY),
      g.isData3DTexture && (ne = i.TEXTURE_3D);
    const J = ge(E, g),
      ie = g.source;
    t.bindTexture(ne, E.__webglTexture, i.TEXTURE0 + N);
    const me = n.get(ie);
    if (ie.version !== me.__version || J === !0) {
      t.activeTexture(i.TEXTURE0 + N),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const re = A(g) && y(g.image) === !1;
      let B = M(g.image, re, !1, u);
      B = rt(g, B);
      const R = y(B) || a,
        j = s.convert(g.format, g.colorSpace);
      let ue = s.convert(g.type),
        ae = q(g.internalFormat, j, ue, g.colorSpace, g.isVideoTexture);
      Te(ne, g, R);
      let ce;
      const be = g.mipmaps,
        Oe = a && g.isVideoTexture !== !0,
        C = me.__version === void 0 || J === !0,
        le = x(g, B, R);
      if (g.isDepthTexture)
        (ae = i.DEPTH_COMPONENT),
          a
            ? g.type === nn
              ? (ae = i.DEPTH_COMPONENT32F)
              : g.type === tn
              ? (ae = i.DEPTH_COMPONENT24)
              : g.type === gn
              ? (ae = i.DEPTH24_STENCIL8)
              : (ae = i.DEPTH_COMPONENT16)
            : g.type === nn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          g.format === _n &&
            ae === i.DEPTH_COMPONENT &&
            g.type !== Jr &&
            g.type !== tn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (g.type = tn),
            (ue = s.convert(g.type))),
          g.format === Zn &&
            ae === i.DEPTH_COMPONENT &&
            ((ae = i.DEPTH_STENCIL),
            g.type !== gn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (g.type = gn),
              (ue = s.convert(g.type)))),
          C &&
            (Oe
              ? t.texStorage2D(i.TEXTURE_2D, 1, ae, B.width, B.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  ae,
                  B.width,
                  B.height,
                  0,
                  j,
                  ue,
                  null
                ));
      else if (g.isDataTexture)
        if (be.length > 0 && R) {
          Oe &&
            C &&
            t.texStorage2D(i.TEXTURE_2D, le, ae, be[0].width, be[0].height);
          for (let z = 0, ee = be.length; z < ee; z++)
            (ce = be[z]),
              Oe
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    z,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    j,
                    ue,
                    ce.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    z,
                    ae,
                    ce.width,
                    ce.height,
                    0,
                    j,
                    ue,
                    ce.data
                  );
          g.generateMipmaps = !1;
        } else
          Oe
            ? (C && t.texStorage2D(i.TEXTURE_2D, le, ae, B.width, B.height),
              t.texSubImage2D(
                i.TEXTURE_2D,
                0,
                0,
                0,
                B.width,
                B.height,
                j,
                ue,
                B.data
              ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                ae,
                B.width,
                B.height,
                0,
                j,
                ue,
                B.data
              );
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          Oe &&
            C &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              le,
              ae,
              be[0].width,
              be[0].height,
              B.depth
            );
          for (let z = 0, ee = be.length; z < ee; z++)
            (ce = be[z]),
              g.format !== Ut
                ? j !== null
                  ? Oe
                    ? t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        z,
                        0,
                        0,
                        0,
                        ce.width,
                        ce.height,
                        B.depth,
                        j,
                        ce.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        i.TEXTURE_2D_ARRAY,
                        z,
                        ae,
                        ce.width,
                        ce.height,
                        B.depth,
                        0,
                        ce.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    z,
                    0,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    B.depth,
                    j,
                    ue,
                    ce.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    z,
                    ae,
                    ce.width,
                    ce.height,
                    B.depth,
                    0,
                    j,
                    ue,
                    ce.data
                  );
        } else {
          Oe &&
            C &&
            t.texStorage2D(i.TEXTURE_2D, le, ae, be[0].width, be[0].height);
          for (let z = 0, ee = be.length; z < ee; z++)
            (ce = be[z]),
              g.format !== Ut
                ? j !== null
                  ? Oe
                    ? t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        z,
                        0,
                        0,
                        ce.width,
                        ce.height,
                        j,
                        ce.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        z,
                        ae,
                        ce.width,
                        ce.height,
                        0,
                        ce.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    z,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    j,
                    ue,
                    ce.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    z,
                    ae,
                    ce.width,
                    ce.height,
                    0,
                    j,
                    ue,
                    ce.data
                  );
        }
      else if (g.isDataArrayTexture)
        Oe
          ? (C &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                le,
                ae,
                B.width,
                B.height,
                B.depth
              ),
            t.texSubImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              B.width,
              B.height,
              B.depth,
              j,
              ue,
              B.data
            ))
          : t.texImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              ae,
              B.width,
              B.height,
              B.depth,
              0,
              j,
              ue,
              B.data
            );
      else if (g.isData3DTexture)
        Oe
          ? (C &&
              t.texStorage3D(i.TEXTURE_3D, le, ae, B.width, B.height, B.depth),
            t.texSubImage3D(
              i.TEXTURE_3D,
              0,
              0,
              0,
              0,
              B.width,
              B.height,
              B.depth,
              j,
              ue,
              B.data
            ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              ae,
              B.width,
              B.height,
              B.depth,
              0,
              j,
              ue,
              B.data
            );
      else if (g.isFramebufferTexture) {
        if (C)
          if (Oe) t.texStorage2D(i.TEXTURE_2D, le, ae, B.width, B.height);
          else {
            let z = B.width,
              ee = B.height;
            for (let se = 0; se < le; se++)
              t.texImage2D(i.TEXTURE_2D, se, ae, z, ee, 0, j, ue, null),
                (z >>= 1),
                (ee >>= 1);
          }
      } else if (be.length > 0 && R) {
        Oe &&
          C &&
          t.texStorage2D(i.TEXTURE_2D, le, ae, be[0].width, be[0].height);
        for (let z = 0, ee = be.length; z < ee; z++)
          (ce = be[z]),
            Oe
              ? t.texSubImage2D(i.TEXTURE_2D, z, 0, 0, j, ue, ce)
              : t.texImage2D(i.TEXTURE_2D, z, ae, j, ue, ce);
        g.generateMipmaps = !1;
      } else
        Oe
          ? (C && t.texStorage2D(i.TEXTURE_2D, le, ae, B.width, B.height),
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, j, ue, B))
          : t.texImage2D(i.TEXTURE_2D, 0, ae, j, ue, B);
      P(g, R) && w(ne),
        (me.__version = ie.version),
        g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function ot(E, g, N) {
    if (g.image.length !== 6) return;
    const ne = ge(E, g),
      J = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const ie = n.get(J);
    if (J.version !== ie.__version || ne === !0) {
      t.activeTexture(i.TEXTURE0 + N),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const me = g.isCompressedTexture || g.image[0].isCompressedTexture,
        re = g.image[0] && g.image[0].isDataTexture,
        B = [];
      for (let z = 0; z < 6; z++)
        !me && !re
          ? (B[z] = M(g.image[z], !1, !0, c))
          : (B[z] = re ? g.image[z].image : g.image[z]),
          (B[z] = rt(g, B[z]));
      const R = B[0],
        j = y(R) || a,
        ue = s.convert(g.format, g.colorSpace),
        ae = s.convert(g.type),
        ce = q(g.internalFormat, ue, ae, g.colorSpace),
        be = a && g.isVideoTexture !== !0,
        Oe = ie.__version === void 0 || ne === !0;
      let C = x(g, R, j);
      Te(i.TEXTURE_CUBE_MAP, g, j);
      let le;
      if (me) {
        be &&
          Oe &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, C, ce, R.width, R.height);
        for (let z = 0; z < 6; z++) {
          le = B[z].mipmaps;
          for (let ee = 0; ee < le.length; ee++) {
            const se = le[ee];
            g.format !== Ut
              ? ue !== null
                ? be
                  ? t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                      ee,
                      0,
                      0,
                      se.width,
                      se.height,
                      ue,
                      se.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                      ee,
                      ce,
                      se.width,
                      se.height,
                      0,
                      se.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : be
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  ee,
                  0,
                  0,
                  se.width,
                  se.height,
                  ue,
                  ae,
                  se.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  ee,
                  ce,
                  se.width,
                  se.height,
                  0,
                  ue,
                  ae,
                  se.data
                );
          }
        }
      } else {
        (le = g.mipmaps),
          be &&
            Oe &&
            (le.length > 0 && C++,
            t.texStorage2D(i.TEXTURE_CUBE_MAP, C, ce, B[0].width, B[0].height));
        for (let z = 0; z < 6; z++)
          if (re) {
            be
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  0,
                  0,
                  B[z].width,
                  B[z].height,
                  ue,
                  ae,
                  B[z].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  ce,
                  B[z].width,
                  B[z].height,
                  0,
                  ue,
                  ae,
                  B[z].data
                );
            for (let ee = 0; ee < le.length; ee++) {
              const Ie = le[ee].image[z].image;
              be
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    ee + 1,
                    0,
                    0,
                    Ie.width,
                    Ie.height,
                    ue,
                    ae,
                    Ie.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    ee + 1,
                    ce,
                    Ie.width,
                    Ie.height,
                    0,
                    ue,
                    ae,
                    Ie.data
                  );
            }
          } else {
            be
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  0,
                  0,
                  ue,
                  ae,
                  B[z]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  ce,
                  ue,
                  ae,
                  B[z]
                );
            for (let ee = 0; ee < le.length; ee++) {
              const se = le[ee];
              be
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    ee + 1,
                    0,
                    0,
                    ue,
                    ae,
                    se.image[z]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    ee + 1,
                    ce,
                    ue,
                    ae,
                    se.image[z]
                  );
            }
          }
      }
      P(g, j) && w(i.TEXTURE_CUBE_MAP),
        (ie.__version = J.version),
        g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function Ce(E, g, N, ne, J, ie) {
    const me = s.convert(N.format, N.colorSpace),
      re = s.convert(N.type),
      B = q(N.internalFormat, me, re, N.colorSpace);
    if (!n.get(g).__hasExternalTextures) {
      const j = Math.max(1, g.width >> ie),
        ue = Math.max(1, g.height >> ie);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(J, ie, B, j, ue, g.depth, 0, me, re, null)
        : t.texImage2D(J, ie, B, j, ue, 0, me, re, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E),
      ze(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            ne,
            J,
            n.get(N).__webglTexture,
            0,
            Re(g)
          )
        : (J === i.TEXTURE_2D ||
            (J >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            ne,
            J,
            n.get(N).__webglTexture,
            ie
          ),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function U(E, g, N) {
    if (
      (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer && !g.stencilBuffer)
    ) {
      let ne = i.DEPTH_COMPONENT16;
      if (N || ze(g)) {
        const J = g.depthTexture;
        J &&
          J.isDepthTexture &&
          (J.type === nn
            ? (ne = i.DEPTH_COMPONENT32F)
            : J.type === tn && (ne = i.DEPTH_COMPONENT24));
        const ie = Re(g);
        ze(g)
          ? f.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              ie,
              ne,
              g.width,
              g.height
            )
          : i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ie,
              ne,
              g.width,
              g.height
            );
      } else i.renderbufferStorage(i.RENDERBUFFER, ne, g.width, g.height);
      i.framebufferRenderbuffer(
        i.FRAMEBUFFER,
        i.DEPTH_ATTACHMENT,
        i.RENDERBUFFER,
        E
      );
    } else if (g.depthBuffer && g.stencilBuffer) {
      const ne = Re(g);
      N && ze(g) === !1
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ne,
            i.DEPTH24_STENCIL8,
            g.width,
            g.height
          )
        : ze(g)
        ? f.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            ne,
            i.DEPTH24_STENCIL8,
            g.width,
            g.height
          )
        : i.renderbufferStorage(
            i.RENDERBUFFER,
            i.DEPTH_STENCIL,
            g.width,
            g.height
          ),
        i.framebufferRenderbuffer(
          i.FRAMEBUFFER,
          i.DEPTH_STENCIL_ATTACHMENT,
          i.RENDERBUFFER,
          E
        );
    } else {
      const ne =
        g.isWebGLMultipleRenderTargets === !0 ? g.texture : [g.texture];
      for (let J = 0; J < ne.length; J++) {
        const ie = ne[J],
          me = s.convert(ie.format, ie.colorSpace),
          re = s.convert(ie.type),
          B = q(ie.internalFormat, me, re, ie.colorSpace),
          R = Re(g);
        N && ze(g) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              R,
              B,
              g.width,
              g.height
            )
          : ze(g)
          ? f.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              R,
              B,
              g.width,
              g.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, B, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Qe(E, g) {
    if (g && g.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, E),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(g.depthTexture).__webglTexture ||
      g.depthTexture.image.width !== g.width ||
      g.depthTexture.image.height !== g.height) &&
      ((g.depthTexture.image.width = g.width),
      (g.depthTexture.image.height = g.height),
      (g.depthTexture.needsUpdate = !0)),
      K(g.depthTexture, 0);
    const ne = n.get(g.depthTexture).__webglTexture,
      J = Re(g);
    if (g.depthTexture.format === _n)
      ze(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            ne,
            0,
            J
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            ne,
            0
          );
    else if (g.depthTexture.format === Zn)
      ze(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            ne,
            0,
            J
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            ne,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function _e(E) {
    const g = n.get(E),
      N = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (N)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Qe(g.__webglFramebuffer, E);
    } else if (N) {
      g.__webglDepthbuffer = [];
      for (let ne = 0; ne < 6; ne++)
        t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[ne]),
          (g.__webglDepthbuffer[ne] = i.createRenderbuffer()),
          U(g.__webglDepthbuffer[ne], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer),
        (g.__webglDepthbuffer = i.createRenderbuffer()),
        U(g.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ae(E, g, N) {
    const ne = n.get(E);
    g !== void 0 &&
      Ce(
        ne.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      N !== void 0 && _e(E);
  }
  function Se(E) {
    const g = E.texture,
      N = n.get(E),
      ne = n.get(g);
    E.addEventListener("dispose", Q),
      E.isWebGLMultipleRenderTargets !== !0 &&
        (ne.__webglTexture === void 0 &&
          (ne.__webglTexture = i.createTexture()),
        (ne.__version = g.version),
        o.memory.textures++);
    const J = E.isWebGLCubeRenderTarget === !0,
      ie = E.isWebGLMultipleRenderTargets === !0,
      me = y(E) || a;
    if (J) {
      N.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (a && g.mipmaps && g.mipmaps.length > 0) {
          N.__webglFramebuffer[re] = [];
          for (let B = 0; B < g.mipmaps.length; B++)
            N.__webglFramebuffer[re][B] = i.createFramebuffer();
        } else N.__webglFramebuffer[re] = i.createFramebuffer();
    } else {
      if (a && g.mipmaps && g.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let re = 0; re < g.mipmaps.length; re++)
          N.__webglFramebuffer[re] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (ie)
        if (r.drawBuffers) {
          const re = E.texture;
          for (let B = 0, R = re.length; B < R; B++) {
            const j = n.get(re[B]);
            j.__webglTexture === void 0 &&
              ((j.__webglTexture = i.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && E.samples > 0 && ze(E) === !1) {
        const re = ie ? g : [g];
        (N.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (N.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let B = 0; B < re.length; B++) {
          const R = re[B];
          (N.__webglColorRenderbuffer[B] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[B]);
          const j = s.convert(R.format, R.colorSpace),
            ue = s.convert(R.type),
            ae = q(
              R.internalFormat,
              j,
              ue,
              R.colorSpace,
              E.isXRRenderTarget === !0
            ),
            ce = Re(E);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ce,
            ae,
            E.width,
            E.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + B,
              i.RENDERBUFFER,
              N.__webglColorRenderbuffer[B]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((N.__webglDepthRenderbuffer = i.createRenderbuffer()),
            U(N.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ne.__webglTexture),
        Te(i.TEXTURE_CUBE_MAP, g, me);
      for (let re = 0; re < 6; re++)
        if (a && g.mipmaps && g.mipmaps.length > 0)
          for (let B = 0; B < g.mipmaps.length; B++)
            Ce(
              N.__webglFramebuffer[re][B],
              E,
              g,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + re,
              B
            );
        else
          Ce(
            N.__webglFramebuffer[re],
            E,
            g,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + re,
            0
          );
      P(g, me) && w(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ie) {
      const re = E.texture;
      for (let B = 0, R = re.length; B < R; B++) {
        const j = re[B],
          ue = n.get(j);
        t.bindTexture(i.TEXTURE_2D, ue.__webglTexture),
          Te(i.TEXTURE_2D, j, me),
          Ce(
            N.__webglFramebuffer,
            E,
            j,
            i.COLOR_ATTACHMENT0 + B,
            i.TEXTURE_2D,
            0
          ),
          P(j, me) && w(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = i.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (a
            ? (re = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
        t.bindTexture(re, ne.__webglTexture),
        Te(re, g, me),
        a && g.mipmaps && g.mipmaps.length > 0)
      )
        for (let B = 0; B < g.mipmaps.length; B++)
          Ce(N.__webglFramebuffer[B], E, g, i.COLOR_ATTACHMENT0, re, B);
      else Ce(N.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, re, 0);
      P(g, me) && w(re), t.unbindTexture();
    }
    E.depthBuffer && _e(E);
  }
  function ke(E) {
    const g = y(E) || a,
      N = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let ne = 0, J = N.length; ne < J; ne++) {
      const ie = N[ne];
      if (P(ie, g)) {
        const me = E.isWebGLCubeRenderTarget
            ? i.TEXTURE_CUBE_MAP
            : i.TEXTURE_2D,
          re = n.get(ie).__webglTexture;
        t.bindTexture(me, re), w(me), t.unbindTexture();
      }
    }
  }
  function De(E) {
    if (a && E.samples > 0 && ze(E) === !1) {
      const g = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        N = E.width,
        ne = E.height;
      let J = i.COLOR_BUFFER_BIT;
      const ie = [],
        me = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        re = n.get(E),
        B = E.isWebGLMultipleRenderTargets === !0;
      if (B)
        for (let R = 0; R < g.length; R++)
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(i.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let R = 0; R < g.length; R++) {
        ie.push(i.COLOR_ATTACHMENT0 + R), E.depthBuffer && ie.push(me);
        const j =
          re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (
          (j === !1 &&
            (E.depthBuffer && (J |= i.DEPTH_BUFFER_BIT),
            E.stencilBuffer && (J |= i.STENCIL_BUFFER_BIT)),
          B &&
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            ),
          j === !0 &&
            (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [me]),
            i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [me])),
          B)
        ) {
          const ue = n.get(g[R]).__webglTexture;
          i.framebufferTexture2D(
            i.DRAW_FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_2D,
            ue,
            0
          );
        }
        i.blitFramebuffer(0, 0, N, ne, 0, 0, N, ne, J, i.NEAREST),
          m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ie);
      }
      if (
        (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        B)
      )
        for (let R = 0; R < g.length; R++) {
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            );
          const j = n.get(g[R]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, re.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + R,
              i.TEXTURE_2D,
              j,
              0
            );
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function Re(E) {
    return Math.min(d, E.samples);
  }
  function ze(E) {
    const g = n.get(E);
    return (
      a &&
      E.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function et(E) {
    const g = o.render.frame;
    _.get(E) !== g && (_.set(E, g), E.update());
  }
  function rt(E, g) {
    const N = E.colorSpace,
      ne = E.format,
      J = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        E.format === qr ||
        (N !== Ht &&
          N !== xn &&
          (N === Xe || N === $i
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && ne === Ut
                ? ((E.format = qr),
                  (E.minFilter = At),
                  (E.generateMipmaps = !1))
                : (g = ro.sRGBToLinear(g))
              : (ne !== Ut || J !== an) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                N
              ))),
      g
    );
  }
  (this.allocateTextureUnit = Y),
    (this.resetTextureUnits = X),
    (this.setTexture2D = K),
    (this.setTexture2DArray = O),
    (this.setTexture3D = G),
    (this.setTextureCube = he),
    (this.rebindTextures = Ae),
    (this.setupRenderTarget = Se),
    (this.updateRenderTargetMipmap = ke),
    (this.updateMultisampleRenderTarget = De),
    (this.setupDepthRenderbuffer = _e),
    (this.setupFrameBufferTexture = Ce),
    (this.useMultisampledRTT = ze);
}
const kf = 0,
  tt = 1;
function Wf(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = xn) {
    let a;
    const l = o === Xe || o === $i ? tt : kf;
    if (s === an) return i.UNSIGNED_BYTE;
    if (s === Za) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === $a) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === sl) return i.BYTE;
    if (s === al) return i.SHORT;
    if (s === Jr) return i.UNSIGNED_SHORT;
    if (s === Ka) return i.INT;
    if (s === tn) return i.UNSIGNED_INT;
    if (s === nn) return i.FLOAT;
    if (s === fi)
      return n
        ? i.HALF_FLOAT
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === ol) return i.ALPHA;
    if (s === Ut) return i.RGBA;
    if (s === ll) return i.LUMINANCE;
    if (s === cl) return i.LUMINANCE_ALPHA;
    if (s === _n) return i.DEPTH_COMPONENT;
    if (s === Zn) return i.DEPTH_STENCIL;
    if (s === qr)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === ul) return i.RED;
    if (s === Ja) return i.RED_INTEGER;
    if (s === hl) return i.RG;
    if (s === Qa) return i.RG_INTEGER;
    if (s === eo) return i.RGBA_INTEGER;
    if (s === cr || s === ur || s === hr || s === dr)
      if (l === tt)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === cr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ur) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === hr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === dr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === cr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ur) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === hr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === dr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === xs || s === Ms || s === Ss || s === Es)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === xs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Ms) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ss) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Es) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === dl)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === ys || s === Ts)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === ys)
          return l === tt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Ts)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === bs ||
      s === As ||
      s === ws ||
      s === Rs ||
      s === Cs ||
      s === Ls ||
      s === Ps ||
      s === Ds ||
      s === Us ||
      s === Is ||
      s === Ns ||
      s === Fs ||
      s === Os ||
      s === Bs
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === bs)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === As)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === ws)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Rs)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Cs)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ls)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Ps)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ds)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Us)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Is)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ns)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Fs)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Os)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Bs)
          return l === tt
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === fr || s === zs || s === Hs)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === fr)
          return l === tt
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === zs) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Hs) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (s === fl || s === Gs || s === Vs || s === ks)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === fr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Gs) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Vs) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ks) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === gn
      ? n
        ? i.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : i[s] !== void 0
      ? i[s]
      : null;
  }
  return { convert: r };
}
class Xf extends yt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class li extends mt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const qf = { type: "move" };
class Nr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new li()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new li()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new li()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n),
            h = this._getHandJoint(c, v);
          p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null);
        }
        const u = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          m = 0.02,
          _ = 0.005;
        c.inputState.pinching && f > m + _
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= m - _ &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(qf)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new li();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Yf extends _t {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : _n), u !== _n && u !== Zn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === _n && (n = tn),
      n === void 0 && u === Zn && (n = gn),
      super(null, r, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : pt),
      (this.minFilter = l !== void 0 ? l : pt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class jf extends Tn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      d = null,
      f = null,
      m = null,
      _ = null;
    const v = t.getContextAttributes();
    let p = null,
      h = null;
    const b = [],
      M = [],
      y = new yt();
    y.layers.enable(1), (y.viewport = new qe());
    const A = new yt();
    A.layers.enable(2), (A.viewport = new qe());
    const P = [y, A],
      w = new Xf();
    w.layers.enable(1), w.layers.enable(2);
    let q = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (O) {
        let G = b[O];
        return (
          G === void 0 && ((G = new Nr()), (b[O] = G)), G.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (O) {
        let G = b[O];
        return G === void 0 && ((G = new Nr()), (b[O] = G)), G.getGripSpace();
      }),
      (this.getHand = function (O) {
        let G = b[O];
        return G === void 0 && ((G = new Nr()), (b[O] = G)), G.getHandSpace();
      });
    function T(O) {
      const G = M.indexOf(O.inputSource);
      if (G === -1) return;
      const he = b[G];
      he !== void 0 &&
        (he.update(O.inputSource, O.frame, c || o),
        he.dispatchEvent({ type: O.type, data: O.inputSource }));
    }
    function Z() {
      r.removeEventListener("select", T),
        r.removeEventListener("selectstart", T),
        r.removeEventListener("selectend", T),
        r.removeEventListener("squeeze", T),
        r.removeEventListener("squeezestart", T),
        r.removeEventListener("squeezeend", T),
        r.removeEventListener("end", Z),
        r.removeEventListener("inputsourceschange", Q);
      for (let O = 0; O < b.length; O++) {
        const G = M[O];
        G !== null && ((M[O] = null), b[O].disconnect(G));
      }
      (q = null),
        (x = null),
        e.setRenderTarget(p),
        (m = null),
        (f = null),
        (d = null),
        (r = null),
        (h = null),
        K.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (O) {
      (s = O),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (O) {
        (a = O),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (O) {
        c = O;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return _;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (O) {
        if (((r = O), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", T),
            r.addEventListener("selectstart", T),
            r.addEventListener("selectend", T),
            r.addEventListener("squeeze", T),
            r.addEventListener("squeezestart", T),
            r.addEventListener("squeezeend", T),
            r.addEventListener("end", Z),
            r.addEventListener("inputsourceschange", Q),
            v.xrCompatible !== !0 && (await t.makeXRCompatible()),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const G = {
              antialias: r.renderState.layers === void 0 ? v.antialias : !0,
              alpha: !0,
              depth: v.depth,
              stencil: v.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, t, G)),
              r.updateRenderState({ baseLayer: m }),
              (h = new Mn(m.framebufferWidth, m.framebufferHeight, {
                format: Ut,
                type: an,
                colorSpace: e.outputColorSpace,
                stencilBuffer: v.stencil,
              }));
          } else {
            let G = null,
              he = null,
              de = null;
            v.depth &&
              ((de = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (G = v.stencil ? Zn : _n),
              (he = v.stencil ? gn : tn));
            const fe = {
              colorFormat: t.RGBA8,
              depthFormat: de,
              scaleFactor: s,
            };
            (d = new XRWebGLBinding(r, t)),
              (f = d.createProjectionLayer(fe)),
              r.updateRenderState({ layers: [f] }),
              (h = new Mn(f.textureWidth, f.textureHeight, {
                format: Ut,
                type: an,
                depthTexture: new Yf(
                  f.textureWidth,
                  f.textureHeight,
                  he,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  G
                ),
                stencilBuffer: v.stencil,
                colorSpace: e.outputColorSpace,
                samples: v.antialias ? 4 : 0,
              }));
            const xe = e.properties.get(h);
            xe.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (h.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            K.setContext(r),
            K.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      });
    function Q(O) {
      for (let G = 0; G < O.removed.length; G++) {
        const he = O.removed[G],
          de = M.indexOf(he);
        de >= 0 && ((M[de] = null), b[de].disconnect(he));
      }
      for (let G = 0; G < O.added.length; G++) {
        const he = O.added[G];
        let de = M.indexOf(he);
        if (de === -1) {
          for (let xe = 0; xe < b.length; xe++)
            if (xe >= M.length) {
              M.push(he), (de = xe);
              break;
            } else if (M[xe] === null) {
              (M[xe] = he), (de = xe);
              break;
            }
          if (de === -1) break;
        }
        const fe = b[de];
        fe && fe.connect(he);
      }
    }
    const F = new L(),
      W = new L();
    function H(O, G, he) {
      F.setFromMatrixPosition(G.matrixWorld),
        W.setFromMatrixPosition(he.matrixWorld);
      const de = F.distanceTo(W),
        fe = G.projectionMatrix.elements,
        xe = he.projectionMatrix.elements,
        Te = fe[14] / (fe[10] - 1),
        ge = fe[14] / (fe[10] + 1),
        Be = (fe[9] + 1) / fe[5],
        ot = (fe[9] - 1) / fe[5],
        Ce = (fe[8] - 1) / fe[0],
        U = (xe[8] + 1) / xe[0],
        Qe = Te * Ce,
        _e = Te * U,
        Ae = de / (-Ce + U),
        Se = Ae * -Ce;
      G.matrixWorld.decompose(O.position, O.quaternion, O.scale),
        O.translateX(Se),
        O.translateZ(Ae),
        O.matrixWorld.compose(O.position, O.quaternion, O.scale),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const ke = Te + Ae,
        De = ge + Ae,
        Re = Qe - Se,
        ze = _e + (de - Se),
        et = ((Be * ge) / De) * ke,
        rt = ((ot * ge) / De) * ke;
      O.projectionMatrix.makePerspective(Re, ze, et, rt, ke, De),
        O.projectionMatrixInverse.copy(O.projectionMatrix).invert();
    }
    function $(O, G) {
      G === null
        ? O.matrixWorld.copy(O.matrix)
        : O.matrixWorld.multiplyMatrices(G.matrixWorld, O.matrix),
        O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.updateCamera = function (O) {
      if (r === null) return;
      (w.near = A.near = y.near = O.near),
        (w.far = A.far = y.far = O.far),
        (q !== w.near || x !== w.far) &&
          (r.updateRenderState({ depthNear: w.near, depthFar: w.far }),
          (q = w.near),
          (x = w.far));
      const G = O.parent,
        he = w.cameras;
      $(w, G);
      for (let de = 0; de < he.length; de++) $(he[de], G);
      he.length === 2
        ? H(w, y, A)
        : w.projectionMatrix.copy(y.projectionMatrix),
        X(O, w, G);
    };
    function X(O, G, he) {
      he === null
        ? O.matrix.copy(G.matrixWorld)
        : (O.matrix.copy(he.matrixWorld),
          O.matrix.invert(),
          O.matrix.multiply(G.matrixWorld)),
        O.matrix.decompose(O.position, O.quaternion, O.scale),
        O.updateMatrixWorld(!0),
        O.projectionMatrix.copy(G.projectionMatrix),
        O.projectionMatrixInverse.copy(G.projectionMatrixInverse),
        O.isPerspectiveCamera &&
          ((O.fov = pi * 2 * Math.atan(1 / O.projectionMatrix.elements[5])),
          (O.zoom = 1));
    }
    (this.getCamera = function () {
      return w;
    }),
      (this.getFoveation = function () {
        if (!(f === null && m === null)) return l;
      }),
      (this.setFoveation = function (O) {
        (l = O),
          f !== null && (f.fixedFoveation = O),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = O);
      });
    let Y = null;
    function te(O, G) {
      if (((u = G.getViewerPose(c || o)), (_ = G), u !== null)) {
        const he = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(h, m.framebuffer),
          e.setRenderTarget(h));
        let de = !1;
        he.length !== w.cameras.length && ((w.cameras.length = 0), (de = !0));
        for (let fe = 0; fe < he.length; fe++) {
          const xe = he[fe];
          let Te = null;
          if (m !== null) Te = m.getViewport(xe);
          else {
            const Be = d.getViewSubImage(f, xe);
            (Te = Be.viewport),
              fe === 0 &&
                (e.setRenderTargetTextures(
                  h,
                  Be.colorTexture,
                  f.ignoreDepthValues ? void 0 : Be.depthStencilTexture
                ),
                e.setRenderTarget(h));
          }
          let ge = P[fe];
          ge === void 0 &&
            ((ge = new yt()),
            ge.layers.enable(fe),
            (ge.viewport = new qe()),
            (P[fe] = ge)),
            ge.matrix.fromArray(xe.transform.matrix),
            ge.matrix.decompose(ge.position, ge.quaternion, ge.scale),
            ge.projectionMatrix.fromArray(xe.projectionMatrix),
            ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),
            ge.viewport.set(Te.x, Te.y, Te.width, Te.height),
            fe === 0 &&
              (w.matrix.copy(ge.matrix),
              w.matrix.decompose(w.position, w.quaternion, w.scale)),
            de === !0 && w.cameras.push(ge);
        }
      }
      for (let he = 0; he < b.length; he++) {
        const de = M[he],
          fe = b[he];
        de !== null && fe !== void 0 && fe.update(de, G, c || o);
      }
      Y && Y(O, G),
        G.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: G }),
        (_ = null);
    }
    const K = new mo();
    K.setAnimationLoop(te),
      (this.setAnimationLoop = function (O) {
        Y = O;
      }),
      (this.dispose = function () {});
  }
}
function Kf(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, ho(i)),
      h.isFog
        ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
        : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, b, M, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? s(p, h)
      : h.isMeshToonMaterial
      ? (s(p, h), d(p, h))
      : h.isMeshPhongMaterial
      ? (s(p, h), u(p, h))
      : h.isMeshStandardMaterial
      ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, y))
      : h.isMeshMatcapMaterial
      ? (s(p, h), _(p, h))
      : h.isMeshDepthMaterial
      ? s(p, h)
      : h.isMeshDistanceMaterial
      ? (s(p, h), v(p, h))
      : h.isMeshNormalMaterial
      ? s(p, h)
      : h.isLineBasicMaterial
      ? (o(p, h), h.isLineDashedMaterial && a(p, h))
      : h.isPointsMaterial
      ? l(p, h, b, M)
      : h.isSpriteMaterial
      ? c(p, h)
      : h.isShadowMaterial
      ? (p.color.value.copy(h.color), (p.opacity.value = h.opacity))
      : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    (p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === gt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === gt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const b = e.get(h).envMap;
    if (
      (b &&
        ((p.envMap.value = b),
        (p.flipEnvMap.value =
          b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = h.reflectivity),
        (p.ior.value = h.ior),
        (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap)
    ) {
      p.lightMap.value = h.lightMap;
      const M = i._useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = h.lightMapIntensity * M),
        t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap &&
      ((p.aoMap.value = h.aoMap),
      (p.aoMapIntensity.value = h.aoMapIntensity),
      t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform));
  }
  function a(p, h) {
    (p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale);
  }
  function l(p, h, b, M) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * b),
      (p.scale.value = M * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4));
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    (p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, b) {
    (p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === gt && p.clearcoatNormalScale.value.negate())),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = b.texture),
        p.transmissionSamplerSize.value.set(b.width, b.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation)
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function v(p, h) {
    const b = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),
      (p.nearDistance.value = b.shadow.camera.near),
      (p.farDistance.value = b.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Zf(i, e, t, n) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(b, M) {
    const y = M.program;
    n.uniformBlockBinding(b, y);
  }
  function c(b, M) {
    let y = r[b.id];
    y === void 0 &&
      (_(b), (y = u(b)), (r[b.id] = y), b.addEventListener("dispose", p));
    const A = M.program;
    n.updateUBOMapping(b, A);
    const P = e.render.frame;
    s[b.id] !== P && (f(b), (s[b.id] = P));
  }
  function u(b) {
    const M = d();
    b.__bindingPointIndex = M;
    const y = i.createBuffer(),
      A = b.__size,
      P = b.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, y),
      i.bufferData(i.UNIFORM_BUFFER, A, P),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, M, y),
      y
    );
  }
  function d() {
    for (let b = 0; b < a; b++) if (o.indexOf(b) === -1) return o.push(b), b;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(b) {
    const M = r[b.id],
      y = b.uniforms,
      A = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let P = 0, w = y.length; P < w; P++) {
      const q = y[P];
      if (m(q, P, A) === !0) {
        const x = q.__offset,
          T = Array.isArray(q.value) ? q.value : [q.value];
        let Z = 0;
        for (let Q = 0; Q < T.length; Q++) {
          const F = T[Q],
            W = v(F);
          typeof F == "number"
            ? ((q.__data[0] = F),
              i.bufferSubData(i.UNIFORM_BUFFER, x + Z, q.__data))
            : F.isMatrix3
            ? ((q.__data[0] = F.elements[0]),
              (q.__data[1] = F.elements[1]),
              (q.__data[2] = F.elements[2]),
              (q.__data[3] = F.elements[0]),
              (q.__data[4] = F.elements[3]),
              (q.__data[5] = F.elements[4]),
              (q.__data[6] = F.elements[5]),
              (q.__data[7] = F.elements[0]),
              (q.__data[8] = F.elements[6]),
              (q.__data[9] = F.elements[7]),
              (q.__data[10] = F.elements[8]),
              (q.__data[11] = F.elements[0]))
            : (F.toArray(q.__data, Z),
              (Z += W.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        i.bufferSubData(i.UNIFORM_BUFFER, x, q.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(b, M, y) {
    const A = b.value;
    if (y[M] === void 0) {
      if (typeof A == "number") y[M] = A;
      else {
        const P = Array.isArray(A) ? A : [A],
          w = [];
        for (let q = 0; q < P.length; q++) w.push(P[q].clone());
        y[M] = w;
      }
      return !0;
    } else if (typeof A == "number") {
      if (y[M] !== A) return (y[M] = A), !0;
    } else {
      const P = Array.isArray(y[M]) ? y[M] : [y[M]],
        w = Array.isArray(A) ? A : [A];
      for (let q = 0; q < P.length; q++) {
        const x = P[q];
        if (x.equals(w[q]) === !1) return x.copy(w[q]), !0;
      }
    }
    return !1;
  }
  function _(b) {
    const M = b.uniforms;
    let y = 0;
    const A = 16;
    let P = 0;
    for (let w = 0, q = M.length; w < q; w++) {
      const x = M[w],
        T = { boundary: 0, storage: 0 },
        Z = Array.isArray(x.value) ? x.value : [x.value];
      for (let Q = 0, F = Z.length; Q < F; Q++) {
        const W = Z[Q],
          H = v(W);
        (T.boundary += H.boundary), (T.storage += H.storage);
      }
      if (
        ((x.__data = new Float32Array(
          T.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (x.__offset = y),
        w > 0)
      ) {
        P = y % A;
        const Q = A - P;
        P !== 0 && Q - T.boundary < 0 && ((y += A - P), (x.__offset = y));
      }
      y += T.storage;
    }
    return (
      (P = y % A), P > 0 && (y += A - P), (b.__size = y), (b.__cache = {}), this
    );
  }
  function v(b) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof b == "number"
        ? ((M.boundary = 4), (M.storage = 4))
        : b.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : b.isVector3 || b.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : b.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : b.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : b.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : b.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            b
          ),
      M
    );
  }
  function p(b) {
    const M = b.target;
    M.removeEventListener("dispose", p);
    const y = o.indexOf(M.__bindingPointIndex);
    o.splice(y, 1), i.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function h() {
    for (const b in r) i.deleteBuffer(r[b]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: h };
}
class Mo {
  constructor(e = {}) {
    const {
      canvas: t = Gl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? (f = n.getContextAttributes().alpha) : (f = o);
    const m = new Uint32Array(4),
      _ = new Int32Array(4);
    let v = null,
      p = null;
    const h = [],
      b = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputColorSpace = Xe),
      (this._useLegacyLights = !1),
      (this.toneMapping = sn),
      (this.toneMappingExposure = 1);
    const M = this;
    let y = !1,
      A = 0,
      P = 0,
      w = null,
      q = -1,
      x = null;
    const T = new qe(),
      Z = new qe();
    let Q = null;
    const F = new He(0);
    let W = 0,
      H = t.width,
      $ = t.height,
      X = 1,
      Y = null,
      te = null;
    const K = new qe(0, 0, H, $),
      O = new qe(0, 0, H, $);
    let G = !1;
    const he = new ts();
    let de = !1,
      fe = !1,
      xe = null;
    const Te = new je(),
      ge = new we(),
      Be = new L(),
      ot = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function Ce() {
      return w === null ? X : 1;
    }
    let U = n;
    function Qe(S, D) {
      for (let V = 0; V < S.length; V++) {
        const I = S[V],
          k = t.getContext(I, D);
        if (k !== null) return k;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${$r}`),
        t.addEventListener("webglcontextlost", le, !1),
        t.addEventListener("webglcontextrestored", z, !1),
        t.addEventListener("webglcontextcreationerror", ee, !1),
        U === null)
      ) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (M.isWebGL1Renderer === !0 && D.shift(), (U = Qe(D, S)), U === null)
        )
          throw Qe(D)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" &&
        U instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
        ),
        U.getShaderPrecisionFormat === void 0 &&
          (U.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (S) {
      throw (console.error("THREE.WebGLRenderer: " + S.message), S);
    }
    let _e,
      Ae,
      Se,
      ke,
      De,
      Re,
      ze,
      et,
      rt,
      E,
      g,
      N,
      ne,
      J,
      ie,
      me,
      re,
      B,
      R,
      j,
      ue,
      ae,
      ce,
      be;
    function Oe() {
      (_e = new sd(U)),
        (Ae = new Jh(U, _e, e)),
        _e.init(Ae),
        (ae = new Wf(U, _e, Ae)),
        (Se = new Gf(U, _e, Ae)),
        (ke = new ld(U)),
        (De = new wf()),
        (Re = new Vf(U, _e, Se, De, Ae, ae, ke)),
        (ze = new ed(M)),
        (et = new rd(M)),
        (rt = new _c(U, Ae)),
        (ce = new Zh(U, _e, rt, Ae)),
        (E = new ad(U, rt, ke, ce)),
        (g = new dd(U, E, rt, ke)),
        (R = new hd(U, Ae, Re)),
        (me = new Qh(De)),
        (N = new Af(M, ze, et, _e, Ae, ce, me)),
        (ne = new Kf(M, De)),
        (J = new Cf()),
        (ie = new Nf(_e, Ae)),
        (B = new Kh(M, ze, et, Se, g, f, l)),
        (re = new Hf(M, g, Ae)),
        (be = new Zf(U, ke, Ae, Se)),
        (j = new $h(U, _e, ke, Ae)),
        (ue = new od(U, _e, ke, Ae)),
        (ke.programs = N.programs),
        (M.capabilities = Ae),
        (M.extensions = _e),
        (M.properties = De),
        (M.renderLists = J),
        (M.shadowMap = re),
        (M.state = Se),
        (M.info = ke);
    }
    Oe();
    const C = new jf(M, U);
    (this.xr = C),
      (this.getContext = function () {
        return U;
      }),
      (this.getContextAttributes = function () {
        return U.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const S = _e.get("WEBGL_lose_context");
        S && S.loseContext();
      }),
      (this.forceContextRestore = function () {
        const S = _e.get("WEBGL_lose_context");
        S && S.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return X;
      }),
      (this.setPixelRatio = function (S) {
        S !== void 0 && ((X = S), this.setSize(H, $, !1));
      }),
      (this.getSize = function (S) {
        return S.set(H, $);
      }),
      (this.setSize = function (S, D, V = !0) {
        if (C.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (H = S),
          ($ = D),
          (t.width = Math.floor(S * X)),
          (t.height = Math.floor(D * X)),
          V === !0 && ((t.style.width = S + "px"), (t.style.height = D + "px")),
          this.setViewport(0, 0, S, D);
      }),
      (this.getDrawingBufferSize = function (S) {
        return S.set(H * X, $ * X).floor();
      }),
      (this.setDrawingBufferSize = function (S, D, V) {
        (H = S),
          ($ = D),
          (X = V),
          (t.width = Math.floor(S * V)),
          (t.height = Math.floor(D * V)),
          this.setViewport(0, 0, S, D);
      }),
      (this.getCurrentViewport = function (S) {
        return S.copy(T);
      }),
      (this.getViewport = function (S) {
        return S.copy(K);
      }),
      (this.setViewport = function (S, D, V, I) {
        S.isVector4 ? K.set(S.x, S.y, S.z, S.w) : K.set(S, D, V, I),
          Se.viewport(T.copy(K).multiplyScalar(X).floor());
      }),
      (this.getScissor = function (S) {
        return S.copy(O);
      }),
      (this.setScissor = function (S, D, V, I) {
        S.isVector4 ? O.set(S.x, S.y, S.z, S.w) : O.set(S, D, V, I),
          Se.scissor(Z.copy(O).multiplyScalar(X).floor());
      }),
      (this.getScissorTest = function () {
        return G;
      }),
      (this.setScissorTest = function (S) {
        Se.setScissorTest((G = S));
      }),
      (this.setOpaqueSort = function (S) {
        Y = S;
      }),
      (this.setTransparentSort = function (S) {
        te = S;
      }),
      (this.getClearColor = function (S) {
        return S.copy(B.getClearColor());
      }),
      (this.setClearColor = function () {
        B.setClearColor.apply(B, arguments);
      }),
      (this.getClearAlpha = function () {
        return B.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        B.setClearAlpha.apply(B, arguments);
      }),
      (this.clear = function (S = !0, D = !0, V = !0) {
        let I = 0;
        if (S) {
          let k = !1;
          if (w !== null) {
            const pe = w.texture.format;
            k = pe === eo || pe === Qa || pe === Ja;
          }
          if (k) {
            const pe = w.texture.type,
              ve =
                pe === an ||
                pe === tn ||
                pe === Jr ||
                pe === gn ||
                pe === Za ||
                pe === $a,
              Ee = B.getClearColor(),
              ye = B.getClearAlpha(),
              Ne = Ee.r,
              Me = Ee.g,
              Le = Ee.b;
            ve
              ? ((m[0] = Ne),
                (m[1] = Me),
                (m[2] = Le),
                (m[3] = ye),
                U.clearBufferuiv(U.COLOR, 0, m))
              : ((_[0] = Ne),
                (_[1] = Me),
                (_[2] = Le),
                (_[3] = ye),
                U.clearBufferiv(U.COLOR, 0, _));
          } else I |= U.COLOR_BUFFER_BIT;
        }
        D && (I |= U.DEPTH_BUFFER_BIT),
          V && (I |= U.STENCIL_BUFFER_BIT),
          U.clear(I);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", le, !1),
          t.removeEventListener("webglcontextrestored", z, !1),
          t.removeEventListener("webglcontextcreationerror", ee, !1),
          J.dispose(),
          ie.dispose(),
          De.dispose(),
          ze.dispose(),
          et.dispose(),
          g.dispose(),
          ce.dispose(),
          be.dispose(),
          N.dispose(),
          C.dispose(),
          C.removeEventListener("sessionstart", We),
          C.removeEventListener("sessionend", Ft),
          xe && (xe.dispose(), (xe = null)),
          ut.stop();
      });
    function le(S) {
      S.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (y = !0);
    }
    function z() {
      console.log("THREE.WebGLRenderer: Context Restored."), (y = !1);
      const S = ke.autoReset,
        D = re.enabled,
        V = re.autoUpdate,
        I = re.needsUpdate,
        k = re.type;
      Oe(),
        (ke.autoReset = S),
        (re.enabled = D),
        (re.autoUpdate = V),
        (re.needsUpdate = I),
        (re.type = k);
    }
    function ee(S) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        S.statusMessage
      );
    }
    function se(S) {
      const D = S.target;
      D.removeEventListener("dispose", se), Ie(D);
    }
    function Ie(S) {
      Ge(S), De.remove(S);
    }
    function Ge(S) {
      const D = De.get(S).programs;
      D !== void 0 &&
        (D.forEach(function (V) {
          N.releaseProgram(V);
        }),
        S.isShaderMaterial && N.releaseShaderCache(S));
    }
    (this.renderBufferDirect = function (S, D, V, I, k, pe) {
      D === null && (D = ot);
      const ve = k.isMesh && k.matrixWorld.determinant() < 0,
        Ee = bo(S, D, V, I, k);
      Se.setMaterial(I, ve);
      let ye = V.index,
        Ne = 1;
      if (I.wireframe === !0) {
        if (((ye = E.getWireframeAttribute(V)), ye === void 0)) return;
        Ne = 2;
      }
      const Me = V.drawRange,
        Le = V.attributes.position;
      let Ye = Me.start * Ne,
        Ke = (Me.start + Me.count) * Ne;
      pe !== null &&
        ((Ye = Math.max(Ye, pe.start * Ne)),
        (Ke = Math.min(Ke, (pe.start + pe.count) * Ne))),
        ye !== null
          ? ((Ye = Math.max(Ye, 0)), (Ke = Math.min(Ke, ye.count)))
          : Le != null &&
            ((Ye = Math.max(Ye, 0)), (Ke = Math.min(Ke, Le.count)));
      const Tt = Ke - Ye;
      if (Tt < 0 || Tt === 1 / 0) return;
      ce.setup(k, I, Ee, V, ye);
      let Gt,
        Ze = j;
      if (
        (ye !== null && ((Gt = rt.get(ye)), (Ze = ue), Ze.setIndex(Gt)),
        k.isMesh)
      )
        I.wireframe === !0
          ? (Se.setLineWidth(I.wireframeLinewidth * Ce()), Ze.setMode(U.LINES))
          : Ze.setMode(U.TRIANGLES);
      else if (k.isLine) {
        let Fe = I.linewidth;
        Fe === void 0 && (Fe = 1),
          Se.setLineWidth(Fe * Ce()),
          k.isLineSegments
            ? Ze.setMode(U.LINES)
            : k.isLineLoop
            ? Ze.setMode(U.LINE_LOOP)
            : Ze.setMode(U.LINE_STRIP);
      } else
        k.isPoints
          ? Ze.setMode(U.POINTS)
          : k.isSprite && Ze.setMode(U.TRIANGLES);
      if (k.isInstancedMesh) Ze.renderInstances(Ye, Tt, k.count);
      else if (V.isInstancedBufferGeometry) {
        const Fe = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0,
          rr = Math.min(V.instanceCount, Fe);
        Ze.renderInstances(Ye, Tt, rr);
      } else Ze.render(Ye, Tt);
    }),
      (this.compile = function (S, D) {
        function V(I, k, pe) {
          I.transparent === !0 && I.side === Bt && I.forceSinglePass === !1
            ? ((I.side = gt),
              (I.needsUpdate = !0),
              yi(I, k, pe),
              (I.side = on),
              (I.needsUpdate = !0),
              yi(I, k, pe),
              (I.side = Bt))
            : yi(I, k, pe);
        }
        (p = ie.get(S)),
          p.init(),
          b.push(p),
          S.traverseVisible(function (I) {
            I.isLight &&
              I.layers.test(D.layers) &&
              (p.pushLight(I), I.castShadow && p.pushShadow(I));
          }),
          p.setupLights(M._useLegacyLights),
          S.traverse(function (I) {
            const k = I.material;
            if (k)
              if (Array.isArray(k))
                for (let pe = 0; pe < k.length; pe++) {
                  const ve = k[pe];
                  V(ve, S, I);
                }
              else V(k, S, I);
          }),
          b.pop(),
          (p = null);
      });
    let Ve = null;
    function xt(S) {
      Ve && Ve(S);
    }
    function We() {
      ut.stop();
    }
    function Ft() {
      ut.start();
    }
    const ut = new mo();
    ut.setAnimationLoop(xt),
      typeof self < "u" && ut.setContext(self),
      (this.setAnimationLoop = function (S) {
        (Ve = S), C.setAnimationLoop(S), S === null ? ut.stop() : ut.start();
      }),
      C.addEventListener("sessionstart", We),
      C.addEventListener("sessionend", Ft),
      (this.render = function (S, D) {
        if (D !== void 0 && D.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (y === !0) return;
        S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
          D.parent === null &&
            D.matrixWorldAutoUpdate === !0 &&
            D.updateMatrixWorld(),
          C.enabled === !0 &&
            C.isPresenting === !0 &&
            (C.cameraAutoUpdate === !0 && C.updateCamera(D),
            (D = C.getCamera())),
          S.isScene === !0 && S.onBeforeRender(M, S, D, w),
          (p = ie.get(S, b.length)),
          p.init(),
          b.push(p),
          Te.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
          he.setFromProjectionMatrix(Te),
          (fe = this.localClippingEnabled),
          (de = me.init(this.clippingPlanes, fe)),
          (v = J.get(S, h.length)),
          v.init(),
          h.push(v),
          as(S, D, 0, M.sortObjects),
          v.finish(),
          M.sortObjects === !0 && v.sort(Y, te),
          this.info.render.frame++,
          de === !0 && me.beginShadows();
        const V = p.state.shadowsArray;
        if (
          (re.render(V, S, D),
          de === !0 && me.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          B.render(v, S),
          p.setupLights(M._useLegacyLights),
          D.isArrayCamera)
        ) {
          const I = D.cameras;
          for (let k = 0, pe = I.length; k < pe; k++) {
            const ve = I[k];
            os(v, S, ve, ve.viewport);
          }
        } else os(v, S, D);
        w !== null &&
          (Re.updateMultisampleRenderTarget(w), Re.updateRenderTargetMipmap(w)),
          S.isScene === !0 && S.onAfterRender(M, S, D),
          ce.resetDefaultState(),
          (q = -1),
          (x = null),
          b.pop(),
          b.length > 0 ? (p = b[b.length - 1]) : (p = null),
          h.pop(),
          h.length > 0 ? (v = h[h.length - 1]) : (v = null);
      });
    function as(S, D, V, I) {
      if (S.visible === !1) return;
      if (S.layers.test(D.layers)) {
        if (S.isGroup) V = S.renderOrder;
        else if (S.isLOD) S.autoUpdate === !0 && S.update(D);
        else if (S.isLight) p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || he.intersectsSprite(S)) {
            I && Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);
            const ve = g.update(S),
              Ee = S.material;
            Ee.visible && v.push(S, ve, Ee, V, Be.z, null);
          }
        } else if (
          (S.isMesh || S.isLine || S.isPoints) &&
          (!S.frustumCulled || he.intersectsObject(S))
        ) {
          const ve = g.update(S),
            Ee = S.material;
          if (
            (I &&
              (S.boundingSphere !== void 0
                ? (S.boundingSphere === null && S.computeBoundingSphere(),
                  Be.copy(S.boundingSphere.center))
                : (ve.boundingSphere === null && ve.computeBoundingSphere(),
                  Be.copy(ve.boundingSphere.center)),
              Be.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),
            Array.isArray(Ee))
          ) {
            const ye = ve.groups;
            for (let Ne = 0, Me = ye.length; Ne < Me; Ne++) {
              const Le = ye[Ne],
                Ye = Ee[Le.materialIndex];
              Ye && Ye.visible && v.push(S, ve, Ye, V, Be.z, Le);
            }
          } else Ee.visible && v.push(S, ve, Ee, V, Be.z, null);
        }
      }
      const pe = S.children;
      for (let ve = 0, Ee = pe.length; ve < Ee; ve++) as(pe[ve], D, V, I);
    }
    function os(S, D, V, I) {
      const k = S.opaque,
        pe = S.transmissive,
        ve = S.transparent;
      p.setupLightsView(V),
        de === !0 && me.setGlobalState(M.clippingPlanes, V),
        pe.length > 0 && To(k, pe, D, V),
        I && Se.viewport(T.copy(I)),
        k.length > 0 && Ei(k, D, V),
        pe.length > 0 && Ei(pe, D, V),
        ve.length > 0 && Ei(ve, D, V),
        Se.buffers.depth.setTest(!0),
        Se.buffers.depth.setMask(!0),
        Se.buffers.color.setMask(!0),
        Se.setPolygonOffset(!1);
    }
    function To(S, D, V, I) {
      const k = Ae.isWebGL2;
      xe === null &&
        (xe = new Mn(1, 1, {
          generateMipmaps: !0,
          type: _e.has("EXT_color_buffer_half_float") ? fi : an,
          minFilter: di,
          samples: k ? 4 : 0,
        })),
        M.getDrawingBufferSize(ge),
        k ? xe.setSize(ge.x, ge.y) : xe.setSize(ji(ge.x), ji(ge.y));
      const pe = M.getRenderTarget();
      M.setRenderTarget(xe),
        M.getClearColor(F),
        (W = M.getClearAlpha()),
        W < 1 && M.setClearColor(16777215, 0.5),
        M.clear();
      const ve = M.toneMapping;
      (M.toneMapping = sn),
        Ei(S, V, I),
        Re.updateMultisampleRenderTarget(xe),
        Re.updateRenderTargetMipmap(xe);
      let Ee = !1;
      for (let ye = 0, Ne = D.length; ye < Ne; ye++) {
        const Me = D[ye],
          Le = Me.object,
          Ye = Me.geometry,
          Ke = Me.material,
          Tt = Me.group;
        if (Ke.side === Bt && Le.layers.test(I.layers)) {
          const Gt = Ke.side;
          (Ke.side = gt),
            (Ke.needsUpdate = !0),
            ls(Le, V, I, Ye, Ke, Tt),
            (Ke.side = Gt),
            (Ke.needsUpdate = !0),
            (Ee = !0);
        }
      }
      Ee === !0 &&
        (Re.updateMultisampleRenderTarget(xe), Re.updateRenderTargetMipmap(xe)),
        M.setRenderTarget(pe),
        M.setClearColor(F, W),
        (M.toneMapping = ve);
    }
    function Ei(S, D, V) {
      const I = D.isScene === !0 ? D.overrideMaterial : null;
      for (let k = 0, pe = S.length; k < pe; k++) {
        const ve = S[k],
          Ee = ve.object,
          ye = ve.geometry,
          Ne = I === null ? ve.material : I,
          Me = ve.group;
        Ee.layers.test(V.layers) && ls(Ee, D, V, ye, Ne, Me);
      }
    }
    function ls(S, D, V, I, k, pe) {
      S.onBeforeRender(M, D, V, I, k, pe),
        S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, S.matrixWorld),
        S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
        k.onBeforeRender(M, D, V, I, S, pe),
        k.transparent === !0 && k.side === Bt && k.forceSinglePass === !1
          ? ((k.side = gt),
            (k.needsUpdate = !0),
            M.renderBufferDirect(V, D, I, k, S, pe),
            (k.side = on),
            (k.needsUpdate = !0),
            M.renderBufferDirect(V, D, I, k, S, pe),
            (k.side = Bt))
          : M.renderBufferDirect(V, D, I, k, S, pe),
        S.onAfterRender(M, D, V, I, k, pe);
    }
    function yi(S, D, V) {
      D.isScene !== !0 && (D = ot);
      const I = De.get(S),
        k = p.state.lights,
        pe = p.state.shadowsArray,
        ve = k.state.version,
        Ee = N.getParameters(S, k.state, pe, D, V),
        ye = N.getProgramCacheKey(Ee);
      let Ne = I.programs;
      (I.environment = S.isMeshStandardMaterial ? D.environment : null),
        (I.fog = D.fog),
        (I.envMap = (S.isMeshStandardMaterial ? et : ze).get(
          S.envMap || I.environment
        )),
        Ne === void 0 &&
          (S.addEventListener("dispose", se),
          (Ne = new Map()),
          (I.programs = Ne));
      let Me = Ne.get(ye);
      if (Me !== void 0) {
        if (I.currentProgram === Me && I.lightsStateVersion === ve)
          return cs(S, Ee), Me;
      } else
        (Ee.uniforms = N.getUniforms(S)),
          S.onBuild(V, Ee, M),
          S.onBeforeCompile(Ee, M),
          (Me = N.acquireProgram(Ee, ye)),
          Ne.set(ye, Me),
          (I.uniforms = Ee.uniforms);
      const Le = I.uniforms;
      ((!S.isShaderMaterial && !S.isRawShaderMaterial) || S.clipping === !0) &&
        (Le.clippingPlanes = me.uniform),
        cs(S, Ee),
        (I.needsLights = wo(S)),
        (I.lightsStateVersion = ve),
        I.needsLights &&
          ((Le.ambientLightColor.value = k.state.ambient),
          (Le.lightProbe.value = k.state.probe),
          (Le.directionalLights.value = k.state.directional),
          (Le.directionalLightShadows.value = k.state.directionalShadow),
          (Le.spotLights.value = k.state.spot),
          (Le.spotLightShadows.value = k.state.spotShadow),
          (Le.rectAreaLights.value = k.state.rectArea),
          (Le.ltc_1.value = k.state.rectAreaLTC1),
          (Le.ltc_2.value = k.state.rectAreaLTC2),
          (Le.pointLights.value = k.state.point),
          (Le.pointLightShadows.value = k.state.pointShadow),
          (Le.hemisphereLights.value = k.state.hemi),
          (Le.directionalShadowMap.value = k.state.directionalShadowMap),
          (Le.directionalShadowMatrix.value = k.state.directionalShadowMatrix),
          (Le.spotShadowMap.value = k.state.spotShadowMap),
          (Le.spotLightMatrix.value = k.state.spotLightMatrix),
          (Le.spotLightMap.value = k.state.spotLightMap),
          (Le.pointShadowMap.value = k.state.pointShadowMap),
          (Le.pointShadowMatrix.value = k.state.pointShadowMatrix));
      const Ye = Me.getUniforms(),
        Ke = qi.seqWithValue(Ye.seq, Le);
      return (I.currentProgram = Me), (I.uniformsList = Ke), Me;
    }
    function cs(S, D) {
      const V = De.get(S);
      (V.outputColorSpace = D.outputColorSpace),
        (V.instancing = D.instancing),
        (V.instancingColor = D.instancingColor),
        (V.skinning = D.skinning),
        (V.morphTargets = D.morphTargets),
        (V.morphNormals = D.morphNormals),
        (V.morphColors = D.morphColors),
        (V.morphTargetsCount = D.morphTargetsCount),
        (V.numClippingPlanes = D.numClippingPlanes),
        (V.numIntersection = D.numClipIntersection),
        (V.vertexAlphas = D.vertexAlphas),
        (V.vertexTangents = D.vertexTangents),
        (V.toneMapping = D.toneMapping);
    }
    function bo(S, D, V, I, k) {
      D.isScene !== !0 && (D = ot), Re.resetTextureUnits();
      const pe = D.fog,
        ve = I.isMeshStandardMaterial ? D.environment : null,
        Ee =
          w === null
            ? M.outputColorSpace
            : w.isXRRenderTarget === !0
            ? w.texture.colorSpace
            : Ht,
        ye = (I.isMeshStandardMaterial ? et : ze).get(I.envMap || ve),
        Ne =
          I.vertexColors === !0 &&
          !!V.attributes.color &&
          V.attributes.color.itemSize === 4,
        Me = !!V.attributes.tangent && (!!I.normalMap || I.anisotropy > 0),
        Le = !!V.morphAttributes.position,
        Ye = !!V.morphAttributes.normal,
        Ke = !!V.morphAttributes.color;
      let Tt = sn;
      I.toneMapped &&
        (w === null || w.isXRRenderTarget === !0) &&
        (Tt = M.toneMapping);
      const Gt =
          V.morphAttributes.position ||
          V.morphAttributes.normal ||
          V.morphAttributes.color,
        Ze = Gt !== void 0 ? Gt.length : 0,
        Fe = De.get(I),
        rr = p.state.lights;
      if (de === !0 && (fe === !0 || S !== x)) {
        const Mt = S === x && I.id === q;
        me.setState(I, S, Mt);
      }
      let $e = !1;
      I.version === Fe.__version
        ? ((Fe.needsLights && Fe.lightsStateVersion !== rr.state.version) ||
            Fe.outputColorSpace !== Ee ||
            (k.isInstancedMesh && Fe.instancing === !1) ||
            (!k.isInstancedMesh && Fe.instancing === !0) ||
            (k.isSkinnedMesh && Fe.skinning === !1) ||
            (!k.isSkinnedMesh && Fe.skinning === !0) ||
            (k.isInstancedMesh &&
              Fe.instancingColor === !0 &&
              k.instanceColor === null) ||
            (k.isInstancedMesh &&
              Fe.instancingColor === !1 &&
              k.instanceColor !== null) ||
            Fe.envMap !== ye ||
            (I.fog === !0 && Fe.fog !== pe) ||
            (Fe.numClippingPlanes !== void 0 &&
              (Fe.numClippingPlanes !== me.numPlanes ||
                Fe.numIntersection !== me.numIntersection)) ||
            Fe.vertexAlphas !== Ne ||
            Fe.vertexTangents !== Me ||
            Fe.morphTargets !== Le ||
            Fe.morphNormals !== Ye ||
            Fe.morphColors !== Ke ||
            Fe.toneMapping !== Tt ||
            (Ae.isWebGL2 === !0 && Fe.morphTargetsCount !== Ze)) &&
          ($e = !0)
        : (($e = !0), (Fe.__version = I.version));
      let ln = Fe.currentProgram;
      $e === !0 && (ln = yi(I, D, k));
      let us = !1,
        ti = !1,
        sr = !1;
      const ht = ln.getUniforms(),
        cn = Fe.uniforms;
      if (
        (Se.useProgram(ln.program) && ((us = !0), (ti = !0), (sr = !0)),
        I.id !== q && ((q = I.id), (ti = !0)),
        us || x !== S)
      ) {
        ht.setValue(U, "projectionMatrix", S.projectionMatrix),
          ht.setValue(U, "viewMatrix", S.matrixWorldInverse);
        const Mt = ht.map.cameraPosition;
        Mt !== void 0 &&
          Mt.setValue(U, Be.setFromMatrixPosition(S.matrixWorld)),
          Ae.logarithmicDepthBuffer &&
            ht.setValue(
              U,
              "logDepthBufFC",
              2 / (Math.log(S.far + 1) / Math.LN2)
            ),
          (I.isMeshPhongMaterial ||
            I.isMeshToonMaterial ||
            I.isMeshLambertMaterial ||
            I.isMeshBasicMaterial ||
            I.isMeshStandardMaterial ||
            I.isShaderMaterial) &&
            ht.setValue(U, "isOrthographic", S.isOrthographicCamera === !0),
          x !== S && ((x = S), (ti = !0), (sr = !0));
      }
      if (k.isSkinnedMesh) {
        ht.setOptional(U, k, "bindMatrix"),
          ht.setOptional(U, k, "bindMatrixInverse");
        const Mt = k.skeleton;
        Mt &&
          (Ae.floatVertexTextures
            ? (Mt.boneTexture === null && Mt.computeBoneTexture(),
              ht.setValue(U, "boneTexture", Mt.boneTexture, Re),
              ht.setValue(U, "boneTextureSize", Mt.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const ar = V.morphAttributes;
      if (
        ((ar.position !== void 0 ||
          ar.normal !== void 0 ||
          (ar.color !== void 0 && Ae.isWebGL2 === !0)) &&
          R.update(k, V, ln),
        (ti || Fe.receiveShadow !== k.receiveShadow) &&
          ((Fe.receiveShadow = k.receiveShadow),
          ht.setValue(U, "receiveShadow", k.receiveShadow)),
        I.isMeshGouraudMaterial &&
          I.envMap !== null &&
          ((cn.envMap.value = ye),
          (cn.flipEnvMap.value =
            ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1)),
        ti &&
          (ht.setValue(U, "toneMappingExposure", M.toneMappingExposure),
          Fe.needsLights && Ao(cn, sr),
          pe && I.fog === !0 && ne.refreshFogUniforms(cn, pe),
          ne.refreshMaterialUniforms(cn, I, X, $, xe),
          qi.upload(U, Fe.uniformsList, cn, Re)),
        I.isShaderMaterial &&
          I.uniformsNeedUpdate === !0 &&
          (qi.upload(U, Fe.uniformsList, cn, Re), (I.uniformsNeedUpdate = !1)),
        I.isSpriteMaterial && ht.setValue(U, "center", k.center),
        ht.setValue(U, "modelViewMatrix", k.modelViewMatrix),
        ht.setValue(U, "normalMatrix", k.normalMatrix),
        ht.setValue(U, "modelMatrix", k.matrixWorld),
        I.isShaderMaterial || I.isRawShaderMaterial)
      ) {
        const Mt = I.uniformsGroups;
        for (let or = 0, Ro = Mt.length; or < Ro; or++)
          if (Ae.isWebGL2) {
            const hs = Mt[or];
            be.update(hs, ln), be.bind(hs, ln);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return ln;
    }
    function Ao(S, D) {
      (S.ambientLightColor.needsUpdate = D),
        (S.lightProbe.needsUpdate = D),
        (S.directionalLights.needsUpdate = D),
        (S.directionalLightShadows.needsUpdate = D),
        (S.pointLights.needsUpdate = D),
        (S.pointLightShadows.needsUpdate = D),
        (S.spotLights.needsUpdate = D),
        (S.spotLightShadows.needsUpdate = D),
        (S.rectAreaLights.needsUpdate = D),
        (S.hemisphereLights.needsUpdate = D);
    }
    function wo(S) {
      return (
        S.isMeshLambertMaterial ||
        S.isMeshToonMaterial ||
        S.isMeshPhongMaterial ||
        S.isMeshStandardMaterial ||
        S.isShadowMaterial ||
        (S.isShaderMaterial && S.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return A;
    }),
      (this.getActiveMipmapLevel = function () {
        return P;
      }),
      (this.getRenderTarget = function () {
        return w;
      }),
      (this.setRenderTargetTextures = function (S, D, V) {
        (De.get(S.texture).__webglTexture = D),
          (De.get(S.depthTexture).__webglTexture = V);
        const I = De.get(S);
        (I.__hasExternalTextures = !0),
          I.__hasExternalTextures &&
            ((I.__autoAllocateDepthBuffer = V === void 0),
            I.__autoAllocateDepthBuffer ||
              (_e.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (I.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (S, D) {
        const V = De.get(S);
        (V.__webglFramebuffer = D), (V.__useDefaultFramebuffer = D === void 0);
      }),
      (this.setRenderTarget = function (S, D = 0, V = 0) {
        (w = S), (A = D), (P = V);
        let I = !0,
          k = null,
          pe = !1,
          ve = !1;
        if (S) {
          const ye = De.get(S);
          ye.__useDefaultFramebuffer !== void 0
            ? (Se.bindFramebuffer(U.FRAMEBUFFER, null), (I = !1))
            : ye.__webglFramebuffer === void 0
            ? Re.setupRenderTarget(S)
            : ye.__hasExternalTextures &&
              Re.rebindTextures(
                S,
                De.get(S.texture).__webglTexture,
                De.get(S.depthTexture).__webglTexture
              );
          const Ne = S.texture;
          (Ne.isData3DTexture ||
            Ne.isDataArrayTexture ||
            Ne.isCompressedArrayTexture) &&
            (ve = !0);
          const Me = De.get(S).__webglFramebuffer;
          S.isWebGLCubeRenderTarget
            ? (Array.isArray(Me[D]) ? (k = Me[D][V]) : (k = Me[D]), (pe = !0))
            : Ae.isWebGL2 && S.samples > 0 && Re.useMultisampledRTT(S) === !1
            ? (k = De.get(S).__webglMultisampledFramebuffer)
            : Array.isArray(Me)
            ? (k = Me[V])
            : (k = Me),
            T.copy(S.viewport),
            Z.copy(S.scissor),
            (Q = S.scissorTest);
        } else
          T.copy(K).multiplyScalar(X).floor(),
            Z.copy(O).multiplyScalar(X).floor(),
            (Q = G);
        if (
          (Se.bindFramebuffer(U.FRAMEBUFFER, k) &&
            Ae.drawBuffers &&
            I &&
            Se.drawBuffers(S, k),
          Se.viewport(T),
          Se.scissor(Z),
          Se.setScissorTest(Q),
          pe)
        ) {
          const ye = De.get(S.texture);
          U.framebufferTexture2D(
            U.FRAMEBUFFER,
            U.COLOR_ATTACHMENT0,
            U.TEXTURE_CUBE_MAP_POSITIVE_X + D,
            ye.__webglTexture,
            V
          );
        } else if (ve) {
          const ye = De.get(S.texture),
            Ne = D || 0;
          U.framebufferTextureLayer(
            U.FRAMEBUFFER,
            U.COLOR_ATTACHMENT0,
            ye.__webglTexture,
            V || 0,
            Ne
          );
        }
        q = -1;
      }),
      (this.readRenderTargetPixels = function (S, D, V, I, k, pe, ve) {
        if (!(S && S.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let Ee = De.get(S).__webglFramebuffer;
        if ((S.isWebGLCubeRenderTarget && ve !== void 0 && (Ee = Ee[ve]), Ee)) {
          Se.bindFramebuffer(U.FRAMEBUFFER, Ee);
          try {
            const ye = S.texture,
              Ne = ye.format,
              Me = ye.type;
            if (
              Ne !== Ut &&
              ae.convert(Ne) !==
                U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Le =
              Me === fi &&
              (_e.has("EXT_color_buffer_half_float") ||
                (Ae.isWebGL2 && _e.has("EXT_color_buffer_float")));
            if (
              Me !== an &&
              ae.convert(Me) !==
                U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Me === nn &&
                (Ae.isWebGL2 ||
                  _e.has("OES_texture_float") ||
                  _e.has("WEBGL_color_buffer_float"))
              ) &&
              !Le
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            D >= 0 &&
              D <= S.width - I &&
              V >= 0 &&
              V <= S.height - k &&
              U.readPixels(D, V, I, k, ae.convert(Ne), ae.convert(Me), pe);
          } finally {
            const ye = w !== null ? De.get(w).__webglFramebuffer : null;
            Se.bindFramebuffer(U.FRAMEBUFFER, ye);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (S, D, V = 0) {
        const I = Math.pow(2, -V),
          k = Math.floor(D.image.width * I),
          pe = Math.floor(D.image.height * I);
        Re.setTexture2D(D, 0),
          U.copyTexSubImage2D(U.TEXTURE_2D, V, 0, 0, S.x, S.y, k, pe),
          Se.unbindTexture();
      }),
      (this.copyTextureToTexture = function (S, D, V, I = 0) {
        const k = D.image.width,
          pe = D.image.height,
          ve = ae.convert(V.format),
          Ee = ae.convert(V.type);
        Re.setTexture2D(V, 0),
          U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, V.flipY),
          U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, V.premultiplyAlpha),
          U.pixelStorei(U.UNPACK_ALIGNMENT, V.unpackAlignment),
          D.isDataTexture
            ? U.texSubImage2D(
                U.TEXTURE_2D,
                I,
                S.x,
                S.y,
                k,
                pe,
                ve,
                Ee,
                D.image.data
              )
            : D.isCompressedTexture
            ? U.compressedTexSubImage2D(
                U.TEXTURE_2D,
                I,
                S.x,
                S.y,
                D.mipmaps[0].width,
                D.mipmaps[0].height,
                ve,
                D.mipmaps[0].data
              )
            : U.texSubImage2D(U.TEXTURE_2D, I, S.x, S.y, ve, Ee, D.image),
          I === 0 && V.generateMipmaps && U.generateMipmap(U.TEXTURE_2D),
          Se.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (S, D, V, I, k = 0) {
        if (M.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const pe = S.max.x - S.min.x + 1,
          ve = S.max.y - S.min.y + 1,
          Ee = S.max.z - S.min.z + 1,
          ye = ae.convert(I.format),
          Ne = ae.convert(I.type);
        let Me;
        if (I.isData3DTexture) Re.setTexture3D(I, 0), (Me = U.TEXTURE_3D);
        else if (I.isDataArrayTexture)
          Re.setTexture2DArray(I, 0), (Me = U.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, I.flipY),
          U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
          U.pixelStorei(U.UNPACK_ALIGNMENT, I.unpackAlignment);
        const Le = U.getParameter(U.UNPACK_ROW_LENGTH),
          Ye = U.getParameter(U.UNPACK_IMAGE_HEIGHT),
          Ke = U.getParameter(U.UNPACK_SKIP_PIXELS),
          Tt = U.getParameter(U.UNPACK_SKIP_ROWS),
          Gt = U.getParameter(U.UNPACK_SKIP_IMAGES),
          Ze = V.isCompressedTexture ? V.mipmaps[0] : V.image;
        U.pixelStorei(U.UNPACK_ROW_LENGTH, Ze.width),
          U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, Ze.height),
          U.pixelStorei(U.UNPACK_SKIP_PIXELS, S.min.x),
          U.pixelStorei(U.UNPACK_SKIP_ROWS, S.min.y),
          U.pixelStorei(U.UNPACK_SKIP_IMAGES, S.min.z),
          V.isDataTexture || V.isData3DTexture
            ? U.texSubImage3D(Me, k, D.x, D.y, D.z, pe, ve, Ee, ye, Ne, Ze.data)
            : V.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              U.compressedTexSubImage3D(
                Me,
                k,
                D.x,
                D.y,
                D.z,
                pe,
                ve,
                Ee,
                ye,
                Ze.data
              ))
            : U.texSubImage3D(Me, k, D.x, D.y, D.z, pe, ve, Ee, ye, Ne, Ze),
          U.pixelStorei(U.UNPACK_ROW_LENGTH, Le),
          U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, Ye),
          U.pixelStorei(U.UNPACK_SKIP_PIXELS, Ke),
          U.pixelStorei(U.UNPACK_SKIP_ROWS, Tt),
          U.pixelStorei(U.UNPACK_SKIP_IMAGES, Gt),
          k === 0 && I.generateMipmaps && U.generateMipmap(Me),
          Se.unbindTexture();
      }),
      (this.initTexture = function (S) {
        S.isCubeTexture
          ? Re.setTextureCube(S, 0)
          : S.isData3DTexture
          ? Re.setTexture3D(S, 0)
          : S.isDataArrayTexture || S.isCompressedArrayTexture
          ? Re.setTexture2DArray(S, 0)
          : Re.setTexture2D(S, 0),
          Se.unbindTexture();
      }),
      (this.resetState = function () {
        (A = 0), (P = 0), (w = null), Se.reset(), ce.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Kt;
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
      this.outputColorSpace === Xe ? vn : to
    );
  }
  set outputEncoding(e) {
    console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
    ),
      (this.outputColorSpace = e === vn ? Xe : Ht);
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class $f extends Mo {}
$f.prototype.isWebGL1Renderer = !0;
class Jf extends mt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
}
class rs extends Qn {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new He(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ca = new L(),
  La = new L(),
  Pa = new je(),
  Fr = new es(),
  Wi = new Ji();
class So extends mt {
  constructor(e = new Nt(), t = new rs()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Ca.fromBufferAttribute(t, r - 1),
          La.fromBufferAttribute(t, r),
          (n[r] = n[r - 1]),
          (n[r] += Ca.distanceTo(La));
      e.setAttribute("lineDistance", new vt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Line.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Wi.copy(n.boundingSphere),
      Wi.applyMatrix4(r),
      (Wi.radius += s),
      e.ray.intersectsSphere(Wi) === !1)
    )
      return;
    Pa.copy(r).invert(), Fr.copy(e.ray).applyMatrix4(Pa);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = a * a,
      c = new L(),
      u = new L(),
      d = new L(),
      f = new L(),
      m = this.isLineSegments ? 2 : 1,
      _ = n.index,
      p = n.attributes.position;
    if (_ !== null) {
      const h = Math.max(0, o.start),
        b = Math.min(_.count, o.start + o.count);
      for (let M = h, y = b - 1; M < y; M += m) {
        const A = _.getX(M),
          P = _.getX(M + 1);
        if (
          (c.fromBufferAttribute(p, A),
          u.fromBufferAttribute(p, P),
          Fr.distanceSqToSegment(c, u, f, d) > l)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const q = e.ray.origin.distanceTo(f);
        q < e.near ||
          q > e.far ||
          t.push({
            distance: q,
            point: d.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const h = Math.max(0, o.start),
        b = Math.min(p.count, o.start + o.count);
      for (let M = h, y = b - 1; M < y; M += m) {
        if (
          (c.fromBufferAttribute(p, M),
          u.fromBufferAttribute(p, M + 1),
          Fr.distanceSqToSegment(c, u, f, d) > l)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const P = e.ray.origin.distanceTo(f);
        P < e.near ||
          P > e.far ||
          t.push({
            distance: P,
            point: d.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
}
const Da = new L(),
  Ua = new L();
class Qf extends So {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Da.fromBufferAttribute(t, r),
          Ua.fromBufferAttribute(t, r + 1),
          (n[r] = r === 0 ? 0 : n[r - 1]),
          (n[r + 1] = n[r] + Da.distanceTo(Ua));
      e.setAttribute("lineDistance", new vt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class ep {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      r = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      (n = this.getPoint(o / e)), (s += n.distanceTo(r)), t.push(s), (r = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let o;
    t ? (o = t) : (o = e * n[s - 1]);
    let a = 0,
      l = s - 1,
      c;
    for (; a <= l; )
      if (((r = Math.floor(a + (l - a) / 2)), (c = n[r] - o), c < 0)) a = r + 1;
      else if (c > 0) l = r - 1;
      else {
        l = r;
        break;
      }
    if (((r = l), n[r] === o)) return r / (s - 1);
    const u = n[r],
      f = n[r + 1] - u,
      m = (o - u) / f;
    return (r + m) / (s - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r),
      a = this.getPoint(s),
      l = t || (o.isVector2 ? new we() : new L());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new L(),
      r = [],
      s = [],
      o = [],
      a = new L(),
      l = new je();
    for (let m = 0; m <= e; m++) {
      const _ = m / e;
      r[m] = this.getTangentAt(_, new L());
    }
    (s[0] = new L()), (o[0] = new L());
    let c = Number.MAX_VALUE;
    const u = Math.abs(r[0].x),
      d = Math.abs(r[0].y),
      f = Math.abs(r[0].z);
    u <= c && ((c = u), n.set(1, 0, 0)),
      d <= c && ((c = d), n.set(0, 1, 0)),
      f <= c && n.set(0, 0, 1),
      a.crossVectors(r[0], n).normalize(),
      s[0].crossVectors(r[0], a),
      o[0].crossVectors(r[0], s[0]);
    for (let m = 1; m <= e; m++) {
      if (
        ((s[m] = s[m - 1].clone()),
        (o[m] = o[m - 1].clone()),
        a.crossVectors(r[m - 1], r[m]),
        a.length() > Number.EPSILON)
      ) {
        a.normalize();
        const _ = Math.acos(at(r[m - 1].dot(r[m]), -1, 1));
        s[m].applyMatrix4(l.makeRotationAxis(a, _));
      }
      o[m].crossVectors(r[m], s[m]);
    }
    if (t === !0) {
      let m = Math.acos(at(s[0].dot(s[e]), -1, 1));
      (m /= e), r[0].dot(a.crossVectors(s[0], s[e])) > 0 && (m = -m);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(l.makeRotationAxis(r[_], m * _)),
          o[_].crossVectors(r[_], s[_]);
    }
    return { tangents: r, normals: s, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
function tp(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function np(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function ip(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function rp(i, e) {
  return i * i * i * e;
}
function Or(i, e, t, n, r) {
  return tp(i, e) + np(i, t) + ip(i, n) + rp(i, r);
}
class sp extends ep {
  constructor(e = new L(), t = new L(), n = new L(), r = new L()) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = r);
  }
  getPoint(e, t = new L()) {
    const n = t,
      r = this.v0,
      s = this.v1,
      o = this.v2,
      a = this.v3;
    return (
      n.set(
        Or(e, r.x, s.x, o.x, a.x),
        Or(e, r.y, s.y, o.y, a.y),
        Or(e, r.z, s.z, o.z, a.z)
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class Mi extends Nt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    r = 0,
    s = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: s,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [],
      d = new L(),
      f = new L(),
      m = [],
      _ = [],
      v = [],
      p = [];
    for (let h = 0; h <= n; h++) {
      const b = [],
        M = h / n;
      let y = 0;
      h === 0 && o === 0
        ? (y = 0.5 / t)
        : h === n && l === Math.PI && (y = -0.5 / t);
      for (let A = 0; A <= t; A++) {
        const P = A / t;
        (d.x = -e * Math.cos(r + P * s) * Math.sin(o + M * a)),
          (d.y = e * Math.cos(o + M * a)),
          (d.z = e * Math.sin(r + P * s) * Math.sin(o + M * a)),
          _.push(d.x, d.y, d.z),
          f.copy(d).normalize(),
          v.push(f.x, f.y, f.z),
          p.push(P + y, 1 - M),
          b.push(c++);
      }
      u.push(b);
    }
    for (let h = 0; h < n; h++)
      for (let b = 0; b < t; b++) {
        const M = u[h][b + 1],
          y = u[h][b],
          A = u[h + 1][b],
          P = u[h + 1][b + 1];
        (h !== 0 || o > 0) && m.push(M, y, P),
          (h !== n - 1 || l < Math.PI) && m.push(y, A, P);
      }
    this.setIndex(m),
      this.setAttribute("position", new vt(_, 3)),
      this.setAttribute("normal", new vt(v, 3)),
      this.setAttribute("uv", new vt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Mi(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ap extends Qn {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new He(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new He(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = no),
      (this.normalScale = new we(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const Ia = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class op {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          r.onProgress !== void 0 && r.onProgress(u, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, d) {
        return c.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = c.indexOf(u);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, f = c.length; d < f; d += 2) {
          const m = c[d],
            _ = c[d + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return _;
        }
        return null;
      });
  }
}
const lp = new op();
class ss {
  constructor(e) {
    (this.manager = e !== void 0 ? e : lp),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
ss.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class cp extends ss {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = Ia.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = mi("img");
    function l() {
      u(), Ia.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      u(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class up extends ss {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new _t(),
      o = new cp(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r
      ),
      s
    );
  }
}
class hp extends mt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new He(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Br = new je(),
  Na = new L(),
  Fa = new L();
class dp {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new we(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new je()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new ts()),
      (this._frameExtents = new we(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new qe(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Na.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Na),
      Fa.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Fa),
      t.updateMatrixWorld(),
      Br.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Br),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Br);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const Oa = new je(),
  ai = new L(),
  zr = new L();
class fp extends dp {
  constructor() {
    super(new yt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new we(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new qe(2, 1, 1, 1),
        new qe(0, 1, 1, 1),
        new qe(3, 1, 1, 1),
        new qe(1, 1, 1, 1),
        new qe(3, 0, 1, 1),
        new qe(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new L(1, 0, 0),
        new L(-1, 0, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
        new L(0, 1, 0),
        new L(0, -1, 0),
      ]),
      (this._cubeUps = [
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      r = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      ai.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(ai),
      zr.copy(n.position),
      zr.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(zr),
      n.updateMatrixWorld(),
      r.makeTranslation(-ai.x, -ai.y, -ai.z),
      Oa.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Oa);
  }
}
class pp extends hp {
  constructor(e, t, n = 0, r = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = r),
      (this.shadow = new fp());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Ba {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(at(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class mp extends It {
  constructor(e, t, n) {
    const r = new Mi(t, 4, 2),
      s = new er({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(r, s),
      (this.light = e),
      (this.color = n),
      (this.type = "PointLightHelper"),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.color !== void 0
        ? this.material.color.set(this.color)
        : this.material.color.copy(this.light.color);
  }
}
class gp extends Qf {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      r = new Nt();
    r.setAttribute("position", new vt(t, 3)),
      r.setAttribute("color", new vt(n, 3));
    const s = new rs({ vertexColors: !0, toneMapped: !1 });
    super(r, s), (this.type = "AxesHelper");
  }
  setColors(e, t, n) {
    const r = new He(),
      s = this.geometry.attributes.color.array;
    return (
      r.set(e),
      r.toArray(s, 0),
      r.toArray(s, 3),
      r.set(t),
      r.toArray(s, 6),
      r.toArray(s, 9),
      r.set(n),
      r.toArray(s, 12),
      r.toArray(s, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: $r } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = $r));
const za = { type: "change" },
  Hr = { type: "start" },
  Ha = { type: "end" },
  Xi = new es(),
  Ga = new en(),
  _p = Math.cos(70 * Hl.DEG2RAD);
class vp extends Tn {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new L()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: bn.ROTATE,
        MIDDLE: bn.DOLLY,
        RIGHT: bn.PAN,
      }),
      (this.touches = { ONE: An.ROTATE, TWO: An.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (R) {
        R.addEventListener("keydown", g), (this._domElementKeyEvents = R);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", g),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(za),
          n.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const R = new L(),
          j = new Sn().setFromUnitVectors(e.up, new L(0, 1, 0)),
          ue = j.clone().invert(),
          ae = new L(),
          ce = new Sn(),
          be = new L(),
          Oe = 2 * Math.PI;
        return function (le = null) {
          const z = n.object.position;
          R.copy(z).sub(n.target),
            R.applyQuaternion(j),
            a.setFromVector3(R),
            n.autoRotate && s === r.NONE && Z(x(le)),
            n.enableDamping
              ? ((a.theta += l.theta * n.dampingFactor),
                (a.phi += l.phi * n.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let ee = n.minAzimuthAngle,
            se = n.maxAzimuthAngle;
          isFinite(ee) &&
            isFinite(se) &&
            (ee < -Math.PI ? (ee += Oe) : ee > Math.PI && (ee -= Oe),
            se < -Math.PI ? (se += Oe) : se > Math.PI && (se -= Oe),
            ee <= se
              ? (a.theta = Math.max(ee, Math.min(se, a.theta)))
              : (a.theta =
                  a.theta > (ee + se) / 2
                    ? Math.max(ee, a.theta)
                    : Math.min(se, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            (n.zoomToCursor && P) || n.object.isOrthographicCamera
              ? (a.radius = te(a.radius))
              : (a.radius = te(a.radius * c)),
            R.setFromSpherical(a),
            R.applyQuaternion(ue),
            z.copy(n.target).add(R),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0));
          let Ie = !1;
          if (n.zoomToCursor && P) {
            let Ge = null;
            if (n.object.isPerspectiveCamera) {
              const Ve = R.length();
              Ge = te(Ve * c);
              const xt = Ve - Ge;
              n.object.position.addScaledVector(y, xt),
                n.object.updateMatrixWorld();
            } else if (n.object.isOrthographicCamera) {
              const Ve = new L(A.x, A.y, 0);
              Ve.unproject(n.object),
                (n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / c)
                )),
                n.object.updateProjectionMatrix(),
                (Ie = !0);
              const xt = new L(A.x, A.y, 0);
              xt.unproject(n.object),
                n.object.position.sub(xt).add(Ve),
                n.object.updateMatrixWorld(),
                (Ge = R.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
              ),
                (n.zoomToCursor = !1);
            Ge !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(Ge)
                    .add(n.object.position)
                : (Xi.origin.copy(n.object.position),
                  Xi.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(Xi.direction)) < _p
                    ? e.lookAt(n.target)
                    : (Ga.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      Xi.intersectPlane(Ga, n.target))));
          } else
            n.object.isOrthographicCamera &&
              ((n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / c)
              )),
              n.object.updateProjectionMatrix(),
              (Ie = !0));
          return (
            (c = 1),
            (P = !1),
            Ie ||
            ae.distanceToSquared(n.object.position) > o ||
            8 * (1 - ce.dot(n.object.quaternion)) > o ||
            be.distanceToSquared(n.target) > 0
              ? (n.dispatchEvent(za),
                ae.copy(n.object.position),
                ce.copy(n.object.quaternion),
                be.copy(n.target),
                (Ie = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", J),
          n.domElement.removeEventListener("pointerdown", De),
          n.domElement.removeEventListener("pointercancel", ze),
          n.domElement.removeEventListener("wheel", E),
          n.domElement.removeEventListener("pointermove", Re),
          n.domElement.removeEventListener("pointerup", ze),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", g),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      r = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = r.NONE;
    const o = 1e-6,
      a = new Ba(),
      l = new Ba();
    let c = 1;
    const u = new L(),
      d = new we(),
      f = new we(),
      m = new we(),
      _ = new we(),
      v = new we(),
      p = new we(),
      h = new we(),
      b = new we(),
      M = new we(),
      y = new L(),
      A = new we();
    let P = !1;
    const w = [],
      q = {};
    function x(R) {
      return R !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * R
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function T() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function Z(R) {
      l.theta -= R;
    }
    function Q(R) {
      l.phi -= R;
    }
    const F = (function () {
        const R = new L();
        return function (ue, ae) {
          R.setFromMatrixColumn(ae, 0), R.multiplyScalar(-ue), u.add(R);
        };
      })(),
      W = (function () {
        const R = new L();
        return function (ue, ae) {
          n.screenSpacePanning === !0
            ? R.setFromMatrixColumn(ae, 1)
            : (R.setFromMatrixColumn(ae, 0), R.crossVectors(n.object.up, R)),
            R.multiplyScalar(ue),
            u.add(R);
        };
      })(),
      H = (function () {
        const R = new L();
        return function (ue, ae) {
          const ce = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const be = n.object.position;
            R.copy(be).sub(n.target);
            let Oe = R.length();
            (Oe *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              F((2 * ue * Oe) / ce.clientHeight, n.object.matrix),
              W((2 * ae * Oe) / ce.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (F(
                  (ue * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ce.clientWidth,
                  n.object.matrix
                ),
                W(
                  (ae * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ce.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function $(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c /= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function X(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c *= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Y(R) {
      if (!n.zoomToCursor) return;
      P = !0;
      const j = n.domElement.getBoundingClientRect(),
        ue = R.clientX - j.left,
        ae = R.clientY - j.top,
        ce = j.width,
        be = j.height;
      (A.x = (ue / ce) * 2 - 1),
        (A.y = -(ae / be) * 2 + 1),
        y
          .set(A.x, A.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function te(R) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, R));
    }
    function K(R) {
      d.set(R.clientX, R.clientY);
    }
    function O(R) {
      Y(R), h.set(R.clientX, R.clientY);
    }
    function G(R) {
      _.set(R.clientX, R.clientY);
    }
    function he(R) {
      f.set(R.clientX, R.clientY),
        m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      Z((2 * Math.PI * m.x) / j.clientHeight),
        Q((2 * Math.PI * m.y) / j.clientHeight),
        d.copy(f),
        n.update();
    }
    function de(R) {
      b.set(R.clientX, R.clientY),
        M.subVectors(b, h),
        M.y > 0 ? $(T()) : M.y < 0 && X(T()),
        h.copy(b),
        n.update();
    }
    function fe(R) {
      v.set(R.clientX, R.clientY),
        p.subVectors(v, _).multiplyScalar(n.panSpeed),
        H(p.x, p.y),
        _.copy(v),
        n.update();
    }
    function xe(R) {
      Y(R), R.deltaY < 0 ? X(T()) : R.deltaY > 0 && $(T()), n.update();
    }
    function Te(R) {
      let j = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Q((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(0, n.keyPanSpeed),
            (j = !0);
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Q((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(0, -n.keyPanSpeed),
            (j = !0);
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Z((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(n.keyPanSpeed, 0),
            (j = !0);
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? Z((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : H(-n.keyPanSpeed, 0),
            (j = !0);
          break;
      }
      j && (R.preventDefault(), n.update());
    }
    function ge() {
      if (w.length === 1) d.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX),
          j = 0.5 * (w[0].pageY + w[1].pageY);
        d.set(R, j);
      }
    }
    function Be() {
      if (w.length === 1) _.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX),
          j = 0.5 * (w[0].pageY + w[1].pageY);
        _.set(R, j);
      }
    }
    function ot() {
      const R = w[0].pageX - w[1].pageX,
        j = w[0].pageY - w[1].pageY,
        ue = Math.sqrt(R * R + j * j);
      h.set(0, ue);
    }
    function Ce() {
      n.enableZoom && ot(), n.enablePan && Be();
    }
    function U() {
      n.enableZoom && ot(), n.enableRotate && ge();
    }
    function Qe(R) {
      if (w.length == 1) f.set(R.pageX, R.pageY);
      else {
        const ue = B(R),
          ae = 0.5 * (R.pageX + ue.x),
          ce = 0.5 * (R.pageY + ue.y);
        f.set(ae, ce);
      }
      m.subVectors(f, d).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      Z((2 * Math.PI * m.x) / j.clientHeight),
        Q((2 * Math.PI * m.y) / j.clientHeight),
        d.copy(f);
    }
    function _e(R) {
      if (w.length === 1) v.set(R.pageX, R.pageY);
      else {
        const j = B(R),
          ue = 0.5 * (R.pageX + j.x),
          ae = 0.5 * (R.pageY + j.y);
        v.set(ue, ae);
      }
      p.subVectors(v, _).multiplyScalar(n.panSpeed), H(p.x, p.y), _.copy(v);
    }
    function Ae(R) {
      const j = B(R),
        ue = R.pageX - j.x,
        ae = R.pageY - j.y,
        ce = Math.sqrt(ue * ue + ae * ae);
      b.set(0, ce),
        M.set(0, Math.pow(b.y / h.y, n.zoomSpeed)),
        $(M.y),
        h.copy(b);
    }
    function Se(R) {
      n.enableZoom && Ae(R), n.enablePan && _e(R);
    }
    function ke(R) {
      n.enableZoom && Ae(R), n.enableRotate && Qe(R);
    }
    function De(R) {
      n.enabled !== !1 &&
        (w.length === 0 &&
          (n.domElement.setPointerCapture(R.pointerId),
          n.domElement.addEventListener("pointermove", Re),
          n.domElement.addEventListener("pointerup", ze)),
        ie(R),
        R.pointerType === "touch" ? N(R) : et(R));
    }
    function Re(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? ne(R) : rt(R));
    }
    function ze(R) {
      me(R),
        w.length === 0 &&
          (n.domElement.releasePointerCapture(R.pointerId),
          n.domElement.removeEventListener("pointermove", Re),
          n.domElement.removeEventListener("pointerup", ze)),
        n.dispatchEvent(Ha),
        (s = r.NONE);
    }
    function et(R) {
      let j;
      switch (R.button) {
        case 0:
          j = n.mouseButtons.LEFT;
          break;
        case 1:
          j = n.mouseButtons.MIDDLE;
          break;
        case 2:
          j = n.mouseButtons.RIGHT;
          break;
        default:
          j = -1;
      }
      switch (j) {
        case bn.DOLLY:
          if (n.enableZoom === !1) return;
          O(R), (s = r.DOLLY);
          break;
        case bn.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1) return;
            G(R), (s = r.PAN);
          } else {
            if (n.enableRotate === !1) return;
            K(R), (s = r.ROTATE);
          }
          break;
        case bn.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1) return;
            K(R), (s = r.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            G(R), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Hr);
    }
    function rt(R) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          he(R);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          de(R);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          fe(R);
          break;
      }
    }
    function E(R) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== r.NONE ||
        (R.preventDefault(), n.dispatchEvent(Hr), xe(R), n.dispatchEvent(Ha));
    }
    function g(R) {
      n.enabled === !1 || n.enablePan === !1 || Te(R);
    }
    function N(R) {
      switch ((re(R), w.length)) {
        case 1:
          switch (n.touches.ONE) {
            case An.ROTATE:
              if (n.enableRotate === !1) return;
              ge(), (s = r.TOUCH_ROTATE);
              break;
            case An.PAN:
              if (n.enablePan === !1) return;
              Be(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case An.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ce(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case An.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              U(), (s = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Hr);
    }
    function ne(R) {
      switch ((re(R), s)) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Qe(R), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          _e(R), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Se(R), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ke(R), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function J(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ie(R) {
      w.push(R);
    }
    function me(R) {
      delete q[R.pointerId];
      for (let j = 0; j < w.length; j++)
        if (w[j].pointerId == R.pointerId) {
          w.splice(j, 1);
          return;
        }
    }
    function re(R) {
      let j = q[R.pointerId];
      j === void 0 && ((j = new we()), (q[R.pointerId] = j)),
        j.set(R.pageX, R.pageY);
    }
    function B(R) {
      const j = R.pointerId === w[0].pointerId ? w[1] : w[0];
      return q[j.pointerId];
    }
    n.domElement.addEventListener("contextmenu", J),
      n.domElement.addEventListener("pointerdown", De),
      n.domElement.addEventListener("pointercancel", ze),
      n.domElement.addEventListener("wheel", E, { passive: !1 }),
      this.update();
  }
}
const xp = [
    { lat: 43.28025477707006, lon: -99.171974522293 },
    { lat: 36.97452229299363, lon: -94.01273885350318 },
    { lat: 23.216560509554142, lon: -105.19108280254777 },
    { lat: -8.025477707006374, lon: -76.24203821656052 },
    { lat: -20.636942675159233, lon: -58.47133757961784 },
    { lat: -23.789808917197462, lon: -61.91082802547771 },
    { lat: -25.222929936305732, lon: -58.47133757961784 },
    { lat: -28.662420382165593, lon: -62.19745222929936 },
    { lat: -35.54140127388534, lon: -71.94267515923566 },
    { lat: -6.3057324840764295, lon: -47.29299363057325 },
    { lat: -16.050955414012734, lon: -48.152866242038215 },
    { lat: 31.52866242038217, lon: -6.5923566878981035 },
    { lat: 39.26751592356688, lon: -8.02547770700636 },
    { lat: 41.847133757961785, lon: -4.872611464968173 },
    { lat: 38.69426751592357, lon: -0.8598726114649651 },
    { lat: 43.56687898089172, lon: 4.012738853503208 },
    { lat: 47.86624203821656, lon: 3.1528662420382148 },
    { lat: 47.86624203821656, lon: -0.5732484076433195 },
    { lat: 52.1656050955414, lon: -0.8598726114649651 },
    { lat: 55.318471337579616, lon: -1.7197452229299302 },
    { lat: 58.47133757961784, lon: -4.872611464968173 },
    { lat: 52.738853503184714, lon: -9.458598726114644 },
    { lat: 66.78343949044586, lon: 14.617834394904435 },
    { lat: 63.05732484076433, lon: 10.31847133757961 },
    { lat: 61.91082802547771, lon: 14.904458598726109 },
    { lat: 45.859872611464965, lon: 12.324840764331185 },
    { lat: 41.560509554140125, lon: 13.757961783439498 },
    { lat: 39.554140127388536, lon: 17.770700636942678 },
    { lat: 38.98089171974522, lon: 36.114649681528675 },
    { lat: 35.82802547770701, lon: 38.407643312101925 },
    { lat: 31.81528662420382, lon: 36.40127388535029 },
    { lat: 26.94267515923567, lon: 29.808917197452217 },
    { lat: 26.656050955414017, lon: 38.12101910828025 },
    { lat: 29.23566878980892, lon: 45.57324840764332 },
    { lat: 32.388535031847134, lon: 46.71974522292996 },
    { lat: 28.089171974522294, lon: 49.01273885350321 },
    { lat: 24.076433121019107, lon: 52.738853503184714 },
    { lat: 23.216560509554142, lon: 57.89808917197453 },
    { lat: 27.22929936305733, lon: 63.91719745222932 },
    { lat: 25.509554140127392, lon: 68.78980891719743 },
    { lat: 22.070063694267517, lon: 79.39490445859872 },
    { lat: 35.541401273885356, lon: 99.74522292993635 },
    { lat: 12.898089171974519, lon: 104.90445859872614 },
    { lat: 12.038216560509554, lon: 108.63057324840764 },
    { lat: 7.738853503184714, lon: 99.74522292993635 },
    { lat: 3.4394904458598745, lon: 102.32484076433121 },
    { lat: 0, lon: 104.04458598726114 },
    { lat: 13.757961783439484, lon: 122.67515923566879 },
    { lat: 10.605095541401269, lon: 124.10828025477707 },
    { lat: 6.3057324840764295, lon: 125.54140127388536 },
    { lat: 38.98089171974522, lon: 127.83439490445858 },
    { lat: 27.515923566878982, lon: 121.8152866242038 },
    { lat: 23.789808917197462, lon: 116.9426751592357 },
    { lat: 56.46496815286624, lon: 107.7707006369427 },
    { lat: 61.91082802547771, lon: 95.44585987261144 },
    { lat: -26.942675159235662, lon: 142.16560509554142 },
    { lat: -1.1464968152866248, lon: 106.33757961783442 },
    { lat: -39.84076433121018, lon: 173.69426751592357 },
    { lat: 53.88535031847134, lon: 20.350318471337573 },
    { lat: 50.159235668789805, lon: 22.92993630573247 },
    { lat: 45.859872611464965, lon: 20.350318471337573 },
    { lat: 49.87261146496815, lon: 16.910828025477684 },
    { lat: 53.31210191082803, lon: 13.184713375796207 },
    { lat: 51.30573248407643, lon: 8.885350318471325 },
    { lat: 45.57324840764331, lon: 16.337579617834393 },
  ],
  Mp = { coordinates: xp };
let Kr = { x: 0, y: 0 },
  Va = 0,
  Zr = [];
const nr = new pp("#7B1BF9", 200, 10);
nr.position.set(-4, 2, 2);
nr.add(new gp(1));
const yn = new li(),
  Ki = new up().load("../Globe/world.jpg"),
  ir = new Jf();
console.log("encoding", Ki);
Ki.colorSpace = Xe;
const gi = new yt(40, window.innerWidth / window.innerHeight, 0.1, 1e3),
  Si = new Mo();
Si.setSize(window.innerWidth, window.innerHeight);
Si.setPixelRatio(2);
document.body.appendChild(Si.domElement);
new vp(gi, document.body);
const _i = 2,
  Sp = new Mi(_i, 64, 64),
  Eo = new ap({
    color: "#000000",
    map: Ki,
    emissive: "#ffffff",
    emissiveMap: Ki,
    emissiveIntensity: 1,
  });
Eo.side = Bt;
const Ep = new It(Sp, Eo);
yn.add(Ep);
gi.position.set(-1, 1, 5);
Mp.coordinates.map((i) => {
  console.log(i);
  const e = Tp(_i, i.lat * -1, i.lon),
    t = new Mi(0.02 * Math.random() + 0.005, 16, 16),
    n = new er({ color: "#7B1BF9" }),
    r = new It(t, n);
  r.position.copy(e), yn.add(r), Zr.push({ mesh: r, connections: [] });
});
Zr.map((i, e) => {
  for (const t of Zr)
    if (i != t && i.mesh.position.distanceTo(t.mesh.position) < _i / 5) {
      const r = bp(
        new L().copy(i.mesh.position),
        new L().copy(t.mesh.position),
        30,
        1 + 0.5 * Math.random()
      );
      console.log("p connections: ", i.connections),
        console.log("other", t),
        i.connections.includes(i) == !1 && (i.connections.push(i), yn.add(r));
    }
});
console.log(yn);
const yp = new mp(nr, 0.5);
ir.add(yp);
ir.add(nr);
ir.add(yn);
function yo() {
  requestAnimationFrame(yo),
    (yn.rotation.y = Va + Kr.x / window.innerWidth),
    (yn.rotation.x = 0 + Kr.y / window.innerHeight),
    Si.render(ir, gi),
    (Va += 0.001);
}
yo();
window.addEventListener("mousemove", (i) => {
  Kr = { x: i.clientX, y: i.clientY };
});
window.addEventListener("resize", (i) => {
  (gi.aspect = window.innerWidth / window.innerHeight),
    gi.updateProjectionMatrix(),
    Si.setSize(window.innerWidth, window.innerHeight);
});
function Tp(i, e, t) {
  const n = ka(e),
    r = ka(t),
    s = i * Math.cos(n) * Math.cos(r),
    o = -i * Math.sin(n),
    a = -i * Math.cos(n) * Math.sin(r);
  return new L(s, o, a);
}
function ka(i) {
  var e = Math.PI;
  return i * (e / 180);
}
function bp(i, e, t, n) {
  const r = i,
    s = e,
    o = new L(0, 0, 0),
    a = new L()
      .subVectors(i, o)
      .normalize()
      .multiplyScalar(_i * n),
    l = new L()
      .subVectors(e, o)
      .normalize()
      .multiplyScalar(_i * n),
    u = new sp(r, a, l, s).getPoints(t),
    d = new Nt().setFromPoints(u),
    f = new rs({ color: 4722579 });
  return new So(d, f);
}
