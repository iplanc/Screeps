/*
 * @Author: PlanC
 * @Date: 2020-09-11 08:40:15
 * @LastEditTime: 2020-09-16 18:12:00
 * @FilePath: \default\stuff.tools.js
 */

var tools = {
    findPortal: function(creep) {
        var goals = _.map(creep.room.find(FIND_SOURCES), function(portal) {
            return { pos: portal.pos, range: 1 };
        });

        var ret = PathFinder.search(
            creep.pos, goals,
            {
                plainCost: 2,
                swampCost: 10,

                roomCallback: function(roomName) {

                    var room = Game.rooms[roomName];
                    if (!room) return;
                    var costs = new PathFinder.CostMatrix;

                    room.find(FIND_STRUCTURES).forEach(function(struct) {
                        if (struct.structureType === STRUCTURE_ROAD) {
                            costs.set(struct.pos.x, struct.pos.y, 1);
                        } else if (struct.structureType !== STRUCTURE_CONTAINER &&
                                                (struct.structureType !== STRUCTURE_RAMPART ||
                                                !struct.my)) {
                            costs.set(struct.pos.x, struct.pos.y, 0xff);
                        }
                    });

                    room.find(FIND_CREEPS).forEach(function(creep) {
                        costs.set(creep.pos.x, creep.pos.y, 0xff);
                    });

                    return costs;
                },
            }
        );

        var pos = ret.path[0];
        creep.move(creep.pos.getDirectionTo(pos));

        return ;
    }
}
module.exports = tools;
