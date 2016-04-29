/**
 * 
 * @authors 
 * @links 
 * @date    2016-04-29 22:52:47
 * @version 0.0.1
 */

var Singleton = function (name) {
	this.name = name;
}

Singleton.prototype.getNama = function () {
	alert(this.name);
};

Singleton.getInstance = (function () {
	var instance = null;
	return function (name) {
		if (!instance){
			instance = new Singleton(name);
		}
		
		return instance;
	}

})();

var a = Singleton.getInstance ('sven1');
var b = Singleton.getInstance ('sven2');
console.log(a === b);

/**
 * 我们通过Singleton.getInstance来获取Singleton类的唯一对象，这种方式相对简单，但是有一个问题，就是增加了这个类的不透明性。
 * Singleton类的使用者必须知道这是一个单例类，跟以往的通过new xxx的方式来获取对象不同，
 * 这里偏要使用Singleton.getInstance来过去对象。
 */