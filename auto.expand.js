var targetRoom = '';
var expandRoom = '';
var finished = 1;

var autoExpand = {
    run: function() {
        if (targetRoom != '' && expandRoom != '') {
            Game.map.visual.line(new RoomPosition(25, 25, targetRoom), new RoomPosition(25, 25, expandRoom), {width: 2, color: "#ffff00", opacity: 0.5, lineStyle: "dotted"})
            Game.getObjectById('5ee0b056adccafb4db84ffe3').observeRoom(targetRoom);
            var construction_spawn = Game.rooms[targetRoom].find(FIND_CONSTRUCTION_SITES, {
                filter: spawn => (spawn.structureType == STRUCTURE_SPAWN)
            });
            if (construction_spawn.ERR_NOT_FOUND != undefined) {
                console.log('Expanding <font color="cyan">' + targetRoom + '</font> from <font color="cyan">' + expandRoom + '</font>, progress <font color="cyan">' + construction_spawn[0].progress / construction_spawn[0].progressTotal * 100 +'%</font>.');
            }
            else {
                finished = 0;
            }
            var spawns = Game.rooms[expandRoom].find(FIND_STRUCTURES, {
                filter: spawn => (spawn.structureType == STRUCTURE_SPAWN) && (spawn.spawning == undefined)
            });
            if (spawns.length > 0) {
                if (spawns[0].spawnCreep([CLAIM,CLAIM,MOVE,MOVE], 'claim', {memory:{role:'claim'}}) != ERR_NAME_EXISTS) {}
                if (spawns[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'expandBuilder', {memory:{role:'expandBuilder'}}) != ERR_NAME_EXISTS) {}
                // if (spawns[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'expandUpgrader', {memory:{role:'expandUpgrader'}}) != ERR_NAME_EXISTS) {}
                
                if (Game.rooms[targetRoom].controller.owner == undefined) {
                    if (Game.creeps['claim'] != undefined) {
                        if (Game.creeps['claim'].claimController(Game.creeps['claim'].room.controller) == ERR_NOT_IN_RANGE) {
                            Game.creeps['claim'].moveTo(Game.rooms[targetRoom].controller.pos, {visualizePathStyle: {stroke: '#ffffff'}});
                        }
                    }
                    else {
                        console.log("spawning claim.");
                    }
                }
                else {
                    if (Game.creeps['claim'] != undefined) {
                        Game.creeps['claim'].signController(Game.creeps['claim'].room.controller, "Base No." + Game.gcl.level);
                        Game.creeps['claim'].suicide();
                    }
                }
                
                if (Game.creeps['expandBuilder'] != undefined) {
                    if (Game.creeps['expandBuilder'].pos.roomName != targetRoom) {
                        Game.creeps['expandBuilder'].moveTo(Game.rooms[targetRoom].controller.pos, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    else {
                        Game.creeps['expandBuilder'].memory.role = 'builder';
                    }
                }
                else {
                    console.log("spawning builder.");
                }
                
                if (Game.creeps['expandUpgrader'] != undefined) {
                    if (Game.creeps['expandUpgrader'].pos.roomName != targetRoom) {
                        Game.creeps['expandUpgrader'].moveTo(Game.rooms[targetRoom].controller.pos, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    else {
                        Game.creeps['expandUpgrader'].memory.role = 'upgrader';
                    }
                }
                else {
                    console.log("spawning upgrader.");
                }
            }
        }
        else {
            console.log('<font color="cyan">No</font> plan for expanding now.');
        }
    }
}

module.exports = autoExpand;