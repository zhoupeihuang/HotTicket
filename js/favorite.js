(function(a) {
	jQuery.extend({
		jc_getFromStation: function() {
			return a.jc_getcookie("_jc_save_fromStation")
		},
		jc_setFromStation: function(d, c) {
			if("undefined" == typeof(d) || "undefined" == typeof(c) || "" == d || "" == c) {
				throw "参数错误"
			}
			var b = d + "," + c;
			a.jc_setcookie("_jc_save_fromStation", b, 365 * 24 * 60 * 60)
		},
		jc_getToStation: function() {
			return a.jc_getcookie("_jc_save_toStation")
		},
		jc_setToStation: function(d, c) {
			if("undefined" == typeof(d) || "undefined" == typeof(c) || "" == d || "" == c) {
				throw "参数错误"
			}
			var b = d + "," + c;
			a.jc_setcookie("_jc_save_toStation", b, 365 * 24 * 60 * 60)
		},
		jc_getFromDate: function() {
			return a.jc_getcookie("_jc_save_fromDate")
		},
		jc_setFromDate: function(c) {
			if("undefined" == typeof(c)) {
				c = ""
			}
			var b = c;
			a.jc_setcookie("_jc_save_fromDate", b, 365 * 24 * 60 * 60)
		},
		jc_getToDate: function() {
			return a.jc_getcookie("_jc_save_toDate")
		},
		jc_setToDate: function(c) {
			if("undefined" == typeof(c)) {
				c = ""
			}
			var b = c;
			a.jc_setcookie("_jc_save_toDate", b, 365 * 24 * 60 * 60)
		},
		jc_getWfOrDc: function() {
			return a.jc_getcookie("_jc_save_wfdc_flag")
		},
		jc_setWfOrDc: function(c) {
			if("undefined" == typeof(c)) {
				throw "参数错误"
			}
			var b = c;
			a.jc_setcookie("_jc_save_wfdc_flag", b, 365 * 24 * 60 * 60)
		},
		jc_getcookie: function(d) {
			var c = document.cookie.indexOf(d);
			var b = document.cookie.indexOf(";", c);
			return c == -1 ? "" : unescape(document.cookie.substring(c + d.length + 1, (b > c ? b : document.cookie.length)))
		},
		jc_setcookie: function(h, g, f, e, c, d) {
			var b = new Date();
			b.setTime(b.getTime() + f * 1000);
			document.cookie = escape(h) + "=" + escape(g) + (b ? "; expires=" + b.toGMTString() : "") + (e ? "; path=" + e : ";path=/") + (c ? "; domain=" + c : "") + (d ? "; secure" : "")
		}
	})
})(jQuery);
var index_messages = {
	to_station_request: "请输入目的地!",
	from_station_request: "请输入出发地!",
	same_to_from_station: "出发地与目的地不能相同!",
	jianma_hanzi: "简拼/全拼/汉字",
	trainDate_request: "请输入出发日期!",
	trainDate_error: "请输入合法的出发日期(1970-01-01)!",
	backTrainDate_request: "请输入返程日期!",
	backTrainDate_request: "请输入返程日期!",
	trainDate_not_in: "出发日期不在预售期内!",
	backTrainDate_not_in: "返程日期不在预售期内!",
	backTrainDate_error: "请输入合法的返程日期(1970-01-01)!",
	error_date: "请输入合法的往返日期(返程日期不能小于出发日期)!"
};
/*!
 * SuperSlide v2.0 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途
 */
