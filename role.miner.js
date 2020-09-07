var roleMiner = {
    
    run: function(creep) {
        
        var terminal = creep.room.terminal;
        var factory = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_FACTORY
        });
        
        if (creep.store.getFreeCapacity() > 0) {
            var mineral = creep.pos.findClosestByRange(FIND_MINERALS);
            if (creep.harvest(mineral) == ERR_NOT_IN_RANGE) {
                creep.moveTo(mineral, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            for (var resourceType in creep.store) {
                if (factory.store.getUsedCapacity() < 10000) {
                    if (creep.transfer(factory, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(factory, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                else {
                    if (creep.transfer(terminal, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(terminal, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        }
    }
};

module.exports = roleMiner;