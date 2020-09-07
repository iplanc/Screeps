var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

	    if (creep.memory.upgrading) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (i) =>  (i.structureType == STRUCTURE_STORAGE && i.store[RESOURCE_ENERGY] > 0) || 
                                (i.structureType == STRUCTURE_CONTAINER && i.store[RESOURCE_ENERGY] > 0) ||
                                (i.structureType == STRUCTURE_LINK && i.store[RESOURCE_ENERGY] > 0)
            });
            if (targets) {
                if (creep.withdraw(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffaa00'}});
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

module.exports = roleUpgrader;