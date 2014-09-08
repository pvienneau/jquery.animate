if(window.jQuery){	
	//cssSupport: Check if a given style is supported by the browser (with or without vendor prefixes) return supported style name, or false if not supported
	$.support.cssSupport = function(style, el){
		if(typeof style === 'undefined') return false;
		if(typeof el === 'undefined') el = document.body || document.documentElement;
		
		var _prefixes = ['Moz', 'Webkit', 'O', 'ms'];

		//check for unprefixed style
		if(typeof el.style[style] !== 'undefined') return style;
		
		//check for prefixed style
		var _toPrefixStyle = style.charAt(0).toUpperCase()+style.substr(1);
		for(var i = 0; i < _prefixes.length; i++){
			if(typeof el.style[_prefixes.length+_toPrefixStyle] !== 'undefined') return _prefixes.length+_toPrefixStyle;
		}
		
		return false;
	}
	
	$.fn.vendorCss = function(properties){
		if(typeof properties === 'undefined') return false;
		var $this = this;
		
		for(key in properties){
			$this.css($.support.cssSupport(key, $this[0]), properties[key]);
		}
		
		return true;
	}
	
	$.fn.jQueryAnimate = $.fn.animate;
	$.fn.animate = function(){
		var properties, speed, easing, callback;
		
		/*reorder parameters of function*/
		for(var aa = arguments.length -1; aa >= 0; aa--){
			switch(typeof arguments[aa]){
				case 'function':
					callback = arguments[aa];
					break;
				case 'number':
					speed = arguments[aa];
				case 'object':
					properties = arguments[aa];
				case 'string':
					easing = arguments[aa];
			}
		}
		
		//associative array linking jQuery easing to css easing (for unsupported css3 easings, default to simple easing)
		//from: http://easings.net/
		var _easingJQueryCss = {
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
		
		//associative arra linking css easing to jQuery easings
		var _easingCssJQuery = {
			'ease': 'swing',
			'linear': 'linear',
			'ease-in': 'easeInCubic',
			'ease-out': 'easeOutCubic',
			'ease-in-out': 'easeInOutCubic'
		}

		//default values
		if(typeof properties === 'undefined') return false;
		speed = speed || 400;
		easing = easing || 'swing';
		callback = callback || false;
		var $this = $(this);
		
		//build easing object with css and jQuery-specific values
		if(typeof _easingJQueryCss[easing] !== 'undefined'){
			easing = {
				css: _easingJQueryCss[easing],
				jQuery: easing
			}
		}else if(typeof _easingCssJQuery[easing] !== 'undefined'){
			easing = {
				css: easing,
				jQuery: _easingCssJQuery[easing]
			}
		}else{
			easing = {
				css: _easingJQueryCss['swing'],
				jQuery: 'swing'
			}
		}
		
		if($.support.cssSupport('transition')){

			var _property_string = '';
			var _property = '';
			
			//iterate through each property
			for(key in properties){
				_property = $.support.cssSupport(key, $this[0]);
				
				if(_property === false){
					var _jProperty = {};
					_jProperty[key] = properties[key]

					return $this.jQueryAnimate(_jProperty, speed, easing.jQuery, callback);

					continue;
				}
				
				//if default value is auto, set it to 0 for transition to work properly
				if($this.css(_property) === 'auto') $this.css(_property, 0);
				
				//build transition-property string
				_property_string += _property+', ';
				
			}
			_property_string = $.trim(_property_string).replace(/,+$/,'');
			
			if(_property_string.length == 0) return false;
			
			//apply css transitions
			$this.vendorCss({
				'transition-property': _property_string,  
				'transition-duration': speed + 'ms',
				'transition-timing-function': easing.css
			});

			//apply new styles
			setTimeout(function(){
				for(key in properties){
					$this.css(key, properties[key]);
				}
			});
			
			//wait for complete callback
			var _timestamp = new Date().getTime();
			$this.data('cssAnimateTimestamp', _timestamp);
			setTimeout(function(){
				if($this.data('cssAnimateTimestamp') === _timestamp){
					$this.vendorCss({
						'transition-property': 'none',
						'transition-duration': '',
						'transition-timing-function': ''
					});
					
					$($this, 'cssAnimateTimestamp');
				
					
					if(callback) callback.apply($this);
				}
			}, speed);

		}else{
			//jQuery animate fallback
			return $this.jQueryAnimate(properties, speed, easing.jQuery, callback);			
		}
		
		return $this;
	}
}else{
	console.error('cssAnimate must extend jQuery; please declare jQuery before loading this script.')
}
