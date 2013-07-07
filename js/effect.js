/**
 * effect
 * @author peter
 * @date 2013-07-07
 */
this.colorful = this.colorful || {};

(function() {
    var Effect = function() {
        this.effectContainer = null;
    }

    Effect.prototype.drawEffectContainer = function() {
        this.effectContainer = new createjs.Container();
        this.effectContainer.x = 200;
        this.effectContainer.y = 200;
    }

    Effect.prototype.addSparkles = function() {
        this.drawEffectContainer();
        //create the specified number of sparkles
        for (var i=0; i<count; i++) {
            // clone the original sparkle, so we don't need to set shared properties:
            var sparkle = bmpAnim.clone();

            // set display properties:
            sparkle.x = x;
            sparkle.y = y;
            sparkle.alpha = Math.random()*0.5+0.5;
            sparkle.scaleX = sparkle.scaleY = Math.random()+0.3;
            sparkle.compositeOperation = "lighter";

            // set up velocities:
            var a = Math.PI*2*Math.random();
            var v = (Math.random()-0.5)*30*speed;
            sparkle.vX = Math.cos(a)*v+velX;
            sparkle.vY = Math.sin(a)*v;
            sparkle.vA = -Math.random()*0.05-0.01; // alpha

            // start the animation on a random frame:
            sparkle.gotoAndPlay(Math.random()*sparkle.spriteSheet.getNumFrames()|0);

            // add to the display list:
            stage.addChild(sparkle);
        }
    }

    Effect.prototype.createRect = function(x, y, width, height, speed, velX) {
        console.log("x:" + x + " y:" + y);
        this.drawEffectContainer();
        var graphics = new createjs.Graphics();
        var rect = null;
        var r = 0;
        var g = 0;
        var b = 0;
        for(var i = 0 ; i < 50 ; i++) {
            r = colorful.utils.random(0, 255);
            g = colorful.utils.random(0, 255);
            b = colorful.utils.random(0, 255);
            graphics.beginFill(createjs.Graphics.getRGB(255, 100, 255));
            graphics.drawRect(0, 0, width, height);

            var rect = new createjs.Shape(graphics);

            // set display properties:
            rect.x = x;
            rect.y = y;
            rect.alpha = Math.random() * 0.5 + 0.5;
            rect.scaleX = rect.scaleY = Math.random() + 0.3;
            rect.compositeOperation = "lighter";

            // set up velocities:
            var a = Math.PI * 2 * Math.random();
            var v = (Math.random() - 0.5) * 30 * speed;
            rect.vX = Math.cos(a) * v + velX;
            rect.vY = Math.sin(a) * v;
            rect.vA = -Math.random() * 0.05 - 0.01; // alpha

            this.effectContainer.addChild(rect);
        }
        stage.addChild(this.effectContainer);
    }

    colorful.Effect = Effect;
})();