(function(b) {
	b.fn.slide = function(a) {
		return b.fn.slide.defaults = {
			effect: "fade",
			autoPlay: !1,
			delayTime: 500,
			interTime: 2500,
			triggerTime: 150,
			defaultIndex: 0,
			titCell: ".hd li",
			mainCell: ".bd",
			targetCell: null,
			trigger: "mouseover",
			scroll: 1,
			vis: 1,
			titOnClassName: "on",
			autoPage: !1,
			prevCell: ".prev",
			nextCell: ".next",
			pageStateCell: ".pageState",
			opp: !1,
			pnLoop: !0,
			easing: "linear",
			startFun: null,
			endFun: null,
			switchLoad: null
		}, this.each(function() {
			var ar = b.extend({}, b.fn.slide.defaults, a),
				aq = ar.effect,
				ap = b(ar.prevCell, b(this)),
				ao = b(ar.nextCell, b(this)),
				an = b(ar.pageStateCell, b(this)),
				am = b(ar.titCell, b(this)),
				al = am.size(),
				ak = b(ar.mainCell, b(this)),
				aj = ak.children().size(),
				ai = ar.switchLoad;
			if(null != ar.targetCell) {
				var ah = b(ar.targetCell, b(this))
			}
			var ag = parseInt(ar.defaultIndex),
				af = parseInt(ar.delayTime),
				ae = parseInt(ar.interTime);
			parseInt(ar.triggerTime);
			var ab = parseInt(ar.scroll),
				Z = parseInt(ar.vis),
				X = "false" == ar.autoPlay || 0 == ar.autoPlay ? !1 : !0,
				V = "false" == ar.opp || 0 == ar.opp ? !1 : !0,
				T = "false" == ar.autoPage || 0 == ar.autoPage ? !1 : !0,
				R = "false" == ar.pnLoop || 0 == ar.pnLoop ? !1 : !0,
				P = 0,
				N = 0,
				L = 0,
				ad = 0,
				ac = ar.easing,
				aa = null,
				Y = ag;
			if(0 == al && (al = aj), T) {
				var W = aj - Z;
				al = 1 + parseInt(0 != W % ab ? W / ab + 1 : W / ab), 0 >= al && (al = 1), am.html("");
				for(var U = 0; al > U; U++) {
					am.append("<li>" + (U + 1) + "</li>")
				}
				var am = b("li", am)
			}
			if(ak.children().each(function() {
					b(this).width() > L && (L = b(this).width(), N = b(this).outerWidth(!0)), b(this).height() > ad && (ad = b(this).height(), P = b(this).outerHeight(!0))
				}), aj >= Z) {
				switch(aq) {
					case "fold":
						ak.css({
							position: "relative",
							width: N,
							height: P
						}).children().css({
							position: "absolute",
							width: L,
							left: 0,
							top: 0,
							display: "none"
						});
						break;
					case "top":
						ak.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + Z * P + 'px"></div>').css({
							position: "relative",
							padding: "0",
							margin: "0"
						}).children().css({
							height: ad
						});
						break;
					case "left":
						ak.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + Z * N + 'px"></div>').css({
							width: aj * N,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0"
						}).children().css({
							"float": "left",
							width: L
						});
						break;
					case "leftLoop":
					case "leftMarquee":
						ak.children().clone().appendTo(ak).clone().prependTo(ak), ak.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + Z * N + 'px"></div>').css({
							width: 3 * aj * N,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0",
							left: -aj * N
						}).children().css({
							"float": "left",
							width: L
						});
						break;
					case "topLoop":
					case "topMarquee":
						ak.children().clone().appendTo(ak).clone().prependTo(ak), ak.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + Z * P + 'px"></div>').css({
							height: 3 * aj * P,
							position: "relative",
							padding: "0",
							margin: "0",
							top: -aj * P
						}).children().css({
							height: ad
						})
				}
			}
			var S = function() {
					b.isFunction(ar.startFun) && ar.startFun(ag, al)
				},
				Q = function() {
					b.isFunction(ar.endFun) && ar.endFun(ag, al)
				},
				O = function(c) {
					c.eq(ag).find("img").each(function() {
						b(this).attr(ai) !== void 0 && b(this).attr("src", b(this).attr(ai)).removeAttr(ai)
					})
				},
				M = function(d) {
					if(Y != ag || d || "leftMarquee" == aq || "topMarquee" == aq) {
						switch(aq) {
							case "fade":
							case "fold":
							case "top":
							case "left":
								ag >= al ? ag = 0 : 0 > ag && (ag = al - 1);
								break;
							case "leftMarquee":
							case "topMarquee":
								ag >= 1 ? ag = 1 : 0 >= ag && (ag = 0);
								break;
							case "leftLoop":
							case "topLoop":
								var c = ag - Y;
								al > 2 && c == -(al - 1) && (c = 1), al > 2 && c == al - 1 && (c = -1);
								var g = Math.abs(c * ab);
								ag >= al ? ag = 0 : 0 > ag && (ag = al - 1)
						}
						if(S(), null != ai && O(ak.children()), ah && (null != ai && O(ah), ah.hide().eq(ag).animate({
								opacity: "show"
							}, af, function() {
								ak[0] || Q()
							})), aj >= Z) {
							switch(aq) {
								case "fade":
									ak.children().stop(!0, !0).eq(ag).animate({
										opacity: "show"
									}, af, ac, function() {
										Q()
									}).siblings().hide();
									break;
								case "fold":
									ak.children().stop(!0, !0).eq(ag).animate({
										opacity: "show"
									}, af, ac, function() {
										Q()
									}).siblings().animate({
										opacity: "hide"
									}, af, ac);
									break;
								case "top":
									ak.stop(!0, !1).animate({
										top: -ag * ab * P
									}, af, ac, function() {
										Q()
									});
									break;
								case "left":
									ak.stop(!0, !1).animate({
										left: -ag * ab * N
									}, af, ac, function() {
										Q()
									});
									break;
								case "leftLoop":
									0 > c ? ak.stop(!0, !0).animate({
										left: -(aj - g) * N
									}, af, ac, function() {
										for(var h = 0; g > h; h++) {
											ak.children().last().prependTo(ak)
										}
										ak.css("left", -aj * N), Q()
									}) : ak.stop(!0, !0).animate({
										left: -(aj + g) * N
									}, af, ac, function() {
										for(var h = 0; g > h; h++) {
											ak.children().first().appendTo(ak)
										}
										ak.css("left", -aj * N), Q()
									});
									break;
								case "topLoop":
									0 > c ? ak.stop(!0, !0).animate({
										top: -(aj - g) * P
									}, af, ac, function() {
										for(var h = 0; g > h; h++) {
											ak.children().last().prependTo(ak)
										}
										ak.css("top", -aj * P), Q()
									}) : ak.stop(!0, !0).animate({
										top: -(aj + g) * P
									}, af, ac, function() {
										for(var h = 0; g > h; h++) {
											ak.children().first().appendTo(ak)
										}
										ak.css("top", -aj * P), Q()
									});
									break;
								case "leftMarquee":
									var f = ak.css("left").replace("px", "");
									0 == ag ? ak.animate({
										left: ++f
									}, 0, function() {
										if(ak.css("left").replace("px", "") >= 0) {
											for(var h = 0; aj > h; h++) {
												ak.children().last().prependTo(ak)
											}
											ak.css("left", -aj * N)
										}
									}) : ak.animate({
										left: --f
									}, 0, function() {
										if(2 * -aj * N >= ak.css("left").replace("px", "")) {
											for(var h = 0; aj > h; h++) {
												ak.children().first().appendTo(ak)
											}
											ak.css("left", -aj * N)
										}
									});
									break;
								case "topMarquee":
									var e = ak.css("top").replace("px", "");
									0 == ag ? ak.animate({
										top: ++e
									}, 0, function() {
										if(ak.css("top").replace("px", "") >= 0) {
											for(var h = 0; aj > h; h++) {
												ak.children().last().prependTo(ak)
											}
											ak.css("top", -aj * P)
										}
									}) : ak.animate({
										top: --e
									}, 0, function() {
										if(2 * -aj * P >= ak.css("top").replace("px", "")) {
											for(var h = 0; aj > h; h++) {
												ak.children().first().appendTo(ak)
											}
											ak.css("top", -aj * P)
										}
									})
							}
						}
						am.removeClass(ar.titOnClassName).eq(ag).addClass(ar.titOnClassName), Y = ag, 0 == R && (ao.removeClass("nextStop"), ap.removeClass("prevStop"), 0 == ag ? ap.addClass("prevStop") : ag == al - 1 && ao.addClass("nextStop")), an.html("<span>" + (ag + 1) + "</span>/" + al)
					}
				};
			M(!0), X && ("leftMarquee" == aq || "topMarquee" == aq ? (V ? ag-- : ag++, aa = setInterval(M, ae), ak.hover(function() {
				X && clearInterval(aa)
			}, function() {
				X && (clearInterval(aa), aa = setInterval(M, ae))
			})) : (aa = setInterval(function() {
				V ? ag-- : ag++, M()
			}, ae), b(this).hover(function() {
				X && clearInterval(aa)
			}, function() {
				X && (clearInterval(aa), aa = setInterval(function() {
					V ? ag-- : ag++, M()
				}, ae))
			})));
			var q;
			"mouseover" == ar.trigger ? am.hover(function() {
				ag = am.index(this), q = window.setTimeout(M, ar.triggerTime)
			}, function() {
				clearTimeout(q)
			}) : am.click(function() {
				ag = am.index(this), M()
			}), ao.click(function() {
				(1 == R || ag != al - 1) && (ag++, M())
			}), ap.click(function() {
				(1 == R || 0 != ag) && (ag--, M())
			})
		})
	}
})(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(g, f, j, i, h) {
		return jQuery.easing[jQuery.easing.def](g, f, j, i, h)
	},
	easeInQuad: function(g, f, j, i, h) {
		return i * (f /= h) * f + j
	},
	easeOutQuad: function(g, f, j, i, h) {
		return -i * (f /= h) * (f - 2) + j
	},
	easeInOutQuad: function(g, f, j, i, h) {
		return 1 > (f /= h / 2) ? i / 2 * f * f + j : -i / 2 * (--f * (f - 2) - 1) + j
	},
	easeInCubic: function(g, f, j, i, h) {
		return i * (f /= h) * f * f + j
	},
	easeOutCubic: function(g, f, j, i, h) {
		return i * ((f = f / h - 1) * f * f + 1) + j
	},
	easeInOutCubic: function(g, f, j, i, h) {
		return 1 > (f /= h / 2) ? i / 2 * f * f * f + j : i / 2 * ((f -= 2) * f * f + 2) + j
	},
	easeInQuart: function(g, f, j, i, h) {
		return i * (f /= h) * f * f * f + j
	},
	easeOutQuart: function(g, f, j, i, h) {
		return -i * ((f = f / h - 1) * f * f * f - 1) + j
	},
	easeInOutQuart: function(g, f, j, i, h) {
		return 1 > (f /= h / 2) ? i / 2 * f * f * f * f + j : -i / 2 * ((f -= 2) * f * f * f - 2) + j
	},
	easeInQuint: function(g, f, j, i, h) {
		return i * (f /= h) * f * f * f * f + j
	},
	easeOutQuint: function(g, f, j, i, h) {
		return i * ((f = f / h - 1) * f * f * f * f + 1) + j
	},
	easeInOutQuint: function(g, f, j, i, h) {
		return 1 > (f /= h / 2) ? i / 2 * f * f * f * f * f + j : i / 2 * ((f -= 2) * f * f * f * f + 2) + j
	},
	easeInSine: function(g, f, j, i, h) {
		return -i * Math.cos(f / h * (Math.PI / 2)) + i + j
	},
	easeOutSine: function(g, f, j, i, h) {
		return i * Math.sin(f / h * (Math.PI / 2)) + j
	},
	easeInOutSine: function(g, f, j, i, h) {
		return -i / 2 * (Math.cos(Math.PI * f / h) - 1) + j
	},
	easeInExpo: function(g, f, j, i, h) {
		return 0 == f ? j : i * Math.pow(2, 10 * (f / h - 1)) + j
	},
	easeOutExpo: function(g, f, j, i, h) {
		return f == h ? j + i : i * (-Math.pow(2, -10 * f / h) + 1) + j
	},
	easeInOutExpo: function(g, f, j, i, h) {
		return 0 == f ? j : f == h ? j + i : 1 > (f /= h / 2) ? i / 2 * Math.pow(2, 10 * (f - 1)) + j : i / 2 * (-Math.pow(2, -10 * --f) + 2) + j
	},
	easeInCirc: function(g, f, j, i, h) {
		return -i * (Math.sqrt(1 - (f /= h) * f) - 1) + j
	},
	easeOutCirc: function(g, f, j, i, h) {
		return i * Math.sqrt(1 - (f = f / h - 1) * f) + j
	},
	easeInOutCirc: function(g, f, j, i, h) {
		return 1 > (f /= h / 2) ? -i / 2 * (Math.sqrt(1 - f * f) - 1) + j : i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + j
	},
	easeInElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if(0 == i) {
			return p
		}
		if(1 == (i /= n)) {
			return p + o
		}
		if(l || (l = 0.3 * n), Math.abs(o) > k) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return -(k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l)) + p
	},
	easeOutElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if(0 == i) {
			return p
		}
		if(1 == (i /= n)) {
			return p + o
		}
		if(l || (l = 0.3 * n), Math.abs(o) > k) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return k * Math.pow(2, -10 * i) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
	},
	easeInOutElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if(0 == i) {
			return p
		}
		if(2 == (i /= n / 2)) {
			return p + o
		}
		if(l || (l = n * 0.3 * 1.5), Math.abs(o) > k) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return 1 > i ? -0.5 * k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + p : 0.5 * k * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
	},
	easeInBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), k * (g /= j) * g * ((i + 1) * g - i) + l
	},
	easeOutBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l
	},
	easeInOutBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), 1 > (g /= j / 2) ? k / 2 * g * g * (((i *= 1.525) + 1) * g - i) + l : k / 2 * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l
	},
	easeInBounce: function(g, f, j, i, h) {
		return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j
	},
	easeOutBounce: function(g, f, j, i, h) {
		return 1 / 2.75 > (f /= h) ? i * 7.5625 * f * f + j : 2 / 2.75 > f ? i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j : 2.5 / 2.75 > f ? i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j : i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j
	},
	easeInOutBounce: function(g, f, j, i, h) {
		return h / 2 > f ? 0.5 * jQuery.easing.easeInBounce(g, 2 * f, 0, i, h) + j : 0.5 * jQuery.easing.easeOutBounce(g, 2 * f - h, 0, i, h) + 0.5 * i + j
	}
});
(function(C) {
	jQuery.extend({
		ht_getcookie: function(W) {
			var k = document.cookie.indexOf(W);
			var i = document.cookie.indexOf(";", k);
			return k == -1 ? "" : unescape(document.cookie.substring(k + W.length + 1, (i > k ? i : document.cookie.length)))
		},
		ht_setcookie: function(aa, Z, Y, X, k, W) {
			var i = new Date();
			i.setTime(i.getTime() + Y * 1000);
			document.cookie = escape(aa) + "=" + escape(Z) + (i ? "; expires=" + i.toGMTString() : "") + (X ? "; path=" + X : "; path=/") + (k ? "; domain=" + k : "") + (W ? "; secure" : "")
		},
		textFocus: function(W) {
			var k, i, W = W === undefined ? 0 : parseInt(W);
			this.each(function() {
				if(!this.setSelectionRange) {
					k = this.createTextRange();
					W === 0 ? k.collapse(false) : k.move("character", W);
					k.select()
				} else {
					i = this.value.length;
					W === 0 ? this.setSelectionRange(i, i) : this.setSelectionRange(W, W)
				}
				this.focus()
			});
			return this
		}
	});
	var w = [];
	var D = [];
	var E = [];
	var G = [];
	var v = 0;
	var y = 0;
	var A = 0;
	var S = 0;
	var U = false;
	var g = false;
	var H = false;
	var z = 0;
	var I = null;
	var m = -1;
	var N = {};
	var f = [];
	var e = [];
	var d = [];
	var b = [];
	var V = [];
	var F = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
	var j = [];
	var x = false;
	var c = [];
	for(var R = 0; R < 26; R++) {
		c[R] = []
	}
	var P = [];
	for(var T = 0; T < 5; T++) {
		P[T] = []
	}
	var t = [];
	var s = [];
	var q = [];
	var p = [];
	var o = [];
	var K = [];
	var a = false;
	var L = true;
	var u = 12;
	var h = "简码/汉字";
	var n = "简码/汉字";
	var r = "inp-txt_select";
	var l = "inp-txt";
	var B = false;
	var J = null;
	var Q = null;
	var M = false;
	var O = C.ht_getcookie("hj_favcity");
	C.stationFor12306 = {
		bindInputs: [],
		get_initInputValue: function() {
			return h
		},
		get_initTopInputValue: function() {
			return n
		},
		city_Bind: function(k) {
			if(k.length == 0) {
				return
			}
			var i = "";
			C.each(k, function(W) {
				if(O == k[W][2]) {
					i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'><b>" + k[W][1] + "</b></span></div>\n"
				} else {
					i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'>" + k[W][1] + "</span><span style='float:right;' class='ralign'>" + k[W][3] + "</span></div>\n"
				}
			});
			C("#panel_cities").html(i);
			C(".cityline").mouseover(function() {
				C.stationFor12306.city_shiftSelect(this)
			}).click(function() {
				C.stationFor12306.city_confirmSelect();
				E = C.stationFor12306.filterCity("");
				C.stationFor12306.city_showlist(0)
			});
			C.stationFor12306.city_shiftSelect(C("#citem_0"))
		},
		city_changeSelectIndex: function(i) {
			var k = A + i;
			if(k == -1) {
				C.stationFor12306.city_showlist(z - 1);
				C.stationFor12306.city_shiftSelect(C("#citem_" + (G.length - 1)))
			} else {
				if(k == G.length) {
					C.stationFor12306.city_showlist(z + 1);
					C.stationFor12306.city_shiftSelect(C("#citem_0"))
				} else {
					C.stationFor12306.city_shiftSelect(C("#citem_" + k))
				}
			}
		},
		city_confirmSelect: function() {
			I.val(S[1]);
			curObjCode.val(S[2]);
			if(B) {
				C.stationFor12306.setStationInCookies(S[1], S[2])
			}
			C("#form_cities").css("display", "none");
			C("#form_cities2").css("display", "none");
			C("#form_cities3").css("display", "none");
			m = -1;
			y = 0;
			C.stationFor12306.setStationStyle();
			if(L) {
				C.stationFor12306.LoadJS(S[2])
			}
			if(J) {
				J(I, curObjCode)
			}
		},
		city_shiftSelect: function(k) {
			if(v != k) {
				if(v != 0) {
					C(v).removeClass("citylineover").addClass("cityline").css("backgroundColor", "white")
				}
				if(k != 0) {
					try {
						v = k;
						var i = C(v).removeClass("cityline").addClass("citylineover").css("backgroundColor", "#c8e3fc");
						A = Number(i.attr("id").split("_")[1]);
						S = w[Number(i.attr("cturn"))];
						C("#cityid").val(S[2])
					} catch(W) {}
				}
			}
		},
		city_shiftSelectInLi: function(i) {
			if(y != i) {
				if(y != 0) {
					C(y).removeClass("ac_over").addClass("ac_odd")
				}
				if(i != 0) {
					try {
						y = i;
						C(y).removeClass("ac_odd").addClass("ac_over")
					} catch(k) {}
				}
			}
		},
		js: function(W) {
			var k;
			for(k = 1; k <= 7; k++) {
				if(C("#nav_list" + k).attr("class")) {
					C("#ul_list" + k).css("display", "none");
					C("#nav_list" + k).removeClass("action")
				}
			}
			for(k = 1; k <= 7; k++) {
				if(k == W) {
					C("#ul_list" + k).css("display", "block");
					C("#nav_list" + k).addClass("action");
					if(k == 1 || k == 7) {
						C("#flip_cities2").css("display", "none")
					}
					if(k > 1 && k < 7) {
						var Y = C.stationFor12306.tHtmlGetCityName(W - 1, -1, 0);
						if(Y > u) {
							var X = Math.ceil(Y / u);
							if(X > 1) {
								C.stationFor12306.pageDesigh(X, 0, k)
							}
							C("#flip_cities2").css("display", "block")
						} else {
							C("#flip_cities2").css("display", "none")
						}
					} else {
						I.focus()
					}
				} else {
					C("#ul_list" + k).css("display", "none");
					C("#nav_list" + k).removeClass("action")
				}
			}
			if(1 != W) {
				C(".ac_even").on("mouseover", function() {
					C.stationFor12306.city_shiftSelectInLi(this)
				}).on("click", function() {
					I.val(C(this).text());
					curObjCode.val(C(this).attr("data"));
					if(B) {
						C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
					}
					C("#form_cities2").css("display", "none");
					m = -1;
					y = 0;
					C.stationFor12306.setStationStyle();
					if(L) {
						C.stationFor12306.LoadJS(C(this).attr("data"))
					}
					if(J) {
						J(I, curObjCode)
					}
				})
			}
		},
		tHtmlGetCityName: function(k, i, X) {
			switch(k) {
				case 0:
					if(i == -1) {
						return D.length
					}
					if(i == -2) {
						return D
					}
					return D[i];
					break;
				case 1:
					if(i == -1) {
						return c[3].length
					}
					if(i == -2) {
						return f
					}
					if(f.length > u) {
						var W = Math.ceil((f.length) / u);
						if(W > 1) {
							t = f.slice(u * (X), Math.min(u * (X + 1), f.length));
							return t[i]
						}
					}
					return f[i];
					break;
				case 2:
					if(i == -1) {
						return c[7].length
					}
					if(i == -2) {
						return e
					}
					if(e.length > u) {
						var W = Math.ceil((e.length) / u);
						if(W > 1) {
							s = e.slice(u * (X), Math.min(u * (X + 1), e.length));
							return s[i]
						}
					}
					return e[i];
					break;
				case 3:
					if(i == -1) {
						return c[11].length
					}
					if(i == -2) {
						return d
					}
					if(d.length > u) {
						var W = Math.ceil((d.length) / u);
						if(W > 1) {
							q = d.slice(u * (X), Math.min(u * (X + 1), d.length));
							return q[i]
						}
					}
					return d[i];
					break;
				case 4:
					if(i == -1) {
						return c[18].length
					}
					if(i == -2) {
						return b
					}
					if(b.length > u) {
						var W = Math.ceil((b.length) / u);
						if(W > 1) {
							p = b.slice(u * (X), Math.min(u * (X + 1), b.length));
							return p[i]
						}
					}
					return b[i];
					break;
				case 5:
					if(i == -1) {
						return c[24].length
					}
					if(i == -2) {
						return V
					}
					if(V.length > u) {
						var W = Math.ceil((V.length) / u);
						if(W > 1) {
							o = V.slice(u * (X), Math.min(u * (X + 1), V.length));
							return o[i]
						}
					}
					return V[i];
					break;
				default:
					return "error";
					break
			}
		},
		closeShowCity: function() {
			C("#form_cities2").css("display", "none");
			m = -1;
			y = 0;
			C.each(C.stationFor12306.bindInputs, function(Y, X) {
				var W = "#" + X;
				var k = "#" + X + "Text";
				var i = C(k).val();
				if("" == i) {
					C(k).val(h);
					C.stationFor12306.from_to_station_class_gray(C(k));
					C(W).val("")
				}
			})
		},
		showAllCity: function() {
			var ab = "";
			var k = "440px";
			if(B) {
				k = "400px"
			}
			ab = '<div class="com_hotresults" id="thetable" style="width:' + k + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
			if(B) {
				ab = ab + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
			}
			ab = ab + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li></ul>';
			if(B) {
				ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
				var ac = C.stationFor12306.getStationInCookies();
				var Y = ac.length;
				if(Y > 2) {
					M = true;
					for(var ad = 0; ad < Y; ad++) {
						ab += '<li class="ac_even"   title="' + ac[ad][0] + '" data="' + ac[ad][1] + '">' + ac[ad][0] + "</li>"
					}
				}
				ab += "</ul>"
			}
			ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
			var X = C.stationFor12306.tHtmlGetCityName(0, -1, 0);
			var aa = "";
			if(!B) {
				aa = " openLi"
			}
			for(var ad = 0; ad < X; ad++) {
				ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + "</li>"
			}
			ab += "</ul>";
			for(var ae = 2; ae <= 6; ae++) {
				var Z = ae - 1;
				var i = C.stationFor12306.tHtmlGetCityName(Z, -1, 0);
				if(i > u) {
					var W = Math.ceil((i) / u);
					if(W > 1) {
						ab += '<div id="ul_list' + ae + '">';
						C.stationFor12306.pageDesigh(W, 0, ae)
					}
					C("#flip_cities2").css("display", "block")
				} else {
					ab += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + ae + '">';
					C("#flip_cities2").css("display", "none");
					var aa = "";
					if(!B) {
						aa = " openLi"
					}
					for(var ad = 0; ad < C.stationFor12306.tHtmlGetCityName(Z, -1, 0); ad++) {
						ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + "</li>"
					}
				}
				ab += "</div>"
			}
			ab += '<div id="flip_cities2"> 翻页控制区</div>';
			ab += "</div>";
			C("#panel_cities2").html(ab);
			C("#thetable").on("click", function() {
				if(C("#form_cities2").css("display") == "block") {
					if(m == 1 | m == 0) {
						m == -1
					}
					I.select()
				}
			});
			C("#form_cities").on("click", function() {
				if(C("#form_cities").css("display") == "block") {
					if(m == 1 | m == 0) {
						m == -1
					}
					I.select()
				}
			});
			C(".ac_even").on("mouseover", function() {
				C.stationFor12306.city_shiftSelectInLi(this)
			}).on("click", function() {
				I.val(C(this).text());
				curObjCode.val(C(this).attr("data"));
				if(B) {
					C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
				}
				C("#form_cities2").css("display", "none");
				m = -1;
				y = 0;
				C.stationFor12306.setStationStyle();
				if(L) {
					C.stationFor12306.LoadJS(C(this).attr("data"))
				}
				if(J) {
					J(I, curObjCode)
				}
			});
			C("#flip_cities2").css("display", "none");
			return w
		},
		LoadJS: function(W) {
			if(((typeof(mm_addjs) != "undefined")) && ("" != mm_addjs) && (mm_addjs == 1)) {
				var k = document.getElementsByTagName("HEAD").item(0);
				var i = document.createElement("SCRIPT");
				i.src = mm_srcjs + W + ".js";
				i.type = "text/javascript";
				k.appendChild(i)
			}
		},
		addZMHtml: function(X, Y) {
			var W = "";
			if(X && X.length > 0) {
				var Z = X[0][0].charAt(0);
				W += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
				W += '<li class="ac_letter">' + Z.toUpperCase() + "</li>";
				for(var i = 0; i < 12; i++) {
					var k = X[i];
					if(k) {
						W += '<li class="ac_even' + Y + '"   title="' + k[1] + '" data="' + k[2] + '">' + k[1] + "</li>"
					} else {
						W += '<li class="ac_even' + Y + '" </li>'
					}
				}
				W += "</ul>"
			}
			return W
		},
		pageDesigh: function(Z, ac, ad) {
			var W = "";
			if(Z > 1) {
				if(ac == -1) {
					ac = (Z - 1)
				} else {
					if(ac == Z) {
						ac = 0
					}
				}
				var ab = "";
				if(!B) {
					ab = " openLi"
				}
				for(var X = 2; X <= 6; X++) {
					if(X == ad) {
						var aa = P[X - 2];
						for(var i = 0; i < aa.length; i++) {
							K = aa[i].slice(ac * u, (ac + 1) * u);
							W += C.stationFor12306.addZMHtml(K, ab)
						}
					}
				}
				C("#ul_list" + ad).html(W);
				C("#ul_list" + ad).css("height", 270);
				if(W) {
					var Y = (ac == 0) ? "&laquo;&nbsp;上一页" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac - 1) + "," + ad + ");return false;'>&laquo;&nbsp;上一页</a>";
					Y += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
					Y += (ac == Z - 1) ? "下一页&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac + 1) + "," + ad + ")'>下一页&nbsp;&raquo;</a>";
					C("#flip_cities2").html(Y)
				} else {
					C("#flip_cities2").html("")
				}
				if(m == 1 | m == 0 | m == 2) {
					m == -1
				}
				if(I) {
					I.select()
				}
			} else {}
			C(".ac_even").on("mouseover", function() {
				C.stationFor12306.city_shiftSelectInLi(this)
			}).on("click", function() {
				I.val(C(this).text());
				curObjCode.val(C(this).attr("data"));
				if(B) {
					C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
				}
				C("#form_cities2").css("display", "none");
				m = -1;
				y = 0;
				C.stationFor12306.setStationStyle();
				if(L) {
					C.stationFor12306.LoadJS(C(this).attr("data"))
				}
				if(J) {
					J(I, curObjCode)
				}
			})
		},
		filterCity: function(Z) {
			if(Z.length == 0) {
				C("#top_cities").html(n);
				return w
			}
			var Y = /<\/?[^>]*>/g;
			Z = Z.replace(Y, "");
			var W = [];
			var k = /[^A-z]/.test(Z);
			for(var X = 0; X < w.length; X++) {
				if(C.stationFor12306.isMatchCity(w[X], Z, k)) {
					W.push(w[X])
				}
			}
			if(W.length > 0) {
				C("#top_cities").html('按"<font color=red>' + Z + '</font>"检索：');
				return W
			} else {
				C("#top_cities").html("无法匹配:<font color=red>" + Z + "</font>");
				return []
			}
		},
		replaceChar: function(i, W, k) {
			return i.substr(0, W) + k + i.substr(W + 1, i.length - 1)
		},
		isMatchCity: function(Z, ac, W) {
			var ac = ac.toLowerCase();
			var k = [Z[4].toLowerCase(), Z[1], Z[3].toLowerCase()];
			var ab = -1;
			var Y = -1;
			if(W) {
				ac = ac.split("");
				for(var X = 0; X < ac.length; X++) {
					var ae = k[1].indexOf(ac[X]);
					if(ae > ab && ae <= X) {
						k[1] = C.stationFor12306.replaceChar(k[1], ae, "-");
						ab = ae
					} else {
						return false
					}
				}
			} else {
				ac = ac.split("");
				var i = true;
				var aa = true;
				for(var X = 0; X < ac.length; X++) {
					var ae = k[0].indexOf(ac[X]);
					if(ae > ab && ae <= X) {
						k[0] = C.stationFor12306.replaceChar(k[0], ae, "-");
						ab = ae
					} else {
						i = false;
						break
					}
				}
				for(var X = 0; X < ac.length; X++) {
					var ad = k[2].indexOf(ac[X]);
					if(ad > Y && ad <= X) {
						k[2] = C.stationFor12306.replaceChar(k[2], ad, "-");
						Y = ad
					} else {
						aa = false;
						break
					}
				}
				if((i == false) && (aa == false)) {
					return false
				}
			}
			return true
		},
		city_showlist_page: function(ad, Y) {
			var Z = "";
			Z += '<div class="citypage">';
			Z += (ad == 0) ? "" : '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad - 1) + ');return false;"><<</a>';
			var ae = ad + 1;
			var aa = Y;
			var ab = 2;
			var ac = 5;
			var k = (ae - ab) > 0 ? (ae + ab > aa ? aa - ac + 1 : ae - ab) : 1;
			var W = k + ac > aa ? aa + 1 : k + ac;
			if(aa < ac) {
				for(var X = 1; X < aa + 1; X++) {
					if(ae == X) {
						Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
					} else {
						Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
					}
				}
			} else {
				for(var X = k; X < W; X++) {
					if(ae == X) {
						Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
					} else {
						Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
					}
				}
			}
			Z += (ad == Y - 1) ? "" : '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad + 1) + ');return false;">>></a>';
			Z += "</div>";
			return Z
		},
		city_showlist: function(W) {
			if(E.length > 6) {
				var k = Math.ceil((E.length) / 6);
				if(W == -1) {
					W = (k - 1)
				} else {
					if(W == k) {
						W = 0
					}
				}
				G = E.slice(6 * (W), Math.min(6 * (W + 1), E.length));
				C.stationFor12306.city_Bind(G);
				var i = "";
				i += C.stationFor12306.city_showlist_page(W, k);
				C("#flip_cities").html(i);
				C("#flip_cities").css("display", "block")
			} else {
				W = 0;
				G = E;
				C.stationFor12306.city_Bind(G);
				C("#flip_cities").css("display", "none")
			}
			z = W;
			if(C("#form_cities").css("display") == "block") {
				a = true;
				I.focus()
			}
		},
		fixDivBugInIE6: function(i) {
			try {
				i.bgiframe();
				if(i.width() > C("> ul", i).width()) {
					i.css("overflow", "hidden")
				} else {
					C("> iframe.bgiframe", i).width(C("> ul", i).width());
					i.css("overflow", "scroll")
				}
				if(i.height() > C("> ul", i).height()) {
					i.css("overflow", "hidden")
				} else {
					C("> iframe.bgiframe", i).height(C("> ul", i).height());
					i.css("overflow", "scroll")
				}
			} catch(k) {}
		},
		clearStation: function(i) {
			m = -1;
			var W = I.val();
			var X = curObjCode.val();
			if(W == "" || X == "") {
				I.val("");
				curObjCode.val("")
			} else {
				var k = W + "|" + X;
				if(typeof(station_names) != "undefined") {
					if(station_names.indexOf(k) == -1) {
						I.val("");
						curObjCode.val("")
					} else {
						if("click" == i) {
							I.select();
							if(C("#form_cities").is(":hidden")) {
								C("#form_cities2").css("display", "block")
							}
						}
					}
				} else {
					I.val("");
					curObjCode.val("")
				}
			}
		},
		MapCityID: function(W) {
			for(var k = 0; k < w.length; k++) {
				if(w[k][1] == W) {
					return w[k][2]
				}
			}
			return 0
		},
		MapCityName: function(k) {
			for(var W = 0; W < w.length; W++) {
				if(w[W][2] == k) {
					return w[W][1]
				}
			}
			return ""
		},
		SetISPos: function(Y) {
			if(Q) {
				Q(C("#form_cities"), C("#form_cities2"))
			} else {
				C("#form_cities").css("left", Y.position().left);
				C("#form_cities").css("top", Y.position().top + Y.height() + 12);
				C("#form_cities2").css("left", Y.position().left);
				C("#form_cities2").css("top", Y.position().top + Y.height() + 12)
			}
			var X = Y.offset().top;
			var i = C("#search_div");
			var k = C("#choice_div");
			i.css("top", X);
			k.css("top", X);
			var W = Y.offset().left;
			i.css("left", W);
			k.css("left", W)
		},
		myHandlerFg: function(i) {
			if(i == null) {
				i.keyCode = 9
			} else {
				if(!i.which && i.which == 13) {
					i.preventDefault()
				} else {
					if(i.which && i.keyCode == 13) {
						i.which = 9
					}
				}
			}
		},
		myHandler2: function(i) {
			if(i == null) {
				i = window.event;
				i.returnValue = false
			} else {
				if(i.which && i.which == 13) {
					var W = document.getElementById("Upload_Data3");
					if(document.createEvent) {
						var k = document.createEvent("MouseEvents");
						k.initEvent("click", true, false);
						W.dispatchEvent(k)
					} else {
						if(document.createEventObject) {
							W.fireEvent("onclick")
						}
					}
				} else {
					if(!i.which && i.which == 13) {
						i.preventDefault()
					}
				}
			}
		},
		from_to_station_class_plain: function(i) {
			if(l && l != "") {
				i.removeClass(l)
			}
			if(r && r != "") {
				i.addClass(r)
			}
		},
		from_to_station_class_gray: function(i) {
			if(r && r != "") {
				i.removeClass(r)
			}
			if(l && l != "") {
				i.addClass(l)
			}
		},
		setStationStyle: function() {
			var i = I.val();
			if(i == "") {
				I.val(h);
				C.stationFor12306.from_to_station_class_gray(I);
				curObjCode.val("")
			} else {
				C.stationFor12306.from_to_station_class_plain(I)
			}
		},
		setCurValue: function() {
			I.val(S[1]);
			curObjCode.val(S[2])
		},
		bindEvent: function(i) {
			var W = "#" + i;
			var k = "#" + i + "Text";
			C(k).keydown(function(Y) {
				I = C(k);
				curObjCode = C(W);
				m = 0;
				a = true;
				L = true;
				C("#form_cities2").css("display", "none");
				y = 0;
				var X = C(k).width();
				if(-[1, ]) {
					X = X - 4
				}
				X = X < 220 ? 220 : X;
				C("#form_cities").css("width", X);
				C("#form_cities").css("display", "block");
				C(".AbcSearch li").removeClass("action");
				C(".popcitylist").css("display", "none");
				if(M && B) {
					C("#ul_list7").css("display", "block");
					C("#nav_list7").addClass("action")
				} else {
					C("#nav_list1").addClass("action");
					C("#ul_list1").css("display", "block")
				}
				C("#flip_cities2").css("display", "none");
				C(".ac_even").removeClass("ac_over").addClass("ac_odd");
				Y = Y || window.event;
				if(Y.keyCode == 40) {
					C.stationFor12306.city_changeSelectIndex(1);
					C("#form_cities").css("display", "block");
					C.stationFor12306.SetISPos(I);
					C.stationFor12306.setCurValue()
				} else {
					if(Y.keyCode == 38) {
						C.stationFor12306.city_changeSelectIndex(-1);
						C.stationFor12306.setCurValue();
						C("#form_cities").css("display", "block");
						C.stationFor12306.SetISPos(I)
					} else {
						if(Y.keyCode == 13) {
							C.stationFor12306.city_confirmSelect();
							if(document.addEventListener) {
								document.addEventListener("keypress", C.stationFor12306.myHandlerFg, true)
							} else {
								evt = window.event;
								evt.keyCode = 9
							}
						}
					}
				}
			}).focus(function() {
				L = true;
				if(a) {
					C("#form_cities2").css("display", "none");
					y = 0;
					a = false;
					m = -1
				} else {
					if(m == -1) {
						C(".AbcSearch li").removeClass("action");
						C(".popcitylist").css("display", "none");
						C("#flip_cities2").css("display", "none");
						if(M && B) {
							C("#ul_list7").css("display", "block");
							C("#nav_list7").addClass("action")
						} else {
							C("#nav_list1").addClass("action");
							C("#ul_list1").css("display", "block")
						}
						C(".ac_even").removeClass("ac_over").addClass("ac_odd");
						C("#form_cities2").css("display", "block");
						for(var X = 2; X <= 6; X++) {
							C("#ul_list" + X).css("height", 0)
						}
					}
				}
				I = C(k);
				curObjCode = C(W);
				m = 0;
				U = true;
				C.stationFor12306.SetISPos(I)
			}).blur(function() {
				I = C(k);
				curObjCode = C(W);
				m = 0;
				a = false;
				L = true;
				if(!g && !H) {
					C.stationFor12306.clearStation("blur");
					U = false;
					C("#form_cities").css("display", "none");
					C("#form_cities2").css("display", "none");
					m = -1;
					y = 0;
					E = C.stationFor12306.filterCity("");
					C.stationFor12306.city_showlist(0);
					C.stationFor12306.setStationStyle()
				}
			}).keyup(function(X) {
				I = C(k);
				curObjCode = C(W);
				m = 0;
				a = true;
				X = X || window.event;
				if(X.keyCode != 40 && X.keyCode != 38 && X.keyCode != 37 && X.keyCode != 39 && X.keyCode != 13 && X.keyCode != 9) {
					E = C.stationFor12306.filterCity(I.val());
					C.stationFor12306.city_showlist(0)
				}
			}).click(function() {
				C.stationFor12306.clearStation("click")
			});
			C.stationFor12306.bindInputs.push(i)
		},
		getStationInCookies: function() {
			var W = [];
			var k = C.ht_getcookie("_city_name_save_station");
			if(k) {
				var i = k.split(",");
				if(i && i.length > 0) {
					C.each(i, function(aa, Z) {
						var X = Z.split("#");
						var Y = [];
						Y[0] = X[0];
						Y[1] = X[1];
						W[aa] = Y
					})
				}
			}
			return W
		},
		setStationInCookies: function(af, W) {
			var ac = C.stationFor12306.getStationInCookies();
			var Z = [];
			var ag = ac.length;
			var Y = true;
			var ah = 10;
			for(var aa = 0; aa < ag; aa++) {
				if(ac[aa][0] == af && ac[aa][1] == W) {
					Y = false
				}
				Z.push(ac[aa])
			}
			if(Y) {
				Z.push([af, W])
			}
			var ab = Z;
			var X = "";
			var ad = ab.length;
			var aa = 0;
			if(ad > ah) {
				aa = 1
			}
			var i = aa;
			if(ad > 1) {
				C("#ul_list7").html("");
				M = true
			}
			var ae = "";
			for(; aa < ad; aa++) {
				if(aa > i) {
					X += ","
				}
				X += ab[aa][0] + "#" + ab[aa][1];
				if(M && B) {
					ae += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + ab[aa][0] + '" data="' + ab[aa][1] + '">' + ab[aa][0] + "</li>"
				}
			}
			if(M && B) {
				C("#ul_list7").html(ae)
			}
			C.ht_setcookie("_city_name_save_station", X, 365 * 24 * 60 * 60)
		},
		li_click: function(i) {
			I.val(C(i).text());
			curObjCode.val(C(i).attr("data"));
			if(B) {
				C.stationFor12306.setStationInCookies(C(i).text(), C(i).attr("data"))
			}
			C("#form_cities2").css("display", "none");
			m = -1;
			y = 0;
			C.stationFor12306.setStationStyle();
			if(L) {
				C.stationFor12306.LoadJS(C(i).attr("data"))
			}
			if(J) {
				J(I, curObjCode)
			}
		},
		init: function(ac, ad) {
			if(typeof(ad) != "undefined") {
				if(typeof(ad._init_input) != "undefined") {
					h = ad._init_input
				}
				if(typeof(ad._top_4_initInput) != "undefined") {
					n = ad._top_4_initInput
				}
				if(typeof(ad.confirmCallBack) != "undefined") {
					J = ad.confirmCallBack
				}
				if(typeof(ad._selected_class) != "undefined") {
					r = ad._selected_class
				}
				if(typeof(ad._unselected_class) != "undefined") {
					l = ad._unselected_class
				}
				if(typeof(ad._12306_openFavorite) != "undefined") {
					B = ad._12306_openFavorite
				}
				if(typeof(ad.position) != "undefined") {
					Q = ad.position
				}
			}
			if(typeof(station_names) != "undefined") {
				var Z = station_names.split("@");
				for(var Y = 0; Y < Z.length; Y++) {
					var ab = Z[Y];
					var aa = ab.toString().charAt(0);
					for(var X in F) {
						if(aa == F[X]) {
							c[X].push(ab.split("|"))
						}
					}
					if(ab.length > 0) {
						ab = ab.split("|");
						if(O != "" && ab[2] == O) {
							favcity = ab;
							w.unshift(ab);
							if(Y > 6) {
								w.push(ab)
							}
						} else {
							w.push(ab)
						}
					}
				}
				f = c[0].concat(c[1]).concat(c[2]).concat(c[3]).concat(c[4]);
				e = c[5].concat(c[6]).concat(c[7]).concat(c[8]).concat(c[9]);
				d = c[10].concat(c[11]).concat(c[12]).concat(c[13]).concat(c[14]);
				b = c[15].concat(c[16]).concat(c[17]).concat(c[18]).concat(c[19]);
				V = c[20].concat(c[21]).concat(c[22]).concat(c[23]).concat(c[24]).concat(c[25]);
				P[0] = [c[0], c[1], c[2], c[3], c[4]];
				P[1] = [c[5], c[6], c[7], c[8], c[9]];
				P[2] = [c[10], c[11], c[12], c[13], c[14]];
				P[3] = [c[15], c[16], c[17], c[18], c[19]];
				P[4] = [c[20], c[22], c[23], c[24], c[25]];
				for(var Y = 0; Y < w.length; Y++) {
					w[Y].push(Y)
				}
			}
			if(typeof(favorite_names) != "undefined") {
				var W = favorite_names.split("@");
				for(var Y = 0; Y < W.length; Y++) {
					var ab = W[Y];
					if(ab.length > 0) {
						ab = ab.split("|");
						D.push(ab)
					}
				}
				for(var Y = 0; Y < D.length; Y++) {
					D[Y].push(Y)
				}
			}
			E = C.stationFor12306.filterCity("");
			C.stationFor12306.city_showlist(0);
			C.stationFor12306.showAllCity();
			a = false;
			C.stationFor12306.fixDivBugInIE6(C("#form_cities"));
			C.stationFor12306.fixDivBugInIE6(C("#form_cities2"));
			if(ac && ac.length > 0) {
				C.each(ac, function(k, i) {
					C.stationFor12306.bindEvent(i)
				})
			}
			C("#form_cities").mousedown(function() {
				g = true
			}).mouseup(function() {
				g = false
			});
			C("#form_cities2").mousedown(function() {
				H = true
			}).mouseup(function() {
				H = false
			})
		}
	}
})(jQuery);