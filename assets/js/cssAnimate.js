jQuery.fn.extend({
	cssAnimate: function(properties, speed, easing, callback){
		var _easing_assoc_lib = {
			'easeInCubic': 'ease-in',
			'easeInCirc': 'ease-in',
			'easeOutCubic': 'ease-out',
			'easeOutCirc': 'ease-out',
			'easeInOutCubic': 'ease-in-out',
			'easeInOutCirc': 'ease-in-out'
		}

		if(typeof properties === 'undefined') return false;
		speed = speed || 600;
		easing = easing || 'linear';
		callback = callback || false;
		var self = this;
		var $this = $(self);

		if(Modernizr.csstransitions){
			var _css3_easing = 'linear';
			if(typeof _easing_assoc_lib[easing] !== 'undefined') _css3_easing = _easing_assoc_lib[easing];
			
			
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
});