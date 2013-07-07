function drawStage(){
	stage.removeAllChildren();
	initLaunchButton();
	for(var i=0; i<11; i++){
		for(var j=0; j<11; j++){
			var circle = new createjs.Shape();
			if(MatrixManager.src[i][j]==1){
				circle.graphics.beginFill("orange").drawCircle(100+40*i, 600-40*j, 20);
			}
			if(MatrixManager.src[i][j]==2){
				circle.graphics.beginFill("yellow").drawCircle(100+40*i, 600-40*j, 20);
			}
			if(MatrixManager.src[i][j]==3){
				circle.graphics.beginFill("green").drawCircle(100+40*i, 600-40*j, 20);
			}
			stage.addChild(circle);
		}
	}
	var squareShape = new createjs.Shape();
	if(square==1){
		squareShape.graphics.beginFill("orange").drawCircle(100+40*position, 600, 20);
	}
	if(square==2){
		squareShape.graphics.beginFill("yellow").drawCircle(100+40*position, 600, 20);
	}
	if(square==3){
		squareShape.graphics.beginFill("green").drawCircle(100+40*position, 600, 20);
	}
	stage.addChild(squareShape);
	stage.update();
}

function initLaunchButton(){
    var container = new createjs.Container();
    container.x = 100;
    container.y = 80;

    var target = new createjs.Shape();
    target.graphics.beginFill("yellow").drawRect(-10,-10,150,60);
    container.addChild(target);

    var txt = new createjs.Text("Left!", "36px Arial", "orange");
    txt.textBaseline = "top";
    container.addChild(txt);

    stage.addChild(container);

    container.addEventListener("click", function(evt) { 
        leftMove();
        drawStage();
    });

    var container_1 = new createjs.Container();
    container_1.x = 260;
    container_1.y = 80;

    var target = new createjs.Shape();
    target.graphics.beginFill("yellow").drawRect(-10,-10,150,60);
    container_1.addChild(target);

    var txt = new createjs.Text("Launch!", "36px Arial", "orange");
    txt.textBaseline = "top";
    container_1.addChild(txt);

    stage.addChild(container_1);

    container_1.addEventListener("click", function(evt) { 
        launch();
        drawStage();
    });

    var container_2 = new createjs.Container();
    container_2.x = 420;
    container_2.y = 80;

    var target = new createjs.Shape();
    target.graphics.beginFill("yellow").drawRect(-10,-10,150,60);
    container_2.addChild(target);

    var txt = new createjs.Text("Right!", "36px Arial", "orange");
    txt.textBaseline = "top";
    container_2.addChild(txt);

    stage.addChild(container_2);

    container_2.addEventListener("click", function(evt) { 
        rightMove();
        drawStage();
    });
}

function launch(){
	//launch a square
	var i = 0;
	var flag = 0
	for(i = 0; i < 11; i++){
		if(column[i] == 0 || square == column[i]){
			if(square == column[i]){
				column[i] = 0;
				flag = 1;
			}
		}
		else{
			square = MatrixManager.resetSquare(square);
			var temp = square;
			square = column[i];
			column[i] = temp;
			break;
		}
	}
	square = MatrixManager.resetSquare(square);
	return column;
}

function rightMove(){
	//move the square to the right
	if(position != 11){
		position++;
		column = MatrixManager.src[position];
		return "success";
	}
	return "failure";
}

function leftMove(){
	//move the square to the left
	if(position != 0){
		position--;
		column = MatrixManager.src[position];
		return "success";
	}
	return "failure";
}