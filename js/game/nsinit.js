(function(){
	NS.MatrixManager = function(){
		this.init();
		return this;
	};

	NS.MatrixManager.prototype = {
		src : [
			[0,0,1,1,1,1,2,0,0,0,0],
			[0,0,0,0,2,0,0,0,0,0,0],
			[0,0,0,0,3,0,0,0,0,0,0],
			[0,0,0,0,3,3,2,0,0,0,0],
			[0,0,0,0,1,0,0,0,0,0,0],
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
		},

		resetSquare : function(square) {
			var temp = 0;
			for (var i = 0; i < 11; i++) {
				for (var j = 0; j < 11; j++) {
					if(this.src[i][j] != 0){
						temp = this.src[i][j];
					}
					if(this.src[i][j] == square){
						return square;
					}
				}
			}
			if(temp == 0){
				alert("stage clear");
			}
			else{
				return temp;
			}
			
		}
	};
})();