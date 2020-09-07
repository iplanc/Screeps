var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            var links = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_LINK)
            });
            if (links.length >= 3) {
                var link = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => (structure.structureType == STRUCTURE_LINK)
                });
                if (link) {
                    if (link.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                        if (creep.withdraw(link, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(link, {visualizePathStyle: {stroke: '#ffaa00'}});
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
            else {
                var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            switch (creep.room.controller.level) {
                case 8:
                    // same as level 7
                case 7:
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_STORAGE   && i.store[RESOURCE_ENERGY] < 1000000) ||
                                        (i.structureType == STRUCTURE_FACTORY   && i.store[RESOURCE_ENERGY] < 1000000)
                    });
                    break;
                case 6:
                    // same as level 4
                case 5:
                    // same as level 4
                case 4:
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_STORAGE   && i.store[RESOURCE_ENERGY] < 1000000)
                    });
                    break;
                case 3:
                    // same as level 2
                case 2:
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50)
                    });
                    break;
                case 1:
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300)
                    });
                    break;
            }
            if (targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;
