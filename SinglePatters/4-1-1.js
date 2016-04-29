/**
 * 
 * @authors 
 * @links 
 * @date    2016-04-28 17:19:10
 * @version 0.0.1
 * @description 单例模式
 */

var Singleton = function (name) {
	this.name = name;
	this.instance = null;
};

Singleton.prototype.gtName = function () {
	alert (this.name);
}

Singleton.getInstance = function ( name ) {
	if (!this.instance) {
		this.instance = new Singleton ( name );
	}
	return this.instance;
}

var a = Singleton.getInstance( 'sven1' );
var b = Singleton.getInstance( 'sven2' );

alert (a == b);