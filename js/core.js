/**
 * core
 * @author peter
 * @date 2013-07-06
 */
(function() {
    var colorful = {};

    colorful.rectType = {
        empty: 0,
        orange: 1,
        yellow: 2,
        green: 3
    };
    colorful.rectColor = {
        1: ["#97760E","#97760E"],
        2: ["#849722","#849722"],
        3: ["#209724","#209724"]
    }

    window.colorful = colorful;
})();