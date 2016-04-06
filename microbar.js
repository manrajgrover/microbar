/*
* @Author: manrajsingh
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   manrajsingh
* @Last Modified time: 2016-04-06 19:17:39
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
	return function microbar(args){
		args = args || {};
		var current = 0,
		color = args.color || '#000000',
		speed = args.speed || 0.3,
		looping = args.looping || false,
		position = args.position || 'top';
		var bar = document.createElement('div');
		var microbar = {
			element : bar,
			moveTo: function(percentage){

			},
			setColor: function(color){

			},
			getSpeed: function(){
				return speed
			},
			setSpeed: function(speed){

			},
			getLooping: function(){
				return looping
			},
			setLooping: function(loop){

			},
			getPosition: function(){
				return position
			},
			setPosition: function(){

			}
		};
		return microbar;
	};
});