function init() {
    //Create a stage by getting a reference to the canvas
    stage = new createjs.Stage("demoCanvas");
    MatrixManager = new NS.MatrixManager();

    //0 for none, 1 for orange. 2 for yellow, 3 for green;
    position = 0;
    square = 1;
    column = MatrixManager.src[position];
    
    drawStage();

    //Update stage will render next frame
    stage.update();
}

function showState(){
	alert("square:"+square+"  columns:"+MatrixManager.src);
}