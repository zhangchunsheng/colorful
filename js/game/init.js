function init() {
    //Create a stage by getting a reference to the canvas
    stage = new createjs.Stage("demoCanvas");
    MatrixManager = new NS.MatrixManager();
    initStage();
    //Update stage will render next frame
    stage.update();
}