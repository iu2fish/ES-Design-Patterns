/**
 *
 * @authors
 * @links
 * @date    2016-04-30 23:41:56
 * @version 0.0.1
 */

var CreateDiv = (function() {
	var  instance;
	var CreateDiv = function (html) {
		if (instance) {
			return instance;
		}
		this.html = html;
		this.init();
		return instance = this;
	}

	CreateDiv.prototype.init = function () {
		var div = document.createElement('div');
		div.innerHTML = this.html;
		document.body.appendChild(div);
	}

	return CreateDiv;
})();

var a = new CreateDiv ('sven1');
var b = new CreateDiv ('sven2');

console.log(a === b);

/**
* 为了把instance封装起来，我们使用了自执行的匿名函数和闭包，并且让这个匿名函数返回真正的
* singleton 构造方法，这就增加了一些程序的复杂度，阅读起来也不是很舒服。
* 观察现在的构造函数：
*
*/
