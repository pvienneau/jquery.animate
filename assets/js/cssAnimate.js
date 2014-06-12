if(window.jQuery){	
	
	//MODERNIZR
	;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
	
	// $.support.cssProperty = (function() {
	// 	  function cssProperty(p, rp) {
	// 	    var b = document.body || document.documentElement,
	// 	    s = b.style;
	// 
	// 	    // No css support detected
	// 	    if(typeof s == 'undefined') { return false; }
	// 
	// 	    // Tests for standard prop
	// 	    if(typeof s[p] == 'string') { return rp ? p : true; }
	// 
	// 	    // Tests for vendor specific prop
	// 	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms', 'Icab'],
	// 	    p = p.charAt(0).toUpperCase() + p.substr(1);
	// 	    for(var i=0; i<v.length; i++) {
	// 	      if(typeof s[v[i] + p] == 'string') { return rp ? (v[i] + p) : true; }
	// 	    }
	// 	  }
	// 
	// 	  return cssProperty;
	// 	})();
	
	$.fn.jQuery = {
		animate: $.fn.animate
	}
	
	$.fn.animate = function(properties, speed, easing, callback){
		
		//associative array linking jQuery easing to css easing (for unsupported css3 easings, default to simple easing)
		//from: http://easings.net/
		var _easing_assoc_lib = {
			'linear': 'linear',
			'swing': 'ease',
			'easeInQuad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
			'easeOutQuad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			'easeInOutQuad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
			'easeInCubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
			'easeOutCubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
			'easeInOutCubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			'easeInQuart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
			'easeOutQuart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
			'easeInOutQuart': 'cubic-bezier(0.77, 0, 0.175, 1)',
			'easeInQuint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
			'easeOutQuint': 'cubic-bezier(0.23, 1, 0.32, 1)',
			'easeInOutQuint': 'cubic-bezier(0.86, 0, 0.07, 1)',
			'easeInExpo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
			'easeOutExpo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			'easeInOutExpo': 'cubic-bezier(1, 0, 0, 1)',
			'easeInSine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
			'easeOutSine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
			'easeInOutSine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
			'easeInCirc': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
			'easeOutCirc': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
			'easeInOutCirc': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
			'easeInElastic': 'ease-in',
			'easeOutElastic': 'ease-out',
			'easeInOutElastic': 'ease-in-out',
			'easeInBack': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			'easeOutBack': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			'easeInOutBack': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			'easeInBounce': 'ease-in',
			'easeOutBounce': 'ease-out',
			'easeInOutBounce': 'ease-in-out'
		}

		//default values
		if(typeof properties === 'undefined') return false;
		speed = speed || 400;
		easing = easing || 'swing';
		callback = callback || false;
		var $this = $(this);

		if(Modernizr.csstransitions){
			var _css3_easing = 'linear';
			if(typeof _easing_assoc_lib[easing] !== 'undefined') _css3_easing = _easing_assoc_lib[easing];


			setTimeout(function(){

				// $this.css({
				// 					'transition-property': 'none',  
				// 					'transition-duration': '',
				// 				 	'transition-timing-function': '',
				// 					'-webkit-transition-property': 'none',  
				// 					'-webkit-transition-duration': '',  
				// 					'-webkit-transition-timing-function': '',
				// 					'-moz-transition-property': 'none',  
				// 					'-moz-transition-duration': '',  
				// 				 	'-moz-transition-timing-function': '',
				// 					'-o-transition-property': 'none',  
				// 					'-o-transition-duration': '',  
				// 				 	'-o-transition-timing-function': '',
				// 					'-ms-transition-property': 'none',  
				// 					'-ms-transition-duration': '',  
				// 				 	'-ms-transition-timing-function': ''
				// 				});

				if(callback) callback.apply(self[0]);
			}, speed);

			var _property_string = '';
			for(key in properties){
				_property_string += key+', ';
			}
			_property_string = $.trim(_property_string).replace(/,+$/,'');

			$this.css({
				'transition-property': '-webkit-transform',  
				'transition-duration': speed + 'ms',
				'transition-timing-function': _css3_easing,
				'-webkit-transition-property': _property_string,
				'-webkit-transition-duration': speed + 'ms',
				'-webkit-transition-timing-function': _css3_easing,
				'-moz-transition-property': _property_string,
				'-moz-transition-duration': speed + 'ms',
				'-moz-transition-timing-function': _css3_easing,
				'-o-transition-property': _property_string,
				'-o-transition-duration': speed + 'ms',
				'-o-transition-timing-function': _css3_easing,
				'-ms-transition-property': _property_string,
				'-ms-transition-duration': speed + 'ms',
				'-ms-transition-timing-function': _css3_easing
			});

			setTimeout(function(){
				for(key in properties){
					$this.css(key, properties[key]);
				}
			});

		}else{
			$this.animate(properties, speed, easing, callback);			
		}
	}
}else{
	console.error('cssAnimate must extend jQuery; please declare jQuery before loading this script.')
}