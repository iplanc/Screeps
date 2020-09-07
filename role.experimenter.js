var roleExperimenter = {
    
    run: function(creep) {
        var targets = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (i) =>  (i.structureType == STRUCTURE_LAB)
        });
        
        var material = null;
        var storage = creep.room.storage;
        
        if (labs[0].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        if (labs[1].store.getFreeCapacity(RESOURCE_KEANIUM) > 0) material = 'K';
        //if (labs[2].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        if (labs[3].store.getFreeCapacity(RESOURCE_UTRIUM) > 0) material = 'U';
        if (labs[4].store.getFreeCapacity(RESOURCE_LEMERGIUM) > 0) material = 'L';
        //if (labs[5].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        //if (labs[6].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        //if (labs[7].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        //if (labs[8].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        //if (labs[9].store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 0) material = 'Z';
        
        if (creep.store.getFreeCapacity() > 0) {
            switch (materal) {
                case 'H':
                    if (creep.withdraw(storage, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'O':
                    if (creep.withdraw(storage, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'U':
                    if (creep.withdraw(storage, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'K':
                    if (creep.withdraw(storage, RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'L':
                    if (creep.withdraw(storage, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'Z':
                    if (creep.withdraw(storage, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'X':
                    if (creep.withdraw(storage, RESOURCE_CATALYST) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
                case 'G':
                    if (creep.withdraw(storage, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(storage, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                    break;
            }
        }
        else {
            switch (material) {
                case 'H':
                    break;
                case 'O':
                    break;
                case 'U':
                    if (creep.transfer(labs[3], RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(labs[3], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    break;
                case 'K':
                    if (creep.transfer(labs[1], RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(labs[1], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    break;
                case 'L':
                    if (creep.transfer(labs[4], RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(labs[4], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    break;
                case 'Z':
                    if (creep.transfer(labs[0], RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveto(labs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                    break;
                case 'X':
                    break;
                case 'G':
                    break;
            }
        }
    }
}

module.exports = roleExperimenter;