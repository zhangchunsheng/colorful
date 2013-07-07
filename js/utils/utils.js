/**
 * utils
 * @author peter
 * @date 2013-07-06
 */
this.colorful = this.colorful || {};

(function() {
    var utils = {}

    utils.drawMatrixRect = function(rectType, x, y, width, height) {
        var color = colorful.rectColor[rectType];

        var x0 = 100;
        var y0 = 100;
        var r0 = 0;
        var x1 = 100;
        var y1 = 100;
        var r1 = 50;

        var g = new createjs.Graphics();
        g.beginRadialGradientFill(color, [0, 1], x0, y0, r0, x1, y1, r1);;
        g.drawRoundRect(x, y, width - 2, height - 2, 5);

        var rectShape = new createjs.Shape(g);

        matrixContainer.addChild(rectShape);
    }

    utils.drawRectController = function(rectType, x, y, width, height) {
        controllerContainer.removeAllChildren();
        var color = colorful.rectColor[rectType];

        var x0 = 100;
        var y0 = 100;
        var r0 = 0;
        var x1 = 100;
        var y1 = 100;
        var r1 = 50;

        var g = new createjs.Graphics();
        g.beginRadialGradientFill(color, [0, 1], x0, y0, r0, x1, y1, r1);;
        g.drawRoundRect(x, y, width - 2, height - 2, 5);

        var rectShape = new createjs.Shape(g);

        controllerContainer.addChild(rectShape);
    }

    utils.random = function(lower, higher) {
        return Math.floor(Math.random() * (higher - lower)) + lower;
    }

    colorful.utils = utils;
})();