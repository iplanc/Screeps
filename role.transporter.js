var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.store.getFreeCapacity() > 0) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (i) => i.structureType == STRUCTURE_STORAGE
            });
            if (targets.length > 0) {
                if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            switch (creep.room.controller.level) {
                case 8:
                    var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 200) ||
                                        (i.structureType == STRUCTURE_TOWER     && i.store[RESOURCE_ENERGY] < 1000) ||
                                        (i.structureType == STRUCTURE_LINK      && i.store[RESOURCE_ENERGY] < 400) && (i.id != '5e5374800a99ae4be2286c7a') ||
                                        (i.structureType == STRUCTURE_LAB       && i.store[RESOURCE_ENERGY] < 2000) ||
                                        (i.structureType == STRUCTURE_TERMINAL  && i.store[RESOURCE_ENERGY] < 10000) ||
                                        (i.structureType == STRUCTURE_NUKER     && i.store[RESOURCE_ENERGY] < 300000)
                    });
                    break;
                case 7:
                    var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 100) ||
                                        (i.structureType == STRUCTURE_TOWER     && i.store[RESOURCE_ENERGY] < 1000) ||
                                        (i.structureType == STRUCTURE_LINK      && i.store[RESOURCE_ENERGY] < 400) ||
                                        (i.structureType == STRUCTURE_LAB       && i.store[RESOURCE_ENERGY] < 2000) ||
                                        (i.structureType == STRUCTURE_TERMINAL  && i.store[RESOURCE_ENERGY] < 10000)
                    });
                    break;
                case 6:
                    var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50) ||
                                        (i.structureType == STRUCTURE_TOWER     && i.store[RESOURCE_ENERGY] < 1000) ||
                                        (i.structureType == STRUCTURE_LINK      && i.store[RESOURCE_ENERGY] < 400) ||
                                        (i.structureType == STRUCTURE_LAB       && i.store[RESOURCE_ENERGY] < 2000) ||
                                        (i.structureType == STRUCTURE_TERMINAL  && i.store[RESOURCE_ENERGY] < 10000)
                    });
                    break;
                case 5:
                    var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50) ||
                                        (i.structureType == STRUCTURE_TOWER     && i.store[RESOURCE_ENERGY] < 1000) ||
                                        (i.structureType == STRUCTURE_LINK      && i.store[RESOURCE_ENERGY] < 400)
                    });
                    break;
                case 4:
                    var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (i) =>  (i.structureType == STRUCTURE_SPAWN     && i.store[RESOURCE_ENERGY] < 300) ||
                                        (i.structureType == STRUCTURE_EXTENSION && i.store[RESOURCE_ENERGY] < 50) ||
                                        (i.structureType == STRUCTURE_TOWER     && i.store[RESOURCE_ENERGY] < 1000)
                    });
                    break;
                case 3:
                    // no trans spawn in level 3
                case 2:
                    // no trans spawn in level 2
                case 1:
                    // no trans spawn in level 1
            }
            if (targets) {
                if (creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleTransporter;
