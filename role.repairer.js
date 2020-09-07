var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
    
        if (creep.memory.repaireing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repaireing = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.repaireing && creep.store.getFreeCapacity() == 0) {
            creep.memory.repaireing = true;
            creep.say('🛠 repair')
        }
        
        var room = creep.room
        if (room.find(FIND_STRUCTURES, {filter: (object => (object.structureType == STRUCTURE_TOWER))}).length > 0) {
            var targets = room.find(FIND_STRUCTURES, {
                filter: (object) => ((object.structureType == STRUCTURE_WALL) || (object.structureType == STRUCTURE_RAMPART)) && ((object.hits != undefined) && (object.hits < object.hitsMax))
            });
        }
        else {
            var targets = room.find(FIND_STRUCTURES, {
                filter: (object) => ((object.hits != undefined) && (object.hits < object.hitsMax))
            });
        }
        
        targets.sort((a,b) => a.hits - b.hits);
        
        if (creep.memory.repaireing) {
            if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var targetsSource = creep.room.find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_STORAGE && i.store[RESOURCE_ENERGY] > 0
            });
            if (targetsSource.length > 0) {
                if (creep.withdraw(targetsSource[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetsSource[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
	}
};

module.exports = roleRepairer;