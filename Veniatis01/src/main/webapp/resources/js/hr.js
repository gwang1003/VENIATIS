/**
 * Swiper 4.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 1, 2018
 */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t() }
	(this, function () {
		"use strict"; var f = "undefined" == typeof document ? {
			body: {}, addEventListener: function () { }, removeEventListener: function () { }
			, activeElement: { blur: function () { }, nodeName: "" }, querySelector: function () { return null },
			querySelectorAll: function () { return [] }, getElementById: function () { return null },
			createEvent: function () { return { initEvent: function () { } } }, createElement: function () {
				return {
					children: [], childNodes: [],
					style: {}, setAttribute: function () { }, getElementsByTagName: function () { return [] }
				}
			}, location: { hash: "" }
		} : document,
			Y = "undefined" == typeof window ? {
				document: f, navigator: { userAgent: "" }, location: {}, history: {},
				CustomEvent: function () { return this }, addEventListener: function () { }, removeEventListener: function () { },
				getComputedStyle: function () { return { getPropertyValue: function () { return "" } } }, Image: function () { },
				Date: function () { }, screen: {}, setTimeout: function () { }, clearTimeout: function () { }
			} : window,
			l = function (e) { for (var t = 0; t < e.length; t += 1)this[t] = e[t]; return this.length = e.length, this };
		function L(e, t) {
			var a = [], i = 0; if (e && !t && e instanceof l) return e; if (e) if ("string" == typeof e) {
				var s, r, n = e.trim();
				if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
					var o = "div"; for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"),
						0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"),
						(r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1)a.push(r.childNodes[i])
				}
				else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])],
					i = 0; i < s.length; i += 1)s[i] && a.push(s[i])
			} else if (e.nodeType || e === Y || e === f) a.push(e);
			else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1)a.push(e[i]); return new l(a)
		} function r(e) {
			for (var t = [],
				a = 0; a < e.length; a += 1)-1 === t.indexOf(e[a]) && t.push(e[a]); return t
		} L.fn = l.prototype, L.Class = l, L.Dom7 = l;
		var t = {
			addClass: function (e) {
				if (void 0 === e) return this; for (var t = e.split(" "), a = 0; a < t.length; a += 1)for (var i = 0; i < this.length; i += 1)void
					0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]); return this
			}, removeClass: function (e) {
				for (var t = e.split(" "), a = 0; a < t.length; a += 1)for (var i = 0; i < this.length; i += 1)void 0 !== this[i]
					&& void 0 !== this[i].classList && this[i].classList.remove(t[a]); return this
			}, hasClass: function (e) {
				return !!this[0] && this[0].classList.contains(e)
			}, toggleClass: function (e) {
				for (var t = e.split(" "), a = 0; a < t.length; a += 1)
					for (var i = 0; i < this.length; i += 1)void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]); return this
			},
			attr: function (e, t) { var a = arguments; if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (var i = 0; i < this.length; i += 1)if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]); return this }, removeAttr: function (e) { for (var t = 0; t < this.length; t += 1)this[t].removeAttribute(e); return this }, data: function (e, t) { var a; if (void 0 !== t) { for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t; return this } if (a = this[0]) { if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e]; var s = a.getAttribute("data-" + e); return s || void 0 } }, transform: function (e) { for (var t = 0; t < this.length; t += 1) { var a = this[t].style; a.webkitTransform = e, a.transform = e } return this }, transition: function (e) { "string" != typeof e && (e += "ms"); for (var t = 0; t < this.length; t += 1) { var a = this[t].style; a.webkitTransitionDuration = e, a.transitionDuration = e } return this }, on: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; var i = t[0], r = t[1], n = t[2], s = t[3]; function o(e) { var t = e.target; if (t) { var a = e.target.dom7EventData || []; if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1)L(i[s]).is(r) && n.apply(i[s], a) } } function l(e) { var t = e && e.target && e.target.dom7EventData || []; t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t) } "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1); for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) { var u = this[c]; if (r) for (d = 0; d < p.length; d += 1) { var h = p[d]; u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s) } else for (d = 0; d < p.length; d += 1) { var v = p[d]; u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s) } } return this }, off: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; var i = t[0], s = t[1], r = t[2], n = t[3]; "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1); for (var o = i.split(" "), l = 0; l < o.length; l += 1)for (var d = o[l], p = 0; p < this.length; p += 1) { var c = this[p], u = void 0; if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) { var v = u[h]; r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) } } return this }, trigger: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)for (var r = a[s], n = 0; n < this.length; n += 1) { var o = this[n], l = void 0; try { l = new Y.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 }) } catch (e) { (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i } o.dom7EventData = e.filter(function (e, t) { return 0 < t }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData } return this }, transitionEnd: function (t) { var a, i = ["webkitTransitionEnd", "transitionend"], s = this; function r(e) { if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1)s.off(i[a], r) } if (t) for (a = 0; a < i.length; a += 1)s.on(i[a], r); return this }, outerWidth: function (e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, outerHeight: function (e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, offset: function () { if (0 < this.length) { var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0, s = e.clientLeft || a.clientLeft || 0, r = e === Y ? Y.scrollY : e.scrollTop, n = e === Y ? Y.scrollX : e.scrollLeft; return { top: t.top + r - i, left: t.left + n - s } } return null }, css: function (e, t) { var a; if (1 === arguments.length) { if ("string" != typeof e) { for (a = 0; a < this.length; a += 1)for (var i in e) this[a].style[i] = e[i]; return this } if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (a = 0; a < this.length; a += 1)this[a].style[e] = t; return this } return this }, each: function (e) { if (!e) return this; for (var t = 0; t < this.length; t += 1)if (!1 === e.call(this[t], t, this[t])) return this; return this }, html: function (e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1)this[t].innerHTML = e; return this }, text: function (e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1)this[t].textContent = e; return this }, is: function (e) { var t, a, i = this[0]; if (!i || void 0 === e) return !1; if ("string" == typeof e) { if (i.matches) return i.matches(e); if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e); if (i.msMatchesSelector) return i.msMatchesSelector(e); for (t = L(e), a = 0; a < t.length; a += 1)if (t[a] === i) return !0; return !1 } if (e === f) return i === f; if (e === Y) return i === Y; if (e.nodeType || e instanceof l) { for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)if (t[a] === i) return !0; return !1 } return !1 }, index: function () { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1); return e } }, eq: function (e) { if (void 0 === e) return this; var t, a = this.length; return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]) }, append: function () { for (var e, t = [], a = arguments.length; a--;)t[a] = arguments[a]; for (var i = 0; i < t.length; i += 1) { e = t[i]; for (var s = 0; s < this.length; s += 1)if ("string" == typeof e) { var r = f.createElement("div"); for (r.innerHTML = e; r.firstChild;)this[s].appendChild(r.firstChild) } else if (e instanceof l) for (var n = 0; n < e.length; n += 1)this[s].appendChild(e[n]); else this[s].appendChild(e) } return this }, prepend: function (e) { var t, a; for (t = 0; t < this.length; t += 1)if ("string" == typeof e) { var i = f.createElement("div"); for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1)this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]) } else if (e instanceof l) for (a = 0; a < e.length; a += 1)this[t].insertBefore(e[a], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]); return this }, next: function (e) { return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]) }, nextAll: function (e) { var t = [], a = this[0]; if (!a) return new l([]); for (; a.nextElementSibling;) { var i = a.nextElementSibling; e ? L(i).is(e) && t.push(i) : t.push(i), a = i } return new l(t) }, prev: function (e) { if (0 < this.length) { var t = this[0]; return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]) } return new l([]) }, prevAll: function (e) { var t = [], a = this[0]; if (!a) return new l([]); for (; a.previousElementSibling;) { var i = a.previousElementSibling; e ? L(i).is(e) && t.push(i) : t.push(i), a = i } return new l(t) }, parent: function (e) { for (var t = [], a = 0; a < this.length; a += 1)null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode)); return L(r(t)) }, parents: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].parentNode; i;)e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode; return L(r(t)) }, closest: function (e) { var t = this; return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }, find: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)t.push(i[s]); return new l(t) }, children: function (e) { for (var t = [], a = 0; a < this.length; a += 1)for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]); return new l(r(t)) }, remove: function () { for (var e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }, add: function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var a, i; for (a = 0; a < e.length; a += 1) { var s = L(e[a]); for (i = 0; i < s.length; i += 1)this[this.length] = s[i], this.length += 1 } return this }, styles: function () { return this[0] ? Y.getComputedStyle(this[0], null) : {} }
		}; Object.keys(t).forEach(function (e) { L.fn[e] = t[e] });
		var e, a, i, V = {
			deleteProps: function (e) {
				var t = e; Object.keys(t).forEach(function (e) {
					try { t[e] = null } catch (e) { }
					try { delete t[e] } catch (e) { }
				})
			}, nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			}, now: function () {
				return Date.now()
			}, getTranslate: function (e, t) {
				var a, i, s; void 0 === t && (t = "x"); var r = Y.getComputedStyle(e, null);
				return Y.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
					return e.replace(",", ".")
				}).join(", ")),
					s = new Y.WebKitCSSMatrix("none" === i ? "" : i)) : a
					= (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace(
						"translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
					"x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
					"y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
			},
			parseUrlQuery: function (e) {
				var t, a, i, s, r = {}, n = e || Y.location.href; if ("string" == typeof n && n.length)
					for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) { return "" !== e })).length,
						t = 0; t < s; t += 1)i = a[t].replace(/#\S+/g, "").split("="),
							r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || ""; return r
			},
			isObject: function (e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object },
			extend: function () {
				for (var e = [], t = arguments.length; t--;)e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i]; if (null != s)
						for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n], d = Object.getOwnPropertyDescriptor(s, l); void 0 !== d && d.enumerable && (V.isObject(a[l])
								&& V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? (a[l] = {},
									V.extend(a[l], s[l])) : a[l] = s[l])
						}
				} return a
			}
		}, F = (i = f.createElement("div"), {
			touch: Y.Modernizr && !0 === Y.Modernizr.touch || !!("ontouchstart" in Y || Y.DocumentTouch && f
				instanceof Y.DocumentTouch), pointerEvents: !!(Y.navigator.pointerEnabled || Y.PointerEvent || "maxTouchPoints"
					in Y.navigator), prefixedPointerEvents: !!Y.navigator.msPointerEnabled, transition: (a = i.style, "transition"
						in a || "webkitTransition" in a || "MozTransition" in a), transforms3d: Y.Modernizr && !0 === Y.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function () { for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)if (t[a] in e) return !0; return !1 }(), observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y, passiveListener: function () { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function () { e = !0 } }); Y.addEventListener("testPassiveListener", null, t) } catch (e) { } return e }(), gestures: "ongesturestart" in Y
		}), s = function (e) { void 0 === e && (e = {}); var t = this; t.params = e, t.eventsListeners = {}, 
		t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) { t.on(e, t.params.on[e]) }) }, 
		n = { components: { configurable: !0 } }; s.prototype.on = function (e, t, a) { var i = this; if ("function" != typeof t) return i; 
		var s = a ? "unshift" : "push"; return e.split(" ").forEach(function (e) { i.eventsListeners[e] || (i.eventsListeners[e] = []), 
		i.eventsListeners[e][s](t) }), i }, s.prototype.once = function (i, s, e) { var r = this; if ("function" != typeof s) return r; 
		return r.on(i, function e() { for (var t = [], a = arguments.length; a--;)t[a] = arguments[a]; s.apply(r, t), r.off(i, e) }, e) }, 
		s.prototype.off = function (e, i) { var s = this; return s.eventsListeners && e.split(" ").forEach(function (a) { 
		void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) { 
		e === i && s.eventsListeners[a].splice(t, 1) }) }), s }, s.prototype.emit = function () { 
		for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; var a, i, s, r = this; 
		return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : 
		(a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) { 
		if (r.eventsListeners && r.eventsListeners[e]) { var t = []; r.eventsListeners[e].forEach(function (e) { t.push(e) }), 
		t.forEach(function (e) { e.apply(s, i) }) } })), r }, s.prototype.useModulesParams = function (a) { 
		var i = this; i.modules && Object.keys(i.modules).forEach(function (e) { var t = i.modules[e]; t.params && V.extend(a, t.params) }) }, 
		s.prototype.useModules = function (i) { void 0 === i && (i = {}); var s = this; s.modules && Object.keys(s.modules).forEach(function (e) { 
		var a = s.modules[e], t = i[e] || {}; a.instance && Object.keys(a.instance).forEach(function (e) { 
		var t = a.instance[e]; s[e] = "function" == typeof t ? t.bind(s) : t }), a.on && s.on && Object.keys(a.on).forEach(function (e) { 
		s.on(e, a.on[e]) }), a.create && a.create.bind(s)(t) }) }, n.components.set = function (e) { 
		this.use && this.use(e) }, s.installModule = function (t) { 
		for (var e = [], a = arguments.length - 1; 0 < a--;)e[a] = arguments[a + 1]; var i = this; 
		i.prototype.modules || (i.prototype.modules = {}); var s = t.name || Object.keys(i.prototype.modules).length 
		+ "_" + V.now(); return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) { i.prototype[e] = t.proto[e] }), 
		t.static && Object.keys(t.static).forEach(function (e) { i[e] = t.static[e] }), t.install && t.install.apply(i, e), i }, s.use = function (e) { 
		for (var t = [], a = arguments.length - 1; 0 < a--;)t[a] = arguments[a + 1]; var i = this; return Array.isArray(e) ? (e.forEach(function (e) { 
		return i.installModule(e) }), i) : i.installModule.apply(i, [e].concat(t)) }, Object.defineProperties(s, n); var o = {
		updateSize: function () { var e, t, a = this, i = a.$el; e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, 
		t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (
		e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(
		i.css("padding-bottom"), 10), V.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t })) }, updateSlides: function () {
		var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL, 
		n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length, l = a.children("." + e.params.slideClass), 
		d = n ? e.virtual.slides.length : l.length, p = [], c = [], u = [], h = t.slidesOffsetBefore; "function" == typeof h && (h = t.slidesOffsetBefore.call(e)); 
		var v = t.slidesOffsetAfter; "function" == typeof v && (v = t.slidesOffsetAfter.call(e)); 
		var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0; 
		if (void 0 !== i) { var x, T; "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), 
		e.virtualSize = -g, s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 
		1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, 
		"auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn))); 
		for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) { T = 0; var P = l.eq(k); if (1 < t.slidesPerColumn) { 
			var z = void 0, $ = void 0, L = void 0; "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, 
			(M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({ "-webkit-box-ordinal-group": z, 
			"-moz-box-ordinal-group": z, "-ms-flex-order": z, "-webkit-order": z, order: z })) : $ = k - (L = Math.floor(k / C)) * C, 
			P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr(
			"data-swiper-row", L) } if ("none" !== P.css("display")) { if ("auto" === t.slidesPerView) { var I = Y.getComputedStyle(P[0], null), 
			D = P[0].style.transform, O = P[0].style.webkitTransform; D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), 
			T = t.roundLengths ? e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0) : e.isHorizontal() ? parseFloat(I.getPropertyValue("width")) 
			+ parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : parseFloat(I.getPropertyValue("height")) 
			+ parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (P[0].style.transform = D), 
			O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T)) } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, 
			t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px"); l[k] 
			&& (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 
			0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), 
			c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, 
			w = T, y += 1 } } if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ 
			width: e.virtualSize + t.spaceBetween + "px" }), F.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({ 
			width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })), 
			1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, 
			e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) { 
			E = []; for (var A = 0; A < p.length; A += 1) { var N = p[A]; t.roundLengths && (N = Math.floor(N)), p[A] < e.virtualSize + p[0] && E.push(N) } p = E } 
			if (!t.centeredSlides) { E = []; for (var H = 0; H < p.length; H += 1) { var G = p[H]; t.roundLengths && (G = Math.floor(G)), p[H] <= e.virtualSize - i 
			&& E.push(G) } p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i) } if (0 === p.length && (p = [0]), 
			0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })),
			t.centerInsufficientSlides) { var B = 0; if (u.forEach(function (e) { B += e + (t.spaceBetween ? t.spaceBetween : 0) }), (B -= t.spaceBetween) < i) { 
			var X = (i - B) / 2; p.forEach(function (e, t) { p[t] = e - X }), c.forEach(function (e, t) { c[t] = e + X }) } } V.extend(e, { 
			slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset() } }, updateAutoHeight: function (e) { var t, a = this, i = [], s = 0; if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) { var r = a.activeIndex + t; if (r > a.slides.length) break; i.push(a.slides.eq(r)[0]) } else i.push(a.slides.eq(a.activeIndex)[0]); for (t = 0; t < i.length; t += 1)if (void 0 !== i[t]) { var n = i[t].offsetHeight; s = s < n ? n : s } s && a.$wrapperEl.css("height", s + "px") }, updateSlidesOffset: function () { for (var e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop }, updateSlidesProgress: function (e) { void 0 === e && (e = this && this.translate || 0); var t = this, a = t.params, i = t.slides, s = t.rtlTranslate; if (0 !== i.length) { void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset(); var r = -e; s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = []; for (var n = 0; n < i.length; n += 1) { var o = i[n], l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween); if (a.watchSlidesVisibility) { var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n]; (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass)) } o.progress = s ? -l : l } t.visibleSlides = L(t.visibleSlides) } }, updateProgress: function (e) { void 0 === e && (e = this && this.translate || 0); var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning, n = t.isEnd, o = r, l = n; 0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), V.extend(t, { progress: s, isBeginning: r, isEnd: n }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s) }, updateSlidesClasses: function () { var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled; a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass)); var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass); i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass); var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass); 
			i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)) }, updateActiveIndex: function (e) { var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e; if (void 0 === p) { for (var c = 0; c < s.length; c += 1)void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c); n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0) } if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) { var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10); V.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange") } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange")) }, updateClickedSlide: function (e) { var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1; if (i) for (var r = 0; r < t.slides.length; r += 1)t.slides[r] === i && (s = !0); if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0); t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide() } }; var d = { getTranslate: function (e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl; if (t.virtualTranslate) return a ? -i : i; var r = V.getTranslate(s[0], e); return a && (r = -r), r || 0 }, setTranslate: function (e, t) { var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0; a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (F.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l; var d = a.maxTranslate() - a.minTranslate(); (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t) }, minTranslate: function () { return -this.snapGrid[0] }, maxTranslate: function () { return -this.snapGrid[this.snapGrid.length - 1] } }; var p = { setTransition: function (e, t) { 
			this.$wrapperEl.transition(e), this.emit("setTransition", e, t) }, transitionStart: function (e, t) { void 0 === e && (e = !0); var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex; s.autoHeight && a.updateAutoHeight(); var n = t; if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) { if ("reset" === n) return void a.emit("slideResetTransitionStart"); a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart") } }, transitionEnd: function (e, t) { void 0 === e && (e = !0); var a = this, i = a.activeIndex, s = a.previousIndex; a.animating = !1, a.setTransition(0); var r = t; if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) { if ("reset" === r) return void a.emit("slideResetTransitionEnd"); a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd") } } }; var c = { slideTo: function (e, t, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0); var s = this, r = e; r < 0 && (r = 0); var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex, c = s.rtlTranslate; if (s.animating && n.preventInteractionOnTransition) return !1; var u = Math.floor(r / n.slidesPerGroup); u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart"); var h, v = -o[u]; if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1)-Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f); if (s.initialized && r !== p) { if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1; if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1 } return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && F.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) { s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h)) }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0) }, slideToLoop: function (e, t, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0); var s = e; return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i) }, slideNext: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.params, r = i.animating; return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a) }, slidePrev: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate; if (s.loop) { if (r) return !1; i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft } function d(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) { return d(e) }), h = (o.map(function (e) { return d(e) }), n[u.indexOf(c)], n[u.indexOf(c) - 1]); return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a) }, slideReset: function (e, t, a) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a) }, slideToClosest: function (e, t, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup); if (r < i.snapGrid.length - 1) { var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r]; (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup) } return i.slideTo(s, e, t, a) }, slideToClickedSlide: function () { var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex; if (a.loop) { if (t.animating) return; e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), 
			V.nextTick(function () { t.slideTo(r) })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass 
			+ '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () { t.slideTo(r) })) : t.slideTo(r) } 
			else t.slideTo(r) } }; var u = { loopCreate: function () { 
			var i = this, e = i.params, t = i.$wrapperEl; t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(); 
			var s = t.children("." + e.slideClass); if (e.loopFillGroupWithBlank) { var a = e.slidesPerGroup - s.length % e.slidesPerGroup; 
			if (a !== e.slidesPerGroup) { for (var r = 0; r < a; r += 1) { var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass); 
			t.append(n) } s = t.children("." + e.slideClass) } } "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), 
			i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length); var o = [], l = []; 
			s.each(function (e, t) { var a = L(t); e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), 
			a.attr("data-swiper-slide-index", e) }); for (var d = 0; d < l.length; d += 1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass)); 
			for (var p = o.length - 1; 0 <= p; p -= 1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass)) }, loopFix: function () { 
			var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, 
			d = t.rtlTranslate; t.allowSlidePrev = !0, t.allowSlideNext = !0; var p = -l[i] - t.getTranslate(); i < r ? (e = s.length - 3 * r + i, e += r, 
			t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)); t.allowSlidePrev = n, t.allowSlideNext = o }, loopDestroy: function () { var e = this.$wrapperEl, t = this.params, a = this.slides; e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index") } }; var h = { setGrabCursor: function (e) { if (!(F.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) { var t = this.el; t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab" } }, unsetGrabCursor: function () { F.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") } }; var v = { appendSlide: function (e) { var t = this, a = t.$wrapperEl, i = t.params; if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1)e[s] && a.append(e[s]); else a.append(e); i.loop && t.loopCreate(), i.observer && F.observer || t.update() }, prependSlide: function (e) { var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex; a.loop && t.loopDestroy(); var r = s + 1; if ("object" == typeof e && "length" in e) { for (var n = 0; n < e.length; n += 1)e[n] && i.prepend(e[n]); r = s + e.length } else i.prepend(e); a.loop && t.loopCreate(), a.observer && F.observer || t.update(), t.slideTo(r, 0, !1) }, addSlide: function (e, t) { var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex; s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass)); var n = a.slides.length; if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else { for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) { var p = a.slides.eq(d); p.remove(), l.unshift(p) } if ("object" == typeof t && "length" in t) { for (var c = 0; c < t.length; c += 1)t[c] && i.append(t[c]); o = e < r ? r + t.length : r } else i.append(t); for (var u = 0; u < l.length; u += 1)i.append(l[u]); s.loop && a.loopCreate(), s.observer && F.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1) } }, removeSlide: function (e) { var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex; a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass)); var r, n = s; if ("object" == typeof e && "length" in e) { for (var o = 0; o < e.length; o += 1)r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1); n = Math.max(n, 0) } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0); a.loop && t.loopCreate(), a.observer && F.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1) }, removeAllSlides: function () { for (var e = [], t = 0; t < this.slides.length; t += 1)e.push(t); this.removeSlide(e) } }, m = function () { var e = Y.navigator.userAgent, t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: Y.cordova || Y.phonegap, phonegap: Y.cordova || Y.phonegap }, a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/), s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/), n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/); if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) { var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]'); t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui") } return t.pixelRatio = Y.devicePixelRatio || 1, t }(); function g() { var e = this, t = e.params, a = e.el; if (!a || 0 !== a.offsetWidth) { t.breakpoints && e.setBreakpoint(); var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid; if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) { var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate()); e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight() } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0); 
			e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow() } } var b = { attachEvents: function () { var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl; e.onTouchStart = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches; if (!t.animating || !i.preventInteractionOnTransition) { var r = e; if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) { s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY; var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold; if (!l || !(n <= d || n >= Y.screen.width - d)) { if (V.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = n, s.startY = o, a.touchStartTime = V.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) { var p = !0; L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(); var c = p && t.allowTouchMove && i.touchStartPreventDefault; (i.touchStartForcePreventDefault || c) && r.preventDefault() } t.emit("touchStart", r) } } } }.bind(e), e.onTouchMove = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e; if (n.originalEvent && (n = n.originalEvent), a.isTouched) { if (!a.isTouchEvent || "mousemove" !== n.type) { var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX, l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY; if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l); if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (V.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), a.touchStartTime = V.now())); if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) { if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1) } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return; if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1); if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) { s.currentX = o, s.currentY = l; var d, p = s.currentX - s.startX, c = s.currentY - s.startY; if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) { t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0; var u = t.isHorizontal() ? p : c; s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate; var h = !0, v = i.resistanceRatio; if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) { if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate); if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY) } i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }), a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: V.now() })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate)) } } } } 
			else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n) }.bind(e), e.onTouchEnd = function (e) { var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e; if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1); i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var p, c = V.now(), u = c - a.touchStartTime; if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = V.nextTick(function () { t && !t.destroyed && t.emit("click", d) }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = V.now(), V.nextTick(function () { t.destroyed || (t.allowClick = !0) }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1); if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) { if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if (i.freeModeMomentum) { if (1 < a.velocities.length) { var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position, m = h.time - v.time; t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0) } else t.velocity = 0; t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0; var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b; r && (w = -w); var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio; if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) { for (var S, C = 0; C < l.length; C += 1)if (l[C] > -w) { S = C; break } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]) } if (x && t.once("transitionEnd", function () { t.loopFix() }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); 
			else if (i.freeModeSticky) return void t.slideToClosest(); 
			i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), 
			t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), 
			t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses() } else if (i.freeModeSticky) return void t.slideToClosest(); (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } else { for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]); var z = (p - o[M]) / k; if (u > i.longSwipesMs) { if (!i.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)) } else { if (!i.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M) } } }.bind(e), e.onClick = function (e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), 
			this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(e); 
			var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested; if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) { 
			if (F.touch) { var o = !("touchstart" !== a.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; 
			r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, F.passiveListener ? { passive: !1, capture: n } : n), 
			r.addEventListener(a.end, e.onTouchEnd, o) } (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !F.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1)) } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0) }, detachEvents: function () { var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl, r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested; if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) { if (F.touch) { var o = !("onTouchStart" !== a.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o) } (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !F.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1)) } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1); (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g) } }; var w, y = { setBreakpoint: function () { var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides; void 0 === i && (i = 0); var s = e.params, r = s.breakpoints; if (r && (!r || 0 !== Object.keys(r).length)) { var n = e.getBreakpoint(r); if (n && e.currentBreakpoint !== n) { var o = n in r ? r[n] : void 0; o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) { var t = o[e]; void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto") }); var l = o || e.originalParams, d = s.loop && l.slidesPerView !== s.slidesPerView; V.extend(e.params, l), V.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l) } } }, getBreakpoint: function (e) { if (e) { var t = !1, a = []; Object.keys(e).forEach(function (e) { a.push(e) }), a.sort(function (e, t) { return parseInt(e, 10) - parseInt(t, 10) }); for (var i = 0; i < a.length; i += 1) { var s = a[i]; this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s) } return t || "max" } } }, I = { isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g), isEdge: !!Y.navigator.userAgent.match(/Edge/g), isSafari: (w = Y.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent) }; var x = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, 
			slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, 
			longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, 
			watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, 
			allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", 
			slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", 
			slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 }, T = { update: o, translate: d, transition: p, slide: c, loop: u, grabCursor: h, manipulation: v, events: b, breakpoints: y, checkOverflow: { 
			checkOverflow: function () { var e = this, t = e.isLocked; e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update()) } }, 
			classes: { addClasses: function () { var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = []; s.push(a.direction), a.freeMode && s.push("free-mode"), F.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), 
			e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (F.pointerEvents || F.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) { 
			t.push(a.containerModifierClass + e) }), i.addClass(t.join(" ")) }, removeClasses: function () { var e = this.$el, t = this.classNames; e.removeClass(t.join(" ")) } }, images: { loadImage: function (e, t, a, i, s, r) { var n; 
			function o() { r && r() } e.complete && s ? o() : t ? ((n = new Y.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o() }, preloadImages: function () { var e = this; function t() { 
			null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) } e.imagesToLoad = e.$el.find("img"); 
			for (var a = 0; a < e.imagesToLoad.length; a += 1) { var i = e.imagesToLoad[a]; e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t) } } } }, E = {}, S = function (u) { 
			function h() { for (var e, t, s, a = [], i = arguments.length; i--;)a[i] = arguments[i]; 1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = V.extend({}, s), t && !s.el && (s.el = t), 
			u.call(this, s), Object.keys(T).forEach(function (t) { Object.keys(T[t]).forEach(function (e) { h.prototype[e] || (h.prototype[e] = T[t][e]) }) }); var r = this; void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) { var t = r.modules[e]; 
			if (t.params) { var a = Object.keys(t.params)[0], i = t.params[a]; if ("object" != typeof i || null === i) return; if (!(a in s && "enabled" in i)) return; !0 === s[a] && (s[a] = { enabled: !0 }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), 
			s[a] || (s[a] = { enabled: !1 }) } }); var n = V.extend({}, x); r.useModulesParams(n), r.params = V.extend({}, n, E, s), r.originalParams = V.extend({}, r.params), r.passedParams = V.extend({}, s); var o = (r.$ = L)(r.params.el); if (t = o[0]) { if (1 < o.length) { 
			var l = []; return o.each(function (e, t) { var a = V.extend({}, s, { el: t }); l.push(new h(a)) }), l } t.swiper = r, o.data("swiper", r); var d, p, c = o.children("." + r.params.wrapperClass); return V.extend(r, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], 
			classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () { return "horizontal" === r.params.direction }, isVertical: function () { return "vertical" === r.params.direction }, 
			rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), 
			activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", 
			"touchend"], p = ["mousedown", "mousemove", "mouseup"], F.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : F.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, 
			r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, F.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop), 
			touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, 
			formElements: "input, select, option, textarea, button, video", lastClickTime: V.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, 
			allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.useModules(), r.params.init && r.init(), r } } u && (h.__proto__ = u); var e = { 
			extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } }; return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () { var e = this, t = e.params, 
			a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1; if (t.centeredSlides) { for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0)); 
			for (var p = r - 1; 0 <= p; p -= 1)a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0)) } else for (var c = r + 1; c < a.length; c += 1)i[c] - i[r] < s && (n += 1); return n }, h.prototype.update = function () { var a = this; if (a && !a.destroyed) { var e = a.snapGrid, 
			t = a.params; t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update") } function i() { var e = a.rtlTranslate ? -1 * a.translate : a.translate, t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate()); a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses() } }, h.prototype.init = function () { var e = this; e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init")) }, h.prototype.destroy = function (e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides; return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) { a.off(e) }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), V.deleteProps(a)), a.destroyed = !0), null }, h.extendDefaults = function (e) { V.extend(E, e) }, e.extendedDefaults.get = function () { return E }, e.defaults.get = function () { return x }, e.Class.get = function () { return u }, e.$.get = function () { return L }, Object.defineProperties(h, e), h }(s), C = { name: "device", proto: { device: m }, static: { device: m } }, M = { name: "support", proto: { support: F }, static: { support: F } }, k = { name: "browser", proto: { browser: I }, static: { browser: I } }, P = { name: "resize", create: function () { var e = this; V.extend(e, { resize: { resizeHandler: function () { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function () { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function () { Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function () { Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } } }, z = { func: Y.MutationObserver || Y.WebkitMutationObserver, attach: function (e, t) { void 0 === t && (t = {}); var a = this, i = new z.func(function (e) { if (1 !== e.length) { var t = function () { a.emit("observerUpdate", e[0]) }; Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0) } else a.emit("observerUpdate", e[0]) }); i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i) }, init: function () { var e = this; if (F.observer && e.params.observer) { if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)e.observer.attach(t[a]); e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 }) } }, destroy: function () { this.observer.observers.forEach(function (e) { e.disconnect() }), this.observer.observers = [] } }, $ = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function () { V.extend(this, { observer: { init: z.init.bind(this), attach: z.attach.bind(this), destroy: z.destroy.bind(this), observers: [] } }) }, on: { init: function () { this.observer.init() }, destroy: function () { this.observer.destroy() } } }, D = { update: function (e) { var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides, n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, p = d.from, c = d.to, u = d.slides, h = d.slidesGrid, v = d.renderSlide, f = d.offset; t.updateActiveIndex(); var m, g, b, w = t.activeIndex || 0; m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l); var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, u.length - 1), T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0); function E() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() } if (V.extend(t.virtual, { from: y, to: x, offset: T, slidesGrid: t.slidesGrid }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress(); if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: T, from: y, to: x, slides: function () { for (var e = [], t = y; t <= x; t += 1)e.push(u[t]); return e }() }), void E(); var S = [], C = []; if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove(); for (var k = 0; k < u.length; k += 1)y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k))); C.forEach(function (e) { t.$wrapperEl.append(v(u[e], e)) }), S.sort(function (e, t) { return t - e }).forEach(function (e) { t.$wrapperEl.prepend(v(u[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E() }, renderSlide: function (e, t) { var a = this, i = a.params.virtual; if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t]; var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s }, appendSlide: function (e) { this.virtual.slides.push(e), this.virtual.update(!0) }, prependSlide: function (e) { var t = this; if (t.virtual.slides.unshift(e), t.params.virtual.cache) { var a = t.virtual.cache, i = {}; Object.keys(a).forEach(function (e) { i[e + 1] = a[e] }), t.virtual.cache = i } t.virtual.update(!0), t.slideNext(0) } }, O = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function () { var e = this; V.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } }) }, on: { beforeInit: function () { var e = this; if (e.params.virtual.enabled) { e.classNames.push(e.params.containerModifierClass + "virtual"); var t = { watchSlidesProgress: !0 }; V.extend(e.params, t), V.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update() } }, setTranslate: function () { this.params.virtual.enabled && this.virtual.update() } } }, A = { handle: function (e) { var t = this, a = t.rtlTranslate, i = e; i.originalEvent && (i = i.originalEvent); var s = i.keyCode || i.charCode; if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1; if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1; if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) { if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) { var r = !1; if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return; var n = Y.innerWidth, o = Y.innerHeight, l = t.$el.offset(); a && (l.left -= t.$el[0].scrollLeft); for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) { var c = d[p]; 0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0) } if (!r) return } t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s) } }, enable: function () { this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) }, disable: function () { this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) } }, N = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function () { V.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } }) }, on: { init: function () { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function () { this.keyboard.enabled && this.keyboard.disable() } } }; var H = { lastScrollTime: V.now(), event: -1 < Y.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () { var e = "onwheel", t = e in f; if (!t) { var a = f.createElement("div"); a.setAttribute(e, "return;"), t = "function" == typeof a[e] } return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t }() ? "wheel" : "mousewheel", normalize: function (e) { var t = 0, a = 0, i = 0, s = 0; return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s } }, handleMouseEnter: function () { this.mouseEntered = !0 }, handleMouseLeave: function () { this.mouseEntered = !1 }, handle: function (e) { var t = e, a = this, i = a.params.mousewheel; if (!a.mouseEntered && !i.releaseOnEdges) return !0; t.originalEvent && (t = t.originalEvent); var s = 0, r = a.rtlTranslate ? -1 : 1, n = H.normalize(t); if (i.forceToAxis) if (a.isHorizontal()) { if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0; s = n.pixelX * r } else { if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0; s = n.pixelY } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY; if (0 === s) return !0; if (i.invert && (s = -s), a.params.freeMode) { a.params.loop && a.loopFix(); var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd; if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = V.nextTick(function () { a.slideToClosest() }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0 } else { if (60 < V.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) { if (i.releaseOnEdges) return !0 } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) { if (i.releaseOnEdges) return !0 } else a.slidePrev(), a.emit("scroll", t); a.mousewheel.lastScrollTime = (new Y.Date).getTime() } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 }, enable: function () { var e = this; if (!H.event) return !1; if (e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0 }, disable: function () { var e = this; if (!H.event) return !1; if (!e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1) } }, G = { update: function () { var e = this, t = e.params.navigation; if (!e.params.loop) { var a = e.navigation, i = a.$nextEl, s = a.$prevEl; s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)) } }, onPrevClick: function (e) { e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev() }, onNextClick: function (e) { e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext() }, init: function () { var e, t, a = this, i = a.params.navigation; (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), V.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] })) }, destroy: function () { var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl; a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass)) } }, B = { update: function () { var e = this, t = e.rtl, s = e.params.pagination; if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length; if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) { var o, l, d, p = e.pagination.bullets; if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) { var a = L(t), i = a.index(); i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")) }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) { for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)p.eq(h).addClass(s.bulletActiveClass + "-main"); c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next") } if (s.dynamicBullets) { var v = Math.min(p.length, s.dynamicMainBullets + 4), f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, m = t ? "right" : "left"; p.css(e.isHorizontal() ? m : "top", f + "px") } } if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) { var g; g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical"; var b = (r + 1) / n, w = 1, y = 1; "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed) } "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass) } }, render: function () { var e = this, t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, s = ""; if ("bullets" === t.type) { for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">"; i.html(s), e.pagination.bullets = i.find("." + t.bulletClass) } "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]) } }, init: function () { var a = this, e = a.params.pagination; if (e.el) { var t = L(e.el); 0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) { e.preventDefault(); var t = L(this).index() * a.params.slidesPerGroup; a.params.loop && (t += a.loopedSlides), a.slideTo(t) }), V.extend(a.pagination, { $el: t, el: t[0] })) } }, destroy: function () { var e = this, t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var a = e.pagination.$el; a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass) } } }, X = { setTranslate: function () { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl, o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i; a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (F.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (F.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () { o[0].style.opacity = 0, o.transition(400) }, 1e3)) } }, setTransition: function (e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) }, updateSize: function () { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar, a = t.$dragEl, i = t.$el; a[0].style.width = "", a[0].style.height = ""; var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size); s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), V.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass) } }, setDragPosition: function (e) { var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize; t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t); var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t; a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses() }, onDragStart: function (e) { var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl; t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e) }, onDragMove: function (e) { var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl; this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e)) }, onDragEnd: function (e) { var t = this, a = t.params.scrollbar, i = t.scrollbar.$el; t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = V.nextTick(function () { i.css("opacity", 0), i.transition(400) }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest()) }, enableDraggable: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!F.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 }, o = !(!F.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }; F.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o)) } }, disableDraggable: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!F.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 }, o = !(!F.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 }; F.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) } }, init: function () { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el); e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el)); var r = s.find("." + e.params.scrollbar.dragClass); 0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), V.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable() } }, destroy: function () { this.scrollbar.disableDraggable() } }, R = { setTransform: function (e, t) { var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0", n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"), l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity"); if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) { var p = d - (d - 1) * (1 - Math.abs(t)); i[0].style.opacity = p } if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else { var c = l - (l - 1) * (1 - Math.abs(t)); i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")") } }, setTranslate: function () { var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid; e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { i.parallax.setTransform(t, s) }), t.each(function (e, t) { var a = t.progress; 1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { i.parallax.setTransform(t, a) }) }) }, setTransition: function (s) { void 0 === s && (s = this.params.speed); this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) { var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s; 0 === s && (i = 0), a.transition(i) }) } }, q = { getDistanceBetweenTouches: function (e) { if (e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, s = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2)) }, onGestureStart: function (e) { var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture; if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !F.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return; i.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e) } s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0 }, onGestureChange: function (e) { var t = this.params.zoom, a = this.zoom, i = a.gesture; if (!F.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return; a.fakeGestureMoved = !0, i.scaleMove = q.getDistanceBetweenTouches(e) } i.$imageEl && 0 !== i.$imageEl.length && (F.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")")) }, onGestureEnd: function (e) { var t = this.params.zoom, a = this.zoom, i = a.gesture; if (!F.gestures) { if (!a.fakeGestureTouched || !a.fakeGestureMoved) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return; a.fakeGestureTouched = !1, a.fakeGestureMoved = !1 } i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0)) }, onTouchStart: function (e) { var t = this.zoom, a = t.gesture, i = t.image; a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function (e) { var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity; if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) { s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY)); var n = s.width * a.scale, o = s.height * a.scale; if (!(n < i.slideWidth && o < i.slideHeight)) { if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) { if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1); if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1) } e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)") } } }, onTouchEnd: function () { var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) { if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1); a.isTouched = !1, a.isMoved = !1; var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l; 0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y)); var p = Math.max(s, r); a.currentX = o, a.currentY = d; var c = a.width * e.scale, u = a.height * e.scale; a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)") } }, onTransitionEnd: function () { var e = this.zoom, t = e.gesture; t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1) }, toggle: function (e) { var t = this.zoom; t.scale && 1 !== t.scale ? t.out() : t.in(e) }, in: function (e) { var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image; (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")")) }, out: function () { var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture; i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0) }, enable: function () { var e = this, t = e.zoom; if (!t.enabled) { t.enabled = !0; var a = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 }; F.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } }, disable: function () { var e = this, t = e.zoom; if (t.enabled) { e.zoom.enabled = !1; var a = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 }; F.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove) } } }, W = { loadInSlide: function (e, l) { void 0 === l && (l = !0); var d = this, p = d.params.lazy; if (void 0 !== e && 0 !== d.slides.length) { var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e), t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")"); !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) { var i = L(t); i.addClass(p.loadingClass); var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"), o = i.attr("data-sizes"); d.loadImage(i[0], r || s, n, o, !1, function () { if (null != d && d && (!d || d.params) && !d.destroyed) { if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) { var e = c.attr("data-swiper-slide-index"); if (c.hasClass(d.params.slideDuplicateClass)) { var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")"); d.lazy.loadInSlide(t.index(), !1) } else { var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]'); d.lazy.loadInSlide(a.index(), !1) } } d.emit("lazyImageReady", c[0], i[0]) } }), d.emit("lazyImageLoad", c[0], i[0]) }) } }, load: function () { var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex, r = i.virtual && a.virtual.enabled, n = a.lazy, o = a.slidesPerView; function l(e) { if (r) { if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (s[e]) return !0; return !1 } function d(e) { return r ? L(e).attr("data-swiper-slide-index") : L(e).index() } if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) { var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index(); i.lazy.loadInSlide(a) }); else if (1 < o) for (var p = e; p < e + o; p += 1)l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e); if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) { for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1)l(f) && i.lazy.loadInSlide(f); for (var m = v; m < e; m += 1)l(m) && i.lazy.loadInSlide(m) } else { var g = t.children("." + a.slideNextClass); 0 < g.length && i.lazy.loadInSlide(d(g)); var b = t.children("." + a.slidePrevClass); 0 < b.length && i.lazy.loadInSlide(d(b)) } } }, j = { LinearSpline: function (e, t) { var a, i, s, r, n, o = function (e, t) { for (i = -1, a = e.length; 1 < a - i;)e[s = a + i >> 1] <= t ? i = s : a = s; return a }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) { return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0 }, this }, getInterpolateFunction: function (e) { var t = this; t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid)) }, setTranslate: function (e, t) { var a, i, s = this, r = s.controller.control; function n(e) { var t = s.rtlTranslate ? -s.translate : s.translate; "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof S && n(r[o]); else r instanceof S && t !== r && n(r) }, setTransition: function (t, e) { var a, i = this, s = i.controller.control; function r(e) { e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && V.nextTick(function () { e.updateAutoHeight() }), e.$wrapperEl.transitionEnd(function () { s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd()) })) } if (Array.isArray(s)) for (a = 0; a < s.length; a += 1)s[a] !== e && s[a] instanceof S && r(s[a]); else s instanceof S && e !== s && r(s) } }, U = { makeElFocusable: function (e) { return e.attr("tabIndex", "0"), e }, addElRole: function (e, t) { return e.attr("role", t), e }, addElLabel: function (e, t) { return e.attr("aria-label", t), e }, disableEl: function (e) { return e.attr("aria-disabled", !0), e }, enableEl: function (e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function (e) { var t = this, a = t.params.a11y; if (13 === e.keyCode) { var i = L(e.target); t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click() } }, notify: function (e) { var t = this.a11y.liveRegion; 0 !== t.length && (t.html(""), t.html(e)) }, updateNavigation: function () { var e = this; if (!e.params.loop) { var t = e.navigation, a = t.$nextEl, i = t.$prevEl; i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a)) } }, updatePagination: function () { var i = this, s = i.params.a11y; i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) { var a = L(t); i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)) }) }, init: function () { var e = this; e.$el.append(e.a11y.liveRegion); var t, a, i = e.params.a11y; e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey) }, destroy: function () { var e, t, a = this; a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey) } }, K = { init: function () { var e = this; if (e.params.history) { if (!Y.history || !Y.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0); var t = e.history; t.initialized = !0, t.paths = K.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState)) } }, destroy: function () { this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState) }, setHistoryPopState: function () { this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) }, getPathValues: function () { var e = Y.location.pathname.slice(1).split("/").filter(function (e) { return "" !== e }), t = e.length; return { key: e[t - 2], value: e[t - 1] } }, setHistory: function (e, t) { if (this.history.initialized && this.params.history.enabled) { var a = this.slides.eq(t), i = K.slugify(a.attr("data-history")); Y.location.pathname.includes(e) || (i = e + "/" + i); var s = Y.history.state; s && s.value === i || (this.params.history.replaceState ? Y.history.replaceState({ value: i }, null, i) : Y.history.pushState({ value: i }, null, i)) } }, slugify: function (e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function (e, t, a) { var i = this; if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) { var n = i.slides.eq(s); if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) { var o = n.index(); i.slideTo(o, e, a) } } else i.slideTo(0, e, a) } }, _ = { onHashCange: function () { var e = this, t = f.location.hash.replace("#", ""); if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) { var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index(); if (void 0 === a) return; e.slideTo(a) } }, setHash: function () { var e = this; if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else { var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history"); f.location.hash = a || "" } }, init: function () { var e = this; if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) { e.hashNavigation.initialized = !0; var t = f.location.hash.replace("#", ""); if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) { var s = e.slides.eq(a); if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) { var r = s.index(); e.slideTo(r, 0, e.params.runCallbacksOnInit, !0) } } e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange) } }, destroy: function () { this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange) } }, Z = { run: function () { var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay; t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = V.nextTick(function () { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, a) }, start: function () { var e = this; return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)) }, stop: function () { var e = this; return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)) }, pause: function (e) { var t = this; t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run()))) } }, Q = { setTranslate: function () { for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) { var i = e.slides.eq(a), s = -i[0].swiperSlideOffset; e.params.virtualTranslate || (s -= e.translate); var r = 0; e.isHorizontal() || (r = s, s = 0); var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0); i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)") } }, setTransition: function (e) { var a = this, t = a.slides, i = a.$wrapperEl; if (t.transition(e), a.params.virtualTranslate && 0 !== e) { var s = !1; t.transitionEnd(function () { if (!s && a && !a.destroyed) { s = !0, a.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)i.trigger(e[t]) } }) } } }, J = { setTranslate: function () { var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0; d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e))); for (var h = 0; h < s.length; h += 1) { var v = s.eq(h), f = h; c && (f = parseInt(v.attr("data-swiper-slide-index"), 10)); var m = 90 * f, g = Math.floor(m / 360); o && (m = -m, g = Math.floor(-m / 360)); var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0; f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0); var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)"; if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) { var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"); 0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0)) } } if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else { var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90), M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), k = d.shadowScale, P = d.shadowScale / M, z = d.shadowOffset; e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)") } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0; i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)") }, setTransition: function (e) { var t = this.$el; this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e) } }, ee = { setTranslate: function () { for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) { var s = t.eq(i), r = s[0].progress; e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1)); var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0; if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) { var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"), c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom"); 0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0)) } s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)") } }, setTransition: function (e) { var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl; if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) { var r = !1; t.eq(i).transitionEnd(function () { if (!r && a && !a.destroyed) { r = !0, a.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)s.trigger(e[t]) } }) } } }, te = { setTranslate: function () { for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) { var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0, b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m, x = o ? n.stretch * m : 0; Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0); var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)"; if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) { var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"); 0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0) } } (F.pointerEvents || F.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%") }, setTransition: function (e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } }, ae = { init: function () { var e = this, t = e.params.thumbs, a = e.constructor; t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, V.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), V.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : V.isObject(t.swiper) && (e.thumbs.swiper = new a(V.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick) }, onThumbClick: function () { var e = this, t = e.thumbs.swiper; if (t) { var a = t.clickedIndex, i = t.clickedSlide; if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) { var s; if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) { var r = e.activeIndex; e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex); var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(), o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(); s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n } e.slideTo(s) } } }, update: function (e) { var t = this, a = t.thumbs.swiper; if (a) { var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView; if (t.realIndex !== a.realIndex) { var s, r = a.activeIndex; if (a.params.loop) { a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex); var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(); s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n } else s = t.realIndex; a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0)) } var l = 1, d = t.params.thumbs.slideThumbActiveClass; if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1)a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d); else for (var c = 0; c < l; c += 1)a.slides.eq(t.realIndex + c).addClass(d) } } }, ie = [C, M, k, P, $, O, N, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function () { var e = this; V.extend(e, { mousewheel: { enabled: !1, enable: H.enable.bind(e), disable: H.disable.bind(e), handle: H.handle.bind(e), handleMouseEnter: H.handleMouseEnter.bind(e), handleMouseLeave: H.handleMouseLeave.bind(e), lastScrollTime: V.now() } }) }, on: { init: function () { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function () { this.mousewheel.enabled && this.mousewheel.disable() } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function () { var e = this; V.extend(e, { navigation: { init: G.init.bind(e), update: G.update.bind(e), destroy: G.destroy.bind(e), onNextClick: G.onNextClick.bind(e), onPrevClick: G.onPrevClick.bind(e) } }) }, on: { init: function () { this.navigation.init(), this.navigation.update() }, toEdge: function () { this.navigation.update() }, fromEdge: function () { this.navigation.update() }, destroy: function () { this.navigation.destroy() }, click: function (e) { var t = this.navigation, a = t.$nextEl, i = t.$prevEl; !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass)) } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function (e) { return e }, formatFractionTotal: function (e) { return e }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function () { var e = this; V.extend(e, { pagination: { init: B.init.bind(e), render: B.render.bind(e), update: B.update.bind(e), destroy: B.destroy.bind(e), dynamicBulletIndex: 0 } }) }, on: { init: function () { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function () { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function () { this.params.loop || this.pagination.update() }, slidesLengthChange: function () { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function () { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function () { this.pagination.destroy() }, click: function (e) { var t = this; t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function () { var e = this; V.extend(e, { scrollbar: { init: X.init.bind(e), destroy: X.destroy.bind(e), updateSize: X.updateSize.bind(e), setTranslate: X.setTranslate.bind(e), setTransition: X.setTransition.bind(e), enableDraggable: X.enableDraggable.bind(e), disableDraggable: X.disableDraggable.bind(e), setDragPosition: X.setDragPosition.bind(e), onDragStart: X.onDragStart.bind(e), onDragMove: X.onDragMove.bind(e), onDragEnd: X.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function () { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function () { this.scrollbar.updateSize() }, resize: function () { this.scrollbar.updateSize() }, observerUpdate: function () { this.scrollbar.updateSize() }, setTranslate: function () { this.scrollbar.setTranslate() }, setTransition: function (e) { this.scrollbar.setTransition(e) }, destroy: function () { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function () { V.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } }) }, on: { beforeInit: function () { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function () { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function () { this.params.parallax && this.parallax.setTranslate() }, setTransition: function (e) { this.params.parallax && this.parallax.setTransition(e) } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function () { var t = this, a = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) { a[e] = q[e].bind(t) }), V.extend(t, { zoom: a }) }, on: { init: function () { this.params.zoom.enabled && this.zoom.enable() }, destroy: function () { this.zoom.disable() }, touchStart: function (e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function (e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function (e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function () { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function () { V.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } }) }, on: { beforeInit: function () { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function () { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function () { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function () { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function () { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function () { var e = this; e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load() }, transitionEnd: function () { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function () { var e = this; V.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: j.getInterpolateFunction.bind(e), setTranslate: j.setTranslate.bind(e), setTransition: j.setTransition.bind(e) } }) }, on: { update: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function () { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function (e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function (e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function () { var t = this; V.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(U).forEach(function (e) { t.a11y[e] = U[e].bind(t) }) }, on: { init: function () { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function () { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function () { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function () { this.params.a11y.enabled && this.a11y.destroy() } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function () { var e = this; V.extend(e, { history: { init: K.init.bind(e), setHistory: K.setHistory.bind(e), setHistoryPopState: K.setHistoryPopState.bind(e), scrollToSlide: K.scrollToSlide.bind(e), destroy: K.destroy.bind(e) } }) }, on: { init: function () { this.params.history.enabled && this.history.init() }, destroy: function () { this.params.history.enabled && this.history.destroy() }, transitionEnd: function () { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function () { var e = this; V.extend(e, { hashNavigation: { initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e) } }) }, on: { init: function () { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function () { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function () { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function () { var t = this; V.extend(t, { autoplay: { running: !1, paused: !1, run: Z.run.bind(t), start: Z.start.bind(t), stop: Z.stop.bind(t), pause: Z.pause.bind(t), onTransitionEnd: function (e) { t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } }) }, on: { init: function () { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function (e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function () { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function () { this.autoplay.running && this.autoplay.stop() } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function () { V.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("fade" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "fade"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; V.extend(e.params, t), V.extend(e.originalParams, t) } }, setTranslate: function () { "fade" === this.params.effect && this.fadeEffect.setTranslate() }, setTransition: function (e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function () { V.extend(this, { cubeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("cube" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }; V.extend(e.params, t), V.extend(e.originalParams, t) } }, setTranslate: function () { "cube" === this.params.effect && this.cubeEffect.setTranslate() }, setTransition: function (e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function () { V.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; if ("flip" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }; V.extend(e.params, t), V.extend(e.originalParams, t) } }, setTranslate: function () { "flip" === this.params.effect && this.flipEffect.setTranslate() }, setTransition: function (e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function () { V.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } }) }, on: { beforeInit: function () { var e = this; "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0) }, setTranslate: function () { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function (e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }, { name: "thumbs", params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function () { V.extend(this, { thumbs: { swiper: null, init: ae.init.bind(this), update: ae.update.bind(this), onThumbClick: ae.onThumbClick.bind(this) } }) }, on: { beforeInit: function () { var e = this.params.thumbs; e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0)) }, slideChange: function () { this.thumbs.swiper && this.thumbs.update() }, update: function () { this.thumbs.swiper && this.thumbs.update() }, resize: function () { this.thumbs.swiper && this.thumbs.update() }, observerUpdate: function () { this.thumbs.swiper && this.thumbs.update() }, setTransition: function (e) { var t = this.thumbs.swiper; t && t.setTransition(e) }, beforeDestroy: function () { var e = this.thumbs.swiper; e && this.thumbs.swiperCreated && e && e.destroy() } } }]; return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
	
		});
//# sourceMappingURL=swiper.min.js.map


//-------------------------------------------------------------------------
// HashMap prototype
//-------------------------------------------------------------------------
function HashMap() {
	// members
	this.keyArray = new Array(); // Keys
	this.valArray = new Array(); // Values
}

HashMap.prototype.put = function (key, val) {
	var elementIndex = this.findIt(key);

	if (elementIndex == (-1)) {
		this.keyArray.push(key);
		this.valArray.push(val);
	}
	else {
		this.valArray[elementIndex] = val;
	}
};

HashMap.prototype.get = function (key) {
	var result = null;
	var elementIndex = this.findIt(key);

	if (elementIndex != (-1)) {
		result = this.valArray[elementIndex];
	}

	return result;
};

HashMap.prototype.remove = function (key) {

	var result = null;
	var elementIndex = this.findIt(key);

	if (elementIndex != (-1)) {

		var part1 = this.keyArray.slice(0, elementIndex);
		var part2 = this.keyArray.slice(elementIndex + 1);
		this.keyArray = part1.concat(part2);

		var part3 = this.valArray.slice(0, elementIndex);
		var part4 = this.valArray.slice(elementIndex + 1);
		this.valArray = part3.concat(part4);


	}

	return;
};

HashMap.prototype.size = function () {
	return (this.keyArray.length);
};

HashMap.prototype.clear = function () {
	for (var i = 0; i < this.keyArray.length; i++) {
		this.keyArray.pop(); this.valArray.pop();
	}
};

HashMap.prototype.keySet = function () {
	return (this.keyArray);
};

HashMap.prototype.valSet = function () {
	return (this.valArray);
};

HashMap.prototype.showMe = function () {
	var result = "";

	for (var i = 0; i < this.keyArray.length; i++) {
		result += "Key: " + this.keyArray[i] + "\tValues: " + this.valArray[i] + "\n";
	}
	return result;
};

// Key List 諛섑솚 
HashMap.prototype.showKeyList = function () {
	var retArrList = new Array();

	for (var i = 0; i < this.keyArray.length; i++) {
		retArrList[i] = this.keyArray[i];
	}
	return retArrList;
};

HashMap.prototype.findIt = function (key) {
	var result = (-1);

	for (var i = 0; i < this.keyArray.length; i++) {
		if (this.keyArray[i] == key) {
			result = i;
			break;
		}
	}
	return result;
};

HashMap.prototype.findCount = function (key) {
	var result = 0;

	for (var i = 0; i < this.keyArray.length; i++) {

		if (this.keyArray[i] == key) {
			//alert('1');
			result = result++;
			// break;
		}
	}
	return result;
};

//-------------------------------------------------------------------------
//怨듬갚�� �덈뒗 媛믪씠 �덈뒗吏� 泥댄겕�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function isEmpty(p_str) {
	if (p_str == null || typeof p_str == 'undefined' || trim(p_str) == "") {
		return true;
	}
	return false;
}

//-------------------------------------------------------------------------
//醫뚯슦痢� 怨듬갚�쒓굅 �⑥닔
//-------------------------------------------------------------------------
function trim(p_str) {
	return ltrim(rtrim(p_str));
}


//-------------------------------------------------------------------------
//醫뚯륫 怨듬갚�쒓굅 �⑥닔
//-------------------------------------------------------------------------
function ltrim(p_str) {

	if (p_str == "") {
		return p_str;
	}

	var len = p_str.length;
	var st = 0;

	while ((st < len) && (p_str.charAt(st) <= ' ')) {
		st++;
	}

	return (st > 0) ? p_str.substring(st, len) : p_str;

}

//-------------------------------------------------------------------------
//�곗륫 怨듬갚�쒓굅 �⑥닔
//-------------------------------------------------------------------------
function rtrim(p_str) {

	if (p_str == "") {
		return p_str;
	}

	var len = p_str.length;
	var st = 0;

	while ((st < len) && (p_str.charAt(len - 1) <= ' ')) {
		len--;
	}

	return (len < p_str.length) ? p_str.substring(st, len) : p_str;

}

//-------------------------------------------------------------------------
//char 蹂꾨줈 泥댄겕
//-------------------------------------------------------------------------
function containsCharsOnly(src, dest) {
	for (var i = 0; i < src.length; i++) {
		if (dest.indexOf(src.charAt(i)) < 0) {
			return false;
		}
	}
	return true;
}

//-------------------------------------------------------------------------
//�낅젰媛믪쓣 ��臾몄옄濡� 蹂���
//-------------------------------------------------------------------------
function toUpper(value) {
	var src = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	if (containsCharsOnly(value, src))
		return value.toUpperCase();
	return value;
}

//------------------------------------------------------------------------- 
//�낅젰媛믪쓽 byte 湲몄씠瑜� 由ы꽩
//-------------------------------------------------------------------------
function getByteLength(input) {
	var byteLength = 0;
	for (var i = 0; i < input.length; i++) {
		var oneChar = escape(input.charAt(i));
		if (oneChar.length == 1) {
			byteLength++;
		} else if (oneChar.indexOf("%u") != -1) {
			byteLength += 2;
		} else if (oneChar.indexOf("%") != -1) {
			byteLength += oneChar.length / 3;
		}
	}
	return byteLength;
}

//------------------------------------------------------------------------
// �ㅼ젙�� 諛붿씠�� 留뚰겮 臾몄옄�댁쓣 �섎씪�댁꽌 由ы꽩
//-------------------------------------------------------------------------
function cutByLen(str, maxByte) {

	var byteLength = 0;
	var i = 0;
	for (; i < str.length; i++) {
		var oneChar = escape(str.charAt(i));
		if (oneChar.length == 1) {
			byteLength++;
		} else if (oneChar.indexOf("%u") != -1) {
			byteLength += 2;
		} else if (oneChar.indexOf("%") != -1) {
			byteLength += oneChar.length / 3;
		}

		if (byteLength > maxByte) {

			break;
		}

	}

	return str.substring(0, i);
}


//-------------------------------------------------------------------------
//�レ옄濡쒕쭔 �대（�댁졇 �덈뒗吏� 泥댄겕�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_number(p_num) {
	var v_chars = "0123456789";
	return containsCharsOnly(p_num, v_chars);
}

//-------------------------------------------------------------------------
//�レ옄(0~9, ',')濡쒕쭔 援ъ꽦�섏뿀�붿� 泥댄겕�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_amount(p_amount) {
	var chars = "-,0123456789";
	return containsCharsOnly(p_amount, chars);
}

//-------------------------------------------------------------------------
//�レ옄(0~9, '.')濡쒕쭔 援ъ꽦�섏뿀�붿� 泥댄겕�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_rate(p_rate) {
	var chars = "-.0123456789";
	return containsCharsOnly(p_rate, chars);
}

//-------------------------------------------------------------------------
//input File �대�吏� �щ� 泥댄겕
//-------------------------------------------------------------------------
function isImageExt(fileName) {
	var index = fileName.lastIndexOf(".");
	if (index > 0) {
		// �뚯씪 �뺤옣��
		var extension = toUpper(fileName.substring(index + 1));
		if (extension == "GIF" || extension == "JPG" || extension == "JPEG" || extension == "PNG" || extension == "BMP") {
			return true;
		}
		else {
			return false;
		}
	}// index > 0
	else {
		return false;
	}
}

//-------------------------------------------------------------------------
//臾몄옄�댁뿉�� escapmXml臾몄옄瑜� 泥섎━�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function fn_escapeXml(tmp) {
	var tmpStr = tmp.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'", "&#39;").replaceAll("\"", "&quot;");
	return tmpStr;
}

String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/gi, "");
}
String.prototype.replaceAll = function (str1, str2) {
	var temp_str = this.trim();
	temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
	return temp_str;
}



//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) ��(亮�), ��(��)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_yearMonth(p_yyyy, p_mm) {
	return is_valid_year(p_yyyy) && is_valid_month(p_mm);
}

//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) ��(亮�)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_year(p_yyyy) {
	var y = parseInt(p_yyyy, 10);
	return (y >= 1800 && y <= 9999);
}

//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) ��(��)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_month(p_mm) {
	var m = parseInt(p_mm, 10);
	return (m >= 1 && m <= 12);
}

//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) ��(��)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_day(p_yyyy, p_mm, p_dd) {
	var m = parseInt(p_mm, 10) - 1;
	var d = parseInt(p_dd, 10);

	var end = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if ((p_yyyy % 4 == 0 && p_yyyy % 100 != 0) || p_yyyy % 400 == 0) {
		end[1] = 29;
	}

	return (d >= 1 && d <= end[m]);
}


//-------------------------------------------------------------------------
// �밸뀈�붿쓽 留덉�留� �좎쭨 援ы븯�� �⑥닔
//-------------------------------------------------------------------------
function fn_getLastDay(p_year, p_month) {

	var dayOfMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	if (((p_year % 4 == 0) && (p_year % 100 != 0)) || (p_year % 400 == 0))
		dayOfMonth[1] = 29;
	var v_days = dayOfMonth[p_month - 1];

	return v_days;

}

//-------------------------------------------------------------------------
//�ㅻ뀈泥댄겕
//-------------------------------------------------------------------------
function is_leay_year(p_yyyy) {
	if ((p_yyyy % 4 == 0 && p_yyyy % 100 != 0) || p_yyyy % 400 == 0) {
		return true;
	}
	return false;
}


//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) ��(��)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_hour(p_hh) {
	var h = parseInt(p_hh, 10);
	return (h >= 0 && h <= 24);
}

//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) 遺�(��)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_min(p_mi) {
	var m = parseInt(p_mi, 10);
	return (m >= 0 && m <= 59);
}

//-------------------------------------------------------------------------
//�좏슚��(議댁옱�섎뒗) 珥�(燁�)�몄� 泥댄겕
//-------------------------------------------------------------------------
function is_valid_sec(p_ss) {
	var s = parseInt(p_ss, 10);
	return (s >= 0 && s <= 59);
}

//-------------------------------------------------------------------------
//email �� �뺤떇�� 留욌뒗吏� 泥댄겕�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_email(p_email) {

	var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;

	if (p_email.search(format) != -1) {
		return true; //�щ컮瑜� �щ㎎ �뺤떇
	}
	alert("�대찓�� 二쇱냼瑜� �뺥솗�� �낅젰�댁＜�몄슂.");
	return false;
}

//-------------------------------------------------------------------------
//�대��� 踰덊샇�� �뺤떇�� 留욌뒗吏� 泥댄겕�섎뒗 �⑥닔.
//-------------------------------------------------------------------------
function is_mobile_number(phoneNum) {

	var regExp = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;

	if (!regExp.test(phoneNum)) {
		alert("�대��곕쾲�몃� �뺥솗�� �낅젰�댁＜�몄슂.");
		return false
	}
	return true;

}

//-------------------------------------------------------------------------
// �낅젰諛쏆� 臾몄옄�댁뿉�� �レ옄留� �꾪꽣�� 臾몄옄�댁쓣 諛섑솚
//-------------------------------------------------------------------------/
function fn_getNumber(sVal) {
	var pstr, sstr, ii;
	sstr = sVal;
	pstr = "";
	for (ii = 0; ii < sstr.length; ii++) {
		//isNaN() : �낅젰�뚮씪誘명꽣�� 媛믪씠 �レ옄硫� false,�レ옄媛� �꾨땲硫� true瑜� 諛섑솚
		if (!isNaN(sstr.substr(ii, 1)))
			pstr = pstr + sstr.substr(ii, 1);
	}
	return pstr;
}

//-------------------------------------------------------------------------
//�좎쭨 �좏슚�깆쓣 泥댄겕�섍린 �ъ슜�섎뒗 �⑥닔 蹂��� �ы븿
//-------------------------------------------------------------------------
function is_valid_date(p_date, in_param) {
	var p_param = in_param || "";
	var v_date = p_date;

	if (isEmpty(v_date)) {
		alert("�좎쭨媛� �낅젰�섏� �딆븯�듬땲��.");
		return false;
	}

	v_date = fn_getNumber(v_date);

	if (v_date.length != 8) {
		alert(p_param + '�좎쭨媛� �섎せ �낅젰�섏뿀�듬땲��.');
		return false;
	}

	if (!is_number(v_date)) {
		alert(p_param + '�좎쭨�� �レ옄留� �낅젰�� �� �덉뒿�덈떎.');
		return false;
	}

	var v_year = parseInt(v_date.substring(0, 4), 10);
	var v_month = parseInt(v_date.substring(4, 6), 10);
	var v_day = parseInt(v_date.substring(6, 8), 10);

	if (!is_valid_year(v_year)) {
		alert(p_param + '�좎쭨媛� �섎せ �낅젰�섏뿀�듬땲��. �꾨룄�� 1800�꾩뿉�� 9999�꾧퉴吏� �낅땲��.');
		return false;
	}
	if (!is_valid_month(v_month)) {
		alert(p_param + '�좎쭨媛� �섎せ �낅젰�섏뿀�듬땲��. �ъ� 1�붿뿉�� 12�붽퉴吏� �낅땲��.');
		return false;
	}
	if (v_day < 1 || v_day > fn_getLastDay(v_year, v_month)) {
		alert(p_param + '�좎쭨媛� �섎せ �낅젰�섏뿀�듬땲��.' + v_year + '�� ' + v_month + '�붿뿉�� ' + v_day + '�쇱씠 �놁뒿�덈떎.');
		return false;
	}

	return true;
}

//-------------------------------------------------------------------------
//�쒓컙�� �좏슚�깆쓣 泥댄겕�섍린 �꾪빐 �ъ슜�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_valid_time(p_time) {

	var v_time = p_time;

	if (isEmpty(v_time)) {
		alert("�쒓컙�� �낅젰�� 二쇱떗�쒖삤");
		return false;
	}

	v_time = fn_getNumber(v_time);

	if (v_time.length != 6) {
		alert('�쒓컙�� �섎せ �낅젰�섏뿀�듬땲��.');
		return false;
	}

	if (!is_number(v_time)) {
		alert('�쒓컙�� �レ옄留� �낅젰�� �� �덉뒿�덈떎.');
		return false;
	}

	var v_hour = parseInt(v_time.substring(0, 2), 10);
	var v_min = parseInt(v_time.substring(2, 4), 10);
	var v_sec = parseInt(v_time.substring(4, 6), 10);

	if (!is_valid_hour(v_hour)) {
		alert("�쒓컙�� �섎せ �낅젰�섏뿀�듬땲��.�쒓컙�� 0~24源뚯� �낅땲��.");
		return false;
	}
	if (!is_valid_min(v_min)) {
		alert("遺꾩씠 �섎せ �낅젰�섏뿀�듬땲��.遺꾩� 0~59源뚯� �낅땲��.");
		return false;
	}
	if (!is_valid_sec(v_sec)) {
		alert("珥덇� �섎せ �낅젰�섏뿀�듬땲��.珥덈뒗 0~59源뚯� �낅땲��.");
		return false;
	}
	return true;
}


//-------------------------------------------------------------------------
//�쒓컙�� �좏슚�깆쓣 泥댄겕�섍린 �꾪빐 �ъ슜�섎뒗 �⑥닔
//-------------------------------------------------------------------------
function is_valid_timehm(p_time) {

	var v_time = p_time;

	if (isEmpty(v_time)) {
		alert("�쒓컙�� �낅젰�� 二쇱떗�쒖삤");
		return false;
	}

	v_time = fn_getNumber(v_time);

	if (v_time.length != 4) {
		alert('�쒓컙�� �섎せ �낅젰�섏뿀�듬땲��.');
		return false;
	}

	if (!is_number(v_time)) {
		alert('�쒓컙�� �レ옄留� �낅젰�� �� �덉뒿�덈떎.');
		return false;
	}

	var v_hour = parseInt(v_time.substring(0, 2), 10);
	var v_min = parseInt(v_time.substring(2, 4), 10);

	if (!is_valid_hour(v_hour)) {
		alert("�쒓컙�� �섎せ �낅젰�섏뿀�듬땲��.�쒓컙�� 0~24源뚯� �낅땲��.");
		return false;
	}
	if (!is_valid_min(v_min)) {
		alert("遺꾩씠 �섎せ �낅젰�섏뿀�듬땲��.遺꾩� 0~59源뚯� �낅땲��.");
		return false;
	}
	return true;
}

//-------------------------------------------------------------------------
//湲곌컙 �좏슚�깆쓣 泥댄겕�섍린 �꾪빐 �ъ슜�섎뒗 �⑥닔
//is_valid_period(�쒖옉��, 醫낅즺��)
//-------------------------------------------------------------------------
function is_valid_period(p_date1, p_date2, p_name1, p_name2) {

	var v_date1 = p_date1;
	var v_date2 = p_date2;

	var v_name1 = p_name1 || "";
	var v_name2 = p_name2 || "";

	if (!is_valid_date(v_date1)) {
		return false;
	}
	if (!is_valid_date(v_date2)) {
		return false;
	}
	if ("" == v_name1) {
		v_name1 = "�쒖옉��";
	}
	if ("" == v_name2) {
		v_name2 = "醫낅즺��";
	}

	if (v_date1 > v_date2) {
		alert(v_name1 + "(" + v_date1 + ")�� " + v_name2 + "(" + v_date2 + ")蹂대떎 �댁쟾�댁뼱�� �⑸땲��.");
		return false;
	}

	return true;

}

//-------------------------------------------------------------------------
//�レ옄 �몄옄由щ쭏�� 肄ㅻ쭏李띻린
//-------------------------------------------------------------------------
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//-------------------------------------------------------------------------
// 湲��먯닔 湲몄씠 泥댄겕�� 珥덇낵�� ��젣泥섎━
// @param aro_name {object} 湲몄씠 泥댄겕瑜� �� input element
// @param ari_max {number} �쒗븳 湲몄씠
// @param displayId {string} �꾩옱 湲��먯닔瑜� 異쒕젰�섎뒗 HTML �붿냼�� �꾩씠��
// @param propertyName {string} 泥댄겕�섎뒗 �띿꽦�� �대쫫
//-------------------------------------------------------------------------
function fc_chk_length(aro_name, ari_max, displayId, propertyName) {
	var content = aro_name.value;

	if (content.length > ari_max) {
		alert(propertyName + '�� 理쒕� ' + ari_max + '�먭퉴吏� �묒꽦 媛��ν빀�덈떎.');
		aro_name.value = content.slice(0, ari_max);
	}

	$('#' + displayId).html(aro_name.value.length);
}


//-------------------------------------------------------------------------
//濡쒓렇�꾩썐
//-------------------------------------------------------------------------
function fnGoLogout() {
	location.href = "/admin/login/logout.do";
}

function openPopup(url, width, height, popupName, scrollFlag) {

	var popWidth = width;
	var popHeight = height;
	var winHeight = document.body.clientHeight;	// �꾩옱李쎌쓽 �믪씠
	var winWidth = document.body.clientWidth;	// �꾩옱李쎌쓽 �덈퉬
	var winX = window.screenX || window.screenLeft || 0;// �꾩옱李쎌쓽 x醫뚰몴 
	var winY = window.screenY || window.screenTop || 0;	// �꾩옱李쎌쓽 y醫뚰몴 
	var popX = winX + (winWidth - popWidth) / 2;
	var popY = winY + (winHeight - popHeight) / 2;

	var scrollbars = "yes";
	if (scrollFlag) {
		scrollbars = scrollFlag;
	}

	window.open(url, popupName, "width=" + popWidth + ",height=" + popHeight + ",top=" + popY + ",left=" + popX + ",scrollbars=" + scrollbars);
}



/**
* �� �좎쭨�� 李⑥씠瑜� �쇱옄濡� 援ы븳��.(議고쉶 醫낅즺�� - 議고쉶 �쒖옉��)
*
* @param val1 - 議고쉶 �쒖옉��(�좎쭨 ex.2002-01-01)
* @param val2 - 議고쉶 醫낅즺��(�좎쭨 ex.2002-01-01)
* @return 湲곌컙�� �대떦�섎뒗 �쇱옄
*/
function calDateRange(d1, d2) {
	var val1 = $.trim(d1);
	var val2 = $.trim(d2);
	var FORMAT = "-";

	// FORMAT�� �ы븿�� 湲몄씠 泥댄겕
	if (val1.length != 10 || val2.length != 10) {
		return null;
	}


	// FORMAT�� �덈뒗吏� 泥댄겕
	if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0) {
		return null;
	}

	// �꾨룄, ��, �쇰줈 遺꾨━
	var start_dt = val1.split(FORMAT);
	var end_dt = val2.split(FORMAT);



	// �� - 1(�먮컮�ㅽ겕由쏀듃�� �붿씠 0遺��� �쒖옉�섍린 �뚮Ц��...)
	// Number()瑜� �댁슜�섏뿬 08, 09�붿쓣 10吏꾩닔濡� �몄떇�섍쾶 ��.
	start_dt[1] = (Number(start_dt[1]) - 1) + "";
	end_dt[1] = (Number(end_dt[1]) - 1) + "";

	var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
	var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);


	return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

/**
* �ㅻ뒛�좎쭨 援ы븯湲�
* */
function getToday() {

	var date = new Date();

	var year = date.getFullYear();
	var month = date.getMonth() + 1; // 0遺��� �쒖옉�섎�濡� 1�뷀븿 �뷀븿
	var day = date.getDate();

	if (("" + month).length == 1) { month = "0" + month; }
	if (("" + day).length == 1) { day = "0" + day; }

	return year + "-" + month + "-" + day;

}



//-------------------------------------------------------------------------
// �レ옄留뚯엯��, 1000�⑥쐞 肄ㅻ쭏
//-------------------------------------------------------------------------
function inputNumberFormat(obj) {
	$(obj).keyup(function () {
		$(this).val(comma(uncomma($(this).val().replace(/[^0-9]/g, ""))));
	});
}

//-------------------------------------------------------------------------
// 1000�⑥쐞 肄ㅻ쭏(,)
//-------------------------------------------------------------------------
function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//-------------------------------------------------------------------------
// 肄ㅻ쭏(,) �쒓굅
//-------------------------------------------------------------------------
function uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

//-------------------------------------------------------------------------
// �섏씠��(-) �쒓굅
//-------------------------------------------------------------------------
function unHyphen(str) {
	str = String(str);
	return str.replace(/\-/g, '');
}

//-------------------------------------------------------------------------
// �덉빟寃곗젣 �곹깭�쒖떆
//-------------------------------------------------------------------------
function scheduleStateTxt(scheduleState) {
	var returnTxt = "";
	if (scheduleState == '0') {
		returnTxt = "寃곗젣�꾨즺"
	} else if (scheduleState == '1') {
		returnTxt = "寃곗젣��湲�"
	} else if (scheduleState == '2') {
		returnTxt = "寃곗젣痍⑥냼"
	} else if (scheduleState == '8') {
		returnTxt = "�ъ씤�몄궗��"
	} else if (scheduleState == '7') {
		returnTxt = "理쒖쥌寃곗젣�ㅽ뙣"
	} else {
		returnTxt = "寃곗젣�ㅽ뙣"
	}
	return returnTxt;
}

(function (window, document, navigator) {
	/**
	 * �쇱옟�� �ㅼ퐫�� �뺣━瑜� �꾪빐, �먯쭊�곸쑝濡� 怨듯넻 �⑥닔瑜� �ш린濡� ��퉩�덈떎.
	 */
	var CommonUtil = {};

	/**
	 * 紐⑤컮�쇱씤吏� �щ� �먮떒
	 * @return {boolean} true硫� 紐⑤컮��, false硫� �곗뒪�ы깙
	 */
	CommonUtil.isMobile = function () {
		var isMobile = false; //initiate as false
		// device detection
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

		return isMobile;
	};

	/**
	 * SNS 怨듭쑀
	 * @param {object} options
	 * @param {string} options.platform SNS �쒕퉬�� 醫낅쪟 (facebook | twitter | kakaolink | band)
	 * @param {string} options.title �쒕ぉ
	 * @param {string} options.description �ㅻ챸
	 * @param {string} options.url 怨듭쑀 �섏씠吏��� 二쇱냼
	 * @param {string} options.image ���� �대�吏� 二쇱냼
	 */
	CommonUtil.sendSns = function (options) {
		var platform = options.platform;
		var title = options.title;
		var description = options.description;
		var url = options.url;
		var image = options.image;

		var titleReplaced = title.replace(/<(\/)?([a-zA-Z1-9]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g, "");
		var descriptionReplaced = description.replace(/<(\/)?([a-zA-Z1-9]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g, "");

		if (platform === 'kakaolink' || platform === 'band') {
			if (!isMobile.any) {
				alert("紐⑤컮�� 湲곌린�먯꽌 �댁슜媛��ν븳 湲곕뒫�낅땲��. �ㅻ쭏�명룿�먯꽌 �댁슜�댁＜�몄슂.");
				return false;
			}
		}

		switch (platform) {
			case 'facebook':
				FB.ui({
					method: 'share',
					href: url
				}, function () {
					$("#sns_layer_popup").hide();
				});
				break;
			case 'twitter':
				window.open('http://twitter.com/intent/tweet?text=' + title + '&url=' + encodeURIComponent(url),
					'intent', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
				break;
			case 'kakaolink':
				Kakao.Link.sendDefault({
					objectType: 'feed',
					content: {
						title: titleReplaced,
						description: descriptionReplaced,
						imageUrl: image,
						link: {
							mobileWebUrl: url,
							webUrl: url
						}
					},
					fail: function () {
						alert("紐⑤컮�� 湲곌린�먯꽌 �댁슜媛��ν븳 湲곕뒫�낅땲��. �ㅻ쭏�명룿�먯꽌 �댁슜�댁＜�몄슂.");
					},
					success: function () {
						$("#sns_layer_popup").hide();
					}
				});
				break;
			case 'band':
				window.open("http://www.band.us/plugin/share?body=" + encodeURIComponent(titleReplaced) + encodeURIComponent('\r\n') + encodeURIComponent(url) + "&route=" + url + "", "share_band", "width=410, height=540, resizable=no");
				break;
			default:
				alert('吏��먰븯吏� �딅뒗 SNS�낅땲��.');
				return false;
		}
	};

	/**
	 * Hash fragments 媛믪쓣 key, value �뺥깭�� 媛앹껜濡� 諛섑솚
	 */
	CommonUtil.getHashParam = function () {
		var hashParams = {};
		var e,
			a = /\+/g,
			r = /([^&;=]+)=?([^&;]*)/g,
			d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
			q = window.location.hash.substring(1);

		while (e = r.exec(q))
			hashParams[d(e[1])] = d(e[2]);

		return hashParams;
	};

	/**
	 * �꾨줈�앺듃 �ъ옄�� �꾩떆 �뚯씠釉� _ 以묎컙����
	 */
	CommonUtil.setInvestorTmp = function (investorData) {
		var flag = false;
		var rewardInvestor = {}
			, rewardProject = {};

		if ('Y' == investorData.simulationFlag) {
			rewardInvestor.investType = "紐⑥쓽�ъ옄";
		} else if ('N' == investorData.simulationFlag) {
			rewardInvestor.investType = "�ъ옄";
		}

		/* 李몄뿬(�ъ옄)�댁뿭 媛� �명똿 */
		if (investorData.investorSeq) rewardInvestor.investorSeq = investorData.investorSeq;
		if (investorData.projectSeq) rewardInvestor.projectSeq = investorData.projectSeq;
		if (investorData.omcpay) rewardInvestor.omcpay = investorData.omcpay;
		if (investorData.couponId) rewardInvestor.couponId = investorData.couponId;
		if (investorData.couponPoint) rewardInvestor.couponPoint = investorData.couponPoint;
		if (investorData.paymethod) rewardInvestor.paymethod = investorData.paymethod;
		if (investorData.investorHp) rewardInvestor.investorHp = investorData.investorHp;
		if (investorData.receiveName) rewardInvestor.receiveName = investorData.receiveName;
		if (investorData.hp) rewardInvestor.hp = investorData.hp;
		if (investorData.email) rewardInvestor.email = investorData.email;
		if (investorData.postno) rewardInvestor.postno = investorData.postno;
		if (investorData.addr1) rewardInvestor.addr1 = investorData.addr1;
		if (investorData.addr2) rewardInvestor.addr2 = investorData.addr2;
		if (investorData.memo) rewardInvestor.memo = investorData.memo;
		if (investorData.supportComment) rewardInvestor.supportComment = investorData.supportComment;
		if (investorData.addAmt) rewardInvestor.addAmt = investorData.addAmt;
		if (investorData.expenseAmt) rewardInvestor.expenseAmt = investorData.expenseAmt;
		if (investorData.orderno) rewardInvestor.orderno = investorData.orderno;

		/* �꾨줈�앺듃 媛� �명똿 */
		if (investorData.fundingType) rewardProject.fundingType = investorData.fundingType;

		var param = {
			rewardItemList: investorData.rewardItemList,
			rewardInvestor: rewardInvestor,
			rewardProject: rewardProject
		};

		$.ajax({
			method: 'POST',
			url: '/reward/save/investorTmpAjax.do',
			async: false,
			dataType: 'json',
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(param),
			success: function (data) {
				if (data.rewardJoinVO.rewardInvestor.investorSeq) {
					$("#investorSeq").val(data.rewardJoinVO.rewardInvestor.investorSeq);
				}
				if (data.code == 200) {
					flag = true;
				} else if (data.code == 401) {
					// - 濡쒓렇�� �� �ъ슜�� �놁쓣 寃쎌슦 : 濡쒓렇�� �섏씠吏�濡� �대룞
					alert("濡쒓렇�� �� �댁슜�� 媛��ν빀�덈떎.");
					var returnUrl = "";
					if (investorData.projectSeq) {
						returnUrl = 'returnUrl=/reward/' + investorData.projectSeq;
					}
					$(location).attr('href', '/login/form?' + returnUrl);
					return;
				} else {
					alert("�좎떆�� �ㅼ떆 �댁슜�� 二쇱떆湲� 諛붾엻�덈떎.");
					if (investorData.projectSeq) {
						$(location).attr('href', '/reward/' + investorData.projectSeq);
					} else {
						$(location).attr('href', '/main');
					}
				}
			},
			error: function () {
				alert('�좎떆�� �ㅼ떆 �댁슜�� 二쇱떆湲� 諛붾엻�덈떎.');
				if (investorData.projectSeq) {
					$(location).attr('href', '/reward/' + investorData.projectSeq);
				} else {
					$(location).attr('href', '/main');
				}
			}
		});
		return flag;
	};

	/**
	 * 肄ㅻ쭏(,) �щℓ�낆씠 �섏엳�� 臾몄옄�� �먮뒗 input �붿냼�� 臾몄옄�댁쓣 �レ옄濡� 蹂���
	 * @param target {string|object}
	 * @return {number} 蹂��� 寃곌낵, �ㅽ뙣�� NaN
	 */
	CommonUtil.getNumberFrom = function (target) {
		var str;

		if (typeof target === 'string') {
			str = target;
		} else if (typeof target === 'object' && typeof target.val === 'function') {
			str = target.val();
		} else {
			console.warn('CommonUtil.getNumberFrom:: �섎せ�� �낅젰�낅땲��.');
		}

		str = (typeof str === 'string') ? uncomma(str.trim()) : '';

		return parseInt(str);
	};

	/**
	 * 留덉슦�� �고겢由� || �덈줈怨좎묠 �대깽�� 諛⑹�
	 * @param target {$(document)}
	 * @return false
	 */
	CommonUtil.setRefreshKeyControl = function (target) {
		target.document.contextmenu(function (e) {
			return false;
		});
		target.document.keydown(function (e) {
			if (e.which === 116) {
				if (typeof event == "object") {
					event.keyCode = 0;
				}
				return false;
			} else if ((e.which === 78 || e.which === 82 || e.which === 85) && e.ctrlKey) {
				return false;
			}
		});
	};

	/**
	 * �ㅻ줈媛�湲� �대깽�� 留됯린
	 * @param target {window, history}
	 */
	CommonUtil.historyBackControl = function (target) {
		target.history.pushState(null, null, target.location.href);
		target.window.onpopstate = function (event) {
			target.history.go(1);
		};
	};

	/**
	 * �뱀젙 �ㅼ닔�� 踰꾨┝媛� 諛섑솚
	 * @param {number} value �먮낯媛�
	 * @param {number} exp �먮━��
	 * @return {number} 蹂��� 寃곌낵
	 */
	CommonUtil.floor10 = function (value, exp) {
		return decimalAdjust('floor', value, exp);
	};

	/**
	 * �뱀젙 �ㅼ닔�� 諛섏삱由쇨컪 諛섑솚
	 * @param {number} value �먮낯媛�
	 * @param {number} exp �먮━��
	 * @return {number} 蹂��� 寃곌낵
	 */
	CommonUtil.round10 = function (value, exp) {
		return decimalAdjust('round', value, exp);
	};

	/**
	 * �뱀젙 �ㅼ닔�� �щ┝媛� 諛섑솚
	 * @param {number} value �먮낯媛�
	 * @param {number} exp �먮━��
	 * @return {number} 蹂��� 寃곌낵
	 */
	CommonUtil.ceil10 = function (value, exp) {
		return decimalAdjust('ceil', value, exp);
	};

	/**
	 * CommonUtil.floor10, round10, ceil10�� �꾪븳 怨듯넻 �⑥닔
	 * @param type 蹂��� 醫낅쪟,(踰꾨┝, 諛섏삱由�, �щ┝)
	 * @param value �먮낯 媛�
	 * @param exp �먮━��
	 * @returns {*}
	 */
	function decimalAdjust(type, value, exp) {
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// �뚯닔�� 蹂��� 泥섎━
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	CommonUtil.getTinymceConfig = function (options) {
		var contentCss = options.contentCss;
		var alignUse = options.alignUse;
		var widthRate = options.widthRate;
		var mode = options.mode;
		var initCall = options.initCall;
		var fullscreen = options.fullscreen;

		var config = {
			selector: '#content',
			content_css: contentCss,
			plugins: [
				'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak',
				'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
				'contextmenu directionality emoticons template textcolor paste textpattern'
			],
			language: 'ko_KR',
			color_map: [
				'000000', 'Black',
				'80c72d', 'Green',
				'1568a6', 'Blue'
			],
			toolbar: 'undo redo styleselect forecolor bold italic underline strikethrough superscript subscript hr blockquote | link | media | image',
			body_class: 'edit-style',
			formats: {
				underline: { inline: 'u' },
				strikethrough: { inline: 's' },
				subscript: { inline: 'sup' },
				superscript: { inline: 'sub' }
			},
			extended_valid_elements: 'area[shape|coords|href|target|onfocus]',
			style_formats: [{
				title: '�� �쒕ぉ',
				block: 'h2'
			}, {
				title: '以묎컙 �쒕ぉ',
				block: 'h3'
			}, {
				title: '�묒� �쒕ぉ',
				block: 'h4'
			}, {
				title: '蹂몃Ц',
				block: 'p'
			}],
			forced_root_block: 'p',
			statusbar: false,
			menubar: false,
			media_live_embeds: true,
			default_link_target: '_blank',
			height: 500,
			image_title: false,
			image_description: false,
			image_caption: true,
			automatic_uploads: false,
			relative_urls: false,
			file_picker_types: 'image',
			paste_preprocess: function (plugin, args) {
				var regExp = '<table[^<]*>';
				if (args.content.match(regExp) != null) {
					alert("�쒕뒗 �낅젰�� �� �놁뒿�덈떎.");
					args.content = "";
				}
				var styleRegExp = /([ ]+style='[^']+')|([ ]+style="[^"]+")/gi;
				args.content = args.content.replace(styleRegExp, '');

				var classRegExp = /([ ]+class='[^']+')|([ ]+class="[^"]+")/gi;
				args.content = args.content.replace(classRegExp, '');

				var idRegExp = /([ ]+id='[^']+')|([ ]+id="[^"]+")/gi;
				args.content = args.content.replace(idRegExp, '');
			},
			images_upload_handler: function (blobInfo, success, failure) {
				var xhr, formData;

				xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open('POST', '/cmm/fms/insertEditorImageAjax');

				xhr.onload = function () {
					var json;

					if (xhr.status !== 200) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}

					json = JSON.parse(xhr.responseText);

					if (!json || typeof json.location != 'string') {
						failure('Invalid JSON: ' + xhr.responseText);
						return;
					}

					success(json.location);
				};

				formData = new FormData();
				formData.append('file', blobInfo.blob(), blobInfo.filename());

				xhr.send(formData);
			},
			setup: function (editor) {
				var addEventTimer;
				var triggerClickTimer;

				function triggerClickUploadTab() {
					var uploadTab = $('.tox-dialog__body-nav-item').eq(1);
					if (uploadTab.length) {
						uploadTab.trigger('click');
						clearInterval(triggerClickTimer);
					}
				}

				function addEventHandler() {
					var imageToolbarButton = $('button[title="�대�吏� �쎌엯/�섏젙"]');
					if (imageToolbarButton.length) {
						imageToolbarButton.click(function () {
							triggerClickTimer = setInterval(triggerClickUploadTab, 10);
						});
						clearInterval(addEventTimer);
					}
				}

				editor.on('init', function () {
					addEventTimer = setInterval(addEventHandler, 100);
				});
			}
		};

		if (alignUse) {
			config.toolbar = config.toolbar + ' | alignleft aligncenter alignright';
		}
		if (widthRate != null) {
			config.width = widthRate;
		}
		if (mode) {
			delete config.selector;
			config.mode = 'textareas';
		}
		if (initCall) {
			config.init_instance_callback = function () {
				endScript();
			}
		}
		if (fullscreen) {
			config.toolbar = 'fullscreen | ' + config.toolbar;
		}

		return config;
	};

	CommonUtil.getSimpleTinymceConfig = function (mode) {
		var config = {
			selector: '#content',
			plugins: [
				"advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
				"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
				"contextmenu directionality emoticons template textcolor paste textcolor colorpicker textpattern"
			],
			language: "ko_KR",
			toolbar: "undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image",
			// content_css: "/omc/asset/css/edit.css",
			body_class: "edit-style",
			statusbar: false,
			menubar: false,
			media_live_embeds: true,
			default_link_target: "_blank",
			height: 500,
			relative_urls: false,
			image_title: true,
			automatic_uploads: false,
			file_picker_types: 'image',
			paste_preprocess: function (plugin, args) {
				var regExp = '<table[^<]*>';
				if (args.content.match(regExp) != null) {
					alert("�쒕뒗 �낅젰�� �� �놁뒿�덈떎.");
					args.content = "";
				}
				var styleRegExp = /([ ]+style='[^']+')|([ ]+style="[^"]+")/gi;
				args.content = args.content.replace(styleRegExp, '');

				var classRegExp = /([ ]+class='[^']+')|([ ]+class="[^"]+")/gi;
				args.content = args.content.replace(classRegExp, '');
			},
			images_upload_handler: function (blobInfo, success, failure) {
				var xhr, formData;

				xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open('POST', '/cmm/fms/insertEditorImageAjax');

				xhr.onload = function () {
					var json;

					if (xhr.status !== 200) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}

					json = JSON.parse(xhr.responseText);

					if (!json || typeof json.location != 'string') {
						failure('Invalid JSON: ' + xhr.responseText);
						return;
					}

					success(json.location);
				};

				formData = new FormData();
				formData.append('file', blobInfo.blob(), blobInfo.filename());

				xhr.send(formData);
			},
			setup: function (editor) {
				var addEventTimer;
				var triggerClickTimer;

				function triggerClickUploadTab() {
					var uploadTab = $('.tox-dialog__body-nav-item').eq(1);
					if (uploadTab.length) {
						uploadTab.trigger('click');
						clearInterval(triggerClickTimer);
					}
				}

				function addEventHandler() {
					var imageToolbarButton = $('button[title="�대�吏� �쎌엯/�섏젙"]');
					if (imageToolbarButton.length) {
						imageToolbarButton.click(function () {
							triggerClickTimer = setInterval(triggerClickUploadTab, 10);
						});
						clearInterval(addEventTimer);
					}
				}

				editor.on('init', function () {
					addEventTimer = setInterval(addEventHandler, 100);
				});
			}
		};

		if ('faq' === mode) {
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image';
		} else if ('inquiry' === mode) {
			config.selector = '#answerContent';
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link';
		} else if ('investor' === mode) {
			config.toolbar = 'undo redo | styleselect | bold italic underline strikethrough forecolor backcolor superscript subscript hr charmap emoticons blockquote | link | media | image | custom_image';
			config.menubar = true;
			config.height = 300;

		}

		return config;
	};

	window.CommonUtil = CommonUtil;
})(window, document, navigator);


//-------------------------------------------------------------------------
// Emojis 臾몄옄 泥댄겕
//-------------------------------------------------------------------------
function check_emojis(string) {
	var pattern = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	if (pattern.test(string)) {
		return true;
	}
	return false;
}

//-------------------------------------------------------------------------
// Emojis 臾몄옄 �쒓굅
//-------------------------------------------------------------------------
function remove_emojis(string) {
	var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	return string.replace(regex, '');
}
//-------------------------------------------------------------------------
// Text �� URL�� ���섏뿬 �섏씠�쇰쭅�� �쎌엯
//-------------------------------------------------------------------------
function addHyperLinkInText(string) {
	var regex = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/gi;
	return string.replace(regex, '<a href="$1" target="_blank">$1</a>');
}

/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function (global, factory) {

	if (typeof module === "object" && typeof module.exports === "object") {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory(global, true) :
			function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];

	var document = window.document;

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "1.12.4",

		// Define a local copy of jQuery
		jQuery = function (selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},

		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {
			return num != null ?

				// Return just the one element from the set
				(num < 0 ? this[num + this.length] : this[num]) :

				// Return all the elements in a clean array
				slice.call(this);
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function (callback) {
			return jQuery.each(this, callback);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
				j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function () {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) ||
						(copyIsArray = jQuery.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function (msg) {
			throw new Error(msg);
		},

		noop: function () { },

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function (obj) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function (obj) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function (obj) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
		},

		isEmptyObject: function (obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		isPlainObject: function (obj) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			try {

				// Not own constructor property must be Object
				if (obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {

				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if (!support.ownFirst) {
				for (key in obj) {
					return hasOwn.call(obj, key);
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for (key in obj) { }

			return key === undefined || hasOwn.call(obj, key);
		},

		type: function (obj) {
			if (obj == null) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[toString.call(obj)] || "object" :
				typeof obj;
		},

		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function (data) {
			if (data && jQuery.trim(data)) {

				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				(window.execScript || function (data) {
					window["eval"].call(window, data); // jscs:ignore requireDotNotation
				})(data);
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function (obj, callback) {
			var length, i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function (text) {
			return text == null ?
				"" :
				(text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret,
						typeof arr === "string" ?
							[arr] : arr
					);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			var len;

			if (arr) {
				if (indexOf) {
					return indexOf.call(arr, elem, i);
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

				for (; i < len; i++) {

					// Skip accessing in sparse arrays
					if (i in arr && arr[i] === elem) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function (first, second) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while (j < len) {
				first[i++] = second[j++];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if (len !== len) {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, invert) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function (fn, context) {
			var args, proxy, tmp;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function () {
			return +(new Date());
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

	function isArrayLike(obj) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && (length - 1) in obj;
	}
	var Sizzle =
		/*!
		 * Sizzle CSS Selector Engine v2.2.1
		 * http://sizzlejs.com/
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2015-10-17
		 */
		(function (window) {

			var i,
				support,
				Expr,
				getText,
				isXML,
				tokenize,
				compile,
				select,
				outermostContext,
				sortInput,
				hasDuplicate,

				// Local document vars
				setDocument,
				document,
				docElem,
				documentIsHTML,
				rbuggyQSA,
				rbuggyMatches,
				matches,
				contains,

				// Instance-specific data
				expando = "sizzle" + 1 * new Date(),
				preferredDoc = window.document,
				dirruns = 0,
				done = 0,
				classCache = createCache(),
				tokenCache = createCache(),
				compilerCache = createCache(),
				sortOrder = function (a, b) {
					if (a === b) {
						hasDuplicate = true;
					}
					return 0;
				},

				// General-purpose constants
				MAX_NEGATIVE = 1 << 31,

				// Instance methods
				hasOwn = ({}).hasOwnProperty,
				arr = [],
				pop = arr.pop,
				push_native = arr.push,
				push = arr.push,
				slice = arr.slice,
				// Use a stripped-down indexOf as it's faster than native
				// http://jsperf.com/thor-indexof-vs-for/5
				indexOf = function (list, elem) {
					var i = 0,
						len = list.length;
					for (; i < len; i++) {
						if (list[i] === elem) {
							return i;
						}
					}
					return -1;
				},

				booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

				// Regular expressions

				// http://www.w3.org/TR/css3-selectors/#whitespace
				whitespace = "[\\x20\\t\\r\\n\\f]",

				// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
				identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

				// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
				attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
					// Operator (capture 2)
					"*([*^$|!~]?=)" + whitespace +
					// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
					"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
					"*\\]",

				pseudos = ":(" + identifier + ")(?:\\((" +
					// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
					// 1. quoted (capture 3; capture 4 or capture 5)
					"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
					// 2. simple (capture 6)
					"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
					// 3. anything else (capture 2)
					".*" +
					")\\)|)",

				// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
				rwhitespace = new RegExp(whitespace + "+", "g"),
				rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

				rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
				rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

				rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

				rpseudo = new RegExp(pseudos),
				ridentifier = new RegExp("^" + identifier + "$"),

				matchExpr = {
					"ID": new RegExp("^#(" + identifier + ")"),
					"CLASS": new RegExp("^\\.(" + identifier + ")"),
					"TAG": new RegExp("^(" + identifier + "|[*])"),
					"ATTR": new RegExp("^" + attributes),
					"PSEUDO": new RegExp("^" + pseudos),
					"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
						"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
						"*(\\d+)|))" + whitespace + "*\\)|)", "i"),
					"bool": new RegExp("^(?:" + booleans + ")$", "i"),
					// For use in libraries implementing .is()
					// We use this for POS matching in `select`
					"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
				},

				rinputs = /^(?:input|select|textarea|button)$/i,
				rheader = /^h\d$/i,

				rnative = /^[^{]+\{\s*\[native \w/,

				// Easily-parseable/retrievable ID or TAG or CLASS selectors
				rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

				rsibling = /[+~]/,
				rescape = /'|\\/g,

				// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
				runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
				funescape = function (_, escaped, escapedWhitespace) {
					var high = "0x" + escaped - 0x10000;
					// NaN means non-codepoint
					// Support: Firefox<24
					// Workaround erroneous numeric interpretation of +"0x"
					return high !== high || escapedWhitespace ?
						escaped :
						high < 0 ?
							// BMP codepoint
							String.fromCharCode(high + 0x10000) :
							// Supplemental Plane codepoint (surrogate pair)
							String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
				},

				// Used for iframes
				// See setDocument()
				// Removing the function wrapper causes a "Permission Denied"
				// error in IE
				unloadHandler = function () {
					setDocument();
				};

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(
					(arr = slice.call(preferredDoc.childNodes)),
					preferredDoc.childNodes
				);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = {
					apply: arr.length ?

						// Leverage slice if possible
						function (target, els) {
							push_native.apply(target, slice.call(els));
						} :

						// Support: IE<9
						// Otherwise append directly
						function (target, els) {
							var j = target.length,
								i = 0;
							// Can't trust NodeList.length
							while ((target[j++] = els[i++])) { }
							target.length = j - 1;
						}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m, i, elem, nid, nidselect, match, groups, newSelector,
					newContext = context && context.ownerDocument,

					// nodeType defaults to 9, since context defaults to document
					nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector ||
					nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if ((m = match[1])) {

								// Document context
								if (nodeType === 9) {
									if ((elem = context.getElementById(m))) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) &&
										contains(context, elem) &&
										elem.id === m) {

										results.push(elem);
										return results;
									}
								}

								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;

								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName &&
								context.getElementsByClassName) {

								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}

						// Take advantage of querySelectorAll
						if (support.qsa &&
							!compilerCache[selector + " "] &&
							(!rbuggyQSA || !rbuggyQSA.test(selector))) {

							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;

								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {

								// Capture the context ID, setting it first if necessary
								if ((nid = context.getAttribute("id"))) {
									nid = nid.replace(rescape, "\\$&");
								} else {
									context.setAttribute("id", (nid = expando));
								}

								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
								while (i--) {
									groups[i] = nidselect + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");

								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) ||
									context;
							}

							if (newSelector) {
								try {
									push.apply(results,
										newContext.querySelectorAll(newSelector)
									);
									return results;
								} catch (qsaError) {
								} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
			 * Create key-value caches of limited size
			 * @returns {function(string, object)} Returns the Object data after storing it on itself with
			 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
			 *	deleting the oldest entry
			 */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return (cache[key + " "] = value);
				}
				return cache;
			}

			/**
			 * Mark a function for special use by Sizzle
			 * @param {Function} fn The function to mark
			 */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
			 * Support testing using an element
			 * @param {Function} fn Passed the created div and expects a boolean result
			 */
			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}

			/**
			 * Adds the same handler for all of the specified attrs
			 * @param {String} attrs Pipe-separated list of attributes
			 * @param {Function} handler The method that will be applied
			 */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
					i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
			 * Checks document order of two siblings
			 * @param {Element} a
			 * @param {Element} b
			 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
			 */
			function siblingCheck(a, b) {
				var cur = b && a,
					diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
						(~b.sourceIndex || MAX_NEGATIVE) -
						(~a.sourceIndex || MAX_NEGATIVE);

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while ((cur = cur.nextSibling)) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
			 * Returns a function to use in pseudos for input types
			 * @param {String} type
			 */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
			 * Returns a function to use in pseudos for buttons
			 * @param {String} type
			 */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
			 * Returns a function to use in pseudos for positionals
			 * @param {Function} fn
			 */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
							matchIndexes = fn([], seed.length, argument),
							i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[(j = matchIndexes[i])]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
			 * Checks a node for validity as a Sizzle context
			 * @param {Element|Object=} context
			 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
			 */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
			 * Detects XML nodes
			 * @param {Element|Object} elem An element or a document
			 * @returns {Boolean} True iff elem is a non-HTML XML node
			 */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
			 * Sets document-related variables once based on the current document
			 * @param {Element|Object} [doc] An element or document object to use to set the document
			 * @returns {Object} Returns the current document
			 */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare, parent,
					doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if ((parent = document.defaultView) && parent.top !== parent) {
					// Support: IE 11
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}

				/* Attributes
				---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				/* getElement(s)By*
				---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(document.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID find and filter
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);
							return m ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find["ID"];

					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" &&
								elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ?
					function (tag, context) {
						if (typeof context.getElementsByTagName !== "undefined") {
							return context.getElementsByTagName(tag);

							// DocumentFragment nodes don't have gEBTN
						} else if (support.qsa) {
							return context.querySelectorAll(tag);
						}
					} :

					function (tag, context) {
						var elem,
							tmp = [],
							i = 0,
							// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
							results = context.getElementsByTagName(tag);

						// Filter out possible comments
						if (tag === "*") {
							while ((elem = results[i++])) {
								if (elem.nodeType === 1) {
									tmp.push(elem);
								}
							}

							return tmp;
						}
						return results;
					};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
				---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if ((support.qsa = rnative.test(document.querySelectorAll))) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" +
							"<select id='" + expando + "-\r\\' msallowcapture=''>" +
							"<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibing-combinator selector` fails
						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
					docElem.webkitMatchesSelector ||
					docElem.mozMatchesSelector ||
					docElem.oMatchesSelector ||
					docElem.msMatchesSelector)))) {

					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
				---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ?
					function (a, b) {
						var adown = a.nodeType === 9 ? a.documentElement : a,
							bup = b && b.parentNode;
						return a === bup || !!(bup && bup.nodeType === 1 && (
							adown.contains ?
								adown.contains(bup) :
								a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
						));
					} :
					function (a, b) {
						if (b) {
							while ((b = b.parentNode)) {
								if (b === a) {
									return true;
								}
							}
						}
						return false;
					};

				/* Sorting
				---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ?
					function (a, b) {

						// Flag for duplicate removal
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						// Sort on method existence if only one input has compareDocumentPosition
						var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
						if (compare) {
							return compare;
						}

						// Calculate position if both inputs belong to the same document
						compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
							a.compareDocumentPosition(b) :

							// Otherwise we know they are disconnected
							1;

						// Disconnected nodes
						if (compare & 1 ||
							(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

							// Choose the first element that is related to our preferred document
							if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
								return -1;
							}
							if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
								return 1;
							}

							// Maintain original order
							return sortInput ?
								(indexOf(sortInput, a) - indexOf(sortInput, b)) :
								0;
						}

						return compare & 4 ? -1 : 1;
					} :
					function (a, b) {
						// Exit early if the nodes are identical
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						var cur,
							i = 0,
							aup = a.parentNode,
							bup = b.parentNode,
							ap = [a],
							bp = [b];

						// Parentless nodes are either documents or disconnected
						if (!aup || !bup) {
							return a === document ? -1 :
								b === document ? 1 :
									aup ? -1 :
										bup ? 1 :
											sortInput ?
												(indexOf(sortInput, a) - indexOf(sortInput, b)) :
												0;

							// If the nodes are siblings, we can do a quick check
						} else if (aup === bup) {
							return siblingCheck(a, b);
						}

						// Otherwise we need full lists of their ancestors for comparison
						cur = a;
						while ((cur = cur.parentNode)) {
							ap.unshift(cur);
						}
						cur = b;
						while ((cur = cur.parentNode)) {
							bp.unshift(cur);
						}

						// Walk down the tree looking for a discrepancy
						while (ap[i] === bp[i]) {
							i++;
						}

						return i ?
							// Do a sibling check if the nodes have a common ancestor
							siblingCheck(ap[i], bp[i]) :

							// Otherwise nodes in our document sort first
							ap[i] === preferredDoc ? -1 :
								bp[i] === preferredDoc ? 1 :
									0;
					};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML &&
					!compilerCache[expr + " "] &&
					(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
					(!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
							// As well, disconnected nodes are said to be in a document
							// fragment in IE 9
							elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) { }
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],
					// Don't get fooled by Object.prototype properties (jQuery #13807)
					val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
						fn(elem, name, !documentIsHTML) :
						undefined;

				return val !== undefined ?
					val :
					support.attributes || !documentIsHTML ?
						elem.getAttribute(name) :
						(val = elem.getAttributeNode(name)) && val.specified ?
							val.value :
							null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
			 * Document sorting and removing duplicates
			 * @param {ArrayLike} results
			 */
			Sizzle.uniqueSort = function (results) {
				var elem,
					duplicates = [],
					j = 0,
					i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while ((elem = results[i++])) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
			 * Utility function for retrieving the text value of an array of DOM nodes
			 * @param {Array|Element} elem
			 */
			getText = Sizzle.getText = function (elem) {
				var node,
					ret = "",
					i = 0,
					nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while ((node = elem[i++])) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function (match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function (match) {
						/* matches from matchExpr["CHILD"]
							1 type (only|nth|...)
							2 what (child|of-type)
							3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
							4 xn-component of xn+y argument ([+-]?\d*n|)
							5 sign of xn-component
							6 x of xn-component
							7 sign of y-component
							8 y of y-component
						*/
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +((match[7] + match[8]) || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function (match) {
						var excess,
							unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) &&
							// Get excess from tokenize (recursively)
							(excess = tokenize(unquoted, true)) &&
							// advance to the next closing parenthesis
							(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function (nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ?
							function () { return true; } :
							function (elem) {
								return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
							};
					},

					"CLASS": function (className) {
						var pattern = classCache[className + " "];

						return pattern ||
							(pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
							classCache(className, function (elem) {
								return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
							});
					},

					"ATTR": function (name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check :
								operator === "!=" ? result !== check :
									operator === "^=" ? check && result.indexOf(check) === 0 :
										operator === "*=" ? check && result.indexOf(check) > -1 :
											operator === "$=" ? check && result.slice(-check.length) === check :
												operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
													operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
														false;
						};
					},

					"CHILD": function (type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
							forward = type.slice(-4) !== "last",
							ofType = what === "of-type";

						return first === 1 && last === 0 ?

							// Shortcut for :nth-*(n)
							function (elem) {
								return !!elem.parentNode;
							} :

							function (elem, context, xml) {
								var cache, uniqueCache, outerCache, node, nodeIndex, start,
									dir = simple !== forward ? "nextSibling" : "previousSibling",
									parent = elem.parentNode,
									name = ofType && elem.nodeName.toLowerCase(),
									useCache = !xml && !ofType,
									diff = false;

								if (parent) {

									// :(first|last|only)-(child|of-type)
									if (simple) {
										while (dir) {
											node = elem;
											while ((node = node[dir])) {
												if (ofType ?
													node.nodeName.toLowerCase() === name :
													node.nodeType === 1) {

													return false;
												}
											}
											// Reverse direction for :only-* (if we haven't yet done so)
											start = dir = type === "only" && !start && "nextSibling";
										}
										return true;
									}

									start = [forward ? parent.firstChild : parent.lastChild];

									// non-xml :nth-child(...) stores cache data on `parent`
									if (forward && useCache) {

										// Seek `elem` from a previously-cached index

										// ...in a gzip-friendly way
										node = parent;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] ||
											(outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex && cache[2];
										node = nodeIndex && parent.childNodes[nodeIndex];

										while ((node = ++nodeIndex && node && node[dir] ||

											// Fallback to seeking `elem` from the start
											(diff = nodeIndex = 0) || start.pop())) {

											// When found, cache indexes on `parent` and break
											if (node.nodeType === 1 && ++diff && node === elem) {
												uniqueCache[type] = [dirruns, nodeIndex, diff];
												break;
											}
										}

									} else {
										// Use previously-cached element index if available
										if (useCache) {
											// ...in a gzip-friendly way
											node = elem;
											outerCache = node[expando] || (node[expando] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[node.uniqueID] ||
												(outerCache[node.uniqueID] = {});

											cache = uniqueCache[type] || [];
											nodeIndex = cache[0] === dirruns && cache[1];
											diff = nodeIndex;
										}

										// xml :nth-child(...)
										// or :nth-last-child(...) or :nth(-last)?-of-type(...)
										if (diff === false) {
											// Use the same loop as above to seek `elem` from the start
											while ((node = ++nodeIndex && node && node[dir] ||
												(diff = nodeIndex = 0) || start.pop())) {

												if ((ofType ?
													node.nodeName.toLowerCase() === name :
													node.nodeType === 1) &&
													++diff) {

													// Cache the index of each encountered element
													if (useCache) {
														outerCache = node[expando] || (node[expando] = {});

														// Support: IE <9 only
														// Defend against cloned attroperties (jQuery gh-1709)
														uniqueCache = outerCache[node.uniqueID] ||
															(outerCache[node.uniqueID] = {});

														uniqueCache[type] = [dirruns, diff];
													}

													if (node === elem) {
														break;
													}
												}
											}
										}
									}

									// Incorporate the offset, then check against cycle size
									diff -= last;
									return diff === first || (diff % first === 0 && diff / first >= 0);
								}
							};
					},

					"PSEUDO": function (pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
							fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
								Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
								markFunction(function (seed, matches) {
									var idx,
										matched = fn(seed, argument),
										i = matched.length;
									while (i--) {
										idx = indexOf(seed, matched[i]);
										seed[idx] = !(matches[idx] = matched[i]);
									}
								}) :
								function (elem) {
									return fn(elem, 0, args);
								};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
							results = [],
							matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ?
							markFunction(function (seed, matches, context, xml) {
								var elem,
									unmatched = matcher(seed, null, xml, []),
									i = seed.length;

								// Match elements unmatched by `matcher`
								while (i--) {
									if ((elem = unmatched[i])) {
										seed[i] = !(matches[i] = elem);
									}
								}
							}) :
							function (elem, context, xml) {
								input[0] = elem;
								matcher(input, null, xml, results);
								// Don't keep the element (issue #299)
								input[0] = null;
								return !results.pop();
							};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if ((elemLang = documentIsHTML ?
									elem.lang :
									elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function (elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function (elem) {
						return elem === docElem;
					},

					"focus": function (elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": function (elem) {
						return elem.disabled === false;
					},

					"disabled": function (elem) {
						return elem.disabled === true;
					},

					"checked": function (elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
					},

					"selected": function (elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function (elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function (elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function (elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function (elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function (elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" &&
							elem.type === "text" &&

							// Support: IE<8
							// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
							((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() { }
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched, match, tokens, type,
					soFar, groups, preFilters,
					cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push((tokens = []));
					}

					matched = false;

					// Combinators
					if ((match = rcombinators.exec(soFar))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
							(match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ?
					soFar.length :
					soFar ?
						Sizzle.error(selector) :
						// Cache the tokens
						tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
					len = tokens.length,
					selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
					checkNonElements = base && dir === "parentNode",
					doneName = done++;

				return combinator.first ?
					// Check against closest ancestor/preceding element
					function (elem, context, xml) {
						while ((elem = elem[dir])) {
							if (elem.nodeType === 1 || checkNonElements) {
								return matcher(elem, context, xml);
							}
						}
					} :

					// Check against all ancestor/preceding elements
					function (elem, context, xml) {
						var oldCache, uniqueCache, outerCache,
							newCache = [dirruns, doneName];

						// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
						if (xml) {
							while ((elem = elem[dir])) {
								if (elem.nodeType === 1 || checkNonElements) {
									if (matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						} else {
							while ((elem = elem[dir])) {
								if (elem.nodeType === 1 || checkNonElements) {
									outerCache = elem[expando] || (elem[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

									if ((oldCache = uniqueCache[dir]) &&
										oldCache[0] === dirruns && oldCache[1] === doneName) {

										// Assign to newCache so results back-propagate to previous elements
										return (newCache[2] = oldCache[2]);
									} else {
										// Reuse newcache so results back-propagate to previous elements
										uniqueCache[dir] = newCache;

										// A match means we're done; a fail means we have to keep checking
										if ((newCache[2] = matcher(elem, context, xml))) {
											return true;
										}
									}
								}
							}
						}
					};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ?
					function (elem, context, xml) {
						var i = matchers.length;
						while (i--) {
							if (!matchers[i](elem, context, xml)) {
								return false;
							}
						}
						return true;
					} :
					matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
					len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
					newUnmatched = [],
					i = 0,
					len = unmatched.length,
					mapped = map != null;

				for (; i < len; i++) {
					if ((elem = unmatched[i])) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp, i, elem,
						preMap = [],
						postMap = [],
						preexisting = results.length,

						// Get initial elements from seed or context
						elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

						// Prefilter to get matcher input, preserving a map for seed-results synchronization
						matcherIn = preFilter && (seed || !selector) ?
							condense(elems, preMap, preFilter, context, xml) :
							elems,

						matcherOut = matcher ?
							// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
							postFinder || (seed ? preFilter : preexisting || postFilter) ?

								// ...intermediate processing is necessary
								[] :

								// ...otherwise use results directly
								results :
							matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if ((elem = temp[i])) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if ((elem = matcherOut[i])) {
										// Restore matcherIn since elem is not yet a final match
										temp.push((matcherIn[i] = elem));
									}
								}
								postFinder(null, (matcherOut = []), temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) &&
									(temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(
							matcherOut === results ?
								matcherOut.splice(preexisting, matcherOut.length) :
								matcherOut
						);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext, matcher, j,
					len = tokens.length,
					leadingRelative = Expr.relative[tokens[0].type],
					implicitRelative = leadingRelative || Expr.relative[" "],
					i = leadingRelative ? 1 : 0,

					// The foundational matcher ensures that elements are reachable from top-level context(s)
					matchContext = addCombinator(function (elem) {
						return elem === checkContext;
					}, implicitRelative, true),
					matchAnyContext = addCombinator(function (elem) {
						return indexOf(checkContext, elem) > -1;
					}, implicitRelative, true),
					matchers = [function (elem, context, xml) {
						var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
							(checkContext = context).nodeType ?
								matchContext(elem, context, xml) :
								matchAnyContext(elem, context, xml));
						// Avoid hanging onto element (issue #299)
						checkContext = null;
						return ret;
					}];

				for (; i < len; i++) {
					if ((matcher = Expr.relative[tokens[i].type])) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(
								i > 1 && elementMatcher(matchers),
								i > 1 && toSelector(
									// If the preceding token was a descendant combinator, insert an implicit any-element `*`
									tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
								).replace(rtrim, "$1"),
								matcher,
								i < j && matcherFromTokens(tokens.slice(i, j)),
								j < len && matcherFromTokens((tokens = tokens.slice(j))),
								j < len && toSelector(tokens)
							);
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
					byElement = elementMatchers.length > 0,
					superMatcher = function (seed, context, xml, results, outermost) {
						var elem, j, matcher,
							matchedCount = 0,
							i = "0",
							unmatched = seed && [],
							setMatched = [],
							contextBackup = outermostContext,
							// We must always have either seed elements or outermost context
							elems = seed || byElement && Expr.find["TAG"]("*", outermost),
							// Use integer dirruns iff this is the outermost matcher
							dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
							len = elems.length;

						if (outermost) {
							outermostContext = context === document || context || outermost;
						}

						// Add elements passing elementMatchers directly to results
						// Support: IE<9, Safari
						// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
						for (; i !== len && (elem = elems[i]) != null; i++) {
							if (byElement && elem) {
								j = 0;
								if (!context && elem.ownerDocument !== document) {
									setDocument(elem);
									xml = !documentIsHTML;
								}
								while ((matcher = elementMatchers[j++])) {
									if (matcher(elem, context || document, xml)) {
										results.push(elem);
										break;
									}
								}
								if (outermost) {
									dirruns = dirrunsUnique;
								}
							}

							// Track unmatched elements for set filters
							if (bySet) {
								// They will have gone through all possible matchers
								if ((elem = !matcher && elem)) {
									matchedCount--;
								}

								// Lengthen the array for every element, matched or not
								if (seed) {
									unmatched.push(elem);
								}
							}
						}

						// `i` is now the count of elements visited above, and adding it to `matchedCount`
						// makes the latter nonnegative.
						matchedCount += i;

						// Apply set filters to unmatched elements
						// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
						// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
						// no element matchers and no seed.
						// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
						// case, which will result in a "00" `matchedCount` that differs from `i` but is also
						// numerically zero.
						if (bySet && i !== matchedCount) {
							j = 0;
							while ((matcher = setMatchers[j++])) {
								matcher(unmatched, setMatched, context, xml);
							}

							if (seed) {
								// Reintegrate element matches to eliminate the need for sorting
								if (matchedCount > 0) {
									while (i--) {
										if (!(unmatched[i] || setMatched[i])) {
											setMatched[i] = pop.call(results);
										}
									}
								}

								// Discard index placeholder values to get only actual matches
								setMatched = condense(setMatched);
							}

							// Add matches to results
							push.apply(results, setMatched);

							// Seedless set matches succeeding multiple successful matchers stipulate sorting
							if (outermost && !seed && setMatched.length > 0 &&
								(matchedCount + setMatchers.length) > 1) {

								Sizzle.uniqueSort(results);
							}
						}

						// Override manipulation of globals by nested matchers
						if (outermost) {
							dirruns = dirrunsUnique;
							outermostContext = contextBackup;
						}

						return unmatched;
					};

				return bySet ?
					markFunction(superMatcher) :
					superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
					setMatchers = [],
					elementMatchers = [],
					cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
			 * A low-level selection function that works with Sizzle's compiled
			 *  selector functions
			 * @param {String|Function} selector A selector or a pre-compiled
			 *  selector function built with Sizzle.compile
			 * @param {Element} context
			 * @param {Array} [results]
			 * @param {Array} [seed] A set of elements to match against
			 */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i, tokens, token, type, find,
					compiled = typeof selector === "function" && selector,
					match = !seed && tokenize((selector = compiled.selector || selector));

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[(type = token.type)]) {
							break;
						}
						if ((find = Expr.find[type])) {
							// Search, expanding context for leading sibling combinators
							if ((seed = find(
								token.matches[0].replace(runescape, funescape),
								rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
							))) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(
					seed,
					context,
					!documentIsHTML,
					results,
					!context || rsibling.test(selector) && testContext(context.parentNode) || context
				);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() :
							(val = elem.getAttributeNode(name)) && val.specified ?
								val.value :
								null;
					}
				});
			}

			return Sizzle;

		})(window);



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function (elem, dir, until) {
		var matched = [],
			truncate = until !== undefined;

		while ((elem = elem[dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};


	var siblings = function (n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});

		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return (elem === qualifier) !== not;
			});

		}

		if (typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return (jQuery.inArray(elem, qualifier) > -1) !== not;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
			jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ?
					jQuery(selector) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" &&
					selector.charAt(selector.length - 1) === ">" &&
					selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];

				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return typeof root.ready !== "undefined" ?
					root.ready(selector) :

					// Execute immediately if ready is not present
					selector(jQuery);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend({
		has: function (target) {
			var i,
				targets = jQuery(target, this),
				len = targets.length;

			return this.filter(function () {
				for (i = 0; i < len; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function (selectors, context) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
					jQuery(selectors, context || this.context) :
					0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors))) {

						matched.push(cur);
						break;
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if (typeof elem === "string") {
				return jQuery.inArray(this[0], jQuery(elem));
			}

			// Locate the position of the desired element
			return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this);
		},

		add: function (selector, context) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge(this.get(), jQuery(selector, context))
				)
			);
		},

		addBack: function (selector) {
			return this.add(selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling(cur, dir) {
		do {
			cur = cur[dir];
		} while (cur && cur.nodeType !== 1);

		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return siblings(elem.firstChild);
		},
		contents: function (elem) {
			return jQuery.nodeName(elem, "iframe") ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var ret = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				ret = jQuery.filter(selector, ret);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					ret = jQuery.uniqueSort(ret);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					ret = ret.reverse();
				}
			}

			return this.pushStack(ret);
		};
	});
	var rnotwhite = (/\S+/g);



	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions(options) :
			jQuery.extend({}, options);

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function () {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false &&
							options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function () {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function () {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function (fn) {
					return fn ?
						jQuery.inArray(fn, list) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function () {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function () {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function () {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function () {
					locked = true;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				locked: function () {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function (context, args) {
					if (!locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function () {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function (func) {
			var tuples = [

				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
				["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
				["notify", "progress", jQuery.Callbacks("memory")]
			],
				state = "pending",
				promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function ( /* fnDone, fnFail, fnProgress */) {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise()
											.progress(newDefer.notify)
											.done(newDefer.resolve)
											.fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](
											this === promise ? newDefer.promise() : this,
											fn ? [returned] : arguments
										);
									}
								});
							});
							fns = null;
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
					stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = [ resolved | rejected ]
						state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (subordinate /* , ..., subordinateN */) {
			var i = 0,
				resolveValues = slice.call(arguments),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					(subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function (i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);

						} else if (!(--remaining)) {
							deferred.resolveWith(contexts, values);
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise()
							.progress(updateFunc(i, progressContexts, progressValues))
							.done(updateFunc(i, resolveContexts, resolveValues))
							.fail(deferred.reject);
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function (fn) {

		// Add the callback
		jQuery.ready.promise().done(fn);

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.triggerHandler) {
				jQuery(document).triggerHandler("ready");
				jQuery(document).off("ready");
			}
		}
	});

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);

		} else {
			document.detachEvent("onreadystatechange", completed);
			window.detachEvent("onload", completed);
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if (document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete") {

			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if (document.readyState === "complete" ||
				(document.readyState !== "loading" && !document.documentElement.doScroll)) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout(jQuery.ready);

				// Standards-based browsers support DOMContentLoaded
			} else if (document.addEventListener) {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed);

				// If IE event model is used
			} else {

				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent("onreadystatechange", completed);

				// A fallback to window.onload, that will always work
				window.attachEvent("onload", completed);

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch (e) { }

				if (top && top.doScroll) {
					(function doScrollCheck() {
						if (!jQuery.isReady) {

							try {

								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch (e) {
								return window.setTimeout(doScrollCheck, 50);
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise(obj);
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for (i in jQuery(support)) {
		break;
	}
	support.ownFirst = i === "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery(function () {

		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName("body")[0];
		if (!body || !body.style) {

			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement("div");
		container = document.createElement("div");
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild(container).appendChild(div);

		if (typeof div.style.zoom !== "undefined") {

			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if (val) {

				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild(container);
	});


	(function () {
		var div = document.createElement("div");

		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch (e) {
			support.deleteExpando = false;
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();
	var acceptData = function (elem) {
		var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
	};




	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr(elem, key, data) {

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {

			var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
							data === "null" ? null :

								// Only convert to a number if it doesn't change the string
								+data + "" === data ? +data :
									rbrace.test(data) ? jQuery.parseJSON(data) :
										data;
				} catch (e) { }

				// Make sure we set the data so it isn't changed later
				jQuery.data(elem, key, data);

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject(obj) {
		var name;
		for (name in obj) {

			// if the public data object is empty, the private is still empty
			if (name === "data" && jQuery.isEmptyObject(obj[name])) {
				continue;
			}
			if (name !== "toJSON") {
				return false;
			}
		}

		return true;
	}

	function internalData(elem, name, data, pvt /* Internal Use Only */) {
		if (!acceptData(elem)) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ((!id || !cache[id] || (!pvt && !cache[id].data)) &&
			data === undefined && typeof name === "string") {
			return;
		}

		if (!id) {

			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if (isNode) {
				id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if (!cache[id]) {

			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[id] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if (typeof name === "object" || typeof name === "function") {
			if (pvt) {
				cache[id] = jQuery.extend(cache[id], name);
			} else {
				cache[id].data = jQuery.extend(cache[id].data, name);
			}
		}

		thisCache = cache[id];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if (!pvt) {
			if (!thisCache.data) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if (data !== undefined) {
			thisCache[jQuery.camelCase(name)] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if (typeof name === "string") {

			// First Try to find as-is property data
			ret = thisCache[name];

			// Test for null|undefined property data
			if (ret == null) {

				// Try to find the camelCased property
				ret = thisCache[jQuery.camelCase(name)];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData(elem, name, pvt) {
		if (!acceptData(elem)) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[jQuery.expando] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if (!cache[id]) {
			return;
		}

		if (name) {

			thisCache = pvt ? cache[id] : cache[id].data;

			if (thisCache) {

				// Support array or space separated string names for data keys
				if (!jQuery.isArray(name)) {

					// try the string as a key before any manipulation
					if (name in thisCache) {
						name = [name];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase(name);
						if (name in thisCache) {
							name = [name];
						} else {
							name = name.split(" ");
						}
					}
				} else {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat(jQuery.map(name, jQuery.camelCase));
				}

				i = name.length;
				while (i--) {
					delete thisCache[name[i]];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if (!pvt) {
			delete cache[id].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if (!isEmptyDataObject(cache[id])) {
				return;
			}
		}

		// Destroy the cache
		if (isNode) {
			jQuery.cleanData([elem], true);

			// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			/* jshint eqeqeq: false */
		} else if (support.deleteExpando || cache != cache.window) {
			/* jshint eqeqeq: true */
			delete cache[id];

			// When all else fails, undefined
		} else {
			cache[id] = undefined;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,

			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function (elem) {
			elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
			return !!elem && !isEmptyDataObject(elem);
		},

		data: function (elem, name, data) {
			return internalData(elem, name, data);
		},

		removeData: function (elem, name) {
			return internalRemoveData(elem, name);
		},

		// For internal use only.
		_data: function (elem, name, data) {
			return internalData(elem, name, data, true);
		},

		_removeData: function (elem, name) {
			return internalRemoveData(elem, name, true);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = jQuery.data(elem);

					if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						jQuery._data(elem, "parsedAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					jQuery.data(this, key);
				});
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each(function () {
					jQuery.data(this, key, value);
				}) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
		},

		removeData: function (key) {
			return this.each(function () {
				jQuery.removeData(this, key);
			});
		}
	});


	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = jQuery._data(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = jQuery._data(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks(elem, type),
				next = function () {
					jQuery.dequeue(elem, type);
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return jQuery._data(elem, key) || jQuery._data(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					jQuery._removeData(elem, type + "queue");
					jQuery._removeData(elem, key);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ?
				this :
				this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function () {
					if (!(--count)) {
						defer.resolveWith(elements, [elements]);
					}
				};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = jQuery._data(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});


	(function () {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function () {
			if (shrinkWrapBlocksVal != null) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {

				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if (typeof div.style.zoom !== "undefined") {

				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild(document.createElement("div")).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild(container);

			return shrinkWrapBlocksVal;
		};

	})();
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHidden = function (elem, el) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" ||
			!jQuery.contains(elem.ownerDocument, elem);
	};



	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function () { return tween.cur(); } :
				function () { return jQuery.css(elem, prop, ""); },
			initial = currentValue(),
			unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
				rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations
			);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ?
				initialInUnit + (valueParts[1] + 1) * valueParts[2] :
				+valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < length; i++) {
					fn(
						elems[i],
						key,
						raw ? value : value.call(elems[i], i, fn(elems[i], key))
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call(elems) :
				length ? fn(elems[0], key) : emptyGet;
	};
	var rcheckableType = (/^(?:checkbox|radio)$/i);

	var rtagName = (/<([\w:-]+)/);

	var rscriptType = (/^$|\/(?:java|ecma)script/i);

	var rleadingWhitespace = (/^\s+/);

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



	function createSafeFragment(document) {
		var list = nodeNames.split("|"),
			safeFrag = document.createDocumentFragment();

		if (safeFrag.createElement) {
			while (list.length) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}


	(function () {
		var div = document.createElement("div"),
			fragment = document.createDocumentFragment(),
			input = document.createElement("input");

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName("tbody").length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName("link").length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild(input);
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild(div);

		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement("input");
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;

		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[jQuery.expando] = 1;
		support.attributes = !div.getAttribute(jQuery.expando);
	})();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],

		// Support: IE8
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};

	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll(context, tag) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName(tag || "*") :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll(tag || "*") :
					undefined;

		if (!found) {
			for (found = [], elems = context.childNodes || context;
				(elem = elems[i]) != null;
				i++
			) {
				if (!tag || jQuery.nodeName(elem, tag)) {
					found.push(elem);
				} else {
					jQuery.merge(found, getAll(elem, tag));
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName(context, tag) ?
			jQuery.merge([context], found) :
			found;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var elem,
			i = 0;
		for (; (elem = elems[i]) != null; i++) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data(refElements[i], "globalEval")
			);
		}
	}


	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;

	function fixDefaultChecked(elem) {
		if (rcheckableType.test(elem.type)) {
			elem.defaultChecked = elem.checked;
		}
	}

	function buildFragment(elems, context, scripts, selection, ignored) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment(context),

			nodes = [],
			i = 0;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;

					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
						nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if (!support.tbody) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test(elem) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test(elem) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while (j--) {
							if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") &&
								!tbody.childNodes.length) {

								elem.removeChild(tbody);
							}
						}
					}

					jQuery.merge(nodes, tmp.childNodes);

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while (tmp.firstChild) {
						tmp.removeChild(tmp.firstChild);
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if (tmp) {
			safe.removeChild(tmp);
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if (!support.appendChecked) {
			jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
		}

		i = 0;
		while ((elem = nodes[i++])) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}

				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(safe.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while ((elem = tmp[j++])) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		tmp = null;

		return safe;
	}


	(function () {
		var i, eventName,
			div = document.createElement("div");

		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for (i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;

			if (!(support[i] = eventName in window)) {

				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute(eventName, "t");
				support[i] = div.attributes[eventName].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) { }
	}

	function on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if (typeof types === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function (event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						(!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
						undefined;
				};

				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if (!special.setup ||
						special.setup.call(elem, data, namespaces, eventHandle) === false) {

						// Bind the global event handler to the element
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);

						} else if (elem.attachEvent) {
							elem.attachEvent("on" + type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData(elem) && jQuery._data(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] &&
					new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) &&
						(!handler || handler.guid === handleObj.guid) &&
						(!tmp || tmp.test(handleObj.namespace)) &&
						(!selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown ||
						special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData(elem, "events");
			}
		},

		trigger: function (event, data, elem, onlyHandlers) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [elem || document],
				type = hasOwn.call(event, "type") ? event.type : event,
				namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ?
				event :
				new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ?
				new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[event] :
				jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = (jQuery._data(cur, "events") || {})[event.type] &&
					jQuery._data(cur, "handle");

				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if (
					(!special._default ||
						special._default.apply(eventPath.pop(), data) === false
					) && acceptData(elem)
				) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && elem[type] && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[type]();
						} catch (e) {

							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function (event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call(arguments),
				handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) &&
					!event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
							handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if (delegateCount && cur.nodeType &&
				(event.type !== "click" || isNaN(event.button) || event.button < 1)) {

				/* jshint eqeqeq: false */
				for (; cur != this; cur = cur.parentNode || this) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ?
									jQuery(sel, this).index(cur) > -1 :
									jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		fix: function (event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook =
					rmouseEvent.test(type) ? this.mouseHooks :
						rkeyEvent.test(type) ? this.keyHooks :
							{};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if (!event.target) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ("button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement").split(" "),
			filter: function (event, original) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
						(doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY +
						(doc && doc.scrollTop || body && body.scrollTop || 0) -
						(doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add relatedTarget, if necessary
				if (!event.relatedTarget && fromElement) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
				}

				return event;
			}
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						try {
							this.focus();
							return false;
						} catch (e) {

							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function (type, elem, event) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);

			jQuery.event.trigger(e, null, elem);

			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		} :
		function (elem, type, handle) {
			var name = "on" + type;

			if (elem.detachEvent) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if (typeof elem[name] === "undefined") {
					elem[name] = null;
				}

				elem.detachEvent(name, handle);
			}
		};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if (!e) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if (e.preventDefault) {
				e.preventDefault();

				// Support: IE
				// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (!e || this.isSimulated) {
				return;
			}

			// If stopPropagation exists, run it on the original event
			if (e.stopPropagation) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || (related !== target && !jQuery.contains(target, related))) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if (!support.submit) {

		jQuery.event.special.submit = {
			setup: function () {

				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add(this, "click._submit keypress._submit", function (e) {

					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ?

							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop(elem, "form") :
							undefined;

					if (form && !jQuery._data(form, "submit")) {
						jQuery.event.add(form, "submit._submit", function (event) {
							event._submitBubble = true;
						});
						jQuery._data(form, "submit", true);
					}
				});

				// return undefined since we don't need an event listener
			},

			postDispatch: function (event) {

				// If form was submitted by the user, bubble the event up the tree
				if (event._submitBubble) {
					delete event._submitBubble;
					if (this.parentNode && !event.isTrigger) {
						jQuery.event.simulate("submit", this.parentNode, event);
					}
				}
			},

			teardown: function () {

				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove(this, "._submit");
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if (!support.change) {

		jQuery.event.special.change = {

			setup: function () {

				if (rformElems.test(this.nodeName)) {

					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if (this.type === "checkbox" || this.type === "radio") {
						jQuery.event.add(this, "propertychange._change", function (event) {
							if (event.originalEvent.propertyName === "checked") {
								this._justChanged = true;
							}
						});
						jQuery.event.add(this, "click._change", function (event) {
							if (this._justChanged && !event.isTrigger) {
								this._justChanged = false;
							}

							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate("change", this, event);
						});
					}
					return false;
				}

				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add(this, "beforeactivate._change", function (e) {
					var elem = e.target;

					if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
						jQuery.event.add(elem, "change._change", function (event) {
							if (this.parentNode && !event.isSimulated && !event.isTrigger) {
								jQuery.event.simulate("change", this.parentNode, event);
							}
						});
						jQuery._data(elem, "change", true);
					}
				});
			},

			handle: function (event) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if (this !== elem || event.isSimulated || event.isTrigger ||
					(elem.type !== "radio" && elem.type !== "checkbox")) {

					return event.handleObj.handler.apply(this, arguments);
				}
			},

			teardown: function () {
				jQuery.event.remove(this, "._change");

				return !rformElems.test(this.nodeName);
			}
		};
	}

	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					jQuery._data(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						jQuery._removeData(doc, fix);
					} else {
						jQuery._data(doc, fix, attaches);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if (typeof types === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});


	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment(document),
		fragmentDiv = safeFragment.appendChild(document.createElement("div"));

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") &&
			jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ?

			elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild(elem.ownerDocument.createElement("tbody")) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);
		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	function cloneCopyEvent(src, dest) {
		if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data(src),
			curData = jQuery._data(dest, oldData),
			events = oldData.events;

		if (events) {
			delete curData.handle;
			curData.events = {};

			for (type in events) {
				for (i = 0, l = events[type].length; i < l; i++) {
					jQuery.event.add(dest, type, events[type][i]);
				}
			}
		}

		// make the cloned public data object a copy from the original
		if (curData.data) {
			curData.data = jQuery.extend({}, curData.data);
		}
	}

	function fixCloneNodeIssues(src, dest) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if (dest.nodeType !== 1) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if (!support.noCloneEvent && dest[jQuery.expando]) {
			data = jQuery._data(dest);

			for (e in data.events) {
				jQuery.removeEvent(dest, e, data.handle);
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute(jQuery.expando);
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if (nodeName === "script" && dest.text !== src.text) {
			disableScript(dest).text = src.text;
			restoreScript(dest);

			// IE6-10 improperly clones children of object elements using classid.
			// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if (nodeName === "object") {
			if (dest.parentNode) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
				dest.innerHTML = src.innerHTML;
			}

		} else if (nodeName === "input" && rcheckableType.test(src.type)) {

			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if (dest.value !== src.value) {
				dest.value = src.value;
			}

			// IE6-8 fails to return the selected option to the default selected
			// state when cloning options
		} else if (nodeName === "option") {
			dest.defaultSelected = dest.selected = src.defaultSelected;

			// IE6-8 fails to set the defaultValue to the correct value when
			// cloning other types of input fields
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction ||
			(l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test(value))) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") &&
							!jQuery._data(node, "globalEval") &&
							jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								jQuery.globalEval(
									(node.text || node.textContent || node.innerHTML || "")
										.replace(rcleanScript, "")
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return collection;
	}

	function remove(elem, selector, keepData) {
		var node,
			elems = selector ? jQuery.filter(selector, elem) : elem,
			i = 0;

		for (; (node = elems[i]) != null; i++) {

			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function (html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains(elem.ownerDocument, elem);

			if (support.html5Clone || jQuery.isXMLDoc(elem) ||
				!rnoshimcache.test("<" + elem.nodeName + ">")) {

				clone = elem.cloneNode(true);

				// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
			}

			if ((!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				// Fix all IE cloning issues
				for (i = 0; (node = srcElements[i]) != null; ++i) {

					// Ensure that the destination node is not null; Fixes #9587
					if (destElements[i]) {
						fixCloneNodeIssues(node, destElements[i]);
					}
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0; (node = srcElements[i]) != null; i++) {
						cloneCopyEvent(node, destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		cleanData: function (elems, /* internal */ forceAcceptData) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;

			for (; (elem = elems[i]) != null; i++) {
				if (forceAcceptData || acceptData(elem)) {

					id = elem[internalKey];
					data = id && cache[id];

					if (data) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if (cache[id]) {

							delete cache[id];

							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if (!attributes && typeof elem.removeAttribute !== "undefined") {
								elem.removeAttribute(internalKey);

								// Webkit & Blink performance suffers when deleting properties
								// from DOM nodes, so set to undefined instead
								// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[internalKey] = undefined;
							}

							deletedIds.push(id);
						}
					}
				}
			}
		}
	});

	jQuery.fn.extend({

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function (selector) {
			return remove(this, selector, true);
		},

		remove: function (selector) {
			return remove(this, selector);
		},

		text: function (value) {
			return access(this, function (value) {
				return value === undefined ?
					jQuery.text(this) :
					this.empty().append(
						(this[0] && this[0].ownerDocument || document).createTextNode(value)
					);
			}, null, value, arguments.length);
		},

		append: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function () {
			var elem,
				i = 0;

			for (; (elem = this[i]) != null; i++) {

				// Remove element nodes and prevent memory leaks
				if (elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem, false));
				}

				// Remove any remaining nodes
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if (elem.options && jQuery.nodeName(elem, "select")) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
					i = 0,
					l = this.length;

				if (value === undefined) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace(rinlinejQuery, "") :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) &&
					(support.htmlSerialize || !rnoshimcache.test(value)) &&
					(support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
					!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {

							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) { }
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery(selector),
				last = insert.length - 1;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay(name, doc) {
		var elem = jQuery(doc.createElement(name)).appendTo(doc.body),

			display = jQuery.css(elem[0], "display");

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay(nodeName) {
		var doc = document,
			display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>"))
					.appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var swap = function (elem, options, callback, args) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	(function () {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement("div"),
			div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		div.style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container = document.createElement("div");
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild(div);

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";

		jQuery.extend(support, {
			reliableHiddenOffsets: function () {
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function () {

				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelMarginRight: function () {

				// Support: Android 4.0-4.3
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},

			pixelPosition: function () {
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function () {

				// Support: Android 2.3
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},

			reliableMarginLeft: function () {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		});

		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;

			// Setup
			documentElement.appendChild(container);

			div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if (window.getComputedStyle) {
				divStyle = window.getComputedStyle(div);
				pixelPositionVal = (divStyle || {}).top !== "1%";
				reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
				boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";

				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild(document.createElement("div"));

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal =
					!parseFloat((window.getComputedStyle(contents) || {}).marginRight);

				div.removeChild(contents);
			}

			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if (reliableHiddenOffsetsVal) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[0].style.borderCollapse = "separate";
				contents = div.getElementsByTagName("td");
				contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				if (reliableHiddenOffsetsVal) {
					contents[0].style.display = "";
					contents[1].style.display = "none";
					reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				}
			}

			// Teardown
			documentElement.removeChild(container);
		}

	})();


	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if (window.getComputedStyle) {
		getStyles = function (elem) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if (!view || !view.opener) {
				view = window;
			}

			return view.getComputedStyle(elem);
		};

		curCSS = function (elem, name, computed) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles(elem);

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			if (computed) {

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if (documentElement.currentStyle) {
		getStyles = function (elem) {
			return elem.currentStyle;
		};

		curCSS = function (elem, name, computed) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles(elem);
			ret = computed ? computed[name] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if (ret == null && style && style[name]) {
				ret = style[name];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if (rnumnonpx.test(ret) && !rposition.test(name)) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if (rsLeft) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if (rsLeft) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function () {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}


	var

		ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,

		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = ["Webkit", "O", "Moz", "ms"],
		emptyStyle = document.createElement("div").style;


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	function showHide(elements, show) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = jQuery._data(elem, "olddisplay");
			display = elem.style.display;
			if (show) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] =
						jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
				}
			} else {
				hidden = isHidden(elem);

				if (display && display !== "none" || !hidden) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css(elem, "display")
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
			value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for (; i < 4; i += 2) {

			// both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// at this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// at this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// at this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles(elem),
			isBorderBox = support.boxSizing &&
				jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				(support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return (val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || (isBorderBox ? "border" : "content"),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {

			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase(name),
				style = elem.style;

			name = jQuery.cssProps[origName] ||
				(jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) ||
					(value = hooks.set(elem, value, extra)) !== undefined) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[name] = value;
					} catch (e) { }
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks &&
					(ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var num, val, hooks,
				origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] ||
				(jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			//convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {

					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test(jQuery.css(elem, "display")) &&
						elem.offsetWidth === 0 ?
						swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) :
						getWidthOrHeight(elem, name, extra);
				}
			},

			set: function (elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
						jQuery.css(elem, "boxSizing", false, styles) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	if (!support.opacity) {
		jQuery.cssHooks.opacity = {
			get: function (elem, computed) {

				// IE uses filters for opacity
				return ropacity.test((computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter) || "") ?
					(0.01 * parseFloat(RegExp.$1)) + "" :
					computed ? "1" : "";
			},

			set: function (elem, value) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ((value >= 1 || value === "") &&
					jQuery.trim(filter.replace(ralpha, "")) === "" &&
					style.removeAttribute) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute("filter");

					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if (value === "" || currentStyle && !currentStyle.filter) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test(filter) ?
					filter.replace(ralpha, opacity) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,
		function (elem, computed) {
			if (computed) {
				return swap(elem, { "display": "inline-block" },
					curCSS, [elem, "marginRight"]);
			}
		}
	);

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
		function (elem, computed) {
			if (computed) {
				return (
					parseFloat(curCSS(elem, "marginLeft")) ||

					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					(jQuery.contains(elem.ownerDocument, elem) ?
						elem.getBoundingClientRect().left -
						swap(elem, { marginLeft: 0 }, function () {
							return elem.getBoundingClientRect().left;
						}) :
						0
					)
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] =
						parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles, len,
					map = {},
					i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style(elem, name, value) :
					jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});


	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ?
				hooks.get(this) :
				Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
				hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 ||
					tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {

				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 &&
					(tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
						jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return (fxNow = jQuery.now());
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
			collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			index = 0,
			length = collection.length;
		for (; index < length; index++) {
			if ((tween = collection[index].call(animation, prop, value))) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden(elem),
			dataShow = jQuery._data(elem, "fxshow");

		// handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css(elem, "display");

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

			if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			if (!support.shrinkWrapBlocks()) {
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
		}

		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

				// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data(elem, "fxshow", {});
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;
				jQuery._removeData(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

			// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
			style.display = display;
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always(function () {

				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end,
						animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,

						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
						jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(
			jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress(animation.opts.progress)
			.done(animation.opts.done, animation.opts.complete)
			.fail(animation.opts.fail)
			.always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnotwhite);
			}

			var prop,
				index = 0,
				length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function (callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
				optall = jQuery.speed(speed, easing, callback),
				doAnimation = function () {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each(doAnimation) :
				this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this &&
						(type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
					data = jQuery._data(this),
					queue = data[type + "queue"],
					hooks = data[type + "queueHooks"],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply(this, arguments) :
				this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		window.clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};


	(function () {
		var a,
			input = document.createElement("input"),
			div = document.createElement("div"),
			select = document.createElement("select"),
			opt = select.appendChild(document.createElement("option"));

		// Setup
		div = document.createElement("div");
		div.setAttribute("className", "t");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[0];

		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "checkbox");
		div.appendChild(input);

		a = div.getElementsByTagName("a")[0];

		// First batch of tests.
		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test(a.getAttribute("style"));

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement("input");
		input.setAttribute("value", "");
		support.input = input.getAttribute("value") === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute("type", "radio");
		support.radioValue = input.value === "t";
	})();


	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend({
		val: function (value) {
			var hooks, ret, isFunction,
				elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] ||
						jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (
						hooks &&
						"get" in hooks &&
						(ret = hooks.get(elem, "value")) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// handle most common string cases
						ret.replace(rreturn, "") :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
				}
			},
			select: {
				get: function (elem) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// oldIE doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							(support.optDisabled ?
								!option.disabled :
								option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled ||
								!jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray(value),
						i = options.length;

					while (i--) {
						option = options[i];

						if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch (_) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function (elem, name, value) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] ||
					(jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks &&
					(ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" &&
						jQuery.nodeName(elem, "input")) {

						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function (elem, value) {
			var name, propName,
				i = 0,
				attrNames = value && value.match(rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while ((name = attrNames[i++])) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {

						// Set corresponding property to false
						if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
							elem[propName] = false;

							// Support: IE<9
							// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[jQuery.camelCase("default-" + name)] =
								elem[propName] = false;
						}

						// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr(elem, name, "");
					}

					elem.removeAttribute(getSetAttribute ? name : propName);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {

				// IE<8 needs the *property* name
				elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

			} else {

				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
			attrHandle[name] = function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ?
						name.toLowerCase() :
						null;
					attrHandle[name] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[name] = function (elem, name, isXML) {
				if (!isXML) {
					return elem[jQuery.camelCase("default-" + name)] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	});

	// fix oldIE attroperties
	if (!getSetInput || !getSetAttribute) {
		jQuery.attrHooks.value = {
			set: function (elem, value, name) {
				if (jQuery.nodeName(elem, "input")) {

					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {

					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set(elem, value, name);
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if (!getSetAttribute) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function (elem, value, name) {

				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode(name);
				if (!ret) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute(name))
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if (name === "value" || value === elem.getAttribute(name)) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function (elem, name, isXML) {
				var ret;
				if (!isXML) {
					return (ret = elem.getAttributeNode(name)) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function (elem, name) {
				var ret = elem.getAttributeNode(name);
				if (ret && ret.specified) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function (elem, value, name) {
				nodeHook.set(elem, value === "" ? false : value, name);
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each(["width", "height"], function (i, name) {
			jQuery.attrHooks[name] = {
				set: function (elem, value) {
					if (value === "") {
						elem.setAttribute(name, "auto");
						return value;
					}
				}
			};
		});
	}

	if (!support.style) {
		jQuery.attrHooks.style = {
			get: function (elem) {

				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function (elem, value) {
				return (elem.style.cssText = value + "");
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			name = jQuery.propFix[name] || name;
			return this.each(function () {

				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[name] = undefined;
					delete this[name];
				} catch (e) { }
			});
		}
	});

	jQuery.extend({
		prop: function (elem, name, value) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks &&
					(ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return (elem[name] = value);
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					return tabindex ?
						parseInt(tabindex, 10) :
						rfocusable.test(elem.nodeName) ||
							rclickable.test(elem.nodeName) && elem.href ?
							0 :
							-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if (!support.hrefNormalized) {

		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each(["href", "src"], function (i, name) {
			jQuery.propHooks[name] = {
				get: function (elem) {
					return elem.getAttribute(name, 4);
				}
			};
		});
	}

	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {
				var parent = elem.parentNode;

				if (parent) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function (elem) {
				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// IE6/7 call enctype encoding
	if (!support.enctype) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	function getClass(elem) {
		return jQuery.attr(elem, "class") || "";
	}

	jQuery.fn.extend({
		addClass: function (value) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnotwhite) || [];

				while ((elem = this[i++])) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 &&
						(" " + curValue + " ").replace(rclass, " ");

					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim(cur);
						if (curValue !== finalValue) {
							jQuery.attr(elem, "class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnotwhite) || [];

				while ((elem = this[i++])) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						(" " + curValue + " ").replace(rclass, " ");

					if (cur) {
						j = 0;
						while ((clazz = classes[j++])) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim(cur);
						if (curValue !== finalValue) {
							jQuery.attr(elem, "class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value;

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(
						value.call(this, i, getClass(this), stateVal),
						stateVal
					);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnotwhite) || [];

					while ((className = classNames[i++])) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// store className if set
						jQuery._data(this, "__className__", className);
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr(this, "class",
						className || value === false ?
							"" :
							jQuery._data(this, "__className__") || ""
					);
				}
			});
		},

		hasClass: function (selector) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ((elem = this[i++])) {
				if (elem.nodeType === 1 &&
					(" " + getClass(elem) + " ").replace(rclass, " ")
						.indexOf(className) > -1
				) {
					return true;
				}
			}

			return false;
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "),
		function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ?
					this.on(name, null, data, fn) :
					this.trigger(name);
			};
		});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});


	var location = window.location;

	var nonce = jQuery.now();

	var rquery = (/\?/);



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function (data) {

		// Attempt to parse using the native JSON parser first
		if (window.JSON && window.JSON.parse) {

			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse(data + "");
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim(data + "");

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

			// Force termination if we see a misplaced comma
			if (requireNonComma && comma) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if (depth === 0) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		})) ?
			(Function("return " + str))() :
			jQuery.error("Invalid JSON: " + data);
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}
		try {
			if (window.DOMParser) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} else { // IE
				xml = new window.ActiveXObject("Microsoft.XMLDOM");
				xml.async = "false";
				xml.loadXML(data);
			}
		} catch (e) {
			xml = undefined;
		}
		if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,

		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),

		// Document location
		ajaxLocation = location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while ((dataType = dataTypes[i++])) {

					// Prepend if requested
					if (dataType.charAt(0) === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
			seekingTransport = (structure === transports);

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses(s, jqXHR, responses) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] ||
									converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) { // jscs:ignore requireDotNotation
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var

				// Cross-domain detection vars
				parts,

				// Loop variable
				i,

				// URL without anti-cache param
				cacheURL,

				// Response headers as string
				responseHeadersString,

				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,

				// Response headers
				responseHeaders,

				// Create the final options object
				s = jQuery.ajaxSetup({}, options),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					(callbackContext.nodeType || callbackContext.jquery) ?
					jQuery(callbackContext) :
					jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function (key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while ((match = rheaders.exec(responseHeadersString))) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function () {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function (name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function (type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function (map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[code] = [statusCode[code], map[code]];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "")
				.replace(rhash, "")
				.replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts &&
					(parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
						(parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
						(ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
				);
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :

						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
					s.accepts[s.dataTypes[0]] +
					(s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
					s.accepts["*"]
			);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend &&
				(s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (state === 2) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);

						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
						[jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (!(--jQuery.active)) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});


	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {

				// The elements to wrap the target around
				var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstChild && elem.firstChild.nodeType === 1) {
						elem = elem.firstChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
					contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);

				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function () {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});


	function getDisplay(elem) {
		return elem.style && elem.style.display || jQuery.css(elem, "display");
	}

	function filterHidden(elem) {

		// Disconnected elements are considered hidden
		if (!jQuery.contains(elem.ownerDocument || document, elem)) {
			return true;
		}
		while (elem && elem.nodeType === 1) {
			if (getDisplay(elem) === "none" || elem.type === "hidden") {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}

	jQuery.expr.filters.hidden = function (elem) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			(elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length) :
			filterHidden(elem);
	};

	jQuery.expr.filters.visible = function (elem) {
		return !jQuery.expr.filters.hidden(elem);
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
						v,
						traditional,
						add
					);
				}
			});

		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}

		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
			s = [],
			add = function (key, value) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			})
				.filter(function () {
					var type = this.type;

					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") &&
						rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
						(this.checked || !rcheckableType.test(type));
				})
				.map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ?
						null :
						jQuery.isArray(val) ?
							jQuery.map(val, function (val) {
								return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
							}) :
							{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
		}
	});


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function () {

			// XHR cannot access local files, always use ActiveX for that case
			if (this.isLocal) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if (document.documentMode > 8) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test(this.type) &&
				createStandardXHR() || createActiveXHR();
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if (window.attachEvent) {
		window.attachEvent("onunload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key](undefined, true);
			}
		});
	}

	// Determine support properties
	support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if (xhrSupported) {

		jQuery.ajaxTransport(function (options) {

			// Cross domain only allowed if supported through XMLHttpRequest
			if (!options.crossDomain || support.cors) {

				var callback;

				return {
					send: function (headers, complete) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {

							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if (headers[i] !== undefined) {
								xhr.setRequestHeader(i, headers[i] + "");
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send((options.hasContent && options.data) || null);

						// Listener
						callback = function (_, isAbort) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if (callback && (isAbort || xhr.readyState === 4)) {

								// Clean up
								delete xhrCallbacks[id];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if (isAbort) {
									if (xhr.readyState !== 4) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if (typeof xhr.responseText === "string") {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch (e) {

										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if (!status && options.isLocal && !options.crossDomain) {
										status = responses.text ? 200 : 404;

										// IE - #1450: sometimes returns 1223 when it should be 204
									} else if (status === 1223) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if (responses) {
								complete(status, statusText, responses, xhr.getAllResponseHeaders());
							}
						};

						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if (!options.async) {

							// If we're in sync mode we fire the callback
							callback();
						} else if (xhr.readyState === 4) {

							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout(callback);
						} else {

							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[id] = callback;
						}
					},

					abort: function () {
						if (callback) {
							callback(undefined, true);
						}
					}
				};
			}
		});
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch (e) { }
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) { }
	}




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {

			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function (_, callback) {

					script = document.createElement("script");

					script.async = true;

					if (s.scriptCharset) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function (_, isAbort) {

						if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if (script.parentNode) {
								script.parentNode.removeChild(script);
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if (!isAbort) {
								callback(200, "success");
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore(script, head.firstChild);
				},

				abort: function () {
					if (script) {
						script.onload(undefined, true);
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
				"url" :
				typeof s.data === "string" &&
				(s.contentType || "")
					.indexOf("application/x-www-form-urlencoded") === 0 &&
				rjsonp.test(s.data) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec(data),
			scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if (off > -1) {
			selector = jQuery.trim(url.slice(off, url.length));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each([
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});




	jQuery.expr.filters.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};





	/**
	 * Gets a window from an element
	 */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css(elem, "position"),
				curElem = jQuery(elem),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") &&
				jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = (options.top - curOffset.top) + curTop;
			}
			if (options.left != null) {
				props.left = (options.left - curOffset.left) + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function (options) {
			if (arguments.length) {
				return options === undefined ?
					this :
					this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[0],
				doc = elem && elem.ownerDocument;

			if (!doc) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if (typeof elem.getBoundingClientRect !== "undefined") {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
				left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
			};
		},

		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[0];

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && (!jQuery.nodeName(offsetParent, "html") &&
					jQuery.css(offsetParent, "position") === "static")) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = /Y/.test(prop);

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? (prop in win) ? win[prop] :
						win.document.documentElement[method] :
						elem[method];
				}

				if (win) {
					win.scrollTo(
						!top ? val : jQuery(win).scrollLeft(),
						top ? val : jQuery(win).scrollTop()
					);

				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
			function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ?
						jQuery(elem).position()[prop] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name },
			function (defaultExtra, funcName) {

				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
						extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {

							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only,
							// but there is currently no good, small way to fix it.
							return Math.max(
								elem.body["scroll" + name], doc["scroll" + name],
								elem.body["offset" + name], doc["offset" + name],
								doc["client" + name]
							);
						}

						return value === undefined ?

							// Get width or height on the element, requesting but not forcing parseFloat
							jQuery.css(elem, type, extra) :

							// Set width or height on the element
							jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
	});


	jQuery.fn.extend({

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off(selector, "**") :
				this.off(types, selector || "**", fn);
		}
	});

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (typeof define === "function" && define.amd) {
		define("jquery", [], function () {
			return jQuery;
		});
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
}));


!function (a) { var b = /iPhone/i, c = /iPod/i, d = /iPad/i, e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i, g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, i = /Windows Phone/i, j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, k = /BlackBerry/i, l = /BB10/i, m = /Opera Mini/i, n = /(CriOS|Chrome)(?=.*\bMobile\b)/i, o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), q = function (a, b) { return a.test(b) }, r = function (a) { var r = a || navigator.userAgent, s = r.split("[FBAN"); if ("undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"), "undefined" != typeof s[1] && (r = s[0]), this.apple = { phone: q(b, r), ipod: q(c, r), tablet: !q(b, r) && q(d, r), device: q(b, r) || q(c, r) || q(d, r) }, this.amazon = { phone: q(g, r), tablet: !q(g, r) && q(h, r), device: q(g, r) || q(h, r) }, this.android = { phone: q(g, r) || q(e, r), tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)), device: q(g, r) || q(h, r) || q(e, r) || q(f, r) }, this.windows = { phone: q(i, r), tablet: q(j, r), device: q(i, r) || q(j, r) }, this.other = { blackberry: q(k, r), blackberry10: q(l, r), opera: q(m, r), firefox: q(o, r), chrome: q(n, r), device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r) }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this }, s = function () { var a = new r; return a.Class = r, a }; "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = r : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = s() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s() }(this);

/*!
 * jQuery Form Plugin
 * version: 4.2.1
 * Requires jQuery v1.7.2 or later
 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup
 * Project repository: https://github.com/jquery-form/form
 * Dual licensed under the MIT and LGPLv3 licenses.
 * https://github.com/jquery-form/form#license
 */
/* global ActiveXObject */

/* eslint-disable */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = function (root, jQuery) {
			if (typeof jQuery === 'undefined') {
				// require('jQuery') returns a factory that requires window to build a jQuery instance, we normalize how we use modules
				// that require this pattern but the window provided is a noop if it's defined (how jquery works)
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				}
				else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		// Browser globals
		factory(jQuery);
	}

}(function ($) {
	/* eslint-enable */
	'use strict';

	/*
		Usage Note:
		-----------
		Do not use both ajaxSubmit and ajaxForm on the same form. These
		functions are mutually exclusive. Use ajaxSubmit if you want
		to bind your own submit handler to the form. For example,
		$(document).ready(function() {
			$('#myForm').on('submit', function(e) {
				e.preventDefault(); // <-- important
				$(this).ajaxSubmit({
					target: '#output'
				});
			});
		});
		Use ajaxForm when you want the plugin to manage all the event binding
		for you. For example,
		$(document).ready(function() {
			$('#myForm').ajaxForm({
				target: '#output'
			});
		});
		You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
		form does not have to exist when you invoke ajaxForm:
		$('#myForm').ajaxForm({
			delegation: true,
			target: '#output'
		});
		When using ajaxForm, the ajaxSubmit function will be invoked for you
		at the appropriate time.
	*/

	var rCRLF = /\r?\n/g;

	/**
	 * Feature detection
	 */
	var feature = {};

	feature.fileapi = $('<input type="file">').get(0).files !== undefined;
	feature.formdata = (typeof window.FormData !== 'undefined');

	var hasProp = !!$.fn.prop;

	// attr2 uses prop when it can but checks the return type for
	// an expected string. This accounts for the case where a form
	// contains inputs with names like "action" or "method"; in those
	// cases "prop" returns the element
	$.fn.attr2 = function () {
		if (!hasProp) {
			return this.attr.apply(this, arguments);
		}

		var val = this.prop.apply(this, arguments);

		if ((val && val.jquery) || typeof val === 'string') {
			return val;
		}

		return this.attr.apply(this, arguments);
	};

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 *
	 * @param	{object|string}	options		jquery.form.js parameters or custom url for submission
	 * @param	{object}		data		extraData
	 * @param	{string}		dataType	ajax dataType
	 * @param	{function}		onSuccess	ajax success callback function
	 */
	$.fn.ajaxSubmit = function (options, data, dataType, onSuccess) {
		// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
		if (!this.length) {
			log('ajaxSubmit: skipping submit process - no element selected');

			return this;
		}

		/* eslint consistent-this: ["error", "$form"] */
		var method, action, url, $form = this;

		if (typeof options === 'function') {
			options = { success: options };

		} else if (typeof options === 'string' || (options === false && arguments.length > 0)) {
			options = {
				'url': options,
				'data': data,
				'dataType': dataType
			};

			if (typeof onSuccess === 'function') {
				options.success = onSuccess;
			}

		} else if (typeof options === 'undefined') {
			options = {};
		}

		method = options.method || options.type || this.attr2('method');
		action = options.url || this.attr2('action');

		url = (typeof action === 'string') ? $.trim(action) : '';
		url = url || window.location.href || '';
		if (url) {
			// clean url (don't include hash vaue)
			url = (url.match(/^([^#]+)/) || [])[1];
		}

		options = $.extend(true, {
			url: url,
			success: $.ajaxSettings.success,
			type: method || $.ajaxSettings.type,
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'		// eslint-disable-line no-script-url
		}, options);

		// hook for manipulating the form data before it is extracted;
		// convenient for use with rich editors like tinyMCE or FCKEditor
		var veto = {};

		this.trigger('form-pre-serialize', [this, options, veto]);

		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');

			return this;
		}

		// provide opportunity to alter form data before it is serialized
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSerialize callback');

			return this;
		}

		var traditional = options.traditional;

		if (typeof traditional === 'undefined') {
			traditional = $.ajaxSettings.traditional;
		}

		var elements = [];
		var qx, a = this.formToArray(options.semantic, elements, options.filtering);

		if (options.data) {
			var optionsData = $.isFunction(options.data) ? options.data(a) : options.data;

			options.extraData = optionsData;
			qx = $.param(optionsData, traditional);
		}

		// give pre-submit callback an opportunity to abort the submit
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSubmit callback');

			return this;
		}

		// fire vetoable 'validate' event
		this.trigger('form-submit-validate', [a, this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-submit-validate trigger');

			return this;
		}

		var q = $.param(a, traditional);

		if (qx) {
			q = (q ? (q + '&' + qx) : qx);
		}

		if (options.type.toUpperCase() === 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null;	// data is null for 'get'
		} else {
			options.data = q;		// data is the query string for 'post'
		}

		var callbacks = [];

		if (options.resetForm) {
			callbacks.push(function () {
				$form.resetForm();
			});
		}

		if (options.clearForm) {
			callbacks.push(function () {
				$form.clearForm(options.includeHidden);
			});
		}

		// perform a load on the target only if dataType is not provided
		if (!options.dataType && options.target) {
			var oldSuccess = options.success || function () { };

			callbacks.push(function (data, textStatus, jqXHR) {
				var successArguments = arguments,
					fn = options.replaceTarget ? 'replaceWith' : 'html';

				$(options.target)[fn](data).each(function () {
					oldSuccess.apply(this, successArguments);
				});
			});

		} else if (options.success) {
			if ($.isArray(options.success)) {
				$.merge(callbacks, options.success);
			} else {
				callbacks.push(options.success);
			}
		}

		options.success = function (data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
			var context = options.context || this;		// jQuery 1.4+ supports scope context

			for (var i = 0, max = callbacks.length; i < max; i++) {
				callbacks[i].apply(context, [data, status, xhr || $form, $form]);
			}
		};

		if (options.error) {
			var oldError = options.error;

			options.error = function (xhr, status, error) {
				var context = options.context || this;

				oldError.apply(context, [xhr, status, error, $form]);
			};
		}

		if (options.complete) {
			var oldComplete = options.complete;

			options.complete = function (xhr, status) {
				var context = options.context || this;

				oldComplete.apply(context, [xhr, status, $form]);
			};
		}

		// are there files to upload?

		// [value] (issue #113), also see comment:
		// https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
		var fileInputs = $('input[type=file]:enabled', this).filter(function () {
			return $(this).val() !== '';
		});
		var hasFileInputs = fileInputs.length > 0;
		var mp = 'multipart/form-data';
		var multipart = ($form.attr('enctype') === mp || $form.attr('encoding') === mp);
		var fileAPI = feature.fileapi && feature.formdata;

		log('fileAPI :' + fileAPI);

		var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
		var jqxhr;

		// options.iframe allows user to force iframe mode
		// 06-NOV-09: now defaulting to iframe mode if file input is detected
		if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
			// hack to fix Safari hang (thanks to Tim Molendijk for this)
			// see: http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
			if (options.closeKeepAlive) {
				$.get(options.closeKeepAlive, function () {
					jqxhr = fileUploadIframe(a);
				});

			} else {
				jqxhr = fileUploadIframe(a);
			}

		} else if ((hasFileInputs || multipart) && fileAPI) {
			jqxhr = fileUploadXhr(a);

		} else {
			jqxhr = $.ajax(options);
		}

		$form.removeData('jqxhr').data('jqxhr', jqxhr);

		// clear element array
		for (var k = 0; k < elements.length; k++) {
			elements[k] = null;
		}

		// fire 'notify' event
		this.trigger('form-submit-notify', [this, options]);

		return this;

		// utility fn for deep serialization
		function deepSerialize(extraData) {
			var serialized = $.param(extraData, options.traditional).split('&');
			var len = serialized.length;
			var result = [];
			var i, part;

			for (i = 0; i < len; i++) {
				// #252; undo param space replacement
				serialized[i] = serialized[i].replace(/\+/g, ' ');
				part = serialized[i].split('=');
				// #278; use array instead of object storage, favoring array serializations
				result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
			}

			return result;
		}

		// XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
		function fileUploadXhr(a) {
			var formdata = new FormData();

			for (var i = 0; i < a.length; i++) {
				formdata.append(a[i].name, a[i].value);
			}

			if (options.extraData) {
				var serializedData = deepSerialize(options.extraData);

				for (i = 0; i < serializedData.length; i++) {
					if (serializedData[i]) {
						formdata.append(serializedData[i][0], serializedData[i][1]);
					}
				}
			}

			options.data = null;

			var s = $.extend(true, {}, $.ajaxSettings, options, {
				contentType: false,
				processData: false,
				cache: false,
				type: method || 'POST'
			});

			if (options.uploadProgress) {
				// workaround because jqXHR does not expose upload property
				s.xhr = function () {
					var xhr = $.ajaxSettings.xhr();

					if (xhr.upload) {
						xhr.upload.addEventListener('progress', function (event) {
							var percent = 0;
							var position = event.loaded || event.position;			/* event.position is deprecated */
							var total = event.total;

							if (event.lengthComputable) {
								percent = Math.ceil(position / total * 100);
							}

							options.uploadProgress(event, position, total, percent);
						}, false);
					}

					return xhr;
				};
			}

			s.data = null;

			var beforeSend = s.beforeSend;

			s.beforeSend = function (xhr, o) {
				// Send FormData() provided by user
				if (options.formData) {
					o.data = options.formData;
				} else {
					o.data = formdata;
				}

				if (beforeSend) {
					beforeSend.call(this, xhr, o);
				}
			};

			return $.ajax(s);
		}

		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUploadIframe(a) {
			var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
			var deferred = $.Deferred();

			// #341
			deferred.abort = function (status) {
				xhr.abort(status);
			};

			if (a) {
				// ensure that every serialized input is still enabled
				for (i = 0; i < elements.length; i++) {
					el = $(elements[i]);
					if (hasProp) {
						el.prop('disabled', false);
					} else {
						el.removeAttr('disabled');
					}
				}
			}

			s = $.extend(true, {}, $.ajaxSettings, options);
			s.context = s.context || s;
			id = 'jqFormIO' + new Date().getTime();
			var ownerDocument = form.ownerDocument;
			var $body = $form.closest('body');

			if (s.iframeTarget) {
				$io = $(s.iframeTarget, ownerDocument);
				n = $io.attr2('name');
				if (!n) {
					$io.attr2('name', id);
				} else {
					id = n;
				}

			} else {
				$io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />', ownerDocument);
				$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
			}
			io = $io[0];


			xhr = { // mock object
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: 'n/a',
				getAllResponseHeaders: function () { },
				getResponseHeader: function () { },
				setRequestHeader: function () { },
				abort: function (status) {
					var e = (status === 'timeout' ? 'timeout' : 'aborted');

					log('aborting upload... ' + e);
					this.aborted = 1;

					try { // #214, #257
						if (io.contentWindow.document.execCommand) {
							io.contentWindow.document.execCommand('Stop');
						}
					} catch (ignore) { }

					$io.attr('src', s.iframeSrc); // abort op in progress
					xhr.error = e;
					if (s.error) {
						s.error.call(s.context, xhr, e, status);
					}

					if (g) {
						$.event.trigger('ajaxError', [xhr, s, e]);
					}

					if (s.complete) {
						s.complete.call(s.context, xhr, e);
					}
				}
			};

			g = s.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if (g && $.active++ === 0) {
				$.event.trigger('ajaxStart');
			}
			if (g) {
				$.event.trigger('ajaxSend', [xhr, s]);
			}

			if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
				if (s.global) {
					$.active--;
				}
				deferred.reject();

				return deferred;
			}

			if (xhr.aborted) {
				deferred.reject();

				return deferred;
			}

			// add submitting element to data if we know it
			sub = form.clk;
			if (sub) {
				n = sub.name;
				if (n && !sub.disabled) {
					s.extraData = s.extraData || {};
					s.extraData[n] = sub.value;
					if (sub.type === 'image') {
						s.extraData[n + '.x'] = form.clk_x;
						s.extraData[n + '.y'] = form.clk_y;
					}
				}
			}

			var CLIENT_TIMEOUT_ABORT = 1;
			var SERVER_ABORT = 2;

			function getDoc(frame) {
				/* it looks like contentWindow or contentDocument do not
				 * carry the protocol property in ie8, when running under ssl
				 * frame.document is the only valid response document, since
				 * the protocol is know but not on the other two objects. strange?
				 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
				 */

				var doc = null;

				// IE8 cascading access check
				try {
					if (frame.contentWindow) {
						doc = frame.contentWindow.document;
					}
				} catch (err) {
					// IE8 access denied under ssl & missing protocol
					log('cannot get iframe.contentWindow document: ' + err);
				}

				if (doc) { // successful getting content
					return doc;
				}

				try { // simply checking may throw in ie8 under ssl or mismatched protocol
					doc = frame.contentDocument ? frame.contentDocument : frame.document;
				} catch (err) {
					// last attempt
					log('cannot get iframe.contentDocument: ' + err);
					doc = frame.document;
				}

				return doc;
			}

			// Rails CSRF hack (thanks to Yvan Barthelemy)
			var csrf_token = $('meta[name=csrf-token]').attr('content');
			var csrf_param = $('meta[name=csrf-param]').attr('content');

			if (csrf_param && csrf_token) {
				s.extraData = s.extraData || {};
				s.extraData[csrf_param] = csrf_token;
			}

			// take a breath so that pending repaints get some cpu time before the upload starts
			function doSubmit() {
				// make sure form attrs are set
				var t = $form.attr2('target'),
					a = $form.attr2('action'),
					mp = 'multipart/form-data',
					et = $form.attr('enctype') || $form.attr('encoding') || mp;

				// update form attrs in IE friendly way
				form.setAttribute('target', id);
				if (!method || /post/i.test(method)) {
					form.setAttribute('method', 'POST');
				}
				if (a !== s.url) {
					form.setAttribute('action', s.url);
				}

				// ie borks in some cases when setting encoding
				if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
					$form.attr({
						encoding: 'multipart/form-data',
						enctype: 'multipart/form-data'
					});
				}

				// support timout
				if (s.timeout) {
					timeoutHandle = setTimeout(function () {
						timedOut = true; cb(CLIENT_TIMEOUT_ABORT);
					}, s.timeout);
				}

				// look for server aborts
				function checkState() {
					try {
						var state = getDoc(io).readyState;

						log('state = ' + state);
						if (state && state.toLowerCase() === 'uninitialized') {
							setTimeout(checkState, 50);
						}

					} catch (e) {
						log('Server abort: ', e, ' (', e.name, ')');
						cb(SERVER_ABORT);				// eslint-disable-line callback-return
						if (timeoutHandle) {
							clearTimeout(timeoutHandle);
						}
						timeoutHandle = undefined;
					}
				}

				// add "extra" data to form if provided in options
				var extraInputs = [];

				try {
					if (s.extraData) {
						for (var n in s.extraData) {
							if (s.extraData.hasOwnProperty(n)) {
								// if using the $.param format that allows for multiple values with the same name
								if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
									extraInputs.push(
										$('<input type="hidden" name="' + s.extraData[n].name + '">', ownerDocument).val(s.extraData[n].value)
											.appendTo(form)[0]);
								} else {
									extraInputs.push(
										$('<input type="hidden" name="' + n + '">', ownerDocument).val(s.extraData[n])
											.appendTo(form)[0]);
								}
							}
						}
					}

					if (!s.iframeTarget) {
						// add iframe to doc and submit the form
						$io.appendTo($body);
					}

					if (io.attachEvent) {
						io.attachEvent('onload', cb);
					} else {
						io.addEventListener('load', cb, false);
					}

					setTimeout(checkState, 15);

					try {
						form.submit();

					} catch (err) {
						// just in case form has element with name/id of 'submit'
						var submitFn = document.createElement('form').submit;

						submitFn.apply(form);
					}

				} finally {
					// reset attrs and remove "extra" input elements
					form.setAttribute('action', a);
					form.setAttribute('enctype', et); // #380
					if (t) {
						form.setAttribute('target', t);
					} else {
						$form.removeAttr('target');
					}
					$(extraInputs).remove();
				}
			}

			if (s.forceSync) {
				doSubmit();
			} else {
				setTimeout(doSubmit, 10); // this lets dom updates render
			}

			var data, doc, domCheckCount = 50, callbackProcessed;

			function cb(e) {
				if (xhr.aborted || callbackProcessed) {
					return;
				}

				doc = getDoc(io);
				if (!doc) {
					log('cannot access response document');
					e = SERVER_ABORT;
				}
				if (e === CLIENT_TIMEOUT_ABORT && xhr) {
					xhr.abort('timeout');
					deferred.reject(xhr, 'timeout');

					return;

				} else if (e === SERVER_ABORT && xhr) {
					xhr.abort('server abort');
					deferred.reject(xhr, 'error', 'server abort');

					return;
				}

				if (!doc || doc.location.href === s.iframeSrc) {
					// response not received yet
					if (!timedOut) {
						return;
					}
				}

				if (io.detachEvent) {
					io.detachEvent('onload', cb);
				} else {
					io.removeEventListener('load', cb, false);
				}

				var status = 'success', errMsg;

				try {
					if (timedOut) {
						throw 'timeout';
					}

					var isXml = s.dataType === 'xml' || doc.XMLDocument || $.isXMLDoc(doc);

					log('isXml=' + isXml);

					if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
						if (--domCheckCount) {
							// in some browsers (Opera) the iframe DOM is not always traversable when
							// the onload callback fires, so we loop a bit to accommodate
							log('requeing onLoad callback, DOM not available');
							setTimeout(cb, 250);

							return;
						}
						// let this fall through because server response could be an empty document
						// log('Could not access iframe DOM after mutiple tries.');
						// throw 'DOMException: not available';
					}

					// log('response detected');
					var docRoot = doc.body ? doc.body : doc.documentElement;

					xhr.responseText = docRoot ? docRoot.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
					if (isXml) {
						s.dataType = 'xml';
					}
					xhr.getResponseHeader = function (header) {
						var headers = { 'content-type': s.dataType };

						return headers[header.toLowerCase()];
					};
					// support for XHR 'status' & 'statusText' emulation :
					if (docRoot) {
						xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
						xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
					}

					var dt = (s.dataType || '').toLowerCase();
					var scr = /(json|script|text)/.test(dt);

					if (scr || s.textarea) {
						// see if user embedded response in textarea
						var ta = doc.getElementsByTagName('textarea')[0];

						if (ta) {
							xhr.responseText = ta.value;
							// support for XHR 'status' & 'statusText' emulation :
							xhr.status = Number(ta.getAttribute('status')) || xhr.status;
							xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;

						} else if (scr) {
							// account for browsers injecting pre around json response
							var pre = doc.getElementsByTagName('pre')[0];
							var b = doc.getElementsByTagName('body')[0];

							if (pre) {
								xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
							} else if (b) {
								xhr.responseText = b.textContent ? b.textContent : b.innerText;
							}
						}

					} else if (dt === 'xml' && !xhr.responseXML && xhr.responseText) {
						xhr.responseXML = toXml(xhr.responseText);			// eslint-disable-line no-use-before-define
					}

					try {
						data = httpData(xhr, dt, s);						// eslint-disable-line no-use-before-define

					} catch (err) {
						status = 'parsererror';
						xhr.error = errMsg = (err || status);
					}

				} catch (err) {
					log('error caught: ', err);
					status = 'error';
					xhr.error = errMsg = (err || status);
				}

				if (xhr.aborted) {
					log('upload aborted');
					status = null;
				}

				if (xhr.status) { // we've set xhr.status
					status = ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) ? 'success' : 'error';
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if (status === 'success') {
					if (s.success) {
						s.success.call(s.context, data, 'success', xhr);
					}

					deferred.resolve(xhr.responseText, 'success', xhr);

					if (g) {
						$.event.trigger('ajaxSuccess', [xhr, s]);
					}

				} else if (status) {
					if (typeof errMsg === 'undefined') {
						errMsg = xhr.statusText;
					}
					if (s.error) {
						s.error.call(s.context, xhr, status, errMsg);
					}
					deferred.reject(xhr, 'error', errMsg);
					if (g) {
						$.event.trigger('ajaxError', [xhr, s, errMsg]);
					}
				}

				if (g) {
					$.event.trigger('ajaxComplete', [xhr, s]);
				}

				if (g && !--$.active) {
					$.event.trigger('ajaxStop');
				}

				if (s.complete) {
					s.complete.call(s.context, xhr, status);
				}

				callbackProcessed = true;
				if (s.timeout) {
					clearTimeout(timeoutHandle);
				}

				// clean up
				setTimeout(function () {
					if (!s.iframeTarget) {
						$io.remove();
					} else { // adding else to clean up existing iframe response.
						$io.attr('src', s.iframeSrc);
					}
					xhr.responseXML = null;
				}, 100);
			}

			var toXml = $.parseXML || function (s, doc) { // use parseXML if available (jQuery 1.5+)
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);

				} else {
					doc = (new DOMParser()).parseFromString(s, 'text/xml');
				}

				return (doc && doc.documentElement && doc.documentElement.nodeName !== 'parsererror') ? doc : null;
			};
			var parseJSON = $.parseJSON || function (s) {
				/* jslint evil:true */
				return window['eval']('(' + s + ')');			// eslint-disable-line dot-notation
			};

			var httpData = function (xhr, type, s) { // mostly lifted from jq1.4.4

				var ct = xhr.getResponseHeader('content-type') || '',
					xml = ((type === 'xml' || !type) && ct.indexOf('xml') >= 0),
					data = xml ? xhr.responseXML : xhr.responseText;

				if (xml && data.documentElement.nodeName === 'parsererror') {
					if ($.error) {
						$.error('parsererror');
					}
				}
				if (s && s.dataFilter) {
					data = s.dataFilter(data, type);
				}
				if (typeof data === 'string') {
					if ((type === 'json' || !type) && ct.indexOf('json') >= 0) {
						data = parseJSON(data);
					} else if ((type === 'script' || !type) && ct.indexOf('javascript') >= 0) {
						$.globalEval(data);
					}
				}

				return data;
			};

			return deferred;
		}
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image"> elements (if the element
	 *	is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 *	used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit. ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = function (options, data, dataType, onSuccess) {
		if (typeof options === 'string' || (options === false && arguments.length > 0)) {
			options = {
				'url': options,
				'data': data,
				'dataType': dataType
			};

			if (typeof onSuccess === 'function') {
				options.success = onSuccess;
			}
		}

		options = options || {};
		options.delegation = options.delegation && $.isFunction($.fn.on);

		// in jQuery 1.3+ we can fix mistakes with the ready state
		if (!options.delegation && this.length === 0) {
			var o = { s: this.selector, c: this.context };

			if (!$.isReady && o.s) {
				log('DOM not ready, queuing ajaxForm');
				$(function () {
					$(o.s, o.c).ajaxForm(options);
				});

				return this;
			}

			// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));

			return this;
		}

		if (options.delegation) {
			$(document)
				.off('submit.form-plugin', this.selector, doAjaxSubmit)
				.off('click.form-plugin', this.selector, captureSubmittingElement)
				.on('submit.form-plugin', this.selector, options, doAjaxSubmit)
				.on('click.form-plugin', this.selector, options, captureSubmittingElement);

			return this;
		}

		return this.ajaxFormUnbind()
			.on('submit.form-plugin', options, doAjaxSubmit)
			.on('click.form-plugin', options, captureSubmittingElement);
	};

	// private event handlers
	function doAjaxSubmit(e) {
		/* jshint validthis:true */
		var options = e.data;

		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(e.target).closest('form').ajaxSubmit(options); // #365
		}
	}

	function captureSubmittingElement(e) {
		/* jshint validthis:true */
		var target = e.target;
		var $el = $(target);

		if (!$el.is('[type=submit],[type=image]')) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest('[type=submit]');

			if (t.length === 0) {
				return;
			}
			target = t[0];
		}

		var form = target.form;

		form.clk = target;

		if (target.type === 'image') {
			if (typeof e.offsetX !== 'undefined') {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;

			} else if (typeof $.fn.offset === 'function') {
				var offset = $el.offset();

				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;

			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function () {
			form.clk = form.clk_x = form.clk_y = null;
		}, 100);
	}


	// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function () {
		return this.off('submit.form-plugin click.form-plugin');
	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property. An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = function (semantic, elements, filtering) {
		var a = [];

		if (this.length === 0) {
			return a;
		}

		var form = this[0];
		var formId = this.attr('id');
		var els = (semantic || typeof form.elements === 'undefined') ? form.getElementsByTagName('*') : form.elements;
		var els2;

		if (els) {
			els = $.makeArray(els); // convert to standard array
		}

		// #386; account for inputs outside the form which use the 'form' attribute
		// FinesseRus: in non-IE browsers outside fields are already included in form.elements.
		if (formId && (semantic || /(Edge|Trident)\//.test(navigator.userAgent))) {
			els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
			if (els2.length) {
				els = (els || []).concat(els2);
			}
		}

		if (!els || !els.length) {
			return a;
		}

		if ($.isFunction(filtering)) {
			els = $.map(els, filtering);
		}

		var i, j, n, v, el, max, jmax;

		for (i = 0, max = els.length; i < max; i++) {
			el = els[i];
			n = el.name;
			if (!n || el.disabled) {
				continue;
			}

			if (semantic && form.clk && el.type === 'image') {
				// handle image inputs on the fly when semantic == true
				if (form.clk === el) {
					a.push({ name: n, value: $(el).val(), type: el.type });
					a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
				}
				continue;
			}

			v = $.fieldValue(el, true);
			if (v && v.constructor === Array) {
				if (elements) {
					elements.push(el);
				}
				for (j = 0, jmax = v.length; j < jmax; j++) {
					a.push({ name: n, value: v[j] });
				}

			} else if (feature.fileapi && el.type === 'file') {
				if (elements) {
					elements.push(el);
				}

				var files = el.files;

				if (files.length) {
					for (j = 0; j < files.length; j++) {
						a.push({ name: n, value: files[j], type: el.type });
					}
				} else {
					// #180
					a.push({ name: n, value: '', type: el.type });
				}

			} else if (v !== null && typeof v !== 'undefined') {
				if (elements) {
					elements.push(el);
				}
				a.push({ name: n, value: v, type: el.type, required: el.required });
			}
		}

		if (!semantic && form.clk) {
			// input type=='image' are not found in elements array! handle it here
			var $input = $(form.clk), input = $input[0];

			n = input.name;

			if (n && !input.disabled && input.type === 'image') {
				a.push({ name: n, value: $input.val() });
				a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
			}
		}

		return a;
	};

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = function (semantic) {
		// hand off to jQuery.param for proper encoding
		return $.param(this.formToArray(semantic));
	};

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = function (successful) {
		var a = [];

		this.each(function () {
			var n = this.name;

			if (!n) {
				return;
			}

			var v = $.fieldValue(this, successful);

			if (v && v.constructor === Array) {
				for (var i = 0, max = v.length; i < max; i++) {
					a.push({ name: n, value: v[i] });
				}

			} else if (v !== null && typeof v !== 'undefined') {
				a.push({ name: this.name, value: v });
			}
		});

		// hand off to jQuery.param for proper encoding
		return $.param(a);
	};

	/**
	 * Returns the value(s) of the element in the matched set. For example, consider the following form:
	 *
	 *	<form><fieldset>
	 *		<input name="A" type="text">
	 *		<input name="A" type="text">
	 *		<input name="B" type="checkbox" value="B1">
	 *		<input name="B" type="checkbox" value="B2">
	 *		<input name="C" type="radio" value="C1">
	 *		<input name="C" type="radio" value="C2">
	 *	</fieldset></form>
	 *
	 *	var v = $('input[type=text]').fieldValue();
	 *	// if no values are entered into the text inputs
	 *	v === ['','']
	 *	// if values entered into the text inputs are 'foo' and 'bar'
	 *	v === ['foo','bar']
	 *
	 *	var v = $('input[type=checkbox]').fieldValue();
	 *	// if neither checkbox is checked
	 *	v === undefined
	 *	// if both checkboxes are checked
	 *	v === ['B1', 'B2']
	 *
	 *	var v = $('input[type=radio]').fieldValue();
	 *	// if neither radio is checked
	 *	v === undefined
	 *	// if first radio is checked
	 *	v === ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true. If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array. If no valid value can be determined the
	 *	array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = function (successful) {
		for (var val = [], i = 0, max = this.length; i < max; i++) {
			var el = this[i];
			var v = $.fieldValue(el, successful);

			if (v === null || typeof v === 'undefined' || (v.constructor === Array && !v.length)) {
				continue;
			}

			if (v.constructor === Array) {
				$.merge(val, v);
			} else {
				val.push(v);
			}
		}

		return val;
	};

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = function (el, successful) {
		var n = el.name, t = el.type, tag = el.tagName.toLowerCase();

		if (typeof successful === 'undefined') {
			successful = true;
		}

		/* eslint-disable no-mixed-operators */
		if (successful && (!n || el.disabled || t === 'reset' || t === 'button' ||
			(t === 'checkbox' || t === 'radio') && !el.checked ||
			(t === 'submit' || t === 'image') && el.form && el.form.clk !== el ||
			tag === 'select' && el.selectedIndex === -1)) {
			/* eslint-enable no-mixed-operators */
			return null;
		}

		if (tag === 'select') {
			var index = el.selectedIndex;

			if (index < 0) {
				return null;
			}

			var a = [], ops = el.options;
			var one = (t === 'select-one');
			var max = (one ? index + 1 : ops.length);

			for (var i = (one ? index : 0); i < max; i++) {
				var op = ops[i];

				if (op.selected && !op.disabled) {
					var v = op.value;

					if (!v) { // extra pain for IE...
						v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
					}

					if (one) {
						return v;
					}

					a.push(v);
				}
			}

			return a;
		}

		return $(el).val().replace(rCRLF, '\r\n');
	};

	/**
	 * Clears the form data. Takes the following actions on the form's input fields:
	 *  - input text fields will have their 'value' property set to the empty string
	 *  - select elements will have their 'selectedIndex' property set to -1
	 *  - checkbox and radio inputs will have their 'checked' property set to false
	 *  - inputs of type submit, button, reset, and hidden will *not* be effected
	 *  - button elements will *not* be effected
	 */
	$.fn.clearForm = function (includeHidden) {
		return this.each(function () {
			$('input,select,textarea', this).clearFields(includeHidden);
		});
	};

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list

		return this.each(function () {
			var t = this.type, tag = this.tagName.toLowerCase();

			if (re.test(t) || tag === 'textarea') {
				this.value = '';

			} else if (t === 'checkbox' || t === 'radio') {
				this.checked = false;

			} else if (tag === 'select') {
				this.selectedIndex = -1;

			} else if (t === 'file') {
				if (/MSIE/.test(navigator.userAgent)) {
					$(this).replaceWith($(this).clone(true));
				} else {
					$(this).val('');
				}

			} else if (includeHidden) {
				// includeHidden can be the value true, or it can be a selector string
				// indicating a special test; for example:
				// $('#myForm').clearForm('.special:hidden')
				// the above would clean hidden inputs that have the class of 'special'
				if ((includeHidden === true && /hidden/.test(t)) ||
					(typeof includeHidden === 'string' && $(this).is(includeHidden))) {
					this.value = '';
				}
			}
		});
	};


	/**
	 * Resets the form data or individual elements. Takes the following actions
	 * on the selected tags:
	 * - all fields within form elements will be reset to their original value
	 * - input / textarea / select fields will be reset to their original value
	 * - option / optgroup fields (for multi-selects) will defaulted individually
	 * - non-multiple options will find the right select to default
	 * - label elements will be searched against its 'for' attribute
	 * - all others will be searched for appropriate children to default
	 */
	$.fn.resetForm = function () {
		return this.each(function () {
			var el = $(this);
			var tag = this.tagName.toLowerCase();

			switch (tag) {
				case 'input':
					this.checked = this.defaultChecked;
				// fall through

				case 'textarea':
					this.value = this.defaultValue;

					return true;

				case 'option':
				case 'optgroup':
					var select = el.parents('select');

					if (select.length && select[0].multiple) {
						if (tag === 'option') {
							this.selected = this.defaultSelected;
						} else {
							el.find('option').resetForm();
						}
					} else {
						select.resetForm();
					}

					return true;

				case 'select':
					el.find('option').each(function (i) {				// eslint-disable-line consistent-return
						this.selected = this.defaultSelected;
						if (this.defaultSelected && !el[0].multiple) {
							el[0].selectedIndex = i;

							return false;
						}
					});

					return true;

				case 'label':
					var forEl = $(el.attr('for'));
					var list = el.find('input,select,textarea');

					if (forEl[0]) {
						list.unshift(forEl[0]);
					}

					list.resetForm();

					return true;

				case 'form':
					// guard against an input with the name of 'reset'
					// note that IE reports the reset function as an 'object'
					if (typeof this.reset === 'function' || (typeof this.reset === 'object' && !this.reset.nodeType)) {
						this.reset();
					}

					return true;

				default:
					el.find('form,input,label,select,textarea').resetForm();

					return true;
			}
		});
	};

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = function (b) {
		if (typeof b === 'undefined') {
			b = true;
		}

		return this.each(function () {
			this.disabled = !b;
		});
	};

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = function (select) {
		if (typeof select === 'undefined') {
			select = true;
		}

		return this.each(function () {
			var t = this.type;

			if (t === 'checkbox' || t === 'radio') {
				this.checked = select;

			} else if (this.tagName.toLowerCase() === 'option') {
				var $sel = $(this).parent('select');

				if (select && $sel[0] && $sel[0].type === 'select-one') {
					// deselect all other options
					$sel.find('option').selected(false);
				}

				this.selected = select;
			}
		});
	};

	// expose debug var
	$.fn.ajaxSubmit.debug = false;

	// helper fn for console logging
	function log() {
		if (!$.fn.ajaxSubmit.debug) {
			return;
		}

		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');

		if (window.console && window.console.log) {
			window.console.log(msg);

		} else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
}));


/*!
 * Scroll Lock v3.1.3
 * https://github.com/MohammadYounes/jquery-scrollLock
 *
 * Copyright (c) 2017 Mohammad Younes
 * Licensed under GPL 3.
 */
(function (n) { typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery) })(function (n) { "use strict"; var i = { space: 32, pageup: 33, pagedown: 34, end: 35, home: 36, up: 38, down: 40 }, r = function (t, i) { var u = i.scrollTop(), h = i.prop("scrollHeight"), c = i.prop("clientHeight"), f = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail || -1 * t.originalEvent.deltaY, r = 0, e, o, s; return t.type === "wheel" ? (e = i.height() / n(window).height(), r = t.originalEvent.deltaY * e) : this.options.touch && t.type === "touchmove" && (f = t.originalEvent.changedTouches[0].clientY - this.startClientY), s = (o = f > 0 && u + r <= 0) || f < 0 && u + r >= h - c, { prevent: s, top: o, scrollTop: u, deltaY: r } }, u = function (n, t) { var u = t.scrollTop(), r = { top: !1, bottom: !1 }, f, e; return r.top = u === 0 && (n.keyCode === i.pageup || n.keyCode === i.home || n.keyCode === i.up), r.top || (f = t.prop("scrollHeight"), e = t.prop("clientHeight"), r.bottom = f === u + e && (n.keyCode === i.space || n.keyCode === i.pagedown || n.keyCode === i.end || n.keyCode === i.down)), r }, t = function (i, r) { if (this.$element = i, this.options = n.extend({}, t.DEFAULTS, this.$element.data(), r), this.enabled = !0, this.startClientY = 0, this.options.unblock) this.$element.on(t.CORE.wheelEventName + t.NAMESPACE, this.options.unblock, n.proxy(t.CORE.unblockHandler, this)); this.$element.on(t.CORE.wheelEventName + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.handler, this)); if (this.options.touch) { this.$element.on("touchstart" + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.touchHandler, this)); this.$element.on("touchmove" + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.handler, this)); if (this.options.unblock) this.$element.on("touchmove" + t.NAMESPACE, this.options.unblock, n.proxy(t.CORE.unblockHandler, this)) } if (this.options.keyboard) { this.$element.attr("tabindex", this.options.keyboard.tabindex || 0); this.$element.on("keydown" + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.keyboardHandler, this)); if (this.options.unblock) this.$element.on("keydown" + t.NAMESPACE, this.options.unblock, n.proxy(t.CORE.unblockHandler, this)) } }, f; t.NAME = "ScrollLock"; t.VERSION = "3.1.2"; t.NAMESPACE = ".scrollLock"; t.ANIMATION_NAMESPACE = t.NAMESPACE + ".effect"; t.DEFAULTS = { strict: !1, strictFn: function (n) { return n.prop("scrollHeight") > n.prop("clientHeight") }, selector: !1, animation: !1, touch: "ontouchstart" in window, keyboard: !1, unblock: !1 }; t.CORE = { wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll", animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(t.ANIMATION_NAMESPACE + " ") + t.ANIMATION_NAMESPACE, unblockHandler: function (n) { n.__currentTarget = n.currentTarget }, handler: function (i) { var f, u, e; this.enabled && !i.ctrlKey && (f = n(i.currentTarget), (this.options.strict !== !0 || this.options.strictFn(f)) && (i.stopPropagation(), u = n.proxy(r, this)(i, f), i.__currentTarget && (u.prevent &= n.proxy(r, this)(i, n(i.__currentTarget)).prevent), u.prevent && (i.preventDefault(), u.deltaY && f.scrollTop(u.scrollTop + u.deltaY), e = u.top ? "top" : "bottom", this.options.animation && setTimeout(t.CORE.animationHandler.bind(this, f, e), 0), f.trigger(n.Event(e + t.NAMESPACE))))) }, touchHandler: function (n) { this.startClientY = n.originalEvent.touches[0].clientY }, animationHandler: function (n, i) { var r = this.options.animation[i], u = this.options.animation.top + " " + this.options.animation.bottom; n.off(t.ANIMATION_NAMESPACE).removeClass(u).addClass(r).one(t.CORE.animationEventName, function () { n.removeClass(r) }) }, keyboardHandler: function (i) { var r = n(i.currentTarget), o = r.scrollTop(), f = u(i, r), e; return (i.__currentTarget && (e = u(i, n(i.__currentTarget)), f.top &= e.top, f.bottom &= e.bottom), f.top) ? (r.trigger(n.Event("top" + t.NAMESPACE)), this.options.animation && setTimeout(t.CORE.animationHandler.bind(this, r, "top"), 0), !1) : f.bottom ? (r.trigger(n.Event("bottom" + t.NAMESPACE)), this.options.animation && setTimeout(t.CORE.animationHandler.bind(this, r, "bottom"), 0), !1) : void 0 } }; t.prototype.toggleStrict = function () { this.options.strict = !this.options.strict }; t.prototype.enable = function () { this.enabled = !0 }; t.prototype.disable = function () { this.enabled = !1 }; t.prototype.destroy = function () { this.disable(); this.$element.off(t.NAMESPACE); this.$element = null; this.options = null }; f = n.fn.scrollLock; n.fn.scrollLock = function (i) { return this.each(function () { var u = n(this), f = typeof i == "object" && i, r = u.data(t.NAME); (r || "destroy" !== i) && (r || u.data(t.NAME, r = new t(u, f)), typeof i == "string" && r[i]()) }) }; n.fn.scrollLock.defaults = t.DEFAULTS; n.fn.scrollLock.noConflict = function () { return n.fn.scrollLock = f, this } });
//# sourceMappingURL=jquery-scrollLock.min.js.map
/*! UIkit 3.0.0-rc.12 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : t.UIkit = e() }(this, function () { "use strict"; function p(i, n) { return function (t) { var e = arguments.length; return e ? 1 < e ? i.apply(n, arguments) : i.call(n, t) : i.call(n) } } var e = Object.prototype, i = e.hasOwnProperty; function h(t, e) { return i.call(t, e) } var n = {}, r = /([a-z\d])([A-Z])/g; function m(t) { return t in n || (n[t] = t.replace(r, "$1-$2").toLowerCase()), n[t] } var o = /-(\w)/g; function g(t) { return t.replace(o, s) } function s(t, e) { return e ? e.toUpperCase() : "" } function a(t) { return t.length ? s(0, t.charAt(0)) + t.slice(1) : "" } var t = String.prototype, l = t.startsWith || function (t) { return 0 === this.lastIndexOf(t, 0) }; function v(t, e) { return l.call(t, e) } var c = t.endsWith || function (t) { return this.substr(-t.length) === t }; function u(t, e) { return c.call(t, e) } var d = function (t) { return ~this.indexOf(t) }, f = t.includes || d, w = Array.prototype.includes || d; function b(t, e) { return t && (N(t) ? f : w).call(t, e) } var y = Array.isArray; function x(t) { return "function" == typeof t } function k(t) { return null !== t && "object" == typeof t } function $(t) { return k(t) && Object.getPrototypeOf(t) === e } function I(t) { return k(t) && t === t.window } function S(t) { return k(t) && 9 === t.nodeType } function T(t) { return k(t) && !!t.jquery } function E(t) { return t instanceof Node || k(t) && 1 === t.nodeType } var C = e.toString; function A(t) { return C.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/) } function _(t) { return "boolean" == typeof t } function N(t) { return "string" == typeof t } function O(t) { return "number" == typeof t } function M(t) { return O(t) || N(t) && !isNaN(t - parseFloat(t)) } function D(t) { return void 0 === t } function B(t) { return _(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t } function z(t) { var e = Number(t); return !isNaN(e) && e } function P(t) { return parseFloat(t) || 0 } function H(t) { return E(t) || I(t) || S(t) ? t : A(t) || T(t) ? t[0] : y(t) ? H(t[0]) : null } var L = Array.prototype; function j(t) { return E(t) ? [t] : A(t) ? L.slice.call(t) : y(t) ? t.map(H).filter(Boolean) : T(t) ? t.toArray() : [] } function W(t) { return y(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(function (t) { return M(t) ? z(t) : B(t.trim()) }) : [t] } function F(t) { return t ? u(t, "ms") ? P(t) : 1e3 * P(t) : 0 } function V(t, e, i) { return t.replace(new RegExp(e + "|" + i, "mg"), function (t) { return t === e ? i : e }) } var Y = Object.assign || function (t) { for (var e = [], i = arguments.length - 1; 0 < i--;)e[i] = arguments[i + 1]; t = Object(t); for (var n = 0; n < e.length; n++) { var r = e[n]; if (null !== r) for (var o in r) h(r, o) && (t[o] = r[o]) } return t }; function R(t, e) { for (var i in t) e.call(t[i], t[i], i) } function q(t, i) { return t.sort(function (t, e) { return t[i] > e[i] ? 1 : e[i] > t[i] ? -1 : 0 }) } function U(t, e, i) { return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(t, e), i) } function X() { } function J(t, e) { return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top } function K(t, e) { return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top } var G = { ratio: function (t, e, i) { var n, r = "width" === e ? "height" : "width"; return (n = {})[r] = t[e] ? Math.round(i * t[r] / t[e]) : t[r], n[e] = i, n }, contain: function (i, n) { var r = this; return R(i = Y({}, i), function (t, e) { return i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i }), i }, cover: function (i, n) { var r = this; return R(i = this.contain(i, n), function (t, e) { return i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i }), i } }; function Z(t, e, i) { if (k(e)) for (var n in e) Z(t, n, e[n]); else { if (D(i)) return (t = H(t)) && t.getAttribute(e); j(t).forEach(function (t) { x(i) && (i = i.call(t, Z(t, e))), null === i ? tt(t, e) : t.setAttribute(e, i) }) } } function Q(t, e) { return j(t).some(function (t) { return t.hasAttribute(e) }) } function tt(t, e) { t = j(t), e.split(" ").forEach(function (e) { return t.forEach(function (t) { return t.removeAttribute(e) }) }) } function et(t, e, i, n) { Z(t, e, function (t) { return t ? t.replace(i, n) : t }) } function it(t, e) { for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)if (Q(t, n[i])) return Z(t, n[i]) } function nt(t, e) { return H(t) || st(t, ot(t, e)) } function rt(t, e) { var i = j(t); return i.length && i || at(t, ot(t, e)) } function ot(t, e) { return void 0 === e && (e = document), ut(t) || S(e) ? e : e.ownerDocument } function st(t, e) { return H(lt(t, e, "querySelector")) } function at(t, e) { return j(lt(t, e, "querySelectorAll")) } function lt(t, s, e) { if (void 0 === s && (s = document), !t || !N(t)) return null; var a; ut(t = t.replace(ct, "$1 *")) && (a = [], t = t.split(",").map(function (t, e) { var i = s; if ("!" === (t = t.trim())[0]) { var n = t.substr(1).trim().split(" "); i = gt(s.parentNode, n[0]), t = n.slice(1).join(" ").trim() } if ("-" === t[0]) { var r = t.substr(1).trim().split(" "), o = (i || s).previousElementSibling; i = pt(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ") } return i ? (i.id || (i.id = "uk-" + Date.now() + e, a.push(function () { return tt(i, "id") })), "#" + bt(i.id) + " " + t) : null }).filter(Boolean).join(","), s = document); try { return s[e](t) } catch (t) { return null } finally { a && a.forEach(function (t) { return t() }) } } var ht = /(^|,)\s*[!>+~-]/, ct = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g; function ut(t) { return N(t) && t.match(ht) } var dt = Element.prototype, ft = dt.matches || dt.webkitMatchesSelector || dt.msMatchesSelector; function pt(t, e) { return j(t).some(function (t) { return ft.call(t, e) }) } var mt = dt.closest || function (t) { var e = this; do { if (pt(e, t)) return e; e = e.parentNode } while (e && 1 === e.nodeType) }; function gt(t, e) { return v(e, ">") && (e = e.slice(1)), E(t) ? t.parentNode && mt.call(t, e) : j(t).map(function (t) { return t.parentNode && mt.call(t, e) }).filter(Boolean) } function vt(t, e) { for (var i = [], n = H(t).parentNode; n && 1 === n.nodeType;)pt(n, e) && i.push(n), n = n.parentNode; return i } var wt = window.CSS && CSS.escape || function (t) { return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) { return "\\" + t }) }; function bt(t) { return N(t) ? wt.call(null, t) : "" } var yt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }; function xt(t) { return j(t).some(function (t) { return yt[t.tagName.toLowerCase()] }) } function kt(t) { return j(t).some(function (t) { return t.offsetWidth || t.offsetHeight || t.getClientRects().length }) } var $t = "input,select,textarea,button"; function It(t) { return j(t).some(function (t) { return pt(t, $t) }) } function St(t, e) { return j(t).filter(function (t) { return pt(t, e) }) } function Tt(t, e) { return N(e) ? pt(t, e) || gt(t, e) : t === e || (S(e) ? e.documentElement : H(e)).contains(H(t)) } function Et() { for (var t = [], e = arguments.length; e--;)t[e] = arguments[e]; var i, n = Ot(t), r = n[0], o = n[1], s = n[2], a = n[3], l = n[4]; return r = Bt(r), s && (a = function (t, n, r) { var o = this; return function (i) { t.forEach(function (t) { var e = ">" === n[0] ? at(n, t).reverse().filter(function (t) { return Tt(i.target, t) })[0] : gt(i.target, n); e && (i.delegate = t, i.current = e, r.call(o, i)) }) } }(r, s, a)), 1 < a.length && (i = a, a = function (t) { return y(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t) }), o.split(" ").forEach(function (e) { return r.forEach(function (t) { return t.addEventListener(e, a, l) }) }), function () { return Ct(r, o, a, l) } } function Ct(t, e, i, n) { void 0 === n && (n = !1), t = Bt(t), e.split(" ").forEach(function (e) { return t.forEach(function (t) { return t.removeEventListener(e, i, n) }) }) } function At() { for (var t = [], e = arguments.length; e--;)t[e] = arguments[e]; var i = Ot(t), n = i[0], r = i[1], o = i[2], s = i[3], a = i[4], l = i[5], h = Et(n, r, o, function (t) { var e = !l || l(t); e && (h(), s(t, e)) }, a); return h } function _t(t, i, n) { return Bt(t).reduce(function (t, e) { return t && e.dispatchEvent(Nt(i, !0, !0, n)) }, !0) } function Nt(t, e, i, n) { if (void 0 === e && (e = !0), void 0 === i && (i = !1), N(t)) { var r = document.createEvent("CustomEvent"); r.initCustomEvent(t, e, i, n), t = r } return t } function Ot(t) { return x(t[2]) && t.splice(2, 0, !1), t } function Mt(t) { return t && "addEventListener" in t } function Dt(t) { return Mt(t) ? t : H(t) } function Bt(t) { return y(t) ? t.map(Dt).filter(Boolean) : N(t) ? at(t) : Mt(t) ? [t] : j(t) } function zt() { var e = setTimeout(At(document, "click", function (t) { t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e) }, !0)); _t(document, "touchcancel") } var Pt = "Promise" in window ? window.Promise : Wt, Ht = function () { var i = this; this.promise = new Pt(function (t, e) { i.reject = e, i.resolve = t }) }, Lt = 2, jt = "setImmediate" in window ? setImmediate : setTimeout; function Wt(t) { this.state = Lt, this.value = void 0, this.deferred = []; var e = this; try { t(function (t) { e.resolve(t) }, function (t) { e.reject(t) }) } catch (t) { e.reject(t) } } Wt.reject = function (i) { return new Wt(function (t, e) { e(i) }) }, Wt.resolve = function (i) { return new Wt(function (t, e) { t(i) }) }, Wt.all = function (s) { return new Wt(function (i, t) { var n = [], r = 0; function e(e) { return function (t) { n[e] = t, (r += 1) === s.length && i(n) } } 0 === s.length && i(n); for (var o = 0; o < s.length; o += 1)Wt.resolve(s[o]).then(e(o), t) }) }, Wt.race = function (n) { return new Wt(function (t, e) { for (var i = 0; i < n.length; i += 1)Wt.resolve(n[i]).then(t, e) }) }; var Ft = Wt.prototype; function Vt(s, a) { return new Pt(function (t, e) { var i = Y({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest, beforeSend: X, responseType: "" }, a); i.beforeSend(i); var n = i.xhr; for (var r in i) if (r in n) try { n[r] = i[r] } catch (t) { } for (var o in n.open(i.method.toUpperCase(), s), i.headers) n.setRequestHeader(o, i.headers[o]); Et(n, "load", function () { 0 === n.status || 200 <= n.status && n.status < 300 || 304 === n.status ? t(n) : e(Y(Error(n.statusText), { xhr: n, status: n.status })) }), Et(n, "error", function () { return e(Y(Error("Network Error"), { xhr: n })) }), Et(n, "timeout", function () { return e(Y(Error("Network Timeout"), { xhr: n })) }), n.send(i.data) }) } function Yt(n, r, o) { return new Pt(function (t, e) { var i = new Image; i.onerror = e, i.onload = function () { return t(i) }, i.src = n, r && (i.srcset = r), o && (i.sizes = o) }) } function Rt() { return "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll } function qt(t) { if (Rt()) t(); else var e = function () { i(), n(), t() }, i = Et(document, "DOMContentLoaded", e), n = Et(window, "load", e) } function Ut(t, e) { return e ? j(t).indexOf(H(e)) : j((t = H(t)) && t.parentNode.children).indexOf(t) } function Xt(t, e, i, n) { void 0 === i && (i = 0), void 0 === n && (n = !1); var r = (e = j(e)).length; return t = M(t) ? z(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : Ut(e, t), n ? U(t, 0, r - 1) : (t %= r) < 0 ? t + r : t } function Jt(t) { return (t = H(t)).innerHTML = "", t } function Kt(t, e) { return t = H(t), D(e) ? t.innerHTML : Gt(t.hasChildNodes() ? Jt(t) : t, e) } function Gt(e, t) { return e = H(e), te(t, function (t) { return e.appendChild(t) }) } function Zt(e, t) { return e = H(e), te(t, function (t) { return e.parentNode.insertBefore(t, e) }) } function Qt(e, t) { return e = H(e), te(t, function (t) { return e.nextSibling ? Zt(e.nextSibling, t) : Gt(e.parentNode, t) }) } function te(t, e) { return (t = N(t) ? ae(t) : t) ? "length" in t ? j(t).map(e) : e(t) : null } function ee(t) { j(t).map(function (t) { return t.parentNode && t.parentNode.removeChild(t) }) } function ie(t, e) { for (e = H(Zt(t, e)); e.firstChild;)e = e.firstChild; return Gt(e, t), e } function ne(t, e) { return j(j(t).map(function (t) { return t.hasChildNodes ? ie(j(t.childNodes), e) : Gt(t, e) })) } function re(t) { j(t).map(function (t) { return t.parentNode }).filter(function (t, e, i) { return i.indexOf(t) === e }).forEach(function (t) { Zt(t, t.childNodes), ee(t) }) } Ft.resolve = function (t) { var e = this; if (e.state === Lt) { if (t === e) throw new TypeError("Promise settled with itself."); var i = !1; try { var n = t && t.then; if (null !== t && k(t) && x(n)) return void n.call(t, function (t) { i || e.resolve(t), i = !0 }, function (t) { i || e.reject(t), i = !0 }) } catch (t) { return void (i || e.reject(t)) } e.state = 0, e.value = t, e.notify() } }, Ft.reject = function (t) { var e = this; if (e.state === Lt) { if (t === e) throw new TypeError("Promise settled with itself."); e.state = 1, e.value = t, e.notify() } }, Ft.notify = function () { var o = this; jt(function () { if (o.state !== Lt) for (; o.deferred.length;) { var t = o.deferred.shift(), e = t[0], i = t[1], n = t[2], r = t[3]; try { 0 === o.state ? x(e) ? n(e.call(void 0, o.value)) : n(o.value) : 1 === o.state && (x(i) ? n(i.call(void 0, o.value)) : r(o.value)) } catch (t) { r(t) } } }) }, Ft.then = function (i, n) { var r = this; return new Wt(function (t, e) { r.deferred.push([i, n, t, e]), r.notify() }) }, Ft.catch = function (t) { return this.then(void 0, t) }; var oe = /^\s*<(\w+|!)[^>]*>/, se = /^<(\w+)\s*\/?>(?:<\/\1>)?$/; function ae(t) { var e = se.exec(t); if (e) return document.createElement(e[1]); var i = document.createElement("div"); return oe.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, 1 < i.childNodes.length ? j(i.childNodes) : i.firstChild } function le(t, e) { if (t && 1 === t.nodeType) for (e(t), t = t.firstElementChild; t;)le(t, e), t = t.nextElementSibling } function he(t) { for (var e = [], i = arguments.length - 1; 0 < i--;)e[i] = arguments[i + 1]; me(t, e, "add") } function ce(t) { for (var e = [], i = arguments.length - 1; 0 < i--;)e[i] = arguments[i + 1]; me(t, e, "remove") } function ue(t, e) { et(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "") } function de(t) { for (var e = [], i = arguments.length - 1; 0 < i--;)e[i] = arguments[i + 1]; e[0] && ce(t, e[0]), e[1] && he(t, e[1]) } function fe(t, e) { return j(t).some(function (t) { return t.classList.contains(e) }) } function pe(t) { for (var n = [], e = arguments.length - 1; 0 < e--;)n[e] = arguments[e + 1]; if (n.length) { var r = N((n = ge(n))[n.length - 1]) ? [] : n.pop(); n = n.filter(Boolean), j(t).forEach(function (t) { for (var e = t.classList, i = 0; i < n.length; i++)we.Force ? e.toggle.apply(e, [n[i]].concat(r)) : e[(D(r) ? !e.contains(n[i]) : r) ? "add" : "remove"](n[i]) }) } } function me(t, i, n) { (i = ge(i).filter(Boolean)).length && j(t).forEach(function (t) { var e = t.classList; we.Multiple ? e[n].apply(e, i) : i.forEach(function (t) { return e[n](t) }) }) } function ge(t) { return t.reduce(function (t, e) { return t.concat.call(t, N(e) && b(e, " ") ? e.trim().split(" ") : e) }, []) } var ve, we = {}; (ve = document.createElement("_").classList) && (ve.add("a", "b"), ve.toggle("c", !1), we.Multiple = ve.contains("b"), we.Force = !ve.contains("c")); var be = { "animation-iteration-count": !(ve = null), "column-count": !0, "fill-opacity": !0, "flex-grow": !0, "flex-shrink": !0, "font-weight": !0, "line-height": !0, opacity: !0, order: !0, orphans: !0, widows: !0, "z-index": !0, zoom: !0 }; function ye(t, e, r) { return j(t).map(function (i) { if (N(e)) { if (e = Te(e), D(r)) return ke(i, e); r || 0 === r ? i.style[e] = M(r) && !be[e] ? r + "px" : r : i.style.removeProperty(e) } else { if (y(e)) { var n = xe(i); return e.reduce(function (t, e) { return t[e] = n[Te(e)], t }, {}) } k(e) && R(e, function (t, e) { return ye(i, e, t) }) } return i })[0] } function xe(t, e) { return (t = H(t)).ownerDocument.defaultView.getComputedStyle(t, e) } function ke(t, e, i) { return xe(t, i)[e] } var $e = {}; function Ie(t) { if (!(t in $e)) { var e = Gt(document.documentElement, document.createElement("div")); he(e, "var-" + t); try { $e[t] = ke(e, "content", ":before").replace(/^["'](.*)["']$/, "$1"), $e[t] = JSON.parse($e[t]) } catch (t) { } document.documentElement.removeChild(e) } return $e[t] } var Se = {}; function Te(t) { var e = Se[t]; return e || (e = Se[t] = function (t) { if ((t = m(t)) in Ce) return t; var e, i = Ee.length; for (; i--;)if ((e = "-" + Ee[i] + "-" + t) in Ce) return e }(t) || t), e } var Ee = ["webkit", "moz", "ms"], Ce = document.createElement("_").style; function Ae(t, s, a, l) { return void 0 === a && (a = 400), void 0 === l && (l = "linear"), Pt.all(j(t).map(function (o) { return new Pt(function (i, n) { for (var t in s) { var e = ye(o, t); "" === e && ye(o, t, e) } var r = setTimeout(function () { return _t(o, "transitionend") }, a); At(o, "transitionend transitioncanceled", function (t) { var e = t.type; clearTimeout(r), ce(o, "uk-transition"), ye(o, { "transition-property": "", "transition-duration": "", "transition-timing-function": "" }), "transitioncanceled" === e ? n() : i() }, !1, function (t) { var e = t.target; return o === e }), he(o, "uk-transition"), ye(o, Y({ "transition-property": Object.keys(s).map(Te).join(","), "transition-duration": a + "ms", "transition-timing-function": l }, s)) }) })) } var _e = { start: Ae, stop: function (t) { return _t(t, "transitionend"), Pt.resolve() }, cancel: function (t) { _t(t, "transitioncanceled") }, inProgress: function (t) { return fe(t, "uk-transition") } }, Ne = "uk-animation-", Oe = "uk-cancel-animation"; function Me(t, e, i, a, l) { var h = arguments; return void 0 === i && (i = 200), Pt.all(j(t).map(function (s) { return new Pt(function (n, r) { if (fe(s, Oe)) requestAnimationFrame(function () { return Pt.resolve().then(function () { return Me.apply(void 0, h).then(n, r) }) }); else { var t = e + " " + Ne + (l ? "leave" : "enter"); v(e, Ne) && (a && (t += " uk-transform-origin-" + a), l && (t += " " + Ne + "reverse")), o(), At(s, "animationend animationcancel", function (t) { var e = t.type, i = !1; "animationcancel" === e ? (r(), o()) : (n(), Pt.resolve().then(function () { i = !0, o() })), requestAnimationFrame(function () { i || (he(s, Oe), requestAnimationFrame(function () { return ce(s, Oe) })) }) }, !1, function (t) { var e = t.target; return s === e }), ye(s, "animationDuration", i + "ms"), he(s, t) } function o() { ye(s, "animationDuration", ""), ue(s, Ne + "\\S*") } }) })) } var De = new RegExp(Ne + "(enter|leave)"), Be = { in: function (t, e, i, n) { return Me(t, e, i, n, !1) }, out: function (t, e, i, n) { return Me(t, e, i, n, !0) }, inProgress: function (t) { return De.test(Z(t, "class")) }, cancel: function (t) { _t(t, "animationcancel") } }; function ze(t, e) { return N(t) ? He(t) ? H(ae(t)) : st(t, e) : H(t) } function Pe(t, e) { return N(t) ? He(t) ? j(ae(t)) : at(t, e) : j(t) } function He(t) { return "<" === t[0] || t.match(/^\s*</) } var Le = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] }; function je(t, e, c, u, d, i, f, p) { c = Je(c), u = Je(u); var m = { element: c, target: u }; if (!t || !e) return m; var g = Fe(t), v = Fe(e), w = v; return Xe(w, c, g, -1), Xe(w, u, v, 1), d = Ke(d, g.width, g.height), i = Ke(i, v.width, v.height), d.x += i.x, d.y += i.y, w.left += d.x, w.top += d.y, p = Fe(p || ii(t)), f && R(Le, function (t, n) { var r = t[0], o = t[1], s = t[2]; if (!0 === f || b(f, r)) { var e = c[r] === o ? -g[n] : c[r] === s ? g[n] : 0, i = u[r] === o ? v[n] : u[r] === s ? -v[n] : 0; if (w[o] < p[o] || w[o] + g[n] > p[s]) { var a = g[n] / 2, l = "center" === u[r] ? -v[n] / 2 : 0; "center" === c[r] && (h(a, l) || h(-a, -l)) || h(e, i) } } function h(e, t) { var i = w[o] + e + t - 2 * d[r]; if (i >= p[o] && i + g[n] <= p[s]) return w[o] = i, ["element", "target"].forEach(function (t) { m[t][r] = e ? m[t][r] === Le[n][1] ? Le[n][2] : Le[n][1] : m[t][r] }), !0 } }), We(t, w), m } function We(i, n) { if (i = H(i), !n) return Fe(i); var r = We(i), o = ye(i, "position");["left", "top"].forEach(function (t) { if (t in n) { var e = ye(i, t); ye(i, t, n[t] - r[t] + P("absolute" === o && "auto" === e ? Ve(i)[t] : e)) } }) } function Fe(t) { var e, i, n = ii(t = H(t)), r = n.pageYOffset, o = n.pageXOffset; if (I(t)) { var s = t.innerHeight, a = t.innerWidth; return { top: r, left: o, height: s, width: a, bottom: r + s, right: o + a } } kt(t) || (e = Z(t, "style"), i = Z(t, "hidden"), Z(t, { style: (e || "") + ";display:block !important;", hidden: null })); var l = t.getBoundingClientRect(); return D(e) || Z(t, { style: e, hidden: i }), { height: l.height, width: l.width, top: l.top + r, left: l.left + o, bottom: l.bottom + r, right: l.right + o } } function Ve(n) { var r = (n = H(n)).offsetParent || ni(n).documentElement, o = We(r), t = ["top", "left"].reduce(function (t, e) { var i = a(e); return t[e] -= o[e] + P(ye(n, "margin" + i)) + P(ye(r, "border" + i + "Width")), t }, We(n)); return { top: t.top, left: t.left } } var Ye = qe("height"), Re = qe("width"); function qe(n) { var r = a(n); return function (t, e) { if (t = H(t), D(e)) { if (I(t)) return t["inner" + r]; if (S(t)) { var i = t.documentElement; return Math.max(i["offset" + r], i["scroll" + r]) } return (e = "auto" === (e = ye(t, n)) ? t["offset" + r] : P(e) || 0) - Ue(n, t) } ye(t, n, e || 0 === e ? +e + Ue(n, t) + "px" : "") } } function Ue(t, i) { return "border-box" === ye(i, "boxSizing") ? Le[t].slice(1).map(a).reduce(function (t, e) { return t + P(ye(i, "padding" + e)) + P(ye(i, "border" + e + "Width")) }, 0) : 0 } function Xe(o, s, a, l) { R(Le, function (t, e) { var i = t[0], n = t[1], r = t[2]; s[i] === r ? o[n] += a[e] * l : "center" === s[i] && (o[n] += a[e] * l / 2) }) } function Je(t) { var e = /left|center|right/, i = /top|center|bottom/; return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" } } function Ke(t, e, i) { var n = (t || "").split(" "), r = n[0], o = n[1]; return { x: r ? P(r) * (u(r, "%") ? e / 100 : 1) : 0, y: o ? P(o) * (u(o, "%") ? i / 100 : 1) : 0 } } function Ge(t) { switch (t) { case "left": return "right"; case "right": return "left"; case "top": return "bottom"; case "bottom": return "top"; default: return t } } function Ze(t, e, i, n) { if (void 0 === e && (e = 0), void 0 === i && (i = 0), !kt(t)) return !1; var r = ii(t = H(t)); if (n) return J(t.getBoundingClientRect(), { top: -e, left: -i, bottom: e + Ye(r), right: i + Re(r) }); var o = ei(t), s = o[0], a = o[1], l = r.pageYOffset, h = r.pageXOffset; return J({ top: s, left: a, bottom: s + t.offsetHeight, right: s + t.offsetWidth }, { top: l - e, left: h - i, bottom: l + e + Ye(r), right: h + i + Re(r) }) } function Qe(t, e) { if (void 0 === e && (e = 0), !kt(t)) return 0; var i = ii(t = H(t)), n = ni(t), r = t.offsetHeight + e, o = ei(t)[0], s = Ye(i), a = s + Math.min(0, o - s), l = Math.max(0, s - (Ye(n) + e - (o + r))); return U((a + i.pageYOffset - o) / ((a + (r - (l < s ? l : 0))) / 100) / 100) } function ti(t, e) { if (I(t = H(t)) || S(t)) { var i = ii(t); (0, i.scrollTo)(i.pageXOffset, e) } else t.scrollTop = e } function ei(t) { var e = [0, 0]; do { if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === ye(t, "position")) { var i = ii(t); return e[0] += i.pageYOffset, e[1] += i.pageXOffset, e } } while (t = t.offsetParent); return e } function ii(t) { return I(t) ? t : ni(t).defaultView } function ni(t) { return H(t).ownerDocument } var ri = /msie|trident/i.test(window.navigator.userAgent), oi = "rtl" === Z(document.documentElement, "dir"), si = "ontouchstart" in window, ai = window.PointerEvent, li = si || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints, hi = li ? "mousedown " + (si ? "touchstart" : "pointerdown") : "mousedown", ci = li ? "mousemove " + (si ? "touchmove" : "pointermove") : "mousemove", ui = li ? "mouseup " + (si ? "touchend" : "pointerup") : "mouseup", di = li && ai ? "pointerenter" : "mouseenter", fi = li && ai ? "pointerleave" : "mouseleave", pi = { reads: [], writes: [], read: function (t) { return this.reads.push(t), mi(), t }, write: function (t) { return this.writes.push(t), mi(), t }, clear: function (t) { return vi(this.reads, t) || vi(this.writes, t) }, flush: function () { gi(this.reads), gi(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && mi() } }; function mi() { pi.scheduled || (pi.scheduled = !0, requestAnimationFrame(pi.flush.bind(pi))) } function gi(t) { for (var e; e = t.shift();)e() } function vi(t, e) { var i = t.indexOf(e); return !!~i && !!t.splice(i, 1) } function wi() { } function bi(t, e) { return (e.y - t.y) / (e.x - t.x) } wi.prototype = { positions: [], position: null, init: function () { var n = this; this.positions = [], this.position = null; var r = !1; this.unbind = Et(document, "mousemove", function (i) { r || (setTimeout(function () { var t = Date.now(), e = n.positions.length; e && 100 < t - n.positions[e - 1].time && n.positions.splice(0, e), n.positions.push({ time: t, x: i.pageX, y: i.pageY }), 5 < n.positions.length && n.positions.shift(), r = !1 }, 5), r = !0) }) }, cancel: function () { this.unbind && this.unbind() }, movesTo: function (t) { if (this.positions.length < 2) return !1; var e = We(t), i = this.positions[this.positions.length - 1], n = this.positions[0]; if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom) return !1; var r = [[{ x: e.left, y: e.top }, { x: e.right, y: e.bottom }], [{ x: e.right, y: e.top }, { x: e.left, y: e.bottom }]]; return e.right <= i.x || (e.left >= i.x ? (r[0].reverse(), r[1].reverse()) : e.bottom <= i.y ? r[0].reverse() : e.top >= i.y && r[1].reverse()), !!r.reduce(function (t, e) { return t + (bi(n, e[0]) < bi(i, e[0]) && bi(n, e[1]) > bi(i, e[1])) }, 0) } }; var yi = {}; function xi(t, e, i) { return yi.computed(x(t) ? t.call(i, i) : t, x(e) ? e.call(i, i) : e) } yi.args = yi.events = yi.init = yi.created = yi.beforeConnect = yi.connected = yi.ready = yi.beforeDisconnect = yi.disconnected = yi.destroy = function (t, e) { return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t }, yi.update = function (t, e) { return yi.args(t, x(e) ? { read: e } : e) }, yi.props = function (t, e) { return y(e) && (e = e.reduce(function (t, e) { return t[e] = String, t }, {})), yi.methods(t, e) }, yi.computed = yi.methods = function (t, e) { return e ? t ? Y({}, t, e) : e : t }, yi.data = function (e, i, t) { return t ? xi(e, i, t) : i ? e ? function (t) { return xi(e, i, t) } : i : e }; var ki = function (t, e) { return D(e) ? t : e }; function $i(e, i, n) { var r = {}; if (x(i) && (i = i.options), i.extends && (e = $i(e, i.extends, n)), i.mixins) for (var t = 0, o = i.mixins.length; t < o; t++)e = $i(e, i.mixins[t], n); for (var s in e) l(s); for (var a in i) h(e, a) || l(a); function l(t) { r[t] = (yi[t] || ki)(e[t], i[t], n) } return r } function Ii(t, e) { var i; void 0 === e && (e = []); try { return t ? v(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((i = {})[e[0]] = t, i) : t.split(";").reduce(function (t, e) { var i = e.split(/:(.*)/), n = i[0], r = i[1]; return n && !D(r) && (t[n.trim()] = r.trim()), t }, {}) : {} } catch (t) { return {} } } var Si = 0, Ti = function (t) { this.id = ++Si, this.el = H(t) }; function Ei(t, e) { try { t.contentWindow.postMessage(JSON.stringify(Y({ event: "command" }, e)), "*") } catch (t) { } } Ti.prototype.isVideo = function () { return this.isYoutube() || this.isVimeo() || this.isHTML5() }, Ti.prototype.isHTML5 = function () { return "VIDEO" === this.el.tagName }, Ti.prototype.isIFrame = function () { return "IFRAME" === this.el.tagName }, Ti.prototype.isYoutube = function () { return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/) }, Ti.prototype.isVimeo = function () { return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/) }, Ti.prototype.enableApi = function () { var e = this; if (this.ready) return this.ready; var i, r = this.isYoutube(), o = this.isVimeo(); return r || o ? this.ready = new Pt(function (t) { var n; At(e.el, "load", function () { if (r) { var t = function () { return Ei(e.el, { event: "listening", id: e.id }) }; i = setInterval(t, 100), t() } }), (n = function (t) { return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id }, new Pt(function (i) { At(window, "message", function (t, e) { return i(e) }, !1, function (t) { var e = t.data; if (e && N(e)) { try { e = JSON.parse(e) } catch (t) { return } return e && n(e) } }) })).then(function () { t(), i && clearInterval(i) }), Z(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id)) }) : Pt.resolve() }, Ti.prototype.play = function () { var t = this; if (this.isVideo()) if (this.isIFrame()) this.enableApi().then(function () { return Ei(t.el, { func: "playVideo", method: "play" }) }); else if (this.isHTML5()) try { var e = this.el.play(); e && e.catch(X) } catch (t) { } }, Ti.prototype.pause = function () { var t = this; this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () { return Ei(t.el, { func: "pauseVideo", method: "pause" }) }) : this.isHTML5() && this.el.pause()) }, Ti.prototype.mute = function () { var t = this; this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () { return Ei(t.el, { func: "mute", method: "setVolume", value: 0 }) }) : this.isHTML5() && (this.el.muted = !0, Z(this.el, "muted", ""))) }; var Ci, Ai, _i, Ni, Oi = {}; function Mi() { Ci && clearTimeout(Ci), Ai && clearTimeout(Ai), _i && clearTimeout(_i), Ci = Ai = _i = null, Oi = {} } qt(function () { Et(document, "click", function () { return Ni = !0 }, !0), Et(document, hi, function (t) { var e = t.target, i = zi(t), n = i.x, r = i.y, o = Date.now(), s = Pi(t.type); Oi.type && Oi.type !== s || (Oi.el = "tagName" in e ? e : e.parentNode, Ci && clearTimeout(Ci), Oi.x1 = n, Oi.y1 = r, Oi.last && o - Oi.last <= 250 && (Oi = {}), Oi.type = s, Oi.last = o, Ni = 0 < t.button) }), Et(document, ci, function (t) { if (!t.defaultPrevented) { var e = zi(t), i = e.x, n = e.y; Oi.x2 = i, Oi.y2 = n } }), Et(document, ui, function (t) { var e = t.type, i = t.target; Oi.type === Pi(e) && (Oi.x2 && 30 < Math.abs(Oi.x1 - Oi.x2) || Oi.y2 && 30 < Math.abs(Oi.y1 - Oi.y2) ? Ai = setTimeout(function () { var t, e, i, n, r; Oi.el && (_t(Oi.el, "swipe"), _t(Oi.el, "swipe" + (e = (t = Oi).x1, i = t.x2, n = t.y1, r = t.y2, Math.abs(e - i) >= Math.abs(n - r) ? 0 < e - i ? "Left" : "Right" : 0 < n - r ? "Up" : "Down"))), Oi = {} }) : "last" in Oi ? (_i = setTimeout(function () { return _t(Oi.el, "tap") }), Oi.el && "mouseup" !== e && Tt(i, Oi.el) && (Ci = setTimeout(function () { Ci = null, Oi.el && !Ni && _t(Oi.el, "click"), Oi = {} }, 350))) : Oi = {}) }), Et(document, "touchcancel", Mi), Et(window, "scroll", Mi) }); var Di = !1; function Bi(t) { return Di || "touch" === t.pointerType } function zi(t) { var e = t.touches, i = t.changedTouches, n = e && e[0] || i && i[0] || t; return { x: n.pageX, y: n.pageY } } function Pi(t) { return t.slice(0, 5) } function Hi(t) { return !(!v(t, "uk-") && !v(t, "data-uk-")) && g(t.replace("data-uk-", "").replace("uk-", "")) } Et(document, "touchstart", function () { return Di = !0 }, !0), Et(document, "click", function () { Di = !1 }), Et(document, "touchcancel", function () { return Di = !1 }, !0); var Li, ji, Wi, Fi, Vi = function (t) { this._init(t) }; Vi.util = Object.freeze({ ajax: Vt, getImage: Yt, transition: Ae, Transition: _e, animate: Me, Animation: Be, attr: Z, hasAttr: Q, removeAttr: tt, filterAttr: et, data: it, addClass: he, removeClass: ce, removeClasses: ue, replaceClass: de, hasClass: fe, toggleClass: pe, $: ze, $$: Pe, positionAt: je, offset: We, position: Ve, height: Ye, width: Re, flipPosition: Ge, isInView: Ze, scrolledOver: Qe, scrollTop: ti, isReady: Rt, ready: qt, index: Ut, getIndex: Xt, empty: Jt, html: Kt, prepend: function (e, t) { return (e = H(e)).hasChildNodes() ? te(t, function (t) { return e.insertBefore(t, e.firstChild) }) : Gt(e, t) }, append: Gt, before: Zt, after: Qt, remove: ee, wrapAll: ie, wrapInner: ne, unwrap: re, fragment: ae, apply: le, isIE: ri, isRtl: oi, hasTouch: li, pointerDown: hi, pointerMove: ci, pointerUp: ui, pointerEnter: di, pointerLeave: fi, on: Et, off: Ct, once: At, trigger: _t, createEvent: Nt, toEventTargets: Bt, preventClick: zt, fastdom: pi, isVoidElement: xt, isVisible: kt, selInput: $t, isInput: It, filter: St, within: Tt, bind: p, hasOwn: h, hyphenate: m, camelize: g, ucfirst: a, startsWith: v, endsWith: u, includes: b, isArray: y, isFunction: x, isObject: k, isPlainObject: $, isWindow: I, isDocument: S, isJQuery: T, isNode: E, isNodeCollection: A, isBoolean: _, isString: N, isNumber: O, isNumeric: M, isUndefined: D, toBoolean: B, toNumber: z, toFloat: P, toNode: H, toNodes: j, toList: W, toMs: F, swap: V, assign: Y, each: R, sortBy: q, clamp: U, noop: X, intersectRect: J, pointInRect: K, Dimensions: G, MouseTracker: wi, mergeOptions: $i, parseOptions: Ii, Player: Ti, Promise: Pt, Deferred: Ht, query: nt, queryAll: rt, find: st, findAll: at, matches: pt, closest: gt, parents: vt, escape: bt, css: ye, getStyles: xe, getStyle: ke, getCssVar: Ie, propName: Te, isTouch: Bi, getPos: zi }), Vi.data = "__uikit__", Vi.prefix = "uk-", Vi.options = {}, function (i) { var e, n = i.data; function r(t, e) { if (t) for (var i in t) t[i]._isReady && t[i]._callUpdate(e) } i.use = function (t) { if (!t.installed) return t.call(null, this), t.installed = !0, this }, i.mixin = function (t, e) { e = (N(e) ? i.component(e) : e) || this, (t = $i({}, t)).mixins = e.options.mixins, delete e.options.mixins, e.options = $i(e.options, t) }, i.extend = function (t) { t = t || {}; var e = function (t) { this._init(t) }; return ((e.prototype = Object.create(this.prototype)).constructor = e).options = $i(this.options, t), e.super = this, e.extend = this.extend, e }, i.update = function (t, e) { e = Nt(e || "update"), function (t) { for (var e = []; t && t !== document.body && t.parentNode;)t = t.parentNode, e.unshift(t); return e }(t = t ? H(t) : document.body).map(function (t) { return r(t[n], e) }), le(t, function (t) { return r(t[n], e) }) }, Object.defineProperty(i, "container", { get: function () { return e || document.body }, set: function (t) { e = ze(t) } }) }(Vi), (Li = Vi).prototype._callHook = function (t) { var e = this, i = this.$options[t]; i && i.forEach(function (t) { return t.call(e) }) }, Li.prototype._callConnected = function () { var t = this; this._connected || (this._data = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._isReady || qt(function () { return t._callReady() }), this._callUpdate()) }, Li.prototype._callDisconnected = function () { this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1) }, Li.prototype._callReady = function () { this._isReady || (this._isReady = !0, this._callHook("ready"), this._resetComputeds(), this._callUpdate()) }, Li.prototype._callUpdate = function (o) { var s = this, a = (o = Nt(o || "update")).type; b(["update", "load", "resize"], a) && this._resetComputeds(); var t = this.$options.update, e = this._frames, l = e.reads, h = e.writes; t && t.forEach(function (t, e) { var i = t.read, n = t.write, r = t.events; ("update" === a || b(r, a)) && (i && !b(pi.reads, l[e]) && (l[e] = pi.read(function () { var t = s._connected && i.call(s, s._data, o); !1 === t && n ? (pi.clear(h[e]), delete h[e]) : $(t) && Y(s._data, t), delete l[e] })), n && !b(pi.writes, h[e]) && (h[e] = pi.write(function () { s._connected && n.call(s, s._data, o), delete h[e] }))) }) }, function (t) { var e = 0; function s(t, e) { var i = {}, n = t.args; void 0 === n && (n = []); var r = t.props; void 0 === r && (r = {}); var o = t.el; if (!r) return i; for (var s in r) { var a = m(s), l = it(o, a); if (!D(l)) { if (l = r[s] === Boolean && "" === l || d(r[s], l), "target" === a && (!l || v(l, "_"))) continue; i[s] = l } } var h = Ii(it(o, e), n); for (var c in h) { var u = g(c); void 0 !== r[u] && (i[u] = d(r[u], h[c])) } return i } function i(n, r, o) { Object.defineProperty(n, r, { enumerable: !0, get: function () { var t = n._computeds, e = n.$props, i = n.$el; return h(t, r) || (t[r] = o.call(n, e, i)), t[r] }, set: function (t) { n._computeds[r] = t } }) } function f(e, i, n) { $(i) || (i = { name: n, handler: i }); var r, o, t = i.name, s = i.el, a = i.handler, l = i.capture, h = i.passive, c = i.delegate, u = i.filter, d = i.self; s = x(s) ? s.call(e) : s || e.$el, y(s) ? s.forEach(function (t) { return f(e, Y({}, i, { el: t }), n) }) : !s || u && !u.call(e) || (r = N(a) ? e[a] : p(a, e), a = function (t) { return y(t.detail) ? r.apply(void 0, [t].concat(t.detail)) : r(t) }, d && (o = a, a = function (t) { if (t.target === t.currentTarget || t.target === t.current) return o.call(null, t) }), e._events.push(Et(s, t, c ? N(c) ? c : c.call(e) : null, a, _(h) ? { passive: h, capture: l } : l))) } function n(t, e) { return t.every(function (t) { return !t || !h(t, e) }) } function d(t, e) { return t === Boolean ? B(e) : t === Number ? z(e) : "list" === t ? W(e) : "media" === t ? function (t) { if (N(t)) if ("@" === t[0]) { var e = "media-" + t.substr(1); t = P(Ie(e)) } else if (isNaN(t)) return t; return !(!t || isNaN(t)) && "(min-width: " + t + "px)" }(e) : t ? t(e) : e } t.prototype._init = function (t) { (t = t || {}).data = function (t, e) { var i = t.data, n = (t.el, e.args), r = e.props; if (void 0 === r && (r = {}), i = y(i) ? n && n.length ? i.slice(0, n.length).reduce(function (t, e, i) { return $(e) ? Y(t, e) : t[n[i]] = e, t }, {}) : void 0 : i) for (var o in i) D(i[o]) ? delete i[o] : i[o] = r[o] ? d(r[o], i[o]) : i[o]; return i }(t, this.constructor.options), this.$options = $i(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = { reads: {}, writes: {} }, this._events = [], this._uid = e++ , this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el) }, t.prototype._initData = function () { var t = this.$options.data; for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e] }, t.prototype._initMethods = function () { var t = this.$options.methods; if (t) for (var e in t) this[e] = p(t[e], this) }, t.prototype._initComputeds = function () { var t = this.$options.computed; if (this._resetComputeds(), t) for (var e in t) i(this, e, t[e]) }, t.prototype._resetComputeds = function () { this._computeds = {} }, t.prototype._initProps = function (t) { var e; for (e in this._resetComputeds(), t = t || s(this.$options, this.$name)) D(t[e]) || (this.$props[e] = t[e]); var i = [this.$options.computed, this.$options.methods]; for (e in this.$props) e in t && n(i, e) && (this[e] = this.$props[e]) }, t.prototype._initEvents = function () { var i = this, t = this.$options.events; t && t.forEach(function (t) { if (h(t, "handler")) f(i, t); else for (var e in t) f(i, t[e], e) }) }, t.prototype._unbindEvents = function () { this._events.forEach(function (t) { return t() }), this._events = [] }, t.prototype._initObserver = function () { var i = this, t = this.$options, n = t.attrs, e = t.props, r = t.el; if (!this._observer && e && !1 !== n) { n = y(n) ? n : Object.keys(e), this._observer = new MutationObserver(function () { var e = s(i.$options, i.$name); n.some(function (t) { return !D(e[t]) && e[t] !== i.$props[t] }) && i.$reset() }); var o = n.map(function (t) { return m(t) }).concat(this.$name); this._observer.observe(r, { attributes: !0, attributeFilter: o.concat(o.map(function (t) { return "data-" + t })) }) } } }(Vi), Wi = (ji = Vi).data, Fi = {}, ji.component = function (s, t) { if (!t) return $(Fi[s]) && (Fi[s] = ji.extend(Fi[s])), Fi[s]; ji[s] = function (t, i) { for (var e = arguments.length, n = Array(e); e--;)n[e] = arguments[e]; var r = ji.component(s); return $(t) ? new r({ data: t }) : r.options.functional ? new r({ data: [].concat(n) }) : t && t.nodeType ? o(t) : Pe(t).map(o)[0]; function o(t) { var e = ji.getComponent(t, s); if (e) { if (!i) return e; e.$destroy() } return new r({ el: t, data: i }) } }; var e = $(t) ? Y({}, t) : t.options; if (e.name = s, e.install && e.install(ji, e, s), ji._initialized && !e.functional) { var i = m(s); pi.read(function () { return ji[s]("[uk-" + i + "],[data-uk-" + i + "]") }) } return Fi[s] = $(t) ? e : t }, ji.getComponents = function (t) { return t && t[Wi] || {} }, ji.getComponent = function (t, e) { return ji.getComponents(t)[e] }, ji.connect = function (t) { if (t[Wi]) for (var e in t[Wi]) t[Wi][e]._callConnected(); for (var i = 0; i < t.attributes.length; i++) { var n = Hi(t.attributes[i].name); n && n in Fi && ji[n](t) } }, ji.disconnect = function (t) { for (var e in t[Wi]) t[Wi][e]._callDisconnected() }, function (n) { var r = n.data; n.prototype.$mount = function (t) { var e = this.$options.name; t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, this._callHook("init"), Tt(t, document) && this._callConnected()) }, n.prototype.$emit = function (t) { this._callUpdate(t) }, n.prototype.$reset = function () { this._callDisconnected(), this._callConnected() }, n.prototype.$destroy = function (t) { void 0 === t && (t = !1); var e = this.$options, i = e.el, n = e.name; i && this._callDisconnected(), this._callHook("destroy"), i && i[r] && (delete i[r][n], Object.keys(i[r]).length || delete i[r], t && ee(this.$el)) }, n.prototype.$create = function (t, e, i) { return n[t](e, i) }, n.prototype.$update = n.update, n.prototype.$getComponent = n.getComponent; var e = {}; Object.defineProperties(n.prototype, { $container: Object.getOwnPropertyDescriptor(n, "container"), $name: { get: function () { var t = this.$options.name; return e[t] || (e[t] = n.prefix + m(t)), e[t] } } }) }(Vi); var Yi = { connected: function () { he(this.$el, this.$name) } }, Ri = { props: { cls: Boolean, animation: "list", duration: Number, origin: String, transition: String, queued: Boolean }, data: { cls: !1, animation: [!1], duration: 200, origin: !1, transition: "linear", queued: !1, initProps: { overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: "" }, hideProps: { overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 } }, computed: { hasAnimation: function (t) { return !!t.animation[0] }, hasTransition: function (t) { var e = t.animation; return this.hasAnimation && !0 === e[0] } }, methods: { toggleElement: function (h, c, u) { var d = this; return new Pt(function (t) { h = j(h); var e, i = function (t) { return Pt.all(t.map(function (t) { return d._toggleElement(t, c, u) })) }, n = h.filter(function (t) { return d.isToggled(t) }), r = h.filter(function (t) { return !b(n, t) }); if (d.queued && D(u) && D(c) && d.hasAnimation && !(h.length < 2)) { var o = document.body, s = o.scrollTop, a = n[0], l = Be.inProgress(a) && fe(a, "uk-animation-leave") || _e.inProgress(a) && "0px" === a.style.height; e = i(n), l || (e = e.then(function () { var t = i(r); return o.scrollTop = s, t })) } else e = i(r.concat(n)); e.then(t, X) }) }, toggleNow: function (e, i) { var n = this; return new Pt(function (t) { return Pt.all(j(e).map(function (t) { return n._toggleElement(t, i, !1) })).then(t, X) }) }, isToggled: function (t) { var e = j(t || this.$el); return this.cls ? fe(e, this.cls.split(" ")[0]) : !Q(e, "hidden") }, updateAria: function (t) { !1 === this.cls && Z(t, "aria-hidden", !this.isToggled(t)) }, _toggleElement: function (t, e, i) { var n = this; if (e = _(e) ? e : Be.inProgress(t) ? fe(t, "uk-animation-leave") : _e.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !_t(t, "before" + (e ? "show" : "hide"), [this])) return Pt.reject(); var r = (!1 !== i && this.hasAnimation ? this.hasTransition ? this._toggleHeight : this._toggleAnimation : this._toggleImmediate)(t, e); return _t(t, e ? "show" : "hide", [this]), r.then(function () { _t(t, e ? "shown" : "hidden", [n]), n.$update(t) }) }, _toggle: function (t, e) { var i; t && (this.cls ? (i = b(this.cls, " ") || Boolean(e) !== fe(t, this.cls)) && pe(t, this.cls, b(this.cls, " ") ? void 0 : e) : (i = Boolean(e) === Q(t, "hidden")) && Z(t, "hidden", e ? null : ""), Pe("[autofocus]", t).some(function (t) { return kt(t) && (t.focus() || !0) }), this.updateAria(t), i && this.$update(t)) }, _toggleImmediate: function (t, e) { return this._toggle(t, e), Pt.resolve() }, _toggleHeight: function (t, e) { var i = this, n = _e.inProgress(t), r = t.hasChildNodes ? P(ye(t.firstElementChild, "marginTop")) + P(ye(t.lastElementChild, "marginBottom")) : 0, o = kt(t) ? Ye(t) + (n ? 0 : r) : 0; _e.cancel(t), this.isToggled(t) || this._toggle(t, !0), Ye(t, ""), pi.flush(); var s = Ye(t) + (n ? 0 : r); return Ye(t, o), (e ? _e.start(t, Y({}, this.initProps, { overflow: "hidden", height: s }), Math.round(this.duration * (1 - o / s)), this.transition) : _e.start(t, this.hideProps, Math.round(this.duration * (o / s)), this.transition).then(function () { return i._toggle(t, !1) })).then(function () { return ye(t, i.initProps) }) }, _toggleAnimation: function (t, e) { var i = this; return Be.cancel(t), e ? (this._toggle(t, !0), Be.in(t, this.animation[0], this.duration, this.origin)) : Be.out(t, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () { return i._toggle(t, !1) }) } } }, qi = { mixins: [Yi, Ri], props: { targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, transition: String }, data: { targets: "> *", active: !1, animation: [!0], collapsible: !0, multiple: !1, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", transition: "ease" }, computed: { items: function (t, e) { return Pe(t.targets, e) } }, events: [{ name: "click", delegate: function () { return this.targets + " " + this.$props.toggle }, handler: function (t) { t.preventDefault(), this.toggle(Ut(Pe(this.targets + " " + this.$props.toggle, this.$el), t.current)) } }], connected: function () { if (!1 !== this.active) { var t = this.items[Number(this.active)]; t && !fe(t, this.clsOpen) && this.toggle(t, !1) } }, update: function () { var e = this; this.items.forEach(function (t) { return e._toggleImmediate(ze(e.content, t), fe(t, e.clsOpen)) }); var t = !this.collapsible && !fe(this.items, this.clsOpen) && this.items[0]; t && this.toggle(t, !1) }, methods: { toggle: function (r, o) { var s = this, t = Xt(r, this.items), a = St(this.items, "." + this.clsOpen); (r = this.items[t]) && [r].concat(!this.multiple && !b(a, r) && a || []).forEach(function (t) { var e = t === r, i = e && !fe(t, s.clsOpen); if (i || !e || s.collapsible || !(a.length < 2)) { pe(t, s.clsOpen, i); var n = t._wrapper ? t._wrapper.firstElementChild : ze(s.content, t); t._wrapper || (t._wrapper = ie(n, "<div>"), Z(t._wrapper, "hidden", i ? "" : null)), s._toggleImmediate(n, !0), s.toggleElement(t._wrapper, i, o).then(function () { fe(t, s.clsOpen) === i && (i || s._toggleImmediate(n, !1), t._wrapper = null, re(n)) }) } }) } } }, Ui = { mixins: [Yi, Ri], args: "animation", props: { close: String }, data: { animation: [!0], selClose: ".uk-alert-close", duration: 150, hideProps: Y({ opacity: 0 }, Ri.data.hideProps) }, events: [{ name: "click", delegate: function () { return this.selClose }, handler: function (t) { t.preventDefault(), this.close() } }], methods: { close: function () { var t = this; this.toggleElement(this.$el).then(function () { return t.$destroy(!0) }) } } }; function Xi(o) { qt(function () { var i = 0, n = 0; if (Et(window, "load resize", function (t) { return o.update(null, t) }), Et(window, "scroll", function (t) { var e = t.target; t.dir = i <= window.pageYOffset ? "down" : "up", t.pageYOffset = i = window.pageYOffset, o.update(1 !== e.nodeType ? document.body : e, t) }, { passive: !0, capture: !0 }), Et(document, "loadedmetadata load", function (t) { var e = t.target; return o.update(e, "load") }, !0), Et(document, "animationstart", function (t) { var e = t.target; (ye(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++ , ye(document.body, "overflowX", "hidden"), setTimeout(function () { --n || ye(document.body, "overflowX", "") }, F(ye(e, "animationDuration")) + 100)) }, !0), li) { var r = "uk-hover"; Et(document, "tap", function (t) { var e = t.target; return Pe("." + r).forEach(function (t) { return !Tt(e, t) && ce(t, r) }) }), Object.defineProperty(o, "hoverSelector", { set: function (t) { Et(document, "tap", t, function (t) { return he(t.current, r) }) } }), o.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]" } }) } var Ji, Ki, Gi = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: !1, autoplay: !0 }, computed: { inView: function (t) { return "inview" === t.autoplay } }, connected: function () { this.inView && !Q(this.$el, "preload") && (this.$el.preload = "none") }, ready: function () { this.player = new Ti(this.$el), this.automute && this.player.mute() }, update: [{ read: function (t, e) { var i = e.type; return !(!this.player || !("scroll" !== i && "resize" !== i || this.inView)) && { visible: kt(this.$el) && "hidden" !== ye(this.$el, "visibility"), inView: this.inView && Ze(this.$el) } }, write: function (t) { var e = t.visible, i = t.inView; !e || this.inView && !i ? this.player.pause() : (!0 === this.autoplay || this.inView && i) && this.player.play() }, events: ["load", "resize", "scroll"] }] }, Zi = { mixins: [Yi, Gi], props: { width: Number, height: Number }, data: { automute: !0 }, update: { read: function () { var t = this.$el; if (!kt(t)) return !1; var e = t.parentNode; return { height: e.offsetHeight, width: e.offsetWidth } }, write: function (t) { var e = t.height, i = t.width, n = this.$el, r = this.width || n.naturalWidth || n.videoWidth || n.clientWidth, o = this.height || n.naturalHeight || n.videoHeight || n.clientHeight; r && o && ye(n, G.cover({ width: r, height: o }, { width: i + (i % 2 ? 1 : 0), height: e + (e % 2 ? 1 : 0) })) }, events: ["load", "resize"] } }, Qi = { props: { pos: String, offset: null, flip: Boolean, clsPos: String }, data: { pos: "bottom-" + (oi ? "right" : "left"), flip: !0, offset: !1, clsPos: "" }, computed: { pos: function (t) { var e = t.pos; return (e + (b(e, "-") ? "" : "-center")).split("-") }, dir: function () { return this.pos[0] }, align: function () { return this.pos[1] } }, methods: { positionAt: function (t, e, i) { var n; ue(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), ye(t, { top: "", left: "" }); var r = this.offset; r = M(r) ? r : (n = ze(r)) ? We(n)["x" === o ? "left" : "top"] - We(e)["x" === o ? "right" : "bottom"] : 0; var o = this.getAxis(), s = je(t, e, "x" === o ? Ge(this.dir) + " " + this.align : this.align + " " + Ge(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, i).target, a = s.x, l = s.y; this.dir = "x" === o ? a : l, this.align = "x" === o ? l : a, pe(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset) }, getAxis: function () { return "top" === this.dir || "bottom" === this.dir ? "y" : "x" } } }, tn = { mixins: [Qi, Ri], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryAlign: Boolean, delayShow: Number, delayHide: Number, clsDrop: String }, data: { mode: ["click", "hover"], toggle: "- *", boundary: window, boundaryAlign: !1, delayShow: 0, delayHide: 800, clsDrop: !1, hoverIdle: 200, animation: ["uk-animation-fade"], cls: "uk-open" }, computed: { boundary: function (t, e) { return nt(t.boundary, e) }, clsDrop: function (t) { return t.clsDrop || "uk-" + this.$options.name }, clsPos: function () { return this.clsDrop } }, init: function () { this.tracker = new wi }, connected: function () { he(this.$el, this.clsDrop); var t = this.$props.toggle; this.toggle = t && this.$create("toggle", nt(t, this.$el), { target: this.$el, mode: this.mode }), this.updateAria(this.$el) }, events: [{ name: "click", delegate: function () { return "." + this.clsDrop + "-close" }, handler: function (t) { t.preventDefault(), this.hide(!1) } }, { name: "click", delegate: function () { return 'a[href^="#"]' }, handler: function (t) { if (!t.defaultPrevented) { var e = t.target.hash; e || t.preventDefault(), e && Tt(e, this.$el) || this.hide(!1) } } }, { name: "beforescroll", handler: function () { this.hide(!1) } }, { name: "toggle", self: !0, handler: function (t, e) { t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1) } }, { name: di, filter: function () { return b(this.mode, "hover") }, handler: function (t) { Bi(t) || (Ji && Ji !== this && Ji.toggle && b(Ji.toggle.mode, "hover") && !Tt(t.target, Ji.toggle.$el) && !K({ x: t.pageX, y: t.pageY }, We(Ji.$el)) && Ji.hide(!1), t.preventDefault(), this.show(this.toggle)) } }, { name: "toggleshow", handler: function (t, e) { e && !b(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle)) } }, { name: "togglehide " + fi, handler: function (t, e) { Bi(t) || e && !b(e.target, this.$el) || (t.preventDefault(), this.toggle && b(this.toggle.mode, "hover") && this.hide()) } }, { name: "beforeshow", self: !0, handler: function () { this.clearTimers(), Be.cancel(this.$el), this.position() } }, { name: "show", self: !0, handler: function () { this.tracker.init(), this.toggle && (he(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "true")), function () { if (Ki) return; Ki = !0, Et(document, "click", function (t) { var e, i = t.target, n = t.defaultPrevented; if (!n) for (; Ji && Ji !== e && !Tt(i, Ji.$el) && (!Ji.toggle || !Tt(i, Ji.toggle.$el));)(e = Ji).hide(!1) }) }() } }, { name: "beforehide", self: !0, handler: function () { this.clearTimers() } }, { name: "hide", handler: function (t) { var e = t.target; this.$el === e ? (Ji = this.isActive() ? null : Ji, this.toggle && (ce(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "false"), this.toggle.$el.blur(), Pe("a, button", this.toggle.$el).forEach(function (t) { return t.blur() })), this.tracker.cancel()) : Ji = null === Ji && Tt(e, this.$el) && this.isToggled() ? this : Ji } }], update: { write: function () { this.isToggled() && !Be.inProgress(this.$el) && this.position() }, events: ["resize"] }, methods: { show: function (e, i) { var n = this; void 0 === i && (i = !0); var r = function () { return !n.isToggled() && n.toggleElement(n.$el, !0) }, t = function () { if (n.toggle = e || n.toggle, n.clearTimers(), !n.isActive()) if (i && Ji && Ji !== n && Ji.isDelaying) n.showTimer = setTimeout(n.show, 10); else { if (n.isParentOf(Ji)) { if (!Ji.hideTimer) return; Ji.hide(!1) } else if (Ji && !n.isChildOf(Ji) && !n.isParentOf(Ji)) for (var t; Ji && Ji !== t && !n.isChildOf(Ji);)(t = Ji).hide(!1); i && n.delayShow ? n.showTimer = setTimeout(r, n.delayShow) : r(), Ji = n } }; e && this.toggle && e.$el !== this.toggle.$el ? (At(this.$el, "hide", t), this.hide(!1)) : t() }, hide: function (t) { var e = this; void 0 === t && (t = !0); var i = function () { return e.toggleNow(e.$el, !1) }; this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i() }, clearTimers: function () { clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1 }, isActive: function () { return Ji === this }, isChildOf: function (t) { return t && t !== this && Tt(this.$el, t.$el) }, isParentOf: function (t) { return t && t !== this && Tt(t.$el, this.$el) }, position: function () { ue(this.$el, this.clsDrop + "-(stack|boundary)"), ye(this.$el, { top: "", left: "", display: "block" }), pe(this.$el, this.clsDrop + "-boundary", this.boundaryAlign); var t = We(this.boundary), e = this.boundaryAlign ? t : We(this.toggle.$el); if ("justify" === this.align) { var i = "y" === this.getAxis() ? "width" : "height"; ye(this.$el, i, e[i]) } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && he(this.$el, this.clsDrop + "-stack"); this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), ye(this.$el, "display", "") } } }; var en = { extends: tn }, nn = { mixins: [Yi], args: "target", props: { target: Boolean }, data: { target: !1 }, computed: { input: function (t, e) { return ze($t, e) }, state: function () { return this.input.nextElementSibling }, target: function (t, e) { var i = t.target; return i && (!0 === i && this.input.parentNode === e && this.input.nextElementSibling || nt(i, e)) } }, update: function () { var t = this.target, e = this.input; if (t) { var i, n = It(t) ? "value" : "textContent", r = t[n], o = e.files && e.files[0] ? e.files[0].name : pt(e, "select") && (i = Pe("option", e).filter(function (t) { return t.selected })[0]) ? i.textContent : e.value; r !== o && (t[n] = o) } }, events: [{ name: "focusin focusout mouseenter mouseleave", delegate: $t, handler: function (t) { var e = t.type; t.current === this.input && pe(this.state, "uk-" + (b(e, "focus") ? "focus" : "hover"), b(["focusin", "mouseenter"], e)) } }, { name: "change", handler: function () { this.$emit() } }] }, rn = { update: { read: function (t) { var e = Ze(this.$el); if (!e || t.isInView === e) return !1; t.isInView = e }, write: function () { this.$el.src = this.$el.src }, events: ["scroll", "load", "resize"] } }, on = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, update: { read: function (t) { var e = this.$el.children; if (!e.length || !kt(this.$el)) return t.rows = [[]]; t.rows = sn(e), t.stacks = !t.rows.some(function (t) { return 1 < t.length }) }, write: function (t) { var n = this; t.rows.forEach(function (t, i) { return t.forEach(function (t, e) { pe(t, n.margin, 0 !== i), pe(t, n.firstColumn, 0 === e) }) }) }, events: ["load", "resize"] } }; function sn(t) { for (var e = [[]], i = 0; i < t.length; i++) { var n = t[i], r = an(n); if (r.height) for (var o = e.length - 1; 0 <= o; o--) { var s = e[o]; if (!s[0]) { s.push(n); break } var a = an(s[0]); if (r.top >= a.bottom - 1) { e.push([n]); break } if (r.bottom > a.top) { if (r.left < a.left && !oi) { s.unshift(n); break } s.push(n); break } if (0 === o) { e.unshift([n]); break } } } return e } function an(t) { var e = t.offsetTop, i = t.offsetLeft, n = t.offsetHeight; return { top: e, left: i, height: n, bottom: e + n } } var ln = { extends: on, mixins: [Yi], name: "grid", props: { masonry: Boolean, parallax: Number }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: !1, parallax: 0 }, computed: { length: function (t, e) { return e.children.length }, parallax: function (t) { var e = t.parallax; return e && this.length ? Math.abs(e) : "" } }, connected: function () { this.masonry && he(this.$el, "uk-flex-top uk-flex-wrap-top") }, update: [{ read: function (t) { var r = t.rows; (this.masonry || this.parallax) && (r = r.map(function (t) { return q(t, "offsetLeft") })); var e, i, n, o, s, a = r.some(function (t) { return t.some(function (t) { return "static" === ye(t, "position") }) }), l = !1, h = ""; if (this.masonry && this.length) { var c = 0; l = r.reduce(function (i, t, n) { return i[n] = t.map(function (t, e) { return 0 === n ? 0 : P(i[n - 1][e]) + (c - P(r[n - 1][e] && r[n - 1][e].offsetHeight)) }), c = t.reduce(function (t, e) { return Math.max(t, e.offsetHeight) }, 0), i }, []), s = r, h = Math.max.apply(Math, s.reduce(function (i, t) { return t.forEach(function (t, e) { return i[e] = (i[e] || 0) + t.offsetHeight }), i }, [])) + (e = this.$el, i = this.margin, n = j(e.children), P((o = n.filter(function (t) { return fe(t, i) })[0]) ? ye(o, "marginTop") : ye(n[0], "paddingLeft")) * (r.length - 1)) } return { rows: r, translates: l, height: !!a && h } }, write: function (t) { var e = t.stacks, i = t.height; pe(this.$el, this.clsStack, e), ye(this.$el, "paddingBottom", this.parallax), !1 !== i && ye(this.$el, "height", i) }, events: ["load", "resize"] }, { read: function (t) { var e = t.height; return { scrolled: !!this.parallax && Qe(this.$el, e ? e - Ye(this.$el) : 0) * this.parallax } }, write: function (t) { var e = t.rows, n = t.scrolled, r = t.translates; (!1 !== n || r) && e.forEach(function (t, i) { return t.forEach(function (t, e) { return ye(t, "transform", n || r ? "translateY(" + ((r && -r[i][e]) + (n ? e % 2 ? n : n / 8 : 0)) + "px)" : "") }) }) }, events: ["scroll", "load", "resize"] }] }; var hn = { args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: !0 }, computed: { elements: function (t, e) { return Pe(t.target, e) } }, update: { read: function () { var e = this; return ye(this.elements, { minHeight: "", boxSizing: "" }), { rows: this.row ? sn(this.elements).map(function (t) { return e.match(t) }) : [this.match(this.elements)] } }, write: function (t) { t.rows.forEach(function (t) { var e = t.height; return ye(t.elements, { minHeight: e, boxSizing: "border-box" }) }) }, events: ["load", "resize"] }, methods: { match: function (t) { if (t.length < 2) return {}; var i = [], n = 0; return t.forEach(function (t) { var e = We(t).height; n = Math.max(n, e), i.push(e) }), t = t.filter(function (t, e) { return i[e] < n }), { height: n, elements: t } } } }, cn = { props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number }, data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 }, connected: function () { ye(this.$el, "boxSizing", "border-box") }, update: { read: function () { var t = Ye(window), e = ""; if (this.expand) e = t - (un(document.documentElement) - un(this.$el)) || ""; else { var i = We(this.$el).top; e = "calc(100vh", i < t / 2 && this.offsetTop && (e += " - " + i + "px"), !0 === this.offsetBottom ? e += " - " + un(this.$el.nextElementSibling) + "px" : M(this.offsetBottom) ? e += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? e += " - " + P(this.offsetBottom) + "px" : N(this.offsetBottom) && (e += " - " + un(nt(this.offsetBottom, this.$el)) + "px"), e += ")" } return { minHeight: e, viewport: t } }, write: function (t) { var e, i = t.minHeight; ye(this.$el, { height: "", minHeight: i }), this.minHeight && P(ye(this.$el, "minHeight")) < this.minHeight && ye(this.$el, "minHeight", this.minHeight), (e = Math.round(P(ye(this.$el, "minHeight")))) >= un(this.$el) && ye(this.$el, "height", e) }, events: ["load", "resize"] } }; function un(t) { return t && t.offsetHeight || 0 } var dn = {}, fn = { props: { id: String, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String }, data: { ratio: 1, id: !1, exclude: ["ratio", "src", "icon"], class: "" }, connected: function () { var t, a = this; if (this.class += " uk-svg", !this.icon && b(this.src, "#")) { var e = this.src.split("#"); 1 < e.length && (t = e, this.src = t[0], this.icon = t[1]) } this.svg = this.getSvg().then(function (t) { var e; if (N(t) ? (a.icon && b(t, "<symbol") && (t = function (t, e) { if (!mn[t]) { var i; for (mn[t] = {}; i = pn.exec(t);)mn[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>"; pn.lastIndex = 0 } return mn[t][e] }(t, a.icon) || t), e = ze(t.substr(t.indexOf("<svg")))) : e = t.cloneNode(!0), !e) return Pt.reject("SVG not found."); var i = Z(e, "viewBox"); for (var n in i && (i = i.split(" "), a.width = a.$props.width || i[2], a.height = a.$props.height || i[3]), a.width *= a.ratio, a.height *= a.ratio, a.$options.props) a[n] && !b(a.exclude, n) && Z(e, n, a[n]); a.id || tt(e, "id"), a.width && !a.height && tt(e, "height"), a.height && !a.width && tt(e, "width"); var r = a.$el; if (xt(r) || "CANVAS" === r.tagName) { Z(r, { hidden: !0, id: null }); var o = r.nextElementSibling; o && e.isEqualNode(o) ? e = o : Qt(r, e) } else { var s = r.lastElementChild; s && e.isEqualNode(s) ? e = s : Gt(r, e) } return a.svgEl = e }, X) }, disconnected: function () { var e = this; xt(this.$el) && Z(this.$el, { hidden: null, id: this.id || null }), this.svg && this.svg.then(function (t) { return (!e._connected || t !== e.svgEl) && ee(t) }, X), this.svg = this.svgEl = null }, methods: { getSvg: function () { var i = this; return this.src ? (dn[this.src] || (dn[this.src] = new Pt(function (e, t) { v(i.src, "data:") ? e(decodeURIComponent(i.src.split(",")[1])) : Vt(i.src).then(function (t) { return e(t.response) }, function () { return t("SVG not found.") }) })), dn[this.src]) : Pt.reject() } } }, pn = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g, mn = {}; var gn = {}, vn = { spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>', marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>', "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>', "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>', "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>', "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>' }, wn = { install: function (r) { r.icon.add = function (t, e) { var i, n = N(t) ? ((i = {})[t] = e, i) : t; R(n, function (t, e) { vn[e] = t, delete gn[e] }), r._initialized && le(document.body, function (t) { return R(r.getComponents(t), function (t) { return t.$options.isIcon && t.icon in n && t.$reset() }) }) } }, attrs: ["icon", "ratio"], mixins: [Yi, fn], args: "icon", props: ["icon"], data: { exclude: ["id", "style", "class", "src", "icon", "ratio"] }, isIcon: !0, connected: function () { he(this.$el, "uk-icon") }, methods: { getSvg: function () { var t, e = function (t) { if (!vn[t]) return null; gn[t] || (gn[t] = ze(vn[t].trim())); return gn[t] }((t = this.icon, oi ? V(V(t, "left", "right"), "previous", "next") : t)); return e ? Pt.resolve(e) : Pt.reject("Icon not found.") } } }, bn = { extends: wn, data: function (t) { return { icon: m(t.constructor.options.name) } } }, yn = { extends: bn, connected: function () { he(this.$el, "uk-slidenav") }, computed: { icon: function (t, e) { var i = t.icon; return fe(e, "uk-slidenav-large") ? i + "-large" : i } } }, xn = { extends: bn, computed: { icon: function (t, e) { var i = t.icon; return fe(e, "uk-search-icon") && vt(e, ".uk-search-large").length ? "search-large" : vt(e, ".uk-search-navbar").length ? "search-navbar" : i } } }, kn = { extends: bn, computed: { icon: function () { return "close-" + (fe(this.$el, "uk-close-large") ? "large" : "icon") } } }, $n = { extends: bn, connected: function () { var e = this; this.svg.then(function (t) { return 1 !== e.ratio && ye(ze("circle", t), "strokeWidth", 1 / e.ratio) }, X) } }; var In = { props: { dataSrc: String, dataSrcset: Boolean, sizes: String, width: Number, height: Number, offsetTop: String, offsetLeft: String, target: String }, data: { dataSrc: "", dataSrcset: !1, sizes: !1, width: !1, height: !1, offsetTop: "50vh", offsetLeft: 0, target: !1 }, computed: { cacheKey: function (t) { var e = t.dataSrc; return this.$name + "." + e }, width: function (t) { var e = t.width, i = t.dataWidth; return e || i }, height: function (t) { var e = t.height, i = t.dataHeight; return e || i }, sizes: function (t) { var e = t.sizes, i = t.dataSizes; return e || i }, isImg: function (t, e) { return On(e) }, target: function (t) { var e = t.target; return [this.$el].concat(rt(e, this.$el)) }, offsetTop: function (t) { return An(t.offsetTop, "height") }, offsetLeft: function (t) { return An(t.offsetLeft, "width") } }, connected: function () { Dn[this.cacheKey] ? Sn(this.$el, Dn[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Sn(this.$el, function (t, e, i) { var n; if (i) { for (var r; r = Tn.exec(i);)if (!r[1] || window.matchMedia(r[1]).matches) { o = r[2], r = v(o, "calc") ? o.substring(5, o.length - 1).replace(En, function (t) { return An(t) }).replace(/ /g, "").match(Cn).reduce(function (t, e) { return t + +e }, 0) : o; break } Tn.lastIndex = 0, n = G.ratio({ width: t, height: e }, "width", An(r || "100vw")), t = n.width, e = n.height } var o; return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>' }(this.width, this.height, this.sizes)) }, update: [{ read: function (t) { var e = this, i = t.delay, n = t.image; if (i) { if (!n && this.target.some(function (t) { return Ze(t, e.offsetTop, e.offsetLeft, !0) })) return { image: Yt(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) { return Sn(e.$el, Mn(t), t.srcset, t.sizes), Dn[e.cacheKey] = Mn(t), t }, X) }; !this.isImg && n && n.then(function (t) { return t && Sn(e.$el, Mn(t)) }) } }, write: function (t) { if (!t.delay) return this.$emit(), t.delay = !0 }, events: ["scroll", "load", "resize"] }] }; function Sn(t, e, i, n) { if (On(t)) e && (t.src = e), i && (t.srcset = i), n && (t.sizes = n); else if (e) { var r = !b(t.style.backgroundImage, e); ye(t, "backgroundImage", "url(" + e + ")"), r && _t(t, Nt("load", !1)) } } var Tn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g; var En = /\d+(?:\w+|%)/g, Cn = /[+-]?(\d+)/g; function An(t, e, i) { return void 0 === e && (e = "width"), void 0 === i && (i = window), M(t) ? +t : u(t, "vw") ? Nn(i, "width", t) : u(t, "vh") ? Nn(i, "height", t) : u(t, "%") ? Nn(i, e, t) : P(t) } var _n = { height: Ye, width: Re }; function Nn(t, e, i) { return _n[e](t) * P(i) / 100 } function On(t) { return "IMG" === t.tagName } function Mn(t) { return t.currentSrc || t.src } var Dn, Bn = "__test__"; try { (Dn = window.sessionStorage || {})[Bn] = 1, delete Dn[Bn] } catch (t) { Dn = {} } var zn, Pn, Hn = { mixins: [Yi], props: { fill: String, media: "media" }, data: { fill: "", media: !1, clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: function (t) { return t.fill || Ie("leader-fill") } }, connected: function () { var t; t = ne(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0] }, disconnected: function () { re(this.wrapper.childNodes) }, update: [{ read: function (t) { var e = t.changed, i = t.width, n = i; return { width: i = Math.floor(this.$el.offsetWidth / 2), changed: e || n !== i, hide: this.media && !window.matchMedia(this.media).matches } }, write: function (t) { pe(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, Z(this.wrapper, this.attrFill, new Array(t.width).join(this.fill))) }, events: ["load", "resize"] }] }, Ln = { props: { container: Boolean }, data: { container: !0 }, computed: { container: function (t) { var e = t.container; return !0 === e && this.$container || e && ze(e) } } }, jn = { mixins: [Yi, Ln, Ri], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean }, data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 }, computed: { panel: function (t, e) { return ze(t.selPanel, e) }, transitionElement: function () { return this.panel }, transitionDuration: function () { return F(ye(this.transitionElement, "transitionDuration")) }, bgClose: function (t) { return t.bgClose && this.panel } }, events: [{ name: "click", delegate: function () { return this.selClose }, handler: function (t) { t.preventDefault(), this.hide() } }, { name: "toggle", self: !0, handler: function (t) { t.defaultPrevented || (t.preventDefault(), this.toggle()) } }, { name: "beforeshow", self: !0, handler: function (t) { var e = zn && zn !== this && zn; if (zn = this, e) { if (!this.stack) return e.hide().then(this.show), void t.preventDefault(); this.prev = e } !function () { if (Pn) return; Pn = [Et(document, "click", function (t) { var e = t.target, i = t.defaultPrevented; !zn || !zn.bgClose || i || zn.overlay && !Tt(e, zn.$el) || Tt(e, zn.panel) || zn.hide() }), Et(document, "keydown", function (t) { 27 === t.keyCode && zn && zn.escClose && (t.preventDefault(), zn.hide()) })] }() } }, { name: "beforehide", self: !0, handler: function () { (zn = zn && zn !== this && zn || this.prev) || (Pn && Pn.forEach(function (t) { return t() }), Pn = null) } }, { name: "show", self: !0, handler: function () { fe(document.documentElement, this.clsPage) || (this.scrollbarWidth = Re(window) - Re(document), ye(document.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), he(document.documentElement, this.clsPage) } }, { name: "hidden", self: !0, handler: function () { for (var t, e = this.prev; e;) { if (e.clsPage === this.clsPage) { t = !0; break } e = e.prev } t || ce(document.documentElement, this.clsPage), !this.prev && ye(document.body, "overflowY", "") } }], methods: { toggle: function () { return this.isToggled() ? this.hide() : this.show() }, show: function () { return this.isToggled() ? Pt.resolve() : (this.container && this.$el.parentNode !== this.container && (Gt(this.container, this.$el), this._callConnected()), this.toggleNow(this.$el, !0)) }, hide: function () { return this.isToggled() ? this.toggleNow(this.$el, !1) : Pt.resolve() }, getActive: function () { return zn }, _toggleImmediate: function (e, i) { var n = this; return new Pt(function (t) { return requestAnimationFrame(function () { n._toggle(e, i), n.transitionDuration ? At(n.transitionElement, "transitionend", t, !1, function (t) { return t.target === n.transitionElement }) : t() }) }) } } }; var Wn = { install: function (a) { a.modal.dialog = function (t, e) { var n = a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div> ", e); return n.show(), Et(n.$el, "hidden", function (t) { var e = t.target, i = t.currentTarget; e === i && n.$destroy(!0) }), n }, a.modal.alert = function (e, i) { return i = Y({ bgClose: !1, escClose: !1, labels: a.modal.labels }, i), new Pt(function (t) { return Et(a.modal.dialog(' <div class="uk-modal-body">' + (N(e) ? e : Kt(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el, "hide", t) }) }, a.modal.confirm = function (r, o) { return o = Y({ bgClose: !1, escClose: !0, labels: a.modal.labels }, o), new Pt(function (e, t) { var i = a.modal.dialog(' <form> <div class="uk-modal-body">' + (N(r) ? r : Kt(r)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.labels.ok + "</button> </div> </form> ", o), n = !1; Et(i.$el, "submit", "form", function (t) { t.preventDefault(), e(), n = !0, i.hide() }), Et(i.$el, "hide", function () { n || t() }) }) }, a.modal.prompt = function (t, o, s) { return s = Y({ bgClose: !1, escClose: !0, labels: a.modal.labels }, s), new Pt(function (e) { var i = a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (N(t) ? t : Kt(t)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + s.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + s.labels.ok + "</button> </div> </form> ", s), n = ze("input", i.$el); n.value = o; var r = !1; Et(i.$el, "submit", "form", function (t) { t.preventDefault(), e(n.value), r = !0, i.hide() }), Et(i.$el, "hide", function () { r || e(null) }) }) }, a.modal.labels = { ok: "Ok", cancel: "Cancel" } }, mixins: [jn], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" }, events: [{ name: "show", self: !0, handler: function () { fe(this.panel, "uk-margin-auto-vertical") ? he(this.$el, "uk-flex") : ye(this.$el, "display", "block"), Ye(this.$el) } }, { name: "hidden", self: !0, handler: function () { ye(this.$el, "display", ""), ce(this.$el, "uk-flex") } }] }; var Fn, Vn = { extends: qi, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } }, Yn = { mixins: [Yi], props: { dropdown: String, mode: "list", align: String, offset: Number, boundary: Boolean, boundaryAlign: Boolean, clsDrop: String, delayShow: Number, delayHide: Number, dropbar: Boolean, dropbarMode: String, dropbarAnchor: Boolean, duration: Number }, data: { dropdown: ".uk-navbar-nav > li", align: oi ? "right" : "left", clsDrop: "uk-navbar-dropdown", mode: void 0, offset: void 0, delayShow: void 0, delayHide: void 0, boundaryAlign: void 0, flip: "x", boundary: !0, dropbar: !1, dropbarMode: "slide", dropbarAnchor: !1, duration: 200 }, computed: { boundary: function (t, e) { var i = t.boundary, n = t.boundaryAlign; return !0 === i || n ? e : i }, dropbarAnchor: function (t, e) { return nt(t.dropbarAnchor, e) }, pos: function (t) { return "bottom-" + t.align }, dropdowns: function (t, e) { return Pe(t.dropdown + " ." + t.clsDrop, e) } }, beforeConnect: function () { var t = this.$props.dropbar; this.dropbar = t && (nt(t, this.$el) || ze("+ .uk-navbar-dropbar", this.$el) || ze("<div></div>")), this.dropbar && (he(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && he(this.dropbar, "uk-navbar-dropbar-slide")) }, disconnected: function () { this.dropbar && ee(this.dropbar) }, update: function () { var e = this; this.$create("drop", this.dropdowns.filter(function (t) { return !e.getDropdown(t) }), Y({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset })) }, events: [{ name: "mouseover", delegate: function () { return this.dropdown }, handler: function (t) { var e = t.current, i = this.getActive(); i && i.toggle && !Tt(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1) } }, { name: "mouseleave", el: function () { return this.dropbar }, handler: function () { var t = this.getActive(); t && !pt(this.dropbar, ":hover") && t.hide() } }, { name: "beforeshow", capture: !0, filter: function () { return this.dropbar }, handler: function () { this.dropbar.parentNode || Qt(this.dropbarAnchor || this.$el, this.dropbar) } }, { name: "show", capture: !0, filter: function () { return this.dropbar }, handler: function (t, e) { var i = e.$el, n = e.dir; this.clsDrop && he(i, this.clsDrop + "-dropbar"), "bottom" === n && this.transitionTo(i.offsetHeight + P(ye(i, "marginTop")) + P(ye(i, "marginBottom")), i) } }, { name: "beforehide", filter: function () { return this.dropbar }, handler: function (t, e) { var i = e.$el, n = this.getActive(); pt(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault() } }, { name: "hide", filter: function () { return this.dropbar }, handler: function (t, e) { var i = e.$el, n = this.getActive(); (!n || n && n.$el === i) && this.transitionTo(0) } }], methods: { getActive: function () { var t = this.dropdowns.map(this.getDropdown).filter(function (t) { return t.isActive() })[0]; return t && b(t.mode, "hover") && Tt(t.toggle.$el, this.$el) && t }, transitionTo: function (t, e) { var i = this.dropbar, n = kt(i) ? Ye(i) : 0; return ye(e = n < t && e, "clip", "rect(0," + e.offsetWidth + "px," + n + "px,0)"), Ye(i, n), _e.cancel([e, i]), Pt.all([_e.start(i, { height: t }, this.duration), _e.start(e, { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" }, this.duration)]).catch(X).then(function () { return ye(e, { clip: "" }) }) }, getDropdown: function (t) { return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown") } } }, Rn = { mixins: [jn], args: "mode", props: { content: String, mode: String, flip: Boolean, overlay: Boolean }, data: { content: ".uk-offcanvas-content", mode: "slide", flip: !1, overlay: !1, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContent: "uk-offcanvas-content", clsContentAnimation: "uk-offcanvas-content-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close" }, computed: { content: function (t) { return ze(t.content) || document.body }, clsFlip: function (t) { var e = t.flip, i = t.clsFlip; return e ? i : "" }, clsOverlay: function (t) { var e = t.overlay, i = t.clsOverlay; return e ? i : "" }, clsMode: function (t) { var e = t.mode; return t.clsMode + "-" + e }, clsSidebarAnimation: function (t) { var e = t.mode, i = t.clsSidebarAnimation; return "none" === e || "reveal" === e ? "" : i }, clsContentAnimation: function (t) { var e = t.mode, i = t.clsContentAnimation; return "push" !== e && "reveal" !== e ? "" : i }, transitionElement: function (t) { return "reveal" === t.mode ? this.panel.parentNode : this.panel } }, update: { write: function () { this.getActive() === this && ((this.overlay || this.clsContentAnimation) && Re(this.content, Re(window) - this.scrollbarWidth), this.overlay && (Ye(this.content, Ye(window)), Fn && (this.content.scrollTop = Fn.y))) }, events: ["resize"] }, events: [{ name: "click", delegate: function () { return 'a[href^="#"]' }, handler: function (t) { var e = t.current; e.hash && ze(e.hash, this.content) && (Fn = null, this.hide()) } }, { name: "beforescroll", filter: function () { return this.overlay }, handler: function (t, e, i) { e && i && this.isToggled() && ze(i, this.content) && (At(this.$el, "hidden", function () { return e.scrollTo(i) }), t.preventDefault()) } }, { name: "show", self: !0, handler: function () { Fn = Fn || { x: window.pageXOffset, y: window.pageYOffset }, "reveal" !== this.mode || fe(this.panel, this.clsMode) || (ie(this.panel, "<div>"), he(this.panel.parentNode, this.clsMode)), ye(document.documentElement, "overflowY", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), he(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), Ye(document.body), he(this.content, this.clsContentAnimation), he(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), he(this.$el, this.clsOverlay), ye(this.$el, "display", "block"), Ye(this.$el) } }, { name: "hide", self: !0, handler: function () { ce(this.content, this.clsContentAnimation); var t = this.getActive(); ("none" === this.mode || t && t !== this && t !== this.prev) && _t(this.panel, "transitionend") } }, { name: "hidden", self: !0, handler: function () { if ("reveal" === this.mode && re(this.panel), this.overlay) { if (!Fn) { var t = this.content, e = t.scrollLeft, i = t.scrollTop; Fn = { x: e, y: i } } } else Fn = { x: window.pageXOffset, y: window.pageYOffset }; ce(this.panel, this.clsSidebarAnimation, this.clsMode), ce(this.$el, this.clsOverlay), ye(this.$el, "display", ""), ce(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), document.body.scrollTop = Fn.y, ye(document.documentElement, "overflowY", ""), Re(this.content, ""), Ye(this.content, ""), window.scroll(Fn.x, Fn.y), Fn = null } }, { name: "swipeLeft swipeRight", handler: function (t) { this.isToggled() && Bi(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide() } }] }, qn = { mixins: [Yi], props: { selModal: String, selPanel: String }, data: { selModal: ".uk-modal", selPanel: ".uk-modal-dialog" }, computed: { modal: function (t, e) { return gt(e, t.selModal) }, panel: function (t, e) { return gt(e, t.selPanel) } }, connected: function () { ye(this.$el, "minHeight", 150) }, update: { read: function () { return !(!this.panel || !this.modal) && { current: P(ye(this.$el, "maxHeight")), max: Math.max(150, Ye(this.modal) - (We(this.panel).height - Ye(this.$el))) } }, write: function (t) { var e = t.current, i = t.max; ye(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && _t(this.$el, "resize") }, events: ["load", "resize"] } }, Un = { props: ["width", "height"], connected: function () { he(this.$el, "uk-responsive-width") }, update: { read: function () { return !!(kt(this.$el) && this.width && this.height) && { width: Re(this.$el.parentNode), height: this.height } }, write: function (t) { Ye(this.$el, G.contain({ height: this.height, width: this.width }, t).height) }, events: ["load", "resize"] } }, Xn = { props: { duration: Number, offset: Number }, data: { duration: 1e3, offset: 0 }, methods: { scrollTo: function (i) { var n = this; i = i && ze(i) || document.body; var t = Ye(document), e = Ye(window), r = We(i).top - this.offset; if (t < r + e && (r = t - e), _t(this.$el, "beforescroll", [this, i])) { var o = Date.now(), s = window.pageYOffset, a = function () { var t, e = s + (r - s) * (t = U((Date.now() - o) / n.duration), .5 * (1 - Math.cos(Math.PI * t))); ti(window, e), e !== r ? requestAnimationFrame(a) : _t(n.$el, "scrolled", [n, i]) }; a() } } }, events: { click: function (t) { t.defaultPrevented || (t.preventDefault(), this.scrollTo(bt(this.$el.hash).substr(1))) } } }; var Jn = { args: "cls", props: { cls: "list", target: String, hidden: Boolean, offsetTop: Number, offsetLeft: Number, repeat: Boolean, delay: Number }, data: function () { return { cls: [], target: !1, hidden: !0, offsetTop: 0, offsetLeft: 0, repeat: !1, delay: 0, inViewClass: "uk-scrollspy-inview" } }, computed: { elements: function (t, e) { var i = t.target; return i ? Pe(i, e) : [e] } }, update: [{ write: function () { this.hidden && ye(St(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden") } }, { read: function (r) { var o = this; r.delay && this.elements.forEach(function (t, e) { var i = r[e]; if (!i || i.el !== t) { var n = it(t, "uk-scrollspy-class"); i = { el: t, toggles: n && n.split(",") || o.cls } } i.show = Ze(t, o.offsetTop, o.offsetLeft), r[e] = i }) }, write: function (o) { var s = this; if (!o.delay) return this.$emit(), o.delay = !0; this.elements.forEach(function (t, e) { var i = o[e], n = i.toggles[e] || i.toggles[0]; if (!i.show || i.inview || i.queued) { if (!i.show && (i.inview || i.queued) && s.repeat) { if (i.abort && i.abort(), !i.inview) return; ye(t, "visibility", s.hidden ? "hidden" : ""), ce(t, s.inViewClass), pe(t, n), _t(t, "outview"), s.$update(t), i.inview = !1 } } else { var r = function () { ye(t, "visibility", ""), he(t, s.inViewClass), pe(t, n), _t(t, "inview"), s.$update(t), i.inview = !0, i.abort && i.abort() }; s.delay ? (i.queued = !0, o.promise = (o.promise || Pt.resolve()).then(function () { return !i.inview && new Pt(function (t) { var e = setTimeout(function () { r(), t() }, o.promise || 1 === s.elements.length ? s.delay : 0); i.abort = function () { clearTimeout(e), t(), i.queued = !1 } }) })) : r() } }) }, events: ["scroll", "load", "resize"] }] }, Kn = { props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number }, data: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 }, computed: { links: function (t, e) { return Pe('a[href^="#"]', e).filter(function (t) { return t.hash }) }, elements: function () { return this.closest ? gt(this.links, this.closest) : this.links }, targets: function () { return Pe(this.links.map(function (t) { return t.hash }).join(",")) } }, update: [{ read: function () { this.scroll && this.$create("scroll", this.links, { offset: this.offset || 0 }) } }, { read: function (o) { var s = this, a = window.pageYOffset + this.offset + 1, l = Ye(document) - Ye(window) + this.offset; o.active = !1, this.targets.every(function (t, e) { var i = We(t).top, n = e + 1 === s.targets.length; if (!s.overflow && (0 === e && a < i || n && i + t.offsetTop < a)) return !1; if (!n && We(s.targets[e + 1]).top <= a) return !0; if (l <= a) for (var r = s.targets.length - 1; e < r; r--)if (Ze(s.targets[r])) { t = s.targets[r]; break } return !(o.active = ze(St(s.links, '[href="#' + t.id + '"]'))) }) }, write: function (t) { var e = t.active; this.links.forEach(function (t) { return t.blur() }), ce(this.elements, this.cls), e && _t(this.$el, "active", [e, he(this.closest ? gt(e, this.closest) : e, this.cls)]) }, events: ["scroll", "load", "resize"] }] }, Gn = { mixins: [Yi], props: { top: null, bottom: Boolean, offset: Number, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, widthElement: Boolean, showOnUp: Boolean, media: "media", targetOffset: Number }, data: { top: 0, bottom: !1, offset: 0, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", widthElement: !1, showOnUp: !1, media: !1, targetOffset: !1 }, computed: { selTarget: function (t, e) { var i = t.selTarget; return i && ze(i, e) || e }, widthElement: function (t, e) { return nt(t.widthElement, e) || this.placeholder } }, connected: function () { this.placeholder = ze("+ .uk-sticky-placeholder", this.$el) || ze('<div class="uk-sticky-placeholder"></div>'), this.isActive || this.hide() }, disconnected: function () { this.isActive && (this.isActive = !1, this.hide(), ce(this.selTarget, this.clsInactive)), ee(this.placeholder), this.placeholder = null, this.widthElement = null }, events: [{ name: "active", self: !0, handler: function () { de(this.selTarget, this.clsInactive, this.clsActive) } }, { name: "inactive", self: !0, handler: function () { de(this.selTarget, this.clsActive, this.clsInactive) } }, { name: "load hashchange popstate", el: window, handler: function () { var n = this; if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) { var r = ze(location.hash); r && pi.read(function () { var t = We(r).top, e = We(n.$el).top, i = n.$el.offsetHeight; n.isActive && t <= e + i && e <= t + r.offsetHeight && ti(window, t - i - (M(n.targetOffset) ? n.targetOffset : 0) - n.offset) }) } } }], update: [{ read: function () { return { height: this.$el.offsetHeight, top: We(this.isActive ? this.placeholder : this.$el).top } }, write: function (t) { var e = t.height, i = t.top, n = this.placeholder; ye(n, Y({ height: "absolute" !== ye(this.$el, "position") ? e : "" }, ye(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"]))), Tt(n, document) || (Qt(this.$el, n), Z(n, "hidden", "")), this.topOffset = i, this.bottomOffset = this.topOffset + e; var r = Zn("bottom", this); this.top = Math.max(P(Zn("top", this)), this.topOffset) - this.offset, this.bottom = r && r - e, this.inactive = this.media && !window.matchMedia(this.media).matches }, events: ["load", "resize"] }, { read: function (t, e) { var i = e.scrollY; return void 0 === i && (i = window.pageYOffset), this.width = (kt(this.widthElement) ? this.widthElement : this.$el).offsetWidth, { scroll: this.scroll = i, visible: kt(this.$el) } }, write: function (t, e) { var i = this, n = t.visible, r = t.scroll; void 0 === e && (e = {}); var o = e.dir; if (!(r < 0 || !n || this.disabled || this.showOnUp && !o)) if (this.inactive || r < this.top || this.showOnUp && (r <= this.top || "down" === o || "up" === o && !this.isActive && r <= this.bottomOffset)) { if (!this.isActive) return; this.isActive = !1, this.animation && r > this.topOffset ? (Be.cancel(this.$el), Be.out(this.$el, this.animation).then(function () { return i.hide() }, X)) : this.hide() } else this.isActive ? this.update() : this.animation ? (Be.cancel(this.$el), this.show(), Be.in(this.$el, this.animation).catch(X)) : this.show() }, events: ["load", "resize", "scroll"] }], methods: { show: function () { this.isActive = !0, this.update(), Z(this.placeholder, "hidden", null) }, hide: function () { this.isActive && !fe(this.selTarget, this.clsActive) || _t(this.$el, "inactive"), ce(this.$el, this.clsFixed, this.clsBelow), ye(this.$el, { position: "", top: "", width: "" }), Z(this.placeholder, "hidden", "") }, update: function () { var t = 0 !== this.top || this.scroll > this.top, e = Math.max(0, this.offset); this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), ye(this.$el, { position: "fixed", top: e + "px", width: this.width }), fe(this.selTarget, this.clsActive) ? t || _t(this.$el, "inactive") : t && _t(this.$el, "active"), pe(this.$el, this.clsBelow, this.scroll > this.bottomOffset), he(this.$el, this.clsFixed) } } }; function Zn(t, e) { var i = e.$props, n = e.$el, r = e[t + "Offset"], o = i[t]; if (o) { if (M(o)) return r + P(o); if (N(o) && o.match(/^-?\d+vh$/)) return Ye(window) * P(o) / 100; var s = !0 === o ? n.parentNode : nt(o, n); return s ? We(s).top + s.offsetHeight : void 0 } } var Qn, tr = { mixins: [Ri], args: "connect", props: { connect: String, toggle: String, active: Number, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> *", active: 0, swiping: !0, cls: "uk-active", clsContainer: "uk-switcher", attrItem: "uk-switcher-item", queued: !0 }, computed: { connects: function (t, e) { return rt(t.connect, e) }, toggles: function (t, e) { return Pe(t.toggle, e) } }, events: [{ name: "click", delegate: function () { return this.toggle + ":not(.uk-disabled)" }, handler: function (t) { t.preventDefault(), this.show(t.current) } }, { name: "click", el: function () { return this.connects }, delegate: function () { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function (t) { t.preventDefault(), this.show(it(t.current, this.attrItem)) } }, { name: "swipeRight swipeLeft", filter: function () { return this.swiping }, el: function () { return this.connects }, handler: function (t) { Bi(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous")) } }], update: function () { var e = this; this.connects.forEach(function (t) { return e.updateAria(t.children) }), this.show(St(this.toggles, "." + this.cls)[0] || this.toggles[this.active] || this.toggles[0]) }, methods: { index: function () { return !!this.connects.length && Ut(St(this.connects[0].children, "." + this.cls)[0]) }, show: function (t) { for (var e, i = this, n = this.toggles.length, r = this.index(), o = 0 <= r, s = "previous" === t ? -1 : 1, a = Xt(t, this.toggles, r), l = 0; l < n; l++ , a = (a + s + n) % n)if (!pt(i.toggles[a], ".uk-disabled, [disabled]")) { e = i.toggles[a]; break } !e || 0 <= r && fe(e, this.cls) || r === a || (ce(this.toggles, this.cls), Z(this.toggles, "aria-expanded", !1), he(e, this.cls), Z(e, "aria-expanded", !0), this.connects.forEach(function (t) { o ? i.toggleElement([t.children[r], t.children[a]]) : i.toggleNow(t.children[a]) })) } } }, er = { mixins: [Yi], extends: tr, props: { media: "media" }, data: { media: 960, attrItem: "uk-tab-item" }, connected: function () { var t = fe(this.$el, "uk-tab-left") ? "uk-tab-left" : !!fe(this.$el, "uk-tab-right") && "uk-tab-right"; t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media }) } }, ir = { mixins: [Ri], args: "target", props: { href: String, target: null, mode: "list", media: "media" }, data: { href: !1, target: !1, mode: "click", queued: !0, media: !1 }, computed: { target: function (t, e) { var i = t.href, n = t.target; return (n = rt(n || i, e)).length && n || [e] } }, events: [{ name: di + " " + fi, filter: function () { return b(this.mode, "hover") }, handler: function (t) { Bi(t) || this.toggle("toggle" + (t.type === di ? "show" : "hide")) } }, { name: "click", filter: function () { return b(this.mode, "click") || li && b(this.mode, "hover") }, handler: function (t) { var e; (Bi(t) || b(this.mode, "click")) && ((gt(t.target, 'a[href="#"], button') || (e = gt(t.target, "a[href]")) && (this.cls || !kt(this.target) || e.hash && pt(this.target, e.hash))) && At(document, "click", function (t) { return t.preventDefault() }), this.toggle()) } }], update: { write: function () { if (b(this.mode, "media") && this.media) { var t = this.isToggled(this.target); (window.matchMedia(this.media).matches ? !t : t) && this.toggle() } }, events: ["load", "resize"] }, methods: { toggle: function (t) { _t(this.target, t || "toggle", [this]) && this.toggleElement(this.target) } } }; Vi.version = "3.0.0-rc.12", (Qn = Vi).component("accordion", qi), Qn.component("alert", Ui), Qn.component("cover", Zi), Qn.component("drop", tn), Qn.component("dropdown", en), Qn.component("formCustom", nn), Qn.component("gif", rn), Qn.component("grid", ln), Qn.component("heightMatch", hn), Qn.component("heightViewport", cn), Qn.component("icon", wn), Qn.component("img", In), Qn.component("leader", Hn), Qn.component("margin", on), Qn.component("modal", Wn), Qn.component("nav", Vn), Qn.component("navbar", Yn), Qn.component("offcanvas", Rn), Qn.component("overflowAuto", qn), Qn.component("responsive", Un), Qn.component("scroll", Xn), Qn.component("scrollspy", Jn), Qn.component("scrollspyNav", Kn), Qn.component("sticky", Gn), Qn.component("svg", fn), Qn.component("switcher", tr), Qn.component("tab", er), Qn.component("toggle", ir), Qn.component("video", Gi), Qn.component("close", kn), Qn.component("marker", bn), Qn.component("navbarToggleIcon", bn), Qn.component("overlayIcon", bn), Qn.component("paginationNext", bn), Qn.component("paginationPrevious", bn), Qn.component("searchIcon", xn), Qn.component("slidenavNext", yn), Qn.component("slidenavPrevious", yn), Qn.component("spinner", $n), Qn.component("totop", bn), Qn.use(Xi); var nr = { mixins: [Yi], props: { date: String, clsWrapper: String }, data: { date: "", clsWrapper: ".uk-countdown-%unit%" }, computed: { date: function (t) { var e = t.date; return Date.parse(e) }, days: function (t, e) { return ze(t.clsWrapper.replace("%unit%", "days"), e) }, hours: function (t, e) { return ze(t.clsWrapper.replace("%unit%", "hours"), e) }, minutes: function (t, e) { return ze(t.clsWrapper.replace("%unit%", "minutes"), e) }, seconds: function (t, e) { return ze(t.clsWrapper.replace("%unit%", "seconds"), e) }, units: function () { var e = this; return ["days", "hours", "minutes", "seconds"].filter(function (t) { return e[t] }) } }, connected: function () { this.start() }, disconnected: function () { var e = this; this.stop(), this.units.forEach(function (t) { return Jt(e[t]) }) }, events: [{ name: "visibilitychange", el: document, handler: function () { document.hidden ? this.stop() : this.start() } }], update: { write: function () { var t, e, n = this, r = (t = this.date, { total: e = t - Date.now(), seconds: e / 1e3 % 60, minutes: e / 1e3 / 60 % 60, hours: e / 1e3 / 60 / 60 % 24, days: e / 1e3 / 60 / 60 / 24 }); r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) { var e = String(Math.floor(r[t])); e = e.length < 2 ? "0" + e : e; var i = n[t]; i.textContent !== e && ((e = e.split("")).length !== i.children.length && Kt(i, e.map(function () { return "<span></span>" }).join("")), e.forEach(function (t, e) { return i.children[e].textContent = t })) }) } }, methods: { start: function () { var t = this; this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function () { return t.$emit() }, 1e3)) }, stop: function () { this.timer && (clearInterval(this.timer), this.timer = null) } } }; var rr, or = "uk-animation-target", sr = { props: { animation: Number }, data: { animation: 150 }, computed: { target: function () { return this.$el } }, methods: { animate: function (t) { var n = this; rr || (rr = Gt(document.head, "<style>").sheet).insertRule("." + or + " > * {\n                    margin-top: 0 !important;\n                    transform: none !important;\n                }", 0); var r = j(this.target.children), o = r.map(function (t) { return ar(t, !0) }), e = Ye(this.target), i = window.pageYOffset; t(), _e.cancel(this.target), r.forEach(_e.cancel), lr(this.target), this.$update(this.target), pi.flush(); var s = Ye(this.target), a = (r = r.concat(j(this.target.children).filter(function (t) { return !b(r, t) }))).map(function (t, e) { return !!(t.parentNode && e in o) && (o[e] ? kt(t) ? hr(t) : { opacity: 0 } : { opacity: kt(t) ? 1 : 0 }) }); return o = a.map(function (t, e) { var i = r[e].parentNode === n.target && (o[e] || ar(r[e])); if (i) if (t) { if (!("opacity" in t)) { i.opacity % 1 ? t.opacity = 1 : delete i.opacity } } else delete i.opacity; return i }), he(this.target, or), r.forEach(function (t, e) { return o[e] && ye(t, o[e]) }), ye(this.target, "height", e), ti(window, i), Pt.all(r.map(function (t, e) { return o[e] && a[e] ? _e.start(t, a[e], n.animation, "ease") : Pt.resolve() }).concat(_e.start(this.target, { height: s }, this.animation, "ease"))).then(function () { r.forEach(function (t, e) { return ye(t, { display: 0 === a[e].opacity ? "none" : "", zIndex: "" }) }), lr(n.target), n.$update(n.target), pi.flush() }, X) } } }; function ar(t, e) { var i = ye(t, "zIndex"); return !!kt(t) && Y({ display: "", opacity: e ? ye(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: "auto" === i ? Ut(t) : i }, hr(t)) } function lr(t) { ye(t.children, { height: "", left: "", opacity: "", pointerEvents: "", position: "", top: "", width: "" }), ce(t, or), ye(t, "height", "") } function hr(t) { var e = t.getBoundingClientRect(), i = e.height, n = e.width, r = Ve(t), o = r.top, s = r.left; return { top: o += P(ye(t, "marginTop")), left: s, height: i, width: n } } var cr = { mixins: [sr], args: "target", props: { target: Boolean, selActive: Boolean }, data: { target: null, selActive: !1, attrItem: "uk-filter-control", cls: "uk-active", animation: 250 }, computed: { toggles: function (t, e) { t.attrItem; return Pe("[" + this.attrItem + "],[data-" + this.attrItem + "]", e) }, target: function (t, e) { return ze(t.target, e) } }, events: [{ name: "click", delegate: function () { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function (t) { t.preventDefault(), this.apply(t.current) } }], connected: function () { var e = this; if (!1 !== this.selActive) { var i = Pe(this.selActive, this.$el); this.toggles.forEach(function (t) { return pe(t, e.cls, b(i, t)) }) } }, update: function (t) { var e = t.toggles, i = t.children; fr(e, this.toggles, !1) && fr(i, this.target.children, !1) || (t.toggles = this.toggles, t.children = this.target.children, this.setState(this.getState(), !1)) }, methods: { apply: function (t) { this.setState(dr(t, this.attrItem, this.getState())) }, getState: function () { var i = this; return this.toggles.filter(function (t) { return fe(t, i.cls) }).reduce(function (t, e) { return dr(e, i.attrItem, t) }, { filter: { "": "" }, sort: [] }) }, setState: function (h, t) { var c = this; void 0 === t && (t = !0), h = Y({ filter: { "": "" }, sort: [] }, h), _t(this.$el, "beforeFilter", [this, h]); var u = j(this.target.children); this.toggles.forEach(function (t) { return pe(t, c.cls, function (t, e, i) { var n = i.filter, r = i.sort, o = r[0], s = r[1], a = ur(t, e), l = a.filter, h = a.group; void 0 === h && (h = ""); var c = a.sort, u = a.order; void 0 === u && (u = "asc"); return Boolean((l || D(c)) && h in n && (l === n[h] || D(l) && !n[h]) || o && c && o === c && s === u) }(t, c.attrItem, h)) }); var e = function () { var t, e, i = (t = h.filter, e = "", R(t, function (t) { return e += t || "" }), e); u.forEach(function (t) { return ye(t, "display", i && !pt(t, i) ? "none" : "") }); var n, r, o = h.sort, s = o[0], a = o[1]; if (s) { var l = (n = s, r = a, j(u).sort(function (t, e) { return it(t, n).localeCompare(it(e, n), void 0, { numeric: !0 }) * ("asc" === r || -1) })); fr(l, u) || l.forEach(function (t) { return Gt(c.target, t) }) } }; t ? this.animate(e).then(function () { return _t(c.$el, "afterFilter", [c]) }) : (e(), _t(this.$el, "afterFilter", [this])) } } }; function ur(t, e) { return Ii(it(t, e), ["filter"]) } function dr(t, s, a) { return j(t).forEach(function (t) { var e = ur(t, s), i = e.filter, n = e.group, r = e.sort, o = e.order; void 0 === o && (o = "asc"), (i || D(r)) && (n ? (delete a.filter[""], a.filter[n] = i) : a.filter = { "": i }), D(r) || (a.sort = [r, o]) }), a } function fr(t, i, n) { return void 0 === n && (n = !0), t = j(t), i = j(i), t.length === i.length && t.every(function (t, e) { return n ? t === i[e] : ~i.indexOf(t) }) } var pr = { slide: { show: function (t) { return [{ transform: gr(-100 * t) }, { transform: gr() }] }, percent: function (t) { return mr(t) }, translate: function (t, e) { return [{ transform: gr(-100 * e * t) }, { transform: gr(100 * e * (1 - t)) }] } } }; function mr(t) { return Math.abs(ye(t, "transform").split(",")[4] / t.offsetWidth) || 0 } function gr(t, e) { return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")" } function vr(t) { return "scale3d(" + t + ", " + t + ", 1)" } var wr = Y({}, pr, { fade: { show: function () { return [{ opacity: 0 }, { opacity: 1 }] }, percent: function (t) { return 1 - ye(t, "opacity") }, translate: function (t) { return [{ opacity: 1 - t }, { opacity: t }] } }, scale: { show: function () { return [{ opacity: 0, transform: vr(.8) }, { opacity: 1, transform: vr(1) }] }, percent: function (t) { return 1 - ye(t, "opacity") }, translate: function (t) { return [{ opacity: 1 - t, transform: vr(1 - .2 * t) }, { opacity: t, transform: vr(.8 + .2 * t) }] } } }); function br(t, e, i) { _t(t, Nt(e, !1, !1, i)) } var yr = { mixins: [{ props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 }, connected: function () { this.startAutoplay() }, disconnected: function () { this.stopAutoplay() }, events: [{ name: "visibilitychange", el: document, handler: function () { document.hidden ? this.stopAutoplay() : this.startAutoplay() } }, { name: hi, handler: "stopAutoplay" }, { name: "mouseenter", filter: function () { return this.autoplay }, handler: function () { this.isHovering = !0 } }, { name: "mouseleave", filter: function () { return this.autoplay }, handler: function () { this.isHovering = !1 } }], methods: { startAutoplay: function () { var t = this; this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function () { return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next") }, this.autoplayInterval)) }, stopAutoplay: function () { this.interval && clearInterval(this.interval) } } }, { data: { threshold: 10, preventCatch: !1 }, init: function () { var n = this;["start", "move", "end"].forEach(function (t) { var i = n[t]; n[t] = function (t) { var e = zi(t).x * (oi ? -1 : 1); n.prevPos = e !== n.pos ? n.pos : n.prevPos, n.pos = e, i(t) } }) }, events: [{ name: hi, delegate: function () { return this.slidesSelector }, handler: function (t) { var e; !Bi(t) && (!(e = t.target).children.length && e.childNodes.length) || 0 < t.button || this.length < 2 || this.preventCatch || this.start(t) } }, { name: "touchmove", passive: !1, handler: "move", delegate: function () { return this.slidesSelector } }, { name: "dragstart", handler: function (t) { t.preventDefault() } }], methods: { start: function () { var t = this; this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index; var e = Et(document, ci.replace(" touchmove", ""), this.move, { passive: !1 }); this.unbindMove = function () { e(), t.unbindMove = null }, Et(window, "scroll", this.unbindMove), Et(document, ui, this.end, !0) }, move: function (t) { var e = this; if (this.unbindMove) { var i = this.pos - this.drag; if (!(0 === i || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) { t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1; for (var n = this.slides, r = this.prevIndex, o = Math.abs(i), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth; s !== r && a < o;)e.drag -= a * e.dir, r = s, o -= a, s = e.getIndex(r + e.dir, r), a = e._getDistance(r, s) || n[r].offsetWidth; this.percent = o / a; var l, h = n[r], c = n[s], u = this.index !== s, d = r === s;[this.index, this.prevIndex].filter(function (t) { return !b([s, r], t) }).forEach(function (t) { _t(n[t], "itemhidden", [e]), d && (l = !0, e.prevIndex = r) }), (this.index === r && this.prevIndex !== r || l) && _t(n[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, !d && _t(h, "beforeitemhide", [this]), _t(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), h, !d && c), u && (!d && _t(h, "itemhide", [this]), _t(c, "itemshow", [this])) } } }, end: function () { if (Ct(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Ct(document, ui, this.end, !0), this.dragging) { if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null; else { var t = (oi ? this.dir * (oi ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos; this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0) } zt() } this.drag = this.percent = null } } }, { data: { selNav: !1 }, computed: { nav: function (t, e) { return ze(t.selNav, e) }, navItemSelector: function (t) { var e = t.attrItem; return "[" + e + "],[data-" + e + "]" }, navItems: function (t, e) { return Pe(this.navItemSelector, e) } }, update: [{ write: function () { var i = this; this.nav && this.length !== this.nav.children.length && Kt(this.nav, this.slides.map(function (t, e) { return "<li " + i.attrItem + '="' + e + '"><a href="#"></a></li>' }).join("")), pe(Pe(this.navItemSelector, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav() }, events: ["load", "resize"] }], events: [{ name: "click", delegate: function () { return this.navItemSelector }, handler: function (t) { t.preventDefault(), t.current.blur(), this.show(it(t.current, this.attrItem)) } }, { name: "itemshow", handler: "updateNav" }], methods: { updateNav: function () { var i = this, n = this.getValidIndex(); this.navItems.forEach(function (t) { var e = it(t, i.attrItem); pe(t, i.clsActive, z(e) === n), pe(t, "uk-invisible", i.finite && ("previous" === e && 0 === n || "next" === e && n >= i.maxIndex)) }) } } }], props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number }, data: function () { return { easing: "ease", finite: !1, velocity: 1, index: 0, stack: [], percent: 0, clsActive: "uk-active", clsActivated: !1, Transitioner: !1, transitionOptions: {} } }, computed: { duration: function (t, e) { var i = t.velocity; return xr(e.offsetWidth / i) }, length: function () { return this.slides.length }, list: function (t, e) { return ze(t.selList, e) }, maxIndex: function () { return this.length - 1 }, slidesSelector: function (t) { return t.selList + " > *" }, slides: function () { return j(this.list.children) } }, events: { itemshown: function () { this.$update(this.list) } }, methods: { show: function (t, e) { var i = this; if (void 0 === e && (e = !1), !this.dragging && this.length) { var n = this.stack, r = e ? 0 : n.length, o = function () { n.splice(r, 1), n.length && i.show(n.shift(), !0) }; if (n[e ? "unshift" : "push"](t), !e && 1 < n.length) 2 === n.length && this._transitioner.forward(Math.min(this.duration, 200)); else { var s = this.index, a = fe(this.slides, this.clsActive) && this.slides[s], l = this.getIndex(t, this.index), h = this.slides[l]; if (a !== h) { var c, u; if (this.dir = (u = s, "next" === (c = t) ? 1 : "previous" === c ? -1 : c < u ? -1 : 1), this.prevIndex = s, this.index = l, a && _t(a, "beforeitemhide", [this]), !_t(h, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o(); var d = this._show(a, h, e).then(function () { return a && _t(a, "itemhidden", [i]), _t(h, "itemshown", [i]), new Pt(function (t) { pi.write(function () { n.shift(), n.length ? i.show(n.shift(), !0) : i._transitioner = null, t() }) }) }); return a && _t(a, "itemhide", [this]), _t(h, "itemshow", [this]), d } o() } } }, getIndex: function (t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.index), U(Xt(t, this.slides, e, this.finite), 0, this.maxIndex) }, getValidIndex: function (t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e) }, _show: function (t, e, i) { if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({ easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing }, this.transitionOptions)), !i && !t) return this._transitioner.translate(1), Pt.resolve(); var n = this.stack.length; return this._transitioner[1 < n ? "forward" : "show"](1 < n ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent) }, _getDistance: function (t, e) { return new this._getTransitioner(t, t !== e && e).getDistance() }, _translate: function (t, e, i) { void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index); var n = this._getTransitioner(e !== i && e, i); return n.translate(t), n }, _getTransitioner: function (t, e, i, n) { return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(O(t) ? this.slides[t] : t, O(e) ? this.slides[e] : e, i * (oi ? -1 : 1), n) } } }; function xr(t) { return .5 * t + 300 } var kr = { mixins: [yr], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: pr, Transitioner: function (o, s, a, t) { var e = t.animation, l = t.easing, i = e.percent, n = e.translate, r = e.show; void 0 === r && (r = X); var h = r(a), c = new Ht; return { dir: a, show: function (t, e, i) { var n = this; void 0 === e && (e = 0); var r = i ? "linear" : l; return t -= Math.round(t * U(e, -1, 1)), this.translate(e), br(s, "itemin", { percent: e, duration: t, timing: r, dir: a }), br(o, "itemout", { percent: 1 - e, duration: t, timing: r, dir: a }), Pt.all([_e.start(s, h[1], t, r), _e.start(o, h[0], t, r)]).then(function () { n.reset(), c.resolve() }, X), c.promise }, stop: function () { return _e.stop([s, o]) }, cancel: function () { _e.cancel([s, o]) }, reset: function () { for (var t in h[0]) ye([s, o], t, "") }, forward: function (t, e) { return void 0 === e && (e = this.percent()), _e.cancel([s, o]), this.show(t, e, !0) }, translate: function (t) { this.reset(); var e = n(t, a); ye(s, e[1]), ye(o, e[0]), br(s, "itemtranslatein", { percent: t, dir: a }), br(o, "itemtranslateout", { percent: 1 - t, dir: a }) }, percent: function () { return i(o || s, s, a) }, getDistance: function () { return o.offsetWidth } } } }, computed: { animation: function (t) { var e = t.animation, i = t.Animations; return Y(e in i ? i[e] : i.slide, { name: e }) }, transitionOptions: function () { return { animation: this.animation } } }, events: { "itemshow itemhide itemshown itemhidden": function (t) { var e = t.target; this.$update(e) }, itemshow: function () { O(this.prevIndex) && pi.flush() }, beforeitemshow: function (t) { he(t.target, this.clsActive) }, itemshown: function (t) { he(t.target, this.clsActivated) }, itemhidden: function (t) { ce(t.target, this.clsActive, this.clsActivated) } } }, $r = { mixins: [Ln, jn, Ri, kr], functional: !0, props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String }, data: function () { return { preload: 1, videoAutoplay: !1, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", pauseOnHover: !1, velocity: 2, Animations: wr, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' } }, created: function () { var t = this; this.$mount(Gt(this.container, this.template)), this.caption = ze(".uk-lightbox-caption", this.$el), this.items.forEach(function () { return Gt(t.list, "<li></li>") }) }, events: [{ name: ci + " " + hi + " keydown", handler: "showControls" }, { name: "click", self: !0, delegate: function () { return this.slidesSelector }, handler: function (t) { t.preventDefault(), this.hide() } }, { name: "shown", self: !0, handler: "showControls" }, { name: "hide", self: !0, handler: function () { this.hideControls(), ce(this.slides, this.clsActive), _e.stop(this.slides) } }, { name: "keyup", el: document, handler: function (t) { if (this.isToggled(this.$el)) switch (t.keyCode) { case 37: this.show("previous"); break; case 39: this.show("next") } } }, { name: "beforeitemshow", handler: function (t) { this.isToggled() || (this.preventCatch = !0, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = wr.scale, ce(t.target, this.clsActive), this.stack.splice(1, 0, this.index)) } }, { name: "itemshow", handler: function (t) { var e = Ut(t.target), i = this.getItem(e).caption; ye(this.caption, "display", i ? "" : "none"), Kt(this.caption, i); for (var n = 0; n <= this.preload; n++)this.loadItem(this.getIndex(e + n)), this.loadItem(this.getIndex(e - n)) } }, { name: "itemshown", handler: function () { this.preventCatch = !1 } }, { name: "itemload", handler: function (t, r) { var o, s = this, e = r.source, i = r.type, n = r.alt; if (this.setItem(r, "<span uk-spinner></span>"), e) if ("image" === i || e.match(/\.(jp(e)?g|png|gif|svg)($|\?)/i)) Yt(e).then(function (t) { return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (n || "") + '">') }, function () { return s.setError(r) }); else if ("video" === i || e.match(/\.(mp4|webm|ogv)($|\?)/i)) { var a = ze("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>'); Z(a, "src", e), Et(a, "error", function () { return s.setError(r) }), Et(a, "loadedmetadata", function () { Z(a, { width: a.videoWidth, height: a.videoHeight }), s.setItem(r, a) }) } else if ("iframe" === i || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>'); else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) { var l = o[2], h = function (t, e) { return void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Ir("https://www.youtube" + (o[1] || "") + ".com/embed/" + l, t, e, s.videoAutoplay)) }; Yt("https://img.youtube.com/vi/" + l + "/maxresdefault.jpg").then(function (t) { var e = t.width, i = t.height; 120 === e && 90 === i ? Yt("https://img.youtube.com/vi/" + l + "/0.jpg").then(function (t) { var e = t.width, i = t.height; return h(e, i) }, h) : h(e, i) }, h) } else (o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && Vt("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), { responseType: "json", withCredentials: !1 }).then(function (t) { var e = t.response, i = e.height, n = e.width; return s.setItem(r, Ir("https://player.vimeo.com/video/" + o[2], n, i, s.videoAutoplay)) }, function () { return s.setError(r) }) } }], methods: { loadItem: function (t) { void 0 === t && (t = this.index); var e = this.getItem(t); e.content || _t(this.$el, "itemload", [e]) }, getItem: function (t) { return void 0 === t && (t = this.index), this.items[t] || {} }, setItem: function (t, e) { Y(t, { content: e }); var i = Kt(this.slides[this.items.indexOf(t)], e); _t(this.$el, "itemloaded", [this, i]), this.$update(i) }, setError: function (t) { this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>') }, showControls: function () { clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), he(this.$el, "uk-active", "uk-transition-active") }, hideControls: function () { ce(this.$el, "uk-active", "uk-transition-active") } } }; function Ir(t, e, i, n) { return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + n + '" uk-responsive></iframe>' } var Sr, Tr = { install: function (t, e) { t.lightboxPanel || t.component("lightboxPanel", $r); Y(e.props, t.component("lightboxPanel").options.props) }, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: function (t, e) { return Pe(t.toggle, e) } }, disconnected: function () { this._destroy() }, events: [{ name: "click", delegate: function () { return this.toggle + ":not(.uk-disabled)" }, handler: function (t) { t.preventDefault(), t.current.blur(), this.show(Ut(this.toggles, t.current)) } }], update: function (t) { var e, i; (t.toggles = this.panel && t.toggles || this.toggles, this.panel && (e = t.toggles, i = this.toggles, e.length !== i.length || !e.every(function (t, e) { return t === i[e] }))) && (t.toggles = this.toggles, this._destroy(), this._init()) }, methods: { _init: function () { return this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, { items: this.toggles.reduce(function (t, i) { return t.push(["href", "caption", "type", "poster", "alt"].reduce(function (t, e) { return t["href" === e ? "source" : e] = it(i, e), t }, {})), t }, []) })) }, _destroy: function () { this.panel && (this.panel.$destroy(!0), this.panel = null) }, show: function (t) { return this.panel || this._init(), this.panel.show(t) }, hide: function () { return this.panel && this.panel.hide() } } }; var Er = {}, Cr = { functional: !0, args: ["message", "status"], data: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: function (r) { r.notification.closeAll = function (i, n) { le(document.body, function (t) { var e = r.getComponent(t, "notification"); !e || i && i !== e.group || e.close(n) }) } }, created: function () { Er[this.pos] || (Er[this.pos] = Gt(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>')); var t = ye(Er[this.pos], "display", "block"); this.$mount(Gt(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>")) }, ready: function () { var t = this, e = P(ye(this.$el, "marginBottom")); _e.start(ye(this.$el, { opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0 }), { opacity: 1, marginTop: 0, marginBottom: e }).then(function () { t.timeout && (t.timer = setTimeout(t.close, t.timeout)) }) }, events: (Sr = { click: function (t) { gt(t.target, 'a[href="#"]') && t.preventDefault(), this.close() } }, Sr[di] = function () { this.timer && clearTimeout(this.timer) }, Sr[fi] = function () { this.timeout && (this.timer = setTimeout(this.close, this.timeout)) }, Sr), methods: { close: function (t) { var e = this, i = function () { _t(e.$el, "close", [e]), ee(e.$el), Er[e.pos].children.length || ye(Er[e.pos], "display", "none") }; this.timer && clearTimeout(this.timer), t ? i() : _e.start(this.$el, { opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0 }).then(i) } } }; var Ar = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"], _r = { props: Ar.reduce(function (t, e) { return t[e] = "list", t }, { media: "media" }), data: Ar.reduce(function (t, e) { return t[e] = void 0, t }, { media: !1 }), computed: { props: function (f, p) { var m = this; return Ar.reduce(function (t, e) { if (D(f[e])) return t; var i, n, r, o = e.match(/color/i), s = o || "opacity" === e, a = f[e].slice(0); s && ye(p, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? ye(p, e) : 0) || 0); var l = b(a.join(""), "%") ? "%" : "px"; if (o) { var h = p.style.color; a = a.map(function (t) { return ye(ye(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (t) { return P(t) }) }), p.style.color = h } else a = a.map(P); if (e.match(/^bg/)) if (ye(p, "background-position-" + e[2], ""), n = ye(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers) { var c = Math.min.apply(Math, a), u = Math.max.apply(Math, a), d = a.indexOf(c) < a.indexOf(u); r = u - c, a = a.map(function (t) { return t - (d ? c : u) }), i = (d ? -r : 0) + "px" } else i = n; return t[e] = { steps: a, unit: l, pos: i, bgPos: n, diff: r }, t }, {}) }, bgProps: function () { var e = this; return ["bgx", "bgy"].filter(function (t) { return t in e.props }) }, covers: function (t, e) { return n = (i = e).style.backgroundSize, r = "cover" === ye(ye(i, "backgroundSize", ""), "backgroundSize"), i.style.backgroundSize = n, r; var i, n, r } }, disconnected: function () { delete this._image }, update: [{ read: function (e) { var i = this; if (e.active = !this.media || window.matchMedia(this.media).matches, e.image && (e.image.dimEl = { width: this.$el.offsetWidth, height: this.$el.offsetHeight }), !("image" in e) && this.covers && this.bgProps.length) { var t = ye(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1"); t && (e.image = !1, Yt(t).then(function (t) { e.image = { width: t.naturalWidth, height: t.naturalHeight }, i.$emit() })) } }, write: function (t) { var l = this, h = t.image, e = t.active; if (h) if (e) { var c = h.dimEl, u = G.cover(h, c); this.bgProps.forEach(function (t) { var e = l.props[t], i = e.diff, n = e.bgPos, r = e.steps, o = "bgy" === t ? "height" : "width", s = u[o] - c[o]; if (n.match(/%$|0px/)) { if (s < i) c[o] = u[o] + i - s; else if (i < s) { var a = parseFloat(n); a && (l.props[t].steps = r.map(function (t) { return t - (s - i) / (100 / a) })) } u = G.cover(h, c) } }), ye(this.$el, { backgroundSize: u.width + "px " + u.height + "px", backgroundRepeat: "no-repeat" }) } else ye(this.$el, { backgroundSize: "", backgroundRepeat: "" }) }, events: ["load", "resize"] }], methods: { reset: function () { var i = this; R(this.getCss(0), function (t, e) { return ye(i.$el, e, "") }) }, getCss: function (p) { var m = this.props, g = !1; return Object.keys(m).reduce(function (t, e) { var i = m[e], n = i.steps, r = i.unit, o = i.pos, s = Or(n, p); switch (e) { case "x": case "y": if (g) break; var a = ["x", "y"].map(function (t) { return e === t ? P(s).toFixed(0) + r : m[t] ? Or(m[t].steps, p, 0) + m[t].unit : 0 }), l = a[0], h = a[1]; g = t.transform += " translate3d(" + l + ", " + h + ", 0)"; break; case "rotate": t.transform += " rotate(" + s + "deg)"; break; case "scale": t.transform += " scale(" + s + ")"; break; case "bgy": case "bgx": t["background-position-" + e[2]] = "calc(" + o + " + " + (s + r) + ")"; break; case "color": case "backgroundColor": case "borderColor": var c = Nr(n, p), u = c[0], d = c[1], f = c[2]; t[e] = "rgba(" + u.map(function (t, e) { return t += f * (d[e] - t), 3 === e ? P(t) : parseInt(t, 10) }).join(",") + ")"; break; case "blur": t.filter += " blur(" + s + "px)"; break; case "hue": t.filter += " hue-rotate(" + s + "deg)"; break; case "fopacity": t.filter += " opacity(" + s + "%)"; break; case "grayscale": case "invert": case "saturate": case "sepia": t.filter += " " + e + "(" + s + "%)"; break; default: t[e] = s }return t }, { transform: "", filter: "" }) } } }; function Nr(t, e) { var i = t.length - 1, n = Math.min(Math.floor(i * e), i - 1), r = t.slice(n, n + 2); return r.push(1 === e ? 1 : e % (1 / i) * i), r } function Or(t, e, i) { void 0 === i && (i = 2); var n = Nr(t, e), r = n[0], o = n[1], s = n[2]; return (O(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(i) } var Mr = { mixins: [_r], props: { target: String, viewport: Number, easing: Number }, data: { target: !1, viewport: 1, easing: 1 }, computed: { target: function (t, e) { var i = t.target; return i && nt(i, e) || e } }, update: [{ read: function (t) { var e, i; return { prev: t.percent, percent: (e = Qe(this.target) / (this.viewport || 1), i = this.easing, U(e * (1 - (i - i * e)))) } }, write: function (t, e) { var i = t.prev, n = t.percent, r = t.active; "scroll" !== e.type && (i = !1), r ? i !== n && ye(this.$el, this.getCss(n)) : this.reset() }, events: ["scroll", "load", "resize"] }] }; var Dr = { update: [{ write: function () { if (!this.stack.length && !this.dragging) { var t = this.getValidIndex(); delete this.index, ce(this.slides, this.clsActive, this.clsActivated), this.show(t) } }, events: ["load", "resize"] }] }; function Br(t, e, i) { var n, r = Hr(t, e); return i ? r - (n = t, Lr(e).width / 2 - Lr(n).width / 2) : Math.min(r, zr(e)) } function zr(t) { return Math.max(0, Pr(t) - Lr(t).width) } function Pr(t) { return Wr(t).reduce(function (t, e) { return Lr(e).width + t }, 0) } function Hr(t, e) { return (Ve(t).left + (oi ? Lr(t).width - Lr(e).width : 0)) * (oi ? -1 : 1) } function Lr(t) { return t.getBoundingClientRect() } function jr(t, e, i) { _t(t, Nt(e, !1, !1, i)) } function Wr(t) { return j(t.children) } var Fr = { mixins: [Yi, yr, Dr], props: { center: Boolean, sets: Boolean }, data: { center: !1, sets: !1, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", Transitioner: function (r, n, o, t) { var e = t.center, s = t.easing, a = t.list, l = new Ht, i = r ? Br(r, a, e) : Br(n, a, e) + Lr(n).width * o, h = n ? Br(n, a, e) : i + Lr(r).width * o * (oi ? -1 : 1); return { dir: o, show: function (t, e, i) { void 0 === e && (e = 0); var n = i ? "linear" : s; return t -= Math.round(t * U(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : U(e, 0, 1), jr(this.getItemIn(), "itemin", { percent: e, duration: t, timing: n, dir: o }), r && jr(this.getItemIn(!0), "itemout", { percent: 1 - e, duration: t, timing: n, dir: o }), _e.start(a, { transform: gr(-h * (oi ? -1 : 1), "px") }, t, n).then(l.resolve, X), l.promise }, stop: function () { return _e.stop(a) }, cancel: function () { _e.cancel(a) }, reset: function () { ye(a, "transform", "") }, forward: function (t, e) { return void 0 === e && (e = this.percent()), _e.cancel(a), this.show(t, e, !0) }, translate: function (t) { var e = this.getDistance() * o * (oi ? -1 : 1); ye(a, "transform", gr(U(e - e * t - h, -Pr(a), Lr(a).width) * (oi ? -1 : 1), "px")), this.updateTranslates(), r && (t = U(t, -1, 1), jr(this.getItemIn(), "itemtranslatein", { percent: t, dir: o }), jr(this.getItemIn(!0), "itemtranslateout", { percent: 1 - t, dir: o })) }, percent: function () { return Math.abs((ye(a, "transform").split(",")[4] * (oi ? -1 : 1) + i) / (h - i)) }, getDistance: function () { return Math.abs(h - i) }, getItemIn: function (t) { void 0 === t && (t = !1); var e = this.getActives(), i = q(Wr(a), "offsetLeft"), n = Ut(i, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]); return ~n && i[n + (r && !t ? o : 0)] }, getActives: function () { var i = Br(r || n, a, e); return q(Wr(a).filter(function (t) { var e = Hr(t, a); return i <= e && e + Lr(t).width <= Lr(a).width + i }), "offsetLeft") }, updateTranslates: function () { var i = this.getActives(); Wr(a).forEach(function (t) { var e = b(i, t); jr(t, "itemtranslate" + (e ? "in" : "out"), { percent: e ? 1 : 0, dir: t.offsetLeft <= n.offsetLeft ? 1 : -1 }) }) } } } }, computed: { avgWidth: function () { return Pr(this.list) / this.length }, finite: function (t) { return t.finite || Pr(this.list) < Lr(this.list).width + Wr(this.list).reduce(function (t, e) { return Math.max(t, Lr(e).width) }, 0) + this.center }, maxIndex: function () { if (!this.finite || this.center && !this.sets) return this.length - 1; if (this.center) return this.sets[this.sets.length - 1]; ye(this.slides, "order", ""); for (var t = zr(this.list), e = this.length; e--;)if (Hr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1); return 0 }, sets: function (t) { var o = this, e = t.sets, s = Lr(this.list).width / (this.center ? 2 : 1), a = 0, l = s, h = 0; return (e = e && this.slides.reduce(function (t, e, i) { var n = Lr(e).width; if (a < h + n && (!o.center && i > o.maxIndex && (i = o.maxIndex), !b(t, i))) { var r = o.slides[i + 1]; o.center && r && n < l - Lr(r).width / 2 ? l -= n : (l = s, t.push(i), a = h + s + (o.center ? n / 2 : 0)) } return h += n, t }, [])) && e.length && e }, transitionOptions: function () { return { center: this.center, list: this.list } } }, connected: function () { pe(this.$el, this.clsContainer, !ze("." + this.clsContainer, this.$el)) }, update: { write: function () { var i = this; Pe("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (t) { var e = it(t, i.attrItem); i.maxIndex && pe(t, "uk-hidden", M(e) && (i.sets && !b(i.sets, P(e)) || e > i.maxIndex)) }) }, events: ["load", "resize"] }, events: { beforeitemshow: function (t) { !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex()); var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)); if (!this.dragging && 1 < e) { for (var i = 0; i < e; i++)this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous"); t.preventDefault() } else this.duration = xr(this.avgWidth / this.velocity) * (Lr(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder() }, itemshow: function () { !D(this.prevIndex) && he(this._getTransitioner().getItemIn(), this.clsActive) }, itemshown: function () { var e = this, i = this._getTransitioner(this.index).getActives(); this.slides.forEach(function (t) { return pe(t, e.clsActive, b(i, t)) }), (!this.sets || b(this.sets, P(this.index))) && this.slides.forEach(function (t) { return pe(t, e.clsActivated, b(i, t)) }) } }, methods: { reorder: function () { var i = this; if (ye(this.slides, "order", ""), !this.finite) { var n = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index; if (this.slides.forEach(function (t, e) { return ye(t, "order", 0 < i.dir && e < n ? 1 : i.dir < 0 && e >= i.index ? -1 : "") }), this.center) for (var t = this.slides[n], e = Lr(this.list).width / 2 - Lr(t).width / 2, r = 0; 0 < e;) { var o = i.getIndex(--r + n, n), s = i.slides[o]; ye(s, "order", n < o ? -2 : -1), e -= Lr(s).width } } }, getValidIndex: function (t, e) { var i; if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t; do { if (b(this.sets, t)) return t; i = t, t = this.getIndex(t + this.dir, e) } while (t !== i); return t } } }, Vr = { mixins: [_r], data: { selItem: "!li" }, computed: { item: function (t, e) { return nt(t.selItem, e) } }, events: [{ name: "itemshown", self: !0, el: function () { return this.item }, handler: function () { ye(this.$el, this.getCss(.5)) } }, { name: "itemin itemout", self: !0, el: function () { return this.item }, handler: function (t) { var e = t.type, i = t.detail, n = i.percent, r = i.duration, o = i.timing, s = i.dir; _e.cancel(this.$el), ye(this.$el, this.getCss(Rr(e, s, n))), _e.start(this.$el, this.getCss(Yr(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(X) } }, { name: "transitioncanceled transitionend", self: !0, el: function () { return this.item }, handler: function () { _e.cancel(this.$el) } }, { name: "itemtranslatein itemtranslateout", self: !0, el: function () { return this.item }, handler: function (t) { var e = t.type, i = t.detail, n = i.percent, r = i.dir; _e.cancel(this.$el), ye(this.$el, this.getCss(Rr(e, r, n))) } }] }; function Yr(t) { return u(t, "in") } function Rr(t, e, i) { return i /= 2, Yr(t) ? e < 0 ? 1 - i : i : e < 0 ? i : 1 - i } var qr, Ur, Xr = Y({}, pr, { fade: { show: function () { return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }] }, percent: function (t) { return 1 - ye(t, "opacity") }, translate: function (t) { return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }] } }, scale: { show: function () { return [{ opacity: 0, transform: vr(1.5), zIndex: 0 }, { zIndex: -1 }] }, percent: function (t) { return 1 - ye(t, "opacity") }, translate: function (t) { return [{ opacity: 1 - t, transform: vr(1 + .5 * t), zIndex: 0 }, { zIndex: -1 }] } }, pull: { show: function (t) { return t < 0 ? [{ transform: gr(30), zIndex: -1 }, { transform: gr(), zIndex: 0 }] : [{ transform: gr(-100), zIndex: 0 }, { transform: gr(), zIndex: -1 }] }, percent: function (t, e, i) { return i < 0 ? 1 - mr(e) : mr(t) }, translate: function (t, e) { return e < 0 ? [{ transform: gr(30 * t), zIndex: -1 }, { transform: gr(-100 * (1 - t)), zIndex: 0 }] : [{ transform: gr(100 * -t), zIndex: 0 }, { transform: gr(30 * (1 - t)), zIndex: -1 }] } }, push: { show: function (t) { return t < 0 ? [{ transform: gr(100), zIndex: 0 }, { transform: gr(), zIndex: -1 }] : [{ transform: gr(-30), zIndex: -1 }, { transform: gr(), zIndex: 0 }] }, percent: function (t, e, i) { return 0 < i ? 1 - mr(e) : mr(t) }, translate: function (t, e) { return e < 0 ? [{ transform: gr(100 * t), zIndex: 0 }, { transform: gr(-30 * (1 - t)), zIndex: -1 }] : [{ transform: gr(-30 * t), zIndex: -1 }, { transform: gr(100 * (1 - t)), zIndex: 0 }] } } }), Jr = { mixins: [Yi, kr, Dr], props: { ratio: String, minHeight: Boolean, maxHeight: Boolean }, data: { ratio: "16:9", minHeight: !1, maxHeight: !1, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: Xr }, update: { read: function () { var t = this.ratio.split(":").map(Number), e = t[0], i = t[1]; return i = i * this.$el.offsetWidth / e, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), { height: i } }, write: function (t) { var e = t.height; Ye(this.list, Math.floor(e)) }, events: ["load", "resize"] } }, Kr = { mixins: [Yi, sr], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: !1, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: !1 }, init: function () { var o = this;["init", "start", "move", "end"].forEach(function (t) { var r = o[t]; o[t] = function (t) { o.scrollY = window.pageYOffset; var e = zi(t), i = e.x, n = e.y; o.pos = { x: i, y: n }, r(t) } }) }, events: (qr = {}, qr[hi] = "init", qr), update: { write: function () { if (this.clsEmpty && pe(this.$el, this.clsEmpty, !this.$el.children.length), ye(this.handle ? Pe(this.handle, this.$el) : this.$el.children, "touchAction", "none"), this.drag) { We(this.drag, { top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left }); var t, e = We(this.drag).top, i = e + this.drag.offsetHeight; 0 < e && e < this.scrollY ? t = this.scrollY - 5 : i < Ye(document) && i > Ye(window) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function () { return ti(window, t) }, 5) } } }, methods: { init: function (t) { var e = t.target, i = t.button, n = t.defaultPrevented, r = j(this.$el.children).filter(function (t) { return Tt(e, t) })[0]; !r || It(t.target) || this.handle && !Tt(e, this.handle) || 0 < i || Tt(e, "." + this.clsNoDrag) || n || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = Y({ target: e, index: Ut(r) }, this.pos), Et(document, ci, this.move), Et(document, ui, this.end), Et(window, "scroll", this.scroll), this.threshold || this.start(t)) }, start: function (t) { this.drag = Gt(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), ye(this.drag, Y({ boxSizing: "border-box", width: this.placeholder.offsetWidth, height: this.placeholder.offsetHeight }, ye(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), Z(this.drag, "uk-no-boot", ""), he(this.drag, this.clsDrag, this.clsCustom), Ye(this.drag.firstElementChild, Ye(this.placeholder.firstElementChild)); var e = We(this.placeholder), i = e.left, n = e.top; Y(this.origin, { left: i - this.pos.x, top: n - this.pos.y }), he(this.placeholder, this.clsPlaceholder), he(this.$el.children, this.clsItem), he(document.documentElement, this.clsDragState), _t(this.$el, "start", [this, this.placeholder]), this.move(t) }, move: function (t) { if (this.drag) { this.$emit(); var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop), i = this.getSortable(e), n = this.getSortable(this.placeholder), r = i !== n; if (i && !Tt(e, this.placeholder) && (!r || i.group && i.group === n.group)) { if (e = i.$el === e.parentNode && e || j(i.$el.children).filter(function (t) { return Tt(e, t) })[0], r) n.remove(this.placeholder); else if (!e) return; i.insert(this.placeholder, e), b(this.touched, i) || this.touched.push(i) } } else (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t) }, scroll: function () { var t = window.pageYOffset; t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit()) }, end: function (t) { if (Ct(document, ci, this.move), Ct(document, ui, this.end), Ct(window, "scroll", this.scroll), this.drag) { zt(); var e = this.getSortable(this.placeholder); this === e ? this.origin.index !== Ut(this.placeholder) && _t(this.$el, "moved", [this, this.placeholder]) : (_t(e.$el, "added", [e, this.placeholder]), _t(this.$el, "removed", [this, this.placeholder])), _t(this.$el, "stop", [this, this.placeholder]), ee(this.drag), this.drag = null; var i = this.touched.map(function (t) { return t.clsPlaceholder + " " + t.clsItem }).join(" "); this.touched.forEach(function (t) { return ce(t.$el.children, i) }), ce(document.documentElement, this.clsDragState) } else "mouseup" !== t.type && Tt(t.target, "a[href]") && (location.href = gt(t.target, "a[href]").href) }, insert: function (i, n) { var r = this; he(this.$el.children, this.clsItem); var t = function () { var t, e; n ? !Tt(i, r.$el) || (e = n, (t = i).parentNode === e.parentNode && Ut(t) > Ut(e)) ? Zt(n, i) : Qt(n, i) : Gt(r.$el, i) }; this.animation ? this.animate(t) : t() }, remove: function (t) { Tt(t, this.$el) && (this.animation ? this.animate(function () { return ee(t) }) : ee(t)) }, getSortable: function (t) { return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode)) } } }; var Gr = [], Zr = { mixins: [Ln, Ri, Qi], args: "title", props: { delay: Number, title: String }, data: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active", clsPos: "uk-tooltip" }, beforeConnect: function () { this._hasTitle = Q(this.$el, "title"), Z(this.$el, { title: "", "aria-expanded": !1 }) }, disconnected: function () { this.hide(), Z(this.$el, { title: this._hasTitle ? this.title : null, "aria-expanded": null }) }, methods: { show: function () { var e = this; b(Gr, this) || (Gr.forEach(function (t) { return t.hide() }), Gr.push(this), this._unbind = Et(document, "click", function (t) { return !Tt(t.target, e.$el) && e.hide() }), clearTimeout(this.showTimer), this.tooltip = Gt(this.container, '<div class="' + this.clsPos + '" aria-hidden><div class="' + this.clsPos + '-inner">' + this.title + "</div></div>"), Z(this.$el, "aria-expanded", !0), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? Ge(this.dir) + "-" + this.align : this.align + "-" + Ge(this.dir), this.showTimer = setTimeout(function () { e.toggleElement(e.tooltip, !0), e.hideTimer = setInterval(function () { kt(e.$el) || e.hide() }, 150) }, this.delay)) }, hide: function () { var t = Gr.indexOf(this); !~t || pt(this.$el, "input") && this.$el === document.activeElement || (Gr.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), Z(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && ee(this.tooltip), this.tooltip = !1, this._unbind()) } }, events: (Ur = {}, Ur["focus " + di + " " + hi] = function (t) { t.type === hi && Bi(t) || this.show() }, Ur.blur = "hide", Ur[fi] = function (t) { Bi(t) || this.hide() }, Ur) }, Qr = { props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, msgInvalidMime: String, msgInvalidName: String, msgInvalidSize: String, multiple: Boolean, name: String, params: Object, type: String, url: String }, data: { allow: !1, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: !1, msgInvalidMime: "Invalid File Type: %s", msgInvalidName: "Invalid File Name: %s", msgInvalidSize: "Invalid File Size: %s Kilobytes Max", multiple: !1, name: "files[]", params: {}, type: "", url: "", abort: X, beforeAll: X, beforeSend: X, complete: X, completeAll: X, error: X, fail: X, load: X, loadEnd: X, loadStart: X, progress: X }, events: { change: function (t) { pt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "") }, drop: function (t) { eo(t); var e = t.dataTransfer; e && e.files && (ce(this.$el, this.clsDragover), this.upload(e.files)) }, dragenter: function (t) { eo(t) }, dragover: function (t) { eo(t), he(this.$el, this.clsDragover) }, dragleave: function (t) { eo(t), ce(this.$el, this.clsDragover) } }, methods: { upload: function (t) { var n = this; if (t.length) { _t(this.$el, "upload", [t]); for (var e = 0; e < t.length; e++) { if (n.maxSize && 1e3 * n.maxSize < t[e].size) return void n.fail(n.msgInvalidSize.replace("%s", n.maxSize)); if (n.allow && !to(n.allow, t[e].name)) return void n.fail(n.msgInvalidName.replace("%s", n.allow)); if (n.mime && !to(n.mime, t[e].type)) return void n.fail(n.msgInvalidMime.replace("%s", n.mime)) } this.multiple || (t = [t[0]]), this.beforeAll(this, t); var r = function (t, e) { for (var i = [], n = 0; n < t.length; n += e) { for (var r = [], o = 0; o < e; o++)r.push(t[n + o]); i.push(r) } return i }(t, this.concurrent), o = function (t) { var e = new FormData; for (var i in t.forEach(function (t) { return e.append(n.name, t) }), n.params) e.append(i, n.params[i]); Vt(n.url, { data: e, method: n.method, responseType: n.type, beforeSend: function (t) { var e = t.xhr; e.upload && Et(e.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) { return Et(e, t.toLowerCase(), n[t]) }), n.beforeSend(t) } }).then(function (t) { n.complete(t), r.length ? o(r.shift()) : n.completeAll(t) }, function (t) { return n.error(t) }) }; o(r.shift()) } } } }; function to(t, e) { return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i")) } function eo(t) { t.preventDefault(), t.stopPropagation() } return Vi.component("countdown", nr), Vi.component("filter", cr), Vi.component("lightbox", Tr), Vi.component("lightboxPanel", $r), Vi.component("notification", Cr), Vi.component("parallax", Mr), Vi.component("slider", Fr), Vi.component("sliderParallax", Vr), Vi.component("slideshow", Jr), Vi.component("slideshowParallax", Vr), Vi.component("sortable", Kr), Vi.component("tooltip", Zr), Vi.component("upload", Qr), function (o) { var s = o.connect, a = o.disconnect; function t() { l(document.body, s), pi.flush(), new MutationObserver(function (t) { return t.forEach(e) }).observe(document, { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), o._initialized = !0 } function e(t) { var e = t.target; ("attributes" !== t.type ? function (t) { for (var e = t.addedNodes, i = t.removedNodes, n = 0; n < e.length; n++)l(e[n], s); for (var r = 0; r < i.length; r++)l(i[r], a); return !0 }(t) : function (t) { var e = t.target, i = t.attributeName; if ("href" === i) return !0; var n = Hi(i); if (n && n in o) { if (Q(e, i)) return o[n](e), !0; var r = o.getComponent(e, n); return r ? (r.$destroy(), !0) : void 0 } }(t)) && o.update(e) } function l(t, e) { if (1 === t.nodeType && !Q(t, "uk-no-boot")) for (e(t), t = t.firstElementChild; t;) { var i = t.nextElementSibling; l(t, e), t = i } } "MutationObserver" in window && (document.body ? t() : new MutationObserver(function () { document.body && (this.disconnect(), t()) }).observe(document, { childList: !0, subtree: !0 })) }(Vi), Vi });
