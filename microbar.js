/*
* @Author: manrajsingh
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-07 20:55:54
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
	var css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;} .progress{width: 0;height: 100%;background-color: #000000;}';
	
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
	
	return function microbar(args){
		args = args || {};
		var current = 0,
			color = args.color || '#000000',
			speed = args.speed || 0.3,
			looping = args.looping || false,
			position = args.position || 'top';
		addStyleSheet();
		var microbar = {
			element : '',
			moveTo: function(percentage){

			},
			setColor: function(color){

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
			},
			getPosition: function(){
				return position;
			},
			setPosition: function(pos){
				position = pos;
			}
		};
		return microbar;
	};
});