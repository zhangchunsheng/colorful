/**
 * mapReader
 * @author peter
 * @date 2013-07-06
 */
this.colorful = this.colorful || {};

(function() {
    var mapReader = {};

    mapReader.read = function(data) {
        var width = data.width;
        var height = data.height;

        var tile_collisions = readTileCollisions(data.tilesets);
        console.log(tile_collisions);
        var map = _readMap(data.layers, tile_collisions);
        console.log(map);
        return map;
    }

    function readTileCollisions(tilesets) {
        var tileproperties = {};
        var tile_collisions = {};
        for(var i = 0 ; tilesets.length ; i++) {
            if(tilesets[i].name == "tile_collision") {
                tileproperties = tilesets[i].tileproperties;
                console.log(tileproperties);
                for(var o in tileproperties) {
                    tile_collisions[parseInt(o) + 1] = tileproperties[o];
                }
                break;
            }
        }
        return tile_collisions;
    }

    function readMap(layers, collisions) {
        var map = [];
        var data = [];
        var width = 0;
        var height = 0;
        var row = 0;
        var col = 0;
        for(var i = 0 ; i < layers.length ; i++) {
            if(layers[i].name == "map") {
                data = layers[i].data;
                width = layers[i].width;
                height = layers[i].height;
                for(var j = 0 ; j < data.length ; j++) {
                    if(j % height == 0) {
                        row = j / height;
                        map[row] = [];
                    }
                    map[row].push(collisions[data[j]].type);
                }
                break;
            }
        }
        return map;
    }

    function _readMap(layers, collisions) {
        var map = [];
        var data = [];
        var width = 0;
        var height = 0;
        var row = 0;
        var col = 0;
        for(var i = 0 ; i < layers.length ; i++) {
            if(layers[i].name == "map") {
                data = layers[i].data;
                width = layers[i].width;
                height = layers[i].height;
                for(var j = 0 ; j < height ; j++) {
                    map[j] = [];
                }
                break;
            }
        }
        for(var i = 0 ; i < layers.length ; i++) {
            if(layers[i].name == "map") {
                data = layers[i].data;
                width = layers[i].width;
                height = layers[i].height;
                for(var j = 0 ; j < data.length ; j++) {
                    if(j % width == 0) {
                        row = j / width;
                    }
                    map[j - (row * height)].push(collisions[data[j]].type);
                }
                break;
            }
        }
        return map;
    }

    colorful.mapReader = mapReader;
})();