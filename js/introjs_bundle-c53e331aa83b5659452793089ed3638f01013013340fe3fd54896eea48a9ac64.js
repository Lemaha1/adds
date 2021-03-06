!function(t) {
if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(), 
module.exports.introJs = function() {
return console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function'), 
t().apply(this, arguments);
}; else if ("function" == typeof define && define.amd) define([], t); else {
var e;
e = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, 
e.introJs = t();
}
}(function() {
function t(t) {
this._targetElement = t, this._introItems = [], this._options = {
nextLabel:"Next &rarr;",
prevLabel:"&larr; Back",
skipLabel:"Skip",
doneLabel:"Done",
hidePrev:!1,
hideNext:!1,
tooltipPosition:"bottom",
tooltipClass:"",
highlightClass:"",
exitOnEsc:!0,
exitOnOverlayClick:!0,
showStepNumbers:!0,
keyboardNavigation:!0,
showButtons:!0,
showBullets:!0,
showProgress:!1,
scrollToElement:!0,
scrollTo:"element",
scrollPadding:30,
overlayOpacity:.8,
positionPrecedence:[ "bottom", "top", "right", "left" ],
disableInteraction:!1,
helperElementPadding:10,
hintPosition:"top-middle",
hintButtonLabel:"Got it",
hintAnimation:!0,
buttonClass:"introjs-button"
};
}
function e(t, e) {
var s = t.querySelectorAll("*[data-intro]"), r = [];
if (this._options.steps) k(this._options.steps, function(t) {
var e = o(t);
if (e.step = r.length + 1, "string" == typeof e.element && (e.element = document.querySelector(e.element)), 
"undefined" == typeof e.element || null === e.element) {
var n = document.querySelector(".introjsFloatingElement");
null === n && (n = document.createElement("div"), n.className = "introjsFloatingElement", 
document.body.appendChild(n)), e.element = n, e.position = "floating";
}
e.scrollTo = e.scrollTo || this._options.scrollTo, "undefined" == typeof e.disableInteraction && (e.disableInteraction = this._options.disableInteraction), 
null !== e.element && r.push(e);
}.bind(this)); else {
var a, c = s.length;
if (1 > c) return !1;
k(s, function(t) {
if ((!e || t.getAttribute("data-intro-group") === e) && "none" !== t.style.display) {
var n = parseInt(t.getAttribute("data-step"), 10);
a = "undefined" != typeof t.getAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") :this._options.disableInteraction, 
n > 0 && (r[n - 1] = {
element:t,
intro:t.getAttribute("data-intro"),
step:parseInt(t.getAttribute("data-step"), 10),
tooltipClass:t.getAttribute("data-tooltipclass"),
highlightClass:t.getAttribute("data-highlightclass"),
position:t.getAttribute("data-position") || this._options.tooltipPosition,
scrollTo:t.getAttribute("data-scrollto") || this._options.scrollTo,
disableInteraction:a
});
}
}.bind(this));
var h = 0;
k(s, function(t) {
if ((!e || t.getAttribute("data-intro-group") === e) && null === t.getAttribute("data-step")) {
for (;;) {
if ("undefined" == typeof r[h]) break;
h++;
}
a = "undefined" != typeof t.getAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") :this._options.disableInteraction, 
r[h] = {
element:t,
intro:t.getAttribute("data-intro"),
step:h + 1,
tooltipClass:t.getAttribute("data-tooltipclass"),
highlightClass:t.getAttribute("data-highlightclass"),
position:t.getAttribute("data-position") || this._options.tooltipPosition,
scrollTo:t.getAttribute("data-scrollto") || this._options.scrollTo,
disableInteraction:a
};
}
}.bind(this));
}
for (var u = [], d = 0; d < r.length; d++) r[d] && u.push(r[d]);
return r = u, r.sort(function(t, e) {
return t.step - e.step;
}), this._introItems = r, T.call(this, t) && (l.call(this), this._options.keyboardNavigation && K.on(window, "keydown", i, this, !0), 
K.on(window, "resize", n, this, !0)), !1;
}
function n() {
this.refresh.call(this);
}
function i(t) {
var e = null === t.code ? t.which :t.code;
if (null === e && (e = null === t.charCode ? t.keyCode :t.charCode), "Escape" !== e && 27 !== e || this._options.exitOnEsc !== !0) {
if ("ArrowLeft" === e || 37 === e) a.call(this); else if ("ArrowRight" === e || 39 === e) l.call(this); else if ("Enter" === e || 13 === e) {
var n = t.target || t.srcElement;
n && n.className.match("introjs-prevbutton") ? a.call(this) :n && n.className.match("introjs-skipbutton") ? (this._introItems.length - 1 === this._currentStep && "function" == typeof this._introCompleteCallback && this._introCompleteCallback.call(this), 
h.call(this, this._targetElement)) :n && n.getAttribute("data-stepnumber") ? n.click() :l.call(this), 
t.preventDefault ? t.preventDefault() :t.returnValue = !1;
}
} else h.call(this, this._targetElement);
}
function o(t) {
if (null === t || "object" != typeof t || "undefined" != typeof t.nodeType) return t;
var e = {};
for (var n in t) "undefined" != typeof window.jQuery && t[n] instanceof window.jQuery ? e[n] = t[n] :e[n] = o(t[n]);
return e;
}
function s(t) {
this._currentStep = t - 2, "undefined" != typeof this._introItems && l.call(this);
}
function r(t) {
this._currentStepNumber = t, "undefined" != typeof this._introItems && l.call(this);
}
function l() {
this._direction = "forward", "undefined" != typeof this._currentStepNumber && k(this._introItems, function(t, e) {
t.step === this._currentStepNumber && (this._currentStep = e - 1, this._currentStepNumber = void 0);
}.bind(this)), "undefined" == typeof this._currentStep ? this._currentStep = 0 :++this._currentStep;
var t = this._introItems[this._currentStep], e = !0;
return "undefined" != typeof this._introBeforeChangeCallback && (e = this._introBeforeChangeCallback.call(this, t.element)), 
e === !1 ? (--this._currentStep, !1) :this._introItems.length <= this._currentStep ? ("function" == typeof this._introCompleteCallback && this._introCompleteCallback.call(this), 
void h.call(this, this._targetElement)) :void _.call(this, t);
}
function a() {
if (this._direction = "backward", 0 === this._currentStep) return !1;
--this._currentStep;
var t = this._introItems[this._currentStep], e = !0;
return "undefined" != typeof this._introBeforeChangeCallback && (e = this._introBeforeChangeCallback.call(this, t.element)), 
e === !1 ? (++this._currentStep, !1) :void _.call(this, t);
}
function c() {
if (g.call(this, document.querySelector(".introjs-helperLayer")), g.call(this, document.querySelector(".introjs-tooltipReferenceLayer")), 
g.call(this, document.querySelector(".introjs-disableInteraction")), void 0 !== this._currentStep && null !== this._currentStep) {
var t = document.querySelector(".introjs-helperNumberLayer"), e = document.querySelector(".introjs-arrow"), n = document.querySelector(".introjs-tooltip");
u.call(this, this._introItems[this._currentStep].element, n, e, t);
}
return q.call(this), this;
}
function h(t, e) {
var o = !0;
if (void 0 !== this._introBeforeExitCallback && (o = this._introBeforeExitCallback.call(this)), 
e || o !== !1) {
var s = t.querySelectorAll(".introjs-overlay");
s && s.length && k(s, function(t) {
t.style.opacity = 0, window.setTimeout(function() {
this.parentNode && this.parentNode.removeChild(this);
}.bind(t), 500);
}.bind(this));
var r = t.querySelector(".introjs-helperLayer");
r && r.parentNode.removeChild(r);
var l = t.querySelector(".introjs-tooltipReferenceLayer");
l && l.parentNode.removeChild(l);
var a = t.querySelector(".introjs-disableInteraction");
a && a.parentNode.removeChild(a);
var c = document.querySelector(".introjsFloatingElement");
c && c.parentNode.removeChild(c), C();
var h = document.querySelectorAll(".introjs-fixParent");
k(h, function(t) {
S(t, /introjs-fixParent/g);
}), K.off(window, "keydown", i, this, !0), K.off(window, "resize", n, this, !0), 
void 0 !== this._introExitCallback && this._introExitCallback.call(this), this._currentStep = void 0;
}
}
function u(t, e, n, i, o) {
var s, r, l, a, c, h = "";
if (o = o || !1, e.style.top = null, e.style.right = null, e.style.bottom = null, 
e.style.left = null, e.style.marginLeft = null, e.style.marginTop = null, n.style.display = "inherit", 
"undefined" != typeof i && null !== i && (i.style.top = null, i.style.left = null), 
this._introItems[this._currentStep]) {
s = this._introItems[this._currentStep], h = "string" == typeof s.tooltipClass ? s.tooltipClass :this._options.tooltipClass, 
e.className = ("introjs-tooltip " + h).replace(/^\s+|\s+$/g, ""), e.setAttribute("role", "dialog"), 
c = this._introItems[this._currentStep].position, "floating" !== c && (c = f.call(this, t, e, c));
var u;
switch (l = W(t), r = W(e), a = A(), x(e, "introjs-" + c), c) {
case "top-right-aligned":
n.className = "introjs-arrow bottom-right";
var m = 0;
p(l, m, r, e), e.style.bottom = l.height + 20 + "px";
break;

case "top-middle-aligned":
n.className = "introjs-arrow bottom-middle";
var b = l.width / 2 - r.width / 2;
o && (b += 5), p(l, b, r, e) && (e.style.right = null, d(l, b, r, a, e)), e.style.bottom = l.height + 20 + "px";
break;

case "top-left-aligned":
case "top":
n.className = "introjs-arrow bottom", u = o ? 0 :15, d(l, u, r, a, e), e.style.bottom = l.height + 20 + "px";
break;

case "right":
e.style.left = l.width + 20 + "px", l.top + r.height > a.height ? (n.className = "introjs-arrow left-bottom", 
e.style.top = "-" + (r.height - l.height - 20) + "px") :n.className = "introjs-arrow left";
break;

case "left":
o || this._options.showStepNumbers !== !0 || (e.style.top = "15px"), l.top + r.height > a.height ? (e.style.top = "-" + (r.height - l.height - 20) + "px", 
n.className = "introjs-arrow right-bottom") :n.className = "introjs-arrow right", 
e.style.right = l.width + 20 + "px";
break;

case "floating":
n.style.display = "none", e.style.left = "50%", e.style.top = "50%", e.style.marginLeft = "-" + r.width / 2 + "px", 
e.style.marginTop = "-" + r.height / 2 + "px", "undefined" != typeof i && null !== i && (i.style.left = "-" + (r.width / 2 + 18) + "px", 
i.style.top = "-" + (r.height / 2 + 18) + "px");
break;

case "bottom-right-aligned":
n.className = "introjs-arrow top-right", m = 0, p(l, m, r, e), e.style.top = l.height + 20 + "px";
break;

case "bottom-middle-aligned":
n.className = "introjs-arrow top-middle", b = l.width / 2 - r.width / 2, o && (b += 5), 
p(l, b, r, e) && (e.style.right = null, d(l, b, r, a, e)), e.style.top = l.height + 20 + "px";
break;

default:
n.className = "introjs-arrow top", u = 0, d(l, u, r, a, e), e.style.top = l.height + 20 + "px";
}
}
}
function d(t, e, n, i, o) {
return t.left + e + n.width > i.width ? (o.style.left = i.width - n.width - t.left + "px", 
!1) :(o.style.left = e + "px", !0);
}
function p(t, e, n, i) {
return t.left + t.width - e - n.width < 0 ? (i.style.left = -t.left + "px", !1) :(i.style.right = e + "px", 
!0);
}
function f(t, e, n) {
var i = this._options.positionPrecedence.slice(), o = A(), s = W(e).height + 10, r = W(e).width + 20, l = t.getBoundingClientRect(), a = "floating";
l.bottom + s + s > o.height && b(i, "bottom"), l.top - s < 0 && b(i, "top"), l.right + r > o.width && b(i, "right"), 
l.left - r < 0 && b(i, "left");
var c = function(t) {
var e = t.indexOf("-");
return -1 !== e ? t.substr(e) :"";
}(n || "");
return n && (n = n.split("-")[0]), i.length && (a = "auto" !== n && i.indexOf(n) > -1 ? n :i[0]), 
-1 !== [ "top", "bottom" ].indexOf(a) && (a += m(l.left, r, o, c)), a;
}
function m(t, e, n, i) {
var o = e / 2, s = Math.min(n.width, window.screen.width), r = [ "-left-aligned", "-middle-aligned", "-right-aligned" ], l = "";
return e > s - t && b(r, "-left-aligned"), (o > t || o > s - t) && b(r, "-middle-aligned"), 
e > t && b(r, "-right-aligned"), l = r.length ? -1 !== r.indexOf(i) ? i :r[0] :"-middle-aligned";
}
function b(t, e) {
t.indexOf(e) > -1 && t.splice(t.indexOf(e), 1);
}
function g(t) {
if (t) {
if (!this._introItems[this._currentStep]) return;
var e = this._introItems[this._currentStep], n = W(e.element), i = this._options.helperElementPadding;
N(e.element) ? x(t, "introjs-fixedTooltip") :S(t, "introjs-fixedTooltip"), "floating" === e.position && (i = 0), 
t.style.cssText = "width: " + (n.width + i) + "px; height:" + (n.height + i) + "px; top:" + (n.top - i / 2) + "px;left: " + (n.left - i / 2) + "px;";
}
}
function y() {
var t = document.querySelector(".introjs-disableInteraction");
null === t && (t = document.createElement("div"), t.className = "introjs-disableInteraction", 
this._targetElement.appendChild(t)), g.call(this, t);
}
function v(t) {
t.setAttribute("role", "button"), t.tabIndex = 0;
}
function _(t) {
"undefined" != typeof this._introChangeCallback && this._introChangeCallback.call(this, t.element);
var e, n, i, o, s = this, r = document.querySelector(".introjs-helperLayer"), c = document.querySelector(".introjs-tooltipReferenceLayer"), d = "introjs-helperLayer";
if ("string" == typeof t.highlightClass && (d += " " + t.highlightClass), "string" == typeof this._options.highlightClass && (d += " " + this._options.highlightClass), 
null !== r) {
var p = c.querySelector(".introjs-helperNumberLayer"), f = c.querySelector(".introjs-tooltiptext"), m = c.querySelector(".introjs-arrow"), b = c.querySelector(".introjs-tooltip");
if (i = c.querySelector(".introjs-skipbutton"), n = c.querySelector(".introjs-prevbutton"), 
e = c.querySelector(".introjs-nextbutton"), r.className = d, b.style.opacity = 0, 
b.style.display = "none", null !== p) {
var _ = this._introItems[t.step - 2 >= 0 ? t.step - 2 :0];
(null !== _ && "forward" === this._direction && "floating" === _.position || "backward" === this._direction && "floating" === t.position) && (p.style.opacity = 0);
}
o = J(t.element), o !== document.body && $(o, t.element), g.call(s, r), g.call(s, c);
var E = document.querySelectorAll(".introjs-fixParent");
k(E, function(t) {
S(t, /introjs-fixParent/g);
}), C(), s._lastShowElementTimer && window.clearTimeout(s._lastShowElementTimer), 
s._lastShowElementTimer = window.setTimeout(function() {
null !== p && (p.innerHTML = t.step), f.innerHTML = t.intro, b.style.display = "block", 
u.call(s, t.element, b, m, p), s._options.showBullets && (c.querySelector(".introjs-bullets li > a.active").className = "", 
c.querySelector('.introjs-bullets li > a[data-stepnumber="' + t.step + '"]').className = "active"), 
c.querySelector(".introjs-progress .introjs-progressbar").style.cssText = "width:" + Q.call(s) + "%;", 
c.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow", Q.call(s)), 
b.style.opacity = 1, p && (p.style.opacity = 1), "undefined" != typeof i && null !== i && /introjs-donebutton/gi.test(i.className) ? i.focus() :"undefined" != typeof e && null !== e && e.focus(), 
w.call(s, t.scrollTo, t, f);
}, 350);
} else {
var N = document.createElement("div"), A = document.createElement("div"), L = document.createElement("div"), T = document.createElement("div"), I = document.createElement("div"), P = document.createElement("div"), q = document.createElement("div"), B = document.createElement("div");
N.className = d, A.className = "introjs-tooltipReferenceLayer", o = J(t.element), 
o !== document.body && $(o, t.element), g.call(s, N), g.call(s, A), this._targetElement.appendChild(N), 
this._targetElement.appendChild(A), L.className = "introjs-arrow", I.className = "introjs-tooltiptext", 
I.innerHTML = t.intro, P.className = "introjs-bullets", this._options.showBullets === !1 && (P.style.display = "none");
var H = document.createElement("ul");
H.setAttribute("role", "tablist");
var O = function() {
s.goToStep(this.getAttribute("data-stepnumber"));
};
k(this._introItems, function(e, n) {
var i = document.createElement("li"), o = document.createElement("a");
i.setAttribute("role", "presentation"), o.setAttribute("role", "tab"), o.onclick = O, 
n === t.step - 1 && (o.className = "active"), v(o), o.innerHTML = "&nbsp;", o.setAttribute("data-stepnumber", e.step), 
i.appendChild(o), H.appendChild(i);
}), P.appendChild(H), q.className = "introjs-progress", this._options.showProgress === !1 && (q.style.display = "none");
var M = document.createElement("div");
M.className = "introjs-progressbar", M.setAttribute("role", "progress"), M.setAttribute("aria-valuemin", 0), 
M.setAttribute("aria-valuemax", 100), M.setAttribute("aria-valuenow", Q.call(this)), 
M.style.cssText = "width:" + Q.call(this) + "%;", q.appendChild(M), B.className = "introjs-tooltipbuttons", 
this._options.showButtons === !1 && (B.style.display = "none"), T.className = "introjs-tooltip", 
T.appendChild(I), T.appendChild(P), T.appendChild(q);
var R = document.createElement("span");
this._options.showStepNumbers === !0 && (R.className = "introjs-helperNumberLayer", 
R.innerHTML = t.step, A.appendChild(R)), T.appendChild(L), A.appendChild(T), e = document.createElement("a"), 
e.onclick = function() {
s._introItems.length - 1 !== s._currentStep && l.call(s);
}, v(e), e.innerHTML = this._options.nextLabel, n = document.createElement("a"), 
n.onclick = function() {
0 !== s._currentStep && a.call(s);
}, v(n), n.innerHTML = this._options.prevLabel, i = document.createElement("a"), 
i.className = this._options.buttonClass + " introjs-skipbutton ", v(i), i.innerHTML = this._options.skipLabel, 
i.onclick = function() {
s._introItems.length - 1 === s._currentStep && "function" == typeof s._introCompleteCallback && s._introCompleteCallback.call(s), 
s._introItems.length - 1 !== s._currentStep && "function" == typeof s._introExitCallback && s._introExitCallback.call(s), 
"function" == typeof s._introSkipCallback && s._introSkipCallback.call(s), h.call(s, s._targetElement);
}, B.appendChild(i), this._introItems.length > 1 && (B.appendChild(n), B.appendChild(e)), 
T.appendChild(B), u.call(s, t.element, T, L, R), w.call(this, t.scrollTo, t, T);
}
var V = s._targetElement.querySelector(".introjs-disableInteraction");
V && V.parentNode.removeChild(V), t.disableInteraction && y.call(s), 0 === this._currentStep && this._introItems.length > 1 ? ("undefined" != typeof i && null !== i && (i.className = this._options.buttonClass + " introjs-skipbutton"), 
"undefined" != typeof e && null !== e && (e.className = this._options.buttonClass + " introjs-nextbutton"), 
this._options.hidePrev === !0 ? ("undefined" != typeof n && null !== n && (n.className = this._options.buttonClass + " introjs-prevbutton introjs-hidden"), 
"undefined" != typeof e && null !== e && x(e, "introjs-fullbutton")) :"undefined" != typeof n && null !== n && (n.className = this._options.buttonClass + " introjs-prevbutton introjs-disabled"), 
"undefined" != typeof i && null !== i && (i.innerHTML = this._options.skipLabel)) :this._introItems.length - 1 === this._currentStep || 1 === this._introItems.length ? ("undefined" != typeof i && null !== i && (i.innerHTML = this._options.doneLabel, 
x(i, "introjs-donebutton")), "undefined" != typeof n && null !== n && (n.className = this._options.buttonClass + " introjs-prevbutton"), 
this._options.hideNext === !0 ? ("undefined" != typeof e && null !== e && (e.className = this._options.buttonClass + " introjs-nextbutton introjs-hidden"), 
"undefined" != typeof n && null !== n && x(n, "introjs-fullbutton")) :"undefined" != typeof e && null !== e && (e.className = this._options.buttonClass + " introjs-nextbutton introjs-disabled")) :("undefined" != typeof i && null !== i && (i.className = this._options.buttonClass + " introjs-skipbutton"), 
"undefined" != typeof n && null !== n && (n.className = this._options.buttonClass + " introjs-prevbutton"), 
"undefined" != typeof e && null !== e && (e.className = this._options.buttonClass + " introjs-nextbutton"), 
"undefined" != typeof i && null !== i && (i.innerHTML = this._options.skipLabel)), 
n.setAttribute("role", "button"), e.setAttribute("role", "button"), i.setAttribute("role", "button"), 
"undefined" != typeof e && null !== e && e.focus(), j(t), "undefined" != typeof this._introAfterChangeCallback && this._introAfterChangeCallback.call(this, t.element);
}
function w(t, e, n) {
if ("off" !== t) {
var i;
if (this._options.scrollToElement && (i = "tooltip" === t ? n.getBoundingClientRect() :e.element.getBoundingClientRect(), 
!L(e.element))) {
var o = A().height, s = i.bottom - (i.bottom - i.top);
0 > s || e.element.clientHeight > o ? window.scrollBy(0, i.top - (o / 2 - i.height / 2) - this._options.scrollPadding) :window.scrollBy(0, i.top - (o / 2 - i.height / 2) + this._options.scrollPadding);
}
}
}
function C() {
var t = document.querySelectorAll(".introjs-showElement");
k(t, function(t) {
S(t, /introjs-[a-zA-Z]+/g);
});
}
function j(t) {
var e;
if (t.element instanceof SVGElement) for (e = t.element.parentNode; null !== t.element.parentNode && e.tagName && "body" !== e.tagName.toLowerCase(); ) "svg" === e.tagName.toLowerCase() && x(e, "introjs-showElement introjs-relativePosition"), 
e = e.parentNode;
x(t.element, "introjs-showElement");
var n = E(t.element, "position");
for ("absolute" !== n && "relative" !== n && "fixed" !== n && x(t.element, "introjs-relativePosition"), 
e = t.element.parentNode; null !== e && e.tagName && "body" !== e.tagName.toLowerCase(); ) {
var i = E(e, "z-index"), o = parseFloat(E(e, "opacity")), s = E(e, "transform") || E(e, "-webkit-transform") || E(e, "-moz-transform") || E(e, "-ms-transform") || E(e, "-o-transform");
(/[0-9]+/.test(i) || 1 > o || "none" !== s && void 0 !== s) && x(e, "introjs-fixParent"), 
e = e.parentNode;
}
}
function k(t, e, n) {
if (t) for (var i = 0, o = t.length; o > i; i++) e(t[i], i);
"function" == typeof n && n();
}
function x(t, e) {
if (t instanceof SVGElement) {
var n = t.getAttribute("class") || "";
t.setAttribute("class", n + " " + e);
} else if (void 0 !== t.classList) {
var i = e.split(" ");
k(i, function(e) {
t.classList.add(e);
});
} else t.className.match(e) || (t.className += " " + e);
}
function S(t, e) {
if (t instanceof SVGElement) {
var n = t.getAttribute("class") || "";
t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""));
} else t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "");
}
function E(t, e) {
var n = "";
return t.currentStyle ? n = t.currentStyle[e] :document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), 
n && n.toLowerCase ? n.toLowerCase() :n;
}
function N(t) {
var e = t.parentNode;
return e && "HTML" !== e.nodeName ? "fixed" === E(t, "position") ? !0 :N(e) :!1;
}
function A() {
if (void 0 !== window.innerWidth) return {
width:window.innerWidth,
height:window.innerHeight
};
var t = document.documentElement;
return {
width:t.clientWidth,
height:t.clientHeight
};
}
function L(t) {
var e = t.getBoundingClientRect();
return e.top >= 0 && e.left >= 0 && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth;
}
function T(t) {
var e = document.createElement("div"), n = "", i = this;
if (e.className = "introjs-overlay", t.tagName && "body" !== t.tagName.toLowerCase()) {
var o = W(t);
o && (n += "width: " + o.width + "px; height:" + o.height + "px; top:" + o.top + "px;left: " + o.left + "px;", 
e.style.cssText = n);
} else n += "top: 0;bottom: 0; left: 0;right: 0;position: fixed;", e.style.cssText = n;
return t.appendChild(e), e.onclick = function() {
i._options.exitOnOverlayClick === !0 && h.call(i, t);
}, window.setTimeout(function() {
n += "opacity: " + i._options.overlayOpacity.toString() + ";", e.style.cssText = n;
}, 10), !0;
}
function I() {
var t = document.querySelector(".introjs-hintReference");
if (t) {
var e = t.getAttribute("data-step");
return t.parentNode.removeChild(t), e;
}
}
function P(t) {
if (this._introItems = [], this._options.hints) k(this._options.hints, function(t) {
var e = o(t);
"string" == typeof e.element && (e.element = document.querySelector(e.element)), 
e.hintPosition = e.hintPosition || this._options.hintPosition, e.hintAnimation = e.hintAnimation || this._options.hintAnimation, 
null !== e.element && this._introItems.push(e);
}.bind(this)); else {
var e = t.querySelectorAll("*[data-hint]");
if (!e || !e.length) return !1;
k(e, function(t) {
var e = t.getAttribute("data-hintanimation");
e = e ? "true" === e :this._options.hintAnimation, this._introItems.push({
element:t,
hint:t.getAttribute("data-hint"),
hintPosition:t.getAttribute("data-hintposition") || this._options.hintPosition,
hintAnimation:e,
tooltipClass:t.getAttribute("data-tooltipclass"),
position:t.getAttribute("data-position") || this._options.tooltipPosition
});
}.bind(this));
}
D.call(this), K.on(document, "click", I, this, !1), K.on(window, "resize", q, this, !0);
}
function q() {
k(this._introItems, function(t) {
"undefined" != typeof t.targetElement && F.call(this, t.hintPosition, t.element, t.targetElement);
}.bind(this));
}
function B(t) {
var e = document.querySelector(".introjs-hints");
return e ? e.querySelectorAll(t) :[];
}
function H(t) {
var e = B('.introjs-hint[data-step="' + t + '"]')[0];
I.call(this), e && x(e, "introjs-hidehint"), "undefined" != typeof this._hintCloseCallback && this._hintCloseCallback.call(this, t);
}
function O() {
var t = B(".introjs-hint");
k(t, function(t) {
H.call(this, t.getAttribute("data-step"));
}.bind(this));
}
function M() {
var t = B(".introjs-hint");
t && t.length ? k(t, function(t) {
R.call(this, t.getAttribute("data-step"));
}.bind(this)) :P.call(this, this._targetElement);
}
function R(t) {
var e = B('.introjs-hint[data-step="' + t + '"]')[0];
e && S(e, /introjs-hidehint/g);
}
function V() {
var t = B(".introjs-hint");
k(t, function(t) {
z.call(this, t.getAttribute("data-step"));
}.bind(this));
}
function z(t) {
var e = B('.introjs-hint[data-step="' + t + '"]')[0];
e && e.parentNode.removeChild(e);
}
function D() {
var t = this, e = document.querySelector(".introjs-hints");
null === e && (e = document.createElement("div"), e.className = "introjs-hints");
var n = function(e) {
return function(n) {
var i = n ? n :window.event;
i.stopPropagation && i.stopPropagation(), null !== i.cancelBubble && (i.cancelBubble = !0), 
G.call(t, e);
};
};
k(this._introItems, function(t, i) {
if (!document.querySelector('.introjs-hint[data-step="' + i + '"]')) {
var o = document.createElement("a");
v(o), o.onclick = n(i), o.className = "introjs-hint", t.hintAnimation || x(o, "introjs-hint-no-anim"), 
N(t.element) && x(o, "introjs-fixedhint");
var s = document.createElement("div");
s.className = "introjs-hint-dot";
var r = document.createElement("div");
r.className = "introjs-hint-pulse", o.appendChild(s), o.appendChild(r), o.setAttribute("data-step", i), 
t.targetElement = t.element, t.element = o, F.call(this, t.hintPosition, o, t.targetElement), 
e.appendChild(o);
}
}.bind(this)), document.body.appendChild(e), "undefined" != typeof this._hintsAddedCallback && this._hintsAddedCallback.call(this);
}
function F(t, e, n) {
var i = W.call(this, n), o = 20, s = 20;
switch (t) {
default:
case "top-left":
e.style.left = i.left + "px", e.style.top = i.top + "px";
break;

case "top-right":
e.style.left = i.left + i.width - o + "px", e.style.top = i.top + "px";
break;

case "bottom-left":
e.style.left = i.left + "px", e.style.top = i.top + i.height - s + "px";
break;

case "bottom-right":
e.style.left = i.left + i.width - o + "px", e.style.top = i.top + i.height - s + "px";
break;

case "middle-left":
e.style.left = i.left + "px", e.style.top = i.top + (i.height - s) / 2 + "px";
break;

case "middle-right":
e.style.left = i.left + i.width - o + "px", e.style.top = i.top + (i.height - s) / 2 + "px";
break;

case "middle-middle":
e.style.left = i.left + (i.width - o) / 2 + "px", e.style.top = i.top + (i.height - s) / 2 + "px";
break;

case "bottom-middle":
e.style.left = i.left + (i.width - o) / 2 + "px", e.style.top = i.top + i.height - s + "px";
break;

case "top-middle":
e.style.left = i.left + (i.width - o) / 2 + "px", e.style.top = i.top + "px";
}
}
function G(t) {
var e = document.querySelector('.introjs-hint[data-step="' + t + '"]'), n = this._introItems[t];
"undefined" != typeof this._hintClickCallback && this._hintClickCallback.call(this, e, n, t);
var i = I.call(this);
if (parseInt(i, 10) !== t) {
var o = document.createElement("div"), s = document.createElement("div"), r = document.createElement("div"), l = document.createElement("div");
o.className = "introjs-tooltip", o.onclick = function(t) {
t.stopPropagation ? t.stopPropagation() :t.cancelBubble = !0;
}, s.className = "introjs-tooltiptext";
var a = document.createElement("p");
a.innerHTML = n.hint;
var c = document.createElement("a");
c.className = this._options.buttonClass, c.setAttribute("role", "button"), c.innerHTML = this._options.hintButtonLabel, 
c.onclick = H.bind(this, t), s.appendChild(a), s.appendChild(c), r.className = "introjs-arrow", 
o.appendChild(r), o.appendChild(s), this._currentStep = e.getAttribute("data-step"), 
l.className = "introjs-tooltipReferenceLayer introjs-hintReference", l.setAttribute("data-step", e.getAttribute("data-step")), 
g.call(this, l), l.appendChild(o), document.body.appendChild(l), u.call(this, e, o, r, null, !0);
}
}
function W(t) {
var e = document.body, n = document.documentElement, i = window.pageYOffset || n.scrollTop || e.scrollTop, o = window.pageXOffset || n.scrollLeft || e.scrollLeft, s = t.getBoundingClientRect();
return {
top:s.top + i,
width:s.width,
height:s.height,
left:s.left + o
};
}
function J(t) {
var e = window.getComputedStyle(t), n = "absolute" === e.position, i = /(auto|scroll)/;
if ("fixed" === e.position) return document.body;
for (var o = t; o = o.parentElement; ) if (e = window.getComputedStyle(o), (!n || "static" !== e.position) && i.test(e.overflow + e.overflowY + e.overflowX)) return o;
return document.body;
}
function $(t, e) {
t.scrollTop = e.offsetTop - t.offsetTop;
}
function Q() {
var t = parseInt(this._currentStep + 1, 10);
return t / this._introItems.length * 100;
}
function X(t, e) {
var n, i = {};
for (n in t) i[n] = t[n];
for (n in e) i[n] = e[n];
return i;
}
var Y = "2.9.3", Z = function() {
var t = {};
return function(e, n) {
return n = n || "introjs-stamp", t[n] = t[n] || 0, void 0 === e[n] && (e[n] = t[n]++), 
e[n];
};
}(), K = function() {
function t() {
var t = "introjs_event";
this._id = function(t, e, n, i) {
return e + Z(n) + (i ? "_" + Z(i) :"");
}, this.on = function(e, n, i, o, s) {
var r = this._id.apply(this, arguments), l = function(t) {
return i.call(o || e, t || window.event);
};
"addEventListener" in e ? e.addEventListener(n, l, s) :"attachEvent" in e && e.attachEvent("on" + n, l), 
e[t] = e[t] || {}, e[t][r] = l;
}, this.off = function(e, n, i, o, s) {
var r = this._id.apply(this, arguments), l = e[t] && e[t][r];
l && ("removeEventListener" in e ? e.removeEventListener(n, l, s) :"detachEvent" in e && e.detachEvent("on" + n, l), 
e[t][r] = null);
};
}
return new t();
}(), U = function(e) {
var n;
if ("object" == typeof e) n = new t(e); else if ("string" == typeof e) {
var i = document.querySelector(e);
if (!i) throw new Error("There is no element with given selector.");
n = new t(i);
} else n = new t(document.body);
return U.instances[Z(n, "introjs-instance")] = n, n;
};
return U.version = Y, U.instances = {}, U.fn = t.prototype = {
clone:function() {
return new t(this);
},
setOption:function(t, e) {
return this._options[t] = e, this;
},
setOptions:function(t) {
return this._options = X(this._options, t), this;
},
start:function(t) {
return e.call(this, this._targetElement, t), this;
},
goToStep:function(t) {
return s.call(this, t), this;
},
addStep:function(t) {
return this._options.steps || (this._options.steps = []), this._options.steps.push(t), 
this;
},
addSteps:function(t) {
if (t.length) {
for (var e = 0; e < t.length; e++) this.addStep(t[e]);
return this;
}
},
goToStepNumber:function(t) {
return r.call(this, t), this;
},
nextStep:function() {
return l.call(this), this;
},
previousStep:function() {
return a.call(this), this;
},
exit:function(t) {
return h.call(this, this._targetElement, t), this;
},
refresh:function() {
return c.call(this), this;
},
onbeforechange:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onbeforechange was not a function");
return this._introBeforeChangeCallback = t, this;
},
onchange:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onchange was not a function.");
return this._introChangeCallback = t, this;
},
onafterchange:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onafterchange was not a function");
return this._introAfterChangeCallback = t, this;
},
oncomplete:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for oncomplete was not a function.");
return this._introCompleteCallback = t, this;
},
onhintsadded:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onhintsadded was not a function.");
return this._hintsAddedCallback = t, this;
},
onhintclick:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onhintclick was not a function.");
return this._hintClickCallback = t, this;
},
onhintclose:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onhintclose was not a function.");
return this._hintCloseCallback = t, this;
},
onexit:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onexit was not a function.");
return this._introExitCallback = t, this;
},
onskip:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onskip was not a function.");
return this._introSkipCallback = t, this;
},
onbeforeexit:function(t) {
if ("function" != typeof t) throw new Error("Provided callback for onbeforeexit was not a function.");
return this._introBeforeExitCallback = t, this;
},
addHints:function() {
return P.call(this, this._targetElement), this;
},
hideHint:function(t) {
return H.call(this, t), this;
},
hideHints:function() {
return O.call(this), this;
},
showHint:function(t) {
return R.call(this, t), this;
},
showHints:function() {
return M.call(this), this;
},
removeHints:function() {
return V.call(this), this;
},
removeHint:function(t) {
return z.call(this, t), this;
},
showHintDialog:function(t) {
return G.call(this, t), this;
}
}, U;
});