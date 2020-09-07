var roleSupplier = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if (creep.store.getFreeCapacity() > 0) {
            var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) =>  (structure.structureType == STRUCTURE_STORAGE)
            });
            if (targets) {
                if (creep.withdraw(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            tower = creep.pos.findInRange(FIND_STRUCTURES, 30, {
                filter: (structure) =>  (structure.structureType == STRUCTURE_TOWER && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
            });
            if (tower) {
                if (creep.transfer(tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	} 
};

module.exports = roleSupplier;