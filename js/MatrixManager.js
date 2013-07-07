/**
 * MatrixManager
 * @author peter
 * @date 2013-07-07
 */
this.colorful = this.colorful || {};

(function() {
    var MatrixManager = function() {
        this.width = 11;
        this.height = 11;
        this.x = 100;
        this.y = 100;
        this.rectWidth = 40;
        this.rectHeight = 40;

        this.matrix = [
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
        ];
        return this;
    };

    MatrixManager.prototype.setMatrix = function(matrix) {
        this.matrix = matrix;
    }

    MatrixManager.prototype.setColumn = function(row, column) {
        this.matrix[row] = column;
    }

    MatrixManager.prototype.getColumn = function(row) {
        return this.matrix[row];
    }

    MatrixManager.prototype.resetSquare = function(square) {
        var temp = 0;
        for(var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                if(this.matrix[i][j] != 0) {
                    temp = this.matrix[i][j];
                }
                if(this.matrix[i][j] == square) {
                    return square;
                }
            }
        }
        if(temp == 0) {
            console.log("cleared");
            return {
                cleared: 1
            };
        } else {
            return temp;
        }
    }

    /**
     * 画二维矩阵
     */
    MatrixManager.prototype.drawMatrix = function() {
        matrixContainer.removeAllChildren();
        colorful.drawRectBg();
        var x = 0;
        var y = 0;
        var width = this.rectWidth;
        var height = this.rectHeight;

        for(var i = 0 ; i < this.width ; i++) {
            for(var j = 0 ; j < this.height ; j++) {
                if(this.matrix[i][j] == 0)
                    continue;

                x = i * this.rectWidth;
                y = j * this.rectHeight;
                colorful.utils.drawMatrixRect(this.matrix[i][j], x, y, width, height);
            }
        }
    }

    colorful.MatrixManager = MatrixManager;
})();