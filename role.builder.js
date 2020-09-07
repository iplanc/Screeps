var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if (creep.memory.building) {
            var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (targets) {
                if (creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                creep.memory.role = 'upgrader';
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_STORAGE && i.store[RESOURCE_ENERGY] > 0
            });
            if (targets.length > 0) {
                if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else {
                var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
};

module.exports = roleBuilder;