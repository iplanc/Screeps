/*
 * @Author: PlanC
 * @Date: 2020-09-07 20:38:10
 * @LastEditTime: 2020-09-16 18:10:45
 * @FilePath: \default\auto.export.worldVisual.js
 */

var worldVisualize = {
    run: function() {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            try {
                Game.map.visual.line(creep.pos, new RoomPosition(creep.memory._move.dest.x, creep.memory._move.dest.y, creep.memory._move.room), {width: 0.5, color: "#ffff00", opacity: 0.5, lineStyle: "dotted"});
            }
            catch (e) {
                //console.log(e);
            }
        }
    }
};

module.exports = worldVisualize;
