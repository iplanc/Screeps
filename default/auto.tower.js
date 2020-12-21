/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-12-21 12:41:05
 * @FilePath: \Screeps\default\auto.tower.js
 */

var autoTower = {

	run: function() {
		for (var name in Game.rooms) {
			var towers = Game.rooms[name].find(FIND_STRUCTURES, {
				filter: (structure) => structure.structureType == STRUCTURE_TOWER
            });
            var Hostiles = Game.rooms[name].find(FIND_HOSTILE_CREEPS, {
                filter: (creep) =>  (creep.owner.username != 'TheBlackPrince') ||
                                    (creep.owner.username != 'bestkurisu')
            });

			if (Hostiles.length) {
				if (towers.length > 0) {
					for (var i = 0; i < towers.length; i++) console.log(towers[i].attack(Hostiles[0]));
				}
            }
            else {
                for (var i = 0; i < towers.length; i++) {
                    var closestDamagedStructure = towers[i].pos.findInRange(FIND_STRUCTURES, 20, {
						filter: (structure) => (structure.structureType != STRUCTURE_WALL) && (structure.structureType != STRUCTURE_RAMPART) && (structure.hits < structure.hitsMax)
					});
					closestDamagedStructure.sort((a,b) => a.hits - b.hits);
					if (closestDamagedStructure.length > 0 && towers[i] != null) {
						towers[i].repair(closestDamagedStructure[0]);
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
