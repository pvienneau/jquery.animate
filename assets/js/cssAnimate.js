if(window.jQuery){	
	
	$.support.cssProperty = function(property){
		var _prefixes = ['Moz', 'Webkit', 'O', 'ms'];
		var _el = document.body || document.documentElement;

		//check for unprefixed property
		if(typeof _el.style[property] !== 'undefined') return property;
		
		//check for prefixed property
		var _toPrefixProperty = property.charAt(0).toUpperCase()+property.substr(1);
		for(var i = 0; i < _prefixes.length; i++){
			if(typeof _el.style[_prefixes.length+_toPrefixProperty] !== 'undefined') return _prefixes.length+_toPrefixProperty;
		}
		
		return false;
	}
	
	$.fn.jQueryAnimate = $.fn.animate;
	
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

		if($.support.cssProperty('transition')){

			setTimeout(function(){

				$this.css({
					'transition-property': 'none',  
					'transition-duration': '',
				 	'transition-timing-function': '',
					'-webkit-transition-property': 'none',  
					'-webkit-transition-duration': '',  
					'-webkit-transition-timing-function': '',
					'-moz-transition-property': 'none',  
					'-moz-transition-duration': '',  
				 	'-moz-transition-timing-function': '',
					'-o-transition-property': 'none',  
					'-o-transition-duration': '',  
				 	'-o-transition-timing-function': '',
					'-ms-transition-property': 'none',  
					'-ms-transition-duration': '',  
				 	'-ms-transition-timing-function': ''
				});

				if(callback) callback.apply(self[0]);
			}, speed);

			var _property_string = '';
			var _property = '';
			for(key in properties){
				_property = $.support.cssProperty(key);

				if($this.css(_property) === 'auto') $this.css(_property, 0);
				
				_property_string += _property+', ';
				
			}
			_property_string = $.trim(_property_string).replace(/,+$/,'');
			
			$this.css({
				'transition-property': '-webkit-transform',  
				'transition-duration': speed + 'ms',
				'transition-timing-function': easing,
				'-webkit-transition-property': _property_string,
				'-webkit-transition-duration': speed + 'ms',
				'-webkit-transition-timing-function': easing,
				'-moz-transition-property': _property_string,
				'-moz-transition-duration': speed + 'ms',
				'-moz-transition-timing-function': easing,
				'-o-transition-property': _property_string,
				'-o-transition-duration': speed + 'ms',
				'-o-transition-timing-function': easing,
				'-ms-transition-property': _property_string,
				'-ms-transition-duration': speed + 'ms',
				'-ms-transition-timing-function': easing
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