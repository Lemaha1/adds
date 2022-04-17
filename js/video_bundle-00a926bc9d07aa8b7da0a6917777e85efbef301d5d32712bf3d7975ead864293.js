!function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() :"function" == typeof define && define.amd ? define(t) :(e = e || self, 
e.videojs = t());
}(this, function() {
"use strict";
function e(e) {
return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] :e;
}
function t(e, t) {
return t = {
exports:{}
}, e(t, t.exports), t.exports;
}
function i(e) {
var t, n = "info", r = function() {
for (var e = arguments.length, i = new Array(e), r = 0; e > r; r++) i[r] = arguments[r];
t("log", n, i);
};
return t = Di(e, r), r.createLogger = function(t) {
return i(e + ": " + t);
}, r.levels = {
all:"debug|log|warn|error",
off:"",
debug:"debug|log|warn|error",
info:"log|warn|error",
warn:"warn|error",
error:"error",
DEFAULT:n
}, r.level = function(e) {
if ("string" == typeof e) {
if (!r.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
n = e;
}
return n;
}, r.history = function() {
return Li ? [].concat(Li) :[];
}, r.history.filter = function(e) {
return (Li || []).filter(function(t) {
return new RegExp(".*" + e + ".*").test(t[0]);
});
}, r.history.clear = function() {
Li && (Li.length = 0);
}, r.history.disable = function() {
null !== Li && (Li.length = 0, Li = null);
}, r.history.enable = function() {
null === Li && (Li = []);
}, r.error = function() {
for (var e = arguments.length, i = new Array(e), r = 0; e > r; r++) i[r] = arguments[r];
return t("error", n, i);
}, r.warn = function() {
for (var e = arguments.length, i = new Array(e), r = 0; e > r; r++) i[r] = arguments[r];
return t("warn", n, i);
}, r.debug = function() {
for (var e = arguments.length, i = new Array(e), r = 0; e > r; r++) i[r] = arguments[r];
return t("debug", n, i);
}, r;
}
function n(e, t) {
Ui(e).forEach(function(i) {
return t(e[i], i);
});
}
function r(e, t, i) {
return void 0 === i && (i = 0), Ui(e).reduce(function(i, n) {
return t(i, e[n], n);
}, i);
}
function a(e) {
for (var t = arguments.length, i = new Array(t > 1 ? t - 1 :0), r = 1; t > r; r++) i[r - 1] = arguments[r];
return Object.assign ? Ni.apply(void 0, [ e ].concat(i)) :(i.forEach(function(t) {
t && n(t, function(t, i) {
e[i] = t;
});
}), e);
}
function s(e) {
return !!e && "object" == typeof e;
}
function o(e) {
return s(e) && "[object Object]" === Mi.call(e) && e.constructor === Object;
}
function u(e, t) {
if (!e || !t) return "";
if ("function" == typeof bi.getComputedStyle) {
var i = bi.getComputedStyle(e);
return i ? i.getPropertyValue(t) || i[t] :"";
}
return "";
}
function l(e) {
return "string" == typeof e && Boolean(e.trim());
}
function c(e) {
if (e.indexOf(" ") >= 0) throw new Error("class has illegal whitespace characters");
}
function d(e) {
return new RegExp("(^|\\s)" + e + "($|\\s)");
}
function h() {
return wi === bi.document;
}
function p(e) {
return s(e) && 1 === e.nodeType;
}
function f() {
try {
return bi.parent !== bi.self;
} catch (e) {
return !0;
}
}
function m(e) {
return function(t, i) {
if (!l(t)) return wi[e](null);
l(i) && (i = wi.querySelector(i));
var n = p(i) ? i :wi;
return n[e] && n[e](t);
};
}
function g(e, t, i, n) {
void 0 === e && (e = "div"), void 0 === t && (t = {}), void 0 === i && (i = {});
var r = wi.createElement(e);
return Object.getOwnPropertyNames(t).forEach(function(e) {
var i = t[e];
-1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (Oi.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\n" + ("createEl(type, properties, attributes). Attempting to set " + e + " to " + i + ".")), 
r.setAttribute(e, i)) :"textContent" === e ? v(r, i) :(r[e] !== i || "tabIndex" === e) && (r[e] = i);
}), Object.getOwnPropertyNames(i).forEach(function(e) {
r.setAttribute(e, i[e]);
}), n && M(r, n), r;
}
function v(e, t) {
return "undefined" == typeof e.textContent ? e.innerText = t :e.textContent = t, 
e;
}
function y(e, t) {
t.firstChild ? t.insertBefore(e, t.firstChild) :t.appendChild(e);
}
function _(e, t) {
return c(t), e.classList ? e.classList.contains(t) :d(t).test(e.className);
}
function b(e, t) {
return e.classList ? e.classList.add(t) :_(e, t) || (e.className = (e.className + " " + t).trim()), 
e;
}
function T(e, t) {
return e.classList ? e.classList.remove(t) :(c(t), e.className = e.className.split(/\s+/).filter(function(e) {
return e !== t;
}).join(" ")), e;
}
function S(e, t, i) {
var n = _(e, t);
return "function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), 
i !== n ? (i ? b(e, t) :T(e, t), e) :void 0;
}
function k(e, t) {
Object.getOwnPropertyNames(t).forEach(function(i) {
var n = t[i];
null === n || "undefined" == typeof n || n === !1 ? e.removeAttribute(i) :e.setAttribute(i, n === !0 ? "" :n);
});
}
function w(e) {
var t = {}, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
if (e && e.attributes && e.attributes.length > 0) for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
var a = n[r].name, s = n[r].value;
("boolean" == typeof e[a] || -1 !== i.indexOf("," + a + ",")) && (s = null !== s ? !0 :!1), 
t[a] = s;
}
return t;
}
function E(e, t) {
return e.getAttribute(t);
}
function C(e, t, i) {
e.setAttribute(t, i);
}
function I(e, t) {
e.removeAttribute(t);
}
function P() {
wi.body.focus(), wi.onselectstart = function() {
return !1;
};
}
function A() {
wi.onselectstart = function() {
return !0;
};
}
function x(e) {
if (e && e.getBoundingClientRect && e.parentNode) {
var t = e.getBoundingClientRect(), i = {};
return [ "bottom", "height", "left", "right", "top", "width" ].forEach(function(e) {
void 0 !== t[e] && (i[e] = t[e]);
}), i.height || (i.height = parseFloat(u(e, "height"))), i.width || (i.width = parseFloat(u(e, "width"))), 
i;
}
}
function L(e) {
if (!e || e && !e.offsetParent) return {
left:0,
top:0,
width:0,
height:0
};
for (var t = e.offsetWidth, i = e.offsetHeight, n = 0, r = 0; e.offsetParent && e !== wi[Ei.fullscreenElement]; ) n += e.offsetLeft, 
r += e.offsetTop, e = e.offsetParent;
return {
left:n,
top:r,
width:t,
height:i
};
}
function D(e, t) {
var i = {
x:0,
y:0
};
if (nn) for (var n = e; n && "html" !== n.nodeName.toLowerCase(); ) {
var r = u(n, "transform");
if (/^matrix/.test(r)) {
var a = r.slice(7, -1).split(/,\s/).map(Number);
i.x += a[4], i.y += a[5];
} else if (/^matrix3d/.test(r)) {
var s = r.slice(9, -1).split(/,\s/).map(Number);
i.x += s[12], i.y += s[13];
}
n = n.parentNode;
}
var o = {}, l = L(t.target), c = L(e), d = c.width, h = c.height, p = t.offsetY - (c.top - l.top), f = t.offsetX - (c.left - l.left);
return t.changedTouches && (f = t.changedTouches[0].pageX - c.left, p = t.changedTouches[0].pageY + c.top, 
nn && (f -= i.x, p -= i.y)), o.y = 1 - Math.max(0, Math.min(1, p / h)), o.x = Math.max(0, Math.min(1, f / d)), 
o;
}
function O(e) {
return s(e) && 3 === e.nodeType;
}
function R(e) {
for (;e.firstChild; ) e.removeChild(e.firstChild);
return e;
}
function N(e) {
return "function" == typeof e && (e = e()), (Array.isArray(e) ? e :[ e ]).map(function(e) {
return "function" == typeof e && (e = e()), p(e) || O(e) ? e :"string" == typeof e && /\S/.test(e) ? wi.createTextNode(e) :void 0;
}).filter(function(e) {
return e;
});
}
function M(e, t) {
return N(t).forEach(function(t) {
return e.appendChild(t);
}), e;
}
function U(e, t) {
return M(R(e), t);
}
function B(e) {
return void 0 === e.button && void 0 === e.buttons ? !0 :0 === e.button && void 0 === e.buttons ? !0 :"mouseup" === e.type && 0 === e.button && 0 === e.buttons ? !0 :0 !== e.button || 1 !== e.buttons ? !1 :!0;
}
function F(e, t) {
t && (xi = t), bi.setTimeout(cn, e);
}
function j() {
ln = !0, bi.removeEventListener("load", j);
}
function V() {
return mn++;
}
function H(e, t) {
if (vn.has(e)) {
var i = vn.get(e);
0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) :e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), 
Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, 
delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && vn["delete"](e);
}
}
function q(e, t, i, n) {
i.forEach(function(i) {
e(t, i, n);
});
}
function W(e) {
function t() {
return !0;
}
function i() {
return !1;
}
if (e.fixed_) return e;
if (!e || !e.isPropagationStopped) {
var n = e || bi.event;
e = {};
for (var r in n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (e[r] = n[r]));
if (e.target || (e.target = e.srcElement || wi), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement :e.fromElement), 
e.preventDefault = function() {
n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, 
e.defaultPrevented = !0;
}, e.defaultPrevented = !1, e.stopPropagation = function() {
n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, 
e.isPropagationStopped = t;
}, e.isPropagationStopped = i, e.stopImmediatePropagation = function() {
n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, 
e.stopPropagation();
}, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
var a = wi.documentElement, s = wi.body;
e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), 
e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0);
}
e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 :4 & e.button ? 1 :2 & e.button ? 2 :0);
}
return e.fixed_ = !0, e;
}
function z(e, t, i) {
if (Array.isArray(t)) return q(z, e, t, i);
vn.has(e) || vn.set(e, {});
var n = vn.get(e);
if (n.handlers || (n.handlers = {}), n.handlers[t] || (n.handlers[t] = []), i.guid || (i.guid = V()), 
n.handlers[t].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function(t, i) {
if (!n.disabled) {
t = W(t);
var r = n.handlers[t.type];
if (r) for (var a = r.slice(0), s = 0, o = a.length; o > s && !t.isImmediatePropagationStopped(); s++) try {
a[s].call(e, t, i);
} catch (u) {
Oi.error(u);
}
}
}), 1 === n.handlers[t].length) if (e.addEventListener) {
var r = !1;
yn() && _n.indexOf(t) > -1 && (r = {
passive:!0
}), e.addEventListener(t, n.dispatcher, r);
} else e.attachEvent && e.attachEvent("on" + t, n.dispatcher);
}
function G(e, t, i) {
if (vn.has(e)) {
var n = vn.get(e);
if (n.handlers) {
if (Array.isArray(t)) return q(G, e, t, i);
var r = function(e, t) {
n.handlers[t] = [], H(e, t);
};
if (void 0 !== t) {
var a = n.handlers[t];
if (a) {
if (!i) return void r(e, t);
if (i.guid) for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
H(e, t);
}
} else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o);
}
}
}
function X(e, t, i) {
var n = vn.has(e) ? vn.get(e) :{}, r = e.parentNode || e.ownerDocument;
if ("string" == typeof t ? t = {
type:t,
target:e
} :t.target || (t.target = e), t = W(t), n.dispatcher && n.dispatcher.call(e, t, i), 
r && !t.isPropagationStopped() && t.bubbles === !0) X.call(null, r, t, i); else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
vn.has(t.target) || vn.set(t.target, {});
var a = vn.get(t.target);
t.target[t.type] && (a.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), 
a.disabled = !1);
}
return !t.defaultPrevented;
}
function K(e, t, i) {
if (Array.isArray(t)) return q(K, e, t, i);
var n = function r() {
G(e, t, r), i.apply(this, arguments);
};
n.guid = i.guid = i.guid || V(), z(e, t, n);
}
function Y(e, t, i) {
var n = function r() {
G(e, t, r), i.apply(this, arguments);
};
n.guid = i.guid = i.guid || V(), z(e, t, n);
}
function Q(e, t) {
void 0 === t && (t = {});
var i = t, n = i.eventBusKey;
if (n) {
if (!e[n].nodeName) throw new Error('The eventBusKey "' + n + '" does not refer to an element.');
e.eventBusEl_ = e[n];
} else e.eventBusEl_ = g("span", {
className:"vjs-event-bus"
});
return a(e, Mn), e.eventedCallbacks && e.eventedCallbacks.forEach(function(e) {
e();
}), e.on("dispose", function() {
e.off(), bi.setTimeout(function() {
e.eventBusEl_ = null;
}, 0);
}), e;
}
function $(e, t) {
return a(e, Un), e.state = a({}, e.state, t), "function" == typeof e.handleStateChanged && Pn(e) && e.on("statechanged", e.handleStateChanged), 
e;
}
function J() {
for (var e = {}, t = arguments.length, i = new Array(t), r = 0; t > r; r++) i[r] = arguments[r];
return i.forEach(function(t) {
t && n(t, function(t, i) {
return o(t) ? (o(e[i]) || (e[i] = {}), void (e[i] = J(e[i], t))) :void (e[i] = t);
});
}), e;
}
function Z(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function ee(e, t) {
e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function te(e, t, i) {
if ("number" != typeof t || 0 > t || t > i) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").");
}
function ie(e, t, i, n) {
return te(e, n, i.length - 1), i[n][t];
}
function ne(e) {
return void 0 === e || 0 === e.length ? {
length:0,
start:function() {
throw new Error("This TimeRanges object is empty");
},
end:function() {
throw new Error("This TimeRanges object is empty");
}
} :{
length:e.length,
start:ie.bind(null, "start", 0, e),
end:ie.bind(null, "end", 1, e)
};
}
function re(e, t) {
return Array.isArray(e) ? ne(e) :void 0 === e || void 0 === t ? ne() :ne([ [ e, t ] ]);
}
function ae(e, t) {
var i, n, r = 0;
if (!t) return 0;
e && e.length || (e = re(0, 0));
for (var a = 0; a < e.length; a++) i = e.start(a), n = e.end(a), n > t && (n = t), 
r += n - i;
return r / t;
}
function se(e) {
return e instanceof se ? e :void ("number" == typeof e ? this.code = e :"string" == typeof e ? this.message = e :s(e) && ("number" == typeof e.code && (this.code = e.code), 
a(this, e)));
}
function oe(e, t) {
var i, n = null;
try {
i = JSON.parse(e, t);
} catch (r) {
n = r;
}
return [ n, i ];
}
function ue(e) {
return void 0 !== e && null !== e && "function" == typeof e.then;
}
function le(e) {
ue(e) && e.then(null, function(e) {});
}
function ce(e) {
var t = Er.call(e);
return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt);
}
function de(e, t) {
for (var i = 0; i < e.length; i++) t(e[i]);
}
function he(e) {
for (var t in e) if (e.hasOwnProperty(t)) return !1;
return !0;
}
function pe(e, t, i) {
var n = e;
return wr(t) ? (i = t, "string" == typeof e && (n = {
uri:e
})) :n = Ni({}, t, {
uri:e
}), n.callback = i, n;
}
function fe(e, t, i) {
return t = pe(e, t, i), me(t);
}
function me(e) {
function t() {
4 === o.readyState && setTimeout(r, 0);
}
function i() {
var e = void 0;
if (e = o.response ? o.response :o.responseText || ge(o), g) try {
e = JSON.parse(e);
} catch (t) {}
return e;
}
function n(e) {
return clearTimeout(c), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), 
e.statusCode = 0, s(e, v);
}
function r() {
if (!l) {
var t;
clearTimeout(c), t = e.useXDR && void 0 === o.status ? 200 :1223 === o.status ? 204 :o.status;
var n = v, r = null;
return 0 !== t ? (n = {
body:i(),
statusCode:t,
method:h,
headers:{},
url:d,
rawRequest:o
}, o.getAllResponseHeaders && (n.headers = Cr(o.getAllResponseHeaders()))) :r = new Error("Internal XMLHttpRequest Error"), 
s(r, n, n.body);
}
}
if ("undefined" == typeof e.callback) throw new Error("callback argument missing");
var a = !1, s = function(t, i, n) {
a || (a = !0, e.callback(t, i, n));
}, o = e.xhr || null;
o || (o = e.cors || e.useXDR ? new fe.XDomainRequest() :new fe.XMLHttpRequest());
var u, l, c, d = o.url = e.uri || e.url, h = o.method = e.method || "GET", p = e.body || e.data, f = o.headers = e.headers || {}, m = !!e.sync, g = !1, v = {
body:void 0,
headers:{},
statusCode:0,
method:h,
url:d,
rawRequest:o
};
if ("json" in e && e.json !== !1 && (g = !0, f.accept || f.Accept || (f.Accept = "application/json"), 
"GET" !== h && "HEAD" !== h && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), 
p = JSON.stringify(e.json === !0 ? p :e.json))), o.onreadystatechange = t, o.onload = r, 
o.onerror = n, o.onprogress = function() {}, o.onabort = function() {
l = !0;
}, o.ontimeout = n, o.open(h, d, !m, e.username, e.password), m || (o.withCredentials = !!e.withCredentials), 
!m && e.timeout > 0 && (c = setTimeout(function() {
if (!l) {
l = !0, o.abort("timeout");
var e = new Error("XMLHttpRequest timeout");
e.code = "ETIMEDOUT", n(e);
}
}, e.timeout)), o.setRequestHeader) for (u in f) f.hasOwnProperty(u) && o.setRequestHeader(u, f[u]); else if (e.headers && !he(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
return "responseType" in e && (o.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(o), 
o.send(p || null), o;
}
function ge(e) {
try {
if ("document" === e.responseType) return e.responseXML;
var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
if ("" === e.responseType && !t) return e.responseXML;
} catch (i) {}
return null;
}
function ve() {}
function ye(e, t) {
this.name = "ParsingError", this.code = e.code, this.message = t || e.message;
}
function _e(e) {
function t(e, t, i, n) {
return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3;
}
var i = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) :i[1] > 59 ? t(i[1], i[2], 0, i[4]) :t(0, i[1], i[2], i[4]) :null;
}
function be() {
this.values = Hr(null);
}
function Te(e, t, i, n) {
var r = n ? e.split(n) :[ e ];
for (var a in r) if ("string" == typeof r[a]) {
var s = r[a].split(i);
if (2 === s.length) {
var o = s[0], u = s[1];
t(o, u);
}
}
}
function Se(e, t, i) {
function n() {
var t = _e(e);
if (null === t) throw new ye(ye.Errors.BadTimeStamp, "Malformed timestamp: " + s);
return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t;
}
function r(e, t) {
var n = new be();
Te(e, function(e, t) {
switch (e) {
case "region":
for (var r = i.length - 1; r >= 0; r--) if (i[r].id === t) {
n.set(e, i[r].region);
break;
}
break;

case "vertical":
n.alt(e, t, [ "rl", "lr" ]);
break;

case "line":
var a = t.split(","), s = a[0];
n.integer(e, s), n.percent(e, s) ? n.set("snapToLines", !1) :null, n.alt(e, s, [ "auto" ]), 
2 === a.length && n.alt("lineAlign", a[1], [ "start", "center", "end" ]);
break;

case "position":
a = t.split(","), n.percent(e, a[0]), 2 === a.length && n.alt("positionAlign", a[1], [ "start", "center", "end" ]);
break;

case "size":
n.percent(e, t);
break;

case "align":
n.alt(e, t, [ "start", "center", "end", "left", "right" ]);
}
}, /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", "");
try {
t.line = n.get("line", "auto");
} catch (r) {}
t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), 
t.size = n.get("size", 100);
try {
t.align = n.get("align", "center");
} catch (r) {
t.align = n.get("align", "middle");
}
try {
t.position = n.get("position", "auto");
} catch (r) {
t.position = n.get("position", {
start:0,
left:0,
center:50,
middle:50,
end:100,
right:100
}, t.align);
}
t.positionAlign = n.get("positionAlign", {
start:"start",
left:"start",
center:"center",
middle:"center",
end:"end",
right:"end"
}, t.align);
}
function a() {
e = e.replace(/^\s+/, "");
}
var s = e;
if (a(), t.startTime = n(), a(), "-->" !== e.substr(0, 3)) throw new ye(ye.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + s);
e = e.substr(3), a(), t.endTime = n(), a(), r(e, t);
}
function ke(e, t) {
function i() {
function e(e) {
return t = t.substr(e.length), e;
}
if (!t) return null;
var i = t.match(/^([^<]*)(<[^>]*>?)?/);
return e(i[1] ? i[1] :i[2]);
}
function n(e) {
return qr.innerHTML = e, e = qr.textContent, qr.textContent = "", e;
}
function r(e, t) {
return !Xr[t.localName] || Xr[t.localName] === e.localName;
}
function a(t, i) {
var n = Wr[t];
if (!n) return null;
var r = e.document.createElement(n), a = Gr[t];
return a && i && (r[a] = i.trim()), r;
}
for (var s, o = e.document.createElement("div"), u = o, l = []; null !== (s = i()); ) if ("<" !== s[0]) u.appendChild(e.document.createTextNode(n(s))); else {
if ("/" === s[1]) {
l.length && l[l.length - 1] === s.substr(2).replace(">", "") && (l.pop(), u = u.parentNode);
continue;
}
var c, d = _e(s.substr(1, s.length - 2));
if (d) {
c = e.document.createProcessingInstruction("timestamp", d), u.appendChild(c);
continue;
}
var h = s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
if (!h) continue;
if (c = a(h[1], h[3]), !c) continue;
if (!r(u, c)) continue;
if (h[2]) {
var p = h[2].split(".");
p.forEach(function(e) {
var t = /^bg_/.test(e), i = t ? e.slice(3) :e;
if (zr.hasOwnProperty(i)) {
var n = t ? "background-color" :"color", r = zr[i];
c.style[n] = r;
}
}), c.className = p.join(" ");
}
l.push(h[1]), u.appendChild(c), u = c;
}
return o;
}
function we(e) {
for (var t = 0; t < Kr.length; t++) {
var i = Kr[t];
if (e >= i[0] && e <= i[1]) return !0;
}
return !1;
}
function Ee(e) {
function t(e, t) {
for (var i = t.childNodes.length - 1; i >= 0; i--) e.push(t.childNodes[i]);
}
function i(e) {
if (!e || !e.length) return null;
var n = e.pop(), r = n.textContent || n.innerText;
if (r) {
var a = r.match(/^.*(\n|\r)/);
return a ? (e.length = 0, a[0]) :r;
}
return "ruby" === n.tagName ? i(e) :n.childNodes ? (t(e, n), i(e)) :void 0;
}
var n, r = [], a = "";
if (!e || !e.childNodes) return "ltr";
for (t(r, e); a = i(r); ) for (var s = 0; s < a.length; s++) if (n = a.charCodeAt(s), 
we(n)) return "rtl";
return "ltr";
}
function Ce(e) {
if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line;
if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++) "showing" === i[r].mode && n++;
return -1 * ++n;
}
function Ie() {}
function Pe(e, t, i) {
Ie.call(this), this.cue = t, this.cueDiv = ke(e, t.text);
var n = {
color:"rgba(255, 255, 255, 1)",
backgroundColor:"rgba(0, 0, 0, 0.8)",
position:"relative",
left:0,
right:0,
top:0,
bottom:0,
display:"inline",
writingMode:"" === t.vertical ? "horizontal-tb" :"lr" === t.vertical ? "vertical-lr" :"vertical-rl",
unicodeBidi:"plaintext"
};
this.applyStyles(n, this.cueDiv), this.div = e.document.createElement("div"), n = {
direction:Ee(this.cueDiv),
writingMode:"" === t.vertical ? "horizontal-tb" :"lr" === t.vertical ? "vertical-lr" :"vertical-rl",
unicodeBidi:"plaintext",
textAlign:"middle" === t.align ? "center" :t.align,
font:i.font,
whiteSpace:"pre-line",
position:"absolute"
}, this.applyStyles(n), this.div.appendChild(this.cueDiv);
var r = 0;
switch (t.positionAlign) {
case "start":
r = t.position;
break;

case "center":
r = t.position - t.size / 2;
break;

case "end":
r = t.position - t.size;
}
"" === t.vertical ? this.applyStyles({
left:this.formatStyle(r, "%"),
width:this.formatStyle(t.size, "%")
}) :this.applyStyles({
top:this.formatStyle(r, "%"),
height:this.formatStyle(t.size, "%")
}), this.move = function(e) {
this.applyStyles({
top:this.formatStyle(e.top, "px"),
bottom:this.formatStyle(e.bottom, "px"),
left:this.formatStyle(e.left, "px"),
right:this.formatStyle(e.right, "px"),
height:this.formatStyle(e.height, "px"),
width:this.formatStyle(e.width, "px")
});
};
}
function Ae(e) {
var t, i, n, r;
if (e.div) {
i = e.div.offsetHeight, n = e.div.offsetWidth, r = e.div.offsetTop;
var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) :0;
}
this.left = e.left, this.right = e.right, this.top = e.top || r, this.height = e.height || i, 
this.bottom = e.bottom || r + (e.height || i), this.width = e.width || n, this.lineHeight = void 0 !== t ? t :e.lineHeight;
}
function xe(e, t, i, n) {
function r(e, t) {
for (var r, a = new Ae(e), s = 1, o = 0; o < t.length; o++) {
for (;e.overlapsOppositeAxis(i, t[o]) || e.within(i) && e.overlapsAny(n); ) e.move(t[o]);
if (e.within(i)) return e;
var u = e.intersectPercentage(i);
s > u && (r = new Ae(e), s = u), e = new Ae(a);
}
return r || a;
}
var a = new Ae(t), s = t.cue, o = Ce(s), u = [];
if (s.snapToLines) {
var l;
switch (s.vertical) {
case "":
u = [ "+y", "-y" ], l = "height";
break;

case "rl":
u = [ "+x", "-x" ], l = "width";
break;

case "lr":
u = [ "-x", "+x" ], l = "width";
}
var c = a.lineHeight, d = c * Math.round(o), h = i[l] + c, p = u[0];
Math.abs(d) > h && (d = 0 > d ? -1 :1, d *= Math.ceil(h / c) * c), 0 > o && (d += "" === s.vertical ? i.height :i.width, 
u = u.reverse()), a.move(p, d);
} else {
var f = a.lineHeight / i.height * 100;
switch (s.lineAlign) {
case "center":
o -= f / 2;
break;

case "end":
o -= f;
}
switch (s.vertical) {
case "":
t.applyStyles({
top:t.formatStyle(o, "%")
});
break;

case "rl":
t.applyStyles({
left:t.formatStyle(o, "%")
});
break;

case "lr":
t.applyStyles({
right:t.formatStyle(o, "%")
});
}
u = [ "+y", "-x", "+x", "-y" ], a = new Ae(t);
}
var m = r(a, u);
t.move(m.toCSSCompatValues(i));
}
function Le() {}
function De(e) {
if ("string" != typeof e) return !1;
var t = ea[e.toLowerCase()];
return t ? e.toLowerCase() :!1;
}
function Oe(e) {
if ("string" != typeof e) return !1;
var t = ta[e.toLowerCase()];
return t ? e.toLowerCase() :!1;
}
function Re(e, t, i) {
this.hasBeenReset = !1;
var n = "", r = !1, a = e, s = t, o = i, u = null, l = "", c = !0, d = "auto", h = "start", p = "auto", f = "auto", m = 100, g = "center";
Object.defineProperties(this, {
id:{
enumerable:!0,
get:function() {
return n;
},
set:function(e) {
n = "" + e;
}
},
pauseOnExit:{
enumerable:!0,
get:function() {
return r;
},
set:function(e) {
r = !!e;
}
},
startTime:{
enumerable:!0,
get:function() {
return a;
},
set:function(e) {
if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
a = e, this.hasBeenReset = !0;
}
},
endTime:{
enumerable:!0,
get:function() {
return s;
},
set:function(e) {
if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
s = e, this.hasBeenReset = !0;
}
},
text:{
enumerable:!0,
get:function() {
return o;
},
set:function(e) {
o = "" + e, this.hasBeenReset = !0;
}
},
region:{
enumerable:!0,
get:function() {
return u;
},
set:function(e) {
u = e, this.hasBeenReset = !0;
}
},
vertical:{
enumerable:!0,
get:function() {
return l;
},
set:function(e) {
var t = De(e);
if (t === !1) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
l = t, this.hasBeenReset = !0;
}
},
snapToLines:{
enumerable:!0,
get:function() {
return c;
},
set:function(e) {
c = !!e, this.hasBeenReset = !0;
}
},
line:{
enumerable:!0,
get:function() {
return d;
},
set:function(e) {
if ("number" != typeof e && e !== Zr) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
d = e, this.hasBeenReset = !0;
}
},
lineAlign:{
enumerable:!0,
get:function() {
return h;
},
set:function(e) {
var t = Oe(e);
t ? (h = t, this.hasBeenReset = !0) :console.warn("lineAlign: an invalid or illegal string was specified.");
}
},
position:{
enumerable:!0,
get:function() {
return p;
},
set:function(e) {
if (0 > e || e > 100) throw new Error("Position must be between 0 and 100.");
p = e, this.hasBeenReset = !0;
}
},
positionAlign:{
enumerable:!0,
get:function() {
return f;
},
set:function(e) {
var t = Oe(e);
t ? (f = t, this.hasBeenReset = !0) :console.warn("positionAlign: an invalid or illegal string was specified.");
}
},
size:{
enumerable:!0,
get:function() {
return m;
},
set:function(e) {
if (0 > e || e > 100) throw new Error("Size must be between 0 and 100.");
m = e, this.hasBeenReset = !0;
}
},
align:{
enumerable:!0,
get:function() {
return g;
},
set:function(e) {
var t = Oe(e);
if (!t) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
g = t, this.hasBeenReset = !0;
}
}
}), this.displayState = void 0;
}
function Ne(e) {
if ("string" != typeof e) return !1;
var t = na[e.toLowerCase()];
return t ? e.toLowerCase() :!1;
}
function Me(e) {
return "number" == typeof e && e >= 0 && 100 >= e;
}
function Ue() {
var e = 100, t = 3, i = 0, n = 100, r = 0, a = 100, s = "";
Object.defineProperties(this, {
width:{
enumerable:!0,
get:function() {
return e;
},
set:function(t) {
if (!Me(t)) throw new Error("Width must be between 0 and 100.");
e = t;
}
},
lines:{
enumerable:!0,
get:function() {
return t;
},
set:function(e) {
if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
t = e;
}
},
regionAnchorY:{
enumerable:!0,
get:function() {
return n;
},
set:function(e) {
if (!Me(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
n = e;
}
},
regionAnchorX:{
enumerable:!0,
get:function() {
return i;
},
set:function(e) {
if (!Me(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
i = e;
}
},
viewportAnchorY:{
enumerable:!0,
get:function() {
return a;
},
set:function(e) {
if (!Me(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
a = e;
}
},
viewportAnchorX:{
enumerable:!0,
get:function() {
return r;
},
set:function(e) {
if (!Me(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
r = e;
}
},
scroll:{
enumerable:!0,
get:function() {
return s;
},
set:function(e) {
var t = Ne(e);
t === !1 ? console.warn("Scroll: an invalid or illegal string was specified.") :s = t;
}
}
});
}
function Be(e, t, i, n, r) {
void 0 === r && (r = {});
var a = e.textTracks();
r.kind = t, i && (r.label = i), n && (r.language = n), r.tech = e;
var s = new Vr.text.TrackClass(r);
return a.addTrack(s), s;
}
function Fe(e, t) {
oa[e] = oa[e] || [], oa[e].push(t);
}
function je(e, t, i) {
e.setTimeout(function() {
return Ye(t, oa[t.type], i, e);
}, 1);
}
function Ve(e, t) {
e.forEach(function(e) {
return e.setTech && e.setTech(t);
});
}
function He(e, t, i) {
return e.reduceRight(ze(i), t[i]());
}
function qe(e, t, i, n) {
return t[i](e.reduce(ze(i), n));
}
function We(e, t, i, n) {
void 0 === n && (n = null);
var r = "call" + Fn(i), a = e.reduce(ze(r), n), s = a === la, o = s ? null :t[i](a);
return Ge(e, i, o, s), o;
}
function ze(e) {
return function(t, i) {
return t === la ? la :i[e] ? i[e](t) :t;
};
}
function Ge(e, t, i, n) {
for (var r = e.length - 1; r >= 0; r--) {
var a = e[r];
a[t] && a[t](n, i);
}
}
function Xe(e) {
ua[e.id()] = null;
}
function Ke(e, t) {
var i = ua[e.id()], n = null;
if (void 0 === i || null === i) return n = t(e), ua[e.id()] = [ [ t, n ] ], n;
for (var r = 0; r < i.length; r++) {
var a = i[r], s = a[0], o = a[1];
s === t && (n = o);
}
return null === n && (n = t(e), i.push([ t, n ])), n;
}
function Ye(e, t, i, n, r, s) {
void 0 === e && (e = {}), void 0 === t && (t = []), void 0 === r && (r = []), void 0 === s && (s = !1);
var o = t, u = o[0], l = o.slice(1);
if ("string" == typeof u) Ye(e, oa[u], i, n, r, s); else if (u) {
var c = Ke(n, u);
if (!c.setSource) return r.push(c), Ye(e, l, i, n, r, s);
c.setSource(a({}, e), function(t, a) {
return t ? Ye(e, l, i, n, r, s) :(r.push(c), void Ye(a, e.type === a.type ? l :oa[a.type], i, n, r, s));
});
} else l.length ? Ye(e, l, i, n, r, s) :s ? i(e, r) :Ye(e, oa["*"], i, n, r, !0);
}
function Qe(e) {
if (!e.type) {
var t = fa(e.src);
t && (e.type = t);
}
return e;
}
function $e(e, t) {
var i;
if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else {
if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
i = e.slice(1);
}
return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")";
}
function Je(e, t, i) {
try {
e.style[t] = i;
} catch (n) {
return;
}
}
function Ze(e) {
xa = e;
}
function et() {
xa = Aa;
}
function tt(e, t) {
return void 0 === t && (t = e), xa(e, t);
}
function it(e, t) {
return t && (e = t(e)), e && "none" !== e ? e :void 0;
}
function nt(e, t) {
var i = e.options[e.options.selectedIndex].value;
return it(i, t);
}
function rt(e, t, i) {
if (t) for (var n = 0; n < e.options.length; n++) if (it(e.options[n].value, i) === t) {
e.selectedIndex = n;
break;
}
}
function at() {
if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
if (Reflect.construct.sham) return !1;
if ("function" == typeof Proxy) return !0;
try {
return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
!0;
} catch (e) {
return !1;
}
}
function st(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
e.prototype = Object.create(t && t.prototype, {
constructor:{
value:e,
writable:!0,
configurable:!0
}
}), t && lo(e, t);
}
function ot(e, t, i) {
var n = ot.getPlayer(e);
if (n) return t && Oi.warn('Player "' + e + '" is already initialised. Options will not be applied.'), 
i && n.ready(i), n;
var r = "string" == typeof e ? sn("#" + Eo(e)) :e;
if (!p(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || Oi.warn("The element supplied is not included in the DOM"), 
t = t || {}, ot.hooks("beforesetup").forEach(function(e) {
var i = e(r, J(t));
return !s(i) || Array.isArray(i) ? void Oi.error("please return an object in beforesetup hooks") :void (t = J(t, i));
});
var a = zn.getComponent("Player");
return n = new a(r, t, i), ot.hooks("setup").forEach(function(e) {
return e(n);
}), n;
}
function ut(e) {
if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return e;
}
function lt(e, t) {
e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ct(e) {
return e && "object" == typeof e && "default" in e ? e["default"] :e;
}
function dt(e) {
return e && "object" == typeof e && "default" in e ? e["default"] :e;
}
function ht(e) {
for (var t = qo(e), i = new Uint8Array(t.length), n = 0; n < t.length; n++) i[n] = t.charCodeAt(n);
return i;
}
function pt() {}
function ft(e, t, i, n, r) {
function a(e) {
if (e > 65535) {
e -= 65536;
var t = 55296 + (e >> 10), i = 56320 + (1023 & e);
return String.fromCharCode(t, i);
}
return String.fromCharCode(e);
}
function s(e) {
var t = e.slice(1, -1);
return t in i ? i[t] :"#" === t.charAt(0) ? a(parseInt(t.substr(1).replace("x", "0x"))) :(r.error("entity not found:" + e), 
e);
}
function o(t) {
if (t > m) {
var i = e.substring(m, t).replace(/&#?\w+;/g, s);
h && u(m), n.characters(i, 0, t - m), m = t;
}
}
function u(t, i) {
for (;t >= c && (i = d.exec(e)); ) l = i.index, c = l + i[0].length, h.lineNumber++;
h.columnNumber = t - l + 1;
}
for (var l = 0, c = 0, d = /.*(?:\r\n?|\n)|.*$/g, h = n.locator, p = [ {
currentNSMap:t
} ], f = {}, m = 0; ;) {
try {
var g = e.indexOf("<", m);
if (0 > g) {
if (!e.substr(m).match(/^\s*$/)) {
var v = n.doc, y = v.createTextNode(e.substr(m));
v.appendChild(y), n.currentElement = y;
}
return;
}
switch (g > m && o(g), e.charAt(g + 1)) {
case "/":
var _ = e.indexOf(">", g + 3), b = e.substring(g + 2, _), T = p.pop();
0 > _ ? (b = e.substring(g + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + b + " is not complete:" + T.tagName), 
_ = g + 1 + b.length) :b.match(/\s</) && (b = b.replace(/[\s<].*/, ""), r.error("end tag name: " + b + " maybe not complete"), 
_ = g + 1 + b.length);
var S = T.localNSMap, k = T.tagName == b, w = k || T.tagName && T.tagName.toLowerCase() == b.toLowerCase();
if (w) {
if (n.endElement(T.uri, T.localName, b), S) for (var E in S) n.endPrefixMapping(E);
k || r.fatalError("end tag name: " + b + " is not match the current start tagName:" + T.tagName);
} else p.push(T);
_++;
break;

case "?":
h && u(g), _ = St(e, g, n);
break;

case "!":
h && u(g), _ = Tt(e, g, n, r);
break;

default:
h && u(g);
var C = new kt(), I = p[p.length - 1].currentNSMap, _ = gt(e, g, C, I, s, r), P = C.length;
if (!C.closed && _t(e, _, C.tagName, f) && (C.closed = !0, i.nbsp || r.warning("unclosed xml attribute")), 
h && P) {
for (var A = mt(h, {}), x = 0; P > x; x++) {
var L = C[x];
u(L.offset), L.locator = mt(h, {});
}
n.locator = A, vt(C, n, I) && p.push(C), n.locator = h;
} else vt(C, n, I) && p.push(C);
"http://www.w3.org/1999/xhtml" !== C.uri || C.closed ? _++ :_ = yt(e, _, C.tagName, s, n);
}
} catch (D) {
r.error("element parse error: " + D), _ = -1;
}
_ > m ? m = _ :o(Math.max(g, m) + 1);
}
}
function mt(e, t) {
return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}
function gt(e, t, i, n, r, a) {
for (var s, o, u = ++t, l = tu; ;) {
var c = e.charAt(u);
switch (c) {
case "=":
if (l === iu) s = e.slice(t, u), l = ru; else {
if (l !== nu) throw new Error("attribute equal must after attrName");
l = ru;
}
break;

case "'":
case '"':
if (l === ru || l === iu) {
if (l === iu && (a.warning('attribute value must after "="'), s = e.slice(t, u)), 
t = u + 1, u = e.indexOf(c, t), !(u > 0)) throw new Error("attribute value no end '" + c + "' match");
o = e.slice(t, u).replace(/&#?\w+;/g, r), i.add(s, o, t - 1), l = su;
} else {
if (l != au) throw new Error('attribute value must after "="');
o = e.slice(t, u).replace(/&#?\w+;/g, r), i.add(s, o, t), a.warning('attribute "' + s + '" missed start quot(' + c + ")!!"), 
t = u + 1, l = su;
}
break;

case "/":
switch (l) {
case tu:
i.setTagName(e.slice(t, u));

case su:
case ou:
case uu:
l = uu, i.closed = !0;

case au:
case iu:
case nu:
break;

default:
throw new Error("attribute invalid close char('/')");
}
break;

case "":
return a.error("unexpected end of input"), l == tu && i.setTagName(e.slice(t, u)), 
u;

case ">":
switch (l) {
case tu:
i.setTagName(e.slice(t, u));

case su:
case ou:
case uu:
break;

case au:
case iu:
o = e.slice(t, u), "/" === o.slice(-1) && (i.closed = !0, o = o.slice(0, -1));

case nu:
l === nu && (o = s), l == au ? (a.warning('attribute "' + o + '" missed quot(")!!'), 
i.add(s, o.replace(/&#?\w+;/g, r), t)) :("http://www.w3.org/1999/xhtml" === n[""] && o.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), 
i.add(o, o, t));
break;

case ru:
throw new Error("attribute value missed!!");
}
return u;

case "\x80":
c = " ";

default:
if (" " >= c) switch (l) {
case tu:
i.setTagName(e.slice(t, u)), l = ou;
break;

case iu:
s = e.slice(t, u), l = nu;
break;

case au:
var o = e.slice(t, u).replace(/&#?\w+;/g, r);
a.warning('attribute "' + o + '" missed quot(")!!'), i.add(s, o, t);

case su:
l = ou;
} else switch (l) {
case nu:
i.tagName;
"http://www.w3.org/1999/xhtml" === n[""] && s.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), 
i.add(s, s, t), t = u, l = iu;
break;

case su:
a.warning('attribute space is required"' + s + '"!!');

case ou:
l = iu, t = u;
break;

case ru:
l = au, t = u;
break;

case uu:
throw new Error("elements closed character '/' and '>' must be connected to");
}
}
u++;
}
}
function vt(e, t, i) {
for (var n = e.tagName, r = null, a = e.length; a--; ) {
var s = e[a], o = s.qName, u = s.value, l = o.indexOf(":");
if (l > 0) var c = s.prefix = o.slice(0, l), d = o.slice(l + 1), h = "xmlns" === c && d; else d = o, 
c = null, h = "xmlns" === o && "";
s.localName = d, h !== !1 && (null == r && (r = {}, bt(i, i = {})), i[h] = r[h] = u, 
s.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(h, u));
}
for (var a = e.length; a--; ) {
s = e[a];
var c = s.prefix;
c && ("xml" === c && (s.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== c && (s.uri = i[c || ""]));
}
var l = n.indexOf(":");
l > 0 ? (c = e.prefix = n.slice(0, l), d = e.localName = n.slice(l + 1)) :(c = null, 
d = e.localName = n);
var p = e.uri = i[c || ""];
if (t.startElement(p, d, n, e), !e.closed) return e.currentNSMap = i, e.localNSMap = r, 
!0;
if (t.endElement(p, d, n), r) for (c in r) t.endPrefixMapping(c);
}
function yt(e, t, i, n, r) {
if (/^(?:script|textarea)$/i.test(i)) {
var a = e.indexOf("</" + i + ">", t), s = e.substring(t + 1, a);
if (/[&<]/.test(s)) return /^script$/i.test(i) ? (r.characters(s, 0, s.length), 
a) :(s = s.replace(/&#?\w+;/g, n), r.characters(s, 0, s.length), a);
}
return t + 1;
}
function _t(e, t, i, n) {
var r = n[i];
return null == r && (r = e.lastIndexOf("</" + i + ">"), t > r && (r = e.lastIndexOf("</" + i)), 
n[i] = r), t > r;
}
function bt(e, t) {
for (var i in e) t[i] = e[i];
}
function Tt(e, t, i, n) {
var r = e.charAt(t + 2);
switch (r) {
case "-":
if ("-" === e.charAt(t + 3)) {
var a = e.indexOf("-->", t + 4);
return a > t ? (i.comment(e, t + 4, a - t - 4), a + 3) :(n.error("Unclosed comment"), 
-1);
}
return -1;

default:
if ("CDATA[" == e.substr(t + 3, 6)) {
var a = e.indexOf("]]>", t + 9);
return i.startCDATA(), i.characters(e, t + 9, a - t - 9), i.endCDATA(), a + 3;
}
var s = Et(e, t), o = s.length;
if (o > 1 && /!doctype/i.test(s[0][0])) {
var u = s[1][0], l = o > 3 && /^public$/i.test(s[2][0]) && s[3][0], c = o > 4 && s[4][0], d = s[o - 1];
return i.startDTD(u, l && l.replace(/^(['"])(.*?)\1$/, "$2"), c && c.replace(/^(['"])(.*?)\1$/, "$2")), 
i.endDTD(), d.index + d[0].length;
}
}
return -1;
}
function St(e, t, i) {
var n = e.indexOf("?>", t);
if (n) {
var r = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
if (r) {
r[0].length;
return i.processingInstruction(r[1], r[2]), n + 2;
}
return -1;
}
return -1;
}
function kt(e) {}
function wt(e, t) {
return e.__proto__ = t, e;
}
function Et(e, t) {
var i, n = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
for (r.lastIndex = t, r.exec(e); i = r.exec(e); ) if (n.push(i), i[1]) return n;
}
function Ct(e, t) {
for (var i in e) t[i] = e[i];
}
function It(e, t) {
var i = e.prototype;
if (Object.create) {
var n = Object.create(t.prototype);
i.__proto__ = n;
}
if (!(i instanceof t)) {
var r = function() {};
r.prototype = t.prototype, r = new r(), Ct(i, r), e.prototype = i = r;
}
i.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
i.constructor = e);
}
function Pt(e, t) {
if (t instanceof Error) var i = t; else i = this, Error.call(this, Cu[e]), this.message = Cu[e], 
Error.captureStackTrace && Error.captureStackTrace(this, Pt);
return i.code = e, t && (this.message = this.message + ": " + t), i;
}
function At() {}
function xt(e, t) {
this._node = e, this._refresh = t, Lt(this);
}
function Lt(e) {
var t = e._node._inc || e._node.ownerDocument._inc;
if (e._inc != t) {
var i = e._refresh(e._node);
di(e, "length", i.length), Ct(i, e), e._inc = t;
}
}
function Dt() {}
function Ot(e, t) {
for (var i = e.length; i--; ) if (e[i] === t) return i;
}
function Rt(e, t, i, n) {
if (n ? t[Ot(t, n)] = i :t[t.length++] = i, e) {
i.ownerElement = e;
var r = e.ownerDocument;
r && (n && Ht(r, e, n), Vt(r, e, i));
}
}
function Nt(e, t, i) {
var n = Ot(t, i);
if (!(n >= 0)) throw Pt(Pu, new Error(e.tagName + "@" + i));
for (var r = t.length - 1; r > n; ) t[n] = t[++n];
if (t.length = r, e) {
var a = e.ownerDocument;
a && (Ht(a, e, i), i.ownerElement = null);
}
}
function Mt(e) {
if (this._features = {}, e) for (var t in e) this._features = e[t];
}
function Ut() {}
function Bt(e) {
return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}
function Ft(e, t) {
if (t(e)) return !0;
if (e = e.firstChild) do if (Ft(e, t)) return !0; while (e = e.nextSibling);
}
function jt() {}
function Vt(e, t, i) {
e && e._inc++;
var n = i.namespaceURI;
"http://www.w3.org/2000/xmlns/" == n && (t._nsMap[i.prefix ? i.localName :""] = i.value);
}
function Ht(e, t, i, n) {
e && e._inc++;
var r = i.namespaceURI;
"http://www.w3.org/2000/xmlns/" == r && delete t._nsMap[i.prefix ? i.localName :""];
}
function qt(e, t, i) {
if (e && e._inc) {
e._inc++;
var n = t.childNodes;
if (i) n[n.length++] = i; else {
for (var r = t.firstChild, a = 0; r; ) n[a++] = r, r = r.nextSibling;
n.length = a;
}
}
}
function Wt(e, t) {
var i = t.previousSibling, n = t.nextSibling;
return i ? i.nextSibling = n :e.firstChild = n, n ? n.previousSibling = i :e.lastChild = i, 
qt(e.ownerDocument, e), t;
}
function zt(e, t, i) {
var n = t.parentNode;
if (n && n.removeChild(t), t.nodeType === ku) {
var r = t.firstChild;
if (null == r) return t;
var a = t.lastChild;
} else r = a = t;
var s = i ? i.previousSibling :e.lastChild;
r.previousSibling = s, a.nextSibling = i, s ? s.nextSibling = r :e.firstChild = r, 
null == i ? e.lastChild = a :i.previousSibling = a;
do r.parentNode = e; while (r !== a && (r = r.nextSibling));
return qt(e.ownerDocument || e, e), t.nodeType == ku && (t.firstChild = t.lastChild = null), 
t;
}
function Gt(e, t) {
var i = t.parentNode;
if (i) {
var n = e.lastChild;
i.removeChild(t);
var n = e.lastChild;
}
var n = e.lastChild;
return t.parentNode = e, t.previousSibling = n, t.nextSibling = null, n ? n.nextSibling = t :e.firstChild = t, 
e.lastChild = t, qt(e.ownerDocument, e, t), t;
}
function Xt() {
this._nsMap = {};
}
function Kt() {}
function Yt() {}
function Qt() {}
function $t() {}
function Jt() {}
function Zt() {}
function ei() {}
function ti() {}
function ii() {}
function ni() {}
function ri() {}
function ai() {}
function si(e, t) {
var i = [], n = 9 == this.nodeType ? this.documentElement :this, r = n.prefix, a = n.namespaceURI;
if (a && null == r) {
var r = n.lookupPrefix(a);
if (null == r) var s = [ {
namespace:a,
prefix:null
} ];
}
return ui(this, i, e, t, s), i.join("");
}
function oi(e, t, i) {
var n = e.prefix || "", r = e.namespaceURI;
if (!n && !r) return !1;
if ("xml" === n && "http://www.w3.org/XML/1998/namespace" === r || "http://www.w3.org/2000/xmlns/" == r) return !1;
for (var a = i.length; a--; ) {
var s = i[a];
if (s.prefix == n) return s.namespace != r;
}
return !0;
}
function ui(e, t, i, n, r) {
if (n) {
if (e = n(e), !e) return;
if ("string" == typeof e) return void t.push(e);
}
switch (e.nodeType) {
case pu:
r || (r = []);
var a = (r.length, e.attributes), s = a.length, o = e.firstChild, u = e.tagName;
i = du === e.namespaceURI || i, t.push("<", u);
for (var l = 0; s > l; l++) {
var c = a.item(l);
"xmlns" == c.prefix ? r.push({
prefix:c.localName,
namespace:c.value
}) :"xmlns" == c.nodeName && r.push({
prefix:"",
namespace:c.value
});
}
for (var l = 0; s > l; l++) {
var c = a.item(l);
if (oi(c, i, r)) {
var d = c.prefix || "", h = c.namespaceURI, p = d ? " xmlns:" + d :" xmlns";
t.push(p, '="', h, '"'), r.push({
prefix:d,
namespace:h
});
}
ui(c, t, i, n, r);
}
if (oi(e, i, r)) {
var d = e.prefix || "", h = e.namespaceURI, p = d ? " xmlns:" + d :" xmlns";
t.push(p, '="', h, '"'), r.push({
prefix:d,
namespace:h
});
}
if (o || i && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
if (t.push(">"), i && /^script$/i.test(u)) for (;o; ) o.data ? t.push(o.data) :ui(o, t, i, n, r), 
o = o.nextSibling; else for (;o; ) ui(o, t, i, n, r), o = o.nextSibling;
t.push("</", u, ">");
} else t.push("/>");
return;

case Tu:
case ku:
for (var o = e.firstChild; o; ) ui(o, t, i, n, r), o = o.nextSibling;
return;

case fu:
return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, Bt), '"');

case mu:
return t.push(e.data.replace(/[<&]/g, Bt));

case gu:
return t.push("<![CDATA[", e.data, "]]>");

case bu:
return t.push("<!--", e.data, "-->");

case Su:
var f = e.publicId, m = e.systemId;
if (t.push("<!DOCTYPE ", e.name), f) t.push(' PUBLIC "', f), m && "." != m && t.push('" "', m), 
t.push('">'); else if (m && "." != m) t.push(' SYSTEM "', m, '">'); else {
var g = e.internalSubset;
g && t.push(" [", g, "]"), t.push(">");
}
return;

case _u:
return t.push("<?", e.target, " ", e.data, "?>");

case vu:
return t.push("&", e.nodeName, ";");

default:
t.push("??", e.nodeName);
}
}
function li(e, t, i) {
var n;
switch (t.nodeType) {
case pu:
n = t.cloneNode(!1), n.ownerDocument = e;

case ku:
break;

case fu:
i = !0;
}
if (n || (n = t.cloneNode(!1)), n.ownerDocument = e, n.parentNode = null, i) for (var r = t.firstChild; r; ) n.appendChild(li(e, r, i)), 
r = r.nextSibling;
return n;
}
function ci(e, t, i) {
var n = new t.constructor();
for (var r in t) {
var a = t[r];
"object" != typeof a && a != n[r] && (n[r] = a);
}
switch (t.childNodes && (n.childNodes = new At()), n.ownerDocument = e, n.nodeType) {
case pu:
var s = t.attributes, o = n.attributes = new Dt(), u = s.length;
o._ownerElement = n;
for (var l = 0; u > l; l++) n.setAttributeNode(ci(e, s.item(l), !0));
break;

case fu:
i = !0;
}
if (i) for (var c = t.firstChild; c; ) n.appendChild(ci(e, c, i)), c = c.nextSibling;
return n;
}
function di(e, t, i) {
e[t] = i;
}
function hi(e, t) {
return function(i) {
var n = this;
if (!t) return new zp(e);
if (zp && !i) {
var r = t.toString().replace(/^function.+?{/, "").slice(0, -1), a = pi(r);
return this[Vp] = new zp(a), fi(this[Vp], a), this[Vp];
}
var s = {
postMessage:function(e) {
n.onmessage && setTimeout(function() {
n.onmessage({
data:e,
target:s
});
});
}
};
t.call(s), this.postMessage = function(e) {
setTimeout(function() {
s.onmessage({
data:e,
target:n
});
});
}, this.isThisThread = !0;
};
}
function pi(e) {
try {
return Wp.createObjectURL(new Blob([ e ], {
type:Hp
}));
} catch (t) {
var i = new qp();
return i.append(e), Wp.createObjectURL(i.getBlob(type));
}
}
function fi(e, t) {
if (e && t) {
var i = e.terminate;
e.objURL = t, e.terminate = function() {
e.objURL && Wp.revokeObjectURL(e.objURL), i.call(e);
};
}
}
function mi() {}
var gi, vi = "7.11.5", yi = "undefined" != typeof globalThis ? globalThis :"undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :{};
gi = "undefined" != typeof window ? window :"undefined" != typeof yi ? yi :"undefined" != typeof self ? self :{};
var _i, bi = gi, Ti = {}, Si = "undefined" != typeof yi ? yi :"undefined" != typeof window ? window :{};
"undefined" != typeof document ? _i = document :(_i = Si["__GLOBAL_DOCUMENT_CACHE@4"], 
_i || (_i = Si["__GLOBAL_DOCUMENT_CACHE@4"] = Ti));
for (var ki, wi = _i, Ei = {
prefixed:!0
}, Ci = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen" ] ], Ii = Ci[0], Pi = 0; Pi < Ci.length; Pi++) if (Ci[Pi][1] in wi) {
ki = Ci[Pi];
break;
}
if (ki) {
for (var Ai = 0; Ai < ki.length; Ai++) Ei[Ii[Ai]] = ki[Ai];
Ei.prefixed = ki[0] !== Ii[0];
}
var xi, Li = [], Di = function(e, t) {
return function(i, n, r) {
var a = t.levels[n], s = new RegExp("^(" + a + ")$");
if ("log" !== i && r.unshift(i.toUpperCase() + ":"), r.unshift(e + ":"), Li) {
Li.push([].concat(r));
var o = Li.length - 1e3;
Li.splice(0, o > 0 ? o :0);
}
if (bi.console) {
var u = bi.console[i];
u || "debug" !== i || (u = bi.console.info || bi.console.log), u && a && s.test(i) && u[Array.isArray(r) ? "apply" :"call"](bi.console, r);
}
};
}, Oi = i("VIDEOJS"), Ri = Oi.createLogger, Ni = t(function(e) {
function t() {
return e.exports = t = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return e;
}, t.apply(this, arguments);
}
e.exports = t;
}), Mi = Object.prototype.toString, Ui = function(e) {
return s(e) ? Object.keys(e) :[];
}, Bi = bi.navigator && bi.navigator.userAgent || "", Fi = /AppleWebKit\/([\d.]+)/i.exec(Bi), ji = Fi ? parseFloat(Fi.pop()) :null, Vi = /iPod/i.test(Bi), Hi = function() {
var e = Bi.match(/OS (\d+)_/i);
return e && e[1] ? e[1] :null;
}(), qi = /Android/i.test(Bi), Wi = function() {
var e = Bi.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
if (!e) return null;
var t = e[1] && parseFloat(e[1]), i = e[2] && parseFloat(e[2]);
return t && i ? parseFloat(e[1] + "." + e[2]) :t ? t :null;
}(), zi = qi && 5 > Wi && 537 > ji, Gi = /Firefox/i.test(Bi), Xi = /Edg/i.test(Bi), Ki = !Xi && (/Chrome/i.test(Bi) || /CriOS/i.test(Bi)), Yi = function() {
var e = Bi.match(/(Chrome|CriOS)\/(\d+)/);
return e && e[2] ? parseFloat(e[2]) :null;
}(), Qi = function() {
var e = /MSIE\s(\d+)\.\d/.exec(Bi), t = e && parseFloat(e[1]);
return !t && /Trident\/7.0/i.test(Bi) && /rv:11.0/.test(Bi) && (t = 11), t;
}(), $i = /Safari/i.test(Bi) && !Ki && !qi && !Xi, Ji = /Windows/i.test(Bi), Zi = Boolean(h() && ("ontouchstart" in bi || bi.navigator.maxTouchPoints || bi.DocumentTouch && bi.document instanceof bi.DocumentTouch)), en = /iPad/i.test(Bi) || $i && Zi && !/iPhone/i.test(Bi), tn = /iPhone/i.test(Bi) && !en, nn = tn || en || Vi, rn = ($i || nn) && !Ki, an = Object.freeze({
__proto__:null,
IS_IPOD:Vi,
IOS_VERSION:Hi,
IS_ANDROID:qi,
ANDROID_VERSION:Wi,
IS_NATIVE_ANDROID:zi,
IS_FIREFOX:Gi,
IS_EDGE:Xi,
IS_CHROME:Ki,
CHROME_VERSION:Yi,
IE_VERSION:Qi,
IS_SAFARI:$i,
IS_WINDOWS:Ji,
TOUCH_ENABLED:Zi,
IS_IPAD:en,
IS_IPHONE:tn,
IS_IOS:nn,
IS_ANY_SAFARI:rn
}), sn = m("querySelector"), on = m("querySelectorAll"), un = Object.freeze({
__proto__:null,
isReal:h,
isEl:p,
isInFrame:f,
createEl:g,
textContent:v,
prependTo:y,
hasClass:_,
addClass:b,
removeClass:T,
toggleClass:S,
setAttributes:k,
getAttributes:w,
getAttribute:E,
setAttribute:C,
removeAttribute:I,
blockTextSelection:P,
unblockTextSelection:A,
getBoundingClientRect:x,
findPosition:L,
getPointerPosition:D,
isTextNode:O,
emptyEl:R,
normalizeContent:N,
appendContent:M,
insertContent:U,
isSingleLeftClick:B,
$:sn,
$$:on
}), ln = !1, cn = function() {
if (h() && xi.options.autoSetup !== !1) {
var e = Array.prototype.slice.call(wi.getElementsByTagName("video")), t = Array.prototype.slice.call(wi.getElementsByTagName("audio")), i = Array.prototype.slice.call(wi.getElementsByTagName("video-js")), n = e.concat(t, i);
if (n && n.length > 0) for (var r = 0, a = n.length; a > r; r++) {
var s = n[r];
if (!s || !s.getAttribute) {
F(1);
break;
}
if (void 0 === s.player) {
var o = s.getAttribute("data-setup");
null !== o && xi(s);
}
} else ln || F(1);
}
};
h() && ("complete" === wi.readyState ? j() :bi.addEventListener("load", j));
var dn, hn = function(e) {
var t = wi.createElement("style");
return t.className = e, t;
}, pn = function(e, t) {
e.styleSheet ? e.styleSheet.cssText = t :e.textContent = t;
}, fn = 3, mn = fn;
bi.WeakMap || (dn = function() {
function e() {
this.vdata = "vdata" + Math.floor(bi.performance && bi.performance.now() || Date.now()), 
this.data = {};
}
var t = e.prototype;
return t.set = function(e, t) {
var i = e[this.vdata] || V();
return e[this.vdata] || (e[this.vdata] = i), this.data[i] = t, this;
}, t.get = function(e) {
var t = e[this.vdata];
return t ? this.data[t] :void Oi("We have no data for this element", e);
}, t.has = function(e) {
var t = e[this.vdata];
return t in this.data;
}, t["delete"] = function(e) {
var t = e[this.vdata];
t && (delete this.data[t], delete e[this.vdata]);
}, e;
}());
var gn, vn = bi.WeakMap ? new WeakMap() :new dn(), yn = function() {
if ("boolean" != typeof gn) {
gn = !1;
try {
var e = Object.defineProperty({}, "passive", {
get:function() {
gn = !0;
}
});
bi.addEventListener("test", null, e), bi.removeEventListener("test", null, e);
} catch (t) {}
}
return gn;
}, _n = [ "touchstart", "touchmove" ], bn = Object.freeze({
__proto__:null,
fixEvent:W,
on:z,
off:G,
trigger:X,
one:K,
any:Y
}), Tn = 30, Sn = function(e, t, i) {
t.guid || (t.guid = V());
var n = t.bind(e);
return n.guid = i ? i + "_" + t.guid :t.guid, n;
}, kn = function(e, t) {
var i = bi.performance.now(), n = function() {
var n = bi.performance.now();
n - i >= t && (e.apply(void 0, arguments), i = n);
};
return n;
}, wn = function(e, t, i, n) {
void 0 === n && (n = bi);
var r, a = function() {
n.clearTimeout(r), r = null;
}, s = function() {
var a = this, s = arguments, o = function() {
r = null, o = null, i || e.apply(a, s);
};
!r && i && e.apply(a, s), n.clearTimeout(r), r = n.setTimeout(o, t);
};
return s.cancel = a, s;
}, En = function() {};
En.prototype.allowedEvents_ = {}, En.prototype.on = function(e, t) {
var i = this.addEventListener;
this.addEventListener = function() {}, z(this, e, t), this.addEventListener = i;
}, En.prototype.addEventListener = En.prototype.on, En.prototype.off = function(e, t) {
G(this, e, t);
}, En.prototype.removeEventListener = En.prototype.off, En.prototype.one = function(e, t) {
var i = this.addEventListener;
this.addEventListener = function() {}, K(this, e, t), this.addEventListener = i;
}, En.prototype.any = function(e, t) {
var i = this.addEventListener;
this.addEventListener = function() {}, Y(this, e, t), this.addEventListener = i;
}, En.prototype.trigger = function(e) {
var t = e.type || e;
"string" == typeof e && (e = {
type:t
}), e = W(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), X(this, e);
}, En.prototype.dispatchEvent = En.prototype.trigger;
var Cn;
En.prototype.queueTrigger = function(e) {
var t = this;
Cn || (Cn = new Map());
var i = e.type || e, n = Cn.get(this);
n || (n = new Map(), Cn.set(this, n));
var r = n.get(i);
n["delete"](i), bi.clearTimeout(r);
var a = bi.setTimeout(function() {
0 === n.size && (n = null, Cn["delete"](t)), t.trigger(e);
}, 0);
n.set(i, a);
};
var In = function(e) {
return "function" == typeof e.name ? e.name() :"string" == typeof e.name ? e.name :e.name_ ? e.name_ :e.constructor && e.constructor.name ? e.constructor.name :typeof e;
}, Pn = function(e) {
return e instanceof En || !!e.eventBusEl_ && [ "on", "one", "off", "trigger" ].every(function(t) {
return "function" == typeof e[t];
});
}, An = function(e, t) {
Pn(e) ? t() :(e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t));
}, xn = function(e) {
return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length;
}, Ln = function(e, t, i) {
if (!e || !e.nodeName && !Pn(e)) throw new Error("Invalid target for " + In(t) + "#" + i + "; must be a DOM node or evented object.");
}, Dn = function(e, t, i) {
if (!xn(e)) throw new Error("Invalid event type for " + In(t) + "#" + i + "; must be a non-empty string or array.");
}, On = function(e, t, i) {
if ("function" != typeof e) throw new Error("Invalid listener for " + In(t) + "#" + i + "; must be a function.");
}, Rn = function(e, t, i) {
var n, r, a, s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
return s ? (n = e.eventBusEl_, t.length >= 3 && t.shift(), r = t[0], a = t[1]) :(n = t[0], 
r = t[1], a = t[2]), Ln(n, e, i), Dn(r, e, i), On(a, e, i), a = Sn(e, a), {
isTargetingSelf:s,
target:n,
type:r,
listener:a
};
}, Nn = function(e, t, i, n) {
Ln(e, e, t), e.nodeName ? bn[t](e, i, n) :e[t](i, n);
}, Mn = {
on:function() {
for (var e = this, t = arguments.length, i = new Array(t), n = 0; t > n; n++) i[n] = arguments[n];
var r = Rn(this, i, "on"), a = r.isTargetingSelf, s = r.target, o = r.type, u = r.listener;
if (Nn(s, "on", o, u), !a) {
var l = function() {
return e.off(s, o, u);
};
l.guid = u.guid;
var c = function() {
return e.off("dispose", l);
};
c.guid = u.guid, Nn(this, "on", "dispose", l), Nn(s, "on", "dispose", c);
}
},
one:function() {
for (var e = this, t = arguments.length, i = new Array(t), n = 0; t > n; n++) i[n] = arguments[n];
var r = Rn(this, i, "one"), a = r.isTargetingSelf, s = r.target, o = r.type, u = r.listener;
if (a) Nn(s, "one", o, u); else {
var l = function c() {
e.off(s, o, c);
for (var t = arguments.length, i = new Array(t), n = 0; t > n; n++) i[n] = arguments[n];
u.apply(null, i);
};
l.guid = u.guid, Nn(s, "one", o, l);
}
},
any:function() {
for (var e = this, t = arguments.length, i = new Array(t), n = 0; t > n; n++) i[n] = arguments[n];
var r = Rn(this, i, "any"), a = r.isTargetingSelf, s = r.target, o = r.type, u = r.listener;
if (a) Nn(s, "any", o, u); else {
var l = function c() {
e.off(s, o, c);
for (var t = arguments.length, i = new Array(t), n = 0; t > n; n++) i[n] = arguments[n];
u.apply(null, i);
};
l.guid = u.guid, Nn(s, "any", o, l);
}
},
off:function(e, t, i) {
if (!e || xn(e)) G(this.eventBusEl_, e, t); else {
var n = e, r = t;
Ln(n, this, "off"), Dn(r, this, "off"), On(i, this, "off"), i = Sn(this, i), this.off("dispose", i), 
n.nodeName ? (G(n, r, i), G(n, "dispose", i)) :Pn(n) && (n.off(r, i), n.off("dispose", i));
}
},
trigger:function(e, t) {
Ln(this.eventBusEl_, this, "trigger");
var i = e && "string" != typeof e ? e.type :e;
if (!xn(i)) {
var n = "Invalid event type for " + In(this) + "#trigger; must be a non-empty string or object with a type key that has a non-empty value.";
if (!e) throw new Error(n);
(this.log || Oi).error(n);
}
return X(this.eventBusEl_, e, t);
}
}, Un = {
state:{},
setState:function(e) {
var t = this;
"function" == typeof e && (e = e());
var i;
return n(e, function(e, n) {
t.state[n] !== e && (i = i || {}, i[n] = {
from:t.state[n],
to:e
}), t.state[n] = e;
}), i && Pn(this) && this.trigger({
changes:i,
type:"statechanged"
}), i;
}
}, Bn = function(e) {
return "string" != typeof e ? e :e.replace(/./, function(e) {
return e.toLowerCase();
});
}, Fn = function(e) {
return "string" != typeof e ? e :e.replace(/./, function(e) {
return e.toUpperCase();
});
}, jn = function(e, t) {
return Fn(e) === Fn(t);
}, Vn = function() {
function e() {
this.map_ = {};
}
var t = e.prototype;
return t.has = function(e) {
return e in this.map_;
}, t["delete"] = function(e) {
var t = this.has(e);
return delete this.map_[e], t;
}, t.set = function(e, t) {
return this.map_[e] = t, this;
}, t.forEach = function(e, t) {
for (var i in this.map_) e.call(t, this.map_[i], i, this);
}, e;
}(), Hn = bi.Map ? bi.Map :Vn, qn = function() {
function e() {
this.set_ = {};
}
var t = e.prototype;
return t.has = function(e) {
return e in this.set_;
}, t["delete"] = function(e) {
var t = this.has(e);
return delete this.set_[e], t;
}, t.add = function(e) {
return this.set_[e] = 1, this;
}, t.forEach = function(e, t) {
for (var i in this.set_) e.call(t, i, i, this);
}, e;
}(), Wn = bi.Set ? bi.Set :qn, zn = function() {
function e(e, t, i) {
if (!e && this.play ? this.player_ = e = this :this.player_ = e, this.isDisposed_ = !1, 
this.parentComponent_ = null, this.options_ = J({}, this.options_), t = this.options_ = J(this.options_, t), 
this.id_ = t.id || t.el && t.el.id, !this.id_) {
var n = e && e.id && e.id() || "no_player";
this.id_ = n + "_component_" + V();
}
this.name_ = t.name || null, t.el ? this.el_ = t.el :t.createEl !== !1 && (this.el_ = this.createEl()), 
t.evented !== !1 && (Q(this, {
eventBusKey:this.el_ ? "el_" :null
}), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), 
$(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, 
this.childNameIndex_ = {}, this.setTimeoutIds_ = new Wn(), this.setIntervalIds_ = new Wn(), 
this.rafIds_ = new Wn(), this.namedRafs_ = new Hn(), this.clearingTimersOnDispose_ = !1, 
t.initChildren !== !1 && this.initChildren(), this.ready(i), t.reportTouchActivity !== !1 && this.enableTouchActivity();
}
var t = e.prototype;
return t.dispose = function() {
if (!this.isDisposed_) {
if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({
type:"dispose",
bubbles:!1
}), this.isDisposed_ = !0, this.children_) for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, 
this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vn.has(this.el_) && vn["delete"](this.el_), 
this.el_ = null), this.player_ = null;
}
}, t.isDisposed = function() {
return Boolean(this.isDisposed_);
}, t.player = function() {
return this.player_;
}, t.options = function(e) {
return e ? (this.options_ = J(this.options_, e), this.options_) :this.options_;
}, t.el = function() {
return this.el_;
}, t.createEl = function(e, t, i) {
return g(e, t, i);
}, t.localize = function(e, t, i) {
void 0 === i && (i = e);
var n = this.player_.language && this.player_.language(), r = this.player_.languages && this.player_.languages(), a = r && r[n], s = n && n.split("-")[0], o = r && r[s], u = i;
return a && a[e] ? u = a[e] :o && o[e] && (u = o[e]), t && (u = u.replace(/\{(\d+)\}/g, function(e, i) {
var n = t[i - 1], r = n;
return "undefined" == typeof n && (r = e), r;
})), u;
}, t.handleLanguagechange = function() {}, t.contentEl = function() {
return this.contentEl_ || this.el_;
}, t.id = function() {
return this.id_;
}, t.name = function() {
return this.name_;
}, t.children = function() {
return this.children_;
}, t.getChildById = function(e) {
return this.childIndex_[e];
}, t.getChild = function(e) {
return e ? this.childNameIndex_[e] :void 0;
}, t.getDescendant = function() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
t = t.reduce(function(e, t) {
return e.concat(t);
}, []);
for (var n = this, r = 0; r < t.length; r++) if (n = n.getChild(t[r]), !n || !n.getChild) return;
return n;
}, t.addChild = function(t, i, n) {
void 0 === i && (i = {}), void 0 === n && (n = this.children_.length);
var r, a;
if ("string" == typeof t) {
a = Fn(t);
var s = i.componentClass || a;
i.name = a;
var o = e.getComponent(s);
if (!o) throw new Error("Component " + s + " does not exist");
if ("function" != typeof o) return null;
r = new o(this.player_ || this, i);
} else r = t;
if (r.parentComponent_ && r.parentComponent_.removeChild(r), this.children_.splice(n, 0, r), 
r.parentComponent_ = this, "function" == typeof r.id && (this.childIndex_[r.id()] = r), 
a = a || r.name && Fn(r.name()), a && (this.childNameIndex_[a] = r, this.childNameIndex_[Bn(a)] = r), 
"function" == typeof r.el && r.el()) {
var u = null;
this.children_[n + 1] && (this.children_[n + 1].el_ ? u = this.children_[n + 1].el_ :p(this.children_[n + 1]) && (u = this.children_[n + 1])), 
this.contentEl().insertBefore(r.el(), u);
}
return r;
}, t.removeChild = function(e) {
if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
for (var t = !1, i = this.children_.length - 1; i >= 0; i--) if (this.children_[i] === e) {
t = !0, this.children_.splice(i, 1);
break;
}
if (t) {
e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[Fn(e.name())] = null, 
this.childNameIndex_[Bn(e.name())] = null;
var n = e.el();
n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el());
}
}
}, t.initChildren = function() {
var t = this, i = this.options_.children;
if (i) {
var n, r = this.options_, a = function(e) {
var i = e.name, n = e.opts;
if (void 0 !== r[i] && (n = r[i]), n !== !1) {
n === !0 && (n = {}), n.playerOptions = t.options_.playerOptions;
var a = t.addChild(i, n);
a && (t[i] = a);
}
}, s = e.getComponent("Tech");
n = Array.isArray(i) ? i :Object.keys(i), n.concat(Object.keys(this.options_).filter(function(e) {
return !n.some(function(t) {
return "string" == typeof t ? e === t :e === t.name;
});
})).map(function(e) {
var n, r;
return "string" == typeof e ? (n = e, r = i[n] || t.options_[n] || {}) :(n = e.name, 
r = e), {
name:n,
opts:r
};
}).filter(function(t) {
var i = e.getComponent(t.opts.componentClass || Fn(t.name));
return i && !s.isTech(i);
}).forEach(a);
}
}, t.buildCSSClass = function() {
return "";
}, t.ready = function(e, t) {
return void 0 === t && (t = !1), e ? this.isReady_ ? void (t ? e.call(this) :this.setTimeout(e, 1)) :(this.readyQueue_ = this.readyQueue_ || [], 
void this.readyQueue_.push(e)) :void 0;
}, t.triggerReady = function() {
this.isReady_ = !0, this.setTimeout(function() {
var e = this.readyQueue_;
this.readyQueue_ = [], e && e.length > 0 && e.forEach(function(e) {
e.call(this);
}, this), this.trigger("ready");
}, 1);
}, t.$ = function(e, t) {
return sn(e, t || this.contentEl());
}, t.$$ = function(e, t) {
return on(e, t || this.contentEl());
}, t.hasClass = function(e) {
return _(this.el_, e);
}, t.addClass = function(e) {
b(this.el_, e);
}, t.removeClass = function(e) {
T(this.el_, e);
}, t.toggleClass = function(e, t) {
S(this.el_, e, t);
}, t.show = function() {
this.removeClass("vjs-hidden");
}, t.hide = function() {
this.addClass("vjs-hidden");
}, t.lockShowing = function() {
this.addClass("vjs-lock-showing");
}, t.unlockShowing = function() {
this.removeClass("vjs-lock-showing");
}, t.getAttribute = function(e) {
return E(this.el_, e);
}, t.setAttribute = function(e, t) {
C(this.el_, e, t);
}, t.removeAttribute = function(e) {
I(this.el_, e);
}, t.width = function(e, t) {
return this.dimension("width", e, t);
}, t.height = function(e, t) {
return this.dimension("height", e, t);
}, t.dimensions = function(e, t) {
this.width(e, !0), this.height(t);
}, t.dimension = function(e, t, i) {
if (void 0 !== t) return (null === t || t !== t) && (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t :"auto" === t ? this.el_.style[e] = "" :this.el_.style[e] = t + "px", 
void (i || this.trigger("componentresize"));
if (!this.el_) return 0;
var n = this.el_.style[e], r = n.indexOf("px");
return -1 !== r ? parseInt(n.slice(0, r), 10) :parseInt(this.el_["offset" + Fn(e)], 10);
}, t.currentDimension = function(e) {
var t = 0;
if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
if (t = u(this.el_, e), t = parseFloat(t), 0 === t || isNaN(t)) {
var i = "offset" + Fn(e);
t = this.el_[i];
}
return t;
}, t.currentDimensions = function() {
return {
width:this.currentDimension("width"),
height:this.currentDimension("height")
};
}, t.currentWidth = function() {
return this.currentDimension("width");
}, t.currentHeight = function() {
return this.currentDimension("height");
}, t.focus = function() {
this.el_.focus();
}, t.blur = function() {
this.el_.blur();
}, t.handleKeyDown = function(e) {
this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e));
}, t.handleKeyPress = function(e) {
this.handleKeyDown(e);
}, t.emitTapEvents = function() {
var e, t = 0, i = null, n = 10, r = 200;
this.on("touchstart", function(n) {
1 === n.touches.length && (i = {
pageX:n.touches[0].pageX,
pageY:n.touches[0].pageY
}, t = bi.performance.now(), e = !0);
}), this.on("touchmove", function(t) {
if (t.touches.length > 1) e = !1; else if (i) {
var r = t.touches[0].pageX - i.pageX, a = t.touches[0].pageY - i.pageY, s = Math.sqrt(r * r + a * a);
s > n && (e = !1);
}
});
var a = function() {
e = !1;
};
this.on("touchleave", a), this.on("touchcancel", a), this.on("touchend", function(n) {
if (i = null, e === !0) {
var a = bi.performance.now() - t;
r > a && (n.preventDefault(), this.trigger("tap"));
}
});
}, t.enableTouchActivity = function() {
if (this.player() && this.player().reportUserActivity) {
var e, t = Sn(this.player(), this.player().reportUserActivity);
this.on("touchstart", function() {
t(), this.clearInterval(e), e = this.setInterval(t, 250);
});
var i = function(i) {
t(), this.clearInterval(e);
};
this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i);
}
}, t.setTimeout = function(e, t) {
var i, n = this;
return e = Sn(this, e), this.clearTimersOnDispose_(), i = bi.setTimeout(function() {
n.setTimeoutIds_.has(i) && n.setTimeoutIds_["delete"](i), e();
}, t), this.setTimeoutIds_.add(i), i;
}, t.clearTimeout = function(e) {
return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_["delete"](e), bi.clearTimeout(e)), 
e;
}, t.setInterval = function(e, t) {
e = Sn(this, e), this.clearTimersOnDispose_();
var i = bi.setInterval(e, t);
return this.setIntervalIds_.add(i), i;
}, t.clearInterval = function(e) {
return this.setIntervalIds_.has(e) && (this.setIntervalIds_["delete"](e), bi.clearInterval(e)), 
e;
}, t.requestAnimationFrame = function(e) {
var t = this;
if (!this.supportsRaf_) return this.setTimeout(e, 1e3 / 60);
this.clearTimersOnDispose_();
var i;
return e = Sn(this, e), i = bi.requestAnimationFrame(function() {
t.rafIds_.has(i) && t.rafIds_["delete"](i), e();
}), this.rafIds_.add(i), i;
}, t.requestNamedAnimationFrame = function(e, t) {
var i = this;
if (!this.namedRafs_.has(e)) {
this.clearTimersOnDispose_(), t = Sn(this, t);
var n = this.requestAnimationFrame(function() {
t(), i.namedRafs_.has(e) && i.namedRafs_["delete"](e);
});
return this.namedRafs_.set(e, n), e;
}
}, t.cancelNamedAnimationFrame = function(e) {
this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_["delete"](e));
}, t.cancelAnimationFrame = function(e) {
return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_["delete"](e), bi.cancelAnimationFrame(e)), 
e) :this.clearTimeout(e);
}, t.clearTimersOnDispose_ = function() {
var e = this;
this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", function() {
[ [ "namedRafs_", "cancelNamedAnimationFrame" ], [ "rafIds_", "cancelAnimationFrame" ], [ "setTimeoutIds_", "clearTimeout" ], [ "setIntervalIds_", "clearInterval" ] ].forEach(function(t) {
var i = t[0], n = t[1];
e[i].forEach(function(t, i) {
return e[n](i);
});
}), e.clearingTimersOnDispose_ = !1;
}));
}, e.registerComponent = function(t, i) {
if ("string" != typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
var n = e.getComponent("Tech"), r = n && n.isTech(i), a = e === i || e.prototype.isPrototypeOf(i.prototype);
if (r || !a) {
var s;
throw s = r ? "techs must be registered using Tech.registerTech()" :"must be a Component subclass", 
new Error('Illegal component, "' + t + '"; ' + s + ".");
}
t = Fn(t), e.components_ || (e.components_ = {});
var o = e.getComponent("Player");
if ("Player" === t && o && o.players) {
var u = o.players, l = Object.keys(u);
if (u && l.length > 0 && l.map(function(e) {
return u[e];
}).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
}
return e.components_[t] = i, e.components_[Bn(t)] = i, i;
}, e.getComponent = function(t) {
return t && e.components_ ? e.components_[t] :void 0;
}, e;
}();
zn.prototype.supportsRaf_ = "function" == typeof bi.requestAnimationFrame && "function" == typeof bi.cancelAnimationFrame, 
zn.registerComponent("Component", zn);
var Gn = Z, Xn = (t(function(e) {
function t(i) {
"@babel/helpers - typeof";
return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function(e) {
return typeof e;
} :e.exports = t = function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :typeof e;
}, t(i);
}
e.exports = t;
}), t(function(e) {
function t(i) {
return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf :function(e) {
return e.__proto__ || Object.getPrototypeOf(e);
}, t(i);
}
e.exports = t;
}), ee);
se.prototype.code = 0, se.prototype.message = "", se.prototype.status = null, se.errorTypes = [ "MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED" ], 
se.defaultMessages = {
1:"You aborted the media playback",
2:"A network error caused the media download to fail part-way.",
3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",
5:"The media is encrypted and we do not have the keys to decrypt it."
};
for (var Kn = 0; Kn < se.errorTypes.length; Kn++) se[se.errorTypes[Kn]] = Kn, se.prototype[se.errorTypes[Kn]] = Kn;
var Yn = oe, Qn = function(e) {
var t = [ "kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src" ].reduce(function(t, i, n) {
return e[i] && (t[i] = e[i]), t;
}, {
cues:e.cues && Array.prototype.map.call(e.cues, function(e) {
return {
startTime:e.startTime,
endTime:e.endTime,
text:e.text,
id:e.id
};
})
});
return t;
}, $n = function(e) {
var t = e.$$("track"), i = Array.prototype.map.call(t, function(e) {
return e.track;
}), n = Array.prototype.map.call(t, function(e) {
var t = Qn(e.track);
return e.src && (t.src = e.src), t;
});
return n.concat(Array.prototype.filter.call(e.textTracks(), function(e) {
return -1 === i.indexOf(e);
}).map(Qn));
}, Jn = function(e, t) {
return e.forEach(function(e) {
var i = t.addRemoteTextTrack(e).track;
!e.src && e.cues && e.cues.forEach(function(e) {
return i.addCue(e);
});
}), t.textTracks();
}, Zn = {
textTracksToJson:$n,
jsonToTextTracks:Jn,
trackToJson_:Qn
}, er = t(function(e, t) {
function i(e) {
if (e && "object" == typeof e) {
var t = e.which || e.keyCode || e.charCode;
t && (e = t);
}
if ("number" == typeof e) return s[e];
var i = String(e), a = n[i.toLowerCase()];
if (a) return a;
var a = r[i.toLowerCase()];
return a ? a :1 === i.length ? i.charCodeAt(0) :void 0;
}
i.isEventKey = function(e, t) {
if (e && "object" == typeof e) {
var i = e.which || e.keyCode || e.charCode;
if (null === i || void 0 === i) return !1;
if ("string" == typeof t) {
var a = n[t.toLowerCase()];
if (a) return a === i;
var a = r[t.toLowerCase()];
if (a) return a === i;
} else if ("number" == typeof t) return t === i;
return !1;
}
}, t = e.exports = i;
var n = t.code = t.codes = {
backspace:8,
tab:9,
enter:13,
shift:16,
ctrl:17,
alt:18,
"pause/break":19,
"caps lock":20,
esc:27,
space:32,
"page up":33,
"page down":34,
end:35,
home:36,
left:37,
up:38,
right:39,
down:40,
insert:45,
"delete":46,
command:91,
"left command":91,
"right command":93,
"numpad *":106,
"numpad +":107,
"numpad -":109,
"numpad .":110,
"numpad /":111,
"num lock":144,
"scroll lock":145,
"my computer":182,
"my calculator":183,
";":186,
"=":187,
",":188,
"-":189,
".":190,
"/":191,
"`":192,
"[":219,
"\\":220,
"]":221,
"'":222
}, r = t.aliases = {
windows:91,
"\u21e7":16,
"\u2325":18,
"\u2303":17,
"\u2318":91,
ctl:17,
control:17,
option:18,
pause:19,
"break":19,
caps:20,
"return":13,
escape:27,
spc:32,
spacebar:32,
pgup:33,
pgdn:34,
ins:45,
del:46,
cmd:91
};
for (a = 97; 123 > a; a++) n[String.fromCharCode(a)] = a - 32;
for (var a = 48; 58 > a; a++) n[a - 48] = a;
for (a = 1; 13 > a; a++) n["f" + a] = a + 111;
for (a = 0; 10 > a; a++) n["numpad " + a] = a + 96;
var s = t.names = t.title = {};
for (a in n) s[n[a]] = a;
for (var o in r) n[o] = r[o];
}), tr = (er.code, er.codes, er.aliases, er.names, er.title, "vjs-modal-dialog"), ir = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1, 
n.closeable(!n.options_.uncloseable), n.content(n.options_.content), n.contentEl_ = g("div", {
className:tr + "-content"
}, {
role:"document"
}), n.descEl_ = g("p", {
className:tr + "-description vjs-control-text",
id:n.el().getAttribute("aria-describedby")
}), v(n.descEl_, n.description()), n.el_.appendChild(n.descEl_), n.el_.appendChild(n.contentEl_), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:this.buildCSSClass(),
tabIndex:-1
}, {
"aria-describedby":this.id() + "_description",
"aria-hidden":"true",
"aria-label":this.label(),
role:"dialog"
});
}, i.dispose = function() {
this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, e.prototype.dispose.call(this);
}, i.buildCSSClass = function() {
return tr + " vjs-hidden " + e.prototype.buildCSSClass.call(this);
}, i.label = function() {
return this.localize(this.options_.label || "Modal Window");
}, i.description = function() {
var e = this.options_.description || this.localize("This is a modal window.");
return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), 
e;
}, i.open = function() {
if (!this.opened_) {
var e = this.player();
this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), 
this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), 
this.on("keydown", this.handleKeyDown), this.hadControls_ = e.controls(), e.controls(!1), 
this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), 
this.trigger("modalopen"), this.hasBeenOpened_ = !0;
}
}, i.opened = function(e) {
return "boolean" == typeof e && this[e ? "open" :"close"](), this.opened_;
}, i.close = function() {
if (this.opened_) {
var e = this.player();
this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), 
this.off("keydown", this.handleKeyDown), this.hadControls_ && e.controls(!0), this.hide(), 
this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), 
this.options_.temporary && this.dispose();
}
}, i.closeable = function n(e) {
if ("boolean" == typeof e) {
var n = this.closeable_ = !!e, t = this.getChild("closeButton");
if (n && !t) {
var i = this.contentEl_;
this.contentEl_ = this.el_, t = this.addChild("closeButton", {
controlText:"Close Modal Dialog"
}), this.contentEl_ = i, this.on(t, "close", this.close);
}
!n && t && (this.off(t, "close", this.close), this.removeChild(t), t.dispose());
}
return this.closeable_;
}, i.fill = function() {
this.fillWith(this.content());
}, i.fillWith = function(e) {
var t = this.contentEl(), i = t.parentNode, n = t.nextSibling;
this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), 
U(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) :i.appendChild(t);
var r = this.getChild("closeButton");
r && i.appendChild(r.el_);
}, i.empty = function() {
this.trigger("beforemodalempty"), R(this.contentEl()), this.trigger("modalempty");
}, i.content = function(e) {
return "undefined" != typeof e && (this.content_ = e), this.content_;
}, i.conditionalFocus_ = function() {
var e = wi.activeElement, t = this.player_.el_;
this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, 
this.focus());
}, i.conditionalBlur_ = function() {
this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
}, i.handleKeyDown = function(e) {
if (e.stopPropagation(), er.isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(), 
void this.close();
if (er.isEventKey(e, "Tab")) {
for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++) if (n === i[r]) {
t = r;
break;
}
wi.activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), 
e.preventDefault()) :e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault());
}
}, i.focusableEls_ = function() {
var e = this.el_.querySelectorAll("*");
return Array.prototype.filter.call(e, function(e) {
return (e instanceof bi.HTMLAnchorElement || e instanceof bi.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof bi.HTMLInputElement || e instanceof bi.HTMLSelectElement || e instanceof bi.HTMLTextAreaElement || e instanceof bi.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof bi.HTMLIFrameElement || e instanceof bi.HTMLObjectElement || e instanceof bi.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable");
});
}, t;
}(zn);
ir.prototype.options_ = {
pauseOnOpen:!0,
temporary:!0
}, zn.registerComponent("ModalDialog", ir);
var nr = function(e) {
function t(t) {
var i;
void 0 === t && (t = []), i = e.call(this) || this, i.tracks_ = [], Object.defineProperty(Gn(i), "length", {
get:function() {
return this.tracks_.length;
}
});
for (var n = 0; n < t.length; n++) i.addTrack(t[n]);
return i;
}
Xn(t, e);
var i = t.prototype;
return i.addTrack = function(e) {
var t = this, i = this.tracks_.length;
"" + i in this || Object.defineProperty(this, i, {
get:function() {
return this.tracks_[i];
}
}), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
track:e,
type:"addtrack",
target:this
})), e.labelchange_ = function() {
t.trigger({
track:e,
type:"labelchange",
target:t
});
}, Pn(e) && e.addEventListener("labelchange", e.labelchange_);
}, i.removeTrack = function(e) {
for (var t, i = 0, n = this.length; n > i; i++) if (this[i] === e) {
t = this[i], t.off && t.off(), this.tracks_.splice(i, 1);
break;
}
t && this.trigger({
track:t,
type:"removetrack",
target:this
});
}, i.getTrackById = function(e) {
for (var t = null, i = 0, n = this.length; n > i; i++) {
var r = this[i];
if (r.id === e) {
t = r;
break;
}
}
return t;
}, t;
}(En);
nr.prototype.allowedEvents_ = {
change:"change",
addtrack:"addtrack",
removetrack:"removetrack",
labelchange:"labelchange"
};
for (var rr in nr.prototype.allowedEvents_) nr.prototype["on" + rr] = null;
var ar, sr = function(e, t) {
for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1);
}, or = function(e) {
function t(t) {
var i;
void 0 === t && (t = []);
for (var n = t.length - 1; n >= 0; n--) if (t[n].enabled) {
sr(t, t[n]);
break;
}
return i = e.call(this, t) || this, i.changing_ = !1, i;
}
Xn(t, e);
var i = t.prototype;
return i.addTrack = function(t) {
var i = this;
t.enabled && sr(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.enabledChange_ = function() {
i.changing_ || (i.changing_ = !0, sr(i, t), i.changing_ = !1, i.trigger("change"));
}, t.addEventListener("enabledchange", t.enabledChange_));
}, i.removeTrack = function(t) {
e.prototype.removeTrack.call(this, t), t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_), 
t.enabledChange_ = null);
}, t;
}(nr), ur = function(e, t) {
for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1);
}, lr = function(e) {
function t(t) {
var i;
void 0 === t && (t = []);
for (var n = t.length - 1; n >= 0; n--) if (t[n].selected) {
ur(t, t[n]);
break;
}
return i = e.call(this, t) || this, i.changing_ = !1, Object.defineProperty(Gn(i), "selectedIndex", {
get:function() {
for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
return -1;
},
set:function() {}
}), i;
}
Xn(t, e);
var i = t.prototype;
return i.addTrack = function(t) {
var i = this;
t.selected && ur(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.selectedChange_ = function() {
i.changing_ || (i.changing_ = !0, ur(i, t), i.changing_ = !1, i.trigger("change"));
}, t.addEventListener("selectedchange", t.selectedChange_));
}, i.removeTrack = function(t) {
e.prototype.removeTrack.call(this, t), t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_), 
t.selectedChange_ = null);
}, t;
}(nr), cr = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.addTrack = function(t) {
var i = this;
e.prototype.addTrack.call(this, t), this.queueChange_ || (this.queueChange_ = function() {
return i.queueTrigger("change");
}), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
return i.trigger("selectedlanguagechange");
}), t.addEventListener("modechange", this.queueChange_);
var n = [ "metadata", "chapters" ];
-1 === n.indexOf(t.kind) && t.addEventListener("modechange", this.triggerSelectedlanguagechange_);
}, i.removeTrack = function(t) {
e.prototype.removeTrack.call(this, t), t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_), 
this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_));
}, t;
}(nr), dr = function() {
function e(e) {
void 0 === e && (e = []), this.trackElements_ = [], Object.defineProperty(this, "length", {
get:function() {
return this.trackElements_.length;
}
});
for (var t = 0, i = e.length; i > t; t++) this.addTrackElement_(e[t]);
}
var t = e.prototype;
return t.addTrackElement_ = function(e) {
var t = this.trackElements_.length;
"" + t in this || Object.defineProperty(this, t, {
get:function() {
return this.trackElements_[t];
}
}), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e);
}, t.getTrackElementByTrack_ = function(e) {
for (var t, i = 0, n = this.trackElements_.length; n > i; i++) if (e === this.trackElements_[i].track) {
t = this.trackElements_[i];
break;
}
return t;
}, t.removeTrackElement_ = function(e) {
for (var t = 0, i = this.trackElements_.length; i > t; t++) if (e === this.trackElements_[t]) {
this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), 
"function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(), 
this.trackElements_.splice(t, 1);
break;
}
}, e;
}(), hr = function() {
function e(t) {
e.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", {
get:function() {
return this.length_;
}
});
}
var t = e.prototype;
return t.setCues_ = function(e) {
var t = this.length || 0, i = 0, n = e.length;
this.cues_ = e, this.length_ = e.length;
var r = function(e) {
"" + e in this || Object.defineProperty(this, "" + e, {
get:function() {
return this.cues_[e];
}
});
};
if (n > t) for (i = t; n > i; i++) r.call(this, i);
}, t.getCueById = function(e) {
for (var t = null, i = 0, n = this.length; n > i; i++) {
var r = this[i];
if (r.id === e) {
t = r;
break;
}
}
return t;
}, e;
}(), pr = {
alternative:"alternative",
captions:"captions",
main:"main",
sign:"sign",
subtitles:"subtitles",
commentary:"commentary"
}, fr = {
alternative:"alternative",
descriptions:"descriptions",
main:"main",
"main-desc":"main-desc",
translation:"translation",
commentary:"commentary"
}, mr = {
subtitles:"subtitles",
captions:"captions",
descriptions:"descriptions",
chapters:"chapters",
metadata:"metadata"
}, gr = {
disabled:"disabled",
hidden:"hidden",
showing:"showing"
}, vr = function(e) {
function t(t) {
var i;
void 0 === t && (t = {}), i = e.call(this) || this;
var n = {
id:t.id || "vjs_track_" + V(),
kind:t.kind || "",
language:t.language || ""
}, r = t.label || "", a = function(e) {
Object.defineProperty(Gn(i), e, {
get:function() {
return n[e];
},
set:function() {}
});
};
for (var s in n) a(s);
return Object.defineProperty(Gn(i), "label", {
get:function() {
return r;
},
set:function(e) {
e !== r && (r = e, this.trigger("labelchange"));
}
}), i;
}
return Xn(t, e), t;
}(En), yr = function(e) {
var t = [ "protocol", "hostname", "port", "pathname", "search", "hash", "host" ], i = wi.createElement("a");
i.href = e;
var n, r = "" === i.host && "file:" !== i.protocol;
r && (n = wi.createElement("div"), n.innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, 
n.setAttribute("style", "display:none; position:absolute;"), wi.body.appendChild(n));
for (var a = {}, s = 0; s < t.length; s++) a[t[s]] = i[t[s]];
return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), 
a.protocol || (a.protocol = bi.location.protocol), r && wi.body.removeChild(n), 
a;
}, _r = function(e) {
if (!e.match(/^https?:\/\//)) {
var t = wi.createElement("div");
t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href;
}
return e;
}, br = function(e) {
if ("string" == typeof e) {
var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/, i = t.exec(e);
if (i) return i.pop().toLowerCase();
}
return "";
}, Tr = function(e, t) {
void 0 === t && (t = bi.location);
var i = yr(e), n = ":" === i.protocol ? t.protocol :i.protocol, r = n + i.host !== t.protocol + t.host;
return r;
}, Sr = Object.freeze({
__proto__:null,
parseUrl:yr,
getAbsoluteURL:_r,
getFileExtension:br,
isCrossOrigin:Tr
});
ar = "undefined" != typeof window ? window :"undefined" != typeof yi ? yi :"undefined" != typeof self ? self :{};
var kr = ar, wr = ce, Er = Object.prototype.toString, Cr = function(e) {
var t = {};
return e ? (e.trim().split("\n").forEach(function(e) {
var i = e.indexOf(":"), n = e.slice(0, i).trim().toLowerCase(), r = e.slice(i + 1).trim();
"undefined" == typeof t[n] ? t[n] = r :Array.isArray(t[n]) ? t[n].push(r) :t[n] = [ t[n], r ];
}), t) :t;
}, Ir = fe, Pr = fe;
fe.XMLHttpRequest = kr.XMLHttpRequest || ve, fe.XDomainRequest = "withCredentials" in new fe.XMLHttpRequest() ? fe.XMLHttpRequest :kr.XDomainRequest, 
de([ "get", "put", "post", "patch", "head", "delete" ], function(e) {
fe["delete" === e ? "del" :e] = function(t, i, n) {
return i = pe(t, i, n), i.method = e.toUpperCase(), me(i);
};
}), Ir["default"] = Pr;
var Ar = function(e, t) {
var i = new bi.WebVTT.Parser(bi, bi.vttjs, bi.WebVTT.StringDecoder()), n = [];
i.oncue = function(e) {
t.addCue(e);
}, i.onparsingerror = function(e) {
n.push(e);
}, i.onflush = function() {
t.trigger({
type:"loadeddata",
target:t
});
}, i.parse(e), n.length > 0 && (bi.console && bi.console.groupCollapsed && bi.console.groupCollapsed("Text Track parsing errors for " + t.src), 
n.forEach(function(e) {
return Oi.error(e);
}), bi.console && bi.console.groupEnd && bi.console.groupEnd()), i.flush();
}, xr = function(e, t) {
var i = {
uri:e
}, n = Tr(e);
n && (i.cors = n);
var r = "use-credentials" === t.tech_.crossOrigin();
r && (i.withCredentials = r), Ir(i, Sn(this, function(e, i, n) {
return e ? Oi.error(e, i) :(t.loaded_ = !0, void ("function" != typeof bi.WebVTT ? t.tech_ && t.tech_.any([ "vttjsloaded", "vttjserror" ], function(e) {
return "vttjserror" === e.type ? void Oi.error("vttjs failed to load, stopping trying to process " + t.src) :Ar(n, t);
}) :Ar(n, t)));
}));
}, Lr = function(e) {
function t(t) {
var i;
if (void 0 === t && (t = {}), !t.tech) throw new Error("A tech was not provided.");
var n = J(t, {
kind:mr[t.kind] || "subtitles",
language:t.language || t.srclang || ""
}), r = gr[n.mode] || "disabled", a = n["default"];
("metadata" === n.kind || "chapters" === n.kind) && (r = "hidden"), i = e.call(this, n) || this, 
i.tech_ = n.tech, i.cues_ = [], i.activeCues_ = [], i.preload_ = i.tech_.preloadTextTracks !== !1;
var s = new hr(i.cues_), o = new hr(i.activeCues_), u = !1, l = Sn(Gn(i), function() {
this.tech_.isReady_ && !this.tech_.isDisposed() && (this.activeCues = this.activeCues, 
u && (this.trigger("cuechange"), u = !1));
}), c = function() {
i.tech_.off("timeupdate", l);
};
return i.tech_.one("dispose", c), "disabled" !== r && i.tech_.on("timeupdate", l), 
Object.defineProperties(Gn(i), {
"default":{
get:function() {
return a;
},
set:function() {}
},
mode:{
get:function() {
return r;
},
set:function(e) {
gr[e] && r !== e && (r = e, this.preload_ || "disabled" === r || 0 !== this.cues.length || xr(this.src, this), 
this.tech_.off("timeupdate", l), "disabled" !== r && this.tech_.on("timeupdate", l), 
this.trigger("modechange"));
}
},
cues:{
get:function() {
return this.loaded_ ? s :null;
},
set:function() {}
},
activeCues:{
get:function() {
if (!this.loaded_) return null;
if (0 === this.cues.length) return o;
for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; n > i; i++) {
var r = this.cues[i];
r.startTime <= e && r.endTime >= e ? t.push(r) :r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e && t.push(r);
}
if (u = !1, t.length !== this.activeCues_.length) u = !0; else for (var a = 0; a < t.length; a++) -1 === this.activeCues_.indexOf(t[a]) && (u = !0);
return this.activeCues_ = t, o.setCues_(this.activeCues_), o;
},
set:function() {}
}
}), n.src ? (i.src = n.src, i.preload_ || (i.loaded_ = !0), (i.preload_ || a || "subtitles" !== n.kind && "captions" !== n.kind) && xr(i.src, Gn(i))) :i.loaded_ = !0, 
i;
}
Xn(t, e);
var i = t.prototype;
return i.addCue = function(e) {
var t = e;
if (bi.vttjs && !(e instanceof bi.vttjs.VTTCue)) {
t = new bi.vttjs.VTTCue(e.startTime, e.endTime, e.text);
for (var i in e) i in t || (t[i] = e[i]);
t.id = e.id, t.originalCue_ = e;
}
for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(t);
this.cues_.push(t), this.cues.setCues_(this.cues_);
}, i.removeCue = function(e) {
for (var t = this.cues_.length; t--; ) {
var i = this.cues_[t];
if (i === e || i.originalCue_ && i.originalCue_ === e) {
this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
break;
}
}
}, t;
}(vr);
Lr.prototype.allowedEvents_ = {
cuechange:"cuechange"
};
var Dr = function(e) {
function t(t) {
var i;
void 0 === t && (t = {});
var n = J(t, {
kind:fr[t.kind] || ""
});
i = e.call(this, n) || this;
var r = !1;
return Object.defineProperty(Gn(i), "enabled", {
get:function() {
return r;
},
set:function(e) {
"boolean" == typeof e && e !== r && (r = e, this.trigger("enabledchange"));
}
}), n.enabled && (i.enabled = n.enabled), i.loaded_ = !0, i;
}
return Xn(t, e), t;
}(vr), Or = function(e) {
function t(t) {
var i;
void 0 === t && (t = {});
var n = J(t, {
kind:pr[t.kind] || ""
});
i = e.call(this, n) || this;
var r = !1;
return Object.defineProperty(Gn(i), "selected", {
get:function() {
return r;
},
set:function(e) {
"boolean" == typeof e && e !== r && (r = e, this.trigger("selectedchange"));
}
}), n.selected && (i.selected = n.selected), i;
}
return Xn(t, e), t;
}(vr), Rr = 0, Nr = 1, Mr = 2, Ur = 3, Br = function(e) {
function t(t) {
var i;
void 0 === t && (t = {}), i = e.call(this) || this;
var n, r = new Lr(t);
return i.kind = r.kind, i.src = r.src, i.srclang = r.language, i.label = r.label, 
i["default"] = r["default"], Object.defineProperties(Gn(i), {
readyState:{
get:function() {
return n;
}
},
track:{
get:function() {
return r;
}
}
}), n = Rr, r.addEventListener("loadeddata", function() {
n = Mr, i.trigger({
type:"load",
target:Gn(i)
});
}), i;
}
return Xn(t, e), t;
}(En);
Br.prototype.allowedEvents_ = {
load:"load"
}, Br.NONE = Rr, Br.LOADING = Nr, Br.LOADED = Mr, Br.ERROR = Ur;
var Fr = {
audio:{
ListClass:or,
TrackClass:Dr,
capitalName:"Audio"
},
video:{
ListClass:lr,
TrackClass:Or,
capitalName:"Video"
},
text:{
ListClass:cr,
TrackClass:Lr,
capitalName:"Text"
}
};
Object.keys(Fr).forEach(function(e) {
Fr[e].getterName = e + "Tracks", Fr[e].privateName = e + "Tracks_";
});
var jr = {
remoteText:{
ListClass:cr,
TrackClass:Lr,
capitalName:"RemoteText",
getterName:"remoteTextTracks",
privateName:"remoteTextTracks_"
},
remoteTextEl:{
ListClass:dr,
TrackClass:Br,
capitalName:"RemoteTextTrackEls",
getterName:"remoteTextTrackEls",
privateName:"remoteTextTrackEls_"
}
}, Vr = Ni({}, Fr, jr);
jr.names = Object.keys(jr), Fr.names = Object.keys(Fr), Vr.names = [].concat(jr.names).concat(Fr.names);
var Hr = Object.create || function() {
function e() {}
return function(t) {
if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
return e.prototype = t, new e();
};
}();
ye.prototype = Hr(Error.prototype), ye.prototype.constructor = ye, ye.Errors = {
BadSignature:{
code:0,
message:"Malformed WebVTT signature."
},
BadTimeStamp:{
code:1,
message:"Malformed time stamp."
}
}, be.prototype = {
set:function(e, t) {
this.get(e) || "" === t || (this.values[e] = t);
},
get:function(e, t, i) {
return i ? this.has(e) ? this.values[e] :t[i] :this.has(e) ? this.values[e] :t;
},
has:function(e) {
return e in this.values;
},
alt:function(e, t, i) {
for (var n = 0; n < i.length; ++n) if (t === i[n]) {
this.set(e, t);
break;
}
},
integer:function(e, t) {
/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
},
percent:function(e, t) {
var i;
return (i = t.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (t = parseFloat(t), t >= 0 && 100 >= t) ? (this.set(e, t), 
!0) :!1;
}
};
var qr = wi.createElement("textarea"), Wr = {
c:"span",
i:"i",
b:"b",
u:"u",
ruby:"ruby",
rt:"rt",
v:"span",
lang:"span"
}, zr = {
white:"rgba(255,255,255,1)",
lime:"rgba(0,255,0,1)",
cyan:"rgba(0,255,255,1)",
red:"rgba(255,0,0,1)",
yellow:"rgba(255,255,0,1)",
magenta:"rgba(255,0,255,1)",
blue:"rgba(0,0,255,1)",
black:"rgba(0,0,0,1)"
}, Gr = {
v:"title",
lang:"lang"
}, Xr = {
rt:"ruby"
}, Kr = [ [ 1470, 1470 ], [ 1472, 1472 ], [ 1475, 1475 ], [ 1478, 1478 ], [ 1488, 1514 ], [ 1520, 1524 ], [ 1544, 1544 ], [ 1547, 1547 ], [ 1549, 1549 ], [ 1563, 1563 ], [ 1566, 1610 ], [ 1645, 1647 ], [ 1649, 1749 ], [ 1765, 1766 ], [ 1774, 1775 ], [ 1786, 1805 ], [ 1807, 1808 ], [ 1810, 1839 ], [ 1869, 1957 ], [ 1969, 1969 ], [ 1984, 2026 ], [ 2036, 2037 ], [ 2042, 2042 ], [ 2048, 2069 ], [ 2074, 2074 ], [ 2084, 2084 ], [ 2088, 2088 ], [ 2096, 2110 ], [ 2112, 2136 ], [ 2142, 2142 ], [ 2208, 2208 ], [ 2210, 2220 ], [ 8207, 8207 ], [ 64285, 64285 ], [ 64287, 64296 ], [ 64298, 64310 ], [ 64312, 64316 ], [ 64318, 64318 ], [ 64320, 64321 ], [ 64323, 64324 ], [ 64326, 64449 ], [ 64467, 64829 ], [ 64848, 64911 ], [ 64914, 64967 ], [ 65008, 65020 ], [ 65136, 65140 ], [ 65142, 65276 ], [ 67584, 67589 ], [ 67592, 67592 ], [ 67594, 67637 ], [ 67639, 67640 ], [ 67644, 67644 ], [ 67647, 67669 ], [ 67671, 67679 ], [ 67840, 67867 ], [ 67872, 67897 ], [ 67903, 67903 ], [ 67968, 68023 ], [ 68030, 68031 ], [ 68096, 68096 ], [ 68112, 68115 ], [ 68117, 68119 ], [ 68121, 68147 ], [ 68160, 68167 ], [ 68176, 68184 ], [ 68192, 68223 ], [ 68352, 68405 ], [ 68416, 68437 ], [ 68440, 68466 ], [ 68472, 68479 ], [ 68608, 68680 ], [ 126464, 126467 ], [ 126469, 126495 ], [ 126497, 126498 ], [ 126500, 126500 ], [ 126503, 126503 ], [ 126505, 126514 ], [ 126516, 126519 ], [ 126521, 126521 ], [ 126523, 126523 ], [ 126530, 126530 ], [ 126535, 126535 ], [ 126537, 126537 ], [ 126539, 126539 ], [ 126541, 126543 ], [ 126545, 126546 ], [ 126548, 126548 ], [ 126551, 126551 ], [ 126553, 126553 ], [ 126555, 126555 ], [ 126557, 126557 ], [ 126559, 126559 ], [ 126561, 126562 ], [ 126564, 126564 ], [ 126567, 126570 ], [ 126572, 126578 ], [ 126580, 126583 ], [ 126585, 126588 ], [ 126590, 126590 ], [ 126592, 126601 ], [ 126603, 126619 ], [ 126625, 126627 ], [ 126629, 126633 ], [ 126635, 126651 ], [ 1114109, 1114109 ] ];
Ie.prototype.applyStyles = function(e, t) {
t = t || this.div;
for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
}, Ie.prototype.formatStyle = function(e, t) {
return 0 === e ? 0 :e + t;
}, Pe.prototype = Hr(Ie.prototype), Pe.prototype.constructor = Pe, Ae.prototype.move = function(e, t) {
switch (t = void 0 !== t ? t :this.lineHeight, e) {
case "+x":
this.left += t, this.right += t;
break;

case "-x":
this.left -= t, this.right -= t;
break;

case "+y":
this.top += t, this.bottom += t;
break;

case "-y":
this.top -= t, this.bottom -= t;
}
}, Ae.prototype.overlaps = function(e) {
return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top;
}, Ae.prototype.overlapsAny = function(e) {
for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
return !1;
}, Ae.prototype.within = function(e) {
return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right;
}, Ae.prototype.overlapsOppositeAxis = function(e, t) {
switch (t) {
case "+x":
return this.left < e.left;

case "-x":
return this.right > e.right;

case "+y":
return this.top < e.top;

case "-y":
return this.bottom > e.bottom;
}
}, Ae.prototype.intersectPercentage = function(e) {
var t = Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)), i = Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)), n = t * i;
return n / (this.height * this.width);
}, Ae.prototype.toCSSCompatValues = function(e) {
return {
top:this.top - e.top,
bottom:e.bottom - this.bottom,
left:this.left - e.left,
right:e.right - this.right,
height:this.height,
width:this.width
};
}, Ae.getSimpleBoxPosition = function(e) {
var t = e.div ? e.div.offsetHeight :e.tagName ? e.offsetHeight :0, i = e.div ? e.div.offsetWidth :e.tagName ? e.offsetWidth :0, n = e.div ? e.div.offsetTop :e.tagName ? e.offsetTop :0;
e = e.div ? e.div.getBoundingClientRect() :e.tagName ? e.getBoundingClientRect() :e;
var r = {
left:e.left,
right:e.right,
top:e.top || n,
height:e.height || t,
bottom:e.bottom || n + (e.height || t),
width:e.width || i
};
return r;
}, Le.StringDecoder = function() {
return {
decode:function(e) {
if (!e) return "";
if ("string" != typeof e) throw new Error("Error - expected string data.");
return decodeURIComponent(encodeURIComponent(e));
}
};
}, Le.convertCueToDOMTree = function(e, t) {
return e && t ? ke(e, t) :null;
};
var Yr = .05, Qr = "sans-serif", $r = "1.5%";
Le.processCues = function(e, t, i) {
function n(e) {
for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
return !1;
}
if (!e || !t || !i) return null;
for (;i.firstChild; ) i.removeChild(i.firstChild);
var r = e.document.createElement("div");
if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", 
r.style.bottom = "0", r.style.margin = $r, i.appendChild(r), n(t)) {
var a = [], s = Ae.getSimpleBoxPosition(r), o = Math.round(s.height * Yr * 100) / 100, u = {
font:o + "px " + Qr
};
!function() {
for (var i, n, o = 0; o < t.length; o++) n = t[o], i = new Pe(e, n, u), r.appendChild(i.div), 
xe(e, i, s, a), n.displayState = i.div, a.push(Ae.getSimpleBoxPosition(i));
}();
} else for (var l = 0; l < t.length; l++) r.appendChild(t[l].displayState);
}, Le.Parser = function(e, t, i) {
i || (i = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", 
this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = [];
}, Le.Parser.prototype = {
reportOrThrowError:function(e) {
if (!(e instanceof ye)) throw e;
this.onparsingerror && this.onparsingerror(e);
},
parse:function(e) {
function t() {
for (var e = a.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t]; ) ++t;
var i = e.substr(0, t);
return "\r" === e[t] && ++t, "\n" === e[t] && ++t, a.buffer = e.substr(t), i;
}
function i(e) {
var t = new be();
if (Te(e, function(e, i) {
switch (e) {
case "id":
t.set(e, i);
break;

case "width":
t.percent(e, i);
break;

case "lines":
t.integer(e, i);
break;

case "regionanchor":
case "viewportanchor":
var n = i.split(",");
if (2 !== n.length) break;
var r = new be();
if (r.percent("x", n[0]), r.percent("y", n[1]), !r.has("x") || !r.has("y")) break;
t.set(e + "X", r.get("x")), t.set(e + "Y", r.get("y"));
break;

case "scroll":
t.alt(e, i, [ "up" ]);
}
}, /=/, /\s/), t.has("id")) {
var i = new (a.vttjs.VTTRegion || a.window.VTTRegion)();
i.width = t.get("width", 100), i.lines = t.get("lines", 3), i.regionAnchorX = t.get("regionanchorX", 0), 
i.regionAnchorY = t.get("regionanchorY", 100), i.viewportAnchorX = t.get("viewportanchorX", 0), 
i.viewportAnchorY = t.get("viewportanchorY", 100), i.scroll = t.get("scroll", ""), 
a.onregion && a.onregion(i), a.regionList.push({
id:t.get("id"),
region:i
});
}
}
function n(e) {
var t = new be();
Te(e, function(e, i) {
switch (e) {
case "MPEGT":
t.integer(e + "S", i);
break;

case "LOCA":
t.set(e + "L", _e(i));
}
}, /[^\d]:/, /,/), a.ontimestampmap && a.ontimestampmap({
MPEGTS:t.get("MPEGTS"),
LOCAL:t.get("LOCAL")
});
}
function r(e) {
e.match(/X-TIMESTAMP-MAP/) ? Te(e, function(e, t) {
switch (e) {
case "X-TIMESTAMP-MAP":
n(t);
}
}, /=/) :Te(e, function(e, t) {
switch (e) {
case "Region":
i(t);
}
}, /:/);
}
var a = this;
e && (a.buffer += a.decoder.decode(e, {
stream:!0
}));
try {
var s;
if ("INITIAL" === a.state) {
if (!/\r\n|\n/.test(a.buffer)) return this;
s = t();
var o = s.match(/^WEBVTT([ \t].*)?$/);
if (!o || !o[0]) throw new ye(ye.Errors.BadSignature);
a.state = "HEADER";
}
for (var u = !1; a.buffer; ) {
if (!/\r\n|\n/.test(a.buffer)) return this;
switch (u ? u = !1 :s = t(), a.state) {
case "HEADER":
/:/.test(s) ? r(s) :s || (a.state = "ID");
continue;

case "NOTE":
s || (a.state = "ID");
continue;

case "ID":
if (/^NOTE($|[ \t])/.test(s)) {
a.state = "NOTE";
break;
}
if (!s) continue;
a.cue = new (a.vttjs.VTTCue || a.window.VTTCue)(0, 0, "");
try {
a.cue.align = "center";
} catch (l) {
a.cue.align = "middle";
}
if (a.state = "CUE", -1 === s.indexOf("-->")) {
a.cue.id = s;
continue;
}

case "CUE":
try {
Se(s, a.cue, a.regionList);
} catch (l) {
a.reportOrThrowError(l), a.cue = null, a.state = "BADCUE";
continue;
}
a.state = "CUETEXT";
continue;

case "CUETEXT":
var c = -1 !== s.indexOf("-->");
if (!s || c && (u = !0)) {
a.oncue && a.oncue(a.cue), a.cue = null, a.state = "ID";
continue;
}
a.cue.text && (a.cue.text += "\n"), a.cue.text += s.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
continue;

case "BADCUE":
s || (a.state = "ID");
continue;
}
}
} catch (l) {
a.reportOrThrowError(l), "CUETEXT" === a.state && a.cue && a.oncue && a.oncue(a.cue), 
a.cue = null, a.state = "INITIAL" === a.state ? "BADWEBVTT" :"BADCUE";
}
return this;
},
flush:function() {
var e = this;
try {
if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", 
e.parse()), "INITIAL" === e.state) throw new ye(ye.Errors.BadSignature);
} catch (t) {
e.reportOrThrowError(t);
}
return e.onflush && e.onflush(), this;
}
};
var Jr = Le, Zr = "auto", ea = {
"":1,
lr:1,
rl:1
}, ta = {
start:1,
center:1,
end:1,
left:1,
right:1,
auto:1,
"line-left":1,
"line-right":1
};
Re.prototype.getCueAsHTML = function() {
return WebVTT.convertCueToDOMTree(window, this.text);
};
var ia = Re, na = {
"":!0,
up:!0
}, ra = Ue, aa = t(function(e) {
var t = e.exports = {
WebVTT:Jr,
VTTCue:ia,
VTTRegion:ra
};
bi.vttjs = t, bi.WebVTT = t.WebVTT;
var i = t.VTTCue, n = t.VTTRegion, r = bi.VTTCue, a = bi.VTTRegion;
t.shim = function() {
bi.VTTCue = i, bi.VTTRegion = n;
}, t.restore = function() {
bi.VTTCue = r, bi.VTTRegion = a;
}, bi.VTTCue || t.shim();
}), sa = (aa.WebVTT, aa.VTTCue, aa.VTTRegion, function(e) {
function t(t, i) {
var n;
return void 0 === t && (t = {}), void 0 === i && (i = function() {}), t.reportTouchActivity = !1, 
n = e.call(this, null, t, i) || this, n.hasStarted_ = !1, n.on("playing", function() {
this.hasStarted_ = !0;
}), n.on("loadstart", function() {
this.hasStarted_ = !1;
}), Vr.names.forEach(function(e) {
var i = Vr[e];
t && t[i.getterName] && (n[i.privateName] = t[i.getterName]);
}), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), 
[ "Text", "Audio", "Video" ].forEach(function(e) {
t["native" + e + "Tracks"] === !1 && (n["featuresNative" + e + "Tracks"] = !1);
}), t.nativeCaptions === !1 || t.nativeTextTracks === !1 ? n.featuresNativeTextTracks = !1 :(t.nativeCaptions === !0 || t.nativeTextTracks === !0) && (n.featuresNativeTextTracks = !0), 
n.featuresNativeTextTracks || n.emulateTextTracks(), n.preloadTextTracks = t.preloadTextTracks !== !1, 
n.autoRemoteTextTracks_ = new Vr.text.ListClass(), n.initTrackListeners(), t.nativeControlsForTouch || n.emitTapEvents(), 
n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n;
}
Xn(t, e);
var i = t.prototype;
return i.triggerSourceset = function(e) {
var t = this;
this.isReady_ || this.one("ready", function() {
return t.setTimeout(function() {
return t.triggerSourceset(e);
}, 1);
}), this.trigger({
src:e,
type:"sourceset"
});
}, i.manualProgressOn = function() {
this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress);
}, i.manualProgressOff = function() {
this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange);
}, i.trackProgress = function(e) {
this.stopTrackingProgress(), this.progressInterval = this.setInterval(Sn(this, function() {
var e = this.bufferedPercent();
this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 
1 === e && this.stopTrackingProgress();
}), 500);
}, i.onDurationChange = function(e) {
this.duration_ = this.duration();
}, i.buffered = function() {
return re(0, 0);
}, i.bufferedPercent = function() {
return ae(this.buffered(), this.duration_);
}, i.stopTrackingProgress = function() {
this.clearInterval(this.progressInterval);
}, i.manualTimeUpdatesOn = function() {
this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime);
}, i.manualTimeUpdatesOff = function() {
this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), 
this.off("pause", this.stopTrackingCurrentTime);
}, i.trackCurrentTime = function() {
this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
this.trigger({
type:"timeupdate",
target:this,
manuallyTriggered:!0
});
}, 250);
}, i.stopTrackingCurrentTime = function() {
this.clearInterval(this.currentTimeInterval), this.trigger({
type:"timeupdate",
target:this,
manuallyTriggered:!0
});
}, i.dispose = function() {
this.clearTracks(Fr.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), 
e.prototype.dispose.call(this);
}, i.clearTracks = function(e) {
var t = this;
e = [].concat(e), e.forEach(function(e) {
for (var i = t[e + "Tracks"]() || [], n = i.length; n--; ) {
var r = i[n];
"text" === e && t.removeRemoteTextTrack(r), i.removeTrack(r);
}
});
}, i.cleanupAutoTextTracks = function() {
for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
var i = e[t];
this.removeRemoteTextTrack(i);
}
}, i.reset = function() {}, i.crossOrigin = function() {}, i.setCrossOrigin = function() {}, 
i.error = function(e) {
return void 0 !== e && (this.error_ = new se(e), this.trigger("error")), this.error_;
}, i.played = function() {
return this.hasStarted_ ? re(0, 0) :re();
}, i.play = function() {}, i.setScrubbing = function() {}, i.scrubbing = function() {}, 
i.setCurrentTime = function() {
this.manualTimeUpdates && this.trigger({
type:"timeupdate",
target:this,
manuallyTriggered:!0
});
}, i.initTrackListeners = function() {
var e = this;
Fr.names.forEach(function(t) {
var i = Fr[t], n = function() {
e.trigger(t + "trackchange");
}, r = e[i.getterName]();
r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", function() {
r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n);
});
});
}, i.addWebVttScript_ = function() {
var e = this;
if (!bi.WebVTT) if (wi.body.contains(this.el())) {
if (!this.options_["vtt.js"] && o(aa) && Object.keys(aa).length > 0) return void this.trigger("vttjsloaded");
var t = wi.createElement("script");
t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", 
t.onload = function() {
e.trigger("vttjsloaded");
}, t.onerror = function() {
e.trigger("vttjserror");
}, this.on("dispose", function() {
t.onload = null, t.onerror = null;
}), bi.WebVTT = !0, this.el().parentNode.appendChild(t);
} else this.ready(this.addWebVttScript_);
}, i.emulateTextTracks = function() {
var e = this, t = this.textTracks(), i = this.remoteTextTracks(), n = function(e) {
return t.addTrack(e.track);
}, r = function(e) {
return t.removeTrack(e.track);
};
i.on("addtrack", n), i.on("removetrack", r), this.addWebVttScript_();
var a = function() {
return e.trigger("texttrackchange");
}, s = function() {
a();
for (var e = 0; e < t.length; e++) {
var i = t[e];
i.removeEventListener("cuechange", a), "showing" === i.mode && i.addEventListener("cuechange", a);
}
};
s(), t.addEventListener("change", s), t.addEventListener("addtrack", s), t.addEventListener("removetrack", s), 
this.on("dispose", function() {
i.off("addtrack", n), i.off("removetrack", r), t.removeEventListener("change", s), 
t.removeEventListener("addtrack", s), t.removeEventListener("removetrack", s);
for (var e = 0; e < t.length; e++) {
var o = t[e];
o.removeEventListener("cuechange", a);
}
});
}, i.addTextTrack = function(e, t, i) {
if (!e) throw new Error("TextTrack kind is required but was not provided");
return Be(this, e, t, i);
}, i.createRemoteTextTrack = function(e) {
var t = J(e, {
tech:this
});
return new jr.remoteTextEl.TrackClass(t);
}, i.addRemoteTextTrack = function(e, t) {
var i = this;
void 0 === e && (e = {});
var n = this.createRemoteTextTrack(e);
return t !== !0 && t !== !1 && (Oi.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), 
t = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), 
t !== !0 && this.ready(function() {
return i.autoRemoteTextTracks_.addTrack(n.track);
}), n;
}, i.removeRemoteTextTrack = function(e) {
var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), 
this.autoRemoteTextTracks_.removeTrack(e);
}, i.getVideoPlaybackQuality = function() {
return {};
}, i.requestPictureInPicture = function() {
var e = this.options_.Promise || bi.Promise;
return e ? e.reject() :void 0;
}, i.disablePictureInPicture = function() {
return !0;
}, i.setDisablePictureInPicture = function() {}, i.setPoster = function() {}, i.playsinline = function() {}, 
i.setPlaysinline = function() {}, i.overrideNativeAudioTracks = function() {}, i.overrideNativeVideoTracks = function() {}, 
i.canPlayType = function() {
return "";
}, t.canPlayType = function() {
return "";
}, t.canPlaySource = function(e, i) {
return t.canPlayType(e.type);
}, t.isTech = function(e) {
return e.prototype instanceof t || e instanceof t || e === t;
}, t.registerTech = function(e, i) {
if (t.techs_ || (t.techs_ = {}), !t.isTech(i)) throw new Error("Tech " + e + " must be a Tech");
if (!t.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
if (!t.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
return e = Fn(e), t.techs_[e] = i, t.techs_[Bn(e)] = i, "Tech" !== e && t.defaultTechOrder_.push(e), 
i;
}, t.getTech = function(e) {
return e ? t.techs_ && t.techs_[e] ? t.techs_[e] :(e = Fn(e), bi && bi.videojs && bi.videojs[e] ? (Oi.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), 
bi.videojs[e]) :void 0) :void 0;
}, t;
}(zn));
Vr.names.forEach(function(e) {
var t = Vr[e];
sa.prototype[t.getterName] = function() {
return this[t.privateName] = this[t.privateName] || new t.ListClass(), this[t.privateName];
};
}), sa.prototype.featuresVolumeControl = !0, sa.prototype.featuresMuteControl = !0, 
sa.prototype.featuresFullscreenResize = !1, sa.prototype.featuresPlaybackRate = !1, 
sa.prototype.featuresProgressEvents = !1, sa.prototype.featuresSourceset = !1, sa.prototype.featuresTimeupdateEvents = !1, 
sa.prototype.featuresNativeTextTracks = !1, sa.withSourceHandlers = function(e) {
e.registerSourceHandler = function(t, i) {
var n = e.sourceHandlers;
n || (n = e.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, t);
}, e.canPlayType = function(t) {
for (var i, n = e.sourceHandlers || [], r = 0; r < n.length; r++) if (i = n[r].canPlayType(t)) return i;
return "";
}, e.selectSourceHandler = function(t, i) {
for (var n, r = e.sourceHandlers || [], a = 0; a < r.length; a++) if (n = r[a].canHandleSource(t, i)) return r[a];
return null;
}, e.canPlaySource = function(t, i) {
var n = e.selectSourceHandler(t, i);
return n ? n.canHandleSource(t, i) :"";
};
var t = [ "seekable", "seeking", "duration" ];
t.forEach(function(e) {
var t = this[e];
"function" == typeof t && (this[e] = function() {
return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) :t.apply(this, arguments);
});
}, e.prototype), e.prototype.setSource = function(t) {
var i = e.selectSourceHandler(t, this.options_);
i || (e.nativeSourceHandler ? i = e.nativeSourceHandler :Oi.error("No source handler found for the current source.")), 
this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== e.nativeSourceHandler && (this.currentSource_ = t), 
this.sourceHandler_ = i.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler);
}, e.prototype.disposeSourceHandler = function() {
this.currentSource_ && (this.clearTracks([ "audio", "video" ]), this.currentSource_ = null), 
this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), 
this.sourceHandler_ = null);
};
}, zn.registerComponent("Tech", sa), sa.registerTech("Tech", sa), sa.defaultTechOrder_ = [];
var oa = {}, ua = {}, la = {}, ca = {
buffered:1,
currentTime:1,
duration:1,
muted:1,
played:1,
paused:1,
seekable:1,
volume:1
}, da = {
setCurrentTime:1,
setMuted:1,
setVolume:1
}, ha = {
play:1,
pause:1
}, pa = {
opus:"video/ogg",
ogv:"video/ogg",
mp4:"video/mp4",
mov:"video/mp4",
m4v:"video/mp4",
mkv:"video/x-matroska",
m4a:"audio/mp4",
mp3:"audio/mpeg",
aac:"audio/aac",
caf:"audio/x-caf",
flac:"audio/flac",
oga:"audio/ogg",
wav:"audio/wav",
m3u8:"application/x-mpegURL",
jpg:"image/jpeg",
jpeg:"image/jpeg",
gif:"image/gif",
png:"image/png",
svg:"image/svg+xml",
webp:"image/webp"
}, fa = function(e) {
void 0 === e && (e = "");
var t = br(e), i = pa[t.toLowerCase()];
return i || "";
}, ma = function(e, t) {
if (!t) return "";
if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
var i = e.cache_.sources.filter(function(e) {
return e.src === t;
});
if (i.length) return i[0].type;
for (var n = e.$$("source"), r = 0; r < n.length; r++) {
var a = n[r];
if (a.type && a.src && a.src === t) return a.type;
}
return fa(t);
}, ga = function $m(e) {
if (Array.isArray(e)) {
var t = [];
e.forEach(function(e) {
e = $m(e), Array.isArray(e) ? t = t.concat(e) :s(e) && t.push(e);
}), e = t;
} else e = "string" == typeof e && e.trim() ? [ Qe({
src:e
}) ] :s(e) && "string" == typeof e.src && e.src && e.src.trim() ? [ Qe(e) ] :[];
return e;
}, va = function(e) {
function t(t, i, n) {
var r, a = J({
createEl:!1
}, i);
if (r = e.call(this, t, a, n) || this, i.playerOptions.sources && 0 !== i.playerOptions.sources.length) t.src(i.playerOptions.sources); else for (var s = 0, o = i.playerOptions.techOrder; s < o.length; s++) {
var u = Fn(o[s]), l = sa.getTech(u);
if (u || (l = zn.getComponent(u)), l && l.isSupported()) {
t.loadTech_(u);
break;
}
}
return r;
}
return Xn(t, e), t;
}(zn);
zn.registerComponent("MediaLoader", va);
var ya = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.emitTapEvents(), n.enable(), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function(t, i, n) {
void 0 === t && (t = "div"), void 0 === i && (i = {}), void 0 === n && (n = {}), 
i = a({
innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
className:this.buildCSSClass(),
tabIndex:0
}, i), "button" === t && Oi.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), 
n = a({
role:"button"
}, n), this.tabIndex_ = i.tabIndex;
var r = e.prototype.createEl.call(this, t, i, n);
return this.createControlTextEl(r), r;
}, i.dispose = function() {
this.controlTextEl_ = null, e.prototype.dispose.call(this);
}, i.createControlTextEl = function(e) {
return this.controlTextEl_ = g("span", {
className:"vjs-control-text"
}, {
"aria-live":"polite"
}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), 
this.controlTextEl_;
}, i.controlText = function(e, t) {
if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ || "Need Text";
var i = this.localize(e);
this.controlText_ = e, v(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i);
}, i.buildCSSClass = function() {
return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this);
}, i.enable = function() {
this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), 
"undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), 
this.on([ "tap", "click" ], this.handleClick), this.on("keydown", this.handleKeyDown));
}, i.disable = function() {
this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), 
"undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver), 
this.off("mouseout", this.handleMouseOut), this.off([ "tap", "click" ], this.handleClick), 
this.off("keydown", this.handleKeyDown);
}, i.handleLanguagechange = function() {
this.controlText(this.controlText_);
}, i.handleClick = function(e) {
this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
}, i.handleKeyDown = function(t) {
er.isEventKey(t, "Space") || er.isEventKey(t, "Enter") ? (t.preventDefault(), t.stopPropagation(), 
this.trigger("click")) :e.prototype.handleKeyDown.call(this, t);
}, t;
}(zn);
zn.registerComponent("ClickableComponent", ya);
var _a = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.update(), t.on("posterchange", Sn(Gn(n), n.update)), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.dispose = function() {
this.player().off("posterchange", this.update), e.prototype.dispose.call(this);
}, i.createEl = function() {
var e = g("div", {
className:"vjs-poster",
tabIndex:-1
});
return e;
}, i.update = function(e) {
var t = this.player().poster();
this.setSrc(t), t ? this.show() :this.hide();
}, i.setSrc = function(e) {
var t = "";
e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t;
}, i.handleClick = function(e) {
if (this.player_.controls()) {
var t = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
!this.player_.tech(!0) || (Qi || Xi) && t || this.player_.tech(!0).focus(), this.player_.paused() ? le(this.player_.play()) :this.player_.pause();
}
}, t;
}(ya);
zn.registerComponent("PosterImage", _a);
var ba = "#222", Ta = "#ccc", Sa = {
monospace:"monospace",
sansSerif:"sans-serif",
serif:"serif",
monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',
monospaceSerif:'"Courier New", monospace',
proportionalSansSerif:"sans-serif",
proportionalSerif:"serif",
casual:'"Comic Sans MS", Impact, fantasy',
script:'"Monotype Corsiva", cursive',
smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'
}, ka = function(e) {
function t(t, i, n) {
var r;
r = e.call(this, t, i, n) || this;
var a = Sn(Gn(r), r.updateDisplay);
return t.on("loadstart", Sn(Gn(r), r.toggleDisplay)), t.on("texttrackchange", a), 
t.on("loadedmetadata", Sn(Gn(r), r.preselectTrack)), t.ready(Sn(Gn(r), function() {
if (t.tech_ && t.tech_.featuresNativeTextTracks) return void this.hide();
t.on("fullscreenchange", a), t.on("playerresize", a), bi.addEventListener("orientationchange", a), 
t.on("dispose", function() {
return bi.removeEventListener("orientationchange", a);
});
for (var e = this.options_.playerOptions.tracks || [], i = 0; i < e.length; i++) this.player_.addRemoteTextTrack(e[i], !0);
this.preselectTrack();
})), r;
}
Xn(t, e);
var i = t.prototype;
return i.preselectTrack = function() {
for (var e, t, i, n = {
captions:1,
subtitles:1
}, r = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, s = 0; s < r.length; s++) {
var o = r[s];
a && a.enabled && a.language && a.language === o.language && o.kind in n ? o.kind === a.kind ? i = o :i || (i = o) :a && !a.enabled ? (i = null, 
e = null, t = null) :o["default"] && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) :e = o);
}
i ? i.mode = "showing" :t ? t.mode = "showing" :e && (e.mode = "showing");
}, i.toggleDisplay = function() {
this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() :this.show();
}, i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-text-track-display"
}, {
"aria-live":"off",
"aria-atomic":"true"
});
}, i.clearDisplay = function() {
"function" == typeof bi.WebVTT && bi.WebVTT.processCues(bi, [], this.el_);
}, i.updateDisplay = function() {
var e = this.player_.textTracks(), t = this.options_.allowMultipleShowingTracks;
if (this.clearDisplay(), t) {
for (var i = [], n = 0; n < e.length; ++n) {
var r = e[n];
"showing" === r.mode && i.push(r);
}
return void this.updateForTrack(i);
}
for (var a = null, s = null, o = e.length; o--; ) {
var u = e[o];
"showing" === u.mode && ("descriptions" === u.kind ? a = u :s = u);
}
s ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), 
this.updateForTrack(s)) :a && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), 
this.updateForTrack(a));
}, i.updateDisplayState = function(e) {
for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--; ) {
var r = i[n];
if (r) {
var a = r.displayState;
if (t.color && (a.firstChild.style.color = t.color), t.textOpacity && Je(a.firstChild, "color", $e(t.color || "#fff", t.textOpacity)), 
t.backgroundColor && (a.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && Je(a.firstChild, "backgroundColor", $e(t.backgroundColor || "#000", t.backgroundOpacity)), 
t.windowColor && (t.windowOpacity ? Je(a, "backgroundColor", $e(t.windowColor, t.windowOpacity)) :a.style.backgroundColor = t.windowColor), 
t.edgeStyle && ("dropshadow" === t.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px " + ba + ", 2px 2px 4px " + ba + ", 2px 2px 5px " + ba :"raised" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + ba + ", 2px 2px " + ba + ", 3px 3px " + ba :"depressed" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + Ta + ", 0 1px " + Ta + ", -1px -1px " + ba + ", 0 -1px " + ba :"uniform" === t.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px " + ba + ", 0 0 4px " + ba + ", 0 0 4px " + ba + ", 0 0 4px " + ba)), 
t.fontPercent && 1 !== t.fontPercent) {
var s = bi.parseFloat(a.style.fontSize);
a.style.fontSize = s * t.fontPercent + "px", a.style.height = "auto", a.style.top = "auto";
}
t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? a.firstChild.style.fontVariant = "small-caps" :a.firstChild.style.fontFamily = Sa[t.fontFamily]);
}
}
}, i.updateForTrack = function(e) {
if (Array.isArray(e) || (e = [ e ]), "function" == typeof bi.WebVTT && !e.every(function(e) {
return !e.activeCues;
})) {
for (var t = [], i = 0; i < e.length; ++i) for (var n = e[i], r = 0; r < n.activeCues.length; ++r) t.push(n.activeCues[r]);
bi.WebVTT.processCues(bi, t, this.el_);
for (var a = 0; a < e.length; ++a) {
for (var s = e[a], o = 0; o < s.activeCues.length; ++o) {
var u = s.activeCues[o].displayState;
b(u, "vjs-text-track-cue"), b(u, "vjs-text-track-cue-" + (s.language ? s.language :a));
}
this.player_.textTrackSettings && this.updateDisplayState(s);
}
}
}, t;
}(zn);
zn.registerComponent("TextTrackDisplay", ka);
var wa = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = this.player_.isAudio(), i = this.localize(t ? "Audio Player" :"Video Player"), n = g("span", {
className:"vjs-control-text",
innerHTML:this.localize("{1} is loading.", [ i ])
}), r = e.prototype.createEl.call(this, "div", {
className:"vjs-loading-spinner",
dir:"ltr"
});
return r.appendChild(n), r;
}, t;
}(zn);
zn.registerComponent("LoadingSpinner", wa);
var Ea = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function(e, t, i) {
void 0 === t && (t = {}), void 0 === i && (i = {}), e = "button", t = a({
innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
className:this.buildCSSClass()
}, t), i = a({
type:"button"
}, i);
var n = zn.prototype.createEl.call(this, e, t, i);
return this.createControlTextEl(n), n;
}, i.addChild = function(e, t) {
void 0 === t && (t = {});
var i = this.constructor.name;
return Oi.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), 
zn.prototype.addChild.call(this, e, t);
}, i.enable = function() {
e.prototype.enable.call(this), this.el_.removeAttribute("disabled");
}, i.disable = function() {
e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled");
}, i.handleKeyDown = function(t) {
return er.isEventKey(t, "Space") || er.isEventKey(t, "Enter") ? void t.stopPropagation() :void e.prototype.handleKeyDown.call(this, t);
}, t;
}(ya);
zn.registerComponent("Button", Ea);
var Ca = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.mouseused_ = !1, n.on("mousedown", n.handleMouseDown), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-big-play-button";
}, i.handleClick = function(e) {
var t = this.player_.play();
if (this.mouseused_ && e.clientX && e.clientY) {
var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
return le(t), void (!this.player_.tech(!0) || (Qi || Xi) && i || this.player_.tech(!0).focus());
}
var n = this.player_.getChild("controlBar"), r = n && n.getChild("playToggle");
if (!r) return void this.player_.tech(!0).focus();
var a = function() {
return r.focus();
};
ue(t) ? t.then(a, function() {}) :this.setTimeout(a, 1);
}, i.handleKeyDown = function(t) {
this.mouseused_ = !1, e.prototype.handleKeyDown.call(this, t);
}, i.handleMouseDown = function(e) {
this.mouseused_ = !0;
}, t;
}(Ea);
Ca.prototype.controlText_ = "Play Video", zn.registerComponent("BigPlayButton", Ca);
var Ia = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.controlText(i && i.controlText || n.localize("Close")), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-close-button " + e.prototype.buildCSSClass.call(this);
}, i.handleClick = function(e) {
this.trigger({
type:"close",
bubbles:!1
});
}, i.handleKeyDown = function(t) {
er.isEventKey(t, "Esc") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) :e.prototype.handleKeyDown.call(this, t);
}, t;
}(Ea);
zn.registerComponent("CloseButton", Ia);
var Pa = function(e) {
function t(t, i) {
var n;
return void 0 === i && (i = {}), n = e.call(this, t, i) || this, i.replay = void 0 === i.replay || i.replay, 
n.on(t, "play", n.handlePlay), n.on(t, "pause", n.handlePause), i.replay && n.on(t, "ended", n.handleEnded), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-play-control " + e.prototype.buildCSSClass.call(this);
}, i.handleClick = function(e) {
this.player_.paused() ? this.player_.play() :this.player_.pause();
}, i.handleSeeked = function(e) {
this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) :this.handlePlay(e);
}, i.handlePlay = function(e) {
this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), 
this.controlText("Pause");
}, i.handlePause = function(e) {
this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play");
}, i.handleEnded = function(e) {
this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), 
this.one(this.player_, "seeked", this.handleSeeked);
}, t;
}(Ea);
Pa.prototype.controlText_ = "Play", zn.registerComponent("PlayToggle", Pa);
var Aa = function(e, t) {
e = 0 > e ? 0 :e;
var i = Math.floor(e % 60), n = Math.floor(e / 60 % 60), r = Math.floor(e / 3600), a = Math.floor(t / 60 % 60), s = Math.floor(t / 3600);
return (isNaN(e) || e === 1 / 0) && (r = n = i = "-"), r = r > 0 || s > 0 ? r + ":" :"", 
n = ((r || a >= 10) && 10 > n ? "0" + n :n) + ":", i = 10 > i ? "0" + i :i, r + n + i;
}, xa = Aa, La = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, [ "timeupdate", "ended" ], n.updateContent), 
n.updateTextNode_(), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = this.buildCSSClass(), i = e.prototype.createEl.call(this, "div", {
className:t + " vjs-time-control vjs-control",
innerHTML:'<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + "\xa0</span>"
});
return this.contentEl_ = g("span", {
className:t + "-display"
}, {
"aria-live":"off",
role:"presentation"
}), i.appendChild(this.contentEl_), i;
}, i.dispose = function() {
this.contentEl_ = null, this.textNode_ = null, e.prototype.dispose.call(this);
}, i.updateTextNode_ = function(e) {
var t = this;
void 0 === e && (e = 0), e = tt(e), this.formattedTime_ !== e && (this.formattedTime_ = e, 
this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", function() {
if (t.contentEl_) {
var e = t.textNode_;
e && t.contentEl_.firstChild !== e && (e = null, Oi.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), 
t.textNode_ = wi.createTextNode(t.formattedTime_), t.textNode_ && (e ? t.contentEl_.replaceChild(t.textNode_, e) :t.contentEl_.appendChild(t.textNode_));
}
}));
}, i.updateContent = function(e) {}, t;
}(zn);
La.prototype.labelText_ = "Time", La.prototype.controlText_ = "Time", zn.registerComponent("TimeDisplay", La);
var Da = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-current-time";
}, i.updateContent = function(e) {
var t;
t = this.player_.ended() ? this.player_.duration() :this.player_.scrubbing() ? this.player_.getCache().currentTime :this.player_.currentTime(), 
this.updateTextNode_(t);
}, t;
}(La);
Da.prototype.labelText_ = "Current Time", Da.prototype.controlText_ = "Current Time", 
zn.registerComponent("CurrentTimeDisplay", Da);
var Oa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, "durationchange", n.updateContent), 
n.on(t, "loadstart", n.updateContent), n.on(t, "loadedmetadata", n.updateContent), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-duration";
}, i.updateContent = function(e) {
var t = this.player_.duration();
this.updateTextNode_(t);
}, t;
}(La);
Oa.prototype.labelText_ = "Duration", Oa.prototype.controlText_ = "Duration", zn.registerComponent("DurationDisplay", Oa);
var Ra = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-time-control vjs-time-divider",
innerHTML:"<div><span>/</span></div>"
}, {
"aria-hidden":!0
});
}, t;
}(zn);
zn.registerComponent("TimeDivider", Ra);
var Na = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, "durationchange", n.updateContent), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-remaining-time";
}, i.createEl = function() {
var t = e.prototype.createEl.call(this);
return t.insertBefore(g("span", {}, {
"aria-hidden":!0
}, "-"), this.contentEl_), t;
}, i.updateContent = function(e) {
if ("number" == typeof this.player_.duration()) {
var t;
t = this.player_.ended() ? 0 :this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() :this.player_.remainingTime(), 
this.updateTextNode_(t);
}
}, t;
}(La);
Na.prototype.labelText_ = "Remaining Time", Na.prototype.controlText_ = "Remaining Time", 
zn.registerComponent("RemainingTimeDisplay", Na);
var Ma = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.updateShowing(), n.on(n.player(), "durationchange", n.updateShowing), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = e.prototype.createEl.call(this, "div", {
className:"vjs-live-control vjs-control"
});
return this.contentEl_ = g("div", {
className:"vjs-live-display",
innerHTML:'<span class="vjs-control-text">' + this.localize("Stream Type") + "\xa0</span>" + this.localize("LIVE")
}, {
"aria-live":"off"
}), t.appendChild(this.contentEl_), t;
}, i.dispose = function() {
this.contentEl_ = null, e.prototype.dispose.call(this);
}, i.updateShowing = function(e) {
this.player().duration() === 1 / 0 ? this.show() :this.hide();
}, t;
}(zn);
zn.registerComponent("LiveDisplay", Ma);
var Ua = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.updateLiveEdgeStatus(), n.player_.liveTracker && n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatus), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = e.prototype.createEl.call(this, "button", {
className:"vjs-seek-to-live-control vjs-control"
});
return this.textEl_ = g("span", {
className:"vjs-seek-to-live-text",
innerHTML:this.localize("LIVE")
}, {
"aria-hidden":"true"
}), t.appendChild(this.textEl_), t;
}, i.updateLiveEdgeStatus = function() {
!this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), 
this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) :(this.setAttribute("aria-disabled", !1), 
this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
}, i.handleClick = function() {
this.player_.liveTracker.seekToLiveEdge();
}, i.dispose = function() {
this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), 
this.textEl_ = null, e.prototype.dispose.call(this);
}, t;
}(Ea);
Ua.prototype.controlText_ = "Seek to live, currently playing live", zn.registerComponent("SeekToLive", Ua);
var Ba = function(e, t, i) {
return e = Number(e), Math.min(i, Math.max(t, isNaN(e) ? t :e));
}, Fa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.bar = n.getChild(n.options_.barName), n.vertical(!!n.options_.vertical), 
n.enable(), n;
}
Xn(t, e);
var i = t.prototype;
return i.enabled = function() {
return this.enabled_;
}, i.enable = function() {
this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), 
this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), 
this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), 
this.setAttribute("tabindex", 0), this.enabled_ = !0);
}, i.disable = function() {
if (this.enabled()) {
var e = this.bar.el_.ownerDocument;
this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), 
this.off("keydown", this.handleKeyDown), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), 
this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), 
this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), 
this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), 
this.enabled_ = !1;
}
}, i.createEl = function(t, i, n) {
return void 0 === i && (i = {}), void 0 === n && (n = {}), i.className = i.className + " vjs-slider", 
i = a({
tabIndex:0
}, i), n = a({
role:"slider",
"aria-valuenow":0,
"aria-valuemin":0,
"aria-valuemax":100,
tabIndex:0
}, n), e.prototype.createEl.call(this, t, i, n);
}, i.handleMouseDown = function(e) {
var t = this.bar.el_.ownerDocument;
"mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || Ki || e.preventDefault(), 
P(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), 
this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), 
this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e);
}, i.handleMouseMove = function(e) {}, i.handleMouseUp = function() {
var e = this.bar.el_.ownerDocument;
A(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), 
this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), 
this.off(e, "touchend", this.handleMouseUp), this.update();
}, i.update = function() {
var e = this;
if (this.el_ && this.bar) {
var t = this.getProgress();
return t === this.progress_ ? t :(this.progress_ = t, this.requestNamedAnimationFrame("Slider#update", function() {
var i = e.vertical() ? "height" :"width";
e.bar.el().style[i] = (100 * t).toFixed(2) + "%";
}), t);
}
}, i.getProgress = function() {
return Number(Ba(this.getPercent(), 0, 1).toFixed(4));
}, i.calculateDistance = function(e) {
var t = D(this.el_, e);
return this.vertical() ? t.y :t.x;
}, i.handleKeyDown = function(t) {
er.isEventKey(t, "Left") || er.isEventKey(t, "Down") ? (t.preventDefault(), t.stopPropagation(), 
this.stepBack()) :er.isEventKey(t, "Right") || er.isEventKey(t, "Up") ? (t.preventDefault(), 
t.stopPropagation(), this.stepForward()) :e.prototype.handleKeyDown.call(this, t);
}, i.handleClick = function(e) {
e.stopPropagation(), e.preventDefault();
}, i.vertical = function(e) {
return void 0 === e ? this.vertical_ || !1 :(this.vertical_ = !!e, void (this.vertical_ ? this.addClass("vjs-slider-vertical") :this.addClass("vjs-slider-horizontal")));
}, t;
}(zn);
zn.registerComponent("Slider", Fa);
var ja = function(e, t) {
return Ba(e / t * 100, 0, 100).toFixed(2) + "%";
}, Va = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.partEls_ = [], n.on(t, "progress", n.update), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = e.prototype.createEl.call(this, "div", {
className:"vjs-load-progress"
}), i = g("span", {
className:"vjs-control-text"
}), n = g("span", {
textContent:this.localize("Loaded")
}), r = wi.createTextNode(": ");
return this.percentageEl_ = g("span", {
className:"vjs-control-text-loaded-percentage",
textContent:"0%"
}), t.appendChild(i), i.appendChild(n), i.appendChild(r), i.appendChild(this.percentageEl_), 
t;
}, i.dispose = function() {
this.partEls_ = null, this.percentageEl_ = null, e.prototype.dispose.call(this);
}, i.update = function(e) {
var t = this;
this.requestNamedAnimationFrame("LoadProgressBar#update", function() {
var e = t.player_.liveTracker, i = t.player_.buffered(), n = e && e.isLive() ? e.seekableEnd() :t.player_.duration(), r = t.player_.bufferedEnd(), a = t.partEls_, s = ja(r, n);
t.percent_ !== s && (t.el_.style.width = s, v(t.percentageEl_, s), t.percent_ = s);
for (var o = 0; o < i.length; o++) {
var u = i.start(o), l = i.end(o), c = a[o];
c || (c = t.el_.appendChild(g()), a[o] = c), (c.dataset.start !== u || c.dataset.end !== l) && (c.dataset.start = u, 
c.dataset.end = l, c.style.left = ja(u, r), c.style.width = ja(l - u, r));
}
for (var d = a.length; d > i.length; d--) t.el_.removeChild(a[d - 1]);
a.length = i.length;
});
}, t;
}(zn);
zn.registerComponent("LoadProgressBar", Va);
var Ha = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.update = kn(Sn(Gn(n), n.update), Tn), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-time-tooltip"
}, {
"aria-hidden":"true"
});
}, i.update = function(e, t, i) {
var n = L(this.el_), r = x(this.player_.el()), a = e.width * t;
if (r && n) {
var s = e.left - r.left + a, o = e.width - a + (r.right - e.right), u = n.width / 2;
u > s ? u += u - s :u > o && (u = o), 0 > u ? u = 0 :u > n.width && (u = n.width), 
u = Math.round(u), this.el_.style.right = "-" + u + "px", this.write(i);
}
}, i.write = function(e) {
v(this.el_, e);
}, i.updateTime = function(e, t, i, n) {
var r = this;
this.requestNamedAnimationFrame("TimeTooltip#updateTime", function() {
var a, s = r.player_.duration();
if (r.player_.liveTracker && r.player_.liveTracker.isLive()) {
var o = r.player_.liveTracker.liveWindow(), u = o - t * o;
a = (1 > u ? "" :"-") + tt(u, o);
} else a = tt(i, s);
r.update(e, t, a), n && n();
});
}, t;
}(zn);
zn.registerComponent("TimeTooltip", Ha);
var qa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.update = kn(Sn(Gn(n), n.update), Tn), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-play-progress vjs-slider-bar"
}, {
"aria-hidden":"true"
});
}, i.update = function(e, t) {
var i = this.getChild("timeTooltip");
if (i) {
var n = this.player_.scrubbing() ? this.player_.getCache().currentTime :this.player_.currentTime();
i.updateTime(e, t, n);
}
}, t;
}(zn);
qa.prototype.options_ = {
children:[]
}, nn || qi || qa.prototype.options_.children.push("timeTooltip"), zn.registerComponent("PlayProgressBar", qa);
var Wa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.update = kn(Sn(Gn(n), n.update), Tn), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-mouse-display"
});
}, i.update = function(e, t) {
var i = this, n = t * this.player_.duration();
this.getChild("timeTooltip").updateTime(e, t, n, function() {
i.el_.style.left = e.width * t + "px";
});
}, t;
}(zn);
Wa.prototype.options_ = {
children:[ "timeTooltip" ]
}, zn.registerComponent("MouseTimeDisplay", Wa);
var za = 5, Ga = 12, Xa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.setEventHandlers_(), n;
}
Xn(t, e);
var i = t.prototype;
return i.setEventHandlers_ = function() {
this.update_ = Sn(this, this.update), this.update = kn(this.update_, Tn), this.on(this.player_, [ "ended", "durationchange", "timeupdate" ], this.update), 
this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), 
this.updateInterval = null, this.on(this.player_, [ "playing" ], this.enableInterval_), 
this.on(this.player_, [ "ended", "pause", "waiting" ], this.disableInterval_), "hidden" in wi && "visibilityState" in wi && this.on(wi, "visibilitychange", this.toggleVisibility_);
}, i.toggleVisibility_ = function(e) {
wi.hidden ? this.disableInterval_(e) :(this.enableInterval_(), this.update());
}, i.enableInterval_ = function() {
this.updateInterval || (this.updateInterval = this.setInterval(this.update, Tn));
}, i.disableInterval_ = function(e) {
this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), 
this.updateInterval = null);
}, i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-progress-holder"
}, {
"aria-label":this.localize("Progress Bar")
});
}, i.update = function(t) {
var i = this, n = e.prototype.update.call(this);
return this.requestNamedAnimationFrame("SeekBar#update", function() {
var e = i.player_.ended() ? i.player_.duration() :i.getCurrentTime_(), t = i.player_.liveTracker, r = i.player_.duration();
t && t.isLive() && (r = i.player_.liveTracker.liveCurrentTime()), i.percent_ !== n && (i.el_.setAttribute("aria-valuenow", (100 * n).toFixed(2)), 
i.percent_ = n), (i.currentTime_ !== e || i.duration_ !== r) && (i.el_.setAttribute("aria-valuetext", i.localize("progress bar timing: currentTime={1} duration={2}", [ tt(e, r), tt(r, r) ], "{1} of {2}")), 
i.currentTime_ = e, i.duration_ = r), i.bar && i.bar.update(x(i.el()), i.getProgress());
}), n;
}, i.getCurrentTime_ = function() {
return this.player_.scrubbing() ? this.player_.getCache().currentTime :this.player_.currentTime();
}, i.getPercent = function() {
var e, t = this.getCurrentTime_(), i = this.player_.liveTracker;
return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) :e = t / this.player_.duration(), 
e;
}, i.handleMouseDown = function(t) {
B(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), 
this.player_.pause(), e.prototype.handleMouseDown.call(this, t));
}, i.handleMouseMove = function(e) {
if (B(e)) {
var t, i = this.calculateDistance(e), n = this.player_.liveTracker;
if (n && n.isLive()) {
if (i >= .99) return void n.seekToLiveEdge();
var r = n.seekableStart(), a = n.liveCurrentTime();
if (t = r + i * n.liveWindow(), t >= a && (t = a), r >= t && (t = r + .1), t === 1 / 0) return;
} else t = i * this.player_.duration(), t === this.player_.duration() && (t -= .1);
this.player_.currentTime(t);
}
}, i.enable = function() {
e.prototype.enable.call(this);
var t = this.getChild("mouseTimeDisplay");
t && t.show();
}, i.disable = function() {
e.prototype.disable.call(this);
var t = this.getChild("mouseTimeDisplay");
t && t.hide();
}, i.handleMouseUp = function(t) {
e.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), 
this.player_.trigger({
type:"timeupdate",
target:this,
manuallyTriggered:!0
}), this.videoWasPlaying ? le(this.player_.play()) :this.update_();
}, i.stepForward = function() {
this.player_.currentTime(this.player_.currentTime() + za);
}, i.stepBack = function() {
this.player_.currentTime(this.player_.currentTime() - za);
}, i.handleAction = function(e) {
this.player_.paused() ? this.player_.play() :this.player_.pause();
}, i.handleKeyDown = function(t) {
if (er.isEventKey(t, "Space") || er.isEventKey(t, "Enter")) t.preventDefault(), 
t.stopPropagation(), this.handleAction(t); else if (er.isEventKey(t, "Home")) t.preventDefault(), 
t.stopPropagation(), this.player_.currentTime(0); else if (er.isEventKey(t, "End")) t.preventDefault(), 
t.stopPropagation(), this.player_.currentTime(this.player_.duration()); else if (/^[0-9]$/.test(er(t))) {
t.preventDefault(), t.stopPropagation();
var i = 10 * (er.codes[er(t)] - er.codes[0]) / 100;
this.player_.currentTime(this.player_.duration() * i);
} else er.isEventKey(t, "PgDn") ? (t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - za * Ga)) :er.isEventKey(t, "PgUp") ? (t.preventDefault(), 
t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + za * Ga)) :e.prototype.handleKeyDown.call(this, t);
}, i.dispose = function() {
this.disableInterval_(), this.off(this.player_, [ "ended", "durationchange", "timeupdate" ], this.update), 
this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), 
this.off(this.player_, [ "playing" ], this.enableInterval_), this.off(this.player_, [ "ended", "pause", "waiting" ], this.disableInterval_), 
"hidden" in wi && "visibilityState" in wi && this.off(wi, "visibilitychange", this.toggleVisibility_), 
e.prototype.dispose.call(this);
}, t;
}(Fa);
Xa.prototype.options_ = {
children:[ "loadProgressBar", "playProgressBar" ],
barName:"playProgressBar"
}, nn || qi || Xa.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), 
zn.registerComponent("SeekBar", Xa);
var Ka = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.handleMouseMove = kn(Sn(Gn(n), n.handleMouseMove), Tn), 
n.throttledHandleMouseSeek = kn(Sn(Gn(n), n.handleMouseSeek), Tn), n.enable(), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-progress-control vjs-control"
});
}, i.handleMouseMove = function(e) {
var t = this.getChild("seekBar");
if (t) {
var i = t.getChild("playProgressBar"), n = t.getChild("mouseTimeDisplay");
if (i || n) {
var r = t.el(), a = L(r), s = D(r, e).x;
s = Ba(s, 0, 1), n && n.update(a, s), i && i.update(a, t.getProgress());
}
}
}, i.handleMouseSeek = function(e) {
var t = this.getChild("seekBar");
t && t.handleMouseMove(e);
}, i.enabled = function() {
return this.enabled_;
}, i.disable = function() {
this.children().forEach(function(e) {
return e.disable && e.disable();
}), this.enabled() && (this.off([ "mousedown", "touchstart" ], this.handleMouseDown), 
this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), 
this.enabled_ = !1);
}, i.enable = function() {
this.children().forEach(function(e) {
return e.enable && e.enable();
}), this.enabled() || (this.on([ "mousedown", "touchstart" ], this.handleMouseDown), 
this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), 
this.enabled_ = !0);
}, i.handleMouseDown = function(e) {
var t = this.el_.ownerDocument, i = this.getChild("seekBar");
i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), 
this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), 
this.on(t, "touchend", this.handleMouseUp);
}, i.handleMouseUp = function(e) {
var t = this.el_.ownerDocument, i = this.getChild("seekBar");
i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), 
this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), 
this.off(t, "touchend", this.handleMouseUp);
}, t;
}(zn);
Ka.prototype.options_ = {
children:[ "seekBar" ]
}, zn.registerComponent("ProgressControl", Ka);
var Ya = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, [ "enterpictureinpicture", "leavepictureinpicture" ], n.handlePictureInPictureChange), 
n.on(t, [ "disablepictureinpicturechanged", "loadedmetadata" ], n.handlePictureInPictureEnabledChange), 
n.disable(), n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-picture-in-picture-control " + e.prototype.buildCSSClass.call(this);
}, i.handlePictureInPictureEnabledChange = function() {
wi.pictureInPictureEnabled && this.player_.disablePictureInPicture() === !1 ? this.enable() :this.disable();
}, i.handlePictureInPictureChange = function(e) {
this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") :this.controlText("Picture-in-Picture"), 
this.handlePictureInPictureEnabledChange();
}, i.handleClick = function(e) {
this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() :this.player_.requestPictureInPicture();
}, t;
}(Ea);
Ya.prototype.controlText_ = "Picture-in-Picture", zn.registerComponent("PictureInPictureToggle", Ya);
var Qa = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, "fullscreenchange", n.handleFullscreenChange), 
wi[t.fsApi_.fullscreenEnabled] === !1 && n.disable(), n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this);
}, i.handleFullscreenChange = function(e) {
this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") :this.controlText("Fullscreen");
}, i.handleClick = function(e) {
this.player_.isFullscreen() ? this.player_.exitFullscreen() :this.player_.requestFullscreen();
}, t;
}(Ea);
Qa.prototype.controlText_ = "Fullscreen", zn.registerComponent("FullscreenToggle", Qa);
var $a = function(e, t) {
t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") :e.addClass("vjs-hidden");
});
}, Ja = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-volume-level",
innerHTML:'<span class="vjs-control-text"></span>'
});
}, t;
}(zn);
zn.registerComponent("VolumeLevel", Ja);
var Za = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on("slideractive", n.updateLastVolume_), 
n.on(t, "volumechange", n.updateARIAAttributes), t.ready(function() {
return n.updateARIAAttributes();
}), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-volume-bar vjs-slider-bar"
}, {
"aria-label":this.localize("Volume Level"),
"aria-live":"polite"
});
}, i.handleMouseDown = function(t) {
B(t) && e.prototype.handleMouseDown.call(this, t);
}, i.handleMouseMove = function(e) {
B(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
}, i.checkMuted = function() {
this.player_.muted() && this.player_.muted(!1);
}, i.getPercent = function() {
return this.player_.muted() ? 0 :this.player_.volume();
}, i.stepForward = function() {
this.checkMuted(), this.player_.volume(this.player_.volume() + .1);
}, i.stepBack = function() {
this.checkMuted(), this.player_.volume(this.player_.volume() - .1);
}, i.updateARIAAttributes = function(e) {
var t = this.player_.muted() ? 0 :this.volumeAsPercentage_();
this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%");
}, i.volumeAsPercentage_ = function() {
return Math.round(100 * this.player_.volume());
}, i.updateLastVolume_ = function() {
var e = this, t = this.player_.volume();
this.one("sliderinactive", function() {
0 === e.player_.volume() && e.player_.lastVolume_(t);
});
}, t;
}(Fa);
Za.prototype.options_ = {
children:[ "volumeLevel" ],
barName:"volumeLevel"
}, Za.prototype.playerEvent = "volumechange", zn.registerComponent("VolumeBar", Za);
var es = function(e) {
function t(t, i) {
var n;
return void 0 === i && (i = {}), i.vertical = i.vertical || !1, ("undefined" == typeof i.volumeBar || o(i.volumeBar)) && (i.volumeBar = i.volumeBar || {}, 
i.volumeBar.vertical = i.vertical), n = e.call(this, t, i) || this, $a(Gn(n), t), 
n.throttledHandleMouseMove = kn(Sn(Gn(n), n.handleMouseMove), Tn), n.on("mousedown", n.handleMouseDown), 
n.on("touchstart", n.handleMouseDown), n.on(n.volumeBar, [ "focus", "slideractive" ], function() {
n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive");
}), n.on(n.volumeBar, [ "blur", "sliderinactive" ], function() {
n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), 
n.trigger("sliderinactive");
}), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = "vjs-volume-horizontal";
return this.options_.vertical && (t = "vjs-volume-vertical"), e.prototype.createEl.call(this, "div", {
className:"vjs-volume-control vjs-control " + t
});
}, i.handleMouseDown = function(e) {
var t = this.el_.ownerDocument;
this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), 
this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp);
}, i.handleMouseUp = function(e) {
var t = this.el_.ownerDocument;
this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), 
this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp);
}, i.handleMouseMove = function(e) {
this.volumeBar.handleMouseMove(e);
}, t;
}(zn);
es.prototype.options_ = {
children:[ "volumeBar" ]
}, zn.registerComponent("VolumeControl", es);
var ts = function(e, t) {
t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") :e.addClass("vjs-hidden");
});
}, is = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, ts(Gn(n), t), n.on(t, [ "loadstart", "volumechange" ], n.update), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-mute-control " + e.prototype.buildCSSClass.call(this);
}, i.handleClick = function(e) {
var t = this.player_.volume(), i = this.player_.lastVolume_();
if (0 === t) {
var n = .1 > i ? .1 :i;
this.player_.volume(n), this.player_.muted(!1);
} else this.player_.muted(this.player_.muted() ? !1 :!0);
}, i.update = function(e) {
this.updateIcon_(), this.updateControlText_();
}, i.updateIcon_ = function() {
var e = this.player_.volume(), t = 3;
nn && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 
0 === e || this.player_.muted() ? t = 0 :.33 > e ? t = 1 :.67 > e && (t = 2);
for (var i = 0; 4 > i; i++) T(this.el_, "vjs-vol-" + i);
b(this.el_, "vjs-vol-" + t);
}, i.updateControlText_ = function() {
var e = this.player_.muted() || 0 === this.player_.volume(), t = e ? "Unmute" :"Mute";
this.controlText() !== t && this.controlText(t);
}, t;
}(Ea);
is.prototype.controlText_ = "Mute", zn.registerComponent("MuteToggle", is);
var ns = function(e) {
function t(t, i) {
var n;
return void 0 === i && (i = {}), "undefined" != typeof i.inline ? i.inline = i.inline :i.inline = !0, 
("undefined" == typeof i.volumeControl || o(i.volumeControl)) && (i.volumeControl = i.volumeControl || {}, 
i.volumeControl.vertical = !i.inline), n = e.call(this, t, i) || this, n.on(t, [ "loadstart" ], n.volumePanelState_), 
n.on(n.muteToggle, "keyup", n.handleKeyPress), n.on(n.volumeControl, "keyup", n.handleVolumeControlKeyUp), 
n.on("keydown", n.handleKeyPress), n.on("mouseover", n.handleMouseOver), n.on("mouseout", n.handleMouseOut), 
n.on(n.volumeControl, [ "slideractive" ], n.sliderActive_), n.on(n.volumeControl, [ "sliderinactive" ], n.sliderInactive_), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.sliderActive_ = function() {
this.addClass("vjs-slider-active");
}, i.sliderInactive_ = function() {
this.removeClass("vjs-slider-active");
}, i.volumePanelState_ = function() {
this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), 
this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
}, i.createEl = function() {
var t = "vjs-volume-panel-horizontal";
return this.options_.inline || (t = "vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", {
className:"vjs-volume-panel vjs-control " + t
});
}, i.dispose = function() {
this.handleMouseOut(), e.prototype.dispose.call(this);
}, i.handleVolumeControlKeyUp = function(e) {
er.isEventKey(e, "Esc") && this.muteToggle.focus();
}, i.handleMouseOver = function(e) {
this.addClass("vjs-hover"), z(wi, "keyup", Sn(this, this.handleKeyPress));
}, i.handleMouseOut = function(e) {
this.removeClass("vjs-hover"), G(wi, "keyup", Sn(this, this.handleKeyPress));
}, i.handleKeyPress = function(e) {
er.isEventKey(e, "Esc") && this.handleMouseOut();
}, t;
}(zn);
ns.prototype.options_ = {
children:[ "muteToggle", "volumeControl" ]
}, zn.registerComponent("VolumePanel", ns);
var rs = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, i && (n.menuButton_ = i.menuButton), n.focusedChild_ = -1, 
n.on("keydown", n.handleKeyDown), n.boundHandleBlur_ = Sn(Gn(n), n.handleBlur), 
n.boundHandleTapClick_ = Sn(Gn(n), n.handleTapClick), n;
}
Xn(t, e);
var i = t.prototype;
return i.addEventListenerForItem = function(e) {
e instanceof zn && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, [ "tap", "click" ], this.boundHandleTapClick_));
}, i.removeEventListenerForItem = function(e) {
e instanceof zn && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, [ "tap", "click" ], this.boundHandleTapClick_));
}, i.removeChild = function(t) {
"string" == typeof t && (t = this.getChild(t)), this.removeEventListenerForItem(t), 
e.prototype.removeChild.call(this, t);
}, i.addItem = function(e) {
var t = this.addChild(e);
t && this.addEventListenerForItem(t);
}, i.createEl = function() {
var t = this.options_.contentElType || "ul";
this.contentEl_ = g(t, {
className:"vjs-menu-content"
}), this.contentEl_.setAttribute("role", "menu");
var i = e.prototype.createEl.call(this, "div", {
append:this.contentEl_,
className:"vjs-menu"
});
return i.appendChild(this.contentEl_), z(i, "click", function(e) {
e.preventDefault(), e.stopImmediatePropagation();
}), i;
}, i.dispose = function() {
this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, 
e.prototype.dispose.call(this);
}, i.handleBlur = function(e) {
var t = e.relatedTarget || wi.activeElement;
if (!this.children().some(function(e) {
return e.el() === t;
})) {
var i = this.menuButton_;
i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton();
}
}, i.handleTapClick = function(e) {
if (this.menuButton_) {
this.menuButton_.unpressButton();
var t = this.children();
if (!Array.isArray(t)) return;
var i = t.filter(function(t) {
return t.el() === e.target;
})[0];
if (!i) return;
"CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus();
}
}, i.handleKeyDown = function(e) {
er.isEventKey(e, "Left") || er.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), 
this.stepForward()) :(er.isEventKey(e, "Right") || er.isEventKey(e, "Up")) && (e.preventDefault(), 
e.stopPropagation(), this.stepBack());
}, i.stepForward = function() {
var e = 0;
void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e);
}, i.stepBack = function() {
var e = 0;
void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e);
}, i.focus = function(e) {
void 0 === e && (e = 0);
var t = this.children().slice(), i = t.length && t[0].hasClass("vjs-menu-title");
i && t.shift(), t.length > 0 && (0 > e ? e = 0 :e >= t.length && (e = t.length - 1), 
this.focusedChild_ = e, t[e].el_.focus());
}, t;
}(zn);
zn.registerComponent("Menu", rs);
var as = function(e) {
function t(t, i) {
var n;
void 0 === i && (i = {}), n = e.call(this, t, i) || this, n.menuButton_ = new Ea(t, i), 
n.menuButton_.controlText(n.controlText_), n.menuButton_.el_.setAttribute("aria-haspopup", "true");
var r = Ea.prototype.buildCSSClass();
return n.menuButton_.el_.className = n.buildCSSClass() + " " + r, n.menuButton_.removeClass("vjs-control"), 
n.addChild(n.menuButton_), n.update(), n.enabled_ = !0, n.on(n.menuButton_, "tap", n.handleClick), 
n.on(n.menuButton_, "click", n.handleClick), n.on(n.menuButton_, "keydown", n.handleKeyDown), 
n.on(n.menuButton_, "mouseenter", function() {
n.addClass("vjs-hover"), n.menu.show(), z(wi, "keyup", Sn(Gn(n), n.handleMenuKeyUp));
}), n.on("mouseleave", n.handleMouseLeave), n.on("keydown", n.handleSubmenuKeyDown), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.update = function() {
var e = this.createMenu();
this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, 
this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), 
this.items && this.items.length <= this.hideThreshold_ ? this.hide() :this.show();
}, i.createMenu = function() {
var e = new rs(this.player_, {
menuButton:this
});
if (this.hideThreshold_ = 0, this.options_.title) {
var t = g("li", {
className:"vjs-menu-title",
innerHTML:Fn(this.options_.title),
tabIndex:-1
});
this.hideThreshold_ += 1;
var i = new zn(this.player_, {
el:t
});
e.addItem(i);
}
if (this.items = this.createItems(), this.items) for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
return e;
}, i.createItems = function() {}, i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:this.buildWrapperCSSClass()
}, {});
}, i.buildWrapperCSSClass = function() {
var t = "vjs-menu-button";
t += this.options_.inline === !0 ? "-inline" :"-popup";
var i = Ea.prototype.buildCSSClass();
return "vjs-menu-button " + t + " " + i + " " + e.prototype.buildCSSClass.call(this);
}, i.buildCSSClass = function() {
var t = "vjs-menu-button";
return t += this.options_.inline === !0 ? "-inline" :"-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this);
}, i.controlText = function(e, t) {
return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t);
}, i.dispose = function() {
this.handleMouseLeave(), e.prototype.dispose.call(this);
}, i.handleClick = function(e) {
this.buttonPressed_ ? this.unpressButton() :this.pressButton();
}, i.handleMouseLeave = function(e) {
this.removeClass("vjs-hover"), G(wi, "keyup", Sn(this, this.handleMenuKeyUp));
}, i.focus = function() {
this.menuButton_.focus();
}, i.blur = function() {
this.menuButton_.blur();
}, i.handleKeyDown = function(e) {
er.isEventKey(e, "Esc") || er.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), 
er.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) :(er.isEventKey(e, "Up") || er.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), 
this.pressButton()));
}, i.handleMenuKeyUp = function(e) {
(er.isEventKey(e, "Esc") || er.isEventKey(e, "Tab")) && this.removeClass("vjs-hover");
}, i.handleSubmenuKeyPress = function(e) {
this.handleSubmenuKeyDown(e);
}, i.handleSubmenuKeyDown = function(e) {
(er.isEventKey(e, "Esc") || er.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), 
er.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()));
}, i.pressButton = function() {
if (this.enabled_) {
if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), 
nn && f()) return;
this.menu.focus();
}
}, i.unpressButton = function() {
this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), 
this.menuButton_.el_.setAttribute("aria-expanded", "false"));
}, i.disable = function() {
this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable();
}, i.enable = function() {
this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable();
}, t;
}(zn);
zn.registerComponent("MenuButton", as);
var ss = function(e) {
function t(t, i) {
var n, r = i.tracks;
if (n = e.call(this, t, i) || this, n.items.length <= 1 && n.hide(), !r) return Gn(n);
var a = Sn(Gn(n), n.update);
return r.addEventListener("removetrack", a), r.addEventListener("addtrack", a), 
r.addEventListener("labelchange", a), n.player_.on("ready", a), n.player_.on("dispose", function() {
r.removeEventListener("removetrack", a), r.removeEventListener("addtrack", a), r.removeEventListener("labelchange", a);
}), n;
}
return Xn(t, e), t;
}(as);
zn.registerComponent("TrackButton", ss);
var os = [ "Tab", "Esc", "Up", "Down", "Right", "Left" ], us = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.selectable = i.selectable, n.isSelected_ = i.selected || !1, 
n.multiSelectable = i.multiSelectable, n.selected(n.isSelected_), n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") :n.el_.setAttribute("role", "menuitemradio") :n.el_.setAttribute("role", "menuitem"), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function(t, i, n) {
return this.nonIconControl = !0, e.prototype.createEl.call(this, "li", a({
className:"vjs-menu-item",
innerHTML:'<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
tabIndex:-1
}, i), n);
}, i.handleKeyDown = function(t) {
os.some(function(e) {
return er.isEventKey(t, e);
}) || e.prototype.handleKeyDown.call(this, t);
}, i.handleClick = function(e) {
this.selected(!0);
}, i.selected = function(e) {
this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), 
this.controlText(", selected"), this.isSelected_ = !0) :(this.removeClass("vjs-selected"), 
this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1));
}, t;
}(ya);
zn.registerComponent("MenuItem", us);
var ls = function(e) {
function t(t, i) {
var n, r = i.track, a = t.textTracks();
i.label = r.label || r.language || "Unknown", i.selected = "showing" === r.mode, 
n = e.call(this, t, i) || this, n.track = r, n.kinds = (i.kinds || [ i.kind || n.track.kind ]).filter(Boolean);
var s = function() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
n.handleTracksChange.apply(Gn(n), t);
}, o = function() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
n.handleSelectedLanguageChange.apply(Gn(n), t);
};
if (t.on([ "loadstart", "texttrackchange" ], s), a.addEventListener("change", s), 
a.addEventListener("selectedlanguagechange", o), n.on("dispose", function() {
t.off([ "loadstart", "texttrackchange" ], s), a.removeEventListener("change", s), 
a.removeEventListener("selectedlanguagechange", o);
}), void 0 === a.onchange) {
var u;
n.on([ "tap", "click" ], function() {
if ("object" != typeof bi.Event) try {
u = new bi.Event("change");
} catch (e) {}
u || (u = wi.createEvent("Event"), u.initEvent("change", !0, !0)), a.dispatchEvent(u);
});
}
return n.handleTracksChange(), n;
}
Xn(t, e);
var i = t.prototype;
return i.handleClick = function(t) {
var i = this.track, n = this.player_.textTracks();
if (e.prototype.handleClick.call(this, t), n) for (var r = 0; r < n.length; r++) {
var a = n[r];
-1 !== this.kinds.indexOf(a.kind) && (a === i ? "showing" !== a.mode && (a.mode = "showing") :"disabled" !== a.mode && (a.mode = "disabled"));
}
}, i.handleTracksChange = function(e) {
var t = "showing" === this.track.mode;
t !== this.isSelected_ && this.selected(t);
}, i.handleSelectedLanguageChange = function(e) {
if ("showing" === this.track.mode) {
var t = this.player_.cache_.selectedLanguage;
if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
this.player_.cache_.selectedLanguage = {
enabled:!0,
language:this.track.language,
kind:this.track.kind
};
}
}, i.dispose = function() {
this.track = null, e.prototype.dispose.call(this);
}, t;
}(us);
zn.registerComponent("TextTrackMenuItem", ls);
var cs = function(e) {
function t(t, i) {
return i.track = {
player:t,
kind:i.kind,
kinds:i.kinds,
"default":!1,
mode:"disabled"
}, i.kinds || (i.kinds = [ i.kind ]), i.label ? i.track.label = i.label :i.track.label = i.kinds.join(" and ") + " off", 
i.selectable = !0, i.multiSelectable = !1, e.call(this, t, i) || this;
}
Xn(t, e);
var i = t.prototype;
return i.handleTracksChange = function(e) {
for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; r > n; n++) {
var a = t[n];
if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
i = !1;
break;
}
}
i !== this.isSelected_ && this.selected(i);
}, i.handleSelectedLanguageChange = function(e) {
for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; r > n; n++) {
var a = t[n];
if ([ "captions", "descriptions", "subtitles" ].indexOf(a.kind) > -1 && "showing" === a.mode) {
i = !1;
break;
}
}
i && (this.player_.cache_.selectedLanguage = {
enabled:!1
});
}, t;
}(ls);
zn.registerComponent("OffTextTrackMenuItem", cs);
var ds = function(e) {
function t(t, i) {
return void 0 === i && (i = {}), i.tracks = t.textTracks(), e.call(this, t, i) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createItems = function(e, t) {
void 0 === e && (e = []), void 0 === t && (t = ls);
var i;
this.label_ && (i = this.label_ + " off"), e.push(new cs(this.player_, {
kinds:this.kinds_,
kind:this.kind_,
label:i
})), this.hideThreshold_ += 1;
var n = this.player_.textTracks();
Array.isArray(this.kinds_) || (this.kinds_ = [ this.kind_ ]);
for (var r = 0; r < n.length; r++) {
var a = n[r];
if (this.kinds_.indexOf(a.kind) > -1) {
var s = new t(this.player_, {
track:a,
kinds:this.kinds_,
kind:this.kind_,
selectable:!0,
multiSelectable:!1
});
s.addClass("vjs-" + a.kind + "-menu-item"), e.push(s);
}
}
return e;
}, t;
}(ss);
zn.registerComponent("TextTrackButton", ds);
var hs = function(e) {
function t(t, i) {
var n, r = i.track, a = i.cue, s = t.currentTime();
return i.selectable = !0, i.multiSelectable = !1, i.label = a.text, i.selected = a.startTime <= s && s < a.endTime, 
n = e.call(this, t, i) || this, n.track = r, n.cue = a, r.addEventListener("cuechange", Sn(Gn(n), n.update)), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.handleClick = function(t) {
e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), 
this.update(this.cue.startTime);
}, i.update = function(e) {
var t = this.cue, i = this.player_.currentTime();
this.selected(t.startTime <= i && i < t.endTime);
}, t;
}(us);
zn.registerComponent("ChaptersTrackMenuItem", hs);
var ps = function(e) {
function t(t, i, n) {
return e.call(this, t, i, n) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this);
}, i.update = function(t) {
(!this.track_ || t && ("addtrack" === t.type || "removetrack" === t.type)) && this.setTrack(this.findChaptersTrack()), 
e.prototype.update.call(this);
}, i.setTrack = function(e) {
if (this.track_ !== e) {
if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
t && t.removeEventListener("load", this.updateHandler_), this.track_ = null;
}
if (this.track_ = e, this.track_) {
this.track_.mode = "hidden";
var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
i && i.addEventListener("load", this.updateHandler_);
}
}
}, i.findChaptersTrack = function() {
for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
var i = e[t];
if (i.kind === this.kind_) return i;
}
}, i.getMenuCaption = function() {
return this.track_ && this.track_.label ? this.track_.label :this.localize(Fn(this.kind_));
}, i.createMenu = function() {
return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this);
}, i.createItems = function() {
var e = [];
if (!this.track_) return e;
var t = this.track_.cues;
if (!t) return e;
for (var i = 0, n = t.length; n > i; i++) {
var r = t[i], a = new hs(this.player_, {
track:this.track_,
cue:r
});
e.push(a);
}
return e;
}, t;
}(ds);
ps.prototype.kind_ = "chapters", ps.prototype.controlText_ = "Chapters", zn.registerComponent("ChaptersButton", ps);
var fs = function(e) {
function t(t, i, n) {
var r;
r = e.call(this, t, i, n) || this;
var a = t.textTracks(), s = Sn(Gn(r), r.handleTracksChange);
return a.addEventListener("change", s), r.on("dispose", function() {
a.removeEventListener("change", s);
}), r;
}
Xn(t, e);
var i = t.prototype;
return i.handleTracksChange = function(e) {
for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; r > n; n++) {
var a = t[n];
if (a.kind !== this.kind_ && "showing" === a.mode) {
i = !0;
break;
}
}
i ? this.disable() :this.enable();
}, i.buildCSSClass = function() {
return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this);
}, t;
}(ds);
fs.prototype.kind_ = "descriptions", fs.prototype.controlText_ = "Descriptions", 
zn.registerComponent("DescriptionsButton", fs);
var ms = function(e) {
function t(t, i, n) {
return e.call(this, t, i, n) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this);
}, t;
}(ds);
ms.prototype.kind_ = "subtitles", ms.prototype.controlText_ = "Subtitles", zn.registerComponent("SubtitlesButton", ms);
var gs = function(e) {
function t(t, i) {
var n;
return i.track = {
player:t,
kind:i.kind,
label:i.kind + " settings",
selectable:!1,
"default":!1,
mode:"disabled"
}, i.selectable = !1, i.name = "CaptionSettingsMenuItem", n = e.call(this, t, i) || this, 
n.addClass("vjs-texttrack-settings"), n.controlText(", opens " + i.kind + " settings dialog"), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.handleClick = function(e) {
this.player().getChild("textTrackSettings").open();
}, t;
}(ls);
zn.registerComponent("CaptionSettingsMenuItem", gs);
var vs = function(e) {
function t(t, i, n) {
return e.call(this, t, i, n) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-captions-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this);
}, i.createItems = function() {
var t = [];
return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new gs(this.player_, {
kind:this.kind_
})), this.hideThreshold_ += 1), e.prototype.createItems.call(this, t);
}, t;
}(ds);
vs.prototype.kind_ = "captions", vs.prototype.controlText_ = "Captions", zn.registerComponent("CaptionsButton", vs);
var ys = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function(t, i, n) {
var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
"captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), 
r += "</span>";
var s = e.prototype.createEl.call(this, t, a({
innerHTML:r
}, i), n);
return s;
}, t;
}(ls);
zn.registerComponent("SubsCapsMenuItem", ys);
var _s = function(e) {
function t(t, i) {
var n;
return void 0 === i && (i = {}), n = e.call(this, t, i) || this, n.label_ = "subtitles", 
[ "en", "en-us", "en-ca", "fr-ca" ].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"), 
n.menuButton_.controlText(Fn(n.label_)), n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this);
}, i.createItems = function() {
var t = [];
return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new gs(this.player_, {
kind:this.label_
})), this.hideThreshold_ += 1), t = e.prototype.createItems.call(this, t, ys);
}, t;
}(ds);
_s.prototype.kinds_ = [ "captions", "subtitles" ], _s.prototype.controlText_ = "Subtitles", 
zn.registerComponent("SubsCapsButton", _s);
var bs = function(e) {
function t(t, i) {
var n, r = i.track, a = t.audioTracks();
i.label = r.label || r.language || "Unknown", i.selected = r.enabled, n = e.call(this, t, i) || this, 
n.track = r, n.addClass("vjs-" + r.kind + "-menu-item");
var s = function() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
n.handleTracksChange.apply(Gn(n), t);
};
return a.addEventListener("change", s), n.on("dispose", function() {
a.removeEventListener("change", s);
}), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function(t, i, n) {
var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
"main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), 
r += "</span>";
var s = e.prototype.createEl.call(this, t, a({
innerHTML:r
}, i), n);
return s;
}, i.handleClick = function(t) {
var i = this.player_.audioTracks();
e.prototype.handleClick.call(this, t);
for (var n = 0; n < i.length; n++) {
var r = i[n];
r.enabled = r === this.track;
}
}, i.handleTracksChange = function(e) {
this.selected(this.track.enabled);
}, t;
}(us);
zn.registerComponent("AudioTrackMenuItem", bs);
var Ts = function(e) {
function t(t, i) {
return void 0 === i && (i = {}), i.tracks = t.audioTracks(), e.call(this, t, i) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-audio-button " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this);
}, i.createItems = function(e) {
void 0 === e && (e = []), this.hideThreshold_ = 1;
for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
var n = t[i];
e.push(new bs(this.player_, {
track:n,
selectable:!0,
multiSelectable:!1
}));
}
return e;
}, t;
}(ss);
Ts.prototype.controlText_ = "Audio Track", zn.registerComponent("AudioTrackButton", Ts);
var Ss = function(e) {
function t(t, i) {
var n, r = i.rate, a = parseFloat(r, 10);
return i.label = r, i.selected = 1 === a, i.selectable = !0, i.multiSelectable = !1, 
n = e.call(this, t, i) || this, n.label = r, n.rate = a, n.on(t, "ratechange", n.update), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.handleClick = function(t) {
e.prototype.handleClick.call(this), this.player().playbackRate(this.rate);
}, i.update = function(e) {
this.selected(this.player().playbackRate() === this.rate);
}, t;
}(us);
Ss.prototype.contentElType = "button", zn.registerComponent("PlaybackRateMenuItem", Ss);
var ks = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.updateVisibility(), n.updateLabel(), n.on(t, "loadstart", n.updateVisibility), 
n.on(t, "ratechange", n.updateLabel), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
var t = e.prototype.createEl.call(this);
return this.labelEl_ = g("div", {
className:"vjs-playback-rate-value",
innerHTML:"1x"
}), t.appendChild(this.labelEl_), t;
}, i.dispose = function() {
this.labelEl_ = null, e.prototype.dispose.call(this);
}, i.buildCSSClass = function() {
return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this);
}, i.buildWrapperCSSClass = function() {
return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this);
}, i.createMenu = function() {
var e = new rs(this.player()), t = this.playbackRates();
if (t) for (var i = t.length - 1; i >= 0; i--) e.addChild(new Ss(this.player(), {
rate:t[i] + "x"
}));
return e;
}, i.updateARIAAttributes = function() {
this.el().setAttribute("aria-valuenow", this.player().playbackRate());
}, i.handleClick = function(e) {
for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++) if (i[r] > t) {
n = i[r];
break;
}
this.player().playbackRate(n);
}, i.playbackRates = function() {
return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
}, i.playbackRateSupported = function() {
return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
}, i.updateVisibility = function(e) {
this.playbackRateSupported() ? this.removeClass("vjs-hidden") :this.addClass("vjs-hidden");
}, i.updateLabel = function(e) {
this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x");
}, t;
}(as);
ks.prototype.controlText_ = "Playback Rate", zn.registerComponent("PlaybackRateMenuButton", ks);
var ws = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-spacer " + e.prototype.buildCSSClass.call(this);
}, i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:this.buildCSSClass()
});
}, t;
}(zn);
zn.registerComponent("Spacer", ws);
var Es = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this);
}, i.createEl = function() {
var t = e.prototype.createEl.call(this, {
className:this.buildCSSClass()
});
return t.innerHTML = "\xa0", t;
}, t;
}(ws);
zn.registerComponent("CustomControlSpacer", Es);
var Cs = function(e) {
function t() {
return e.apply(this, arguments) || this;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "div", {
className:"vjs-control-bar",
dir:"ltr"
});
}, t;
}(zn);
Cs.prototype.options_ = {
children:[ "playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle" ]
}, "exitPictureInPicture" in wi && Cs.prototype.options_.children.splice(Cs.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"), 
zn.registerComponent("ControlBar", Cs);
var Is = function(e) {
function t(t, i) {
var n;
return n = e.call(this, t, i) || this, n.on(t, "error", n.open), n;
}
Xn(t, e);
var i = t.prototype;
return i.buildCSSClass = function() {
return "vjs-error-display " + e.prototype.buildCSSClass.call(this);
}, i.content = function() {
var e = this.player().error();
return e ? this.localize(e.message) :"";
}, t;
}(ir);
Is.prototype.options_ = Ni({}, ir.prototype.options_, {
pauseOnOpen:!1,
fillAlways:!0,
temporary:!1,
uncloseable:!0
}), zn.registerComponent("ErrorDisplay", Is);
var Ps = "vjs-text-track-settings", As = [ "#000", "Black" ], xs = [ "#00F", "Blue" ], Ls = [ "#0FF", "Cyan" ], Ds = [ "#0F0", "Green" ], Os = [ "#F0F", "Magenta" ], Rs = [ "#F00", "Red" ], Ns = [ "#FFF", "White" ], Ms = [ "#FF0", "Yellow" ], Us = [ "1", "Opaque" ], Bs = [ "0.5", "Semi-Transparent" ], Fs = [ "0", "Transparent" ], js = {
backgroundColor:{
selector:".vjs-bg-color > select",
id:"captions-background-color-%s",
label:"Color",
options:[ As, Ns, Rs, Ds, xs, Ms, Os, Ls ]
},
backgroundOpacity:{
selector:".vjs-bg-opacity > select",
id:"captions-background-opacity-%s",
label:"Transparency",
options:[ Us, Bs, Fs ]
},
color:{
selector:".vjs-fg-color > select",
id:"captions-foreground-color-%s",
label:"Color",
options:[ Ns, As, Rs, Ds, xs, Ms, Os, Ls ]
},
edgeStyle:{
selector:".vjs-edge-style > select",
id:"%s",
label:"Text Edge Style",
options:[ [ "none", "None" ], [ "raised", "Raised" ], [ "depressed", "Depressed" ], [ "uniform", "Uniform" ], [ "dropshadow", "Dropshadow" ] ]
},
fontFamily:{
selector:".vjs-font-family > select",
id:"captions-font-family-%s",
label:"Font Family",
options:[ [ "proportionalSansSerif", "Proportional Sans-Serif" ], [ "monospaceSansSerif", "Monospace Sans-Serif" ], [ "proportionalSerif", "Proportional Serif" ], [ "monospaceSerif", "Monospace Serif" ], [ "casual", "Casual" ], [ "script", "Script" ], [ "small-caps", "Small Caps" ] ]
},
fontPercent:{
selector:".vjs-font-percent > select",
id:"captions-font-size-%s",
label:"Font Size",
options:[ [ "0.50", "50%" ], [ "0.75", "75%" ], [ "1.00", "100%" ], [ "1.25", "125%" ], [ "1.50", "150%" ], [ "1.75", "175%" ], [ "2.00", "200%" ], [ "3.00", "300%" ], [ "4.00", "400%" ] ],
"default":2,
parser:function(e) {
return "1.00" === e ? null :Number(e);
}
},
textOpacity:{
selector:".vjs-text-opacity > select",
id:"captions-foreground-opacity-%s",
label:"Transparency",
options:[ Us, Bs ]
},
windowColor:{
selector:".vjs-window-color > select",
id:"captions-window-color-%s",
label:"Color"
},
windowOpacity:{
selector:".vjs-window-opacity > select",
id:"captions-window-opacity-%s",
label:"Transparency",
options:[ Fs, Bs, Us ]
}
};
js.windowColor.options = js.backgroundColor.options;
var Vs = function(e) {
function t(t, i) {
var r;
return i.temporary = !1, r = e.call(this, t, i) || this, r.updateDisplay = Sn(Gn(r), r.updateDisplay), 
r.fill(), r.hasBeenOpened_ = r.hasBeenFilled_ = !0, r.endDialog = g("p", {
className:"vjs-control-text",
textContent:r.localize("End of dialog window.")
}), r.el().appendChild(r.endDialog), r.setDefaults(), void 0 === i.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings), 
r.on(r.$(".vjs-done-button"), "click", function() {
r.saveSettings(), r.close();
}), r.on(r.$(".vjs-default-button"), "click", function() {
r.setDefaults(), r.updateDisplay();
}), n(js, function(e) {
r.on(r.$(e.selector), "change", r.updateDisplay);
}), r.options_.persistTextTrackSettings && r.restoreSettings(), r;
}
Xn(t, e);
var i = t.prototype;
return i.dispose = function() {
this.endDialog = null, e.prototype.dispose.call(this);
}, i.createElSelect_ = function(e, t, i) {
var n = this;
void 0 === t && (t = ""), void 0 === i && (i = "label");
var r = js[e], a = r.id.replace("%s", this.id_), s = [ t, a ].join(" ").trim();
return [ "<" + i + ' id="' + a + '" class="' + ("label" === i ? "vjs-label" :"") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + s + '">' ].concat(r.options.map(function(e) {
var t = a + "-" + e[1].replace(/\W+/g, "");
return [ '<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', n.localize(e[1]), "</option>" ].join("");
})).concat("</select>").join("");
}, i.createElFgColor_ = function() {
var e = "captions-text-legend-" + this.id_;
return [ '<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>" ].join("");
}, i.createElBgColor_ = function() {
var e = "captions-background-" + this.id_;
return [ '<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>" ].join("");
}, i.createElWinColor_ = function() {
var e = "captions-window-" + this.id_;
return [ '<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>" ].join("");
}, i.createElColors_ = function() {
return g("div", {
className:"vjs-track-settings-colors",
innerHTML:[ this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_() ].join("")
});
}, i.createElFont_ = function() {
return g("div", {
className:"vjs-track-settings-font",
innerHTML:[ '<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>" ].join("")
});
}, i.createElControls_ = function() {
var e = this.localize("restore all settings to the default values");
return g("div", {
className:"vjs-track-settings-controls",
innerHTML:[ '<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>" ].join("")
});
}, i.content = function() {
return [ this.createElColors_(), this.createElFont_(), this.createElControls_() ];
}, i.label = function() {
return this.localize("Caption Settings Dialog");
}, i.description = function() {
return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
}, i.buildCSSClass = function() {
return e.prototype.buildCSSClass.call(this) + " vjs-text-track-settings";
}, i.getValues = function() {
var e = this;
return r(js, function(t, i, n) {
var r = nt(e.$(i.selector), i.parser);
return void 0 !== r && (t[n] = r), t;
}, {});
}, i.setValues = function(e) {
var t = this;
n(js, function(i, n) {
rt(t.$(i.selector), e[n], i.parser);
});
}, i.setDefaults = function() {
var e = this;
n(js, function(t) {
var i = t.hasOwnProperty("default") ? t["default"] :0;
e.$(t.selector).selectedIndex = i;
});
}, i.restoreSettings = function() {
var e;
try {
e = JSON.parse(bi.localStorage.getItem(Ps));
} catch (t) {
Oi.warn(t);
}
e && this.setValues(e);
}, i.saveSettings = function() {
if (this.options_.persistTextTrackSettings) {
var e = this.getValues();
try {
Object.keys(e).length ? bi.localStorage.setItem(Ps, JSON.stringify(e)) :bi.localStorage.removeItem(Ps);
} catch (t) {
Oi.warn(t);
}
}
}, i.updateDisplay = function() {
var e = this.player_.getChild("textTrackDisplay");
e && e.updateDisplay();
}, i.conditionalBlur_ = function() {
this.previouslyActiveEl_ = null;
var e = this.player_.controlBar, t = e && e.subsCapsButton, i = e && e.captionsButton;
t ? t.focus() :i && i.focus();
}, t;
}(ir);
zn.registerComponent("TextTrackSettings", Vs);
var Hs = function(e) {
function t(t, i) {
var n, r = i.ResizeObserver || bi.ResizeObserver;
null === i.ResizeObserver && (r = !1);
var a = J({
createEl:!r,
reportTouchActivity:!1
}, i);
return n = e.call(this, t, a) || this, n.ResizeObserver = i.ResizeObserver || bi.ResizeObserver, 
n.loadListener_ = null, n.resizeObserver_ = null, n.debouncedHandler_ = wn(function() {
n.resizeHandler();
}, 100, !1, Gn(n)), r ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_), 
n.resizeObserver_.observe(t.el())) :(n.loadListener_ = function() {
if (n.el_ && n.el_.contentWindow) {
var e = n.debouncedHandler_, t = n.unloadListener_ = function() {
G(this, "resize", e), G(this, "unload", t), t = null;
};
z(n.el_.contentWindow, "unload", t), z(n.el_.contentWindow, "resize", e);
}
}, n.one("load", n.loadListener_)), n;
}
Xn(t, e);
var i = t.prototype;
return i.createEl = function() {
return e.prototype.createEl.call(this, "iframe", {
className:"vjs-resize-manager",
tabIndex:-1
}, {
"aria-hidden":"true"
});
}, i.resizeHandler = function() {
this.player_ && this.player_.trigger && this.player_.trigger("playerresize");
}, i.dispose = function() {
this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), 
this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), 
this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), 
this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, 
this.loadListener_ = null, e.prototype.dispose.call(this);
}, t;
}(zn);
zn.registerComponent("ResizeManager", Hs);
var qs = {
trackingThreshold:30,
liveTolerance:15
}, Ws = function(e) {
function t(t, i) {
var n, r = J(qs, i, {
createEl:!1
});
return n = e.call(this, t, r) || this, n.reset_(), n.on(n.player_, "durationchange", n.handleDurationchange), 
Qi && "hidden" in wi && "visibilityState" in wi && n.on(wi, "visibilitychange", n.handleVisibilityChange), 
n;
}
Xn(t, e);
var i = t.prototype;
return i.handleVisibilityChange = function() {
this.player_.duration() === 1 / 0 && (wi.hidden ? this.stopTracking() :this.startTracking());
}, i.trackLive_ = function() {
var e = this.player_.seekable();
if (e && e.length) {
var t = Number(bi.performance.now().toFixed(4)), i = -1 === this.lastTime_ ? 0 :(t - this.lastTime_) / 1e3;
this.lastTime_ = t, this.pastSeekEnd_ = this.pastSeekEnd() + i;
var n = this.liveCurrentTime(), r = this.player_.currentTime(), a = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - r) > this.options_.liveTolerance;
this.timeupdateSeen_ && n !== 1 / 0 || (a = !1), a !== this.behindLiveEdge_ && (this.behindLiveEdge_ = a, 
this.trigger("liveedgechange"));
}
}, i.handleDurationchange = function() {
this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), 
this.startTracking()) :(this.player_.removeClass("vjs-liveui"), this.stopTracking());
}, i.startTracking = function() {
this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), 
this.trackingInterval_ = this.setInterval(this.trackLive_, Tn), this.trackLive_(), 
this.on(this.player_, [ "play", "pause" ], this.trackLive_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked) :(this.one(this.player_, "play", this.handlePlay), 
this.one(this.player_, "timeupdate", this.handleFirstTimeupdate)));
}, i.handleFirstTimeupdate = function() {
this.timeupdateSeen_ = !0, this.on(this.player_, "seeked", this.handleSeeked);
}, i.handleSeeked = function() {
var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
this.seekedBehindLive_ = this.skipNextSeeked_ ? !1 :e > 2, this.skipNextSeeked_ = !1, 
this.trackLive_();
}, i.handlePlay = function() {
this.one(this.player_, "timeupdate", this.seekToLiveEdge);
}, i.reset_ = function() {
this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = !0, 
this.timeupdateSeen_ = !1, this.seekedBehindLive_ = !1, this.skipNextSeeked_ = !1, 
this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, [ "play", "pause" ], this.trackLive_), 
this.off(this.player_, "seeked", this.handleSeeked), this.off(this.player_, "play", this.handlePlay), 
this.off(this.player_, "timeupdate", this.handleFirstTimeupdate), this.off(this.player_, "timeupdate", this.seekToLiveEdge);
}, i.stopTracking = function() {
this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
}, i.seekableEnd = function() {
for (var e = this.player_.seekable(), t = [], i = e ? e.length :0; i--; ) t.push(e.end(i));
return t.length ? t.sort()[t.length - 1] :1 / 0;
}, i.seekableStart = function() {
for (var e = this.player_.seekable(), t = [], i = e ? e.length :0; i--; ) t.push(e.start(i));
return t.length ? t.sort()[0] :0;
}, i.liveWindow = function() {
var e = this.liveCurrentTime();
return e === 1 / 0 ? 0 :e - this.seekableStart();
}, i.isLive = function() {
return this.isTracking();
}, i.atLiveEdge = function() {
return !this.behindLiveEdge();
}, i.liveCurrentTime = function() {
return this.pastSeekEnd() + this.seekableEnd();
}, i.pastSeekEnd = function() {
var e = this.seekableEnd();
return -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), 
this.lastSeekEnd_ = e, this.pastSeekEnd_;
}, i.behindLiveEdge = function() {
return this.behindLiveEdge_;
}, i.isTracking = function() {
return "number" == typeof this.trackingInterval_;
}, i.seekToLiveEdge = function() {
this.seekedBehindLive_ = !1, this.atLiveEdge() || (this.skipNextSeeked_ = !0, this.player_.currentTime(this.liveCurrentTime()));
}, i.dispose = function() {
this.off(wi, "visibilitychange", this.handleVisibilityChange), this.stopTracking(), 
e.prototype.dispose.call(this);
}, t;
}(zn);
zn.registerComponent("LiveTracker", Ws);
var zs = function(e) {
var t = e.el();
if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
var i = e.$$("source"), n = [], r = "";
if (!i.length) return !1;
for (var a = 0; a < i.length; a++) {
var s = i[a].src;
s && -1 === n.indexOf(s) && n.push(s);
}
return n.length ? (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0) :!1;
}, Gs = Object.defineProperty({}, "innerHTML", {
get:function() {
return this.cloneNode(!0).innerHTML;
},
set:function(e) {
var t = wi.createElement(this.nodeName.toLowerCase());
t.innerHTML = e;
for (var i = wi.createDocumentFragment(); t.childNodes.length; ) i.appendChild(t.childNodes[0]);
return this.innerText = "", bi.Element.prototype.appendChild.call(this, i), this.innerHTML;
}
}), Xs = function(e, t) {
for (var i = {}, n = 0; n < e.length && (i = Object.getOwnPropertyDescriptor(e[n], t), 
!(i && i.set && i.get)); n++) ;
return i.enumerable = !0, i.configurable = !0, i;
}, Ks = function(e) {
return Xs([ e.el(), bi.HTMLMediaElement.prototype, bi.Element.prototype, Gs ], "innerHTML");
}, Ys = function(e) {
var t = e.el();
if (!t.resetSourceWatch_) {
var i = {}, n = Ks(e), r = function(i) {
return function() {
for (var n = arguments.length, r = new Array(n), a = 0; n > a; a++) r[a] = arguments[a];
var s = i.apply(t, r);
return zs(e), s;
};
};
[ "append", "appendChild", "insertAdjacentHTML" ].forEach(function(e) {
t[e] && (i[e] = t[e], t[e] = r(i[e]));
}), Object.defineProperty(t, "innerHTML", J(n, {
set:r(n.set)
})), t.resetSourceWatch_ = function() {
t.resetSourceWatch_ = null, Object.keys(i).forEach(function(e) {
t[e] = i[e];
}), Object.defineProperty(t, "innerHTML", n);
}, e.one("sourceset", t.resetSourceWatch_);
}
}, Qs = Object.defineProperty({}, "src", {
get:function() {
return this.hasAttribute("src") ? _r(bi.Element.prototype.getAttribute.call(this, "src")) :"";
},
set:function(e) {
return bi.Element.prototype.setAttribute.call(this, "src", e), e;
}
}), $s = function(e) {
return Xs([ e.el(), bi.HTMLMediaElement.prototype, Qs ], "src");
}, Js = function(e) {
if (e.featuresSourceset) {
var t = e.el();
if (!t.resetSourceset_) {
var i = $s(e), n = t.setAttribute, r = t.load;
Object.defineProperty(t, "src", J(i, {
set:function(n) {
var r = i.set.call(t, n);
return e.triggerSourceset(t.src), r;
}
})), t.setAttribute = function(i, r) {
var a = n.call(t, i, r);
return /src/i.test(i) && e.triggerSourceset(t.src), a;
}, t.load = function() {
var i = r.call(t);
return zs(e) || (e.triggerSourceset(""), Ys(e)), i;
}, t.currentSrc ? e.triggerSourceset(t.currentSrc) :zs(e) || Ys(e), t.resetSourceset_ = function() {
t.resetSourceset_ = null, t.load = r, t.setAttribute = n, Object.defineProperty(t, "src", i), 
t.resetSourceWatch_ && t.resetSourceWatch_();
};
}
}
}, Zs = function(e, t, i, n) {
void 0 === n && (n = !0);
var r = function(i) {
return Object.defineProperty(e, t, {
value:i,
enumerable:!0,
writable:!0
});
}, a = {
configurable:!0,
enumerable:!0,
get:function() {
var e = i();
return r(e), e;
}
};
return n && (a.set = r), Object.defineProperty(e, t, a);
}, eo = function(e) {
function t(t, i) {
var n;
n = e.call(this, t, i) || this;
var r = t.source, a = !1;
if (r && (n.el_.currentSrc !== r.src || t.tag && 3 === t.tag.initNetworkState_) ? n.setSource(r) :n.handleLateInit_(n.el_), 
t.enableSourceset && n.setupSourcesetHandling_(), n.isScrubbing_ = !1, n.el_.hasChildNodes()) {
for (var s = n.el_.childNodes, o = s.length, u = []; o--; ) {
var l = s[o], c = l.nodeName.toLowerCase();
"track" === c && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(l), 
n.remoteTextTracks().addTrack(l.track), n.textTracks().addTrack(l.track), a || n.el_.hasAttribute("crossorigin") || !Tr(l.src) || (a = !0)) :u.push(l));
}
for (var d = 0; d < u.length; d++) n.el_.removeChild(u[d]);
}
return n.proxyNativeTracks_(), n.featuresNativeTextTracks && a && Oi.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), 
n.restoreMetadataTracksInIOSNativePlayer_(), (Zi || tn || zi) && t.nativeControlsForTouch === !0 && n.setControls(!0), 
n.proxyWebkitFullscreen_(), n.triggerReady(), n;
}
Xn(t, e);
var i = t.prototype;
return i.dispose = function() {
this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), t.disposeMediaElement(this.el_), 
this.options_ = null, e.prototype.dispose.call(this);
}, i.setupSourcesetHandling_ = function() {
Js(this);
}, i.restoreMetadataTracksInIOSNativePlayer_ = function() {
var e, t = this.textTracks(), i = function() {
e = [];
for (var i = 0; i < t.length; i++) {
var n = t[i];
"metadata" === n.kind && e.push({
track:n,
storedMode:n.mode
});
}
};
i(), t.addEventListener("change", i), this.on("dispose", function() {
return t.removeEventListener("change", i);
});
var n = function r() {
for (var i = 0; i < e.length; i++) {
var n = e[i];
"disabled" === n.track.mode && n.track.mode !== n.storedMode && (n.track.mode = n.storedMode);
}
t.removeEventListener("change", r);
};
this.on("webkitbeginfullscreen", function() {
t.removeEventListener("change", i), t.removeEventListener("change", n), t.addEventListener("change", n);
}), this.on("webkitendfullscreen", function() {
t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", n);
});
}, i.overrideNative_ = function(e, t) {
var i = this;
if (t === this["featuresNative" + e + "Tracks"]) {
var n = e.toLowerCase();
this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function(e) {
var t = i.el()[n + "Tracks"];
t.removeEventListener(e, i[n + "TracksListeners_"][e]);
}), this["featuresNative" + e + "Tracks"] = !t, this[n + "TracksListeners_"] = null, 
this.proxyNativeTracksForType_(n);
}
}, i.overrideNativeAudioTracks = function(e) {
this.overrideNative_("Audio", e);
}, i.overrideNativeVideoTracks = function(e) {
this.overrideNative_("Video", e);
}, i.proxyNativeTracksForType_ = function(e) {
var t = this, i = Fr[e], n = this.el()[i.getterName], r = this[i.getterName]();
if (this["featuresNative" + i.capitalName + "Tracks"] && n && n.addEventListener) {
var a = {
change:function(i) {
var n = {
type:"change",
target:r,
currentTarget:r,
srcElement:r
};
r.trigger(n), "text" === e && t[jr.remoteText.getterName]().trigger(n);
},
addtrack:function(e) {
r.addTrack(e.track);
},
removetrack:function(e) {
r.removeTrack(e.track);
}
}, s = function() {
for (var e = [], t = 0; t < r.length; t++) {
for (var i = !1, a = 0; a < n.length; a++) if (n[a] === r[t]) {
i = !0;
break;
}
i || e.push(r[t]);
}
for (;e.length; ) r.removeTrack(e.shift());
};
this[i.getterName + "Listeners_"] = a, Object.keys(a).forEach(function(e) {
var i = a[e];
n.addEventListener(e, i), t.on("dispose", function(t) {
return n.removeEventListener(e, i);
});
}), this.on("loadstart", s), this.on("dispose", function(e) {
return t.off("loadstart", s);
});
}
}, i.proxyNativeTracks_ = function() {
var e = this;
Fr.names.forEach(function(t) {
e.proxyNativeTracksForType_(t);
});
}, i.createEl = function() {
var e = this.options_.tag;
if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
if (e) {
var i = e.cloneNode(!0);
e.parentNode && e.parentNode.insertBefore(i, e), t.disposeMediaElement(e), e = i;
} else {
e = wi.createElement("video");
var n = this.options_.tag && w(this.options_.tag), r = J({}, n);
Zi && this.options_.nativeControlsForTouch === !0 || delete r.controls, k(e, a(r, {
id:this.options_.techId,
"class":"vjs-tech"
}));
}
e.playerId = this.options_.playerId;
}
"undefined" != typeof this.options_.preload && C(e, "preload", this.options_.preload), 
void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
for (var s = [ "loop", "muted", "playsinline", "autoplay" ], o = 0; o < s.length; o++) {
var u = s[o], l = this.options_[u];
"undefined" != typeof l && (l ? C(e, u, u) :I(e, u), e[u] = l);
}
return e;
}, i.handleLateInit_ = function(e) {
if (0 !== e.networkState && 3 !== e.networkState) {
if (0 === e.readyState) {
var t = !1, i = function() {
t = !0;
};
this.on("loadstart", i);
var n = function() {
t || this.trigger("loadstart");
};
return this.on("loadedmetadata", n), void this.ready(function() {
this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart");
});
}
var r = [ "loadstart" ];
r.push("loadedmetadata"), e.readyState >= 2 && r.push("loadeddata"), e.readyState >= 3 && r.push("canplay"), 
e.readyState >= 4 && r.push("canplaythrough"), this.ready(function() {
r.forEach(function(e) {
this.trigger(e);
}, this);
});
}
}, i.setScrubbing = function(e) {
this.isScrubbing_ = e;
}, i.scrubbing = function() {
return this.isScrubbing_;
}, i.setCurrentTime = function(e) {
try {
this.isScrubbing_ && this.el_.fastSeek && rn ? this.el_.fastSeek(e) :this.el_.currentTime = e;
} catch (t) {
Oi(t, "Video is not ready. (Video.js)");
}
}, i.duration = function() {
var e = this;
if (this.el_.duration === 1 / 0 && qi && Ki && 0 === this.el_.currentTime) {
var t = function i() {
e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), 
e.off("timeupdate", i));
};
return this.on("timeupdate", t), NaN;
}
return this.el_.duration || NaN;
}, i.width = function() {
return this.el_.offsetWidth;
}, i.height = function() {
return this.el_.offsetHeight;
}, i.proxyWebkitFullscreen_ = function() {
var e = this;
if ("webkitDisplayingFullscreen" in this.el_) {
var t = function() {
this.trigger("fullscreenchange", {
isFullscreen:!1
});
}, i = function() {
"webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), 
this.trigger("fullscreenchange", {
isFullscreen:!0,
nativeIOSFullscreen:!0
}));
};
this.on("webkitbeginfullscreen", i), this.on("dispose", function() {
e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t);
});
}
}, i.supportsFullScreen = function() {
if ("function" == typeof this.el_.webkitEnterFullScreen) {
var e = bi.navigator && bi.navigator.userAgent || "";
if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0;
}
return !1;
}, i.enterFullScreen = function() {
var e = this.el_;
if (e.paused && e.networkState <= e.HAVE_METADATA) le(this.el_.play()), this.setTimeout(function() {
e.pause();
try {
e.webkitEnterFullScreen();
} catch (t) {
this.trigger("fullscreenerror", t);
}
}, 0); else try {
e.webkitEnterFullScreen();
} catch (t) {
this.trigger("fullscreenerror", t);
}
}, i.exitFullScreen = function() {
return this.el_.webkitDisplayingFullscreen ? void this.el_.webkitExitFullScreen() :void this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
}, i.requestPictureInPicture = function() {
return this.el_.requestPictureInPicture();
}, i.src = function(e) {
return void 0 === e ? this.el_.src :void this.setSrc(e);
}, i.reset = function() {
t.resetMediaElement(this.el_);
}, i.currentSrc = function() {
return this.currentSource_ ? this.currentSource_.src :this.el_.currentSrc;
}, i.setControls = function(e) {
this.el_.controls = !!e;
}, i.addTextTrack = function(t, i, n) {
return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, i, n) :e.prototype.addTextTrack.call(this, t, i, n);
}, i.createRemoteTextTrack = function(t) {
if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t);
var i = wi.createElement("track");
return t.kind && (i.kind = t.kind), t.label && (i.label = t.label), (t.language || t.srclang) && (i.srclang = t.language || t.srclang), 
t["default"] && (i["default"] = t["default"]), t.id && (i.id = t.id), t.src && (i.src = t.src), 
i;
}, i.addRemoteTextTrack = function(t, i) {
var n = e.prototype.addRemoteTextTrack.call(this, t, i);
return this.featuresNativeTextTracks && this.el().appendChild(n), n;
}, i.removeRemoteTextTrack = function(t) {
if (e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks) for (var i = this.$$("track"), n = i.length; n--; ) (t === i[n] || t === i[n].track) && this.el().removeChild(i[n]);
}, i.getVideoPlaybackQuality = function() {
if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
var e = {};
return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, 
e.totalVideoFrames = this.el().webkitDecodedFrameCount), bi.performance && "function" == typeof bi.performance.now ? e.creationTime = bi.performance.now() :bi.performance && bi.performance.timing && "number" == typeof bi.performance.timing.navigationStart && (e.creationTime = bi.Date.now() - bi.performance.timing.navigationStart), 
e;
}, t;
}(sa);
Zs(eo, "TEST_VID", function() {
if (h()) {
var e = wi.createElement("video"), t = wi.createElement("track");
return t.kind = "captions", t.srclang = "en", t.label = "English", e.appendChild(t), 
e;
}
}), eo.isSupported = function() {
try {
eo.TEST_VID.volume = .5;
} catch (e) {
return !1;
}
return !(!eo.TEST_VID || !eo.TEST_VID.canPlayType);
}, eo.canPlayType = function(e) {
return eo.TEST_VID.canPlayType(e);
}, eo.canPlaySource = function(e, t) {
return eo.canPlayType(e.type);
}, eo.canControlVolume = function() {
try {
var e = eo.TEST_VID.volume;
return eo.TEST_VID.volume = e / 2 + .1, e !== eo.TEST_VID.volume;
} catch (t) {
return !1;
}
}, eo.canMuteVolume = function() {
try {
var e = eo.TEST_VID.muted;
return eo.TEST_VID.muted = !e, eo.TEST_VID.muted ? C(eo.TEST_VID, "muted", "muted") :I(eo.TEST_VID, "muted", "muted"), 
e !== eo.TEST_VID.muted;
} catch (t) {
return !1;
}
}, eo.canControlPlaybackRate = function() {
if (qi && Ki && 58 > Yi) return !1;
try {
var e = eo.TEST_VID.playbackRate;
return eo.TEST_VID.playbackRate = e / 2 + .1, e !== eo.TEST_VID.playbackRate;
} catch (t) {
return !1;
}
}, eo.canOverrideAttributes = function() {
try {
var e = function() {};
Object.defineProperty(wi.createElement("video"), "src", {
get:e,
set:e
}), Object.defineProperty(wi.createElement("audio"), "src", {
get:e,
set:e
}), Object.defineProperty(wi.createElement("video"), "innerHTML", {
get:e,
set:e
}), Object.defineProperty(wi.createElement("audio"), "innerHTML", {
get:e,
set:e
});
} catch (t) {
return !1;
}
return !0;
}, eo.supportsNativeTextTracks = function() {
return rn || nn && Ki;
}, eo.supportsNativeVideoTracks = function() {
return !(!eo.TEST_VID || !eo.TEST_VID.videoTracks);
}, eo.supportsNativeAudioTracks = function() {
return !(!eo.TEST_VID || !eo.TEST_VID.audioTracks);
}, eo.Events = [ "loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange" ], 
[ [ "featuresVolumeControl", "canControlVolume" ], [ "featuresMuteControl", "canMuteVolume" ], [ "featuresPlaybackRate", "canControlPlaybackRate" ], [ "featuresSourceset", "canOverrideAttributes" ], [ "featuresNativeTextTracks", "supportsNativeTextTracks" ], [ "featuresNativeVideoTracks", "supportsNativeVideoTracks" ], [ "featuresNativeAudioTracks", "supportsNativeAudioTracks" ] ].forEach(function(e) {
var t = e[0], i = e[1];
Zs(eo.prototype, t, function() {
return eo[i]();
}, !0);
}), eo.prototype.movingMediaElementInDOM = !nn, eo.prototype.featuresFullscreenResize = !0, 
eo.prototype.featuresProgressEvents = !0, eo.prototype.featuresTimeupdateEvents = !0;
var to;
eo.patchCanPlayType = function() {
Wi >= 4 && !Gi && !Ki && (to = eo.TEST_VID && eo.TEST_VID.constructor.prototype.canPlayType, 
eo.TEST_VID.constructor.prototype.canPlayType = function(e) {
var t = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
return e && t.test(e) ? "maybe" :to.call(this, e);
});
}, eo.unpatchCanPlayType = function() {
var e = eo.TEST_VID.constructor.prototype.canPlayType;
return to && (eo.TEST_VID.constructor.prototype.canPlayType = to), e;
}, eo.patchCanPlayType(), eo.disposeMediaElement = function(e) {
if (e) {
for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); ) e.removeChild(e.firstChild);
e.removeAttribute("src"), "function" == typeof e.load && !function() {
try {
e.load();
} catch (t) {}
}();
}
}, eo.resetMediaElement = function(e) {
if (e) {
for (var t = e.querySelectorAll("source"), i = t.length; i--; ) e.removeChild(t[i]);
e.removeAttribute("src"), "function" == typeof e.load && !function() {
try {
e.load();
} catch (t) {}
}();
}
}, [ "muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline" ].forEach(function(e) {
eo.prototype[e] = function() {
return this.el_[e] || this.el_.hasAttribute(e);
};
}), [ "muted", "defaultMuted", "autoplay", "loop", "playsinline" ].forEach(function(e) {
eo.prototype["set" + Fn(e)] = function(t) {
this.el_[e] = t, t ? this.el_.setAttribute(e, e) :this.el_.removeAttribute(e);
};
}), [ "paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin" ].forEach(function(e) {
eo.prototype[e] = function() {
return this.el_[e];
};
}), [ "volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin" ].forEach(function(e) {
eo.prototype["set" + Fn(e)] = function(t) {
this.el_[e] = t;
};
}), [ "pause", "load", "play" ].forEach(function(e) {
eo.prototype[e] = function() {
return this.el_[e]();
};
}), sa.withSourceHandlers(eo), eo.nativeSourceHandler = {}, eo.nativeSourceHandler.canPlayType = function(e) {
try {
return eo.TEST_VID.canPlayType(e);
} catch (t) {
return "";
}
}, eo.nativeSourceHandler.canHandleSource = function(e, t) {
if (e.type) return eo.nativeSourceHandler.canPlayType(e.type);
if (e.src) {
var i = br(e.src);
return eo.nativeSourceHandler.canPlayType("video/" + i);
}
return "";
}, eo.nativeSourceHandler.handleSource = function(e, t, i) {
t.setSrc(e.src);
}, eo.nativeSourceHandler.dispose = function() {}, eo.registerSourceHandler(eo.nativeSourceHandler), 
sa.registerTech("Html5", eo);
var io = [ "progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange" ], no = {
canplay:"CanPlay",
canplaythrough:"CanPlayThrough",
playing:"Playing",
seeked:"Seeked"
}, ro = [ "tiny", "xsmall", "small", "medium", "large", "xlarge", "huge" ], ao = {};
ro.forEach(function(e) {
var t = "x" === e.charAt(0) ? "x-" + e.substring(1) :e;
ao[e] = "vjs-layout-" + t;
});
var so = {
tiny:210,
xsmall:320,
small:425,
medium:768,
large:1440,
xlarge:2560,
huge:1 / 0
}, oo = function(e) {
function t(i, n, r) {
var s;
if (i.id = i.id || n.id || "vjs_video_" + V(), n = a(t.getTagSettings(i), n), n.initChildren = !1, 
n.createEl = !1, n.evented = !1, n.reportTouchActivity = !1, !n.language) if ("function" == typeof i.closest) {
var o = i.closest("[lang]");
o && o.getAttribute && (n.language = o.getAttribute("lang"));
} else for (var u = i; u && 1 === u.nodeType; ) {
if (w(u).hasOwnProperty("lang")) {
n.language = u.getAttribute("lang");
break;
}
u = u.parentNode;
}
if (s = e.call(this, null, n, r) || this, s.boundDocumentFullscreenChange_ = function(e) {
return s.documentFullscreenChange_(e);
}, s.boundFullWindowOnEscKey_ = function(e) {
return s.fullWindowOnEscKey(e);
}, s.isFullscreen_ = !1, s.log = Ri(s.id_), s.fsApi_ = Ei, s.isPosterFromTech_ = !1, 
s.queuedCallbacks_ = [], s.isReady_ = !1, s.hasStarted_ = !1, s.userActive_ = !1, 
s.debugEnabled_ = !1, !s.options_ || !s.options_.techOrder || !s.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
if (s.tag = i, s.tagAttributes = i && w(i), s.language(s.options_.language), n.languages) {
var l = {};
Object.getOwnPropertyNames(n.languages).forEach(function(e) {
l[e.toLowerCase()] = n.languages[e];
}), s.languages_ = l;
} else s.languages_ = t.prototype.options_.languages;
s.resetCache_(), s.poster_ = n.poster || "", s.controls_ = !!n.controls, i.controls = !1, 
i.removeAttribute("controls"), s.changingSrc_ = !1, s.playCallbacks_ = [], s.playTerminatedQueue_ = [], 
i.hasAttribute("autoplay") ? s.autoplay(!0) :s.autoplay(s.options_.autoplay), n.plugins && Object.keys(n.plugins).forEach(function(e) {
if ("function" != typeof s[e]) throw new Error('plugin "' + e + '" does not exist');
}), s.scrubbing_ = !1, s.el_ = s.createEl(), Q(Gn(s), {
eventBusKey:"el_"
}), s.fsApi_.requestFullscreen && (z(wi, s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_), 
s.on(s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_)), s.fluid_ && s.on([ "playerreset", "resize" ], s.updateStyleEl_);
var c = J(s.options_);
n.plugins && Object.keys(n.plugins).forEach(function(e) {
s[e](n.plugins[e]);
}), n.debug && s.debug(!0), s.options_.playerOptions = c, s.middleware_ = [], s.initChildren(), 
s.isAudio("audio" === i.nodeName.toLowerCase()), s.controls() ? s.addClass("vjs-controls-enabled") :s.addClass("vjs-controls-disabled"), 
s.el_.setAttribute("role", "region"), s.isAudio() ? s.el_.setAttribute("aria-label", s.localize("Audio Player")) :s.el_.setAttribute("aria-label", s.localize("Video Player")), 
s.isAudio() && s.addClass("vjs-audio"), s.flexNotSupported_() && s.addClass("vjs-no-flex"), 
Zi && s.addClass("vjs-touch-enabled"), nn || s.addClass("vjs-workinghover"), t.players[s.id_] = Gn(s);
var d = vi.split(".")[0];
return s.addClass("vjs-v" + d), s.userActive(!0), s.reportUserActivity(), s.one("play", s.listenForUserActivity_), 
s.on("stageclick", s.handleStageClick_), s.on("keydown", s.handleKeyDown), s.on("languagechange", s.handleLanguagechange), 
s.breakpoints(s.options_.breakpoints), s.responsive(s.options_.responsive), s;
}
Xn(t, e);
var i = t.prototype;
return i.dispose = function() {
var i = this;
this.trigger("dispose"), this.off("dispose"), G(wi, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), 
G(wi, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), 
this.styleEl_ = null), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), 
this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), 
this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), 
this.tag && (this.tag = null), Xe(this), Vr.names.forEach(function(e) {
var t = Vr[e], n = i[t.getterName]();
n && n.off && n.off();
}), e.prototype.dispose.call(this);
}, i.createEl = function() {
var t, i = this.tag, n = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"), r = "video-js" === this.tag.tagName.toLowerCase();
n ? t = this.el_ = i.parentNode :r || (t = this.el_ = e.prototype.createEl.call(this, "div"));
var a = w(i);
if (r) {
for (t = this.el_ = i, i = this.tag = wi.createElement("video"); t.children.length; ) i.appendChild(t.firstChild);
_(t, "video-js") || b(t, "video-js"), t.appendChild(i), n = this.playerElIngest_ = t, 
Object.keys(t).forEach(function(e) {
try {
i[e] = t[e];
} catch (n) {}
});
}
if (i.setAttribute("tabindex", "-1"), a.tabindex = "-1", (Qi || Ki && Ji) && (i.setAttribute("role", "application"), 
a.role = "application"), i.removeAttribute("width"), i.removeAttribute("height"), 
"width" in a && delete a.width, "height" in a && delete a.height, Object.getOwnPropertyNames(a).forEach(function(e) {
r && "class" === e || t.setAttribute(e, a[e]), r && i.setAttribute(e, a[e]);
}), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = t.player = this, 
this.addClass("vjs-paused"), bi.VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
this.styleEl_ = hn("vjs-styles-dimensions");
var s = sn(".vjs-styles-defaults"), o = sn("head");
o.insertBefore(this.styleEl_, s ? s.nextSibling :o.firstChild);
}
this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), 
this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), 
this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
for (var u = i.getElementsByTagName("a"), l = 0; l < u.length; l++) {
var c = u.item(l);
b(c, "vjs-hidden"), c.setAttribute("hidden", "hidden");
}
return i.initNetworkState_ = i.networkState, i.parentNode && !n && i.parentNode.insertBefore(t, i), 
y(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_), 
this.el_ = t, t;
}, i.crossOrigin = function(e) {
return e ? "anonymous" !== e && "use-credentials" !== e ? void Oi.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"') :void this.techCall_("setCrossOrigin", e) :this.techGet_("crossOrigin");
}, i.width = function(e) {
return this.dimension("width", e);
}, i.height = function(e) {
return this.dimension("height", e);
}, i.dimension = function(e, t) {
var i = e + "_";
if (void 0 === t) return this[i] || 0;
if ("" === t || "auto" === t) return this[i] = void 0, void this.updateStyleEl_();
var n = parseFloat(t);
return isNaN(n) ? void Oi.error('Improper value "' + t + '" supplied for for ' + e) :(this[i] = n, 
void this.updateStyleEl_());
}, i.fluid = function(e) {
var t = this;
return void 0 === e ? !!this.fluid_ :(this.fluid_ = !!e, Pn(this) && this.off([ "playerreset", "resize" ], this.updateStyleEl_), 
e ? (this.addClass("vjs-fluid"), this.fill(!1), An(this, function() {
t.on([ "playerreset", "resize" ], t.updateStyleEl_);
})) :this.removeClass("vjs-fluid"), void this.updateStyleEl_());
}, i.fill = function(e) {
return void 0 === e ? !!this.fill_ :(this.fill_ = !!e, void (e ? (this.addClass("vjs-fill"), 
this.fluid(!1)) :this.removeClass("vjs-fill")));
}, i.aspectRatio = function(e) {
if (void 0 === e) return this.aspectRatio_;
if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_();
}, i.updateStyleEl_ = function() {
if (bi.VIDEOJS_NO_DYNAMIC_STYLE === !0) {
var e = "number" == typeof this.width_ ? this.width_ :this.options_.width, t = "number" == typeof this.height_ ? this.height_ :this.options_.height, i = this.tech_ && this.tech_.el();
return void (i && (e >= 0 && (i.width = e), t >= 0 && (i.height = t)));
}
var n, r, a, s;
a = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ :this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() :"16:9";
var o = a.split(":"), u = o[1] / o[0];
n = void 0 !== this.width_ ? this.width_ :void 0 !== this.height_ ? this.height_ / u :this.videoWidth() || 300, 
r = void 0 !== this.height_ ? this.height_ :n * u, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() :this.id() + "-dimensions", 
this.addClass(s), pn(this.styleEl_, "\n      ." + s + " {\n        width: " + n + "px;\n        height: " + r + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * u + "%;\n      }\n    ");
}, i.loadTech_ = function(e, t) {
var i = this;
this.tech_ && this.unloadTech_();
var n = Fn(e), r = e.charAt(0).toLowerCase() + e.slice(1);
"Html5" !== n && this.tag && (sa.getTech("Html5").disposeMediaElement(this.tag), 
this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1;
var s = "string" == typeof this.autoplay() ? !1 :this.autoplay(), o = {
source:t,
autoplay:s,
nativeControlsForTouch:this.options_.nativeControlsForTouch,
playerId:this.id(),
techId:this.id() + "_" + r + "_api",
playsinline:this.options_.playsinline,
preload:this.options_.preload,
loop:this.options_.loop,
disablePictureInPicture:this.options_.disablePictureInPicture,
muted:this.options_.muted,
poster:this.poster(),
language:this.language(),
playerElIngest:this.playerElIngest_ || !1,
"vtt.js":this.options_["vtt.js"],
canOverridePoster:!!this.options_.techCanOverridePoster,
enableSourceset:this.options_.enableSourceset,
Promise:this.options_.Promise
};
Vr.names.forEach(function(e) {
var t = Vr[e];
o[t.getterName] = i[t.privateName];
}), a(o, this.options_[n]), a(o, this.options_[r]), a(o, this.options_[e.toLowerCase()]), 
this.tag && (o.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime);
var u = sa.getTech(e);
if (!u) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
this.tech_ = new u(o), this.tech_.ready(Sn(this, this.handleTechReady_), !0), Zn.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), 
io.forEach(function(e) {
i.on(i.tech_, e, i["handleTech" + Fn(e) + "_"]);
}), Object.keys(no).forEach(function(e) {
i.on(i.tech_, e, function(t) {
return 0 === i.tech_.playbackRate() && i.tech_.seeking() ? void i.queuedCallbacks_.push({
callback:i["handleTech" + no[e] + "_"].bind(i),
event:t
}) :void i["handleTech" + no[e] + "_"](t);
});
}), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), 
this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), 
this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), 
this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), 
this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), 
this.on(this.tech_, "fullscreenerror", this.handleTechFullscreenError_), this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_), 
this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_), 
this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), 
this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), 
this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), 
this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), 
this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || y(this.tech_.el(), this.el()), 
this.tag && (this.tag.player = null, this.tag = null);
}, i.unloadTech_ = function() {
var e = this;
Vr.names.forEach(function(t) {
var i = Vr[t];
e[i.privateName] = e[i.getterName]();
}), this.textTracksJson_ = Zn.textTracksToJson(this.tech_), this.isReady_ = !1, 
this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", 
this.trigger("posterchange")), this.isPosterFromTech_ = !1;
}, i.tech = function(e) {
return void 0 === e && Oi.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), 
this.tech_;
}, i.addTechControlsListeners_ = function() {
this.removeTechControlsListeners_(), this.on(this.tech_, "mouseup", this.handleTechClick_), 
this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), 
this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), 
this.on(this.tech_, "tap", this.handleTechTap_);
}, i.removeTechControlsListeners_ = function() {
this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), 
this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), 
this.off(this.tech_, "mouseup", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_);
}, i.handleTechReady_ = function() {
this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), 
this.handleTechPosterChange_(), this.handleTechDurationChange_();
}, i.handleTechLoadStart_ = function() {
this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), 
this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) :(this.trigger("loadstart"), 
this.trigger("firstplay")), this.manualAutoplay_(this.autoplay());
}, i.manualAutoplay_ = function(e) {
var t = this;
if (this.tech_ && "string" == typeof e) {
var i, n = function() {
var e = t.muted();
t.muted(!0);
var i = function() {
t.muted(e);
};
t.playTerminatedQueue_.push(i);
var n = t.play();
if (ue(n)) return n["catch"](i);
};
if ("any" === e && this.muted() !== !0 ? (i = this.play(), ue(i) && (i = i["catch"](n))) :i = "muted" === e && this.muted() !== !0 ? n() :this.play(), 
ue(i)) return i.then(function() {
t.trigger({
type:"autoplay-success",
autoplay:e
});
})["catch"](function(i) {
t.trigger({
type:"autoplay-failure",
autoplay:e
});
});
}
}, i.updateSourceCaches_ = function(e) {
void 0 === e && (e = "");
var t = e, i = "";
"string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, 
this.cache_.sources = this.cache_.sources || [], t && !i && (i = ma(this, t)), this.cache_.source = J({}, e, {
src:t,
type:i
});
for (var n = this.cache_.sources.filter(function(e) {
return e.src && e.src === t;
}), r = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
var u = w(a[o]);
r.push(u), u.src && u.src === t && s.push(u.src);
}
s.length && !n.length ? this.cache_.sources = r :n.length || (this.cache_.sources = [ this.cache_.source ]), 
this.cache_.src = t;
}, i.handleTechSourceset_ = function(e) {
var t = this;
if (!this.changingSrc_) {
var i = function(e) {
return t.updateSourceCaches_(e);
}, n = this.currentSource().src, r = e.src;
n && !/^blob:/.test(n) && /^blob:/.test(r) && (!this.lastSource_ || this.lastSource_.tech !== r && this.lastSource_.player !== n) && (i = function() {}), 
i(r), e.src || this.tech_.any([ "sourceset", "loadstart" ], function(e) {
if ("sourceset" !== e.type) {
var i = t.techGet("currentSrc");
t.lastSource_.tech = i, t.updateSourceCaches_(i);
}
});
}
this.lastSource_ = {
player:this.currentSource().src,
tech:e.src
}, this.trigger({
src:e.src,
type:"sourceset"
});
}, i.hasStarted = function(e) {
return void 0 === e ? this.hasStarted_ :void (e !== this.hasStarted_ && (this.hasStarted_ = e, 
this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) :this.removeClass("vjs-has-started")));
}, i.handleTechPlay_ = function() {
this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), 
this.hasStarted(!0), this.trigger("play");
}, i.handleTechRateChange_ = function() {
this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) {
return e.callback(e.event);
}), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), 
this.trigger("ratechange");
}, i.handleTechWaiting_ = function() {
var e = this;
this.addClass("vjs-waiting"), this.trigger("waiting");
var t = this.currentTime(), i = function n() {
t !== e.currentTime() && (e.removeClass("vjs-waiting"), e.off("timeupdate", n));
};
this.on("timeupdate", i);
}, i.handleTechCanPlay_ = function() {
this.removeClass("vjs-waiting"), this.trigger("canplay");
}, i.handleTechCanPlayThrough_ = function() {
this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
}, i.handleTechPlaying_ = function() {
this.removeClass("vjs-waiting"), this.trigger("playing");
}, i.handleTechSeeking_ = function() {
this.addClass("vjs-seeking"), this.trigger("seeking");
}, i.handleTechSeeked_ = function() {
this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked");
}, i.handleTechFirstPlay_ = function() {
this.options_.starttime && (Oi.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), 
this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay");
}, i.handleTechPause_ = function() {
this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
}, i.handleTechEnded_ = function() {
this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) :this.paused() || this.pause(), 
this.trigger("ended");
}, i.handleTechDurationChange_ = function() {
this.duration(this.techGet_("duration"));
}, i.handleTechClick_ = function(e) {
B(e) && this.controls_ && (this.paused() ? le(this.play()) :this.pause());
}, i.handleTechDoubleClick_ = function(e) {
if (this.controls_) {
var t = Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(t) {
return t.contains(e.target);
});
t || (void 0 === this.options_ || void 0 === this.options_.userActions || void 0 === this.options_.userActions.doubleClick || this.options_.userActions.doubleClick !== !1) && (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) :this.isFullscreen() ? this.exitFullscreen() :this.requestFullscreen());
}
}, i.handleTechTap_ = function() {
this.userActive(!this.userActive());
}, i.handleTechTouchStart_ = function() {
this.userWasActive = this.userActive();
}, i.handleTechTouchMove_ = function() {
this.userWasActive && this.reportUserActivity();
}, i.handleTechTouchEnd_ = function(e) {
e.cancelable && e.preventDefault();
}, i.handleStageClick_ = function() {
this.reportUserActivity();
}, i.toggleFullscreenClass_ = function() {
this.isFullscreen() ? this.addClass("vjs-fullscreen") :this.removeClass("vjs-fullscreen");
}, i.documentFullscreenChange_ = function(e) {
var t = e.target.player;
if (!t || t === this) {
var i = this.el(), n = wi[this.fsApi_.fullscreenElement] === i;
!n && i.matches ? n = i.matches(":" + this.fsApi_.fullscreen) :!n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)), 
this.isFullscreen(n);
}
}, i.handleTechFullscreenChange_ = function(e, t) {
t && (t.nativeIOSFullscreen && this.toggleClass("vjs-ios-native-fs"), this.isFullscreen(t.isFullscreen));
}, i.handleTechFullscreenError_ = function(e, t) {
this.trigger("fullscreenerror", t);
}, i.togglePictureInPictureClass_ = function() {
this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") :this.removeClass("vjs-picture-in-picture");
}, i.handleTechEnterPictureInPicture_ = function(e) {
this.isInPictureInPicture(!0);
}, i.handleTechLeavePictureInPicture_ = function(e) {
this.isInPictureInPicture(!1);
}, i.handleTechError_ = function() {
var e = this.tech_.error();
this.error(e);
}, i.handleTechTextData_ = function() {
var e = null;
arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e);
}, i.getCache = function() {
return this.cache_;
}, i.resetCache_ = function() {
this.cache_ = {
currentTime:0,
initTime:0,
inactivityTimeout:this.options_.inactivityTimeout,
duration:NaN,
lastVolume:1,
lastPlaybackRate:this.defaultPlaybackRate(),
media:null,
src:"",
source:{},
sources:[],
volume:1
};
}, i.techCall_ = function(e, t) {
this.ready(function() {
if (e in da) return qe(this.middleware_, this.tech_, e, t);
if (e in ha) return We(this.middleware_, this.tech_, e, t);
try {
this.tech_ && this.tech_[e](t);
} catch (i) {
throw Oi(i), i;
}
}, !0);
}, i.techGet_ = function(e) {
if (this.tech_ && this.tech_.isReady_) {
if (e in ca) return He(this.middleware_, this.tech_, e);
if (e in ha) return We(this.middleware_, this.tech_, e);
try {
return this.tech_[e]();
} catch (t) {
if (void 0 === this.tech_[e]) throw Oi("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), 
t;
if ("TypeError" === t.name) throw Oi("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), 
this.tech_.isReady_ = !1, t;
throw Oi(t), t;
}
}
}, i.play = function() {
var e = this, t = this.options_.Promise || bi.Promise;
return t ? new t(function(t) {
e.play_(t);
}) :this.play_();
}, i.play_ = function(e) {
var t = this;
void 0 === e && (e = le), this.playCallbacks_.push(e);
var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
if (this.waitToPlay_ && (this.off([ "ready", "loadstart" ], this.waitToPlay_), this.waitToPlay_ = null), 
!this.isReady_ || !i) return this.waitToPlay_ = function(e) {
t.play_();
}, this.one([ "ready", "loadstart" ], this.waitToPlay_), void (i || !rn && !nn || this.load());
var n = this.techGet_("play");
null === n ? this.runPlayTerminatedQueue_() :this.runPlayCallbacks_(n);
}, i.runPlayTerminatedQueue_ = function() {
var e = this.playTerminatedQueue_.slice(0);
this.playTerminatedQueue_ = [], e.forEach(function(e) {
e();
});
}, i.runPlayCallbacks_ = function(e) {
var t = this.playCallbacks_.slice(0);
this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.forEach(function(t) {
t(e);
});
}, i.pause = function() {
this.techCall_("pause");
}, i.paused = function() {
return this.techGet_("paused") === !1 ? !1 :!0;
}, i.played = function() {
return this.techGet_("played") || re(0, 0);
}, i.scrubbing = function(e) {
return "undefined" == typeof e ? this.scrubbing_ :(this.scrubbing_ = !!e, this.techCall_("setScrubbing", this.scrubbing_), 
void (e ? this.addClass("vjs-scrubbing") :this.removeClass("vjs-scrubbing")));
}, i.currentTime = function(e) {
return "undefined" != typeof e ? (0 > e && (e = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e), 
void (this.cache_.initTime = 0)) :(this.cache_.initTime = e, this.off("canplay", this.applyInitTime_), 
void this.one("canplay", this.applyInitTime_))) :(this.cache_.currentTime = this.techGet_("currentTime") || 0, 
this.cache_.currentTime);
}, i.applyInitTime_ = function() {
this.currentTime(this.cache_.initTime);
}, i.duration = function(e) {
return void 0 === e ? void 0 !== this.cache_.duration ? this.cache_.duration :NaN :(e = parseFloat(e), 
0 > e && (e = 1 / 0), void (e !== this.cache_.duration && (this.cache_.duration = e, 
e === 1 / 0 ? this.addClass("vjs-live") :this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"))));
}, i.remainingTime = function() {
return this.duration() - this.currentTime();
}, i.remainingTimeDisplay = function() {
return Math.floor(this.duration()) - Math.floor(this.currentTime());
}, i.buffered = function n() {
var n = this.techGet_("buffered");
return n && n.length || (n = re(0, 0)), n;
}, i.bufferedPercent = function() {
return ae(this.buffered(), this.duration());
}, i.bufferedEnd = function() {
var e = this.buffered(), t = this.duration(), i = e.end(e.length - 1);
return i > t && (i = t), i;
}, i.volume = function(e) {
var t;
return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, 
this.techCall_("setVolume", t), void (t > 0 && this.lastVolume_(t))) :(t = parseFloat(this.techGet_("volume")), 
isNaN(t) ? 1 :t);
}, i.muted = function(e) {
return void 0 !== e ? void this.techCall_("setMuted", e) :this.techGet_("muted") || !1;
}, i.defaultMuted = function(e) {
return void 0 !== e ? this.techCall_("setDefaultMuted", e) :this.techGet_("defaultMuted") || !1;
}, i.lastVolume_ = function(e) {
return void 0 !== e && 0 !== e ? void (this.cache_.lastVolume = e) :this.cache_.lastVolume;
}, i.supportsFullScreen = function() {
return this.techGet_("supportsFullScreen") || !1;
}, i.isFullscreen = function(e) {
if (void 0 !== e) {
var t = this.isFullscreen_;
return this.isFullscreen_ = Boolean(e), this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), 
void this.toggleFullscreenClass_();
}
return this.isFullscreen_;
}, i.requestFullscreen = function(e) {
var t = this.options_.Promise || bi.Promise;
if (t) {
var i = this;
return new t(function(t, n) {
function r() {
i.off("fullscreenerror", s), i.off("fullscreenchange", a);
}
function a() {
r(), t();
}
function s(e, t) {
r(), n(t);
}
i.one("fullscreenchange", a), i.one("fullscreenerror", s);
var o = i.requestFullscreenHelper_(e);
return o ? (o.then(r, r), o) :void 0;
});
}
return this.requestFullscreenHelper_();
}, i.requestFullscreenHelper_ = function(e) {
var t, i = this;
if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, 
void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) {
var n = this.el_[this.fsApi_.requestFullscreen](t);
return n && n.then(function() {
return i.isFullscreen(!0);
}, function() {
return i.isFullscreen(!1);
}), n;
}
this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") :this.enterFullWindow();
}, i.exitFullscreen = function() {
var e = this.options_.Promise || bi.Promise;
if (e) {
var t = this;
return new e(function(e, i) {
function n() {
t.off("fullscreenerror", a), t.off("fullscreenchange", r);
}
function r() {
n(), e();
}
function a(e, t) {
n(), i(t);
}
t.one("fullscreenchange", r), t.one("fullscreenerror", a);
var s = t.exitFullscreenHelper_();
return s ? (s.then(n, n), s) :void 0;
});
}
return this.exitFullscreenHelper_();
}, i.exitFullscreenHelper_ = function() {
var e = this;
if (this.fsApi_.requestFullscreen) {
var t = wi[this.fsApi_.exitFullscreen]();
return t && t.then(function() {
return e.isFullscreen(!1);
}), t;
}
this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") :this.exitFullWindow();
}, i.enterFullWindow = function() {
this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = wi.documentElement.style.overflow, 
z(wi, "keydown", this.boundFullWindowOnEscKey_), wi.documentElement.style.overflow = "hidden", 
b(wi.body, "vjs-full-window"), this.trigger("enterFullWindow");
}, i.fullWindowOnEscKey = function(e) {
er.isEventKey(e, "Esc") && (this.isFullscreen() === !0 ? this.exitFullscreen() :this.exitFullWindow());
}, i.exitFullWindow = function() {
this.isFullscreen(!1), this.isFullWindow = !1, G(wi, "keydown", this.boundFullWindowOnEscKey_), 
wi.documentElement.style.overflow = this.docOrigOverflow, T(wi.body, "vjs-full-window"), 
this.trigger("exitFullWindow");
}, i.disablePictureInPicture = function(e) {
return void 0 === e ? this.techGet_("disablePictureInPicture") :(this.techCall_("setDisablePictureInPicture", e), 
this.options_.disablePictureInPicture = e, void this.trigger("disablepictureinpicturechanged"));
}, i.isInPictureInPicture = function(e) {
return void 0 !== e ? (this.isInPictureInPicture_ = !!e, void this.togglePictureInPictureClass_()) :!!this.isInPictureInPicture_;
}, i.requestPictureInPicture = function() {
return "pictureInPictureEnabled" in wi && this.disablePictureInPicture() === !1 ? this.techGet_("requestPictureInPicture") :void 0;
}, i.exitPictureInPicture = function() {
return "pictureInPictureEnabled" in wi ? wi.exitPictureInPicture() :void 0;
}, i.handleKeyDown = function(e) {
var t = this.options_.userActions;
if (t && t.hotkeys) {
var i = function(e) {
var t = e.tagName.toLowerCase();
if (e.isContentEditable) return !0;
var i = [ "button", "checkbox", "hidden", "radio", "reset", "submit" ];
if ("input" === t) return -1 === i.indexOf(e.type);
var n = [ "textarea" ];
return -1 !== n.indexOf(t);
};
i(this.el_.ownerDocument.activeElement) || ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) :this.handleHotkeys(e));
}
}, i.handleHotkeys = function(e) {
var t = this.options_.userActions ? this.options_.userActions.hotkeys :{}, i = t.fullscreenKey, n = void 0 === i ? function(e) {
return er.isEventKey(e, "f");
} :i, r = t.muteKey, a = void 0 === r ? function(e) {
return er.isEventKey(e, "m");
} :r, s = t.playPauseKey, o = void 0 === s ? function(e) {
return er.isEventKey(e, "k") || er.isEventKey(e, "Space");
} :s;
if (n.call(this, e)) {
e.preventDefault(), e.stopPropagation();
var u = zn.getComponent("FullscreenToggle");
wi[this.fsApi_.fullscreenEnabled] !== !1 && u.prototype.handleClick.call(this, e);
} else if (a.call(this, e)) {
e.preventDefault(), e.stopPropagation();
var l = zn.getComponent("MuteToggle");
l.prototype.handleClick.call(this, e);
} else if (o.call(this, e)) {
e.preventDefault(), e.stopPropagation();
var c = zn.getComponent("PlayToggle");
c.prototype.handleClick.call(this, e);
}
}, i.canPlayType = function(e) {
for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
var r = n[i], a = sa.getTech(r);
if (a || (a = zn.getComponent(r)), a) {
if (a.isSupported() && (t = a.canPlayType(e))) return t;
} else Oi.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.');
}
return "";
}, i.selectSource = function(e) {
var t, i = this, n = this.options_.techOrder.map(function(e) {
return [ e, sa.getTech(e) ];
}).filter(function(e) {
var t = e[0], i = e[1];
return i ? i.isSupported() :(Oi.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), 
!1);
}), r = function(e, t, i) {
var n;
return e.some(function(e) {
return t.some(function(t) {
return n = i(e, t), n ? !0 :void 0;
});
}), n;
}, a = function(e) {
return function(t, i) {
return e(i, t);
};
}, s = function(e, t) {
var n = e[0], r = e[1];
return r.canPlaySource(t, i.options_[n.toLowerCase()]) ? {
source:t,
tech:n
} :void 0;
};
return t = this.options_.sourceOrder ? r(e, n, a(s)) :r(n, e, s), t || !1;
}, i.src = function(e) {
var t = this;
if ("undefined" == typeof e) return this.cache_.src || "";
var i = ga(e);
return i.length ? (this.changingSrc_ = !0, this.cache_.sources = i, this.updateSourceCaches_(i[0]), 
void je(this, i[0], function(e, n) {
t.middleware_ = n, t.cache_.sources = i, t.updateSourceCaches_(e);
var r = t.src_(e);
return r ? i.length > 1 ? t.src(i.slice(1)) :(t.changingSrc_ = !1, t.setTimeout(function() {
this.error({
code:4,
message:this.localize(this.options_.notSupportedMessage)
});
}, 0), void t.triggerReady()) :void Ve(n, t.tech_);
})) :void this.setTimeout(function() {
this.error({
code:4,
message:this.localize(this.options_.notSupportedMessage)
});
}, 0);
}, i.src_ = function(e) {
var t = this, i = this.selectSource([ e ]);
return i ? jn(i.tech, this.techName_) ? (this.ready(function() {
this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) :this.techCall_("src", e.src), 
this.changingSrc_ = !1;
}, !0), !1) :(this.changingSrc_ = !0, this.loadTech_(i.tech, i.source), this.tech_.ready(function() {
t.changingSrc_ = !1;
}), !1) :!0;
}, i.load = function() {
this.techCall_("load");
}, i.reset = function() {
var e = this, t = this.options_.Promise || bi.Promise;
if (this.paused() || !t) this.doReset_(); else {
var i = this.play();
le(i.then(function() {
return e.doReset_();
}));
}
}, i.doReset_ = function() {
this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), 
this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), 
Pn(this) && this.trigger("playerreset");
}, i.resetControlBarUI_ = function() {
this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
}, i.resetProgressBar_ = function() {
this.currentTime(0);
var e = this.controlBar, t = e.durationDisplay, i = e.remainingTimeDisplay;
t && t.updateContent(), i && i.updateContent();
}, i.resetPlaybackRate_ = function() {
this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
}, i.resetVolumeBar_ = function() {
this.volume(1), this.trigger("volumechange");
}, i.currentSources = function() {
var e = this.currentSource(), t = [];
return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t;
}, i.currentSource = function() {
return this.cache_.source || {};
}, i.currentSrc = function() {
return this.currentSource() && this.currentSource().src || "";
}, i.currentType = function() {
return this.currentSource() && this.currentSource().type || "";
}, i.preload = function(e) {
return void 0 !== e ? (this.techCall_("setPreload", e), void (this.options_.preload = e)) :this.techGet_("preload");
}, i.autoplay = function(e) {
if (void 0 === e) return this.options_.autoplay || !1;
var t;
"string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, 
this.manualAutoplay_(e), t = !1) :e ? this.options_.autoplay = !0 :this.options_.autoplay = !1, 
t = "undefined" == typeof t ? this.options_.autoplay :t, this.tech_ && this.techCall_("setAutoplay", t);
}, i.playsinline = function(e) {
return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, 
this) :this.techGet_("playsinline");
}, i.loop = function(e) {
return void 0 !== e ? (this.techCall_("setLoop", e), void (this.options_.loop = e)) :this.techGet_("loop");
}, i.poster = function(e) {
return void 0 === e ? this.poster_ :(e || (e = ""), void (e !== this.poster_ && (this.poster_ = e, 
this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))));
}, i.handleTechPosterChange_ = function() {
if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
var e = this.tech_.poster() || "";
e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"));
}
}, i.controls = function(e) {
return void 0 === e ? !!this.controls_ :(e = !!e, void (this.controls_ !== e && (this.controls_ = e, 
this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), 
this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) :(this.removeClass("vjs-controls-enabled"), 
this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))));
}, i.usingNativeControls = function(e) {
return void 0 === e ? !!this.usingNativeControls_ :(e = !!e, void (this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, 
this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) :(this.removeClass("vjs-using-native-controls"), 
this.trigger("usingcustomcontrols")))));
}, i.error = function(e) {
if (void 0 === e) return this.error_ || null;
if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
var t = function() {
this.error(e);
};
return this.options_.suppressNotSupportedError = !1, this.any([ "click", "touchstart" ], t), 
void this.one("loadstart", function() {
this.off([ "click", "touchstart" ], t);
});
}
return null === e ? (this.error_ = e, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) :(this.error_ = new se(e), 
this.addClass("vjs-error"), Oi.error("(CODE:" + this.error_.code + " " + se.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), 
void this.trigger("error"));
}, i.reportUserActivity = function(e) {
this.userActivity_ = !0;
}, i.userActive = function(e) {
if (void 0 === e) return this.userActive_;
if (e = !!e, e !== this.userActive_) {
if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), 
this.addClass("vjs-user-active"), void this.trigger("useractive");
this.tech_ && this.tech_.one("mousemove", function(e) {
e.stopPropagation(), e.preventDefault();
}), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), 
this.trigger("userinactive");
}
}, i.listenForUserActivity_ = function() {
var e, t, i, n = Sn(this, this.reportUserActivity), r = function(e) {
(e.screenX !== t || e.screenY !== i) && (t = e.screenX, i = e.screenY, n());
}, a = function() {
n(), this.clearInterval(e), e = this.setInterval(n, 250);
}, s = function(t) {
n(), this.clearInterval(e);
};
this.on("mousedown", a), this.on("mousemove", r), this.on("mouseup", s), this.on("mouseleave", s);
var o = this.getChild("controlBar");
!o || nn || qi || (o.on("mouseenter", function(e) {
this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout, 
this.player().options_.inactivityTimeout = 0;
}), o.on("mouseleave", function(e) {
this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
})), this.on("keydown", n), this.on("keyup", n);
var u;
this.setInterval(function() {
if (this.userActivity_) {
this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(u);
var e = this.options_.inactivityTimeout;
0 >= e || (u = this.setTimeout(function() {
this.userActivity_ || this.userActive(!1);
}, e));
}
}, 250);
}, i.playbackRate = function(e) {
return void 0 !== e ? void this.techCall_("setPlaybackRate", e) :this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") :1;
}, i.defaultPlaybackRate = function(e) {
return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) :this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") :1;
}, i.isAudio = function(e) {
return void 0 !== e ? void (this.isAudio_ = !!e) :!!this.isAudio_;
}, i.addTextTrack = function(e, t, i) {
return this.tech_ ? this.tech_.addTextTrack(e, t, i) :void 0;
}, i.addRemoteTextTrack = function(e, t) {
return this.tech_ ? this.tech_.addRemoteTextTrack(e, t) :void 0;
}, i.removeRemoteTextTrack = function(e) {
void 0 === e && (e = {});
var t = e, i = t.track;
return i || (i = e), this.tech_ ? this.tech_.removeRemoteTextTrack(i) :void 0;
}, i.getVideoPlaybackQuality = function() {
return this.techGet_("getVideoPlaybackQuality");
}, i.videoWidth = function() {
return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
}, i.videoHeight = function() {
return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
}, i.language = function(e) {
return void 0 === e ? this.language_ :void (this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(), 
Pn(this) && this.trigger("languagechange")));
}, i.languages = function() {
return J(t.prototype.options_.languages, this.languages_);
}, i.toJSON = function() {
var e = J(this.options_), t = e.tracks;
e.tracks = [];
for (var i = 0; i < t.length; i++) {
var n = t[i];
n = J(n), n.player = void 0, e.tracks[i] = n;
}
return e;
}, i.createModal = function(e, t) {
var i = this;
t = t || {}, t.content = e || "";
var n = new ir(this, t);
return this.addChild(n), n.on("dispose", function() {
i.removeChild(n);
}), n.open(), n;
}, i.updateCurrentBreakpoint_ = function() {
if (this.responsive()) for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < ro.length; i++) {
var n = ro[i], r = this.breakpoints_[n];
if (r >= t) {
if (e === n) return;
e && this.removeClass(ao[e]), this.addClass(ao[n]), this.breakpoint_ = n;
break;
}
}
}, i.removeCurrentBreakpoint_ = function() {
var e = this.currentBreakpointClass();
this.breakpoint_ = "", e && this.removeClass(e);
}, i.breakpoints = function(e) {
return void 0 === e ? a(this.breakpoints_) :(this.breakpoint_ = "", this.breakpoints_ = a({}, so, e), 
this.updateCurrentBreakpoint_(), a(this.breakpoints_));
}, i.responsive = function(e) {
if (void 0 === e) return this.responsive_;
e = Boolean(e);
var t = this.responsive_;
if (e !== t) return this.responsive_ = e, e ? (this.on("playerresize", this.updateCurrentBreakpoint_), 
this.updateCurrentBreakpoint_()) :(this.off("playerresize", this.updateCurrentBreakpoint_), 
this.removeCurrentBreakpoint_()), e;
}, i.currentBreakpoint = function() {
return this.breakpoint_;
}, i.currentBreakpointClass = function() {
return ao[this.breakpoint_] || "";
}, i.loadMedia = function(e, t) {
var i = this;
if (e && "object" == typeof e) {
this.reset(), this.cache_.media = J(e);
var n = this.cache_.media, r = n.artwork, a = n.poster, s = n.src, o = n.textTracks;
!r && a && (this.cache_.media.artwork = [ {
src:a,
type:fa(a)
} ]), s && this.src(s), a && this.poster(a), Array.isArray(o) && o.forEach(function(e) {
return i.addRemoteTextTrack(e, !1);
}), this.ready(t);
}
}, i.getMedia = function() {
if (!this.cache_.media) {
var e = this.poster(), t = this.currentSources(), i = Array.prototype.map.call(this.remoteTextTracks(), function(e) {
return {
kind:e.kind,
label:e.label,
language:e.language,
src:e.src
};
}), n = {
src:t,
textTracks:i
};
return e && (n.poster = e, n.artwork = [ {
src:n.poster,
type:fa(n.poster)
} ]), n;
}
return J(this.cache_.media);
}, t.getTagSettings = function(e) {
var t = {
sources:[],
tracks:[]
}, i = w(e), n = i["data-setup"];
if (_(e, "vjs-fill") && (i.fill = !0), _(e, "vjs-fluid") && (i.fluid = !0), null !== n) {
var r = Yn(n || "{}"), s = r[0], o = r[1];
s && Oi.error(s), a(i, o);
}
if (a(t, i), e.hasChildNodes()) for (var u = e.childNodes, l = 0, c = u.length; c > l; l++) {
var d = u[l], h = d.nodeName.toLowerCase();
"source" === h ? t.sources.push(w(d)) :"track" === h && t.tracks.push(w(d));
}
return t;
}, i.flexNotSupported_ = function() {
var e = wi.createElement("i");
return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style);
}, i.debug = function(e) {
return void 0 === e ? this.debugEnabled_ :void (e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, 
this.log.level("debug"), this.debugEnabled_ = !0) :(this.trigger("debugoff"), this.log.level(this.previousLogLevel_), 
this.previousLogLevel_ = void 0, this.debugEnabled_ = !1));
}, t;
}(zn);
Vr.names.forEach(function(e) {
var t = Vr[e];
oo.prototype[t.getterName] = function() {
return this.tech_ ? this.tech_[t.getterName]() :(this[t.privateName] = this[t.privateName] || new t.ListClass(), 
this[t.privateName]);
};
}), oo.prototype.crossorigin = oo.prototype.crossOrigin, oo.players = {};
var uo = bi.navigator;
oo.prototype.options_ = {
techOrder:sa.defaultTechOrder_,
html5:{},
inactivityTimeout:2e3,
playbackRates:[],
liveui:!1,
children:[ "mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager" ],
language:uo && (uo.languages && uo.languages[0] || uo.userLanguage || uo.language) || "en",
languages:{},
notSupportedMessage:"No compatible source was found for this media.",
fullscreen:{
options:{
navigationUI:"hide"
}
},
breakpoints:{},
responsive:!1
}, [ "ended", "seeking", "seekable", "networkState", "readyState" ].forEach(function(e) {
oo.prototype[e] = function() {
return this.techGet_(e);
};
}), io.forEach(function(e) {
oo.prototype["handleTech" + Fn(e) + "_"] = function() {
return this.trigger(e);
};
}), zn.registerComponent("Player", oo);
var lo = t(function(e) {
function t(i, n) {
return e.exports = t = Object.setPrototypeOf || function(e, t) {
return e.__proto__ = t, e;
}, t(i, n);
}
e.exports = t;
}), co = at, ho = t(function(e) {
function t(i, n, r) {
return co() ? e.exports = t = Reflect.construct :e.exports = t = function(e, t, i) {
var n = [ null ];
n.push.apply(n, t);
var r = Function.bind.apply(e, n), a = new r();
return i && lo(a, i.prototype), a;
}, t.apply(null, arguments);
}
e.exports = t;
}), po = "plugin", fo = "activePlugins_", mo = {}, go = function(e) {
return mo.hasOwnProperty(e);
}, vo = function(e) {
return go(e) ? mo[e] :void 0;
}, yo = function(e, t) {
e[fo] = e[fo] || {}, e[fo][t] = !0;
}, _o = function(e, t, i) {
var n = (i ? "before" :"") + "pluginsetup";
e.trigger(n, t), e.trigger(n + ":" + t.name, t);
}, bo = function(e, t) {
var i = function() {
_o(this, {
name:e,
plugin:t,
instance:null
}, !0);
var i = t.apply(this, arguments);
return yo(this, e), _o(this, {
name:e,
plugin:t,
instance:i
}), i;
};
return Object.keys(t).forEach(function(e) {
i[e] = t[e];
}), i;
}, To = function(e, t) {
return t.prototype.name = e, function() {
_o(this, {
name:e,
plugin:t,
instance:null
}, !0);
for (var i = arguments.length, n = new Array(i), r = 0; i > r; r++) n[r] = arguments[r];
var a = ho(t, [ this ].concat(n));
return this[e] = function() {
return a;
}, _o(this, a.getEventHash()), a;
};
}, So = function() {
function e(t) {
if (this.constructor === e) throw new Error("Plugin must be sub-classed; not directly instantiated.");
this.player = t, this.log || (this.log = this.player.log.createLogger(this.name)), 
Q(this), delete this.trigger, $(this, this.constructor.defaultState), yo(t, this.name), 
this.dispose = Sn(this, this.dispose), t.on("dispose", this.dispose);
}
var t = e.prototype;
return t.version = function() {
return this.constructor.VERSION;
}, t.getEventHash = function(e) {
return void 0 === e && (e = {}), e.name = this.name, e.plugin = this.constructor, 
e.instance = this, e;
}, t.trigger = function(e, t) {
return void 0 === t && (t = {}), X(this.eventBusEl_, e, this.getEventHash(t));
}, t.handleStateChanged = function(e) {}, t.dispose = function() {
var e = this.name, t = this.player;
this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[fo][e] = !1, 
this.player = this.state = null, t[e] = To(e, mo[e]);
}, e.isBasic = function(t) {
var i = "string" == typeof t ? vo(t) :t;
return "function" == typeof i && !e.prototype.isPrototypeOf(i.prototype);
}, e.registerPlugin = function(t, i) {
if ("string" != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + ".");
if (go(t)) Oi.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!'); else if (oo.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
if ("function" != typeof i) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof i + ".");
return mo[t] = i, t !== po && (e.isBasic(i) ? oo.prototype[t] = bo(t, i) :oo.prototype[t] = To(t, i)), 
i;
}, e.deregisterPlugin = function(e) {
if (e === po) throw new Error("Cannot de-register base plugin.");
go(e) && (delete mo[e], delete oo.prototype[e]);
}, e.getPlugins = function(e) {
void 0 === e && (e = Object.keys(mo));
var t;
return e.forEach(function(e) {
var i = vo(e);
i && (t = t || {}, t[e] = i);
}), t;
}, e.getPluginVersion = function(e) {
var t = vo(e);
return t && t.VERSION || "";
}, e;
}();
So.getPlugin = vo, So.BASE_PLUGIN_NAME = po, So.registerPlugin(po, So), oo.prototype.usingPlugin = function(e) {
return !!this[fo] && this[fo][e] === !0;
}, oo.prototype.hasPlugin = function(e) {
return !!go(e);
};
var ko = st, wo = function(e, t) {
void 0 === t && (t = {});
var i = function() {
e.apply(this, arguments);
}, n = {};
"object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), 
n = t) :"function" == typeof t && (i = t), ko(i, e), e && (i.super_ = e);
for (var r in n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
return i;
}, Eo = function(e) {
return 0 === e.indexOf("#") ? e.slice(1) :e;
};
if (ot.hooks_ = {}, ot.hooks = function(e, t) {
return ot.hooks_[e] = ot.hooks_[e] || [], t && (ot.hooks_[e] = ot.hooks_[e].concat(t)), 
ot.hooks_[e];
}, ot.hook = function(e, t) {
ot.hooks(e, t);
}, ot.hookOnce = function(e, t) {
ot.hooks(e, [].concat(t).map(function(t) {
var i = function n() {
return ot.removeHook(e, n), t.apply(void 0, arguments);
};
return i;
}));
}, ot.removeHook = function(e, t) {
var i = ot.hooks(e).indexOf(t);
return -1 >= i ? !1 :(ot.hooks_[e] = ot.hooks_[e].slice(), ot.hooks_[e].splice(i, 1), 
!0);
}, bi.VIDEOJS_NO_DYNAMIC_STYLE !== !0 && h()) {
var Co = sn(".vjs-styles-defaults");
if (!Co) {
Co = hn("vjs-styles-defaults");
var Io = sn("head");
Io && Io.insertBefore(Co, Io.firstChild), pn(Co, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ");
}
}
F(1, ot), ot.VERSION = vi, ot.options = oo.prototype.options_, ot.getPlayers = function() {
return oo.players;
}, ot.getPlayer = function(e) {
var t, i = oo.players;
if ("string" == typeof e) {
var n = Eo(e), r = i[n];
if (r) return r;
t = sn("#" + n);
} else t = e;
if (p(t)) {
var a = t, s = a.player, o = a.playerId;
if (s || i[o]) return s || i[o];
}
}, ot.getAllPlayers = function() {
return Object.keys(oo.players).map(function(e) {
return oo.players[e];
}).filter(Boolean);
}, ot.players = oo.players, ot.getComponent = zn.getComponent, ot.registerComponent = function(e, t) {
sa.isTech(t) && Oi.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), 
zn.registerComponent.call(zn, e, t);
}, ot.getTech = sa.getTech, ot.registerTech = sa.registerTech, ot.use = Fe, Object.defineProperty(ot, "middleware", {
value:{},
writeable:!1,
enumerable:!0
}), Object.defineProperty(ot.middleware, "TERMINATOR", {
value:la,
writeable:!1,
enumerable:!0
}), ot.browser = an, ot.TOUCH_ENABLED = Zi, ot.extend = wo, ot.mergeOptions = J, 
ot.bind = Sn, ot.registerPlugin = So.registerPlugin, ot.deregisterPlugin = So.deregisterPlugin, 
ot.plugin = function(e, t) {
return Oi.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), 
So.registerPlugin(e, t);
}, ot.getPlugins = So.getPlugins, ot.getPlugin = So.getPlugin, ot.getPluginVersion = So.getPluginVersion, 
ot.addLanguage = function(e, t) {
var i;
return e = ("" + e).toLowerCase(), ot.options.languages = J(ot.options.languages, (i = {}, 
i[e] = t, i)), ot.options.languages[e];
}, ot.log = Oi, ot.createLogger = Ri, ot.createTimeRange = ot.createTimeRanges = re, 
ot.formatTime = tt, ot.setFormatTime = Ze, ot.resetFormatTime = et, ot.parseUrl = yr, 
ot.isCrossOrigin = Tr, ot.EventTarget = En, ot.on = z, ot.one = K, ot.off = G, ot.trigger = X, 
ot.xhr = Ir, ot.TextTrack = Lr, ot.AudioTrack = Dr, ot.VideoTrack = Or, [ "isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent" ].forEach(function(e) {
ot[e] = function() {
return Oi.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), 
un[e].apply(null, arguments);
};
}), ot.computedStyle = u, ot.dom = un, ot.url = Sr, ot.defineLazyProperty = Zs;
var Po, Ao = ut, xo = lt, Lo = "undefined" != typeof yi ? yi :"undefined" != typeof window ? window :{};
"undefined" != typeof document ? Po = document :(Po = Lo["__GLOBAL_DOCUMENT_CACHE@4"], 
Po || (Po = Lo["__GLOBAL_DOCUMENT_CACHE@4"] = Ti));
var Do, Oo = Po;
Do = "undefined" != typeof window ? window :"undefined" != typeof yi ? yi :"undefined" != typeof self ? self :{};
var Ro = Do, No = t(function(e, t) {
!function(t) {
var i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/, n = /^([^\/?#]*)(.*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, s = {
buildAbsoluteURL:function(e, t, i) {
if (i = i || {}, e = e.trim(), t = t.trim(), !t) {
if (!i.alwaysNormalize) return e;
var r = s.parseURL(e);
if (!r) throw new Error("Error trying to parse base URL.");
return r.path = s.normalizePath(r.path), s.buildURLFromParts(r);
}
var a = s.parseURL(t);
if (!a) throw new Error("Error trying to parse relative URL.");
if (a.scheme) return i.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) :t;
var o = s.parseURL(e);
if (!o) throw new Error("Error trying to parse base URL.");
if (!o.netLoc && o.path && "/" !== o.path[0]) {
var u = n.exec(o.path);
o.netLoc = u[1], o.path = u[2];
}
o.netLoc && !o.path && (o.path = "/");
var l = {
scheme:o.scheme,
netLoc:a.netLoc,
path:null,
params:a.params,
query:a.query,
fragment:a.fragment
};
if (!a.netLoc && (l.netLoc = o.netLoc, "/" !== a.path[0])) if (a.path) {
var c = o.path, d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
l.path = s.normalizePath(d);
} else l.path = o.path, a.params || (l.params = o.params, a.query || (l.query = o.query));
return null === l.path && (l.path = i.alwaysNormalize ? s.normalizePath(a.path) :a.path), 
s.buildURLFromParts(l);
},
parseURL:function(e) {
var t = i.exec(e);
return t ? {
scheme:t[1] || "",
netLoc:t[2] || "",
path:t[3] || "",
params:t[4] || "",
query:t[5] || "",
fragment:t[6] || ""
} :null;
},
normalizePath:function(e) {
for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(a, "")).length; ) ;
return e.split("").reverse().join("");
},
buildURLFromParts:function(e) {
return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
}
};
e.exports = s;
}();
}), Mo = ct(No), Uo = ct(bi), Bo = function(e, t) {
return /^[a-z]+:/i.test(t) ? t :(/\/\//i.test(e) || (e = Mo.buildAbsoluteURL(Uo.location && Uo.location.href || "", e)), 
Mo.buildAbsoluteURL(e, t));
}, Fo = Bo, jo = function() {
function e() {
this.listeners = {};
}
var t = e.prototype;
return t.on = function(e, t) {
this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
}, t.off = function(e, t) {
if (!this.listeners[e]) return !1;
var i = this.listeners[e].indexOf(t);
return this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(i, 1), 
i > -1;
}, t.trigger = function(e) {
var t = this.listeners[e];
if (t) if (2 === arguments.length) for (var i = t.length, n = 0; i > n; ++n) t[n].call(this, arguments[1]); else for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; a > s; ++s) t[s].apply(this, r);
}, t.dispose = function() {
this.listeners = {};
}, t.pipe = function(e) {
this.on("data", function(t) {
e.push(t);
});
}, e;
}(), Vo = jo, Ho = dt(bi), qo = function(e) {
return Ho.atob ? Ho.atob(e) :Buffer.from(e, "base64").toString("binary");
}, Wo = ht, zo = function(e) {
function t() {
var t;
return t = e.call(this) || this, t.buffer = "", t;
}
Xn(t, e);
var i = t.prototype;
return i.push = function(e) {
var t;
for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), 
this.buffer = this.buffer.substring(t + 1);
}, t;
}(Vo), Go = function() {
var e = "[^=]*", t = '"[^"]*"|[^,]*', i = "(?:" + e + ")=(?:" + t + ")";
return new RegExp("(?:^|,)(" + i + ")");
}, Xo = function(e) {
for (var t, i = e.split(Go()), n = {}, r = i.length; r--; ) "" !== i[r] && (t = /([^=]*)=(.*)/.exec(i[r]).slice(1), 
t[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), 
n[t[0]] = t[1]);
return n;
}, Ko = function(e) {
function t() {
var t;
return t = e.call(this) || this, t.customParsers = [], t.tagMappers = [], t;
}
Xn(t, e);
var i = t.prototype;
return i.push = function(e) {
var t, i, n = this;
if (e = e.trim(), 0 !== e.length) {
if ("#" !== e[0]) return void this.trigger("data", {
type:"uri",
uri:e
});
var r = this.tagMappers.reduce(function(t, i) {
var n = i(e);
return n === e ? t :t.concat([ n ]);
}, [ e ]);
r.forEach(function(e) {
for (var r = 0; r < n.customParsers.length; r++) if (n.customParsers[r].call(n, e)) return;
if (0 !== e.indexOf("#EXT")) return void n.trigger("data", {
type:"comment",
text:e.slice(1)
});
if (e = e.replace("\r", ""), t = /^#EXTM3U/.exec(e)) return void n.trigger("data", {
type:"tag",
tagType:"m3u"
});
if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return i = {
type:"tag",
tagType:"inf"
}, t[1] && (i.duration = parseFloat(t[1])), t[2] && (i.title = t[2]), void n.trigger("data", i);
if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"targetduration"
}, t[1] && (i.duration = parseInt(t[1], 10)), void n.trigger("data", i);
if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"totalduration"
}, t[1] && (i.duration = parseInt(t[1], 10)), void n.trigger("data", i);
if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"version"
}, t[1] && (i.version = parseInt(t[1], 10)), void n.trigger("data", i);
if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"media-sequence"
}, t[1] && (i.number = parseInt(t[1], 10)), void n.trigger("data", i);
if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"discontinuity-sequence"
}, t[1] && (i.number = parseInt(t[1], 10)), void n.trigger("data", i);
if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return i = {
type:"tag",
tagType:"playlist-type"
}, t[1] && (i.playlistType = t[1]), void n.trigger("data", i);
if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return i = {
type:"tag",
tagType:"byterange"
}, t[1] && (i.length = parseInt(t[1], 10)), t[2] && (i.offset = parseInt(t[2], 10)), 
void n.trigger("data", i);
if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return i = {
type:"tag",
tagType:"allow-cache"
}, t[1] && (i.allowed = !/NO/.test(t[1])), void n.trigger("data", i);
if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
if (i = {
type:"tag",
tagType:"map"
}, t[1]) {
var a = Xo(t[1]);
if (a.URI && (i.uri = a.URI), a.BYTERANGE) {
var s = a.BYTERANGE.split("@"), o = s[0], u = s[1];
i.byterange = {}, o && (i.byterange.length = parseInt(o, 10)), u && (i.byterange.offset = parseInt(u, 10));
}
}
return void n.trigger("data", i);
}
if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
if (i = {
type:"tag",
tagType:"stream-inf"
}, t[1]) {
if (i.attributes = Xo(t[1]), i.attributes.RESOLUTION) {
var l = i.attributes.RESOLUTION.split("x"), c = {};
l[0] && (c.width = parseInt(l[0], 10)), l[1] && (c.height = parseInt(l[1], 10)), 
i.attributes.RESOLUTION = c;
}
i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), 
i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10));
}
return void n.trigger("data", i);
}
return (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) ? (i = {
type:"tag",
tagType:"media"
}, t[1] && (i.attributes = Xo(t[1])), void n.trigger("data", i)) :(t = /^#EXT-X-ENDLIST/.exec(e)) ? void n.trigger("data", {
type:"tag",
tagType:"endlist"
}) :(t = /^#EXT-X-DISCONTINUITY/.exec(e)) ? void n.trigger("data", {
type:"tag",
tagType:"discontinuity"
}) :(t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) ? (i = {
type:"tag",
tagType:"program-date-time"
}, t[1] && (i.dateTimeString = t[1], i.dateTimeObject = new Date(t[1])), void n.trigger("data", i)) :(t = /^#EXT-X-KEY:?(.*)$/.exec(e)) ? (i = {
type:"tag",
tagType:"key"
}, t[1] && (i.attributes = Xo(t[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), 
i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), 
i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), 
i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), 
void n.trigger("data", i)) :(t = /^#EXT-X-START:?(.*)$/.exec(e)) ? (i = {
type:"tag",
tagType:"start"
}, t[1] && (i.attributes = Xo(t[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), 
i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)), void n.trigger("data", i)) :(t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) ? (i = {
type:"tag",
tagType:"cue-out-cont"
}, t[1] ? i.data = t[1] :i.data = "", void n.trigger("data", i)) :(t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) ? (i = {
type:"tag",
tagType:"cue-out"
}, t[1] ? i.data = t[1] :i.data = "", void n.trigger("data", i)) :(t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) ? (i = {
type:"tag",
tagType:"cue-in"
}, t[1] ? i.data = t[1] :i.data = "", void n.trigger("data", i)) :void n.trigger("data", {
type:"tag",
data:e.slice(4)
});
});
}
}, i.addParser = function(e) {
var t = this, i = e.expression, n = e.customType, r = e.dataParser, a = e.segment;
"function" != typeof r && (r = function(e) {
return e;
}), this.customParsers.push(function(e) {
var s = i.exec(e);
return s ? (t.trigger("data", {
type:"custom",
data:r(e),
customType:n,
segment:a
}), !0) :void 0;
});
}, i.addTagMapper = function(e) {
var t = e.expression, i = e.map, n = function(e) {
return t.test(e) ? i(e) :e;
};
this.tagMappers.push(n);
}, t;
}(Vo), Yo = function(e) {
function t() {
var t;
t = e.call(this) || this, t.lineStream = new zo(), t.parseStream = new Ko(), t.lineStream.pipe(t.parseStream);
var i, n, r = Gn(t), a = [], s = {}, o = function() {}, u = {
AUDIO:{},
VIDEO:{},
"CLOSED-CAPTIONS":{},
SUBTITLES:{}
}, l = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", c = 0;
t.manifest = {
allowCache:!0,
discontinuityStarts:[],
segments:[]
};
var d = 0;
return t.parseStream.on("data", function(e) {
var t, h;
({
tag:function() {
(({
"allow-cache":function() {
this.manifest.allowCache = e.allowed, "allowed" in e || (this.trigger("info", {
message:"defaulting allowCache to YES"
}), this.manifest.allowCache = !0);
},
byterange:function p() {
var p = {};
"length" in e && (s.byterange = p, p.length = e.length, "offset" in e || (e.offset = d)), 
"offset" in e && (s.byterange = p, p.offset = e.offset), d = p.offset + p.length;
},
endlist:function() {
this.manifest.endList = !0;
},
inf:function() {
"mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
message:"defaulting media sequence to zero"
})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, 
this.trigger("info", {
message:"defaulting discontinuity sequence to zero"
})), e.duration > 0 && (s.duration = e.duration), 0 === e.duration && (s.duration = .01, 
this.trigger("info", {
message:"updating zero segment duration to a small value"
})), this.manifest.segments = a;
},
key:function() {
if (!e.attributes) return void this.trigger("warn", {
message:"ignoring key declaration without attribute list"
});
if ("NONE" === e.attributes.METHOD) return void (n = null);
if (!e.attributes.URI) return void this.trigger("warn", {
message:"ignoring key declaration without URI"
});
if (e.attributes.KEYFORMAT === l) {
var t = [ "SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC" ];
return -1 === t.indexOf(e.attributes.METHOD) ? void this.trigger("warn", {
message:"invalid key method provided for Widevine"
}) :("SAMPLE-AES-CENC" === e.attributes.METHOD && this.trigger("warn", {
message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
}), "data:text/plain;base64," !== e.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
message:"invalid key URI provided for Widevine"
}) :e.attributes.KEYID && "0x" === e.attributes.KEYID.substring(0, 2) ? void (this.manifest.contentProtection = {
"com.widevine.alpha":{
attributes:{
schemeIdUri:e.attributes.KEYFORMAT,
keyId:e.attributes.KEYID.substring(2)
},
pssh:Wo(e.attributes.URI.split(",")[1])
}
}) :void this.trigger("warn", {
message:"invalid key ID provided for Widevine"
}));
}
e.attributes.METHOD || this.trigger("warn", {
message:"defaulting key method to AES-128"
}), n = {
method:e.attributes.METHOD || "AES-128",
uri:e.attributes.URI
}, "undefined" != typeof e.attributes.IV && (n.iv = e.attributes.IV);
},
"media-sequence":function() {
return isFinite(e.number) ? void (this.manifest.mediaSequence = e.number) :void this.trigger("warn", {
message:"ignoring invalid media sequence: " + e.number
});
},
"discontinuity-sequence":function() {
return isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number, void (c = e.number)) :void this.trigger("warn", {
message:"ignoring invalid discontinuity sequence: " + e.number
});
},
"playlist-type":function() {
return /VOD|EVENT/.test(e.playlistType) ? void (this.manifest.playlistType = e.playlistType) :void this.trigger("warn", {
message:"ignoring unknown playlist type: " + e.playlist
});
},
map:function() {
i = {}, e.uri && (i.uri = e.uri), e.byterange && (i.byterange = e.byterange);
},
"stream-inf":function() {
return this.manifest.playlists = a, this.manifest.mediaGroups = this.manifest.mediaGroups || u, 
e.attributes ? (s.attributes || (s.attributes = {}), void Ni(s.attributes, e.attributes)) :void this.trigger("warn", {
message:"ignoring empty stream-inf attributes"
});
},
media:function() {
if (this.manifest.mediaGroups = this.manifest.mediaGroups || u, !(e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME)) return void this.trigger("warn", {
message:"ignoring incomplete or missing media group"
});
var i = this.manifest.mediaGroups[e.attributes.TYPE];
i[e.attributes["GROUP-ID"]] = i[e.attributes["GROUP-ID"]] || {}, t = i[e.attributes["GROUP-ID"]], 
h = {
"default":/yes/i.test(e.attributes.DEFAULT)
}, h["default"] ? h.autoselect = !0 :h.autoselect = /yes/i.test(e.attributes.AUTOSELECT), 
e.attributes.LANGUAGE && (h.language = e.attributes.LANGUAGE), e.attributes.URI && (h.uri = e.attributes.URI), 
e.attributes["INSTREAM-ID"] && (h.instreamId = e.attributes["INSTREAM-ID"]), e.attributes.CHARACTERISTICS && (h.characteristics = e.attributes.CHARACTERISTICS), 
e.attributes.FORCED && (h.forced = /yes/i.test(e.attributes.FORCED)), t[e.attributes.NAME] = h;
},
discontinuity:function() {
c += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(a.length);
},
"program-date-time":function() {
"undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = e.dateTimeString, 
this.manifest.dateTimeObject = e.dateTimeObject), s.dateTimeString = e.dateTimeString, 
s.dateTimeObject = e.dateTimeObject;
},
targetduration:function() {
return !isFinite(e.duration) || e.duration < 0 ? void this.trigger("warn", {
message:"ignoring invalid target duration: " + e.duration
}) :void (this.manifest.targetDuration = e.duration);
},
totalduration:function() {
return !isFinite(e.duration) || e.duration < 0 ? void this.trigger("warn", {
message:"ignoring invalid total duration: " + e.duration
}) :void (this.manifest.totalDuration = e.duration);
},
start:function() {
return !e.attributes || isNaN(e.attributes["TIME-OFFSET"]) ? void this.trigger("warn", {
message:"ignoring start declaration without appropriate attribute list"
}) :void (this.manifest.start = {
timeOffset:e.attributes["TIME-OFFSET"],
precise:e.attributes.PRECISE
});
},
"cue-out":function() {
s.cueOut = e.data;
},
"cue-out-cont":function() {
s.cueOutCont = e.data;
},
"cue-in":function() {
s.cueIn = e.data;
}
})[e.tagType] || o).call(r);
},
uri:function() {
s.uri = e.uri, a.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {
message:"defaulting segment duration to the target duration"
}), s.duration = this.manifest.targetDuration), n && (s.key = n), s.timeline = c, 
i && (s.map = i), s = {};
},
comment:function() {},
custom:function() {
e.segment ? (s.custom = s.custom || {}, s.custom[e.customType] = e.data) :(this.manifest.custom = this.manifest.custom || {}, 
this.manifest.custom[e.customType] = e.data);
}
})[e.type].call(r);
}), t;
}
Xn(t, e);
var i = t.prototype;
return i.push = function(e) {
this.lineStream.push(e);
}, i.end = function() {
this.lineStream.push("\n");
}, i.addParser = function(e) {
this.parseStream.addParser(e);
}, i.addTagMapper = function(e) {
this.parseStream.addTagMapper(e);
}, t;
}(Vo), Qo = t(function(e, t) {
Object.defineProperty(t, "__esModule", {
value:!0
});
var i = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i, n = /^application\/dash\+xml/i, r = function(e) {
return i.test(e) ? "hls" :n.test(e) ? "dash" :"application/vnd.videojs.vhs+json" === e ? "vhs-json" :null;
};
t.simpleTypeFromSourceType = r;
});
e(Qo);
var $o = Qo.simpleTypeFromSourceType, Jo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Zo = new RegExp("[\\-\\.0-9" + Jo.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), eu = new RegExp("^" + Jo.source + Zo.source + "*(?::" + Jo.source + Zo.source + "*)?$"), tu = 0, iu = 1, nu = 2, ru = 3, au = 4, su = 5, ou = 6, uu = 7;
pt.prototype = {
parse:function(e, t, i) {
var n = this.domBuilder;
n.startDocument(), bt(t, t = {}), ft(e, t, i, n, this.errorHandler), n.endDocument();
}
}, kt.prototype = {
setTagName:function(e) {
if (!eu.test(e)) throw new Error("invalid tagName:" + e);
this.tagName = e;
},
add:function(e, t, i) {
if (!eu.test(e)) throw new Error("invalid attribute:" + e);
this[this.length++] = {
qName:e,
value:t,
offset:i
};
},
length:0,
getLocalName:function(e) {
return this[e].localName;
},
getLocator:function(e) {
return this[e].locator;
},
getQName:function(e) {
return this[e].qName;
},
getURI:function(e) {
return this[e].uri;
},
getValue:function(e) {
return this[e].value;
}
}, wt({}, wt.prototype) instanceof wt || (wt = function(e, t) {
function i() {}
i.prototype = t, i = new i();
for (t in e) i[t] = e[t];
return i;
});
var lu = pt, cu = {
XMLReader:lu
}, du = "http://www.w3.org/1999/xhtml", hu = {}, pu = hu.ELEMENT_NODE = 1, fu = hu.ATTRIBUTE_NODE = 2, mu = hu.TEXT_NODE = 3, gu = hu.CDATA_SECTION_NODE = 4, vu = hu.ENTITY_REFERENCE_NODE = 5, yu = hu.ENTITY_NODE = 6, _u = hu.PROCESSING_INSTRUCTION_NODE = 7, bu = hu.COMMENT_NODE = 8, Tu = hu.DOCUMENT_NODE = 9, Su = hu.DOCUMENT_TYPE_NODE = 10, ku = hu.DOCUMENT_FRAGMENT_NODE = 11, wu = hu.NOTATION_NODE = 12, Eu = {}, Cu = {}, Iu = (Eu.INDEX_SIZE_ERR = (Cu[1] = "Index size error", 
1), Eu.DOMSTRING_SIZE_ERR = (Cu[2] = "DOMString size error", 2), Eu.HIERARCHY_REQUEST_ERR = (Cu[3] = "Hierarchy request error", 
3)), Pu = (Eu.WRONG_DOCUMENT_ERR = (Cu[4] = "Wrong document", 4), Eu.INVALID_CHARACTER_ERR = (Cu[5] = "Invalid character", 
5), Eu.NO_DATA_ALLOWED_ERR = (Cu[6] = "No data allowed", 6), Eu.NO_MODIFICATION_ALLOWED_ERR = (Cu[7] = "No modification allowed", 
7), Eu.NOT_FOUND_ERR = (Cu[8] = "Not found", 8)), Au = (Eu.NOT_SUPPORTED_ERR = (Cu[9] = "Not supported", 
9), Eu.INUSE_ATTRIBUTE_ERR = (Cu[10] = "Attribute in use", 10));
Eu.INVALID_STATE_ERR = (Cu[11] = "Invalid state", 11), Eu.SYNTAX_ERR = (Cu[12] = "Syntax error", 
12), Eu.INVALID_MODIFICATION_ERR = (Cu[13] = "Invalid modification", 13), Eu.NAMESPACE_ERR = (Cu[14] = "Invalid namespace", 
14), Eu.INVALID_ACCESS_ERR = (Cu[15] = "Invalid access", 15);
Pt.prototype = Error.prototype, Ct(Eu, Pt), At.prototype = {
length:0,
item:function(e) {
return this[e] || null;
},
toString:function(e, t) {
for (var i = [], n = 0; n < this.length; n++) ui(this[n], i, e, t);
return i.join("");
}
}, xt.prototype.item = function(e) {
return Lt(this), this[e];
}, It(xt, At), Dt.prototype = {
length:0,
item:At.prototype.item,
getNamedItem:function(e) {
for (var t = this.length; t--; ) {
var i = this[t];
if (i.nodeName == e) return i;
}
},
setNamedItem:function(e) {
var t = e.ownerElement;
if (t && t != this._ownerElement) throw new Pt(Au);
var i = this.getNamedItem(e.nodeName);
return Rt(this._ownerElement, this, e, i), i;
},
setNamedItemNS:function(e) {
var t, i = e.ownerElement;
if (i && i != this._ownerElement) throw new Pt(Au);
return t = this.getNamedItemNS(e.namespaceURI, e.localName), Rt(this._ownerElement, this, e, t), 
t;
},
removeNamedItem:function(e) {
var t = this.getNamedItem(e);
return Nt(this._ownerElement, this, t), t;
},
removeNamedItemNS:function(e, t) {
var i = this.getNamedItemNS(e, t);
return Nt(this._ownerElement, this, i), i;
},
getNamedItemNS:function(e, t) {
for (var i = this.length; i--; ) {
var n = this[i];
if (n.localName == t && n.namespaceURI == e) return n;
}
return null;
}
}, Mt.prototype = {
hasFeature:function(e, t) {
var i = this._features[e.toLowerCase()];
return i && (!t || t in i) ? !0 :!1;
},
createDocument:function(e, t, i) {
var n = new jt();
if (n.implementation = this, n.childNodes = new At(), n.doctype = i, i && n.appendChild(i), 
t) {
var r = n.createElementNS(e, t);
n.appendChild(r);
}
return n;
},
createDocumentType:function(e, t, i) {
var n = new Zt();
return n.name = e, n.nodeName = e, n.publicId = t, n.systemId = i, n;
}
}, Ut.prototype = {
firstChild:null,
lastChild:null,
previousSibling:null,
nextSibling:null,
attributes:null,
parentNode:null,
childNodes:null,
ownerDocument:null,
nodeValue:null,
namespaceURI:null,
prefix:null,
localName:null,
insertBefore:function(e, t) {
return zt(this, e, t);
},
replaceChild:function(e, t) {
this.insertBefore(e, t), t && this.removeChild(t);
},
removeChild:function(e) {
return Wt(this, e);
},
appendChild:function(e) {
return this.insertBefore(e, null);
},
hasChildNodes:function() {
return null != this.firstChild;
},
cloneNode:function(e) {
return ci(this.ownerDocument || this, this, e);
},
normalize:function() {
for (var e = this.firstChild; e; ) {
var t = e.nextSibling;
t && t.nodeType == mu && e.nodeType == mu ? (this.removeChild(t), e.appendData(t.data)) :(e.normalize(), 
e = t);
}
},
isSupported:function(e, t) {
return this.ownerDocument.implementation.hasFeature(e, t);
},
hasAttributes:function() {
return this.attributes.length > 0;
},
lookupPrefix:function(e) {
for (var t = this; t; ) {
var i = t._nsMap;
if (i) for (var n in i) if (i[n] == e) return n;
t = t.nodeType == fu ? t.ownerDocument :t.parentNode;
}
return null;
},
lookupNamespaceURI:function(e) {
for (var t = this; t; ) {
var i = t._nsMap;
if (i && e in i) return i[e];
t = t.nodeType == fu ? t.ownerDocument :t.parentNode;
}
return null;
},
isDefaultNamespace:function(e) {
var t = this.lookupPrefix(e);
return null == t;
}
}, Ct(hu, Ut), Ct(hu, Ut.prototype), jt.prototype = {
nodeName:"#document",
nodeType:Tu,
doctype:null,
documentElement:null,
_inc:1,
insertBefore:function(e, t) {
if (e.nodeType == ku) {
for (var i = e.firstChild; i; ) {
var n = i.nextSibling;
this.insertBefore(i, t), i = n;
}
return e;
}
return null == this.documentElement && e.nodeType == pu && (this.documentElement = e), 
zt(this, e, t), e.ownerDocument = this, e;
},
removeChild:function(e) {
return this.documentElement == e && (this.documentElement = null), Wt(this, e);
},
importNode:function(e, t) {
return li(this, e, t);
},
getElementById:function(e) {
var t = null;
return Ft(this.documentElement, function(i) {
return i.nodeType == pu && i.getAttribute("id") == e ? (t = i, !0) :void 0;
}), t;
},
createElement:function(e) {
var t = new Xt();
t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new At();
var i = t.attributes = new Dt();
return i._ownerElement = t, t;
},
createDocumentFragment:function() {
var e = new ni();
return e.ownerDocument = this, e.childNodes = new At(), e;
},
createTextNode:function(e) {
var t = new Qt();
return t.ownerDocument = this, t.appendData(e), t;
},
createComment:function(e) {
var t = new $t();
return t.ownerDocument = this, t.appendData(e), t;
},
createCDATASection:function(e) {
var t = new Jt();
return t.ownerDocument = this, t.appendData(e), t;
},
createProcessingInstruction:function(e, t) {
var i = new ri();
return i.ownerDocument = this, i.tagName = i.target = e, i.nodeValue = i.data = t, 
i;
},
createAttribute:function(e) {
var t = new Kt();
return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
t;
},
createEntityReference:function(e) {
var t = new ii();
return t.ownerDocument = this, t.nodeName = e, t;
},
createElementNS:function(e, t) {
var i = new Xt(), n = t.split(":"), r = i.attributes = new Dt();
return i.childNodes = new At(), i.ownerDocument = this, i.nodeName = t, i.tagName = t, 
i.namespaceURI = e, 2 == n.length ? (i.prefix = n[0], i.localName = n[1]) :i.localName = t, 
r._ownerElement = i, i;
},
createAttributeNS:function(e, t) {
var i = new Kt(), n = t.split(":");
return i.ownerDocument = this, i.nodeName = t, i.name = t, i.namespaceURI = e, i.specified = !0, 
2 == n.length ? (i.prefix = n[0], i.localName = n[1]) :i.localName = t, i;
}
}, It(jt, Ut), Xt.prototype = {
nodeType:pu,
hasAttribute:function(e) {
return null != this.getAttributeNode(e);
},
getAttribute:function(e) {
var t = this.getAttributeNode(e);
return t && t.value || "";
},
getAttributeNode:function(e) {
return this.attributes.getNamedItem(e);
},
setAttribute:function(e, t) {
var i = this.ownerDocument.createAttribute(e);
i.value = i.nodeValue = "" + t, this.setAttributeNode(i);
},
removeAttribute:function(e) {
var t = this.getAttributeNode(e);
t && this.removeAttributeNode(t);
},
appendChild:function(e) {
return e.nodeType === ku ? this.insertBefore(e, null) :Gt(this, e);
},
setAttributeNode:function(e) {
return this.attributes.setNamedItem(e);
},
setAttributeNodeNS:function(e) {
return this.attributes.setNamedItemNS(e);
},
removeAttributeNode:function(e) {
return this.attributes.removeNamedItem(e.nodeName);
},
removeAttributeNS:function(e, t) {
var i = this.getAttributeNodeNS(e, t);
i && this.removeAttributeNode(i);
},
hasAttributeNS:function(e, t) {
return null != this.getAttributeNodeNS(e, t);
},
getAttributeNS:function(e, t) {
var i = this.getAttributeNodeNS(e, t);
return i && i.value || "";
},
setAttributeNS:function(e, t, i) {
var n = this.ownerDocument.createAttributeNS(e, t);
n.value = n.nodeValue = "" + i, this.setAttributeNode(n);
},
getAttributeNodeNS:function(e, t) {
return this.attributes.getNamedItemNS(e, t);
},
getElementsByTagName:function(e) {
return new xt(this, function(t) {
var i = [];
return Ft(t, function(n) {
n === t || n.nodeType != pu || "*" !== e && n.tagName != e || i.push(n);
}), i;
});
},
getElementsByTagNameNS:function(e, t) {
return new xt(this, function(i) {
var n = [];
return Ft(i, function(r) {
r === i || r.nodeType !== pu || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || n.push(r);
}), n;
});
}
}, jt.prototype.getElementsByTagName = Xt.prototype.getElementsByTagName, jt.prototype.getElementsByTagNameNS = Xt.prototype.getElementsByTagNameNS, 
It(Xt, Ut), Kt.prototype.nodeType = fu, It(Kt, Ut), Yt.prototype = {
data:"",
substringData:function(e, t) {
return this.data.substring(e, e + t);
},
appendData:function(e) {
e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
},
insertData:function(e, t) {
this.replaceData(e, 0, t);
},
appendChild:function(e) {
throw new Error(Cu[Iu]);
},
deleteData:function(e, t) {
this.replaceData(e, t, "");
},
replaceData:function(e, t, i) {
var n = this.data.substring(0, e), r = this.data.substring(e + t);
i = n + i + r, this.nodeValue = this.data = i, this.length = i.length;
}
}, It(Yt, Ut), Qt.prototype = {
nodeName:"#text",
nodeType:mu,
splitText:function(e) {
var t = this.data, i = t.substring(e);
t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
var n = this.ownerDocument.createTextNode(i);
return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n;
}
}, It(Qt, Yt), $t.prototype = {
nodeName:"#comment",
nodeType:bu
}, It($t, Yt), Jt.prototype = {
nodeName:"#cdata-section",
nodeType:gu
}, It(Jt, Yt), Zt.prototype.nodeType = Su, It(Zt, Ut), ei.prototype.nodeType = wu, 
It(ei, Ut), ti.prototype.nodeType = yu, It(ti, Ut), ii.prototype.nodeType = vu, 
It(ii, Ut), ni.prototype.nodeName = "#document-fragment", ni.prototype.nodeType = ku, 
It(ni, Ut), ri.prototype.nodeType = _u, It(ri, Ut), ai.prototype.serializeToString = function(e, t, i) {
return si.call(e, t, i);
}, Ut.prototype.toString = si;
try {
if (Object.defineProperty) {
var xu = function Jm(e) {
switch (e.nodeType) {
case pu:
case ku:
var t = [];
for (e = e.firstChild; e; ) 7 !== e.nodeType && 8 !== e.nodeType && t.push(Jm(e)), 
e = e.nextSibling;
return t.join("");

default:
return e.nodeValue;
}
};
Object.defineProperty(xt.prototype, "length", {
get:function() {
return Lt(this), this.$$length;
}
}), Object.defineProperty(Ut.prototype, "textContent", {
get:function() {
return xu(this);
},
set:function(e) {
switch (this.nodeType) {
case pu:
case ku:
for (;this.firstChild; ) this.removeChild(this.firstChild);
(e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
break;

default:
this.data = e, this.value = e, this.nodeValue = e;
}
}
}), di = function(e, t, i) {
e["$$" + t] = i;
};
}
} catch (Lu) {}
var Du = Mt, Ou = ai, Ru = {
DOMImplementation:Du,
XMLSerializer:Ou
}, Nu = t(function(e, t) {
function i(e) {
this.options = e || {
locator:{}
};
}
function n(e, t, i) {
function n(t) {
var n = e[t];
!n && o && (n = 2 == e.length ? function(i) {
e(t, i);
} :e), a[t] = n && function(e) {
n("[xmldom " + t + "]	" + e + s(i));
} || function() {};
}
if (!e) {
if (t instanceof r) return t;
e = t;
}
var a = {}, o = e instanceof Function;
return i = i || {}, n("warning"), n("error"), n("fatalError"), a;
}
function r() {
this.cdata = !1;
}
function a(e, t) {
t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
}
function s(e) {
return e ? "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]" :void 0;
}
function o(e, t, i) {
return "string" == typeof e ? e.substr(t, i) :e.length >= t + i || t ? new java.lang.String(e, t, i) + "" :e;
}
function u(e, t) {
e.currentElement ? e.currentElement.appendChild(t) :e.doc.appendChild(t);
}
i.prototype.parseFromString = function(e, t) {
var i = this.options, a = new l(), s = i.domBuilder || new r(), o = i.errorHandler, u = i.locator, c = i.xmlns || {}, d = {
lt:"<",
gt:">",
amp:"&",
quot:'"',
apos:"'"
};
return u && s.setDocumentLocator(u), a.errorHandler = n(o, s, u), a.domBuilder = i.domBuilder || s, 
/\/x?html?$/.test(t) && (d.nbsp = "\xa0", d.copy = "\xa9", c[""] = "http://www.w3.org/1999/xhtml"), 
c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", e ? a.parse(e, c, d) :a.errorHandler.error("invalid doc source"), 
s.doc;
}, r.prototype = {
startDocument:function() {
this.doc = new c().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
},
startElement:function(e, t, i, n) {
var r = this.doc, s = r.createElementNS(e, i || t), o = n.length;
u(this, s), this.currentElement = s, this.locator && a(this.locator, s);
for (var l = 0; o > l; l++) {
var e = n.getURI(l), c = n.getValue(l), i = n.getQName(l), d = r.createAttributeNS(e, i);
this.locator && a(n.getLocator(l), d), d.value = d.nodeValue = c, s.setAttributeNode(d);
}
},
endElement:function(e, t, i) {
var n = this.currentElement;
n.tagName;
this.currentElement = n.parentNode;
},
startPrefixMapping:function(e, t) {},
endPrefixMapping:function(e) {},
processingInstruction:function(e, t) {
var i = this.doc.createProcessingInstruction(e, t);
this.locator && a(this.locator, i), u(this, i);
},
ignorableWhitespace:function(e, t, i) {},
characters:function(e, t, i) {
if (e = o.apply(this, arguments)) {
if (this.cdata) var n = this.doc.createCDATASection(e); else var n = this.doc.createTextNode(e);
this.currentElement ? this.currentElement.appendChild(n) :/^\s*$/.test(e) && this.doc.appendChild(n), 
this.locator && a(this.locator, n);
}
},
skippedEntity:function(e) {},
endDocument:function() {
this.doc.normalize();
},
setDocumentLocator:function(e) {
(this.locator = e) && (e.lineNumber = 0);
},
comment:function(e, t, i) {
e = o.apply(this, arguments);
var n = this.doc.createComment(e);
this.locator && a(this.locator, n), u(this, n);
},
startCDATA:function() {
this.cdata = !0;
},
endCDATA:function() {
this.cdata = !1;
},
startDTD:function(e, t, i) {
var n = this.doc.implementation;
if (n && n.createDocumentType) {
var r = n.createDocumentType(e, t, i);
this.locator && a(this.locator, r), u(this, r);
}
},
warning:function(e) {
console.warn("[xmldom warning]	" + e, s(this.locator));
},
error:function(e) {
console.error("[xmldom error]	" + e, s(this.locator));
},
fatalError:function(e) {
throw console.error("[xmldom fatalError]	" + e, s(this.locator)), e;
}
}, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
r.prototype[e] = function() {
return null;
};
});
var l = cu.XMLReader, c = t.DOMImplementation = Ru.DOMImplementation;
t.XMLSerializer = Ru.XMLSerializer, t.DOMParser = i;
}), Mu = (Nu.DOMImplementation, Nu.XMLSerializer, Nu.DOMParser), Uu = function(e) {
return !!e && "object" == typeof e;
}, Bu = function Zm() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return t.reduce(function(e, t) {
return "object" != typeof t ? e :(Object.keys(t).forEach(function(i) {
Array.isArray(e[i]) && Array.isArray(t[i]) ? e[i] = e[i].concat(t[i]) :Uu(e[i]) && Uu(t[i]) ? e[i] = Zm(e[i], t[i]) :e[i] = t[i];
}), e);
}, {});
}, Fu = function(e) {
return Object.keys(e).map(function(t) {
return e[t];
});
}, ju = function(e, t) {
for (var i = [], n = e; t > n; n++) i.push(n);
return i;
}, Vu = function(e) {
return e.reduce(function(e, t) {
return e.concat(t);
}, []);
}, Hu = function(e) {
if (!e.length) return [];
for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
return t;
}, qu = function(e, t) {
return e.reduce(function(e, i, n) {
return i[t] && e.push(n), e;
}, []);
}, Wu = {
INVALID_NUMBER_OF_PERIOD:"INVALID_NUMBER_OF_PERIOD",
DASH_EMPTY_MANIFEST:"DASH_EMPTY_MANIFEST",
DASH_INVALID_XML:"DASH_INVALID_XML",
NO_BASE_URL:"NO_BASE_URL",
MISSING_SEGMENT_INFORMATION:"MISSING_SEGMENT_INFORMATION",
SEGMENT_TIME_UNSPECIFIED:"SEGMENT_TIME_UNSPECIFIED",
UNSUPPORTED_UTC_TIMING_SCHEME:"UNSUPPORTED_UTC_TIMING_SCHEME"
}, zu = function(e) {
var t = e.baseUrl, i = void 0 === t ? "" :t, n = e.source, r = void 0 === n ? "" :n, a = e.range, s = void 0 === a ? "" :a, o = e.indexRange, u = void 0 === o ? "" :o, l = {
uri:r,
resolvedUri:Fo(i || "", r)
};
if (s || u) {
var c = s ? s :u, d = c.split("-"), h = parseInt(d[0], 10), p = parseInt(d[1], 10);
l.byterange = {
length:p - h + 1,
offset:h
};
}
return l;
}, Gu = function(e) {
var t = e.offset + e.length - 1;
return e.offset + "-" + t;
}, Xu = {
"static":function(e) {
var t = e.duration, i = e.timescale, n = void 0 === i ? 1 :i, r = e.sourceDuration;
return {
start:0,
end:Math.ceil(r / (t / n))
};
},
dynamic:function(e) {
var t = e.NOW, i = e.clientOffset, n = e.availabilityStartTime, r = e.timescale, a = void 0 === r ? 1 :r, s = e.duration, o = e.start, u = void 0 === o ? 0 :o, l = e.minimumUpdatePeriod, c = void 0 === l ? 0 :l, d = e.timeShiftBufferDepth, h = void 0 === d ? 1 / 0 :d, p = (t + i) / 1e3, f = n + u, m = p + c, g = m - f, v = Math.ceil(g * a / s), y = Math.floor((p - f - h) * a / s), _ = Math.floor((p - f) * a / s);
return {
start:Math.max(0, y),
end:Math.min(v, _)
};
}
}, Ku = function(e) {
return function(t, i) {
var n = e.duration, r = e.timescale, a = void 0 === r ? 1 :r, s = e.periodIndex, o = e.startNumber, u = void 0 === o ? 1 :o;
return {
number:u + t,
duration:n / a,
timeline:s,
time:i * n
};
};
}, Yu = function(e) {
var t = e.type, i = void 0 === t ? "static" :t, n = e.duration, r = e.timescale, a = void 0 === r ? 1 :r, s = e.sourceDuration, o = Xu[i](e), u = o.start, l = o.end, c = ju(u, l).map(Ku(e));
if ("static" === i) {
var d = c.length - 1;
c[d].duration = s - n / a * d;
}
return c;
}, Qu = function(e) {
var t = e.baseUrl, i = e.initialization, n = void 0 === i ? {} :i, r = e.sourceDuration, a = e.indexRange, s = void 0 === a ? "" :a, o = e.duration;
if (!t) throw new Error(Wu.NO_BASE_URL);
var u = zu({
baseUrl:t,
source:n.sourceURL,
range:n.range
}), l = zu({
baseUrl:t,
source:t,
indexRange:s
});
if (l.map = u, o) {
var c = Yu(e);
c.length && (l.duration = c[0].duration, l.timeline = c[0].timeline);
} else r && (l.duration = r, l.timeline = 0);
return l.number = 0, [ l ];
}, $u = function(e, t, i) {
for (var n = e.sidx.map ? e.sidx.map :null, r = e.sidx.duration, a = e.timeline || 0, s = e.sidx.byterange, o = s.offset + s.length, u = t.timescale, l = t.references.filter(function(e) {
return 1 !== e.referenceType;
}), c = [], d = o + t.firstOffset, h = 0; h < l.length; h++) {
var p = t.references[h], f = p.referencedSize, m = p.subsegmentDuration, g = d + f - 1, v = d + "-" + g, y = {
baseUrl:i,
timescale:u,
timeline:a,
periodIndex:a,
duration:m,
sourceDuration:r,
indexRange:v
}, _ = Qu(y)[0];
n && (_.map = n), c.push(_), d += f;
}
return e.segments = c, e;
}, Ju = function(e) {
var t = Fu(e.reduce(function(e, t) {
var i = t.attributes.id + (t.attributes.lang || "");
if (e[i]) {
var n;
t.segments[0] && (t.segments[0].discontinuity = !0), (n = e[i].segments).push.apply(n, t.segments), 
t.attributes.contentProtection && (e[i].attributes.contentProtection = t.attributes.contentProtection);
} else e[i] = t;
return e;
}, {}));
return t.map(function(e) {
return e.discontinuityStarts = qu(e.segments, "discontinuity"), e;
});
}, Zu = function(e, t) {
if (void 0 === t && (t = {}), !Object.keys(t).length) return e;
for (var i in e) {
var n = e[i];
if (n.sidx) {
var r = n.sidx.uri + "-" + Gu(n.sidx.byterange), a = t[r] && t[r].sidx;
n.sidx && a && $u(n, a, n.sidx.resolvedUri);
}
}
return e;
}, el = function(e) {
var t, i = e.attributes, n = e.segments, r = e.sidx, a = {
attributes:(t = {
NAME:i.id,
BANDWIDTH:i.bandwidth,
CODECS:i.codecs
}, t["PROGRAM-ID"] = 1, t),
uri:"",
endList:"static" === (i.type || "static"),
timeline:i.periodIndex,
resolvedUri:"",
targetDuration:i.duration,
segments:n,
mediaSequence:n.length ? n[0].number :1
};
return i.contentProtection && (a.contentProtection = i.contentProtection), r && (a.sidx = r), 
a;
}, tl = function(e) {
var t, i = e.attributes, n = e.segments;
"undefined" == typeof n && (n = [ {
uri:i.baseUrl,
timeline:i.periodIndex,
resolvedUri:i.baseUrl || "",
duration:i.sourceDuration,
number:0
} ], i.duration = i.sourceDuration);
var r = (t = {
NAME:i.id,
BANDWIDTH:i.bandwidth
}, t["PROGRAM-ID"] = 1, t);
return i.codecs && (r.CODECS = i.codecs), {
attributes:r,
uri:"",
endList:"static" === (i.type || "static"),
timeline:i.periodIndex,
resolvedUri:i.baseUrl || "",
targetDuration:i.duration,
segments:n,
mediaSequence:n.length ? n[0].number :1
};
}, il = function(e, t) {
void 0 === t && (t = {});
var i, n = e.reduce(function(e, n) {
var r = n.attributes.role && n.attributes.role.value || "", a = n.attributes.lang || "", s = "main";
if (a) {
var o = r ? " (" + r + ")" :"";
s = "" + n.attributes.lang + o;
}
return e[s] && e[s].playlists[0].attributes.BANDWIDTH > n.attributes.bandwidth ? e :(e[s] = {
language:a,
autoselect:!0,
"default":"main" === r,
playlists:Zu([ el(n) ], t),
uri:""
}, "undefined" == typeof i && "main" === r && (i = n, i["default"] = !0), e);
}, {});
if (!i) {
var r = Object.keys(n)[0];
n[r]["default"] = !0;
}
return n;
}, nl = function(e, t) {
return void 0 === t && (t = {}), e.reduce(function(e, i) {
var n = i.attributes.lang || "text";
return e[n] ? e :(e[n] = {
language:n,
"default":!1,
autoselect:!1,
playlists:Zu([ tl(i) ], t),
uri:""
}, e);
}, {});
}, rl = function(e) {
var t, i = e.attributes, n = e.segments, r = e.sidx, a = {
attributes:(t = {
NAME:i.id,
AUDIO:"audio",
SUBTITLES:"subs",
RESOLUTION:{
width:i.width,
height:i.height
},
CODECS:i.codecs,
BANDWIDTH:i.bandwidth
}, t["PROGRAM-ID"] = 1, t),
uri:"",
endList:"static" === (i.type || "static"),
timeline:i.periodIndex,
resolvedUri:"",
targetDuration:i.duration,
segments:n,
mediaSequence:n.length ? n[0].number :1
};
return i.contentProtection && (a.contentProtection = i.contentProtection), r && (a.sidx = r), 
a;
}, al = function(e, t, i) {
var n;
if (void 0 === i && (i = {}), !e.length) return {};
var r = e[0].attributes, a = r.sourceDuration, s = r.type, o = void 0 === s ? "static" :s, u = r.suggestedPresentationDelay, l = r.minimumUpdatePeriod, c = function(e) {
var t = e.attributes;
return "video/mp4" === t.mimeType || "video/webm" === t.mimeType || "video" === t.contentType;
}, d = function(e) {
var t = e.attributes;
return "audio/mp4" === t.mimeType || "audio/webm" === t.mimeType || "audio" === t.contentType;
}, h = function(e) {
var t = e.attributes;
return "text/vtt" === t.mimeType || "text" === t.contentType;
}, p = Ju(e.filter(c)).map(rl), f = Ju(e.filter(d)), m = e.filter(h), g = {
allowCache:!0,
discontinuityStarts:[],
segments:[],
endList:!0,
mediaGroups:(n = {
AUDIO:{},
VIDEO:{}
}, n["CLOSED-CAPTIONS"] = {}, n.SUBTITLES = {}, n),
uri:"",
duration:a,
playlists:Zu(p, i)
};
return l >= 0 && (g.minimumUpdatePeriod = 1e3 * l), t && (g.locations = t), "dynamic" === o && (g.suggestedPresentationDelay = u), 
f.length && (g.mediaGroups.AUDIO.audio = il(f, i)), m.length && (g.mediaGroups.SUBTITLES.subs = nl(m, i)), 
g;
}, sl = function(e, t, i) {
var n = e.NOW, r = e.clientOffset, a = e.availabilityStartTime, s = e.timescale, o = void 0 === s ? 1 :s, u = e.start, l = void 0 === u ? 0 :u, c = e.minimumUpdatePeriod, d = void 0 === c ? 0 :c, h = (n + r) / 1e3, p = a + l, f = h + d, m = f - p;
return Math.ceil((m * o - t) / i);
}, ol = function(e, t) {
for (var i = e.type, n = void 0 === i ? "static" :i, r = e.minimumUpdatePeriod, a = void 0 === r ? 0 :r, s = e.media, o = void 0 === s ? "" :s, u = e.sourceDuration, l = e.timescale, c = void 0 === l ? 1 :l, d = e.startNumber, h = void 0 === d ? 1 :d, p = e.periodIndex, f = [], m = -1, g = 0; g < t.length; g++) {
var v = t[g], y = v.d, _ = v.r || 0, b = v.t || 0;
0 > m && (m = b), b && b > m && (m = b);
var T = void 0;
if (0 > _) {
var S = g + 1;
T = S === t.length ? "dynamic" === n && a > 0 && o.indexOf("$Number$") > 0 ? sl(e, m, y) :(u * c - m) / y :(t[S].t - m) / y;
} else T = _ + 1;
for (var k = h + f.length + T, w = h + f.length; k > w; ) f.push({
number:w,
duration:y / c,
time:m,
timeline:p
}), m += y, w++;
}
return f;
}, ul = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, ll = function(e) {
return function(t, i, n, r) {
if ("$$" === t) return "$";
if ("undefined" == typeof e[i]) return t;
var a = "" + e[i];
return "RepresentationID" === i ? a :(r = n ? parseInt(r, 10) :1, a.length >= r ? a :"" + new Array(r - a.length + 1).join("0") + a);
};
}, cl = function(e, t) {
return e.replace(ul, ll(t));
}, dl = function(e, t) {
return e.duration || t ? e.duration ? Yu(e) :ol(e, t) :[ {
number:e.startNumber || 1,
duration:e.sourceDuration,
time:0,
timeline:e.periodIndex
} ];
}, hl = function(e, t) {
var i = {
RepresentationID:e.id,
Bandwidth:e.bandwidth || 0
}, n = e.initialization, r = void 0 === n ? {
sourceURL:"",
range:""
} :n, a = zu({
baseUrl:e.baseUrl,
source:cl(r.sourceURL, i),
range:r.range
}), s = dl(e, t);
return s.map(function(t) {
i.Number = t.number, i.Time = t.time;
var n = cl(e.media || "", i);
return {
uri:n,
timeline:t.timeline,
duration:t.duration,
resolvedUri:Fo(e.baseUrl || "", n),
map:a,
number:t.number
};
});
}, pl = function(e, t) {
var i = e.baseUrl, n = e.initialization, r = void 0 === n ? {} :n, a = zu({
baseUrl:i,
source:r.sourceURL,
range:r.range
}), s = zu({
baseUrl:i,
source:t.media,
range:t.mediaRange
});
return s.map = a, s;
}, fl = function(e, t) {
var i = e.duration, n = e.segmentUrls, r = void 0 === n ? [] :n;
if (!i && !t || i && t) throw new Error(Wu.SEGMENT_TIME_UNSPECIFIED);
var a, s = r.map(function(t) {
return pl(e, t);
});
i && (a = Yu(e)), t && (a = ol(e, t));
var o = a.map(function(e, t) {
if (s[t]) {
var i = s[t];
return i.timeline = e.timeline, i.duration = e.duration, i.number = e.number, i;
}
}).filter(function(e) {
return e;
});
return o;
}, ml = function(e) {
var t, i, n = e.attributes, r = e.segmentInfo;
r.template ? (i = hl, t = Bu(n, r.template)) :r.base ? (i = Qu, t = Bu(n, r.base)) :r.list && (i = fl, 
t = Bu(n, r.list));
var a = {
attributes:n
};
if (!i) return a;
var s = i(t, r.timeline);
if (t.duration) {
var o = t, u = o.duration, l = o.timescale, c = void 0 === l ? 1 :l;
t.duration = u / c;
} else s.length ? t.duration = s.reduce(function(e, t) {
return Math.max(e, Math.ceil(t.duration));
}, 0) :t.duration = 0;
return a.attributes = t, a.segments = s, r.base && t.indexRange && (a.sidx = s[0], 
a.segments = []), a;
}, gl = function(e) {
return e.map(ml);
}, vl = function(e, t) {
return Hu(e.childNodes).filter(function(e) {
var i = e.tagName;
return i === t;
});
}, yl = function(e) {
return e.textContent.trim();
}, _l = function(e) {
var t = 31536e3, i = 2592e3, n = 86400, r = 3600, a = 60, s = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/, o = s.exec(e);
if (!o) return 0;
var u = o.slice(1), l = u[0], c = u[1], d = u[2], h = u[3], p = u[4], f = u[5];
return parseFloat(l || 0) * t + parseFloat(c || 0) * i + parseFloat(d || 0) * n + parseFloat(h || 0) * r + parseFloat(p || 0) * a + parseFloat(f || 0);
}, bl = function(e) {
var t = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/;
return t.test(e) && (e += "Z"), Date.parse(e);
}, Tl = {
mediaPresentationDuration:function(e) {
return _l(e);
},
availabilityStartTime:function(e) {
return bl(e) / 1e3;
},
minimumUpdatePeriod:function(e) {
return _l(e);
},
suggestedPresentationDelay:function(e) {
return _l(e);
},
type:function(e) {
return e;
},
timeShiftBufferDepth:function(e) {
return _l(e);
},
start:function(e) {
return _l(e);
},
width:function(e) {
return parseInt(e, 10);
},
height:function(e) {
return parseInt(e, 10);
},
bandwidth:function(e) {
return parseInt(e, 10);
},
startNumber:function(e) {
return parseInt(e, 10);
},
timescale:function(e) {
return parseInt(e, 10);
},
duration:function(e) {
var t = parseInt(e, 10);
return isNaN(t) ? _l(e) :t;
},
d:function(e) {
return parseInt(e, 10);
},
t:function(e) {
return parseInt(e, 10);
},
r:function(e) {
return parseInt(e, 10);
},
DEFAULT:function(e) {
return e;
}
}, Sl = function(e) {
return e && e.attributes ? Hu(e.attributes).reduce(function(e, t) {
var i = Tl[t.name] || Tl.DEFAULT;
return e[t.name] = i(t.value), e;
}, {}) :{};
}, kl = {
"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey",
"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha",
"urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready",
"urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"
}, wl = function(e, t) {
return t.length ? Vu(e.map(function(e) {
return t.map(function(t) {
return Fo(e, yl(t));
});
})) :e;
}, El = function(e) {
var t = vl(e, "SegmentTemplate")[0], i = vl(e, "SegmentList")[0], n = i && vl(i, "SegmentURL").map(function(e) {
return Bu({
tag:"SegmentURL"
}, Sl(e));
}), r = vl(e, "SegmentBase")[0], a = i || t, s = a && vl(a, "SegmentTimeline")[0], o = i || r || t, u = o && vl(o, "Initialization")[0], l = t && Sl(t);
l && u ? l.initialization = u && Sl(u) :l && l.initialization && (l.initialization = {
sourceURL:l.initialization
});
var c = {
template:l,
timeline:s && vl(s, "S").map(function(e) {
return Sl(e);
}),
list:i && Bu(Sl(i), {
segmentUrls:n,
initialization:Sl(u)
}),
base:r && Bu(Sl(r), {
initialization:Sl(u)
})
};
return Object.keys(c).forEach(function(e) {
c[e] || delete c[e];
}), c;
}, Cl = function(e, t, i) {
return function(n) {
var r = vl(n, "BaseURL"), a = wl(t, r), s = Bu(e, Sl(n)), o = El(n);
return a.map(function(e) {
return {
segmentInfo:Bu(i, o),
attributes:Bu(s, {
baseUrl:e
})
};
});
};
}, Il = function(e) {
return e.reduce(function(e, t) {
var i = Sl(t), n = kl[i.schemeIdUri];
if (n) {
e[n] = {
attributes:i
};
var r = vl(t, "cenc:pssh")[0];
if (r) {
var a = yl(r), s = a && Wo(a);
e[n].pssh = s;
}
}
return e;
}, {});
}, Pl = function(e, t, i) {
return function(n) {
var r = Sl(n), a = wl(t, vl(n, "BaseURL")), s = vl(n, "Role")[0], o = {
role:Sl(s)
}, u = Bu(e, r, o), l = Il(vl(n, "ContentProtection"));
Object.keys(l).length && (u = Bu(u, {
contentProtection:l
}));
var c = El(n), d = vl(n, "Representation"), h = Bu(i, c);
return Vu(d.map(Cl(u, a, h)));
};
}, Al = function(e, t) {
return function(i, n) {
var r = wl(t, vl(i, "BaseURL")), a = Sl(i), s = parseInt(a.id, 10), o = bi.isNaN(s) ? n :s, u = Bu(e, {
periodIndex:o
}), l = vl(i, "AdaptationSet"), c = El(i);
return Vu(l.map(Pl(u, r, c)));
};
}, xl = function(e, t) {
void 0 === t && (t = {});
var i = t, n = i.manifestUri, r = void 0 === n ? "" :n, a = i.NOW, s = void 0 === a ? Date.now() :a, o = i.clientOffset, u = void 0 === o ? 0 :o, l = vl(e, "Period");
if (!l.length) throw new Error(Wu.INVALID_NUMBER_OF_PERIOD);
var c = vl(e, "Location"), d = Sl(e), h = wl([ r ], vl(e, "BaseURL"));
return d.sourceDuration = d.mediaPresentationDuration || 0, d.NOW = s, d.clientOffset = u, 
c.length && (d.locations = c.map(yl)), {
locations:d.locations,
representationInfo:Vu(l.map(Al(d, h)))
};
}, Ll = function(e) {
if ("" === e) throw new Error(Wu.DASH_EMPTY_MANIFEST);
var t, i, n = new Mu();
try {
t = n.parseFromString(e, "application/xml"), i = t && "MPD" === t.documentElement.tagName ? t.documentElement :null;
} catch (r) {}
if (!i || i && i.getElementsByTagName("parsererror").length > 0) throw new Error(Wu.DASH_INVALID_XML);
return i;
}, Dl = function(e) {
var t = vl(e, "UTCTiming")[0];
if (!t) return null;
var i = Sl(t);
switch (i.schemeIdUri) {
case "urn:mpeg:dash:utc:http-head:2014":
case "urn:mpeg:dash:utc:http-head:2012":
i.method = "HEAD";
break;

case "urn:mpeg:dash:utc:http-xsdate:2014":
case "urn:mpeg:dash:utc:http-iso:2014":
case "urn:mpeg:dash:utc:http-xsdate:2012":
case "urn:mpeg:dash:utc:http-iso:2012":
i.method = "GET";
break;

case "urn:mpeg:dash:utc:direct:2014":
case "urn:mpeg:dash:utc:direct:2012":
i.method = "DIRECT", i.value = Date.parse(i.value);
break;

case "urn:mpeg:dash:utc:http-ntp:2014":
case "urn:mpeg:dash:utc:ntp:2014":
case "urn:mpeg:dash:utc:sntp:2014":
default:
throw new Error(Wu.UNSUPPORTED_UTC_TIMING_SCHEME);
}
return i;
}, Ol = function(e, t) {
void 0 === t && (t = {});
var i = xl(Ll(e), t), n = gl(i.representationInfo);
return al(n, i.locations, t.sidxMapping);
}, Rl = function(e) {
return Dl(Ll(e));
}, Nl = $u, Ml = Math.pow(2, 32), Ul = function(e) {
var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
references:[],
referenceId:t.getUint32(4),
timescale:t.getUint32(8)
}, n = 12;
0 === i.version ? (i.earliestPresentationTime = t.getUint32(n), i.firstOffset = t.getUint32(n + 4), 
n += 8) :(i.earliestPresentationTime = t.getUint32(n) * Ml + t.getUint32(n + 4), 
i.firstOffset = t.getUint32(n + 8) * Ml + t.getUint32(n + 12), n += 16), n += 2;
var r = t.getUint16(n);
for (n += 2; r > 0; n += 12, r--) i.references.push({
referenceType:(128 & e[n]) >>> 7,
referencedSize:2147483647 & t.getUint32(n),
subsegmentDuration:t.getUint32(n + 4),
startsWithSap:!!(128 & e[n + 8]),
sapType:(112 & e[n + 8]) >>> 4,
sapDeltaTime:268435455 & t.getUint32(n + 8)
});
return i;
}, Bl = Ul, Fl = t(function(e, t) {
Object.defineProperty(t, "__esModule", {
value:!0
});
var i = function(e) {
return e instanceof Uint8Array ? e :new Uint8Array(e && e.buffer || e, e && e.byteOffset || 0, e && e.byteLength || 0);
}, n = function(e) {
if (!e) return "";
e = Array.prototype.slice.call(e);
var t = String.fromCharCode.apply(null, i(e));
try {
return decodeURIComponent(escape(t));
} catch (n) {}
return t;
}, r = function(e, t) {
void 0 === t && (t = 0), e = i(e);
var n = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9], r = e[t + 5], a = (16 & r) >> 4;
return a ? n + 20 :n + 10;
}, a = function c(e, t) {
return void 0 === t && (t = 0), e = i(e), e.length - t < 10 || "ID3" !== n(e.subarray(t, t + 3)) ? t :(t += r(e, t), 
c(e, t));
}, s = {
aac:function(e) {
var t = a(e);
return e.length >= t + 2 && 255 === (255 & e[t]) && 224 === (224 & e[t + 1]) && 16 === (22 & e[t + 1]);
},
mp3:function(e) {
var t = a(e);
return e.length >= t + 2 && 255 === (255 & e[t]) && 224 === (224 & e[t + 1]) && 2 === (6 & e[t + 1]);
},
webm:function(e) {
return e.length >= 4 && 26 === (255 & e[0]) && 69 === (255 & e[1]) && 223 === (255 & e[2]) && 163 === (255 & e[3]);
},
mp4:function(e) {
return e.length >= 8 && /^(f|s)typ$/.test(n(e.subarray(4, 8))) && !/^ftyp3g$/.test(n(e.subarray(4, 10)));
},
"3gp":function(e) {
return e.length >= 10 && /^ftyp3g$/.test(n(e.subarray(4, 10)));
},
ts:function(e) {
if (e.length < 189 && e.length >= 1) return 71 === e[0];
for (var t = 0; t + 188 < e.length && 188 > t; ) {
if (71 === e[t] && 71 === e[t + 188]) return !0;
t += 1;
}
return !1;
},
flac:function(e) {
return e.length >= 4 && /^fLaC$/.test(n(e.subarray(0, 4)));
},
ogg:function(e) {
return e.length >= 4 && /^OggS$/.test(n(e.subarray(0, 4)));
}
}, o = Object.keys(s).filter(function(e) {
return "ts" !== e;
}).concat("ts");
o.forEach(function(e) {
var t = s[e];
s[e] = function(e) {
return t(i(e));
};
});
var u = function(e) {
e = i(e);
for (var t = 0; t < o.length; t++) {
var n = o[t];
if (s[n](e)) return n;
}
return "";
}, l = function(e) {
e = i(e);
for (var t = 0; t < e.length; ) {
var r = (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0, a = n(e.subarray(t + 4, t + 8));
if ("moof" === a) return !0;
0 === r || r + t > e.length ? t = e.length :t += r;
}
return !1;
};
t.detectContainerForBytes = u, t.getId3Offset = a, t.id3Size = r, t.isLikely = s, 
t.isLikelyFmp4MediaSegment = l;
});
e(Fl);
var jl = Fl.detectContainerForBytes, Vl = Fl.getId3Offset, Hl = (Fl.id3Size, Fl.isLikely, 
Fl.isLikelyFmp4MediaSegment), ql = t(function(e, t) {
Object.defineProperty(t, "__esModule", {
value:!0
});
var i = function(e) {
return ArrayBuffer.isView(e);
}, n = function(e) {
return e instanceof Uint8Array ? e :new Uint8Array(e && e.buffer || e, e && e.byteOffset || 0, e && e.byteLength || 0);
}, r = function(e) {
if (!e) return "";
e = Array.prototype.slice.call(e);
var t = String.fromCharCode.apply(null, n(e));
try {
return decodeURIComponent(escape(t));
} catch (i) {}
return t;
}, a = function(e, t) {
void 0 === t && (t = !1);
var i = [];
return "string" != typeof e && e && "function" == typeof e.toString && (e = e.toString()), 
"string" != typeof e ? i :(t || (e = unescape(encodeURIComponent(e))), e.split("").map(function(e) {
return 255 & e.charCodeAt(0);
}));
}, s = function() {
for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
var r = t.reduce(function(e, t) {
var i = t && (t.byteLength || t.length);
return e += i || 0;
}, 0), a = new Uint8Array(r), s = 0;
return t.forEach(function(e) {
e = n(e), a.set(e, s), s += e.byteLength;
}), a;
};
t.bytesToString = r, t.concatTypedArrays = s, t.isTypedArray = i, t.stringToBytes = a, 
t.toUint8 = n;
});
e(ql);
var Wl = (ql.bytesToString, ql.concatTypedArrays), zl = (ql.isTypedArray, ql.stringToBytes), Gl = ql.toUint8, Xl = {
H264_STREAM_TYPE:27,
ADTS_STREAM_TYPE:15,
METADATA_STREAM_TYPE:21
}, Kl = function() {
this.init = function() {
var e = {};
this.on = function(t, i) {
e[t] || (e[t] = []), e[t] = e[t].concat(i);
}, this.off = function(t, i) {
var n;
return e[t] ? (n = e[t].indexOf(i), e[t] = e[t].slice(), e[t].splice(n, 1), n > -1) :!1;
}, this.trigger = function(t) {
var i, n, r, a;
if (i = e[t]) if (2 === arguments.length) for (r = i.length, n = 0; r > n; ++n) i[n].call(this, arguments[1]); else {
for (a = [], n = arguments.length, n = 1; n < arguments.length; ++n) a.push(arguments[n]);
for (r = i.length, n = 0; r > n; ++n) i[n].apply(this, a);
}
}, this.dispose = function() {
e = {};
};
};
};
Kl.prototype.pipe = function(e) {
return this.on("data", function(t) {
e.push(t);
}), this.on("done", function(t) {
e.flush(t);
}), this.on("partialdone", function(t) {
e.partialFlush(t);
}), this.on("endedtimeline", function(t) {
e.endTimeline(t);
}), this.on("reset", function(t) {
e.reset(t);
}), e;
}, Kl.prototype.push = function(e) {
this.trigger("data", e);
}, Kl.prototype.flush = function(e) {
this.trigger("done", e);
}, Kl.prototype.partialFlush = function(e) {
this.trigger("partialdone", e);
}, Kl.prototype.endTimeline = function(e) {
this.trigger("endedtimeline", e);
}, Kl.prototype.reset = function(e) {
this.trigger("reset", e);
};
var Yl = Kl, Ql = 8589934592, $l = 4294967296, Jl = "shared", Zl = function(e, t) {
var i = 1;
for (e > t && (i = -1); Math.abs(t - e) > $l; ) e += i * Ql;
return e;
}, ec = function eg(e) {
var t, i;
eg.prototype.init.call(this), this.type_ = e || Jl, this.push = function(e) {
(this.type_ === Jl || e.type === this.type_) && (void 0 === i && (i = e.dts), e.dts = Zl(e.dts, i), 
e.pts = Zl(e.pts, i), t = e.dts, this.trigger("data", e));
}, this.flush = function() {
i = t, this.trigger("done");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline");
}, this.discontinuity = function() {
i = void 0, t = void 0;
}, this.reset = function() {
this.discontinuity(), this.trigger("reset");
};
};
ec.prototype = new Yl();
var tc, ic, nc, rc, ac, sc, oc, uc = {
TimestampRolloverStream:ec,
handleRollover:Zl
}, lc = function(e) {
var t = 31 & e[1];
return t <<= 8, t |= e[2];
}, cc = function(e) {
return !!(64 & e[1]);
}, dc = function(e) {
var t = 0;
return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1), t;
}, hc = function(e, t) {
var i = lc(e);
return 0 === i ? "pat" :i === t ? "pmt" :t ? "pes" :null;
}, pc = function(e) {
var t = cc(e), i = 4 + dc(e);
return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11];
}, fc = function(e) {
var t = {}, i = cc(e), n = 4 + dc(e);
if (i && (n += e[n] + 1), 1 & e[n + 5]) {
var r, a, s;
r = (15 & e[n + 1]) << 8 | e[n + 2], a = 3 + r - 4, s = (15 & e[n + 10]) << 8 | e[n + 11];
for (var o = 12 + s; a > o; ) {
var u = n + o;
t[(31 & e[u + 1]) << 8 | e[u + 2]] = e[u], o += ((15 & e[u + 3]) << 8 | e[u + 4]) + 5;
}
return t;
}
}, mc = function(e, t) {
var i = lc(e), n = t[i];
switch (n) {
case Xl.H264_STREAM_TYPE:
return "video";

case Xl.ADTS_STREAM_TYPE:
return "audio";

case Xl.METADATA_STREAM_TYPE:
return "timed-metadata";

default:
return null;
}
}, gc = function(e) {
var t = cc(e);
if (!t) return null;
var i = 4 + dc(e);
if (i >= e.byteLength) return null;
var n, r = null;
return n = e[i + 7], 192 & n && (r = {}, r.pts = (14 & e[i + 9]) << 27 | (255 & e[i + 10]) << 20 | (254 & e[i + 11]) << 12 | (255 & e[i + 12]) << 5 | (254 & e[i + 13]) >>> 3, 
r.pts *= 4, r.pts += (6 & e[i + 13]) >>> 1, r.dts = r.pts, 64 & n && (r.dts = (14 & e[i + 14]) << 27 | (255 & e[i + 15]) << 20 | (254 & e[i + 16]) << 12 | (255 & e[i + 17]) << 5 | (254 & e[i + 18]) >>> 3, 
r.dts *= 4, r.dts += (6 & e[i + 18]) >>> 1)), r;
}, vc = function(e) {
switch (e) {
case 5:
return "slice_layer_without_partitioning_rbsp_idr";

case 6:
return "sei_rbsp";

case 7:
return "seq_parameter_set_rbsp";

case 8:
return "pic_parameter_set_rbsp";

case 9:
return "access_unit_delimiter_rbsp";

default:
return null;
}
}, yc = function(e) {
for (var t, i = 4 + dc(e), n = e.subarray(i), r = 0, a = 0, s = !1; a < n.byteLength - 3; a++) if (1 === n[a + 2]) {
r = a + 5;
break;
}
for (;r < n.byteLength; ) switch (n[r]) {
case 0:
if (0 !== n[r - 1]) {
r += 2;
break;
}
if (0 !== n[r - 2]) {
r++;
break;
}
a + 3 !== r - 2 && (t = vc(31 & n[a + 3]), "slice_layer_without_partitioning_rbsp_idr" === t && (s = !0));
do r++; while (1 !== n[r] && r < n.length);
a = r - 2, r += 3;
break;

case 1:
if (0 !== n[r - 1] || 0 !== n[r - 2]) {
r += 3;
break;
}
t = vc(31 & n[a + 3]), "slice_layer_without_partitioning_rbsp_idr" === t && (s = !0), 
a = r - 2, r += 3;
break;

default:
r += 3;
}
return n = n.subarray(a), r -= a, a = 0, n && n.byteLength > 3 && (t = vc(31 & n[a + 3]), 
"slice_layer_without_partitioning_rbsp_idr" === t && (s = !0)), s;
}, _c = {
parseType:hc,
parsePat:pc,
parsePmt:fc,
parsePayloadUnitStartIndicator:cc,
parsePesType:mc,
parsePesTime:gc,
videoPacketContainsKeyFrame:yc
}, bc = [ 96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350 ], Tc = function(e, t) {
var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9], n = e[t + 5], r = (16 & n) >> 4;
return i = i >= 0 ? i :0, r ? i + 20 :i + 10;
}, Sc = function tg(e, t) {
return e.length - t < 10 || e[t] !== "I".charCodeAt(0) || e[t + 1] !== "D".charCodeAt(0) || e[t + 2] !== "3".charCodeAt(0) ? t :(t += Tc(e, t), 
tg(e, t));
}, kc = function(e) {
var t = Sc(e, 0);
return e.length >= t + 2 && 255 === (255 & e[t]) && 240 === (240 & e[t + 1]) && 16 === (22 & e[t + 1]);
}, wc = function(e) {
return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3];
}, Ec = function(e, t, i) {
var n, r = "";
for (n = t; i > n; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
return r;
}, Cc = function(e, t, i) {
return unescape(Ec(e, t, i));
}, Ic = function(e, t) {
var i = (224 & e[t + 5]) >> 5, n = e[t + 4] << 3, r = 6144 & e[t + 3];
return r | n | i;
}, Pc = function(e, t) {
return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" :e[t] & !0 && 240 === (240 & e[t + 1]) ? "audio" :null;
}, Ac = function(e) {
for (var t = 0; t + 5 < e.length; ) {
if (255 === e[t] && 240 === (246 & e[t + 1])) return bc[(60 & e[t + 2]) >>> 2];
t++;
}
return null;
}, xc = function(e) {
var t, i, n, r;
t = 10, 64 & e[5] && (t += 4, t += wc(e.subarray(10, 14)));
do {
if (i = wc(e.subarray(t + 4, t + 8)), 1 > i) return null;
if (r = String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3]), "PRIV" === r) {
n = e.subarray(t + 10, t + i + 10);
for (var a = 0; a < n.byteLength; a++) if (0 === n[a]) {
var s = Cc(n, 0, a);
if ("com.apple.streaming.transportStreamTimestamp" === s) {
var o = n.subarray(a + 1), u = (1 & o[3]) << 30 | o[4] << 22 | o[5] << 14 | o[6] << 6 | o[7] >>> 2;
return u *= 4, u += 3 & o[7];
}
break;
}
}
t += 10, t += i;
} while (t < e.byteLength);
return null;
}, Lc = {
isLikelyAacData:kc,
parseId3TagSize:Tc,
parseAdtsSize:Ic,
parseType:Pc,
parseSampleRate:Ac,
parseAacTimestamp:xc
}, Dc = 9e4;
tc = function(e) {
return e * Dc;
}, ic = function(e, t) {
return e * t;
}, nc = function(e) {
return e / Dc;
}, rc = function(e, t) {
return e / t;
}, ac = function(e, t) {
return tc(rc(e, t));
}, sc = function(e, t) {
return ic(nc(e), t);
}, oc = function(e, t, i) {
return nc(i ? e :e - t);
};
var Oc = {
ONE_SECOND_IN_TS:Dc,
secondsToVideoTs:tc,
secondsToAudioTs:ic,
videoTsToSeconds:nc,
audioTsToSeconds:rc,
audioTsToVideoTs:ac,
videoTsToAudioTs:sc,
metadataTsToSeconds:oc
}, Rc = Oc.ONE_SECOND_IN_TS, Nc = uc.handleRollover, Mc = {};
Mc.ts = _c, Mc.aac = Lc;
var Uc, Bc, Fc, jc, Vc, Hc, qc = Oc.ONE_SECOND_IN_TS, Wc = 188, zc = 71, Gc = function(e, t) {
for (var i, n, r = 0, a = Wc; a < e.byteLength; ) if (e[r] !== zc || e[a] !== zc) r++, 
a++; else {
switch (i = e.subarray(r, a), n = Mc.ts.parseType(i, t.pid)) {
case "pat":
t.pid || (t.pid = Mc.ts.parsePat(i));
break;

case "pmt":
t.table || (t.table = Mc.ts.parsePmt(i));
}
if (t.pid && t.table) return;
r += Wc, a += Wc;
}
}, Xc = function(e, t, i) {
for (var n, r, a, s, o, u = 0, l = Wc, c = !1; l <= e.byteLength; ) if (e[u] !== zc || e[l] !== zc && l !== e.byteLength) u++, 
l++; else {
switch (n = e.subarray(u, l), r = Mc.ts.parseType(n, t.pid)) {
case "pes":
a = Mc.ts.parsePesType(n, t.table), s = Mc.ts.parsePayloadUnitStartIndicator(n), 
"audio" === a && s && (o = Mc.ts.parsePesTime(n), o && (o.type = "audio", i.audio.push(o), 
c = !0));
}
if (c) break;
u += Wc, l += Wc;
}
for (l = e.byteLength, u = l - Wc, c = !1; u >= 0; ) if (e[u] !== zc || e[l] !== zc && l !== e.byteLength) u--, 
l--; else {
switch (n = e.subarray(u, l), r = Mc.ts.parseType(n, t.pid)) {
case "pes":
a = Mc.ts.parsePesType(n, t.table), s = Mc.ts.parsePayloadUnitStartIndicator(n), 
"audio" === a && s && (o = Mc.ts.parsePesTime(n), o && (o.type = "audio", i.audio.push(o), 
c = !0));
}
if (c) break;
u -= Wc, l -= Wc;
}
}, Kc = function(e, t, i) {
for (var n, r, a, s, o, u, l, c, d = 0, h = Wc, p = !1, f = {
data:[],
size:0
}; h < e.byteLength; ) if (e[d] !== zc || e[h] !== zc) d++, h++; else {
switch (n = e.subarray(d, h), r = Mc.ts.parseType(n, t.pid)) {
case "pes":
if (a = Mc.ts.parsePesType(n, t.table), s = Mc.ts.parsePayloadUnitStartIndicator(n), 
"video" === a && (s && !p && (o = Mc.ts.parsePesTime(n), o && (o.type = "video", 
i.video.push(o), p = !0)), !i.firstKeyFrame)) {
if (s && 0 !== f.size) {
for (u = new Uint8Array(f.size), l = 0; f.data.length; ) c = f.data.shift(), u.set(c, l), 
l += c.byteLength;
if (Mc.ts.videoPacketContainsKeyFrame(u)) {
var m = Mc.ts.parsePesTime(u);
m ? (i.firstKeyFrame = m, i.firstKeyFrame.type = "video") :console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.");
}
f.size = 0;
}
f.data.push(n), f.size += n.byteLength;
}
}
if (p && i.firstKeyFrame) break;
d += Wc, h += Wc;
}
for (h = e.byteLength, d = h - Wc, p = !1; d >= 0; ) if (e[d] !== zc || e[h] !== zc) d--, 
h--; else {
switch (n = e.subarray(d, h), r = Mc.ts.parseType(n, t.pid)) {
case "pes":
a = Mc.ts.parsePesType(n, t.table), s = Mc.ts.parsePayloadUnitStartIndicator(n), 
"video" === a && s && (o = Mc.ts.parsePesTime(n), o && (o.type = "video", i.video.push(o), 
p = !0));
}
if (p) break;
d -= Wc, h -= Wc;
}
}, Yc = function(e, t) {
if (e.audio && e.audio.length) {
var i = t;
"undefined" == typeof i && (i = e.audio[0].dts), e.audio.forEach(function(e) {
e.dts = Nc(e.dts, i), e.pts = Nc(e.pts, i), e.dtsTime = e.dts / qc, e.ptsTime = e.pts / qc;
});
}
if (e.video && e.video.length) {
var n = t;
if ("undefined" == typeof n && (n = e.video[0].dts), e.video.forEach(function(e) {
e.dts = Nc(e.dts, n), e.pts = Nc(e.pts, n), e.dtsTime = e.dts / qc, e.ptsTime = e.pts / qc;
}), e.firstKeyFrame) {
var r = e.firstKeyFrame;
r.dts = Nc(r.dts, n), r.pts = Nc(r.pts, n), r.dtsTime = r.dts / qc, r.ptsTime = r.dts / qc;
}
}
}, Qc = function(e) {
for (var t, i = !1, n = 0, r = null, a = null, s = 0, o = 0; e.length - o >= 3; ) {
var u = Mc.aac.parseType(e, o);
switch (u) {
case "timed-metadata":
if (e.length - o < 10) {
i = !0;
break;
}
if (s = Mc.aac.parseId3TagSize(e, o), s > e.length) {
i = !0;
break;
}
null === a && (t = e.subarray(o, o + s), a = Mc.aac.parseAacTimestamp(t)), o += s;
break;

case "audio":
if (e.length - o < 7) {
i = !0;
break;
}
if (s = Mc.aac.parseAdtsSize(e, o), s > e.length) {
i = !0;
break;
}
null === r && (t = e.subarray(o, o + s), r = Mc.aac.parseSampleRate(t)), n++, o += s;
break;

default:
o++;
}
if (i) return null;
}
if (null === r || null === a) return null;
var l = qc / r, c = {
audio:[ {
type:"audio",
dts:a,
pts:a
}, {
type:"audio",
dts:a + 1024 * n * l,
pts:a + 1024 * n * l
} ]
};
return c;
}, $c = function(e) {
var t = {
pid:null,
table:null
}, i = {};
Gc(e, t);
for (var n in t.table) if (t.table.hasOwnProperty(n)) {
var r = t.table[n];
switch (r) {
case Xl.H264_STREAM_TYPE:
i.video = [], Kc(e, t, i), 0 === i.video.length && delete i.video;
break;

case Xl.ADTS_STREAM_TYPE:
i.audio = [], Xc(e, t, i), 0 === i.audio.length && delete i.audio;
}
}
return i;
}, Jc = function(e, t) {
var i, n = Mc.aac.isLikelyAacData(e);
return i = n ? Qc(e) :$c(e), i && (i.audio || i.video) ? (Yc(i, t), i) :null;
}, Zc = {
inspect:Jc,
parseAudioPes_:Xc
}, ed = function(e) {
return e >>> 0;
}, td = function(e) {
return ("00" + e.toString(16)).slice(-2);
}, id = {
toUnsigned:ed,
toHexString:td
}, nd = function(e) {
var t = "";
return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), 
t += String.fromCharCode(e[3]);
}, rd = nd, ad = id.toUnsigned, sd = function ig(e, t) {
var i, n, r, a, s, o = [];
if (!t.length) return null;
for (i = 0; i < e.byteLength; ) n = ad(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), 
r = rd(e.subarray(i + 4, i + 8)), a = n > 1 ? i + n :e.byteLength, r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) :(s = ig(e.subarray(i + 8, a), t.slice(1)), 
s.length && (o = o.concat(s)))), i = a;
return o;
}, od = sd, ud = function(e) {
var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
trackId:i.getUint32(4)
}, r = 1 & n.flags[2], a = 2 & n.flags[2], s = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0];
return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), a && (n.sampleDescriptionIndex = i.getUint32(t), 
t += 4), s && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), 
t += 4), u && (n.defaultSampleFlags = i.getUint32(t)), l && (n.durationIsEmpty = !0), 
!r && c && (n.baseDataOffsetIsMoof = !0), n;
}, ld = ud, cd = function(e) {
return {
isLeading:(12 & e[0]) >>> 2,
dependsOn:3 & e[0],
isDependedOn:(192 & e[1]) >>> 6,
hasRedundancy:(48 & e[1]) >>> 4,
paddingValue:(14 & e[1]) >>> 1,
isNonSyncSample:1 & e[1],
degradationPriority:e[2] << 8 | e[3]
};
}, dd = cd, hd = function(e) {
var t, i = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
samples:[]
}, n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = 1 & i.flags[2], a = 4 & i.flags[2], s = 1 & i.flags[1], o = 2 & i.flags[1], u = 4 & i.flags[1], l = 8 & i.flags[1], c = n.getUint32(4), d = 8;
for (r && (i.dataOffset = n.getInt32(d), d += 4), a && c && (t = {
flags:dd(e.subarray(d, d + 4))
}, d += 4, s && (t.duration = n.getUint32(d), d += 4), o && (t.size = n.getUint32(d), 
d += 4), l && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) :t.compositionTimeOffset = n.getUint32(d), 
d += 4), i.samples.push(t), c--); c--; ) t = {}, s && (t.duration = n.getUint32(d), 
d += 4), o && (t.size = n.getUint32(d), d += 4), u && (t.flags = dd(e.subarray(d, d + 4)), 
d += 4), l && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) :t.compositionTimeOffset = n.getUint32(d), 
d += 4), i.samples.push(t);
return i;
}, pd = hd, fd = id.toUnsigned, md = function(e) {
var t = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
baseMediaDecodeTime:fd(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7])
};
return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += fd(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), 
t;
}, gd = md, vd = id.toUnsigned, yd = id.toHexString;
Uc = function(e) {
var t = {}, i = od(e, [ "moov", "trak" ]);
return i.reduce(function(e, t) {
var i, n, r, a, s;
return (i = od(t, [ "tkhd" ])[0]) ? (n = i[0], r = 0 === n ? 12 :20, a = vd(i[r] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), 
(s = od(t, [ "mdia", "mdhd" ])[0]) ? (n = s[0], r = 0 === n ? 12 :20, e[a] = vd(s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3]), 
e) :null) :null;
}, t);
}, Bc = function(e, t) {
var i, n, r;
return i = od(t, [ "moof", "traf" ]), n = [].concat.apply([], i.map(function(t) {
return od(t, [ "tfhd" ]).map(function(i) {
var n, r, a;
return n = vd(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]), r = e[n] || 9e4, a = od(t, [ "tfdt" ]).map(function(e) {
var t, i;
return t = e[0], i = vd(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (i *= Math.pow(2, 32), 
i += vd(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), i;
})[0], a = "number" != typeof a || isNaN(a) ? 1 / 0 :a, a / r;
});
})), r = Math.min.apply(null, n), isFinite(r) ? r :0;
}, Fc = function(e, t) {
var i, n = od(t, [ "moof", "traf" ]), r = 0, a = 0;
if (n && n.length) {
var s = od(n[0], [ "tfhd" ])[0], o = od(n[0], [ "trun" ])[0], u = od(n[0], [ "tfdt" ])[0];
if (s) {
var l = ld(s);
i = l.trackId;
}
if (u) {
var c = gd(u);
r = c.baseMediaDecodeTime;
}
if (o) {
var d = pd(o);
d.samples && d.samples.length && (a = d.samples[0].compositionTimeOffset || 0);
}
}
var h = e[i] || 9e4;
return (r + a) / h;
}, jc = function(e) {
var t = od(e, [ "moov", "trak" ]), i = [];
return t.forEach(function(e) {
var t = od(e, [ "mdia", "hdlr" ]), n = od(e, [ "tkhd" ]);
t.forEach(function(e, t) {
var r, a, s, o = rd(e.subarray(8, 12)), u = n[t];
"vide" === o && (r = new DataView(u.buffer, u.byteOffset, u.byteLength), a = r.getUint8(0), 
s = 0 === a ? r.getUint32(12) :r.getUint32(20), i.push(s));
});
}), i;
}, Hc = function(e) {
var t = e[0], i = 0 === t ? 12 :20;
return vd(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]);
}, Vc = function(e) {
var t = od(e, [ "moov", "trak" ]), i = [];
return t.forEach(function(e) {
var t, n, r = {}, a = od(e, [ "tkhd" ])[0];
a && (t = new DataView(a.buffer, a.byteOffset, a.byteLength), n = t.getUint8(0), 
r.id = 0 === n ? t.getUint32(12) :t.getUint32(20));
var s = od(e, [ "mdia", "hdlr" ])[0];
if (s) {
var o = rd(s.subarray(8, 12));
"vide" === o ? r.type = "video" :"soun" === o ? r.type = "audio" :r.type = o;
}
var u = od(e, [ "mdia", "minf", "stbl", "stsd" ])[0];
if (u) {
var l = u.subarray(8);
r.codec = rd(l.subarray(4, 8));
var c, d, h = od(l, [ r.codec ])[0];
h && (/^[a-z]vc[1-9]$/i.test(r.codec) ? (c = h.subarray(78), d = rd(c.subarray(4, 8)), 
"avcC" === d && c.length > 11 ? (r.codec += ".", r.codec += yd(c[9]), r.codec += yd(c[10]), 
r.codec += yd(c[11])) :r.codec = "avc1.4d400d") :/^mp4[a,v]$/i.test(r.codec) ? (c = h.subarray(28), 
d = rd(c.subarray(4, 8)), "esds" === d && c.length > 20 && 0 !== c[19] ? (r.codec += "." + yd(c[19]), 
r.codec += "." + yd(c[20] >>> 2 & 63).replace(/^0/, "")) :r.codec = "mp4a.40.2") :r.codec = r.codec.toLowerCase());
}
var p = od(e, [ "mdia", "mdhd" ])[0];
p && (r.timescale = Hc(p)), i.push(r);
}), i;
};
var _d = {
findBox:od,
parseType:rd,
timescale:Uc,
startTime:Bc,
compositionStartTime:Fc,
videoTrackIds:jc,
tracks:Vc,
getTimescaleFromMediaHeader:Hc
}, bd = t(function(e, t) {
function i(e) {
return e && "object" == typeof e && "default" in e ? e["default"] :e;
}
Object.defineProperty(t, "__esModule", {
value:!0
});
var n = i(bi), r = {
mp4:/^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
webm:/^(vp0?[89]|av0?1|opus|vorbis)/,
ogg:/^(vp0?[89]|theora|flac|opus|vorbis)/,
video:/^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
audio:/^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3)/,
text:/^(stpp.ttml.im1t)/,
muxerVideo:/^(avc0?1)/,
muxerAudio:/^(mp4a)/,
muxerText:/a^/
}, a = [ "video", "audio", "text" ], s = [ "Video", "Audio", "Text" ], o = function(e) {
return e ? e.replace(/avc1\.(\d+)\.(\d+)/i, function(e, t, i) {
var n = ("00" + Number(t).toString(16)).slice(-2), r = ("00" + Number(i).toString(16)).slice(-2);
return "avc1." + n + "00" + r;
}) :e;
}, u = function(e) {
return e.map(o);
}, l = function(e) {
return e.replace(/avc1\.(\d+)\.(\d+)/i, function(e) {
return u([ e ])[0];
});
}, c = function(e) {
void 0 === e && (e = "");
var t = e.split(","), i = {}, n = [];
return t.forEach(function(e) {
e = e.trim();
var t;
a.forEach(function(n) {
var a = r[n].exec(e.toLowerCase());
if (a && !(a.length <= 1)) {
t = n;
var s = e.substring(0, a[1].length), o = e.replace(s, "");
i[n] = {
type:s,
details:o
};
}
}), t || n.push(e);
}), n.length && (i.unknown = n), i;
}, d = function(e, t) {
if (!e.mediaGroups.AUDIO || !t) return null;
var i = e.mediaGroups.AUDIO[t];
if (!i) return null;
for (var n in i) {
var r = i[n];
if (r["default"] && r.playlists) return c(r.playlists[0].attributes.CODECS);
}
return null;
}, h = function(e) {
return void 0 === e && (e = ""), r.video.test(e.trim().toLowerCase());
}, p = function(e) {
return void 0 === e && (e = ""), r.audio.test(e.trim().toLowerCase());
}, f = function(e) {
return void 0 === e && (e = ""), r.text.test(e.trim().toLowerCase());
}, m = function(e) {
if (e && "string" == typeof e) {
var t = e.toLowerCase().split(",").map(function(e) {
return o(e.trim());
}), i = "video";
1 === t.length && p(t[0]) ? i = "audio" :1 === t.length && f(t[0]) && (i = "application");
var n = "mp4";
return t.every(function(e) {
return r.mp4.test(e);
}) ? n = "mp4" :t.every(function(e) {
return r.webm.test(e);
}) ? n = "webm" :t.every(function(e) {
return r.ogg.test(e);
}) && (n = "ogg"), i + "/" + n + ';codecs="' + e + '"';
}
}, g = function(e) {
return void 0 === e && (e = ""), n.MediaSource && n.MediaSource.isTypeSupported && n.MediaSource.isTypeSupported(m(e)) || !1;
}, v = function(e) {
return void 0 === e && (e = ""), e.toLowerCase().split(",").every(function(e) {
e = e.trim();
for (var t = 0; t < s.length; t++) {
var i = s[t];
if (r["muxer" + i].test(e)) return !0;
}
return !1;
});
}, y = "mp4a.40.2", _ = "avc1.4d400d";
t.DEFAULT_AUDIO_CODEC = y, t.DEFAULT_VIDEO_CODEC = _, t.browserSupportsCodec = g, 
t.codecsFromDefault = d, t.getMimeForCodec = m, t.isAudioCodec = p, t.isTextCodec = f, 
t.isVideoCodec = h, t.mapLegacyAvcCodecs = l, t.muxerSupportsCodec = v, t.parseCodecs = c, 
t.translateLegacyCodec = o, t.translateLegacyCodecs = u;
});
e(bd);
var Td, Sd = bd.DEFAULT_AUDIO_CODEC, kd = bd.DEFAULT_VIDEO_CODEC, wd = bd.browserSupportsCodec, Ed = bd.codecsFromDefault, Cd = bd.getMimeForCodec, Id = bd.isAudioCodec, Pd = (bd.isTextCodec, 
bd.isVideoCodec), Ad = (bd.mapLegacyAvcCodecs, bd.muxerSupportsCodec), xd = bd.parseCodecs, Ld = bd.translateLegacyCodec, Dd = (bd.translateLegacyCodecs, 
Fo), Od = function(e, t, i) {
return e && i && i.responseURL && t !== i.responseURL ? i.responseURL :t;
}, Rd = ot.log, Nd = function(e, t) {
return e + "-" + t;
}, Md = function(e) {
var t = e.manifestString, i = e.customTagParsers, n = void 0 === i ? [] :i, r = e.customTagMappers, a = void 0 === r ? [] :r, s = new Yo();
return n.forEach(function(e) {
return s.addParser(e);
}), a.forEach(function(e) {
return s.addTagMapper(e);
}), s.push(t), s.end(), s.manifest;
}, Ud = function(e, t) {
[ "AUDIO", "SUBTITLES" ].forEach(function(i) {
for (var n in e.mediaGroups[i]) for (var r in e.mediaGroups[i][n]) {
var a = e.mediaGroups[i][n][r];
t(a, i, n, r);
}
});
}, Bd = function(e) {
var t = e.playlist, i = e.uri, n = e.id;
t.id = n, i && (t.uri = i), t.attributes = t.attributes || {};
}, Fd = function(e) {
for (var t = e.playlists.length; t--; ) {
var i = e.playlists[t];
Bd({
playlist:i,
id:Nd(t, i.uri)
}), i.resolvedUri = Dd(e.uri, i.uri), e.playlists[i.id] = i, e.playlists[i.uri] = i, 
i.attributes.BANDWIDTH || Rd.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
}
}, jd = function(e) {
Ud(e, function(t) {
t.uri && (t.resolvedUri = Dd(e.uri, t.uri));
});
}, Vd = function(e, t) {
var i = Nd(0, t), n = {
mediaGroups:{
AUDIO:{},
VIDEO:{},
"CLOSED-CAPTIONS":{},
SUBTITLES:{}
},
uri:Ro.location.href,
resolvedUri:Ro.location.href,
playlists:[ {
uri:t,
id:i,
resolvedUri:t,
attributes:{}
} ]
};
return n.playlists[i] = n.playlists[0], n.playlists[t] = n.playlists[0], n;
}, Hd = function(e, t) {
e.uri = t;
for (var i = 0; i < e.playlists.length; i++) if (!e.playlists[i].uri) {
var n = "placeholder-uri-" + i;
e.playlists[i].uri = n;
}
Ud(e, function(t, i, n, r) {
if (t.playlists && t.playlists.length && !t.playlists[0].uri) {
var a = "placeholder-uri-" + i + "-" + n + "-" + r, s = Nd(0, a);
t.playlists[0].uri = a, t.playlists[0].id = s, e.playlists[s] = t.playlists[0], 
e.playlists[a] = t.playlists[0];
}
}), Fd(e), jd(e);
}, qd = ot.mergeOptions, Wd = ot.EventTarget, zd = function(e, t, i) {
var n = t.slice();
i = i || 0;
for (var r = Math.min(e.length, t.length + i), a = i; r > a; a++) n[a - i] = qd(e[a], n[a - i]);
return n;
}, Gd = function(e, t) {
e.resolvedUri || (e.resolvedUri = Dd(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = Dd(t, e.key.uri)), 
e.map && !e.map.resolvedUri && (e.map.resolvedUri = Dd(t, e.map.uri));
}, Xd = function(e, t) {
var i = qd(e, {}), n = i.playlists[t.id];
if (!n) return null;
if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null;
var r = qd(n, t);
n.segments && (r.segments = zd(n.segments, t.segments, t.mediaSequence - n.mediaSequence)), 
r.segments.forEach(function(e) {
Gd(e, r.resolvedUri);
});
for (var a = 0; a < i.playlists.length; a++) i.playlists[a].id === t.id && (i.playlists[a] = r);
return i.playlists[t.id] = r, i.playlists[t.uri] = r, i;
}, Kd = function(e, t) {
var i, n = e.segments[e.segments.length - 1];
return i = t && n && n.duration ? 1e3 * n.duration :500 * (e.targetDuration || 10);
}, Yd = function(e) {
function t(t, i, n) {
var r;
if (void 0 === n && (n = {}), r = e.call(this) || this, !t) throw new Error("A non-empty playlist URL or object is required");
var a = n, s = a.withCredentials, o = void 0 === s ? !1 :s, u = a.handleManifestRedirects, l = void 0 === u ? !1 :u;
r.src = t, r.vhs_ = i, r.withCredentials = o, r.handleManifestRedirects = l;
var c = i.options_;
return r.customTagParsers = c && c.customTagParsers || [], r.customTagMappers = c && c.customTagMappers || [], 
r.state = "HAVE_NOTHING", r.on("mediaupdatetimeout", function() {
"HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA", r.request = r.vhs_.xhr({
uri:Dd(r.master.uri, r.media().uri),
withCredentials:r.withCredentials
}, function(e, t) {
return r.request ? e ? r.playlistRequestError(r.request, r.media(), "HAVE_METADATA") :void r.haveMetadata({
playlistString:r.request.responseText,
url:r.media().uri,
id:r.media().id
}) :void 0;
}));
}), r;
}
xo(t, e);
var i = t.prototype;
return i.playlistRequestError = function(e, t, i) {
var n = t.uri, r = t.id;
this.request = null, i && (this.state = i), this.error = {
playlist:this.master.playlists[r],
status:e.status,
message:"HLS playlist request error at URL: " + n + ".",
responseText:e.responseText,
code:e.status >= 500 ? 4 :2
}, this.trigger("error");
}, i.haveMetadata = function(e) {
var t = this, i = e.playlistString, n = e.playlistObject, r = e.url, a = e.id;
this.request = null, this.state = "HAVE_METADATA";
var s = n || Md({
manifestString:i,
customTagParsers:this.customTagParsers,
customTagMappers:this.customTagMappers
});
s.lastRequest = Date.now(), Bd({
playlist:s,
uri:r,
id:a
});
var o = Xd(this.master, s);
this.targetDuration = s.targetDuration, o ? (this.master = o, this.media_ = this.master.playlists[a]) :this.trigger("playlistunchanged"), 
this.media().endList || (Ro.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = Ro.setTimeout(function() {
t.trigger("mediaupdatetimeout");
}, Kd(this.media(), !!o))), this.trigger("loadedplaylist");
}, i.dispose = function() {
this.trigger("dispose"), this.stopRequest(), Ro.clearTimeout(this.mediaUpdateTimeout), 
Ro.clearTimeout(this.finalRenditionTimeout), this.off();
}, i.stopRequest = function() {
if (this.request) {
var e = this.request;
this.request = null, e.onreadystatechange = null, e.abort();
}
}, i.media = function(e, t) {
var i = this;
if (!e) return this.media_;
if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
if ("string" == typeof e) {
if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
e = this.master.playlists[e];
}
if (Ro.clearTimeout(this.finalRenditionTimeout), t) {
var n = e.targetDuration / 2 * 1e3 || 5e3;
return void (this.finalRenditionTimeout = Ro.setTimeout(this.media.bind(this, e, !1), n));
}
var r = this.state, a = !this.media_ || e.id !== this.media_.id;
if (this.master.playlists[e.id].endList || e.endList && e.segments.length) return this.request && (this.request.onreadystatechange = null, 
this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = e, 
void (a && (this.trigger("mediachanging"), "HAVE_MASTER" === r ? this.trigger("loadedmetadata") :this.trigger("mediachange")));
if (a) {
if (this.state = "SWITCHING_MEDIA", this.request) {
if (e.resolvedUri === this.request.url) return;
this.request.onreadystatechange = null, this.request.abort(), this.request = null;
}
this.media_ && this.trigger("mediachanging"), this.request = this.vhs_.xhr({
uri:e.resolvedUri,
withCredentials:this.withCredentials
}, function(t, n) {
if (i.request) {
if (e.lastRequest = Date.now(), e.resolvedUri = Od(i.handleManifestRedirects, e.resolvedUri, n), 
t) return i.playlistRequestError(i.request, e, r);
i.haveMetadata({
playlistString:n.responseText,
url:e.uri,
id:e.id
}), "HAVE_MASTER" === r ? i.trigger("loadedmetadata") :i.trigger("mediachange");
}
});
}
}, i.pause = function() {
this.stopRequest(), Ro.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), 
"SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" :this.state = "HAVE_MASTER" :"HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA");
}, i.load = function(e) {
var t = this;
Ro.clearTimeout(this.mediaUpdateTimeout);
var i = this.media();
if (e) {
var n = i ? i.targetDuration / 2 * 1e3 :5e3;
return void (this.mediaUpdateTimeout = Ro.setTimeout(function() {
return t.load();
}, n));
}
return this.started ? void (i && !i.endList ? this.trigger("mediaupdatetimeout") :this.trigger("loadedplaylist")) :void this.start();
}, i.start = function() {
var e = this;
return this.started = !0, "object" == typeof this.src ? (this.src.uri || (this.src.uri = Ro.location.href), 
this.src.resolvedUri = this.src.uri, void setTimeout(function() {
e.setupInitialPlaylist(e.src);
}, 0)) :void (this.request = this.vhs_.xhr({
uri:this.src,
withCredentials:this.withCredentials
}, function(t, i) {
if (e.request) {
if (e.request = null, t) return e.error = {
status:i.status,
message:"HLS playlist request error at URL: " + e.src + ".",
responseText:i.responseText,
code:2
}, "HAVE_NOTHING" === e.state && (e.started = !1), e.trigger("error");
e.src = Od(e.handleManifestRedirects, e.src, i);
var n = Md({
manifestString:i.responseText,
customTagParsers:e.customTagParsers,
customTagMappers:e.customTagMappers
});
e.setupInitialPlaylist(n);
}
}));
}, i.srcUri = function() {
return "string" == typeof this.src ? this.src :this.src.uri;
}, i.setupInitialPlaylist = function(e) {
if (this.state = "HAVE_MASTER", e.playlists) return this.master = e, Hd(this.master, this.srcUri()), 
e.playlists.forEach(function(e) {
e.segments && e.segments.forEach(function(t) {
Gd(t, e.resolvedUri);
});
}), this.trigger("loadedplaylist"), void (this.request || this.media(this.master.playlists[0]));
var t = this.srcUri() || Ro.location.href;
this.master = Vd(e, t), this.haveMetadata({
playlistObject:e,
url:t,
id:this.master.playlists[0].id
}), this.trigger("loadedmetadata");
}, t;
}(Wd), Qd = 1 / 30, $d = 3 * Qd, Jd = function(e, t) {
var i, n = [];
if (e && e.length) for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && n.push([ e.start(i), e.end(i) ]);
return ot.createTimeRanges(n);
}, Zd = function(e, t) {
return Jd(e, function(e, i) {
return t >= e - $d && i + $d >= t;
});
}, eh = function(e, t) {
return Jd(e, function(e) {
return e - Qd >= t;
});
}, th = function(e) {
if (e.length < 2) return ot.createTimeRanges();
for (var t = [], i = 1; i < e.length; i++) {
var n = e.end(i - 1), r = e.start(i);
t.push([ n, r ]);
}
return ot.createTimeRanges(t);
}, ih = function(e, t) {
var i = null, n = null, r = 0, a = [], s = [];
if (!(e && e.length && t && t.length)) return ot.createTimeRange();
for (var o = e.length; o--; ) a.push({
time:e.start(o),
type:"start"
}), a.push({
time:e.end(o),
type:"end"
});
for (o = t.length; o--; ) a.push({
time:t.start(o),
type:"start"
}), a.push({
time:t.end(o),
type:"end"
});
for (a.sort(function(e, t) {
return e.time - t.time;
}), o = 0; o < a.length; o++) "start" === a[o].type ? (r++, 2 === r && (i = a[o].time)) :"end" === a[o].type && (r--, 
1 === r && (n = a[o].time)), null !== i && null !== n && (s.push([ i, n ]), i = null, 
n = null);
return ot.createTimeRanges(s);
}, nh = function(e) {
var t = [];
if (!e || !e.length) return "";
for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
return t.join(", ");
}, rh = function(e, t, i) {
void 0 === i && (i = 1);
var n = e.length ? e.end(e.length - 1) :0;
return (n - t) / i;
}, ah = function(e) {
for (var t = [], i = 0; i < e.length; i++) t.push({
start:e.start(i),
end:e.end(i)
});
return t;
}, sh = function(e, t) {
if (e === t) return !1;
if (!e && t || !t && e) return !0;
if (e.length !== t.length) return !0;
for (var i = 0; i < e.length; i++) if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0;
return !1;
}, oh = ot.createTimeRange, uh = function(e, t) {
var i = 0, n = t - e.mediaSequence, r = e.segments[n];
if (r) {
if ("undefined" != typeof r.start) return {
result:r.start,
precise:!0
};
if ("undefined" != typeof r.end) return {
result:r.end - r.duration,
precise:!0
};
}
for (;n--; ) {
if (r = e.segments[n], "undefined" != typeof r.end) return {
result:i + r.end,
precise:!0
};
if (i += r.duration, "undefined" != typeof r.start) return {
result:i + r.start,
precise:!0
};
}
return {
result:i,
precise:!1
};
}, lh = function(e, t) {
for (var i, n = 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
if (i = e.segments[r], "undefined" != typeof i.start) return {
result:i.start - n,
precise:!0
};
if (n += i.duration, "undefined" != typeof i.end) return {
result:i.end - n,
precise:!0
};
}
return {
result:-1,
precise:!1
};
}, ch = function(e, t, i) {
if ("undefined" == typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence) return 0;
var n = uh(e, t);
if (n.precise) return n.result;
var r = lh(e, t);
return r.precise ? r.result :n.result + i;
}, dh = function(e, t, i) {
if (!e) return 0;
if ("number" != typeof i && (i = 0), "undefined" == typeof t) {
if (e.totalDuration) return e.totalDuration;
if (!e.endList) return Ro.Infinity;
}
return ch(e, t, i);
}, hh = function(e, t, i) {
var n = 0;
if (t > i) {
var r = [ i, t ];
t = r[0], i = r[1];
}
if (0 > t) {
for (var a = t; a < Math.min(0, i); a++) n += e.targetDuration;
t = 0;
}
for (var s = t; i > s; s++) n += e.segments[s].duration;
return n;
}, ph = function(e, t) {
if (!e.segments.length) return 0;
var i = e.segments.length, n = e.segments[i - 1].duration || e.targetDuration, r = "number" == typeof t ? t :n + 2 * e.targetDuration;
if (0 === r) return i;
for (var a = 0; i-- && (a += e.segments[i].duration, !(a >= r)); ) ;
return Math.max(0, i);
}, fh = function(e, t, i, n) {
if (!e || !e.segments) return null;
if (e.endList) return dh(e);
if (null === t) return null;
t = t || 0;
var r = i ? ph(e, n) :e.segments.length;
return ch(e, e.mediaSequence + r, t);
}, mh = function(e, t, i) {
var n = !0, r = t || 0, a = fh(e, t, n, i);
return null === a ? oh() :oh(r, a);
}, gh = function(e, t, i, n) {
var r, a, s = e.segments.length, o = t - n;
if (0 > o) {
if (i > 0) for (r = i - 1; r >= 0; r--) if (a = e.segments[r], o += a.duration + Qd, 
o > 0) return {
mediaIndex:r,
startTime:n - hh(e, i, r)
};
return {
mediaIndex:0,
startTime:t
};
}
if (0 > i) {
for (r = i; 0 > r; r++) if (o -= e.targetDuration, 0 > o) return {
mediaIndex:0,
startTime:t
};
i = 0;
}
for (r = i; s > r; r++) if (a = e.segments[r], o -= a.duration + Qd, 0 > o) return {
mediaIndex:r,
startTime:n + hh(e, i, r)
};
return {
mediaIndex:s - 1,
startTime:t
};
}, vh = function(e) {
return e.excludeUntil && e.excludeUntil > Date.now();
}, yh = function(e) {
return e.excludeUntil && e.excludeUntil === 1 / 0;
}, _h = function(e) {
var t = vh(e);
return !e.disabled && !t;
}, bh = function(e) {
return e.disabled;
}, Th = function(e) {
for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
return !1;
}, Sh = function(e, t) {
return t.attributes && t.attributes[e];
}, kh = function(e, t, i, n) {
if (void 0 === n && (n = 0), !Sh("BANDWIDTH", i)) return NaN;
var r = e * i.attributes.BANDWIDTH;
return (r - 8 * n) / t;
}, wh = function(e, t) {
if (1 === e.playlists.length) return !0;
var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
return 0 === e.playlists.filter(function(e) {
return _h(e) ? (e.attributes.BANDWIDTH || 0) < i :!1;
}).length;
}, Eh = {
duration:dh,
seekable:mh,
safeLiveIndex:ph,
getMediaInfoForTime:gh,
isEnabled:_h,
isDisabled:bh,
isBlacklisted:vh,
isIncompatible:yh,
playlistEnd:fh,
isAes:Th,
hasAttribute:Sh,
estimateSegmentRequestTime:kh,
isLowestEnabledRendition:wh
}, Ch = ot.xhr, Ih = ot.mergeOptions, Ph = function(e, t, i, n) {
var r = "arraybuffer" === e.responseType ? e.response :e.responseText;
!t && r && (e.responseTime = Date.now(), e.roundTripTime = e.responseTime - e.requestTime, 
e.bytesReceived = r.byteLength || r.length, e.bandwidth || (e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3))), 
i.headers && (e.responseHeaders = i.headers), t && "ETIMEDOUT" === t.code && (e.timedout = !0), 
t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode || (t = new Error("XHR Failed with a response of: " + (e && (r || e.responseText)))), 
n(t, e);
}, Ah = function() {
var e = function t(e, i) {
e = Ih({
timeout:45e3
}, e);
var n = t.beforeRequest || ot.Vhs.xhr.beforeRequest;
if (n && "function" == typeof n) {
var r = n(e);
r && (e = r);
}
var a = Ch(e, function(e, t) {
return Ph(a, e, t, i);
}), s = a.abort;
return a.abort = function() {
return a.aborted = !0, s.apply(a, arguments);
}, a.uri = e.uri, a.requestTime = Date.now(), a;
};
return e;
}, xh = function(e) {
var t = e.offset + e.length - 1, i = e.offset;
return "bytes=" + i + "-" + t;
}, Lh = function(e) {
var t = {};
return e.byterange && (t.Range = xh(e.byterange)), t;
}, Dh = function(e, t) {
return e.start(t) + "-" + e.end(t);
}, Oh = function(e, t) {
var i = e.toString(16);
return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " :"");
}, Rh = function(e) {
return e >= 32 && 126 > e ? String.fromCharCode(e) :".";
}, Nh = function(e) {
var t = {};
return Object.keys(e).forEach(function(i) {
var n = e[i];
ArrayBuffer.isView(n) ? t[i] = {
bytes:n.buffer,
byteOffset:n.byteOffset,
byteLength:n.byteLength
} :t[i] = n;
}), t;
}, Mh = function(e) {
var t = e.byterange || {
length:1 / 0,
offset:0
};
return [ t.length, t.offset, e.resolvedUri ].join(",");
}, Uh = function(e) {
return e.resolvedUri;
}, Bh = function(e) {
for (var t, i, n = Array.prototype.slice.call(e), r = 16, a = "", s = 0; s < n.length / r; s++) t = n.slice(s * r, s * r + r).map(Oh).join(""), 
i = n.slice(s * r, s * r + r).map(Rh).join(""), a += t + " " + i + "\n";
return a;
}, Fh = function(e) {
var t = e.bytes;
return Bh(t);
}, jh = function(e) {
var t, i = "";
for (t = 0; t < e.length; t++) i += Dh(e, t) + " ";
return i;
}, Vh = Object.freeze({
__proto__:null,
createTransferableMessage:Nh,
initSegmentId:Mh,
segmentKeyId:Uh,
hexDump:Bh,
tagDump:Fh,
textRanges:jh
}), Hh = .25, qh = function(e, t) {
if (!t.dateTimeObject) return null;
var i = t.videoTimingInfo.transmuxerPrependedSeconds, n = t.videoTimingInfo.transmuxedPresentationStart, r = n + i, a = e - r;
return new Date(t.dateTimeObject.getTime() + 1e3 * a);
}, Wh = function(e) {
return e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds;
}, zh = function(e, t) {
var i;
try {
i = new Date(e);
} catch (n) {
return null;
}
if (!t || !t.segments || 0 === t.segments.length) return null;
var r = t.segments[0];
if (i < r.dateTimeObject) return null;
for (var a = 0; a < t.segments.length - 1; a++) {
r = t.segments[a];
var s = t.segments[a + 1].dateTimeObject;
if (s > i) break;
}
var o = t.segments[t.segments.length - 1], u = o.dateTimeObject, l = o.videoTimingInfo ? Wh(o.videoTimingInfo) :o.duration + o.duration * Hh, c = new Date(u.getTime() + 1e3 * l);
return i > c ? null :(i > u && (r = o), {
segment:r,
estimatedStart:r.videoTimingInfo ? r.videoTimingInfo.transmuxedPresentationStart :Eh.duration(t, t.mediaSequence + t.segments.indexOf(r)),
type:r.videoTimingInfo ? "accurate" :"estimate"
});
}, Gh = function(e, t) {
if (!t || !t.segments || 0 === t.segments.length) return null;
for (var i, n = 0, r = 0; r < t.segments.length && (i = t.segments[r], n = i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationEnd :n + i.duration, 
!(n >= e)); r++) ;
var a = t.segments[t.segments.length - 1];
if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e) return null;
if (e > n) {
if (e > n + a.duration * Hh) return null;
i = a;
}
return {
segment:i,
estimatedStart:i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationStart :n - i.duration,
type:i.videoTimingInfo ? "accurate" :"estimate"
};
}, Xh = function(e, t) {
var i, n;
try {
i = new Date(e), n = new Date(t);
} catch (r) {}
var a = i.getTime(), s = n.getTime();
return (s - a) / 1e3;
}, Kh = function(e) {
if (!e.segments || 0 === e.segments.length) return !1;
for (var t = 0; t < e.segments.length; t++) {
var i = e.segments[t];
if (!i.dateTimeObject) return !1;
}
return !0;
}, Yh = function(e) {
var t = e.playlist, i = e.time, n = void 0 === i ? void 0 :i, r = e.callback;
if (!r) throw new Error("getProgramTime: callback must be provided");
if (!t || void 0 === n) return r({
message:"getProgramTime: playlist and time must be provided"
});
var a = Gh(n, t);
if (!a) return r({
message:"valid programTime was not found"
});
if ("estimate" === a.type) return r({
message:"Accurate programTime could not be determined. Please seek to e.seekTime and try again",
seekTime:a.estimatedStart
});
var s = {
mediaSeconds:n
}, o = qh(n, a.segment);
return o && (s.programDateTime = o.toISOString()), r(null, s);
}, Qh = function ng(e) {
var t = e.programTime, i = e.playlist, n = e.retryCount, r = void 0 === n ? 2 :n, a = e.seekTo, s = e.pauseAfterSeek, o = void 0 === s ? !0 :s, u = e.tech, l = e.callback;
if (!l) throw new Error("seekToProgramTime: callback must be provided");
if ("undefined" == typeof t || !i || !a) return l({
message:"seekToProgramTime: programTime, seekTo and playlist must be provided"
});
if (!i.endList && !u.hasStarted_) return l({
message:"player must be playing a live stream to start buffering"
});
if (!Kh(i)) return l({
message:"programDateTime tags must be provided in the manifest " + i.resolvedUri
});
var c = zh(t, i);
if (!c) return l({
message:t + " was not found in the stream"
});
var d = c.segment, h = Xh(d.dateTimeObject, t);
if ("estimate" === c.type) return 0 === r ? l({
message:t + " is not buffered yet. Try again"
}) :(a(c.estimatedStart + h), void u.one("seeked", function() {
ng({
programTime:t,
playlist:i,
retryCount:r - 1,
seekTo:a,
pauseAfterSeek:o,
tech:u,
callback:l
});
}));
var p = d.start + h, f = function() {
return l(null, u.currentTime());
};
u.one("seeked", f), o && u.pause(), a(p);
}, $h = function(e, t) {
return 4 === e.readyState ? t() :void 0;
}, Jh = function(e, t, i) {
var n, r = [], a = !1, s = function(e, t, n, r) {
return t.abort(), a = !0, i(e, t, n, r);
}, o = function(e, t) {
if (!a) {
if (e) return s(e, t, "", r);
var i = t.responseText.substring(r && r.byteLength || 0, t.responseText.length);
if (r = Wl(r, zl(i, !0)), n = n || Vl(r), r.length < 10 || n && r.length < n + 2) return $h(t, function() {
return s(e, t, "", r);
});
var o = jl(r);
return "ts" === o && r.length < 188 ? $h(t, function() {
return s(e, t, "", r);
}) :!o && r.length < 376 ? $h(t, function() {
return s(e, t, "", r);
}) :s(null, t, o, r);
}
}, u = {
uri:e,
beforeSend:function(e) {
e.overrideMimeType("text/plain; charset=x-user-defined"), e.addEventListener("progress", function(t) {
t.total, t.loaded;
return Ph(e, null, {
statusCode:e.status
}, o);
});
}
}, l = t(u, function(e, t) {
return Ph(l, e, t, o);
});
return l;
}, Zh = ot.EventTarget, ep = ot.mergeOptions, tp = function(e) {
var t = e.masterXml, i = e.srcUrl, n = e.clientOffset, r = e.sidxMapping, a = Ol(t, {
manifestUri:i,
clientOffset:n,
sidxMapping:r
});
return Hd(a, i), a;
}, ip = function(e) {
var t = e.byterange.offset + e.byterange.length - 1;
return e.uri + "-" + e.byterange.offset + "-" + t;
}, np = function(e, t, i) {
for (var n = !0, r = ep(e, {
duration:t.duration,
minimumUpdatePeriod:t.minimumUpdatePeriod
}), a = 0; a < t.playlists.length; a++) {
var s = t.playlists[a];
if (s.sidx) {
var o = ip(s.sidx);
i && i[o] && Nl(s, i[o].sidx, s.sidx.resolvedUri);
}
var u = Xd(r, s);
u && (r = u, n = !1);
}
return Ud(t, function(e, t, i, a) {
if (e.playlists && e.playlists.length) {
var s = e.playlists[0].id, o = Xd(r, e.playlists[0]);
o && (r = o, r.mediaGroups[t][i][a].playlists[0] = r.playlists[s], n = !1);
}
}), t.minimumUpdatePeriod !== e.minimumUpdatePeriod && (n = !1), n ? null :r;
}, rp = function(e, t) {
var i = Boolean(!e.map && !t.map), n = i || Boolean(e.map && t.map && e.map.byterange.offset === t.map.byterange.offset && e.map.byterange.length === t.map.byterange.length);
return n && e.uri === t.uri && e.byterange.offset === t.byterange.offset && e.byterange.length === t.byterange.length;
}, ap = function(e, t) {
var i = {};
for (var n in e) {
var r = e[n], a = r.sidx;
if (a) {
var s = ip(a);
if (!t[s]) break;
var o = t[s].sidxInfo;
rp(o, a) && (i[s] = t[s]);
}
}
return i;
}, sp = function(e, t) {
var i = ap(e.playlists, t), n = i;
return Ud(e, function(e, i, r, a) {
if (e.playlists && e.playlists.length) {
var s = e.playlists;
n = ep(n, ap(s, t));
}
}), n;
}, op = function(e) {
function t(t, i, n, r) {
var a;
void 0 === n && (n = {}), a = e.call(this) || this, a.masterPlaylistLoader_ = r || Ao(a), 
r || (a.isMaster_ = !0);
var s = n, o = s.withCredentials, u = void 0 === o ? !1 :o, l = s.handleManifestRedirects, c = void 0 === l ? !1 :l;
if (a.vhs_ = i, a.withCredentials = u, a.handleManifestRedirects = c, !t) throw new Error("A non-empty playlist URL or object is required");
return a.on("minimumUpdatePeriod", function() {
a.refreshXml_();
}), a.on("mediaupdatetimeout", function() {
a.refreshMedia_(a.media().id);
}), a.state = "HAVE_NOTHING", a.loadedPlaylists_ = {}, a.isMaster_ ? (a.masterPlaylistLoader_.srcUrl = t, 
a.masterPlaylistLoader_.sidxMapping_ = {}) :a.childPlaylist_ = t, a;
}
xo(t, e);
var i = t.prototype;
return i.requestErrored_ = function(e, t, i) {
return this.request ? (this.request = null, e ? (this.error = "object" != typeof e || e instanceof Error ? {
status:t.status,
message:"DASH request error at URL: " + t.uri,
response:t.response,
code:2
} :e, i && (this.state = i), this.trigger("error"), !0) :void 0) :!0;
}, i.addSidxSegments_ = function(e, t, i) {
var n = this, r = e.sidx && ip(e.sidx);
if (!e.sidx || !r || this.masterPlaylistLoader_.sidxMapping_[r]) return void (this.mediaRequest_ = Ro.setTimeout(function() {
return i(!1);
}, 0));
var a = Od(this.handleManifestRedirects, e.sidx.resolvedUri), s = this.masterPlaylistLoader_.sidxMapping_;
s[r] = {
sidxInfo:e.sidx
};
var o = function(a, o) {
if (!n.requestErrored_(a, o, t)) {
var u = Bl(Gl(o.response).subarray(8));
return s[r].sidx = u, Nl(e, u, e.sidx.resolvedUri), i(!0);
}
};
this.request = Jh(a, this.vhs_.xhr, function(t, i, r, s) {
if (t) return o(t, i);
if (!r || "mp4" !== r) return o({
status:i.status,
message:"Unsupported " + (r || "unknown") + " container type for sidx segment at URL: " + a,
response:"",
playlist:e,
internal:!0,
blacklistDuration:1 / 0,
code:2
}, i);
var u = e.sidx.byterange, l = u.offset, c = u.length;
return s.length >= c + l ? o(t, {
response:s.subarray(l, l + c),
status:i.status,
uri:i.uri
}) :void (n.request = n.vhs_.xhr({
uri:a,
responseType:"arraybuffer",
headers:Lh({
byterange:e.sidx.byterange
})
}, o));
});
}, i.dispose = function() {
this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, Ro.clearTimeout(this.minimumUpdatePeriodTimeout_), 
Ro.clearTimeout(this.mediaRequest_), Ro.clearTimeout(this.mediaUpdateTimeout), this.off();
}, i.hasPendingRequest = function() {
return this.request || this.mediaRequest_;
}, i.stopRequest = function() {
if (this.request) {
var e = this.request;
this.request = null, e.onreadystatechange = null, e.abort();
}
}, i.media = function(e) {
var t = this;
if (!e) return this.media_;
if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
var i = this.state;
if ("string" == typeof e) {
if (!this.masterPlaylistLoader_.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
e = this.masterPlaylistLoader_.master.playlists[e];
}
var n = !this.media_ || e.id !== this.media_.id;
return n && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList ? (this.state = "HAVE_METADATA", 
this.media_ = e, void (n && (this.trigger("mediachanging"), this.trigger("mediachange")))) :void (n && (this.media_ && this.trigger("mediachanging"), 
this.addSidxSegments_(e, i, function(n) {
t.haveMetadata({
startingState:i,
playlist:e
});
})));
}, i.haveMetadata = function(e) {
var t = e.startingState, i = e.playlist;
this.state = "HAVE_METADATA", this.loadedPlaylists_[i.id] = i, this.mediaRequest_ = null, 
this.refreshMedia_(i.id), "HAVE_MASTER" === t ? this.trigger("loadedmetadata") :this.trigger("mediachange");
}, i.pause = function() {
this.stopRequest(), Ro.clearTimeout(this.mediaUpdateTimeout), Ro.clearTimeout(this.minimumUpdatePeriodTimeout_), 
"HAVE_NOTHING" === this.state && (this.started = !1);
}, i.load = function(e) {
var t = this;
Ro.clearTimeout(this.mediaUpdateTimeout), Ro.clearTimeout(this.minimumUpdatePeriodTimeout_);
var i = this.media();
if (e) {
var n = i ? i.targetDuration / 2 * 1e3 :5e3;
return void (this.mediaUpdateTimeout = Ro.setTimeout(function() {
return t.load();
}, n));
}
return this.started ? void (i && !i.endList ? this.trigger("mediaupdatetimeout") :this.trigger("loadedplaylist")) :void this.start();
}, i.start = function() {
var e = this;
return this.started = !0, this.isMaster_ ? void this.requestMaster_(function(t, i) {
e.haveMaster_(), e.hasPendingRequest() || e.media_ || e.media(e.masterPlaylistLoader_.master.playlists[0]);
}) :void (this.mediaRequest_ = Ro.setTimeout(function() {
return e.haveMaster_();
}, 0));
}, i.requestMaster_ = function(e) {
var t = this;
this.request = this.vhs_.xhr({
uri:this.masterPlaylistLoader_.srcUrl,
withCredentials:this.withCredentials
}, function(i, n) {
if (t.requestErrored_(i, n)) return void ("HAVE_NOTHING" === t.state && (t.started = !1));
var r = n.responseText !== t.masterPlaylistLoader_.masterXml_;
return t.masterPlaylistLoader_.masterXml_ = n.responseText, n.responseHeaders && n.responseHeaders.date ? t.masterLoaded_ = Date.parse(n.responseHeaders.date) :t.masterLoaded_ = Date.now(), 
t.masterPlaylistLoader_.srcUrl = Od(t.handleManifestRedirects, t.masterPlaylistLoader_.srcUrl, n), 
r ? (t.handleMaster_(), void t.syncClientServerClock_(function() {
return e(n, r);
})) :e(n, r);
});
}, i.syncClientServerClock_ = function(e) {
var t = this, i = Rl(this.masterPlaylistLoader_.masterXml_);
return null === i ? (this.masterPlaylistLoader_.clientOffset_ = this.masterLoaded_ - Date.now(), 
e()) :"DIRECT" === i.method ? (this.masterPlaylistLoader_.clientOffset_ = i.value - Date.now(), 
e()) :void (this.request = this.vhs_.xhr({
uri:Dd(this.masterPlaylistLoader_.srcUrl, i.value),
method:i.method,
withCredentials:this.withCredentials
}, function(n, r) {
if (t.request) {
if (n) return t.masterPlaylistLoader_.clientOffset_ = t.masterLoaded_ - Date.now(), 
e();
var a;
a = "HEAD" === i.method ? r.responseHeaders && r.responseHeaders.date ? Date.parse(r.responseHeaders.date) :t.masterLoaded_ :Date.parse(r.responseText), 
t.masterPlaylistLoader_.clientOffset_ = a - Date.now(), e();
}
}));
}, i.haveMaster_ = function() {
this.state = "HAVE_MASTER", this.isMaster_ ? this.trigger("loadedplaylist") :this.media_ || this.media(this.childPlaylist_);
}, i.handleMaster_ = function() {
this.mediaRequest_ = null;
var e = tp({
masterXml:this.masterPlaylistLoader_.masterXml_,
srcUrl:this.masterPlaylistLoader_.srcUrl,
clientOffset:this.masterPlaylistLoader_.clientOffset_,
sidxMapping:this.masterPlaylistLoader_.sidxMapping_
}), t = this.masterPlaylistLoader_.master;
t && (e = np(t, e, this.masterPlaylistLoader_.sidxMapping_)), this.masterPlaylistLoader_.master = e ? e :t;
var i = this.masterPlaylistLoader_.master.locations && this.masterPlaylistLoader_.master.locations[0];
return i && i !== this.masterPlaylistLoader_.srcUrl && (this.masterPlaylistLoader_.srcUrl = i), 
(!t || e && t.minimumUpdatePeriod !== e.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), 
Boolean(e);
}, i.updateMinimumUpdatePeriodTimeout_ = function() {
var e = this;
Ro.clearTimeout(this.minimumUpdatePeriodTimeout_);
var t = function n(t) {
e.minimumUpdatePeriodTimeout_ = Ro.setTimeout(function() {
e.trigger("minimumUpdatePeriod"), n(t);
}, t);
}, i = this.masterPlaylistLoader_.master && this.masterPlaylistLoader_.master.minimumUpdatePeriod;
i > 0 ? t(i) :0 === i && (this.media() ? t(1e3 * this.media().targetDuration) :this.one("loadedplaylist", function() {
t(1e3 * e.media().targetDuration);
}));
}, i.refreshXml_ = function() {
var e = this;
this.requestMaster_(function(t, i) {
i && (e.media_ && (e.media_ = e.masterPlaylistLoader_.master.playlists[e.media_.id]), 
e.masterPlaylistLoader_.sidxMapping_ = sp(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.sidxMapping_), 
e.addSidxSegments_(e.media(), e.state, function(t) {
e.refreshMedia_(e.media().id);
}));
});
}, i.refreshMedia_ = function(e) {
var t = this;
if (!e) throw new Error("refreshMedia_ must take a media id");
this.media_ && this.isMaster_ && this.handleMaster_();
var i = this.masterPlaylistLoader_.master.playlists, n = !this.media_ || this.media_ !== i[e];
n ? this.media_ = i[e] :this.trigger("playlistunchanged"), this.media().endList || (this.mediaUpdateTimeout = Ro.setTimeout(function() {
t.trigger("mediaupdatetimeout");
}, Kd(this.media(), Boolean(n)))), this.trigger("loadedplaylist");
}, t;
}(Zh), up = {
GOAL_BUFFER_LENGTH:30,
MAX_GOAL_BUFFER_LENGTH:60,
BACK_BUFFER_LENGTH:30,
GOAL_BUFFER_LENGTH_RATE:1,
INITIAL_BANDWIDTH:4194304,
BANDWIDTH_VARIANCE:1.2,
BUFFER_LOW_WATER_LINE:0,
MAX_BUFFER_LOW_WATER_LINE:30,
EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE:16,
BUFFER_LOW_WATER_LINE_RATE:1,
BUFFER_HIGH_WATER_LINE:30
}, lp = function(e) {
for (var t = new Uint8Array(new ArrayBuffer(e.length)), i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
return t.buffer;
}, cp = [], dp = function(e, t, i) {
var n = e.data.segment, r = n.type, a = n.initSegment, s = n.captions, o = n.captionStreams, u = n.metadata, l = n.videoFrameDtsTime, c = n.videoFramePtsTime;
t.buffer.push({
captions:s,
captionStreams:o,
metadata:u
});
var d = e.data.segment.boxes || {
data:e.data.segment.data
}, h = {
type:r,
data:new Uint8Array(d.data, d.data.byteOffset, d.data.byteLength),
initSegment:new Uint8Array(a.data, a.byteOffset, a.byteLength)
};
"undefined" != typeof l && (h.videoFrameDtsTime = l), "undefined" != typeof c && (h.videoFramePtsTime = c), 
i(h);
}, hp = function(e) {
var t = e.transmuxedData, i = e.callback;
t.buffer = [], i(t);
}, pp = function(e, t) {
t.gopInfo = e.data.gopInfo;
}, fp = function(e) {
var t = e.transmuxer, i = e.bytes, n = e.audioAppendStart, r = e.gopsToAlignWith, a = e.isPartial, s = e.remux, o = e.onData, u = e.onTrackInfo, l = e.onAudioTimingInfo, c = e.onVideoTimingInfo, d = e.onVideoSegmentTimingInfo, h = e.onAudioSegmentTimingInfo, p = e.onId3, f = e.onCaptions, m = e.onDone, g = {
isPartial:a,
buffer:[]
}, v = function(e) {
Td && ("data" === e.data.action && dp(e, g, o), "trackinfo" === e.data.action && u(e.data.trackInfo), 
"gopInfo" === e.data.action && pp(e, g), "audioTimingInfo" === e.data.action && l(e.data.audioTimingInfo), 
"videoTimingInfo" === e.data.action && c(e.data.videoTimingInfo), "videoSegmentTimingInfo" === e.data.action && d(e.data.videoSegmentTimingInfo), 
"audioSegmentTimingInfo" === e.data.action && h(e.data.audioSegmentTimingInfo), 
"id3Frame" === e.data.action && p([ e.data.id3Frame ], e.data.id3Frame.dispatchType), 
"caption" === e.data.action && f(e.data.caption), "transmuxed" === e.data.type && (t.onmessage = null, 
hp({
transmuxedData:g,
callback:m
}), mp()));
};
if (t.onmessage = v, n && t.postMessage({
action:"setAudioAppendStart",
appendStart:n
}), Array.isArray(r) && t.postMessage({
action:"alignGopsWith",
gopsToAlignWith:r
}), "undefined" != typeof s && t.postMessage({
action:"setRemux",
remux:s
}), i.byteLength) {
var y = i instanceof ArrayBuffer ? i :i.buffer, _ = i instanceof ArrayBuffer ? 0 :i.byteOffset;
t.postMessage({
action:"push",
data:y,
byteOffset:_,
byteLength:i.byteLength
}, [ y ]);
}
t.postMessage({
action:a ? "partialFlush" :"flush"
});
}, mp = function() {
Td = null, cp.length && (Td = cp.shift(), "function" == typeof Td ? Td() :fp(Td));
}, gp = function(e, t) {
e.postMessage({
action:t
}), mp();
}, vp = function(e, t) {
return Td ? void cp.push(gp.bind(null, t, e)) :(Td = e, void gp(t, e));
}, yp = function(e) {
vp("reset", e);
}, _p = function(e) {
vp("endTimeline", e);
}, bp = function(e) {
return Td ? void cp.push(e) :(Td = e, void fp(e));
}, Tp = function() {
Td = null, cp.length = 0;
}, Sp = {
reset:yp,
dispose:Tp,
endTimeline:_p,
transmux:bp
}, kp = function(e, t) {
var i = Zc.inspect(e, t * Rc);
if (!i) return null;
var n = {
hasVideo:i.video && 2 === i.video.length || !1,
hasAudio:i.audio && 2 === i.audio.length || !1
};
return n.hasVideo && (n.videoStart = i.video[0].ptsTime), n.hasAudio && (n.audioStart = i.audio[0].ptsTime), 
n;
}, wp = function(e) {
var t, i = 0;
return e.bytes && (t = new Uint8Array(e.bytes), e.segments.forEach(function(e) {
t.set(e, i), i += e.byteLength;
})), t;
}, Ep = {
FAILURE:2,
TIMEOUT:-101,
ABORTED:-102
}, Cp = function(e) {
e.forEach(function(e) {
e.abort();
});
}, Ip = function(e) {
return {
bandwidth:e.bandwidth,
bytesReceived:e.bytesReceived || 0,
roundTripTime:e.roundTripTime || 0
};
}, Pp = function(e) {
var t = e.target, i = Date.now() - t.requestTime, n = {
bandwidth:1 / 0,
bytesReceived:0,
roundTripTime:i || 0
};
return n.bytesReceived = e.loaded, n.bandwidth = Math.floor(n.bytesReceived / n.roundTripTime * 8 * 1e3), 
n;
}, Ap = function(e, t) {
return t.timedout ? {
status:t.status,
message:"HLS request timed-out at URL: " + t.uri,
code:Ep.TIMEOUT,
xhr:t
} :t.aborted ? {
status:t.status,
message:"HLS request aborted at URL: " + t.uri,
code:Ep.ABORTED,
xhr:t
} :e ? {
status:t.status,
message:"HLS request errored at URL: " + t.uri,
code:Ep.FAILURE,
xhr:t
} :null;
}, xp = function(e, t) {
return function(i, n) {
var r = n.response, a = Ap(i, n);
if (a) return t(a, e);
if (16 !== r.byteLength) return t({
status:n.status,
message:"Invalid HLS key at URL: " + n.uri,
code:Ep.FAILURE,
xhr:n
}, e);
var s = new DataView(r);
return e.key.bytes = new Uint32Array([ s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12) ]), 
t(null, e);
};
}, Lp = function(e) {
var t = e.segment, i = e.finishProcessingFn;
return function(e, n) {
var r = n.response, a = Ap(e, n);
if (a) return i(a, t);
if (0 === r.byteLength) return i({
status:n.status,
message:"Empty HLS segment content at URL: " + n.uri,
code:Ep.FAILURE,
xhr:n
}, t);
t.map.bytes = new Uint8Array(n.response);
var s = jl(t.map.bytes);
if ("mp4" !== s) return i({
status:n.status,
message:"Found unsupported " + (s || "unknown") + " container for initialization segment at URL: " + n.uri,
code:Ep.FAILURE,
internal:!0,
xhr:n
}, t);
var o = _d.tracks(t.map.bytes);
return o.forEach(function(e) {
t.map.tracks = t.map.tracks || {}, t.map.tracks[e.type] || (t.map.tracks[e.type] = e, 
"number" == typeof e.id && e.timescale && (t.map.timescales = t.map.timescales || {}, 
t.map.timescales[e.id] = e.timescale));
}), i(null, t);
};
}, Dp = function(e) {
var t = e.segment, i = e.finishProcessingFn, n = e.responseType;
return function(e, r) {
var a = r.response, s = Ap(e, r);
if (s) return i(s, t);
var o = "arraybuffer" !== n && r.responseText ? lp(r.responseText.substring(t.lastReachedChar || 0)) :r.response;
return 0 === a.byteLength ? i({
status:r.status,
message:"Empty HLS segment content at URL: " + r.uri,
code:Ep.FAILURE,
xhr:r
}, t) :(t.stats = Ip(r), t.key ? t.encryptedBytes = new Uint8Array(o) :t.bytes = new Uint8Array(o), 
i(null, t));
};
}, Op = function(e) {
var t = e.segment, i = e.bytes, n = e.isPartial, r = e.trackInfoFn, a = e.timingInfoFn, s = e.videoSegmentTimingInfoFn, o = e.audioSegmentTimingInfoFn, u = e.id3Fn, l = e.captionsFn, c = e.dataFn, d = e.doneFn, h = t.map && t.map.tracks || {}, p = Boolean(h.audio && h.video), f = a.bind(null, t, "audio", "start"), m = a.bind(null, t, "audio", "end"), g = a.bind(null, t, "video", "start"), v = a.bind(null, t, "video", "end");
if (!n && !t.lastReachedChar) {
var y = kp(i, t.baseStartTime);
y && (r(t, {
hasAudio:y.hasAudio,
hasVideo:y.hasVideo,
isMuxed:p
}), r = null, y.hasAudio && !p && f(y.audioStart), y.hasVideo && g(y.videoStart), 
f = null, g = null);
}
bp({
bytes:i,
transmuxer:t.transmuxer,
audioAppendStart:t.audioAppendStart,
gopsToAlignWith:t.gopsToAlignWith,
isPartial:n,
remux:p,
onData:function(e) {
e.type = "combined" === e.type ? "video" :e.type, c(t, e);
},
onTrackInfo:function(e) {
r && (p && (e.isMuxed = !0), r(t, e));
},
onAudioTimingInfo:function(e) {
f && "undefined" != typeof e.start && (f(e.start), f = null), m && "undefined" != typeof e.end && m(e.end);
},
onVideoTimingInfo:function(e) {
g && "undefined" != typeof e.start && (g(e.start), g = null), v && "undefined" != typeof e.end && v(e.end);
},
onVideoSegmentTimingInfo:function(e) {
s(e);
},
onAudioSegmentTimingInfo:function(e) {
o(e);
},
onId3:function(e, i) {
u(t, e, i);
},
onCaptions:function(e) {
l(t, [ e ]);
},
onDone:function(e) {
d && !n && (e.type = "combined" === e.type ? "video" :e.type, d(null, t, e));
}
});
}, Rp = function(e) {
var t = e.segment, i = e.bytes, n = e.isPartial, r = e.trackInfoFn, a = e.timingInfoFn, s = e.videoSegmentTimingInfoFn, o = e.audioSegmentTimingInfoFn, u = e.id3Fn, l = e.captionsFn, c = e.dataFn, d = e.doneFn, h = new Uint8Array(i);
if (Hl(h)) {
t.isFmp4 = !0;
var p = t.map.tracks, f = {
isFmp4:!0,
hasVideo:!!p.video,
hasAudio:!!p.audio
};
p.audio && p.audio.codec && "enca" !== p.audio.codec && (f.audioCodec = p.audio.codec), 
p.video && p.video.codec && "encv" !== p.video.codec && (f.videoCodec = p.video.codec), 
p.video && p.audio && (f.isMuxed = !0), r(t, f);
var m = _d.startTime(t.map.timescales, h);
f.hasAudio && !f.isMuxed && a(t, "audio", "start", m), f.hasVideo && a(t, "video", "start", m);
var g = function(e) {
c(t, {
data:i,
type:f.hasAudio && !f.isMuxed ? "audio" :"video"
}), e && e.length && l(t, e), d(null, t, {});
};
if (!p.video || !i.byteLength || !t.transmuxer) return void g();
var v = i instanceof ArrayBuffer ? i :i.buffer, y = i instanceof ArrayBuffer ? 0 :i.byteOffset, _ = function b(e) {
if ("mp4Captions" === e.data.action) {
t.transmuxer.removeEventListener("message", b);
var n = e.data.data;
t.bytes = i = new Uint8Array(n, n.byteOffset || 0, n.byteLength), g(e.data.captions);
}
};
return t.transmuxer.addEventListener("message", _), void t.transmuxer.postMessage({
action:"pushMp4Captions",
timescales:t.map.timescales,
trackIds:[ p.video.id ],
data:v,
byteOffset:y,
byteLength:i.byteLength
}, [ v ]);
}
return t.transmuxer ? ("undefined" == typeof t.container && (t.container = jl(h)), 
"ts" !== t.container && "aac" !== t.container ? (r(t, {
hasAudio:!1,
hasVideo:!1
}), void d(null, t, {})) :void Op({
segment:t,
bytes:i,
isPartial:n,
trackInfoFn:r,
timingInfoFn:a,
videoSegmentTimingInfoFn:s,
audioSegmentTimingInfoFn:o,
id3Fn:u,
captionsFn:l,
dataFn:c,
doneFn:d
})) :void d(null, t, {});
}, Np = function(e) {
var t = e.decryptionWorker, i = e.segment, n = e.trackInfoFn, r = e.timingInfoFn, a = e.videoSegmentTimingInfoFn, s = e.audioSegmentTimingInfoFn, o = e.id3Fn, u = e.captionsFn, l = e.dataFn, c = e.doneFn, d = function p(e) {
if (e.data.source === i.requestId) {
t.removeEventListener("message", p);
var d = e.data.decrypted;
i.bytes = new Uint8Array(d.bytes, d.byteOffset, d.byteLength), Rp({
segment:i,
bytes:i.bytes,
isPartial:!1,
trackInfoFn:n,
timingInfoFn:r,
videoSegmentTimingInfoFn:a,
audioSegmentTimingInfoFn:s,
id3Fn:o,
captionsFn:u,
dataFn:l,
doneFn:c
});
}
};
t.addEventListener("message", d);
var h;
h = i.key.bytes.slice ? i.key.bytes.slice() :new Uint32Array(Array.prototype.slice.call(i.key.bytes)), 
t.postMessage(Nh({
source:i.requestId,
encrypted:i.encryptedBytes,
key:h,
iv:i.key.iv
}), [ i.encryptedBytes.buffer, h.buffer ]);
}, Mp = function(e) {
var t = e.activeXhrs, i = e.decryptionWorker, n = e.trackInfoFn, r = e.timingInfoFn, a = e.videoSegmentTimingInfoFn, s = e.audioSegmentTimingInfoFn, o = e.id3Fn, u = e.captionsFn, l = e.dataFn, c = e.doneFn, d = 0, h = !1;
return function(e, p) {
if (!h) {
if (e) return h = !0, Cp(t), c(e, p);
if (d += 1, d === t.length) {
if (p.endOfAllRequests = Date.now(), p.encryptedBytes) return Np({
decryptionWorker:i,
segment:p,
trackInfoFn:n,
timingInfoFn:r,
videoSegmentTimingInfoFn:a,
audioSegmentTimingInfoFn:s,
id3Fn:o,
captionsFn:u,
dataFn:l,
doneFn:c
});
Rp({
segment:p,
bytes:p.bytes,
isPartial:!1,
trackInfoFn:n,
timingInfoFn:r,
videoSegmentTimingInfoFn:a,
audioSegmentTimingInfoFn:s,
id3Fn:o,
captionsFn:u,
dataFn:l,
doneFn:c
});
}
}
};
}, Up = function(e) {
var t = e.loadendState, i = e.abortFn;
return function(e) {
var n = e.target;
n.aborted && i && !t.calledAbortFn && (i(), t.calledAbortFn = !0);
};
}, Bp = function(e) {
var t = e.segment, i = e.progressFn, n = e.trackInfoFn, r = e.timingInfoFn, a = e.videoSegmentTimingInfoFn, s = e.audioSegmentTimingInfoFn, o = e.id3Fn, u = e.captionsFn, l = e.dataFn, c = e.handlePartialData;
return function(e) {
var d = e.target;
if (!d.aborted) {
if (c && !t.key && d.responseText && d.responseText.length >= 8) {
var h = lp(d.responseText.substring(t.lastReachedChar || 0));
(t.lastReachedChar || !Hl(new Uint8Array(h))) && (t.lastReachedChar = d.responseText.length, 
Rp({
segment:t,
bytes:h,
isPartial:!0,
trackInfoFn:n,
timingInfoFn:r,
videoSegmentTimingInfoFn:a,
audioSegmentTimingInfoFn:s,
id3Fn:o,
captionsFn:u,
dataFn:l
}));
}
return t.stats = ot.mergeOptions(t.stats, Pp(e)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), 
i(e, t);
}
};
}, Fp = function(e) {
var t = e.xhr, i = e.xhrOptions, n = e.decryptionWorker, r = e.segment, a = e.abortFn, s = e.progressFn, o = e.trackInfoFn, u = e.timingInfoFn, l = e.videoSegmentTimingInfoFn, c = e.audioSegmentTimingInfoFn, d = e.id3Fn, h = e.captionsFn, p = e.dataFn, f = e.doneFn, m = e.handlePartialData, g = [], v = Mp({
activeXhrs:g,
decryptionWorker:n,
trackInfoFn:o,
timingInfoFn:u,
videoSegmentTimingInfoFn:l,
audioSegmentTimingInfoFn:c,
id3Fn:d,
captionsFn:h,
dataFn:p,
doneFn:f
});
if (r.key && !r.key.bytes) {
var y = ot.mergeOptions(i, {
uri:r.key.resolvedUri,
responseType:"arraybuffer"
}), _ = xp(r, v), b = t(y, _);
g.push(b);
}
if (r.map && !r.map.bytes) {
var T = ot.mergeOptions(i, {
uri:r.map.resolvedUri,
responseType:"arraybuffer",
headers:Lh(r.map)
}), S = Lp({
segment:r,
finishProcessingFn:v
}), k = t(T, S);
g.push(k);
}
var w = ot.mergeOptions(i, {
uri:r.resolvedUri,
responseType:"arraybuffer",
headers:Lh(r)
});
m && (w.responseType = "text", w.beforeSend = function(e) {
e.overrideMimeType("text/plain; charset=x-user-defined");
});
var E = Dp({
segment:r,
finishProcessingFn:v,
responseType:w.responseType
}), C = t(w, E);
C.addEventListener("progress", Bp({
segment:r,
progressFn:s,
trackInfoFn:o,
timingInfoFn:u,
videoSegmentTimingInfoFn:l,
audioSegmentTimingInfoFn:c,
id3Fn:d,
captionsFn:h,
dataFn:p,
handlePartialData:m
})), g.push(C);
var I = {};
return g.forEach(function(e) {
e.addEventListener("loadend", Up({
loadendState:I,
abortFn:a
}));
}), function() {
return Cp(g);
};
}, jp = "undefined" != typeof window ? window :{}, Vp = "undefined" == typeof Symbol ? "__target" :Symbol(), Hp = "application/javascript", qp = jp.BlobBuilder || jp.WebKitBlobBuilder || jp.MozBlobBuilder || jp.MSBlobBuilder, Wp = jp.URL || jp.webkitURL || Wp && Wp.msURL, zp = jp.Worker;
if (zp) {
var Gp, Xp = pi("self.onmessage = function () {}"), Kp = new Uint8Array(1);
try {
Gp = new zp(Xp), Gp.postMessage(Kp, [ Kp.buffer ]);
} catch (Lu) {
zp = null;
} finally {
Wp.revokeObjectURL(Xp), Gp && Gp.terminate();
}
}
var Yp, Qp = new hi("./transmuxer-worker.worker.js", function(e, t) {
var i = this;
(function() {
var e = function() {
this.init = function() {
var e = {};
this.on = function(t, i) {
e[t] || (e[t] = []), e[t] = e[t].concat(i);
}, this.off = function(t, i) {
var n;
return e[t] ? (n = e[t].indexOf(i), e[t] = e[t].slice(), e[t].splice(n, 1), n > -1) :!1;
}, this.trigger = function(t) {
var i, n, r, a;
if (i = e[t]) if (2 === arguments.length) for (r = i.length, n = 0; r > n; ++n) i[n].call(this, arguments[1]); else {
for (a = [], n = arguments.length, n = 1; n < arguments.length; ++n) a.push(arguments[n]);
for (r = i.length, n = 0; r > n; ++n) i[n].apply(this, a);
}
}, this.dispose = function() {
e = {};
};
};
};
e.prototype.pipe = function(e) {
return this.on("data", function(t) {
e.push(t);
}), this.on("done", function(t) {
e.flush(t);
}), this.on("partialdone", function(t) {
e.partialFlush(t);
}), this.on("endedtimeline", function(t) {
e.endTimeline(t);
}), this.on("reset", function(t) {
e.reset(t);
}), e;
}, e.prototype.push = function(e) {
this.trigger("data", e);
}, e.prototype.flush = function(e) {
this.trigger("done", e);
}, e.prototype.partialFlush = function(e) {
this.trigger("partialdone", e);
}, e.prototype.endTimeline = function(e) {
this.trigger("endedtimeline", e);
}, e.prototype.reset = function(e) {
this.trigger("reset", e);
};
var t, n, r, a, s, o, u, l, c, d, h, p, f, m, g, v, y, _, b, T, S, k, w, E, C, I, P, A, x, L, D, O, R, N, M, U, B = e, F = Math.pow(2, 32) - 1;
!function() {
var e;
if (w = {
avc1:[],
avcC:[],
btrt:[],
dinf:[],
dref:[],
esds:[],
ftyp:[],
hdlr:[],
mdat:[],
mdhd:[],
mdia:[],
mfhd:[],
minf:[],
moof:[],
moov:[],
mp4a:[],
mvex:[],
mvhd:[],
pasp:[],
sdtp:[],
smhd:[],
stbl:[],
stco:[],
stsc:[],
stsd:[],
stsz:[],
stts:[],
styp:[],
tfdt:[],
tfhd:[],
traf:[],
trak:[],
trun:[],
trex:[],
tkhd:[],
vmhd:[]
}, "undefined" != typeof Uint8Array) {
for (e in w) w.hasOwnProperty(e) && (w[e] = [ e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3) ]);
E = new Uint8Array([ "i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0) ]), 
I = new Uint8Array([ "a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0) ]), 
C = new Uint8Array([ 0, 0, 0, 1 ]), P = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0 ]), 
A = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0 ]), 
x = {
video:P,
audio:A
}, O = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1 ]), 
D = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), R = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), 
N = R, M = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), U = R, L = new Uint8Array([ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]);
}
}(), t = function(e) {
var t, i, n, r = [], a = 0;
for (t = 1; t < arguments.length; t++) r.push(arguments[t]);
for (t = r.length; t--; ) a += r[t].byteLength;
for (i = new Uint8Array(a + 8), n = new DataView(i.buffer, i.byteOffset, i.byteLength), 
n.setUint32(0, i.byteLength), i.set(e, 4), t = 0, a = 8; t < r.length; t++) i.set(r[t], a), 
a += r[t].byteLength;
return i;
}, n = function() {
return t(w.dinf, t(w.dref, O));
}, r = function(e) {
return t(w.esds, new Uint8Array([ 0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2 ]));
}, a = function() {
return t(w.ftyp, E, C, E, I);
}, v = function(e) {
return t(w.hdlr, x[e]);
}, s = function(e) {
return t(w.mdat, e);
}, g = function(e) {
var i = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0 ]);
return e.samplerate && (i[12] = e.samplerate >>> 24 & 255, i[13] = e.samplerate >>> 16 & 255, 
i[14] = e.samplerate >>> 8 & 255, i[15] = 255 & e.samplerate), t(w.mdhd, i);
}, m = function(e) {
return t(w.mdia, g(e), v(e.type), u(e));
}, o = function(e) {
return t(w.mfhd, new Uint8Array([ 0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e ]));
}, u = function(e) {
return t(w.minf, "video" === e.type ? t(w.vmhd, L) :t(w.smhd, D), n(), _(e));
}, l = function(e, i) {
for (var n = [], r = i.length; r--; ) n[r] = T(i[r]);
return t.apply(null, [ w.moof, o(e) ].concat(n));
}, c = function(e) {
for (var i = e.length, n = []; i--; ) n[i] = p(e[i]);
return t.apply(null, [ w.moov, h(4294967295) ].concat(n).concat(d(e)));
}, d = function(e) {
for (var i = e.length, n = []; i--; ) n[i] = S(e[i]);
return t.apply(null, [ w.mvex ].concat(n));
}, h = function(e) {
var i = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255 ]);
return t(w.mvhd, i);
}, y = function(e) {
var i, n, r = e.samples || [], a = new Uint8Array(4 + r.length);
for (n = 0; n < r.length; n++) i = r[n].flags, a[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
return t(w.sdtp, a);
}, _ = function(e) {
return t(w.stbl, b(e), t(w.stts, U), t(w.stsc, N), t(w.stsz, M), t(w.stco, R));
}, function() {
var e, i;
b = function(n) {
return t(w.stsd, new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1 ]), "video" === n.type ? e(n) :i(n));
}, e = function(e) {
var i, n, r = e.sps || [], a = e.pps || [], s = [], o = [];
for (i = 0; i < r.length; i++) s.push((65280 & r[i].byteLength) >>> 8), s.push(255 & r[i].byteLength), 
s = s.concat(Array.prototype.slice.call(r[i]));
for (i = 0; i < a.length; i++) o.push((65280 & a[i].byteLength) >>> 8), o.push(255 & a[i].byteLength), 
o = o.concat(Array.prototype.slice.call(a[i]));
if (n = [ w.avc1, new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17 ]), t(w.avcC, new Uint8Array([ 1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255 ].concat([ r.length ], s, [ a.length ], o))), t(w.btrt, new Uint8Array([ 0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192 ])) ], 
e.sarRatio) {
var u = e.sarRatio[0], l = e.sarRatio[1];
n.push(t(w.pasp, new Uint8Array([ (4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, (4278190080 & l) >> 24, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l ])));
}
return t.apply(null, n);
}, i = function(e) {
return t(w.mp4a, new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0 ]), r(e));
};
}(), f = function(e) {
var i = new Uint8Array([ 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0 ]);
return t(w.tkhd, i);
}, T = function(e) {
var i, n, r, a, s, o, u;
return i = t(w.tfhd, new Uint8Array([ 0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])), 
o = Math.floor(e.baseMediaDecodeTime / (F + 1)), u = Math.floor(e.baseMediaDecodeTime % (F + 1)), 
n = t(w.tfdt, new Uint8Array([ 1, 0, 0, 0, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u ])), 
s = 92, "audio" === e.type ? (r = k(e, s), t(w.traf, i, n, r)) :(a = y(e), r = k(e, a.length + s), 
t(w.traf, i, n, r, a));
}, p = function(e) {
return e.duration = e.duration || 4294967295, t(w.trak, f(e), m(e));
}, S = function(e) {
var i = new Uint8Array([ 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ]);
return "video" !== e.type && (i[i.length - 1] = 0), t(w.trex, i);
}, function() {
var e, i, n;
n = function(e, t) {
var i = 0, n = 0, r = 0, a = 0;
return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), 
void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (a = 8)), 
[ 0, 0, i | n | r | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t ];
}, i = function(e, i) {
var r, a, s, o, u, l;
for (o = e.samples || [], i += 20 + 16 * o.length, s = n(o, i), a = new Uint8Array(s.length + 16 * o.length), 
a.set(s), r = s.length, l = 0; l < o.length; l++) u = o[l], a[r++] = (4278190080 & u.duration) >>> 24, 
a[r++] = (16711680 & u.duration) >>> 16, a[r++] = (65280 & u.duration) >>> 8, a[r++] = 255 & u.duration, 
a[r++] = (4278190080 & u.size) >>> 24, a[r++] = (16711680 & u.size) >>> 16, a[r++] = (65280 & u.size) >>> 8, 
a[r++] = 255 & u.size, a[r++] = u.flags.isLeading << 2 | u.flags.dependsOn, a[r++] = u.flags.isDependedOn << 6 | u.flags.hasRedundancy << 4 | u.flags.paddingValue << 1 | u.flags.isNonSyncSample, 
a[r++] = 61440 & u.flags.degradationPriority, a[r++] = 15 & u.flags.degradationPriority, 
a[r++] = (4278190080 & u.compositionTimeOffset) >>> 24, a[r++] = (16711680 & u.compositionTimeOffset) >>> 16, 
a[r++] = (65280 & u.compositionTimeOffset) >>> 8, a[r++] = 255 & u.compositionTimeOffset;
return t(w.trun, a);
}, e = function(e, i) {
var r, a, s, o, u, l;
for (o = e.samples || [], i += 20 + 8 * o.length, s = n(o, i), r = new Uint8Array(s.length + 8 * o.length), 
r.set(s), a = s.length, l = 0; l < o.length; l++) u = o[l], r[a++] = (4278190080 & u.duration) >>> 24, 
r[a++] = (16711680 & u.duration) >>> 16, r[a++] = (65280 & u.duration) >>> 8, r[a++] = 255 & u.duration, 
r[a++] = (4278190080 & u.size) >>> 24, r[a++] = (16711680 & u.size) >>> 16, r[a++] = (65280 & u.size) >>> 8, 
r[a++] = 255 & u.size;
return t(w.trun, r);
}, k = function(t, n) {
return "audio" === t.type ? e(t, n) :i(t, n);
};
}();
var j, V, H, q, W, z, G, X, K = {
ftyp:a,
mdat:s,
moof:l,
moov:c,
initSegment:function(e) {
var t, i = a(), n = c(e);
return t = new Uint8Array(i.byteLength + n.byteLength), t.set(i), t.set(n, i.byteLength), 
t;
}
}, Y = function(e) {
var t, i, n = [], r = [];
for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, n.byteLength = 0, t = 0; t < e.length; t++) i = e[t], 
"access_unit_delimiter_rbsp" === i.nalUnitType ? (n.length && (n.duration = i.dts - n.dts, 
r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, 
r.push(n)), n = [ i ], n.byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) :("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), 
n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), 
r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, 
r.push(n), r;
}, Q = function(e) {
var t, i, n = [], r = [];
for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, 
r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, 
t = 0; t < e.length; t++) i = e[t], i.keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, 
r.nalCount += n.nalCount, r.duration += n.duration), n = [ i ], n.nalCount = i.length, 
n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) :(n.duration += i.duration, 
n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, 
r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r;
}, $ = function(e) {
var t;
return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(), e.byteLength -= t.byteLength, 
e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), 
e;
}, J = function() {
return {
size:0,
flags:{
isLeading:0,
dependsOn:1,
isDependedOn:0,
hasRedundancy:0,
degradationPriority:0,
isNonSyncSample:1
}
};
}, Z = function(e, t) {
var i = J();
return i.dataOffset = t, i.compositionTimeOffset = e.pts - e.dts, i.duration = e.duration, 
i.size = 4 * e.length, i.size += e.byteLength, e.keyFrame && (i.flags.dependsOn = 2, 
i.flags.isNonSyncSample = 0), i;
}, ee = function(e, t) {
var i, n, r, a, s, o = t || 0, u = [];
for (i = 0; i < e.length; i++) for (a = e[i], n = 0; n < a.length; n++) s = a[n], 
r = Z(s, o), o += r.size, u.push(r);
return u;
}, te = function(e) {
var t, i, n, r, a, s, o = 0, u = e.byteLength, l = e.nalCount, c = u + 4 * l, d = new Uint8Array(c), h = new DataView(d.buffer);
for (t = 0; t < e.length; t++) for (r = e[t], i = 0; i < r.length; i++) for (a = r[i], 
n = 0; n < a.length; n++) s = a[n], h.setUint32(o, s.data.byteLength), o += 4, d.set(s.data, o), 
o += s.data.byteLength;
return d;
}, ie = function(e, t) {
var i, n = t || 0, r = [];
return i = Z(e, n), r.push(i), r;
}, ne = function(e) {
var t, i, n = 0, r = e.byteLength, a = e.length, s = r + 4 * a, o = new Uint8Array(s), u = new DataView(o.buffer);
for (t = 0; t < e.length; t++) i = e[t], u.setUint32(n, i.data.byteLength), n += 4, 
o.set(i.data, n), n += i.data.byteLength;
return o;
}, re = {
groupNalsIntoFrames:Y,
groupFramesIntoGops:Q,
extendFirstKeyFrame:$,
generateSampleTable:ee,
concatenateNalData:te,
generateSampleTableForFrame:ie,
concatenateNalDataForFrame:ne
}, ae = [ 33, 16, 5, 32, 164, 27 ], se = [ 33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252 ], oe = function(e) {
for (var t = []; e--; ) t.push(0);
return t;
}, ue = function(e) {
return Object.keys(e).reduce(function(t, i) {
return t[i] = new Uint8Array(e[i].reduce(function(e, t) {
return e.concat(t);
}, [])), t;
}, {});
}, le = function() {
if (!j) {
var e = {
96e3:[ ae, [ 227, 64 ], oe(154), [ 56 ] ],
88200:[ ae, [ 231 ], oe(170), [ 56 ] ],
64e3:[ ae, [ 248, 192 ], oe(240), [ 56 ] ],
48e3:[ ae, [ 255, 192 ], oe(268), [ 55, 148, 128 ], oe(54), [ 112 ] ],
44100:[ ae, [ 255, 192 ], oe(268), [ 55, 163, 128 ], oe(84), [ 112 ] ],
32e3:[ ae, [ 255, 192 ], oe(268), [ 55, 234 ], oe(226), [ 112 ] ],
24e3:[ ae, [ 255, 192 ], oe(268), [ 55, 255, 128 ], oe(268), [ 111, 112 ], oe(126), [ 224 ] ],
16e3:[ ae, [ 255, 192 ], oe(268), [ 55, 255, 128 ], oe(268), [ 111, 255 ], oe(269), [ 223, 108 ], oe(195), [ 1, 192 ] ],
12e3:[ se, oe(268), [ 3, 127, 248 ], oe(268), [ 6, 255, 240 ], oe(268), [ 13, 255, 224 ], oe(268), [ 27, 253, 128 ], oe(259), [ 56 ] ],
11025:[ se, oe(268), [ 3, 127, 248 ], oe(268), [ 6, 255, 240 ], oe(268), [ 13, 255, 224 ], oe(268), [ 27, 255, 192 ], oe(268), [ 55, 175, 128 ], oe(108), [ 112 ] ],
8e3:[ se, oe(268), [ 3, 121, 16 ], oe(47), [ 7 ] ]
};
j = ue(e);
}
return j;
}, ce = 9e4;
V = function(e) {
return e * ce;
}, H = function(e, t) {
return e * t;
}, q = function(e) {
return e / ce;
}, W = function(e, t) {
return e / t;
}, z = function(e, t) {
return V(W(e, t));
}, G = function(e, t) {
return H(q(e), t);
}, X = function(e, t, i) {
return q(i ? e :e - t);
};
var de = {
ONE_SECOND_IN_TS:ce,
secondsToVideoTs:V,
secondsToAudioTs:H,
videoTsToSeconds:q,
audioTsToSeconds:W,
audioTsToVideoTs:z,
videoTsToAudioTs:G,
metadataTsToSeconds:X
}, he = function(e) {
var t, i, n = 0;
for (t = 0; t < e.length; t++) i = e[t], n += i.data.byteLength;
return n;
}, pe = function(e, t, i, n) {
var r, a, s, o, u = 0, l = 0, c = 0, d = 0;
if (t.length && (r = de.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), u = Math.ceil(de.ONE_SECOND_IN_TS / (e.samplerate / 1024)), 
i && n && (l = r - Math.max(i, n), c = Math.floor(l / u), d = c * u), !(1 > c || d > de.ONE_SECOND_IN_TS / 2))) {
for (a = le()[e.samplerate], a || (a = t[0].data), s = 0; c > s; s++) o = t[0], 
t.splice(0, 0, {
data:a,
dts:o.dts - u,
pts:o.pts - u
});
return e.baseMediaDecodeTime -= Math.floor(de.videoTsToAudioTs(d, e.samplerate)), 
d;
}
}, fe = function(e, t, i) {
return t.minSegmentDts >= i ? e :(t.minSegmentDts = 1 / 0, e.filter(function(e) {
return e.dts >= i ? (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, 
!0) :!1;
}));
}, me = function(e) {
var t, i, n = [];
for (t = 0; t < e.length; t++) i = e[t], n.push({
size:i.data.byteLength,
duration:1024
});
return n;
}, ge = function(e) {
var t, i, n = 0, r = new Uint8Array(he(e));
for (t = 0; t < e.length; t++) i = e[t], r.set(i.data, n), n += i.data.byteLength;
return r;
}, ve = {
prefixWithSilence:pe,
trimAdtsFramesByEarliestDts:fe,
generateSampleTable:me,
concatenateFrameData:ge
}, ye = de.ONE_SECOND_IN_TS, _e = function(e, t) {
"number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), 
void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts :e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), 
void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts :e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), 
"number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), 
void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts :e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), 
void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts :e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts));
}, be = function(e) {
delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts;
}, Te = function(e, t) {
var i, n, r = e.minSegmentDts;
return t || (r -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, 
i += r, i = Math.max(0, i), "audio" === e.type && (n = e.samplerate / ye, i *= n, 
i = Math.floor(i)), i;
}, Se = {
clearDtsInfo:be,
calculateTrackBaseMediaDecodeTime:Te,
collectDtsInfo:_e
}, ke = 4, we = 128, Ee = function(e) {
for (var t = 0, i = {
payloadType:-1,
payloadSize:0
}, n = 0, r = 0; t < e.byteLength && e[t] !== we; ) {
for (;255 === e[t]; ) n += 255, t++;
for (n += e[t++]; 255 === e[t]; ) r += 255, t++;
if (r += e[t++], !i.payload && n === ke) {
var a = String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6]);
if ("GA94" === a) {
i.payloadType = n, i.payloadSize = r, i.payload = e.subarray(t, t + r);
break;
}
i.payload = void 0;
}
t += r, n = 0, r = 0;
}
return i;
}, Ce = function(e) {
return 181 !== e.payload[0] ? null :49 !== (e.payload[1] << 8 | e.payload[2]) ? null :"GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null :3 !== e.payload[7] ? null :e.payload.subarray(8, e.payload.length - 1);
}, Ie = function(e, t) {
var i, n, r, a, s = [];
if (!(64 & t[0])) return s;
for (n = 31 & t[0], i = 0; n > i; i++) r = 3 * i, a = {
type:3 & t[r + 2],
pts:e
}, 4 & t[r + 2] && (a.ccData = t[r + 3] << 8 | t[r + 4], s.push(a));
return s;
}, Pe = function(e) {
for (var t, i, n = e.byteLength, r = [], a = 1; n - 2 > a; ) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), 
a += 2) :a++;
if (0 === r.length) return e;
t = n - r.length, i = new Uint8Array(t);
var s = 0;
for (a = 0; t > a; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
return i;
}, Ae = {
parseSei:Ee,
parseUserData:Ce,
parseCaptionPackets:Ie,
discardEmulationPreventionBytes:Pe,
USER_DATA_REGISTERED_ITU_T_T35:ke
}, xe = function Hi() {
Hi.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [ new He(0, 0), new He(0, 1), new He(1, 0), new He(1, 1) ], 
this.cc708Stream_ = new Me(), this.reset(), this.ccStreams_.forEach(function(e) {
e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), 
e.on("done", this.trigger.bind(this, "done"));
}, this), this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), 
this.cc708Stream_.on("done", this.trigger.bind(this, "done"));
};
xe.prototype = new B(), xe.prototype.push = function(e) {
var t, i, n;
if ("sei_rbsp" === e.nalUnitType && (t = Ae.parseSei(e.escapedRBSP), t.payload && t.payloadType === Ae.USER_DATA_REGISTERED_ITU_T_T35 && (i = Ae.parseUserData(t)))) {
if (e.dts < this.latestDts_) return void (this.ignoreNextEqualDts_ = !0);
if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, 
void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
n = Ae.parseCaptionPackets(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), 
this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts;
}
}, xe.prototype.flushCCStreams = function(e) {
this.ccStreams_.forEach(function(t) {
return "flush" === e ? t.flush() :t.partialFlush();
}, this);
}, xe.prototype.flushStream = function(e) {
return this.captionPackets_.length ? (this.captionPackets_.forEach(function(e, t) {
e.presortIndex = t;
}), this.captionPackets_.sort(function(e, t) {
return e.pts === t.pts ? e.presortIndex - t.presortIndex :e.pts - t.pts;
}), this.captionPackets_.forEach(function(e) {
e.type < 2 ? this.dispatchCea608Packet(e) :this.dispatchCea708Packet(e);
}, this), this.captionPackets_.length = 0, void this.flushCCStreams(e)) :void this.flushCCStreams(e);
}, xe.prototype.flush = function() {
return this.flushStream("flush");
}, xe.prototype.partialFlush = function() {
return this.flushStream("partialFlush");
}, xe.prototype.reset = function() {
this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [ null, null ], 
this.ccStreams_.forEach(function(e) {
e.reset();
});
}, xe.prototype.dispatchCea608Packet = function(e) {
this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null :this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 :this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), 
null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e);
}, xe.prototype.setsChannel1Active = function(e) {
return 4096 === (30720 & e.ccData);
}, xe.prototype.setsChannel2Active = function(e) {
return 6144 === (30720 & e.ccData);
}, xe.prototype.setsTextOrXDSActive = function(e) {
return 256 === (28928 & e.ccData) || 4138 === (30974 & e.ccData) || 6186 === (30974 & e.ccData);
}, xe.prototype.dispatchCea708Packet = function(e) {
this.cc708Stream_.push(e);
};
var Le = {
127:9834,
4128:32,
4129:160,
4133:8230,
4138:352,
4140:338,
4144:9608,
4145:8216,
4146:8217,
4147:8220,
4148:8221,
4149:8226,
4153:8482,
4154:353,
4156:339,
4157:8480,
4159:376,
4214:8539,
4215:8540,
4216:8541,
4217:8542,
4218:9168,
4219:9124,
4220:9123,
4221:9135,
4222:9126,
4223:9121,
4256:12600
}, De = function(e) {
var t = Le[e] || e;
return 4096 & e && e === t ? "" :String.fromCharCode(t);
}, Oe = function(e) {
return e >= 32 && 127 >= e || e >= 160 && 255 >= e;
}, Re = function(e) {
this.windowNum = e, this.reset();
};
Re.prototype.reset = function() {
this.clearText(), this.pendingNewLine = !1, this.winAttr = {}, this.penAttr = {}, 
this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, 
this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, 
this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, 
this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0;
}, Re.prototype.getText = function() {
return this.rows.join("\n");
}, Re.prototype.clearText = function() {
this.rows = [ "" ], this.rowIdx = 0;
}, Re.prototype.newLine = function(e) {
for (this.rows.length >= this.virtualRowCount && "function" == typeof this.beforeRowOverflow && this.beforeRowOverflow(e), 
this.rows.length > 0 && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount; ) this.rows.shift(), 
this.rowIdx--;
}, Re.prototype.isEmpty = function() {
return 0 === this.rows.length ? !0 :1 === this.rows.length ? "" === this.rows[0] :!1;
}, Re.prototype.addText = function(e) {
this.rows[this.rowIdx] += e;
}, Re.prototype.backspace = function() {
if (!this.isEmpty()) {
var e = this.rows[this.rowIdx];
this.rows[this.rowIdx] = e.substr(0, e.length - 1);
}
};
var Ne = function(e) {
this.serviceNum = e, this.text = "", this.currentWindow = new Re(-1), this.windows = [];
};
Ne.prototype.init = function(e, t) {
this.startPts = e;
for (var i = 0; 8 > i; i++) this.windows[i] = new Re(i), "function" == typeof t && (this.windows[i].beforeRowOverflow = t);
}, Ne.prototype.setCurrentWindow = function(e) {
this.currentWindow = this.windows[e];
};
var Me = function qi() {
qi.prototype.init.call(this);
var e = this;
this.current708Packet = null, this.services = {}, this.push = function(t) {
3 === t.type ? (e.new708Packet(), e.add708Bytes(t)) :(null === e.current708Packet && e.new708Packet(), 
e.add708Bytes(t));
};
};
Me.prototype = new B(), Me.prototype.new708Packet = function() {
null !== this.current708Packet && this.push708Packet(), this.current708Packet = {
data:[],
ptsVals:[]
};
}, Me.prototype.add708Bytes = function(e) {
var t = e.ccData, i = t >>> 8, n = 255 & t;
this.current708Packet.ptsVals.push(e.pts), this.current708Packet.data.push(i), this.current708Packet.data.push(n);
}, Me.prototype.push708Packet = function() {
var e = this.current708Packet, t = e.data, i = null, n = null, r = 0, a = t[r++];
for (e.seq = a >> 6, e.sizeCode = 63 & a; r < t.length; r++) a = t[r++], i = a >> 5, 
n = 31 & a, 7 === i && n > 0 && (a = t[r++], i = a), this.pushServiceBlock(i, r, n), 
n > 0 && (r += n - 1);
}, Me.prototype.pushServiceBlock = function(e, t, i) {
var n, r = t, a = this.current708Packet.data, s = this.services[e];
for (s || (s = this.initService(e, r)); t + i > r && r < a.length; r++) n = a[r], 
Oe(n) ? r = this.handleText(r, s) :16 === n ? r = this.extendedCommands(r, s) :n >= 128 && 135 >= n ? r = this.setCurrentWindow(r, s) :n >= 152 && 159 >= n ? r = this.defineWindow(r, s) :136 === n ? r = this.clearWindows(r, s) :140 === n ? r = this.deleteWindows(r, s) :137 === n ? r = this.displayWindows(r, s) :138 === n ? r = this.hideWindows(r, s) :139 === n ? r = this.toggleWindows(r, s) :151 === n ? r = this.setWindowAttributes(r, s) :144 === n ? r = this.setPenAttributes(r, s) :145 === n ? r = this.setPenColor(r, s) :146 === n ? r = this.setPenLocation(r, s) :143 === n ? s = this.reset(r, s) :8 === n ? s.currentWindow.backspace() :12 === n ? s.currentWindow.clearText() :13 === n ? s.currentWindow.pendingNewLine = !0 :14 === n ? s.currentWindow.clearText() :141 === n && r++;
}, Me.prototype.extendedCommands = function(e, t) {
var i = this.current708Packet.data, n = i[++e];
return Oe(n) && (e = this.handleText(e, t, !0)), e;
}, Me.prototype.getPts = function(e) {
return this.current708Packet.ptsVals[Math.floor(e / 2)];
}, Me.prototype.initService = function(e, t) {
var i = this;
return this.services[e] = new Ne(e), this.services[e].init(this.getPts(t), function(t) {
i.flushDisplayed(t, i.services[e]);
}), this.services[e];
}, Me.prototype.handleText = function(e, t, i) {
var n = this.current708Packet.data, r = n[e], a = i ? 4096 :0, s = De(a | r), o = t.currentWindow;
return o.pendingNewLine && !o.isEmpty() && o.newLine(this.getPts(e)), o.pendingNewLine = !1, 
o.addText(s), e;
}, Me.prototype.setCurrentWindow = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = 7 & n;
return t.setCurrentWindow(r), e;
}, Me.prototype.defineWindow = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = 7 & n;
t.setCurrentWindow(r);
var a = t.currentWindow;
return n = i[++e], a.visible = (32 & n) >> 5, a.rowLock = (16 & n) >> 4, a.columnLock = (8 & n) >> 3, 
a.priority = 7 & n, n = i[++e], a.relativePositioning = (128 & n) >> 7, a.anchorVertical = 127 & n, 
n = i[++e], a.anchorHorizontal = n, n = i[++e], a.anchorPoint = (240 & n) >> 4, 
a.rowCount = 15 & n, n = i[++e], a.columnCount = 63 & n, n = i[++e], a.windowStyle = (56 & n) >> 3, 
a.penStyle = 7 & n, a.virtualRowCount = a.rowCount + 1, e;
}, Me.prototype.setWindowAttributes = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = t.currentWindow.winAttr;
return n = i[++e], r.fillOpacity = (192 & n) >> 6, r.fillRed = (48 & n) >> 4, r.fillGreen = (12 & n) >> 2, 
r.fillBlue = 3 & n, n = i[++e], r.borderType = (192 & n) >> 6, r.borderRed = (48 & n) >> 4, 
r.borderGreen = (12 & n) >> 2, r.borderBlue = 3 & n, n = i[++e], r.borderType += (128 & n) >> 5, 
r.wordWrap = (64 & n) >> 6, r.printDirection = (48 & n) >> 4, r.scrollDirection = (12 & n) >> 2, 
r.justify = 3 & n, n = i[++e], r.effectSpeed = (240 & n) >> 4, r.effectDirection = (12 & n) >> 2, 
r.displayEffect = 3 & n, e;
}, Me.prototype.flushDisplayed = function(e, t) {
for (var i = [], n = 0; 8 > n; n++) t.windows[n].visible && !t.windows[n].isEmpty() && i.push(t.windows[n].getText());
t.endPts = e, t.text = i.join("\n\n"), this.pushCaption(t), t.startPts = e;
}, Me.prototype.pushCaption = function(e) {
"" !== e.text && (this.trigger("data", {
startPts:e.startPts,
endPts:e.endPts,
text:e.text,
stream:"cc708_" + e.serviceNum
}), e.text = "", e.startPts = e.endPts);
}, Me.prototype.displayWindows = function(e, t) {
var i = this.current708Packet.data, n = i[++e], r = this.getPts(e);
this.flushDisplayed(r, t);
for (var a = 0; 8 > a; a++) n & 1 << a && (t.windows[a].visible = 1);
return e;
}, Me.prototype.hideWindows = function(e, t) {
var i = this.current708Packet.data, n = i[++e], r = this.getPts(e);
this.flushDisplayed(r, t);
for (var a = 0; 8 > a; a++) n & 1 << a && (t.windows[a].visible = 0);
return e;
}, Me.prototype.toggleWindows = function(e, t) {
var i = this.current708Packet.data, n = i[++e], r = this.getPts(e);
this.flushDisplayed(r, t);
for (var a = 0; 8 > a; a++) n & 1 << a && (t.windows[a].visible ^= 1);
return e;
}, Me.prototype.clearWindows = function(e, t) {
var i = this.current708Packet.data, n = i[++e], r = this.getPts(e);
this.flushDisplayed(r, t);
for (var a = 0; 8 > a; a++) n & 1 << a && t.windows[a].clearText();
return e;
}, Me.prototype.deleteWindows = function(e, t) {
var i = this.current708Packet.data, n = i[++e], r = this.getPts(e);
this.flushDisplayed(r, t);
for (var a = 0; 8 > a; a++) n & 1 << a && t.windows[a].reset();
return e;
}, Me.prototype.setPenAttributes = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = t.currentWindow.penAttr;
return n = i[++e], r.textTag = (240 & n) >> 4, r.offset = (12 & n) >> 2, r.penSize = 3 & n, 
n = i[++e], r.italics = (128 & n) >> 7, r.underline = (64 & n) >> 6, r.edgeType = (56 & n) >> 3, 
r.fontStyle = 7 & n, e;
}, Me.prototype.setPenColor = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = t.currentWindow.penColor;
return n = i[++e], r.fgOpacity = (192 & n) >> 6, r.fgRed = (48 & n) >> 4, r.fgGreen = (12 & n) >> 2, 
r.fgBlue = 3 & n, n = i[++e], r.bgOpacity = (192 & n) >> 6, r.bgRed = (48 & n) >> 4, 
r.bgGreen = (12 & n) >> 2, r.bgBlue = 3 & n, n = i[++e], r.edgeRed = (48 & n) >> 4, 
r.edgeGreen = (12 & n) >> 2, r.edgeBlue = 3 & n, e;
}, Me.prototype.setPenLocation = function(e, t) {
var i = this.current708Packet.data, n = i[e], r = t.currentWindow.penLoc;
return t.currentWindow.pendingNewLine = !0, n = i[++e], r.row = 15 & n, n = i[++e], 
r.column = 63 & n, e;
}, Me.prototype.reset = function(e, t) {
var i = this.getPts(e);
return this.flushDisplayed(i, t), this.initService(t.serviceNum, e);
};
var Ue = {
42:225,
92:233,
94:237,
95:243,
96:250,
123:231,
124:247,
125:209,
126:241,
127:9608,
304:174,
305:176,
306:189,
307:191,
308:8482,
309:162,
310:163,
311:9834,
312:224,
313:160,
314:232,
315:226,
316:234,
317:238,
318:244,
319:251,
544:193,
545:201,
546:211,
547:218,
548:220,
549:252,
550:8216,
551:161,
552:42,
553:39,
554:8212,
555:169,
556:8480,
557:8226,
558:8220,
559:8221,
560:192,
561:194,
562:199,
563:200,
564:202,
565:203,
566:235,
567:206,
568:207,
569:239,
570:212,
571:217,
572:249,
573:219,
574:171,
575:187,
800:195,
801:227,
802:205,
803:204,
804:236,
805:210,
806:242,
807:213,
808:245,
809:123,
810:125,
811:92,
812:94,
813:95,
814:124,
815:126,
816:196,
817:228,
818:214,
819:246,
820:223,
821:165,
822:164,
823:9474,
824:197,
825:229,
826:216,
827:248,
828:9484,
829:9488,
830:9492,
831:9496
}, Be = function(e) {
return null === e ? "" :(e = Ue[e] || e, String.fromCharCode(e));
}, Fe = 14, je = [ 4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152 ], Ve = function() {
for (var e = [], t = Fe + 1; t--; ) e.push("");
return e;
}, He = function Wi(e, t) {
Wi.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = t || 0, 
this.name_ = "CC" + ((this.field_ << 1 | this.dataChannel_) + 1), this.setConstants(), 
this.reset(), this.push = function(e) {
var t, i, n, r, a;
if (t = 32639 & e.ccData, t === this.lastControlCode_) return void (this.lastControlCode_ = null);
if (4096 === (61440 & t) ? this.lastControlCode_ = t :t !== this.PADDING_ && (this.lastControlCode_ = null), 
n = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn"; else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", 
this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, 
this.nonDisplayed_ = i, this.startPts_ = e.pts; else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, 
this.setRollUp(e.pts); else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, 
this.setRollUp(e.pts); else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, 
this.setRollUp(e.pts); else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), 
this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts; else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) :this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1); else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), 
this.displayed_ = Ve(); else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ve(); else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), 
this.displayed_ = Ve()), this.mode_ = "paintOn", this.startPts_ = e.pts; else if (this.isSpecialCharacter(n, r)) n = (3 & n) << 8, 
a = Be(n | r), this[this.mode_](e.pts, a), this.column_++; else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) :this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), 
n = (3 & n) << 8, a = Be(n | r), this[this.mode_](e.pts, a), this.column_++; else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts), 
this[this.mode_](e.pts, " "), this.column_++, 14 === (14 & r) && this.addFormatting(e.pts, [ "i" ]), 
1 === (1 & r) && this.addFormatting(e.pts, [ "u" ]); else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r; else if (this.isPAC(n, r)) {
var s = je.indexOf(7968 & t);
"rollUp" === this.mode_ && (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1), 
this.setRollUp(e.pts, s)), s !== this.row_ && (this.clearFormatting(e.pts), this.row_ = s), 
1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, [ "u" ]), 
16 === (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 === (14 & r) && this.addFormatting(e.pts, [ "i" ]);
} else this.isNormalChar(n) && (0 === r && (r = null), a = Be(n), a += Be(r), this[this.mode_](e.pts, a), 
this.column_ += a.length);
};
};
He.prototype = new B(), He.prototype.flushDisplayed = function(e) {
var t = this.displayed_.map(function(e) {
try {
return e.trim();
} catch (t) {
return console.error("Skipping malformed caption."), "";
}
}).join("\n").replace(/^\n+|\n+$/g, "");
t.length && this.trigger("data", {
startPts:this.startPts_,
endPts:e,
text:t,
stream:this.name_
});
}, He.prototype.reset = function() {
this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Ve(), 
this.nonDisplayed_ = Ve(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = Fe, 
this.rollUpRows_ = 2, this.formatting_ = [];
}, He.prototype.setConstants = function() {
0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, 
this.OFFSET_ = 23) :1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, 
this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, 
this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, 
this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, 
this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, 
this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, 
this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_;
}, He.prototype.isSpecialCharacter = function(e, t) {
return e === this.EXT_ && t >= 48 && 63 >= t;
}, He.prototype.isExtCharacter = function(e, t) {
return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && 63 >= t;
}, He.prototype.isMidRowCode = function(e, t) {
return e === this.EXT_ && t >= 32 && 47 >= t;
}, He.prototype.isOffsetControlCode = function(e, t) {
return e === this.OFFSET_ && t >= 33 && 35 >= t;
}, He.prototype.isPAC = function(e, t) {
return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && 127 >= t;
}, He.prototype.isColorPAC = function(e) {
return e >= 64 && 79 >= e || e >= 96 && 127 >= e;
}, He.prototype.isNormalChar = function(e) {
return e >= 32 && 127 >= e;
}, He.prototype.setRollUp = function(e, t) {
if ("rollUp" !== this.mode_ && (this.row_ = Fe, this.mode_ = "rollUp", this.flushDisplayed(e), 
this.nonDisplayed_ = Ve(), this.displayed_ = Ve()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], 
this.displayed_[this.row_ - i] = "";
void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1;
}, He.prototype.addFormatting = function(e, t) {
this.formatting_ = this.formatting_.concat(t);
var i = t.reduce(function(e, t) {
return e + "<" + t + ">";
}, "");
this[this.mode_](e, i);
}, He.prototype.clearFormatting = function(e) {
if (this.formatting_.length) {
var t = this.formatting_.reverse().reduce(function(e, t) {
return e + "</" + t + ">";
}, "");
this.formatting_ = [], this[this.mode_](e, t);
}
}, He.prototype.popOn = function(e, t) {
var i = this.nonDisplayed_[this.row_];
i += t, this.nonDisplayed_[this.row_] = i;
}, He.prototype.rollUp = function(e, t) {
var i = this.displayed_[this.row_];
i += t, this.displayed_[this.row_] = i;
}, He.prototype.shiftRowsUp_ = function() {
var e;
for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
for (e = this.row_ + 1; Fe + 1 > e; e++) this.displayed_[e] = "";
for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
this.displayed_[this.row_] = "";
}, He.prototype.paintOn = function(e, t) {
var i = this.displayed_[this.row_];
i += t, this.displayed_[this.row_] = i;
};
var qe = {
CaptionStream:xe,
Cea608Stream:He,
Cea708Stream:Me
}, We = {
H264_STREAM_TYPE:27,
ADTS_STREAM_TYPE:15,
METADATA_STREAM_TYPE:21
}, ze = 8589934592, Ge = 4294967296, Xe = "shared", Ke = function(e, t) {
var i = 1;
for (e > t && (i = -1); Math.abs(t - e) > Ge; ) e += i * ze;
return e;
}, Ye = function zi(e) {
var t, i;
zi.prototype.init.call(this), this.type_ = e || Xe, this.push = function(e) {
(this.type_ === Xe || e.type === this.type_) && (void 0 === i && (i = e.dts), e.dts = Ke(e.dts, i), 
e.pts = Ke(e.pts, i), t = e.dts, this.trigger("data", e));
}, this.flush = function() {
i = t, this.trigger("done");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline");
}, this.discontinuity = function() {
i = void 0, t = void 0;
}, this.reset = function() {
this.discontinuity(), this.trigger("reset");
};
};
Ye.prototype = new B();
var Qe, $e = {
TimestampRolloverStream:Ye,
handleRollover:Ke
}, Je = function(e, t, i) {
var n, r = "";
for (n = t; i > n; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
return r;
}, Ze = function(e, t, i) {
return decodeURIComponent(Je(e, t, i));
}, et = function(e, t, i) {
return unescape(Je(e, t, i));
}, tt = function(e) {
return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3];
}, it = {
TXXX:function(e) {
var t;
if (3 === e.data[0]) {
for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
e.description = Ze(e.data, 1, t), e.value = Ze(e.data, t + 1, e.data.length).replace(/\0*$/, "");
break;
}
e.data = e.value;
}
},
WXXX:function(e) {
var t;
if (3 === e.data[0]) for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
e.description = Ze(e.data, 1, t), e.url = Ze(e.data, t + 1, e.data.length);
break;
}
},
PRIV:function(e) {
var t;
for (t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
e.owner = et(e.data, 0, t);
break;
}
e.privateData = e.data.subarray(t + 1), e.data = e.privateData;
}
};
Qe = function(e) {
var t, i = {
debug:!(!e || !e.debug),
descriptor:e && e.descriptor
}, n = 0, r = [], a = 0;
if (Qe.prototype.init.call(this), this.dispatchType = We.METADATA_STREAM_TYPE.toString(16), 
i.descriptor) for (t = 0; t < i.descriptor.length; t++) this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
this.push = function(e) {
var t, s, o, u, l, c;
if ("timed-metadata" === e.type) {
if (e.dataAlignmentIndicator && (a = 0, r.length = 0), 0 === r.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) return void (i.debug && console.log("Skipping unrecognized metadata packet"));
if (r.push(e), a += e.data.byteLength, 1 === r.length && (n = tt(e.data.subarray(6, 10)), 
n += 10), !(n > a)) {
for (t = {
data:new Uint8Array(n),
frames:[],
pts:r[0].pts,
dts:r[0].dts
}, l = 0; n > l; ) t.data.set(r[0].data.subarray(0, n - l), l), l += r[0].data.byteLength, 
a -= r[0].data.byteLength, r.shift();
s = 10, 64 & t.data[5] && (s += 4, s += tt(t.data.subarray(10, 14)), n -= tt(t.data.subarray(16, 20)));
do {
if (o = tt(t.data.subarray(s + 4, s + 8)), 1 > o) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
if (c = String.fromCharCode(t.data[s], t.data[s + 1], t.data[s + 2], t.data[s + 3]), 
u = {
id:c,
data:t.data.subarray(s + 10, s + o + 10)
}, u.key = u.id, it[u.id] && (it[u.id](u), "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
var d = u.data, h = (1 & d[3]) << 30 | d[4] << 22 | d[5] << 14 | d[6] << 6 | d[7] >>> 2;
h *= 4, h += 3 & d[7], u.timeStamp = h, void 0 === t.pts && void 0 === t.dts && (t.pts = u.timeStamp, 
t.dts = u.timeStamp), this.trigger("timestamp", u);
}
t.frames.push(u), s += 10, s += o;
} while (n > s);
this.trigger("data", t);
}
}
};
}, Qe.prototype = new B();
var nt, rt, at, st = Qe, ot = $e.TimestampRolloverStream, ut = 188, lt = 71;
nt = function() {
var e = new Uint8Array(ut), t = 0;
nt.prototype.init.call(this), this.push = function(i) {
var n, r = 0, a = ut;
for (t ? (n = new Uint8Array(i.byteLength + t), n.set(e.subarray(0, t)), n.set(i, t), 
t = 0) :n = i; a < n.byteLength; ) n[r] !== lt || n[a] !== lt ? (r++, a++) :(this.trigger("data", n.subarray(r, a)), 
r += ut, a += ut);
r < n.byteLength && (e.set(n.subarray(r), 0), t = n.byteLength - r);
}, this.flush = function() {
t === ut && e[0] === lt && (this.trigger("data", e), t = 0), this.trigger("done");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline");
}, this.reset = function() {
t = 0, this.trigger("reset");
};
}, nt.prototype = new B(), rt = function() {
var e, t, i, n;
rt.prototype.init.call(this), n = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, 
e = function(e, n) {
var r = 0;
n.payloadUnitStartIndicator && (r += e[r] + 1), "pat" === n.type ? t(e.subarray(r), n) :i(e.subarray(r), n);
}, t = function(e, t) {
t.section_number = e[7], t.last_section_number = e[8], n.pmtPid = (31 & e[10]) << 8 | e[11], 
t.pmtPid = n.pmtPid;
}, i = function(e, t) {
var i, r, a, s;
if (1 & e[5]) {
for (n.programMapTable = {
video:null,
audio:null,
"timed-metadata":{}
}, i = (15 & e[1]) << 8 | e[2], r = 3 + i - 4, a = (15 & e[10]) << 8 | e[11], s = 12 + a; r > s; ) {
var o = e[s], u = (31 & e[s + 1]) << 8 | e[s + 2];
o === We.H264_STREAM_TYPE && null === n.programMapTable.video ? n.programMapTable.video = u :o === We.ADTS_STREAM_TYPE && null === n.programMapTable.audio ? n.programMapTable.audio = u :o === We.METADATA_STREAM_TYPE && (n.programMapTable["timed-metadata"][u] = o), 
s += ((15 & e[s + 3]) << 8 | e[s + 4]) + 5;
}
t.programMapTable = n.programMapTable;
}
}, this.push = function(t) {
var i = {}, n = 4;
if (i.payloadUnitStartIndicator = !!(64 & t[1]), i.pid = 31 & t[1], i.pid <<= 8, 
i.pid |= t[2], (48 & t[3]) >>> 4 > 1 && (n += t[n] + 1), 0 === i.pid) i.type = "pat", 
e(t.subarray(n), i), this.trigger("data", i); else if (i.pid === this.pmtPid) for (i.type = "pmt", 
e(t.subarray(n), i), this.trigger("data", i); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([ t, n, i ]) :this.processPes_(t, n, i);
}, this.processPes_ = function(e, t, i) {
i.pid === this.programMapTable.video ? i.streamType = We.H264_STREAM_TYPE :i.pid === this.programMapTable.audio ? i.streamType = We.ADTS_STREAM_TYPE :i.streamType = this.programMapTable["timed-metadata"][i.pid], 
i.type = "pes", i.data = e.subarray(t), this.trigger("data", i);
};
}, rt.prototype = new B(), rt.STREAM_TYPES = {
h264:27,
adts:15
}, at = function() {
var e, t = this, i = {
data:[],
size:0
}, n = {
data:[],
size:0
}, r = {
data:[],
size:0
}, a = function(e, t) {
var i;
t.packetLength = 6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = 0 !== (4 & e[6]), 
i = e[7], 192 & i && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, 
t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, 
t.dts *= 4, t.dts += (6 & e[18]) >>> 1)), t.data = e.subarray(9 + e[8]);
}, s = function(e, i, n) {
var r, s = new Uint8Array(e.size), o = {
type:i
}, u = 0, l = 0, c = !1;
if (e.data.length && !(e.size < 9)) {
for (o.trackId = e.data[0].pid, u = 0; u < e.data.length; u++) r = e.data[u], s.set(r.data, l), 
l += r.data.byteLength;
a(s, o), c = "video" === i || o.packetLength <= e.size, (n || c) && (e.size = 0, 
e.data.length = 0), c && t.trigger("data", o);
}
};
at.prototype.init.call(this), this.push = function(a) {
({
pat:function() {},
pes:function() {
var e, t;
switch (a.streamType) {
case We.H264_STREAM_TYPE:
e = i, t = "video";
break;

case We.ADTS_STREAM_TYPE:
e = n, t = "audio";
break;

case We.METADATA_STREAM_TYPE:
e = r, t = "timed-metadata";
break;

default:
return;
}
a.payloadUnitStartIndicator && s(e, t, !0), e.data.push(a), e.size += a.data.byteLength;
},
pmt:function() {
var i = {
type:"metadata",
tracks:[]
};
e = a.programMapTable, null !== e.video && i.tracks.push({
timelineStartInfo:{
baseMediaDecodeTime:0
},
id:+e.video,
codec:"avc",
type:"video"
}), null !== e.audio && i.tracks.push({
timelineStartInfo:{
baseMediaDecodeTime:0
},
id:+e.audio,
codec:"adts",
type:"audio"
}), t.trigger("data", i);
}
})[a.type]();
}, this.reset = function() {
i.size = 0, i.data.length = 0, n.size = 0, n.data.length = 0, this.trigger("reset");
}, this.flushStreams_ = function() {
s(i, "video"), s(n, "audio"), s(r, "timed-metadata");
}, this.flush = function() {
this.flushStreams_(), this.trigger("done");
};
}, at.prototype = new B();
var ct = {
PAT_PID:0,
MP2T_PACKET_LENGTH:ut,
TransportPacketStream:nt,
TransportParseStream:rt,
ElementaryStream:at,
TimestampRolloverStream:ot,
CaptionStream:qe.CaptionStream,
Cea608Stream:qe.Cea608Stream,
Cea708Stream:qe.Cea708Stream,
MetadataStream:st
};
for (var dt in We) We.hasOwnProperty(dt) && (ct[dt] = We[dt]);
var ht, pt = ct, ft = de.ONE_SECOND_IN_TS, mt = [ 96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350 ];
ht = function(e) {
var t, i = 0;
ht.prototype.init.call(this), this.push = function(n) {
var r, a, s, o, u, l, c = 0;
if (e || (i = 0), "audio" === n.type) for (t ? (o = t, t = new Uint8Array(o.byteLength + n.data.byteLength), 
t.set(o), t.set(n.data, o.byteLength)) :t = n.data; c + 5 < t.length; ) if (255 === t[c] && 240 === (246 & t[c + 1])) {
if (a = 2 * (1 & ~t[c + 1]), r = (3 & t[c + 3]) << 11 | t[c + 4] << 3 | (224 & t[c + 5]) >> 5, 
u = 1024 * ((3 & t[c + 6]) + 1), l = u * ft / mt[(60 & t[c + 2]) >>> 2], s = c + r, 
t.byteLength < s) return;
if (this.trigger("data", {
pts:n.pts + i * l,
dts:n.dts + i * l,
sampleCount:u,
audioobjecttype:(t[c + 2] >>> 6 & 3) + 1,
channelcount:(1 & t[c + 2]) << 2 | (192 & t[c + 3]) >>> 6,
samplerate:mt[(60 & t[c + 2]) >>> 2],
samplingfrequencyindex:(60 & t[c + 2]) >>> 2,
samplesize:16,
data:t.subarray(c + 7 + a, s)
}), i++, t.byteLength === s) return void (t = void 0);
t = t.subarray(s);
} else c++;
}, this.flush = function() {
i = 0, this.trigger("done");
}, this.reset = function() {
t = void 0, this.trigger("reset");
}, this.endTimeline = function() {
t = void 0, this.trigger("endedtimeline");
};
}, ht.prototype = new B();
var gt, vt = ht;
gt = function(e) {
var t = e.byteLength, i = 0, n = 0;
this.length = function() {
return 8 * t;
}, this.bitsAvailable = function() {
return 8 * t + n;
}, this.loadWord = function() {
var r = e.byteLength - t, a = new Uint8Array(4), s = Math.min(4, t);
if (0 === s) throw new Error("no bytes available");
a.set(e.subarray(r, r + s)), i = new DataView(a.buffer).getUint32(0), n = 8 * s, 
t -= s;
}, this.skipBits = function(e) {
var r;
n > e ? (i <<= e, n -= e) :(e -= n, r = Math.floor(e / 8), e -= 8 * r, t -= r, this.loadWord(), 
i <<= e, n -= e);
}, this.readBits = function(e) {
var r = Math.min(n, e), a = i >>> 32 - r;
return n -= r, n > 0 ? i <<= r :t > 0 && this.loadWord(), r = e - r, r > 0 ? a << r | this.readBits(r) :a;
}, this.skipLeadingZeros = function() {
var e;
for (e = 0; n > e; ++e) if (0 !== (i & 2147483648 >>> e)) return i <<= e, n -= e, 
e;
return this.loadWord(), e + this.skipLeadingZeros();
}, this.skipUnsignedExpGolomb = function() {
this.skipBits(1 + this.skipLeadingZeros());
}, this.skipExpGolomb = function() {
this.skipBits(1 + this.skipLeadingZeros());
}, this.readUnsignedExpGolomb = function() {
var e = this.skipLeadingZeros();
return this.readBits(e + 1) - 1;
}, this.readExpGolomb = function() {
var e = this.readUnsignedExpGolomb();
return 1 & e ? 1 + e >>> 1 :-1 * (e >>> 1);
}, this.readBoolean = function() {
return 1 === this.readBits(1);
}, this.readUnsignedByte = function() {
return this.readBits(8);
}, this.loadWord();
};
var yt, _t, bt, Tt = gt;
_t = function() {
var e, t, i = 0;
_t.prototype.init.call(this), this.push = function(n) {
var r;
t ? (r = new Uint8Array(t.byteLength + n.data.byteLength), r.set(t), r.set(n.data, t.byteLength), 
t = r) :t = n.data;
for (var a = t.byteLength; a - 3 > i; i++) if (1 === t[i + 2]) {
e = i + 5;
break;
}
for (;a > e; ) switch (t[e]) {
case 0:
if (0 !== t[e - 1]) {
e += 2;
break;
}
if (0 !== t[e - 2]) {
e++;
break;
}
i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
do e++; while (1 !== t[e] && a > e);
i = e - 2, e += 3;
break;

case 1:
if (0 !== t[e - 1] || 0 !== t[e - 2]) {
e += 3;
break;
}
this.trigger("data", t.subarray(i + 3, e - 2)), i = e - 2, e += 3;
break;

default:
e += 3;
}
t = t.subarray(i), e -= i, i = 0;
}, this.reset = function() {
t = null, i = 0, this.trigger("reset");
}, this.flush = function() {
t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)), t = null, i = 0, 
this.trigger("done");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline");
};
}, _t.prototype = new B(), bt = {
100:!0,
110:!0,
122:!0,
244:!0,
44:!0,
83:!0,
86:!0,
118:!0,
128:!0,
138:!0,
139:!0,
134:!0
}, yt = function() {
var e, t, i, n, r, a, s, o = new _t();
yt.prototype.init.call(this), e = this, this.push = function(e) {
"video" === e.type && (t = e.trackId, i = e.pts, n = e.dts, o.push(e));
}, o.on("data", function(s) {
var o = {
trackId:t,
pts:i,
dts:n,
data:s
};
switch (31 & s[0]) {
case 5:
o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
break;

case 6:
o.nalUnitType = "sei_rbsp", o.escapedRBSP = r(s.subarray(1));
break;

case 7:
o.nalUnitType = "seq_parameter_set_rbsp", o.escapedRBSP = r(s.subarray(1)), o.config = a(o.escapedRBSP);
break;

case 8:
o.nalUnitType = "pic_parameter_set_rbsp";
break;

case 9:
o.nalUnitType = "access_unit_delimiter_rbsp";
}
e.trigger("data", o);
}), o.on("done", function() {
e.trigger("done");
}), o.on("partialdone", function() {
e.trigger("partialdone");
}), o.on("reset", function() {
e.trigger("reset");
}), o.on("endedtimeline", function() {
e.trigger("endedtimeline");
}), this.flush = function() {
o.flush();
}, this.partialFlush = function() {
o.partialFlush();
}, this.reset = function() {
o.reset();
}, this.endTimeline = function() {
o.endTimeline();
}, s = function(e, t) {
var i, n, r = 8, a = 8;
for (i = 0; e > i; i++) 0 !== a && (n = t.readExpGolomb(), a = (r + n + 256) % 256), 
r = 0 === a ? r :a;
}, r = function(e) {
for (var t, i, n = e.byteLength, r = [], a = 1; n - 2 > a; ) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), 
a += 2) :a++;
if (0 === r.length) return e;
t = n - r.length, i = new Uint8Array(t);
var s = 0;
for (a = 0; t > a; s++, a++) s === r[0] && (s++, r.shift()), i[a] = e[s];
return i;
}, a = function(e) {
var t, i, n, r, a, o, u, l, c, d, h, p, f, m, g = 0, v = 0, y = 0, _ = 0, b = 1;
if (t = new Tt(e), i = t.readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), 
t.skipUnsignedExpGolomb(), bt[i] && (a = t.readUnsignedExpGolomb(), 3 === a && t.skipBits(1), 
t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean())) for (h = 3 !== a ? 8 :12, 
m = 0; h > m; m++) t.readBoolean() && (6 > m ? s(16, t) :s(64, t));
if (t.skipUnsignedExpGolomb(), o = t.readUnsignedExpGolomb(), 0 === o) t.readUnsignedExpGolomb(); else if (1 === o) for (t.skipBits(1), 
t.skipExpGolomb(), t.skipExpGolomb(), u = t.readUnsignedExpGolomb(), m = 0; u > m; m++) t.skipExpGolomb();
if (t.skipUnsignedExpGolomb(), t.skipBits(1), l = t.readUnsignedExpGolomb(), c = t.readUnsignedExpGolomb(), 
d = t.readBits(1), 0 === d && t.skipBits(1), t.skipBits(1), t.readBoolean() && (g = t.readUnsignedExpGolomb(), 
v = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb(), _ = t.readUnsignedExpGolomb()), 
t.readBoolean() && t.readBoolean()) {
switch (f = t.readUnsignedByte()) {
case 1:
p = [ 1, 1 ];
break;

case 2:
p = [ 12, 11 ];
break;

case 3:
p = [ 10, 11 ];
break;

case 4:
p = [ 16, 11 ];
break;

case 5:
p = [ 40, 33 ];
break;

case 6:
p = [ 24, 11 ];
break;

case 7:
p = [ 20, 11 ];
break;

case 8:
p = [ 32, 11 ];
break;

case 9:
p = [ 80, 33 ];
break;

case 10:
p = [ 18, 11 ];
break;

case 11:
p = [ 15, 11 ];
break;

case 12:
p = [ 64, 33 ];
break;

case 13:
p = [ 160, 99 ];
break;

case 14:
p = [ 4, 3 ];
break;

case 15:
p = [ 3, 2 ];
break;

case 16:
p = [ 2, 1 ];
break;

case 255:
p = [ t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte() ];
}
p && (b = p[0] / p[1]);
}
return {
profileIdc:i,
levelIdc:n,
profileCompatibility:r,
width:Math.ceil((16 * (l + 1) - 2 * g - 2 * v) * b),
height:(2 - d) * (c + 1) * 16 - 2 * y - 2 * _,
sarRatio:p
};
};
}, yt.prototype = new B();
var St, kt = {
H264Stream:yt,
NalByteStream:_t
}, wt = [ 96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350 ], Et = function(e, t) {
var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9], n = e[t + 5], r = (16 & n) >> 4;
return i = i >= 0 ? i :0, r ? i + 20 :i + 10;
}, Ct = function Gi(e, t) {
return e.length - t < 10 || e[t] !== "I".charCodeAt(0) || e[t + 1] !== "D".charCodeAt(0) || e[t + 2] !== "3".charCodeAt(0) ? t :(t += Et(e, t), 
Gi(e, t));
}, It = function(e) {
var t = Ct(e, 0);
return e.length >= t + 2 && 255 === (255 & e[t]) && 240 === (240 & e[t + 1]) && 16 === (22 & e[t + 1]);
}, Pt = function(e) {
return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3];
}, At = function(e, t, i) {
var n, r = "";
for (n = t; i > n; n++) r += "%" + ("00" + e[n].toString(16)).slice(-2);
return r;
}, xt = function(e, t, i) {
return unescape(At(e, t, i));
}, Lt = function(e, t) {
var i = (224 & e[t + 5]) >> 5, n = e[t + 4] << 3, r = 6144 & e[t + 3];
return r | n | i;
}, Dt = function(e, t) {
return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" :e[t] & !0 && 240 === (240 & e[t + 1]) ? "audio" :null;
}, Ot = function(e) {
for (var t = 0; t + 5 < e.length; ) {
if (255 === e[t] && 240 === (246 & e[t + 1])) return wt[(60 & e[t + 2]) >>> 2];
t++;
}
return null;
}, Rt = function(e) {
var t, i, n, r;
t = 10, 64 & e[5] && (t += 4, t += Pt(e.subarray(10, 14)));
do {
if (i = Pt(e.subarray(t + 4, t + 8)), 1 > i) return null;
if (r = String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3]), "PRIV" === r) {
n = e.subarray(t + 10, t + i + 10);
for (var a = 0; a < n.byteLength; a++) if (0 === n[a]) {
var s = xt(n, 0, a);
if ("com.apple.streaming.transportStreamTimestamp" === s) {
var o = n.subarray(a + 1), u = (1 & o[3]) << 30 | o[4] << 22 | o[5] << 14 | o[6] << 6 | o[7] >>> 2;
return u *= 4, u += 3 & o[7];
}
break;
}
}
t += 10, t += i;
} while (t < e.byteLength);
return null;
}, Nt = {
isLikelyAacData:It,
parseId3TagSize:Et,
parseAdtsSize:Lt,
parseType:Dt,
parseSampleRate:Ot,
parseAacTimestamp:Rt
};
St = function() {
var e = new Uint8Array(), t = 0;
St.prototype.init.call(this), this.setTimestamp = function(e) {
t = e;
}, this.push = function(i) {
var n, r, a, s, o = 0, u = 0;
for (e.length ? (s = e.length, e = new Uint8Array(i.byteLength + s), e.set(e.subarray(0, s)), 
e.set(i, s)) :e = i; e.length - u >= 3; ) if (e[u] !== "I".charCodeAt(0) || e[u + 1] !== "D".charCodeAt(0) || e[u + 2] !== "3".charCodeAt(0)) if (255 !== (255 & e[u]) || 240 !== (240 & e[u + 1])) u++; else {
if (e.length - u < 7) break;
if (o = Nt.parseAdtsSize(e, u), u + o > e.length) break;
a = {
type:"audio",
data:e.subarray(u, u + o),
pts:t,
dts:t
}, this.trigger("data", a), u += o;
} else {
if (e.length - u < 10) break;
if (o = Nt.parseId3TagSize(e, u), u + o > e.length) break;
r = {
type:"timed-metadata",
data:e.subarray(u, u + o)
}, this.trigger("data", r), u += o;
}
n = e.length - u, e = n > 0 ? e.subarray(u) :new Uint8Array();
}, this.reset = function() {
e = new Uint8Array(), this.trigger("reset");
}, this.endTimeline = function() {
e = new Uint8Array(), this.trigger("endedtimeline");
};
}, St.prototype = new B();
var Mt, Ut, Bt, Ft, jt = St, Vt = [ "audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize" ], Ht = Vt, qt = [ "width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio" ], Wt = qt, zt = kt.H264Stream, Gt = Nt.isLikelyAacData, Xt = de.ONE_SECOND_IN_TS, Kt = function(e, t) {
var i;
if (e.length !== t.length) return !1;
for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
return !0;
}, Yt = function(e, t, i, n, r, a) {
var s = i - t, o = n - t, u = r - i;
return {
start:{
dts:e,
pts:e + s
},
end:{
dts:e + o,
pts:e + u
},
prependedContentDuration:a,
baseMediaDecodeTime:e
};
};
Ut = function(e, t) {
var i = [], n = 0, r = 0, a = 0, s = 1 / 0;
t = t || {}, Ut.prototype.init.call(this), this.push = function(t) {
Se.collectDtsInfo(e, t), e && Ht.forEach(function(i) {
e[i] = t[i];
}), i.push(t);
}, this.setEarliestDts = function(e) {
r = e;
}, this.setVideoBaseMediaDecodeTime = function(e) {
s = e;
}, this.setAudioAppendStart = function(e) {
a = e;
}, this.flush = function() {
var o, u, l, c, d, h, p;
return 0 === i.length ? void this.trigger("done", "AudioSegmentStream") :(o = ve.trimAdtsFramesByEarliestDts(i, e, r), 
e.baseMediaDecodeTime = Se.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), 
p = ve.prefixWithSilence(e, o, a, s), e.samples = ve.generateSampleTable(o), l = K.mdat(ve.concatenateFrameData(o)), 
i = [], u = K.moof(n, [ e ]), c = new Uint8Array(u.byteLength + l.byteLength), n++, 
c.set(u), c.set(l, u.byteLength), Se.clearDtsInfo(e), d = Math.ceil(1024 * Xt / e.samplerate), 
o.length && (h = o.length * d, this.trigger("segmentTimingInfo", Yt(de.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), o[0].dts, o[0].pts, o[0].dts + h, o[0].pts + h, p || 0)), 
this.trigger("timingInfo", {
start:o[0].pts,
end:o[0].pts + h
})), this.trigger("data", {
track:e,
boxes:c
}), void this.trigger("done", "AudioSegmentStream"));
}, this.reset = function() {
Se.clearDtsInfo(e), i = [], this.trigger("reset");
};
}, Ut.prototype = new B(), Mt = function(e, t) {
var i, n, r = 0, a = [], s = [];
t = t || {}, Mt.prototype.init.call(this), delete e.minPTS, this.gopCache_ = [], 
this.push = function(t) {
Se.collectDtsInfo(e, t), "seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config, 
e.sps = [ t.data ], Wt.forEach(function(t) {
e[t] = i[t];
}, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.data, e.pps = [ t.data ]), 
a.push(t);
}, this.flush = function() {
for (var i, n, o, u, l, c, d, h, p = 0; a.length && "access_unit_delimiter_rbsp" !== a[0].nalUnitType; ) a.shift();
if (0 === a.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
if (i = re.groupNalsIntoFrames(a), o = re.groupFramesIntoGops(i), o[0][0].keyFrame || (n = this.getGopForFusion_(a[0], e), 
n ? (p = n.duration, o.unshift(n), o.byteLength += n.byteLength, o.nalCount += n.nalCount, 
o.pts = n.pts, o.dts = n.dts, o.duration += n.duration) :o = re.extendFirstKeyFrame(o)), 
s.length) {
var f;
if (f = t.alignGopsAtEnd ? this.alignGopsAtEnd_(o) :this.alignGopsAtStart_(o), !f) return this.gopCache_.unshift({
gop:o.pop(),
pps:e.pps,
sps:e.sps
}), this.gopCache_.length = Math.min(6, this.gopCache_.length), a = [], this.resetStream_(), 
void this.trigger("done", "VideoSegmentStream");
Se.clearDtsInfo(e), o = f;
}
Se.collectDtsInfo(e, o), e.samples = re.generateSampleTable(o), l = K.mdat(re.concatenateNalData(o)), 
e.baseMediaDecodeTime = Se.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), 
this.trigger("processedGopsInfo", o.map(function(e) {
return {
pts:e.pts,
dts:e.dts,
byteLength:e.byteLength
};
})), d = o[0], h = o[o.length - 1], this.trigger("segmentTimingInfo", Yt(e.baseMediaDecodeTime, d.dts, d.pts, h.dts + h.duration, h.pts + h.duration, p)), 
this.trigger("timingInfo", {
start:o[0].pts,
end:o[o.length - 1].pts + o[o.length - 1].duration
}), this.gopCache_.unshift({
gop:o.pop(),
pps:e.pps,
sps:e.sps
}), this.gopCache_.length = Math.min(6, this.gopCache_.length), a = [], this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), 
this.trigger("timelineStartInfo", e.timelineStartInfo), u = K.moof(r, [ e ]), c = new Uint8Array(u.byteLength + l.byteLength), 
r++, c.set(u), c.set(l, u.byteLength), this.trigger("data", {
track:e,
boxes:c
}), this.resetStream_(), this.trigger("done", "VideoSegmentStream");
}, this.reset = function() {
this.resetStream_(), a = [], this.gopCache_.length = 0, s.length = 0, this.trigger("reset");
}, this.resetStream_ = function() {
Se.clearDtsInfo(e), i = void 0, n = void 0;
}, this.getGopForFusion_ = function(t) {
var i, n, r, a, s, o = 45e3, u = 1e4, l = 1 / 0;
for (s = 0; s < this.gopCache_.length; s++) a = this.gopCache_[s], r = a.gop, e.pps && Kt(e.pps[0], a.pps[0]) && e.sps && Kt(e.sps[0], a.sps[0]) && (r.dts < e.timelineStartInfo.dts || (i = t.dts - r.dts - r.duration, 
i >= -u && o >= i && (!n || l > i) && (n = a, l = i)));
return n ? n.gop :null;
}, this.alignGopsAtStart_ = function(e) {
var t, i, n, r, a, o, u, l;
for (a = e.byteLength, o = e.nalCount, u = e.duration, t = i = 0; t < s.length && i < e.length && (n = s[t], 
r = e[i], n.pts !== r.pts); ) r.pts > n.pts ? t++ :(i++, a -= r.byteLength, o -= r.nalCount, 
u -= r.duration);
return 0 === i ? e :i === e.length ? null :(l = e.slice(i), l.byteLength = a, l.duration = u, 
l.nalCount = o, l.pts = l[0].pts, l.dts = l[0].dts, l);
}, this.alignGopsAtEnd_ = function(e) {
var t, i, n, r, a, o;
for (t = s.length - 1, i = e.length - 1, a = null, o = !1; t >= 0 && i >= 0; ) {
if (n = s[t], r = e[i], n.pts === r.pts) {
o = !0;
break;
}
n.pts > r.pts ? t-- :(t === s.length - 1 && (a = i), i--);
}
if (!o && null === a) return null;
var u;
if (u = o ? i :a, 0 === u) return e;
var l = e.slice(u), c = l.reduce(function(e, t) {
return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, 
e;
}, {
byteLength:0,
duration:0,
nalCount:0
});
return l.byteLength = c.byteLength, l.duration = c.duration, l.nalCount = c.nalCount, 
l.pts = l[0].pts, l.dts = l[0].dts, l;
}, this.alignGopsWith = function(e) {
s = e;
};
}, Mt.prototype = new B(), Ft = function(e, t) {
this.numberOfTracks = 0, this.metadataStream = t, e = e || {}, "undefined" != typeof e.remux ? this.remuxTracks = !!e.remux :this.remuxTracks = !0, 
"boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps :this.keepOriginalTimestamps = !1, 
this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], 
this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, Ft.prototype.init.call(this), 
this.push = function(e) {
return e.text ? this.pendingCaptions.push(e) :e.frames ? this.pendingMetadata.push(e) :(this.pendingTracks.push(e.track), 
this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, 
this.pendingBoxes.push(e.boxes)), void ("audio" === e.track.type && (this.audioTrack = e.track, 
this.pendingBoxes.unshift(e.boxes))));
};
}, Ft.prototype = new B(), Ft.prototype.flush = function(e) {
var t, i, n, r, a = 0, s = {
captions:[],
captionStreams:{},
metadata:[],
info:{}
}, o = 0;
if (this.pendingTracks.length < this.numberOfTracks) {
if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
if (this.remuxTracks) return;
if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), 
this.emittedTracks = 0));
}
if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, Wt.forEach(function(e) {
s.info[e] = this.videoTrack[e];
}, this)) :this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, Ht.forEach(function(e) {
s.info[e] = this.audioTrack[e];
}, this)), this.videoTrack || this.audioTrack) {
for (1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type :s.type = "combined", 
this.emittedTracks += this.pendingTracks.length, n = K.initSegment(this.pendingTracks), 
s.initSegment = new Uint8Array(n.byteLength), s.initSegment.set(n), s.data = new Uint8Array(this.pendingBytes), 
r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], a), a += this.pendingBoxes[r].byteLength;
for (r = 0; r < this.pendingCaptions.length; r++) t = this.pendingCaptions[r], t.startTime = de.metadataTsToSeconds(t.startPts, o, this.keepOriginalTimestamps), 
t.endTime = de.metadataTsToSeconds(t.endPts, o, this.keepOriginalTimestamps), s.captionStreams[t.stream] = !0, 
s.captions.push(t);
for (r = 0; r < this.pendingMetadata.length; r++) i = this.pendingMetadata[r], i.cueTime = de.metadataTsToSeconds(i.pts, o, this.keepOriginalTimestamps), 
s.metadata.push(i);
for (s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, 
this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, 
this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), 
r = 0; r < s.captions.length; r++) t = s.captions[r], this.trigger("caption", t);
for (r = 0; r < s.metadata.length; r++) i = s.metadata[r], this.trigger("id3Frame", i);
}
this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
}, Ft.prototype.setRemux = function(e) {
this.remuxTracks = e;
}, Bt = function(e) {
var t, i, n = this, r = !0;
Bt.prototype.init.call(this), e = e || {}, this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0, 
this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
var r = {};
this.transmuxPipeline_ = r, r.type = "aac", r.metadataStream = new pt.MetadataStream(), 
r.aacStream = new jt(), r.audioTimestampRolloverStream = new pt.TimestampRolloverStream("audio"), 
r.timedMetadataTimestampRolloverStream = new pt.TimestampRolloverStream("timed-metadata"), 
r.adtsStream = new vt(), r.coalesceStream = new Ft(e, r.metadataStream), r.headOfPipeline = r.aacStream, 
r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream), r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream), 
r.metadataStream.on("timestamp", function(e) {
r.aacStream.setTimestamp(e.timeStamp);
}), r.aacStream.on("data", function(a) {
"timed-metadata" !== a.type && "audio" !== a.type || r.audioSegmentStream || (i = i || {
timelineStartInfo:{
baseMediaDecodeTime:n.baseMediaDecodeTime
},
codec:"adts",
type:"audio"
}, r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new Ut(i, e), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), 
r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream), n.trigger("trackinfo", {
hasAudio:!!i,
hasVideo:!!t
}));
}), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("done", this.trigger.bind(this, "done"));
}, this.setupTsPipeline = function() {
var r = {};
this.transmuxPipeline_ = r, r.type = "ts", r.metadataStream = new pt.MetadataStream(), 
r.packetStream = new pt.TransportPacketStream(), r.parseStream = new pt.TransportParseStream(), 
r.elementaryStream = new pt.ElementaryStream(), r.timestampRolloverStream = new pt.TimestampRolloverStream(), 
r.adtsStream = new vt(), r.h264Stream = new zt(), r.captionStream = new pt.CaptionStream(), 
r.coalesceStream = new Ft(e, r.metadataStream), r.headOfPipeline = r.packetStream, 
r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream), 
r.timestampRolloverStream.pipe(r.h264Stream), r.timestampRolloverStream.pipe(r.adtsStream), 
r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream), r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream), 
r.elementaryStream.on("data", function(a) {
var s;
if ("metadata" === a.type) {
for (s = a.tracks.length; s--; ) t || "video" !== a.tracks[s].type ? i || "audio" !== a.tracks[s].type || (i = a.tracks[s], 
i.timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime) :(t = a.tracks[s], 
t.timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime);
t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++, r.videoSegmentStream = new Mt(t, e), 
r.videoSegmentStream.on("timelineStartInfo", function(t) {
i && !e.keepOriginalTimestamps && (i.timelineStartInfo = t, r.audioSegmentStream.setEarliestDts(t.dts - n.baseMediaDecodeTime));
}), r.videoSegmentStream.on("processedGopsInfo", n.trigger.bind(n, "gopInfo")), 
r.videoSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "videoSegmentTimingInfo")), 
r.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e);
}), r.videoSegmentStream.on("timingInfo", n.trigger.bind(n, "videoTimingInfo")), 
r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)), i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++, 
r.audioSegmentStream = new Ut(i, e), r.audioSegmentStream.on("timingInfo", n.trigger.bind(n, "audioTimingInfo")), 
r.audioSegmentStream.on("segmentTimingInfo", n.trigger.bind(n, "audioSegmentTimingInfo")), 
r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)), n.trigger("trackinfo", {
hasAudio:!!i,
hasVideo:!!t
});
}
}), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("id3Frame", function(e) {
e.dispatchType = r.metadataStream.dispatchType, n.trigger("id3Frame", e);
}), r.coalesceStream.on("caption", this.trigger.bind(this, "caption")), r.coalesceStream.on("done", this.trigger.bind(this, "done"));
}, this.setBaseMediaDecodeTime = function(n) {
var r = this.transmuxPipeline_;
e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n), i && (i.timelineStartInfo.dts = void 0, 
i.timelineStartInfo.pts = void 0, Se.clearDtsInfo(i), r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()), 
t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []), t.timelineStartInfo.dts = void 0, 
t.timelineStartInfo.pts = void 0, Se.clearDtsInfo(t), r.captionStream.reset()), 
r.timestampRolloverStream && r.timestampRolloverStream.discontinuity();
}, this.setAudioAppendStart = function(e) {
i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e);
}, this.setRemux = function(t) {
var i = this.transmuxPipeline_;
e.remux = t, i && i.coalesceStream && i.coalesceStream.setRemux(t);
}, this.alignGopsWith = function(e) {
t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e);
}, this.push = function(e) {
if (r) {
var t = Gt(e);
t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() :t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), 
r = !1;
}
this.transmuxPipeline_.headOfPipeline.push(e);
}, this.flush = function() {
r = !0, this.transmuxPipeline_.headOfPipeline.flush();
}, this.endTimeline = function() {
this.transmuxPipeline_.headOfPipeline.endTimeline();
}, this.reset = function() {
this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
}, this.resetCaptions = function() {
this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
};
}, Bt.prototype = new B();
var Qt = {
Transmuxer:Bt,
VideoSegmentStream:Mt,
AudioSegmentStream:Ut,
AUDIO_PROPERTIES:Ht,
VIDEO_PROPERTIES:Wt,
generateSegmentTimingInfo:Yt
}, $t = {
Adts:vt,
h264:kt
}, Jt = de.ONE_SECOND_IN_TS, Zt = function Xi(e, t) {
var i = [], n = 0, r = 0, a = 0, s = 1 / 0, o = null, u = null;
t = t || {}, Xi.prototype.init.call(this), this.push = function(t) {
Se.collectDtsInfo(e, t), e && Ht.forEach(function(i) {
e[i] = t[i];
}), i.push(t);
}, this.setEarliestDts = function(e) {
r = e;
}, this.setVideoBaseMediaDecodeTime = function(e) {
s = e;
}, this.setAudioAppendStart = function(e) {
a = e;
}, this.processFrames_ = function() {
var l, c, d, h, p;
0 !== i.length && (l = ve.trimAdtsFramesByEarliestDts(i, e, r), 0 !== l.length && (e.baseMediaDecodeTime = Se.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), 
ve.prefixWithSilence(e, l, a, s), e.samples = ve.generateSampleTable(l), d = K.mdat(ve.concatenateFrameData(l)), 
i = [], c = K.moof(n, [ e ]), n++, e.initSegment = K.initSegment([ e ]), h = new Uint8Array(c.byteLength + d.byteLength), 
h.set(c), h.set(d, c.byteLength), Se.clearDtsInfo(e), null === o && (u = o = l[0].pts), 
u += l.length * (1024 * Jt / e.samplerate), p = {
start:o
}, this.trigger("timingInfo", p), this.trigger("data", {
track:e,
boxes:h
})));
}, this.flush = function() {
this.processFrames_(), this.trigger("timingInfo", {
start:o,
end:u
}), this.resetTiming_(), this.trigger("done", "AudioSegmentStream");
}, this.partialFlush = function() {
this.processFrames_(), this.trigger("partialdone", "AudioSegmentStream");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline", "AudioSegmentStream");
}, this.resetTiming_ = function() {
Se.clearDtsInfo(e), o = null, u = null;
}, this.reset = function() {
this.resetTiming_(), i = [], this.trigger("reset");
};
};
Zt.prototype = new B();
var ei = Zt, ti = function Ki(e, t) {
var i, n, r, a = 0, s = [], o = [], u = null, l = null, c = !0;
t = t || {}, Ki.prototype.init.call(this), this.push = function(t) {
Se.collectDtsInfo(e, t), "undefined" == typeof e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), 
"seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config, e.sps = [ t.data ], 
Wt.forEach(function(t) {
e[t] = i[t];
}, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.data, e.pps = [ t.data ]), 
s.push(t);
}, this.processNals_ = function(i) {
var n;
for (s = o.concat(s); s.length && "access_unit_delimiter_rbsp" !== s[0].nalUnitType; ) s.shift();
if (0 !== s.length) {
var d = re.groupNalsIntoFrames(s);
if (d.length) {
if (o = d[d.length - 1], i && (d.pop(), d.duration -= o.duration, d.nalCount -= o.length, 
d.byteLength -= o.byteLength), !d.length) return void (s = []);
if (this.trigger("timelineStartInfo", e.timelineStartInfo), c) {
if (r = re.groupFramesIntoGops(d), !r[0][0].keyFrame) {
if (r = re.extendFirstKeyFrame(r), !r[0][0].keyFrame) return s = [].concat.apply([], d).concat(o), 
void (o = []);
d = [].concat.apply([], r), d.duration = r.duration;
}
c = !1;
}
for (null === u && (u = d[0].pts, l = u), l += d.duration, this.trigger("timingInfo", {
start:u,
end:l
}), n = 0; n < d.length; n++) {
var h = d[n];
e.samples = re.generateSampleTableForFrame(h);
var p = K.mdat(re.concatenateNalDataForFrame(h));
Se.clearDtsInfo(e), Se.collectDtsInfo(e, h), e.baseMediaDecodeTime = Se.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps);
var f = K.moof(a, [ e ]);
a++, e.initSegment = K.initSegment([ e ]);
var m = new Uint8Array(f.byteLength + p.byteLength);
m.set(f), m.set(p, f.byteLength), this.trigger("data", {
track:e,
boxes:m,
sequence:a,
videoFrameDts:h.dts,
videoFramePts:h.pts
});
}
s = [];
}
}
}, this.resetTimingAndConfig_ = function() {
i = void 0, n = void 0, u = null, l = null;
}, this.partialFlush = function() {
this.processNals_(!0), this.trigger("partialdone", "VideoSegmentStream");
}, this.flush = function() {
this.processNals_(!1), this.resetTimingAndConfig_(), this.trigger("done", "VideoSegmentStream");
}, this.endTimeline = function() {
this.flush(), this.trigger("endedtimeline", "VideoSegmentStream");
}, this.reset = function() {
this.resetTimingAndConfig_(), o = [], s = [], c = !0, this.trigger("reset");
};
};
ti.prototype = new B();
var ii = ti, ni = Nt.isLikelyAacData, ri = function(e) {
return e.prototype = new B(), e.prototype.init.call(e), e;
}, ai = function(e) {
var t = {
type:"ts",
tracks:{
audio:null,
video:null
},
packet:new pt.TransportPacketStream(),
parse:new pt.TransportParseStream(),
elementary:new pt.ElementaryStream(),
timestampRollover:new pt.TimestampRolloverStream(),
adts:new $t.Adts(),
h264:new $t.h264.H264Stream(),
captionStream:new pt.CaptionStream(),
metadataStream:new pt.MetadataStream()
};
return t.headOfPipeline = t.packet, t.packet.pipe(t.parse).pipe(t.elementary).pipe(t.timestampRollover), 
t.timestampRollover.pipe(t.h264), t.h264.pipe(t.captionStream), t.timestampRollover.pipe(t.metadataStream), 
t.timestampRollover.pipe(t.adts), t.elementary.on("data", function(i) {
if ("metadata" === i.type) {
for (var n = 0; n < i.tracks.length; n++) t.tracks[i.tracks[n].type] || (t.tracks[i.tracks[n].type] = i.tracks[n], 
t.tracks[i.tracks[n].type].timelineStartInfo.baseMediaDecodeTime = e.baseMediaDecodeTime);
t.tracks.video && !t.videoSegmentStream && (t.videoSegmentStream = new ii(t.tracks.video, e), 
t.videoSegmentStream.on("timelineStartInfo", function(i) {
t.tracks.audio && !e.keepOriginalTimestamps && t.audioSegmentStream.setEarliestDts(i.dts - e.baseMediaDecodeTime);
}), t.videoSegmentStream.on("timingInfo", t.trigger.bind(t, "videoTimingInfo")), 
t.videoSegmentStream.on("data", function(e) {
t.trigger("data", {
type:"video",
data:e
});
}), t.videoSegmentStream.on("done", t.trigger.bind(t, "done")), t.videoSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), 
t.videoSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.h264.pipe(t.videoSegmentStream)), 
t.tracks.audio && !t.audioSegmentStream && (t.audioSegmentStream = new ei(t.tracks.audio, e), 
t.audioSegmentStream.on("data", function(e) {
t.trigger("data", {
type:"audio",
data:e
});
}), t.audioSegmentStream.on("done", t.trigger.bind(t, "done")), t.audioSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), 
t.audioSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.audioSegmentStream.on("timingInfo", t.trigger.bind(t, "audioTimingInfo")), 
t.adts.pipe(t.audioSegmentStream)), t.trigger("trackinfo", {
hasAudio:!!t.tracks.audio,
hasVideo:!!t.tracks.video
});
}
}), t.captionStream.on("data", function(i) {
var n;
n = t.tracks.video ? t.tracks.video.timelineStartInfo.pts || 0 :0, i.startTime = de.metadataTsToSeconds(i.startPts, n, e.keepOriginalTimestamps), 
i.endTime = de.metadataTsToSeconds(i.endPts, n, e.keepOriginalTimestamps), t.trigger("caption", i);
}), t = ri(t), t.metadataStream.on("data", t.trigger.bind(t, "id3Frame")), t;
}, si = function(e) {
var t = {
type:"aac",
tracks:{
audio:null
},
metadataStream:new pt.MetadataStream(),
aacStream:new jt(),
audioRollover:new pt.TimestampRolloverStream("audio"),
timedMetadataRollover:new pt.TimestampRolloverStream("timed-metadata"),
adtsStream:new vt(!0)
};
return t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioRollover).pipe(t.adtsStream), 
t.aacStream.pipe(t.timedMetadataRollover).pipe(t.metadataStream), t.metadataStream.on("timestamp", function(e) {
t.aacStream.setTimestamp(e.timeStamp);
}), t.aacStream.on("data", function(i) {
"timed-metadata" !== i.type && "audio" !== i.type || t.audioSegmentStream || (t.tracks.audio = t.tracks.audio || {
timelineStartInfo:{
baseMediaDecodeTime:e.baseMediaDecodeTime
},
codec:"adts",
type:"audio"
}, t.audioSegmentStream = new ei(t.tracks.audio, e), t.audioSegmentStream.on("data", function(e) {
t.trigger("data", {
type:"audio",
data:e
});
}), t.audioSegmentStream.on("partialdone", t.trigger.bind(t, "partialdone")), t.audioSegmentStream.on("done", t.trigger.bind(t, "done")), 
t.audioSegmentStream.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), t.audioSegmentStream.on("timingInfo", t.trigger.bind(t, "audioTimingInfo")), 
t.adtsStream.pipe(t.audioSegmentStream), t.trigger("trackinfo", {
hasAudio:!!t.tracks.audio,
hasVideo:!!t.tracks.video
}));
}), t = ri(t), t.metadataStream.on("data", t.trigger.bind(t, "id3Frame")), t;
}, oi = function(e, t) {
e.on("data", t.trigger.bind(t, "data")), e.on("done", t.trigger.bind(t, "done")), 
e.on("partialdone", t.trigger.bind(t, "partialdone")), e.on("endedtimeline", t.trigger.bind(t, "endedtimeline")), 
e.on("audioTimingInfo", t.trigger.bind(t, "audioTimingInfo")), e.on("videoTimingInfo", t.trigger.bind(t, "videoTimingInfo")), 
e.on("trackinfo", t.trigger.bind(t, "trackinfo")), e.on("id3Frame", function(i) {
i.dispatchType = e.metadataStream.dispatchType, i.cueTime = de.videoTsToSeconds(i.pts), 
t.trigger("id3Frame", i);
}), e.on("caption", function(e) {
t.trigger("caption", e);
});
}, ui = function Yi(e) {
var t = null, i = !0;
e = e || {}, Yi.prototype.init.call(this), e.baseMediaDecodeTime = e.baseMediaDecodeTime || 0, 
this.push = function(n) {
if (i) {
var r = ni(n);
!r || t && "aac" === t.type ? r || t && "ts" === t.type || (t = ai(e), oi(t, this)) :(t = si(e), 
oi(t, this)), i = !1;
}
t.headOfPipeline.push(n);
}, this.flush = function() {
t && (i = !0, t.headOfPipeline.flush());
}, this.partialFlush = function() {
t && t.headOfPipeline.partialFlush();
}, this.endTimeline = function() {
t && t.headOfPipeline.endTimeline();
}, this.reset = function() {
t && t.headOfPipeline.reset();
}, this.setBaseMediaDecodeTime = function(i) {
e.keepOriginalTimestamps || (e.baseMediaDecodeTime = i), t && (t.tracks.audio && (t.tracks.audio.timelineStartInfo.dts = void 0, 
t.tracks.audio.timelineStartInfo.pts = void 0, Se.clearDtsInfo(t.tracks.audio), 
t.audioRollover && t.audioRollover.discontinuity()), t.tracks.video && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = []), 
t.tracks.video.timelineStartInfo.dts = void 0, t.tracks.video.timelineStartInfo.pts = void 0, 
Se.clearDtsInfo(t.tracks.video)), t.timestampRollover && t.timestampRollover.discontinuity());
}, this.setRemux = function(i) {
e.remux = i, t && t.coalesceStream && t.coalesceStream.setRemux(i);
}, this.setAudioAppendStart = function(e) {
t && t.tracks.audio && t.audioSegmentStream && t.audioSegmentStream.setAudioAppendStart(e);
}, this.alignGopsWith = function(e) {};
};
ui.prototype = new B();
var li = ui, ci = function(e) {
return e >>> 0;
}, di = function(e) {
return ("00" + e.toString(16)).slice(-2);
}, hi = {
toUnsigned:ci,
toHexString:di
}, pi = function(e) {
var t = "";
return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), 
t += String.fromCharCode(e[3]);
}, fi = pi, mi = hi.toUnsigned, gi = function Qi(e, t) {
var i, n, r, a, s, o = [];
if (!t.length) return null;
for (i = 0; i < e.byteLength; ) n = mi(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), 
r = fi(e.subarray(i + 4, i + 8)), a = n > 1 ? i + n :e.byteLength, r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) :(s = Qi(e.subarray(i + 8, a), t.slice(1)), 
s.length && (o = o.concat(s)))), i = a;
return o;
}, vi = gi, yi = hi.toUnsigned, _i = function(e) {
var t = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
baseMediaDecodeTime:yi(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7])
};
return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += yi(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), 
t;
}, bi = _i, Ti = function(e) {
return {
isLeading:(12 & e[0]) >>> 2,
dependsOn:3 & e[0],
isDependedOn:(192 & e[1]) >>> 6,
hasRedundancy:(48 & e[1]) >>> 4,
paddingValue:(14 & e[1]) >>> 1,
isNonSyncSample:1 & e[1],
degradationPriority:e[2] << 8 | e[3]
};
}, Si = Ti, ki = function(e) {
var t, i = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
samples:[]
}, n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = 1 & i.flags[2], a = 4 & i.flags[2], s = 1 & i.flags[1], o = 2 & i.flags[1], u = 4 & i.flags[1], l = 8 & i.flags[1], c = n.getUint32(4), d = 8;
for (r && (i.dataOffset = n.getInt32(d), d += 4), a && c && (t = {
flags:Si(e.subarray(d, d + 4))
}, d += 4, s && (t.duration = n.getUint32(d), d += 4), o && (t.size = n.getUint32(d), 
d += 4), l && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) :t.compositionTimeOffset = n.getUint32(d), 
d += 4), i.samples.push(t), c--); c--; ) t = {}, s && (t.duration = n.getUint32(d), 
d += 4), o && (t.size = n.getUint32(d), d += 4), u && (t.flags = Si(e.subarray(d, d + 4)), 
d += 4), l && (1 === i.version ? t.compositionTimeOffset = n.getInt32(d) :t.compositionTimeOffset = n.getUint32(d), 
d += 4), i.samples.push(t);
return i;
}, wi = ki, Ei = function(e) {
var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = {
version:e[0],
flags:new Uint8Array(e.subarray(1, 4)),
trackId:i.getUint32(4)
}, r = 1 & n.flags[2], a = 2 & n.flags[2], s = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0];
return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), a && (n.sampleDescriptionIndex = i.getUint32(t), 
t += 4), s && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), 
t += 4), u && (n.defaultSampleFlags = i.getUint32(t)), l && (n.durationIsEmpty = !0), 
!r && c && (n.baseDataOffsetIsMoof = !0), n;
}, Ci = Ei, Ii = Ae.discardEmulationPreventionBytes, Pi = qe.CaptionStream, Ai = function(e, t) {
for (var i = e, n = 0; n < t.length; n++) {
var r = t[n];
if (i < r.size) return r;
i -= r.size;
}
return null;
}, xi = function(e, t, i) {
var n, r, a, s, o = new DataView(e.buffer, e.byteOffset, e.byteLength), u = [];
for (r = 0; r + 4 < e.length; r += a) if (a = o.getUint32(r), r += 4, !(0 >= a)) switch (31 & e[r]) {
case 6:
var l = e.subarray(r + 1, r + 1 + a), c = Ai(r, t);
if (n = {
nalUnitType:"sei_rbsp",
size:a,
data:l,
escapedRBSP:Ii(l),
trackId:i
}, c) n.pts = c.pts, n.dts = c.dts, s = c; else {
if (!s) {
console.log("We've encountered a nal unit without data. See mux.js#233.");
break;
}
n.pts = s.pts, n.dts = s.dts;
}
u.push(n);
}
return u;
}, Li = function(e, t, i) {
var n = t, r = i.defaultSampleDuration || 0, a = i.defaultSampleSize || 0, s = i.trackId, o = [];
return e.forEach(function(e) {
var t = wi(e), i = t.samples;
i.forEach(function(e) {
void 0 === e.duration && (e.duration = r), void 0 === e.size && (e.size = a), e.trackId = s, 
e.dts = n, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), 
e.pts = n + e.compositionTimeOffset, n += e.duration;
}), o = o.concat(i);
}), o;
}, Di = function(e, t) {
var i = vi(e, [ "moof", "traf" ]), n = vi(e, [ "mdat" ]), r = {}, a = [];
return n.forEach(function(e, t) {
var n = i[t];
a.push({
mdat:e,
traf:n
});
}), a.forEach(function(e) {
var i, n, a = e.mdat, s = e.traf, o = vi(s, [ "tfhd" ]), u = Ci(o[0]), l = u.trackId, c = vi(s, [ "tfdt" ]), d = c.length > 0 ? bi(c[0]).baseMediaDecodeTime :0, h = vi(s, [ "trun" ]);
t === l && h.length > 0 && (i = Li(h, d, u), n = xi(a, i, l), r[l] || (r[l] = []), 
r[l] = r[l].concat(n));
}), r;
}, Oi = function(e, t, i) {
var n;
return null === t ? null :(n = Di(e, t), {
seiNals:n[t],
timescale:i
});
}, Ri = function() {
var e, t, i, n, r, a, s = !1;
this.isInitialized = function() {
return s;
}, this.init = function(t) {
e = new Pi(), s = !0, a = t ? t.isPartial :!1, e.on("data", function(e) {
e.startTime = e.startPts / n, e.endTime = e.endPts / n, r.captions.push(e), r.captionStreams[e.stream] = !0;
});
}, this.isNewInit = function(e, t) {
return e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length ? !1 :i !== e[0] || n !== t[i];
}, this.parse = function(e, a, s) {
var o;
if (!this.isInitialized()) return null;
if (!a || !s) return null;
if (this.isNewInit(a, s)) i = a[0], n = s[i]; else if (null === i || !n) return t.push(e), 
null;
for (;t.length > 0; ) {
var u = t.shift();
this.parse(u, a, s);
}
return o = Oi(e, i, n), null !== o && o.seiNals ? (this.pushNals(o.seiNals), this.flushStream(), 
r) :null;
}, this.pushNals = function(t) {
return this.isInitialized() && t && 0 !== t.length ? void t.forEach(function(t) {
e.push(t);
}) :null;
}, this.flushStream = function() {
return this.isInitialized() ? void (a ? e.partialFlush() :e.flush()) :null;
}, this.clearParsedCaptions = function() {
r.captions = [], r.captionStreams = {};
}, this.resetCaptionStream = function() {
return this.isInitialized() ? void e.reset() :null;
}, this.clearAllCaptions = function() {
this.clearParsedCaptions(), this.resetCaptionStream();
}, this.reset = function() {
t = [], i = null, n = null, r ? this.clearParsedCaptions() :r = {
captions:[],
captionStreams:{}
}, this.resetCaptionStream();
}, this.reset();
}, Ni = Ri, Mi = function(e) {
return "AudioSegmentStream" === e ? "audio" :"VideoSegmentStream" === e ? "video" :"";
}, Ui = function(e, t) {
t.on("data", function(t) {
var i = t.initSegment;
t.initSegment = {
data:i.buffer,
byteOffset:i.byteOffset,
byteLength:i.byteLength
};
var n = t.data;
t.data = n.buffer, e.postMessage({
action:"data",
segment:t,
byteOffset:n.byteOffset,
byteLength:n.byteLength
}, [ t.data ]);
}), t.on("done", function(t) {
e.postMessage({
action:"done"
});
}), t.on("gopInfo", function(t) {
e.postMessage({
action:"gopInfo",
gopInfo:t
});
}), t.on("videoSegmentTimingInfo", function(t) {
var i = {
start:{
decode:de.videoTsToSeconds(t.start.dts),
presentation:de.videoTsToSeconds(t.start.pts)
},
end:{
decode:de.videoTsToSeconds(t.end.dts),
presentation:de.videoTsToSeconds(t.end.pts)
},
baseMediaDecodeTime:de.videoTsToSeconds(t.baseMediaDecodeTime)
};
t.prependedContentDuration && (i.prependedContentDuration = de.videoTsToSeconds(t.prependedContentDuration)), 
e.postMessage({
action:"videoSegmentTimingInfo",
videoSegmentTimingInfo:i
});
}), t.on("audioSegmentTimingInfo", function(t) {
var i = {
start:{
decode:de.videoTsToSeconds(t.start.dts),
presentation:de.videoTsToSeconds(t.start.pts)
},
end:{
decode:de.videoTsToSeconds(t.end.dts),
presentation:de.videoTsToSeconds(t.end.pts)
},
baseMediaDecodeTime:de.videoTsToSeconds(t.baseMediaDecodeTime)
};
t.prependedContentDuration && (i.prependedContentDuration = de.videoTsToSeconds(t.prependedContentDuration)), 
e.postMessage({
action:"audioSegmentTimingInfo",
audioSegmentTimingInfo:i
});
}), t.on("id3Frame", function(t) {
e.postMessage({
action:"id3Frame",
id3Frame:t
});
}), t.on("caption", function(t) {
e.postMessage({
action:"caption",
caption:t
});
}), t.on("trackinfo", function(t) {
e.postMessage({
action:"trackinfo",
trackInfo:t
});
}), t.on("audioTimingInfo", function(t) {
e.postMessage({
action:"audioTimingInfo",
audioTimingInfo:{
start:de.videoTsToSeconds(t.start),
end:de.videoTsToSeconds(t.end)
}
});
}), t.on("videoTimingInfo", function(t) {
e.postMessage({
action:"videoTimingInfo",
videoTimingInfo:{
start:de.videoTsToSeconds(t.start),
end:de.videoTsToSeconds(t.end)
}
});
});
}, Bi = function(e, t) {
t.on("data", function(t) {
var i = {
data:t.data.track.initSegment.buffer,
byteOffset:t.data.track.initSegment.byteOffset,
byteLength:t.data.track.initSegment.byteLength
}, n = {
data:t.data.boxes.buffer,
byteOffset:t.data.boxes.byteOffset,
byteLength:t.data.boxes.byteLength
}, r = {
boxes:n,
initSegment:i,
type:t.type,
sequence:t.data.sequence
};
"undefined" != typeof t.data.videoFrameDts && (r.videoFrameDtsTime = de.videoTsToSeconds(t.data.videoFrameDts)), 
"undefined" != typeof t.data.videoFramePts && (r.videoFramePtsTime = de.videoTsToSeconds(t.data.videoFramePts)), 
e.postMessage({
action:"data",
segment:r
}, [ r.boxes.data, r.initSegment.data ]);
}), t.on("id3Frame", function(t) {
e.postMessage({
action:"id3Frame",
id3Frame:t
});
}), t.on("caption", function(t) {
e.postMessage({
action:"caption",
caption:t
});
}), t.on("done", function(t) {
e.postMessage({
action:"done",
type:Mi(t)
});
}), t.on("partialdone", function(t) {
e.postMessage({
action:"partialdone",
type:Mi(t)
});
}), t.on("endedsegment", function(t) {
e.postMessage({
action:"endedSegment",
type:Mi(t)
});
}), t.on("trackinfo", function(t) {
e.postMessage({
action:"trackinfo",
trackInfo:t
});
}), t.on("audioTimingInfo", function(t) {
if (null === t.start) return void e.postMessage({
action:"audioTimingInfo",
audioTimingInfo:t
});
var i = {
start:de.videoTsToSeconds(t.start)
};
t.end && (i.end = de.videoTsToSeconds(t.end)), e.postMessage({
action:"audioTimingInfo",
audioTimingInfo:i
});
}), t.on("videoTimingInfo", function(t) {
var i = {
start:de.videoTsToSeconds(t.start)
};
t.end && (i.end = de.videoTsToSeconds(t.end)), e.postMessage({
action:"videoTimingInfo",
videoTimingInfo:i
});
});
}, Fi = function() {
function e(e, t) {
this.options = t || {}, this.self = e, this.init();
}
var t = e.prototype;
return t.init = function() {
this.transmuxer && this.transmuxer.dispose(), this.transmuxer = this.options.handlePartialData ? new li(this.options) :new Qt.Transmuxer(this.options), 
this.options.handlePartialData ? Bi(this.self, this.transmuxer) :Ui(this.self, this.transmuxer);
}, t.pushMp4Captions = function(e) {
this.captionParser || (this.captionParser = new Ni(), this.captionParser.init());
var t = new Uint8Array(e.data, e.byteOffset, e.byteLength), i = this.captionParser.parse(t, e.trackIds, e.timescales);
this.self.postMessage({
action:"mp4Captions",
captions:i && i.captions || [],
data:t.buffer
}, [ t.buffer ]);
}, t.clearAllMp4Captions = function() {
this.captionParser && this.captionParser.clearAllCaptions();
}, t.clearParsedMp4Captions = function() {
this.captionParser && this.captionParser.clearParsedCaptions();
}, t.push = function(e) {
var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
this.transmuxer.push(t);
}, t.reset = function() {
this.transmuxer.reset();
}, t.setTimestampOffset = function(e) {
var t = e.timestampOffset || 0;
this.transmuxer.setBaseMediaDecodeTime(Math.round(de.secondsToVideoTs(t)));
}, t.setAudioAppendStart = function(e) {
this.transmuxer.setAudioAppendStart(Math.ceil(de.secondsToVideoTs(e.appendStart)));
}, t.setRemux = function(e) {
this.transmuxer.setRemux(e.remux);
}, t.flush = function(e) {
this.transmuxer.flush(), i.postMessage({
action:"done",
type:"transmuxed"
});
}, t.partialFlush = function(e) {
this.transmuxer.partialFlush(), i.postMessage({
action:"partialdone",
type:"transmuxed"
});
}, t.endTimeline = function() {
this.transmuxer.endTimeline(), i.postMessage({
action:"endedtimeline",
type:"transmuxed"
});
}, t.alignGopsWith = function(e) {
this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice());
}, e;
}(), ji = function(e) {
e.onmessage = function(t) {
return "init" === t.data.action && t.data.options ? void (this.messageHandlers = new Fi(e, t.data.options)) :(this.messageHandlers || (this.messageHandlers = new Fi(e)), 
void (t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)));
};
}, Vi = new ji(i);
return Vi;
})();
}), $p = function(e) {
var t = e.attributes || {};
return t.CODECS ? xd(t.CODECS) :void 0;
}, Jp = function(e, t) {
var i = t.attributes || {};
return e && e.mediaGroups && e.mediaGroups.AUDIO && i.AUDIO && e.mediaGroups.AUDIO[i.AUDIO];
}, Zp = function(e, t) {
if (!Jp(e, t)) return !0;
var i = t.attributes || {}, n = e.mediaGroups.AUDIO[i.AUDIO];
for (var r in n) if (!n[r].uri && !n[r].playlists) return !0;
return !1;
}, ef = function(e, t) {
var i = t.attributes || {}, n = $p(t) || {};
if (Jp(e, t) && !n.audio && !Zp(e, t)) {
var r = Ed(e, i.AUDIO);
r && (n.audio = r.audio);
}
var a = {};
return n.video && (a.video = Ld("" + n.video.type + n.video.details)), n.audio && (a.audio = Ld("" + n.audio.type + n.audio.details)), 
n.text && (a.text = n.text.type), n.unknown && (a.unknown = n.unknown), a;
}, tf = function(e) {
return ot.log.debug ? ot.log.debug.bind(ot, "VHS:", e + " >") :function() {};
}, nf = tf("PlaylistSelector"), rf = function(e) {
if (e && e.playlist) {
var t = e.playlist;
return JSON.stringify({
id:t.id,
bandwidth:e.bandwidth,
width:e.width,
height:e.height,
codecs:t.attributes && t.attributes.CODECS || ""
});
}
}, af = function(e, t) {
if (!e) return "";
var i = Ro.getComputedStyle(e);
return i ? i[t] :"";
}, sf = function(e, t) {
var i = e.slice();
e.sort(function(e, n) {
var r = t(e, n);
return 0 === r ? i.indexOf(e) - i.indexOf(n) :r;
});
}, of = function(e, t) {
var i, n;
return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || Ro.Number.MAX_VALUE, 
t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH), n = n || Ro.Number.MAX_VALUE, 
i - n;
}, uf = function(e, t) {
var i, n;
return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), 
i = i || Ro.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width), 
n = n || Ro.Number.MAX_VALUE, i === n && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH :i - n;
}, lf = function(e, t, i, n, r) {
if (e) {
var a = {
bandwidth:t,
width:i,
height:n,
limitRenditionByPlayerDimensions:r
}, s = e.playlists.map(function(e) {
var t, i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width, n = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height;
return t = e.attributes.BANDWIDTH, t = t || Ro.Number.MAX_VALUE, {
bandwidth:t,
width:i,
height:n,
playlist:e
};
});
sf(s, function(e, t) {
return e.bandwidth - t.bandwidth;
}), s = s.filter(function(e) {
return !Eh.isIncompatible(e.playlist);
});
var o = s.filter(function(e) {
return Eh.isEnabled(e.playlist);
});
o.length || (o = s.filter(function(e) {
return !Eh.isDisabled(e.playlist);
}));
var u = o.filter(function(e) {
return e.bandwidth * up.BANDWIDTH_VARIANCE < t;
}), l = u[u.length - 1], c = u.filter(function(e) {
return e.bandwidth === l.bandwidth;
})[0];
if (r === !1) {
var d = c || o[0] || s[0];
if (d && d.playlist) {
var h = "sortedPlaylistReps";
return c && (h = "bandwidthBestRep"), o[0] && (h = "enabledPlaylistReps"), nf("choosing " + rf(d) + " using " + h + " with options", a), 
d.playlist;
}
return nf("could not choose a playlist with options", a), null;
}
var p = u.filter(function(e) {
return e.width && e.height;
});
sf(p, function(e, t) {
return e.width - t.width;
});
var f = p.filter(function(e) {
return e.width === i && e.height === n;
});
l = f[f.length - 1];
var m, g, v, y = f.filter(function(e) {
return e.bandwidth === l.bandwidth;
})[0];
y || (m = p.filter(function(e) {
return e.width > i || e.height > n;
}), g = m.filter(function(e) {
return e.width === m[0].width && e.height === m[0].height;
}), l = g[g.length - 1], v = g.filter(function(e) {
return e.bandwidth === l.bandwidth;
})[0]);
var _ = v || y || c || o[0] || s[0];
if (_ && _.playlist) {
var b = "sortedPlaylistReps";
return v ? b = "resolutionPlusOneRep" :y ? b = "resolutionBestRep" :c ? b = "bandwidthBestRep" :o[0] && (b = "enabledPlaylistReps"), 
nf("choosing " + rf(_) + " using " + b + " with options", a), _.playlist;
}
return nf("could not choose a playlist with options", a), null;
}
}, cf = function() {
var e = this.useDevicePixelRatio ? Ro.devicePixelRatio || 1 :1;
return lf(this.playlists.master, this.systemBandwidth, parseInt(af(this.tech_.el(), "width"), 10) * e, parseInt(af(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions);
}, df = function(e) {
var t = -1;
if (0 > e || e > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
return function() {
var i = this.useDevicePixelRatio ? Ro.devicePixelRatio || 1 :1;
return 0 > t && (t = this.systemBandwidth), t = e * this.systemBandwidth + (1 - e) * t, 
lf(this.playlists.master, t, parseInt(af(this.tech_.el(), "width"), 10) * i, parseInt(af(this.tech_.el(), "height"), 10) * i, this.limitRenditionByPlayerDimensions);
};
}, hf = function(e) {
var t = e.master, i = e.currentTime, n = e.bandwidth, r = e.duration, a = e.segmentDuration, s = e.timeUntilRebuffer, o = e.currentTimeline, u = e.syncController, l = t.playlists.filter(function(e) {
return !Eh.isIncompatible(e);
}), c = l.filter(Eh.isEnabled);
c.length || (c = l.filter(function(e) {
return !Eh.isDisabled(e);
}));
var d = c.filter(Eh.hasAttribute.bind(null, "BANDWIDTH")), h = d.map(function(e) {
var t = u.getSyncPoint(e, r, o, i), l = t ? 1 :2, c = Eh.estimateSegmentRequestTime(a, n, e), d = c * l - s;
return {
playlist:e,
rebufferingImpact:d
};
}), p = h.filter(function(e) {
return e.rebufferingImpact <= 0;
});
return sf(p, function(e, t) {
return of(t.playlist, e.playlist);
}), p.length ? p[0] :(sf(h, function(e, t) {
return e.rebufferingImpact - t.rebufferingImpact;
}), h[0] || null);
}, pf = function() {
var e = this, t = this.playlists.master.playlists.filter(Eh.isEnabled);
sf(t, function(e, t) {
return of(e, t);
});
var i = t.filter(function(t) {
return !!ef(e.playlists.master, t).video;
});
return i[0] || null;
}, ff = function(e, t, i) {
if (!e[i]) {
t.trigger({
type:"usage",
name:"vhs-608"
}), t.trigger({
type:"usage",
name:"hls-608"
});
var n = t.textTracks().getTrackById(i);
n ? e[i] = n :e[i] = t.addRemoteTextTrack({
kind:"captions",
id:i,
label:i
}, !1).track;
}
}, mf = function(e) {
var t = e.inbandTextTracks, i = e.captionArray, n = e.timestampOffset;
if (i) {
var r = Ro.WebKitDataCue || Ro.VTTCue;
i.forEach(function(e) {
var i = e.stream;
t[i].addCue(new r(e.startTime + n, e.endTime + n, e.text));
});
}
}, gf = function(e) {
Object.defineProperties(e.frame, {
id:{
get:function() {
return ot.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key;
}
},
value:{
get:function() {
return ot.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), 
e.value.data;
}
},
privateData:{
get:function() {
return ot.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), 
e.value.data;
}
}
});
}, vf = function(e) {
var t = e.inbandTextTracks, i = e.metadataArray, n = e.timestampOffset, r = e.videoDuration;
if (i) {
var a = Ro.WebKitDataCue || Ro.VTTCue, s = t.metadataTrack_;
if (s && (i.forEach(function(e) {
var t = e.cueTime + n;
!("number" != typeof t || Ro.isNaN(t) || 0 > t) && 1 / 0 > t && e.frames.forEach(function(e) {
var i = new a(t, t, e.value || e.url || e.data || "");
i.frame = e, i.value = e, gf(i), s.addCue(i);
});
}), s.cues && s.cues.length)) {
for (var o = s.cues, u = [], l = 0; l < o.length; l++) o[l] && u.push(o[l]);
var c = u.reduce(function(e, t) {
var i = e[t.startTime] || [];
return i.push(t), e[t.startTime] = i, e;
}, {}), d = Object.keys(c).sort(function(e, t) {
return Number(e) - Number(t);
});
d.forEach(function(e, t) {
var i = c[e], n = Number(d[t + 1]) || r;
i.forEach(function(e) {
e.endTime = n;
});
});
}
}
}, yf = function(e, t, i) {
e.metadataTrack_ || (e.metadataTrack_ = i.addRemoteTextTrack({
kind:"metadata",
label:"Timed Metadata"
}, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = t);
}, _f = function(e, t, i) {
var n, r;
if (i && i.cues) for (n = i.cues.length; n--; ) r = i.cues[n], r.startTime >= e && r.endTime <= t && i.removeCue(r);
}, bf = function(e) {
var t = e.cues;
if (t) for (var i = 0; i < t.length; i++) {
for (var n = [], r = 0, a = 0; a < t.length; a++) t[i].startTime === t[a].startTime && t[i].endTime === t[a].endTime && t[i].text === t[a].text && (r++, 
r > 1 && n.push(t[a]));
n.length && n.forEach(function(t) {
return e.removeCue(t);
});
}
}, Tf = function(e, t, i) {
if ("undefined" == typeof t || null === t || !e.length) return [];
var n, r = Math.ceil((t - i + 3) * Rc);
for (n = 0; n < e.length && !(e[n].pts > r); n++) ;
return e.slice(n);
}, Sf = function(e, t, i) {
if (!t.length) return e;
if (i) return t.slice();
var n = t[0].pts, r = 0;
for (r; r < e.length && !(e[r].pts >= n); r++) ;
return e.slice(0, r).concat(t);
}, kf = function(e, t, i, n) {
for (var r = Math.ceil((t - n) * Rc), a = Math.ceil((i - n) * Rc), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a); ) ;
if (-1 === o) return s;
for (var u = o + 1; u-- && !(e[u].pts <= r); ) ;
return u = Math.max(u, 0), s.splice(u, o - u + 1), s;
}, wf = function(e, t) {
if (!e && !t || !e && t || e && !t) return !1;
if (e === t) return !0;
var i = Object.keys(e).sort(), n = Object.keys(t).sort();
if (i.length !== n.length) return !1;
for (var r = 0; r < i.length; r++) {
var a = i[r];
if (a !== n[r]) return !1;
if (e[a] !== t[a]) return !1;
}
return !0;
}, Ef = 500, Cf = function(e) {
return "number" == typeof e && isFinite(e);
}, If = 1 / 60, Pf = function(e, t, i) {
return "main" === e && t && i ? i.hasAudio || i.hasVideo ? t.hasVideo && !i.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." :!t.hasVideo && i.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." :null :"Neither audio nor video found in segment." :null;
}, Af = function(e, t, i) {
var n = t - up.BACK_BUFFER_LENGTH;
e.length && (n = Math.max(n, e.start(0)));
var r = t - i;
return Math.min(r, n);
}, xf = function(e) {
var t = e.segment, i = t.start, n = t.end, r = e.playlist, a = r.mediaSequence, s = r.id, o = r.segments, u = void 0 === o ? [] :o, l = e.mediaIndex, c = e.timeline;
return [ "appending [" + l + "] of [" + a + ", " + (a + u.length) + "] from playlist [" + s + "]", "[" + i + " => " + n + "] in timeline [" + c + "]" ].join(" ");
}, Lf = function(e) {
return e + "TimingInfo";
}, Df = function(e) {
var t = e.segmentTimeline, i = e.currentTimeline, n = e.startOfSegment, r = e.buffered, a = e.overrideCheck;
return a || t !== i ? i > t ? n :r.length ? r.end(r.length - 1) :n :null;
}, Of = function(e) {
var t = e.timelineChangeController, i = e.currentTimeline, n = e.segmentTimeline, r = e.loaderType, a = e.audioDisabled;
if (i === n) return !1;
if ("audio" === r) {
var s = t.lastTimelineChange({
type:"main"
});
return !s || s.to !== n;
}
if ("main" === r && a) {
var o = t.pendingTimelineChange({
type:"audio"
});
return o && o.to === n ? !1 :!0;
}
return !1;
}, Rf = function(e, t) {
var i = e && "number" == typeof e.start && "number" == typeof e.end ? e.end - e.start :0, n = t && "number" == typeof t.start && "number" == typeof t.end ? t.end - t.start :0;
return Math.max(i, n);
}, Nf = function(e) {
var t = e.segmentDuration, i = e.maxDuration;
return t ? Math.round(t) > i + Qd :!1;
}, Mf = function(e, t) {
if ("hls" !== t) return null;
var i = Rf(e.audioTimingInfo, e.videoTimingInfo);
if (!i) return null;
var n = e.playlist.targetDuration, r = Nf({
segmentDuration:i,
maxDuration:2 * n
}), a = Nf({
segmentDuration:i,
maxDuration:n
}), s = "Segment with index " + e.mediaIndex + " " + ("from playlist " + e.playlist.id + " ") + ("has a duration of " + i + " ") + ("when the reported duration is " + e.duration + " ") + ("and the target duration is " + n + ". ") + "For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1";
return r || a ? {
severity:r ? "warn" :"info",
message:s
} :null;
}, Uf = function(e) {
function t(t, i) {
var n;
if (n = e.call(this) || this, !t) throw new TypeError("Initialization settings are required");
if ("function" != typeof t.currentTime) throw new TypeError("No currentTime getter specified");
if (!t.mediaSource) throw new TypeError("No MediaSource specified");
return n.bandwidth = t.bandwidth, n.throughput = {
rate:0,
count:0
}, n.roundTrip = NaN, n.resetStats_(), n.mediaIndex = null, n.hasPlayed_ = t.hasPlayed, 
n.currentTime_ = t.currentTime, n.seekable_ = t.seekable, n.seeking_ = t.seeking, 
n.duration_ = t.duration, n.mediaSource_ = t.mediaSource, n.vhs_ = t.vhs, n.loaderType_ = t.loaderType, 
n.currentMediaInfo_ = void 0, n.startingMediaInfo_ = void 0, n.segmentMetadataTrack_ = t.segmentMetadataTrack, 
n.goalBufferLength_ = t.goalBufferLength, n.sourceType_ = t.sourceType, n.sourceUpdater_ = t.sourceUpdater, 
n.inbandTextTracks_ = t.inbandTextTracks, n.state_ = "INIT", n.handlePartialData_ = t.handlePartialData, 
n.timelineChangeController_ = t.timelineChangeController, n.shouldSaveSegmentTimingInfo_ = !0, 
n.checkBufferTimeout_ = null, n.error_ = void 0, n.currentTimeline_ = -1, n.pendingSegment_ = null, 
n.xhrOptions_ = null, n.pendingSegments_ = [], n.audioDisabled_ = !1, n.isPendingTimestampOffset_ = !1, 
n.gopBuffer_ = [], n.timeMapping_ = 0, n.safeAppend_ = ot.browser.IE_VERSION >= 11, 
n.appendInitSegment_ = {
audio:!0,
video:!0
}, n.playlistOfLastInitSegment_ = {
audio:null,
video:null
}, n.callQueue_ = [], n.loadQueue_ = [], n.metadataQueue_ = {
id3:[],
caption:[]
}, n.activeInitSegmentId_ = null, n.initSegments_ = {}, n.cacheEncryptionKeys_ = t.cacheEncryptionKeys, 
n.keyCache_ = {}, n.decrypter_ = t.decrypter, n.syncController_ = t.syncController, 
n.syncPoint_ = {
segmentIndex:0,
time:0
}, n.transmuxer_ = n.createTransmuxer_(), n.triggerSyncInfoUpdate_ = function() {
return n.trigger("syncinfoupdate");
}, n.syncController_.on("syncinfoupdate", n.triggerSyncInfoUpdate_), n.mediaSource_.addEventListener("sourceopen", function() {
n.isEndOfStream_() || (n.ended_ = !1);
}), n.fetchAtBuffer_ = !1, n.logger_ = tf("SegmentLoader[" + n.loaderType_ + "]"), 
Object.defineProperty(Ao(n), "state", {
get:function() {
return this.state_;
},
set:function(e) {
e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e, this.trigger("statechange"));
}
}), n.sourceUpdater_.on("ready", function() {
n.hasEnoughInfoToAppend_() && n.processCallQueue_();
}), "main" === n.loaderType_ && n.timelineChangeController_.on("pendingtimelinechange", function() {
n.hasEnoughInfoToAppend_() && n.processCallQueue_();
}), "audio" === n.loaderType_ && n.timelineChangeController_.on("timelinechange", function() {
n.hasEnoughInfoToLoad_() && n.processLoadQueue_(), n.hasEnoughInfoToAppend_() && n.processCallQueue_();
}), n;
}
xo(t, e);
var i = t.prototype;
return i.createTransmuxer_ = function() {
var e = new Qp();
return e.postMessage({
action:"init",
options:{
remux:!1,
alignGopsAtEnd:this.safeAppend_,
keepOriginalTimestamps:!0,
handlePartialData:this.handlePartialData_
}
}), e;
}, i.resetStats_ = function() {
this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, 
this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, 
this.mediaSecondsLoaded = 0;
}, i.dispose = function() {
this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && (this.transmuxer_.terminate(), 
Sp.dispose()), this.resetStats_(), this.checkBufferTimeout_ && Ro.clearTimeout(this.checkBufferTimeout_), 
this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), 
this.off();
}, i.setAudio = function(e) {
this.audioDisabled_ = !e, e ? this.appendInitSegment_.audio = !0 :this.sourceUpdater_.removeAudio(0, this.duration_());
}, i.abort = function() {
return "WAITING" !== this.state ? void (this.pendingSegment_ && (this.pendingSegment_ = null)) :(this.abort_(), 
this.state = "READY", void (this.paused() || this.monitorBuffer_()));
}, i.abort_ = function() {
this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), 
this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], 
this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_);
}, i.checkForAbort_ = function(e) {
return "APPENDING" !== this.state || this.pendingSegment_ ? this.pendingSegment_ && this.pendingSegment_.requestId === e ? !1 :!0 :(this.state = "READY", 
!0);
}, i.error = function(e) {
return "undefined" != typeof e && (this.logger_("error occurred:", e), this.error_ = e), 
this.pendingSegment_ = null, this.error_;
}, i.endOfStream = function() {
this.ended_ = !0, this.transmuxer_ && Sp.reset(this.transmuxer_), this.gopBuffer_.length = 0, 
this.pause(), this.trigger("ended");
}, i.buffered_ = function() {
if (!this.sourceUpdater_ || !this.startingMediaInfo_) return ot.createTimeRanges();
if ("main" === this.loaderType_) {
var e = this.startingMediaInfo_, t = e.hasAudio, i = e.hasVideo, n = e.isMuxed;
if (i && t && !this.audioDisabled_ && !n) return this.sourceUpdater_.buffered();
if (i) return this.sourceUpdater_.videoBuffered();
}
return this.sourceUpdater_.audioBuffered();
}, i.initSegmentForMap = function(e, t) {
if (void 0 === t && (t = !1), !e) return null;
var i = Mh(e), n = this.initSegments_[i];
return t && !n && e.bytes && (this.initSegments_[i] = n = {
resolvedUri:e.resolvedUri,
byterange:e.byterange,
bytes:e.bytes,
tracks:e.tracks,
timescales:e.timescales
}), n || e;
}, i.segmentKey = function(e, t) {
if (void 0 === t && (t = !1), !e) return null;
var i = Uh(e), n = this.keyCache_[i];
this.cacheEncryptionKeys_ && t && !n && e.bytes && (this.keyCache_[i] = n = {
resolvedUri:e.resolvedUri,
bytes:e.bytes
});
var r = {
resolvedUri:(n || e).resolvedUri
};
return n && (r.bytes = n.bytes), r;
}, i.couldBeginLoading_ = function() {
return this.playlist_ && !this.paused();
}, i.load = function() {
return this.monitorBuffer_(), this.playlist_ ? (this.syncController_.setDateTimeMapping(this.playlist_), 
"INIT" === this.state && this.couldBeginLoading_() ? this.init_() :void (!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY"))) :void 0;
}, i.init_ = function() {
return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
}, i.playlist = function(e, t) {
if (void 0 === t && (t = {}), e) {
var i = this.playlist_, n = this.pendingSegment_;
this.playlist_ = e, this.xhrOptions_ = t, "INIT" === this.state && (e.syncInfo = {
mediaSequence:e.mediaSequence,
time:0
});
var r = null;
if (i && (i.id ? r = i.id :i.uri && (r = i.uri)), this.logger_("playlist update [" + r + " => " + (e.id || e.uri) + "]"), 
this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
if (!i || i.uri !== e.uri) return (null !== this.mediaIndex || this.handlePartialData_) && this.resyncLoader(), 
this.currentMediaInfo_ = void 0, void this.trigger("playlistupdate");
var a = e.mediaSequence - i.mediaSequence;
this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), 
n && (n.mediaIndex -= a, n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex])), 
this.syncController_.saveExpiredSegmentInfo(i, e);
}
}, i.pause = function() {
this.checkBufferTimeout_ && (Ro.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
}, i.paused = function() {
return null === this.checkBufferTimeout_;
}, i.resetEverything = function(e) {
this.ended_ = !1, this.appendInitSegment_ = {
audio:!0,
video:!0
}, this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && this.transmuxer_.postMessage({
action:"clearAllMp4Captions"
});
}, i.resetLoader = function() {
this.fetchAtBuffer_ = !1, this.resyncLoader();
}, i.resyncLoader = function() {
this.transmuxer_ && Sp.reset(this.transmuxer_), this.mediaIndex = null, this.syncPoint_ = null, 
this.isPendingTimestampOffset_ = !1, this.callQueue_ = [], this.loadQueue_ = [], 
this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
action:"clearParsedMp4Captions"
});
}, i.remove = function(e, t, i) {
if (void 0 === i && (i = function() {}), t === 1 / 0 && (t = this.duration_()), 
this.sourceUpdater_ && this.currentMediaInfo_) {
var n = 1, r = function() {
n--, 0 === n && i();
};
this.audioDisabled_ || (n++, this.sourceUpdater_.removeAudio(e, t, r)), "main" === this.loaderType_ && this.currentMediaInfo_ && this.currentMediaInfo_.hasVideo && (this.gopBuffer_ = kf(this.gopBuffer_, e, t, this.timeMapping_), 
n++, this.sourceUpdater_.removeVideo(e, t, r));
for (var a in this.inbandTextTracks_) _f(e, t, this.inbandTextTracks_[a]);
_f(e, t, this.segmentMetadataTrack_), r();
}
}, i.monitorBuffer_ = function() {
this.checkBufferTimeout_ && Ro.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = Ro.setTimeout(this.monitorBufferTick_.bind(this), 1);
}, i.monitorBufferTick_ = function() {
"READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && Ro.clearTimeout(this.checkBufferTimeout_), 
this.checkBufferTimeout_ = Ro.setTimeout(this.monitorBufferTick_.bind(this), Ef);
}, i.fillBuffer_ = function() {
if (!this.sourceUpdater_.updating()) {
this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
var e = this.buffered_(), t = this.checkBuffer_(e, this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
t && (t.timestampOffset = Df({
segmentTimeline:t.timeline,
currentTimeline:this.currentTimeline_,
startOfSegment:t.startOfSegment,
buffered:e,
overrideCheck:this.isPendingTimestampOffset_
}), this.isPendingTimestampOffset_ = !1, "number" == typeof t.timestampOffset && this.timelineChangeController_.pendingTimelineChange({
type:this.loaderType_,
from:this.currentTimeline_,
to:t.timeline
}), this.loadSegment_(t));
}
}, i.isEndOfStream_ = function(e, t) {
if (void 0 === e && (e = this.mediaIndex), void 0 === t && (t = this.playlist_), 
!t || !this.mediaSource_) return !1;
var i = e + 1 === t.segments.length;
return t.endList && "open" === this.mediaSource_.readyState && i;
}, i.checkBuffer_ = function(e, t, i, n, r, a) {
var s = 0;
e.length && (s = e.end(e.length - 1));
var o = Math.max(0, s - r);
if (!t.segments.length) return null;
if (o >= this.goalBufferLength_()) return null;
if (!n && o >= 1) return null;
var u, l = null, c = !1;
if (null === a) l = this.getSyncSegmentCandidate_(t), c = !0; else if (null !== i) {
var d = t.segments[i];
u = d && d.end ? d.end :s, l = i + 1;
} else if (this.fetchAtBuffer_) {
var h = Eh.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
l = h.mediaIndex, u = h.startTime;
} else {
var p = Eh.getMediaInfoForTime(t, r, a.segmentIndex, a.time);
l = p.mediaIndex, u = p.startTime;
}
var f = this.generateSegmentInfo_(t, l, u, c);
return !f || this.mediaSource_ && this.playlist_ && f.mediaIndex === this.playlist_.segments.length - 1 && "ended" === this.mediaSource_.readyState && !this.seeking_() ? void 0 :(this.logger_("checkBuffer_ returning " + f.uri, {
segmentInfo:f,
playlist:t,
currentMediaIndex:i,
nextMediaIndex:l,
startOfSegment:u,
isSyncRequest:c
}), f);
}, i.getSyncSegmentCandidate_ = function(e) {
var t = this;
if (-1 === this.currentTimeline_) return 0;
var i = e.segments.map(function(e, t) {
return {
timeline:e.timeline,
segmentIndex:t
};
}).filter(function(e) {
return e.timeline === t.currentTimeline_;
});
return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex :Math.max(e.segments.length - 1, 0);
}, i.generateSegmentInfo_ = function(e, t, i, n) {
if (0 > t || t >= e.segments.length) return null;
var r, a, s = e.segments[t], o = this.sourceUpdater_.audioBuffered(), u = this.sourceUpdater_.videoBuffered();
return o.length && (r = o.end(o.length - 1) - this.sourceUpdater_.audioTimestampOffset()), 
u.length && (a = Tf(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), 
{
requestId:"segment-loader-" + Math.random(),
uri:s.resolvedUri,
mediaIndex:t,
isSyncRequest:n,
startOfSegment:i,
playlist:e,
bytes:null,
encryptedBytes:null,
timestampOffset:null,
timeline:s.timeline,
duration:s.duration,
segment:s,
byteLength:0,
transmuxer:this.transmuxer_,
audioAppendStart:r,
gopsToAlignWith:a
};
}, i.earlyAbortWhenNeeded_ = function(e) {
if (!this.vhs_.tech_.paused() && this.xhrOptions_.timeout && this.playlist_.attributes.BANDWIDTH && !(Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)) {
var t = this.currentTime_(), i = e.bandwidth, n = this.pendingSegment_.duration, r = Eh.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived), a = rh(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1;
if (!(a >= r)) {
var s = hf({
master:this.vhs_.playlists.master,
currentTime:t,
bandwidth:i,
duration:this.duration_(),
segmentDuration:n,
timeUntilRebuffer:a,
currentTimeline:this.currentTimeline_,
syncController:this.syncController_
});
if (s) {
var o = r - a, u = o - s.rebufferingImpact, l = .5;
Qd >= a && (l = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || l > u || (this.bandwidth = s.playlist.attributes.BANDWIDTH * up.BANDWIDTH_VARIANCE + 1, 
this.trigger("earlyabort"));
}
}
}
}, i.handleAbort_ = function() {
this.mediaRequestsAborted += 1;
}, i.handleProgress_ = function(e, t) {
this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId) || this.trigger("progress");
}, i.handleTrackInfo_ = function(e, t) {
this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId) || this.checkForIllegalMediaSwitch(t) || (t = t || {}, 
wf(this.currentMediaInfo_, t) || (this.appendInitSegment_ = {
audio:!0,
video:!0
}, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), 
this.trigger("trackinfo")), this.checkForAbort_(e.requestId) || (this.pendingSegment_.trackInfo = t, 
this.hasEnoughInfoToAppend_() && this.processCallQueue_()));
}, i.handleTimingInfo_ = function(e, t, i, n) {
if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
var r = this.pendingSegment_, a = Lf(t);
r[a] = r[a] || {}, r[a][i] = n, this.logger_("timinginfo: " + t + " - " + i + " - " + n), 
this.hasEnoughInfoToAppend_() && this.processCallQueue_();
}
}, i.handleCaptions_ = function(e, t) {
var i = this;
if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
if (0 === t.length) return void this.logger_("SegmentLoader received no captions from a caption event");
var n = this.pendingSegment_;
if (!n.hasAppendedData_) return void this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
var r = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() :this.sourceUpdater_.videoTimestampOffset(), a = {};
t.forEach(function(e) {
a[e.stream] = a[e.stream] || {
startTime:1 / 0,
captions:[],
endTime:0
};
var t = a[e.stream];
t.startTime = Math.min(t.startTime, e.startTime + r), t.endTime = Math.max(t.endTime, e.endTime + r), 
t.captions.push(e);
}), Object.keys(a).forEach(function(e) {
var t = a[e], n = t.startTime, s = t.endTime, o = t.captions, u = i.inbandTextTracks_;
i.logger_("adding cues from " + n + " -> " + s + " for " + e), ff(u, i.vhs_.tech_, e), 
_f(n, s, u[e]), mf({
captionArray:o,
inbandTextTracks:u,
timestampOffset:r
});
}), this.transmuxer_ && this.transmuxer_.postMessage({
action:"clearParsedMp4Captions"
});
}
}, i.handleId3_ = function(e, t, i) {
if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
var n = this.pendingSegment_;
if (!n.hasAppendedData_) return void this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i));
var r = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() :this.sourceUpdater_.videoTimestampOffset();
yf(this.inbandTextTracks_, i, this.vhs_.tech_), vf({
inbandTextTracks:this.inbandTextTracks_,
metadataArray:t,
timestampOffset:r,
videoDuration:this.duration_()
});
}
}, i.processMetadataQueue_ = function() {
this.metadataQueue_.id3.forEach(function(e) {
return e();
}), this.metadataQueue_.caption.forEach(function(e) {
return e();
}), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [];
}, i.processCallQueue_ = function() {
var e = this.callQueue_;
this.callQueue_ = [], e.forEach(function(e) {
return e();
});
}, i.processLoadQueue_ = function() {
var e = this.loadQueue_;
this.loadQueue_ = [], e.forEach(function(e) {
return e();
});
}, i.hasEnoughInfoToLoad_ = function() {
if ("audio" !== this.loaderType_) return !0;
var e = this.pendingSegment_;
return e ? this.currentMediaInfo_ && Of({
timelineChangeController:this.timelineChangeController_,
currentTimeline:this.currentTimeline_,
segmentTimeline:e.timeline,
loaderType:this.loaderType_,
audioDisabled:this.audioDisabled_
}) ? !1 :!0 :!1;
}, i.hasEnoughInfoToAppend_ = function() {
if (!this.sourceUpdater_.ready()) return !1;
var e = this.pendingSegment_;
if (!e || !e.trackInfo) return !1;
if (!this.handlePartialData_) {
var t = this.currentMediaInfo_, i = t.hasAudio, n = t.hasVideo, r = t.isMuxed;
if (n && !e.videoTimingInfo) return !1;
if (i && !this.audioDisabled_ && !r && !e.audioTimingInfo) return !1;
}
return Of({
timelineChangeController:this.timelineChangeController_,
currentTimeline:this.currentTimeline_,
segmentTimeline:e.timeline,
loaderType:this.loaderType_,
audioDisabled:this.audioDisabled_
}) ? !1 :!0;
}, i.handleData_ = function(e, t) {
if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) return void this.callQueue_.push(this.handleData_.bind(this, e, t));
var i = this.pendingSegment_;
if (this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.segment), 
"closed" !== this.mediaSource_.readyState) {
if (e.map && (e.map = this.initSegmentForMap(e.map, !0), i.segment.map = e.map), 
e.key && this.segmentKey(e.key, !0), i.isFmp4 = e.isFmp4, i.timingInfo = i.timingInfo || {}, 
i.isFmp4) this.trigger("fmp4"), i.timingInfo.start = i[Lf(t.type)].start; else {
var n, r = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo;
r && (n = this.handlePartialData_ ? t.videoFramePtsTime :i.videoTimingInfo.start), 
i.timingInfo.start = this.trueSegmentStart_({
currentStart:i.timingInfo.start,
playlist:i.playlist,
mediaIndex:i.mediaIndex,
currentVideoTimestampOffset:this.sourceUpdater_.videoTimestampOffset(),
useVideoTimingInfo:r,
firstVideoFrameTimeForData:n,
videoTimingInfo:i.videoTimingInfo,
audioTimingInfo:i.audioTimingInfo
});
}
this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), 
i.hasAppendedData_ = !0, this.processMetadataQueue_(), this.appendData_(i, t);
}
}
}, i.updateAppendInitSegmentStatus = function(e, t) {
"main" !== this.loaderType_ || "number" != typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = {
audio:!0,
video:!0
}), this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0);
}, i.getInitSegmentAndUpdateState_ = function(e) {
var t = e.type, i = e.initSegment, n = e.map, r = e.playlist;
if (n) {
var a = Mh(n);
if (this.activeInitSegmentId_ === a) return null;
i = this.initSegmentForMap(n, !0).bytes, this.activeInitSegmentId_ = a;
}
return i && this.appendInitSegment_[t] ? (this.playlistOfLastInitSegment_[t] = r, 
this.appendInitSegment_[t] = n ? !0 :!1, this.activeInitSegmentId_ = null, i) :null;
}, i.appendToSourceBuffer_ = function(e) {
var t = this, i = e.segmentInfo, n = e.type, r = e.initSegment, a = e.data, s = [ a ], o = a.byteLength;
r && (s.unshift(r), o += r.byteLength);
var u = wp({
bytes:o,
segments:s
});
this.sourceUpdater_.appendBuffer({
segmentInfo:i,
type:n,
bytes:u
}, function(e) {
e && (t.error(n + " append of " + u.length + "b failed for segment #" + i.mediaIndex + " in playlist " + i.playlist.id), 
t.trigger("appenderror"));
});
}, i.handleSegmentTimingInfo_ = function(e, t, i) {
if (this.pendingSegment_ && t === this.pendingSegment_.requestId) {
var n = this.pendingSegment_.segment, r = e + "TimingInfo";
n[r] || (n[r] = {}), n[r].transmuxerPrependedSeconds = i.prependedContentDuration || 0, 
n[r].transmuxedPresentationStart = i.start.presentation, n[r].transmuxedDecodeStart = i.start.decode, 
n[r].transmuxedPresentationEnd = i.end.presentation, n[r].transmuxedDecodeEnd = i.end.decode, 
n[r].baseMediaDecodeTime = i.baseMediaDecodeTime;
}
}, i.appendData_ = function(e, t) {
var i = t.type, n = t.data;
if (n && n.byteLength && ("audio" !== i || !this.audioDisabled_)) {
var r = this.getInitSegmentAndUpdateState_({
type:i,
initSegment:t.initSegment,
playlist:e.playlist,
map:e.isFmp4 ? e.segment.map :null
});
this.appendToSourceBuffer_({
segmentInfo:e,
type:i,
initSegment:r,
data:n
});
}
}, i.loadSegment_ = function(e) {
var t = this;
return this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), 
"number" == typeof e.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({
action:"clearAllMp4Captions"
}), this.hasEnoughInfoToLoad_() ? void this.updateTransmuxerAndRequestSegment_(e) :void this.loadQueue_.push(function() {
var i = t.buffered_();
"number" == typeof e.timestampOffset && (e.timestampOffset = Df({
segmentTimeline:e.timeline,
currentTimeline:t.currentTimeline_,
startOfSegment:e.startOfSegment,
buffered:i,
overrideCheck:!0
})), delete e.audioAppendStart;
var n = t.sourceUpdater_.audioBuffered();
n.length && (e.audioAppendStart = n.end(n.length - 1) - t.sourceUpdater_.audioTimestampOffset()), 
t.updateTransmuxerAndRequestSegment_(e);
});
}, i.updateTransmuxerAndRequestSegment_ = function(e) {
this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0, 
e.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({
action:"reset"
}), this.transmuxer_.postMessage({
action:"setTimestampOffset",
timestampOffset:e.timestampOffset
}));
var t = this.createSimplifiedSegmentObj_(e);
e.abortRequests = Fp({
xhr:this.vhs_.xhr,
xhrOptions:this.xhrOptions_,
decryptionWorker:this.decrypter_,
segment:t,
handlePartialData:this.handlePartialData_,
abortFn:this.handleAbort_.bind(this),
progressFn:this.handleProgress_.bind(this),
trackInfoFn:this.handleTrackInfo_.bind(this),
timingInfoFn:this.handleTimingInfo_.bind(this),
videoSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this, "video", e.requestId),
audioSegmentTimingInfoFn:this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId),
captionsFn:this.handleCaptions_.bind(this),
id3Fn:this.handleId3_.bind(this),
dataFn:this.handleData_.bind(this),
doneFn:this.segmentRequestFinished_.bind(this)
});
}, i.trimBackBuffer_ = function(e) {
var t = Af(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
t > 0 && this.remove(0, t);
}, i.createSimplifiedSegmentObj_ = function(e) {
var t = e.segment, i = {
resolvedUri:t.resolvedUri,
byterange:t.byterange,
requestId:e.requestId,
transmuxer:e.transmuxer,
audioAppendStart:e.audioAppendStart,
gopsToAlignWith:e.gopsToAlignWith
}, n = e.playlist.segments[e.mediaIndex - 1];
if (n && n.timeline === t.timeline && (n.videoTimingInfo ? i.baseStartTime = n.videoTimingInfo.transmuxedDecodeEnd :n.audioTimingInfo && (i.baseStartTime = n.audioTimingInfo.transmuxedDecodeEnd)), 
t.key) {
var r = t.key.iv || new Uint32Array([ 0, 0, 0, e.mediaIndex + e.playlist.mediaSequence ]);
i.key = this.segmentKey(t.key), i.key.iv = r;
}
return t.map && (i.map = this.initSegmentForMap(t.map)), i;
}, i.saveTransferStats_ = function(e) {
this.mediaRequests += 1, e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime);
}, i.saveBandwidthRelatedStats_ = function(e, t) {
return this.pendingSegment_.byteLength = t.bytesReceived, If > e ? void this.logger_("Ignoring segment's bandwidth because its duration of " + e + (" is less than the min to record " + If)) :(this.bandwidth = t.bandwidth, 
void (this.roundTrip = t.roundTripTime));
}, i.handleTimeout_ = function() {
this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate");
}, i.segmentRequestFinished_ = function(e, t, i) {
if (this.callQueue_.length) return void this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));
if (this.saveTransferStats_(t.stats), this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId) {
if (e) {
if (this.pendingSegment_ = null, this.state = "READY", e.code === Ep.ABORTED) return;
return this.pause(), e.code === Ep.TIMEOUT ? void this.handleTimeout_() :(this.mediaRequestsErrored += 1, 
this.error(e), void this.trigger("error"));
}
var n = this.pendingSegment_;
this.saveBandwidthRelatedStats_(n.duration, t.stats), n.endOfAllRequests = t.endOfAllRequests, 
i.gopInfo && (this.gopBuffer_ = Sf(this.gopBuffer_, i.gopInfo, this.safeAppend_)), 
this.state = "APPENDING";
var r = this.isEndOfStream_(n.mediaIndex, n.playlist), a = null !== this.mediaIndex, s = n.timeline !== this.currentTimeline_ && n.timeline > 0;
!n.isFmp4 && (r || a && s) && Sp.endTimeline(this.transmuxer_), this.trigger("appending"), 
this.waitForAppendsToComplete_(n);
}
}, i.setTimeMapping_ = function(e) {
var t = this.syncController_.mappingForTimeline(e);
null !== t && (this.timeMapping_ = t);
}, i.updateMediaSecondsLoaded_ = function(e) {
"number" == typeof e.start && "number" == typeof e.end ? this.mediaSecondsLoaded += e.end - e.start :this.mediaSecondsLoaded += e.duration;
}, i.shouldUpdateTransmuxerTimestampOffset_ = function(e) {
return null === e ? !1 :"main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset() ? !0 :this.audioDisabled_ || e === this.sourceUpdater_.audioTimestampOffset() ? !1 :!0;
}, i.trueSegmentStart_ = function(e) {
var t = e.currentStart, i = e.playlist, n = e.mediaIndex, r = e.firstVideoFrameTimeForData, a = e.currentVideoTimestampOffset, s = e.useVideoTimingInfo, o = e.videoTimingInfo, u = e.audioTimingInfo;
if ("undefined" != typeof t) return t;
if (!s) return u.start;
var l = i.segments[n - 1];
return 0 !== n && l && "undefined" != typeof l.start && l.end === r + a ? o.start :r;
}, i.waitForAppendsToComplete_ = function(e) {
if (!this.currentMediaInfo_) return this.error({
message:"No starting media returned, likely due to an unsupported media format.",
blacklistDuration:1 / 0
}), void this.trigger("error");
var t = this.currentMediaInfo_, i = t.hasAudio, n = t.hasVideo, r = t.isMuxed, a = "main" === this.loaderType_ && n, s = !this.audioDisabled_ && i && !r;
return e.waitingOnAppends = 0, e.hasAppendedData_ ? (a && e.waitingOnAppends++, 
s && e.waitingOnAppends++, a && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), 
void (s && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e)))) :(e.timingInfo || "number" != typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0), 
e.timingInfo = {
start:0
}, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), 
this.processMetadataQueue_()), void this.checkAppendsDone_(e));
}, i.checkAppendsDone_ = function(e) {
this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_());
}, i.checkForIllegalMediaSwitch = function(e) {
var t = Pf(this.loaderType_, this.currentMediaInfo_, e);
return t ? (this.error({
message:t,
blacklistDuration:1 / 0
}), this.trigger("error"), !0) :!1;
}, i.updateSourceBufferTimestampOffset_ = function(e) {
if (null !== e.timestampOffset && "number" == typeof e.timingInfo.start && !e.changedTimestampOffset && "main" === this.loaderType_) {
var t = !1;
e.timestampOffset -= e.timingInfo.start, e.changedTimestampOffset = !0, e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), 
t = !0), e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), 
t = !0), t && this.trigger("timestampoffset");
}
}, i.updateTimingInfoEnd_ = function(e) {
e.timingInfo = e.timingInfo || {};
var t = "main" === this.loaderType_ && this.currentMediaInfo_.hasVideo, i = t && e.videoTimingInfo ? e.videoTimingInfo :e.audioTimingInfo;
i && (e.timingInfo.end = "number" == typeof i.end ? i.end :i.start + e.duration);
}, i.handleAppendsDone_ = function() {
if (this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_) return this.state = "READY", 
void (this.paused() || this.monitorBuffer_());
var e = this.pendingSegment_;
this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
segmentInfo:e,
shouldSaveTimelineMapping:"main" === this.loaderType_
}), this.logger_(xf(e));
var t = Mf(e, this.sourceType_);
if (t && ("warn" === t.severity ? ot.log.warn(t.message) :this.logger_(t.message)), 
this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest) return void this.trigger("syncinfoupdate");
this.addSegmentMetadataCue_(e), this.fetchAtBuffer_ = !0, this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({
type:this.loaderType_,
from:this.currentTimeline_,
to:e.timeline
}), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({
type:"audio",
from:this.currentTimeline_,
to:e.timeline
})), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate");
var i = e.segment;
if (i.end && this.currentTime_() - i.end > 3 * e.playlist.targetDuration) return void this.resetEverything();
var n = null !== this.mediaIndex;
n && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, 
this.isEndOfStream_(e.mediaIndex, e.playlist) && this.endOfStream(), this.trigger("appended"), 
this.paused() || this.monitorBuffer_();
}, i.recordThroughput_ = function(e) {
if (e.duration < If) return void this.logger_("Ignoring segment's throughput because its duration of " + e.duration + (" is less than the min to record " + If));
var t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1, n = Math.floor(e.byteLength / i * 8 * 1e3);
this.throughput.rate += (n - t) / ++this.throughput.count;
}, i.addSegmentMetadataCue_ = function(e) {
if (this.segmentMetadataTrack_) {
var t = e.segment, i = t.start, n = t.end;
if (Cf(i) && Cf(n)) {
_f(i, n, this.segmentMetadataTrack_);
var r = Ro.WebKitDataCue || Ro.VTTCue, a = {
custom:t.custom,
dateTimeObject:t.dateTimeObject,
dateTimeString:t.dateTimeString,
bandwidth:e.playlist.attributes.BANDWIDTH,
resolution:e.playlist.attributes.RESOLUTION,
codecs:e.playlist.attributes.CODECS,
byteLength:e.byteLength,
uri:e.uri,
timeline:e.timeline,
playlist:e.playlist.id,
start:i,
end:n
}, s = JSON.stringify(a), o = new r(i, n, s);
o.value = a, this.segmentMetadataTrack_.addCue(o);
}
}
}, t;
}(ot.EventTarget), Bf = function(e) {
return "string" != typeof e ? e :e.replace(/./, function(e) {
return e.toUpperCase();
});
}, Ff = [ "video", "audio" ], jf = function(e, t) {
var i = t[e + "Buffer"];
return i && i.updating || t.queuePending[e];
}, Vf = function(e, t) {
for (var i = 0; i < t.length; i++) {
var n = t[i];
if ("mediaSource" === n.type) return null;
if (n.type === e) return i;
}
return null;
}, Hf = function rg(e, t) {
if (0 !== t.queue.length) {
var i = 0, n = t.queue[i];
if ("mediaSource" === n.type) return void (t.updating() || "closed" === t.mediaSource.readyState || (t.queue.shift(), 
n.action(t), n.doneFn && n.doneFn(), rg("audio", t), rg("video", t)));
if ("mediaSource" !== e && t.ready() && "closed" !== t.mediaSource.readyState && !jf(e, t)) {
if (n.type !== e) {
if (i = Vf(e, t.queue), null === i) return;
n = t.queue[i];
}
return t.queue.splice(i, 1), n.action(e, t), n.doneFn ? void (t.queuePending[e] = n) :void rg(e, t);
}
}
}, qf = function(e, t) {
var i = t[e + "Buffer"], n = Bf(e);
i && (i.removeEventListener("updateend", t["on" + n + "UpdateEnd_"]), i.removeEventListener("error", t["on" + n + "Error_"]), 
t.codecs[e] = null, t[e + "Buffer"] = null);
}, Wf = function(e, t) {
return e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t);
}, zf = {
appendBuffer:function(e, t) {
return function(i, n) {
var r = n[i + "Buffer"];
Wf(n.mediaSource, r) && (n.logger_("Appending segment " + t.mediaIndex + "'s " + e.length + " bytes to " + i + "Buffer"), 
r.appendBuffer(e));
};
},
remove:function(e, t) {
return function(i, n) {
var r = n[i + "Buffer"];
Wf(n.mediaSource, r) && (n.logger_("Removing " + e + " to " + t + " from " + i + "Buffer"), 
r.remove(e, t));
};
},
timestampOffset:function(e) {
return function(t, i) {
var n = i[t + "Buffer"];
Wf(i.mediaSource, n) && (i.logger_("Setting " + t + "timestampOffset to " + e), 
n.timestampOffset = e);
};
},
callback:function(e) {
return function(t, i) {
e();
};
},
endOfStream:function(e) {
return function(t) {
if ("open" === t.mediaSource.readyState) {
t.logger_("Calling mediaSource endOfStream(" + (e || "") + ")");
try {
t.mediaSource.endOfStream(e);
} catch (i) {
ot.log.warn("Failed to call media source endOfStream", i);
}
}
};
},
duration:function(e) {
return function(t) {
t.logger_("Setting mediaSource duration to " + e);
try {
t.mediaSource.duration = e;
} catch (i) {
ot.log.warn("Failed to set media source duration", i);
}
};
},
abort:function() {
return function(e, t) {
if ("open" === t.mediaSource.readyState) {
var i = t[e + "Buffer"];
if (Wf(t.mediaSource, i)) {
t.logger_("calling abort on " + e + "Buffer");
try {
i.abort();
} catch (n) {
ot.log.warn("Failed to abort on " + e + "Buffer", n);
}
}
}
};
},
addSourceBuffer:function(e, t) {
return function(i) {
var n = Bf(e), r = Cd(t);
i.logger_("Adding " + e + "Buffer with codec " + t + " to mediaSource");
var a = i.mediaSource.addSourceBuffer(r);
a.addEventListener("updateend", i["on" + n + "UpdateEnd_"]), a.addEventListener("error", i["on" + n + "Error_"]), 
i.codecs[e] = t, i[e + "Buffer"] = a;
};
},
removeSourceBuffer:function(e) {
return function(t) {
var i = t[e + "Buffer"];
if (qf(e, t), Wf(t.mediaSource, i)) {
t.logger_("Removing " + e + "Buffer with codec " + t.codecs[e] + " from mediaSource");
try {
t.mediaSource.removeSourceBuffer(i);
} catch (n) {
ot.log.warn("Failed to removeSourceBuffer " + e + "Buffer", n);
}
}
};
},
changeType:function(e) {
return function(t, i) {
var n = i[t + "Buffer"], r = Cd(e);
Wf(i.mediaSource, n) && i.codecs[t] !== e && (i.logger_("changing " + t + "Buffer codec from " + i.codecs[t] + " to " + e), 
n.changeType(r), i.codecs[t] = e);
};
}
}, Gf = function(e) {
var t = e.type, i = e.sourceUpdater, n = e.action, r = e.doneFn, a = e.name;
i.queue.push({
type:t,
action:n,
doneFn:r,
name:a
}), Hf(t, i);
}, Xf = function(e, t) {
return function(i) {
if (t.queuePending[e]) {
var n = t.queuePending[e].doneFn;
t.queuePending[e] = null, n && n(t[e + "Error_"]);
}
Hf(e, t);
};
}, Kf = function(e) {
function t(t) {
var i;
return i = e.call(this) || this, i.mediaSource = t, i.sourceopenListener_ = function() {
return Hf("mediaSource", Ao(i));
}, i.mediaSource.addEventListener("sourceopen", i.sourceopenListener_), i.logger_ = tf("SourceUpdater"), 
i.audioTimestampOffset_ = 0, i.videoTimestampOffset_ = 0, i.queue = [], i.queuePending = {
audio:null,
video:null
}, i.delayedAudioAppendQueue_ = [], i.videoAppendQueued_ = !1, i.codecs = {}, i.onVideoUpdateEnd_ = Xf("video", Ao(i)), 
i.onAudioUpdateEnd_ = Xf("audio", Ao(i)), i.onVideoError_ = function(e) {
i.videoError_ = e;
}, i.onAudioError_ = function(e) {
i.audioError_ = e;
}, i.createdSourceBuffers_ = !1, i.initializedEme_ = !1, i.triggeredReady_ = !1, 
i;
}
xo(t, e);
var i = t.prototype;
return i.initializedEme = function() {
this.initializedEme_ = !0, this.triggerReady();
}, i.hasCreatedSourceBuffers = function() {
return this.createdSourceBuffers_;
}, i.hasInitializedAnyEme = function() {
return this.initializedEme_;
}, i.ready = function() {
return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
}, i.createSourceBuffers = function(e) {
this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_ = !0, 
this.trigger("createdsourcebuffers"), this.triggerReady());
}, i.triggerReady = function() {
this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0, this.trigger("ready"));
}, i.addSourceBuffer = function(e, t) {
Gf({
type:"mediaSource",
sourceUpdater:this,
action:zf.addSourceBuffer(e, t),
name:"addSourceBuffer"
});
}, i.abort = function(e) {
Gf({
type:e,
sourceUpdater:this,
action:zf.abort(e),
name:"abort"
});
}, i.removeSourceBuffer = function(e) {
return this.canRemoveSourceBuffer() ? void Gf({
type:"mediaSource",
sourceUpdater:this,
action:zf.removeSourceBuffer(e),
name:"removeSourceBuffer"
}) :void ot.log.error("removeSourceBuffer is not supported!");
}, i.canRemoveSourceBuffer = function() {
return !ot.browser.IE_VERSION && !ot.browser.IS_FIREFOX && Ro.MediaSource && Ro.MediaSource.prototype && "function" == typeof Ro.MediaSource.prototype.removeSourceBuffer;
}, t.canChangeType = function() {
return Ro.SourceBuffer && Ro.SourceBuffer.prototype && "function" == typeof Ro.SourceBuffer.prototype.changeType;
}, i.canChangeType = function() {
return this.constructor.canChangeType();
}, i.changeType = function(e, t) {
return this.canChangeType() ? void Gf({
type:e,
sourceUpdater:this,
action:zf.changeType(t),
name:"changeType"
}) :void ot.log.error("changeType is not supported!");
}, i.addOrChangeSourceBuffers = function(e) {
var t = this;
if (!e || "object" != typeof e || 0 === Object.keys(e).length) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
Object.keys(e).forEach(function(i) {
var n = e[i];
return t.hasCreatedSourceBuffers() ? void (t.canChangeType() && t.changeType(i, n)) :t.addSourceBuffer(i, n);
});
}, i.appendBuffer = function(e, t) {
var i = this, n = e.segmentInfo, r = e.type, a = e.bytes;
if (this.processedAppend_ = !0, "audio" === r && this.videoBuffer && !this.videoAppendQueued_) return this.delayedAudioAppendQueue_.push([ e, t ]), 
void this.logger_("delayed audio append of " + a.length + " until video append");
if (Gf({
type:r,
sourceUpdater:this,
action:zf.appendBuffer(a, n || {
mediaIndex:-1
}),
doneFn:t,
name:"appendBuffer"
}), "video" === r) {
if (this.videoAppendQueued_ = !0, !this.delayedAudioAppendQueue_.length) return;
var s = this.delayedAudioAppendQueue_.slice();
this.logger_("queuing delayed audio " + s.length + " appendBuffers"), this.delayedAudioAppendQueue_.length = 0, 
s.forEach(function(e) {
i.appendBuffer.apply(i, e);
});
}
}, i.audioBuffered = function() {
return Wf(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered :ot.createTimeRange();
}, i.videoBuffered = function() {
return Wf(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered :ot.createTimeRange();
}, i.buffered = function() {
var e = Wf(this.mediaSource, this.videoBuffer) ? this.videoBuffer :null, t = Wf(this.mediaSource, this.audioBuffer) ? this.audioBuffer :null;
return t && !e ? this.audioBuffered() :e && !t ? this.videoBuffered() :ih(this.audioBuffered(), this.videoBuffered());
}, i.setDuration = function(e, t) {
void 0 === t && (t = mi), Gf({
type:"mediaSource",
sourceUpdater:this,
action:zf.duration(e),
name:"duration",
doneFn:t
});
}, i.endOfStream = function(e, t) {
void 0 === e && (e = null), void 0 === t && (t = mi), "string" != typeof e && (e = void 0), 
Gf({
type:"mediaSource",
sourceUpdater:this,
action:zf.endOfStream(e),
name:"endOfStream",
doneFn:t
});
}, i.removeAudio = function(e, t, i) {
return void 0 === i && (i = mi), this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? void Gf({
type:"audio",
sourceUpdater:this,
action:zf.remove(e, t),
doneFn:i,
name:"remove"
}) :void i();
}, i.removeVideo = function(e, t, i) {
return void 0 === i && (i = mi), this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? void Gf({
type:"video",
sourceUpdater:this,
action:zf.remove(e, t),
doneFn:i,
name:"remove"
}) :void i();
}, i.updating = function() {
return jf("audio", this) || jf("video", this) ? !0 :!1;
}, i.audioTimestampOffset = function(e) {
return "undefined" != typeof e && this.audioBuffer && this.audioTimestampOffset_ !== e && (Gf({
type:"audio",
sourceUpdater:this,
action:zf.timestampOffset(e),
name:"timestampOffset"
}), this.audioTimestampOffset_ = e), this.audioTimestampOffset_;
}, i.videoTimestampOffset = function(e) {
return "undefined" != typeof e && this.videoBuffer && this.videoTimestampOffset !== e && (Gf({
type:"video",
sourceUpdater:this,
action:zf.timestampOffset(e),
name:"timestampOffset"
}), this.videoTimestampOffset_ = e), this.videoTimestampOffset_;
}, i.audioQueueCallback = function(e) {
this.audioBuffer && Gf({
type:"audio",
sourceUpdater:this,
action:zf.callback(e),
name:"callback"
});
}, i.videoQueueCallback = function(e) {
this.videoBuffer && Gf({
type:"video",
sourceUpdater:this,
action:zf.callback(e),
name:"callback"
});
}, i.dispose = function() {
var e = this;
this.trigger("dispose"), Ff.forEach(function(t) {
e.abort(t), e.canRemoveSourceBuffer() ? e.removeSourceBuffer(t) :e[t + "QueueCallback"](function() {
return qf(t, e);
});
}), this.videoAppendQueued_ = !1, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), 
this.off();
}, t;
}(ot.EventTarget), Yf = function(e) {
return decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
}, Qf = new Uint8Array("\n\n".split("").map(function(e) {
return e.charCodeAt(0);
})), $f = function(e) {
function t(t, i) {
var n;
return void 0 === i && (i = {}), n = e.call(this, t, i) || this, n.handlePartialData_ = !1, 
n.mediaSource_ = null, n.subtitlesTrack_ = null, n.loaderType_ = "subtitle", n.featuresNativeTextTracks_ = t.featuresNativeTextTracks, 
n.shouldSaveSegmentTimingInfo_ = !1, n;
}
xo(t, e);
var i = t.prototype;
return i.createTransmuxer_ = function() {
return null;
}, i.buffered_ = function() {
if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return ot.createTimeRanges();
var e = this.subtitlesTrack_.cues, t = e[0].startTime, i = e[e.length - 1].startTime;
return ot.createTimeRanges([ [ t, i ] ]);
}, i.initSegmentForMap = function(e, t) {
if (void 0 === t && (t = !1), !e) return null;
var i = Mh(e), n = this.initSegments_[i];
if (t && !n && e.bytes) {
var r = Qf.byteLength + e.bytes.byteLength, a = new Uint8Array(r);
a.set(e.bytes), a.set(Qf, e.bytes.byteLength), this.initSegments_[i] = n = {
resolvedUri:e.resolvedUri,
byterange:e.byterange,
bytes:a
};
}
return n || e;
}, i.couldBeginLoading_ = function() {
return this.playlist_ && this.subtitlesTrack_ && !this.paused();
}, i.init_ = function() {
return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
}, i.track = function(e) {
return "undefined" == typeof e ? this.subtitlesTrack_ :(this.subtitlesTrack_ = e, 
"INIT" === this.state && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_);
}, i.remove = function(e, t) {
_f(e, t, this.subtitlesTrack_);
}, i.fillBuffer_ = function() {
var e = this;
this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
if (t = this.skipEmptySegments_(t)) {
if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
var i = function() {
e.state = "READY", e.paused() || e.monitorBuffer_();
};
return this.syncController_.one("timestampoffset", i), void (this.state = "WAITING_ON_TIMELINE");
}
this.loadSegment_(t);
}
}, i.skipEmptySegments_ = function(e) {
for (;e && e.segment.empty; ) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
return e;
}, i.stopForError = function(e) {
this.error(e), this.state = "READY", this.pause(), this.trigger("error");
}, i.segmentRequestFinished_ = function(e, t, i) {
var n = this;
if (!this.subtitlesTrack_) return void (this.state = "READY");
if (this.saveTransferStats_(t.stats), !this.pendingSegment_) return this.state = "READY", 
void (this.mediaRequestsAborted += 1);
if (e) return e.code === Ep.TIMEOUT && this.handleTimeout_(), e.code === Ep.ABORTED ? this.mediaRequestsAborted += 1 :this.mediaRequestsErrored += 1, 
void this.stopForError(e);
var r = this.pendingSegment_;
this.saveBandwidthRelatedStats_(r.duration, t.stats), this.state = "APPENDING", 
this.trigger("appending");
var a = r.segment;
if (a.map && (a.map.bytes = t.map.bytes), r.bytes = t.bytes, "function" != typeof Ro.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
var s, o = function() {
n.subtitlesTrack_.tech_.off("vttjsloaded", s), n.stopForError({
message:"Error loading vtt.js"
});
};
return s = function() {
n.subtitlesTrack_.tech_.off("vttjserror", o), n.segmentRequestFinished_(e, t, i);
}, this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", s), 
void this.subtitlesTrack_.tech_.one("vttjserror", o);
}
a.requested = !0;
try {
this.parseVTTCues_(r);
} catch (u) {
return void this.stopForError({
message:u.message
});
}
return this.updateTimeMapping_(r, this.syncController_.timelines[r.timeline], this.playlist_), 
r.cues.length ? r.timingInfo = {
start:r.cues[0].startTime,
end:r.cues[r.cues.length - 1].endTime
} :r.timingInfo = {
start:r.startOfSegment,
end:r.startOfSegment + r.duration
}, r.isSyncRequest ? (this.trigger("syncinfoupdate"), this.pendingSegment_ = null, 
void (this.state = "READY")) :(r.byteLength = r.bytes.byteLength, this.mediaSecondsLoaded += a.duration, 
r.cues.forEach(function(e) {
n.subtitlesTrack_.addCue(n.featuresNativeTextTracks_ ? new Ro.VTTCue(e.startTime, e.endTime, e.text) :e);
}), bf(this.subtitlesTrack_), void this.handleAppendsDone_());
}, i.handleData_ = function() {}, i.updateTimingInfoEnd_ = function() {}, i.parseVTTCues_ = function(e) {
var t, i = !1;
"function" == typeof Ro.TextDecoder ? t = new Ro.TextDecoder("utf8") :(t = Ro.WebVTT.StringDecoder(), 
i = !0);
var n = new Ro.WebVTT.Parser(Ro, Ro.vttjs, t);
if (e.cues = [], e.timestampmap = {
MPEGTS:0,
LOCAL:0
}, n.oncue = e.cues.push.bind(e.cues), n.ontimestampmap = function(t) {
e.timestampmap = t;
}, n.onparsingerror = function(e) {
ot.log.warn("Error encountered when parsing cues: " + e.message);
}, e.segment.map) {
var r = e.segment.map.bytes;
i && (r = Yf(r)), n.parse(r);
}
var a = e.bytes;
i && (a = Yf(a)), n.parse(a), n.flush();
}, i.updateTimeMapping_ = function(e, t, i) {
var n = e.segment;
if (t) {
if (!e.cues.length) return void (n.empty = !0);
var r = e.timestampmap, a = r.MPEGTS / Rc - r.LOCAL + t.mapping;
if (e.cues.forEach(function(e) {
e.startTime += a, e.endTime += a;
}), !i.syncInfo) {
var s = e.cues[0].startTime, o = e.cues[e.cues.length - 1].startTime;
i.syncInfo = {
mediaSequence:i.mediaSequence + e.mediaIndex,
time:Math.min(s, o - n.duration)
};
}
}
}, t;
}(Uf), Jf = function(e, t) {
for (var i = e.cues, n = 0; n < i.length; n++) {
var r = i[n];
if (t >= r.adStartTime && t <= r.adEndTime) return r;
}
return null;
}, Zf = function(e, t, i) {
if (void 0 === i && (i = 0), e.segments) for (var n, r = i, a = 0; a < e.segments.length; a++) {
var s = e.segments[a];
if (n || (n = Jf(t, r + s.duration / 2)), n) {
if ("cueIn" in s) {
n.endTime = r, n.adEndTime = r, r += s.duration, n = null;
continue;
}
if (r < n.endTime) {
r += s.duration;
continue;
}
n.endTime += s.duration;
} else if ("cueOut" in s && (n = new Ro.VTTCue(r, r + s.duration, s.cueOut), n.adStartTime = r, 
n.adEndTime = r + parseFloat(s.cueOut), t.addCue(n)), "cueOutCont" in s) {
var o = s.cueOutCont.split("/").map(parseFloat), u = o[0], l = o[1];
n = new Ro.VTTCue(r, r + s.duration, ""), n.adStartTime = r - u, n.adEndTime = n.adStartTime + l, 
t.addCue(n);
}
r += s.duration;
}
}, em = [ {
name:"VOD",
run:function(e, t, i, n, r) {
if (i !== 1 / 0) {
var a = {
time:0,
segmentIndex:0
};
return a;
}
return null;
}
}, {
name:"ProgramDateTime",
run:function(e, t, i, n, r) {
if (!e.datetimeToDisplayTime) return null;
var a = t.segments || [], s = null, o = null;
r = r || 0;
for (var u = 0; u < a.length; u++) {
var l = a[u];
if (l.dateTimeObject) {
var c = l.dateTimeObject.getTime() / 1e3, d = c + e.datetimeToDisplayTime, h = Math.abs(r - d);
if (null !== o && (0 === h || h > o)) break;
o = h, s = {
time:d,
segmentIndex:u
};
}
}
return s;
}
}, {
name:"Segment",
run:function(e, t, i, n, r) {
var a = t.segments || [], s = null, o = null;
r = r || 0;
for (var u = 0; u < a.length; u++) {
var l = a[u];
if (l.timeline === n && "undefined" != typeof l.start) {
var c = Math.abs(r - l.start);
if (null !== o && c > o) break;
(!s || null === o || o >= c) && (o = c, s = {
time:l.start,
segmentIndex:u
});
}
}
return s;
}
}, {
name:"Discontinuity",
run:function(e, t, i, n, r) {
var a = null;
if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
var u = t.discontinuityStarts[o], l = t.discontinuitySequence + o + 1, c = e.discontinuities[l];
if (c) {
var d = Math.abs(r - c.time);
if (null !== s && d > s) break;
(!a || null === s || s >= d) && (s = d, a = {
time:c.time,
segmentIndex:u
});
}
}
return a;
}
}, {
name:"Playlist",
run:function(e, t, i, n, r) {
if (t.syncInfo) {
var a = {
time:t.syncInfo.time,
segmentIndex:t.syncInfo.mediaSequence - t.mediaSequence
};
return a;
}
return null;
}
} ], tm = function(e) {
function t(t) {
var i;
return i = e.call(this) || this, i.timelines = [], i.discontinuities = [], i.datetimeToDisplayTime = null, 
i.logger_ = tf("SyncController"), i;
}
xo(t, e);
var i = t.prototype;
return i.getSyncPoint = function(e, t, i, n) {
var r = this.runStrategies_(e, t, i, n);
return r.length ? this.selectSyncPoint_(r, {
key:"time",
value:n
}) :null;
}, i.getExpiredTime = function(e, t) {
if (!e || !e.segments) return null;
var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
if (!i.length) return null;
var n = this.selectSyncPoint_(i, {
key:"segmentIndex",
value:0
});
return n.segmentIndex > 0 && (n.time *= -1), Math.abs(n.time + hh(e, n.segmentIndex, 0));
}, i.runStrategies_ = function(e, t, i, n) {
for (var r = [], a = 0; a < em.length; a++) {
var s = em[a], o = s.run(this, e, t, i, n);
o && (o.strategy = s.name, r.push({
strategy:s.name,
syncPoint:o
}));
}
return r;
}, i.selectSyncPoint_ = function(e, t) {
for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1; a < e.length; a++) {
var s = Math.abs(e[a].syncPoint[t.key] - t.value);
n > s && (n = s, i = e[a].syncPoint, r = e[a].strategy);
}
return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy" + (" [" + r + "]: [time:" + i.time + ",") + (" segmentIndex:" + i.segmentIndex + "]")), 
i;
}, i.saveExpiredSegmentInfo = function(e, t) {
for (var i = t.mediaSequence - e.mediaSequence, n = i - 1; n >= 0; n--) {
var r = e.segments[n];
if (r && "undefined" != typeof r.start) {
t.syncInfo = {
mediaSequence:e.mediaSequence + n,
time:r.start
}, this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + "," + (" mediaSequence: " + t.syncInfo.mediaSequence + "]")), 
this.trigger("syncinfoupdate");
break;
}
}
}, i.setDateTimeMapping = function(e) {
if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
var t = e.segments[0].dateTimeObject.getTime() / 1e3;
this.datetimeToDisplayTime = -t;
}
}, i.saveSegmentTimingInfo = function(e) {
var t = e.segmentInfo, i = e.shouldSaveTimelineMapping, n = this.calculateSegmentTimeMapping_(t, t.timingInfo, i);
n && (this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo || (t.playlist.syncInfo = {
mediaSequence:t.playlist.mediaSequence + t.mediaIndex,
time:t.segment.start
}));
}, i.timestampOffsetForTimeline = function(e) {
return "undefined" == typeof this.timelines[e] ? null :this.timelines[e].time;
}, i.mappingForTimeline = function(e) {
return "undefined" == typeof this.timelines[e] ? null :this.timelines[e].mapping;
}, i.calculateSegmentTimeMapping_ = function(e, t, i) {
var n = e.segment, r = this.timelines[e.timeline];
if (null !== e.timestampOffset) r = {
time:e.startOfSegment,
mapping:e.startOfSegment - t.start
}, i && (this.timelines[e.timeline] = r, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": " + ("[time: " + r.time + "] [mapping: " + r.mapping + "]"))), 
n.start = e.startOfSegment, n.end = t.end + r.mapping; else {
if (!r) return !1;
n.start = t.start + r.mapping, n.end = t.end + r.mapping;
}
return !0;
}, i.saveDiscontinuitySyncInfo_ = function(e) {
var t = e.playlist, i = e.segment;
if (i.discontinuity) this.discontinuities[i.timeline] = {
time:i.start,
accuracy:0
}; else if (t.discontinuityStarts && t.discontinuityStarts.length) for (var n = 0; n < t.discontinuityStarts.length; n++) {
var r = t.discontinuityStarts[n], a = t.discontinuitySequence + n + 1, s = r - e.mediaIndex, o = Math.abs(s);
if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
var u = void 0;
u = 0 > s ? i.start - hh(t, e.mediaIndex, r) :i.end + hh(t, e.mediaIndex + 1, r), 
this.discontinuities[a] = {
time:u,
accuracy:o
};
}
}
}, i.dispose = function() {
this.trigger("dispose"), this.off();
}, t;
}(ot.EventTarget), im = function(e) {
function t() {
var t;
return t = e.call(this) || this, t.pendingTimelineChanges_ = {}, t.lastTimelineChanges_ = {}, 
t;
}
xo(t, e);
var i = t.prototype;
return i.clearPendingTimelineChange = function(e) {
this.pendingTimelineChanges_[e] = null, this.trigger("pendingtimelinechange");
}, i.pendingTimelineChange = function(e) {
var t = e.type, i = e.from, n = e.to;
return "number" == typeof i && "number" == typeof n && (this.pendingTimelineChanges_[t] = {
type:t,
from:i,
to:n
}, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[t];
}, i.lastTimelineChange = function(e) {
var t = e.type, i = e.from, n = e.to;
return "number" == typeof i && "number" == typeof n && (this.lastTimelineChanges_[t] = {
type:t,
from:i,
to:n
}, delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")), this.lastTimelineChanges_[t];
}, i.dispose = function() {
this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, 
this.off();
}, t;
}(ot.EventTarget), nm = new hi("./decrypter-worker.worker.js", function(e, t) {
var i = this;
(function() {
function e(e, t) {
for (var i = 0; i < t.length; i++) {
var n = t[i];
n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
Object.defineProperty(e, n.key, n);
}
}
function t(t, i, n) {
return i && e(t.prototype, i), n && e(t, n), t;
}
function n(e, t) {
e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function r(e) {
return e.subarray(0, e.byteLength - e[e.byteLength - 1]);
}
var a = t, s = n, o = function() {
function e() {
this.listeners = {};
}
var t = e.prototype;
return t.on = function(e, t) {
this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
}, t.off = function(e, t) {
if (!this.listeners[e]) return !1;
var i = this.listeners[e].indexOf(t);
return this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(i, 1), 
i > -1;
}, t.trigger = function(e) {
var t = this.listeners[e];
if (t) if (2 === arguments.length) for (var i = t.length, n = 0; i > n; ++n) t[n].call(this, arguments[1]); else for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; a > s; ++s) t[s].apply(this, r);
}, t.dispose = function() {
this.listeners = {};
}, t.pipe = function(e) {
this.on("data", function(t) {
e.push(t);
});
}, e;
}(), u = o, l = function() {
var e, t, i, n, r, a, s, o, u, l = [ [ [], [], [], [], [] ], [ [], [], [], [], [] ] ], c = l[0], d = l[1], h = c[4], p = d[4], f = [], m = [];
for (e = 0; 256 > e; e++) m[(f[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
for (t = i = 0; !h[t]; t ^= n || 1, i = m[i] || 1) for (s = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4, 
s = s >> 8 ^ 255 & s ^ 99, h[t] = s, p[s] = t, a = f[r = f[n = f[t]]], u = 16843009 * a ^ 65537 * r ^ 257 * n ^ 16843008 * t, 
o = 257 * f[s] ^ 16843008 * s, e = 0; 4 > e; e++) c[e][t] = o = o << 24 ^ o >>> 8, 
d[e][s] = u = u << 24 ^ u >>> 8;
for (e = 0; 5 > e; e++) c[e] = c[e].slice(0), d[e] = d[e].slice(0);
return l;
}, c = null, d = function() {
function e(e) {
c || (c = l()), this._tables = [ [ c[0][0].slice(), c[0][1].slice(), c[0][2].slice(), c[0][3].slice(), c[0][4].slice() ], [ c[1][0].slice(), c[1][1].slice(), c[1][2].slice(), c[1][3].slice(), c[1][4].slice() ] ];
var t, i, n, r = this._tables[0][4], a = this._tables[1], s = e.length, o = 1;
if (4 !== s && 6 !== s && 8 !== s) throw new Error("Invalid aes key size");
var u = e.slice(0), d = [];
for (this._key = [ u, d ], t = s; 4 * s + 28 > t; t++) n = u[t - 1], (t % s === 0 || 8 === s && t % s === 4) && (n = r[n >>> 24] << 24 ^ r[n >> 16 & 255] << 16 ^ r[n >> 8 & 255] << 8 ^ r[255 & n], 
t % s === 0 && (n = n << 8 ^ n >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7))), 
u[t] = u[t - s] ^ n;
for (i = 0; t; i++, t--) n = u[3 & i ? t :t - 4], 4 >= t || 4 > i ? d[i] = n :d[i] = a[0][r[n >>> 24]] ^ a[1][r[n >> 16 & 255]] ^ a[2][r[n >> 8 & 255]] ^ a[3][r[255 & n]];
}
var t = e.prototype;
return t.decrypt = function(e, t, i, n, r, a) {
var s, o, u, l, c = this._key[1], d = e ^ c[0], h = n ^ c[1], p = i ^ c[2], f = t ^ c[3], m = c.length / 4 - 2, g = 4, v = this._tables[1], y = v[0], _ = v[1], b = v[2], T = v[3], S = v[4];
for (l = 0; m > l; l++) s = y[d >>> 24] ^ _[h >> 16 & 255] ^ b[p >> 8 & 255] ^ T[255 & f] ^ c[g], 
o = y[h >>> 24] ^ _[p >> 16 & 255] ^ b[f >> 8 & 255] ^ T[255 & d] ^ c[g + 1], u = y[p >>> 24] ^ _[f >> 16 & 255] ^ b[d >> 8 & 255] ^ T[255 & h] ^ c[g + 2], 
f = y[f >>> 24] ^ _[d >> 16 & 255] ^ b[h >> 8 & 255] ^ T[255 & p] ^ c[g + 3], g += 4, 
d = s, h = o, p = u;
for (l = 0; 4 > l; l++) r[(3 & -l) + a] = S[d >>> 24] << 24 ^ S[h >> 16 & 255] << 16 ^ S[p >> 8 & 255] << 8 ^ S[255 & f] ^ c[g++], 
s = d, d = h, h = p, p = f, f = s;
}, e;
}(), h = function(e) {
function t() {
var t;
return t = e.call(this, u) || this, t.jobs = [], t.delay = 1, t.timeout_ = null, 
t;
}
s(t, e);
var i = t.prototype;
return i.processJob_ = function() {
this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) :this.timeout_ = null;
}, i.push = function(e) {
this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
}, t;
}(u), p = function(e) {
return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24;
}, f = function(e, t, i) {
var n, r, a, s, o, u, l, c, h, f = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2), m = new d(Array.prototype.slice.call(t)), g = new Uint8Array(e.byteLength), v = new Int32Array(g.buffer);
for (n = i[0], r = i[1], a = i[2], s = i[3], h = 0; h < f.length; h += 4) o = p(f[h]), 
u = p(f[h + 1]), l = p(f[h + 2]), c = p(f[h + 3]), m.decrypt(o, u, l, c, v, h), 
v[h] = p(v[h] ^ n), v[h + 1] = p(v[h + 1] ^ r), v[h + 2] = p(v[h + 2] ^ a), v[h + 3] = p(v[h + 3] ^ s), 
n = o, r = u, a = l, s = c;
return g;
}, m = function() {
function e(t, i, n, a) {
var s = e.STEP, o = new Int32Array(t.buffer), u = new Uint8Array(t.byteLength), l = 0;
for (this.asyncStream_ = new h(), this.asyncStream_.push(this.decryptChunk_(o.subarray(l, l + s), i, n, u)), 
l = s; l < o.length; l += s) n = new Uint32Array([ p(o[l - 4]), p(o[l - 3]), p(o[l - 2]), p(o[l - 1]) ]), 
this.asyncStream_.push(this.decryptChunk_(o.subarray(l, l + s), i, n, u));
this.asyncStream_.push(function() {
a(null, r(u));
});
}
var t = e.prototype;
return t.decryptChunk_ = function(e, t, i, n) {
return function() {
var r = f(e, t, i);
n.set(r, e.byteOffset);
};
}, a(e, null, [ {
key:"STEP",
get:function() {
return 32e3;
}
} ]), e;
}(), g = function(e) {
var t = {};
return Object.keys(e).forEach(function(i) {
var n = e[i];
ArrayBuffer.isView(n) ? t[i] = {
bytes:n.buffer,
byteOffset:n.byteOffset,
byteLength:n.byteLength
} :t[i] = n;
}), t;
}, v = function(e) {
e.onmessage = function(t) {
var i = t.data, n = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength), r = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4), a = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
new m(n, r, a, function(t, n) {
e.postMessage(g({
source:i.source,
decrypted:n
}), [ n.buffer ]);
});
};
}, y = new v(i);
return y;
})();
}), rm = function(e) {
var t = e["default"] ? "main" :"alternative";
return e.characteristics && e.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"), 
t;
}, am = function(e, t) {
e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), 
t.activePlaylistLoader = null);
}, sm = function(e, t) {
t.activePlaylistLoader = e, e.load();
}, om = function(e, t) {
return function() {
var i = t.segmentLoaders, n = i[e], r = i.main, a = t.mediaTypes[e], s = a.activeTrack(), o = a.activeGroup(s), u = a.activePlaylistLoader;
if (am(n, a), o) {
if (!o.playlistLoader) return void (u && r.resetEverything());
n.resyncLoader(), sm(o.playlistLoader, a);
}
};
}, um = function(e, t) {
return function() {
var i = t.segmentLoaders[e];
i.abort(), i.pause();
};
}, lm = function(e, t) {
return function() {
var i = t.segmentLoaders, n = i[e], r = i.main, a = t.mediaTypes[e], s = a.activeTrack(), o = a.activeGroup(s), u = a.activePlaylistLoader;
if (am(n, a), o) {
if ("AUDIO" === e) {
if (!o.playlistLoader) return r.setAudio(!0), void r.resetEverything();
n.setAudio(!0), r.setAudio(!1);
}
if (u === o.playlistLoader) return void sm(o.playlistLoader, a);
n.track && n.track(s), n.resetEverything(), sm(o.playlistLoader, a);
}
};
}, cm = {
AUDIO:function(e, t) {
return function() {
var i = t.segmentLoaders[e], n = t.mediaTypes[e], r = t.blacklistCurrentPlaylist;
am(i, n);
var a = n.activeTrack(), s = n.activeGroup(), o = (s.filter(function(e) {
return e["default"];
})[0] || s[0]).id, u = n.tracks[o];
if (a === u) return void r({
message:"Problem encountered loading the default audio track."
});
ot.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
for (var l in n.tracks) n.tracks[l].enabled = n.tracks[l] === u;
n.onTrackChanged();
};
},
SUBTITLES:function(e, t) {
return function() {
var i = t.segmentLoaders[e], n = t.mediaTypes[e];
ot.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), 
am(i, n);
var r = n.activeTrack();
r && (r.mode = "disabled"), n.onTrackChanged();
};
}
}, dm = {
AUDIO:function(e, t, i) {
if (t) {
var n = i.tech, r = i.requestOptions, a = i.segmentLoaders[e];
t.on("loadedmetadata", function() {
var e = t.media();
a.playlist(e, r), (!n.paused() || e.endList && "none" !== n.preload()) && a.load();
}), t.on("loadedplaylist", function() {
a.playlist(t.media(), r), n.paused() || a.load();
}), t.on("error", cm[e](e, i));
}
},
SUBTITLES:function(e, t, i) {
var n = i.tech, r = i.requestOptions, a = i.segmentLoaders[e], s = i.mediaTypes[e];
t.on("loadedmetadata", function() {
var e = t.media();
a.playlist(e, r), a.track(s.activeTrack()), (!n.paused() || e.endList && "none" !== n.preload()) && a.load();
}), t.on("loadedplaylist", function() {
a.playlist(t.media(), r), n.paused() || a.load();
}), t.on("error", cm[e](e, i));
}
}, hm = {
AUDIO:function(e, t) {
var i = t.vhs, n = t.sourceType, r = t.segmentLoaders[e], a = t.requestOptions, s = t.master, o = s.mediaGroups, u = s.playlists, l = t.mediaTypes[e], c = l.groups, d = l.tracks, h = t.masterPlaylistLoader;
o[e] && 0 !== Object.keys(o[e]).length || (o[e] = {
main:{
"default":{
"default":!0
}
}
});
var p = function(r) {
c[r] || (c[r] = []);
var s = u.filter(function(t) {
return t.attributes[e] === r;
}), l = function(u) {
var l = o[e][r][u], p = s.filter(function(e) {
return e.resolvedUri !== l.resolvedUri;
});
!p.length && s.length && delete l.resolvedUri;
var f = void 0;
if (f = "vhs-json" === n && l.playlists ? new Yd(l.playlists[0], i, a) :l.resolvedUri ? new Yd(l.resolvedUri, i, a) :l.playlists && "dash" === n ? new op(l.playlists[0], i, a, h) :null, 
l = ot.mergeOptions({
id:u,
playlistLoader:f
}, l), dm[e](e, l.playlistLoader, t), c[r].push(l), "undefined" == typeof d[u]) {
var m = new ot.AudioTrack({
id:u,
kind:rm(l),
enabled:!1,
language:l.language,
"default":l["default"],
label:u
});
d[u] = m;
}
};
for (var p in o[e][r]) l(p);
};
for (var f in o[e]) p(f);
r.on("error", cm[e](e, t));
},
SUBTITLES:function(e, t) {
var i = t.tech, n = t.vhs, r = t.sourceType, a = t.segmentLoaders[e], s = t.requestOptions, o = t.master.mediaGroups, u = t.mediaTypes[e], l = u.groups, c = u.tracks, d = t.masterPlaylistLoader;
for (var h in o[e]) {
l[h] || (l[h] = []);
for (var p in o[e][h]) if (!o[e][h][p].forced) {
var f = o[e][h][p], m = void 0;
if ("hls" === r) m = new Yd(f.resolvedUri, n, s); else if ("dash" === r) {
var g = f.playlists.filter(function(e) {
return e.excludeUntil !== 1 / 0;
});
if (!g.length) return;
m = new op(f.playlists[0], n, s, d);
} else "vhs-json" === r && (m = new Yd(f.playlists ? f.playlists[0] :f.resolvedUri, n, s));
if (f = ot.mergeOptions({
id:p,
playlistLoader:m
}, f), dm[e](e, f.playlistLoader, t), l[h].push(f), "undefined" == typeof c[p]) {
var v = i.addRemoteTextTrack({
id:p,
kind:"subtitles",
"default":f["default"] && f.autoselect,
language:f.language,
label:p
}, !1).track;
c[p] = v;
}
}
}
a.on("error", cm[e](e, t));
},
"CLOSED-CAPTIONS":function(e, t) {
var i = t.tech, n = t.master.mediaGroups, r = t.mediaTypes[e], a = r.groups, s = r.tracks;
for (var o in n[e]) {
a[o] || (a[o] = []);
for (var u in n[e][o]) {
var l = n[e][o][u];
if (l.instreamId.match(/CC\d/) && (a[o].push(ot.mergeOptions({
id:u
}, l)), "undefined" == typeof s[u])) {
var c = i.addRemoteTextTrack({
id:l.instreamId,
kind:"captions",
"default":l["default"] && l.autoselect,
language:l.language,
label:u
}, !1).track;
s[u] = c;
}
}
}
}
}, pm = function(e, t) {
return function(i) {
var n = t.masterPlaylistLoader, r = t.mediaTypes[e].groups, a = n.media();
if (!a) return null;
var s = null;
return a.attributes[e] && (s = r[a.attributes[e]]), s = s || r.main, "undefined" == typeof i ? s :null === i ? null :s.filter(function(e) {
return e.id === i.id;
})[0] || null;
};
}, fm = {
AUDIO:function(e, t) {
return function() {
var i = t.mediaTypes[e].tracks;
for (var n in i) if (i[n].enabled) return i[n];
return null;
};
},
SUBTITLES:function(e, t) {
return function() {
var i = t.mediaTypes[e].tracks;
for (var n in i) if ("showing" === i[n].mode || "hidden" === i[n].mode) return i[n];
return null;
};
}
}, mm = function(e) {
[ "AUDIO", "SUBTITLES", "CLOSED-CAPTIONS" ].forEach(function(t) {
hm[t](t, e);
});
var t = e.mediaTypes, i = e.masterPlaylistLoader, n = e.tech, r = e.vhs;
[ "AUDIO", "SUBTITLES" ].forEach(function(i) {
t[i].activeGroup = pm(i, e), t[i].activeTrack = fm[i](i, e), t[i].onGroupChanged = om(i, e), 
t[i].onGroupChanging = um(i, e), t[i].onTrackChanged = lm(i, e);
});
var a = t.AUDIO.activeGroup();
if (a) {
var s = (a.filter(function(e) {
return e["default"];
})[0] || a[0]).id;
t.AUDIO.tracks[s].enabled = !0, t.AUDIO.onTrackChanged();
}
i.on("mediachange", function() {
[ "AUDIO", "SUBTITLES" ].forEach(function(e) {
return t[e].onGroupChanged();
});
}), i.on("mediachanging", function() {
[ "AUDIO", "SUBTITLES" ].forEach(function(e) {
return t[e].onGroupChanging();
});
});
var o = function() {
t.AUDIO.onTrackChanged(), n.trigger({
type:"usage",
name:"vhs-audio-change"
}), n.trigger({
type:"usage",
name:"hls-audio-change"
});
};
n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged), 
r.on("dispose", function() {
n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged);
}), n.clearTracks("audio");
for (var u in t.AUDIO.tracks) n.audioTracks().addTrack(t.AUDIO.tracks[u]);
}, gm = function() {
var e = {};
return [ "AUDIO", "SUBTITLES", "CLOSED-CAPTIONS" ].forEach(function(t) {
e[t] = {
groups:{},
tracks:{},
activePlaylistLoader:null,
activeGroup:mi,
activeTrack:mi,
onGroupChanged:mi,
onTrackChanged:mi
};
}), e;
}, vm = 120, ym = [ "mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred" ], _m = function(e) {
return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e];
}, bm = function(e) {
var t = e.currentPlaylist, i = e.nextPlaylist, n = e.forwardBuffer, r = e.bufferLowWaterLine, a = e.bufferHighWaterLine, s = e.duration, o = e.experimentalBufferBasedABR, u = e.log;
if (!i) return ot.log.warn("We received no playlist to switch to. Please check your stream."), 
!1;
var l = "allowing switch " + (t && t.id || "null") + " -> " + i.id;
if (!t || !t.endList) return u(l + " as current playlist " + (t ? "is live" :"is not set")), 
!0;
if (i.id === t.id) return !1;
var c = o ? up.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE :up.MAX_BUFFER_LOW_WATER_LINE;
if (c > s) return u(l + " as duration < max low water line (" + s + " < " + c + ")"), 
!0;
var d = i.attributes.BANDWIDTH, h = t.attributes.BANDWIDTH;
if (h > d && (!o || a > n)) {
var p = l + " as next bandwidth < current bandwidth (" + d + " < " + h + ")";
return o && (p += " and forwardBuffer < bufferHighWaterLine (" + n + " < " + a + ")"), 
u(p), !0;
}
if ((!o || d > h) && n >= r) {
var f = l + " as forwardBuffer >= bufferLowWaterLine (" + n + " >= " + r + ")";
return o && (f += " and next bandwidth > current bandwidth (" + d + " > " + h + ")"), 
u(f), !0;
}
return u("not " + l + " as no switching criteria met"), !1;
}, Tm = function(e) {
function t(t) {
var i;
i = e.call(this) || this;
var n = t.src, r = t.handleManifestRedirects, a = t.withCredentials, s = t.tech, o = t.bandwidth, u = t.externVhs, l = t.useCueTags, c = t.blacklistDuration, d = t.enableLowInitialPlaylist, h = t.sourceType, p = t.cacheEncryptionKeys, f = t.handlePartialData, m = t.experimentalBufferBasedABR;
if (!n) throw new Error("A non-empty playlist URL or JSON manifest string is required");
Yp = u, i.experimentalBufferBasedABR = Boolean(m), i.withCredentials = a, i.tech_ = s, 
i.vhs_ = s.vhs, i.sourceType_ = h, i.useCueTags_ = l, i.blacklistDuration = c, i.enableLowInitialPlaylist = d, 
i.useCueTags_ && (i.cueTagsTrack_ = i.tech_.addTextTrack("metadata", "ad-cues"), 
i.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), i.requestOptions_ = {
withCredentials:a,
handleManifestRedirects:r,
timeout:null
}, i.on("error", i.pauseLoading), i.mediaTypes_ = gm(), i.mediaSource = new Ro.MediaSource(), 
i.handleDurationChange_ = i.handleDurationChange_.bind(Ao(i)), i.handleSourceOpen_ = i.handleSourceOpen_.bind(Ao(i)), 
i.handleSourceEnded_ = i.handleSourceEnded_.bind(Ao(i)), i.mediaSource.addEventListener("durationchange", i.handleDurationChange_), 
i.mediaSource.addEventListener("sourceopen", i.handleSourceOpen_), i.mediaSource.addEventListener("sourceended", i.handleSourceEnded_), 
i.seekable_ = ot.createTimeRanges(), i.hasPlayed_ = !1, i.syncController_ = new tm(t), 
i.segmentMetadataTrack_ = s.addRemoteTextTrack({
kind:"metadata",
label:"segment-metadata"
}, !1).track, i.decrypter_ = new nm(), i.sourceUpdater_ = new Kf(i.mediaSource), 
i.inbandTextTracks_ = {}, i.timelineChangeController_ = new im();
var g = {
vhs:i.vhs_,
mediaSource:i.mediaSource,
currentTime:i.tech_.currentTime.bind(i.tech_),
seekable:function() {
return i.seekable();
},
seeking:function() {
return i.tech_.seeking();
},
duration:function() {
return i.duration();
},
hasPlayed:function() {
return i.hasPlayed_;
},
goalBufferLength:function() {
return i.goalBufferLength();
},
bandwidth:o,
syncController:i.syncController_,
decrypter:i.decrypter_,
sourceType:i.sourceType_,
inbandTextTracks:i.inbandTextTracks_,
cacheEncryptionKeys:p,
handlePartialData:f,
sourceUpdater:i.sourceUpdater_,
timelineChangeController:i.timelineChangeController_
};
return i.masterPlaylistLoader_ = "dash" === i.sourceType_ ? new op(n, i.vhs_, i.requestOptions_) :new Yd(n, i.vhs_, i.requestOptions_), 
i.setupMasterPlaylistLoaderListeners_(), i.mainSegmentLoader_ = new Uf(ot.mergeOptions(g, {
segmentMetadataTrack:i.segmentMetadataTrack_,
loaderType:"main"
}), t), i.audioSegmentLoader_ = new Uf(ot.mergeOptions(g, {
loaderType:"audio"
}), t), i.subtitleSegmentLoader_ = new $f(ot.mergeOptions(g, {
loaderType:"vtt",
featuresNativeTextTracks:i.tech_.featuresNativeTextTracks
}), t), i.setupSegmentLoaderListeners_(), i.experimentalBufferBasedABR && (i.masterPlaylistLoader_.one("loadedplaylist", function() {
return i.startABRTimer_();
}), i.tech_.on("pause", function() {
return i.stopABRTimer_();
}), i.tech_.on("play", function() {
return i.startABRTimer_();
})), ym.forEach(function(e) {
i[e + "_"] = _m.bind(Ao(i), e);
}), i.logger_ = tf("MPC"), i.triggeredFmp4Usage = !1, i.masterPlaylistLoader_.load(), 
i;
}
xo(t, e);
var i = t.prototype;
return i.checkABR_ = function() {
var e = this.selectPlaylist();
this.shouldSwitchToMedia_(e) && this.masterPlaylistLoader_.media(e);
}, i.startABRTimer_ = function() {
var e = this;
this.stopABRTimer_(), this.abrTimer_ = Ro.setInterval(function() {
return e.checkABR_();
}, 250);
}, i.stopABRTimer_ = function() {
this.tech_.scrubbing && this.tech_.scrubbing() || (Ro.clearInterval(this.abrTimer_), 
this.abrTimer_ = null);
}, i.setupMasterPlaylistLoaderListeners_ = function() {
var e = this;
this.masterPlaylistLoader_.on("loadedmetadata", function() {
var t = e.masterPlaylistLoader_.media(), i = 1.5 * t.targetDuration * 1e3;
wh(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 :e.requestOptions_.timeout = i, 
t.endList && "none" !== e.tech_.preload() && (e.mainSegmentLoader_.playlist(t, e.requestOptions_), 
e.mainSegmentLoader_.load()), mm({
sourceType:e.sourceType_,
segmentLoaders:{
AUDIO:e.audioSegmentLoader_,
SUBTITLES:e.subtitleSegmentLoader_,
main:e.mainSegmentLoader_
},
tech:e.tech_,
requestOptions:e.requestOptions_,
masterPlaylistLoader:e.masterPlaylistLoader_,
vhs:e.vhs_,
master:e.master(),
mediaTypes:e.mediaTypes_,
blacklistCurrentPlaylist:e.blacklistCurrentPlaylist.bind(e)
}), e.triggerPresenceUsage_(e.master(), t), e.setupFirstPlay(), !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") :e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function() {
e.trigger("selectedinitialmedia");
});
}), this.masterPlaylistLoader_.on("loadedplaylist", function() {
var t = e.masterPlaylistLoader_.media();
if (!t) {
e.excludeUnsupportedVariants_();
var i;
if (e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()), i || (i = e.selectPlaylist()), 
!i || !e.shouldSwitchToMedia_(i)) return;
e.initialMedia_ = i, e.masterPlaylistLoader_.media(e.initialMedia_);
var n = "vhs-json" === e.sourceType_ && e.initialMedia_.segments;
if (!n) return;
t = e.initialMedia_;
}
e.handleUpdatedMediaPlaylist(t);
}), this.masterPlaylistLoader_.on("error", function() {
e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error);
}), this.masterPlaylistLoader_.on("mediachanging", function() {
e.mainSegmentLoader_.abort(), e.mainSegmentLoader_.pause();
}), this.masterPlaylistLoader_.on("mediachange", function() {
var t = e.masterPlaylistLoader_.media(), i = 1.5 * t.targetDuration * 1e3;
wh(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 :e.requestOptions_.timeout = i, 
e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load(), 
e.tech_.trigger({
type:"mediachange",
bubbles:!0
});
}), this.masterPlaylistLoader_.on("playlistunchanged", function() {
var t = e.masterPlaylistLoader_.media(), i = e.stuckAtPlaylistEnd_(t);
i && (e.blacklistCurrentPlaylist({
message:"Playlist no longer updating."
}), e.tech_.trigger("playliststuck"));
}), this.masterPlaylistLoader_.on("renditiondisabled", function() {
e.tech_.trigger({
type:"usage",
name:"vhs-rendition-disabled"
}), e.tech_.trigger({
type:"usage",
name:"hls-rendition-disabled"
});
}), this.masterPlaylistLoader_.on("renditionenabled", function() {
e.tech_.trigger({
type:"usage",
name:"vhs-rendition-enabled"
}), e.tech_.trigger({
type:"usage",
name:"hls-rendition-enabled"
});
});
}, i.handleUpdatedMediaPlaylist = function(e) {
this.useCueTags_ && this.updateAdCues_(e), this.mainSegmentLoader_.playlist(e, this.requestOptions_), 
this.updateDuration(!e.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), 
this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
}, i.triggerPresenceUsage_ = function(e, t) {
var i = e.mediaGroups || {}, n = !0, r = Object.keys(i.AUDIO);
for (var a in i.AUDIO) for (var s in i.AUDIO[a]) {
var o = i.AUDIO[a][s];
o.uri || (n = !1);
}
n && (this.tech_.trigger({
type:"usage",
name:"vhs-demuxed"
}), this.tech_.trigger({
type:"usage",
name:"hls-demuxed"
})), Object.keys(i.SUBTITLES).length && (this.tech_.trigger({
type:"usage",
name:"vhs-webvtt"
}), this.tech_.trigger({
type:"usage",
name:"hls-webvtt"
})), Yp.Playlist.isAes(t) && (this.tech_.trigger({
type:"usage",
name:"vhs-aes"
}), this.tech_.trigger({
type:"usage",
name:"hls-aes"
})), r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && (this.tech_.trigger({
type:"usage",
name:"vhs-alternate-audio"
}), this.tech_.trigger({
type:"usage",
name:"hls-alternate-audio"
})), this.useCueTags_ && (this.tech_.trigger({
type:"usage",
name:"vhs-playlist-cue-tags"
}), this.tech_.trigger({
type:"usage",
name:"hls-playlist-cue-tags"
}));
}, i.shouldSwitchToMedia_ = function(e) {
var t = this.masterPlaylistLoader_.media(), i = this.tech_.buffered(), n = i.length ? i.end(i.length - 1) - this.tech_.currentTime() :0, r = this.bufferLowWaterLine(), a = this.bufferHighWaterLine();
return bm({
currentPlaylist:t,
nextPlaylist:e,
forwardBuffer:n,
bufferLowWaterLine:r,
bufferHighWaterLine:a,
duration:this.duration(),
experimentalBufferBasedABR:this.experimentalBufferBasedABR,
log:this.logger_
});
}, i.setupSegmentLoaderListeners_ = function() {
var e = this;
this.experimentalBufferBasedABR || (this.mainSegmentLoader_.on("bandwidthupdate", function() {
var t = e.selectPlaylist();
e.shouldSwitchToMedia_(t) && e.masterPlaylistLoader_.media(t), e.tech_.trigger("bandwidthupdate");
}), this.mainSegmentLoader_.on("progress", function() {
e.trigger("progress");
})), this.mainSegmentLoader_.on("error", function() {
e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error());
}), this.mainSegmentLoader_.on("appenderror", function() {
e.error = e.mainSegmentLoader_.error_, e.trigger("error");
}), this.mainSegmentLoader_.on("syncinfoupdate", function() {
e.onSyncInfoUpdate_();
}), this.mainSegmentLoader_.on("timestampoffset", function() {
e.tech_.trigger({
type:"usage",
name:"vhs-timestamp-offset"
}), e.tech_.trigger({
type:"usage",
name:"hls-timestamp-offset"
});
}), this.audioSegmentLoader_.on("syncinfoupdate", function() {
e.onSyncInfoUpdate_();
}), this.audioSegmentLoader_.on("appenderror", function() {
e.error = e.audioSegmentLoader_.error_, e.trigger("error");
}), this.mainSegmentLoader_.on("ended", function() {
e.logger_("main segment loader ended"), e.onEndOfStream();
}), this.mainSegmentLoader_.on("earlyabort", function(t) {
e.experimentalBufferBasedABR || (e.delegateLoaders_("all", [ "abort" ]), e.blacklistCurrentPlaylist({
message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
}, vm));
});
var t = function() {
if (!e.sourceUpdater_.hasCreatedSourceBuffers()) return e.tryToCreateSourceBuffers_();
var t = e.getCodecsOrExclude_();
t && e.sourceUpdater_.addOrChangeSourceBuffers(t);
};
this.mainSegmentLoader_.on("trackinfo", t), this.audioSegmentLoader_.on("trackinfo", t), 
this.mainSegmentLoader_.on("fmp4", function() {
e.triggeredFmp4Usage || (e.tech_.trigger({
type:"usage",
name:"vhs-fmp4"
}), e.tech_.trigger({
type:"usage",
name:"hls-fmp4"
}), e.triggeredFmp4Usage = !0);
}), this.audioSegmentLoader_.on("fmp4", function() {
e.triggeredFmp4Usage || (e.tech_.trigger({
type:"usage",
name:"vhs-fmp4"
}), e.tech_.trigger({
type:"usage",
name:"hls-fmp4"
}), e.triggeredFmp4Usage = !0);
}), this.audioSegmentLoader_.on("ended", function() {
e.logger_("audioSegmentLoader ended"), e.onEndOfStream();
});
}, i.mediaSecondsLoaded_ = function() {
return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
}, i.load = function() {
this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), 
this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
}, i.smoothQualityChange_ = function(e) {
void 0 === e && (e = this.selectPlaylist()), e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), 
this.mainSegmentLoader_.resetLoader());
}, i.fastQualityChange_ = function(e) {
var t = this;
void 0 === e && (e = this.selectPlaylist()), e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), 
this.mainSegmentLoader_.resetEverything(function() {
ot.browser.IE_VERSION || ot.browser.IS_EDGE ? t.tech_.setCurrentTime(t.tech_.currentTime() + .04) :t.tech_.setCurrentTime(t.tech_.currentTime());
}));
}, i.play = function() {
if (!this.setupFirstPlay()) {
this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
var e = this.tech_.seekable();
return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) :void 0;
}
}, i.setupFirstPlay = function() {
var e = this, t = this.masterPlaylistLoader_.media();
if (!t || this.tech_.paused() || this.hasPlayed_) return !1;
if (!t.endList) {
var i = this.seekable();
if (!i.length) return !1;
if (ot.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", function() {
e.trigger("firstplay"), e.tech_.setCurrentTime(i.end(0)), e.hasPlayed_ = !0;
}), !1;
this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0));
}
return this.hasPlayed_ = !0, this.load(), !0;
}, i.handleSourceOpen_ = function() {
if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
var e = this.tech_.play();
"undefined" != typeof e && "function" == typeof e.then && e.then(null, function(e) {});
}
this.trigger("sourceopen");
}, i.handleSourceEnded_ = function() {
if (this.inbandTextTracks_.metadataTrack_) {
var e = this.inbandTextTracks_.metadataTrack_.cues;
if (e && e.length) {
var t = this.duration();
e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE :t;
}
}
}, i.handleDurationChange_ = function() {
this.tech_.trigger("durationchange");
}, i.onEndOfStream = function() {
var e = this.mainSegmentLoader_.ended_;
this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.currentMediaInfo_ || this.mainSegmentLoader_.currentMediaInfo_.hasVideo ? e && this.audioSegmentLoader_.ended_ :this.audioSegmentLoader_.ended_), 
e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
}, i.stuckAtPlaylistEnd_ = function(e) {
var t = this.seekable();
if (!t.length) return !1;
var i = this.syncController_.getExpiredTime(e, this.duration());
if (null === i) return !1;
var n = Yp.Playlist.playlistEnd(e, i), r = this.tech_.currentTime(), a = this.tech_.buffered();
if (!a.length) return $d >= n - r;
var s = a.end(a.length - 1);
return $d >= s - r && $d >= n - s;
}, i.blacklistCurrentPlaylist = function(e, t) {
void 0 === e && (e = {});
var i = e.playlist || this.masterPlaylistLoader_.media();
if (t = t || e.blacklistDuration || this.blacklistDuration, !i) return this.error = e, 
void ("open" !== this.mediaSource.readyState ? this.trigger("error") :this.sourceUpdater_.endOfStream("network"));
var n = this.masterPlaylistLoader_.master.playlists, r = n.filter(_h), a = 1 === r.length && r[0] === i;
if (1 === n.length && t !== 1 / 0) return ot.log.warn("Problem encountered with playlist " + i.id + ". Trying again since it is the only playlist."), 
this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(a);
if (a) {
var s = !1;
n.forEach(function(e) {
if (e !== i) {
var t = e.excludeUntil;
"undefined" != typeof t && t !== 1 / 0 && (s = !0, delete e.excludeUntil);
}
}), s && (ot.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), 
this.tech_.trigger("retryplaylist"));
}
i.excludeUntil = Date.now() + 1e3 * t, this.tech_.trigger("blacklistplaylist"), 
this.tech_.trigger({
type:"usage",
name:"vhs-rendition-blacklisted"
}), this.tech_.trigger({
type:"usage",
name:"hls-rendition-blacklisted"
});
var o = this.selectPlaylist();
if (!o) return this.error = "Playback cannot continue. No available working or supported playlists.", 
void this.trigger("error");
var u = e.internal ? this.logger_ :ot.log.warn, l = e.message ? " " + e.message :"";
u((e.internal ? "Internal problem" :"Problem") + " encountered with playlist " + i.id + "." + (l + " Switching to playlist " + o.id + ".")), 
o.attributes.AUDIO !== i.attributes.AUDIO && this.delegateLoaders_("audio", [ "abort", "pause" ]), 
o.attributes.SUBTITLES !== i.attributes.SUBTITLES && this.delegateLoaders_("subtitle", [ "abort", "pause" ]), 
this.delegateLoaders_("main", [ "abort", "pause" ]);
var c = o.targetDuration / 2 * 1e3 || 5e3, d = "number" == typeof o.lastRequest && Date.now() - o.lastRequest <= c;
return this.masterPlaylistLoader_.media(o, a || d);
}, i.pauseLoading = function() {
this.delegateLoaders_("all", [ "abort", "pause" ]), this.stopABRTimer_();
}, i.delegateLoaders_ = function(e, t) {
var i = this, n = [], r = "all" === e;
(r || "main" === e) && n.push(this.masterPlaylistLoader_);
var a = [];
(r || "audio" === e) && a.push("AUDIO"), (r || "subtitle" === e) && (a.push("CLOSED-CAPTIONS"), 
a.push("SUBTITLES")), a.forEach(function(e) {
var t = i.mediaTypes_[e] && i.mediaTypes_[e].activePlaylistLoader;
t && n.push(t);
}), [ "main", "audio", "subtitle" ].forEach(function(t) {
var r = i[t + "SegmentLoader_"];
!r || e !== t && "all" !== e || n.push(r);
}), n.forEach(function(e) {
return t.forEach(function(t) {
"function" == typeof e[t] && e[t]();
});
});
}, i.setCurrentTime = function(e) {
var t = Zd(this.tech_.buffered(), e);
return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e :(this.mainSegmentLoader_.resetEverything(), 
this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), 
this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), 
this.subtitleSegmentLoader_.abort()), void this.load()) :0;
}, i.duration = function() {
if (!this.masterPlaylistLoader_) return 0;
var e = this.masterPlaylistLoader_.media();
return e ? e.endList ? this.mediaSource ? this.mediaSource.duration :Yp.Playlist.duration(e) :1 / 0 :0;
}, i.seekable = function() {
return this.seekable_;
}, i.onSyncInfoUpdate_ = function() {
var e;
if (this.masterPlaylistLoader_) {
var t = this.masterPlaylistLoader_.media();
if (t) {
var i = this.syncController_.getExpiredTime(t, this.duration());
if (null !== i) {
var n = this.masterPlaylistLoader_.master.suggestedPresentationDelay, r = Yp.Playlist.seekable(t, i, n);
if (0 !== r.length) {
if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
if (t = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), i = this.syncController_.getExpiredTime(t, this.duration()), 
null === i) return;
if (e = Yp.Playlist.seekable(t, i, n), 0 === e.length) return;
}
var a, s;
this.seekable_ && this.seekable_.length && (a = this.seekable_.end(0), s = this.seekable_.start(0)), 
e ? e.start(0) > r.end(0) || r.start(0) > e.end(0) ? this.seekable_ = r :this.seekable_ = ot.createTimeRanges([ [ e.start(0) > r.start(0) ? e.start(0) :r.start(0), e.end(0) < r.end(0) ? e.end(0) :r.end(0) ] ]) :this.seekable_ = r, 
this.seekable_ && this.seekable_.length && this.seekable_.end(0) === a && this.seekable_.start(0) === s || (this.logger_("seekable updated [" + nh(this.seekable_) + "]"), 
this.tech_.trigger("seekablechanged"));
}
}
}
}
}, i.updateDuration = function(e) {
if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), 
this.updateDuration_ = null), "open" !== this.mediaSource.readyState) return this.updateDuration_ = this.updateDuration.bind(this, e), 
void this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
if (e) {
var t = this.seekable();
if (!t.length) return;
return void ((isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) && this.sourceUpdater_.setDuration(t.end(t.length - 1)));
}
var i = this.tech_.buffered(), n = Yp.Playlist.duration(this.masterPlaylistLoader_.media());
i.length > 0 && (n = Math.max(n, i.end(i.length - 1))), this.mediaSource.duration !== n && this.sourceUpdater_.setDuration(n);
}, i.dispose = function() {
var e = this;
this.trigger("dispose"), this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), 
this.mainSegmentLoader_.dispose(), [ "AUDIO", "SUBTITLES" ].forEach(function(t) {
var i = e.mediaTypes_[t].groups;
for (var n in i) i[n].forEach(function(e) {
e.playlistLoader && e.playlistLoader.dispose();
});
}), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), 
this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), 
this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), 
this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), 
this.off();
}, i.master = function() {
return this.masterPlaylistLoader_.master;
}, i.media = function() {
return this.masterPlaylistLoader_.media() || this.initialMedia_;
}, i.areMediaTypesKnown_ = function() {
var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
return !this.mainSegmentLoader_.currentMediaInfo_ || e && !this.audioSegmentLoader_.currentMediaInfo_ ? !1 :!0;
}, i.getCodecsOrExclude_ = function() {
var e = this, t = {
main:this.mainSegmentLoader_.currentMediaInfo_ || {},
audio:this.audioSegmentLoader_.currentMediaInfo_ || {}
};
t.video = t.main;
var i = ef(this.master(), this.media()), n = {}, r = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
if (t.main.hasVideo && (n.video = i.video || t.main.videoCodec || kd), t.main.isMuxed && (n.video += "," + (i.audio || t.main.audioCodec || Sd)), 
(t.main.hasAudio && !t.main.isMuxed || t.audio.hasAudio || r) && (n.audio = i.audio || t.main.audioCodec || t.audio.audioCodec || Sd, 
t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 :t.audio.isFmp4), 
!n.audio && !n.video) return void this.blacklistCurrentPlaylist({
playlist:this.media(),
message:"Could not determine codecs for playlist.",
blacklistDuration:1 / 0
});
var a, s = function(e, t) {
return e ? wd(t) :Ad(t);
}, o = {};
if ([ "video", "audio" ].forEach(function(e) {
if (n.hasOwnProperty(e) && !s(t[e].isFmp4, n[e])) {
var i = t[e].isFmp4 ? "browser" :"muxer";
o[i] = o[i] || [], o[i].push(n[e]), "audio" === e && (a = i);
}
}), r && a && this.media().attributes.AUDIO) {
var u = this.media().attributes.AUDIO;
this.master().playlists.forEach(function(t) {
var i = t.attributes && t.attributes.AUDIO;
i === u && t !== e.media() && (t.excludeUntil = 1 / 0);
}), this.logger_("excluding audio group " + u + " as " + a + ' does not support codec(s): "' + n.audio + '"');
}
if (Object.keys(o).length) {
var l = Object.keys(o).reduce(function(e, t) {
return e && (e += ", "), e += t + ' does not support codec(s): "' + o[t].join(",") + '"';
}, "") + ".";
return void this.blacklistCurrentPlaylist({
playlist:this.media(),
internal:!0,
message:l,
blacklistDuration:1 / 0
});
}
if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
var c = [];
if ([ "video", "audio" ].forEach(function(t) {
var i = (xd(e.sourceUpdater_.codecs[t] || "")[t] || {}).type, r = (xd(n[t] || "")[t] || {}).type;
i && r && i.toLowerCase() !== r.toLowerCase() && c.push('"' + e.sourceUpdater_.codecs[t] + '" -> "' + n[t] + '"');
}), c.length) return void this.blacklistCurrentPlaylist({
playlist:this.media(),
message:"Codec switching not supported: " + c.join(", ") + ".",
blacklistDuration:1 / 0,
internal:!0
});
}
return n;
}, i.tryToCreateSourceBuffers_ = function() {
if ("open" === this.mediaSource.readyState && !this.sourceUpdater_.hasCreatedSourceBuffers() && this.areMediaTypesKnown_()) {
var e = this.getCodecsOrExclude_();
if (e) {
this.sourceUpdater_.createSourceBuffers(e);
var t = [ e.video, e.audio ].filter(Boolean).join(",");
this.excludeIncompatibleVariants_(t);
}
}
}, i.excludeUnsupportedVariants_ = function() {
var e = this, t = this.master().playlists, i = [];
Object.keys(t).forEach(function(n) {
var r = t[n];
if (-1 === i.indexOf(r.id)) {
i.push(r.id);
var a = ef(e.master, r), s = [];
!a.audio || Ad(a.audio) || wd(a.audio) || (r.excludeUntil = 1 / 0, s.push("audio codec " + a.audio)), 
!a.video || Ad(a.video) || wd(a.video) || (r.excludeUntil = 1 / 0, s.push("video codec " + a.video)), 
a.text && "stpp.ttml.im1t" === a.text && (r.excludeUntil = 1 / 0, s.push("text codec " + a.text)), 
s.length && e.logger_("excluding " + r.id + " as codecs " + s.join(", ") + " are unsupported");
}
});
}, i.excludeIncompatibleVariants_ = function(e) {
var t = this, i = xd(e), n = Object.keys(i).length;
this.master().playlists.forEach(function(e) {
if (e.excludeUntil !== 1 / 0) {
var r = {}, a = 2, s = [], o = ef(t.masterPlaylistLoader_.master, e);
if (o.audio || o.video) {
var u = [ o.video, o.audio ].filter(Boolean).join(",");
r = xd(u), a = Object.keys(r).length;
}
a !== n && (s.push('codec count "' + a + '" !== "' + n + '"'), e.excludeUntil = 1 / 0), 
t.sourceUpdater_.canChangeType() || (r.video && i.video && r.video.type.toLowerCase() !== i.video.type.toLowerCase() && (s.push('video codec "' + r.video.type + '" !== "' + i.video.type + '"'), 
e.excludeUntil = 1 / 0), r.audio && i.audio && r.audio.type.toLowerCase() !== i.audio.type.toLowerCase() && (e.excludeUntil = 1 / 0, 
s.push('audio codec "' + r.audio.type + '" !== "' + i.audio.type + '"'))), s.length && t.logger_("blacklisting " + e.id + ": " + s.join(" && "));
}
});
}, i.updateAdCues_ = function(e) {
var t = 0, i = this.seekable();
i.length && (t = i.start(0)), Zf(e, this.cueTagsTrack_, t);
}, i.goalBufferLength = function() {
var e = this.tech_.currentTime(), t = up.GOAL_BUFFER_LENGTH, i = up.GOAL_BUFFER_LENGTH_RATE, n = Math.max(t, up.MAX_GOAL_BUFFER_LENGTH);
return Math.min(t + e * i, n);
}, i.bufferLowWaterLine = function() {
var e = this.tech_.currentTime(), t = up.BUFFER_LOW_WATER_LINE, i = up.BUFFER_LOW_WATER_LINE_RATE, n = Math.max(t, up.MAX_BUFFER_LOW_WATER_LINE), r = Math.max(t, up.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
return Math.min(t + e * i, this.experimentalBufferBasedABR ? r :n);
}, i.bufferHighWaterLine = function() {
return up.BUFFER_HIGH_WATER_LINE;
}, t;
}(ot.EventTarget), Sm = function(e, t, i) {
return function(n) {
var r = e.master.playlists[t], a = yh(r), s = _h(r);
return "undefined" == typeof n ? s :(n ? delete r.disabled :r.disabled = !0, n === s || a || (i(), 
n ? e.trigger("renditionenabled") :e.trigger("renditiondisabled")), n);
};
}, km = function(e, t, i) {
var n = e.masterPlaylistController_, r = e.options_.smoothQualityChange, a = r ? "smooth" :"fast", s = n[a + "QualityChange_"].bind(n);
if (t.attributes.RESOLUTION) {
var o = t.attributes.RESOLUTION;
this.width = o.width, this.height = o.height;
}
this.bandwidth = t.attributes.BANDWIDTH, this.codecs = ef(n.master(), t), this.playlist = t, 
this.id = i, this.enabled = Sm(e.playlists, t.id, s);
}, wm = function(e) {
var t = e.playlists;
e.representations = function() {
return t && t.master && t.master.playlists ? t.master.playlists.filter(function(e) {
return !yh(e);
}).map(function(t, i) {
return new km(e, t, t.id);
}) :[];
};
}, Em = [ "seeking", "seeked", "pause", "playing", "error" ], Cm = function(e) {
var t = e.buffered, i = e.targetDuration, n = e.currentTime;
return t.length ? t.end(0) - t.start(0) < 2 * i ? !1 :n > t.start(0) ? !1 :t.start(0) - n < i :!1;
}, Im = function() {
function e(e) {
var t = this;
this.masterPlaylistController_ = e.masterPlaylistController, this.tech_ = e.tech, 
this.seekable = e.seekable, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, 
this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta, this.media = e.media, this.consecutiveUpdates = 0, 
this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, 
this.logger_ = tf("PlaybackWatcher"), this.logger_("initialize");
var i = function() {
return t.monitorCurrentTime_();
}, n = function() {
return t.techWaiting_();
}, r = function() {
return t.cancelTimer_();
}, a = function() {
return t.fixesBadSeeks_();
}, s = this.masterPlaylistController_, o = [ "main", "subtitle", "audio" ], u = {};
o.forEach(function(e) {
u[e] = {
reset:function() {
return t.resetSegmentDownloads_(e);
},
updateend:function() {
return t.checkSegmentDownloads_(e);
}
}, s[e + "SegmentLoader_"].on("appendsdone", u[e].updateend), s[e + "SegmentLoader_"].on("playlistupdate", u[e].reset), 
t.tech_.on([ "seeked", "seeking" ], u[e].reset);
}), this.tech_.on("seekablechanged", a), this.tech_.on("waiting", n), this.tech_.on(Em, r), 
this.tech_.on("canplay", i), this.dispose = function() {
t.logger_("dispose"), t.tech_.off("seekablechanged", a), t.tech_.off("waiting", n), 
t.tech_.off(Em, r), t.tech_.off("canplay", i), o.forEach(function(e) {
s[e + "SegmentLoader_"].off("appendsdone", u[e].updateend), s[e + "SegmentLoader_"].off("playlistupdate", u[e].reset), 
t.tech_.off([ "seeked", "seeking" ], u[e].reset);
}), t.checkCurrentTimeTimeout_ && Ro.clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_();
};
}
var t = e.prototype;
return t.monitorCurrentTime_ = function() {
this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && Ro.clearTimeout(this.checkCurrentTimeTimeout_), 
this.checkCurrentTimeTimeout_ = Ro.setTimeout(this.monitorCurrentTime_.bind(this), 250);
}, t.resetSegmentDownloads_ = function(e) {
var t = this.masterPlaylistController_[e + "SegmentLoader_"];
this[e + "StalledDownloads_"] > 0 && this.logger_("resetting possible stalled download count for " + e + " loader"), 
this[e + "StalledDownloads_"] = 0, this[e + "Buffered_"] = t.buffered_();
}, t.checkSegmentDownloads_ = function(e) {
var t = this.masterPlaylistController_, i = t[e + "SegmentLoader_"], n = i.buffered_(), r = sh(this[e + "Buffered_"], n);
return this[e + "Buffered_"] = n, r ? void this.resetSegmentDownloads_(e) :(this[e + "StalledDownloads_"]++, 
this.logger_("found #" + this[e + "StalledDownloads_"] + " " + e + " appends that did not increase buffer (possible stalled download)", {
playlistId:i.playlist_ && i.playlist_.id,
buffered:ah(n)
}), void (this[e + "StalledDownloads_"] < 10 || (this.logger_(e + " loader stalled download exclusion"), 
this.resetSegmentDownloads_(e), this.tech_.trigger({
type:"usage",
name:"vhs-" + e + "-download-exclusion"
}), "subtitle" !== e && t.blacklistCurrentPlaylist({
message:"Excessive " + e + " segment downloading detected."
}, 1 / 0))));
}, t.checkCurrentTime_ = function() {
if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, 
void (this.lastRecordedTime = this.tech_.currentTime());
if (!this.tech_.paused() && !this.tech_.seeking()) {
var e = this.tech_.currentTime(), t = this.tech_.buffered();
return this.lastRecordedTime === e && (!t.length || e + $d >= t.end(t.length - 1)) ? this.techWaiting_() :void (this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++, 
this.waiting_()) :e === this.lastRecordedTime ? this.consecutiveUpdates++ :(this.consecutiveUpdates = 0, 
this.lastRecordedTime = e));
}
}, t.cancelTimer_ = function() {
this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), 
this.timer_ = null;
}, t.fixesBadSeeks_ = function() {
var e = this.tech_.seeking();
if (!e) return !1;
var t, i = this.seekable(), n = this.tech_.currentTime(), r = this.afterSeekableWindow_(i, n, this.media(), this.allowSeeksWithinUnsafeLiveWindow);
if (r) {
var a = i.end(i.length - 1);
t = a;
}
if (this.beforeSeekableWindow_(i, n)) {
var s = i.start(0);
t = s + (s === i.end(0) ? 0 :$d);
}
if ("undefined" != typeof t) return this.logger_("Trying to seek outside of seekable at time " + n + " with " + ("seekable range " + nh(i) + ". Seeking to ") + (t + ".")), 
this.tech_.setCurrentTime(t), !0;
var o = this.tech_.buffered();
return Cm({
buffered:o,
targetDuration:this.media().targetDuration,
currentTime:n
}) ? (t = o.start(0) + $d, this.logger_("Buffered region starts (" + o.start(0) + ") " + (" just beyond seek point (" + n + "). Seeking to " + t + ".")), 
this.tech_.setCurrentTime(t), !0) :!1;
}, t.waiting_ = function() {
if (!this.techWaiting_()) {
var e = this.tech_.currentTime(), t = this.tech_.buffered(), i = Zd(t, e);
return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), 
this.logger_("Stopped at " + e + " while inside a buffered region " + ("[" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume ") + "playback by seeking to the current time."), 
this.tech_.trigger({
type:"usage",
name:"vhs-unknown-waiting"
}), void this.tech_.trigger({
type:"usage",
name:"hls-unknown-waiting"
})) :void 0;
}
}, t.techWaiting_ = function() {
var e = this.seekable(), t = this.tech_.currentTime();
if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
if (this.tech_.seeking() || null !== this.timer_) return !0;
if (this.beforeSeekableWindow_(e, t)) {
var i = e.end(e.length - 1);
return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), 
this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
type:"usage",
name:"vhs-live-resync"
}), this.tech_.trigger({
type:"usage",
name:"hls-live-resync"
}), !0;
}
var n = this.tech_.vhs.masterPlaylistController_.sourceUpdater_, r = this.tech_.buffered(), a = this.videoUnderflow_({
audioBuffered:n.audioBuffered(),
videoBuffered:n.videoBuffered(),
currentTime:t
});
if (a) return this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
type:"usage",
name:"vhs-video-underflow"
}), this.tech_.trigger({
type:"usage",
name:"hls-video-underflow"
}), !0;
var s = eh(r, t);
if (s.length > 0) {
var o = s.start(0) - t;
return this.logger_("Stopped at " + t + ", setting timer for " + o + ", seeking to " + s.start(0)), 
this.cancelTimer_(), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * o, t), 
!0;
}
return !1;
}, t.afterSeekableWindow_ = function(e, t, i, n) {
if (void 0 === n && (n = !1), !e.length) return !1;
var r = e.end(e.length - 1) + $d, a = !i.endList;
return a && n && (r = e.end(e.length - 1) + 3 * i.targetDuration), t > r ? !0 :!1;
}, t.beforeSeekableWindow_ = function(e, t) {
return e.length && e.start(0) > 0 && t < e.start(0) - this.liveRangeSafeTimeDelta ? !0 :!1;
}, t.videoUnderflow_ = function(e) {
var t = e.videoBuffered, i = e.audioBuffered, n = e.currentTime;
if (t) {
var r;
if (t.length && i.length) {
var a = Zd(t, n - 3), s = Zd(t, n), o = Zd(i, n);
o.length && !s.length && a.length && (r = {
start:a.end(0),
end:o.end(0)
});
} else {
var u = eh(t, n);
u.length || (r = this.gapFromVideoUnderflow_(t, n));
}
return r ? (this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + n), 
!0) :!1;
}
}, t.skipTheGap_ = function(e) {
var t = this.tech_.buffered(), i = this.tech_.currentTime(), n = eh(t, i);
this.cancelTimer_(), 0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), 
this.tech_.setCurrentTime(n.start(0) + Qd), this.tech_.trigger({
type:"usage",
name:"vhs-gap-skip"
}), this.tech_.trigger({
type:"usage",
name:"hls-gap-skip"
}));
}, t.gapFromVideoUnderflow_ = function(e, t) {
for (var i = th(e), n = 0; n < i.length; n++) {
var r = i.start(n), a = i.end(n);
if (4 > t - r && t - r > 2) return {
start:r,
end:a
};
}
return null;
}, e;
}(), Pm = {
errorInterval:30,
getSource:function(e) {
var t = this.tech({
IWillNotUseThisInPlugins:!0
}), i = t.currentSource_ || this.currentSource();
return e(i);
}
}, Am = function ag(e, t) {
var i = 0, n = 0, r = ot.mergeOptions(Pm, t);
e.ready(function() {
e.trigger({
type:"usage",
name:"vhs-error-reload-initialized"
}), e.trigger({
type:"usage",
name:"hls-error-reload-initialized"
});
});
var a = function() {
n && e.currentTime(n);
}, s = function(t) {
null !== t && void 0 !== t && (n = e.duration() !== 1 / 0 && e.currentTime() || 0, 
e.one("loadedmetadata", a), e.src(t), e.trigger({
type:"usage",
name:"vhs-error-reload"
}), e.trigger({
type:"usage",
name:"hls-error-reload"
}), e.play());
}, o = function() {
return Date.now() - i < 1e3 * r.errorInterval ? (e.trigger({
type:"usage",
name:"vhs-error-reload-canceled"
}), void e.trigger({
type:"usage",
name:"hls-error-reload-canceled"
})) :r.getSource && "function" == typeof r.getSource ? (i = Date.now(), r.getSource.call(e, s)) :void ot.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
}, u = function c() {
e.off("loadedmetadata", a), e.off("error", o), e.off("dispose", c);
}, l = function(t) {
u(), ag(e, t);
};
e.on("error", o), e.on("dispose", u), e.reloadSourceOnError = l;
}, xm = function(e) {
Am(this, e);
}, Lm = "2.4.2", Dm = "5.8.0", Om = "0.15.0", Rm = "4.5.0", Nm = "3.1.0", Mm = {
PlaylistLoader:Yd,
Playlist:Eh,
utils:Vh,
STANDARD_PLAYLIST_SELECTOR:cf,
INITIAL_PLAYLIST_SELECTOR:pf,
lastBandwidthSelector:cf,
movingAverageBandwidthSelector:df,
comparePlaylistBandwidth:of,
comparePlaylistResolution:uf,
xhr:Ah()
};
Object.keys(up).forEach(function(e) {
Object.defineProperty(Mm, e, {
get:function() {
return ot.log.warn("using Vhs." + e + " is UNSAFE be sure you know what you are doing"), 
up[e];
},
set:function(t) {
return ot.log.warn("using Vhs." + e + " is UNSAFE be sure you know what you are doing"), 
"number" != typeof t || 0 > t ? void ot.log.warn("value of Vhs." + e + " must be greater than or equal to 0") :void (up[e] = t);
}
});
});
var Um = "videojs-vhs", Bm = function(e, t) {
for (var i = t.media(), n = -1, r = 0; r < e.length; r++) if (e[r].id === i.id) {
n = r;
break;
}
e.selectedIndex_ = n, e.trigger({
selectedIndex:n,
type:"change"
});
}, Fm = function(e, t) {
t.representations().forEach(function(t) {
e.addQualityLevel(t);
}), Bm(e, t.playlists);
};
Mm.canPlaySource = function() {
return ot.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
};
var jm = function(e, t, i) {
if (!e) return e;
var n = {
video:t && t.attributes && t.attributes.CODECS,
audio:i && i.attributes && i.attributes.CODECS
};
!n.audio && n.video && n.video.split(",").length > 1 && n.video.split(",").forEach(function(e) {
e = e.trim(), Id(e) ? n.audio = e :Pd(e) && (n.video = e);
});
var r = n.video ? 'video/mp4;codecs="' + n.video + '"' :null, a = n.audio ? 'audio/mp4;codecs="' + n.audio + '"' :null, s = {};
for (var o in e) s[o] = {
audioContentType:a,
videoContentType:r
}, t.contentProtection && t.contentProtection[o] && t.contentProtection[o].pssh && (s[o].pssh = t.contentProtection[o].pssh), 
"string" == typeof e[o] && (s[o].url = e[o]);
return ot.mergeOptions(e, s);
}, Vm = function(e, t) {
return e.reduce(function(e, i) {
if (!i.contentProtection) return e;
var n = t.reduce(function(e, t) {
var n = i.contentProtection[t];
return n && n.pssh && (e[t] = {
pssh:n.pssh
}), e;
}, {});
return Object.keys(n).length && e.push(n), e;
}, []);
}, Hm = function(e) {
var t = e.player, i = e.sourceKeySystems, n = e.audioMedia, r = e.mainPlaylists;
if (!t.eme.initializeMediaKeys) return Promise.resolve();
var a = n ? r.concat([ n ]) :r, s = Vm(a, Object.keys(i)), o = [], u = [];
return s.forEach(function(e) {
u.push(new Promise(function(e, i) {
t.tech_.one("keysessioncreated", e);
})), o.push(new Promise(function(i, n) {
t.eme.initializeMediaKeys({
keySystems:e
}, function(e) {
return e ? void n(e) :void i();
});
}));
}), Promise.race([ Promise.all(o), Promise.race(u) ]);
}, qm = function(e) {
var t = e.player, i = e.sourceKeySystems, n = e.media, r = e.audioMedia, a = jm(i, n, r);
return a ? (t.currentSource().keySystems = a, a && !t.eme ? (ot.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), 
!1) :!0) :!1;
}, Wm = function() {
if (!Ro.localStorage) return null;
var e = Ro.localStorage.getItem(Um);
if (!e) return null;
try {
return JSON.parse(e);
} catch (t) {
return null;
}
}, zm = function(e) {
if (!Ro.localStorage) return !1;
var t = Wm();
t = t ? ot.mergeOptions(t, e) :e;
try {
Ro.localStorage.setItem(Um, JSON.stringify(t));
} catch (i) {
return !1;
}
return t;
}, Gm = function(e) {
return 0 === e.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e.substring(e.indexOf(",") + 1)) :e;
};
Mm.supportsNativeHls = function() {
if (!Oo || !Oo.createElement) return !1;
var e = Oo.createElement("video");
if (!ot.getTech("Html5").isSupported()) return !1;
var t = [ "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl" ];
return t.some(function(t) {
return /maybe|probably/i.test(e.canPlayType(t));
});
}(), Mm.supportsNativeDash = function() {
return Oo && Oo.createElement && ot.getTech("Html5").isSupported() ? /maybe|probably/i.test(Oo.createElement("video").canPlayType("application/dash+xml")) :!1;
}(), Mm.supportsTypeNatively = function(e) {
return "hls" === e ? Mm.supportsNativeHls :"dash" === e ? Mm.supportsNativeDash :!1;
}, Mm.isSupported = function() {
return ot.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
};
var Xm = ot.getComponent("Component"), Km = function(e) {
function t(t, i, n) {
var r;
if (r = e.call(this, i, ot.mergeOptions(n.hls, n.vhs)) || this, n.hls && Object.keys(n.hls).length && ot.log.warn("Using hls options is deprecated. Use vhs instead."), 
r.logger_ = tf("VhsHandler"), i.options_ && i.options_.playerId) {
var a = ot(i.options_.playerId);
a.hasOwnProperty("hls") || Object.defineProperty(a, "hls", {
get:function() {
return ot.log.warn("player.hls is deprecated. Use player.tech().vhs instead."), 
i.trigger({
type:"usage",
name:"hls-player-access"
}), Ao(r);
},
configurable:!0
}), a.hasOwnProperty("vhs") || Object.defineProperty(a, "vhs", {
get:function() {
return ot.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."), 
i.trigger({
type:"usage",
name:"vhs-player-access"
}), Ao(r);
},
configurable:!0
}), a.hasOwnProperty("dash") || Object.defineProperty(a, "dash", {
get:function() {
return ot.log.warn("player.dash is deprecated. Use player.tech().vhs instead."), 
Ao(r);
},
configurable:!0
}), r.player_ = a;
}
if (r.tech_ = i, r.source_ = t, r.stats = {}, r.ignoreNextSeekingEvent_ = !1, r.setOptions_(), 
r.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks) i.overrideNativeAudioTracks(!0), 
i.overrideNativeVideoTracks(!0); else if (r.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
return r.on(Oo, [ "fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange" ], function(e) {
var t = Oo.fullscreenElement || Oo.webkitFullscreenElement || Oo.mozFullScreenElement || Oo.msFullscreenElement;
t && t.contains(r.tech_.el()) && r.masterPlaylistController_.smoothQualityChange_();
}), r.on(r.tech_, "seeking", function() {
return this.ignoreNextSeekingEvent_ ? void (this.ignoreNextSeekingEvent_ = !1) :void this.setCurrentTime(this.tech_.currentTime());
}), r.on(r.tech_, "error", function() {
this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading();
}), r.on(r.tech_, "play", r.play), r;
}
xo(t, e);
var i = t.prototype;
return i.setOptions_ = function() {
var e = this;
if (this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.handleManifestRedirects = this.options_.handleManifestRedirects === !1 ? !1 :!0, 
this.options_.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions === !1 ? !1 :!0, 
this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1, 
this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage :this.options_.useBandwidthFromLocalStorage || !1, 
this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], 
this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, this.options_.handlePartialData = this.options_.handlePartialData || !1, 
"number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), 
"number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
var t = Wm();
t && t.bandwidth && (this.options_.bandwidth = t.bandwidth, this.tech_.trigger({
type:"usage",
name:"vhs-bandwidth-from-local-storage"
}), this.tech_.trigger({
type:"usage",
name:"hls-bandwidth-from-local-storage"
})), t && t.throughput && (this.options_.throughput = t.throughput, this.tech_.trigger({
type:"usage",
name:"vhs-throughput-from-local-storage"
}), this.tech_.trigger({
type:"usage",
name:"hls-throughput-from-local-storage"
}));
}
"number" != typeof this.options_.bandwidth && (this.options_.bandwidth = up.INITIAL_BANDWIDTH), 
this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === up.INITIAL_BANDWIDTH, 
[ "withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys", "handlePartialData", "playlistSelector", "initialPlaylistSelector", "experimentalBufferBasedABR", "liveRangeSafeTimeDelta" ].forEach(function(t) {
"undefined" != typeof e.source_[t] && (e.options_[t] = e.source_[t]);
}), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, 
this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
}, i.src = function(e, t) {
var i = this;
if (e) {
this.setOptions_(), this.options_.src = Gm(this.source_.src), this.options_.tech = this.tech_, 
this.options_.externVhs = Mm, this.options_.sourceType = $o(t), this.options_.seekTo = function(e) {
i.tech_.setCurrentTime(e);
}, this.masterPlaylistController_ = new Tm(this.options_);
var n = ot.mergeOptions({
liveRangeSafeTimeDelta:$d
}, this.options_, {
seekable:function() {
return i.seekable();
},
media:function() {
return i.masterPlaylistController_.media();
},
masterPlaylistController:this.masterPlaylistController_
});
this.playbackWatcher_ = new Im(n), this.masterPlaylistController_.on("error", function() {
var e = ot.players[i.tech_.options_.playerId], t = i.masterPlaylistController_.error;
"object" != typeof t || t.code ? "string" == typeof t && (t = {
message:t,
code:3
}) :t.code = 3, e.error(t);
});
var r = this.options_.experimentalBufferBasedABR ? Mm.movingAverageBandwidthSelector(.55) :Mm.STANDARD_PLAYLIST_SELECTOR;
this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) :r.bind(this), 
this.masterPlaylistController_.selectInitialPlaylist = Mm.INITIAL_PLAYLIST_SELECTOR.bind(this), 
this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, 
Object.defineProperties(this, {
selectPlaylist:{
get:function() {
return this.masterPlaylistController_.selectPlaylist;
},
set:function(e) {
this.masterPlaylistController_.selectPlaylist = e.bind(this);
}
},
throughput:{
get:function() {
return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate;
},
set:function(e) {
this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1;
}
},
bandwidth:{
get:function() {
return this.masterPlaylistController_.mainSegmentLoader_.bandwidth;
},
set:function(e) {
this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
rate:0,
count:0
};
}
},
systemBandwidth:{
get:function() {
var e, t = 1 / (this.bandwidth || 1);
e = this.throughput > 0 ? 1 / this.throughput :0;
var i = Math.floor(1 / (t + e));
return i;
},
set:function() {
ot.log.error('The "systemBandwidth" property is read-only');
}
}
}), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), 
Object.defineProperties(this.stats, {
bandwidth:{
get:function() {
return i.bandwidth || 0;
},
enumerable:!0
},
mediaRequests:{
get:function() {
return i.masterPlaylistController_.mediaRequests_() || 0;
},
enumerable:!0
},
mediaRequestsAborted:{
get:function() {
return i.masterPlaylistController_.mediaRequestsAborted_() || 0;
},
enumerable:!0
},
mediaRequestsTimedout:{
get:function() {
return i.masterPlaylistController_.mediaRequestsTimedout_() || 0;
},
enumerable:!0
},
mediaRequestsErrored:{
get:function() {
return i.masterPlaylistController_.mediaRequestsErrored_() || 0;
},
enumerable:!0
},
mediaTransferDuration:{
get:function() {
return i.masterPlaylistController_.mediaTransferDuration_() || 0;
},
enumerable:!0
},
mediaBytesTransferred:{
get:function() {
return i.masterPlaylistController_.mediaBytesTransferred_() || 0;
},
enumerable:!0
},
mediaSecondsLoaded:{
get:function() {
return i.masterPlaylistController_.mediaSecondsLoaded_() || 0;
},
enumerable:!0
},
buffered:{
get:function() {
return ah(i.tech_.buffered());
},
enumerable:!0
},
currentTime:{
get:function() {
return i.tech_.currentTime();
},
enumerable:!0
},
currentSource:{
get:function() {
return i.tech_.currentSource_;
},
enumerable:!0
},
currentTech:{
get:function() {
return i.tech_.name_;
},
enumerable:!0
},
duration:{
get:function() {
return i.tech_.duration();
},
enumerable:!0
},
master:{
get:function() {
return i.playlists.master;
},
enumerable:!0
},
playerDimensions:{
get:function() {
return i.tech_.currentDimensions();
},
enumerable:!0
},
seekable:{
get:function() {
return ah(i.tech_.seekable());
},
enumerable:!0
},
timestamp:{
get:function() {
return Date.now();
},
enumerable:!0
},
videoPlaybackQuality:{
get:function() {
return i.tech_.getVideoPlaybackQuality();
},
enumerable:!0
}
}), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), 
this.tech_.on("bandwidthupdate", function() {
i.options_.useBandwidthFromLocalStorage && zm({
bandwidth:i.bandwidth,
throughput:Math.round(i.throughput)
});
}), this.masterPlaylistController_.on("selectedinitialmedia", function() {
wm(i);
}), this.masterPlaylistController_.sourceUpdater_.on("createdsourcebuffers", function() {
i.setupEme_();
}), this.on(this.masterPlaylistController_, "progress", function() {
this.tech_.trigger("progress");
}), this.on(this.masterPlaylistController_, "firstplay", function() {
this.ignoreNextSeekingEvent_ = !0;
}), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = Ro.URL.createObjectURL(this.masterPlaylistController_.mediaSource), 
this.tech_.src(this.mediaSourceUrl_));
}
}, i.setupEme_ = function() {
var e = this, t = this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader, i = qm({
player:this.player_,
sourceKeySystems:this.source_.keySystems,
media:this.playlists.media(),
audioMedia:t && t.media()
});
return 11 !== ot.browser.IE_VERSION && i ? (this.logger_("waiting for EME key session creation"), 
void Hm({
player:this.player_,
sourceKeySystems:this.source_.keySystems,
audioMedia:t && t.media(),
mainPlaylists:this.playlists.master.playlists
}).then(function() {
e.logger_("created EME key session"), e.masterPlaylistController_.sourceUpdater_.initializedEme();
})["catch"](function(t) {
e.logger_("error while creating EME key session", t), e.player_.error({
message:"Failed to initialize media keys for EME",
code:3
});
})) :void this.masterPlaylistController_.sourceUpdater_.initializedEme();
}, i.setupQualityLevels_ = function() {
var e = this, t = ot.players[this.tech_.options_.playerId];
t && t.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = t.qualityLevels(), 
this.masterPlaylistController_.on("selectedinitialmedia", function() {
Fm(e.qualityLevels_, e);
}), this.playlists.on("mediachange", function() {
Bm(e.qualityLevels_, e.playlists);
}));
}, t.version = function() {
return {
"@videojs/http-streaming":Lm,
"mux.js":Dm,
"mpd-parser":Om,
"m3u8-parser":Rm,
"aes-decrypter":Nm
};
}, i.version = function() {
return this.constructor.version();
}, i.canChangeType = function() {
return Kf.canChangeType();
}, i.play = function() {
this.masterPlaylistController_.play();
}, i.setCurrentTime = function(e) {
this.masterPlaylistController_.setCurrentTime(e);
}, i.duration = function() {
return this.masterPlaylistController_.duration();
}, i.seekable = function() {
return this.masterPlaylistController_.seekable();
}, i.dispose = function() {
this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), 
this.qualityLevels_ && this.qualityLevels_.dispose(), this.player_ && (delete this.player_.vhs, 
delete this.player_.dash, delete this.player_.hls), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, 
this.tech_ && delete this.tech_.hls, this.mediaSourceUrl_ && Ro.URL.revokeObjectURL && (Ro.URL.revokeObjectURL(this.mediaSourceUrl_), 
this.mediaSourceUrl_ = null), e.prototype.dispose.call(this);
}, i.convertToProgramTime = function(e, t) {
return Yh({
playlist:this.masterPlaylistController_.media(),
time:e,
callback:t
});
}, i.seekToProgramTime = function(e, t, i, n) {
return void 0 === i && (i = !0), void 0 === n && (n = 2), Qh({
programTime:e,
playlist:this.masterPlaylistController_.media(),
retryCount:n,
pauseAfterSeek:i,
seekTo:this.options_.seekTo,
tech:this.options_.tech,
callback:t
});
}, t;
}(Xm), Ym = {
name:"videojs-http-streaming",
VERSION:Lm,
canHandleSource:function(e, t) {
void 0 === t && (t = {});
var i = ot.mergeOptions(ot.options, t);
return Ym.canPlayType(e.type, i);
},
handleSource:function(e, t, i) {
void 0 === i && (i = {});
var n = ot.mergeOptions(ot.options, i);
return t.vhs = new Km(e, t, n), ot.hasOwnProperty("hls") || Object.defineProperty(t, "hls", {
get:function() {
return ot.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."), 
t.vhs;
},
configurable:!0
}), t.vhs.xhr = Ah(), t.vhs.src(e.src, e.type), t.vhs;
},
canPlayType:function(e, t) {
void 0 === t && (t = {});
var i = ot.mergeOptions(ot.options, t), n = i.vhs.overrideNative, r = void 0 === n ? !ot.browser.IS_ANY_SAFARI :n, a = $o(e), s = a && (!Mm.supportsTypeNatively(a) || r);
return s ? "maybe" :"";
}
}, Qm = function() {
return wd("avc1.4d400d,mp4a.40.2");
};
return Qm() && ot.getTech("Html5").registerSourceHandler(Ym, 0), ot.VhsHandler = Km, 
Object.defineProperty(ot, "HlsHandler", {
get:function() {
return ot.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."), 
Km;
},
configurable:!0
}), ot.VhsSourceHandler = Ym, Object.defineProperty(ot, "HlsSourceHandler", {
get:function() {
return ot.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."), 
Ym;
},
configurable:!0
}), ot.Vhs = Mm, Object.defineProperty(ot, "Hls", {
get:function() {
return ot.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."), Mm;
},
configurable:!0
}), ot.use || (ot.registerComponent("Hls", Mm), ot.registerComponent("Vhs", Mm)), 
ot.options.vhs = ot.options.vhs || {}, ot.options.hls = ot.options.hls || {}, ot.registerPlugin ? ot.registerPlugin("reloadSourceOnError", xm) :ot.plugin("reloadSourceOnError", xm), 
ot;
}), function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) :"function" == typeof define && define.amd ? define([ "videojs" ], function(i) {
return e.Youtube = t(i);
}) :e.Youtube = t(e.videojs);
}(this, function(e) {
"use strict";
function t() {
YT.ready(function() {
s.isApiReady = !0;
for (var e = 0; e < s.apiReadyQueue.length; ++e) s.apiReadyQueue[e].initYTPlayer();
});
}
function i(e, t) {
var i = !1, n = document.createElement("script"), r = document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(n, r), n.onload = function() {
i || (i = !0, t());
}, n.onreadystatechange = function() {
i || "complete" !== this.readyState && "loaded" !== this.readyState || (i = !0, 
t());
}, n.src = e;
}
function n() {
var e = ".vjs-youtube .vjs-iframe-blocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-youtube .vjs-poster { background-size: cover; }.vjs-youtube-mobile .vjs-big-play-button { display: none; }", t = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e :i.appendChild(document.createTextNode(e)), 
t.appendChild(i);
}
var r = e.browser.IS_IOS || e.browser.IS_ANDROID, a = e.getTech("Tech"), s = e.extend(a, {
constructor:function(e, t) {
a.call(this, e, t), this.setPoster(e.poster), this.setSrc(this.options_.source, !0), 
this.setTimeout(function() {
this.el_ && (this.el_.parentNode.className += " vjs-youtube", r && (this.el_.parentNode.className += " vjs-youtube-mobile"), 
s.isApiReady ? this.initYTPlayer() :s.apiReadyQueue.push(this));
}.bind(this));
},
dispose:function() {
if (this.ytPlayer) this.ytPlayer.stopVideo && this.ytPlayer.stopVideo(), this.ytPlayer.destroy && this.ytPlayer.destroy(); else {
var e = s.apiReadyQueue.indexOf(this);
-1 !== e && s.apiReadyQueue.splice(e, 1);
}
this.ytPlayer = null, this.el_.parentNode.className = this.el_.parentNode.className.replace(" vjs-youtube", "").replace(" vjs-youtube-mobile", ""), 
this.el_.parentNode.removeChild(this.el_), a.prototype.dispose.call(this);
},
createEl:function() {
var e = document.createElement("div");
e.setAttribute("id", this.options_.techId), e.setAttribute("style", "width:100%;height:100%;top:0;left:0;position:absolute"), 
e.setAttribute("class", "vjs-tech");
var t = document.createElement("div");
if (t.appendChild(e), !r && !this.options_.ytControls) {
var i = document.createElement("div");
i.setAttribute("class", "vjs-iframe-blocker"), i.setAttribute("style", "position:absolute;top:0;left:0;width:100%;height:100%"), 
i.onclick = function() {
this.pause();
}.bind(this), t.appendChild(i);
}
return t;
},
initYTPlayer:function() {
var e = {
controls:0,
modestbranding:1,
rel:0,
showinfo:0,
loop:this.options_.loop ? 1 :0
};
if ("undefined" != typeof this.options_.autohide && (e.autohide = this.options_.autohide), 
"undefined" != typeof this.options_.cc_load_policy && (e.cc_load_policy = this.options_.cc_load_policy), 
"undefined" != typeof this.options_.ytControls && (e.controls = this.options_.ytControls), 
"undefined" != typeof this.options_.disablekb && (e.disablekb = this.options_.disablekb), 
"undefined" != typeof this.options_.end && (e.end = this.options_.end), "undefined" != typeof this.options_.color && (e.color = this.options_.color), 
e.controls ? "undefined" != typeof this.options_.fs && (e.fs = this.options_.fs) :e.fs = 0, 
"undefined" != typeof this.options_.end && (e.end = this.options_.end), "undefined" != typeof this.options_.hl ? e.hl = this.options_.hl :"undefined" != typeof this.options_.language && (e.hl = this.options_.language.substr(0, 2)), 
"undefined" != typeof this.options_.iv_load_policy && (e.iv_load_policy = this.options_.iv_load_policy), 
"undefined" != typeof this.options_.list ? e.list = this.options_.list :this.url && "undefined" != typeof this.url.listId && (e.list = this.url.listId), 
"undefined" != typeof this.options_.listType && (e.listType = this.options_.listType), 
"undefined" != typeof this.options_.modestbranding && (e.modestbranding = this.options_.modestbranding), 
"undefined" != typeof this.options_.playlist && (e.playlist = this.options_.playlist), 
"undefined" != typeof this.options_.playsinline && (e.playsinline = this.options_.playsinline), 
"undefined" != typeof this.options_.rel && (e.rel = this.options_.rel), "undefined" != typeof this.options_.showinfo && (e.showinfo = this.options_.showinfo), 
"undefined" != typeof this.options_.start && (e.start = this.options_.start), "undefined" != typeof this.options_.theme && (e.theme = this.options_.theme), 
"undefined" != typeof this.options_.customVars) {
var t = this.options_.customVars;
Object.keys(t).forEach(function(i) {
e[i] = t[i];
});
}
this.activeVideoId = this.url ? this.url.videoId :null, this.activeList = e.list, 
this.ytPlayer = new YT.Player(this.options_.techId, {
videoId:this.activeVideoId,
playerVars:e,
events:{
onReady:this.onPlayerReady.bind(this),
onPlaybackQualityChange:this.onPlayerPlaybackQualityChange.bind(this),
onPlaybackRateChange:this.onPlayerPlaybackRateChange.bind(this),
onStateChange:this.onPlayerStateChange.bind(this),
onVolumeChange:this.onPlayerVolumeChange.bind(this),
onError:this.onPlayerError.bind(this)
}
});
},
onPlayerReady:function() {
this.options_.muted && this.ytPlayer.mute();
var e = this.ytPlayer.getAvailablePlaybackRates();
e.length > 1 && (this.featuresPlaybackRate = !0), this.playerReady_ = !0, this.triggerReady(), 
this.playOnReady ? this.play() :this.cueOnReady && (this.cueVideoById_(this.url.videoId), 
this.activeVideoId = this.url.videoId);
},
onPlayerPlaybackQualityChange:function() {},
onPlayerPlaybackRateChange:function() {
this.trigger("ratechange");
},
onPlayerStateChange:function(e) {
var t = e.data;
if (t !== this.lastState && !this.errorNumber) switch (this.lastState = t, t) {
case -1:
this.trigger("loadstart"), this.trigger("loadedmetadata"), this.trigger("durationchange"), 
this.trigger("ratechange");
break;

case YT.PlayerState.ENDED:
this.trigger("ended");
break;

case YT.PlayerState.PLAYING:
this.trigger("timeupdate"), this.trigger("durationchange"), this.trigger("playing"), 
this.trigger("play"), this.isSeeking && this.onSeeked();
break;

case YT.PlayerState.PAUSED:
this.trigger("canplay"), this.isSeeking ? this.onSeeked() :this.trigger("pause");
break;

case YT.PlayerState.BUFFERING:
this.player_.trigger("timeupdate"), this.player_.trigger("waiting");
}
},
onPlayerVolumeChange:function() {
this.trigger("volumechange");
},
onPlayerError:function(e) {
this.errorNumber = e.data, this.trigger("pause"), this.trigger("error");
},
error:function() {
var e = 1e3 + this.errorNumber;
switch (this.errorNumber) {
case 5:
return {
code:e,
message:"Error while trying to play the video"
};

case 2:
case 100:
return {
code:e,
message:"Unable to find the video"
};

case 101:
case 150:
return {
code:e,
message:"Playback on other Websites has been disabled by the video owner."
};
}
return {
code:e,
message:"YouTube unknown error (" + this.errorNumber + ")"
};
},
loadVideoById_:function(e) {
var t = {
videoId:e
};
this.options_.start && (t.startSeconds = this.options_.start), this.options_.end && (t.endEnd = this.options_.end), 
this.ytPlayer.loadVideoById(t);
},
cueVideoById_:function(e) {
var t = {
videoId:e
};
this.options_.start && (t.startSeconds = this.options_.start), this.options_.end && (t.endEnd = this.options_.end), 
this.ytPlayer.cueVideoById(t);
},
src:function(e) {
return e && this.setSrc({
src:e
}), this.source;
},
poster:function() {
return r ? null :this.poster_;
},
setPoster:function(e) {
this.poster_ = e;
},
setSrc:function(e) {
e && e.src && (delete this.errorNumber, this.source = e, this.url = s.parseUrl(e.src), 
this.options_.poster || this.url.videoId && (this.poster_ = "https://img.youtube.com/vi/" + this.url.videoId + "/0.jpg", 
this.trigger("posterchange"), this.checkHighResPoster()), this.options_.autoplay && !r ? this.isReady_ ? this.play() :this.playOnReady = !0 :this.activeVideoId !== this.url.videoId && (this.isReady_ ? (this.cueVideoById_(this.url.videoId), 
this.activeVideoId = this.url.videoId) :this.cueOnReady = !0));
},
autoplay:function() {
return this.options_.autoplay;
},
setAutoplay:function(e) {
this.options_.autoplay = e;
},
loop:function() {
return this.options_.loop;
},
setLoop:function(e) {
this.options_.loop = e;
},
play:function() {
this.url && this.url.videoId && (this.wasPausedBeforeSeek = !1, this.isReady_ ? (this.url.listId && (this.activeList === this.url.listId ? this.ytPlayer.playVideo() :(this.ytPlayer.loadPlaylist(this.url.listId), 
this.activeList = this.url.listId)), this.activeVideoId === this.url.videoId ? this.ytPlayer.playVideo() :(this.loadVideoById_(this.url.videoId), 
this.activeVideoId = this.url.videoId)) :(this.trigger("waiting"), this.playOnReady = !0));
},
pause:function() {
this.ytPlayer && this.ytPlayer.pauseVideo();
},
paused:function() {
return this.ytPlayer ? this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING :!0;
},
currentTime:function() {
return this.ytPlayer ? this.ytPlayer.getCurrentTime() :0;
},
setCurrentTime:function(e) {
this.lastState === YT.PlayerState.PAUSED && (this.timeBeforeSeek = this.currentTime()), 
this.isSeeking || (this.wasPausedBeforeSeek = this.paused()), this.ytPlayer.seekTo(e, !0), 
this.trigger("timeupdate"), this.trigger("seeking"), this.isSeeking = !0, this.lastState === YT.PlayerState.PAUSED && this.timeBeforeSeek !== e && (clearInterval(this.checkSeekedInPauseInterval), 
this.checkSeekedInPauseInterval = setInterval(function() {
this.lastState === YT.PlayerState.PAUSED && this.isSeeking ? this.currentTime() !== this.timeBeforeSeek && (this.trigger("timeupdate"), 
this.onSeeked()) :clearInterval(this.checkSeekedInPauseInterval);
}.bind(this), 250));
},
seeking:function() {
return this.isSeeking;
},
seekable:function() {
return this.ytPlayer ? e.createTimeRange(0, this.ytPlayer.getDuration()) :e.createTimeRange();
},
onSeeked:function() {
clearInterval(this.checkSeekedInPauseInterval), this.isSeeking = !1, this.wasPausedBeforeSeek && this.pause(), 
this.trigger("seeked");
},
playbackRate:function() {
return this.ytPlayer ? this.ytPlayer.getPlaybackRate() :1;
},
setPlaybackRate:function(e) {
this.ytPlayer && this.ytPlayer.setPlaybackRate(e);
},
duration:function() {
return this.ytPlayer ? this.ytPlayer.getDuration() :0;
},
currentSrc:function() {
return this.source && this.source.src;
},
ended:function() {
return this.ytPlayer ? this.lastState === YT.PlayerState.ENDED :!1;
},
volume:function() {
return this.ytPlayer ? this.ytPlayer.getVolume() / 100 :1;
},
setVolume:function(e) {
this.ytPlayer && this.ytPlayer.setVolume(100 * e);
},
muted:function() {
return this.ytPlayer ? this.ytPlayer.isMuted() :!1;
},
setMuted:function(e) {
this.ytPlayer && (this.muted(!0), e ? this.ytPlayer.mute() :this.ytPlayer.unMute(), 
this.setTimeout(function() {
this.trigger("volumechange");
}, 50));
},
buffered:function() {
if (!this.ytPlayer || !this.ytPlayer.getVideoLoadedFraction) return e.createTimeRange();
var t = this.ytPlayer.getVideoLoadedFraction() * this.ytPlayer.getDuration();
return e.createTimeRange(0, t);
},
preload:function() {},
load:function() {},
reset:function() {},
supportsFullScreen:function() {
return !0;
},
checkHighResPoster:function() {
var e = "https://img.youtube.com/vi/" + this.url.videoId + "/maxresdefault.jpg";
try {
var t = new Image();
t.onload = function() {
if ("naturalHeight" in t) {
if (t.naturalHeight <= 90 || t.naturalWidth <= 120) return;
} else if (t.height <= 90 || t.width <= 120) return;
this.poster_ = e, this.trigger("posterchange");
}.bind(this), t.onerror = function() {}, t.src = e;
} catch (i) {}
}
});
s.isSupported = function() {
return !0;
}, s.canPlaySource = function(e) {
return s.canPlayType(e.type);
}, s.canPlayType = function(e) {
return "video/youtube" === e;
}, s.parseUrl = function(e) {
var t = {
videoId:null
}, i = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, n = e.match(i);
n && 11 === n[2].length && (t.videoId = n[2]);
var r = /[?&]list=([^#\&\?]+)/;
return n = e.match(r), n && n[1] && (t.listId = n[1]), t;
}, s.apiReadyQueue = [], "undefined" != typeof document && (i("https://www.youtube.com/iframe_api", t), 
n()), "undefined" != typeof e.registerTech ? e.registerTech("Youtube", s) :e.registerComponent("Youtube", s);
}), function(e, t) {
"function" == typeof define && define.amd ? define([ "video.js" ], function(i) {
return e.Vimeo = t(i);
}) :"object" == typeof module && module.exports ? module.exports = e.Vimeo = t(require("video.js")) :e.Vimeo = t(e.videojs);
}(this, function(e) {
"use strict";
function t() {
var e = ".vjs-vimeo .vjs-iframe-blocker { display: none; }.vjs-vimeo.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-vimeo .vjs-poster { background-size: cover; }.vjs-vimeo { height:100%; }.vimeoplayer { width:100%; height:180%; position:absolute; left:0; top:-40%; }", t = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e :i.appendChild(document.createTextNode(e)), 
t.appendChild(i);
}
var i = {
UNSTARTED:-1,
ENDED:0,
PLAYING:1,
PAUSED:2,
BUFFERING:3
}, n = e.getComponent("Tech"), r = e.extend(n, {
constructor:function(e, t) {
n.call(this, e, t), "" != e.poster && this.setPoster(e.poster), this.setSrc(this.options_.source.src, !0), 
setTimeout(function() {
this.el_.parentNode.className += " vjs-vimeo";
}.bind(this));
},
dispose:function() {
this.el_.parentNode.className = this.el_.parentNode.className.replace(" vjs-vimeo", "");
},
createEl:function() {
this.vimeo = {}, this.vimeoInfo = {}, this.baseUrl = "https://player.vimeo.com/video/", 
this.baseApiUrl = "http://www.vimeo.com/api/v2/video/", this.videoId = r.parseUrl(this.options_.source.src).videoId, 
this.iframe = document.createElement("iframe"), this.iframe.setAttribute("id", this.options_.techId), 
this.iframe.setAttribute("title", "Vimeo Video Player"), this.iframe.setAttribute("class", "vimeoplayer"), 
this.iframe.setAttribute("src", this.baseUrl + this.videoId + "?api=1&player_id=" + this.options_.techId), 
this.iframe.setAttribute("frameborder", "0"), this.iframe.setAttribute("scrolling", "no"), 
this.iframe.setAttribute("marginWidth", "0"), this.iframe.setAttribute("marginHeight", "0"), 
this.iframe.setAttribute("webkitAllowFullScreen", "0"), this.iframe.setAttribute("mozallowfullscreen", "0"), 
this.iframe.setAttribute("allowFullScreen", "0");
var e = document.createElement("div");
if (e.setAttribute("style", "margin:0 auto;padding-bottom:56.25%;width:100%;height:0;position:relative;overflow:hidden;"), 
e.setAttribute("class", "vimeoFrame"), e.appendChild(this.iframe), !a && !this.options_.ytControls) {
var t = document.createElement("div");
t.setAttribute("class", "vjs-iframe-blocker"), t.setAttribute("style", "position:absolute;top:0;left:0;width:100%;height:100%"), 
t.onclick = function() {
this.onPause();
}.bind(this), e.appendChild(t);
}
return r.isApiReady ? this.initPlayer() :r.apiReadyQueue.push(this), "" == this.options_.poster && $.getJSON(this.baseApiUrl + this.videoId + ".json?callback=?", {
format:"json"
}, function(e) {
return function(t) {
e.setPoster(t[0].thumbnail_large);
};
}(this)), e;
},
initPlayer:function() {
var e = this;
r.parseUrl(this.options_.source.src).videoId;
this.vimeo && this.vimeo.api && (this.vimeo.api("unload"), delete this.vimeo), e.vimeo = $f(e.iframe), 
e.vimeoInfo = {
state:i.UNSTARTED,
volume:1,
muted:!1,
muteVolume:1,
time:0,
duration:0,
buffered:0,
url:e.baseUrl + e.videoId,
error:null
}, this.vimeo.addEvent("ready", function(t) {
e.onReady(), e.vimeo.addEvent("loadProgress", function(t, i) {
e.onLoadProgress(t);
}), e.vimeo.addEvent("playProgress", function(t, i) {
e.onPlayProgress(t);
}), e.vimeo.addEvent("play", function(t) {
e.onPlay();
}), e.vimeo.addEvent("pause", function(t) {
e.onPause();
}), e.vimeo.addEvent("finish", function(t) {
e.onFinish();
}), e.vimeo.addEvent("seek", function(t, i) {
e.onSeek(t);
});
});
},
onReady:function() {
this.isReady_ = !0, this.triggerReady(), this.trigger("loadedmetadata"), this.startMuted && (this.setMuted(!0), 
this.startMuted = !1);
},
onLoadProgress:function(e) {
var t = !this.vimeoInfo.duration;
this.vimeoInfo.duration = e.duration, this.vimeoInfo.buffered = e.percent, this.trigger("progress"), 
t && this.trigger("durationchange");
},
onPlayProgress:function(e) {
this.vimeoInfo.time = e.seconds, this.trigger("timeupdate");
},
onPlay:function() {
this.vimeoInfo.state = i.PLAYING, this.trigger("play");
},
onPause:function() {
this.vimeoInfo.state = i.PAUSED, this.trigger("pause");
},
onFinish:function() {
this.vimeoInfo.state = i.ENDED, this.trigger("ended");
},
onSeek:function(e) {
this.trigger("seeking"), this.vimeoInfo.time = e.seconds, this.trigger("timeupdate"), 
this.trigger("seeked");
},
onError:function(e) {
this.error = e, this.trigger("error");
},
error:function() {
switch (this.errorNumber) {
case 2:
return {
code:"Unable to find the video"
};

case 5:
return {
code:"Error while trying to play the video"
};

case 100:
return {
code:"Unable to find the video"
};

case 101:
case 150:
return {
code:"Playback on other Websites has been disabled by the video owner."
};
}
return {
code:"Vimeo unknown error (" + this.errorNumber + ")"
};
},
src:function() {
return this.source;
},
poster:function() {
return this.poster_;
},
setPoster:function(e) {
this.poster_ = e;
},
setSrc:function(e) {
e && e.src && (this.source = e, this.url = r.parseUrl(e.src), this.options_.poster || this.url.videoId && ($.getJSON(this.baseApiUrl + this.videoId + ".json?callback=?", {
format:"json"
}, function(e) {
return function(t) {
e.poster_ = t[0].thumbnail_small;
};
}(this)), this.checkHighResPoster()), this.options_.autoplay && !a && (this.isReady_ ? this.play() :this.playOnReady = !0));
},
supportsFullScreen:function() {
return !0;
},
load:function() {},
play:function() {
this.vimeo.api("play");
},
pause:function() {
this.vimeo.api("pause");
},
paused:function() {
return this.vimeoInfo.state !== i.PLAYING && this.vimeoInfo.state !== i.BUFFERING;
},
currentTime:function() {
return this.vimeoInfo.time || 0;
},
setCurrentTime:function(e) {
this.vimeo.api("seekTo", e), this.player_.trigger("timeupdate");
},
duration:function() {
return this.vimeoInfo.duration || 0;
},
buffered:function() {
return e.createTimeRange(0, this.vimeoInfo.buffered * this.vimeoInfo.duration || 0);
},
volume:function() {
return this.vimeoInfo.muted ? this.vimeoInfo.muteVolume :this.vimeoInfo.volume;
},
setVolume:function(e) {
this.vimeo.api("setvolume", e), this.vimeoInfo.volume = e, this.player_.trigger("volumechange");
},
currentSrc:function() {
return this.el_.src;
},
muted:function() {
return this.vimeoInfo.muted || !1;
},
setMuted:function(e) {
e ? (this.vimeoInfo.muteVolume = this.vimeoInfo.volume, this.setVolume(0)) :this.setVolume(this.vimeoInfo.muteVolume), 
this.vimeoInfo.muted = e, this.player_.trigger("volumechange");
},
checkHighResPoster:function() {
var e = "";
try {
$.getJSON(this.baseApiUrl + this.videoId + ".json?callback=?", {
format:"json"
}, function(e) {
return function(t) {
e = t[0].thumbnail_large;
};
}(e));
var t = new Image();
t.onload = function() {
if ("naturalHeight" in this) {
if (this.naturalHeight <= 90 || this.naturalWidth <= 120) return void this.onerror();
} else if (this.height <= 90 || this.width <= 120) return void this.onerror();
this.poster_ = e, this.trigger("posterchange");
}.bind(this), t.onerror = function() {}, t.src = e;
} catch (i) {}
}
});
r.isSupported = function() {
return !0;
}, r.canPlaySource = function(e) {
return "video/vimeo" === e.type;
};
var a = /(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent);
r.parseUrl = function(e) {
var t = {
videoId:null
}, i = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/, n = e.match(i);
return n && (t.videoId = n[5]), t;
}, r.apiReadyQueue = [];
var s = function() {
r.isApiReady = !0, t();
for (var e = 0; e < r.apiReadyQueue.length; ++e) r.apiReadyQueue[e].initPlayer();
};
s(), e.registerTech("Vimeo", r);
(function() {
function e(t) {
return new e.fn.init(t);
}
function t(e, t, i) {
if (!i.contentWindow.postMessage) return !1;
var n = JSON.stringify({
method:e,
value:t
});
i.contentWindow.postMessage(n, l);
}
function i(e) {
var t, i;
try {
t = JSON.parse(e.data), i = t.event || t.method;
} catch (n) {}
if ("ready" != i || u || (u = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
"*" === l && (l = e.origin);
var a = t.value, s = t.data, o = "" === o ? null :t.player_id, c = r(i, o), d = [];
return c ? (void 0 !== a && d.push(a), s && d.push(s), o && d.push(o), d.length > 0 ? c.apply(null, d) :c.call()) :!1;
}
function n(e, t, i) {
i ? (o[i] || (o[i] = {}), o[i][e] = t) :o[e] = t;
}
function r(e, t) {
return t && o[t] ? o[t][e] :o[e] ? o[e] :void 0;
}
function a(e, t) {
if (t && o[t]) {
if (!o[t][e]) return !1;
o[t][e] = null;
} else {
if (!o[e]) return !1;
o[e] = null;
}
return !0;
}
function s(e) {
return !!(e && e.constructor && e.call && e.apply);
}
var o = {}, u = !1, l = (Array.prototype.slice, "*");
return e.fn = e.prototype = {
element:null,
init:function(e) {
return "string" == typeof e && (e = document.getElementById(e)), this.element = e, 
this;
},
api:function(e, i) {
if (!this.element || !e) return !1;
var r = this, a = r.element, o = "" !== a.id ? a.id :null, u = s(i) ? null :i, l = s(i) ? i :null;
return l && n(e, l, o), t(e, u, a), r;
},
addEvent:function(e, i) {
if (!this.element) return !1;
var r = this, a = r.element, s = "" !== a.id ? a.id :null;
return n(e, i, s), "ready" != e ? t("addEventListener", e, a) :"ready" == e && u && i.call(null, s), 
r;
},
removeEvent:function(e) {
if (!this.element) return !1;
var i = this, n = i.element, r = "" !== n.id ? n.id :null, s = a(e, r);
"ready" != e && s && t("removeEventListener", e, n);
}
}, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", i, !1) :window.attachEvent("onmessage", i), 
window.Froogaloop = window.$f = e;
})();
});