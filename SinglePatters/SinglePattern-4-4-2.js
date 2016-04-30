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