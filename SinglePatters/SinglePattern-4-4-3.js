/**
 *
 * @date    2016-05-01 22:52:47
 * @version 0.0.1
 */

/**
 * 我们现在 通过引入代理类的方式，来解决上面提到的问题。
 * 首先在CreateDiv构造函数中，把负责管理单例的代码移除出去，
 * 使它成为一个普通的创建div类。
 * 
 */

var CreateDiv = function (html) {
	this.html = html;
	this.init();
}

CreateDiv.prototype.init = function () {
	var div = document.createElement('div');
	div.innerHTML = this.html;
	document.body.appendChild(div);
}

/**
 * 接下来引入代理类，proxySingletonCreateDiv
 * 
 */

var ProxySingletonCreateDiv = (function(){

	var instance;
	return function (html) {
		if (!instance) {
			instance = new CreateDiv (html);
		}
		return instance;
	}
})();

var a = new ProxySingletonCreateDiv ('sven1');
var b = new ProxySingletonCreateDiv ('sven2');

console.log(a === b);