var autoTower = {
    
    run: function() {
        var fixingMode = 0;
        
        for (var name in Game.rooms) {
            var towers = Game.rooms[name].find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_TOWER
            });
            
            if (towers.length) {
                var Hostiles = Game.rooms[name].find(FIND_HOSTILE_CREEPS, {
                    filter: (creep) =>  (creep.owner.username != 'TheBlackPrince') ||
                                        (creep.owner.username != 'bestkurisu')
                });
                if (Hostiles.length > 0) {
                    fixingMode = 0;
                    for (var i = 0; i < towers.length; i++) console.log(towers[i].attack(Hostiles[0]));
                }
                else {
                    fixingMode = 1;
                }
            }
            else {
                continue;
            }
            
            if (fixingMode) {
                if (towers[0]) {
                    var closestDamagedStructure = towers[0].pos.findInRange(FIND_STRUCTURES, 20, {
                        filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
                    });
                    closestDamagedStructure.sort((a,b) => a.hits - b.hits);
                    if (closestDamagedStructure.length > 0 && towers[0] != null) {
                        towers[0].repair(closestDamagedStructure[0]);
                    }
                }
                if (towers[1]) {
                    var closestDamagedStructure = towers[1].pos.findInRange(FIND_STRUCTURES, 20, {
                        filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
                    });
                    closestDamagedStructure.sort((a,b) => a.hits - b.hits);
                    if (closestDamagedStructure.length > 0) {
                        towers[1].repair(closestDamagedStructure[0]);
                    }
                }
                if (towers[2]) {
                    var closestDamagedStructure = towers[2].pos.findInRange(FIND_STRUCTURES, 20, {
                        filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
                    });
                    closestDamagedStructure.sort((a,b) => a.hits - b.hits);
                    if (closestDamagedStructure.length > 0) {
                        towers[2].repair(closestDamagedStructure[0]);
                    }
                }
            }
            
            var wounded = Game.rooms[name].find(FIND_MY_CREEPS, {
                filter: (creep) => creep.hits < creep.hitsMax
            });
            if (wounded) {
                wounded.sort((a,b) => a.hits - b.hits);
                for (var i = 0; i < towers.length; i++) towers[i].heal(wounded[0]);
            }
        }
    }
}

module.exports = autoTower;