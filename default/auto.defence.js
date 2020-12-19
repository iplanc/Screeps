/*
 * @Author: PlanC
 * @Date: 2020-08-20 14:07:41
 * @LastEditTime: 2020-09-16 18:11:06
 * @FilePath: \default\auto.defence.js
 */

var autoDefence = {
    run: function() {
        for (var name in Game.rooms) {
            var attackerCounter = 0;
            var hostile = Game.rooms[name].find(FIND_HOSTILE_CREEPS);
            if (hostile.length > 0) {
                var spawn = Game.rooms[name].find(FIND_MY_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
                });

                if (attackerCounter < 3 && spawn.length > 0) spawn[0].spawnCreep([TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE], 'Attacker_' + name + '_' + Game.time, {memory: {role: 'attacker'}});

                for (var creepName in Game.creeps) {
                    var creep = Game.creeps[creepName];
                    if (creep.memory.role == 'attacker') {
                        attackerCounter++;
                        var hostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                        if (hostile) {
                            if (creep.attack(hostile) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(hostile, {visualizePathStyle: {stroke: '#ffffff'}});
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = autoDefence;
