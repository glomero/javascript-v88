let $query = function(selector){
	let el;
	let object = {
		getEl: function(){
			if(el){
				return el;
			}else{
				return document.querySelectorAll(selector);
			}
		},
		click: function(callback){
			for(let i = 0; i < el.length; i++){
				el[i].addEventListener('click', function(){
					callback();
				});
			}
			return this;
		},
		show: function(){
			for(let i = 0; i < el.length; i++){
				el[i].style.display = 'block';
			}
			return this;
		},
		hide: function(){
			for(let i = 0; i < el.length; i++){
				el[i].style.display = 'none';
			}
			return this;
		},
	};
	el = object.getEl(selector);
	return object;
};