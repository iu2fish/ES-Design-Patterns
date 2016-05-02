/**
 * 
 * @authors 
 * @links 
 * @date    2016-05-03 00:18:20
 * @version 0.0.1
 */

var MyApp = {};
MyApp.namespace = function ( name ) {
	var parts = name.split('.');
	var current = MyApp;
	for (var i in parts) {
		if (!current[parts[i]]){
			current[parts[i]] = {};
		}
		current = current[parts[i]];
	}
};

MyApp.namespace('event');
MyApp.namespace('dom.style');

/**
 * 上面的代码等同于一下代码
 */
var MyApp = {
	event: {},
	dom: {
		style: {}
	}
}