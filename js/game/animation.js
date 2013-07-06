function initStage(){
	for(var i=0; i<11; i++){
		for(var j=0; j<11; j++){
			var circle = new createjs.Shape();
			circle.graphics.beginFill("red").drawCircle(100+40*i, 100+40*j, 20);
			stage.addChild(circle);
		}
	}
}

function launch(){
	//launch a square
}

function move(){
	//move the square
}