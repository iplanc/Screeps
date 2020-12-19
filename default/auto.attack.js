/*
 * @Author: PlanC
 * @Date: 2020-08-20 14:07:41
 * @LastEditTime: 2020-09-16 18:11:10
 * @FilePath: \default\auto.attack.js
 */

var attackerCounter = 5;
var attackRoom = 'W33N5';
var targetRoom = 'W33N4';
var finished;

var autoAttack = {
    run: function() {
        if (finished) {
            if (targetRoom != '' && attackerCounter >= 0) {
                var spawn = Game.rooms[attackRoom].find(FIND_MY_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
                });
                if (spawn.length > 0) {
                    spawn[0].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE], 'attacker_' + attackRoom + '_' + Game.time, {memory: {role: 'attacker'}});
                }
            }
            for (var name in Game.creeps) {
                var creep = Game.creeps[name];
                if (creep.memory.role == 'attacker') {
                    attackerCounter--;
                    if (creep.pos.roomName != targetRoom) {
                        creep.moveTo(Game.flags.attackFlag1, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    var hostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                    var hostile_structure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                    if (hostile) {
                        creep.moveTo(hostile, {visualizePathStyle: {stroke: '#ffffff'}});
                        creep.attack(hostile);
                    }
                    else if (hostile_structure) {
                        creep.moveTo(hostile_structure, {visualizePathStyle: {stroke: '#ffffff'}});
                        creep.attack(hostile_structure);
                    }
                    if (hostile == undefined && hostile_structure == undefined) {
                        finished = 1;
                    }
                    else {
                        finished = 0;
                    }
                }
            }
        }
    }
}

module.exports = autoAttack;
