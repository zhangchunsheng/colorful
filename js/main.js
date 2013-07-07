/**
 * main
 * @author peter
 * @date 2013-07-06
 */
this.colorful = this.colorful || {};

(function() {
    colorful.init = function() {
        // get a reference to the canvas we'll be working with:
        canvas = document.getElementById("gameCanvas");

        // create a stage object to work with the canvas. This is the top level node in the display list:
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(10);

        matrixManager = new colorful.MatrixManager();
        //0 for none, 1 for orange. 2 for yellow, 3 for green;
        position = 0;
        square = 1;
        column = matrixManager.matrix[position];

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", colorful.tick);
    };

    colorful.tick = function() {
        var h = canvas.height;
        var w = canvas.width;
        if(effect != null) {
            for (var i = 0; i < effect.effectContainer.getNumChildren(); i++) {
                var rect = effect.effectContainer.getChildAt(i);

                // apply gravity and friction
                rect.vY += 2;
                rect.vX *= 0.98;

                // update position, scale, and alpha:
                rect.x += rect.vX;
                rect.y += rect.vY;
                rect.alpha += rect.vA;


                // remove sparkles that are no longer visible or are stalled:
                if (rect.alpha <= 0 || rect.y>=h && rect.vY < 10) {
                    effect.effectContainer.removeChildAt(i);
                }

                //bounce sparkles off the bottom
                if (rect.y > h) {
                    rect.vY *= -(Math.random()*0.4+0.4);
                    rect.y -= rect.y % h;
                }
                if (rect.x >= w || rect.x <= 0) { rect.vX *= -1; }
            }
        }

        stage.update(event);
    };

    colorful.initRectContainer = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.drawRoundRect(0, 0, 440, 440, 10);

        var s = new createjs.Shape(g);
        //s.x = 100;
        //s.y = 100;

        matrixContainer = new createjs.Container();
        matrixContainer.x = 100;
        matrixContainer.y = 100;
        matrixContainer.addChild(s);

        stage.addChild(matrixContainer);
    };

    colorful.drawRectBg = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.drawRoundRect(0, 0, 440, 440, 10);

        var s = new createjs.Shape(g);
        //s.x = 100;
        //s.y = 100;

        matrixContainer.addChild(s);
    };

    colorful.drawRectController = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.drawRoundRect(0, 0, 440, 40, 10);

        var s = new createjs.Shape(g);
        //s.x = 100;
        //s.y = 100;

        controllerContainer = new createjs.Container();
        controllerContainer.x = 100;
        controllerContainer.y = 560;
        controllerContainer.addChild(s);

        stage.addChild(controllerContainer);
    };

    /**
     * 绘制控制器
     */
    colorful.drawController = function(index) {
        if(typeof index == "undefined") {
            index = colorful.utils.random(0, 10);
        }
        position = index;
        console.log(position);
        colorful.utils.drawRectController(square, index * 40, 0, 40  - 2, 40 - 2);
    }

    colorful.drawLeftButton = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.1));
        g.drawRoundRect(0, 0, 180, 180, 10);

        var s = new createjs.Shape(g);
        s.x = 25;
        s.y = 760;

        s.addEventListener("click", function() {
            //move the square to the left
            if(position > 0) {
                position--;
                column = matrixManager.matrix[position];
                colorful.drawController(position);
                return true;
            }
            return false;
        });

        stage.addChild(s);
    };

    colorful.drawMiddleButton = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.1));
        g.drawRoundRect(0, 0, 180, 180, 10);

        var s = new createjs.Shape(g);
        s.x = 230;
        s.y = 710;

        s.addEventListener("click", function() {
            var i = 0;
            var flag = 0;
            var index = 0;
            for(i = matrixManager.width - 1; i > -1 ; i--) {
                if(column[i] == 0 || square == column[i]) {
                    if(square == column[i]) {
                        column[i] = 0;
                        index = i;
                        flag = 1;
                    }
                } else {
                    square = matrixManager.resetSquare(square);
                    var temp = square;
                    square = column[i];
                    column[i] = temp;
                    break;
                }
            }
            if(flag == 1) {
                effect = new colorful.Effect();
                effect.createRect(position * matrixManager.width, index * matrixManager.height, 5, 5, 10, position * matrixManager.width);
            }
            matrixManager.drawMatrix();
            square = matrixManager.resetSquare(square);
            if(typeof square == "object") {
                controllerContainer.removeAllChildren();
                console.log("win");
            } else {
                colorful.drawController(position);
            }

            return column;
        });

        stage.addChild(s);
    };

    colorful.drawRightButton = function() {
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginStroke(createjs.Graphics.getRGB(0 ,0, 0));
        g.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.1));
        g.drawRoundRect(0, 0, 180, 180, 10);

        var s = new createjs.Shape(g);
        s.x = 435;
        s.y = 760;

        s.addEventListener("click", function() {
            if(position < matrixManager.width - 1) {
                position++;
                column = matrixManager.matrix[position];
                colorful.drawController(position);
                return true;
            }
            return false;
        });

        stage.addChild(s);
    };
})();