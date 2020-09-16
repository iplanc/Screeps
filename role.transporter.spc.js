var roleTransporterSpc = {
    run: function(creep) {
        var factory = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_FACTORY
        });
        var powerSpawn = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_POWER_SPAWN
        });
        var nuker = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_NUKER
        });
        if (creep.store.getFreeCapacity() > 0) {
            if (factory[0] && factory[0].store.getUsedCapacity(RESOURCE_BATTERY) > 0) {
                // console.log(1);
                if (creep.withdraw(factory[0], RESOURCE_BATTERY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (factory[0] && factory[0].store.getUsedCapacity(RESOURCE_UTRIUM_BAR) > 0) {
                // console.log(2);
                if (creep.withdraw(factory[0], RESOURCE_UTRIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (factory[0] && factory[0].store.getUsedCapacity(RESOURCE_KEANIUM_BAR) > 0) {
                // console.log(3);
                if (creep.withdraw(factory[0], RESOURCE_KEANIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(factory[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (powerSpawn.length > 0 && powerSpawn[0].store.getUsedCapacity(RESOURCE_POWER) == 0 && creep.room.terminal.store.getUsedCapacity(RESOURCE_POWER) > 0) {
                // console.log(4);
                if (creep.withdraw(creep.room.terminal, RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (nuker.length > 0 && nuker[0].store.getFreeCapacity(RESOURCE_GHODIUM) > 0 && creep.room.terminal.store.getUsedCapacity(RESOURCE_GHODIUM) > 0) {
                // console.log(5);
                if (creep.withdraw(creep.room.terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
        else {
            if (creep.store.getUsedCapacity(RESOURCE_BATTERY) > 0) {
                if (creep.transfer(creep.room.terminal, RESOURCE_BATTERY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (creep.store.getUsedCapacity(RESOURCE_UTRIUM_BAR) > 0) {
                if (creep.transfer(creep.room.terminal, RESOURCE_UTRIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (creep.store.getUsedCapacity(RESOURCE_KEANIUM_BAR) > 0) {
                if (creep.transfer(creep.room.terminal, RESOURCE_KEANIUM_BAR) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (powerSpawn.length > 0 && creep.store.getUsedCapacity(RESOURCE_POWER) > 0) {
                if (creep.transfer(powerSpawn[0], RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(powerSpawn[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (nuker.length > 0 && creep.store.getUsedCapacity(RESOURCE_GHODIUM) > 0) {
                if (creep.transfer(nuker[0], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(nuker[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
}

module.exports = roleTransporterSpc;