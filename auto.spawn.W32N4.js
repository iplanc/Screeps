/*
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:10:10
 * @FilePath: \Screeps\auto.spawn.W32N4.js
 */

var allowBuilder_W32N4 = 1;

var expectedHarvesters_W32N4 = 1;
var expectedHarvestersFar_W32N4 = 0;
var expectedMiner_W32N4 = 0;
var expectedRepairers_W32N4 = 0;
var expectedSuppliers_W32N4 = 1;
var expectedTransporters_W32N4 = 1;
var expectedUpgraders_W32N4 = 1;

var autoSpawn_W32N4 = {
	run: function() {
		var builders_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.pos.roomName == 'W32N4');
		var harvesters_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.pos.roomName == 'W32N4');
		var harvestersFar_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterFar' && creep.pos.roomName == 'W32N4');
		var miners_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner' && creep.pos.roomName == 'W32N4');
		var repairers_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.pos.roomName == 'W32N4');
		var suppliers_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'supplier' && creep.pos.roomName == 'W32N4');
		var transporters_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.pos.roomName == 'W32N4');
		var upgraders_W32N4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.pos.roomName == 'W32N4');

		//W32N4
		var spawn = Game.rooms['W32N4'].find(FIND_MY_STRUCTURES, {
			filter: (structure) => structure.structureType == STRUCTURE_SPAWN && structure.spawning == undefined
		});
		if (spawn.length > 0) {
			//200 Energy
			if (harvesters_W32N4.length < expectedHarvesters_W32N4) {
				var newName = 'Harvester_W32N4_' + Game.time;
				console.log('Spawning new Harvester for W32N4: ' + newName);
				spawn[0].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName,
					{memory: {role: 'harvester'}});
			}

			//200 Energy
			if (miners_W32N4.length < expectedMiner_W32N4) {
				var newName = 'Miner_W32N4_' + Game.time;
				console.log('Spawning new Miner: ' + newName);
				spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
					{memory: {role: 'miner'}});
			}

			//200 Energy
			//no construction site no builder, 1 builder only, allowed to spawn
			var constructionTarget = Game.rooms['W32N4'].find(FIND_CONSTRUCTION_SITES);
			if (constructionTarget[0] != null && builders_W32N4.length == 0 && allowBuilder_W32N4) {
				var newName = 'Builder_W32N4_' + Game.time;
				console.log('Spawning new Builder: ' + newName);
				spawn[0].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
				{memory: {role: 'builder'}});
			}

			//200 Energy
			if (repairers_W32N4.length < expectedRepairers_W32N4) {
				var newName = 'Repairers_W32N4_' + Game.time;
				console.log('Spawning new Repairers: ' + newName);
				spawn[0].spawnCreep([WORK,CARRY,MOVE], newName,
					{memory: {role: 'repairer'}});
			}

			//200 Energy
			if (transporters_W32N4.length < expectedTransporters_W32N4) {
				var newName = 'Transporter_W32N4_' + Game.time;
				console.log('Spawning new Transporter: ' + newName);
				spawn[0].spawnCreep([CARRY,CARRY,MOVE,MOVE], newName,
					{memory: {role: 'transporter'}});
			}

			//150 Energy
			if (suppliers_W32N4.length < expectedSuppliers_W32N4) {
				var newName = 'Supplier_W32N4_' + Game.time;
				console.log('Spawning new Supplier: ' + newName);
				spawn[0].spawnCreep([CARRY,CARRY,MOVE], newName,
					{memory: {role: 'supplier'}});
			}

			//200 Energy
			if (upgraders_W32N4.length < expectedUpgraders_W32N4) {
				var newName = 'Upgrader_W32N4_' + Game.time;
				console.log('Spawning new Upgrader: ' + newName);
				spawn[0].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
					{memory: {role: 'upgrader'}});
			}

			if (spawn[0].Spawning) {
				var spawningCreep = Game.creeps[spawn[0].spawning.name];
				spawn[0].room.visual.text(
					'🛠️' + spawningCreep.memory.role,
					spawn[0].pos.x + 1,
					spawn[0].pos.y,
					{align: 'left', opacity: 0.8});
			}
		}
	}
}

module.exports = autoSpawn_W32N4;
