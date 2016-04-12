/*
* @Author: manrajsingh
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-12 15:04:07
*/

(function(root, factory){
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.microbar = factory();
	}
})(this, function(){
	var css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;}'
			+ '.microbar .mprogress{width: 0;height: 100%;background-color: #000000;}'
			+ '.microbar .mprogress .mshadow{width: 93px;position: relative;height: 100%;float: right;transform: rotate(2deg) translate(0px,-3px);}';
	function getEquivalentTime(speed){
		return Math.round(1/speed).toString()+'s';
	}
	function transitionEndEventName () {
		var el = document.createElement('div'), transitions = { 'transition':'transitionend', 'OTransition':'otransitionend', 'MozTransition':'transitionend', 'WebkitTransition':'webkitTransitionEnd'};
		for(var i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				return transitions[i];
			}
		}
	}

	function addStyleSheet(){
		if(document.getElementById('microbarstyles') != undefined){
			return;
		}
		var style = document.createElement('style');
		style.type = 'text/css';
		style.id = 'microbarstyles';
		if(style.styleSheet){
			style.styleSheet.cssText = css;
		}
		else{
			style.appendChild(document.createTextNode(css));
		}
		document.head.insertBefore(style, null);
	}

	function initialize(id, color, position, speed){
		addStyleSheet();
		var bar = document.createElement('div'), progress = document.createElement('div'), shadow = document.createElement('div');
		bar.id = id, bar.className = 'microbar';
		progress.classList.add('mprogress') , progress.style.backgroundColor = color, progress.style.width = position+'%', progress.style.transition = 'width '+getEquivalentTime(speed);
		shadow.classList.add('mshadow'), shadow.style.boxShadow = "0 0 10px "+color;
		progress.appendChild(shadow);
		bar.appendChild(progress);
		document.getElementsByTagName('body')[0].appendChild(bar);
		var transitionEnd = transitionEndEventName();
		progress.addEventListener(transitionEnd, function(){
			var width = this.style.width;
			if(width == '100%'){
				console.log(width);
			}
			else if(width == '0%'){
				console.log(width);
			}
		});
		return bar;
	}

	return function microbar(args){
		args = args || {};
		
		if(!args.hasOwnProperty('id') || typeof args['id'] !== 'string'){
			throw new Error('You need to provide an ID of type string for your microbar.');
		}
		if(args.speed > 10 || args.speed < 1){
			throw new RangeError('Speed should be an integer between 1 and 10.');
		}
		if(args.hasOwnProperty('position') && typeof args.position !== 'number'){
			throw new TypeError('Position should be a number.');
		}
		else if(args.position > 100 || args.position < 0){
			throw new RangeError('Position should be between 0 and 100.');
		}

		var position = args.position || 0,
			color = args.color || '#000000',
			speed = args.speed || 10,
			looping = args.looping || false,
			id = args.id;

		var bar = initialize(id, color, position, speed);

		var microbar = {
			id : args.id,
			moveTo: function(percentage){
				if(typeof percentage !== 'number'){
					throw new TypeError('Percentage should be a number.');
				}
				else if(percentage > 100 || percentage < 0){
					throw new RangeError('Percentage should be between 0 and 100.');
				}
				else if(looping == true){
					throw new Error('Moving Progress Bar is not allowed while looping.');
					return;
				}
				bar.getElementsByClassName('mprogress')[0].style.width = percentage+'%';
			},
			getSpeed: function(){
				return speed;
			},
			setSpeed: function(s){
				if(s > 10 || s < 1){
					throw new RangeError('Speed should be an integer between 1 and 10');
				}
				speed = s;
				bar.getElementsByClassName('mprogress')[0].style.transition = 'width '+getEquivalentTime(s);
			},
			getLooping: function(){
				return looping;
			},
			setLooping: function(loop){
				looping = loop;
			}
		};
		return microbar;
	};
});