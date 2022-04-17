!function e(t, n, i) {
function r(s, o) {
if (!n[s]) {
if (!t[s]) {
var u = "function" == typeof require && require;
if (!o && u) return u(s, !0);
if (a) return a(s, !0);
var l = new Error("Cannot find module '" + s + "'");
throw l.code = "MODULE_NOT_FOUND", l;
}
var c = n[s] = {
exports:{}
};
t[s][0].call(c.exports, function(e) {
var n = t[s][1][e];
return r(n ? n :e);
}, c, c.exports, e, t, n, i);
}
return n[s].exports;
}
for (var a = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
return r;
}({
1:[ function(e, t, n) {
var i = e("tml-js"), r = function() {};
r.prototype = i.utils.extend(new i.ApiAdapterBase(), {
get:function(e, t, n) {
this.request("get", e, t, n);
},
post:function(e, t, n) {
this.request("post", e, t, n);
},
request:function(e, t, n, r) {
var a = new Date();
r || (r = function() {});
var s, o = new XMLHttpRequest();
if (e.match(/^get$/i)) {
var u = this.serialize(n || {});
"" !== u && (t = t + "?" + u), s = null;
} else s = this.serialize(n || {});
if (i.logger.debug("get " + t), "withCredentials" in o) o.open(e, t, !0); else {
if ("undefined" == typeof XDomainRequest) return !1;
o = new XDomainRequest(), o.open(e, t);
}
o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.onload = function() {
var e = new Date();
i.logger.debug("call took " + (e - a) + " mls");
var t = o.status >= 200 && o.status < 400;
r(!t, o, o.responseText);
}, o.onerror = function(e) {
r(e, o);
}, o.send(s);
},
serialize:function(e) {
var t = [];
for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
return t.join("&");
}
}), t.exports = r;
}, {
"tml-js":34
} ],
2:[ function(e, t, n) {
var i = e("tml-js"), r = function(e) {
this.initialize(e);
};
r.prototype = i.utils.extend(new i.CacheAdapterBase(), {
name:"browser",
read_only:!1,
create:function() {
return window.localStorageShim = {
_data:{},
setItem:function(e, t) {
return this._data[e] = String(t);
},
getItem:function(e) {
return this._data.hasOwnProperty(e) ? this._data[e] :void 0;
},
removeItem:function(e) {
return delete this._data[e];
},
clear:function() {
return this._data = {};
}
}, window.localStorageShim;
},
fetchFromPath:function(e, t, n) {
if ("current_version" === e) return void this.fetchDefault(e, t, n);
var i = this.config.path + "/" + this.config.version + "/" + e + ".json", r = this;
r.getRequest().get(i, {}, function(i, a, s) {
i || 200 !== a.status || null === s ? r.fetchDefault(e, t, n) :r.store(e, s, function() {
n(null, s);
});
});
},
fetch:function(e, t, n) {
var i = this.cache.getItem(this.getVersionedKey(e));
i ? (this.info("cache hit " + e), n(null, i)) :(this.info("cache miss " + e), this.config.path ? this.fetchFromPath(e, t, n) :this.fetchDefault(e, t, n));
},
getRequest:function() {
if (!this.ajax) {
var e = i.config.getApiAdapter("ajax");
this.ajax = new e();
}
return this.ajax;
},
store:function(e, t, n) {
var i = this.getVersionedKey(e);
this.info("cache store " + e), this.cache.setItem(i, this.stripExtensions(t)), n && n(null, t);
},
del:function(e, t) {
this.info("cache del " + e), this.cache.removeItem(this.getVersionedKey(e)), t && t(null);
},
exists:function(e, t) {
var n = this.cache.getItem(this.getVersionedKey(e));
t && t(!!n);
},
clear:function(e) {
for (var t in this.cache) t.match(/^tml_/) && (t.match(/current_version/) || this.cache.removeItem(t));
e && e(null);
}
}), t.exports = r;
}, {
"tml-js":34
} ],
3:[ function(e, t, n) {
var i = e("tml-js"), r = function(e) {
this.initialize(e);
};
r.prototype = i.utils.extend(new i.CacheAdapterBase(), {
name:"inline",
read_only:!0,
cache:{},
create:function() {
return window[this.config.name] || {};
},
fetch:function(e, t, n) {
var r = e.split("/"), a = this.cache;
return r.forEach(function(e) {
i.utils.isObject(a) && (a = a[e]);
}), a ? (this.info("cache hit " + e), a = JSON.stringify(a), void (n && n(null, a))) :(this.info("cache miss " + e), 
i.utils.isFunction(t) ? void t(function(e, t) {
n(e, t);
}) :(a = t || null, a && (a = JSON.stringify(a)), void (n && n(null, a))));
},
store:function(e, t, n) {
return this.info("the cache is readonly. can't store data"), t;
},
del:function(e, t) {
this.info("the cache is readonly. can't delete data");
},
exists:function(e, t) {
t && t(!!this.cache[e]);
}
}), t.exports = r;
}, {
"tml-js":34
} ],
4:[ function(e, t, n) {
var i = e("tml-js"), r = i.utils, a = {
printWelcomeMessage:function(e) {
console.log([ " _______                  _       _   _             ______          _", "|__   __|                | |     | | (_)           |  ____|        | |", "   | |_ __ __ _ _ __  ___| | __ _| |_ _  ___  _ __ | |__  __  _____| |__   __ _ _ __   __ _  ___", "   | | '__/ _` | '_ \\/ __| |/ _` | __| |/ _ \\| '_ \\|  __| \\ \\/ / __| '_ \\ / _` | '_ \\ / _` |/ _ \\", "   | | | | (_| | | | \\__ \\ | (_| | |_| | (_) | | | | |____ >  < (__| | | | (_| | | | | (_| |  __/", "   |_|_|  \\__,_|_| |_|___/_|\\__,_|\\__|_|\\___/|_| |_|______/_/\\_\\___|_| |_|\\__,_|_| |_|\\__, |\\___|", "                                                                                       __/ |", "                                                                                      |___/", "   version " + e, "", "   We are hiring! http://translationexchange.com/careers ", " " ].join("\n"));
},
getBrowserLanguages:function() {
var e = window.navigator;
return e.languages || e.language && [ e.language ] || e.userLanguage && [ e.userLanguage ] || e.browserLanguage && [ e.browserLanguage ] || null;
},
includeLs:function(e) {
var t = document.createElement("div");
if (r.isObject(e)) for (var n in e) "type" == n ? t.setAttribute("data-tml-language-selector", e[n]) :t.setAttribute("data-tml-" + n, e[n]); else t.setAttribute("data-tml-language-selector", "sideflags");
document.body.appendChild(t);
},
includeAgent:function(e, t, n) {
var a = t.host || "https://tools.translationexchange.com/agent/stable/agent.min.js";
return t.enabled === !1 ? (i.logger.debug("agent disabled"), n()) :(i.logger.debug("loading agent from " + a), 
void r.addJS(window.document, "tml-agent", a, function() {
Trex.init(e.key, t), n && Trex.ready(n);
}));
},
addCss:function(e, t) {
var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
i.type = "text/css", i.id = t, i.styleSheet ? i.styleSheet.cssText = e :i.appendChild(document.createTextNode(e)), 
n.appendChild(i);
},
includeCss:function(e) {
var t = [];
if (e.current_locale) {
var n = e.languages_by_locale[e.current_locale];
n && n.configuration && n.configuration.css && (i.logger.debug("Adding language (" + n.locale + ") configuration: " + n.configuration.css), 
t.push("/* Language Stylesheet (" + n.configuration.id + "): " + n.locale + " */"), 
t.push(n.configuration.css));
}
e.sources_by_key && Object.keys(e.sources_by_key).forEach(function(n) {
var r = e.sources_by_key[n];
r && r.configuration && r.configuration.css && (i.logger.debug("Adding source (" + r.source + ") configuration: " + r.configuration.css), 
t.push("/* Source Stylesheet (" + r.configuration.id + "): " + r.source + " locale: " + e.current_locale + "*/"), 
t.push(r.configuration.css));
}), a.addCss(t.join("\n"), "tml-stylesheet");
},
getPathFragments:function(e, t) {
if (e = e || window.location.pathname, t) {
i.logger.debug("removing prefix from path: " + t);
var n = new RegExp("^/?" + t.replace("/", "/"));
e = e.replace(n, "");
}
return e.split("/").filter(function(e) {
return "" !== e;
});
},
isValidLocale:function(e) {
return null == e ? !1 :null !== e.match(/^[a-z]{2}(-[A-Z]{2})?$/);
},
getDefaultSource:function(e) {
var t = e.locale || e.current_locale, n = window.location.pathname;
if (n.length > 1 && (n = n.replace(/\/$/, "")), r.isObject(t)) {
var i = a.getPathFragments(n, t.prefix);
"pre-path" == t.strategy && a.isValidLocale(i[0]) && i.shift(), n = i.join("/");
}
return n = n.replace(/^\//, ""), n.match(/\/$/) && (n += "index"), "" === n && (n = "index"), 
n;
},
getCurrentSource:function(e) {
var t = e.source || e.current_source, n = window.location.pathname;
if ("/" == n && (n = "/index"), t) {
if (r.isString(t)) return t;
if (r.isFunction(t)) return t(n);
if (r.isObject(t)) {
for (var i in t) {
var s = new RegExp(i);
if (n.match(s)) return t[i];
}
return n;
}
}
return a.getDefaultSource(e);
},
getLocaleFromParam:function(e) {
e = e || "locale";
var t = new RegExp("[?&]" + e + "=([^&]+)(&|$)");
return (window.location.search.match(t) || [])[1];
},
getCurrentLocale:function(e) {
var t = null, n = e.locale || e.current_locale;
if (n) {
if (r.isString(n)) return n;
if (r.isFunction(n)) return n();
if ("param" == n.strategy) return i.logger.debug("extracting locale from param"), 
t = a.getLocaleFromParam(n.param), i.logger.debug("detected locale: " + t), t ? n.cookie && this.updateCurrentLocale(e.key, t) :n.cookie && (t = this.getCookie(e.key).locale), 
t;
if ("pre-path" == n.strategy) {
i.logger.debug("extracting locale from pre-path");
var s = a.getPathFragments(window.location.pathname, n.prefix);
return a.isValidLocale(s[0]) ? s[0] :null;
}
if ("pre-domain" == n.strategy) {
var o = window.location.hostname.split(".");
return a.isValidLocale(o[0]) ? o[0] :null;
}
if ("custom-domain" == n.strategy) {
var u = window.location.hostname, l = r.swapKeys(n.mapping);
return l[u];
}
return i.logger.debug("locale method is provided, but not enough information is supplied"), 
null;
}
if (t = a.getLocaleFromParam()) this.updateCurrentLocale(e.key, t); else {
var c = this.getCookie(e.key);
t = c.locale;
}
return t;
},
updateCurrentLocale:function(e, t) {
var n = a.getCookie(e);
n = n || {}, n.locale = t, this.setCookie(e, n);
},
getCookie:function(e) {
for (var t = r.getCookieName(e), n = t + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
for (var s = i[a]; " " == s.charAt(0); ) s = s.substring(1);
if (-1 != s.indexOf(n)) return r.decode(s.substring(n.length, s.length));
}
return {};
},
setCookie:function(e, t) {
var n = r.getCookieName(e);
document.cookie = n + "=" + r.encode(t) + "; path=/";
}
};
t.exports = {
printWelcomeMessage:a.printWelcomeMessage,
getBrowserLanguages:a.getBrowserLanguages,
includeTools:a.includeTools,
getCurrentSource:a.getCurrentSource,
getDefaultSource:a.getDefaultSource,
getCurrentLocale:a.getCurrentLocale,
updateCurrentLocale:a.updateCurrentLocale,
getCookie:a.getCookie,
setCookie:a.setCookie,
includeLs:a.includeLs,
includeCss:a.includeCss,
includeAgent:a.includeAgent
};
}, {
"tml-js":34
} ],
5:[ function(e, t, n) {
var i = e("tml-js"), r = i.config, a = i.utils;
t.exports = {
isEmptyString:function(e) {
return !e.replace(/[\s\n\r\t\0\x0b\xa0\xc2]/g, "");
},
getOption:function(e, t) {
return a.hashValue(r.translator_options, e) || t;
},
isInline:function(e) {
return 1 == e.nodeType && !e.hasAttribute("isolate") && -1 != this.getOption("nodes.inline").indexOf(e.tagName.toLowerCase()) && !this.isOnlyChild(e);
},
childTypeCounts:function(e) {
for (var t = e.childNodes, n = {
total:0,
inline:0,
breaking:0,
text:0
}, i = 0; i < t.length; i++) {
var r = t[i];
1 == r.nodeType ? (n.total++, this.isInline(r) ? n.inline++ :n.breaking++) :3 == r.nodeType && this.isValidText(r) && (n.total++, 
n.text++);
}
return n;
},
childElementCount:function(e) {
for (var t = 0, n = e.childNodes, i = 0; i < n.length; i++) (1 == n[i].nodeType || 3 == n[i].nodeType) && t++;
return t;
},
hasOnlyLinks:function(e) {
var t = this.childElementCount(e);
return t == e.getElementsByTagName("A").length;
},
hasInlineSiblings:function(e) {
if (this.hasOnlyLinks(e.parentNode)) return !1;
var t = e.parentNode && e.parentNode.childNodes.length > 1;
return t && e.previousSibling && (this.isInline(e.previousSibling) || this.isValidText(e.previousSibling)) || e.nextSibling && (this.isInline(e.nextSibling) || this.isValidText(e.nextSibling));
},
isSelfClosing:function(e) {
return !e.firstChild;
},
isValidText:function(e) {
return e ? 3 == e.nodeType && !this.isEmptyString(e.nodeValue) :!1;
},
isSeparator:function(e) {
return e ? 1 == e.nodeType && -1 != this.getOption("nodes.splitters").indexOf(e.tagName.toLowerCase()) :!1;
},
hasChildNodes:function(e) {
return e.childNodes ? e.childNodes.length > 0 :!1;
},
isBetweenSeparators:function(e) {
return this.isSeparator(e.previousSibling) && !this.isValidText(e.nextSibling) ? !0 :this.isSeparator(e.nextSibling) && !this.isValidText(e.previousSibling) ? !0 :!1;
},
isOnlyChild:function(e) {
return e.parentNode ? 1 == e.parentNode.childNodes.length :!1;
},
matchesSelectors:function(e, t, n) {
var i, r = "string" == typeof t ? [ t ] :t;
if (r) for (var a = 0, s = r.length; s > a; a++) {
var o = r[a] + (n ? "," + r[a] + " *" :"");
if (i = e.matches && e.matches(o) || e.webkitMatches && e.webkitMatches(o) || e.mozMatches && e.mozMatches(o) || e.msMatches && e.msMatches(o)) return !0;
}
return !1;
},
nodeInfo:function(e) {
var t = [ e.nodeType ];
return 1 == e.nodeType && t.push(e.tagName), this.isInline(e) && t.push("inline"), 
this.hasInlineSiblings(e) && t.push("sentence"), this.hasInlineSiblings(e) || t.push("only translatable"), 
this.isSelfClosing(e) && t.push("self closing"), this.isOnlyChild(e) && t.push("only child"), 
3 == this.nodeType && t.push("value: " + e.nodeValue), "[" + t.join(", ") + "]";
}
};
}, {
"tml-js":34
} ],
6:[ function(e, t, n) {
!function(e, i) {
function r(t) {
if (e) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
}
"object" == typeof n ? (t.exports = i(), r(t.exports)) :"function" == typeof define && define.amd ? define([], i) :r(i());
}(window, function() {
var t = e("tml-js"), n = e("./helpers"), r = e("./tokenizers/dom"), a = e("tiny-emitter"), s = new a(), o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
return t = t.utils.extend(t, {
version:"1.0.1",
on:s.on.bind(s),
off:s.off.bind(s),
once:s.once.bind(s),
emit:s.emit.bind(s),
app:null,
block_options:[],
root_element:null,
options:{},
init:function(e, i) {
e = e || {}, t.options = e, t.config.debug = e.debug ? e.debug :t.config.debug, 
e.current_source || (e.current_source = function() {
return n.getDefaultSource(e);
}), (t.config.debug || e.info) && n.printWelcomeMessage(t.version), t.initApplication(e, function() {
t.startKeyListener(e), t.startSourceListener(e), i && i();
});
},
initApplication:function(i, r) {
var a = new Date(), s = n.getCookie(i.key), u = null;
i.cache && i.cache.version && (u = i.cache.version), t.config.registerApiAdapter("ajax", e("./api_adapters/ajax")), 
t.config.api = "ajax", t.config.registerCacheAdapters({
inline:e("./cache_adapters/inline"),
browser:e("./cache_adapters/browser")
}), i.current_source = n.getCurrentSource(i), i.current_locale = n.getCurrentLocale(i), 
i.current_translator = s.translator ? new t.Translator(s.translator) :null, i = t.utils.merge(t.config, {
delayed_flush:!0,
api:"ajax",
accepted_locales:n.getBrowserLanguages(),
cache:{
enabled:!0,
adapter:"browser",
version:u,
version_check_interval:i.version_check_interval || 60
}
}, i), i.fetch_version = "browser" == i.cache.adapter && !u, t.config.initCache(i.key), 
t.app = new t.Application({
key:i.key,
token:s.oauth ? s.oauth.token :null,
host:i.host,
cdn_host:i.cdn_host
}), t.app.init(i, function(e) {
(i.translateBody || i.translate_body) && o && t.translateElement(document), t.domReady(function() {
var e = i.translateBody || i.translate_body;
e && !o && t.translateElement(document.body);
var s = new Date();
t.logger.debug("page render took " + (s - a) + " mls"), (i.translateTitle || i.translate_title) && "" !== document.title && (document.title = t.translateLabel(document.title)), 
i.agent || (i.agent = {});
var u = i.language_selector || i.languageSelector;
u && n.includeLs(u), n.includeCss(t.app), n.includeAgent(t.app, {
host:i.agent.host,
enabled:i.agent.enabled,
domains:i.agent.domains || {},
tools:i.agent.tools || {},
locale_strategy:i.locale,
config:t.config,
locale:t.app.current_locale,
source:t.app.current_source,
sdk:i.sdk || "tml-js v" + t.version,
css:t.app.css,
languages:t.app.languages
}, function() {
"function" == typeof i.onLoad && i.onLoad(t.app), t.emit("load"), r && r();
});
});
});
},
startKeyListener:function(e) {
if (t.getApplication().isInlineModeEnabled()) {
var n = t.getApplication(), i = e.flush_interval || 3e3;
setInterval(function() {
n.submitMissingTranslationKeys();
}, i);
}
},
startSourceListener:function(e) {
function n(t) {
return function() {
t && t.apply(history, arguments), i.refreshSource(e);
};
}
if (e.translateBody) {
var i = this;
t.getApplication();
window.history.pushState = n(window.history.pushState), window.history.replaceState = n(window.history.replaceState), 
window.addEventListener("popstate", n());
}
},
refreshSource:function(e) {
var i = this, r = n.getCurrentSource(e), a = t.getApplication(), s = (t.utils.generateKey(r), 
a.current_locale), o = function() {
i.tokenizer && i.tokenizer.updateAllNodes();
};
a.getSource(r) || a.loadSources([ r ], s, function(e) {
e.length > 0 && e[0] && e[0].sources && e[0].sources.length > 0 ? a.loadSources(e[0].sources, a.current_locale, o) :o();
});
},
domReady:function(e) {
!document.readyState || /ded|te/.test(document.readyState) ? e() :document.addEventListener("DOMContentLoaded", e, !1);
},
changeLanguage:function(e, i) {
t.app.changeLanguage(e, function(r) {
n.updateCurrentLocale(t.options.key, e), t.config.currentLanguage = t.app.getCurrentLanguage();
var a = this.tokenizer && this.tokenizer.updateAllNodes;
i = void 0 !== typeof i ? i :!t.config.refreshHandled, a && this.tokenizer.updateAllNodes(), 
i && window.location.reload(), t.utils.isFunction(t.options.onLanguageChange) && t.options.onLanguageChange(r), 
t.emit("language-change", r);
}.bind(this));
},
setSource:function(e, n) {
var i = t.getApplication(), r = function() {
i.current_source = e, n && n();
};
i.getSource(e) ? r() :i.loadSources([ e ], i.current_locale, function(e) {
e.length > 0 && e[0] && e[0].sources && e[0].sources.length > 0 ? i.loadSources(e[0].sources, i.current_locale, r) :r();
});
},
translate:function(e, n, i, r) {
if (!t.app) throw new Error("Invalid application.");
var a = t.utils.normalizeParams(e, n, i, r);
return a.label = a.label.replace(/\s\s+/g, " "), a.options = t.utils.extend({}, {
current_locale:t.app.current_locale,
current_source:t.app.current_source,
current_translator:t.app.current_translator,
block_options:t.block_options || []
}, a.options), t.app.getCurrentLanguage().translate(a);
},
translateLabel:function(e, n, i, r) {
var a = t.utils.normalizeParams(e, n, i, r);
return a.options.skip_decorations = !0, t.translate(a);
},
translateElement:function(e) {
e = "string" == typeof e ? document.getElementById(e) :e, t.config.currentLanguage = t.app.getCurrentLanguage(), 
this.tokenizer = new r(e, {}, {
debug:!1,
current_source:t.app.current_source || "index",
current_translator:t.app.current_translator
}), /ded|te/.test(document.readyState) ? (this.tokenizer.translateDOM(document.body), 
this.translateNow()) :o && (document.body && this.tokenizer.translateDOM(document.body), 
this.translateNow());
},
translateNow:function() {
var e, n = this.tokenizer, i = function(i) {
var r = [];
i.length > 0 && (i.forEach(function(e) {
var t = (e.target, e.addedNodes || []);
if (t.length > 0) for (var n = t.length - 1; n > -1; n--) {
var i = t[n];
i.tagName && -1 != i.tagName.toLowerCase().indexOf("tml:") || i.tagName && -1 != i.tagName.toLowerCase().indexOf("script") || r.push(i);
}
}), r.forEach(function(e) {
n.translateDOM(e);
}), "interactive" == document.readyState && (!t.options.translateBody || t.options.disableAutoTranslate) && e.disconnect());
};
e = new o(i), e.observe(document, {
subtree:!0,
attributes:!0,
attributeOldValue:!1,
childList:!0,
characterData:!0,
characterDataOldValue:!1
});
},
translateTextNode:function(e, n, i) {
var r = t.utils.sanitizeString(i);
if (!t.utils.isNumber(r) && null !== r && 0 !== r.length) {
var a = this.translate(r);
/^\s/.test(i) && (a = " " + a), /\s$/.test(i) && (a += " ");
var s = document.createElement("span");
s.innerHTML = a, e.replaceChild(s, n);
}
},
translateTextElements:function(e) {
if (!t.utils.element("tml_status_node")) {
console.log("Initializing text nodes...");
var n = document.createElement("div");
n.id = "tml_status_node", n.style.display = "none", document.body.appendChild(n);
for (var r = [], a = document.createTreeWalker(e || document.body, NodeFilter.SHOW_TEXT, null, !1); a.nextNode(); ) r.push(a.currentNode);
console.log("Found " + r.length + " text nodes");
for (i = 0; i < r.length; i++) {
var s = r[i], o = s.parentNode;
if (o && "script" != o.tagName && "SCRIPT" != o.tagName) {
var u = s.nodeValue || "";
if (-1 == u.indexOf("<img") && -1 == u.indexOf("<!-")) {
u.split(". ");
this.translateTextNode(o, s, u);
}
}
}
}
},
getApplication:function() {
return t.app;
},
getCurrentSource:function() {
return t.app.current_source;
},
getCurrentTranslator:function() {
return t.app.current_translator;
},
getCurrentLanguage:function() {
return t.app.getCurrentLanguage();
},
block:function(e, n) {
t.block_options.unshift(e), n(), t.block_options.pop();
},
beginBlock:function(e) {
t.block_options.unshift(e);
},
endBlock:function() {
t.block_options.pop();
},
clearCache:function() {
t.config.getCache().clear();
}
}), {
tml:t,
tr:t.translate,
trl:t.translateLabel,
tre:t.translateElement,
tml_application:t.getApplication,
tml_current_source:t.getCurrentSource,
tml_current_translator:t.getCurrentTranslator,
tml_current_language:t.getCurrentLanguage,
tml_block:t.block,
tml_begin_block:t.beginBlock,
tml_end_block:t.endBlock,
util:t.utils
};
});
}, {
"./api_adapters/ajax":1,
"./cache_adapters/browser":2,
"./cache_adapters/inline":3,
"./helpers":4,
"./tokenizers/dom":7,
"tiny-emitter":12,
"tml-js":34
} ],
7:[ function(e, t, n) {
var i = e("tml-js"), r = i.config, a = i.utils, s = e("../helpers/dom-helpers"), o = function(e, t, n) {
this.doc = e, this.context = t || {}, this.tokens = [], this.options = n || {};
};
o.prototype = {
contentCache:[],
contentNodes:[],
translatedNodes:[],
getOption:function(e, t) {
return "undefined" == typeof this.options[e] || null === this.options[e] ? a.hashValue(r.translator_options, e) || t :this.options[e] || t;
},
translate:function() {
return this.translateTree(this.doc);
},
updateAllNodes:function() {
for (var e, t = 0, n = this.contentCache.length; n > t; t++) e = this.contentCache[t], 
e.container && (e.attribute ? e.container.setAttribute(e.attribute, this.translateTml(e.tml, e.data, !0)) :e.container.innerHTML = this.translateTml(e.tml, e.data, this.isUnwrappable(e.container)));
},
replaceNodes:function(e) {
var t, n, i, r, a = this.getOption("translatable_elements"), o = document.createElement("tml:inline"), u = e[0] && e[0].parentNode, l = "";
if (u) {
if (a && !s.matchesSelectors(u, a, !0)) return !1;
if (n = e.map(function(e) {
return l += e.innerHTML || e.nodeValue, this.generateTmlTags(e);
}.bind(this)).join(""), i = this.tokens, r = this.translateTml(n, null, this.isUnwrappable(u)), 
!r || this.isEmptyString(n) || this.isUntranslatableText(l) || !this.isTranslatable(u)) return;
e.length !== u.childNodes.length ? (u.insertBefore(o, e[0]), o.innerHTML = r, o.insertAdjacentHTML("beforebegin", "\n"), 
o.insertAdjacentHTML("afterend", "\n"), e.forEach(function(e) {
u.removeChild(e);
}), t = o) :(u.insertBefore(o, e[0]), o.insertAdjacentHTML("beforebegin", r), u.removeChild(o), 
o = null, e.forEach(function(e) {
u.removeChild(e);
}), t = u), -1 === this.contentNodes.indexOf(t) && (this.contentCache.push({
container:t,
tml:n,
data:i
}), this.contentNodes.push(t));
}
},
translateDOM:function(e) {
if (-1 === this.translatedNodes.indexOf(e) && (this.translatedNodes.push(e), 3 !== e.nodeType)) {
var t = 1 === e.nodeType && this.getSourceBlock(e);
t && window.tml_begin_block({
source:t
});
for (var n = [], i = 0; i < e.childNodes.length; i++) {
var r = e.childNodes[i];
r && this.isTranslatable(r) && (3 === r.nodeType || s.isInline(r) && s.hasInlineSiblings(r) ? n.push(r) :(this.replaceNodes(n), 
this.translateDOM(r), n = []));
}
n.length > 0 && (1 === n.length && 1 === n[0].nodeType ? this.translateDOM(n[0]) :this.replaceNodes(n)), 
t && window.tml_end_block(), e.getAttribute && this.translateAttributes(e);
}
},
translateAttributes:function(e) {
var t = this;
if (r.translator_options.attributes.labels.forEach(function(n) {
e.hasAttribute(n) && t.replaceAttributes(e, n);
}), "INPUT" === e.nodeName) {
var n = (e.getAttribute("type") || "").toLowerCase(), i = e.getAttribute("value");
!i || "submit" !== n && "button" !== n || t.replaceAttributes(e, "value");
}
},
replaceAttributes:function(e, t) {
var n = e.getAttribute(t), i = this.tokens, r = this.translateTml(n, null, !0), a = this.getOption("translatable_elements");
return a && !s.matchesSelectors(e, a, !0) ? !1 :(e.setAttribute(t, r), void this.contentCache.push({
container:e,
tml:n,
data:i,
attribute:t
}));
},
getSourceBlock:function(e) {
if (r.sourceElements) {
var t = s.matchesSelectors(e, r.sourceElements);
if (t) return e.getAttribute("name") || e.getAttribute("id") || e.getAttribute("class");
}
return e.getAttribute("data-tml-source") || !1;
},
isTranslatable:function(e) {
return 8 === e.nodeType ? !1 :(3 === e.nodeType && (e = e.parentNode), 1 === e.nodeType ? !s.matchesSelectors(e, [].concat(this.getOption("nodes.scripts") || [], this.getOption("ignore_elements") || [], [ "[notranslate]", ".notranslate", "tml\\:label" ]), !0) :!0);
},
normalizeTml:function(e) {
return e = e.replace(/\n/g, " ").replace(/\s{2,}/g, " ");
},
isUnwrappable:function(e) {
return s.matchesSelectors(e, "svg", !0);
},
translateTml:function(e, t, n) {
if (e = this.normalizeTml(e), this.getOption("split_sentences")) {
var i = e, r = a.splitSentences(e);
if (r) {
var s = this;
return r.forEach(function(e) {
var r = s.translateTmlFragment(e, t, {
label:n
});
r && (i = i.replace(e, r));
}), i;
}
}
return this.translateTmlFragment(e, t, {
label:n,
reset:!0
});
},
translateTmlFragment:function(e, t, n) {
n = n || {}, e = this.generateDataTokens(e), t = t || this.tokens;
var i = e;
return e = e.replace(/[\n]/g, "").replace(/\s\s+/g, " ").trim(), i = this.getOption("debug") ? this.debugTranslation(e) :n.label ? window.trl(e, t, this.options) :window.tr(e, t, this.options), 
n.reset && this.resetContext(), i;
},
generateTmlTags:function(e) {
if (3 === e.nodeType) return this.escapeHtml(e.nodeValue);
if (!this.isTranslatable(e)) {
var t = this.contextualize(this.adjustTokenName(e), e.outerHTML);
return "{" + t + "}";
}
var n = e.tagName.toLowerCase();
if ("var" === n) return this.registerDataTokenFromVar(e);
for (var i = "", r = 0; r < e.childNodes.length; r++) {
var a = e.childNodes[r];
i += 3 === a.nodeType ? this.escapeHtml(a.nodeValue) :this.generateTmlTags(a);
}
var o, u = this.generateHtmlToken(e), l = this.contextualize(this.adjustTokenName(e), u), c = this.sanitizeValue(i);
return o = s.isSelfClosing(e) ? " {" + l + "} " :"<" + l + ">" + c + "</" + l + ">";
},
registerDataTokenFromVar:function(e) {
var t = {}, n = "var";
if (e.attributes) for (var i = 0; i < e.attributes.length; i++) {
var r = e.attributes[i];
"" === r.value ? n = r.name :t[r.name] = r.value;
}
return t.value = t.value || e.innerHTML, n = this.contextualize(n, e.innerHTML), 
"{" + n + "}";
},
resetContext:function() {
this.tokens = [].concat(this.context);
},
isShortToken:function(e, t) {
return -1 !== this.getOption("nodes.short").indexOf(e.toLowerCase()) || t.length < 20;
},
generateDataTokens:function(e) {
var t = this;
e = this.sanitizeValue(e);
var n = null;
if (this.getOption("data_tokens.date.enabled")) {
n = t.getOption("data_tokens.date.name");
var i = t.getOption("data_tokens.date.formats");
i.forEach(function(i) {
var r = i[0];
e = t.tokenizeByRule(e, r, n);
});
}
var r = this.getOption("data_tokens.rules");
if (r) {
var a = this.getOption("data_tokens.enabled_rules");
r.forEach(function(n) {
a && -1 === a.indexOf(n.name) || n.enabled && (e = t.tokenizeByRule(e, n.regex, n.name));
});
}
return e;
},
tokenizeByRule:function(e, t, n) {
var i = a.extractMatches(e, a.toRegex(t));
if (!i || 0 === i.length) return e;
var r = this, s = i.length - 1;
return i = i.reverse(), i.forEach(function(t) {
var i = t.value.trim();
if ("" !== i) {
var o = n;
s > 0 && (o = n + s, s--), r.tokens[o] = i;
var u = t.value.replace(i, "{" + o + "}");
e = a.replaceBetween(e, t.start, t.end, u);
}
}), e;
},
generateHtmlToken:function(e, t) {
var n = e.tagName.toLowerCase(), i = e.attributes, r = {};
if (t = t ? t :"{$0}", 0 === i.length) return s.isSelfClosing(e) ? s.isSeparator(e) ? "<" + n + "/>" :"<" + n + "></" + n + ">" :"<" + n + ">" + t + "</" + n + ">";
for (var o = 0; o < i.length; o++) r[i[o].name] = i[o].value;
var u = a.keys(r);
u.sort();
var l = [];
return u.forEach(function(e) {
var t = -1 !== r[e].indexOf("'") ? '"' :"'";
l.push(e + "=" + t + r[e] + t);
}), l = l.join(" "), s.isSelfClosing(e) ? "<" + n + " " + l + "></" + n + ">" :"<" + n + " " + l + ">" + t + "</" + n + ">";
},
adjustTokenName:function(e) {
if (e && e.tagName) {
var t = this.getOption("name_mapping");
if (a.isString(t)) return t;
var n = e.tagName.toLowerCase();
return n = t[n] ? t[n] :t["*"] ? t["*"] :n;
}
return "";
},
contextualize:function(e, t) {
if (!this.tokens[e]) return this.tokens[e] = t, e;
var n = 0, i = e.match(/\d+$/);
return i && i.length > 0 && (n = parseInt(i[i.length - 1]), e = e.replace("" + n, "")), 
e += n + 1, this.contextualize(e, t);
},
isEmptyString:function(e) {
return e = e.replace(/[\s\n\r\t\0\x0b\xa0\xc2]/g, ""), "" === e;
},
isUntranslatableText:function(e) {
return this.isEmptyString(e) || e.match(/^[0-9,.\s]+$/);
},
isValidTml:function(e) {
var t = /<\/?([a-z][a-z0-9]*)\b[^>]*>|{([a-z0-9_\.]+)}|\{\}/gi;
return !this.isEmptyString(e.replace(t, ""));
},
sanitizeValue:function(e) {
return e.replace(/^\s+/, "");
},
escapeHtml:function(e) {
var t = document.createElement("div");
return t.appendChild(document.createTextNode(e)), t.innerHTML;
},
debug:function(e) {
this.doc = e, this.debugTree(e, 0);
},
debugTree:function(e, t) {
var n = new Array(t + 1).join("=");
if (console.log(n + "=> " + typeof e + ": " + s.nodeInfo(e)), e.childNodes) for (var i = this, r = 0; r < e.childNodes.length; r++) {
var a = e.childNodes[r];
i.debugTree(a, t + 1);
}
},
debugTranslation:function(e) {
return this.getOption("debug_format").replace("{$0}", e);
}
}, t.exports = o;
}, {
"../helpers/dom-helpers":5,
"tml-js":34
} ],
8:[ function(e, t, n) {
var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
!function(e) {
"use strict";
function t(e) {
var t = e.charCodeAt(0);
return t === s || t === h ? 62 :t === o || t === p ? 63 :u > t ? -1 :u + 10 > t ? t - u + 26 + 26 :c + 26 > t ? t - c :l + 26 > t ? t - l + 26 :void 0;
}
function n(e) {
function n(e) {
l[h++] = e;
}
var i, r, s, o, u, l;
if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var c = e.length;
u = "=" === e.charAt(c - 2) ? 2 :"=" === e.charAt(c - 1) ? 1 :0, l = new a(3 * e.length / 4 - u), 
s = u > 0 ? e.length - 4 :e.length;
var h = 0;
for (i = 0, r = 0; s > i; i += 4, r += 3) o = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), 
n((16711680 & o) >> 16), n((65280 & o) >> 8), n(255 & o);
return 2 === u ? (o = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & o)) :1 === u && (o = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, 
n(o >> 8 & 255), n(255 & o)), l;
}
function r(e) {
function t(e) {
return i.charAt(e);
}
function n(e) {
return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e);
}
var r, a, s, o = e.length % 3, u = "";
for (r = 0, s = e.length - o; s > r; r += 3) a = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], 
u += n(a);
switch (o) {
case 1:
a = e[e.length - 1], u += t(a >> 2), u += t(a << 4 & 63), u += "==";
break;

case 2:
a = (e[e.length - 2] << 8) + e[e.length - 1], u += t(a >> 10), u += t(a >> 4 & 63), 
u += t(a << 2 & 63), u += "=";
}
return u;
}
var a = "undefined" != typeof Uint8Array ? Uint8Array :Array, s = "+".charCodeAt(0), o = "/".charCodeAt(0), u = "0".charCodeAt(0), l = "a".charCodeAt(0), c = "A".charCodeAt(0), h = "-".charCodeAt(0), p = "_".charCodeAt(0);
e.toByteArray = n, e.fromByteArray = r;
}("undefined" == typeof n ? this.base64js = {} :n);
}, {} ],
9:[ function(e, t, n) {
(function(t) {
"use strict";
function i() {
function e() {}
try {
var t = new Uint8Array(1);
return t.foo = function() {
return 42;
}, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
} catch (n) {
return !1;
}
}
function r() {
return a.TYPED_ARRAY_SUPPORT ? 2147483647 :1073741823;
}
function a(e) {
return this instanceof a ? (a.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), 
"number" == typeof e ? s(this, e) :"string" == typeof e ? o(this, e, arguments.length > 1 ? arguments[1] :"utf8") :u(this, e)) :arguments.length > 1 ? new a(e, arguments[1]) :new a(e);
}
function s(e, t) {
if (e = g(e, 0 > t ? 0 :0 | m(t)), !a.TYPED_ARRAY_SUPPORT) for (var n = 0; t > n; n++) e[n] = 0;
return e;
}
function o(e, t, n) {
("string" != typeof n || "" === n) && (n = "utf8");
var i = 0 | _(t, n);
return e = g(e, i), e.write(t, n), e;
}
function u(e, t) {
if (a.isBuffer(t)) return l(e, t);
if (X(t)) return c(e, t);
if (null == t) throw new TypeError("must start with number, buffer, array or string");
if ("undefined" != typeof ArrayBuffer) {
if (t.buffer instanceof ArrayBuffer) return h(e, t);
if (t instanceof ArrayBuffer) return p(e, t);
}
return t.length ? f(e, t) :d(e, t);
}
function l(e, t) {
var n = 0 | m(t.length);
return e = g(e, n), t.copy(e, 0, 0, n), e;
}
function c(e, t) {
var n = 0 | m(t.length);
e = g(e, n);
for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
return e;
}
function h(e, t) {
var n = 0 | m(t.length);
e = g(e, n);
for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
return e;
}
function p(e, t) {
return a.TYPED_ARRAY_SUPPORT ? (t.byteLength, e = a._augment(new Uint8Array(t))) :e = h(e, new Uint8Array(t)), 
e;
}
function f(e, t) {
var n = 0 | m(t.length);
e = g(e, n);
for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
return e;
}
function d(e, t) {
var n, i = 0;
"Buffer" === t.type && X(t.data) && (n = t.data, i = 0 | m(n.length)), e = g(e, i);
for (var r = 0; i > r; r += 1) e[r] = 255 & n[r];
return e;
}
function g(e, t) {
a.TYPED_ARRAY_SUPPORT ? (e = a._augment(new Uint8Array(t)), e.__proto__ = a.prototype) :(e.length = t, 
e._isBuffer = !0);
var n = 0 !== t && t <= a.poolSize >>> 1;
return n && (e.parent = G), e;
}
function m(e) {
if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
return 0 | e;
}
function v(e, t) {
if (!(this instanceof v)) return new v(e, t);
var n = new a(e, t);
return delete n.parent, n;
}
function _(e, t) {
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var i = !1; ;) switch (t) {
case "ascii":
case "binary":
case "raw":
case "raws":
return n;

case "utf8":
case "utf-8":
return V(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return K(e).length;

default:
if (i) return V(e).length;
t = ("" + t).toLowerCase(), i = !0;
}
}
function y(e, t, n) {
var i = !1;
if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length :0 | n, e || (e = "utf8"), 
0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";
for (;;) switch (e) {
case "hex":
return O(this, t, n);

case "utf8":
case "utf-8":
return S(this, t, n);

case "ascii":
return A(this, t, n);

case "binary":
return L(this, t, n);

case "base64":
return E(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return N(this, t, n);

default:
if (i) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase(), i = !0;
}
}
function x(e, t, n, i) {
n = Number(n) || 0;
var r = e.length - n;
i ? (i = Number(i), i > r && (i = r)) :i = r;
var a = t.length;
if (a % 2 !== 0) throw new Error("Invalid hex string");
i > a / 2 && (i = a / 2);
for (var s = 0; i > s; s++) {
var o = parseInt(t.substr(2 * s, 2), 16);
if (isNaN(o)) throw new Error("Invalid hex string");
e[n + s] = o;
}
return s;
}
function b(e, t, n, i) {
return H(V(t, e.length - n), e, n, i);
}
function k(e, t, n, i) {
return H(q(t), e, n, i);
}
function w(e, t, n, i) {
return k(e, t, n, i);
}
function $(e, t, n, i) {
return H(K(t), e, n, i);
}
function T(e, t, n, i) {
return H(Y(t, e.length - n), e, n, i);
}
function E(e, t, n) {
return 0 === t && n === e.length ? J.fromByteArray(e) :J.fromByteArray(e.slice(t, n));
}
function S(e, t, n) {
n = Math.min(e.length, n);
for (var i = [], r = t; n > r; ) {
var a = e[r], s = null, o = a > 239 ? 4 :a > 223 ? 3 :a > 191 ? 2 :1;
if (n >= r + o) {
var u, l, c, h;
switch (o) {
case 1:
128 > a && (s = a);
break;

case 2:
u = e[r + 1], 128 === (192 & u) && (h = (31 & a) << 6 | 63 & u, h > 127 && (s = h));
break;

case 3:
u = e[r + 1], l = e[r + 2], 128 === (192 & u) && 128 === (192 & l) && (h = (15 & a) << 12 | (63 & u) << 6 | 63 & l, 
h > 2047 && (55296 > h || h > 57343) && (s = h));
break;

case 4:
u = e[r + 1], l = e[r + 2], c = e[r + 3], 128 === (192 & u) && 128 === (192 & l) && 128 === (192 & c) && (h = (15 & a) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & c, 
h > 65535 && 1114112 > h && (s = h));
}
}
null === s ? (s = 65533, o = 1) :s > 65535 && (s -= 65536, i.push(s >>> 10 & 1023 | 55296), 
s = 56320 | 1023 & s), i.push(s), r += o;
}
return C(i);
}
function C(e) {
var t = e.length;
if (Z >= t) return String.fromCharCode.apply(String, e);
for (var n = "", i = 0; t > i; ) n += String.fromCharCode.apply(String, e.slice(i, i += Z));
return n;
}
function A(e, t, n) {
var i = "";
n = Math.min(e.length, n);
for (var r = t; n > r; r++) i += String.fromCharCode(127 & e[r]);
return i;
}
function L(e, t, n) {
var i = "";
n = Math.min(e.length, n);
for (var r = t; n > r; r++) i += String.fromCharCode(e[r]);
return i;
}
function O(e, t, n) {
var i = e.length;
(!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
for (var r = "", a = t; n > a; a++) r += U(e[a]);
return r;
}
function N(e, t, n) {
for (var i = e.slice(t, n), r = "", a = 0; a < i.length; a += 2) r += String.fromCharCode(i[a] + 256 * i[a + 1]);
return r;
}
function I(e, t, n) {
if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
function j(e, t, n, i, r, s) {
if (!a.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
if (t > r || s > t) throw new RangeError("value is out of bounds");
if (n + i > e.length) throw new RangeError("index out of range");
}
function R(e, t, n, i) {
0 > t && (t = 65535 + t + 1);
for (var r = 0, a = Math.min(e.length - n, 2); a > r; r++) e[n + r] = (t & 255 << 8 * (i ? r :1 - r)) >>> 8 * (i ? r :1 - r);
}
function D(e, t, n, i) {
0 > t && (t = 4294967295 + t + 1);
for (var r = 0, a = Math.min(e.length - n, 4); a > r; r++) e[n + r] = t >>> 8 * (i ? r :3 - r) & 255;
}
function B(e, t, n, i, r, a) {
if (t > r || a > t) throw new RangeError("value is out of bounds");
if (n + i > e.length) throw new RangeError("index out of range");
if (0 > n) throw new RangeError("index out of range");
}
function M(e, t, n, i, r) {
return r || B(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), W.write(e, t, n, i, 23, 4), 
n + 4;
}
function z(e, t, n, i, r) {
return r || B(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), W.write(e, t, n, i, 52, 8), 
n + 8;
}
function P(e) {
if (e = F(e).replace(ee, ""), e.length < 2) return "";
for (;e.length % 4 !== 0; ) e += "=";
return e;
}
function F(e) {
return e.trim ? e.trim() :e.replace(/^\s+|\s+$/g, "");
}
function U(e) {
return 16 > e ? "0" + e.toString(16) :e.toString(16);
}
function V(e, t) {
t = t || 1 / 0;
for (var n, i = e.length, r = null, a = [], s = 0; i > s; s++) {
if (n = e.charCodeAt(s), n > 55295 && 57344 > n) {
if (!r) {
if (n > 56319) {
(t -= 3) > -1 && a.push(239, 191, 189);
continue;
}
if (s + 1 === i) {
(t -= 3) > -1 && a.push(239, 191, 189);
continue;
}
r = n;
continue;
}
if (56320 > n) {
(t -= 3) > -1 && a.push(239, 191, 189), r = n;
continue;
}
n = (r - 55296 << 10 | n - 56320) + 65536;
} else r && (t -= 3) > -1 && a.push(239, 191, 189);
if (r = null, 128 > n) {
if ((t -= 1) < 0) break;
a.push(n);
} else if (2048 > n) {
if ((t -= 2) < 0) break;
a.push(n >> 6 | 192, 63 & n | 128);
} else if (65536 > n) {
if ((t -= 3) < 0) break;
a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(1114112 > n)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return a;
}
function q(e) {
for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
return t;
}
function Y(e, t) {
for (var n, i, r, a = [], s = 0; s < e.length && !((t -= 2) < 0); s++) n = e.charCodeAt(s), 
i = n >> 8, r = n % 256, a.push(r), a.push(i);
return a;
}
function K(e) {
return J.toByteArray(P(e));
}
function H(e, t, n, i) {
for (var r = 0; i > r && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
return r;
}
var J = e("base64-js"), W = e("ieee754"), X = e("isarray");
n.Buffer = a, n.SlowBuffer = v, n.INSPECT_MAX_BYTES = 50, a.poolSize = 8192;
var G = {};
a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT :i(), 
a.TYPED_ARRAY_SUPPORT ? (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array) :(a.prototype.length = void 0, 
a.prototype.parent = void 0), a.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
}, a.compare = function(e, t) {
if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); s > r && e[r] === t[r]; ) ++r;
return r !== s && (n = e[r], i = t[r]), i > n ? -1 :n > i ? 1 :0;
}, a.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "binary":
case "base64":
case "raw":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, a.concat = function(e, t) {
if (!X(e)) throw new TypeError("list argument must be an Array of Buffers.");
if (0 === e.length) return new a(0);
var n;
if (void 0 === t) for (t = 0, n = 0; n < e.length; n++) t += e[n].length;
var i = new a(t), r = 0;
for (n = 0; n < e.length; n++) {
var s = e[n];
s.copy(i, r), r += s.length;
}
return i;
}, a.byteLength = _, a.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" :0 === arguments.length ? S(this, 0, e) :y.apply(this, arguments);
}, a.prototype.equals = function(e) {
if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e ? !0 :0 === a.compare(this, e);
}, a.prototype.inspect = function() {
var e = "", t = n.INSPECT_MAX_BYTES;
return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), 
this.length > t && (e += " ... ")), "<Buffer " + e + ">";
}, a.prototype.compare = function(e) {
if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e ? 0 :a.compare(this, e);
}, a.prototype.indexOf = function(e, t) {
function n(e, t, n) {
for (var i = -1, r = 0; n + r < e.length; r++) if (e[n + r] === t[-1 === i ? 0 :r - i]) {
if (-1 === i && (i = r), r - i + 1 === t.length) return n + i;
} else i = -1;
return -1;
}
if (t > 2147483647 ? t = 2147483647 :-2147483648 > t && (t = -2147483648), t >>= 0, 
0 === this.length) return -1;
if (t >= this.length) return -1;
if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e) return 0 === e.length ? -1 :String.prototype.indexOf.call(this, e, t);
if (a.isBuffer(e)) return n(this, e, t);
if ("number" == typeof e) return a.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) :n(this, [ e ], t);
throw new TypeError("val must be string, number or Buffer");
}, a.prototype.get = function(e) {
return console.log(".get() is deprecated. Access using array indexes instead."), 
this.readUInt8(e);
}, a.prototype.set = function(e, t) {
return console.log(".set() is deprecated. Access using array indexes instead."), 
this.writeUInt8(e, t);
}, a.prototype.write = function(e, t, n, i) {
if (void 0 === t) i = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) i = t, 
n = this.length, t = 0; else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, 
void 0 === i && (i = "utf8")) :(i = n, n = void 0); else {
var r = i;
i = t, t = 0 | n, n = r;
}
var a = this.length - t;
if ((void 0 === n || n > a) && (n = a), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
i || (i = "utf8");
for (var s = !1; ;) switch (i) {
case "hex":
return x(this, e, t, n);

case "utf8":
case "utf-8":
return b(this, e, t, n);

case "ascii":
return k(this, e, t, n);

case "binary":
return w(this, e, t, n);

case "base64":
return $(this, e, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, e, t, n);

default:
if (s) throw new TypeError("Unknown encoding: " + i);
i = ("" + i).toLowerCase(), s = !0;
}
}, a.prototype.toJSON = function() {
return {
type:"Buffer",
data:Array.prototype.slice.call(this._arr || this, 0)
};
};
var Z = 4096;
a.prototype.slice = function(e, t) {
var n = this.length;
e = ~~e, t = void 0 === t ? n :~~t, 0 > e ? (e += n, 0 > e && (e = 0)) :e > n && (e = n), 
0 > t ? (t += n, 0 > t && (t = 0)) :t > n && (t = n), e > t && (t = e);
var i;
if (a.TYPED_ARRAY_SUPPORT) i = a._augment(this.subarray(e, t)); else {
var r = t - e;
i = new a(r, void 0);
for (var s = 0; r > s; s++) i[s] = this[s + e];
}
return i.length && (i.parent = this.parent || this), i;
}, a.prototype.readUIntLE = function(e, t, n) {
e = 0 | e, t = 0 | t, n || I(e, t, this.length);
for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); ) i += this[e + a] * r;
return i;
}, a.prototype.readUIntBE = function(e, t, n) {
e = 0 | e, t = 0 | t, n || I(e, t, this.length);
for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); ) i += this[e + --t] * r;
return i;
}, a.prototype.readUInt8 = function(e, t) {
return t || I(e, 1, this.length), this[e];
}, a.prototype.readUInt16LE = function(e, t) {
return t || I(e, 2, this.length), this[e] | this[e + 1] << 8;
}, a.prototype.readUInt16BE = function(e, t) {
return t || I(e, 2, this.length), this[e] << 8 | this[e + 1];
}, a.prototype.readUInt32LE = function(e, t) {
return t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
}, a.prototype.readUInt32BE = function(e, t) {
return t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
}, a.prototype.readIntLE = function(e, t, n) {
e = 0 | e, t = 0 | t, n || I(e, t, this.length);
for (var i = this[e], r = 1, a = 0; ++a < t && (r *= 256); ) i += this[e + a] * r;
return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i;
}, a.prototype.readIntBE = function(e, t, n) {
e = 0 | e, t = 0 | t, n || I(e, t, this.length);
for (var i = t, r = 1, a = this[e + --i]; i > 0 && (r *= 256); ) a += this[e + --i] * r;
return r *= 128, a >= r && (a -= Math.pow(2, 8 * t)), a;
}, a.prototype.readInt8 = function(e, t) {
return t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) :this[e];
}, a.prototype.readInt16LE = function(e, t) {
t || I(e, 2, this.length);
var n = this[e] | this[e + 1] << 8;
return 32768 & n ? 4294901760 | n :n;
}, a.prototype.readInt16BE = function(e, t) {
t || I(e, 2, this.length);
var n = this[e + 1] | this[e] << 8;
return 32768 & n ? 4294901760 | n :n;
}, a.prototype.readInt32LE = function(e, t) {
return t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
}, a.prototype.readInt32BE = function(e, t) {
return t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
}, a.prototype.readFloatLE = function(e, t) {
return t || I(e, 4, this.length), W.read(this, e, !0, 23, 4);
}, a.prototype.readFloatBE = function(e, t) {
return t || I(e, 4, this.length), W.read(this, e, !1, 23, 4);
}, a.prototype.readDoubleLE = function(e, t) {
return t || I(e, 8, this.length), W.read(this, e, !0, 52, 8);
}, a.prototype.readDoubleBE = function(e, t) {
return t || I(e, 8, this.length), W.read(this, e, !1, 52, 8);
}, a.prototype.writeUIntLE = function(e, t, n, i) {
e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
var r = 1, a = 0;
for (this[t] = 255 & e; ++a < n && (r *= 256); ) this[t + a] = e / r & 255;
return t + n;
}, a.prototype.writeUIntBE = function(e, t, n, i) {
e = +e, t = 0 | t, n = 0 | n, i || j(this, e, t, n, Math.pow(2, 8 * n), 0);
var r = n - 1, a = 1;
for (this[t + r] = 255 & e; --r >= 0 && (a *= 256); ) this[t + r] = e / a & 255;
return t + n;
}, a.prototype.writeUInt8 = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
this[t] = 255 & e, t + 1;
}, a.prototype.writeUInt16LE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8) :R(this, e, t, !0), t + 2;
}, a.prototype.writeUInt16BE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
this[t + 1] = 255 & e) :R(this, e, t, !1), t + 2;
}, a.prototype.writeUInt32LE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, 
this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) :D(this, e, t, !0), 
t + 4;
}, a.prototype.writeUInt32BE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, 
this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) :D(this, e, t, !1), 
t + 4;
}, a.prototype.writeIntLE = function(e, t, n, i) {
if (e = +e, t = 0 | t, !i) {
var r = Math.pow(2, 8 * n - 1);
j(this, e, t, n, r - 1, -r);
}
var a = 0, s = 1, o = 0 > e ? 1 :0;
for (this[t] = 255 & e; ++a < n && (s *= 256); ) this[t + a] = (e / s >> 0) - o & 255;
return t + n;
}, a.prototype.writeIntBE = function(e, t, n, i) {
if (e = +e, t = 0 | t, !i) {
var r = Math.pow(2, 8 * n - 1);
j(this, e, t, n, r - 1, -r);
}
var a = n - 1, s = 1, o = 0 > e ? 1 :0;
for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); ) this[t + a] = (e / s >> 0) - o & 255;
return t + n;
}, a.prototype.writeInt8 = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
}, a.prototype.writeInt16LE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8) :R(this, e, t, !0), t + 2;
}, a.prototype.writeInt16BE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
this[t + 1] = 255 & e) :R(this, e, t, !1), t + 2;
}, a.prototype.writeInt32LE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) :D(this, e, t, !0), 
t + 4;
}, a.prototype.writeInt32BE = function(e, t, n) {
return e = +e, t = 0 | t, n || j(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), 
a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
this[t + 3] = 255 & e) :D(this, e, t, !1), t + 4;
}, a.prototype.writeFloatLE = function(e, t, n) {
return M(this, e, t, !0, n);
}, a.prototype.writeFloatBE = function(e, t, n) {
return M(this, e, t, !1, n);
}, a.prototype.writeDoubleLE = function(e, t, n) {
return z(this, e, t, !0, n);
}, a.prototype.writeDoubleBE = function(e, t, n) {
return z(this, e, t, !1, n);
}, a.prototype.copy = function(e, t, n, i) {
if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), 
t || (t = 0), i > 0 && n > i && (i = n), i === n) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (0 > t) throw new RangeError("targetStart out of bounds");
if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (0 > i) throw new RangeError("sourceEnd out of bounds");
i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
var r, s = i - n;
if (this === e && t > n && i > t) for (r = s - 1; r >= 0; r--) e[r + t] = this[r + n]; else if (1e3 > s || !a.TYPED_ARRAY_SUPPORT) for (r = 0; s > r; r++) e[r + t] = this[r + n]; else e._set(this.subarray(n, n + s), t);
return s;
}, a.prototype.fill = function(e, t, n) {
if (e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");
if (n !== t && 0 !== this.length) {
if (0 > t || t >= this.length) throw new RangeError("start out of bounds");
if (0 > n || n > this.length) throw new RangeError("end out of bounds");
var i;
if ("number" == typeof e) for (i = t; n > i; i++) this[i] = e; else {
var r = V(e.toString()), a = r.length;
for (i = t; n > i; i++) this[i] = r[i % a];
}
return this;
}
}, a.prototype.toArrayBuffer = function() {
if ("undefined" != typeof Uint8Array) {
if (a.TYPED_ARRAY_SUPPORT) return new a(this).buffer;
for (var e = new Uint8Array(this.length), t = 0, n = e.length; n > t; t += 1) e[t] = this[t];
return e.buffer;
}
throw new TypeError("Buffer.toArrayBuffer not supported in this browser");
};
var Q = a.prototype;
a._augment = function(e) {
return e.constructor = a, e._isBuffer = !0, e._set = e.set, e.get = Q.get, e.set = Q.set, 
e.write = Q.write, e.toString = Q.toString, e.toLocaleString = Q.toString, e.toJSON = Q.toJSON, 
e.equals = Q.equals, e.compare = Q.compare, e.indexOf = Q.indexOf, e.copy = Q.copy, 
e.slice = Q.slice, e.readUIntLE = Q.readUIntLE, e.readUIntBE = Q.readUIntBE, e.readUInt8 = Q.readUInt8, 
e.readUInt16LE = Q.readUInt16LE, e.readUInt16BE = Q.readUInt16BE, e.readUInt32LE = Q.readUInt32LE, 
e.readUInt32BE = Q.readUInt32BE, e.readIntLE = Q.readIntLE, e.readIntBE = Q.readIntBE, 
e.readInt8 = Q.readInt8, e.readInt16LE = Q.readInt16LE, e.readInt16BE = Q.readInt16BE, 
e.readInt32LE = Q.readInt32LE, e.readInt32BE = Q.readInt32BE, e.readFloatLE = Q.readFloatLE, 
e.readFloatBE = Q.readFloatBE, e.readDoubleLE = Q.readDoubleLE, e.readDoubleBE = Q.readDoubleBE, 
e.writeUInt8 = Q.writeUInt8, e.writeUIntLE = Q.writeUIntLE, e.writeUIntBE = Q.writeUIntBE, 
e.writeUInt16LE = Q.writeUInt16LE, e.writeUInt16BE = Q.writeUInt16BE, e.writeUInt32LE = Q.writeUInt32LE, 
e.writeUInt32BE = Q.writeUInt32BE, e.writeIntLE = Q.writeIntLE, e.writeIntBE = Q.writeIntBE, 
e.writeInt8 = Q.writeInt8, e.writeInt16LE = Q.writeInt16LE, e.writeInt16BE = Q.writeInt16BE, 
e.writeInt32LE = Q.writeInt32LE, e.writeInt32BE = Q.writeInt32BE, e.writeFloatLE = Q.writeFloatLE, 
e.writeFloatBE = Q.writeFloatBE, e.writeDoubleLE = Q.writeDoubleLE, e.writeDoubleBE = Q.writeDoubleBE, 
e.fill = Q.fill, e.inspect = Q.inspect, e.toArrayBuffer = Q.toArrayBuffer, e;
};
var ee = /[^+\/0-9A-Za-z-_]/g;
}).call(this, "undefined" != typeof global ? global :"undefined" != typeof self ? self :"undefined" != typeof window ? window :{});
}, {
"base64-js":8,
ieee754:10,
isarray:11
} ],
10:[ function(e, t, n) {
n.read = function(e, t, n, i, r) {
var a, s, o = 8 * r - i - 1, u = (1 << o) - 1, l = u >> 1, c = -7, h = n ? r - 1 :0, p = n ? -1 :1, f = e[t + h];
for (h += p, a = f & (1 << -c) - 1, f >>= -c, c += o; c > 0; a = 256 * a + e[t + h], 
h += p, c -= 8) ;
for (s = a & (1 << -c) - 1, a >>= -c, c += i; c > 0; s = 256 * s + e[t + h], h += p, 
c -= 8) ;
if (0 === a) a = 1 - l; else {
if (a === u) return s ? NaN :(f ? -1 :1) * (1 / 0);
s += Math.pow(2, i), a -= l;
}
return (f ? -1 :1) * s * Math.pow(2, a - i);
}, n.write = function(e, t, n, i, r, a) {
var s, o, u, l = 8 * a - r - 1, c = (1 << l) - 1, h = c >> 1, p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) :0, f = i ? 0 :a - 1, d = i ? 1 :-1, g = 0 > t || 0 === t && 0 > 1 / t ? 1 :0;
for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 :0, s = c) :(s = Math.floor(Math.log(t) / Math.LN2), 
t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + h >= 1 ? p / u :p * Math.pow(2, 1 - h), 
t * u >= 2 && (s++, u /= 2), s + h >= c ? (o = 0, s = c) :s + h >= 1 ? (o = (t * u - 1) * Math.pow(2, r), 
s += h) :(o = t * Math.pow(2, h - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + f] = 255 & o, 
f += d, o /= 256, r -= 8) ;
for (s = s << r | o, l += r; l > 0; e[n + f] = 255 & s, f += d, s /= 256, l -= 8) ;
e[n + f - d] |= 128 * g;
};
}, {} ],
11:[ function(e, t, n) {
var i = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == i.call(e);
};
}, {} ],
12:[ function(e, t, n) {
function i() {}
i.prototype = {
on:function(e, t, n) {
var i = this.e || (this.e = {});
return (i[e] || (i[e] = [])).push({
fn:t,
ctx:n
}), this;
},
once:function(e, t, n) {
function i() {
r.off(e, i), t.apply(n, arguments);
}
var r = this;
return i._ = t, this.on(e, i, n);
},
emit:function(e) {
var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length;
for (i; r > i; i++) n[i].fn.apply(n[i].ctx, t);
return this;
},
off:function(e, t) {
var n = this.e || (this.e = {}), i = n[e], r = [];
if (i && t) for (var a = 0, s = i.length; s > a; a++) i[a].fn !== t && i[a].fn._ !== t && r.push(i[a]);
return r.length ? n[e] = r :delete n[e], this;
}
}, t.exports = i;
}, {} ],
13:[ function(e, t, n) {
t.exports = {
default_locale:"en",
languages:[ {
locale:"en",
name:"English",
english_name:"English",
native_name:"English",
flag_url:"https://s3-us-west-1.amazonaws.com/trex-snapshots/flags/default/languages/16/en.png"
} ],
threshold:1,
css:".tml_not_translated { border-bottom: 1px dotted red; } .tml_translated { border-bottom: 1px dotted green; } .tml_fallback { border-bottom: 1px dotted #e90; } .tml_pending { border-bottom: 1px dotted #e90; } .tml_locked { border-bottom: 1px dotted blue; } .tml_language_case { padding:0px 2px; border: 1px dotted blue; border-radius: 2px; } .tml_token { background: #eee; padding:0px 2px; border: 1px dotted #ccc; border-radius: 2px; color: black; }"
};
}, {} ],
14:[ function(e, t, n) {
t.exports = {
enabled:!0,
default_locale:"en",
source_separator:"@:@",
delayed_flush:!1,
debug:!1,
default_tokens:{
html:{
data:{
ndash:"&ndash;",
mdash:"&mdash;",
iexcl:"&iexcl;",
iquest:"&iquest;",
quot:"&quot;",
ldquo:"&ldquo;",
rdquo:"&rdquo;",
lsquo:"&lsquo;",
rsquo:"&rsquo;",
laquo:"&laquo;",
raquo:"&raquo;",
nbsp:"&nbsp;",
lsaquo:"&lsaquo;",
rsaquo:"&rsaquo;",
br:"<br/>",
lbrace:"{",
rbrace:"}",
trade:"&trade;"
},
decoration:{
anchor:"<a href=''>{$0}</a>",
strong:"<strong>{$0}</strong>",
bold:"<strong>{$0}</strong>",
b:"<strong>{$0}</strong>",
em:"<em>{$0}</em>",
italic:"<i>{$0}</i>",
i:"<i>{$0}</i>",
link:"<a href='{$href}' class='{$class}' style='{$style}'>{$0}</a>",
br:"<br>{$0}",
strike:"<strike>{$0}</strike>",
div:"<div id='{$id}' class='{$class}' style='{$style}'>{$0}</div>",
span:"<span id='{$id}' class='{$class}' style='{$style}'>{$0}</span>",
h1:"<h1>{$0}</h1>",
h2:"<h2>{$0}</h2>",
h3:"<h3>{$0}</h3>"
}
},
text:{
data:{
ndash:"\xe2\u20ac\u201c",
mdash:"-",
iexcl:"\xc2\xa1",
iquest:"\xc2\xbf",
quot:'"',
ldquo:"\xe2\u20ac\u0153",
rdquo:"\xe2\u20ac\x9d",
lsquo:"\xe2\u20ac\u02dc",
rsquo:"\xe2\u20ac\u2122",
laquo:"\xc2\xab",
raquo:"\xc2\xbb",
nbsp:" ",
lsaquo:"\xe2\u20ac\xb9",
rsaquo:"\xe2\u20ac\xba",
br:"\n",
lbrace:"{",
rbrace:"}",
trade:"\xe2\u201e\xa2"
},
decoration:{
strong:"{$0}",
bold:"{$0}",
b:"{$0}",
em:"{$0}",
italic:"{$0}",
i:"{$0}",
link:"{$0}{$1}",
br:"\n{$0}",
strike:"{$0}",
div:"{$0}",
span:"{$0}",
h1:"{$0}",
h2:"{$0}",
h3:"{$0}"
}
}
},
localization:{
default_day_names:[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
default_abbr_day_names:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
default_month_names:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
default_abbr_month_names:[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
custom_date_formats:{
"default":"%m/%d/%Y",
short_numeric:"%m/%d",
short_numeric_year:"%m/%d/%y",
long_numeric:"%m/%d/%Y",
verbose:"%A, %B %d, %Y",
monthname:"%B %d",
monthname_year:"%B %d, %Y",
monthname_abbr:"%b %d",
monthname_abbr_year:"%b %d, %Y",
date_time:"%m/%d/%Y at %H%M"
},
token_mapping:{
"%a":"{short_week_day_name}",
"%A":"{week_day_name}",
"%b":"{short_month_name}",
"%B":"{month_name}",
"%p":"{am_pm}",
"%d":"{days}",
"%e":"{day_of_month}",
"%j":"{year_days}",
"%m":"{months}",
"%W":"{week_num}",
"%w":"{week_days}",
"%y":"{short_years}",
"%Y":"{years}",
"%l":"{trimed_hour}",
"%H":"{full_hours}",
"%I":"{short_hours}",
"%M":"{minutes}",
"%S":"{seconds}",
"%s":"{since_epoch}"
}
},
translator_options:{
debug:!1,
debug_format_html:"<span style='font-size:20px;color:red;'>{</span> {$0} <span style='font-size:20px;color:red;'>}</span>",
debug_format:"{{{{$0}}}}",
split_sentences:!0,
decoration_token_format:"[]",
ignore_elements:[ ".notranslate" ],
translatable_elements:null,
nodes:{
ignored:[],
scripts:[ "iframe", "script", "noscript", "style", "audio", "video", "map", "object", "track", "embed", "ruby", "pre" ],
inline:[ "a", "span", "i", "b", "img", "strong", "s", "em", "u", "sub", "sup", "var", "code" ],
"short":[ "i", "b" ],
splitters:[ "br", "hr" ]
},
attributes:{
labels:[ "title", "alt", "placeholder" ]
},
name_mapping:{
b:"bold",
i:"italic",
a:"link",
img:"picture"
},
data_tokens:{
special:{
enable:!0,
regex:/(&[^;]*;)/g
},
date:{
enabled:!0,
formats:[ [ /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+,\s+\d+/g, "{month} {day}, {year}" ], [ /(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+,\s+\d+/g, "{month} {day}, {year}" ], [ /\d+\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec),\s+\d+/g, "{day} {month}, {year}" ], [ /\d+\s+(January|February|March|April|May|June|July|August|September|October|November|December),\s+\d+/g, "{day} {month}, {year}" ] ],
name:"date"
},
rules:[ {
enabled:!0,
name:"phone",
regex:/(\d{1}-)?\d{3}-\d{3}-\d{4}|\d?\(\d{3}\)\s*\d{3}-\d{4}|(\d.)?\d{3}.\d{3}.\d{4}/g
}, {
enabled:!0,
name:"email",
regex:/[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|io|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?/g
}, {
enabled:!0,
name:"price",
regex:/\$\d*(,\d*)*(\.\d*)?/g
}, {
enabled:!0,
name:"fraction",
regex:/\d+\/\d+/g
}, {
enabled:!0,
name:"num",
regex:/\b\d+(,\d*)*(\.\d*)?%?\b/g
} ]
}
},
xmessage:{
decoration_tokens:[ "anchor" ],
data_tokens:[ "param", "number" ],
choice_tokens:[ "choice" ],
map_tokens:[ "map" ],
context_rules:{
number:{
one:"singular",
few:"few",
many:"many",
other:"plural"
},
gender:{
male:"male",
female:"female",
neutral:"neutral",
other:"other"
},
date:{
future:"future",
present:"present",
past:"past"
}
}
},
context_rules:{
number:{
variables:{}
},
gender:{
variables:{
"@gender":"gender"
}
},
genders:{
variables:{
"@genders":function(e) {
var t = [];
return e.forEach(function(e) {
t.push(e.gender);
}), t;
}
}
},
date:{
variables:{}
},
time:{
variables:{}
}
}
};
}, {} ],
15:[ function(e, t, n) {
t.exports = {
locale:"en",
english_name:"English",
flag_url:"https://s3-us-west-1.amazonaws.com/trex-snapshots/flags/default/languages/16/en.png",
contexts:{
list:{
rules:{
other:{
description:"{token} contains at least 2 elements"
},
one:{
description:"{token} contains 1 element",
conditions:"(= 1 @count)",
conditions_expression:[ "=", 1, "@count" ]
}
},
keys:[ "one", "other" ],
default_key:"other",
token_expression:"/.*(items|list)(\\d)*$/",
variables:[ "@count" ],
token_mapping:[ "unsupported", {
one:"{$0}",
other:"{$1}"
} ]
},
date:{
rules:{
future:{
description:"{token} is in the past",
conditions:"(< @date (today))",
conditions_expression:[ "<", "@date", [ "today" ] ]
},
present:{
description:"{token} is in the present",
conditions:"(= @date (today))",
conditions_expression:[ "=", "@date", [ "today" ] ]
},
past:{
description:"{token} is in the future",
conditions:"(> @date (today))",
conditions_expression:[ ">", "@date", [ "today" ] ]
}
},
keys:[ "past", "present", "future" ],
default_key:"present",
token_expression:"/.*(date|time)(\\d)*$/",
variables:[ "@date" ],
token_mapping:[ "unsupported", "unsupported", {
past:"{$0}",
present:"{$1}",
future:"{$2}"
} ]
},
number:{
rules:{
one:{
description:"{token} is 1",
examples:"1",
conditions:"(= @n 1)",
conditions_expression:[ "=", "@n", 1 ]
},
other:{
description:"{token} is not 1",
examples:"0, 2-999; 1.2, 2.07..."
}
},
keys:[ "one", "other" ],
default_key:"other",
token_expression:"/.*(count|num|minutes|seconds|hours|sum|total)(\\d)*$/",
variables:[ "@n" ],
token_mapping:[ {
one:"{$0}",
other:"{$0::plural}"
}, {
one:"{$0}",
other:"{$1}"
} ]
},
gender:{
rules:{
female:{
description:"{token} is a female",
conditions:"(= 'female' @gender)",
conditions_expression:[ "=", "female", "@gender" ]
},
male:{
description:"{token} is a male",
conditions:"(= 'male' @gender)",
conditions_expression:[ "=", "male", "@gender" ]
},
other:{
description:"{token}'s gender is unknown"
}
},
keys:[ "male", "female", "other" ],
default_key:"other",
token_expression:"/.*(user|translator|profile|actor|target)(\\d)*$/",
variables:[ "@gender" ],
token_mapping:[ {
other:"{$0}"
}, {
male:"{$0}",
female:"{$1}",
other:"{$0}/{$1}"
}, {
male:"{$0}",
female:"{$1}",
other:"{$2}"
} ]
},
genders:{
rules:{
female:{
description:"{token} contains 1 female",
conditions:"(&& (= 1 (count @genders)) (all @genders 'female'))",
conditions_expression:[ "&&", [ "=", 1, [ "count", "@genders" ] ], [ "all", "@genders", "female" ] ]
},
male:{
description:"{token} contains 1 male",
conditions:"(&& (= 1 (count @genders)) (all @genders 'male'))",
conditions_expression:[ "&&", [ "=", 1, [ "count", "@genders" ] ], [ "all", "@genders", "male" ] ]
},
other:{
description:"{token} contains at least 2 people"
},
unknown:{
description:"{token} contains 1 person with unknown gender",
conditions:"(&& (= 1 (count @genders)) (all @genders 'unknown'))",
conditions_expression:[ "&&", [ "=", 1, [ "count", "@genders" ] ], [ "all", "@genders", "unknown" ] ]
}
},
keys:[ "male", "female", "unknown", "other" ],
default_key:"other",
token_expression:"/.*(users|profiles|actors|targets)(\\d)*$/",
variables:[ "@genders" ],
token_mapping:[ {
male:"{$0}",
female:"{$0}",
unknown:"{$0}",
other:"{$0}"
}, {
male:"{$0}",
female:"{$0}",
unknown:"{$0}",
other:"{$1}"
}, {
male:"{$0}",
female:"{$1}",
unknown:"{$0}/{$1}",
other:"{$2}"
}, {
male:"{$0}",
female:"{$1}",
unknown:"{$2}",
other:"{$3}"
} ]
}
},
cases:{
times:{
rules:[ {
description:"replace '1' with 'once'",
conditions:"(= 1 @value)",
conditions_expression:[ "=", 1, "@value" ],
operations:"(replace '1' 'once' @value)",
operations_expression:[ "replace", "1", "once", "@value" ]
}, {
description:"replace '2' with 'twice'",
conditions:"(= 2 @value)",
conditions_expression:[ "=", 2, "@value" ],
operations:"(replace '2' 'twice' @value)",
operations_expression:[ "replace", "2", "twice", "@value" ]
}, {
description:"in all other cases, append x times",
conditions:"(true)",
conditions_expression:[ "true" ],
operations:"(append ' times' @value)",
operations_expression:[ "append", " times", "@value" ]
} ],
latin_name:"Iteration",
description:"The iteration form of the cardinal numbers",
application:"phrase"
},
plural:{
rules:[ {
description:"Uncountable word",
conditions:"(in 'sheep,fish,series,species,money,rice,information,equipment' @value)",
conditions_expression:[ "in", "sheep,fish,series,species,money,rice,information,equipment", "@value" ],
operations:"@value",
operations_expression:"@value"
}, {
description:"Irregular word",
conditions:"(= 'move' @value)",
conditions_expression:[ "=", "move", "@value" ],
operations:"(quote 'moves')",
operations_expression:[ "quote", "moves" ]
}, {
description:"Irregular word",
conditions:"(= 'sex' @value)",
conditions_expression:[ "=", "sex", "@value" ],
operations:"(quote 'sexes')",
operations_expression:[ "quote", "sexes" ]
}, {
description:"Irregular word",
conditions:"(= 'child' @value)",
conditions_expression:[ "=", "child", "@value" ],
operations:"(quote 'children')",
operations_expression:[ "quote", "children" ]
}, {
description:"Irregular word",
conditions:"(= 'person' @value)",
conditions_expression:[ "=", "person", "@value" ],
operations:"(quote 'people')",
operations_expression:[ "quote", "people" ]
}, {
conditions:"(match '/(quiz)$/i' @value)",
conditions_expression:[ "match", "/(quiz)$/i", "@value" ],
operations:"(replace '/(quiz)$/i' '$1zes' @value)",
operations_expression:[ "replace", "/(quiz)$/i", "$1zes", "@value" ]
}, {
conditions:"(match '/^(ox)$/i' @value)",
conditions_expression:[ "match", "/^(ox)$/i", "@value" ],
operations:"(replace '/^(ox)$/i' '$1en' @value)",
operations_expression:[ "replace", "/^(ox)$/i", "$1en", "@value" ]
}, {
conditions:"(match '/([m|l])ouse$/i' @value)",
conditions_expression:[ "match", "/([m|l])ouse$/i", "@value" ],
operations:"(replace '/([m|l])ouse$/i' '$1ice' @value)",
operations_expression:[ "replace", "/([m|l])ouse$/i", "$1ice", "@value" ]
}, {
conditions:"(match '/(matr|vert|ind)ix|ex$/i' @value)",
conditions_expression:[ "match", "/(matr|vert|ind)ix|ex$/i", "@value" ],
operations:"(replace '/(matr|vert|ind)ix|ex$/i' '$1ices' @value)",
operations_expression:[ "replace", "/(matr|vert|ind)ix|ex$/i", "$1ices", "@value" ]
}, {
conditions:"(match '/(x|ch|ss|sh)$/i' @value)",
conditions_expression:[ "match", "/(x|ch|ss|sh)$/i", "@value" ],
operations:"(replace '/(x|ch|ss|sh)$/i' '$1es' @value)",
operations_expression:[ "replace", "/(x|ch|ss|sh)$/i", "$1es", "@value" ]
}, {
conditions:"(match '/([^aeiouy]|qu)y$/i' @value)",
conditions_expression:[ "match", "/([^aeiouy]|qu)y$/i", "@value" ],
operations:"(replace '/([^aeiouy]|qu)y$/i' '$1ies' @value)",
operations_expression:[ "replace", "/([^aeiouy]|qu)y$/i", "$1ies", "@value" ]
}, {
conditions:"(match '/([^aeiouy]|qu)ies$/i' @value)",
conditions_expression:[ "match", "/([^aeiouy]|qu)ies$/i", "@value" ],
operations:"(replace '/([^aeiouy]|qu)ies$/i' '$1y' @value)",
operations_expression:[ "replace", "/([^aeiouy]|qu)ies$/i", "$1y", "@value" ]
}, {
conditions:"(match '/(hive)$/i' @value)",
conditions_expression:[ "match", "/(hive)$/i", "@value" ],
operations:"(replace '/(hive)$/i' '$1s' @value)",
operations_expression:[ "replace", "/(hive)$/i", "$1s", "@value" ]
}, {
conditions:"(match '/(?:([^f])fe|([lr])f)$/i' @value)",
conditions_expression:[ "match", "/(?:([^f])fe|([lr])f)$/i", "@value" ],
operations:"(replace '/(?:([^f])fe|([lr])f)$/i' '$1$2ves' @value)",
operations_expression:[ "replace", "/(?:([^f])fe|([lr])f)$/i", "$1$2ves", "@value" ]
}, {
conditions:"(match '/sis$/i' @value)",
conditions_expression:[ "match", "/sis$/i", "@value" ],
operations:"(replace '/sis$/i' 'ses' @value)",
operations_expression:[ "replace", "/sis$/i", "ses", "@value" ]
}, {
conditions:"(match '/([ti])um$/i' @value)",
conditions_expression:[ "match", "/([ti])um$/i", "@value" ],
operations:"(replace '/([ti])um$/i' '$1a' @value)",
operations_expression:[ "replace", "/([ti])um$/i", "$1a", "@value" ]
}, {
conditions:"(match '/(buffal|tomat|potat)o$/i' @value)",
conditions_expression:[ "match", "/(buffal|tomat|potat)o$/i", "@value" ],
operations:"(replace '/(buffal|tomat|potat)o$/i' '$1oes' @value)",
operations_expression:[ "replace", "/(buffal|tomat|potat)o$/i", "$1oes", "@value" ]
}, {
conditions:"(match '/(bu)s$/i' @value)",
conditions_expression:[ "match", "/(bu)s$/i", "@value" ],
operations:"(replace '/(bu)s$/i' '$1ses' @value)",
operations_expression:[ "replace", "/(bu)s$/i", "$1ses", "@value" ]
}, {
conditions:"(match '/(alias|status)$/i' @value)",
conditions_expression:[ "match", "/(alias|status)$/i", "@value" ],
operations:"(replace '/(alias|status)$/i' '$1es' @value)",
operations_expression:[ "replace", "/(alias|status)$/i", "$1es", "@value" ]
}, {
conditions:"(match '/(octop)us$/i' @value)",
conditions_expression:[ "match", "/(octop)us$/i", "@value" ],
operations:"(replace '/(octop)us$/i' '$1i' @value)",
operations_expression:[ "replace", "/(octop)us$/i", "$1i", "@value" ]
}, {
conditions:"(match '/(ax|test)is$/i' @value)",
conditions_expression:[ "match", "/(ax|test)is$/i", "@value" ],
operations:"(replace '/(ax|test)is$/i' '$1es' @value)",
operations_expression:[ "replace", "/(ax|test)is$/i", "$1es", "@value" ]
}, {
conditions:"(match '/us$/i' @value)",
conditions_expression:[ "match", "/us$/i", "@value" ],
operations:"(replace '/us$/i' '$1es' @value)",
operations_expression:[ "replace", "/us$/i", "$1es", "@value" ]
}, {
conditions:"(match '/s$/i' @value)",
conditions_expression:[ "match", "/s$/i", "@value" ],
operations:"(replace '/s$/i' 's' @value)",
operations_expression:[ "replace", "/s$/i", "s", "@value" ]
}, {
conditions:"(match '/$/' @value)",
conditions_expression:[ "match", "/$/", "@value" ],
operations:"(replace '/$/' 's' @value)",
operations_expression:[ "replace", "/$/", "s", "@value" ]
} ],
latin_name:"Plural",
description:"Converts singular form to plural",
application:"phrase"
},
ordinal:{
rules:[ {
description:"replace 1 with 'first'",
conditions:"(= 1 @value)",
conditions_expression:[ "=", 1, "@value" ],
operations:"(replace 1 'first' @value)",
operations_expression:[ "replace", 1, "first", "@value" ]
}, {
description:"replace 2 with 'second'",
conditions:"(= 2 @value)",
conditions_expression:[ "=", 2, "@value" ],
operations:"(replace 2 'first' @value)",
operations_expression:[ "replace", 2, "first", "@value" ]
}, {
description:"replace 3 with 'third'",
conditions:"(= 3 @value)",
conditions_expression:[ "=", 3, "@value" ],
operations:"(replace 3 'third' @value)",
operations_expression:[ "replace", 3, "third", "@value" ]
} ],
latin_name:"Ordinal",
description:"The adjective form of the cardinal numbers",
application:"phrase"
},
ord:{
rules:[ {
description:"append 'st' if value ends in 1, but not in 11",
examples:"1, 21, 31, 41, 101, 121...",
conditions:"(&& (match '/1$/' @value) (! (match '/11$/' @value)))",
conditions_expression:[ "&&", [ "match", "/1$/", "@value" ], [ "!", [ "match", "/11$/", "@value" ] ] ],
operations:"(append 'st' @value)",
operations_expression:[ "append", "st", "@value" ]
}, {
description:"append 'nd' if value ends in 2, but not in 12",
examples:"2, 22, 32, 42, 102, 122...",
conditions:"(&& (match '/2$/' @value) (! (match '/12$/' @value)))",
conditions_expression:[ "&&", [ "match", "/2$/", "@value" ], [ "!", [ "match", "/12$/", "@value" ] ] ],
operations:"(append 'nd' @value)",
operations_expression:[ "append", "nd", "@value" ]
}, {
description:"append 'nd' if value ends in 3, but not in 13",
examples:"3, 23, 33, 43, 103, 123...",
conditions:"(&& (match '/3$/' @value) (! (match '/13$/' @value)))",
conditions_expression:[ "&&", [ "match", "/3$/", "@value" ], [ "!", [ "match", "/13$/", "@value" ] ] ],
operations:"(append 'rd' @value)",
operations_expression:[ "append", "rd", "@value" ]
}, {
description:"append 'th' in all other cases",
examples:"0, 4, 5, 6, 7, 8, 9, 11, 12, 13, 111, 113...",
conditions:"(true)",
conditions_expression:[ "true" ],
operations:"(append 'th' @value)",
operations_expression:[ "append", "th", "@value" ]
} ],
latin_name:"Ordinal",
description:"The adjective form of the cardinal numbers",
application:"phrase"
},
singular:{
rules:[ {
description:"Uncountable word",
conditions:"(in 'sheep,fish,series,species,money,rice,information,equipment' @value)",
conditions_expression:[ "in", "sheep,fish,series,species,money,rice,information,equipment", "@value" ],
operations:"@value",
operations_expression:"@value"
}, {
description:"Irregular word",
conditions:"(= 'moves' @value)",
conditions_expression:[ "=", "moves", "@value" ],
operations:"(quote 'move')",
operations_expression:[ "quote", "move" ]
}, {
description:"Irregular word",
conditions:"(= 'sexes' @value)",
conditions_expression:[ "=", "sexes", "@value" ],
operations:"(quote 'sex')",
operations_expression:[ "quote", "sex" ]
}, {
description:"Irregular word",
conditions:"(= 'children' @value)",
conditions_expression:[ "=", "children", "@value" ],
operations:"(quote 'child')",
operations_expression:[ "quote", "child" ]
}, {
description:"Irregular word",
conditions:"(= 'people' @value)",
conditions_expression:[ "=", "people", "@value" ],
operations:"(quote 'person')",
operations_expression:[ "quote", "person" ]
}, {
conditions:"(match '/(n)ews$/i' @value)",
conditions_expression:[ "match", "/(n)ews$/i", "@value" ],
operations:"(replace '/(n)ews$/i' '$1ews' @value)",
operations_expression:[ "replace", "/(n)ews$/i", "$1ews", "@value" ]
}, {
conditions:"(match '/([ti])a$/i' @value)",
conditions_expression:[ "match", "/([ti])a$/i", "@value" ],
operations:"(replace '/([ti])a$/i' '$1um' @value)",
operations_expression:[ "replace", "/([ti])a$/i", "$1um", "@value" ]
}, {
conditions:"(match '/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i' @value)",
conditions_expression:[ "match", "/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i", "@value" ],
operations:"(replace '/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i' '$1$2sis' @value)",
operations_expression:[ "replace", "/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i", "$1$2sis", "@value" ]
}, {
conditions:"(match '/(^analy)ses$/i' @value)",
conditions_expression:[ "match", "/(^analy)ses$/i", "@value" ],
operations:"(replace '/(^analy)ses$/i' '$1sis' @value)",
operations_expression:[ "replace", "/(^analy)ses$/i", "$1sis", "@value" ]
}, {
conditions:"(match '/([^f])ves$/i' @value)",
conditions_expression:[ "match", "/([^f])ves$/i", "@value" ],
operations:"(replace '/([^f])ves$/i' '$1fe' @value)",
operations_expression:[ "replace", "/([^f])ves$/i", "$1fe", "@value" ]
}, {
conditions:"(match '/(hive)s$/i' @value)",
conditions_expression:[ "match", "/(hive)s$/i", "@value" ],
operations:"(replace '/(hive)s$/i' '$1' @value)",
operations_expression:[ "replace", "/(hive)s$/i", "$1", "@value" ]
}, {
conditions:"(match '/(tive)s$/i' @value)",
conditions_expression:[ "match", "/(tive)s$/i", "@value" ],
operations:"(replace '/(tive)s$/i' '$1' @value)",
operations_expression:[ "replace", "/(tive)s$/i", "$1", "@value" ]
}, {
conditions:"(match '/([lr])ves$/i' @value)",
conditions_expression:[ "match", "/([lr])ves$/i", "@value" ],
operations:"(replace '/([lr])ves$/i' '$1f' @value)",
operations_expression:[ "replace", "/([lr])ves$/i", "$1f", "@value" ]
}, {
conditions:"(match '/([^aeiouy]|qu)ies$/i' @value)",
conditions_expression:[ "match", "/([^aeiouy]|qu)ies$/i", "@value" ],
operations:"(replace '/([^aeiouy]|qu)ies$/i' '$1y' @value)",
operations_expression:[ "replace", "/([^aeiouy]|qu)ies$/i", "$1y", "@value" ]
}, {
conditions:"(match '/(s)eries$/i' @value)",
conditions_expression:[ "match", "/(s)eries$/i", "@value" ],
operations:"(replace '/(s)eries$/i' '$1eries' @value)",
operations_expression:[ "replace", "/(s)eries$/i", "$1eries", "@value" ]
}, {
conditions:"(match '/(m)ovies$/i' @value)",
conditions_expression:[ "match", "/(m)ovies$/i", "@value" ],
operations:"(replace '/(m)ovies$/i' '$1ovie' @value)",
operations_expression:[ "replace", "/(m)ovies$/i", "$1ovie", "@value" ]
}, {
conditions:"(match '/(x|ch|ss|sh)es$/i' @value)",
conditions_expression:[ "match", "/(x|ch|ss|sh)es$/i", "@value" ],
operations:"(replace '/(x|ch|ss|sh)es$/i' '$1' @value)",
operations_expression:[ "replace", "/(x|ch|ss|sh)es$/i", "$1", "@value" ]
}, {
conditions:"(match '/([m|l])ice$/i' @value)",
conditions_expression:[ "match", "/([m|l])ice$/i", "@value" ],
operations:"(replace '/([m|l])ice$/i' '$1ouse' @value)",
operations_expression:[ "replace", "/([m|l])ice$/i", "$1ouse", "@value" ]
}, {
conditions:"(match '/(bus)es$/i' @value)",
conditions_expression:[ "match", "/(bus)es$/i", "@value" ],
operations:"(replace '/(bus)es$/i' '$1' @value)",
operations_expression:[ "replace", "/(bus)es$/i", "$1", "@value" ]
}, {
conditions:"(match '/(o)es$/i' @value)",
conditions_expression:[ "match", "/(o)es$/i", "@value" ],
operations:"(replace '/(o)es$/i' '$1' @value)",
operations_expression:[ "replace", "/(o)es$/i", "$1", "@value" ]
}, {
conditions:"(match '/(shoe)s$/i' @value)",
conditions_expression:[ "match", "/(shoe)s$/i", "@value" ],
operations:"(replace '/(shoe)s$/i' '$1' @value)",
operations_expression:[ "replace", "/(shoe)s$/i", "$1", "@value" ]
}, {
conditions:"(match '/(cris|ax|test)es$/i' @value)",
conditions_expression:[ "match", "/(cris|ax|test)es$/i", "@value" ],
operations:"(replace '/(cris|ax|test)es$/i' '$1is' @value)",
operations_expression:[ "replace", "/(cris|ax|test)es$/i", "$1is", "@value" ]
}, {
conditions:"(match '/(octop|vir)i$/i' @value)",
conditions_expression:[ "match", "/(octop|vir)i$/i", "@value" ],
operations:"(replace '/(octop|vir)i$/i' '$1us' @value)",
operations_expression:[ "replace", "/(octop|vir)i$/i", "$1us", "@value" ]
}, {
conditions:"(match '/(alias|status)es$/i' @value)",
conditions_expression:[ "match", "/(alias|status)es$/i", "@value" ],
operations:"(replace '/(alias|status)es$/i' '$1' @value)",
operations_expression:[ "replace", "/(alias|status)es$/i", "$1", "@value" ]
}, {
conditions:"(match '/^(ox)en$/i' @value)",
conditions_expression:[ "match", "/^(ox)en$/i", "@value" ],
operations:"(replace '/^(ox)en$/i' '$1' @value)",
operations_expression:[ "replace", "/^(ox)en$/i", "$1", "@value" ]
}, {
conditions:"(match '/(vert|ind)ices$/i' @value)",
conditions_expression:[ "match", "/(vert|ind)ices$/i", "@value" ],
operations:"(replace '/(vert|ind)ices$/i' '$1ex' @value)",
operations_expression:[ "replace", "/(vert|ind)ices$/i", "$1ex", "@value" ]
}, {
conditions:"(match '/(matr)ices$/i' @value)",
conditions_expression:[ "match", "/(matr)ices$/i", "@value" ],
operations:"(replace '/(matr)ices$/i' '$1ix' @value)",
operations_expression:[ "replace", "/(matr)ices$/i", "$1ix", "@value" ]
}, {
conditions:"(match '/(quiz)zes$/i' @value)",
conditions_expression:[ "match", "/(quiz)zes$/i", "@value" ],
operations:"(replace '/(quiz)zes$/i' '$1' @value)",
operations_expression:[ "replace", "/(quiz)zes$/i", "$1", "@value" ]
}, {
conditions:"(match '/(us)es$/i' @value)",
conditions_expression:[ "match", "/(us)es$/i", "@value" ],
operations:"(replace '/(us)es$/i' '$1' @value)",
operations_expression:[ "replace", "/(us)es$/i", "$1", "@value" ]
}, {
conditions:"(match '/s$/i' @value)",
conditions_expression:[ "match", "/s$/i", "@value" ],
operations:"(replace '/s$/i' '' @value)",
operations_expression:[ "replace", "/s$/i", "", "@value" ]
} ],
latin_name:"Singular",
description:"Converts plural form to singular",
application:"phrase"
},
pos:{
rules:[ {
description:"if value ends in s, append '",
conditions:"(match '/s$/' @value)",
conditions_expression:[ "match", "/s$/", "@value" ],
operations:'(append "\'" @value)',
operations_expression:[ "append", "'", "@value" ]
}, {
description:"in all other cases, append 's",
conditions:"(true)",
conditions_expression:[ "true" ],
operations:'(append "\'s" @value)',
operations_expression:[ "append", "'s", "@value" ]
} ],
latin_name:"Possessive",
description:"Used to indicate possession (i.e., ownership). It is usually created by adding 's to the word",
application:"phrase"
}
}
};
}, {} ],
16:[ function(e, t, n) {
var i = function() {};
i.prototype = {
get:function(e, t, n) {
throw new Error("Must be implemented by the extending class");
},
post:function(e, t, n) {
throw new Error("Must be implemented by the extending class");
}
}, t.exports = i;
}, {} ],
17:[ function(e, t, n) {
var i = e("./logger"), r = e("./utils"), a = e("./configuration"), s = e("./api_adapters/base"), o = "/v1/", u = function(e) {
this.application = e, this.cache = a.getCache();
var t = a.getApiAdapter(a.api);
t.prototype = r.extend(new s(), t.prototype), this.adapter = new t();
};
u.prototype = {
normalizeParams:function(e, t, n, i) {
return r.isFunction(t) ? (i = t, t = {}) :r.isFunction(n) && (i = n, n = {}), n = n || {}, 
{
path:e,
params:t,
options:n,
callback:i
};
},
getReleaseVersion:function(e) {
new Date().getTime(), this.application.getCdnHost() + "/" + this.application.key + "/version.json";
e("0");
},
updateReleaseVersion:function(e, t) {
var n = this;
n.getReleaseVersion(function(r) {
n.cache.storeVersion(r, function(r) {
e != r && (i.debug("Changing version from " + e + " to " + r), n.cache.clear()), 
t(r);
});
});
},
getCacheVersion:function(e) {
if (this.cache.adapter && this.cache.adapter.config && this.cache.adapter.config.version && (this.cache.version = this.cache.adapter.config.version), 
this.cache.version && "undefined" != this.cache.version) return void e(this.cache.version);
var t = this;
this.cache.fetchVersion(function(n) {
var r = !1;
if (n.t) {
var a = n.t + t.cache.getVersionCheckInterval(), s = new Date().getTime();
if (s > a) i.debug("Cache version is outdated and needs a refresh now"), r = !0; else {
var o = Math.round((a - s) / 1e3);
i.debug("Cache version is up to date, will be checked in: " + o + "s");
}
} else i.debug("Cache version has no timestamp, needs a refresh"), r = !0;
r ? t.updateReleaseVersion(n.version, function(t) {
e(t);
}) :(t.cache.setVersion(n.version), e(n.version));
});
},
fetchFromCdn:function(e, t) {
var n = this;
if ("0" == n.cache.version) return void t(null, null);
var i = this.application.getCdnHost() + "/" + this.application.key + "/" + this.cache.version + r.normalizePath(e) + ".json";
n.adapter.get(i, {}, function(e, n, i) {
(!i || i.match(/xml/)) && (e = "Not found"), e || !i ? t(e, {}) :t(null, i);
});
},
get:function(e, t, n, i) {
var r = this.normalizeParams(e, t, n, i);
r.options.method = "get", this.api(r.path, r.params, r.options, r.callback);
},
post:function(e, t, n, i) {
var r = this.normalizeParams(e, t, n, i);
r.options.method = "post", this.api(r.path, r.params, r.options, r.callback);
},
isLiveApiRequest:function() {
return this.application.token ? this.application.isInlineModeEnabled() :!1;
},
isCacheEnabled:function(e) {
return "post" == e.method ? !1 :e.cache_key && this.cache && this.cache.adapter;
},
api:function(e, t, n, i) {
r.extend(t, {
access_token:this.application.token
});
var a = this.application.getHost() + o + e, s = this, u = function(e, t, n) {
!e && n ? i(e, JSON.parse(n)) :i(e, n);
};
return s.isLiveApiRequest() ? void ("post" == n.method ? s.adapter.post(a, t, u) :s.adapter.get(a, t, u)) :s.isCacheEnabled(n) ? void s.getCacheVersion(function(e) {
0 === parseInt(e) ? u("No release has been published") :s.cache.fetch(n.cache_key, function(e) {
s.fetchFromCdn(n.cache_key, e);
}, function(e, t) {
if (!e && t) {
try {
t = JSON.parse(t);
} catch (n) {
return i(n);
}
i(null, t);
} else i(e);
});
}) :void u("Cache is disabled");
}
}, t.exports = u;
}, {
"./api_adapters/base":16,
"./configuration":21,
"./logger":29,
"./utils":51
} ],
18:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./logger"), s = e("./language"), o = e("./source"), u = e("./api_client"), l = "https://api.translationexchange.com", c = "https://cdn.translationexchange.com", h = function(e) {
i.extend(this, e), this.languages = [];
for (var t in e.languages || []) this.languages.push(new s(i.extend(t, {
application:this
})));
this.default_locale = r.default_locale, this.languages_by_locale = {}, this.sources_by_key = {}, 
this.missing_keys_by_source = {}, this.translation_keys = {};
};
h.prototype = {
getHost:function() {
return this.host || l;
},
getCdnHost:function() {
return this.cdn_host || c;
},
extend:function(e) {
i.extend(this, e);
},
isDisabled:function() {
return this.disabled;
},
disable:function() {
this.disabled = !0;
},
addLanguage:function(e) {
return e.application = this, this.languages_by_locale[e.locale] = new s(e), this.getLanguage(e.locale);
},
getLanguage:function(e) {
var t = this.languages_by_locale[e];
return t && (t.application = this), t;
},
changeLanguage:function(e, t) {
var n = this;
n.current_locale = e, n.sources_by_key = {}, this.initData([ n.current_locale ], [ n.current_source ], function() {
t && t(n.getLanguage(n.current_locale));
});
},
getCurrentLanguage:function() {
var e = this.current_locale;
if (!e) return this.getDefaultLanguage();
var t = this.getLanguage(e);
return t ? t :(e = e.split("-")[0], t = this.getLanguage(e), t || this.getDefaultLanguage());
},
getDefaultLanguage:function() {
var e = this.getLanguage(this.default_locale);
return e || (this.configDefaultLanguage || (this.configDefaultLanguage = new s(r.getDefaultLanguage())), 
e = this.configDefaultLanguage), e.application = this, e;
},
addSource:function(e, t, n) {
return e ? (e = new o({
source:e
}), e.application = this, e.updateTranslations(t, n), this.sources_by_key[e.source] = e, 
this.getSource(e.source)) :void 0;
},
getSource:function(e) {
return this.sources_by_key[e];
},
removeSource:function(e) {
delete this.sources_by_key[e];
},
getCurrentSource:function() {
return this.current_source ? this.sources_by_key[this.current_source] :null;
},
isFeatureEnabled:function(e) {
return this.features && this.features[e];
},
getApiClient:function() {
return this.api_client || (this.api_client = new u(this)), this.api_client;
},
init:function(e, t) {
e = e || {};
var n = this;
n.current_translator = e.current_translator, n.current_source = e.current_source, 
i.isFunction(n.current_source) && (n.current_source = n.current_source()), n.getApiClient().get("projects/" + n.key + "/definition", {
locale:e.current_locale || (e.accepted_locales ? e.accepted_locales.join(",") :"en"),
source:n.current_source,
ignored:!0
}, {
cache_key:"application"
}, function(a, s) {
if (n.default_locale = n.default_locale || "en", a || s.error) return n.extend(r.getDefaultApplication()), 
n.addLanguage(r.getDefaultLanguage()), void t(null);
n.extend(s), s.settings && i.merge(r, s.settings), n.loadExtension(s), n.current_locale = n.getSupportedLocale(e.current_locale, e.accepted_locales, n.default_locale);
var o = [ n.default_locale ];
n.current_locale != n.default_locale && o.push(n.current_locale);
var u = [ n.current_source || "index" ];
n.initData(o, u, t);
});
},
getSupportedLocale:function(e, t, n) {
return this.isSupportedLocale(e) ? e :this.getPreferredLocale(t, this.languages) || n;
},
isSupportedLocale:function(e) {
if (!this.languages) return !1;
for (var t = 0; t < this.languages.length; t++) if (this.languages[t].locale == e) return !0;
return !1;
},
loadExtension:function(e) {
if (e = e.extensions) {
var t = this, n = t.default_locale, i = r.getCache();
t.isInlineModeEnabled() && (i = null), e.languages && Object.keys(e.languages).forEach(function(r) {
r != t.default_locale && (n = r), i && i.store(t.getLanguageKey(r), JSON.stringify(e.languages[r])), 
t.addLanguage(new s(e.languages[r]));
}), e.sources && Object.keys(e.sources).forEach(function(r) {
i && i.store(t.getSourceKey(r, n), JSON.stringify(e.sources[r])), t.addSource(r, n, e.sources[r]);
});
}
},
initData:function(e, t, n) {
var i = this;
i.loadLanguages(e, function() {
t ? i.loadSources(t, i.current_locale, function(e) {
e.length > 0 && e[0] && e[0].sources && e[0].sources.length > 0 ? i.loadSources(e[0].sources, i.current_locale, function(e) {
n(null);
}) :n(null);
}) :n(null);
});
},
getPreferredLocale:function(e, t) {
var n, i = (t || []).map(function(e) {
return e.locale;
});
return (e || []).forEach(function(e) {
var t = new RegExp(e + "|" + e.replace(/-\w+$/, ""));
i.forEach(function(e) {
!n && e.match(t) && (n = e);
});
}), n;
},
loadLanguages:function(e, t) {
var n = {}, r = this;
e.forEach(function(e) {
r.languages_by_locale[e] || (n[e] = function(t) {
r.getApiClient().get("languages/" + e + "/definition", {}, {
cache_key:r.getLanguageKey(e)
}, function(e, n) {
return e ? void t(e, null) :void t(null, new s(i.extend(n, {
application:r
})));
});
});
}), i.parallel(n, function(e, n) {
if (e) throw console.log(e), e;
Object.keys(n).forEach(function(e) {
r.addLanguage(n[e]);
}), t();
});
},
getLanguageKey:function(e) {
return e + "/language";
},
getSourceKey:function(e, t) {
return t + "/sources/" + e;
},
getSourceName:function(e) {
return e.call && e() || e;
},
loadSources:function(e, t, n) {
var r = {}, a = this;
e.forEach(function(e) {
e = a.getSourceName(e), a.sources_by_key[e] || (r[e] = function(n) {
var r = i.generateSourceKey(e);
a.getApiClient().get("sources/" + r + "/translations", {
locale:t,
ignored:!0,
all:!0,
app_id:a.key
}, {
cache_key:t + "/sources" + i.normalizePath(e)
}, function(e, t) {
return e ? void n(e, null) :void n(null, t);
});
});
}), i.parallel(r, function(e, i) {
var r = [];
i && Object.keys(i).forEach(function(e) {
r.push(i[e]), a.addSource(e, t, i[e]);
}), n(r);
});
},
isInlineModeEnabled:function() {
return this.current_translator ? this.current_translator.inline :!1;
},
addMissingElement:function(e, t) {
(!r.isFileCache() || this.isInlineModeEnabled()) && (this.missing_keys_by_source || (this.missing_keys_by_source = {}), 
this.missing_keys_by_source[e] || (this.missing_keys_by_source[e] = {}), null !== t && (this.missing_keys_by_source[e][t.key] = t));
},
verifySourcePath:function(e, t) {
this.extensions && this.extensions.sources && null === this.extensions.sources[e] && this.addMissingElement(t, null);
},
registerMissingTranslationKey:function(e, t) {
this.addMissingElement(e, t);
var n = this;
r.delayed_flush && !n.submit_scheduled && (n.submit_scheduled = !0, setTimeout(function() {
n.submitMissingTranslationKeys();
}, 3e3));
},
submitMissingTranslationKeys:function(e) {
if (!this.missing_keys_by_source) return void (e && e(!1));
if (!this.isInlineModeEnabled()) return void (e && e(!1));
var t = i.keys(this.missing_keys_by_source);
if (0 === t.length) return void (e && e(!1));
a.debug("Submitting missing translation keys...");
for (var n = [], s = [ "key", "label", "description", "locale", "level", "syntax" ], o = 0; o < t.length; o++) {
for (var u = t[o], l = i.keys(this.missing_keys_by_source[u]), c = [], h = 0; h < l.length; h++) {
for (var p = this.missing_keys_by_source[u][l[h]], f = {}, d = 0; d < s.length; d++) {
var g = s[d];
p[g] && (f[g] = p[g]);
}
c.push(f);
}
n.push({
source:u,
keys:c
});
}
var m = this;
m.missing_keys_by_source = null, this.getApiClient().post("sources/register_keys", {
source_keys:JSON.stringify(n),
app_id:m.key
}, function() {
i.keys(m.languages_by_locale).forEach(function(e) {
t.forEach(function(t) {
t = t.split(r.source_separator), t.forEach(function(t) {
m.removeSource(t), r.getCache().del(e + "/sources/" + t, function() {});
});
});
}), e && e(!0);
});
},
getTranslationKey:function(e) {
return this.translation_keys[e];
},
cacheTranslationKey:function(e) {
var t = this.getTranslationKey(e.key);
if (t) {
for (var n = i.keys(e.translations || {}), r = 0; r < n.length; r++) {
var a = e.translations[n[r]], s = this.getLanguage(n[r]);
t.setTranslationsForLanguage(s, a);
}
return t;
}
return e.setApplication(this), this.translation_keys[e.key] = e, e;
}
}, t.exports = h;
}, {
"./api_client":17,
"./configuration":21,
"./language":24,
"./logger":29,
"./source":33,
"./utils":51
} ],
19:[ function(e, t, n) {
var i = e("./utils"), r = e("./cache_adapters/base"), a = function(t) {
this.adapter = null, this.options = t, this.version = t.version;
var n;
if (t) {
if ("string" == typeof t.adapter) {
var a = e("./configuration");
n = a.getCacheAdapter(t.adapter);
} else "function" == typeof t.adapter && (n = t.adapter, delete t.adapter);
n && (n.prototype = i.extend(new r(), n.prototype), this.adapter = new n(t), t.version_check_interval && (this.adapter.version_check_interval = t.version_check_interval));
}
};
a.prototype = {
fetch:function(e, t, n) {
return this.adapter ? void this.adapter.fetch(e, t, n) :void (i.isFunction(t) ? t(function(e, t) {
t ? n(null, t) :n("no data", null);
}.bind(this)) :n(null, t));
},
store:function(e, t, n) {
return this.adapter ? void this.adapter.store(e, t, n) :void (i.isFunction(n) && n());
},
del:function(e, t) {
return this.adapter ? void this.adapter.del(e, t) :void t();
},
exists:function(e, t) {
return this.adapter ? void this.adapter.exists(e, t) :void t();
},
fetchVersion:function(e) {
return this.adapter ? void this.adapter.fetchVersion(e) :void e({
version:this.options.version || "0"
});
},
storeVersion:function(e, t) {
return this.version = e, this.adapter ? void this.adapter.storeVersion(e, t) :void (t && t(e));
},
setVersion:function(e) {
this.version = e, this.adapter && (this.adapter.version = e);
},
resetVersion:function() {
this.adapter && (this.version = null);
},
getVersionCheckInterval:function() {
return this.adapter ? 1e3 * this.adapter.version_check_interval :0;
},
clear:function(e) {
return this.adapter ? void this.adapter.clear(e) :void (e && e());
}
}, t.exports = a;
}, {
"./cache_adapters/base":20,
"./configuration":21,
"./utils":51
} ],
20:[ function(e, t, n) {
var i = (e("../configuration"), e("../logger")), r = e("../utils"), a = "current_version", s = "tml", o = function() {};
o.prototype = {
read_only:!0,
cached_by_source:!0,
name:"",
version_check_interval:3600,
initialize:function(e) {
this.config = e || {}, this.cache = this.create();
},
create:function() {
i.debug("Must be implemented by the extending class");
},
fetch:function() {
i.debug("Must be implemented by the extending class");
},
store:function(e, t) {
i.debug("Must be implemented by the extending class");
},
del:function(e) {
i.debug("Must be implemented by the extending class");
},
exists:function(e) {
i.debug("Must be implemented by the extending class");
},
warn:function(e) {
i.debug(this.name + " - " + e);
},
info:function(e) {
i.debug(this.name + " - " + e);
},
fileName:function(e) {
return e + ".json";
},
fetchDefault:function(e, t, n) {
var i = this;
r.isFunction(t) ? t(function(t, r) {
r ? i.store(e, r, function() {
n(null, r);
}) :n("no data", null);
}.bind(this)) :t && i.store(e, t, function(e, t) {
n(null, t);
});
},
fetchVersion:function(e) {
var t = this;
if (t.config.version) t.info("Cache version from config: " + t.config.version), 
e(t.config.version); else {
var n = JSON.stringify({
version:"undefined"
});
t.fetch(a, n, function(n, i) {
i = i || "", i = -1 != i.indexOf("{") ? JSON.parse(i) :{
version:i
}, t.info("Cache version: " + i.version), e(i);
});
}
},
storeVersion:function(e, t) {
var n = this;
n.version = e;
var i = JSON.stringify({
version:n.version,
t:n.getVersionTimestamp()
});
n.store(a, i, function() {
t && t(n.version);
});
},
getVersionTimestamp:function() {
var e = new Date().getTime();
return e;
},
getVersionedKey:function(e) {
var t = [ s, this.config.namespace || "", e == a ? "v" :"v" + (this.version || this.config.version || "0"), e ];
return t.join("_");
},
stripExtensions:function(e) {
return r.isString(e) && e.match(/^\{/) && (e = JSON.parse(e), e.extensions && delete e.extensions, 
e = JSON.stringify(e)), e;
},
getRequest:function() {
return null;
},
clear:function(e) {
e && e(null);
}
}, t.exports = o;
}, {
"../configuration":21,
"../logger":29,
"../utils":51
} ],
21:[ function(e, t, n) {
var i = e("./cache"), r = e("./utils"), a = e("./../config/defaults.js"), s = e("./../config/english.js"), o = e("./../config/application.js"), u = function() {
r.merge(this, a);
};
u.prototype = {
initCache:function(e) {
return this.cache = this.cache || {}, e && (this.cache.namespace = e.substring(0, 5)), 
this.cacheAdapter = new i(this.cache), this.cacheAdapter;
},
getDefaultApplication:function() {
return o;
},
getDefaultLanguage:function() {
return s;
},
getCache:function() {
return this.cacheAdapter;
},
getDefaultToken:function(e, t, n) {
if (t = t || "data", n = n || "html", this.default_tokens[n][t][e]) return this.default_tokens[n][t][e];
var i = e.split("_");
return e = i[i.length - 1], e = e.replace(/_*\d+$/, ""), this.default_tokens[n][t][e] ? this.default_tokens[n][t][e] :null;
},
setDefaultToken:function(e, t, n, i) {
n = n || "data", i = i || "html", this.default_tokens[i] = this.default_tokens[i] || {}, 
this.default_tokens[i][n] = this.default_tokens[i][n] || {}, this.default_tokens[i][n][e] = t;
},
getContextRules:function(e) {
return this.context_rules[e] || {};
},
setContextRules:function(e, t, n) {
return this.context_rules[e] ? void (this.context_rules[e].variables[t] = n) :!1;
},
isDisabled:function() {
return !this.isEnabled();
},
isEnabled:function() {
return this.enabled;
},
isFileCache:function() {
return null === this.cache ? !1 :"file" == this.cache.adapter;
},
registerCacheAdapter:function(e, t) {
this.cache_adapters = this.cache_adapters || {}, this.cache_adapters[e] = t;
},
registerCacheAdapters:function(e) {
var t = this;
Object.keys(e).forEach(function(n) {
t.registerCacheAdapter(n, e[n]);
});
},
getCacheAdapter:function(e) {
return this.cache_adapters ? this.cache_adapters[e] :null;
},
registerApiAdapter:function(e, t) {
this.api_adapters = this.api_adapters || {}, this.api_adapters[e] = t;
},
registerApiAdapters:function(e) {
var t = this;
Object.keys(e).forEach(function(n) {
t.registerApiAdapter(n, e[n][klass]);
});
},
getApiAdapter:function(e) {
return this.api_adapters ? this.api_adapters[e] :null;
},
isDefaultDecorationToken:function(e) {
var t = Object.keys(this.default_tokens.html.decoration);
return -1 !== t.indexOf(e);
},
getXMessageContextKeyByStyleKeys:function(e) {
var t = r.keys(this.xmessage.context_rules), n = null, i = this;
return t.forEach(function(t) {
var a = r.values(i.xmessage.context_rules[t]);
r.containsAny(a, e) && (n = t);
}), n;
},
getXMessageRuleKeyByContextRuleKey:function(e, t) {
return this.xmessage.context_rules[e] ? this.xmessage.context_rules[e][t] || t :t;
}
}, t.exports = new u();
}, {
"./../config/application.js":13,
"./../config/defaults.js":14,
"./../config/english.js":15,
"./cache":19,
"./utils":51
} ],
22:[ function(e, t, n) {
(function(n) {
var i = e("../utils"), r = {
isEnabled:function(e) {
return e ? e.skip_decorations ? !1 :e.ignored ? !1 :e.current_translator && e.current_translator.inline :!1;
},
getDecorationElement:function(e, t) {
return t.use_span ? "span" :t.use_div ? "div" :e;
},
decorate:function(e, t, n, i, r) {
if (r = r || {}, !this.isEnabled(r)) return e;
var a = this.getDecorationElement("tml:label", r), s = [];
if (i.application && i.application.isFeatureEnabled("lock_original_content") && i.language == n) s.push("tml_original"); else if (i.locked && !r.current_translator.manager) s.push("tml_locked"); else if (s.push("tml_translatable"), 
r.locked) {
if (r.current_translator && !r.current_translator.isFeatureEnabled("show_locked_keys")) return e;
s.push("tml_locked");
} else t.locale === i.locale ? r.pending ? s.push("tml_pending") :s.push("tml_not_translated") :t.locale === n.locale ? s.push("tml_translated") :s.push("tml_fallback");
var o = [];
return o.push("<" + a + " class='" + s.join(" ") + "' data-translation_key='" + i.key + "' draggable='true' data-target_locale='" + n.locale + "'>"), 
o.push(e), o.push("</" + a + ">"), o.join("");
},
decorateLanguageCase:function(e, t, r, a, s) {
if (s = s || {}, !this.isEnabled(s)) return a;
for (var o = {
keyword:e.keyword,
language_name:e.language.english_name,
latin_name:e.latin_name,
native_name:e.native_name,
conditions:t ? t.conditions :"",
operations:t ? t.operations :"",
original:r,
transformed:a
}, u = new n(JSON.stringify(o)).toString("base64").trim().replace("\n", ""), l = {
"class":"tml_language_case",
"data-locale":e.language.locale,
"data-rule":encodeURIComponent(u)
}, c = [], h = i.keys(l), p = 0; p < h.length; p++) c.push("" + h[p] + '="' + l[h[p]] + '"');
var f = this.getDecorationElement("tml:case", s), d = [];
return d.push("<" + f + " " + c.join(" ") + ">"), d.push(a), d.push("</" + f + ">"), 
d.join("");
},
decorateToken:function(e, t, n) {
if (!this.isEnabled(n)) return t;
var i = this.getDecorationElement("tml:token", n), r = [ "tml_token", "tml_token_" + e.getDecorationName() ], a = [];
return a.push("<" + i + " class='" + r.join(" ") + "' data-name='" + e.short_name + "'"), 
e.context_keys && e.context_keys.length > 0 && a.push(" data-context='" + e.context_keys.join(",") + "'"), 
e.case_keys && e.case_keys.length > 0 && a.push(" data-case='" + e.case_keys.join(",") + "'"), 
a.push(">"), a.push(t), a.push("</" + i + ">"), a.join("");
},
decorateElement:function(e, t, n) {
if (!this.isEnabled(n)) return t;
var i = this.getDecorationElement("tml:element", n), r = [];
return r.push("<" + i + ">"), r.push(t), r.push("</" + i + ">"), r.join("");
}
};
t.exports = r;
}).call(this, e("buffer").Buffer);
}, {
"../utils":51,
buffer:9
} ],
23:[ function(e, t, n) {
var i = {
agent_tag:function(e, t) {
t = t || {};
var n = t.host || "https://tools.translationexchange.com/agent/stable/agent.min.js";
t.css = t.css || e.css, t.sdk = t.sdk || "tml-js v0.4.16", t.languages = [];
for (var i = 0; i < e.languages.length; i++) {
var r = e.languages[i];
t.languages.push({
locale:r.locale,
english_name:r.english_name,
native_name:r.native_name,
flag_url:r.flag_url
});
}
var a = [];
if (a.push(""), a.push("<script>"), a.push("(function() {"), a.push("  var script = document.createElement('script');"), 
a.push("  script.setAttribute('id', 'tml-agent'); script.setAttribute('type', 'application/javascript');"), 
a.push("  script.setAttribute('src', '" + n + "');"), a.push("  script.setAttribute('charset', 'UTF-8');"), 
a.push("  script.onload = function() {"), a.push("       Trex.init('" + e.key + "', " + JSON.stringify(t) + ");"), 
a.push("  };"), a.push("  document.getElementsByTagName('head')[0].appendChild(script);"), 
a.push("})();"), a.push("</script>"), a.push("<style id='tml-stylesheet'>"), e.current_locale) {
var s = e.languages_by_locale[e.current_locale];
s && s.configuration && s.configuration.css && (a.push("/* Language Stylesheet (" + s.configuration.id + "): " + s.locale + " */"), 
a.push(s.configuration.css), a.push(""));
}
return e.sources_by_key && Object.keys(e.sources_by_key).forEach(function(t) {
var n = e.sources_by_key[t];
n && n.configuration && n.configuration.css && (a.push("/* Source Stylesheet (" + n.configuration.id + "): " + n.source + " locale: " + e.current_locale + "*/"), 
a.push(n.configuration.css), a.push(""));
}), a.push("</style>"), a.push(""), a.join("\n");
},
language_name_tag:function(e, t) {
t = t || {}, null === e && (e = tml_current_language());
var n = [];
return t.flag && (n.push(this.language_flag_tag(e)), n.push(" ")), n.push(e.native_name), 
n.join("");
},
language_flag_tag:function(e, t) {
t = t || {};
var n = e.english_name;
return "native" == t.language && (n = e.native_name), null === e && (e = tml_current_language()), 
"<img src='" + e.flag_url + "' style='margin-right:3px;' alt='" + n + "' title='" + n + "'>";
},
language_selector_tag:function(e, t, n) {
t = t || "default";
for (var i = [], r = Object.keys(n), a = 1; a < r.length; a++) i.push("data-tml-" + r[a] + "='" + n[r[a]] + "'");
return i = i.join(" "), "<div data-tml-language-selector='" + t + "' " + i + "></div>";
}
};
t.exports = {
header:i.agent_tag,
agent_tag:i.agent_tag,
language_name_tag:i.language_name_tag,
language_flag_tag:i.language_flag_tag,
language_selector:i.language_selector_tag
};
}, {} ],
24:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./language_context"), s = e("./language_case"), o = e("./translation_key"), u = function(e) {
i.extend(this, e), this.contexts = {};
for (var t = i.keys(e.contexts || {}), n = 0; n < t.length; n++) this.contexts[t[n]] = new a(i.extend(e.contexts[t[n]], {
language:this,
keyword:t[n]
}));
for (this.cases = {}, t = i.keys(e.cases || {}), n = 0; n < t.length; n++) this.cases[t[n]] = new s(i.extend(e.cases[t[n]], {
language:this,
keyword:t[n]
}));
};
u.prototype = {
getContextByKeyword:function(e) {
return this.contexts[e];
},
getContextByTokenName:function(e) {
for (var t = i.keys(this.contexts || {}), n = 0; n < t.length; n++) if (this.contexts[t[n]].isAppliedToToken(e)) return this.contexts[t[n]];
return null;
},
getLanguageCaseByKeyword:function(e) {
return this.cases[e];
},
isDefault:function() {
return this.locale == r.default_locale;
},
translate:function(e, t, n, a) {
var s = i.normalizeParams(e, t, n, a);
if (!s.label) return "";
if (i.isDate(s.label)) return i.localizeDate(s.label, i.extend(s.options, {
language:self
}));
a = a || {};
var u = new o({
label:s.label,
description:s.description,
language:this.application ? this.application.getLanguage() :null,
application:this.application,
syntax:a.syntax
});
if (this.application) {
var l = this.getSourcePath(s.options), c = l[l.length - 1];
l = l.join(r.source_separator), s.options.block_options && s.options.block_options.dynamic ? l = c :this.application.verifySourcePath(c, l);
var h = this.application.getSource(c);
if (h && h.isIgnoredKey(u.key)) return s.options.ignored = !0, u.translate(this, s.tokens, s.options);
var p = h ? h.getTranslations(this.locale, u.key) :null;
if (p) u.setTranslations(this.locale, p); else {
s.options.pending = !0, this.application.registerMissingTranslationKey(l, u);
var f = this.application.getTranslationKey(u.key);
f && (u = f);
}
}
return u.translate(this, s.tokens, s.options);
},
align:function(e) {
return this.isRightToLeft() ? "left" == e ? "right" :"left" :e;
},
isRightToLeft:function() {
return this.right_to_left;
},
direction:function() {
return this.isRightToLeft() ? "rtl" :"ltr";
},
getSourceName:function(e) {
if (!e) return "index";
var t = e.call && e() || e;
return t;
},
getSourcePath:function(e) {
if (!e.block_options || !e.block_options.length) return [ this.getSourceName(e.current_source || this.application.current_source) ];
for (var t = [], n = 0; n < e.block_options.length; n++) {
var i = e.block_options[n];
i.source && t.push(this.getSourceName(i.source));
}
return t = t.reverse(), t.unshift(this.getSourceName(e.current_source)), t;
}
}, t.exports = u;
}, {
"./configuration":21,
"./language_case":25,
"./language_context":27,
"./translation_key":49,
"./utils":51
} ],
25:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./language_case_rule"), s = e("./decorators/html"), o = function(e) {
i.extend(this, e), this.rules = [], e.rules = e.rules || [];
for (var t = 0; t < e.rules.length; t++) this.rules.push(new a(i.extend(e.rules[t], {
language_case:this
})));
};
o.prototype = {
findMatchingRule:function(e, t) {
for (var n = 0; n < this.rules.length; n++) {
var i = this.rules[n];
if (i.evaluate(e, t)) return i;
}
return null;
},
apply:function(e, t, n) {
var r = i.unique(e.match(/<\/?[^>]*>/g) || []), a = e.replace(/<\/?[^>]*>/g, ""), o = [ a ];
"phrase" != this.application && (o = i.unique(a.split(/[\s\/]/) || []));
for (var u = 0; u < r.length; u++) e = e.replace(r[u], "{$h" + u + "}");
for (u = 0; u < o.length; u++) e = e.replace(o[u], "{$w" + u + "}");
var l = s, c = [];
for (u = 0; u < o.length; u++) {
var h = o[u], p = this.findMatchingRule(h, t), f = p ? p.apply(h) :h;
c.push(l.decorateLanguageCase(this, p, h, f, n));
}
for (u = 0; u < o.length; u++) e = e.replace("{$w" + u + "}", c[u]);
for (u = 0; u < r.length; u++) e = e.replace("{$h" + u + "}", r[u]);
return e;
},
getConfig:function() {
return r;
}
}, t.exports = o;
}, {
"./configuration":21,
"./decorators/html":22,
"./language_case_rule":26,
"./utils":51
} ],
26:[ function(e, t, n) {
var i = e("./utils"), r = e("./rules_engine/parser"), a = e("./rules_engine/evaluator"), s = function(e) {
i.extend(this, e);
};
s.prototype = {
getConditionsExpression:function() {
return this.conditions_expression || (this.conditions_expression = new r(this.conditions).parse()), 
this.conditions_expression;
},
getOperationsExpression:function() {
return this.operations_expression || (this.operations_expression = new r(this.operations).parse()), 
this.operations_expression;
},
getGenderVariables:function(e) {
if (-1 == this.conditions.indexOf("@gender")) return {};
if (!e) return {
gender:"unknown"
};
var t = this.language_case.language.getContextByKeyword("gender");
return t ? t.getVars(e) :{
gender:"unknown"
};
},
evaluate:function(e, t) {
if (!this.conditions) return !1;
var n = new a();
return n.setVars(i.extend({
"@value":e
}, this.getGenderVariables(t))), n.evaluate(this.getConditionsExpression());
},
apply:function(e) {
if (!this.operations) return e;
var t = new a();
return t.setVars({
"@value":e
}), t.evaluate(this.getOperationsExpression());
}
}, t.exports = s;
}, {
"./rules_engine/evaluator":31,
"./rules_engine/parser":32,
"./utils":51
} ],
27:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./language_context_rule"), s = function(e) {
i.extend(this, e), this.rules = {};
for (var t = i.keys(e.rules || {}), n = 0; n < t.length; n++) this.rules[t[n]] = new a(i.extend(e.rules[t[n]], {
language_context:this,
keyword:t[n]
}));
};
s.prototype = {
isAppliedToToken:function(e) {
var t = new RegExp(this.token_expression.substring(1, this.token_expression.length - 2));
return null !== e.match(t);
},
getFallbackRule:function() {
if (!this.fallback_rule) for (var e = i.keys(this.rules), t = 0; t < e.length; t++) {
var n = e[t];
this.rules[n].isFallback() && (this.fallback_rule = this.rules[n]);
}
return this.fallback_rule;
},
getConfig:function() {
return r.getContextRules(this.keyword);
},
getVars:function(e) {
for (var t = {}, n = this.getConfig(), i = 0; i < this.variables.length; i++) {
var r = this.variables[i];
if (n.variables && n.variables[r]) {
var a = n.variables[r];
"string" == typeof a ? (e.object && (e = e.object), t[r] = e[a]) :"function" == typeof a ? t[r] = a(e) :t[r] = e;
} else t[r] = e;
}
return t;
},
findMatchingRule:function(e) {
for (var t = this.getVars(e), n = i.keys(this.rules), r = 0; r < n.length; r++) {
var a = this.rules[n[r]];
if (!a.isFallback() && a.evaluate(t)) return a;
}
return this.getFallbackRule();
}
}, t.exports = s;
}, {
"./configuration":21,
"./language_context_rule":28,
"./utils":51
} ],
28:[ function(e, t, n) {
var i = e("./utils"), r = e("./rules_engine/parser"), a = e("./rules_engine/evaluator"), s = function(e) {
i.extend(this, e);
};
s.prototype = {
isFallback:function() {
return "other" == this.keyword;
},
getConditionsExpression:function() {
return this.conditions_expression || (this.conditions_expression = new r(this.conditions).parse()), 
this.conditions_expression;
},
evaluate:function(e) {
if (this.isFallback()) return !0;
var t = new a();
return t.setVars(e || {}), t.evaluate(this.getConditionsExpression());
}
}, t.exports = s;
}, {
"./rules_engine/evaluator":31,
"./rules_engine/parser":32,
"./utils":51
} ],
29:[ function(e, t, n) {
var i = (e("./utils"), {
formatDate:function(e) {
var t = e.getHours(), n = e.getMinutes(), i = e.getSeconds();
t %= 12, t = t ? t :12, n = 10 > n ? "0" + n :n;
var r = t + ":" + n + ":" + i;
return e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear() + " " + r;
},
log:function(t, n) {
var i = e("./configuration");
if (i.debug) {
var r = "tml: " + t;
n && (r = r + " " + JSON.stringify(n)), console.log(r);
}
},
debug:function(e, t) {
this.log(e, t);
}
});
t.exports = i;
}, {
"./configuration":21,
"./utils":51
} ],
30:[ function(e, t, n) {
var i = function(e) {
function t(e, t) {
return e << t | e >>> 32 - t;
}
function n(e, t) {
var n, i, r, a, s;
return r = 2147483648 & e, a = 2147483648 & t, n = 1073741824 & e, i = 1073741824 & t, 
s = (1073741823 & e) + (1073741823 & t), n & i ? 2147483648 ^ s ^ r ^ a :n | i ? 1073741824 & s ? 3221225472 ^ s ^ r ^ a :1073741824 ^ s ^ r ^ a :s ^ r ^ a;
}
function i(e, t, n) {
return e & t | ~e & n;
}
function r(e, t, n) {
return e & n | t & ~n;
}
function a(e, t, n) {
return e ^ t ^ n;
}
function s(e, t, n) {
return t ^ (e | ~n);
}
function o(e, r, a, s, o, u, l) {
return e = n(e, n(n(i(r, a, s), o), l)), n(t(e, u), r);
}
function u(e, i, a, s, o, u, l) {
return e = n(e, n(n(r(i, a, s), o), l)), n(t(e, u), i);
}
function l(e, i, r, s, o, u, l) {
return e = n(e, n(n(a(i, r, s), o), l)), n(t(e, u), i);
}
function c(e, i, r, a, o, u, l) {
return e = n(e, n(n(s(i, r, a), o), l)), n(t(e, u), i);
}
function h(e) {
for (var t, n = e.length, i = n + 8, r = (i - i % 64) / 64, a = 16 * (r + 1), s = Array(a - 1), o = 0, u = 0; n > u; ) t = (u - u % 4) / 4, 
o = u % 4 * 8, s[t] = s[t] | e.charCodeAt(u) << o, u++;
return t = (u - u % 4) / 4, o = u % 4 * 8, s[t] = s[t] | 128 << o, s[a - 2] = n << 3, 
s[a - 1] = n >>> 29, s;
}
function p(e) {
var t, n, i = "", r = "";
for (n = 0; 3 >= n; n++) t = e >>> 8 * n & 255, r = "0" + t.toString(16), i += r.substr(r.length - 2, 2);
return i;
}
function f(e) {
e = e.replace(/\r\n/g, "\n");
for (var t = "", n = 0; n < e.length; n++) {
var i = e.charCodeAt(n);
128 > i ? t += String.fromCharCode(i) :i > 127 && 2048 > i ? (t += String.fromCharCode(i >> 6 | 192), 
t += String.fromCharCode(63 & i | 128)) :(t += String.fromCharCode(i >> 12 | 224), 
t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128));
}
return t;
}
var d, g, m, v, _, y, x, b, k, w = Array(), $ = 7, T = 12, E = 17, S = 22, C = 5, A = 9, L = 14, O = 20, N = 4, I = 11, j = 16, R = 23, D = 6, B = 10, M = 15, z = 21;
for (e = f(e), w = h(e), y = 1732584193, x = 4023233417, b = 2562383102, k = 271733878, 
d = 0; d < w.length; d += 16) g = y, m = x, v = b, _ = k, y = o(y, x, b, k, w[d + 0], $, 3614090360), 
k = o(k, y, x, b, w[d + 1], T, 3905402710), b = o(b, k, y, x, w[d + 2], E, 606105819), 
x = o(x, b, k, y, w[d + 3], S, 3250441966), y = o(y, x, b, k, w[d + 4], $, 4118548399), 
k = o(k, y, x, b, w[d + 5], T, 1200080426), b = o(b, k, y, x, w[d + 6], E, 2821735955), 
x = o(x, b, k, y, w[d + 7], S, 4249261313), y = o(y, x, b, k, w[d + 8], $, 1770035416), 
k = o(k, y, x, b, w[d + 9], T, 2336552879), b = o(b, k, y, x, w[d + 10], E, 4294925233), 
x = o(x, b, k, y, w[d + 11], S, 2304563134), y = o(y, x, b, k, w[d + 12], $, 1804603682), 
k = o(k, y, x, b, w[d + 13], T, 4254626195), b = o(b, k, y, x, w[d + 14], E, 2792965006), 
x = o(x, b, k, y, w[d + 15], S, 1236535329), y = u(y, x, b, k, w[d + 1], C, 4129170786), 
k = u(k, y, x, b, w[d + 6], A, 3225465664), b = u(b, k, y, x, w[d + 11], L, 643717713), 
x = u(x, b, k, y, w[d + 0], O, 3921069994), y = u(y, x, b, k, w[d + 5], C, 3593408605), 
k = u(k, y, x, b, w[d + 10], A, 38016083), b = u(b, k, y, x, w[d + 15], L, 3634488961), 
x = u(x, b, k, y, w[d + 4], O, 3889429448), y = u(y, x, b, k, w[d + 9], C, 568446438), 
k = u(k, y, x, b, w[d + 14], A, 3275163606), b = u(b, k, y, x, w[d + 3], L, 4107603335), 
x = u(x, b, k, y, w[d + 8], O, 1163531501), y = u(y, x, b, k, w[d + 13], C, 2850285829), 
k = u(k, y, x, b, w[d + 2], A, 4243563512), b = u(b, k, y, x, w[d + 7], L, 1735328473), 
x = u(x, b, k, y, w[d + 12], O, 2368359562), y = l(y, x, b, k, w[d + 5], N, 4294588738), 
k = l(k, y, x, b, w[d + 8], I, 2272392833), b = l(b, k, y, x, w[d + 11], j, 1839030562), 
x = l(x, b, k, y, w[d + 14], R, 4259657740), y = l(y, x, b, k, w[d + 1], N, 2763975236), 
k = l(k, y, x, b, w[d + 4], I, 1272893353), b = l(b, k, y, x, w[d + 7], j, 4139469664), 
x = l(x, b, k, y, w[d + 10], R, 3200236656), y = l(y, x, b, k, w[d + 13], N, 681279174), 
k = l(k, y, x, b, w[d + 0], I, 3936430074), b = l(b, k, y, x, w[d + 3], j, 3572445317), 
x = l(x, b, k, y, w[d + 6], R, 76029189), y = l(y, x, b, k, w[d + 9], N, 3654602809), 
k = l(k, y, x, b, w[d + 12], I, 3873151461), b = l(b, k, y, x, w[d + 15], j, 530742520), 
x = l(x, b, k, y, w[d + 2], R, 3299628645), y = c(y, x, b, k, w[d + 0], D, 4096336452), 
k = c(k, y, x, b, w[d + 7], B, 1126891415), b = c(b, k, y, x, w[d + 14], M, 2878612391), 
x = c(x, b, k, y, w[d + 5], z, 4237533241), y = c(y, x, b, k, w[d + 12], D, 1700485571), 
k = c(k, y, x, b, w[d + 3], B, 2399980690), b = c(b, k, y, x, w[d + 10], M, 4293915773), 
x = c(x, b, k, y, w[d + 1], z, 2240044497), y = c(y, x, b, k, w[d + 8], D, 1873313359), 
k = c(k, y, x, b, w[d + 15], B, 4264355552), b = c(b, k, y, x, w[d + 6], M, 2734768916), 
x = c(x, b, k, y, w[d + 13], z, 1309151649), y = c(y, x, b, k, w[d + 4], D, 4149444226), 
k = c(k, y, x, b, w[d + 11], B, 3174756917), b = c(b, k, y, x, w[d + 2], M, 718787259), 
x = c(x, b, k, y, w[d + 9], z, 3951481745), y = n(y, g), x = n(x, m), b = n(b, v), 
k = n(k, _);
var P = p(y) + p(x) + p(b) + p(k);
return P.toLowerCase();
};
t.exports = i;
}, {} ],
31:[ function(e, t, n) {
var i = function(e) {
return this.vars = {}, this.ctx = e || {
label:function(e, t) {
return this.vars[e] = this.ctx[e] = t, t;
},
quote:function(e) {
return e;
},
car:function(e) {
return e[1];
},
cdr:function(e) {
return e.shift(), e;
},
cons:function(e, t) {
return t.unshift(e), t;
},
eq:function(e, t) {
return e == t;
},
atom:function(e) {
return !(typeof e in {
object:1,
array:1,
"function":1
});
},
cond:function(e, t, n) {
return this.evaluate(e) ? this.evaluate(t) :this.evaluate(n);
},
set:function(e, t) {
return this.vars[e] = this.ctx[e] = t, t;
},
"=":function(e, t) {
return e == t;
},
"!=":function(e, t) {
return e != t;
},
"<":function(e, t) {
return t > e;
},
">":function(e, t) {
return e > t;
},
"+":function(e, t) {
return e + t;
},
"-":function(e, t) {
return e - t;
},
"*":function(e, t) {
return e * t;
},
"%":function(e, t) {
return e % t;
},
mod:function(e, t) {
return e % t;
},
"/":function(e, t) {
return 1 * e / t;
},
"!":function(e) {
return !e;
},
not:function(e) {
return !e;
},
"&&":function() {
return Array.prototype.slice.call(arguments).every(this.evaluate.bind(this));
},
and:function() {
return Array.prototype.slice.call(arguments).every(this.evaluate.bind(this));
},
"||":function() {
return !!Array.prototype.slice.call(arguments).filter(this.evaluate.bind(this)).length;
},
or:function() {
return !!Array.prototype.slice.call(arguments).filter(this.evaluate.bind(this)).length;
},
"if":function(e, t, n) {
return this.evaluate(e) ? this.evaluate(t) :this.evaluate(n);
},
let:function(e, t) {
return this.vars[e] = t, t;
},
"true":function() {
return !0;
},
"false":function() {
return !1;
},
date:function(e) {
return new Date(e);
},
today:function() {
return new Date();
},
time:function(e) {
return new Date(e);
},
now:function() {
return Date.now();
},
append:function(e, t) {
return String(t) + String(e);
},
prepend:function(e, t) {
return String(e) + String(t);
},
match:function(e, t) {
return e = this._stringToRegexp(e), !!t.match(e);
},
"in":function(e, t) {
var n, i = this._range;
return e = e.replace(/\s/g, "").replace(/(\w+)\.\.(\w+)/g, function(e, t, r) {
return n = i(t, r), n.push(r), n.join();
}), -1 != e.split(",").indexOf(String(t));
},
within:function(e, t) {
var n = e.split("..").map(function(e) {
return parseInt(e);
});
return n[0] <= t && t <= n[1];
},
replace:function(e, t, n) {
return e = this._stringToRegexp(e), n.replace(e, t);
},
count:function(e) {
return ("string" == typeof e ? this.vars[e] :e).length;
},
all:function(e, t) {
return e = "string" == typeof e ? this.vars[e] :e, e instanceof Array ? e.every(function(e) {
return e == t;
}) :!1;
},
any:function(e, t) {
return e = "string" == typeof e ? this.vars[e] :e, e instanceof Array ? !!e.filter(function(e) {
return e == t;
}) :!1;
}
}, this;
};
i.prototype = {
_range:function(e, t) {
var n = [], i = !String(e).match(/^\d+$/);
for (e = i ? e.charCodeAt(0) :parseInt(e), t = i ? t.charCodeAt(0) :parseInt(t); t >= e; ) n.push(i ? String.fromCharCode(e) :String(e)), 
e += 1;
return n;
},
_stringToRegexp:function(e) {
var t = new RegExp("^/", "g");
return e.match(t) ? (e = e.replace(t, ""), e.match(/\/i$/) ? (e = e.replace(/\/i$/g, ""), 
new RegExp(e, "ig")) :(e = e.replace(/\/$/, ""), new RegExp(e, "g"))) :new RegExp(e, "g");
},
setVars:function(e) {
this.vars = e;
},
getVars:function() {
return this.vars;
},
apply:function(e, t) {
return "function" == typeof this.ctx[e] ? this.ctx[e].apply(this, t) :this.ctx[e];
},
evaluate:function(e) {
if (this.ctx.atom.call(this, e)) return "string" == typeof e && this.vars[e] ? this.vars[e] :e in this.ctx ? this.ctx[e] :e;
var t = e[0], n = e.slice(1);
return -1 == [ "quote", "car", "cdr", "cond", "if", "&&", "||", "and", "or", "true", "false", "let", "count", "all", "any" ].indexOf(t) && (n = n.map(this.evaluate.bind(this))), 
this.apply(t, n);
}
}, t.exports = i;
}, {} ],
32:[ function(e, t, n) {
var i = function(e) {
this.tokenize(e);
};
i.prototype = {
tokenize:function(e) {
this.tokens = e.match(/[()]|\w+|@\w+|[\+\-\!\|\=>&<\*\/%]+|\".*?\"|'.*?'/g);
},
parse:function() {
return token = this.tokens.shift(), token ? "(" == token ? this.parseList() :token.match(/^['"].*/) ? token.slice(1, -1) :token.match(/\d+/) ? parseInt(token) :String(token) :void 0;
},
parseList:function() {
for (var e = []; this.tokens.length > 0 && ")" != this.tokens[0]; ) e.push(this.parse());
return this.tokens.shift(), e;
}
}, t.exports = i;
}, {} ],
33:[ function(e, t, n) {
var i = e("./utils"), r = (e("./configuration"), e("./translation")), a = function(e) {
i.extend(this, e), this.key = i.generateSourceKey(e.source), this.translations = {}, 
this.ignored_keys = [], this.configuration = {};
};
a.prototype = {
isIgnoredKey:function(e) {
return -1 != this.ignored_keys.indexOf(e);
},
getTranslations:function(e, t) {
return this.translations[e] ? this.translations[e][t] :null;
},
updateTranslations:function(e, t) {
this.configuration = t && t.configuration ? t.configuration :{}, this.ignored_keys = t && t.ignored_keys ? t.ignored_keys :[], 
t = t && t.results ? t.results :t;
var n = i.keys(t);
this.translations[e] = this.translations[e] || [];
for (var a = 0; a < n.length; a++) {
var s = n[a];
this.translations[e][s] = [];
var o = t[s];
!i.isArray(o) && o.translations && (o = o.translations);
for (var u = 0; u < o.length; u++) {
var l = o[u];
this.translations[e][s].push(new r({
locale:l.locale || e,
label:l.label,
locked:l.locked,
context:l.context
}));
}
}
}
}, t.exports = a;
}, {
"./configuration":21,
"./translation":48,
"./utils":51
} ],
34:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./logger"), s = {
version:"0.4.2",
Application:e("./application"),
Language:e("./language"),
LanguageContext:e("./language_context"),
LanguageContextRule:e("./language_context_rule"),
LanguageCase:e("./language_case"),
LanguageCaseRule:e("./language_case_rule"),
TranslationKey:e("./translation_key"),
Translation:e("./translation"),
Translator:e("./translator"),
Source:e("./source"),
DomTokenizer:e("./tokenizers/dom"),
ApiAdapterBase:e("./api_adapters/base"),
CacheAdapterBase:e("./cache_adapters/base"),
logger:a,
utils:i,
config:r,
scripts:e("./helpers/scripts"),
init:function(e) {
i.merge(r, e), r.initCache();
},
translate:function(e, t, n, i) {
var a = this.application.getLanguage(r.current_locale);
return a = a || this.application.getLanguage(r.default_locale), a.translate(e, t, n, i);
},
configure:function(e) {
e(r);
},
cache:function(e) {
var t = r.cache.data || {};
t.languages = t.languages || {}, t.sources = t.sources || {}, r.cache.data = t, 
e(r.cache.data);
}
};
t.exports = s;
}, {
"./api_adapters/base":16,
"./application":18,
"./cache_adapters/base":20,
"./configuration":21,
"./helpers/scripts":23,
"./language":24,
"./language_case":25,
"./language_case_rule":26,
"./language_context":27,
"./language_context_rule":28,
"./logger":29,
"./source":33,
"./tokenizers/dom":37,
"./translation":48,
"./translation_key":49,
"./translator":50,
"./utils":51
} ],
35:[ function(e, t, n) {
var i = e("../tokens/data"), r = e("../tokens/method"), a = e("../tokens/piped"), s = e("../tokens/map"), o = function(e) {
this.label = e, this.tokenize();
};
o.prototype = {
tokenize:function() {
this.tokens = [];
for (var e = this.getSupportedTokens(), t = "" + this.label, n = 0; n < e.length; n++) {
for (var i = e[n], r = t.match(i[0]) || [], a = 0; a < r.length; a++) this.tokens.push(new i[1](r[a], this.label));
t = t.replace(e[n][0], "");
}
},
getSupportedTokens:function() {
return [ [ /(%?\{{1,2}\s*\w*\s*(:\s*\w+)*\s*(::\s*\w+)*\s*\}{1,2})/g, i ], [ /(%?\{{1,2}\s*[\w]*\.\w*\s*(:\s*\w+)*\s*(::\s*\w+)*\s*\}{1,2})/g, r ], [ /(%?\{{1,2}\s*[\w]*\s*(:\s*\w+)*\s*\|\|?[^\{\}\|]+\}{1,2})/g, a ], [ /(%?\{{1,2}\s*[\w]*\s*(:\s*\w+)*\s*@\s*[^\{\}\|]+\}{1,2})/g, s ] ];
},
isTokenAllowed:function(e, t) {
return t.allowed_tokens ? -1 != t.allowed_tokens.indexOf(e) :!0;
},
substitute:function(e, t, n) {
n = n || {};
for (var i = this.label, r = 0; r < this.tokens.length; r++) {
var a = this.tokens[r];
this.isTokenAllowed(a.name, n) && (i = a.substitute(i, t, e, n));
}
return i;
},
get metadata() {
var e = o.prototype.getSupportedTokens();
return e.reduce(function(e, t, n) {
var i = t[1].name;
return i || (i = /function ([^(]*)/.exec(t[1] + "")[1]), i && (e[i] = t[0]), e;
}, {});
}
}, t.exports = o;
}, {
"../tokens/data":39,
"../tokens/map":41,
"../tokens/method":42,
"../tokens/piped":43
} ],
36:[ function(e, t, n) {
var i = (e("../utils"), e("../tokens/decoration")), r = "tml", a = "\\[[\\w]*:", s = "\\]", o = "\\[[\\w]*\\]", u = "\\[\\/\\s*[\\w]*\\s*\\]", l = "<[^\\>]*>", c = "<\\/\\s*[^\\>]*\\s*>", h = "[^\\[\\]<>]+", p = "short", f = "long", d = "html", g = function(e) {
this.label = e, this.fragments = [], this.tokens = [], this.tokenize();
};
g.prototype = {
tokenize:function() {
var e = [ a, s, o, u, l, c, h ].join("|");
return e = new RegExp(e, "g"), this.fragments = ("[" + r + "]" + this.label + "[/" + r + "]").match(e), 
this.fragments;
},
peek:function() {
return 0 === this.fragments.length ? null :this.fragments[0];
},
getNextFragment:function() {
return 0 === this.fragments.length ? null :this.fragments.shift();
},
parse:function() {
var e, t = this.getNextFragment();
return t.match(new RegExp(a)) ? (e = t.replace(/[\[:]/g, ""), e ? this.parseTree(e, p) :t) :t.match(new RegExp(o)) ? (e = t.replace(/[\[\]]/g, ""), 
e ? this.parseTree(e, f) :t) :t.match(new RegExp(l)) ? -1 !== t.indexOf("/>") ? t :(e = t.replace(/[<>]/g, "").split(" ")[0], 
e ? this.parseTree(e, d) :t) :t;
},
parseTree:function(e, t) {
var n, i, a = [ e ];
if (Object.defineProperty(a, "tokenType", {
value:t,
configurable:!0,
enumerable:!1,
writable:!0
}), -1 === this.tokens.indexOf(e) && e !== r && this.tokens.push(e), t === p) for (var o = !0; null !== this.peek() && !(i = this.peek().match(new RegExp(s))); ) {
var u = this.parse();
o && "string" == typeof u && (u = u.replace(/^\s+/, ""), o = !1), a.push(u);
} else if (t === f) for (n = new RegExp("\\[\\/\\s*" + e + "\\s*\\]"); null !== this.peek() && !(i = this.peek().match(n)); ) a.push(this.parse()); else if (t === d) for (n = new RegExp("<\\/\\s*" + e + "\\s*>"); null !== this.peek() && !(i = this.peek().match(n)); ) a.push(this.parse());
return i || Object.defineProperty(a, "tokenError", {
value:"noclose",
configurable:!0,
enumerable:!1,
writable:!0
}), this.getNextFragment(), a;
},
apply:function(e, t) {
var n = new i(e, this.label);
return n.apply(this.context, t, this.options.allowed_tokens);
},
evaluate:function(e) {
if (!(e instanceof Array)) return e;
var t = e[0];
e.shift();
for (var n = this, i = [], r = 0; r < e.length; r++) i.push(n.evaluate(e[r]));
return this.apply(t, i.join(""));
},
substitute:function(e, t) {
this.context = e || {}, this.options = t || {};
var n = this.evaluate(this.parse());
return n = n.replace("[/" + r + "]", "");
},
metadata:{
"short":{
start:a,
end:s
},
"long":{
start:o,
end:u
},
html:{
start:l,
end:c
}
}
}, t.exports = g;
}, {
"../tokens/decoration":40,
"../utils":51
} ],
37:[ function(e, t, n) {
var i = e("../utils"), r = e("../configuration"), a = function(e, t, n) {
this.doc = e, this.context = t || {}, this.tokens = [], this.options = n || {};
};
a.prototype = {
translate:function() {
return this.translateTree(this.doc);
},
translateTree:function(e) {
if (this.isNonTranslatableNode(e)) return e.innerHTML;
if (3 === e.nodeType) return this.translateTml(e.nodeValue);
for (var t = "", n = "", i = 0; i < e.childNodes.length; i++) {
var r = e.childNodes[i];
if (3 === r.nodeType) n += r.nodeValue; else if (this.isInlineNode(r) && this.hasInlineOrTextSiblings(r) && !this.isBetweenSeparators(r)) n += this.generateTmlTags(r); else if (this.isSeparatorNode(r)) "" !== n && (t += this.translateTml(n)), 
t += this.generateHtmlToken(r), n = ""; else {
"" !== n && (t += this.translateTml(n));
var a = this.translateTree(r);
t += this.isIgnoredNode(r) ? a :this.generateHtmlToken(r, a), n = "";
}
}
return "" !== n && (t += this.translateTml(n)), t;
},
isNoTranslate:function(e) {
if (e.attributes) for (var t = 0; t < e.attributes.length; t++) {
if ("notranslate" === e.attributes[t].name) return !0;
if ("class" === e.attributes[t].name && -1 !== e.attributes[t].value.indexOf("notranslate")) return !0;
}
return !1;
},
isNonTranslatableNode:function(e) {
if (!e) return !1;
if (8 === e.nodeType) return !0;
if (1 === e.nodeType) {
if (-1 !== this.getOption("nodes.scripts").indexOf(e.nodeName.toLowerCase())) return !0;
if (0 === e.childNodes.length && "" === e.nodeValue) return !0;
if (this.isNoTranslate(e)) return !0;
}
return !1;
},
translateTml:function(e) {
if (this.isEmptyString(e)) return e;
e = this.generateDataTokens(e);
var t = this.options.current_language || r.currentLanguage;
if (this.getOption("split_sentences")) {
sentences = i.splitSentences(e), translation = e;
var n = this;
return sentences.forEach(function(e) {
var i = n.getOption("debug") ? n.debugTranslation(e) :t.translate(e, n.tokens, n.options);
translation = translation.replace(e, i);
}), this.resetContext(), translation;
}
return e = e.replace(/[\n]/g, "").replace(/\s\s+/g, " ").trim(), translation = this.getOption("debug") ? this.debugTranslation(e) :t.translate(e, this.tokens, this.options), 
this.resetContext(), translation;
},
isBetweenSeparators:function(e) {
return this.isSeparatorNode(e.previousSibling) && !this.isValidTextNode(e.nextSibling) ? !0 :this.isSeparatorNode(e.nextSibling) && !this.isValidTextNode(e.previousSibling) ? !0 :!1;
},
generateTmlTags:function(e) {
var t = "", n = this;
if (this.isNoTranslate(e)) {
var i = this.contextualize(this.adjustName(e), e.innerHTML);
return "{" + i + "}";
}
var r = e.tagName.toLowerCase();
if ("var" === r) return this.registerDataTokenFromVar(e);
for (var a = 0; a < e.childNodes.length; a++) {
var s = e.childNodes[a];
t += 3 === s.nodeType ? s.nodeValue :n.generateTmlTags(s);
}
var o = n.generateHtmlToken(e), u = this.contextualize(this.adjustName(e), o), l = this.sanitizeValue(t);
return this.isSelfClosingNode(e) ? "{" + u + "}" :this.isShortToken(u, l) ? "[" + u + ": " + l + "]" :"[" + u + "]" + l + "[/" + u + "]";
},
registerDataTokenFromVar:function(e) {
var t = {}, n = "var";
if (e.attributes) for (var i = 0; i < e.attributes.length; i++) {
var r = e.attributes[i];
"" === r.value ? n = r.name :t[r.name] = r.value;
}
return t.value = t.value || e.innerHTML, n = this.contextualize(n, e.innerHTML), 
"{" + n + "}";
},
getOption:function(e) {
return "undefined" == typeof this.options[e] || null === this.options[e] ? i.hashValue(r.translator_options, e) :this.options[e];
},
debugTranslation:function(e) {
return this.getOption("debug_format").replace("{$0}", e);
},
isEmptyString:function(e) {
return e = e.replace(/[\s\n\r\t\0\x0b\xa0\xc2]/g, ""), "" === e;
},
resetContext:function() {
this.tokens = [].concat(this.context);
},
isShortToken:function(e, t) {
return -1 !== this.getOption("nodes.short").indexOf(e.toLowerCase()) || t.length < 20;
},
isOnlyChild:function(e) {
return e.parentNode ? 1 === e.parentNode.childNodes.length :!1;
},
hasInlineOrTextSiblings:function(e) {
if (!e.parentNode) return !1;
for (var t = 0; t < e.parentNode.childNodes.length; t++) {
var n = e.parentNode.childNodes[t];
if (n !== e && (this.isInlineNode(n) || this.isValidTextNode(n))) return !0;
}
return !1;
},
isInlineNode:function(e) {
return 1 === e.nodeType && -1 !== this.getOption("nodes.inline").indexOf(e.tagName.toLowerCase()) && !this.isOnlyChild(e);
},
isContainerNode:function(e) {
return 1 === e.nodeType && !this.isInlineNode(e);
},
isSelfClosingNode:function(e) {
return !e.firstChild;
},
isIgnoredNode:function(e) {
return 1 != e.nodeType ? !0 :-1 != this.getOption("nodes.ignored").indexOf(e.tagName.toLowerCase());
},
isValidTextNode:function(e) {
return e ? 3 == e.nodeType && !this.isEmptyString(e.nodeValue) :!1;
},
isSeparatorNode:function(e) {
return e ? 1 === e.nodeType && -1 !== this.getOption("nodes.splitters").indexOf(e.tagName.toLowerCase()) :!1;
},
sanitizeValue:function(e) {
return e.replace(/^\s+/, "");
},
replaceSpecialCharacters:function(e) {
if (!this.getOption("data_tokens.special.enabled")) return e;
var t = e.match(this.getOption("data_tokens.special.regex")), n = this;
return t.forEach(function(t) {
token = t.substring(1, t.length - 2), n.context[token] = t, e = e.replace(t, "{" + token + "}");
}), e;
},
generateDataTokens:function(e) {
var t = this;
e = this.sanitizeValue(e);
var n = null;
if (this.getOption("data_tokens.date.enabled")) {
n = t.getOption("data_tokens.date.name");
var i = t.getOption("data_tokens.date.formats");
i.forEach(function(i) {
var r = i[0], a = (i[1], e.match(r));
a && a.forEach(function(i) {
var r = i, a = t.contextualize(n, r), s = "{" + a + "}";
e = e.replace(i, s);
});
});
}
var r = this.getOption("data_tokens.rules");
return r && r.forEach(function(n) {
if (n.enabled) {
var i = e.match(n.regex);
i && i.forEach(function(i) {
var r = i.trim();
if ("" !== r) {
var a = t.contextualize(n.name, r), s = i.replace(r, "{" + a + "}");
e = e.replace(i, s);
}
});
}
}), e;
},
generateHtmlToken:function(e, t) {
var n = e.tagName.toLowerCase(), r = e.attributes, a = {};
if (t = t ? t :"{$0}", 0 === r.length) return this.isSelfClosingNode(e) ? "br" == n || "hr" == n ? "<" + n + "/>" :"<" + n + "></" + n + ">" :"<" + n + ">" + t + "</" + n + ">";
for (var s = 0; s < r.length; s++) a[r[s].name] = r[s].value;
var o = i.keys(a);
o.sort();
var u = [];
return o.forEach(function(e) {
var t = -1 != a[e].indexOf("'") ? '"' :"'";
u.push(e + "=" + t + a[e] + t);
}), u = u.join(" "), this.isSelfClosingNode(e) ? "<" + n + " " + u + "></" + n + ">" :"<" + n + " " + u + ">" + t + "</" + n + ">";
},
adjustName:function(e) {
var t = e.tagName.toLowerCase(), n = this.getOption("name_mapping");
return t = n[t] ? n[t] :t;
},
contextualize:function(e, t) {
if (this.tokens[e] && this.tokens[e] != t) {
var n = 0, i = e.match(/\d+$/);
return i && i.length > 0 && (n = parseInt(i[i.length - 1]), e = e.replace("" + n, "")), 
e += n + 1, this.contextualize(e, t);
}
return this.tokens[e] = t, e;
},
debug:function(e) {
this.doc = e, this.debugTree(e, 0);
},
debugTree:function(e, t) {
var n = new Array(t + 1).join("=");
if (console.log(n + "=> " + typeof e + ": " + this.nodeInfo(e)), e.childNodes) for (var i = this, r = 0; r < e.childNodes.length; r++) {
var a = e.childNodes[r];
i.debugTree(a, t + 1);
}
},
nodeInfo:function(e) {
var t = [];
return t.push(e.nodeType), 1 === e.nodeType && t.push(e.tagName), this.isInlineNode(e) && (t.push("inline"), 
this.hasInlineOrTextSiblings(e) ? t.push("sentence") :t.push("only translatable")), 
this.isSelfClosingNode(e) && t.push("self closing"), this.isOnlyChild(e) && t.push("only child"), 
3 === e.nodeType ? "[" + t.join(", ") + ']: "' + e.nodeValue + '"' :"[" + t.join(", ") + "]";
}
}, t.exports = a;
}, {
"../configuration":21,
"../utils":51
} ],
38:[ function(e, t, n) {
var i = (e("../utils"), e("../configuration")), r = e("../tokens/xmessage/decoration"), a = e("../tokens/xmessage/data"), s = e("../tokens/xmessage/choice"), o = e("../tokens/xmessage/map"), u = function(e, t) {
this.label = e, this.pos = 0, this.len = e ? e.length :0, this.last = null, this.options = t || {}, 
this.tokenize();
};
u.prototype = {
cache:{},
optionalStyleFormatTypes:{
text:!0,
date:!0,
time:!0,
number:!0,
name:!0,
list:!0,
possessive:!0,
salutation:!0
},
updateLast:function() {
this.last = this.pos > 0 ? this.label.charAt(this.pos - 1) :null;
},
next:function() {
return 0 === this.len || this.pos >= this.len ? null :(this.updateLast(), this.label.charAt(this.pos++));
},
peek:function() {
return 0 === this.len ? null :this.label.charAt(this.pos);
},
revert:function() {
this.pos > 0 && (this.pos--, this.updateLast());
},
isEscaped:function() {
return this.last && "\\" == this.last;
},
noFormatStyle:function(e, t, n, i) {
throw "no format style allowed for format type '" + i + "'";
},
collectionFormatStyle:function(e, t, n, i) {
var r = [], a = "text";
if ("," == t) for (a = "", t = this.next(); t && -1 == ",}".indexOf(t); ) if (a += t, 
t = this.next(), null == t) throw "expected ',' or '}', but found end of string";
if (e.push({
index:n,
type:i,
subtype:a,
styles:r
}), "}" != t) for (;t; ) {
if (t = this.next(), null == t) throw "expected '}', '|' or format style value, but found end of string";
if ("}" == t && !this.isEscaped()) return;
if ("|" != t) {
for (var s = ""; t && -1 == "#<|}".indexOf(t); ) if (s += t, t = this.next(), null == t) throw "expected '#', '<' or '|', but found end of string";
"<" == t && (s += t);
var o = [];
r.push({
key:s,
items:o
}), "#<".indexOf(t) > -1 ? this.traverseText(o) :"|}".indexOf(t) > -1 && this.revert();
}
}
},
textFormatStyle:function(e, t, n, i) {
var r = "";
if (t = this.next(), null == t) throw "expected format style or '}', but found end of string";
for (;t; ) {
if ("}" == t) return void e.push({
index:n,
type:i,
value:r
});
if (r += t, t = this.next(), null == t) throw "expected '}', but found end of string";
}
},
defaultFormatStyle:function(e, t, n, i) {
var r = [];
for (e.push({
index:n,
type:i,
styles:r
}); t; ) {
if (t = this.next(), null == t) throw "expected '}', '|' or format style value, but found end of string";
if ("}" == t && !this.isEscaped()) return;
if ("|" != t) {
for (var a = ""; t && -1 == "#<+|}".indexOf(t); ) if (a += t, t = this.next(), null == t) throw "expected '#', '<', '+' or '|', but found end of string";
("<" == t || "+" == t) && (a += t);
var s = [];
r.push({
key:a,
items:s
}), "#<+".indexOf(t) > -1 ? this.traverseText(s) :"|}".indexOf(t) > -1 && this.revert();
}
}
},
traverseFormatElement:function(e) {
var t = -1, n = null, i = this.next();
if (null == i) throw "expected place holder index, but found end of string";
if (/[\d:]/.test(i)) {
for (var r = ":" == i, a = ""; i && -1 == ",}".indexOf(i); ) if (a += i, i = this.next(), 
null == i) throw "expected ',' or '}', but found end of string";
if (!r && !/\d+/.test(a)) throw "argument index must be numeric: " + a;
t = r ? a :1 * a;
}
if ("}" != i) {
if (n = "", i = this.next(), null == i) throw "expected format type, but found end of string";
for (;i && -1 == ",}".indexOf(i) && !this.isEscaped(); ) if (n += i, i = this.next(), 
null == i) throw "expected ',' or '}', but found end of string";
}
if ("}" != i || this.isEscaped()) {
if ("," != i) throw "expected ',' or '}', but found '" + i + "' at position " + this.pos();
var s = {
list:this.collectionFormatStyle,
date:this.textFormatStyle,
time:this.textFormatStyle,
number:this.textFormatStyle,
suffix:this.textFormatStyle,
possessive:this.noFormatStyle,
salutation:this.noFormatStyle,
"default":this.defaultFormatStyle
}, o = (s[n] || s["default"]).bind(this);
o(e, i, t, n);
} else if (n && this.optionalStyleFormatTypes[n]) e.push({
type:n,
index:t
}); else {
if (n) throw "expected format style for format type '" + n + "'";
e.push({
type:"param",
index:t
});
}
},
traverseText:function(e) {
for (var t = !1, n = "", i = this.next(); i; ) {
if ("'" == i && (t = !t), t || "{" != i || this.isEscaped()) {
if (!(t || "|" != i && "}" != i || this.isEscaped())) {
this.revert();
break;
}
n += i;
} else n.length > 0 && (e.push({
type:"trans",
value:n
}), n = ""), this.traverseFormatElement(e);
i = this.next();
}
return n.length > 0 && (e.push({
type:"trans",
value:n
}), n = ""), e;
},
tokenize:function() {
var e = [];
try {
this.traverseText(e), this.tree = e;
} catch (t) {
console.log("Failed to parse the expression: " + this.label), this.tree = null;
}
},
choice:function(e, t, n) {
if (!t || 0 === t.context_keys.length) return null;
var r = t.context_keys[0], a = e.getContextByKeyword(r);
if (a) {
var s = a.findMatchingRule(n);
if (s) return i.getXMessageRuleKeyByContextRuleKey(r, s.keyword);
}
return null;
},
compile:function(e, t, n, i) {
var r = this, a = null;
return t.forEach(function(t) {
var s = r.getTokenByType(t.type, t), o = r.getTokenObject(i, s), u = r.getTokenDisplayValue(i, s, e);
if (t.styles) if (r.isChoiceToken(t.type)) {
var l = r.choice(e, s, o);
a = t.styles.find(function(e) {
return e.key === l;
}), a && r.compile(e, a.items, n, i);
} else r.isMapToken(t.type) ? (a = t.styles.find(function(e) {
return e.key === u;
}), r.compile(e, a.items, n, i)) :r.isDecorationToken(t.type) ? (n.push(s.getOpenTag(o)), 
r.compile(e, t.styles[0].items, n, i), n.push(s.getCloseTag())) :r.compile(e, t.styles[0].items, n, i); else r.isDataToken(t.type) ? n.push(u) :n.push(t.value);
}), n;
},
isDecorationToken:function(e) {
return e ? -1 !== i.xmessage.decoration_tokens.indexOf(e) || i.isDefaultDecorationToken(e) :!1;
},
isDataToken:function(e) {
return e ? -1 !== i.xmessage.data_tokens.indexOf(e) :!1;
},
isChoiceToken:function(e) {
return e ? -1 !== i.xmessage.choice_tokens.indexOf(e) :!1;
},
isMapToken:function(e) {
return e ? -1 !== i.xmessage.map_tokens.indexOf(e) :!1;
},
getTokenByType:function(e, t) {
return this.isDecorationToken(e) ? new r(this.label, t) :this.isDataToken(e) ? new a(this.label, t) :this.isChoiceToken(e) ? new s(this.label, t) :this.isMapToken(e) ? new o(this.label, t) :null;
},
getTokenDisplayValue:function(e, t, n) {
return t ? t.getTokenValue(e, n) :null;
},
getTokenObject:function(e, t) {
return t ? t.getTokenObject(e) :null;
},
substitute:function(e, t, n) {
return this.tree ? this.compile(e, this.tree, [], t).join("") :this.label;
}
}, t.exports = u;
}, {
"../configuration":21,
"../tokens/xmessage/choice":44,
"../tokens/xmessage/data":45,
"../tokens/xmessage/decoration":46,
"../tokens/xmessage/map":47,
"../utils":51
} ],
39:[ function(e, t, n) {
function i(e, t) {
e && (this.full_name = e, this.label = t, this.parseElements());
}
var r = e("../utils"), a = (e("../logger"), e("../configuration")), s = e("../decorators/html");
i.prototype = {
parseElements:function() {
var e = this.full_name.replace(/[%\{\}]/g, "").trim(), t = e.split("::")[0].trim();
this.short_name = e.split(":")[0].trim(), this.case_keys = [];
for (var n = e.match(/(::\s*\w+)/g) || [], i = 0; i < n.length; i++) this.case_keys.push(n[i].replace(/[:]/g, "").trim());
for (this.context_keys = [], n = t.match(/(:\s*\w+)/g) || [], i = 0; i < n.length; i++) this.context_keys.push(n[i].replace(/[:]/g, "").trim());
},
getContextForLanguage:function(e) {
return this.context_keys.length > 0 ? e.getContextByKeyword(this.context_keys[0]) :e.getContextByTokenName(this.short_name);
},
error:function(e) {
return this.full_name;
},
getTokenValueFromArrayParam:function(e, t, n) {
if (n = n || {}, 0 === e.length) return this.error("Invalid number of params of an array");
var i = e[0], a = e.length > 1 ? e[1] :null;
return r.isArray(i) ? this.getTokenValueFromArray(e, t, n) :a && r.isFunction(a) ? this.sanitize(a(i), i, t, r.extend(n, {
safe:!0
})) :a ? this.sanitize(a.toString(), i, t, r.extend(n, {
safe:!0
})) :this.sanitize("" + i, i, t, r.extend(n, {
safe:!1
}));
},
getTokenValueFromHashParam:function(e, t, n) {
n = n || {};
var i = e.value || e.name || e.first_name || e.username, a = e.method, s = e.object;
if (a && r.isFunction(a)) return this.sanitize(a(s), s, t, r.extend(n, {
safe:!0
}));
if (i) return this.sanitize(i, s || e, t, r.extend(n, {
safe:!0
}));
if (!s) return this.sanitize(e.toString(), s, t, r.extend(n, {
safe:!1
}));
var o = e.attribute;
return o ? this.sanitize(s[o], s, t, r.extend(n, {
safe:!1
})) :this.error("Missing value for hash token");
},
getTokenValueFromArray:function(e, t, n) {
var i = {
description:"List joiner",
limit:4,
separator:", ",
joiner:"and",
less:"{laquo} less",
translate:!1,
expandable:!1,
collapsable:!0
};
n = n || {};
var a = e[0], o = e.length > 1 ? e[1] :null;
e.length > 2 && (i = r.extend(i, e[2])), n.skip_decorations && (i.expandable = !1);
for (var u, l = n.target_language || t, c = [], h = 0; h < a.length; h++) {
var p = a[h];
if (null === o) u = this.getTokenValueFromHashParam(p, t, n), i.translate && l && (u = l.translate(u, "", {}, n)), 
c.push(s.decorateElement(this, u, n)); else if (r.isFunction(o)) c.push(s.decorateElement(this, this.sanitize(o(p), p, t, r.extend(n, {
safe:!0
})), n)); else if ("string" == typeof o) if (o.match(/^@/)) {
var f = o.replace(/^@/, "");
u = p[f] || p[f](), i.translate && l && (u = l.translate(u, "", {}, n)), c.push(s.decorateElement(this, this.sanitize(u, p, t, r.extend(n, {
safe:!1
})), n));
} else u = "" + p, i.translate && l && (u = l.translate(u, "", {}, n)), c.push(s.decorateElement(this, o.replace("{$0}", this.sanitize(u, p, t, r.extend(n, {
safe:!1
}))), n)); else if (r.isObject(o)) {
var d = o.attribute || o.property;
d && p[d] ? (d = this.sanitize(p[d], p, t, r.extend(n, {
safe:!1
})), i.translate && l && (d = l.translate(d, "", {}, n)), o.value ? c.push(s.decorateElement(this, o.value.replace("{$0}", d), n)) :c.push(s.decorateElement(this, d || "" + p, n))) :(u = this.getTokenValueFromHashParam(p, t, n), 
i.translate && l && (u = l.translate(u, "", {}, n)), c.push(s.decorateElement(this, u, n)));
}
}
if (1 == c.length) return c[0];
if (!i.joiner || "" === i.joiner) return c.join(i.separator);
var g = l.translate(i.joiner, i.description, {}, n);
if (c.length <= i.limit) {
var m = c.pop();
return c.join(i.separator) + " " + g + " " + m;
}
var v = c.slice(0, i.limit), _ = c.slice(i.limit), y = v.join(i.separator), x = l.translate("{count || other}", i.description, {
count:_.length
}, n);
if (!i.expandable) return y = y + " " + g + " ", r.isFunction(i) ? y + i.remainder(_) :y + x;
var b = i.key ? i.key :r.generateKey(this.label, c.join(","));
y = y + '<span id="tml_other_link_' + b + '"> ' + g + " ", y = y + '<a href="#" class="tml_other_list_link" onClick="document.getElementById(\'tml_other_link_' + b + "').style.display='none'; document.getElementById('tml_other_elements_" + b + "').style.display='inline'; return false;\">", 
y += i.remainder && "function" == typeof i.remainder ? i.remainder(_) :x, y += "</a></span>", 
y = y + '<span id="tml_other_elements_' + b + '" style="display:none">' + i.separator;
var k = _.pop();
return y += _.join(i.separator), y = y + " " + g + " " + k, i.collapsable && (y = y + ' <a href="#" class="tml_other_less_link" style="font-size:smaller;white-space:nowrap" onClick="document.getElementById(\'tml_other_link_' + b + "').style.display='inline'; document.getElementById('tml_other_elements_" + b + "').style.display='none'; return false;\">", 
y += l.translate(i.less, i.description, {}, n), y += "</a>"), y += "</span>";
},
getTokenObject:function(e, t) {
if (!e) return null;
t = t || this.short_name, t && r.isString(t) && (t = t.replace(/:/, ""));
var n = e[t];
return r.isArray(n) ? n[0] :n && n.object || n;
},
getTokenValue:function(e, t, n) {
e = e || {}, n = n || {};
var i = this.short_name;
i && r.isString(i) && (i = i.replace(/:/, ""));
var s = i in e, o = s ? e[i] :a.getDefaultToken(i);
return r.isUndefinedOrNull(o) ? this.error("Missing token value") :r.isString(o) ? this.sanitize(o.toString(), o, t, r.extend(n, {
safe:!0
})) :r.isArray(o) ? this.getTokenValueFromArrayParam(o, t, n) :r.isObject(o) ? this.getTokenValueFromHashParam(o, t, n) :this.sanitize(o.toString(), o, t, r.extend(n, {
safe:!1
}));
},
applyCase:function(e, t, n, i, r) {
var a = i.getLanguageCaseByKeyword(e);
return a ? a.apply(t, n, r) :t;
},
sanitize:function(e, t, n, i) {
if (i = i || {}, e = "" + e, i.safe || (e = r.escapeHTML(e)), this.case_keys.length > 0) for (var a = 0; a < this.case_keys.length; a++) e = this.applyCase(this.case_keys[a], e, t, n, i);
return e;
},
substitute:function(e, t, n, i) {
return e.replace(this.full_name, s.decorateToken(this, this.getTokenValue(t, n, i), i));
},
getDecorationName:function() {
return "data";
}
}, t.exports = i;
}, {
"../configuration":21,
"../decorators/html":22,
"../logger":29,
"../utils":51
} ],
40:[ function(e, t, n) {
function i(e, t) {
e && (this.label = t, this.full_name = e, this.short_name = this.full_name, this.default_name = this.short_name.replace(/(\d)*$/, ""));
}
var r = e("../utils"), a = (e("../logger"), e("../configuration")), s = "tml", o = "{$0}";
i.prototype = {
isTokenAllowed:function(e, t) {
return !t || -1 !== t.indexOf(e);
},
getDefaultDecoration:function(e, t) {
var n = a.getDefaultToken(this.default_name, "decoration");
if (null === n) return "<" + this.short_name + ">" + e + "</" + this.short_name + ">";
if (n = n.replace(o, e), r.isObject(t)) {
var i = r.keys(t);
i.forEach(function(e) {
n = n.replace("{$" + e + "}", t[e]);
});
} else if (r.isArray(t)) {
var s = 1;
t.forEach(function(e) {
n = n.replace("{$" + s++ + "}", e);
});
}
return n = n.replace(/[\w]*=['"]\{\$[^\}]*\}['"]/g, "").replace(/\s*>/, ">").trim();
},
apply:function(e, t, n) {
if (this.short_name === s) return t;
if (!this.isTokenAllowed(this.short_name, n)) return t;
var i = e[this.short_name];
return i ? "string" == typeof i ? i.replace(o, t) :"function" == typeof i ? i(t) :r.isArray(i) || r.isObject(i) ? this.getDefaultDecoration(t, i) :t :this.getDefaultDecoration(t);
},
getTokenObject:function(e, t) {
return e = e || {}, t = t || this.short_name, t && r.isString(t) && (t = t.replace(/:/, "")), 
e[t];
},
getTokenValue:function(e, t, n) {
return this.getTokenObject(e, this.short_name);
}
}, t.exports = i;
}, {
"../configuration":21,
"../logger":29,
"../utils":51
} ],
41:[ function(e, t, n) {
function i(e, t) {
e && (this.full_name = e, this.label = t, this.params = [], this.context_keys = [], 
this.case_keys = [], this.parseElements());
}
var r = (e("../utils"), e("../decorators/html")), a = e("./data");
i.prototype = new a(), i.prototype.constructor = i, i.prototype.parseElements = function() {
var e = this.full_name.replace(/[%\{\}]/g, "").trim(), t = e.split("@");
this.short_name = t[0].trim();
var n = this, i = t[1].trim();
if ("" !== i && (i.split(",").forEach(function(e) {
n.params.push(e.trim());
}), -1 !== this.params[0].indexOf(":"))) {
var r = {};
this.params.forEach(function(e) {
t = e.split(":"), r[t[0].trim()] = t[1].trim();
}), this.params = r;
}
}, i.prototype.substitute = function(e, t, n, i) {
var a = this.getTokenObject(t);
if ("undefined" == typeof a || null === a) return this.error("Missing value for a token " + this.full_name), 
e;
if (0 === this.params.length) return this.error("Params may not be empty for token " + this.full_name), 
e;
var s = this.params[a], o = r.decorateToken(this, s, i);
return e.replace(this.full_name, o, i);
}, i.prototype.getDecorationName = function() {
return "map";
}, t.exports = i;
}, {
"../decorators/html":22,
"../utils":51,
"./data":39
} ],
42:[ function(e, t, n) {
function i(e, t) {
e && (this.full_name = e, this.label = t, this.parseElements(), this.initObject());
}
var r = e("../utils"), a = e("../decorators/html"), s = e("./data");
i.prototype = new s(), i.prototype.constructor = i, i.prototype.initObject = function() {
var e = this.short_name.split(".");
this.short_name = e[0], this.object_method = e[1];
}, i.prototype.getTokenValue = function(e, t, n) {
e = e || {};
var i = e[this.short_name];
if (!i) return this.error("Missing token value");
var a;
return a = r.isFunction(i[this.object_method]) ? i[this.object_method]() :i[this.object_method];
}, i.prototype.substitute = function(e, t, n, i) {
return i = i || {}, e.replace(this.full_name, a.decorateToken(this, this.sanitize(this.getTokenValue(t), this.getTokenObject(t), n, r.extend(i, {
safe:!1
})), i));
}, i.prototype.getDecorationName = function() {
return "method";
}, t.exports = i;
}, {
"../decorators/html":22,
"../utils":51,
"./data":39
} ],
43:[ function(e, t, n) {
function i(e, t) {
e && (this.full_name = e, this.label = t, this.parseElements());
}
var r = e("../utils"), a = e("../decorators/html"), s = e("./data");
i.prototype = new s(), i.prototype.constructor = i, i.prototype.parseElements = function() {
var e = this.full_name.replace(/[%\{\}]/g, "").trim(), t = e.split("|"), n = t[0].trim();
this.short_name = n.split(":")[0].trim(), this.case_keys = [];
for (var i = n.match(/(::\s*\w+)/g) || [], r = 0; r < i.length; r++) this.case_keys.push(i[r].replace(/[:]/g, "").trim());
this.context_keys = [];
var a = n.split("::")[0].trim();
for (i = a.match(/(:\s*\w+)/g) || [], r = 0; r < i.length; r++) this.context_keys.push(i[r].replace(/[:]/g, "").trim());
if (this.separator = -1 != this.full_name.indexOf("||") ? "||" :"|", this.parameters = [], 
t = e.split(this.separator), t.length > 1) for (t = t[1].split(","), r = 0; r < t.length; r++) this.parameters.push(t[r].trim());
}, i.prototype.isValueDisplayedInTranslation = function() {
return "||" == this.separator;
}, i.prototype.generateValueMapForContext = function(e) {
var t, n, i = {};
if (-1 != this.parameters[0].indexOf(":")) {
for (t = 0; t < this.parameters.length; t++) {
var a = this.parameters[t].split(":");
i[a[0].trim()] = a[1].trim();
}
return i;
}
var s = e.token_mapping;
if (!s) return this.error("The token context " + e.keyword + "does not support transformation for unnamed params"), 
null;
if ("string" == typeof s) return this.error("The token mapping " + s + " does not support the parameters."), 
null;
if (r.isArray(s)) {
if (this.parameters.length > s.length) return this.error("The token mapping " + s + " does not support " + this.parameters.length + " parameters"), 
null;
if (s = s[this.parameters.length - 1], "string" == typeof s) return this.error("The token mapping " + s + " does not support " + this.parameters.length + " parameters"), 
null;
}
var o = r.keys(s);
for (t = 0; t < o.length; t++) {
var u = o[t], l = s[u];
i[u] = l;
var c = l.match(/{\$\d(::[\w]+)*\}/g) || [];
for (n = 0; n < c.length; n++) {
var h = c[n], p = h.replace(/[\{\}]/g, ""), f = p.split("::"), d = parseInt(f[0].replace(/[$]/, ""));
if (this.parameters.length < d) return this.error("The index inside " + s + " is out of bound: " + this.full_name), 
null;
var g = this.parameters[d];
f.shift();
for (var m = 0; m < f.length; m++) {
var v = e.language.getLanguageCaseByKeyword(f[m]);
v && (g = v.apply(g));
}
i[u] = i[u].replace(c[n], g);
}
}
return i;
}, i.prototype.substitute = function(e, t, n, i) {
if (!(this.short_name in t)) return this.error("Missing value"), e;
var r = this.getTokenObject(t);
if (0 === this.parameters.length) return this.error("Piped params may not be empty"), 
e;
var s = this.getContextForLanguage(n), o = this.generateValueMapForContext(s);
if (!o) return e;
var u = s.findMatchingRule(r);
if (null === u) return e;
var l = o[u.keyword];
if (!l) {
var c = s.getFallbackRule();
if (!c || !o[c.keyword]) return this.error("No matching context rule found and no fallback provided"), 
e;
l = o[c.keyword];
}
var h = [], p = a.decorateToken(this, this.getTokenValue(t, n, i), i);
return this.isValueDisplayedInTranslation() ? (h.push(p), h.push(" ")) :l = l.replace("#" + this.short_name + "#", p), 
h.push(l), e.replace(this.full_name, h.join(""));
}, i.prototype.getDecorationName = function() {
return "piped";
}, t.exports = i;
}, {
"../decorators/html":22,
"../utils":51,
"./data":39
} ],
44:[ function(e, t, n) {
function i(e, t) {
this.label = e, this.short_name = t.index, this.full_name = "{" + this.short_name + "}", 
this.rule_keys = [];
var n = this;
t.styles.forEach(function(e) {
n.rule_keys.push(e.key);
}), this.case_keys = [], this.context_keys = [], r.containsAny(this.rule_keys, [ "singular", "plural" ]) ? this.context_keys.push("number") :r.containsAny(this.rule_keys, [ "female", "male" ]) ? this.context_keys.push("gender") :r.containsAny(this.rule_keys, [ "future", "past", "present" ]) && this.context_keys.push("date");
}
var r = e("../../utils"), a = (e("../../logger"), e("../data"));
i.prototype = new a(), i.prototype.constructor = a, t.exports = i;
}, {
"../../logger":29,
"../../utils":51,
"../data":39
} ],
45:[ function(e, t, n) {
function i(e, t) {
this.label = e, this.short_name = t.index, this.full_name = "{" + this.short_name + "}", 
this.case_keys = [], this.context_keys = [];
}
var r = e("../data");
i.prototype = new r(), i.prototype.constructor = r, t.exports = i;
}, {
"../data":39
} ],
46:[ function(e, t, n) {
function i(e, t) {
this.label = e, this.type = t.type, this.short_name = t.index, this.default_name = t.type, 
this.full_name = "{" + t.index + "}", this.case_keys = [], this.context_keys = [], 
this.template = null;
}
var r = e("../../utils"), a = (e("../../logger"), e("../decoration")), s = "{!yield!}";
i.prototype = new a(), i.prototype.constructor = a, i.prototype.getTemplate = function(e) {
return e ? r.isString(e) ? "anchor" === this.type ? "<a href='" + e + "'>" + s + "</a>" :e :r.isArray(e) || r.isObject(e) ? this.getDefaultDecoration(s, e) :s :this.getDefaultDecoration(s);
}, i.prototype.getOpenTag = function(e) {
return this.template = this.getTemplate(e), this.template.split(s)[0];
}, i.prototype.getCloseTag = function() {
var e = this.template.split(s);
return e[e.length - 1];
}, t.exports = i;
}, {
"../../logger":29,
"../../utils":51,
"../decoration":40
} ],
47:[ function(e, t, n) {
function i(e, t) {
this.label = e, this.short_name = t.index, this.full_name = "{" + this.short_name + "}", 
this.case_keys = [], this.context_keys = [], this.params = [];
var n = this;
t.styles.forEach(function(e) {
n.params.push(e.key);
});
}
var r = e("../data");
i.prototype = new r(), i.prototype.constructor = r, t.exports = i;
}, {
"../data":39
} ],
48:[ function(e, t, n) {
var i = e("./utils"), r = e("./tokens/data"), a = function(e) {
i.extend(this, e), e.language && (this.locale = e.language.locale);
};
a.prototype = {
hasContextRules:function() {
return this.context && i.keys(this.context).length > 0;
},
isValidTranslation:function(e) {
if (!this.hasContextRules()) return !0;
for (var t = i.keys(this.context), n = 0; n < t.length; n++) {
var a = t[n], s = this.context[a], o = r.prototype.getTokenObject(e, a);
if (!o) return !1;
for (var u = i.keys(s), l = 0; l < u.length; l++) {
var c = u[l], h = s[u[l]];
if ("other" != h) {
var p = this.language.getContextByKeyword(c);
if (!p) return !1;
var f = p.findMatchingRule(o);
if (!f || f.keyword != h) return !1;
}
}
}
return !0;
}
}, t.exports = a;
}, {
"./tokens/data":39,
"./utils":51
} ],
49:[ function(e, t, n) {
var i = e("./utils"), r = e("./configuration"), a = e("./translation"), s = e("./decorators/html"), o = e("./tokenizers/data"), u = e("./tokenizers/decoration"), l = e("./tokenizers/xmessage"), c = function(e) {
i.extend(this, e), this.key = this.key || i.generateKey(this.label, this.description), 
!this.locale && this.application && (this.locale = this.application.default_locale), 
!this.language && this.application && (this.language = this.application.getLanguage(this.locale)), 
this.translations = {}, this.addTranslations(e.translations || {});
};
c.prototype = {
addTranslations:function(e) {
for (var t = i.keys(e), n = 0; n < t.length; n++) for (var r = t[n], s = e[r], o = 0; o < s.length; o++) {
var u = s[o];
this.addTranslation(new a(i.extend(u, {
language:this.application.getLanguage(u.locale),
translation_key:this
})));
}
},
addTranslation:function(e) {
var t = this.translations[e.locale];
t || (t = []), t.push(e), this.translations[e.locale] = t;
},
setTranslations:function(e, t) {
this.translations[e] = [];
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.translation_key = this, i.language = this.application.getLanguage(i.locale), this.translations[e].push(i);
}
},
resetTranslations:function() {
this.translations = {};
},
getTranslationsForLanguage:function(e) {
return this.translations ? this.translations[e.locale] || [] :[];
},
findFirstValidTranslation:function(e, t) {
for (var n = this.getTranslationsForLanguage(e), i = 0; i < n.length; i++) if (n[i].isValidTranslation(t)) return n[i];
return null;
},
translate:function(e, t, n) {
if (n = n || {}, r.isDisabled()) return this.substituteTokens(this.label, t, e, n);
var i = this.findFirstValidTranslation(e, t), a = s;
return i ? (n.locked = i.locked, a.decorate(this.substituteTokens(i.label, t, i.language, n), i.language, e, this, n)) :(n.target_language = e, 
a.decorate(this.substituteTokens(this.label, t, this.language || e, n), this.language || e, e, this, n));
},
getDataTokens:function() {
if (!this.data_tokens) {
var e = new o(this.label);
this.data_tokens = e.tokens;
}
return this.data_tokens;
},
getDataTokenNames:function() {
if (!this.data_token_names) {
this.data_token_names = [];
for (var e in this.getDataTokens()) this.data_token_names.push(e.full_name);
}
return this.data_token_names;
},
getDecorationTokenNames:function() {
if (!this.decoration_tokens) {
var e = new u(this.label);
e.parse(), this.decoration_tokens = e.tokens;
}
return this.decoration_tokens;
},
substituteTokens:function(e, t, n, r) {
var a;
return "xmessage" == r.syntax ? (a = new l(e), a.substitute(n, t, r)) :((-1 != e.indexOf("[") || -1 != e.indexOf("<")) && (a = new u(e), 
e = a.substitute(t, i.extend(r, {
allowed_tokens:this.getDecorationTokenNames()
}))), -1 != e.indexOf("{") && (a = new o(e), e = a.substitute(n, t, i.extend(r, {
allowed_tokens:this.getDataTokenNames()
}))), e);
}
}, t.exports = c;
}, {
"./configuration":21,
"./decorators/html":22,
"./tokenizers/data":35,
"./tokenizers/decoration":36,
"./tokenizers/xmessage":38,
"./translation":48,
"./utils":51
} ],
50:[ function(e, t, n) {
var i = e("./utils"), r = function(e) {
i.extend(this, e);
};
r.prototype = {
isFeatureEnabled:function(e) {
return this.features && this.features[e];
}
}, t.exports = r;
}, {
"./utils":51
} ],
51:[ function(e, t, n) {
(function(n) {
var i = e("./md5");
t.exports = {
hashValue:function(e, t, n) {
n = n || null;
for (var i = t.split("."), r = 0; r < i.length; r++) {
var a = i[r];
if ("undefined" == typeof e[a]) return n;
e = e[a];
}
return e;
},
stripTags:function(e, t) {
t = (((t || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
return e.replace(i, "").replace(n, function(e, n) {
return t.indexOf("<" + n.toLowerCase() + ">") > -1 ? e :"";
});
},
escapeHtml:function(e) {
return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
},
sanitizeString:function(e) {
return e ? e.replace(/^\s+|\s+$/g, "") :"";
},
splitSentences:function(e) {
var t = /[^.!?\s][^.!?]*(?:[.!?](?![\'"]?\s|$)[^.!?]*)*[.!?]?[\'"]?(?=\s|$)/g;
return e.match(t);
},
unique:function(e) {
return e.reverse().filter(function(e, t, n) {
return -1 === n.indexOf(e, t + 1);
}).reverse();
},
clone:function(e) {
if (null === e || "undefined" == typeof e || "object" != typeof e) return e;
var t = e.constructor();
for (var n in e) t[n] = clone(e[n]);
return t;
},
keys:function(e) {
return Object.keys(e);
},
values:function(e) {
var t = [];
for (var n in e) t.push(e[n]);
return t;
},
swapKeys:function(e) {
var t = {};
for (var n in e) t[e[n]] = n;
return t;
},
generateSourceKey:function(e) {
return this.isFunction(e) && (e = e()), i(e);
},
generateKey:function(e, t) {
return t = t || "", i(e + ";;;" + t);
},
escapeHTML:function(e) {
return e.replace(/[&<>]/g, function(e) {
return {
"&":"&amp;",
"<":"&lt;",
">":"&gt;"
}[e] || e;
});
},
encode:function(e) {
if (!e) return null;
var t = new n(JSON.stringify(e), "utf-8").toString("base64");
return encodeURIComponent(t);
},
decode:function(e) {
if (!e) return null;
try {
return JSON.parse(new n(decodeURIComponent(e), "base64").toString("utf-8"));
} catch (t) {
return JSON.parse(new n(decodeURIComponent(decodeURIComponent(e)), "base64").toString("utf-8"));
}
},
normalizeSource:function(e) {
var t = e.split("?");
return t[0];
},
normalizeParams:function(e, t, n, i) {
return "object" == typeof e ? e :("string" != typeof t && (i = n || {}, n = t || {}, 
t = ""), i = i || {}, {
label:e,
description:t,
tokens:this.merge({}, n),
options:this.merge({}, i)
});
},
normalizePath:function(e) {
return ("/" == e[0] ? "" :"/") + e;
},
assign:function(e, t, n) {
for (var i in t) hasOwnProperty.call(t, i) && (n && i in e && "object" == typeof e[i] && "object" == typeof t[i] ? this.assign(e[i], t[i], n) :e[i] = t[i]);
return e;
},
extend:function(e) {
for (var t = 1; t < arguments.length; t++) e = this.assign(e, arguments[t]);
return e;
},
merge:function(e) {
for (var t = 1; t < arguments.length; t++) e = this.assign(e, arguments[t], !0);
return e;
},
addCSS:function(e, t, n) {
var i = null;
return n ? (i = e.createElement("style"), i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t :i.appendChild(document.createTextNode(t))) :(i = e.createElement("link"), 
i.setAttribute("type", "text/css"), i.setAttribute("rel", "stylesheet"), i.setAttribute("media", "screen"), 
i.setAttribute("href", t)), e.getElementsByTagName("head")[0].appendChild(i), i;
},
addJS:function(e, t, n, i) {
var r = e.createElement("script");
return r.setAttribute("id", t), r.setAttribute("type", "application/javascript"), 
r.setAttribute("src", n), r.setAttribute("charset", "UTF-8"), i && (r.onload = i), 
e.getElementsByTagName("head")[0].appendChild(r), r;
},
getCookieName:function(e) {
return "trex_" + e;
},
getCookie:function(e) {
for (var t = this.getCookieName(e), n = t + "=", i = document.cookie.split(";"), r = 0; r < i.length; r++) {
for (var a = i[r]; " " == a.charAt(0); ) a = a.substring(1);
if (-1 != a.indexOf(n)) return a.substring(n.length, a.length);
}
return "";
},
setCookie:function(e, t) {
var n = this.getCookieName(e);
document.cookie = n + "=" + t + "; path=/";
},
templateCache:{},
template:function(e, t) {
var n = this.templateCache, i = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") :n[e] = n[e] || this.template(document.getElementById(e).innerHTML);
return t ? i(t) :i;
},
element:function(e) {
return "string" == typeof e ? document.getElementById(e) :e;
},
isNumber:function(e) {
return -1 != e.search(/^\s*\d+\s*$/);
},
isArray:function(e) {
return null === e || "undefined" == typeof e ? !1 :-1 !== e.constructor.toString().indexOf("Array");
},
intersect:function(e, t) {
var n;
return t.length > e.length && (n = t, t = e, e = n), e.filter(function(e) {
return t.indexOf(e) > -1;
});
},
containsAny:function(e, t) {
var n = this.intersect(e, t);
return n.length > 0;
},
containsAll:function(e, t) {
var n = this.intersect(e, t);
return n.length === e.length && n.length === t.length;
},
isUndefinedOrNull:function(e) {
return "undefined" == typeof e || null === e;
},
isDate:function(e) {
return null === e || "undefined" == typeof e ? !1 :-1 !== e.constructor.toString().indexOf("Date");
},
isObject:function(e) {
return null === e || "undefined" == typeof e ? !1 :"object" == typeof e;
},
isFunction:function(e) {
return "function" == typeof e;
},
isString:function(e) {
return "string" == typeof e;
},
isURL:function(e) {
return e = "" + e, -1 != e.indexOf("http://") || -1 != e.indexOf("https://");
},
toQueryParams:function(e) {
if ("undefined" == typeof e || null === e) return "";
if ("string" == typeof e) return e;
var t = [];
for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));
return t.join("&");
},
replaceBetween:function(e, t, n, i, r) {
var a = e.substring(0, t), s = e.substring(t, n), o = e.substring(n);
return null != r ? a + s.replace(r, i) + o :a + i + o;
},
toRegex:function(e) {
return this.isString(e) ? e = "/" == e[0] ? e.match(/\/.$/) ? new RegExp(e.substring(1, e.length - 2), e[e.length - 1]) :new RegExp(e.substring(1, e.length - 1)) :new RegExp(e.substring(0, e.length)) :e;
},
extractMatches:function(e, t) {
for (var n, i = []; n = t.exec(e); ) {
var r = {
start:n.index,
end:n.index + n[0].length
};
r.value = e.substring(r.start, r.end), i.push(r);
}
return i;
},
parallel:function(e, t) {
var n, i = 0, r = 0, a = {}, s = function(n) {
e[n](function(e, s) {
return e ? t(e) :(s && (a[n] = s), r++, void (r == i && t(null, a)));
});
};
for (n in e) i++;
i || t(null, a);
for (n in e) s(n);
},
localizeDate:function(e, t) {
return t = t || {}, e;
}
};
}).call(this, e("buffer").Buffer);
}, {
"./md5":30,
buffer:9
} ]
}, {}, [ 6 ]);