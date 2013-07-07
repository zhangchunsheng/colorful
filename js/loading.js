/**
 * Loading
 * @author peter
 * @date 2013-07-06
 */
this.colorful = this.colorful || {};

(function() {
    var Loading = function(loadedHandle, handleComplete, errorHandle) {
        // Use this instead to favor tag loading
        this.preload = new createjs.LoadQueue(true, "assets/");
        createjs.Sound.registerPlugin(createjs.HTMLAudioPlugin);  // need this so it doesn't default to Web Audio
        this.preload.installPlugin(createjs.Sound);
        this.preload.addEventListener("fileload", loadedHandle);
        this.preload.addEventListener("error", errorHandle);
        this.preload.addEventListener("complete", handleComplete);
    }

    Loading.prototype.loadManifest = function(manifest) {
        this.preload.loadManifest(manifest);
    }

    /**
     * 加载资源
     */
    Loading.prototype.loadResources = function() {
        for(var i = 0 ; i < resources.length ; i++) {
            this.preload.loadFile(resources[i].src);
        }
    }

    /**
     * 加载map
     * @param levelId
     */
    Loading.prototype.loadLevel = function(levelId) {
        var src = "levels/level0.json";
        for(var i = 0 ; i < resources.length ; i++) {
            if(resources[i].name == "level" + levelId) {
                src = resources[i].src;
                break;
            }
        }
        this.preload.loadFile(src);
    }
    colorful.Loading = Loading;
})();