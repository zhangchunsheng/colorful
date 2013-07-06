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
	for(var i = 0; i < 11; i++){
		if(column[i] == 0 || square == column[i]){
			column[i] = 0;
		}
		else{
			var temp = square;
			square = column[i];
			column[i] = temp;
			break;
		}
	}
	return column;
}

function rightMove(){
	//move the square to the right
	if(square != 11){
		square++;
		return "success";
	}
	return "failure";
}

function leftMove(){
	//move the square to the left
	if(square != 0){
		square--;
		return "success";
	}
	return "failure";
}