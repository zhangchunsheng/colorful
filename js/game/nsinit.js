(function(){
	NS.MatrixManager = function(){
		return this;
	};

	NS.MatrixManager.prototype = {
		src : [
			[0,0,1,1,1,2,1,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0],
		],
 
		init : function(){
			return;
		},

		setColumn : function(id, column){
			this.src[id] = column;
		},

		getColumn : function(id){
			  return this.src[id];
		}
	};
})();