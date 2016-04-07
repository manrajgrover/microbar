/*
* @Author: manrajsingh
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-08 01:33:19
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
	var css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;} .microbar .mprogress{width: 0;height: 100%;transition: width 1s;background-color: #000000;} .microbar .mprogress .mshadow{width: 93px;position: relative;box-shadow: 0 0 10px #000000;height: 100%;float: right;transform: rotate(2deg) translate(0px,-3px);}';
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

	function initialize(id, color, position){
		var bar = document.createElement('div'), progress = document.createElement('div'), shadow = document.createElement('div');
		bar.id = id, bar.className = 'microbar';
		progress.classList.add('mprogress') , progress.style.color = color, progress.style.width = position+'%';
		shadow.classList.add('mshadow');
		progress.appendChild(shadow);
		bar.appendChild(progress);
		return bar;
	}

	return function microbar(args){
		args = args || {};
		
		if(!args.hasOwnProperty('id') || typeof args['id'] !== 'string'){
			throw new Error('You need to provide an ID of type string for your microbar.');
		}
		var position = 50,
			color = args.color || '#000000',
			speed = args.speed || 1,
			looping = args.looping || false,
			id = args.id;

		addStyleSheet();
		var bar = initialize(id, color,position);
		document.getElementsByTagName('body')[0].appendChild(bar);

		var microbar = {
			id : args.id,
			moveTo: function(percentage){
				if(typeof percentage !== 'number'){
					throw new TypeError('Percentage should be a number.');
				}
				else if(percentage > 100 || percentage < 0){
					throw new RangeError('Percentage should be between 0 and 100.');
				}
				bar.getElementsByClassName('mprogress')[0].style.width = percentage+'%';
			},
			getSpeed: function(){
				return speed;
			},
			setSpeed: function(s){
				speed = s;
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