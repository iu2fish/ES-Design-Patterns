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

 var CreateDiv = function (html) {
	 if (instance) {
		 return instance;
	 }
	 this.html = html;
	 this.init();
	 return instance = this;
 }

 /**
	*在这段代码中，createDiv实际做了2件事，第一，是创建对象和执行初始化init的方法。
	*第二 是保证只有一个对象。虽然我们这里还未接触过“单一职责原则”的概念，但是可以明确的是，这是一种不好的做法，至少这个构造函数看起来很奇怪。

	*假设我们某天需要利用这个类，在页面中创建很多个div，即要让这个类从单例变成一个普通的可以产生多个实例的类，那我们必须得写createDiv构造函数，
	*把控制创建唯一对象的那一段去掉，这种修改会给我们带来不必要的麻烦。
 */
