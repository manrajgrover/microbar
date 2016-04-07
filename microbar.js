/*
* @Author: manrajsingh
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-07 22:16:38
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
	var css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;} .microbar #progress{width: 0;height: 100%;background-color: #000000;}';
	var ctr = 0;
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
		if(!args.hasOwnProperty("id")){
			throw new Error('You need to provide an ID for your microbar');
		}
		var current = 0,
			color = args.color || '#000000',
			speed = args.speed || 1,
			looping = args.looping || false,
			position = args.position || 'top';
		addStyleSheet();
		var microbar = {
			id : args.id,
			moveTo: function(percentage){

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